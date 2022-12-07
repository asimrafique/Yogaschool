<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class SalaryDetail extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'employee_salary_id',
                            'payroll_template_detail_id',
                            'amount',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'employee_salary_details';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('employee_salary_detail')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function salary()
    {
        return $this->belongsTo('App\Models\Employee\Salary','employee_salary_id');
    }

    public function payrollTemplateDetail()
    {
        return $this->belongsTo('App\Models\Employee\PayrollTemplateDetail');
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }

    public function scopeInfo($q)
    {
        return $q;
    }

    public function scopeFilterById($q, $id)
    {
        if (! $id) {
            return $q;
        }

        return $q->where('id', '=', $id);
    }

    public function scopeFilterByEmployeeSalaryId($q, $employee_salary_id)
    {
        if (! $employee_salary_id) {
            return $q;
        }

        return $q->where('employee_salary_id', '=', $employee_salary_id);
    }

    public function scopeFilterByPayHeadId($q, $pay_head_id)
    {
        if (! $pay_head_id) {
            return $q;
        }

        return $q->where('pay_head_id', '=', $pay_head_id);
    }
}
