<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAirtimeBilingTokensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('airtime_biling_tokens', function (Blueprint $table) {

            $table->id();
            $table->unsignedInteger('ussd_account_id');
            $table->string('access_token');
            $table->timestamp('expiry_date');
            $table->timestamps();

            /*  Indexes  */
            $table->index(['ussd_account_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('airtime_biling_tokens');
    }
}
