<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;

    /*Relationships related to an announcement*/

    public function organization() {
        return $this->belongsTo(Organization::class, 'org_id');
    }

    public function admin() {
        return $this->belongsTo(User::class, 'admin_id');
    }
}
