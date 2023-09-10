<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use App\Models\Profile;
use App\Models\Organization;
use App\Models\SignupRequest;
use App\Models\Meeting;
use App\Models\Announcement;
use App\Models\Opportunity;
use App\Models\Task;
use App\Models\Skill;
use App\Models\VolunteerSkill;
use App\Models\Schedule;
use App\Models\Chatroom;
use Carbon\Carbon;


class CommonController extends Controller
{
    public function forgetPassword(Request $request){
        $user=User::where("email", $request->email)->first();
        $user->password=Hash::make($request->password);        
        $user->save();
        return response()->json(["updated_info"=>$user,"state"=>"successully updated"]);
    }

    public function getAllVolunteers($id){
        $auth_user=Auth::user();
        $org=Organization::find($id);
        $code=$org->code;
        $volunteers_ids=SignupRequest::all()->where('org_code',$code)->where('user_id','!=',$auth_user->id)->pluck('user_id');
        $members=[];
        foreach($volunteers_ids as $i){
            $member=User::find($i);
            if($member){
                $name=$member->name;
                $email=$member->email;
                $profile=Profile::where('user_id',$i)->first();                
                $avatar=$profile->avatar_url;
                $members[]=[
                    'id'=>$i,
                    'name'=>$name,
                    'email'=>$email,
                    'avatar'=>$avatar
                ];
            }
        }
        $admin_org_id=$org->admin_id;
        $admin_org=User::find($admin_org_id);

        $admin_name=$admin_org->name;
        $admin_email=$admin_org->email;
        $admin_avatar=Profile::where('user_id',$admin_org_id)->first()->avatar_url;
        if($auth_user->id!=$admin_org_id){
            $members[]=[
                'name'=>$admin_name,
                'email'=>$admin_email,
                'avatar'=>$admin_avatar
            ];
        }
        return response()->json([
            'status'=>'succuess',
            'mambers'=>$members
        ]);
    }
    public function getStream($id){
        $announcements = Announcement::all()->where('org_id',$id);
        $meetings = Meeting::all()->where('org_id',$id);
        $stream=$announcements->concat($meetings)->toArray();
        usort($stream, function ($a, $b) {
            return strtotime($a['created_at']) - strtotime($b['created_at']);
        });
        foreach ($stream as &$s) {
            $admin = User::find($s['admin_id']);
            $s['admin_name'] = $admin ? $admin->name:' ';
            $s['created_at'] = date('F d, Y 00:00', strtotime($s['created_at']));
        }
        return response()->json([
            'status'=>'succuess',
            'stream'=>$stream
        ]);
    }
    public function getOpportunities($id,$name='all'){
        $opportunities= Opportunity::all()->where('org_id',$id);
        $opp=[];
        if ($name==='all'){
            foreach($opportunities as $op){
                $opp_id=$op->id;
                $name=$op->topic;
                $opp[]=[
                    'id'=>$opp_id,
                    'name'=>$name
                ];
            }
        }
        else{
            foreach($opportunities as $op){
                $tasks=Task::all()->where('opp_id',$op->id);
                $coordinator=User::where('id',$op->coordinator_id)->first();          
                $op->coordinator=$coordinator->name;
                $opp[]=['opportunity'=>$op];
            }
        }
       
        return response()->json([
            'status'=>'success',
            'data'=>$opp
        ]);
    }
    //todo
    //fill profile info
    //update profile info
    public function addOrupdateProfile(Request $request,$action='update'){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'dob'=>'required|date',
            'description' => 'required|string|max:1500',
            'avatar_url' => 'required|image',            
            'address' => 'required|string|max:255',
            'mobile' => 'required|string|min:6',
        ]);
        $user=Auth::user();
        $user->name=$request->name;
        $user->email=$request->email;
        if($action==='update'){
            $profile=Profile::where('user_id',$user->id)->first();           
        }
        else{
            $profile=New Profile;
        }
        $user->name=$request->name;
        $user->email=$request->email;
        $profile->gender=$request->gender;
        $profile->address=$request->address;
        $profile->dob=$request->dob;
        $profile->description=$request->description;
        $profile->mobile=$request->mobile;
        $old_event=$profile->avatar_url;

        $avatar_url=$request->file('avatar_url');
        if($request->hasFile('avatar_url')){
            $path=$request->file('avatar_url')->store('public/images/profiles/');
            $path=basename($path);
            $profile->avatar_url=$path;
        }
        if (Storage::exists('public/images/profiles/' . $old_profile)) {
            Storage::delete('public/images/profiles/' . $old_profile);
        }
        $profile->user_id=$user->id;
        $user->save();
        $profile->save();
        return response()->json([
            'status'=>'success',
            'user'=>$user->name,
            'email'=>$user->email,
            'profile'=>$profile
        ]);
    }
    public function addSkills(Request $request){
        $user=Auth::user();
        $skills=$request->skills;
        foreach ($skills as $s){
            $existing_skill=Skill::where('name',$s)->first();
            if(!$existing_skill){
                $skill=new Skill();
                $skill->name=$s;
                $skill->save();
                $volunteer_skill=new VolunteerSkill;
                $volunteer_skill->user_id=$user->id;
                $volunteer_skill->skill_id=$skill->id;
                $volunteer_skill->save();
            }
            else{
                $volunteer_skill=new VolunteerSkill;
                $volunteer_skill->user_id=$user->id;
                $volunteer_skill->skill_id=$existing_skill->id;
                $volunteer_skill->save();
            }            
        }
        $skillNames=$user->skills()->pluck('name');
        return response()->json([
            'status'=>'success',
            'data'=>$skillNames
        ]);        
    }
    public function addOrupdateSchedule(Request $request,$action='update'){
        $request->validate([
            'weekday' => 'required|string|max:255',
            'start_time' => 'required',
            'end_time' => 'required',
        ]);
        $user=Auth::user();
        if($action==='update'){
            $schedule=Schedule::where('user_id',$user->id)->first();           
        }
        elseif($action==='add'){
            $schedule=New Schedule;
        }
        $schedule->weekday=$request->weekday;
        $schedule->title=$request->title;
        $schedule->event_date=$request->event_date;
        $schedule->start_time=$request->start_time;
        $schedule->end_time=$request->end_time;       
        $schedule->user_id=$user->id;
        $user->save();
        $formatted_start_time = '';
        $formatted_end_time = '';
        $formatted_date='';
        if($request->start_time){
            $start_time = Carbon::createFromFormat('H:i:s', $request->start_time);
            $formatted_start_time = $start_time->format('h:i:s A');
        }
        if($request->end_time){
            $end_time = Carbon::createFromFormat('H:i:s', $request->end_time);
            $formatted_end_time = $end_time->format('h:i:s A');
        }
        if($request->event_date){
            $formatted_date = Carbon::parse($request->event_date)->format('F d, Y');
        }      
        $schedule->save();
        return response()->json([
            'status'=>'success',
            'user'=>$user->name,
            'data'=>$schedule,
            'start'=>$formatted_start_time,
            'end'=>$formatted_end_time,
            'date'=>$formatted_date
        ]);
    }
    public function deleteUser($id){
        $user=User::find($id);
        if($user){
            $user->delete();
            return response()->json([
                'status'=>'success'
            ]);
        }
        else{
            return response()->json([
                'status'=>'failure'
            ]);
        }
    }
    // chatrooms (group name/other volunteername)+last message/+date
    public function viewChatrooms($id){
        $user=Auth::user();
        $chatrooms=Chatroom::all()->where('user_id',$user->id)->where('org_id',$id)->where('other_user_id','!=',$user->id);
        $single=[];
        $group=[];
        $chatboxes=[];
        foreach($chatrooms as $chatroom){
            $other_avatar=' ';
            if($chatroom->conversation_id==1){
                $chatbox_type='Single';
                $other=$chatroom->otherUser->name;  
                $profile=Profile::where('user_id',$chatroom->otherUser->id)->first();
                $avatar=$profile->avatar_url;
                
                $single[]=[
                    'id'=>$chatroom->id,
                    'other'=>$other,
                    'avatar'=>$avatar                    
                ];
            }
            elseif($chatroom->conversation_id==2){
                $chatbox_type='Group';
                $other=$chatroom->group->name;
                $group[]=[
                    'id'=>$chatroom->id,
                    'other'=>$other,
                ];
            }            
        }        
        return response()->json([
            'status'=>'success',
            'single'=>$single,
            'group'=>$group
        ]);
    }

}
