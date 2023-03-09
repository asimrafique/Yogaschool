"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/student/registration/show"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/action-form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/action-form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ['registration'],
  data: function data() {
    return {
      showPendingForm: true,
      actionForm: new Form({
        status: '',
        room_id: '',
        batch_id: null,
        admission_number_prefix: '',
        admission_number: '',
        date_of_admission: '',
        rejection_remarks: '',
        admission_remarks: '',
        transport_circle_id: null,
        fee_concession_id: null,
        gender: ''
      }),
      admission_numbers: [],
      rooms: [],
      batch_current_strength: 0,
      options: [{
        value: 'pending',
        text: i18n.student.registration_status_pending
      }, {
        value: 'rejected',
        text: i18n.student.registration_status_rejected
      }, {
        value: 'allotted',
        text: i18n.student.registration_status_allotted
      }],
      transport_circles: [],
      fee_concessions: [],
      batches: [],
      accommodations: []
    };
  },
  mounted: function mounted() {
    this.actionForm.status = this.registration.status;
    this.actionForm.date_of_admission = moment().format();
    this.getPreRequisite();
    if (helper.hasRole('admin')) {
      this.showPendingForm = true;
    } else {
      this.showPendingForm = false;
    }
  },
  methods: {
    getAvailableRoom: function getAvailableRoom(event) {
      var _this = this;
      var loader = this.$loading.show();
      // axios.get("/api/registration/getAvailableRoom", {
      //             accommodation: this.registration.student.accommodation,
      //           })
      //           .then((resp) => {
      //           //	loader.hide();

      //           });
      //
      //,{
      //   accommodation: this.registration.student.accommodation,
      // }
      axios.post("/api/registration/get-available-room", {
        accommodation: event.target.value,
        gender: this.registration.student.gender,
        location: this.registration.batch.options.location
      }).then(function (response) {
        _this.rooms = response.rooms;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getPreRequisite: function getPreRequisite() {
      var _this2 = this;
      var loader = this.$loading.show();
      axios.get('/api/registration/status/pre-requisite').then(function (response) {
        _this2.rooms = response.rooms;
        _this2.transport_circles = response.transport_circles;
        _this2.fee_concessions = response.fee_concessions;
        _this2.admission_numbers = response.admission_numbers;
        _this2.accommodations = response.accommodations;
        _this2.actionForm.admission_number_prefix = helper.getConfig('admission_number_prefix');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onRoomSelect: function onRoomSelect(selectedOption) {
      this.actionForm.room_id = selectedOption.id;
    },
    submit: function submit() {
      var _this3 = this;
      var loader = this.$loading.show();
      this.actionForm.gender = this.registration.student.gender;
      this.actionForm.post('/api/registration/' + this.registration.id + '/update/status').then(function (response) {
        toastr.success(response.message);
        _this3.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    fetchStrength: function fetchStrength() {
      var _this4 = this;
      var loader = this.$loading.show();
      if (!this.actionForm.batch_id) {
        this.batch_current_strength = 0;
        loader.hide();
        return;
      }
      this.actionForm.errors.clear('batch_id');
      axios.post('/api/batch/' + this.actionForm.batch_id + '/strength').then(function (response) {
        _this4.batch_current_strength = response;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  },
  watch: {
    registration: function registration(_registration) {
      this.actionForm.status = _registration.status;
    },
    'actionForm.admission_number_prefix': function actionFormAdmission_number_prefix(val) {
      var admission = this.admission_numbers.find(function (o) {
        return o.prefix == val;
      });
      if (typeof admission == 'undefined') this.actionForm.admission_number = helper.formatWithPadding(1, helper.getConfig('admission_number_digit'));else this.actionForm.admission_number = helper.formatWithPadding(admission.number + 1, helper.getConfig('admission_number_digit'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['registration'],
  components: {},
  data: function data() {
    return {
      registrationForm: new Form({
        course_id: '',
        date_of_registration: '',
        registration_remarks: '',
        previous_institute_id: '',
        registration_fee: 0,
        custom_values: []
      }),
      courses: [],
      course_details: [],
      previous_institutes: [],
      selected_course: null,
      selected_previous_institute: null,
      default_currency: helper.getConfig('default_currency'),
      registration_fee: 0,
      enable_registration_fee: 0,
      custom_fields: [],
      custom_values: [],
      clearCustomField: false,
      customFieldFormErrors: {}
    };
  },
  mounted: function mounted() {
    this.getPreRequisite();
    this.registrationForm.course_id = this.registration.course_id;
    this.registrationForm.previous_institute_id = this.registration.previous_institute_id;
    this.selected_course = {
      id: this.registration.course_id,
      name: this.registration.course.name
    };
    this.selected_previous_institute = this.registration.previous_institute_id ? {
      id: this.registration.previous_institute_id,
      name: this.registration.previous_institute.name
    } : null;
    this.registrationForm.date_of_registration = this.registration.date_of_registration;
    this.registrationForm.registration_remarks = this.registration.registration_remarks;
    this.registrationForm.registration_fee = this.registration.registration_fee;
    this.custom_values = this.registration.options && this.registration.options.hasOwnProperty('custom_values') ? this.registration.options.custom_values : [];
    // this.setRegistration(this.registration.course_id);
  },

  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/registration/pre-requisite').then(function (response) {
        _this.courses = response.courses;
        _this.course_details = response.course_details;
        _this.previous_institutes = response.previous_institutes;
        _this.custom_fields = response.custom_fields;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    updateCustomValues: function updateCustomValues(value) {
      this.registrationForm.custom_values = value;
    },
    submit: function submit() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.registrationForm.patch('/api/registration/' + this.registration.id).then(function (response) {
        toastr.success(response.message);
        _this2.$emit('completed');
        _this2.$emit('close');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        _this2.customFieldFormErrors = error;
        helper.showErrorMsg(error);
      });
    },
    onCourseSelect: function onCourseSelect(selectedOption) {
      this.registrationForm.course_id = selectedOption.id;
      this.setRegistration(selectedOption.id);
      this.registrationForm.registration_fee = this.registration_fee;
    },
    onPreviousInstituteSelect: function onPreviousInstituteSelect(selectedOption) {
      this.registrationForm.previous_institute_id = selectedOption.id;
    },
    setRegistration: function setRegistration(course_id) {
      var course = this.course_details.find(function (o) {
        return o.course_id == course_id;
      });
      this.enable_registration_fee = course != 'undefined' ? course.enable_registration_fee : 0;
      this.registration_fee = this.enable_registration_fee ? course.registration_fee : 0;
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/fee-form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/fee-form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ['registration'],
  data: function data() {
    return {
      feeSubmissionForRole: true,
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
      remaining_fee: 0
    };
  },
  mounted: function mounted() {
    if (helper.hasRole('admin')) {
      this.feeSubmissionForRole = true;
    } else {
      this.feeSubmissionForRole = false;
    }
    this.getPreRequisite();
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('status')) {
      var status = urlParams.get('status');
      if (status == 'verified') {
        this.stripeCheckout1('stripe');
      }
    }
  },
  methods: {
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    setPaymentGateway: function setPaymentGateway(gateway) {
      this.payment_gateway = gateway;
    },
    mollieCheckout: function mollieCheckout() {
      var _this = this;
      //      if (this.registration_fee) {
      //  this.registrationForm.reg_fee=this.registration_fee;

      // }
      axios.post('/mollie-payment-remain', {
        remaining_fee: this.remaining_fee,
        register_id: this.registration.id
      }).then(function (response) {
        console.log(response._links.checkout.href);
        window.location = response._links.checkout.href;
        //this.stripeCheckout1('stripe');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this.stripeButton = true;
      });
    },
    stripeCheckout: function stripeCheckout() {
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
    stripeCheckout1: function stripeCheckout1(gateway) {
      var _this2 = this;
      var loader = this.$loading.show();
      this.registrationFeeForm.account_id = 1;
      this.registrationFeeForm.instrument_bank_detail = '';
      this.registrationFeeForm.instrument_clearing_date = '';
      this.registrationFeeForm.instrument_date = '';
      this.registrationFeeForm.instrument_number = '';
      this.registrationFeeForm.payment_method_id = 1;
      this.registrationFeeForm.reference_number = '';
      this.registrationFeeForm.remarks = '';
      this.registrationFeeForm.post('/api/registration/' + this.registration.id + '/fee/payment').then(function (response) {
        toastr.success(response.message);
        _this2.selected_account = null;
        _this2.$emit('completed');
        _this2.stripeButton = true;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    stripeResponseHandler: function stripeResponseHandler(status, response) {
      var _this3 = this;
      if (status == 200) {
        axios.get('/registration/fee/stripe', {
          stripeToken: response.id,
          amount: this.remaining_fee,
          fee: this.remaining_fee
        }).then(function (response) {
          _this3.stripeCheckout1('stripe');
        })["catch"](function (error) {
          //loader.hide();
          helper.showErrorMsg(error);
          _this3.stripeButton = true;
        });
      } else {
        toastr.error(response.error.message);
        this.stripeButton = true;
      }
    },
    getPreRequisite: function getPreRequisite() {
      var _this4 = this;
      var loader = this.$loading.show();
      axios.get('/api/registration/fee/pre-requisite?reg_id=' + this.registration.id).then(function (response) {
        _this4.accounts = response.accounts;
        _this4.payment_methods = response.payment_methods;
        _this4.payment_method_details = response.payment_method_details;
        _this4.remaining_fee = response.room_course_feeses;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getPaymentMethodDetail: function getPaymentMethodDetail(field) {
      return helper.getPaymentMethodDetail(this.payment_method_detail, field);
    },
    onAccountSelect: function onAccountSelect(selectedOption) {
      this.registrationFeeForm.account_id = selectedOption.id;
    },
    onPaymentMethodSelect: function onPaymentMethodSelect(selectedOption) {
      this.registrationFeeForm.payment_method_id = selectedOption.id;
      this.payment_method_detail = this.payment_method_details.find(function (o) {
        return o.id == selectedOption.id;
      });
    },
    onPaymentMethodRemove: function onPaymentMethodRemove(removedOption) {
      this.registrationFeeForm.payment_method_id = '';
      this.payment_method_detail = null;
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
    submit: function submit() {
      var _this5 = this;
      var loader = this.$loading.show();
      this.registrationFeeForm.post('/api/registration/' + this.registration.id + '/fee/payment').then(function (response) {
        toastr.success(response.message);
        _this5.selected_account = null;
        _this5.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./resources/js/views/student/registration/edit.vue");
/* harmony import */ var _fee_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fee-form */ "./resources/js/views/student/registration/fee-form.vue");
/* harmony import */ var _action_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-form */ "./resources/js/views/student/registration/action-form.vue");
var _methods;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    feeForm: _fee_form__WEBPACK_IMPORTED_MODULE_1__["default"],
    actionForm: _action_form__WEBPACK_IMPORTED_MODULE_2__["default"],
    editRegistrationForm: _edit__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      id: this.$route.params.id,
      registration: {
        student: {},
        course: {},
        transaction: null
      },
      transaction: {},
      show_edit: false,
      cancel_fee_payment: false,
      cancelPaymentForm: new Form({
        cancellation_remarks: ''
      }),
      registration_custom_fields: [],
      online_registration_custom_fields: [],
      editModal: false,
      showReceiptModal: false,
      batch_status: false
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-registration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getRegistration();
  },
  methods: (_methods = {
    getRegistration: function getRegistration() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/registration/' + this.id).then(function (response) {
        _this.registration_custom_fields = response.registration_custom_fields;
        _this.online_registration_custom_fields = response.online_registration_custom_fields;
        _this.registration = response.registration;
        _this.transaction = response.registration.transactions.length ? response.registration.transactions[0] : null;
        if (response.registration.status == "pending" || response.registration.status == "partial") {
          if (_this.registration.batch_id) {
            _this.batch_status = true;
          }
        } else {
          _this.batch_status = false;
        }
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this.$router.push('/dashboard');
      });
    },
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getStudentName: function getStudentName(student) {
      return helper.getStudentName(student);
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
    getRegistrationStatus: function getRegistrationStatus(registration) {
      return helper.getRegistrationStatus(registration);
    }
  }, _defineProperty(_methods, "hasPermission", function hasPermission(permission) {
    return helper.hasPermission(permission);
  }), _defineProperty(_methods, "getEmployeeName", function getEmployeeName(employee) {
    return helper.getEmployeeName(employee);
  }), _defineProperty(_methods, "getCustomFieldValue", function getCustomFieldValue(custom_field) {
    return helper.getCustomFieldValue(this.registration.options.custom_values, custom_field.id);
  }), _defineProperty(_methods, "cancelPayment", function cancelPayment() {
    var _this2 = this;
    var loader = this.$loading.show();
    this.cancelPaymentForm.post('/api/registration/' + this.id + '/transaction/' + this.transaction.id + '/cancel').then(function (response) {
      toastr.success(response.message);
      _this2.getRegistration();
      loader.hide();
    })["catch"](function (error) {
      loader.hide();
      helper.showErrorMsg(error);
    });
  }), _defineProperty(_methods, "confirmDelete", function confirmDelete(registration) {
    var _this3 = this;
    return function (dialog) {
      return _this3.deleteRegistration(registration);
    };
  }), _defineProperty(_methods, "deleteRegistration", function deleteRegistration(registration) {
    var _this4 = this;
    var loader = this.$loading.show();
    axios["delete"]('/api/registration/' + registration.id).then(function (response) {
      toastr.success(response.message);
      loader.hide();
      _this4.$router.push('/student/registration');
    })["catch"](function (error) {
      loader.hide();
      helper.showErrorMsg(error);
    });
  }), _defineProperty(_methods, "printReceipt", function printReceipt() {
    var loader = this.$loading.show();
    axios.post('/api/registration/' + this.id + '/fee/' + this.transaction.id + '/print').then(function (response) {
      var print = window.open("/print");
      loader.hide();
      print.document.write(response);
    })["catch"](function (error) {
      loader.hide();
      helper.showErrorMsg(error);
    });
  }), _methods),
  computed: {
    getSession: function getSession() {
      return helper.getDefaultAcademicSession().name;
    },
    batchStatus: function batchStatus() {
      return this.batch_status;
    }
  },
  filters: {
    moment: function moment(date) {
      return helper.formatDate(date);
    },
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/action-form.vue?vue&type=template&id=24dead10&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/action-form.vue?vue&type=template&id=24dead10& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card card-form"
  }, [_vm.showPendingForm == false && _vm.registration.status == "partial" ? _c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v("Waiting for admin approval For Remaining Amount")])]) : _vm._e(), _vm._v(" "), _vm.showPendingForm == false && _vm.registration.status == "allotted" ? _c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v("Registration Approved")])]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showPendingForm && _vm.registration.status == "partial",
      expression: "showPendingForm && registration.status=='partial'"
    }],
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("student.registration_action")))]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.actionForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.registration_status")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionForm.status,
      expression: "actionForm.status"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      placeholder: "Select Mari",
      name: "status"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.actionForm, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.actionForm.errors.clear("status");
      }]
    }
  }, _vm._l(_vm.options, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                " + _vm._s(option.text) + "\n                              ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.actionForm,
      "prop-name": "status"
    }
  })], 1)])]), _vm._v(" "), _vm.actionForm.status == "rejected" ? [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.rejection_remarks")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "2",
      name: "rejection_remarks",
      placeholder: _vm.trans("student.rejection_remarks")
    },
    model: {
      value: _vm.actionForm.rejection_remarks,
      callback: function callback($$v) {
        _vm.$set(_vm.actionForm, "rejection_remarks", $$v);
      },
      expression: "actionForm.rejection_remarks"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.actionForm,
      "prop-name": "rejection_remarks"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))])])] : _vm._e(), _vm._v(" "), _vm.actionForm.status == "allotted" ? [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.admission_number")))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionForm.admission_number_prefix,
      expression: "actionForm.admission_number_prefix"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "admission_number_prefix",
      placeholder: _vm.trans("student.admission_number_prefix")
    },
    domProps: {
      value: _vm.actionForm.admission_number_prefix
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.actionForm, "admission_number_prefix", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionForm.admission_number,
      expression: "actionForm.admission_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "admission_number",
      placeholder: _vm.trans("student.admission_number")
    },
    domProps: {
      value: _vm.actionForm.admission_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.actionForm, "admission_number", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.actionForm,
      "prop-name": "admission_number"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.batch")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionForm.batch_id,
      expression: "actionForm.batch_id"
    }],
    staticClass: "custom-select col-12",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.actionForm, "batch_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.fetchStrength]
    }
  }, [_c("option", {
    attrs: {
      value: "null",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.select_batch")))]), _vm._v(" "), _vm._l(_vm.registration.course.batches, function (batch) {
    return _c("option", {
      domProps: {
        value: batch.id
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.registration.course.name + " " + batch.name) + "\n\t\t\t\t\t\t\t\t\t")]);
  })], 2), _vm._v(" "), _vm.actionForm.batch_id && _vm.batch_current_strength >= 0 ? _c("div", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.trans("academic.current_strength") + ": " + _vm.batch_current_strength))]) : _vm._e(), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.actionForm,
      "prop-name": "batch_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.circle")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionForm.transport_circle_id,
      expression: "actionForm.transport_circle_id"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "transport_circle_id"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.actionForm, "transport_circle_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.actionForm.errors.clear("transport_circle_id");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "null",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.no_transport_circle")))]), _vm._v(" "), _vm._l(_vm.transport_circles, function (transport_circle) {
    return _c("option", {
      domProps: {
        value: transport_circle.id
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(transport_circle.name) + "\n\t\t\t\t\t\t\t\t\t")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.actionForm,
      "prop-name": "transport_circle_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.fee_concession")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionForm.fee_concession_id,
      expression: "actionForm.fee_concession_id"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "fee_concession_id"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.actionForm, "fee_concession_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.actionForm.errors.clear("fee_concession_id");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "null",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.no_fee_concession")))]), _vm._v(" "), _vm._l(_vm.fee_concessions, function (fee_concession) {
    return _c("option", {
      domProps: {
        value: fee_concession.id
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(fee_concession.name) + "\n\t\t\t\t\t\t\t\t\t")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.actionForm,
      "prop-name": "fee_concession_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.date_of_admission")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("student.date_of_admission")
    },
    on: {
      selected: function selected($event) {
        return _vm.actionForm.errors.clear("date_of_admission");
      }
    },
    model: {
      value: _vm.actionForm.date_of_admission,
      callback: function callback($$v) {
        _vm.$set(_vm.actionForm, "date_of_admission", $$v);
      },
      expression: "actionForm.date_of_admission"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.actionForm,
      "prop-name": "date_of_admission"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.admission_remarks")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "1",
      name: "admission_remarks",
      placeholder: _vm.trans("student.admission_remarks")
    },
    model: {
      value: _vm.actionForm.admission_remarks,
      callback: function callback($$v) {
        _vm.$set(_vm.actionForm, "admission_remarks", $$v);
      },
      expression: "actionForm.admission_remarks"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.actionForm,
      "prop-name": "admission_remarks"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Accommodation choice")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionForm.accommodation,
      expression: "actionForm.accommodation"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "accommodation"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.actionForm, "accommodation", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.getAvailableRoom($event);
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.accommodations, function (accommodation) {
    return _c("option", {
      domProps: {
        value: accommodation.types
      }
    }, [_vm._v("\n                      " + _vm._s(accommodation.type_name) + "\n                    ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.actionForm,
      "prop-name": "accommodation"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("asset.room")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionForm.room_id,
      expression: "actionForm.room_id"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "accommodation"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.actionForm, "room_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.rooms, function (room) {
    return _c("option", {
      domProps: {
        value: room.id
      }
    }, [_vm._v("\n                      " + _vm._s(room.name) + "\n                    ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.actionForm,
      "prop-name": "room_id"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))])])] : _vm._e()], 2)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/edit.vue?vue&type=template&id=642a78dd&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/edit.vue?vue&type=template&id=642a78dd& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.registrationForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.course")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "group-values": "courses",
      "group-label": "course_group",
      "group-select": false,
      name: "course_id",
      id: "course_id",
      options: _vm.courses,
      placeholder: _vm.trans("academic.select_course")
    },
    on: {
      select: _vm.onCourseSelect,
      close: function close($event) {
        return _vm.registrationForm.errors.clear("course_id");
      },
      remove: function remove($event) {
        _vm.registrationForm.course_id = "";
      }
    },
    model: {
      value: _vm.selected_course,
      callback: function callback($$v) {
        _vm.selected_course = $$v;
      },
      expression: "selected_course"
    }
  }, [!_vm.courses.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                    ")]) : _vm._e()]), _vm._v(" "), _vm.enable_registration_fee && _vm.registration_fee >= 0 ? _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.trans("student.registration_fee")) + " " + _vm._s(_vm.formatCurrency(_vm.registration_fee)))]) : _vm._e(), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationForm,
      "prop-name": "course_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.date_of_registration")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("student.date_of_registration")
    },
    on: {
      selected: function selected($event) {
        return _vm.registrationForm.errors.clear("date_of_registration");
      }
    },
    model: {
      value: _vm.registrationForm.date_of_registration,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationForm, "date_of_registration", $$v);
      },
      expression: "registrationForm.date_of_registration"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationForm,
      "prop-name": "date_of_registration"
    }
  })], 1)]), _vm._v(" "), _vm.registration.registration_fee_status == "unpaid" || _vm.registration.registration_fee_status == null ? _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.registration_fee")))]), _vm._v(" "), _c("currency-input", {
    attrs: {
      position: _vm.default_currency.position,
      symbol: _vm.default_currency.symbol,
      name: "registration_fee",
      placeholder: _vm.trans("stduent.registration_fee")
    },
    nativeOn: {
      input: function input($event) {
        return _vm.registrationForm.errors.clear("registration_fee");
      }
    },
    model: {
      value: _vm.registrationForm.registration_fee,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationForm, "registration_fee", $$v);
      },
      expression: "registrationForm.registration_fee"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationForm,
      "prop-name": "registration_fee"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.previous_institute")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "previous_institute_id",
      id: "previous_institute_id",
      options: _vm.previous_institutes,
      placeholder: _vm.trans("academic.select_institute")
    },
    on: {
      select: _vm.onPreviousInstituteSelect,
      close: function close($event) {
        return _vm.registrationForm.errors.clear("previous_institute_id");
      },
      remove: function remove($event) {
        _vm.registrationForm.previous_institute_id = "";
      }
    },
    model: {
      value: _vm.selected_previous_institute,
      callback: function callback($$v) {
        _vm.selected_previous_institute = $$v;
      },
      expression: "selected_previous_institute"
    }
  }, [!_vm.previous_institutes.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                    ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationForm,
      "prop-name": "previous_institute_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.registration_remarks")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "2",
      name: "registration_remarks",
      placeholder: _vm.trans("student.registration_remarks")
    },
    model: {
      value: _vm.registrationForm.registration_remarks,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationForm, "registration_remarks", $$v);
      },
      expression: "registrationForm.registration_remarks"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationForm,
      "prop-name": "registration_remarks"
    }
  })], 1)])]), _vm._v(" "), _c("custom-field", {
    attrs: {
      fields: _vm.custom_fields,
      customValues: _vm.custom_values,
      clear: _vm.clearCustomField,
      formErrors: _vm.customFieldFormErrors
    },
    on: {
      updateCustomValues: _vm.updateCustomValues
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/fee-form.vue?vue&type=template&id=55a4b904&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/fee-form.vue?vue&type=template&id=55a4b904& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("student.pay_registration_fee")) + " " + _vm._s(_vm.formatCurrency(_vm.registration.registration_fee)))]), _vm._v(" "), _vm.feeSubmissionForRole == false && _vm.registration.status == "pending" ? _c("form", {
    staticStyle: {
      padding: "1%"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      },
      keydown: function keydown($event) {}
    }
  }, [_c("div", {
    staticClass: "table-responsive p-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("finance.fee_installment")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.trans("finance.installment_total")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.trans("finance.late_fee")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.trans("general.total")))])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {}, [_vm._v("Remaining fee Payable")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                                                        0\n                                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right",
    domProps: {
      textContent: _vm._s(_vm.remaining_fee)
    }
  })])]), _vm._v(" "), _c("tfoot", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("general.total")))]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "2"
    }
  }), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.remaining_fee))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.date_of_payment")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("student.date_of_payment")
    },
    on: {
      selected: function selected($event) {
        return _vm.registrationFeeForm.errors.clear("date");
      }
    },
    model: {
      value: _vm.registrationFeeForm.date,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationFeeForm, "date", $$v);
      },
      expression: "registrationFeeForm.date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationFeeForm,
      "prop-name": "date"
    }
  })], 1)]), _vm._v(" "), _c("div", [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("finance.choose_payment_gateway")))]), _vm._v(" "), _vm.getConfig("razorpay") && _vm.razorpay_loaded ? _c("div", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    attrs: {
      type: "radio",
      name: "payment_gateway",
      id: "razorpay",
      value: "razorpay"
    },
    on: {
      change: function change($event) {
        return _vm.setPaymentGateway("razorpay");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "razorpay"
    }
  }, [_vm._v(" \n                                                Razorpay \n                                            ")])]) : _vm._e(), _vm._v(" "), _vm.getConfig("billdesk") ? _c("div", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    attrs: {
      type: "radio",
      name: "payment_gateway",
      id: "billdesk",
      value: "billdesk"
    },
    on: {
      change: function change($event) {
        return _vm.setPaymentGateway("billdesk");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "billdesk"
    }
  }, [_vm._v(" Billdesk ")])]) : _vm._e(), _vm._v(" "), _vm.getConfig("stripe") ? _c("div", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    attrs: {
      type: "radio",
      name: "payment_gateway",
      id: "stripe",
      value: "stripe"
    },
    on: {
      change: function change($event) {
        return _vm.setPaymentGateway("stripe");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "stripe"
    }
  }, [_vm._v(" Stripe ")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    attrs: {
      type: "radio",
      name: "payment_gateway",
      id: "billdesk",
      value: "billdesk"
    },
    on: {
      change: function change($event) {
        return _vm.setPaymentGateway("mollie");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "billdesk"
    }
  }, [_vm._v(" Mollie ")])]), _vm._v(" "), _vm.payment_gateway == "mollie" ? [_vm.stripeButton ? _c("button", {
    staticClass: "btn btn-info waves-effect waves-light pull-right",
    staticStyle: {
      "margin-right": "2%"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.mollieCheckout
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.trans("general.proceed")))])]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.getConfig("paystack") ? _c("div", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    attrs: {
      type: "radio",
      name: "payment_gateway",
      id: "paystack",
      value: "paystack"
    },
    on: {
      change: function change($event) {
        return _vm.setPaymentGateway("paystack");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "paystack"
    }
  }, [_vm._v(" Paystack ")])]) : _vm._e(), _vm._v(" "), _vm.getConfig("paypal") ? _c("div", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    attrs: {
      type: "radio",
      name: "payment_gateway",
      id: "paypal",
      value: "paypal"
    },
    on: {
      change: function change($event) {
        return _vm.setPaymentGateway("paypal");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "paypal"
    }
  }, [_vm._v(" Paypal ")])]) : _vm._e(), _vm._v(" "), _vm.payment_gateway == "billdesk" ? [_c("button", {
    staticClass: "btn btn-info",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.callBillDesk
    }
  }, [_vm._v(_vm._s(_vm.trans("general.proceed")))])] : _vm._e(), _vm._v(" "), _vm.payment_gateway == "razorpay" ? [_c("button", {
    staticClass: "btn btn-info",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.callRazorpay
    }
  }, [_vm._v(_vm._s(_vm.trans("general.proceed")))])] : _vm._e(), _vm._v(" "), _vm.payment_gateway == "paystack" ? [_c("button", {
    staticClass: "btn btn-info",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.payWithPaystack
    }
  }, [_vm._v(_vm._s(_vm.trans("general.proceed")))])] : _vm._e(), _vm._v(" "), _vm.payment_gateway == "paypal" ? [_vm.paypalButton ? _c("button", {
    staticClass: "btn btn-info",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.callPaypal
    }
  }, [_vm._v(_vm._s(_vm.trans("general.proceed")))]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.payment_gateway == "stripe" ? [_c("div", {
    staticClass: "row m-t-40"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.stripe.card_number,
      expression: "stripe.card_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      maxlength: "16",
      value: "",
      placeholder: _vm.trans("finance.card_number")
    },
    domProps: {
      value: _vm.stripe.card_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.stripe, "card_number", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.stripe.month,
      expression: "stripe.month"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      value: "",
      placeholder: _vm.trans("finance.card_expiry_month")
    },
    domProps: {
      value: _vm.stripe.month
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.stripe, "month", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.stripe.year,
      expression: "stripe.year"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      value: "",
      placeholder: _vm.trans("finance.card_expiry_year")
    },
    domProps: {
      value: _vm.stripe.year
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.stripe, "year", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-1"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.stripe.cvc,
      expression: "stripe.cvc"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      value: "",
      placeholder: _vm.trans("finance.card_cvc")
    },
    domProps: {
      value: _vm.stripe.cvc
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.stripe, "cvc", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _vm.stripeButton ? _c("button", {
    staticClass: "btn btn-info waves-effect waves-light pull-right",
    staticStyle: {
      "margin-right": "2%"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.stripeCheckout
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.trans("general.proceed")))])]) : _vm._e()] : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), _vm.feeSubmissionForRole == true && _vm.registration.status == "partial" ? _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.registrationFeeForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.account")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "account_id",
      id: "account_id",
      options: _vm.accounts,
      placeholder: _vm.trans("account.select_account")
    },
    on: {
      select: _vm.onAccountSelect,
      close: function close($event) {
        return _vm.registrationFeeForm.errors.clear("account_id");
      },
      remove: function remove($event) {
        _vm.registrationFeeForm.account_id = "";
      }
    },
    model: {
      value: _vm.selected_account,
      callback: function callback($$v) {
        _vm.selected_account = $$v;
      },
      expression: "selected_account"
    }
  }, [!_vm.accounts.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationFeeForm,
      "prop-name": "account_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.date_of_payment")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("student.date_of_payment")
    },
    on: {
      selected: function selected($event) {
        return _vm.registrationFeeForm.errors.clear("date");
      }
    },
    model: {
      value: _vm.registrationFeeForm.date,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationFeeForm, "date", $$v);
      },
      expression: "registrationFeeForm.date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationFeeForm,
      "prop-name": "date"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.payment_method")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "payment_method_id",
      id: "payment_method_id",
      options: _vm.payment_methods,
      placeholder: _vm.trans("payment_method.select_payment_method")
    },
    on: {
      select: _vm.onPaymentMethodSelect,
      close: function close($event) {
        return _vm.registrationFeeForm.errors.clear("payment_method_id");
      },
      remove: _vm.onPaymentMethodRemove
    },
    model: {
      value: _vm.selected_payment_method,
      callback: function callback($$v) {
        _vm.selected_payment_method = $$v;
      },
      expression: "selected_payment_method"
    }
  }, [!_vm.payment_methods.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationFeeForm,
      "prop-name": "payment_method_id"
    }
  })], 1)]), _vm._v(" "), _vm.getPaymentMethodDetail("instrument_number") ? _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.instrument_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.registrationFeeForm.instrument_number,
      expression: "registrationFeeForm.instrument_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "instrument_number",
      placeholder: _vm.trans("finance.instrument_number")
    },
    domProps: {
      value: _vm.registrationFeeForm.instrument_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.registrationFeeForm, "instrument_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationFeeForm,
      "prop-name": "instrument_number"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.getPaymentMethodDetail("instrument_date") ? _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.instrument_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("finance.instrument_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.registrationFeeForm.errors.clear("instrument_date");
      }
    },
    model: {
      value: _vm.registrationFeeForm.instrument_date,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationFeeForm, "instrument_date", $$v);
      },
      expression: "registrationFeeForm.instrument_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationFeeForm,
      "prop-name": "instrument_date"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.getPaymentMethodDetail("instrument_bank_detail") ? _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.instrument_bank_detail")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.registrationFeeForm.instrument_bank_detail,
      expression: "registrationFeeForm.instrument_bank_detail"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "instrument_bank_detail",
      placeholder: _vm.trans("finance.instrument_bank_detail")
    },
    domProps: {
      value: _vm.registrationFeeForm.instrument_bank_detail
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.registrationFeeForm, "instrument_bank_detail", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationFeeForm,
      "prop-name": "instrument_bank_detail"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.getPaymentMethodDetail("instrument_clearing_date") ? _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.instrument_clearing_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("finance.instrument_clearing_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.registrationFeeForm.errors.clear("instrument_clearing_date");
      }
    },
    model: {
      value: _vm.registrationFeeForm.instrument_clearing_date,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationFeeForm, "instrument_clearing_date", $$v);
      },
      expression: "registrationFeeForm.instrument_clearing_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationFeeForm,
      "prop-name": "instrument_clearing_date"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.getPaymentMethodDetail("reference_number") ? _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.reference_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.registrationFeeForm.reference_number,
      expression: "registrationFeeForm.reference_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "reference_number",
      placeholder: _vm.trans("finance.reference_number")
    },
    domProps: {
      value: _vm.registrationFeeForm.reference_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.registrationFeeForm, "reference_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationFeeForm,
      "prop-name": "reference_number"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.registration_fee_remarks")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "2",
      name: "remarks",
      placeholder: _vm.trans("student.registration_fee_remarks")
    },
    model: {
      value: _vm.registrationFeeForm.remarks,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationFeeForm, "remarks", $$v);
      },
      expression: "registrationFeeForm.remarks"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.registrationFeeForm,
      "prop-name": "remarks"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))])])]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=template&id=1f099760&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=template&id=1f099760& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "page-titles"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("h3", {
    staticClass: "text-themecolor"
  }, [_vm._v(_vm._s(_vm.trans("student.registration")) + "\n                    "), _vm.registration.student ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v("(" + _vm._s(_vm.getStudentName(_vm.registration.student) + " - " + _vm.trans("student.registration_no") + ": " + _vm.registration.id) + ") ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("router-link", {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      to: "/student/registration/card-view"
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("student.registration")))])]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      to: "/student/".concat(_vm.registration.student.uuid)
    }
  }, [_c("i", {
    staticClass: "fas fa-user"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("student.student_detail")))])])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "card border-right"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title m-3"
  }, [_c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("student.registration_detail")))]), _vm._v(" "), _vm.registration.registration_fee && _vm.registration.registration_fee_status == "paid" && _vm.registration.transactions.length ? _c("div", {
    staticClass: "dropdown pull-right"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("general.more_option"),
      expression: "trans('general.more_option')"
    }],
    staticClass: "btn btn-info btn-xs",
    attrs: {
      type: "button",
      href: "#",
      role: "button",
      id: "moreOption",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-ellipsis-h"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("finance.receipt")))])]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu"
  }, [_c("button", {
    staticClass: "dropdown-item custom-dropdown-menu",
    on: {
      click: function click($event) {
        _vm.showReceiptModal = true;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-circle-right"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.receipt_detail")))]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item custom-dropdown-menu",
    on: {
      click: _vm.printReceipt
    }
  }, [_c("i", {
    staticClass: "fas fa-print"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.print_receipt")))])])]) : _vm._e(), _vm._v(" "), _vm.registration.status == "pending" ? _c("button", {
    staticClass: "btn btn-info btn-xs pull-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.editModal = true;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-edit"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.edit")))])]) : _vm._e(), _vm._v(" "), _vm.registration.status == "pending" && _vm.hasPermission("delete-registration") ? _c("button", {
    directives: [{
      name: "confirm",
      rawName: "v-confirm",
      value: {
        ok: _vm.confirmDelete(_vm.registration)
      },
      expression: "{ok: confirmDelete(registration)}"
    }, {
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("student.delete_registartion"),
      expression: "trans('student.delete_registartion')"
    }],
    key: _vm.registration.id,
    staticClass: "btn btn-danger btn-xs pull-right",
    attrs: {
      type: "button"
    }
  }, [_c("i", {
    staticClass: "fas fa-trash"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.delete")))])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm custom-show-table"
  }, [_c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.name")))]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm.getStudentName(_vm.registration.student)) + "\n                                            "), _vm.registration.is_online ? _c("span", [_c("span", {
    staticClass: "label label-info"
  }, [_vm._v(_vm._s(_vm.trans("student.online_registration")))])]) : _vm._e()])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.registration_status")))]), _vm._v(" "), _c("td", _vm._l(_vm.getRegistrationStatus(_vm.registration), function (status) {
    return _c("span", {
      "class": ["label", "label-" + status.color, "m-r-5"]
    }, [_vm._v(_vm._s(status.label))]);
  }), 0)]), _vm._v(" "), _vm.registration.rejection_remarks && _vm.registration.status == "rejected" ? _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.rejection_remarks")))]), _vm._v(" "), _c("td", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.registration.rejection_remarks))])]) : _vm._e(), _vm._v(" "), _c("tr", {
    on: {
      mouseover: function mouseover($event) {
        _vm.show_edit = true;
      },
      mouseout: function mouseout($event) {
        _vm.show_edit = false;
      }
    }
  }, [_c("td", [_vm._v(_vm._s(_vm.trans("academic.course")))]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm.registration.course.name + " " + _vm.getSession) + "\n                                        ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.batchStatus,
      expression: "batchStatus"
    }]
  }, [_c("td", [_vm._v(_vm._s(_vm.trans("academic.batch")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.batch.name) + "\n                                        ")])]), _vm._v(" "), _vm.registration.status == "allotted" ? _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("academic.batch")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.admission.batch.name) + "\n                                        ")])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.father_name")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.parent ? _vm.registration.student.parent.father_name : ""))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.mother_name")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.parent ? _vm.registration.student.parent.mother_name : ""))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.contact_number")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.contact_number))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.email")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.email))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.gender")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trans("list." + _vm.registration.student.gender)))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.date_of_birth")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(_vm.registration.student.date_of_birth)))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.date_of_registration")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(_vm.registration.date_of_registration)))])]), _vm._v(" "), _vm.registration.previous_institute_id ? _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.previous_institute")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.previous_institute.name))])]) : _vm._e(), _vm._v(" "), _c("tr", {
    on: {
      mouseover: function mouseover($event) {
        _vm.show_edit = true;
      },
      mouseout: function mouseout($event) {
        _vm.show_edit = false;
      }
    }
  }, [_c("td", [_vm._v(_vm._s(_vm.trans("student.registration_fee")))]), _vm._v(" "), _c("td", [_vm.registration.registration_fee ? _c("span", [_vm._v("\n                                                " + _vm._s(_vm.formatCurrency(_vm.registration.registration_fee)) + "\n                                                "), _vm.registration.registration_fee_status == "paid" ? _c("span", [_c("span", {
    staticClass: "label label-success"
  }, [_vm._v(_vm._s(_vm.trans("student.registration_fee_status_paid")) + "\n                                                        " + _vm._s(_vm.trans("general.on")) + "\n                                                        "), _vm.registration.transactions.length ? _c("span", [_vm._v("\n                                                            " + _vm._s(_vm._f("moment")(_vm.transaction.date)) + "\n                                                        ")]) : _vm._e()])]) : _c("span", {
    staticClass: "label label-danger"
  }, [_vm._v(_vm._s(_vm.trans("student.registration_fee_status_unpaid")))])]) : _c("span", [_vm._v("-")])])]), _vm._v(" "), _vm.registration.registration_remarks ? _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.registration_remarks")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.registration_remarks))])]) : _vm._e(), _vm._v(" "), _vm.registration.course_location ? _c("tr", [_c("td", [_vm._v("Course Location")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.course_location))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.accommodation ? _c("tr", [_c("td", [_vm._v("Accommodation")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.accommodation))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.occupation ? _c("tr", [_c("td", [_vm._v("Occupation")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.occupation))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.how_long_yoga ? _c("tr", [_c("td", [_vm._v("How long have you been practicing Yoga?")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.how_long_yoga))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.teaching_experience ? _c("tr", [_c("td", [_vm._v("Do you have any experience teaching yoga?")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.teaching_experience))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.joining_reason ? _c("tr", [_c("td", [_vm._v("What is your primary reason to join the course?")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.joining_reason))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.important_to_life ? _c("tr", [_c("td", [_vm._v("What is important to you in life?")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.important_to_life))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.why_choose_us ? _c("tr", [_c("td", [_vm._v("Why did you choose Arhanta Yoga?")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.why_choose_us))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.how_hear_about_us ? _c("tr", [_c("td", [_vm._v("How did you hear about us?")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.how_hear_about_us))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.allergies_dietary_needs ? _c("tr", [_c("td", [_vm._v("Please mention in case you have any allergies or special dietary needs:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.allergies_dietary_needs))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.use_drugs ? _c("tr", [_c("td", [_vm._v("Have you in the last 12 months used tobacco, alcohol, recreational drugs, or illicit substances?")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.use_drugs))])]) : _vm._e(), _vm._v(" "), _vm.registration.student.substance_frequency_of_use ? _c("tr", [_c("td", [_vm._v("Please list substance and frequency of use")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.registration.student.substance_frequency_of_use))])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("general.created_at")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentDateTime")(_vm.registration.student.created_at)))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("general.updated_at")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentDateTime")(_vm.registration.student.updated_at)))])]), _vm._v(" "), _vm._l(_vm.online_registration_custom_fields, function (custom_field) {
    return _vm.registration.is_online ? _c("tr", [_c("td", [_vm._v(_vm._s(custom_field.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getCustomFieldValue(custom_field)))])]) : _vm._e();
  }), _vm._v(" "), _vm._l(_vm.registration_custom_fields, function (custom_field) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(custom_field.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getCustomFieldValue(custom_field)))])]);
  })], 2)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 p-0"
  }, [_vm.registration.registration_fee ? [_vm.registration.status == "pending" && _vm.hasPermission("make-registration-fee-payment") ? _c("fee-form", {
    attrs: {
      registration: _vm.registration
    },
    on: {
      completed: _vm.getRegistration
    }
  }) : _vm._e()] : _vm._e(), _vm._v(" "), (!_vm.registration.registration_fee || _vm.registration.status == "partial") && _vm.registration.status != "allotted" && _vm.hasPermission("change-registration-status") ? [_c("action-form", {
    attrs: {
      registration: _vm.registration
    },
    on: {
      completed: _vm.getRegistration
    }
  })] : _vm._e()], 2)])]), _vm._v(" "), _vm.editModal ? _c("transition", {
    attrs: {
      name: "modal"
    }
  }, [_c("div", {
    staticClass: "modal-mask"
  }, [_c("div", {
    staticClass: "modal-wrapper"
  }, [_c("div", {
    staticClass: "modal-container modal-lg"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_vm._t("header", function () {
    return [_vm._v("\n                            " + _vm._s(_vm.trans("student.edit_registration")) + "\n                            "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          _vm.editModal = false;
        }
      }
    }, [_vm._v("x")])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("edit-registration-form", {
      attrs: {
        registration: _vm.registration
      },
      on: {
        completed: _vm.getRegistration,
        close: function close($event) {
          _vm.editModal = false;
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "clearfix"
    })];
  })], 2)])])])]) : _vm._e(), _vm._v(" "), _vm.showReceiptModal && _vm.registration.registration_fee && _vm.registration.registration_fee_status == "paid" && _vm.registration.transactions.length ? _c("transition", {
    attrs: {
      name: "modal"
    }
  }, [_c("div", {
    staticClass: "modal-mask"
  }, [_c("div", {
    staticClass: "modal-wrapper"
  }, [_c("div", {
    staticClass: "modal-container modal-lg"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_vm._t("header", function () {
    return [_vm._v("\n                            " + _vm._s(_vm.trans("finance.receipt_detail")) + "\n                            "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          _vm.showReceiptModal = false;
        }
      }
    }, [_vm._v("x")])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-bordered"
    }, [_c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("finance.receipt_no")))]), _vm._v(" "), _c("td", [_vm._v("#" + _vm._s(_vm.transaction.prefix + _vm.transaction.number))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trans("finance.account")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.transaction.account.name))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("finance.amount")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatCurrency(_vm.transaction.amount)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trans("finance.date")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(_vm.transaction.date)))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("finance.payment_method")))]), _vm._v(" "), _c("td", [_vm._v("\n                                                " + _vm._s(_vm.transaction.payment_method.name) + "\n                                                "), _vm.transaction.instrument_number ? _c("span", [_c("br"), _vm._v(_vm._s(_vm.trans("finance.instrument_number")) + ": " + _vm._s(_vm.transaction.instrument_number))]) : _vm._e(), _vm._v(" "), _vm.transaction.instrument_date ? _c("span", [_c("br"), _vm._v(_vm._s(_vm.trans("finance.instrument_date")) + ": "), _c("span", [_vm._v(_vm._s(_vm._f("moment")(_vm.transaction.instrument_date)))])]) : _vm._e(), _vm._v(" "), _vm.transaction.instrument_clearing_date ? _c("span", [_c("br"), _vm._v(_vm._s(_vm.trans("finance.instrument_clearing_date")) + ": "), _c("span", [_vm._v(_vm._s(_vm._f("moment")(_vm.transaction.instrument_clearing_date)))])]) : _vm._e(), _vm._v(" "), _vm.transaction.instrument_bank_detail ? _c("span", [_c("br"), _vm._v(_vm._s(_vm.trans("finance.instrument_bank_detail")) + ": " + _vm._s(_vm.transaction.instrument_bank_detail))]) : _vm._e(), _vm._v(" "), _vm.transaction.reference_number ? _c("span", [_c("br"), _vm._v(_vm._s(_vm.trans("finance.reference_number")) + ": " + _vm._s(_vm.transaction.reference_number))]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trans("finance.remarks")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.transaction.remarks))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("finance.date_of_entry")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentDateTime")(_vm.transaction.created_at)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trans("finance.entry_by")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getEmployeeName(_vm.transaction.user.employee)))])])])])]), _vm._v(" "), _vm.registration.status == "pending" ? _c("button", {
      staticClass: "btn btn-block btn-danger",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          _vm.cancel_fee_payment = true;
        }
      }
    }, [_vm._v(_vm._s(_vm.trans("student.cancel_fee_payment")))]) : _vm._e(), _vm._v(" "), _vm.cancel_fee_payment ? [_vm.registration.status == "pending" ? _c("form", {
      staticClass: "m-t-20",
      on: {
        submit: function submit($event) {
          $event.preventDefault();
          return _vm.cancelPayment.apply(null, arguments);
        },
        keydown: function keydown($event) {
          return _vm.cancelPaymentForm.errors.clear($event.target.name);
        }
      }
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("autosize-textarea", {
      attrs: {
        rows: "2",
        name: "cancellation_remarks",
        placeholder: _vm.trans("student.cancellation_remarks")
      },
      model: {
        value: _vm.cancelPaymentForm.cancellation_remarks,
        callback: function callback($$v) {
          _vm.$set(_vm.cancelPaymentForm, "cancellation_remarks", $$v);
        },
        expression: "cancelPaymentForm.cancellation_remarks"
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.cancelPaymentForm,
        "prop-name": "cancellation_remarks"
      }
    })], 1), _vm._v(" "), _c("button", {
      staticClass: "btn btn-info waves-effect waves-light",
      attrs: {
        type: "submit"
      }
    }, [_vm._v(_vm._s(_vm.trans("general.save")))])])])]) : _vm._e()] : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "clearfix"
    })];
  })], 2)])])])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=style&index=0&id=1f099760&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=style&index=0&id=1f099760&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/student/registration/show.vue"],"names":[],"mappings":";AAudA;IACA,aAAA;AACA","sourcesContent":["<template>\r\n    <div>\r\n        <div class=\"page-titles\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <h3 class=\"text-themecolor\">{{trans('student.registration')}}\r\n                        <span class=\"card-subtitle d-none d-sm-inline\" v-if=\"registration.student\">({{getStudentName(registration.student)+' - '+trans('student.registration_no')+': '+registration.id}}) </span>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"action-buttons pull-right\">\r\n                        <router-link to=\"/student/registration/card-view\" class=\"btn btn-info btn-sm\"><i class=\"fas fa-list\"></i> <span class=\"d-none d-sm-inline\">{{trans('student.registration')}}</span></router-link>\r\n                        <router-link :to=\"`/student/${registration.student.uuid}`\" class=\"btn btn-info btn-sm\"><i class=\"fas fa-user\"></i> <span class=\"d-none d-sm-inline\">{{trans('student.student_detail')}}</span></router-link>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                \t<div class=\"card border-right\">\r\n                \t\t<div class=\"card-body\">\r\n                \t\t\t<h4 class=\"card-title m-3\"><span class=\"d-none d-sm-inline\">{{trans('student.registration_detail')}}</span>\r\n                                <div class=\"dropdown pull-right\" v-if=\"registration.registration_fee && registration.registration_fee_status == 'paid' && registration.transactions.length\">\r\n                                    <button type=\"button\" class=\"btn btn-info btn-xs\" href=\"#\" role=\"button\" id=\"moreOption\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" v-tooltip=\"trans('general.more_option')\">\r\n                                        <i class=\"fas fa-ellipsis-h\"></i> <span class=\"d-none d-sm-inline\">{{trans('finance.receipt')}}</span>\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <button class=\"dropdown-item custom-dropdown-menu\" @click=\"showReceiptModal = true\"><i class=\"fas fa-arrow-circle-right\"></i> {{trans('finance.receipt_detail')}}</button>\r\n                                        <button class=\"dropdown-item custom-dropdown-menu\" @click=\"printReceipt\"><i class=\"fas fa-print\"></i> {{trans('finance.print_receipt')}}</button>\r\n                                    </div>\r\n                                </div>\r\n                                <button type=\"button\" class=\"btn btn-info btn-xs pull-right \" v-if=\"registration.status == 'pending'\" @click=\"editModal = true\"><i class=\"fas fa-edit\"></i> <span class=\"d-none d-sm-inline\">{{trans('general.edit')}}</span></button>\r\n                                <button type=\"button\" class=\"btn btn-danger btn-xs pull-right \" v-if=\"registration.status == 'pending' && hasPermission('delete-registration')\" :key=\"registration.id\" v-confirm=\"{ok: confirmDelete(registration)}\" v-tooltip=\"trans('student.delete_registartion')\"><i class=\"fas fa-trash\"></i> <span class=\"d-none d-sm-inline\">{{trans('general.delete')}}</span></button>\r\n                \t\t\t</h4>\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-sm custom-show-table\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                        \t<td>{{trans('student.name')}}</td>\r\n                                        \t<td>\r\n                                                {{getStudentName(registration.student)}}\r\n                                                <span v-if=\"registration.is_online\">\r\n                                                    <span class=\"label label-info\">{{trans('student.online_registration')}}</span>\r\n                                                </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{trans('student.registration_status')}}</td>\r\n                                            <td>\r\n                                                <span v-for=\"status in getRegistrationStatus(registration)\" :class=\"['label','label-'+status.color,'m-r-5']\">{{status.label}}</span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr v-if=\"registration.rejection_remarks && registration.status == 'rejected'\">\r\n                                            <td>{{trans('student.rejection_remarks')}}</td>\r\n                                            <td class=\"text-danger\">{{registration.rejection_remarks}}</td>\r\n                                        </tr>\r\n                                        <tr @mouseover=\"show_edit = true\" @mouseout=\"show_edit = false\">\r\n                                        \t<td>{{trans('academic.course')}}</td>\r\n                                        \t<td>\r\n                                                {{registration.course.name+' '+getSession}}\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr v-show=\"batchStatus\">\r\n                                            <td>{{trans('academic.batch')}}</td>\r\n                                            <td  >{{registration.batch.name}}\r\n                                            </td>\r\n                                            \r\n                                        </tr>\r\n                                        <tr v-if=\"registration.status == 'allotted'\">\r\n                                            <td>{{trans('academic.batch')}}</td>\r\n                                            <td>{{registration.admission.batch.name}}\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        \t<td>{{trans('student.father_name')}}</td>\r\n                                        \t<td>{{registration.student.parent ? registration.student.parent.father_name : ''}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        \t<td>{{trans('student.mother_name')}}</td>\r\n                                        \t<td>{{registration.student.parent ? registration.student.parent.mother_name : ''}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        \t<td>{{trans('student.contact_number')}}</td>\r\n                                        \t<td>{{registration.student.contact_number}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        \t<td>{{trans('student.email')}}</td>\r\n                                        \t<td>{{registration.student.email}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        \t<td>{{trans('student.gender')}}</td>\r\n                                        \t<td>{{trans('list.'+registration.student.gender)}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        \t<td>{{trans('student.date_of_birth')}}</td>\r\n                                        \t<td>{{registration.student.date_of_birth | moment}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        \t<td>{{trans('student.date_of_registration')}}</td>\r\n                                        \t<td>{{registration.date_of_registration | moment}}</td>\r\n                                        </tr>\r\n                                        <tr v-if=\"registration.previous_institute_id\">\r\n                                            <td>{{trans('student.previous_institute')}}</td>\r\n                                            <td>{{registration.previous_institute.name}}</td>\r\n                                        </tr>\r\n                                        <tr @mouseover=\"show_edit = true\" @mouseout=\"show_edit = false\">\r\n                                        \t<td>{{trans('student.registration_fee')}}</td>\r\n                                        \t<td>\r\n                                                <span v-if=\"registration.registration_fee\">\r\n                                                    {{formatCurrency(registration.registration_fee)}}\r\n                                                    <span v-if=\"registration.registration_fee_status == 'paid'\">\r\n                                                        <span class=\"label label-success\">{{trans('student.registration_fee_status_paid')}}\r\n                                                            {{trans('general.on')}}\r\n                                                            <span v-if=\"registration.transactions.length\">\r\n                                                                {{transaction.date | moment}}\r\n                                                            </span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                                    <span v-else class=\"label label-danger\">{{trans('student.registration_fee_status_unpaid')}}</span>\r\n                                                </span>\r\n                                                <span v-else>-</span>\r\n                                        \t</td>\r\n                                        </tr>\r\n                                        <tr v-if=\"registration.registration_remarks\">\r\n                                        \t<td>{{trans('student.registration_remarks')}}</td>\r\n                                        \t<td>{{registration.registration_remarks}}</td>\r\n                                        </tr>\r\n\r\n\r\n                                        <tr v-if=\"registration.course_location\">\r\n                                        \t<td>Course Location</td>\r\n                                        \t<td>{{registration.course_location}}</td>\r\n                                        </tr>\r\n                                        <tr v-if=\"registration.student.accommodation\">\r\n                                        \t<td>Accommodation</td>\r\n                                        \t<td>{{registration.student.accommodation}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr v-if=\"registration.student.occupation\">\r\n                                        \t<td>Occupation</td>\r\n                                        \t<td>{{registration.student.occupation}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr v-if=\"registration.student.how_long_yoga\">\r\n                                        \t<td>How long have you been practicing Yoga?</td>\r\n                                        \t<td>{{registration.student.how_long_yoga}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr v-if=\"registration.student.teaching_experience\">\r\n                                        \t<td>Do you have any experience teaching yoga?</td>\r\n                                        \t<td>{{registration.student.teaching_experience}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr v-if=\"registration.student.joining_reason\">\r\n                                        \t<td>What is your primary reason to join the course?</td>\r\n                                        \t<td>{{registration.student.joining_reason}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr v-if=\"registration.student.important_to_life\">\r\n                                        \t<td>What is important to you in life?</td>\r\n                                        \t<td>{{registration.student.important_to_life}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr v-if=\"registration.student.why_choose_us\">\r\n                                        \t<td>Why did you choose Arhanta Yoga?</td>\r\n                                        \t<td>{{registration.student.why_choose_us}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr v-if=\"registration.student.how_hear_about_us\">\r\n                                        \t<td>How did you hear about us?</td>\r\n                                        \t<td>{{registration.student.how_hear_about_us}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr v-if=\"registration.student.allergies_dietary_needs\">\r\n                                        \t<td>Please mention in case you have any allergies or special dietary needs:</td>\r\n                                        \t<td>{{registration.student.allergies_dietary_needs}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr v-if=\"registration.student.use_drugs\">\r\n                                        \t<td>Have you in the last 12 months used tobacco, alcohol, recreational drugs, or illicit substances?</td>\r\n                                        \t<td>{{registration.student.use_drugs}}</td>\r\n                                        </tr>\r\n\r\n\r\n                                        <tr v-if=\"registration.student.substance_frequency_of_use\">\r\n                                        \t<td>Please list substance and frequency of use</td>\r\n                                        \t<td>{{registration.student.substance_frequency_of_use}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                        \t<td>{{trans('general.created_at')}}</td>\r\n                                        \t<td>{{registration.student.created_at | momentDateTime}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        \t<td>{{trans('general.updated_at')}}</td>\r\n                                        \t<td>{{registration.student.updated_at | momentDateTime}}</td>\r\n                                        </tr>\r\n                                        <tr v-if=\"registration.is_online\" v-for=\"custom_field in online_registration_custom_fields\">\r\n                                            <td>{{custom_field.name}}</td>\r\n                                            <td>{{getCustomFieldValue(custom_field)}}</td>\r\n                                        </tr>\r\n                                        <tr v-for=\"custom_field in registration_custom_fields\">\r\n                                            <td>{{custom_field.name}}</td>\r\n                                            <td>{{getCustomFieldValue(custom_field)}}</td>\r\n                                        </tr>\r\n                                   \t</tbody>\r\n                                </table>\r\n                            </div>\r\n                \t\t</div>\r\n                \t</div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6 p-0\">\r\n                    <template v-if=\"registration.registration_fee\">\r\n                        <fee-form v-if=\"registration.status == 'pending' && hasPermission('make-registration-fee-payment')\" :registration=\"registration\" @completed=\"getRegistration\"></fee-form>\r\n                    </template>\r\n                    <template v-if=\"(!registration.registration_fee || registration.status == 'partial') && registration.status != 'allotted' && hasPermission('change-registration-status')\">\r\n                        <action-form :registration=\"registration\" @completed=\"getRegistration\"></action-form>\r\n                    </template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <transition name=\"modal\" v-if=\"editModal\">\r\n            <div class=\"modal-mask\">\r\n                <div class=\"modal-wrapper\">\r\n                    <div class=\"modal-container modal-lg\">\r\n                        <div class=\"modal-header\">\r\n                            <slot name=\"header\">\r\n                                {{trans('student.edit_registration')}}\r\n                                <span class=\"float-right pointer\" @click=\"editModal = false\">x</span>\r\n                            </slot>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <slot name=\"body\">\r\n                                <edit-registration-form :registration=\"registration\" @completed=\"getRegistration\" @close=\"editModal = false\"></edit-registration-form>\r\n                                <div class=\"clearfix\"></div>\r\n                            </slot>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </transition>\r\n\r\n        <transition name=\"modal\" v-if=\"showReceiptModal && registration.registration_fee && registration.registration_fee_status == 'paid' && registration.transactions.length\">\r\n            <div class=\"modal-mask\">\r\n                <div class=\"modal-wrapper\">\r\n                    <div class=\"modal-container modal-lg\">\r\n                        <div class=\"modal-header\">\r\n                            <slot name=\"header\">\r\n                                {{trans('finance.receipt_detail')}}\r\n                                <span class=\"float-right pointer\" @click=\"showReceiptModal = false\">x</span>\r\n                            </slot>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <slot name=\"body\">\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table table-bordered\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>{{trans('finance.receipt_no')}}</td>\r\n                                                <td>#{{transaction.prefix+transaction.number}}</td>\r\n                                                <td>{{trans('finance.account')}}</td>\r\n                                                <td>{{transaction.account.name}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>{{trans('finance.amount')}}</td>\r\n                                                <td>{{formatCurrency(transaction.amount)}}</td>\r\n                                                <td>{{trans('finance.date')}}</td>\r\n                                                <td>{{transaction.date | moment}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>{{trans('finance.payment_method')}}</td>\r\n                                                <td>\r\n                                                    {{transaction.payment_method.name}}\r\n                                                    <span v-if=\"transaction.instrument_number\"><br />{{trans('finance.instrument_number')}}: {{transaction.instrument_number}}</span>\r\n                                                    <span v-if=\"transaction.instrument_date\"><br />{{trans('finance.instrument_date')}}: <span>{{transaction.instrument_date | moment}}</span></span>\r\n                                                    <span v-if=\"transaction.instrument_clearing_date\"><br />{{trans('finance.instrument_clearing_date')}}: <span>{{transaction.instrument_clearing_date | moment}}</span></span>\r\n                                                    <span v-if=\"transaction.instrument_bank_detail\"><br />{{trans('finance.instrument_bank_detail')}}: {{transaction.instrument_bank_detail}}</span>\r\n                                                    <span v-if=\"transaction.reference_number\"><br />{{trans('finance.reference_number')}}: {{transaction.reference_number}}</span>\r\n                                                </td>\r\n                                                <td>{{trans('finance.remarks')}}</td>\r\n                                                <td>{{transaction.remarks}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>{{trans('finance.date_of_entry')}}</td>\r\n                                                <td>{{transaction.created_at | momentDateTime}}</td>\r\n                                                <td>{{trans('finance.entry_by')}}</td>\r\n                                                <td>{{getEmployeeName(transaction.user.employee)}}</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <button type=\"button\" class=\"btn btn-block btn-danger\" v-if=\"registration.status == 'pending'\" @click=\"cancel_fee_payment = true\">{{trans('student.cancel_fee_payment')}}</button>\r\n                                <template v-if=\"cancel_fee_payment\">\r\n                                    <form @submit.prevent=\"cancelPayment\" class=\"m-t-20\" @keydown=\"cancelPaymentForm.errors.clear($event.target.name)\" v-if=\"registration.status == 'pending'\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-12\">\r\n                                                <div class=\"form-group\">\r\n                                                    <autosize-textarea v-model=\"cancelPaymentForm.cancellation_remarks\" rows=\"2\" name=\"cancellation_remarks\" :placeholder=\"trans('student.cancellation_remarks')\"></autosize-textarea>\r\n                                                    <show-error :form-name=\"cancelPaymentForm\" prop-name=\"cancellation_remarks\"></show-error>\r\n                                                </div>\r\n                                                <button type=\"submit\" class=\"btn btn-info waves-effect waves-light\">{{trans('general.save')}}</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                </template>\r\n                                <div class=\"clearfix\"></div>\r\n                            </slot>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </transition>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import editRegistrationForm from './edit'\r\n    import feeForm from './fee-form'\r\n    import actionForm from './action-form'\r\n\r\n\texport default {\r\n        components : { feeForm,actionForm,editRegistrationForm },\r\n        data() {\r\n            return {\r\n                id:this.$route.params.id,\r\n                registration: {\r\n                \tstudent: {\r\n\r\n                \t},\r\n                \tcourse: {\r\n\r\n                \t},\r\n                    transaction: null\r\n                },\r\n                transaction: {},\r\n                show_edit: false,\r\n                cancel_fee_payment: false,\r\n                cancelPaymentForm: new Form({\r\n                    cancellation_remarks: ''\r\n                }),\r\n                registration_custom_fields: [],\r\n                online_registration_custom_fields: [],\r\n                editModal: false,\r\n                showReceiptModal: false,\r\n                batch_status:false\r\n\r\n            }\r\n        },\r\n        mounted(){\r\n            if(!helper.hasPermission('list-registration')){\r\n                helper.notAccessibleMsg();\r\n                this.$router.push('/dashboard');\r\n            }\r\n\r\n            this.getRegistration();\r\n        },\r\n        methods: {\r\n        \tgetRegistration(){\r\n                let loader = this.$loading.show();\r\n        \t\taxios.get('/api/registration/'+this.id)\r\n        \t\t\t.then(response => {\r\n        \t\t\t\tthis.registration_custom_fields = response.registration_custom_fields;\r\n                        this.online_registration_custom_fields = response.online_registration_custom_fields;\r\n                        this.registration = response.registration;\r\n                        this.transaction = (response.registration.transactions.length) ? response.registration.transactions[0] : null;\r\n                        if (response.registration.status==\"pending\" || response.registration.status==\"partial\") {\r\n                            \r\n                            if (this.registration.batch_id) {\r\n                              this.batch_status=true;\r\n                            }\r\n                            \r\n                            \r\n                        }\r\n                        else\r\n                        {\r\n                            this.batch_status=false;\r\n                        }\r\n                        \r\n                        loader.hide();\r\n        \t\t\t})\r\n        \t\t\t.catch(error => {\r\n                        loader.hide();\r\n        \t\t\t\thelper.showErrorMsg(error);\r\n        \t\t\t\tthis.$router.push('/dashboard');\r\n        \t\t\t})\r\n        \t},\r\n            hasPermission(permission){\r\n                return helper.hasPermission(permission);\r\n            },\r\n            getStudentName(student){\r\n                return helper.getStudentName(student);\r\n            },\r\n            formatCurrency(amount){\r\n            \treturn helper.formatCurrency(amount);\r\n            },\r\n            getRegistrationStatus(registration){\r\n            \treturn helper.getRegistrationStatus(registration);\r\n            },\r\n            hasPermission(permission){\r\n                return helper.hasPermission(permission);\r\n            },\r\n            getEmployeeName(employee){\r\n                return helper.getEmployeeName(employee);\r\n            },\r\n            getCustomFieldValue(custom_field) {\r\n                return helper.getCustomFieldValue(this.registration.options.custom_values, custom_field.id);\r\n            },\r\n            cancelPayment(){\r\n                let loader = this.$loading.show();\r\n                this.cancelPaymentForm.post('/api/registration/'+this.id+'/transaction/'+this.transaction.id+'/cancel')\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        this.getRegistration();\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    })\r\n            },\r\n            confirmDelete(registration){\r\n                return dialog => this.deleteRegistration(registration);\r\n            },\r\n            deleteRegistration(registration){\r\n                let loader = this.$loading.show();\r\n                axios.delete('/api/registration/'+registration.id)\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        loader.hide();\r\n                        this.$router.push('/student/registration');\r\n                    }).catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            printReceipt(){\r\n                let loader = this.$loading.show();\r\n                axios.post('/api/registration/'+this.id+'/fee/'+this.transaction.id+'/print')\r\n                    .then(response => {\r\n                        let print = window.open(\"/print\");\r\n                        loader.hide();\r\n                        print.document.write(response);\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            }\r\n        },\r\n        computed:{\r\n        \tgetSession(){\r\n        \t\treturn helper.getDefaultAcademicSession().name;\r\n        \t},\r\n            batchStatus(){\r\n                return this.batch_status;\r\n            }\r\n        },\r\n        filters: {\r\n          moment(date) {\r\n            return helper.formatDate(date);\r\n          },\r\n          momentDateTime(date) {\r\n            return helper.formatDateTime(date);\r\n          }\r\n        }\r\n\t}\r\n</script>\r\n\r\n<style>\r\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=style&index=0&id=1f099760&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=style&index=0&id=1f099760&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_1f099760_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=style&index=0&id=1f099760&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=style&index=0&id=1f099760&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_1f099760_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_1f099760_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/student/registration/action-form.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/student/registration/action-form.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_form_vue_vue_type_template_id_24dead10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-form.vue?vue&type=template&id=24dead10& */ "./resources/js/views/student/registration/action-form.vue?vue&type=template&id=24dead10&");
/* harmony import */ var _action_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-form.vue?vue&type=script&lang=js& */ "./resources/js/views/student/registration/action-form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _action_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _action_form_vue_vue_type_template_id_24dead10___WEBPACK_IMPORTED_MODULE_0__.render,
  _action_form_vue_vue_type_template_id_24dead10___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/student/registration/action-form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/student/registration/edit.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/student/registration/edit.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_642a78dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=642a78dd& */ "./resources/js/views/student/registration/edit.vue?vue&type=template&id=642a78dd&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/student/registration/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_642a78dd___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_642a78dd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/student/registration/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/student/registration/fee-form.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/student/registration/fee-form.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fee_form_vue_vue_type_template_id_55a4b904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fee-form.vue?vue&type=template&id=55a4b904& */ "./resources/js/views/student/registration/fee-form.vue?vue&type=template&id=55a4b904&");
/* harmony import */ var _fee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fee-form.vue?vue&type=script&lang=js& */ "./resources/js/views/student/registration/fee-form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _fee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fee_form_vue_vue_type_template_id_55a4b904___WEBPACK_IMPORTED_MODULE_0__.render,
  _fee_form_vue_vue_type_template_id_55a4b904___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/student/registration/fee-form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/student/registration/show.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/student/registration/show.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_1f099760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=1f099760& */ "./resources/js/views/student/registration/show.vue?vue&type=template&id=1f099760&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/views/student/registration/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _show_vue_vue_type_style_index_0_id_1f099760_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&id=1f099760&lang=css& */ "./resources/js/views/student/registration/show.vue?vue&type=style&index=0&id=1f099760&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_1f099760___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_1f099760___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/student/registration/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/student/registration/action-form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/student/registration/action-form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_action_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./action-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/action-form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_action_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/student/registration/edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/student/registration/edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/student/registration/fee-form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/student/registration/fee-form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./fee-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/fee-form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/student/registration/show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/student/registration/show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/student/registration/action-form.vue?vue&type=template&id=24dead10&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/student/registration/action-form.vue?vue&type=template&id=24dead10& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_action_form_vue_vue_type_template_id_24dead10___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_action_form_vue_vue_type_template_id_24dead10___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_action_form_vue_vue_type_template_id_24dead10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./action-form.vue?vue&type=template&id=24dead10& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/action-form.vue?vue&type=template&id=24dead10&");


/***/ }),

/***/ "./resources/js/views/student/registration/edit.vue?vue&type=template&id=642a78dd&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/student/registration/edit.vue?vue&type=template&id=642a78dd& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_642a78dd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_642a78dd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_642a78dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=642a78dd& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/edit.vue?vue&type=template&id=642a78dd&");


/***/ }),

/***/ "./resources/js/views/student/registration/fee-form.vue?vue&type=template&id=55a4b904&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/student/registration/fee-form.vue?vue&type=template&id=55a4b904& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_form_vue_vue_type_template_id_55a4b904___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_form_vue_vue_type_template_id_55a4b904___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_form_vue_vue_type_template_id_55a4b904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./fee-form.vue?vue&type=template&id=55a4b904& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/fee-form.vue?vue&type=template&id=55a4b904&");


/***/ }),

/***/ "./resources/js/views/student/registration/show.vue?vue&type=template&id=1f099760&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/student/registration/show.vue?vue&type=template&id=1f099760& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_1f099760___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_1f099760___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_1f099760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=1f099760& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=template&id=1f099760&");


/***/ }),

/***/ "./resources/js/views/student/registration/show.vue?vue&type=style&index=0&id=1f099760&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/student/registration/show.vue?vue&type=style&index=0&id=1f099760&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_1f099760_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=style&index=0&id=1f099760&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/registration/show.vue?vue&type=style&index=0&id=1f099760&lang=css&");


/***/ })

}]);
//# sourceMappingURL=show.js.map?id=27bc8949f8b132f2