<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /*Relationships related to a user*/

    public function role() {
        return $this->belongsTo(Role::class);
    }

    public function profile() {
        return $this->hasOne(Profile::class);
    }

    public function schedules() {
        return $this->hasMany(Schedule::class);
    }

    public function calendarEvents() {
        return $this->hasMany(CalendarEvent::class);
    }

    public function skills() {
        return $this->belongsToMany(Skill::class, 'volunteer_skills');
    }

    public function organizations() {
        return $this->hasMany(Organization::class, 'admin_id');
    }

    public function opportunityApplications() {
        return $this->hasMany(OpportunityApplication::class);
    }

    public function feedbacks() {
        return $this->hasMany(Feedback::class, 'volunteer_id');
    }
}
