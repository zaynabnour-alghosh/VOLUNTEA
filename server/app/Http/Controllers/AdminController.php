<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Organization;


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
}
