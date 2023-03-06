"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/employee/payroll/transaction/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ['uuid'],
  data: function data() {
    return {
      payrollTransactionForm: new Form({
        employee_id: '',
        head: 'salary',
        account_id: '',
        amount: '',
        date_of_transaction: '',
        payment_method_id: '',
        instrument_number: '',
        instrument_date: '',
        instrument_clearing_date: '',
        instrument_bank_detail: '',
        reference_number: '',
        remarks: '',
        upload_token: ''
      }),
      payroll_transaction: {},
      advance_balance: 0,
      payroll: {},
      employees: [],
      selected_employee: null,
      accounts: [],
      selected_account: null,
      payment_methods: [],
      selected_payment_method: null,
      payment_method_details: [],
      payment_method_detail: {},
      module_id: '',
      clearAttachment: true,
      default_currency: helper.getConfig('default_currency'),
      payroll_transaction_heads: [{
        text: i18n.employee.payroll_transaction_salary,
        value: 'salary'
      }, {
        text: i18n.employee.payroll_transaction_advance,
        value: 'advance'
      }, {
        text: i18n.employee.payroll_transaction_advance_return,
        value: 'advance_return'
      }, {
        text: i18n.employee.payroll_transaction_other_payment,
        value: 'other_payment'
      }, {
        text: i18n.employee.payroll_transaction_other_receipt,
        value: 'other_receipt'
      }]
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('create-payroll-transaction') && !helper.hasPermission('edit-payroll-transaction')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    if (this.uuid) this.get();else this.payrollTransactionForm.upload_token = this.$uuid.v4();
    this.getPreRequisite();
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getEmployeeNameWithCode: function getEmployeeNameWithCode(employee) {
      return helper.getEmployeeNameWithCode(employee);
    },
    getEmployeeDesignationOnDate: function getEmployeeDesignationOnDate(employee, date) {
      return helper.getEmployeeDesignationOnDate(employee, date);
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/employee/payroll/transaction/pre-requisite').then(function (response) {
        loader.hide();
        _this.employees = response.employees;
        _this.accounts = response.accounts;
        _this.payment_methods = response.payment_methods;
        _this.payment_method_details = response.payment_method_details;
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    fetchUnpaidPayroll: function fetchUnpaidPayroll() {
      var _this2 = this;
      if (this.payrollTransactionForm.head != 'salary' || !this.payrollTransactionForm.employee_id) return;
      var loader = this.$loading.show();
      axios.post('/api/employee/payroll/unpaid', {
        employee_id: this.payrollTransactionForm.employee_id
      }).then(function (response) {
        _this2.payroll = response.payroll || {};
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    fetchAdvanceBalance: function fetchAdvanceBalance() {
      var _this3 = this;
      if (this.payrollTransactionForm.head != 'advance_return' || !this.payrollTransactionForm.employee_id) return;
      var loader = this.$loading.show();
      axios.post('/api/employee/payroll/transaction/advance/balance', {
        employee_id: this.payrollTransactionForm.employee_id
      }).then(function (response) {
        _this3.advance_balance = response.balance || 0;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onPayrollTransactionHeadChange: function onPayrollTransactionHeadChange() {
      this.payrollTransactionForm.errors.clear('head');
      this.fetchUnpaidPayroll();
      this.fetchAdvanceBalance();
    },
    onEmployeeSelect: function onEmployeeSelect(selectedOption) {
      this.payrollTransactionForm.employee_id = selectedOption.id;
      this.fetchUnpaidPayroll();
      this.fetchAdvanceBalance();
    },
    onAccountSelect: function onAccountSelect(selectedOption) {
      this.payrollTransactionForm.account_id = selectedOption.id;
    },
    onPaymentMethodSelect: function onPaymentMethodSelect(selectedOption) {
      this.payrollTransactionForm.payment_method_id = selectedOption.id;
      this.payment_method_detail = this.payment_method_details.find(function (o) {
        return o.id == selectedOption.id;
      });
    },
    formatCurrency: function formatCurrency(price) {
      return helper.formatCurrency(price);
    },
    formatNumber: function formatNumber(number) {
      return helper.formatNumber(number, this.default_currency.decimal_place);
    },
    getPaymentMethodDetail: function getPaymentMethodDetail(field) {
      return helper.getPaymentMethodDetail(this.payment_method_detail, field);
    },
    proceed: function proceed() {
      if (this.uuid) this.update();else this.store();
    },
    store: function store() {
      var _this4 = this;
      var loader = this.$loading.show();
      this.payrollTransactionForm.post('/api/employee/payroll/transaction').then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this4.clearAttachment = !_this4.clearAttachment;
        _this4.payrollTransactionForm.upload_token = _this4.$uuid.v4();
        _this4.selected_employee = null;
        _this4.selected_transaction_category = null;
        _this4.selected_account = null;
        _this4.selected_payment_method = null;
        _this4.payment_method_detail = null;
        _this4.payrollTransactionForm.head = 'salary';
        _this4.$emit('completed');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    get: function get() {
      var _this5 = this;
      var loader = this.$loading.show();
      axios.get('/api/employee/payroll/transaction/' + this.uuid).then(function (response) {
        _this5.payroll_transaction = response.payroll_transaction;
        _this5.payrollTransactionForm.head = response.payroll_transaction.head;
        _this5.payrollTransactionForm.employee_id = response.payroll_transaction.employee_id;
        _this5.selected_employee = response.selected_employee;
        _this5.payrollTransactionForm.account_id = response.payroll_transaction.account_id;
        _this5.selected_account = response.payroll_transaction.account_id ? {
          id: response.payroll_transaction.account_id,
          name: response.payroll_transaction.account.name
        } : null;
        _this5.payrollTransactionForm.amount = _this5.formatNumber(response.payroll_transaction.amount);
        _this5.payrollTransactionForm.date_of_transaction = response.payroll_transaction.date;
        _this5.payrollTransactionForm.payment_method_id = response.payroll_transaction.payment_method_id;
        _this5.selected_payment_method = response.payroll_transaction.payment_method_id ? {
          id: response.payroll_transaction.payment_method_id,
          name: response.payroll_transaction.payment_method.name
        } : null;
        _this5.payrollTransactionForm.instrument_number = response.payroll_transaction.instrument_number;
        _this5.payrollTransactionForm.instrument_date = response.payroll_transaction.instrument_date;
        _this5.payrollTransactionForm.instrument_clearing_date = response.payroll_transaction.instrument_clearing_date;
        _this5.payrollTransactionForm.instrument_bank_detail = response.payroll_transaction.instrument_bank_detail;
        _this5.payrollTransactionForm.reference_number = response.payroll_transaction.reference_number;
        _this5.payrollTransactionForm.remarks = response.payroll_transaction.remarks;
        _this5.payrollTransactionForm.upload_token = response.payroll_transaction.upload_token;
        _this5.module_id = response.payroll_transaction.id;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this5.$router.push('/employee/payroll/transaction');
      });
    },
    update: function update() {
      var _this6 = this;
      var loader = this.$loading.show();
      this.payrollTransactionForm.patch('/api/employee/payroll/transaction/' + this.uuid).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this6.$router.push('/employee/payroll/transaction');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  },
  computed: {
    getUnpaidPayrollPeriod: function getUnpaidPayrollPeriod() {
      return helper.formatDate(this.payroll.start_date) + ' ' + i18n.general.to + ' ' + helper.formatDate(this.payroll.end_date);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/employee/payroll/transaction/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    payrollTransactionForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      payroll_transactions: {
        total: 0,
        data: []
      },
      filter: {
        sort_by: 'created_at',
        order: 'desc',
        employee_id: [],
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'date',
        translation: i18n.finance.date_of_transaction
      }, {
        value: 'created_at',
        translation: i18n.general.created_at
      }],
      employees: [],
      selected_employees: null,
      showCreatePanel: false,
      showFilterPanel: false,
      showUuid: '',
      help_topic: '',
      showModal: false
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-payroll-transaction')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getPayrollTransactions();
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getEmployeeNameWithCode: function getEmployeeNameWithCode(employee) {
      return helper.getEmployeeNameWithCode(employee);
    },
    getEmployeeDesignationOnDate: function getEmployeeDesignationOnDate(employee, date) {
      return helper.getEmployeeDesignationOnDate(employee, date);
    },
    getVoucherNumber: function getVoucherNumber(transaction) {
      return helper.getVoucherNumber(transaction);
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
    getPayrollNumber: function getPayrollNumber(payroll) {
      return helper.getPayrollNumber(payroll);
    },
    showAction: function showAction(payroll_transaction) {
      this.showUuid = payroll_transaction.uuid;
      this.showModal = true;
    },
    getPayrollTransactions: function getPayrollTransactions(page) {
      var _this = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/employee/payroll/transaction?page=' + page + url).then(function (response) {
        _this.payroll_transactions = response.payroll_transactions;
        _this.employees = response.filters.employees;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    editPayrollTransaction: function editPayrollTransaction(payroll_transaction) {
      this.$router.push('/employee/payroll/transaction/' + payroll_transaction.uuid + '/edit');
    },
    confirmDelete: function confirmDelete(payroll_transaction) {
      var _this2 = this;
      return function (dialog) {
        return _this2.deletePayrollTransaction(payroll_transaction);
      };
    },
    deletePayrollTransaction: function deletePayrollTransaction(payroll_transaction) {
      var _this3 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/employee/payroll/transaction/' + payroll_transaction.uuid).then(function (response) {
        toastr.success(response.message);
        _this3.getPayrollTransactions();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    print: function print() {
      var loader = this.$loading.show();
      axios.post('/api/employee/payroll/transaction/print', {
        filter: this.filter
      }).then(function (response) {
        var print = window.open("/print");
        loader.hide();
        print.document.write(response);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    pdf: function pdf() {
      var _this4 = this;
      var loader = this.$loading.show();
      axios.post('/api/employee/payroll/transaction/pdf', {
        filter: this.filter
      }).then(function (response) {
        loader.hide();
        window.open('/download/report/' + response + '?token=' + _this4.authToken);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onEmployeeSelect: function onEmployeeSelect(selectedOption) {
      this.filter.employee_id.push(selectedOption.id);
    },
    onEmployeeRemove: function onEmployeeRemove(removedOption) {
      this.filter.employee_id.splice(this.filter.employee_id.indexOf(removedOption.id), 1);
    }
  },
  filters: {
    moment: function moment(date) {
      return helper.formatDate(date);
    },
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    }
  },
  watch: {
    'filter.sort_by': function filterSort_by(val) {
      this.getPayrollTransactions();
    },
    'filter.order': function filterOrder(val) {
      this.getPayrollTransactions();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getPayrollTransactions();
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/form.vue?vue&type=template&id=cb76875e&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/form.vue?vue&type=template&id=cb76875e& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "m-t-10"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.proceed.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.payrollTransactionForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [!_vm.uuid ? [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll_transaction_head")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payrollTransactionForm.head,
      expression: "payrollTransactionForm.head"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "head"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.payrollTransactionForm, "head", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onPayrollTransactionHeadChange]
    }
  }, _vm._l(_vm.payroll_transaction_heads, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                            " + _vm._s(option.text) + "\n                          ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "head"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.employee")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "employee_id",
      id: "employee_id",
      options: _vm.employees,
      placeholder: _vm.trans("employee.select_employee")
    },
    on: {
      select: _vm.onEmployeeSelect,
      close: function close($event) {
        return _vm.payrollTransactionForm.errors.clear("employee_id");
      },
      remove: function remove($event) {
        _vm.payrollTransactionForm.employee_id = "";
      }
    },
    model: {
      value: _vm.selected_employee,
      callback: function callback($$v) {
        _vm.selected_employee = $$v;
      },
      expression: "selected_employee"
    }
  }, [!_vm.employees.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "employee_id"
    }
  }), _vm._v(" "), _vm.payrollTransactionForm.head == "salary" && _vm.payrollTransactionForm.employee_id ? _c("span", {
    staticClass: "help-block font-80pc"
  }, [_vm.payroll.id ? _c("span", {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll_transaction_unpaid_payroll_info", {
    number: _vm.payroll.number,
    balance: _vm.formatCurrency(_vm.payroll.balance),
    period: _vm.getUnpaidPayrollPeriod
  })))]) : _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll_transaction_no_unpaid_payroll")))])]) : _vm._e(), _vm._v(" "), _vm.payrollTransactionForm.head == "advance_return" && _vm.payrollTransactionForm.employee_id ? _c("span", {
    staticClass: "help-block font-80pc"
  }, [_vm._v("\n                            " + _vm._s(_vm.trans("employee.payroll_transaction_advance_returnable", {
    balance: _vm.formatCurrency(_vm.advance_balance)
  })) + "\n                        ")]) : _vm._e()], 1)])] : [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("p", {
    staticClass: "m-t-20"
  }, [_vm._v("\n                            " + _vm._s(_vm.trans("employee.payroll_transaction_" + _vm.payroll_transaction.head)) + "\n                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_vm.payroll_transaction.id ? _c("p", {
    staticClass: "m-t-20"
  }, [_vm._v("\n                            " + _vm._s(_vm.getEmployeeNameWithCode(_vm.payroll_transaction.employee)) + " "), _c("br"), _vm._v("\n                            " + _vm._s(_vm.getEmployeeDesignationOnDate(_vm.payroll_transaction.employee, _vm.payroll_transaction.date_of_transaction)) + " "), _c("br")]) : _vm._e()])])], _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
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
      placeholder: _vm.trans("finance.select_account")
    },
    on: {
      select: _vm.onAccountSelect,
      close: function close($event) {
        return _vm.payrollTransactionForm.errors.clear("account_id");
      },
      remove: function remove($event) {
        _vm.payrollTransactionForm.account_id = "";
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
  }, [_vm._v("\n                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "account_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.amount")))]), _vm._v(" "), _c("currency-input", {
    attrs: {
      position: _vm.default_currency.position,
      symbol: _vm.default_currency.symbol,
      name: "amount",
      placeholder: _vm.trans("finance.amount")
    },
    nativeOn: {
      input: function input($event) {
        return _vm.payrollTransactionForm.errors.clear("amount");
      }
    },
    model: {
      value: _vm.payrollTransactionForm.amount,
      callback: function callback($$v) {
        _vm.$set(_vm.payrollTransactionForm, "amount", $$v);
      },
      expression: "payrollTransactionForm.amount"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "amount"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.date_of_transaction")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("finance.date_of_transaction")
    },
    on: {
      selected: function selected($event) {
        return _vm.payrollTransactionForm.errors.clear("date_of_transaction");
      }
    },
    model: {
      value: _vm.payrollTransactionForm.date_of_transaction,
      callback: function callback($$v) {
        _vm.$set(_vm.payrollTransactionForm, "date_of_transaction", $$v);
      },
      expression: "payrollTransactionForm.date_of_transaction"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "date_of_transaction"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
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
      placeholder: _vm.trans("finance.select_payment_method")
    },
    on: {
      select: _vm.onPaymentMethodSelect,
      close: function close($event) {
        return _vm.payrollTransactionForm.errors.clear("payment_method_id");
      },
      remove: function remove($event) {
        _vm.payrollTransactionForm.payment_method_id = "";
      }
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
  }, [_vm._v("\n                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "payment_method_id"
    }
  })], 1)]), _vm._v(" "), _vm.getPaymentMethodDetail("instrument_number") ? _c("div", {
    staticClass: "col-12 col-sm-3"
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
      value: _vm.payrollTransactionForm.instrument_number,
      expression: "payrollTransactionForm.instrument_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "instrument_number",
      placeholder: _vm.trans("finance.instrument_number")
    },
    domProps: {
      value: _vm.payrollTransactionForm.instrument_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payrollTransactionForm, "instrument_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "instrument_number"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.getPaymentMethodDetail("instrument_date") ? _c("div", {
    staticClass: "col-12 col-sm-3"
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
        return _vm.payrollTransactionForm.errors.clear("instrument_date");
      }
    },
    model: {
      value: _vm.payrollTransactionForm.instrument_date,
      callback: function callback($$v) {
        _vm.$set(_vm.payrollTransactionForm, "instrument_date", $$v);
      },
      expression: "payrollTransactionForm.instrument_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "instrument_date"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.getPaymentMethodDetail("instrument_bank_detail") ? _c("div", {
    staticClass: "col-12 col-sm-3"
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
      value: _vm.payrollTransactionForm.instrument_bank_detail,
      expression: "payrollTransactionForm.instrument_bank_detail"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "instrument_bank_detail",
      placeholder: _vm.trans("finance.instrument_bank_detail")
    },
    domProps: {
      value: _vm.payrollTransactionForm.instrument_bank_detail
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payrollTransactionForm, "instrument_bank_detail", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "instrument_bank_detail"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.getPaymentMethodDetail("instrument_clearing_date") ? _c("div", {
    staticClass: "col-12 col-sm-3"
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
        return _vm.payrollTransactionForm.errors.clear("instrument_clearing_date");
      }
    },
    model: {
      value: _vm.payrollTransactionForm.instrument_clearing_date,
      callback: function callback($$v) {
        _vm.$set(_vm.payrollTransactionForm, "instrument_clearing_date", $$v);
      },
      expression: "payrollTransactionForm.instrument_clearing_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "instrument_clearing_date"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.getPaymentMethodDetail("reference_number") ? _c("div", {
    staticClass: "col-12 col-sm-3"
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
      value: _vm.payrollTransactionForm.reference_number,
      expression: "payrollTransactionForm.reference_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "reference_number",
      placeholder: _vm.trans("finance.reference_number")
    },
    domProps: {
      value: _vm.payrollTransactionForm.reference_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payrollTransactionForm, "reference_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "reference_number"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll_transaction_remarks")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "1",
      name: "remarks",
      placeholder: _vm.trans("employee.payroll_transaction_remarks")
    },
    model: {
      value: _vm.payrollTransactionForm.remarks,
      callback: function callback($$v) {
        _vm.$set(_vm.payrollTransactionForm, "remarks", $$v);
      },
      expression: "payrollTransactionForm.remarks"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollTransactionForm,
      "prop-name": "remarks"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("file-upload-input", {
    attrs: {
      "button-text": _vm.trans("general.upload_document"),
      token: _vm.payrollTransactionForm.upload_token,
      module: "transaction",
      "clear-file": _vm.clearAttachment,
      "module-id": _vm.module_id
    }
  })], 1)])], 2), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("router-link", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.uuid,
      expression: "uuid"
    }],
    staticClass: "btn btn-danger waves-effect waves-light",
    attrs: {
      to: "/employee/payroll/transaction"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.cancel")))]), _vm._v(" "), !_vm.uuid ? _c("button", {
    staticClass: "btn btn-danger waves-effect waves-light",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("cancel");
      }
    }
  }, [_vm._v(_vm._s(_vm.trans("general.cancel")))]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "submit"
    }
  }, [_vm.uuid ? _c("span", [_vm._v(_vm._s(_vm.trans("general.update")))]) : _c("span", [_vm._v(_vm._s(_vm.trans("general.save")))])])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/index.vue?vue&type=template&id=14f30215&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/index.vue?vue&type=template&id=14f30215& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll_transaction")) + " \n                    "), _vm.payroll_transactions.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.payroll_transactions.total,
    from: _vm.payroll_transactions.from,
    to: _vm.payroll_transactions.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_vm.payroll_transactions.total && !_vm.showCreatePanel && _vm.hasPermission("create-payroll-transaction") ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("general.add_new"),
      expression: "trans('general.add_new')"
    }],
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("employee.add_new_payroll_transaction")))])]) : _vm._e(), _vm._v(" "), !_vm.showFilterPanel ? _c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        _vm.showFilterPanel = !_vm.showFilterPanel;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-filter"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))])]) : _vm._e(), _vm._v(" "), _c("sort-by", {
    attrs: {
      "order-by-options": _vm.orderByOptions,
      "sort-by": _vm.filter.sort_by,
      order: _vm.filter.order
    },
    on: {
      updateSortBy: function updateSortBy(value) {
        _vm.filter.sort_by = value;
      },
      updateOrder: function updateOrder(value) {
        _vm.filter.order = value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "btn-group"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("general.more_option"),
      expression: "trans('general.more_option')"
    }],
    staticClass: "btn btn-info btn-sm dropdown-toggle no-caret",
    attrs: {
      type: "button",
      role: "menu",
      id: "moreOption",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-ellipsis-h"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  })]), _vm._v(" "), _c("div", {
    "class": ["dropdown-menu", _vm.getConfig("direction") == "ltr" ? "dropdown-menu-right" : ""],
    attrs: {
      "aria-labelledby": "moreOption"
    }
  }, [_c("button", {
    staticClass: "dropdown-item custom-dropdown",
    on: {
      click: _vm.print
    }
  }, [_c("i", {
    staticClass: "fas fa-print"
  }), _vm._v(" " + _vm._s(_vm.trans("general.print")))]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item custom-dropdown",
    on: {
      click: _vm.pdf
    }
  }, [_c("i", {
    staticClass: "fas fa-file-pdf"
  }), _vm._v(" " + _vm._s(_vm.trans("general.generate_pdf")))])])]), _vm._v(" "), _c("help-button", {
    on: {
      clicked: function clicked($event) {
        _vm.help_topic = "employee.payroll.transaction";
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showFilterPanel ? _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.employee")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "employee_id",
      id: "employee_id",
      options: _vm.employees,
      placeholder: _vm.trans("employee.select_employee"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_employees
    },
    on: {
      select: _vm.onEmployeeSelect,
      remove: _vm.onEmployeeRemove
    },
    model: {
      value: _vm.selected_employees,
      callback: function callback($$v) {
        _vm.selected_employees = $$v;
      },
      expression: "selected_employees"
    }
  }, [!_vm.employees.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.showFilterPanel = false;
      }
    }
  }, [_vm._v(_vm._s(_vm.trans("general.cancel")))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.getPayrollTransactions
    }
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))])])])]) : _vm._e()]), _vm._v(" "), _vm.hasPermission("create-payroll-transaction") ? _c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showCreatePanel ? _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("employee.add_new_payroll_transaction")))]), _vm._v(" "), _c("payroll-transaction-form", {
    on: {
      completed: _vm.getPayrollTransactions,
      cancel: function cancel($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  })], 1)]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.payroll_transactions.total ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("finance.voucher_number")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("employee.employee")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("employee.payroll_transaction_head")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.account")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.payment_method")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.amount")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.date_of_transaction")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("general.created_by")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("general.created_at")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.payroll_transactions.data, function (payroll_transaction) {
    return _c("tr", [_c("td", {
      domProps: {
        textContent: _vm._s(_vm.getVoucherNumber(payroll_transaction))
      }
    }), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(_vm.getEmployeeNameWithCode(payroll_transaction.employee)) + " "), _c("br"), _vm._v(" " + _vm._s(_vm.getEmployeeDesignationOnDate(payroll_transaction.employee, payroll_transaction.date)) + "\n                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(_vm.trans("employee.payroll_transaction_" + payroll_transaction.head)) + "\n                                    "), payroll_transaction.head == "salary" ? _c("span", [_vm._v("(" + _vm._s("#" + _vm.getPayrollNumber(payroll_transaction.payroll)) + ")")]) : _vm._e()]), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(payroll_transaction.account.name)
      }
    }), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        textContent: _vm._s(payroll_transaction.payment_method.name)
      }
    }), _vm._v(" "), payroll_transaction.instrument_number ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.trans("finance.instrument_number")) + " "), _c("u", [_vm._v(_vm._s(payroll_transaction.instrument_number) + " ")])]) : _vm._e(), _vm._v(" "), payroll_transaction.instrument_date ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.trans("finance.instrument_date")) + " "), _c("u", [_vm._v(_vm._s(_vm._f("moment")(payroll_transaction.instrument_date)) + " ")])]) : _vm._e(), _vm._v(" "), payroll_transaction.instrument_bank_detail ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.trans("finance.instrument_bank_detail")) + " "), _c("u", [_vm._v(_vm._s(payroll_transaction.instrument_bank_detail) + " ")])]) : _vm._e(), _vm._v(" "), payroll_transaction.instrument_clearing_date ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.trans("finance.instrument_clearing_date")) + " "), _c("u", [_vm._v(_vm._s(_vm._f("moment")(payroll_transaction.instrument_clearing_date)) + " ")])]) : _vm._e(), _vm._v(" "), payroll_transaction.reference_number ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.trans("finance.reference_number")) + " "), _c("u", [_vm._v(_vm._s(payroll_transaction.reference_number))])]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatCurrency(payroll_transaction.amount)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(payroll_transaction.date)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getEmployeeNameWithCode(payroll_transaction.user.employee)) + " "), _c("br"), _vm._v(" " + _vm._s(_vm.getEmployeeDesignationOnDate(payroll_transaction.user.employee, payroll_transaction.date)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentDateTime")(payroll_transaction.created_at)))]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_vm.hasPermission("edit-payroll-transaction") ? _c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("employee.edit_payroll_transaction"),
        expression: "trans('employee.edit_payroll_transaction')"
      }],
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.editPayrollTransaction(payroll_transaction);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })]) : _vm._e(), _vm._v(" "), _vm.hasPermission("cancel-payroll-transaction") ? _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(payroll_transaction)
        },
        expression: "{ok: confirmDelete(payroll_transaction)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("employee.delete_payroll_transaction"),
        expression: "trans('employee.delete_payroll_transaction')"
      }],
      key: payroll_transaction.id,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-times"
    })]) : _vm._e()])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.payroll_transactions.total ? _c("module-info", {
    attrs: {
      module: "employee",
      title: "payroll_transaction_module_title",
      description: "payroll_transaction_module_description",
      icon: "list"
    }
  }, [_c("div", {
    attrs: {
      slot: "btn"
    },
    slot: "btn"
  }, [!_vm.showCreatePanel && _vm.hasPermission("create-payroll-transaction") ? _c("button", {
    staticClass: "btn btn-info btn-md",
    on: {
      click: function click($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" " + _vm._s(_vm.trans("general.add_new")))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c("pagination-record", {
    attrs: {
      "page-length": _vm.filter.page_length,
      records: _vm.payroll_transactions
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getPayrollTransactions
    }
  })], 1)])], 1), _vm._v(" "), _c("right-panel", {
    attrs: {
      topic: _vm.help_topic
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/employee/payroll/transaction/form.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/employee/payroll/transaction/form.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_cb76875e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=cb76875e& */ "./resources/js/views/employee/payroll/transaction/form.vue?vue&type=template&id=cb76875e&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/employee/payroll/transaction/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_cb76875e___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_cb76875e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/employee/payroll/transaction/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/employee/payroll/transaction/index.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/employee/payroll/transaction/index.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_14f30215___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=14f30215& */ "./resources/js/views/employee/payroll/transaction/index.vue?vue&type=template&id=14f30215&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/employee/payroll/transaction/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_14f30215___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_14f30215___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/employee/payroll/transaction/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/employee/payroll/transaction/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/transaction/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/employee/payroll/transaction/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/transaction/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/employee/payroll/transaction/form.vue?vue&type=template&id=cb76875e&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/transaction/form.vue?vue&type=template&id=cb76875e& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_cb76875e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_cb76875e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_cb76875e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=cb76875e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/form.vue?vue&type=template&id=cb76875e&");


/***/ }),

/***/ "./resources/js/views/employee/payroll/transaction/index.vue?vue&type=template&id=14f30215&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/transaction/index.vue?vue&type=template&id=14f30215& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_14f30215___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_14f30215___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_14f30215___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=14f30215& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/transaction/index.vue?vue&type=template&id=14f30215&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=1bb658ce3ba888ea