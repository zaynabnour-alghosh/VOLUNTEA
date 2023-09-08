<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Organization;
use App\Models\OrganizationProfile;
use App\Models\Impact;
class OrganizationController extends Controller
{
    public function addInformation(Request $request){
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
        $organization=OrganizationProfile::where('org_id',$org_id)->first();
        $impact->organization=$organization->name;
        return response()->json([
            'status'=>'success',
            'data'=>$impact
        ]);
    }
}
