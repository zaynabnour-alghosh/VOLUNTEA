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
}
