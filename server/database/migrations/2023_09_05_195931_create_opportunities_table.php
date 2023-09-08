<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('opportunities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->unsignedBigInteger('coordinator_id');
            $table->string('topic');
            $table->string('description');
            $table->date('opportunity_date');
            $table->string('location');
            $table->integer('nb_volunteers');
            $table->timestamps();
            
            $table->foreign('coordinator_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
        });
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('opp_id');
            $table->text('description');
            $table->timestamps();

            $table->foreign('opp_id')->references('id')->on('opportunities')->onDelete('cascade');
        });
        Schema::create('feedbacks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('volunteer_id');
            $table->unsignedBigInteger('opp_id');
            $table->text('feedback');
            $table->timestamps();

            $table->foreign('volunteer_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('opp_id')->references('id')->on('opportunities')->onDelete('cascade');
        
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('opportunities');
        Schema::dropIfExists('tasks');
        Schema::dropIfExists('descriptions');
        Schema::dropIfExists('feedbacks');
    }
};
