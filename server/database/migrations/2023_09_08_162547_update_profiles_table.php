<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('profiles');
        Schema::dropIfExists('announcements');
        Schema::dropIfExists('impacts');
        Schema::dropIfExists('events');
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
