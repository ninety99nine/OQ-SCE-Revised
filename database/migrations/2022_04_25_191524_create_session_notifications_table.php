<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSessionNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('session_notifications', function (Blueprint $table) {

            $table->increments('id');

            /*  Session Notifications Details  */
            $table->string('session_id')->nullable();
            $table->string('msisdn')->nullable();
            $table->boolean('test')->nullable()->default(false);
            $table->string('type')->nullable();
            $table->text('message')->nullable();
            $table->text('metadata')->nullable();
            $table->boolean('showing_notification')->default(false);

            /*  Ownership Information  */
            $table->unsignedInteger('app_id')->nullable();

            /*  Indexes  */
            $table->index(['session_id']);
            $table->index(['msisdn', 'test', 'app_id']);

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
        Schema::dropIfExists('session_notifications');
    }
}
