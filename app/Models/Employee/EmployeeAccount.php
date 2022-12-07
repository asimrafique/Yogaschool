<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class EmployeeAccount extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'name',
                            'account_number',
                            'employee_id',
                            'bank_name',
                            'branch_name',
                            'bank_identification_code',
                            'description',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'employee_accounts';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('employee_account')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function employee()
    {
        return $this->belongsTo('App\Models\Employee\Employee');
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

    public function scopeFilterByEmployeeId($q, $employee_id)
    {
        if (! $employee_id) {
            return $q;
        }

        return $q->where('employee_id', '=', $employee_id);
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
