<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

use App\Models\Organization;
use App\Models\OrganizationProfile;
use App\Models\Impact;
use App\Models\Mission;
use App\Models\Event;
use Carbon\Carbon;

class OrganizationController extends Controller
{
    public function addInformation(Request $request,$id = "add"){
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1500',
            'logo_url' => 'required|image',
            'face_link'=>'required|url',
            'insta_link'=>'required|url',
            'whats_link'=>'required|url',
            'location' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:organization_profiles',
            'phone' => 'required|string|min:6',
        ]);

        if($id == "add"){
            $profile = new OrganizationProfile;
        }else{
            $profile = OrganizationProfile::find($id);
        }
        
        $org_id=$request->org_id;
        $profile=New OrganizationProfile;
        $profile->name=$request->name;
        $profile->description=$request->description;
        $profile->face_link=$request->face_link;
        $profile->insta_link=$request->insta_link;
        $profile->whats_link=$request->whats_link;
        $profile->location=$request->location;
        $profile->email=$request->email;
        $profile->phone=$request->phone;
        $logo_url=$request->file('logo_url');
        if($request->hasFile('logo_url')){
            $path=$request->file('logo_url')->store('public/images/organizations/');
            $path=basename($path);
            $profile->logo_url=$path;
        }
        $profile->org_id=$org_id;
        $profile->save();
        return response()->json([
            'status'=>'success',
            'data'=>$profile
        ]);
    }
    public function addImpact(Request $request){
        $request->validate([
            'header' => 'required|string|max:255',
            'description' => 'required|string|max:1500',
            'image_url' => 'required|image'
        ]);
        $org_id=$request->org_id;
        $impact=New Impact;
        $impact->org_id=$org_id;
        $impact->header=$request->header;
        $impact->description=$request->description;
        $image_url=$request->file('image_url');
        if($request->hasFile('image_url')){
            $path=$request->file('image_url')->store('public/images/impacts/');
            $path=basename($path);
            $impact->image_url=$path;
        }
        $impact->save();
        // $organization=OrganizationProfile::where('org_id',$org_id)->first();
        // $impact->organization=$organization->name;
        return response()->json([
            'status'=>'success',
            'data'=>$impact
        ]);
    }
    public function addMission(Request $request){
        $request->validate([
            'header' => 'required|string|max:255',
            'description' => 'required|string|max:1500',
        ]);
        $org_id=$request->org_id;
        $mission=New Mission;
        $mission->org_id=$org_id;
        $mission->header=$request->header;
        $mission->description=$request->description;
        $mission->save();
        // $organization=OrganizationProfile::where('org_id',$org_id)->first();
        // $mission->organization=$organization->name;
        return response()->json([
            'status'=>'success',
            'data'=>$mission
        ]);
    }
    public function addEvent(Request $request){
        $request->validate([
            'topic' => 'required|string|max:255',
            'description' => 'required|string|max:1500',
            'image_url' => 'required|image',
            'location' => 'string|max:1000',
        ]);
        $org_id=$request->org_id;
        $event=New Event;
        $event->org_id=$org_id;
        $event->topic=$request->topic;
        $event->description=$request->description;
        $image_url=$request->file('image_url');
        if($request->hasFile('image_url')){
            $path=$request->file('image_url')->store('public/images/events/');
            $path=basename($path);
            $event->image_url=$path;
        }
        $event->event_date=$request->event_date;
        $event->location=$request->location;
        $formattedEventDate = Carbon::parse($request->event_date)->format('F d, Y');
        $event->save();
        // $organization=OrganizationProfile::where('org_id',$org_id)->first();
        // $event->organization=$organization->name;
        return response()->json([
            'status'=>'success',
            'data'=>$event,
            'date'=>$formattedEventDate,
        ]);
    }
    public function getOrganizationInfo($id){
        $profile=OrganizationProfile::find($id);
        $org=Organization::find($id);
        $impacts=$org->impacts;
        $missions=$org->missions;
        $events=$org->events;
       
        if ($profile){
            return response()->json([
                'status'=>'success',
                'data'=>$profile,
                'impacts'=>$impacts,
                'missions'=>$missions,
                'events'=>$events
            ]);
        }
        else{
            return response()->json([
                'status'=>'failure',
                'message'=>'An error has occured, Invalid Input'
            ]);
        }
    }
    public function editOrganizationInfo(Request $request){
        $user=Auth::user();
        $org_id = $request->org_id;
        $organization = OrganizationProfile::find($org_id);
        if (!$user || $user->role_id != 1){
            return response()->json([
                'status' => 'Permission denied or Invalid input',
            ], 422);
        }
        else{
            $organization->name=$request->name ?? $organization->name;
            $organization->description=$request->description ?? $organization->description;
            $organization->face_link=$request->face_link ?? $organization->face_link;
            $organization->insta_link=$request->insta_link ?? $organization->insta_link;
            $organization->whats_link=$request->whats_link ?? $organization->whats_link;
            $organization->location=$request->location ?? $organization->location;
            $organization->email=$request->email ?? $organization->email;
            $organization->phone=$request->phone ?? $organization->phone;
            $old_logo=$organization->logo_url;
           
            $logo_url=$request->file('logo_url');
            if($request->hasFile('logo_url')){
                if (Storage::exists('public/images/organizations/' . $old_logo)) {
                    Storage::delete('public/images/organizations/' . $old_logo);
                }
                $path=$request->file('logo_url')->store('public/images/organizations/');
                $path=basename($path);
                $organization->logo_url=$path;
            }
            $organization->org_id=$org_id;

            
            $organization->save();
            return response()->json([
                'status'=>'success ful update',
                'data'=>$organization
            ]);

        }
    }
    public function editImpact(Request $request){
        $user=Auth::user();
        $impact_id=$request->impact_id;
        $impact = Impact::find($impact_id);
        if (!$user || $user->role_id != 1){
            return response()->json([
                'status' => 'Permission denied or Invalid input',
            ], 422);
        }
        else{
            $impact->header=$request->header;
            $impact->description=$request->description;
            $old_impact=$impact->image_url;

            $image_url=$request->file('image_url');
            if($request->hasFile('image_url')){
                if (Storage::exists('public/images/impacts/' . $old_impact)) {
                    Storage::delete('public/images/impacts/' . $old_impact);
                }
                $path=$request->file('image_url')->store('public/images/impacts/');
                $path=basename($path);
                $impact->image_url=$path;
            }
                
           
            $impact->save();
            return response()->json([
                'status'=>'successfull update',
                'data'=>$impact
            ]);
        }
    }
    public function editMission(Request $request){
        $user=Auth::user();
        $mission_id=$request->mission_id;
        $mission = Mission::find($mission_id);
        if (!$user || $user->role_id != 1){
            return response()->json([
                'status' => 'Permission denied or Invalid input',
            ], 422);
        }
        else{
            $mission->header=$request->header;
            $mission->description=$request->description;
            $mission->save();
            return response()->json([
                'status'=>'successfull update',
                'data'=>$mission
            ]);
        }
    }
    public function editEvent(Request $request){
        $user=Auth::user();
        $event_id=$request->event_id;
        $event = Event::find($event_id);
        if (!$user || $user->role_id != 1){
            return response()->json([
                'status' => 'Permission denied or Invalid input',
            ], 422);
        }
        else{
            $event->topic=$request->topic;
            $event->description=$request->description;
            $old_event=$event->image_url;

            $image_url=$request->file('image_url');
            if($request->hasFile('image_url')){
                if (Storage::exists('public/images/events/' . $old_event)) {
                    Storage::delete('public/images/events/' . $old_event);
                }
                $path=$request->file('image_url')->store('public/images/events/');
                $path=basename($path);
                $event->image_url=$path;
            }
            $event->event_date=$request->event_date;
            $event->location=$request->location;
             
            
            $event->save(); 
            return response()->json([
                'status'=>'successfull update',
                'data'=>$event
            ]);
        }
    }
}
