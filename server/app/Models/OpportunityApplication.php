<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpportunityApplication extends Model
{
    use HasFactory;

    /*Relationships related to an opportunity_application*/

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function opportunity() {
        return $this->belongsTo(Opportunity::class);
    }
}
