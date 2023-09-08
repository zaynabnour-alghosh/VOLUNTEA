<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->unsignedBigInteger('admin_id');
            $table->enum('header', ['Event', 'Opportunity', 'Reminder','Feedback', 'Updates', 'Emergency', 'Resources','Others']);
            $table->string('topic');
            $table->text('description');
            $table->date('date_at')->nullable();
            $table->time('from')->nullable();
            $table->time('to')->nullable();
            $table->timestamps();
           
            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::create('meetings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->unsignedBigInteger('admin_id');
            $table->text('link');
            $table->text('description');
            $table->date('date_at');
            $table->string('location')->nullable();
            $table->timestamps();
           
            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::create('signup_requests', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('org_code');
            $table->enum('status', ['pending', 'accepted', 'rejected']);
            $table->timestamps();
            
            $table->foreign('org_code')->references('code')->on('organizations')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::create('opportunity_applications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('opp_id');
            $table->enum('status', ['pending', 'accepted', 'rejected']);
            $table->timestamps();
           
            $table->foreign('opp_id')->references('id')->on('opportunities')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('announcements');
        Schema::dropIfExists('meetings');
        Schema::dropIfExists('signup_requests');
        Schema::dropIfExists('opportunity_applications');
    }
};
