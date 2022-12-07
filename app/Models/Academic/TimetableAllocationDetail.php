<?php

namespace App\Models\Academic;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class TimetableAllocationDetail extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'timetable_allocation_id',
                            'class_timing_session_id',
                            'subject_id',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'timetable_allocation_details';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('timetable_allocation_detail')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function timetableAllocation()
    {
        return $this->belongsTo('App\Models\Academic\TimetableAllocation');
    }

    public function classTimingSession()
    {
        return $this->belongsTo('App\Models\Academic\ClassTimingSession');
    }

    public function subject()
    {
        return $this->belongsTo('App\Models\Academic\Subject');
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }

    public function scopeFilterById($q, $id)
    {
        if (! $id) {
            return $q;
        }

        return $q->where('id', '=', $id);
    }
}
