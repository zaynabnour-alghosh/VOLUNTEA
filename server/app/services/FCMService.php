<?php
namespace App\Services;
use Illuminate\Support\Facades\Http;
class FCMService
{
    
    public static function send($token, $notification)
    {
        $fcm_token ='AAAA6-8nBZ8:APA91bEiDpsBjESRHSmbGUx9xXEYLSyEjuo08y3SNtHdyV4t31ZoVXq-uivBdIor4-3kYljLObrX944ximJbrT_ZYxgtsC-jJMHXlPd17zwOmCKW83B6SIJvC4onxiKpi3DCRRHFQiFB';
        Http::withoutVerifying()->withHeaders([
            'Authorization' => 'key=' . $fcm_token,
            'Content-Type' => 'application/json',
        ])->post(
            'https://fcm.googleapis.com/fcm/send',
            [
                'to' => $token,
                'notification' => $notification,
            ]
        );
    }
}