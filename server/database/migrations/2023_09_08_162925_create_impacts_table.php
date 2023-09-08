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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('gender');
            $table->string('address');
            $table->date('dob');
            $table->text('avatar_url');
            $table->text('description');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->string('topic');
            $table->text('description');
            $table->text('image_url');
            $table->date('event_date');
            $table->string('location');
            $table->timestamps();

            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
        });
        Schema::create('impacts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->text('image_url');
            $table->string('header');
            $table->text('description');
            $table->timestamps();

            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
        });
        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->unsignedBigInteger('admin_id');
            $table->enum('header', ['Event', 'Opportunity', 'Reminder','Feedback', 'Updates', 'Emergency', 'Resources','Others']);
            $table->string('topic');
            $table->text('desciption');
            $table->date('date_at');
            $table->time('from');
            $table->time('to');
            $table->timestamps();
           
            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::dropIfExists('missions');
        Schema::create('missions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->string('header');
            $table->text('desrciption');
            $table->timestamps();

            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('impacts');
    }
};
