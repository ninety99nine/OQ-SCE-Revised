<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatabaseEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('database_entries', function (Blueprint $table) {

            $table->increments('id');

            /* Database Entry Details  */
            $table->string('msisdn')->nullable();
            $table->string('name')->nullable();
            $table->text('metadata')->nullable();
            $table->boolean('test')->nullable()->default(false);

            /*  Ownership Information  */
            $table->unsignedInteger('app_id')->nullable();
            $table->unsignedInteger('user_id')->nullable();

            /*  Indexes  */
            $table->index(['msisdn', 'name', 'test', 'app_id']);

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
        Schema::dropIfExists('database_entries');
    }
}
