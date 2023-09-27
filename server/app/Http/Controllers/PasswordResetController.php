<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\PasswordReset;
use App\Models\User;
use App\Notifications\ResetPasswordNotification;


class PasswordResetController extends Controller
{
    public function requestReset(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);
        $user=User::where('email',$request->email)->first();
        $verificationToken = Str::random(60);
        $password_reset=new PasswordReset;
        $password_reset->email=$request->email;
        $password_reset->token=$verificationToken;
        $password_reset->save();
        
        // $passwordResetNotification = new ResetPasswordNotification($verificationToken);
        // $user->notify($passwordResetNotification);

        return response()->json(['message' => 'Password reset email sent.','token'=>$verificationToken]);
    }    
    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required|string',
        ]);
        $reset = PasswordReset::where('email', $request->email)
            ->where('token', $request->token)
            ->first();
        if (!$reset) {
            return response()->json(['message' => 'Invalid token.'], 422);
        }
        $user = User::where('email', $request->email)->first();
        $user->password=Hash::make($request->password);
        $user->save();
        $reset->delete();
        return response()->json(['message' => 'Password reset successful.']);
    }
}
