<?php

namespace App\Models\Inventory;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class StockPurchaseDetail extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'stock_purchase_id',
                            'stock_item_id',
                            'quantity',
                            'description',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'stock_purchase_details';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('stock_purchase_detail')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function purchase()
    {
        return $this->belongsTo('App\Models\Inventory\StockPurchase', 'stock_purchase_id');
    }

    public function item()
    {
        return $this->belongsTo('App\Models\Inventory\StockItem', 'stock_item_id');
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }

    public function scopeInfo($q)
    {
        return $q->with('items');
    }

    public function scopeFilterById($q, $id)
    {
        if (! $id) {
            return $q;
        }

        return $q->where('id', '=', $id);
    }
}