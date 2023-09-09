<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Opportunity;
use App\Models\Task;
use App\Models\Feedback;
use App\Models\Profile;
use App\Models\OpportunityApplication;


class OpportunityController extends Controller
{
    //to do:
    //create opportunity (by admin)
    //delete opportunity
    //edit opportunity
    //view opportunity details+ its feedback
    //oppotunity has many tasks so ima add them in one api\
    public function createOpportunity(Request $request,$id=null){
        $request->validate([
            'topic' => 'required|string|max:255',
            'description' => 'required|string|max:1500',
            'opportunity_date' => 'required|date',
            'location' => 'required|string|max:255',
            'nb_volunteers' => 'required|integer'
        ]);

        $coordinator=Auth::user();
        $org_id=$request->org_id;

        if (!$coordinator || $coordinator->role_id != 1){
            return response()->json([
                'status' => 'Permission denied or Invalid input',
            ], 422);
        }
        else{
            if($id){
                $opportunity=Opportunity:: find($id);
                $tasks=Task::all()->where('opp_Id',$id);
            }
            else{
                $opportunity=new Opportunity;
                $tasks=$request->tasks;                
            }
            $opportunity->topic=$request->topic;
            $opportunity->description=$request->description;
            $opportunity->opportunity_date=$request->opportunity_date;
            $opportunity->location=$request->location;
            $opportunity->nb_volunteers=$request->nb_volunteers;
            $opportunity->org_id=$org_id;
            $opportunity->coordinator_id=$coordinator->id;
            $opportunity->save();

            
            foreach($tasks as $t){
                if(!$id){
                    $task=new Task;
                }
                $task->description=$t;
                $task->opp_id=$opportunity->id;
                $task->save();
            }

            $opportunity->coordinator=$coordinator->name;
           
            $opportunity->tasks=$opportunity->tasks()->pluck('description');
            return response()->json([
                'status'=>'success',
                'data'=>$opportunity
            ]);
        }
    }
    public function deleteOpportunity($id){
        $opportunity=Opportunity::find($id);
        if ($opportunity){
            $opportunity->delete();
            return response()->json([
                'status'=>'deleted successfully',
            ]);
        }
        else{
            return response()->json([
                'status'=>'failure',
                'message'=>'Invalid operation'
            ]);
        }
    }
    public function viewOpportunityDetails($id){
        $opportunity=Opportunity::find($id);
        $info=[];
        if ($opportunity){
            $opportunity->tasks=$opportunity->tasks()->pluck('description');
           $feedback=$opportunity->feedbacks;
           foreach($feedback as $f){
            $volunteer_info=$f->volunteer;
            if ($volunteer_info) {
                $volunteer_id = $volunteer_info->id;
                $volunteer_profile = Profile::where('user_id',$volunteer_id)->first();
                if ($volunteer_profile) {
                    $volunteer_info->avatar = $volunteer_profile->avatar_url;
                    $info[] = $volunteer_info;
                }
            }
           }
            return response()->json([
                'status'=>'success',
                'data'=>$opportunity,
            ]);
        }else{
            return response()->json([
                'status'=>'failure',
                'message'=>'Invalid data'
            ]);
        }
    }
    
    //  todo:
    // view application-opp
    // accept application
    // reject application
    // view user-applicat-profile
    public function viewOpportunityApplications($id){
        $applications=OpportunityApplication::all()->where('opp_id',$id)->where('status','pending');
        $applicants=[];
        foreach($applications as $app){
            $applicant_id=$app->user->id;
            $profile=Profile::where('user_id',$applicant_id)->first();
            $applicant_name=$app->user->name;
            $applicant_avatar=$profile->avatar_url;
            $applicants[] = [
                'id'=>$applicant_id,
                'name'=>$applicant_name,
                'avatar'=>$applicant_avatar
            ];
        }
        return response()->json([
            'status'=>'success',
            'applicats'=>$applicants
        ]);
    }  
    public function acceptApplicant(Request $request){
        $application=OpportunityApplication::where('opp_id',$request->opp_id)->where('user_id',$request->applicant_id)->first();
        $application->status='accepted';
        $application->save();
        return response()->json([
            'status'=>'success',
            'message'=>'application accepted'
        ]);
    }
}
