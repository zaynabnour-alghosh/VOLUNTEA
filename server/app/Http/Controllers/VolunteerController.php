<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\Organization;
use App\Models\OrganizationProfile;
use App\Models\SignupRequest;
use App\Models\OpportunityApplication;
use App\Models\Opportunity;

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
    //todo
    //send application-request
    // view all my accepted applications
    // get all org-feedback
    // cancel my application
    // give a feedback
    // need to update nb volunteers on admin (if accepting to decrease it)
    public function sendApplication($id,$action='send'){
        $volunteer=Auth::user();
        if($action==='add'){
            $app= new OpportunityApplication;
            $app->user_id=$volunteer->id;
            $app->opp_id=$id;
            $app->status='pending';
            $app->save();
            return response()->json([
                'status'=>'success',
                'message'=>'your application request has been sent successfully'
            ]);
        }
        elseif($action==='cancel'){
            $app= OpportunityApplication::where('user_id',$volunteer->id)->where('status','accepted')->where('opp_id',$id);
            if($app){
                $app->delete();
                $opp=Opportunity::find($id);
                $opp->nb_volunteers=$opp->nb_volunteers+1;
                $opp->save();
                return response()->json([
                    'status'=>'success',
                    'message'=>'your application has been cencelled successfully'
                ]);
            }
        }            
        else{
            return response()->json([
                'status'=>'failure',
                'message'=>'An error has occured while performing this operation'
            ]);
        }
    }
}