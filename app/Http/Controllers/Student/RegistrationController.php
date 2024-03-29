<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Http\Requests\Student\OnlineRegistrationRequest;
use App\Http\Requests\Student\RegistrationFeeRequest;
use App\Http\Requests\Student\RegistrationRequest;
use App\Http\Requests\Student\RegistrationUpdateRequest;
use App\Http\Requests\Student\RegistrationUpdateStatusRequest;
use App\Models\Student\Registration;
use App\Repositories\Student\RegistrationRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
//use Mollie\Laravel\Facades\Mollie;
use Auth;

class RegistrationController extends Controller
{
    protected $request;
    protected $repo;

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(
        Request $request,
        RegistrationRepository $repo
    ) {
        $this->request = $request;
        $this->repo = $repo;
    }

    /**
     * Used to get pre requisites
     * @get ("/api/registration/pre-requisite")
     * @return Response
     */
    public function preRequisite()
    {
        $this->authorize('preRequisite', Registration::class);

        return $this->success($this->repo->getPreRequisite());
    }
    public function getAvailableRoom(Request $request)
    {
        //$this->authorize('preRequisite', Registration::class);
        //dd($request->all());

        return $this->success($this->repo->getAvailableRoom($request));
    }

    /**
     * Used to get fee pre requisites
     * @get ("/api/registration/fee/pre-requisite")
     * @return Response
     */
    public function feePreRequisite()
    {
        $this->authorize('feePayment', Registration::class);
       //   dd($this->request->get('reg_id'));
        return $this->success($this->repo->getFeePreRequisite($this->request->get('reg_id')));
    }

    /**
     * Used to get status pre requisites
     * @get ("/api/registration/status/pre-requisite")
     * @return Response
     */
    public function statusPreRequisite()
    {
        $this->authorize('updateStatus', Registration::class);

        return $this->success($this->repo->getStatusPreRequisite());
    }

    /**
     * Used to get all Registrations
     * @get ("/api/registration")
     * @return Response
     */
    public function index()
    {
        $this->authorize('list', Registration::class);
// dd($this->request->all());
        $registrations = $this->repo->paginate($this->request->all());

        $filters = $this->repo->getFilters();
       

        return $this->success(compact('registrations', 'filters'));
    }
    public function molliePaymentRegisterOnline2()
{
    dd('sdf');
    // $payment = Mollie::api()->payments->create([
    //     "amount" => [
    //         "currency" => "EUR",
    //         "value" => "10.00" // You must send the correct number of decimals, thus we enforce the use of strings
    //     ],
    //     "description" => "Order #12345",
    //     //"redirectUrl" => 'http://yogaschool.test/online-registration2',
    //     //"webhookUrl" => 'http://yogaschool.test/online-registration2',
    //     "metadata" => [
    //         "order_id" => "12345",
    //     ],
    // ]);

    // redirect customer to Mollie checkout page
    return $this->success(['message' => $payment]);
    return redirect($payment, 303);
}
    public function stripePaymentRegister()
    { dd('sdf');

       $this->authorize('list', Registration::class);
         $this->repo->stripePaymentRegister($this->request->all());

        return $this->success(['message' => trans('finance.fee_paid')]);
    }
    public function stripePaymentRegisterOnline()
    {
      dd('sdf');
       //$this->authorize('list', Registration::class);
         $this->repo->stripePaymentRegisterOnline($this->request->all());

        return $this->success(['message' => trans('finance.fee_paid')]);
    }
    
    public function indexRoom()
    {
        $this->authorize('list', Registration::class);
// dd($this->request->all());
        $registrations = $this->repo->paginate($this->request->all());

        $filters = $this->repo->getFilters();
       // dd($registrations[0]->student_id);
       $room_alloted = $this->repo->getUserRoom($registrations[0]->student_id);
        // $room_alloted = null;

        return $this->success(compact('registrations', 'filters','room_alloted'));
    }

    /**
     * Used to print all Registrations
     * @post ("/api/registration/print")
     * @return Response
     */
    public function print()
    {
        $registrations = $this->repo->print(request('filter'));

        return view('print.student.registration', compact('registrations'))->render();
    }

    /**
     * Used to generate pdf all Registrations
     * @post ("/api/registration/pdf")
     * @return Response
     */
    public function pdf()
    {
        $registrations = $this->repo->print(request('filter'));

        $uuid = Str::uuid();
        $pdf = \PDF::loadView('print.student.registration', compact('registrations'))->save('../storage/app/downloads/'.$uuid.'.pdf');

        return $uuid;
    }

    /**
     * Used to get Registration detail
     * @get ("/api/registration/{id}")
     * @param ({
     *      @Parameter("id", type="integer", required="true", description="Id of Registration"),
     * })
     * @return Response
     */
    public function show($id)
    {
        $registration = $this->repo->findOrFail($id);

        $this->authorize('show', Registration::class);

        $registration_custom_fields = $this->repo->getRegistrationCustomField();
        $online_registration_custom_fields = $this->repo->getOnlineRegistrationCustomField();
       
        
        return $this->success(compact('registration','registration_custom_fields','online_registration_custom_fields'));
    }

    /**
     * Used to store Registration
     * @post ("/api/registration")
     * @param ({
     *      @Parameter("first_name", type="string", required="true", description="First Name of Student"),
     *      @Parameter("middle_name", type="string", required="optional", description="Middle Name of Student"),
     *      @Parameter("last_name", type="string", required="true", description="Last Name of Student"),
     *      @Parameter("first_guardian_name", type="string", required="true", description="First Guardian of Student"),
     *      @Parameter("second_guardian_name", type="string", required="true", description="Second Guardian of Student"),
     *      @Parameter("date_of_birth", type="date", required="true", description="Date of Birth of Student"),
     *      @Parameter("date_of_registration", type="date", required="true", description="Date of Registration of Student"),
     *      @Parameter("contact_number", type="string", required="true", description="Contact Number of Student"),
     *      @Parameter("gender", type="string", required="true", description="Gender of Student"),
     *      @Parameter("course_id", type="integer", required="true", description="Course for Registration"),
     * })
     * @return Response
     */
    public function store(RegistrationRequest $request)
    {
        $this->authorize('create', Registration::class);

        $registration = $this->repo->create($this->request->all());

        return $this->success(['message' => trans('student.registration_completed')]);
    }

    /**
     * Used to update Registration
     * @patch ("/api/registration/{id}")
     * @param ({
     *      @Parameter("id", type="integer", required="true", description="Id of Registration"),
     *      @Parameter("course_id", type="integer", required="true", description="Id of Course"),
     *      @Parameter("date_of_registration", type="date", required="true", description="Date of Registration of Student"),
     *      @Parameter("registration_fee", type="integer", required="true", description="Registration Fee"),
     *      @Parameter("registration_remarks", type="text", required="optional", description="Registration Remarks")
     * })
     * @return Response
     */
    public function update($id, RegistrationUpdateRequest $request)
    {
        $this->authorize('update', Registration::class);

        $registration = $this->repo->findOrFail($id);

        $registration = $this->repo->update($registration, $this->request->all());

        return $this->success(['message' => trans('student.registration_updated')]);
    }

    /**
     * Used to store registration fee
     * @get ("/api/registration/{id}/fee/payment")
     * @param ({
     *      @Parameter("id", type="integer", required="true", description="Id of Registration"),
     * })
     * @return Response
     */
    public function feePayment(RegistrationFeeRequest $request, $id)
    {
        $registration = $this->repo->findOrFailAgain($id);

        $this->authorize('feePayment', Registration::class);
        
        $this->repo->payment($this->request->all(), $registration);

        return $this->success(['message' => trans('student.registration_fee_paid')]);
    }

    /**
     * Used to print Fee Receipt
     * @post ("/api/registration/{id}/fee/{transaction_id}/print")
     * @return Response
     */
    public function printReceipt($id, $transaction_id)
    {
        $registration = $this->repo->findOrFail($id);

        $transaction = $this->repo->validateFeeReceipt($registration, $transaction_id);

        return view('print.student.registration-fee-receipt', compact('registration', 'transaction'))->render();
    }

    /**
     * Used to update registration status
     * @get ("/api/registration/{id}/update/status")
     * @param ({
     *      @Parameter("id", type="integer", required="true", description="Id of Registration"),
     * })
     * @return Response
     */
    public function updateStatus(RegistrationUpdateStatusRequest $request, $id)
    {
        $registration = $this->repo->findOrFailAgain($id);

        $this->authorize('updateStatus', Registration::class);
      //dd($this->request->all());
        $registration = $this->repo->status($this->request->all(), $registration);

        return $this->success(['message' => trans('student.registration_status_updated')]);
    }

    /**
     * Used to cancel registration fee transaction
     * @get ("/api/registration/{id}/transaction/{transaction_id}/cancel")
     * @param ({
     *      @Parameter("id", type="integer", required="true", description="Id of Registration"),
     *      @Parameter("transaction_id", type="integer", required="true", description="Id of Transaction"),
     * })
     * @return Response
     */
    public function cancelPayment($id, $transaction_id)
    {
        request()->validate([
            'cancellation_remarks' => 'required|min:20'
        ]);

        $registration = $this->repo->findOrFail($id);

        $this->authorize('feePayment', Registration::class);

        $this->repo->cancelPayment($this->request->all(), $registration, $transaction_id);

        return $this->success(['message' => trans('student.registration_fee_cancelled')]);
    }

    /**
     * Used to delete Registration
     * @delete ("/api/registration/{id}")
     * @param ({
     *      @Parameter("id", type="integer", required="true", description="Id of Registration"),
     * })
     * @return Response
     */
    public function destroy($id)
    {
        $this->authorize('delete', Registration::class);

        $registration = $this->repo->deletable($id);

        $this->repo->delete($registration);

        return $this->success(['message' => trans('student.registration_deleted')]);
    }

    public function onlineRegistration(OnlineRegistrationRequest $request)
    {    
        
      //  dd($this->request->all());
        if (request()->get('section_no')!='final') {

            if (request()->get('check') && request()->get('section_no')==2) {

                $credentials = $request->only(['email', 'password']);
                        if (Auth::attempt($credentials)) {
                    
                        return response()->json([
                            'message' => 'Authentication was successful.',
                            'user' => Auth::user(),
                            'gender'=>Auth::user()->student->gender,
                        ], 200);
                    } else {
                        // Authentication was not successful.
                      
                          return response(['errors'=>['email' => ['The provided credentials are incorrect.']]], 422);
                    }

            }
              return response()->json([
                    'message' => 'Form '.request()->get('section_no').' is valid',
                   
                ], 200);
        }

        $credentials = $request->only(['email', 'password']);
//dd($credentials);
        if(request()->get('check'))
        {
            if (Auth::attempt($credentials)) {
            // Authentication was successful.
                // return response()->json([
                //     'message' => 'Authentication was successful.',
                //     'user' => Auth::user()
                // ], 200);
            } else {
                // Authentication was not successful.
              
                  return response(['errors'=>['email' => ['The provided credentials are incorrect.']]], 422);
            }
        }


         //exit;
         
$this->repo->onlineRegistration($this->request->all());

         



        return $this->success(['message' => config('config.online_registration_success_message')]);
    }
}
