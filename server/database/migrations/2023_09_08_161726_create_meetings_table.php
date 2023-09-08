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
        // Schema::create('meetings', function (Blueprint $table) {
        //     $table->id();
        //     $table->unsignedBigInteger('org_id');
        //     $table->unsignedBigInteger('admin_id');
        //     $table->text('link');
        //     $table->text('description');
        //     $table->date('date_at');
        //     $table->string('location');
        //     $table->timestamps();
           
        //     $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
        //     $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');
        // });

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meetings');
    }
};
