<?php

namespace App\Models\Calendar;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Holiday extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'date',
                            'description',
                            'options'
                        ];
    protected $casts = ['options' => 'array','date' => 'date'];
    protected $primaryKey = 'id';
    protected $table = 'holidays';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('holiday')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
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

    public function scopeFilterByDate($q, $date)
    {
        if (! $date) {
            return $q;
        }

        return $q->where('date', '=', $date);
    }

    public function scopeFilterByKeyword($q, $keyword = null)
    {
        if (! $keyword) {
            return $q;
        }

        return $q->where('description', 'like', '%'.$keyword.'%');
    }

    public function scopeFilterBySession($q)
    {
        return $q->where('date', '>=', getStartOfDate(config('config.default_academic_session.start_date')))->where('date', '<=', getEndOfDate(config('config.default_academic_session.end_date')));
    }

    public function scopeDateBetween($q, $dates)
    {
        if ((! $dates['start_date'] || ! $dates['end_date']) && $dates['start_date'] <= $dates['end_date']) {
            return $q;
        }

        return $q->where('date', '>=', getStartOfDate($dates['start_date']))->where('date', '<=', getEndOfDate($dates['end_date']));
    }
}
