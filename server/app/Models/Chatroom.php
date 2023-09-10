<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chatroom extends Model
{
    use HasFactory;

    /*Relationships related to a chatroom*/

    public function organization() {
        return $this->belongsTo(Organization::class, 'org_id');
    }

    public function conversation() {
        return $this->belongsTo(Conversation::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function otherUser() {
        return $this->belongsTo(User::class, 'other_user_id','id');
    }

    public function group() {
        return $this->belongsTo(Group::class,'group_id','id');
    }
}
