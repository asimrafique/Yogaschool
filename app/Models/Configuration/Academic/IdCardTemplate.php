<?php

namespace App\Models\Configuration\Academic;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class IdCardTemplate extends Model {
	use LogsActivity;

	protected $fillable = [
		'name',
		'type',
		'options',
	];
	protected $casts = ['options' => 'array'];
	protected $primaryKey = 'id';
	protected $table = 'id_card_templates';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('id_card_template')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

	public function getOption(string $option) {
		return array_get($this->options, $option);
	}

	public function scopeFilterById($q, $id) {
		if (!$id) {
			return $q;
		}

		return $q->where('id', '=', $id);
	}

	public function scopeFilterByName($q, $name, $s = 0) {
		if (!$name) {
			return $q;
		}

		return ($s) ? $q->where('name', '=', $name) : $q->where('name', 'like', '%' . $name . '%');
	}

	public function scopeFilterByType($q, $type, $s = 0) {
		if (!$type) {
			return $q;
		}

		return ($s) ? $q->where('type', '=', $type) : $q->where('type', 'like', '%' . $type . '%');
	}
}
