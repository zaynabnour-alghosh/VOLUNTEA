<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class EmailVerification extends Notification
{
    public function __construct($token)
    {
        $this->token = $token;
    }
    use Queueable;
    public $token;

    public function toMail(object $notifiable): MailMessage
    {
        $token=$notifiable->verification_token;
        return (new MailMessage)
                    ->line('Below is the token to verify your email address.')
                     ->line('If you did not request a password reset, no further action is required.')
                     ->line('Copy the following token and paste it on your verification page: ' . $this->token)
                     ->line('Thank you for using our application!');
    }
    public function via($notifiable)
    {
        return ['mail'];
    }
}
