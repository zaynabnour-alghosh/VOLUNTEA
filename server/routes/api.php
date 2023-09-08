<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\OrganizationController;

Route::group(["middleware" => "auth:api"], function(){
    $user = Auth::user();     
    Route::group(["prefix" => "user"], function(){
        Route::post("logout", [AuthController::class, "logout"]);
        Route::post("refresh", [AuthController::class, "refresh"]);
    });
    Route::group(["prefix"=>"admin"],function(){
        Route::post("new-organization",[AdminController::class,"createOrganization"]);
        Route::post("organization-info",[OrganizationController::class,"addInformation"]);
        Route::post("organization-impact",[OrganizationController::class,"addImpact"]);
        Route::post("organization-mission",[OrganizationController::class,"addMission"]);
        Route::post("organization-event",[OrganizationController::class,"addEvent"]);
        
        Route::post("edit-organization-info",[OrganizationController::class,"editOrganizationInfo"]);
        Route::post("edit-impact",[OrganizationController::class,"editImpact"]);

    });

});

Route::group(["prefix" => "guest"], function(){
    Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
    Route::post("login", [AuthController::class, "login"]);
    Route::post("register", [AuthController::class, "register"]);
    Route::get("verify-email/{token}", [AuthController::class, "verifyEmail"]);

    
});
    Route::get("organization-info/{id}", [OrganizationController::class, "getOrganizationInfo"]);
