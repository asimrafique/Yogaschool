<?php

namespace App\Models\Finance\Fee;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class FeeInstallmentDetail extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'fee_installment_id',
                            'fee_head_id',
                            'is_optional',
                            'amount',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'fee_installment_details';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('fee_installment_detail')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function feeInstallment()
    {
        return $this->belongsTo('App\Models\Finance\Fee\FeeInstallment');
    }

    public function feeHead()
    {
        return $this->belongsTo('App\Models\Finance\Fee\FeeHead');
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }
}
