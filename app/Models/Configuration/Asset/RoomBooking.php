<?php

namespace App\Models\Configuration\Asset;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class RoomBooking extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'user_id',
                            'room_id',
                            'start_time',
                            'description',
                            'expired_at',
                            
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'rooms_bookings';

    

    
}
