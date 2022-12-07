<?php

namespace App\Models\Configuration\Exam;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class AssessmentDetail extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'exam_assessment_id',
                            'name',
                            'max_mark',
                            'pass_percentage',
                            'description',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'exam_assessment_details';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('exam_assessment_detail')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function assessment()
    {
        return $this->belongsTo('App\Models\Configuration\Exam\Assessment', 'exam_assessment_id');
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

    public function scopeFilterByExamAssessmentId($q, $exam_assessment_id)
    {
        if (! $exam_assessment_id) {
            return $q;
        }

        return $q->where('exam_assessment_id', '=', $exam_assessment_id);
    }

    public function scopeFilterByName($q, $name, $s = 0)
    {
        if (! $name) {
            return $q;
        }

        return $s ? $q->where('name', '=', $name) : $q->where('name', 'like', '%'.$name.'%');
    }
}
