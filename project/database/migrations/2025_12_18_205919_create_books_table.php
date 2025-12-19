
// =============================================================================
// FILE: database/migrations/YYYY_MM_DD_HHMMSS_create_books_table.php
// =============================================================================

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('author');
            $table->string('therapeutic_focus')->nullable();
            $table->text('full_description')->nullable();
            $table->decimal('price', 8, 2)->default(0);
            $table->boolean('is_premium')->default(false);
            $table->string('cover_image')->nullable();
            $table->string('file_path')->nullable();
            $table->timestamps();

            // Indexes for common queries
            $table->index('is_premium');
            $table->index('author');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
