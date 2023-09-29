<?php

namespace App\Http\Controllers;
use App\Services\FCMService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Organization;
use App\Models\Group;
use App\Models\GroupMember;
use App\Models\GroupAdmin;
use App\Models\Chatroom;
use App\Models\User;
use App\Models\Announcement;
use App\Models\Meeting;
use App\Models\Certification;
use App\Models\Opportunity;
use App\Models\SignupRequest;
use App\Models\Notification;

use Carbon\Carbon;


class AdminController extends Controller
{
    public function createOrganization(Request $request){
        $admin = Auth::user();
        $code=$request->code;
        $org=New Organization;
        $org->code=$code;
        $org->admin_id=$admin->id;
        $org->save();
        return response()->json([
            'status'=>'success',
            'founder'=>$admin->name,
            'data'=>$org
        ]);
    }
     public function createGroup(Request $request){
        $admin = Auth::user();
        $org_id=$request->org_id;
        $members=$request->members;
        $group=new Group;
        $group->name=$request->name;
        $group->admin_id=$admin->id;
        $group->org_id=$org_id;
        $group->save();
        foreach($members as $m){
            $member=new GroupMember;
            $member->user_id=$m;
            $member->group_id=$group->id;
            $member->save();
            $chatroom=new Chatroom;
            $chatroom->org_id=$org_id;
            $chatroom->conversation_id=2;
            $chatroom->user_id=$member->user_id;
            $chatroom->group_id=$group->id;
            $chatroom->save();
        }
        $group_admin=new GroupAdmin;
        $group_admin->user_id=$request->member_admin;
        $group_admin->is_group_admin=true;
        $group_admin->save();
        return response()->json([
            'status'=>'success',
            'group'=>$group,
            'members'=>$group->members->pluck('name'),
            'admin'=>$group_admin->user->pluck('name'),
            'created_by'=>$admin->name,
        ]);
     }
     public function removeVolunteer($id){
        $volunteer=User::find($id);
        if(!$volunteer){
            return response()->json([
                'status'=>'error',
                'message'=>'delete operation failed'
            ]);
        }
        else{
            $volunteer->delete();
            return response()->json([
                'status'=>'success',
                'message'=>'delete operation successful'
            ]);
        }
     }
     public function makeAnnouncement(Request $request){
        $request->validate([
            'header' => 'required|string|max:255',
            'topic' => 'required|string|max:255',
            'description' => 'required|string|max:1500',
        ]);
        $admin=Auth::user();
        $announcemnt=new Announcement;
        $announcemnt->org_id=$request->org_id;
        $announcemnt->admin_id=$admin->id;
        $announcemnt->header=$request->header;
        $announcemnt->topic=$request->topic;
        $announcemnt->description=$request->description;
        $announcemnt->date_at=$request->date_at;
        $announcemnt->from=$request->from;
        $announcemnt->to=$request->to;
        $announcemnt->save();
        $code=Organization::find($request->org_id)->first()->code;
        $ids=SignupRequest::all()->where('status','accepted')->where('org_code',$code)->pluck('user_id');
        foreach($ids as $id){
            $n=new Notification;
            $n->user_id=$id;
            $n->org_id=$request->org_id;
            $n->topic="New Announcement: ".$request->header;
            $n->content=$admin->name." posted: ".$request->topic;
            $n->save();

            $user=User::find($id);
            $token=$user->fcm_token;
            $notificationData = json_encode([
                'data' => [
                    'message' => 'New Announcement',
                    'title' =>$admin->name . "made a new announcement.",
                ],
             'to' => $token
            ]);
            $this->sendNotificationrToUser($notificationData);


        }            
        $carbonDate = Carbon::parse($announcemnt->created_at);
        $a_date = $carbonDate->format('M d Y'); 
        $a_time = $carbonDate->format('H:i');
        return response()->json([           
            'status'=>'success',
            'data'=>$announcemnt,
            'admin'=>$admin->name,
            'on'=>$a_date,
            'at'=>$a_time
        ]);
    }
    public function scheduleMeeting(Request $request){
        $request->validate([
            'link' => 'required|string|max:500',
            'description' => 'required|string|max:1500',
            'date_at'=>'required|date',
        ]);
        $admin=Auth::user();
        $meeting=new Meeting;
        $meeting->org_id=$request->org_id;
        $meeting->admin_id=$admin->id;
        $meeting->link=$request->link;
        $meeting->description=$request->description;
        $meeting->date_at=$request->date_at;
        $meeting->location=$request->location;
        $meeting->save();
        $code=Organization::find($request->org_id)->first()->code;
        $ids=SignupRequest::all()->where('status','accepted')->where('org_code',$code)->pluck('user_id');
        foreach($ids as $id){
            $n=new Notification;
            $n->user_id=$id;
            $n->org_id=$request->org_id;
            $n->topic="New Meeting";
            $n->content="Join ".$admin->name."'s meeting here ".$request->link;
            $n->save();

            $user=User::find($id);
            $token=$user->fcm_token;
            $notificationData = json_encode([
                'data' => [
                    'message' => 'New Meeting',
                    'title' => 'Dear ' . $user->name . ', Join ' . $admin->name . "'s meeting here " . $request->link,
                ],
             'to' => $token
            ]);
            $this->sendNotificationrToUser($notificationData);
        }    
       
        
        $carbonDate = Carbon::parse($meeting->created_at);
        $a_date = $carbonDate->format('M d Y'); 
        $a_time = $carbonDate->format('H:i');
        $formatted_date = Carbon::parse($request->date_at)->format('F d, Y');
        return response()->json([
            'status'=>'success',
            'data'=>$meeting,
            'admin'=>$admin->name,
            'date'=>$formatted_date,
            'on'=>$a_date,
            'at'=>$a_time
        ]);
    }
    public function certifyVolunteer(Request $request){
        $request->validate([
            'content' => 'required|string|max:1500',
        ]);
        $admin=Auth::user();
        $certification=new Certification;
        $certification->admin_id=$admin->id;
        $certification->volunteer_id=$request->volunteer_id;
        $certification->opp_id=$request->opp_id;
        $certification->content=$request->content;
        $certification->save();
        $opportunity=Opportunity::find($request->opp_id);
        $org_id=$opportunity->org_id;
        $n=new Notification;
        $n->user_id=$request->volunteer_id;
        $n->org_id=$org_id;
        $n->topic="New Badge! Congrats!";
        $n->content=$admin->name." certified you on your latest activity!";
        $n->save();
        $carbonDate = Carbon::parse($certification->created_at);
        $a_date = $carbonDate->format('M d Y'); 
        $a_time = $carbonDate->format('H:i');
        
        $certification->topic=$opportunity->topic;        
        $volunteer=User::find($request->volunteer_id);
        $certification->volunteer=$volunteer->name;
        $certification->admin=$admin->name;
        $certification->date=$certification->created_at->format('F d, Y');
        return response()->json([
            'status'=>'success',
            'data'=>$certification,
            'on'=>$a_date,
            'at'=>$a_time
        ]);
    }
    public function acceptRequest(Request $request,$action='accept'){
        $admin=Auth::user();
        $org=Organization::where('admin_id',$admin->id)->where('code',$request->code)->first();
        // $code=$org->code;
        $sign_request=SignupRequest::where('user_id',$request->id)->where('org_code',$request->code)->first();
        if($action==='accept'){
            $sign_request->status='accepted';
            $sign_request->save();
            $chatroom_admin_user=new Chatroom;
            $chatroom_admin_user->org_id=$org->id;
            $chatroom_admin_user->conversation_id=1;
            $chatroom_admin_user->user_id=$admin->id;
            $chatroom_admin_user->other_user_id=$request->id;
            $chatroom_admin_user->save();
            $members_ids=SignupRequest::all()->where('org_code',$request->code)->where('status','accepted')->pluck('user_id');
            foreach($members_ids as $mid){
                $chatroom_user_member=new Chatroom;
                $chatroom_user_member->org_id=$org->id;
                $chatroom_user_member->conversation_id=1;
                $chatroom_user_member->user_id=$request->id;
                $chatroom_user_member->other_user_id=$mid;
                $chatroom_user_member->save();
            }
            $chatroom_user_admin=new Chatroom;
            $chatroom_user_admin->org_id=$org->id;
            $chatroom_user_admin->conversation_id=1;
            $chatroom_user_admin->user_id=$request->id;
            $chatroom_user_admin->other_user_id=$admin->id;
            $chatroom_user_admin->save();

            return response()->json([
                'status'=>'success',
                'message'=>'application accepted successfully.'
            ]);    
        }
        elseif($action==='reject'){
            $sign_request->status='rejected';
            $sign_request->save();
            return response()->json([
                'status'=>'success',
                'message'=>'application rejected successfully.'
            ]); 
        }       
    }    
    
    public function sendNotificationrToUser($d)
    {
        $data = json_decode($d, true);
       $user = $data['to'];
        $notificationData = $data['data'];
       FCMService::send(
        $user,
        $notificationData
    );
      return response()->json([
        'status' => 'success',
        'data' => $notificationData,"user"=>$user
      ]);
    }











}


