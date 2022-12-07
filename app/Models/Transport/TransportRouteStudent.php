<?php

namespace App\Models\Transport;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class TransportRouteStudent extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'transport_route_detail_id',
                            'student_record_id',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'transport_route_students';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('transport_route_student')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function transportRouteDetail()
    {
        return $this->belongsTo('App\Models\Transport\TransportRouteDetail');
    }

    public function studentRecord()
    {
        return $this->belongsTo('App\Models\Student\StudentRecord');
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

    public function scopeFilterByTransportRouteDetailId($q, $transport_route_detail_id)
    {
        if (! $transport_route_detail_id) {
            return $q;
        }

        return $q->where('transport_route_detail_id', '=', $transport_route_detail_id);
    }

    public function scopeFilterByStudentRecordId($q, $student_record_id)
    {
        if (! $student_record_id) {
            return $q;
        }

        return $q->where('student_record_id', '=', $student_record_id);
    }
}
