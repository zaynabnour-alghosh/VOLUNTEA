<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Impact extends Model
{
    use HasFactory;

    /*Relationships related to an impact*/

    public function organization() {
        return $this->belongsTo(Organization::class, 'org_id');
    }
}
