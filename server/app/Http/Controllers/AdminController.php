<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Organization;
use App\Models\Group;
use App\Models\GroupMember;
use App\Models\GroupAdmin;
use App\Models\Chatroom;

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
}
