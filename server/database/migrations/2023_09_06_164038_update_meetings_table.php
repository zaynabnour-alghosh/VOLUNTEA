<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('meetings', function($table) {
            $table->dropColumn('header');
        });
        Schema::table('announcements', function($table) {
            $table->date('date_at')->nullable()->change();
            $table->time('from')->nullable()->change();
            $table->time('to')->nullable()->change();
        });
    }

   
    public function down(): void
    {

    }
};
