<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mission extends Model
{
    use HasFactory;

    /*Relationships related to a mission*/

    public function organization() {
        return $this->belongsTo(Organization::class, 'org_id');
    }
}
