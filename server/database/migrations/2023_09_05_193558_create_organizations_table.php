<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->unsignedBigInteger('admin_id');
            $table->timestamps();
            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::create('organization_profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->string('name');
            $table->text('logo_url');
            $table->text('desciption');
            $table->text('face_link');
            $table->text('insta_link');
            $table->text('whats_link');
            $table->string('location');
            $table->string('phone');
            $table->string('email');
            $table->timestamps();
            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
        });
        Schema::create('impacts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->text('image_url');
            $table->string('header');
            $table->text('desciption');
            $table->timestamps();
            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
        });
        Schema::create('missions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->string('header');
            $table->text('desciption');
            $table->timestamps();
            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
        });
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('org_id');
            $table->text('image_url');
            $table->string('topic');
            $table->text('desciption');
            $table->date('event_date');
            $table->string('location');
            $table->timestamps();
            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('organizations');
        Schema::dropIfExists('organization_profiles');
        Schema::dropIfExists('impacts');
        Schema::dropIfExists('missions');
        Schema::dropIfExists('events');
    }
};
