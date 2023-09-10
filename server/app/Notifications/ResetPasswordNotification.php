<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ResetPasswordNotification extends Notification
{
    use Queueable;
    public $token;

    public function __construct($token)
    {
        $this->token = $token;
    }
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        $token=$notifiable->verification_token;

        return (new MailMessage)
            ->subject('Password Reset')
            ->line('You are receiving this email because we received a password reset request for your account.')
            ->line('Copy the following token and paste it on your verification page: ' . $this->token)
            ->line('If you did not request a password reset, no further action is required.')
            ->line('Thank you for using our application!');
            
    }
}
