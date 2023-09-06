<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CalendarEvent extends Model
{
    use HasFactory;

    /*Relationships related to a calendar_event*/

    public function user() {
        return $this->belongsTo(User::class);
    }
}
