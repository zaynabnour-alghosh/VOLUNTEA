<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;

    /*Relationships related to an organization*/

    public function admin() {
        return $this->belongsTo(User::class, 'admin_id');
    }

    public function organizationProfile() {
        return $this->hasOne(OrganizationProfile::class,'org_id', 'id');
    }

    public function impacts() {
        return $this->hasMany(Impact::class,'org_id', 'id');
    }

    public function missions() {
        return $this->hasMany(Mission::class,'org_id', 'id');
    }

    public function events() {
        return $this->hasMany(Event::class,'org_id', 'id');
    }

    public function opportunities() {
        return $this->hasMany(Opportunity::class,'org_id', 'id');
    }

    public function announcements() {
        return $this->hasMany(Announcement::class, 'org_id');
    }

    public function meetings() {
        return $this->hasMany(Meeting::class, 'org_id');
    }

    public function signupRequests() {
        return $this->hasMany(SignupRequest::class, 'org_code', 'code');
    }
}
