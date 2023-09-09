<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opportunity extends Model
{
    use HasFactory;

    /*Relationships related to an opportunity*/

    public function organization() {
        return $this->belongsTo(Organization::class, 'org_id');
    }

    public function coordinator() {
        return $this->belongsTo(User::class, 'coordinator_id');
    }

    public function tasks() {
        return $this->hasMany(Task::class,'opp_id', 'id');
    }

    public function descriptions() {
        return $this->hasMany(Description::class);
    }

    public function feedbacks() {
        return $this->hasMany(Feedback::class);
    }
    
    public function certifications()
    {
        return $this->hasMany(Certification::class, 'opp_id');
    }
}
