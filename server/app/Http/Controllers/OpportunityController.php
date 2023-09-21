<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Opportunity;
use App\Models\Task;
use App\Models\Feedback;
use App\Models\Profile;
use App\Models\OpportunityApplication;
use App\Models\Schedule;
use App\Models\User;

use Carbon\Carbon;


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
            'opportunity_date' => 'required',
            'location' => 'required|string|max:255',
            
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
                Task::where('opp_id', $id)->delete();
            }
            else{
                $opportunity=new Opportunity;
                                
            }
            $tasks=$request->tasks;
            $opportunity->topic=$request->topic;
            $opportunity->description=$request->description;
            $opportunity->opportunity_date=$request->opportunity_date;
            $opportunity->location=$request->location;
            $opportunity->nb_volunteers=$request->nb_volunteers;
            $opportunity->org_id=$org_id;
            $opportunity->coordinator_id=$coordinator->id;
            $opportunity->save();

            
            foreach($tasks as $t){
                
                $task=new Task;
            
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
        $info=[];
    
        $feed=Feedback::where('opp_id',$id)->get();
        foreach($feed as $f){
        $formatted_date='';
        $formatted_date = Carbon::parse($f->created_at)->format('F d, Y');
        $volunteer=$f->volunteer;
        $name=$volunteer->name;
        
        $profile=$volunteer->profile;
        $avatar=$profile->avatar_url;
        $info[]=[
            'feed'=>$f->feedback,
            'opp_id'=>$f->opp_id,
            'volunteer_id'=>$f->volunteer_id,
            'name'=>$name,
            'avatar'=>$avatar,
            'date'=>$f->created_at,
            'formatted'=>$formatted_date
        ];
        }


        return response()->json([
            'status'=>'success',
            'data'=>$info,
        ]);
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
            'applicants'=>$applicants
        ]);
    }  
    public function acceptApplicant(Request $request, $action='accept'){
        $application=OpportunityApplication::where('opp_id',$request->opp_id)
        ->where('user_id',$request->applicant_id)
        ->where('status','pending')->first();
        if($action==='accept'){
            $application->status='accepted';
            $application->save();
            $opp=Opportunity::find($request->opp_id);
                $opp->nb_volunteers=$opp->nb_volunteers-1;
                $opp->save();
            return response()->json([
                'data'=>$application,
                'message'=>'application accepted'
            ]);
        }
        elseif($action==='reject'){
            $application->status='rejected';
            $application->save();
            return response()->json([
                'data'=>$application,
                'message'=>'application rejected'
            ]);
        }
    }
    public function viewApplicant($id){
       $applicant=User::find($id);
       if($applicant){
        $info=$applicant->profile;
        $name=$applicant->name;
        $email=$applicant->email;
        $availability=[];
        $schedule=Schedule::all()->where('user_id',$id);
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
        $skills=$applicant->skills()->get()->pluck('name');
        return response()->json([
                'status'=>'success',
                'name'=>$name,
                'email'=>$email,
                'profile'=>$info,
                'schedule'=>$availability,
                'skills'=>$skills,
            ]);
       }
       else{
            return response()->json([
                'status'=>'failure',
                'message'=>'Invalid data'
            ]);
       }
    }
}
