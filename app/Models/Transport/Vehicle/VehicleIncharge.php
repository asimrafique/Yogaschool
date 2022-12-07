<?php

namespace App\Models\Transport\Vehicle;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class VehicleIncharge extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'vehicle_id',
                            'employee_id',
                            'date_effective',
                            'description',
                            'options'
                        ];
    protected $casts = ['options' => 'array', 'date_effective' => 'date'];
    protected $primaryKey = 'id';
    protected $table = 'vehicle_incharges';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('vehicle_incharge')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function vehicle()
    {
        return $this->belongsTo('App\Models\Transport\Vehicle\Vehicle');
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

    public function scopeFilterByVehicleId($q, $vehicle_id)
    {
        if (! $vehicle_id) {
            return $q;
        }

        return $q->where('vehicle_id', '=', $vehicle_id);
    }

    public function scopeFilterByEmployeeId($q, $employee_id)
    {
        if (! $employee_id) {
            return $q;
        }

        return $q->where('employee_id', '=', $employee_id);
    }
}