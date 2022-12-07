<?php

namespace App\Models\Configuration\Student;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class StudentDocumentType extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'name',
                            'description',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'student_document_types';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('student_document_type')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function studentDocuments()
    {
        return $this->hasMany('App\Models\Student\StudentDocument');
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

    public function scopeFilterByName($q, $name, $s = 0)
    {
        if (! $name) {
            return $q;
        }

        return $s ? $q->where('name', '=', $name) : $q->where('name', 'like', '%'.$name.'%');
    }
}
