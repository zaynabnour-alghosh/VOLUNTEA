<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    /*Relationships related to a skill*/

    public function users() {
        return $this->belongsToMany(User::class, 'volunteer_skills');
    }
}
