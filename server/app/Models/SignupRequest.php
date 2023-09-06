<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SignupRequest extends Model
{
    use HasFactory;

    /*Relationships related to a signup_request*/

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function organization() {
        return $this->belongsTo(Organization::class, 'org_code', 'code');
    }
}
