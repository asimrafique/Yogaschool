<?php

namespace App\Models\Utility;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class EmailTemplate extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'name',
                            'slug',
                            'category',
                            'subject',
                            'body',
                            'is_default',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'email_templates';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('email_template')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }

    public function setBodyAttribute($value)
    {
        $this->attributes['body'] = scriptStripper($value);
    }

    public function scopeFilterBySlug($q, $slug)
    {
        if (! $slug) {
            return $q;
        }

        return $q->where('slug', '=', $slug);
    }
}
