<?php

namespace App\Models\Utility;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class IpFilter extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'start_ip',
                            'end_ip',
                            'description',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'ip_filters';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('ip_filter')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }
}
