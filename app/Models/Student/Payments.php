<?php

namespace App\Models\Student;

use Illuminate\Database\Eloquent\Model;

class Payments extends Model
{
    protected $guarded = [];
  //  protected $casts = ['options' => 'array', 'date' => 'date'];
    protected $primaryKey = 'id';
    protected $table = 'payments';

    protected $fillable = [
                            
                            'payment_type',
                            'payment_id',
                            'mollie_payment_id',
                            'reg_form',
                            'batch_id',
                            'status',
                            
                        ];
}
