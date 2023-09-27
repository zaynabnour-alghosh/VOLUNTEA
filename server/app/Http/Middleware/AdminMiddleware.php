<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;


class AdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        try {
            $user = Auth::user();
            if ($user && $user->role_id == 1) {
                return $next($request);
            }
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }
       
        return response()->json([
            'status' => 'error',
            'message' => 'Unauthorized',
        ], 401);

    }
}
