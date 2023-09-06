<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('announcements', function($table) {
            $table->dropColumn('image_url');
        });
    }

    public function down(): void
    {
        
    }
};
