<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('descriptions', function (Blueprint $table) {
            $table->dropForeign(['opp_id']);
        });
        Schema::dropIfExists('descriptions');
    }
    
    public function down(): void
    {
        //
    }
};
