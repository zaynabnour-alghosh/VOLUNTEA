<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    /*Relationships related to an event*/

    public function organization() {
        return $this->belongsTo(Organization::class, 'org_id');
    }
}
