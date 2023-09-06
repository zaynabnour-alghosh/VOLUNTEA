<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Description extends Model
{
    use HasFactory;

    /*Relationships related to a description*/

    public function opportunity() {
        return $this->belongsTo(Opportunity::class, 'opp_id');
    }
}
