<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\Organization;
use App\Models\OrganizationProfile;
use App\Models\SignupRequest;
use App\Models\OpportunityApplication;
use App\Models\Opportunity;
use App\Models\Profile;
use App\Models\Feedback;

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
    public function Feedback($id){
        $org=Organization::find($id);
        $opp_arr=$org->opportunities;
        $feedback=[];
        foreach($opp_arr as $o){
            $opp_feedback=$o->feedbacks;
           foreach($opp_feedback as $f){
            $avatar=Profile::where('user_id',$f->volunteer->id)->first()->avatar_url;
            $feedback[]=[
                'name'=>$f->volunteer->name,
                'profile'=>$avatar,
                'feedback'=>$f->feedback,
                'created'=>$f->created_at->format('F d, Y'),
                'topic'=>$f->opportunity->topic,
            ];
           }
        }
        return response()->json([
            'feedback'=>$feedback
        ]);        
    }
    public function writeFeedback(Request $request,$id){
        $request->validate([
            'feedback' => 'required|string|max:1500',
        ]);
        $volunteer=Auth::user();
        $opp=Opportunity::find($id);
        $feedback=new Feedback;
        $feedback->volunteer_id=$volunteer->id;
        $feedback->opp_id=$id;
        $feedback->feedback=$request->feedback;
        $feedback->save();
        return response()->json([
            'status'=>'success',
            'feedback'=>$feedback
        ]);        
    }
    public function viewApplications(){
        $volunteer=Auth::user();
        $opp_ids=$volunteer->opportunityApplications()
                                ->where('status', 'accepted')
                                ->pluck('opp_id');
        $opp_arr=[];
        foreach ($opp_ids as $id) {
            $opp=Opportunity::find($id);
            $opp_arr[]=[
                'id'=>$opp->id,
                'topic'=>$opp->topic,
                'description'=>$opp->description,
                'location'=>$opp->location,
                'coordinator'=>$opp->coordinator->name,
                'date'=>$opp->opportunity_date,
                'formatted'=>date("l, F Y", strtotime($opp->opportunity_date)),
                'vacancies'=>$opp->nb_volunteers,
                'tasks'=>$opp->tasks->pluck('description')
            ];            
        }
        return response()->json([
            'status'=>'success',
            'data'=>$opp_arr
        ]);        
    }
}
