<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Repositories\HomeRepository;
use Spatie\Activitylog\Models\Activity;
use Spatie\Permission\Models\Permission;
use App\Repositories\Employee\EmployeeRepository;
use App\Repositories\Student\StudentRecordRepository;
use App\Repositories\Student\RegistrationRepository;
use App\Models\Student\Payments;
require_once __DIR__ . "/../../../vendor/mollie-api-php/vendor/autoload.php";
// require_once __DIR__ . "/../../../functions.php";

class HomeController extends Controller
{
    protected $request;
    protected $repo;
    protected $employee;
    protected $student_record;
    protected $mollie;
    protected $reg_repo;

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(
        Request $request,
        HomeRepository $repo,
        EmployeeRepository $employee,
        StudentRecordRepository $student_record,
        RegistrationRepository $reg_repo
    ) {
        $this->request = $request;
        $this->repo = $repo;
        $this->employee = $employee;
        $this->student_record = $student_record;
        $this->reg_repo=$reg_repo;

        $this->mollie = new \Mollie\Api\MollieApiClient();

$this->mollie->setApiKey("test_rUsJFr4VQ8KBRTJjthd2yVApd4c2x3");

    }

    /**
     * Used to test web route
     */

    public function preparePayment()
     {   
     
    //dd($this->request->all());
      static $payment_id;

$payment_id=0;
      $order_id=time();
      //         $payment = $this->mollie->payments->create([
      //   "amount" => [
      //       "currency" => "EUR",
      //       "value" => "10.00" // You must send the correct number of decimals, thus we enforce the use of strings
      //   ],
      //   'metadata'    => array(
      //   'order_id' => $order_id,
      // ),
      //   "description" => "Order #12345",
      //   // "redirectUrl" => route('mollie.sucess'),
      //   'redirectUrl' => route('mollie.sucess').'?payment_id='.$order_id,
      // // 'webhookUrl' => route('mollie.hook')

      // ],

      // );
//$payment_id=$payment->id;
             // dd($payment_id);

     
     $data=$this->request->all();
     unset($data['registrationForm']['originalData']);
    
              

  $payment = $this->mollie->payments->create([
        "amount" => [
            "currency" => "EUR",
            "value" => "10.00" // You must send the correct number of decimals, thus we enforce the use of strings
        ],
        'metadata'    => array(
        'order_id' => $order_id,
      ),
        "description" => "Order #12345",
        // "redirectUrl" => route('mollie.sucess'),
        'redirectUrl' => route('mollie.sucess').'?payment_id='.$data['registrationForm']['email'].'_'.$order_id,
      // 'webhookUrl' => route('mollie.hook')

      ],

      );




$reg_form=json_encode($data['registrationForm']);



               //dd($reg_form);
//dd(unset($data['registrationForm']['originalData']));
             Payments::create(['payment_type'=>'mollie','payment_id'=>$data['registrationForm']['email'].'_'.$order_id,'reg_form'=>$reg_form,'status'=>'pending','mollie_payment_id'=>$payment->id]);


             

// $order_id = time();
  //             $payment = $this->mollie->payments->create(
  //   array(
  //     'amount'      =>'10.00',
  //     'description' => 'Asim One',
  //     'redirectUrl' => 'http://www.registration.arhantayoga.org/pg-nl/pay-confirmation.php?order_id='. 12,
  //     'metadata'    => array(
  //       'order_id' => '12',
  //     ),
  //     'webhookUrl' => 'http://www.registration.arhantayoga.org/pg-nl/webhook.php'
  //   )
  // );
      // $payments= Mollie::api()->payments()->get($payments->id);
              return $this->success($payment);
       //return redirect($payment->_links->checkout->href);
        
    }
    public function paymentHook()
    {    $this->request->all();
      $data=json_encode($this->request->all());
       Payments::create(['payment_type'=>'mollie','payment_id'=>1,'reg_form'=>$data,'status'=>'pending']);
        echo 'payment hook';
    }
    public function paymentSuccess()
    {   

     $dbpayment=Payments::where('payment_id',$this->request->get('payment_id'))->first();
      $payment  = $this->mollie->payments->get($dbpayment->mollie_payment_id);
             //dd($payment);

             if ($payment->status=='paid') {
              $data=[];
              $reg_form= json_decode($dbpayment->reg_form);
              $data=(array)$reg_form;
              // echo "<pre>";
              // print_r($data);exit;
              // dd($data);
              $this->reg_repo->onlineRegistration($data);
              // echo "<pre>";
              // print_r($reg_form);exit;
             }
    // $data=json_encode($this->request->all());

      // Payments::create(['payment_type'=>'mollie','payment_id'=>1,'reg_form'=>$data,'status'=>'pending']);
    return  redirect('online-registration2?payment_status=verified');
    // return redirect()->route('/online-registration');
      //  echo 'payment recieved';
    }
    public function test()
    {
//         $mollie = new \Mollie\Api\MollieApiClient();
// $mollie->setApiKey("test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM");
//$mollie->setAccessToken("access_2FpfJqsNQk6cHvtcBwJ4E23HBJp2ahNdAN3EvPx5");
  //dd($mollie);
// setApiKey
// setAccessToken
      //  dd('sdf');
    // $payment = $mollie->payments->create([
    //     "amount" => [
    //         "currency" => "EUR",
    //         "value" => "10.00" // You must send the correct number of decimals, thus we enforce the use of strings
    //     ],
    //     "description" => "Order #12345",
    //     "redirectUrl" => 'http://yogaschool.test/online-registration2',
    //     "webhookUrl" => 'http://yogaschool.test/online-registration2',
    //     "metadata" => [
    //         "order_id" => "12345",
    //     ],
    // ]); dd($payment);

    // redirect customer to Mollie checkout page
    // return $this->success(['message' => $payment]);
    // return redirect($payment, 303);
    }

    /**
     * Used to get Dashboard statistics
     */
    public function dashboard()
    {
        return $this->success($this->repo->getData());
    }

    /**
     * Used to get student strength chart
     */
    public function studentStrengthChart()
    {
        return $this->success($this->repo->getStudentStrengthChartData($this->request->all()));
    }

    /**
     * Used to get library book log chart
     */
    public function libraryBookLogChart()
    {
        return $this->success($this->repo->getLibraryBookLogChartData($this->request->all()));
    }

    /**
     * Used to get calendar events
     */
    public function calendarEvents()
    {
        return $this->success($this->repo->getCalendarEventData());
    }

    /**
     * Used to search result
     */
    public function search()
    {
        $student_records = $this->student_record->search(request('q'));
        $employees = $this->employee->search(request('q'));
        return $this->success(compact('student_records','employees'));
    }

    /**
     * Used to get demo message for test mode
     */
    public function demoMessage()
    {
        return view('message')->render();
    }

    /**
     * Used to download pdf reports
     */
    public function download($uuid = null)
    {
        $filename = 'downloads/'.$uuid.'.pdf';
        
        if (! \Storage::exists($filename)) {
            return view('errors.file-not-found');
        }

        $download_path = storage_path('app/'.$filename);
        return response()->download($download_path, 'report.pdf');
    }
}
