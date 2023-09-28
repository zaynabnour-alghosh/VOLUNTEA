<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

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
use App\Models\Notification;

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
                $avatar=$profile->avatar_url ?? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAMFBMVEXi4uKrq6uoqKjl5eXd3d3Ly8u1tbXW1tavr6/CwsLR0dG7u7vGxsalpaXOzs7a2tr7SBtpAAADAklEQVRoge2a25KEIAxEhSAiXvj/v11gdlfLdRwSG62tsh+m5u3YIYRLaJpHjx49evTo0aNHj+4SUWNM6LoumPifriWHdrBORWnlnO29ueoDiMJoldZa/Sr+t625gk/BrsHLF6ihqc2P7GkH/eJPQ1X/1PRqz/fiv60IN+6InfnVwk/zofFvvOuq4Kn9zM7yFfDUv023rf0Zjqex0HnCo92TL3We6Dpg6aGcnfAOS7flcc/4ARh76nlw7NDz4p6Fiz0NXOvRfIsyH/hwnHmJdaB5xlRf0R2ETrPEulJTgOBFgY/mRwTdiNhRFgCnTjTsyTyCzljcNnTAPkM23zIdMfBWCFe6v5OuEAudu5Nu5HTAlPu/9P8+7vfm/L3VRl5pJ8DOkrzYuzkNjxLCISusOO0gZb785LzRBDrIy7YXGgMnUegx2zpx1kMyPuGZJ9hsHZJzWR2f7lDWRSdo2CGy4S+zesCx06aeaR57ZUojZ9KjCs2CZyy00EH/VjEeVWdE+DrwsnmnFf6e9Bv/+cJSK8ydwS7+Y/Rx9XVX/qBBoG2du/lF1LRuvyukra/eFkp8P2yaFFprN3QXsDOfjO/tFBWx6df2V6F/v4BM5/3sfbi4E7r+hDuwj1Lk74h9gobOz22Uzx3469BNmHubarrOilvIqzrw1HS5+/6n0jk7hsqTnsy4331/rW92rjgGRMcN8NQSGCvhyfRTQQ9at1Xi3xb0v1/+4U1oMoyzHPoJQFHjf22/Q8L7t4n+jg/cWwpO0BNqh/f5rceue8hBsuChSUW8FI7BC8Z8wZ8ce8mVzaLp3JGOf2WycX9m4rFemuzjT1weiVuwi+RXxfLGwMq8dOil18MbvPBkeaIbtZYs9mfz/Ud6ltAFj2z2JXmAgbIunPRnp/pKbLq8EfZXE3+ng0n4l9iLnbgLtyduvUWUuRWdeXELqjQ/YlYcQS/kUKyHlrjJ/hLvqaGsBXdAZ+2vwcPOfASBHnZWg0z6pO69NKPcoZOOl3bYWpPpjHqDTvm3Sf8F43MgtyvZSFwAAAAASUVORK5CYII=";
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
            'members'=>$members
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
            if (isset($s['from']) && isset($s['to'])) {
                $s['from'] = \DateTime::createFromFormat('H:i:s', $s['from'])->format('h:i A');
                $s['to'] = \DateTime::createFromFormat('H:i:s', $s['to'])->format('h:i A');
            }
            $admin = User::find($s['admin_id']);
            $s['admin_name'] = $admin ? $admin->name:' ';
            $dateTime = new \DateTime($s['created_at']);
            $s['date'] = $dateTime->format('F d, Y');
            $s['time'] = $dateTime->format('h:i A');
        }
        $stream = array_reverse($stream);
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

    public function getAllOpportunities($id){
        $opps= Opportunity::all()->where('org_id',$id);
        $all=[];
        foreach($opps as $opp){
            $formatted_date='';            
            $opp_date = Carbon::parse($opp->event_date)->format('F d, Y');                

            $opp_tasks=$opp->tasks()->pluck('description');
            $opp->tasks=$opp_tasks;
            $coordinator=User::find($opp->coordinator_id);
            $opp->coordinator=$coordinator->name; 
            $opp->date=$opp_date;          
            $all[]=$opp;
       }
        return response()->json([
            'status'=>'success',
            'data'=>$all
        ]);
    }
    public function getAllNotifications($id){
        $user=Auth::user();
        $nots= Notifications::all()->where('org_id',$id)->where('user_id',$user->id);
        $all=[];
        foreach($nots as $not){
            $carbonDate = Carbon::parse($certification->created_at);
            $n_date = $carbonDate->format('M d Y'); 
            $n_time = $carbonDate->format('H:i');            
            $opp_date = Carbon::parse($opp->event_date)->format('F d, Y');                
            $title=$not->topic;
            $content=$not->content;
            $time=$n_time;
            $date=$n_date;
            $all[]=[
                'topic'=>$title,
                'content'=>$content,
                'time'=>$time,
                'date'=>$date,
            ];
       }
        return response()->json([
            'status'=>'success',
            'data'=>$all
        ]);
    }
    public function deleteAllNotifications($id){
        $user=Auth::user();
        $nots= Notifications::all()->where('org_id',$id)->where('user_id',$user->id);
        foreach($nots as $not){
            $not->delete();
       }
        return response()->json([
            'status'=>'success',
        ]);
    }

    public function addOrupdateProfile(Request $request,$action='update'){
        $request->validate([
            'name' => 'string|max:255',
            'email' => 'string|max:255',
            'gender' => 'required|string|max:255',
            'dob'=>'required|date',
            'description' => 'required|string|max:1500',
            'avatar_url' => 'required',            
            'address' => 'required|string|max:255',
            'mobile' => 'required|string|min:6',
        ]);
        $user=Auth::user();
        if($action==='update'){
            
            $user->name=$request->name;
            $user->email=$request->email;
            $profile=Profile::where('user_id',$user->id)->first();           
        }
        else{
            $profile=New Profile;
            $profile->user_id=$user->id;
        }
        $profile->gender=$request->gender;
        $profile->address=$request->address;
        $profile->dob=$request->dob;
        $profile->description=$request->description;
        $profile->mobile=$request->mobile;
        $old_profile=$profile->avatar_url;

        $avatar_url=$request->file('avatar_url');
        
        if($request->hasFile('avatar_url')){
            $path=$request->file('avatar_url')->store('public/images/profiles/');
            $path=basename($path);
            $profile->avatar_url=$path;
        }
        if (Storage::exists('public/images/profiles/' . $old_profile)) {
            Storage::delete('public/images/profiles/' . $old_profile);
        }
        
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
        $schedule->save();
        return response()->json([
            'status'=>'success',
            'user'=>$user->name,
            'data'=>$schedule,
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
    public function getAuthUser(){
        $user=Auth::user();
        $info=$user->profile;
        $name=$user->name;
        $email=$user->email;
        $availability=[];
        $schedule=Schedule::all()->where('user_id',$user->id);
        foreach($schedule as $s){
            $day=$s->weekday;
            $start = Carbon::createFromFormat('H:i:s', $s->start_time);
            $formattedStart = $start->format('h:i:s A');
            $end = Carbon::createFromFormat('H:i:s', $s->end_time);
            $formattedEnd = $end->format('h:i:s A');

            $availability[] = [
                'day'=>$day,
                'start'=>$formattedStart,
                'end'=>$formattedEnd
            ];
        }
        $skills=$user->skills()->get()->pluck('name');
        return response()->json([
                'status'=>'success',
                'name'=>$name,
                'email'=>$email,
                'profile'=>$info,
                'schedule'=>$availability,
                'skills'=>$skills,
            ]);
    }

}
