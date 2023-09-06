<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupAdmin extends Model
{
    use HasFactory;

    /*Relationships related to a group_admin*/

    public function user() {
        return $this->belongsTo(User::class);
    }
}
