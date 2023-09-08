<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Mail\Mailable;

class EmailVerification extends Notification
{
    public function toMail(object $notifiable): MailMessage
    {
        $verificationUrl = url("api/guest/verify-email/{$notifiable->verification_token}");
        return (new MailMessage)
                    ->line('Click the button below to verify your email address.')
                    ->action('Verify Email', $verificationUrl)
                    ->line('Thank you for using our application!');
    }
    public function via($notifiable)
    {
        return ['mail']; // This indicates that the notification should be sent via email
    }
}
