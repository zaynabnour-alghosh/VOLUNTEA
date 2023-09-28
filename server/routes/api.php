<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\OpportunityController;
use App\Http\Controllers\CommonController;
use App\Http\Controllers\VolunteerController;
use App\Http\Controllers\PasswordResetController;

Route::group(["middleware" => "auth:api"], function(){
    $user = Auth::user();     
    Route::group(["prefix" => "user"], function(){
        Route::post("logout", [AuthController::class, "logout"]);
        Route::post("refresh", [AuthController::class, "refresh"]);
    });
    Route::group(["middleware" => "admin", "prefix" => "admin"],function(){
        Route::post("new-organization",[AdminController::class,"createOrganization"]);
        Route::post("organization-info",[OrganizationController::class,"addInformation"]);
        Route::post("organization-impact",[OrganizationController::class,"addImpact"]);
        Route::post("organization-mission",[OrganizationController::class,"addMission"]);
        Route::post("organization-event",[OrganizationController::class,"addEvent"]);
        
        Route::post("edit-organization-info",[OrganizationController::class,"editOrganizationInfo"]);
        Route::post("edit-impact",[OrganizationController::class,"editImpact"]);
        Route::post("edit-mission",[OrganizationController::class,"editMission"]);
        Route::post("edit-event",[OrganizationController::class,"editEvent"]);

        Route::post("opportunity/{id?}",[OpportunityController::class,"createOpportunity"]);
        Route::post("delete-opportunity/{id}",[OpportunityController::class,"deleteOpportunity"]);
        Route::get("opportunity/{id}",[OpportunityController::class,"viewOpportunityDetails"]);
        Route::get("applications/{id}",[OpportunityController::class,"viewOpportunityApplications"]);
        Route::post("application/{action?}",[OpportunityController::class,"acceptApplicant"]);
        
        Route::post("remove-member/{id}",[AdminController::class,"removeVolunteer"]);
        
        
        Route::post("new-group",[AdminController::class,"createGroup"]);        
        Route::post("new-announcement",[AdminController::class,"makeAnnouncement"]);
        Route::post("new-meeting",[AdminController::class,"scheduleMeeting"]);
        Route::post("new-certification",[AdminController::class,"certifyVolunteer"]);
        Route::post("request/{action?}",[AdminController::class,"acceptRequest"]);
        
        
    });
    Route::group(["middleware" => "volunteer", "prefix" => "volunteer"],function(){
        Route::get("dashboard-home/{id}",[VolunteerController::class,"viewDashboardDetails"]);
        Route::post("application/{id}/{action?}",[VolunteerController::class,"sendApplication"]);
        Route::get("feedback/{id}",[VolunteerController::class,"getFeedback"]);
        Route::post("new-feedback/{id}",[VolunteerController::class,"writeFeedback"]);
        Route::get("applications",[VolunteerController::class,"viewApplications"]);
        Route::get("organizations",[VolunteerController::class,"getSignedUpOrg"]);
    });
    
    Route::get("members/{id}",[CommonController::class,"getAllVolunteers"]);
    Route::get("user/{id}",[OpportunityController::class,"viewApplicant"]);
    Route::get("user",[CommonController::class,"getAuthUser"]);

    Route::get("stream/{id}",[CommonController::class,"getStream"]);
    Route::get("opportunities/{id}/{name?}",[CommonController::class,"getOpportunities"]);
    Route::post("profile/{action?}",[CommonController::class,"addOrUpdateProfile"]);
    Route::post("skills",[CommonController::class,"addSkills"]);
    Route::post("schedule/{action?}",[CommonController::class,"addOrUpdateSchedule"]);
    Route::get("delete-user/{id}",[CommonController::class,"deleteUser"]); 
    Route::get("chatrooms/{id}",[CommonController::class,"viewChatrooms"]); 
    Route::get("all-opportunities/{id}",[CommonController::class,"getAllOpportunities"]);    
    Route::get("notifications/{id}",[CommonController::class,"getAllNotifications"]);
    
    
});

Route::group(["prefix" => "guest"], function(){
    Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
    Route::post("login", [AuthController::class, "login"]);
    Route::post("register/{role}", [AuthController::class, "register"]);
    Route::post("verify-email", [AuthController::class, "verifyEmail"]);
    Route::post("password/reset/request",[PasswordResetController::class, "requestReset"]);
    Route::post("password/reset/verify",[PasswordResetController::class, "resetPassword"]);
});
    Route::get("organization-info/{id}", [OrganizationController::class, "getOrganizationInfo"]);
    Route::get("organization-landing/{code}", [OrganizationController::class, "getOrganizationLanding"]);
    Route::post("send-notif",[AdminController::class, "sendNotificationrToUser"]);


