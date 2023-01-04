<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('students', function (Blueprint $table) {
            $table->string('course_location');
            $table->string('accommodation');
            $table->string('occupation');
            $table->string('how_long_yoga');
            $table->string('teaching_experience');
            $table->string('joining_reason');
            $table->string('important_to_life');
            $table->string('why_choose_us');
            $table->string('how_hear_about_us');
            $table->string('allergies_dietary_needs');
            $table->string('use_drugs');
            $table->string('substance_frequency_of_use');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('students', function (Blueprint $table) {
            //
        });
    }
};
