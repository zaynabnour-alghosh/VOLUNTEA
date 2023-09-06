<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VolunteerSkill extends Model
{
    use HasFactory;

    /*Relationships related to a volunteer_skill*/
    
    public function user() {
        return $this->belongsTo(User::class);
    }

    public function skill() {
        return $this->belongsTo(Skill::class);
    }
}
