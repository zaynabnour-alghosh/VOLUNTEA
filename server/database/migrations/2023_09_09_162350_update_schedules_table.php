<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('schedules', function (Blueprint $table){
            $table->string('title')->nullable()->change();
            $table->date('event_date')->nullable()->change();
        });
    }

    public function down(): void
    {
        //
    }
};
