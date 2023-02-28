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
use Mollie\Laravel\Facades\Mollie;

class HomeController extends Controller
{
    protected $request;
    protected $repo;
    protected $employee;
    protected $student_record;

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(
        Request $request,
        HomeRepository $repo,
        EmployeeRepository $employee,
        StudentRecordRepository $student_record
    ) {
        $this->request = $request;
        $this->repo = $repo;
        $this->employee = $employee;
        $this->student_record = $student_record;
        Mollie::api()->setApiKey('test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM');
    }

    /**
     * Used to test web route
     */

    public function preparePayment()
    {
              $payment = Mollie::api()->payments->create([
        "amount" => [
            "currency" => "EUR",
            "value" => "10.00" // You must send the correct number of decimals, thus we enforce the use of strings
        ],
        "description" => "Order #12345",
        "redirectUrl" => route('mollie.sucess'),]);
       $payments= Mollie::api()->payments()->get($payments->id);
       return redirect($payments->getCheckoutUrl(),303);
        
    }
    public function paymentSuccess()
    {
        echo 'payment recieved';
    }
    public function test()
    {
        $mollie = new \Mollie\Api\MollieApiClient();
$mollie->setApiKey("test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM");
//$mollie->setAccessToken("access_2FpfJqsNQk6cHvtcBwJ4E23HBJp2ahNdAN3EvPx5");
  //dd($mollie);
// setApiKey
// setAccessToken
      //  dd('sdf');
    $payment = $mollie->payments->create([
        "amount" => [
            "currency" => "EUR",
            "value" => "10.00" // You must send the correct number of decimals, thus we enforce the use of strings
        ],
        "description" => "Order #12345",
        "redirectUrl" => 'http://yogaschool.test/online-registration2',
        "webhookUrl" => 'http://yogaschool.test/online-registration2',
        "metadata" => [
            "order_id" => "12345",
        ],
    ]); dd($payment);

    // redirect customer to Mollie checkout page
    return $this->success(['message' => $payment]);
    return redirect($payment, 303);
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
