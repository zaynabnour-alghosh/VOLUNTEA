<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    use HasFactory;

    /*Relationships related to a certification*/

    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }

    public function volunteer()
    {
        return $this->belongsTo(User::class, 'volunteer_id');
    }

    public function opportunity()
    {
        return $this->belongsTo(Opportunity::class, 'opp_id');
    }
}
