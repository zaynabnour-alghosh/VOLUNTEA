<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    /*Relationships related to a group*/

    public function organization() {
        return $this->belongsTo(Organization::class, 'org_id');
    }

    public function admin() {
        return $this->belongsTo(User::class, 'admin_id');
    }

    public function members() {
        return $this->belongsToMany(User::class, 'group_members');
    }
}
