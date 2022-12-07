<?php

namespace App\Models\Academic;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class ClassTeacher extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'batch_id',
                            'employee_id',
                            'date_effective',
                            'description',
                            'options'
                        ];
    protected $casts = ['options' => 'array', 'date_effective' => 'date'];
    protected $primaryKey = 'id';
    protected $table = 'class_teachers';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('class_teacher')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function batch()
    {
        return $this->belongsTo('App\Models\Academic\Batch');
    }

    public function employee()
    {
        return $this->belongsTo('App\Models\Employee\Employee');
    }

    public function scopeFilterById($q, $id)
    {
        if (! $id) {
            return $q;
        }

        return $q->where('id', '=', $id);
    }

    public function scopeFilterBySession($q)
    {
        return $q->whereHas('batch', function ($q1) {
            $q1->whereHas('course', function ($q2) {
                $q2->where('academic_session_id', '=', config('config.default_academic_session.id'));
            });
        });
    }

    public function scopeFilterByBatchId($q, $batch_id)
    {
        if (! $batch_id) {
            return $q;
        }

        return $q->where('batch_id', '=', $batch_id);
    }

    public function scopeFilterByEmployeeId($q, $employee_id)
    {
        if (! $employee_id) {
            return $q;
        }

        return $q->where('employee_id', '=', $employee_id);
    }
}
