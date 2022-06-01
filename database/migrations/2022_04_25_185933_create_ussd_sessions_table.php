<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUssdSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ussd_sessions', function (Blueprint $table) {

            $table->increments('id');

            /*  Session Information  */
            $table->string('session_id')->nullable();
            $table->string('service_code')->nullable();
            $table->string('type')->default('shared');
            $table->string('msisdn')->nullable();
            $table->string('request_type')->default(1);
            $table->string('text')->nullable();
            $table->mediumText('reply_records')->nullable();
            $table->mediumText('logs')->nullable();
            $table->boolean('fatal_error')->nullable()->default(false);
            $table->string('fatal_error_msg', 500)->nullable();
            $table->boolean('test')->nullable()->default(false);
            $table->boolean('allow_timeout')->nullable()->default(0);
            $table->timestampTz('timeout_at')->nullable();
            $table->unsignedMediumInteger('total_session_duration')->default(0);
            $table->text('session_execution_times')->nullable();

            /*  Ownership Information  */
            $table->unsignedInteger('app_id')->nullable();
            $table->unsignedInteger('version_id')->nullable();

            /*  Indexes  */
            $table->index(['session_id', 'test']);
            $table->index(['msisdn', 'test', 'app_id', 'created_at']);


            /*  Timestamps  */
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ussd_sessions');
    }
}
