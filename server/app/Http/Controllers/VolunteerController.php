<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\Organization;
use App\Models\OrganizationProfile;
use App\Models\SignupRequest;
use Illuminate\Http\Request;
use Carbon\Carbon;


class VolunteerController extends Controller
{
    public function viewDashboardDetails($id){
        $volunteer=Auth::user();
        $org=Organization::find($id);
        $org_profile=OrganizationProfile::where('org_id',$org->id)->first();
        $joined_on=SignupRequest::where('user_id',$volunteer->id)
                                ->where('org_code',$org->code)
                                ->where('status','accepted')
                                ->first()->created_at;
        $certifications=$volunteer->volunteerCertifications;
        $cert_arr=[];
        foreach($certifications as $c){
            $admin_name=$c->admin;
            $volunteer_name=$c->volunteer;
            $issued=$c->created_at->format('F d, Y');
            $content=$c->content;
            $topic=$c->opportunity->topic;
            $cert_arr[]=[
                'id'=>$c->id,
                'admin'=>$admin_name->name,
                'volunteer'=>$volunteer_name->name,
                'content'=>$content,
                'issued'=>$issued,
                'topic'=>$topic,
            ];
        }
        return response()->json([
            'status'=>'success',
            'logo'=>$org_profile->logo_url,
            'name'=>$org_profile->name,
            'location'=>$org_profile->location,
            'phone'=>$org_profile->phone,
            'description'=>$org_profile->description,
            'joined'=>$joined_on->format('F d, Y'),
            'badges'=>$cert_arr
        ]); 
    }
}
