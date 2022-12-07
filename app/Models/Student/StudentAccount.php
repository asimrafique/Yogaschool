<?php

namespace App\Models\Student;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class StudentAccount extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'name',
                            'account_number',
                            'student_id',
                            'bank_name',
                            'branch_name',
                            'bank_identification_code',
                            'description',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'student_accounts';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('student_account')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function student()
    {
        return $this->belongsTo('App\Models\Student\Student');
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

    public function scopeFilterByStudentId($q, $student_id)
    {
        if (! $student_id) {
            return $q;
        }

        return $q->where('student_id', '=', $student_id);
    }

    public function scopeFilterByName($q, $name, $s = 0)
    {
        if (! $name) {
            return $q;
        }

        return $s ? $q->where('name', '=', $name) : $q->where('name', 'like', '%'.$name.'%');
    }

    public function scopeFilterByAccountNumber($q, $account_number)
    {
        if (! $account_number) {
            return $q;
        }

        return $q->where('account_number', '=', $account_number);
    }
}
