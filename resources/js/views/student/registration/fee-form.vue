<template>
    <div class="card card-form">
        <div class="card-body">
			<h4 class="card-title">{{trans('student.pay_registration_fee')}} {{formatCurrency(registration.registration_fee)}}</h4>

			<form @submit.prevent="submit" @keydown=""  v-if="feeSubmissionForRole==false && registration.status=='pending'" style="padding: 1%">
                                    <div class="table-responsive p-2">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>{{trans('finance.fee_installment')}}</th>
                                                    <th class="text-right">{{trans('finance.installment_total')}}</th>
                                                    <th class="text-right">{{trans('finance.late_fee')}}</th>
                                                    <th class="text-right">{{trans('general.total')}}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr >
                                                    <td v-text="">Remaining fee Payable</td>
                                                    <td class="text-right" v-text=""></td>
                                                    <td class="text-right">
                                                        0
                                                    </td>
                                                    <td class="text-right" v-text="remaining_fee"></td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>{{trans('general.total')}}</th>
                                                    <th colspan="2"></th>
                                                    <th class="text-right">{{remaining_fee}}</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div class="col-12 col-sm-6">
		                <div class="form-group">
		                    <label for="">{{trans('finance.date_of_payment')}}</label>
		                    <datepicker v-model="registrationFeeForm.date" :bootstrapStyling="true" @selected="registrationFeeForm.errors.clear('date')" :placeholder="trans('student.date_of_payment')"></datepicker>
		                    <show-error :form-name="registrationFeeForm" prop-name="date"></show-error>
		                </div>
		            </div>
                                    <div>
                                        <h4 class="card-title">{{trans('finance.choose_payment_gateway')}}</h4>
                                        <div class="radio radio-success" v-if="getConfig('razorpay') && razorpay_loaded">
                                            <input type="radio" name="payment_gateway" id="razorpay" value="razorpay" @change="setPaymentGateway('razorpay')">
                                            <label for="razorpay"> 
                                                Razorpay 
                                            </label>
                                        </div>
                                        <div class="radio radio-success" v-if="getConfig('billdesk')">
                                            <input type="radio" name="payment_gateway" id="billdesk" value="billdesk" @change="setPaymentGateway('billdesk')">
                                            <label for="billdesk"> Billdesk </label>
                                        </div>
                                        <div class="radio radio-success" v-if="getConfig('stripe')">
                                            <input type="radio" name="payment_gateway" id="stripe" value="stripe" @change="setPaymentGateway('stripe')">
                                            <label for="stripe"> Stripe </label>
                                        </div>
                                        <div class="radio radio-success" >
                                            <input type="radio" name="payment_gateway" id="billdesk" value="billdesk" @change="setPaymentGateway('mollie')">
                                            <label for="billdesk"> Mollie </label>
                                        </div>
                                         <template v-if="payment_gateway == 'mollie'">
                                            <button type="button" @click="mollieCheckout" class="btn btn-info waves-effect waves-light pull-right"  style="margin-right: 2%" v-if="stripeButton"><span>{{trans('general.proceed')}}</span></button>

                                         </template>
                                        <div class="radio radio-success" v-if="getConfig('paystack')">
                                            <input type="radio" name="payment_gateway" id="paystack" value="paystack" @change="setPaymentGateway('paystack')">
                                            <label for="paystack"> Paystack </label>
                                        </div>
                                        <div class="radio radio-success" v-if="getConfig('paypal')">
                                            <input type="radio" name="payment_gateway" id="paypal" value="paypal" @change="setPaymentGateway('paypal')">
                                            <label for="paypal"> Paypal </label>
                                        </div>

                                      

                                        <template v-if="payment_gateway == 'billdesk'">
                                            <button type="button" class="btn btn-info" @click="callBillDesk">{{trans('general.proceed')}}</button>
                                        </template>

                                        <template v-if="payment_gateway == 'razorpay'">
                                            <button type="button" class="btn btn-info" @click="callRazorpay">{{trans('general.proceed')}}</button>
                                        </template>

                                        <template v-if="payment_gateway == 'paystack'">
                                            <button type="button" class="btn btn-info" @click="payWithPaystack">{{trans('general.proceed')}}</button>
                                        </template>

                                        <template v-if="payment_gateway == 'paypal'">
                                            <button type="button" class="btn btn-info" @click="callPaypal" v-if="paypalButton">{{trans('general.proceed')}}</button>
                                        </template>

                                        <template v-if="payment_gateway == 'stripe'">
                                            <div class="row m-t-40">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <input class="form-control" type="number" maxlength="16" value="" v-model="stripe.card_number" :placeholder="trans('finance.card_number')">
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="form-group">
                                                        <input class="form-control" type="number" value="" v-model="stripe.month" :placeholder="trans('finance.card_expiry_month')">
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <input class="form-control" type="number" value="" v-model="stripe.year" :placeholder="trans('finance.card_expiry_year')">
                                                    </div>
                                                </div>
                                                <div class="col-1">
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <input class="form-control" type="number" value="" v-model="stripe.cvc" :placeholder="trans('finance.card_cvc')">
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" @click="stripeCheckout" class="btn btn-info waves-effect waves-light pull-right"  style="margin-right: 2%" v-if="stripeButton"><span>{{trans('general.proceed')}}</span></button>
                                        </template>
                                    </div>
                                </form>
		    <form @submit.prevent="submit" @keydown="registrationFeeForm.errors.clear($event.target.name)"  v-if="feeSubmissionForRole==true && registration.status=='partial' ">
		        <div class="row">
		            <div class="col-12 col-sm-6">
		                <div class="form-group">
		                    <label for="">{{trans('finance.account')}}</label>
		                    <v-select label="name" v-model="selected_account" name="account_id" id="account_id" :options="accounts" :placeholder="trans('account.select_account')" @select="onAccountSelect" @close="registrationFeeForm.errors.clear('account_id')" @remove="registrationFeeForm.account_id = ''">
                                <div class="multiselect__option" slot="afterList" v-if="!accounts.length">
                                    {{trans('general.no_option_found')}}
                                </div>
                            </v-select>
		                    <show-error :form-name="registrationFeeForm" prop-name="account_id"></show-error>
		                </div>
		            </div>
		            <div class="col-12 col-sm-6">
		                <div class="form-group">
		                    <label for="">{{trans('finance.date_of_payment')}}</label>
		                    <datepicker v-model="registrationFeeForm.date" :bootstrapStyling="true" @selected="registrationFeeForm.errors.clear('date')" :placeholder="trans('student.date_of_payment')"></datepicker>
		                    <show-error :form-name="registrationFeeForm" prop-name="date"></show-error>
		                </div>
		            </div>
		            <div class="col-12 col-sm-6">
		                <div class="form-group">
		                    <label for="">{{trans('finance.payment_method')}}</label>
		                    <v-select label="name" v-model="selected_payment_method" name="payment_method_id" id="payment_method_id" :options="payment_methods" :placeholder="trans('payment_method.select_payment_method')" @select="onPaymentMethodSelect" @close="registrationFeeForm.errors.clear('payment_method_id')" @remove="onPaymentMethodRemove">
                                <div class="multiselect__option" slot="afterList" v-if="!payment_methods.length">
                                    {{trans('general.no_option_found')}}
                                </div>
                            </v-select>
		                    <show-error :form-name="registrationFeeForm" prop-name="payment_method_id"></show-error>
		                </div>
		            </div>
		            <div class="col-12 col-sm-6" v-if="getPaymentMethodDetail('instrument_number')">
		                <div class="form-group">
		                    <label for="">{{trans('finance.instrument_number')}}</label>
                    		<input class="form-control" type="text" v-model="registrationFeeForm.instrument_number" name="instrument_number" :placeholder="trans('finance.instrument_number')">
		                    <show-error :form-name="registrationFeeForm" prop-name="instrument_number"></show-error>
		                </div>
		            </div>
		            <div class="col-12 col-sm-6" v-if="getPaymentMethodDetail('instrument_date')">
		                <div class="form-group">
		                    <label for="">{{trans('finance.instrument_date')}}</label>
		                    <datepicker v-model="registrationFeeForm.instrument_date" :bootstrapStyling="true" @selected="registrationFeeForm.errors.clear('instrument_date')" :placeholder="trans('finance.instrument_date')"></datepicker>
		                    <show-error :form-name="registrationFeeForm" prop-name="instrument_date"></show-error>
		                </div>
		            </div>
		            <div class="col-12 col-sm-6" v-if="getPaymentMethodDetail('instrument_bank_detail')">
		                <div class="form-group">
		                    <label for="">{{trans('finance.instrument_bank_detail')}}</label>
                    		<input class="form-control" type="text" v-model="registrationFeeForm.instrument_bank_detail" name="instrument_bank_detail" :placeholder="trans('finance.instrument_bank_detail')">
		                    <show-error :form-name="registrationFeeForm" prop-name="instrument_bank_detail"></show-error>
		                </div>
		            </div>
		            <div class="col-12 col-sm-6" v-if="getPaymentMethodDetail('instrument_clearing_date')">
		                <div class="form-group">
		                    <label for="">{{trans('finance.instrument_clearing_date')}}</label>
		                    <datepicker v-model="registrationFeeForm.instrument_clearing_date" :bootstrapStyling="true" @selected="registrationFeeForm.errors.clear('instrument_clearing_date')" :placeholder="trans('finance.instrument_clearing_date')"></datepicker>
		                    <show-error :form-name="registrationFeeForm" prop-name="instrument_clearing_date"></show-error>
		                </div>
		            </div>
		            <div class="col-12 col-sm-6" v-if="getPaymentMethodDetail('reference_number')">
		                <div class="form-group">
		                    <label for="">{{trans('finance.reference_number')}}</label>
                    		<input class="form-control" type="text" v-model="registrationFeeForm.reference_number" name="reference_number" :placeholder="trans('finance.reference_number')">
		                    <show-error :form-name="registrationFeeForm" prop-name="reference_number"></show-error>
		                </div>
		            </div>
		            <div class="col-12 col-sm-12">
		                <div class="form-group">
		                    <label for="">{{trans('student.registration_fee_remarks')}}</label>
		                    <autosize-textarea v-model="registrationFeeForm.remarks" rows="2" name="remarks" :placeholder="trans('student.registration_fee_remarks')"></autosize-textarea>
		                    <show-error :form-name="registrationFeeForm" prop-name="remarks"></show-error>
		                </div>
		            </div>
		        </div>
                <div class="card-footer text-right">
                    <button type="submit" class="btn btn-info waves-effect waves-light">{{trans('general.save')}}</button>
                </div>
		    </form>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		props: ['registration'],
		data() {
			return {
				feeSubmissionForRole:true,
				payment_gateway: '',
                registrationFeeForm: new Form({
                    account_id: '',
                    payment_method_id: '',
                    date: '',
                    instrument_date: '',
                    instrument_number: '',
                    instrument_clearing_date: '',
                    instrument_bank_detail: '',
                    reference_number: '',
                    remarks: ''
                }),
                stripe: {
                    card_number: '',
                    month: '',
                    year: '',
                    cvc: ''
                },
                stripeButton: true,
                selected_account: null,
                accounts: [],
                payment_methods: [],
                selected_payment_method: null,
                payment_method_details: [],
                payment_method_detail: {},
                remaining_fee:0
			}
		},
		mounted() {
			if(helper.hasRole('admin'))
			{
                this.feeSubmissionForRole=true;
			}
			else
			{
             this.feeSubmissionForRole=false;
			}
			this.getPreRequisite();

            let urlParams = new URLSearchParams(window.location.search);
 if (urlParams.has('status')) {

    var status=urlParams.get('status'); 
    if (status=='verified') {
 this.stripeCheckout1('stripe');

    }

                   
          }
		},
		methods: {
			getConfig(config){
                return helper.getConfig(config);
            },
			setPaymentGateway(gateway){
                this.payment_gateway = gateway;
            },
            mollieCheckout(){
               

       //      if (this.registration_fee) {
       //  this.registrationForm.reg_fee=this.registration_fee;

       // }
              axios.post('/mollie-payment-remain',{
                           
                           
                            remaining_fee:this.remaining_fee,
                            register_id:this.registration.id
                           
                        })
                        .then(response => {
                          console.log(response._links.checkout.href);
                          window.location = response._links.checkout.href;
                           //this.stripeCheckout1('stripe');
                            
                        })
                        .catch(error => {
                            loader.hide();
                            helper.showErrorMsg(error);
                            this.stripeButton = true;
                        });

            },
            stripeCheckout(){
                //let loader = this.$loading.show();
                this.stripeButton = false;
                Stripe.setPublishableKey(this.getConfig('stripe_publishable_key'));
                Stripe.card.createToken({
                    number: this.stripe.card_number,
                    cvc: this.stripe.cvc,
                    exp_month: this.stripe.month,
                    exp_year: this.stripe.year
                }, this.stripeResponseHandler);
                //loader.hide();
            },
            stripeCheckout1(gateway)
            {
            	 let loader = this.$loading.show();
                    this.registrationFeeForm.account_id=1;
                    
                    this.registrationFeeForm.instrument_bank_detail='';
                    this.registrationFeeForm.instrument_clearing_date='';
                    this.registrationFeeForm.instrument_date='';
                    this.registrationFeeForm.instrument_number='';
                    this.registrationFeeForm.payment_method_id=1;
                    this.registrationFeeForm.reference_number='';
                    this.registrationFeeForm.remarks='';
				this.registrationFeeForm.post('/api/registration/'+this.registration.id+'/fee/payment')
					.then(response => {
						toastr.success(response.message);
						this.selected_account = null;
						this.$emit('completed');
						this.stripeButton = true;
						loader.hide();
					})
					.catch(error => {
						loader.hide();
						helper.showErrorMsg(error);
					});

            },
            stripeResponseHandler(status, response) {
                if(status == 200){
                   
                    axios.get('/registration/fee/stripe',{
                            stripeToken: response.id,
                            amount: this.remaining_fee,
                            fee: this.remaining_fee,
                           
                        })
                        .then(response => {
                            this.stripeCheckout1('stripe');
                            
                        })
                        .catch(error => {
                            //loader.hide();
                            helper.showErrorMsg(error);
                            this.stripeButton = true;
                        })
                } else {
                    toastr.error(response.error.message);
                    this.stripeButton = true;
                }
            },
			getPreRequisite(){
				let loader = this.$loading.show();
	            axios.get('/api/registration/fee/pre-requisite?reg_id='+this.registration.id)
	                .then(response => {
	                    this.accounts = response.accounts;
	                    this.payment_methods = response.payment_methods;
	                    this.payment_method_details = response.payment_method_details;
                        this.remaining_fee=response.room_course_feeses;
	                    loader.hide();
	                })
	                .catch(error => {
	                    loader.hide();
	                    helper.showErrorMsg(error);
	                });
			},
			getPaymentMethodDetail(field){
				return helper.getPaymentMethodDetail(this.payment_method_detail, field);
			},
			onAccountSelect(selectedOption){
				this.registrationFeeForm.account_id = selectedOption.id;
			},
			onPaymentMethodSelect(selectedOption){
				this.registrationFeeForm.payment_method_id = selectedOption.id;
				this.payment_method_detail = this.payment_method_details.find(o => o.id == selectedOption.id);
			},
			onPaymentMethodRemove(removedOption){
				this.registrationFeeForm.payment_method_id = '';
				this.payment_method_detail = null;
			},
			formatCurrency(amount){
				return helper.formatCurrency(amount);
			},
			submit(){
				let loader = this.$loading.show();
				this.registrationFeeForm.post('/api/registration/'+this.registration.id+'/fee/payment')
					.then(response => {
						toastr.success(response.message);
						this.selected_account = null;
						this.$emit('completed');
						loader.hide();
					})
					.catch(error => {
						loader.hide();
						helper.showErrorMsg(error);
					})
			}
		}
	}
</script>