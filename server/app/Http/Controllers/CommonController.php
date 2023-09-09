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

class CommonController extends Controller
{
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
        $avatar_url=$request->file('avatar_url');
        if($request->hasFile('avatar_url')){
            $path=$request->file('avatar_url')->store('public/images/profiles/');
            $path=basename($path);
            $profile->avatar_url=$path;
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
}
