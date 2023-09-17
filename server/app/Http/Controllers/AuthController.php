<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\SignupRequest;
use Illuminate\Support\Facades\Mail;
use App\Notifications\EmailVerification;
use Illuminate\Mail\Mailable;


class AuthController extends Controller
{
    public function unauthorized(Request $request){
        return response()->json([
            'status' => 'Error',
            'message' => 'Unauthorized',
        ], 200);
    }

    public function verifyEmail(Request $request)
    {
        $user = User::where('email',$request->email)
                    ->where('verification_token', $request->token)
                    ->first();
    
        if (!$user) {
            return response()->json(['message' => 'Invalid verification token'], 400);
        }
    
       else{
        return response()->json([
            'message' => 'Email verified successfully',
            'user' => $user,
            'verification_status' => true,
        ]);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        $user->token = $token;        
        return response()->json([
                'status' => 'Success',
                'data' => $user
            ]);
    }

    public function register(Request $request,$role='admin'){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'code'=>'string|max:255',
        ]);
        $verificationToken = Str::random(60);

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        if($role==='admin'){
            $user->role_id='1';
        }
        elseif($role==='volunteer'){
            $user->role_id='2';
        }
        else{
            return response()->json(['message'=>'Invalid Request']);
        }
        $user->verification_token=$verificationToken;
        $user->save();
        if($role==='volunteer'){
            $signup_request=new SignupRequest;
            $signup_request->user_id=$user->id;
            $signup_request->org_code=$request->code;
            $signup_request->status='pending';
            $signup_request->save();
        }
        $token = Auth::login($user);
        $user->token = $token;

        $emailVerificationNotification = new EmailVerification($verificationToken);
        $user->notify($emailVerificationNotification);

        return response()->json([
            'status' => 'Email verification link sent successfully',
            'user' => $user,
            'role'=>$role,
            'verification_status' => false,
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        $user = Auth::user();
        $user->token = Auth::refresh();

        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }
}
