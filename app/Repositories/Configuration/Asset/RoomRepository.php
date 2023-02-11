<?php
namespace App\Repositories\Configuration\Asset;

use App\Models\Configuration\Asset\Room;
use App\Models\Configuration\Asset\RoomBooking;
use App\Repositories\Configuration\Asset\BuildingRepository;
use Illuminate\Validation\ValidationException;

class RoomRepository
{
    protected $room;
    protected $roomBooking;
    protected $building;

    /**
     * Instantiate a new instance.
     *
     * @return void
     */
    public function __construct(
        Room $room,
        RoomBooking $roomBooking,
        BuildingRepository $building
    ) {
        $this->room = $room;
        $this->building = $building;
        $this->roomBooking=$roomBooking;
    }

    /**
     * Get room query
     *
     * @return Room query
     */
    public function getQuery()
    {
        return $this->room;
    }

    /**
     * Count room
     *
     * @return integer
     */
    public function count()
    {
        return $this->room->count();
    }

    /**
     * List all rooms by name & id
     *
     * @return array
     */
    public function listAll()
    {
        return $this->room->get()->pluck('name', 'id')->all();
    }

    /**
     * List all rooms by name & id for select option
     *
     * @return array
     */

    public function selectAll()
    {
        return $this->room->get(['name', 'id']);
    }
    public function getRoomTypesGroupBy()
    {
       return $student_exist_query=  $this->room->where('building_id',1)->groupBy('types')->get();
    }
    public function selectRoomByType($type)
    {
      //$accommodation= str_replace(' ', '_', $accommodation);
      //dd($accommodation);
        $student_exist_query=  $this->room->where('types',  $type);

        

        return $student_exist_query->get();
    }
    public function updateRoomCountAndCreateRoomBookedCustom($room_id,$student_id)
    {   


          $this->room->where('id',$room_id)->increment('allowed', 1);
        //  dd('hi');
        // dd($room_id,$student_id);
          $booking = new RoomBooking;
          $booking->room_id=$room_id;
          $booking->user_id=$student_id;
          $booking->save();
         //dd('hi again');
         return $booking;
    }
    public function checkRoomBookedBySameUser($student_id)
    {
       $check= $this->roomBooking->where('user_id',$student_id)->first();
       if ($check) {
        return true;
       }
       else{
         return false;
       }
    }
    public function selectAvailableRoomByType($req)
    {
      //$accommodation= str_replace(' ', '_', $accommodation);
      //dd($accommodation);
        $building_id=1;
        $gender=$req->get('gender');
        $type=$req->get('accommodation');
        $count;
        if ($type=='single') {
            $count=1;
        }
        if ($type=='dormitory') {
            $count=4;
        }
        if ($type=='double_shared_room') {
            $count=2;
        }

        
        $student_exist_query=  $this->room->where('types',  $type)->where('allowed','<',$count)->where('gender_allotted',$gender)->where('building_id',$building_id);

        

        return $student_exist_query->get();
    }

    /**
     * List all rooms by id
     *
     * @return array
     */
    public function listId()
    {
        return $this->room->get()->pluck('id')->all();
    }

    /**
     * Get all rooms
     *
     * @return array
     */
    public function getAll()
    {
        return $this->room->info()->get();
    }

    /**
     * Find room with given id.
     *
     * @param integer $id
     * @return Room
     */
    public function find($id)
    {
        return $this->room->info()->find($id);
    }

    /**
     * Find room with given id or throw an error.
     *
     * @param integer $id
     * @return Room
     */
    public function findOrFail($id, $field = 'message')
    {
        $room = $this->room->info()->find($id);

        if (! $room) {
            throw ValidationException::withMessages([$field => trans('asset.could_not_find_room')]);
        }

        return $room;
    }

    /**
     * Get all filtered data
     *
     * @param array $params
     * @return Room
     */
    public function getData($params)
    {
        $sort_by     = gv($params, 'sort_by', 'position');
        $order       = gv($params, 'order', 'asc');

        return $this->room->info()->orderBy($sort_by, $order);
    }

    /**
     * Paginate all rooms using given params.
     *
     * @param array $params
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginate($params)
    {
        $page_length = gv($params, 'page_length', config('config.page_length'));

        return $this->getData($params)->paginate($page_length);
    }

    /**
     * Get all filtered data for printing
     *
     * @param array $params
     * @return Room
     */
    public function print($params)
    {
        return $this->getData($params)->get();
    }

    /**
     * Get room pre requisite.
     *
     * @return Array
     */
    public function getPreRequisite()
    {
        $buildings = $this->building->selectAll();

        return compact('buildings');
    }

    /**
     * Create a new room.
     *
     * @param array $params
     * @return Room
     */
    public function create($params)
    {
        return $this->room->forceCreate($this->formatParams($params));
    }

    /**
     * Prepare given params for inserting into database.
     *
     * @param array $params
     * @param string $type
     * @return array
     */
    private function formatParams($params, $room_id = null)
    {
        $building = $this->building->findOrFail(gv($params, 'building_id'));

        $formatted = [
            'name'        => gv($params, 'name'),
            'description' => gv($params, 'description'),
            'building_id' => gv($params, 'building_id'),
            'floor_number' => gv($params, 'floor_number'),
            'type' => gv($params, 'type'),
        ];
        
        $formatted['options'] = [];

        return $formatted;
    }

    /**
     * Update given room.
     *
     * @param Room $room
     * @param array $params
     *
     * @return Room
     */
    public function update(Room $room, $params)
    {
        return $room->forceFill($this->formatParams($params, $room->id))->save();
    }

    /**
     * Find room & check it can be deleted or not.
     *
     * @param integer $id
     * @return Room
     */
    public function deletable($id)
    {
        $room = $this->findOrFail($id);

        return $room;
    }

    /**
     * Delete room.
     *
     * @param integer $id
     * @return bool|null
     */
    public function delete(Room $room)
    {
        return $room->delete();
    }

    /**
     * Delete multiple rooms.
     *
     * @param array $ids
     * @return bool|null
     */
    public function deleteMultiple($ids)
    {
        return $this->room->whereIn('id', $ids)->delete();
    }
}