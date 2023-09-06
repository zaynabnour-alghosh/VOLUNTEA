<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    /*Relationships related to a message*/

    public function chatroom() {
        return $this->belongsTo(Chatroom::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
