<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGlobalVariablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('global_variables', function (Blueprint $table) {

            $table->increments('id');

            /*  Global Variable Details  */
            $table->string('msisdn')->nullable();
            $table->boolean('test')->nullable()->default(false);
            $table->text('metadata')->nullable();

            /*  Ownership Information  */
            $table->unsignedInteger('app_id')->nullable();

            /*  Indexes  */
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
        Schema::dropIfExists('global_variables');
    }
}
