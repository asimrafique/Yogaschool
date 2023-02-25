<?php
namespace App\Repositories\Student;

use App\Models\Student\Student;
use App\Repositories\Configuration\Asset\RoomRepository;
use Illuminate\Support\Str;
use App\Models\Student\Admission;
use App\Models\Student\Registration;
use App\Models\Student\StudentRecord;
use App\Models\Academic\AcademicSession;
use App\Models\Student\StudentFeeRecord;
use App\Models\Finance\Fee\FeeAllocation;
use App\Repositories\Academic\BatchRepository;
use Illuminate\Validation\ValidationException;
use App\Models\Finance\Transaction\Transaction;
use App\Repositories\Academic\CourseRepository;
use App\Repositories\Finance\AccountRepository;
use App\Repositories\Student\StudentRepository;
use App\Repositories\Student\StudentParentRepository;
use App\Repositories\Configuration\CustomFieldRepository;
use App\Repositories\Finance\Fee\FeeConcessionRepository;
use App\Repositories\Transport\TransportCircleRepository;
use App\Repositories\Configuration\Academic\InstituteRepository;
use App\Repositories\Configuration\Academic\CourseGroupRepository;
use App\Repositories\Configuration\Finance\Transaction\PaymentMethodRepository;
use App\User;
use App\Models\Configuration\Asset\RoomBooking;
use Auth;

class RegistrationRepository
{
    protected $room;
    protected $registration;
    protected $course;
    protected $student;
    protected $account;
    protected $transaction;
    protected $admission;
    protected $student_record;
    protected $student_fee_record;
    protected $fee_allocation;
    protected $batch;
    protected $transport_circle;
    protected $fee_concession;
    protected $course_group;
    protected $payment_method;
    protected $student_parent;
    protected $institute;
    protected $academic_session;
    protected $custom_field;
    protected $user;
    protected $roomBooking;

    /**
     * Instantiate a new instance.
     *
     * @return void
     */
    public function __construct(
        RoomRepository $room,
        Registration $registration,
        CourseRepository $course,
        StudentRepository $student,
        AccountRepository $account,
        Transaction $transaction,
        Admission $admission,
        StudentRecord $student_record,
        StudentFeeRecord $student_fee_record,
        FeeAllocation $fee_allocation,
        BatchRepository $batch,
        TransportCircleRepository $transport_circle,
        FeeConcessionRepository $fee_concession,
        CourseGroupRepository $course_group,
        PaymentMethodRepository $payment_method,
        StudentParentRepository $student_parent,
        InstituteRepository $institute,
        AcademicSession $academic_session,
        CustomFieldRepository $custom_field,
         RoomBooking $roomBooking,

         User $user,
    ) {
        $this->registration = $registration;
        $this->room = $room;
        $this->course = $course;
        $this->student = $student;
        $this->account = $account;
        $this->transaction = $transaction;
        $this->admission = $admission;
        $this->student_record = $student_record;
        $this->student_fee_record = $student_fee_record;
        $this->fee_allocation = $fee_allocation;
        $this->batch = $batch;
        $this->transport_circle = $transport_circle;
        $this->fee_concession = $fee_concession;
        $this->course_group = $course_group;
        $this->payment_method = $payment_method;
        $this->student_parent = $student_parent;
        $this->institute = $institute;
        $this->academic_session = $academic_session;
        $this->custom_field = $custom_field;
         $this->roomBooking=$roomBooking;
        $this->user = $user;
    }

    /**
     * Get registration query
     *
     * @return Registration query
     */
    public function getQuery()
    {
        return $this->registration;
    }

    /**
     * Count registration
     *
     * @return integer
     */
    public function count()
    {
        return $this->registration->filterBySession()->count();
    }

    /**
     * List all registrations by id
     *
     * @return array
     */
    public function listId()
    {
        return $this->registration->filterBySession()->get()->pluck('id')->all();
    }

    /**
     * Get all registrations
     *
     * @return array
     */
    public function getAll()
    {
        return $this->registration->filterBySession()->get();
    }

    /**
     * Find registration with given id.
     *
     * @param integer $id
     * @return Registration
     */
    public function find($id)
    {
        return $this->registration->filterBySession()->filterById($id)->first();
    }
    public function getRoomCourseFeesByRegId($reg_id)
    {    

        $student_id=$this->registration->filterById($reg_id)->first()->student_id;
        $course_fee=$this->registration->filterById($reg_id)->first()->course->course_fee;


        $room_id=$this->roomBooking->where('user_id',$student_id)->first()->room_id;
        $room_fees=$this->room->getFee($room_id);

        $remaining_fee=$room_fees+$course_fee;
        return $remaining_fee;
       // dd($remaining_fee);
    }

    /**
     * Find registration with given id or throw an error.
     *
     * @param integer $id
     * @return Registration
     */
    public function findOrFail($id, $field = 'message')
    {
        $registration = $this->registration->with(['student','student.parent','course','course.batches','admission','admission.batch','transactions' => function ($q) {
            $q->where('is_cancelled', 0);
        },'transactions.account','transactions.paymentMethod','transactions.user','transactions.user.employee','previousInstitute'])->filterBySession()->filterById($id)->first();

        if (! $registration) {
            throw ValidationException::withMessages([$field => trans('student.could_not_find_registration')]);
        }

        $registration['batch'] = $this->batch->findBatch($registration->batch_id);
        if ($registration['batch']!=null) {
       //   $registration['batch_id']=$registration->batch_id;
       //   $registration['batch']->name='';
          # code...
        }
       // dd($registration['batch']);

        return $registration;
    }
    public function findOrFailAgain($id, $field = 'message')
    {
        $registration = $this->registration->with(['student','student.parent','course','course.batches','admission','admission.batch','transactions' => function ($q) {
            $q->where('is_cancelled', 0);
        },'transactions.account','transactions.paymentMethod','transactions.user','transactions.user.employee','previousInstitute'])->filterBySession()->filterById($id)->first();

        if (! $registration) {
            throw ValidationException::withMessages([$field => trans('student.could_not_find_registration')]);
        }

        

        return $registration;
    }

    /**
     * Get all filtered data
     *
     * @param array $params
     * @return Registration
     */
    public function getData($params)
    {    $auth_user=Auth::user();
       
        //$checkRole=$auth_user->getRoleNames()->all()[0];
      //  dd($auth_user->id);
        $sort_by                         = gv($params, 'sort_by', 'created_at');
        $order                           = gv($params, 'order', 'desc');
        $course_id                       = gv($params, 'course_id');
        $previous_institute_id           = gv($params, 'previous_institute_id');
        $date_of_registration_start_date = gv($params, 'date_of_registration_start_date');
        $date_of_registration_end_date   = gv($params, 'date_of_registration_end_date');
        $status                          = gv($params, 'status');
        $registration_type               = gv($params, 'registration_type');

        $course_id             = is_array($course_id) ? $course_id : ($course_id ? explode(',', $course_id) : []);
        $previous_institute_id = is_array($previous_institute_id) ? $previous_institute_id : ($previous_institute_id ? explode(',', $previous_institute_id) : []);

        $query = $this->registration->with('student', 'student.parent', 'course', 'course.courseGroup', 'previousInstitute')->filterBySession()->dateOfRegistrationBetween([
            'start_date' => $date_of_registration_start_date,
            'end_date' => $date_of_registration_end_date
        ]);

        if (count($course_id)) {
            $query->whereIn('course_id', $course_id);
        }
        if ($auth_user->hasRole('student')) {
             $student = $this->student->getExistingStudentByUserId($auth_user->id);
            $query->where('student_id', $student->id);
        }

        if ($registration_type) {
            $query->where('is_online', $registration_type == 'online' ? 1 : 0);
        }
        
        if (count($previous_institute_id)) {
            $query->whereIn('previous_institute_id', $previous_institute_id);
        }

        return $query->orderBy($sort_by, $order);
    }

    /**
     * Paginate all registrations using given params.
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
     * @return Registration
     */
    public function print($params)
    {
        return $this->getData($params)->get();
    }

    /**
     * Get registration filters.
     *
     * @return Array
     */
    public function getFilters()
    {
        $courses = $this->course_group->getCourseOption();
        $previous_institutes = $this->institute->selectAll();
        $registration_types = [
            array('value' => 'offline', 'text' => trans('student.offline_registration')),
            array('value' => 'online', 'text' => trans('student.online_registration')),
        ];
        return compact('courses','previous_institutes','registration_types');
    }
    public function getUserRoom($student_id)
    {
       return $this->room->getRoomBookingByStdId($student_id);
    }
    public function stripePaymentRegister($pharam)
    {
       // dd($params);
        $stripeToken        = gv($params, 'stripeToken');
        
       
        $amount             = gv($params, 'amount', 0);

        $fee                = gv($params, 'fee');
        
        $currency           = getDefaultCurrency()['name'];
        \Stripe\Stripe::setApiKey(config('config.stripe_private_key'));
        try {
            $charge = \Stripe\Charge::create([
                'amount'   => $amount,
                'currency' => $currency,
                'source'   => $stripeToken
            ]);
        } catch (Card $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }
        catch (StripeApi $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }
        catch (InvalidRequest $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }
        catch (RateLimit $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }
        catch (ApiConnection $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }
        catch (Authentication $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }

        return true;
    }
    public function stripePaymentRegisterOnline($pharam)
    {
       
        $stripeToken        = gv($params, 'stripeToken');
        
       
        $amount             = gv($params, 'amount', 0);

        $fee                = gv($params, 'fee');
        
        $currency           = getDefaultCurrency()['name'];


        $academic_session = $this->academic_session->whereIsDefault(1)->first();
        $course = $this->course->findOrFailBySessionId($course_id, optional($academic_session)->id, 'course_id');

        $course_options = $course->options;

         $enable_registration = (isset($course_options['enable_registration'])) ? $course_options['enable_registration'] : config('config.enable_registration');
        $enable_registration_fee = (isset($course_options['enable_registration_fee']) && $course_options['enable_registration_fee']) ? 1 : 0;


        $params['registration_fee'] = ($course_options && $enable_registration_fee) ? (gv($course_options, 'registration_fee')) : 0;


        \Stripe\Stripe::setApiKey(config('config.stripe_private_key'));
        dd( $params['registration_fee']);
        try {
            $charge = \Stripe\Charge::create([
                'amount'   => $params['registration_fee'] ,
                'currency' => $currency,
                'source'   => $stripeToken
            ]);
        } catch (Card $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }
        catch (StripeApi $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }
        catch (InvalidRequest $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }
        catch (RateLimit $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }
        catch (ApiConnection $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }
        catch (Authentication $e) {
            throw ValidationException::withMessages(['message' => $e->getMessage()]);
        }

        return true;
    }

    public function getRegistrationCustomField()
    {
        return $this->custom_field->listAllByForm('student_registration');
    }

    public function getOnlineRegistrationCustomField()
    {
        return $this->custom_field->listAllByForm('student_online_registration');
    }

    /**
     * Get registration pre requisite.
     *
     * @return Array
     */
    public function getPreRequisite()
    {
        $course_options = $this->course_group->getCourseOptionWithDetail();

        $courses = $course_options['courses'];
        $course_details = $course_options['course_details'];

        $list = getVar('list');
        $genders = generateTranslatedSelectOption(isset($list['gender']) ? $list['gender'] : []);
        $guardian_relations = generateTranslatedSelectOption(isset($list['relations']) ? $list['relations'] : []);

        $previous_institutes = $this->institute->selectAll();

        $custom_fields = $this->getRegistrationCustomField();

        return compact('courses', 'genders', 'course_details', 'previous_institutes','custom_fields','guardian_relations');
    }

    /**
     * Get registration fee pre requisite.
     *
     * @return Array
     */
    public function getFeePreRequisite($reg_id=0)
    {
        $accounts = $this->account->selectAllActive();

        $payment_method_details = $this->payment_method->getAll();

        $payment_methods = generateSelectOption($payment_method_details->pluck('name', 'id')->all());
        
        if ($reg_id) {
             $room_course_feeses = $this->getRoomCourseFeesByRegId($reg_id);
        }
        else
        {
            $room_course_feeses=0;
        }
        

        return compact('accounts', 'payment_method_details', 'payment_methods','room_course_feeses');
    }

    /**
     * Get registration status pre requisite.
     *
     * @return Array
     */
    public function getStatusPreRequisite()
    {   
        $list = getVar('list');
        $transport_circles = $this->transport_circle->selectAll();
        $fee_concessions = $this->fee_concession->selectAll();
        $admission_numbers = $this->admission->groupBy('prefix')->get(['prefix', \DB::raw('MAX(number) as number')]);
        $rooms = $this->room->selectAll();
        //$accommodations = generateTranslatedSelectOption(isset($list['accommodations']) ? $list['accommodations'] : []);
        $accommodations=$this->room->getRoomTypesGroupBy();

        return compact('transport_circles', 'fee_concessions', 'admission_numbers','rooms','accommodations');
    }
    public function getAvailableRoom($request)
    {   

       //dd($accommodation);
      
        //$rooms = $this->room->selectRoomByType($type);
        $rooms = $this->room->selectAvailableRoomByType($request);
        

        return compact('rooms');
    }

    /**
     * Get disabled registration number
     * @param  Registration $registration
     * @return boolean
     */
    public function getDisabledAdmissionNumber(Registration $registration)
    {
        return $this->student_record->whereStudentId($registration->student_id)->filterBySession()->whereNull('date_of_exit')->count() ? true : false;
    }

    /**
     * Create a new registration.
     *
     * @param array $params
     * @return Registration
     */
    public function create($params)
    {
        $params = $this->validateInput($params);

        $parent_type = gv($params, 'parent_type');
        $student_type = gv($params, 'student_type');

        $custom_values = $this->custom_field->validateCustomValues('student_registration', gv($params, 'custom_values', []));

        \DB::beginTransaction();

        if ($student_type == 'new') {
            $student = $this->student->create($params);

            if ($parent_type == 'new') {
                $student_parent = $this->student_parent->create($params);
                $params['student_parent_id'] = $student_parent->id;
                $this->student->updateParentId($student, $params);
            } else {
                $this->student->updateParentId($student, $params);
            }
        } else {
            $student_id = gv($params, 'student_id');
            $student = $this->student->findOrFail($student_id);

            $this->student->validateStudentForRegistration($student, $params);
        }

        $registration = $this->registration->forceCreate($this->formatParams($params, $student));

        $options = $registration->options;
        $options['custom_values'] = mergeByKey($registration->getOption('custom_values'), $custom_values);
        $registration->options = $options;
        $registration->save();

        \DB::commit();
    }

    /**
     * Validate all input.
     *
     * @param array $params
     */
    public function validateInput($params = array())
    {
        $date_of_registration  = toDate(gv($params, 'date_of_registration'));
        $gender                = gv($params, 'gender');
        $course_id             = gv($params, 'course_id');
        $previous_institute_id = gv($params, 'previous_institute_id');

        $course = $this->course->findOrFail($course_id, 'date_of_registration');

        if (! dateLessThanSessionEnd($date_of_registration)) {
            throw ValidationException::withMessages(['date_of_registration' => trans('academic.date_less_than_session_end')]);
        }

        $parent_type = gv($params, 'parent_type');
        $student_type = gv($params, 'student_type');

        if (! in_array($parent_type, ['new','existing'])) {
            throw ValidationException::withMessages(['message' => trans('student.invalid_parent_type_input')]);
        }

        if (! in_array($student_type, ['new','existing'])) {
            throw ValidationException::withMessages(['message' => trans('student.invalid_student_type_input')]);
        }

        if ($student_type != 'existing') {
            if ($parent_type == 'existing') {
                $this->student_parent->findOrFail(gv($params, 'student_parent_id'));
            }

            if ($previous_institute_id) {
                $previous_institute = $this->institute->findOrFail($previous_institute_id);
            }

            $list = getVar('list');
            $genders = isset($list['gender']) ? $list['gender'] : [];
            if (! in_array($gender, $genders)) {
                throw ValidationException::withMessages(['gender' => trans('student.could_not_find_gender')]);
            }
        }

        $course_options = $course->options;
        $enable_registration = (isset($course_options['enable_registration'])) ? $course_options['enable_registration'] : config('config.enable_registration');
        $enable_registration_fee = (isset($course_options['enable_registration_fee']) && $course_options['enable_registration_fee']) ? 1 : 0;

        if (! $enable_registration) {
            throw ValidationException::withMessages(['course_id' => trans('student.course_registration_disabled')]);
        }

        $params['registration_fee'] = ($course_options && $enable_registration_fee) ? (gv($course_options, 'registration_fee')) : 0;
 
        return $params;
    }

    /**
     * Process online registration
     * @param  array  $params
     * @return Registration
     */
    public function onlineRegistration($params = array())
    {
//dd('hi');
        if (! config('config.online_registration')) {
            throw ValidationException::withMessages(['message' => trans('general.invalid_action')]);
        }

        $course_id = gv($params, 'course_id');
        $gender = gv($params, 'gender');

        $academic_session = $this->academic_session->whereIsDefault(1)->first();
        $course = $this->course->findOrFailBySessionId($course_id, optional($academic_session)->id, 'course_id');

        $list = getVar('list');
        $genders = isset($list['gender']) ? $list['gender'] : [];
        if (! in_array($gender, $genders)) {
            throw ValidationException::withMessages(['gender' => trans('student.could_not_find_gender')]);
        }

        $course_options = $course->options;
        $enable_registration = (isset($course_options['enable_registration'])) ? $course_options['enable_registration'] : config('config.enable_registration');
        $enable_registration_fee = (isset($course_options['enable_registration_fee']) && $course_options['enable_registration_fee']) ? 1 : 0;

        if (! $enable_registration) {
            throw ValidationException::withMessages(['course_id' => trans('student.course_registration_disabled')]);
        }

        $custom_values = $this->custom_field->validateCustomValues('student_online_registration', gv($params, 'custom_values', []));

        $params['registration_fee'] = ($course_options && $enable_registration_fee) ? (gv($course_options, 'registration_fee')) : 0;
    // dd('hi');
        beginTransaction();
        
        $student_parent = $this->student_parent->getExistingParent($params);

      //  $student = $this->student->getExistingStudent($params);
        $student = $this->student->getExistingStudentbyEmail($params['email']);
      //  dd($student);

        // in case of  true  dont need to create a student   we have  just get that  student  and assign registeration data 

        if($params['check']==true)
        {


        }


        



        // if ($student_parent && $student && $student->student_parent_id != $student_parent->id) {
        //     throw ValidationException::withMessages(['message' => trans('student.parent_detail_mismatch')]);
        // }

        // if (! $student_parent) {
        //     $student_parent = $this->student_parent->create($params);
        // }
        if (true) {
            $student_parent = $this->student_parent->create($params);
        }




        // in case of false it means  new student register  and make login  and assign register  data 
        if($params['check']==false)
        {
            $student = $this->student->create($params);
           // $loginCreate=$this->student->updateUserLogin($student,$params);
             $student_user = $this->user->forceCreate([
                'email'            => $params['email'],
                'username'         => $student_username='asdasdasd',
                'password'         => bcrypt($params['password']),
                'status'           => 'activated',
                'uuid'             => Str::uuid(),
                'activation_token' => Str::uuid()
            ]);
             $student_user->syncRoles([config('system.default_role.student')]);
            $params['student_parent_id'] = $student_parent->id;
            $this->student->updateParentId($student, $params);
            $this->student->createLogin($student, $student_user->id);


        }

        // if (! $student) {
        //     $student = $this->student->create($params);
        //     $params['student_parent_id'] = $student_parent->id;
        //     $this->student->updateParentId($student, $params);
        // }

        $params['date_of_registration'] = today();
        $this->student->validateStudentForRegistration($student, $params);

        $params['is_online'] = 1;

        $registration = $this->registration->forceCreate($this->formatParams($params, $student));
        $registration->registration_key = randomString(15);
        $registration->save();
        
        $options = $registration->options;
        $options['custom_values'] = mergeByKey($registration->getOption('custom_values'), $custom_values);
        $registration->options = $options;
         $registration->registration_fee_status = 'paid';
         $registration->status = 'partial';

         $registration->batch_id = gv($params, 'batch_id');
        $registration->save();


        commitTransaction();

        return $registration;
    }

    /**
     * Prepare given params for inserting into database.
     *
     * @param array $params
     * @param string $type
     * @return array
     */
    private function formatParams($params, $student)
    {
        $formatted = [
            'date_of_registration'  => toDate(gv($params, 'date_of_registration', date('Y-m-d'))),
            'registration_remarks'  => gv($params, 'registration_remarks'),
            'course_id'             => gv($params, 'course_id'),
            'registration_fee'      => gv($params, 'registration_fee', 0),
            'previous_institute_id' => gv($params, 'previous_institute_id'),
            'status'                => 'pending',
            'is_online'             => gbv($params, 'is_online')
        ];

        $formatted['student_id'] = $student->id;
        $formatted['registration_fee_status'] = $formatted['registration_fee'] ? 'unpaid' : null;

        return $formatted;
    }

    /**
     * Used to make registration fee payment
     *
     * @param array $params
     * @param Registration $registration
     * @return array
     */
    public function payment($params, $registration)
    {
        if ($registration->status == 'alloted' || ! $registration->registration_fee) {
            throw ValidationException::withMessages(['message' => trans('general.invalid_action')]);
        }

        $date              =  toDate($registration->date_of_registration);
        $account_id        = gv($params, 'account_id');
        $payment_method_id = gv($params, 'payment_method_id');
        $remarks           = gv($params, 'remarks');

        $account = $this->account->findOrFail($account_id);

        $payment_method = $this->payment_method->findOrFail($payment_method_id);

        if ($date < toDate($registration->date_of_registration)) {
            throw ValidationException::withMessages(['date' => trans('student.date_cannot_less_than_date_of_registration')]);
        }

        if (! dateLessThanSessionEnd($date)) {
            throw ValidationException::withMessages(['date' => trans('academic.date_less_than_session_end')]);
        }



        \DB::beginTransaction();

        $admission = $this->admission->forceCreate([
            'batch_id'          => $registration->batch_id,
            'date_of_admission' => $registration->date_of_registration,
            'prefix'            => 01,
            'number'            => '',
            'registration_id'   => $registration->id,
            'admission_remarks' => ''
        ]);

         \DB::commit();

        $number = $this->transaction->filterByAccountId($account->id)->filterByType(1)->max('number');
        $amount = $registration->registration_fee;

        // $this->transaction->forceCreate([
        //     'uuid'                     => Str::uuid(),
        //     'type'                     => 1,
        //     'prefix'                   => $account->prefix,
        //     'number'                   => ($number) ? $number + 1 : 1,
        //     'user_id'                  => \Auth::user()->id,
        //     'amount'                   => $amount,
        //     'account_id'               => $account_id,
        //     'head'                     => 'registration_fee',
        //     'registration_id'          => $registration->id,
        //     'date'                     => toDate($date),
        //     'remarks'                  => $remarks,
        //     'upload_token'             => Str::uuid(),
        //     'payment_method_id'        => $payment_method_id,
        //     'instrument_number'        => ($payment_method->getOption('requires_instrument_number')) ? gv($params, 'instrument_number') : null,
        //     'instrument_date'          => ($payment_method->getOption('requires_instrument_date')) ? toDate(gv($params, 'instrument_date')) : null,
        //     'instrument_clearing_date' => ($payment_method->getOption('requires_instrument_clearing_date')) ? toDate(gv($params, 'instrument_clearing_date')) : null,
        //     'instrument_bank_detail'   => ($payment_method->getOption('requires_instrument_bank_detail')) ? gv($params, 'instrument_bank_detail') : null,
        //     'reference_number'         => ($payment_method->getOption('requires_reference_number')) ? gv($params, 'reference_number') : null,
        // ]);

        $registration->status = 'alloted';
        $registration->save();

        $student = Student::where('id','=',$registration->student_id)->first();

        $mail   = $student->email;
        \Mail::send('emails.student_fee_payed', compact('amount'), function ($message) use ($mail) {
            $message->to($mail)->subject('Your Registration fee is payed!');
        });




    }

    /**
     * Used to cancel registration fee payment
     *
     * @param array $params
     * @param Registration $registration
     * @param integer $transaction_id
     * @return array
     */
    public function cancelPayment($params, $registration, $transaction_id)
    {
        $transaction = $this->transaction->with('registration')->find($transaction_id);

        if (! $transaction || $transaction->registration_id != $registration->id || $transaction->is_cancelled) {
            throw ValidationException::withMessages(['message' => trans('finance.could_not_find_transaction')]);
        }

        if ($registration->status != 'pending') {
            throw ValidationException::withMessages(['message' => trans('user.permission_denied')]);
        }

        $transaction->is_cancelled = 1;
        $transaction->cancellation_remarks = gv($params, 'cancellation_remarks');
        $transaction->save();

        $registration->registration_fee_status = 'unpaid';
        $registration->save();
    }

    /**
     * Used to update registration status
     *
     * @param array $params
     * @param Registration $registration
     * @return array
     */
    public function status($params, $registration)
    {
        $status = gv($params, 'status');

        if ($registration->status == 'alloted' || $status == 'pending') {
            throw ValidationException::withMessages(['message' => trans('general.invalid_action')]);
        }


//        if (! request('admission_remarks')) {
//            throw ValidationException::withMessages(['admission_remarks' => trans('validation.required', ['attribute' => trans('student.admission_remarks')])]);
//        }


        if ($status == 'rejected') {
            return $this->rejectRegistration($params, $registration);
        }

        if ($status == 'allotted') {
            if (! request('admission_number')) {
                throw ValidationException::withMessages(['admission_number' => trans('validation.required', ['attribute' => trans('student.admission_number')])]);
            }

            if (! is_numeric(request('admission_number'))) {
                throw ValidationException::withMessages(['admission_number' => trans('validation.numeric', ['attribute' => trans('student.admission_number')])]);
            }


            if (request('admission_number') < 0) {
                throw ValidationException::withMessages(['admission_number' => trans('validation.min.numeric', ['attribute' => trans('student.admission_number'), 'min' => 0])]);
            }

            $admission_number = ltrim(gv($params, 'admission_number'), '0');

            if (! isInteger($admission_number)) {
                throw ValidationException::withMessages(['admission_number' => trans('validation.integer', ['attribute' => trans('student.admission_number')])]);
            }

            $admission_number_prefix = gv($params, 'admission_number_prefix');

            if ($this->admission->filterByNumber($admission_number)->filterByPrefix($admission_number_prefix)->count()) {
                throw ValidationException::withMessages(['admission_number' => trans('student.admission_number_exists')]);
            }

            $date_of_admission = toDate(gv($params, 'date_of_admission'));

            if ($date_of_admission < toDate($registration->date_of_registration)) {
                throw ValidationException::withMessages(['date_of_admission' => trans('student.date_cannot_less_than_date_of_registration')]);
            }

            if (! dateLessThanSessionEnd($date_of_admission)) {
                throw ValidationException::withMessages(['date_of_admission' => trans('academic.date_less_than_session_end')]);
            }
           // dd('df');

            return $this->allotRegistration($params, $registration);
        }
    }

    /**
     * Used to reject registration
     *
     * @param array $params
     * @param Registration $registration
     * @return array
     */
    public function rejectRegistration($params, $registration)
    {
        $registration->status = 'rejected';
        $registration->rejection_remarks = gv($params, 'rejection_remarks');
        $registration->save();

        return $registration;
    }

    /**
     * Used to allot registration
     *
     * @param array $params
     * @param Registration $registration
     * @return array
     */
    public function allotRegistration($params, $registration)
    {
        $batch = $this->batch->findOrFail(gv($params, 'batch_id'));
        $gender = gv($params, 'gender');

        $fee_allocation = $this->fee_allocation->filterBySession()->where(function ($q) use ($batch) {
            $q->where('batch_id', $batch->id)->orWhere('course_id', $batch->course_id);
        })->first();

        if (! $fee_allocation) {
            throw ValidationException::withMessages(['batch_id' => trans('finance.no_fee_allocated')]);
        }
       // dd($fee_allocation);

        $transport_circle_id = gv($params, 'transport_circle_id');

        if ($transport_circle_id && ! $this->transport_circle->find($transport_circle_id)) {
            throw ValidationException::withMessages(['transport_circle_id' => trans('transport.could_not_find_circle')]);
        }

        $fee_concession_id = gv($params, 'fee_concession_id');

        if ($fee_concession_id && ! $this->fee_concession->find($fee_concession_id)) {
            throw ValidationException::withMessages(['fee_concession_id' => trans('finance.could_not_find_fee_concession')]);
        }

        $student_id =$registration->Student->id;
        $bookedRoomChecked=$this->room->checkRoomBookedBySameUser($student_id);
         //dd(gv($params, 'room_id'));
        $check_room=gv($params, 'room_id');
        //dd($check_room);
        if ($bookedRoomChecked &&  $check_room) {
            throw ValidationException::withMessages(['room_id' => 'User Already Booked Room']);
        }

        $this->student->validateStudentForRegistration($registration->student, [
            'course_id' => $registration->course_id,
            'date_of_registration' => $registration->date_of_registration
        ]);
        


        \DB::beginTransaction();

        // $admission = $this->admission->forceCreate([
        //     'batch_id'          => gv($params, 'batch_id'),
        //     'date_of_admission' => toDate(gv($params, 'date_of_admission')),
        //     'prefix'            => gv($params, 'admission_number_prefix'),
        //     'number'            => gv($params, 'admission_number'),
        //     'registration_id'   => $registration->id,
        //     'admission_remarks' => gv($params, 'admission_remarks')
        // ]);
        
        if ($room_id=gv($params, 'room_id')) {
            $batch_id=gv($params, 'batch_id');
            $bookingRoom=$this->room->updateRoomCountAndCreateRoomBookedCustom($room_id,$registration->Student->id,gv($params, 'batch_id'),$gender);

            # code...
        }

        // $student_record = $this->student_record->forceCreate([
        //     'admission_id'        => isset($admission) ? $admission->id : null,
        //     'academic_session_id' => config('config.default_academic_session.id'),
        //     'batch_id'            => gv($params, 'batch_id'),
        //     'fee_allocation_id'   => $fee_allocation->id,
        //     'date_of_entry'       => toDate(gv($params, 'date_of_admission')),
        //     'student_id'          => $registration->Student->id,
        //     'entry_remarks'       => gv($params, 'admission_remarks')
        // ]);

        // $installments = array();
        // foreach ($fee_allocation->FeeAllocationGroups as $fee_allocation_group) {
        //     foreach ($fee_allocation_group->FeeInstallments as $fee_installment) {
        //         $installments[] = array(
        //             'student_record_id'  => $student_record->id,
        //             'fee_installment_id' => $fee_installment->id,
        //             'transport_circle_id' => $transport_circle_id ? : null,
        //             'fee_concession_id' => $fee_concession_id ? : null,
        //             'status' => 'unpaid'
        //         );
        //     }
        // }

       // $this->student_fee_record->insert($installments);

        $registration->status = 'pending';
      
     
        $registration->save();
         //dd('hi');

        \DB::commit();

        return $registration;
    }

    /**
     * Update given registration.
     *
     * @param Registration $registration
     * @param array $params
     *
     * @return Registration
     */
    public function update(Registration $registration, $params)
    {
        $date_of_registration  = toDate(gv($params, 'date_of_registration'));
        $course_id             = gv($params, 'course_id');
        $previous_institute_id = gv($params, 'previous_institute_id');

        $course = $this->course->findOrFail($course_id, 'date_of_registration');

        if (! dateLessThanSessionEnd($date_of_registration)) {
            throw ValidationException::withMessages(['date_of_registration' => trans('academic.date_less_than_session_end')]);
        }

        if ($registration->status != 'pending') {
            throw ValidationException::withMessages(['message' => trans('user.permission_denied')]);
        }

        if ($previous_institute_id) {
            $previous_institute = $this->institute->findOrFail($previous_institute_id);
        }

        $this->student->validateStudentForRegistration($registration->student, [
            'course_id' => $course_id,
            'date_of_registration' => $date_of_registration
        ]);

        if ($registration->registration_fee_status == 'paid') {
            $transaction = $registration->Transactions->first();
            $date_of_payment = ($transaction) ? toDate($transaction->date) : null;

            if ($date_of_registration > $date_of_payment) {
                throw ValidationException::withMessages(['message' => trans('student.date_of_registration_cannot_greater_than_date_of_payment')]);
            }
        }

        $custom_values = $this->custom_field->validateCustomValues('student_registration', gv($params, 'custom_values', []));

        $registration->date_of_registration  = toDate($date_of_registration);
        $registration->course_id             = $course_id;
        $registration->previous_institute_id = $previous_institute_id;
        $registration->registration_remarks  = gv($params, 'registration_remarks');

        if ($registration->registration_fee_status == 'unpaid' || !$registration->registration_fee_status) {
            $registration->registration_fee = gv($params, 'registration_fee', 0);
            $registration->registration_fee_status = ($registration->registration_fee) ? 'unpaid' : null;
        }

        $registration->save();

        $options = $registration->options;
        $options['custom_values'] = mergeByKey($registration->getOption('custom_values'), $custom_values);
        $registration->options = $options;
        $registration->save();
        
        return $registration;
    }

    /**
     * Find registration & check it can be deleted or not.
     *
     * @param integer $id
     * @return Registration
     */
    public function deletable($id)
    {
        $registration = $this->findOrFail($id);

        if ($registration->status != 'pending') {
            throw ValidationException::withMessages(['message' => trans('student.pending_registrations_can_be_deleted')]);
        }

        if ($registration->transactions()->count()) {
            throw ValidationException::withMessages(['message' => trans('student.registration_associated_with_transactions')]);
        }

        return $registration;
    }

    /**
     * Delete registration.
     *
     * @param integer $id
     * @return bool|null
     */
    public function delete(Registration $registration)
    {
        return $registration->delete();
    }

    /**
     * Delete multiple registrations.
     *
     * @param array $ids
     * @return bool|null
     */
    public function deleteMultiple($ids)
    {
        return $this->registration->whereIn('id', $ids)->delete();
    }

    /**
     * Validate fee receipt.
     *
     * @param Registration $registration
     * @param integer $transaction_id
     * @return null
     */
    public function validateFeeReceipt(Registration $registration, $transaction_id)
    {
        $transaction = $registration->Transactions->firstWhere('id', $transaction_id);

        if (! $transaction) {
            throw ValidationException::withMessages(['message' => trans('general.invalid_action')]);
        }

        return $transaction;
    }
}
