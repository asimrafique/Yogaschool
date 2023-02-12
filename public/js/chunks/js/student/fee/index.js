"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/student/fee/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/fee-detail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/fee-detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ['id', 'uuid', 'rid'],
  data: function data() {
    return {
      transactions: [],
      transaction: {},
      cancel_fee_payment: false,
      cancelPaymentForm: new Form({
        cancellation_remarks: ''
      })
    };
  },
  mounted: function mounted() {
    this.getDetail(this.id);
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
    getDetail: function getDetail(id) {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/student/' + this.uuid + '/fee/' + this.rid + '/' + id).then(function (response) {
        _this.transactions = response.transactions;
        _this.transaction = response.transactions[0];
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getEmployeeName: function getEmployeeName(employee) {
      return helper.getEmployeeName(employee);
    },
    cancelPayment: function cancelPayment() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.cancelPaymentForm.post('/api/student/' + this.uuid + '/fee/' + this.rid + '/' + this.id + '/' + this.transaction.id + '/cancel').then(function (response) {
        toastr.success(response.message);
        _this2.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    printReceipt: function printReceipt() {
      var loader = this.$loading.show();
      axios.post('/api/student/' + this.uuid + '/fee/' + this.rid + '/' + this.id + '/' + this.transaction.id + '/print').then(function (response) {
        var print = window.open("/print");
        loader.hide();
        print.document.write(response);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  },
  computed: {
    transactionGroup: function transactionGroup() {
      var group = [];
      this.transaction.groups.forEach(function (txn) {
        group.push((txn.prefix || '') + '' + txn.number);
      });
      group.sort();
      return group;
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
    id: function id(val) {
      if (val) {
        this.getDetail(val);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../summary */ "./resources/js/views/student/summary.vue");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment */ "./resources/js/views/student/fee/payment.vue");
/* harmony import */ var _payment_parent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-parent */ "./resources/js/views/student/fee/payment-parent.vue");
/* harmony import */ var _fee_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fee-detail */ "./resources/js/views/student/fee/fee-detail.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    studentSummary: _summary__WEBPACK_IMPORTED_MODULE_0__["default"],
    feePaymentForm: _payment__WEBPACK_IMPORTED_MODULE_1__["default"],
    feePaymentParentForm: _payment_parent__WEBPACK_IMPORTED_MODULE_2__["default"],
    feeDetail: _fee_detail__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      uuid: this.$route.params.uuid,
      record_id: this.$route.params.record_id,
      student_record: {
        fee_allocation: {
          fee_allocation_groups: []
        }
      },
      feePayment: {
        fee_group_name: '',
        fee_payment_installment_id: '',
        student_fee_record_id: '',
        date: helper.today(),
        installments: [],
        amount: 0
      },
      fee: {
        groups: []
      },
      feePaymentForm: false,
      feePaymentShow: false
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-student-fee')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getRecord();
    helper.showDemoNotification(['student']);
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    hasAnyRole: function hasAnyRole(roles) {
      return helper.hasAnyRole(roles);
    },
    hasNotAnyRole: function hasNotAnyRole(roles) {
      return helper.hasNotAnyRole(roles);
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    getStudentName: function getStudentName(student) {
      return helper.getStudentName(student);
    },
    getRecord: function getRecord() {
      var _this = this;
      var loader = this.$loading.show();
      this.feePaymentForm = false;
      this.feePaymentShow = false;
      axios.get('/api/student/' + this.uuid + '/fee/' + this.record_id).then(function (response) {
        _this.student_record = response.student_record;
        if (!_this.student_record.student_fee_records.length) {
          _this.$router.push('/student/' + _this.uuid);
        }
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        if (_this.hasAnyRole(['student', 'parent'])) {
          _this.$router.push('/student/list');
        } else {
          _this.$router.push('/student/' + _this.uuid + '/fee/' + _this.record_id + '/create');
        }
      });
    },
    calculate: function calculate() {
      var _this2 = this;
      this.fee = {
        groups: []
      };
      this.student_record.fee_allocation.fee_allocation_groups.forEach(function (fee_allocation_group) {
        var installments = [];
        var heads = [];
        var foots = [];
        heads.push(i18n.finance.fee_installment_title);
        heads.push(i18n.finance.fee_installment_due_date);
        fee_allocation_group.fee_group.fee_heads.forEach(function (fee_head) {
          heads.push(fee_head.name);
        });
        if (fee_allocation_group.fee_group.options.has_transport) {
          heads.push(i18n.transport.circle);
          heads.push(i18n.transport.fee);
        }
        foots.push(i18n.finance.total);
        foots.push('');
        heads.push(i18n.finance.late_fee);
        heads.push(i18n.finance.installment_total);
        heads.push(i18n.finance.other);
        heads.push(i18n.finance.paid);
        heads.push(i18n.finance.balance);
        heads.push(i18n.finance.fee_status);
        fee_allocation_group.fee_installments.forEach(function (fee_installment) {
          var student_fee_record = _this2.student_record.student_fee_records.find(function (o) {
            return o.fee_installment_id == fee_installment.id;
          });
          var installment_data = [];
          installment_data.push({
            text: fee_installment.title
          });
          installment_data.push({
            text: _this2.showDate(student_fee_record.due_date || fee_installment.due_date)
          });
          fee_allocation_group.fee_group.fee_heads.forEach(function (fee_head) {
            installment_data.push({
              text: _this2.getInstallmentFeeAmount(fee_installment, fee_head.id),
              actual: _this2.getInstallmentFeeAmountWithoutConcession(fee_installment, fee_head.id),
              is_concession: _this2.checkInstallmentConcession(fee_installment, fee_head.id) ? true : false
            });
          });
          if (fee_allocation_group.fee_group.options.has_transport) {
            installment_data.push({
              text: _this2.getTransportCircleName(fee_installment)
            });
            installment_data.push({
              text: _this2.getTransportFeeAmount(fee_installment)
            });
          }
          installment_data.push({
            text: _this2.getLateFeeAmount(fee_installment)
          });
          installment_data.push({
            text: _this2.getInstallmentTotalAmount(fee_installment)
          });
          installment_data.push({
            text: _this2.getInstallmentOtherAmount(fee_installment)
          });
          installment_data.push({
            text: _this2.getInstallmentPaidAmount(fee_installment)
          });
          installment_data.push({
            text: _this2.getInstallmentBalanceAmount(fee_installment)
          });
          installment_data.push({
            text: _this2.getInstallmentPrintStatus(fee_installment)
          });
          installments.push({
            data: installment_data
          });
        });
        fee_allocation_group.fee_group.fee_heads.forEach(function (fee_head) {
          foots.push(_this2.getTotalFee(fee_allocation_group, fee_head.id));
        });
        if (fee_allocation_group.fee_group.options.has_transport) {
          foots.push('');
          foots.push(_this2.getTransportFeeTotal(fee_allocation_group));
        }
        foots.push(_this2.getLateFeeTotal(fee_allocation_group));
        foots.push(_this2.getInstallmentGrandTotal(fee_allocation_group));
        foots.push(_this2.getInstallmentGrandOther(fee_allocation_group));
        foots.push(_this2.getInstallmentPaidGrandTotal(fee_allocation_group));
        foots.push(_this2.getInstallmentBalanceGrandTotal(fee_allocation_group));
        foots.push('');
        var group = {
          name: fee_allocation_group.fee_group.name,
          heads: heads,
          installments: installments,
          foots: foots
        };
        _this2.fee.groups.push(group);
      });
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
    isInstallmentOverdue: function isInstallmentOverdue(fee_installment) {
      var installment = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      if (helper.today() > (installment.due_date || fee_installment.due_date) && installment.status != 'paid') {
        return helper.getDateDiff(installment.due_date || fee_installment.due_date);
      }
      return 0;
    },
    getStatus: function getStatus(fee_installment) {
      var installment = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      if (installment.status == 'paid') {
        return '<span class="label label-success">' + i18n.student.fee_status_paid + '</span>';
      } else if (installment.status == 'partially_paid') {
        return '<span class="label label-warning">' + i18n.student.fee_status_partially_paid + '</span>';
      } else if (installment.status == 'cancelled') {
        return '<span class="label label-danger">' + i18n.student.fee_status_cancelled + '</span>';
      } else {
        return '<span class="label label-danger">' + i18n.student.fee_status_unpaid + '</span>';
      }
    },
    getInstallmentDueDate: function getInstallmentDueDate(fee_installment) {
      var installment = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      return helper.formatDate(installment.due_date || fee_installment.due_date);
    },
    getInstallmentStatus: function getInstallmentStatus(fee_installment) {
      var installment = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      return installment.status;
    },
    getInstallmentFee: function getInstallmentFee(fee_installment, fee_head_id) {
      var amount = this.getInstallmentFeeWithoutConcession(fee_installment, fee_head_id);
      return this.getInstallmentFeeWithConcession(amount, fee_installment, fee_head_id);
    },
    getInstallmentFeeWithoutConcession: function getInstallmentFeeWithoutConcession(fee_installment, fee_head_id) {
      var installment_detail = fee_installment.fee_installment_details.find(function (o) {
        return o.fee_head_id == fee_head_id;
      });
      if (typeof installment_detail == 'undefined') return 0;
      var student_fee_record = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      var student_optional_fee_record = student_fee_record.student_optional_fee_records.findIndex(function (o) {
        return o.fee_head_id == fee_head_id;
      });
      return student_optional_fee_record < 0 ? installment_detail.amount : 0;
    },
    checkInstallmentConcession: function checkInstallmentConcession(fee_installment, fee_head_id) {
      var installment_detail = fee_installment.fee_installment_details.find(function (o) {
        return o.fee_head_id == fee_head_id;
      });
      var student_fee_record = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      var fee_concession_index = student_fee_record.fee_concession ? student_fee_record.fee_concession.fee_concession_details.findIndex(function (o) {
        return o.fee_head_id == fee_head_id;
      }) : -1;
      return fee_concession_index >= 0 ? true : false;
    },
    getInstallmentFeeWithConcession: function getInstallmentFeeWithConcession(amount, fee_installment, fee_head_id) {
      var installment_detail = fee_installment.fee_installment_details.find(function (o) {
        return o.fee_head_id == fee_head_id;
      });
      var student_fee_record = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      var fee_concession_index = student_fee_record.fee_concession ? student_fee_record.fee_concession.fee_concession_details.findIndex(function (o) {
        return o.fee_head_id == fee_head_id;
      }) : -1;
      if (fee_concession_index >= 0) {
        var fee_concession = student_fee_record.fee_concession.fee_concession_details[fee_concession_index];
        var fee_concession_amount = fee_concession.type == 'percent' ? amount * (fee_concession.amount / 100) : fee_concession.amount;
        return amount - fee_concession_amount >= 0 ? Math.ceil(amount - fee_concession_amount) : 0;
      }
      return Math.ceil(amount);
    },
    getInstallmentFeeAmountWithoutConcession: function getInstallmentFeeAmountWithoutConcession(fee_installment, fee_head_id) {
      var amount = this.getInstallmentFeeWithoutConcession(fee_installment, fee_head_id);
      return helper.formatCurrency(amount);
    },
    getInstallmentFeeAmount: function getInstallmentFeeAmount(fee_installment, fee_head_id) {
      var amount = this.getInstallmentFee(fee_installment, fee_head_id);
      return helper.formatCurrency(amount);
    },
    getInstallmentTotalWithoutLateFee: function getInstallmentTotalWithoutLateFee(fee_installment) {
      var _this3 = this;
      var student_fee_record = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      var total = 0;
      fee_installment.fee_installment_details.forEach(function (installment_detail) {
        total += _this3.getInstallmentFee(fee_installment, installment_detail.fee_head_id);
      });
      var transport_fee = this.getTransportFee(fee_installment);
      total += Number.isInteger(transport_fee) ? transport_fee : 0;
      return total;
    },
    getInstallmentTotal: function getInstallmentTotal(fee_installment) {
      var student_fee_record = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      var total = this.getInstallmentTotalWithoutLateFee(fee_installment);
      if (total || student_fee_record.status != 'unpaid') {
        var late_fee = this.getLateFee(fee_installment);
        total += Number.isInteger(late_fee) ? late_fee : 0;
      }
      return total;
    },
    getInstallmentTotalAmount: function getInstallmentTotalAmount(fee_installment) {
      var amount = this.getInstallmentTotal(fee_installment);
      return helper.formatCurrency(amount);
    },
    getInstallmentOther: function getInstallmentOther(fee_installment) {
      var student_fee_record = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      var other = 0;
      student_fee_record.transactions.forEach(function (transaction) {
        if (!transaction.is_cancelled) {
          if (transaction.options.additional_fee_charge && transaction.options.additional_fee_charge.amount) {
            other += transaction.options.additional_fee_charge.amount;
          }
          if (transaction.options.additional_fee_discount && transaction.options.additional_fee_discount.amount) {
            other -= transaction.options.additional_fee_discount.amount;
          }
        }
      });
      return other;
    },
    getInstallmentOtherAmount: function getInstallmentOtherAmount(fee_installment) {
      var amount = this.getInstallmentOther(fee_installment);
      return helper.formatCurrency(amount);
    },
    getInstallmentPaid: function getInstallmentPaid(fee_installment) {
      var student_fee_record = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      var paid = 0;
      student_fee_record.transactions.forEach(function (transaction) {
        if (!transaction.is_cancelled) paid += transaction.amount;
      });
      return paid;
    },
    getInstallmentPaidAmount: function getInstallmentPaidAmount(fee_installment) {
      var amount = this.getInstallmentPaid(fee_installment);
      return helper.formatCurrency(amount);
    },
    getInstallmentBalance: function getInstallmentBalance(fee_installment) {
      var total = this.getInstallmentTotal(fee_installment);
      var other = this.getInstallmentOther(fee_installment);
      var paid = this.getInstallmentPaid(fee_installment);
      return total + other - paid;
    },
    getInstallmentBalanceAmount: function getInstallmentBalanceAmount(fee_installment) {
      var amount = this.getInstallmentBalance(fee_installment);
      return helper.formatCurrency(amount);
    },
    getTransportCircleName: function getTransportCircleName(fee_installment) {
      var installment = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      return installment.transport_circle ? installment.transport_circle.name : '-';
    },
    getTransportFee: function getTransportFee(fee_installment) {
      var installment = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      if (!installment.transport_circle_id || !fee_installment.transport_fee_id) return '-';
      var transport_fee = fee_installment.transport_fee.transport_fee_details.find(function (o) {
        return o.transport_circle_id == installment.transport_circle_id;
      });
      return transport_fee.amount;
    },
    getTransportFeeAmount: function getTransportFeeAmount(fee_installment) {
      var amount = this.getTransportFee(fee_installment);
      return Number.isInteger(amount) ? helper.formatCurrency(amount) : '-';
    },
    getLateFeeAmount: function getLateFeeAmount(fee_installment) {
      var amount = this.getLateFee(fee_installment);
      return Number.isInteger(amount) ? helper.formatCurrency(amount) : '-';
    },
    getLateFee: function getLateFee(fee_installment) {
      var installment_total = this.getInstallmentTotalWithoutLateFee(fee_installment);
      if (!installment_total) return '-';
      var date = helper.toDate(this.feePayment.date);
      var installment = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      if (installment.status == 'paid') {
        return installment.late_fee_charged;
      }
      if (installment.late_fee_applicable == null && !fee_installment.late_fee_applicable || installment.late_fee_applicable == 0) return '-';
      if (date <= (installment.due_date || fee_installment.due_date)) return '-';
      var late_day = helper.getDateDiff(installment.due_date || fee_installment.due_date, date);
      var per_period = Math.floor(late_day / (installment.late_fee_frequency || fee_installment.late_fee_frequency));
      return (installment.late_fee || fee_installment.late_fee) * per_period;
    },
    showInstallmentDetail: function showInstallmentDetail(fee_allocation_group, fee_installment) {
      var _this4 = this;
      this.feePayment.installments = [];
      this.feePayment.fee_group_name = fee_allocation_group.fee_group.name;
      var installments = fee_allocation_group.fee_installments.filter(function (o) {
        return o.due_date <= fee_installment.due_date;
      });
      var total = 0;
      installments.forEach(function (installment) {
        var student_installment = _this4.student_record.student_fee_records.find(function (o) {
          return o.fee_installment_id == installment.id;
        });
        if (student_installment.status == 'unpaid' || student_installment.status == 'partially_paid') {
          var installment_fee = _this4.getInstallmentTotalWithoutLateFee(installment);
          var other = _this4.getInstallmentOther(installment);
          var late_fee = _this4.getLateFee(installment);
          var paid = _this4.getInstallmentPaid(installment);
          installment_fee += other;
          var installment_balance = installment_fee > paid ? installment_fee - paid : 0;
          if (installment_fee) {
            late_fee = Number.isInteger(late_fee) ? late_fee : 0;
          }
          var late_fee_balance = !installment_balance && late_fee ? late_fee - (paid - installment_fee) : late_fee;
          var installment_total = installment_fee;
          if (installment_fee) {
            late_fee = Number.isInteger(late_fee) ? late_fee : 0;
            installment_total += late_fee;
          }
          var balance = installment_total - paid;
          total += balance;
          _this4.feePayment.installments.push({
            fee_installment_id: student_installment.fee_installment_id,
            title: installment.title,
            installment_fee: installment_fee,
            installment_balance: installment_balance,
            late_fee_balance: Number.isInteger(late_fee_balance) ? late_fee_balance : 0,
            late_fee: late_fee,
            paid: paid,
            total: balance
          });
        }
      });
      this.feePayment.amount = total;
      this.feePayment.fee_payment_installment_id = fee_installment.id;
      this.feePaymentForm = true;
    },
    getTotalFee: function getTotalFee(fee_allocation_group, fee_head_id) {
      var _this5 = this;
      var total = 0;
      fee_allocation_group.fee_installments.forEach(function (fee_installment) {
        total += _this5.getInstallmentFee(fee_installment, fee_head_id);
      });
      return helper.formatCurrency(total);
    },
    getTransportFeeTotal: function getTransportFeeTotal(fee_allocation_group) {
      var _this6 = this;
      var total = 0;
      fee_allocation_group.fee_installments.forEach(function (fee_installment) {
        var fee = _this6.getTransportFee(fee_installment);
        total += Number.isInteger(fee) ? fee : 0;
      });
      return total ? this.formatCurrency(total) : '-';
    },
    getLateFeeTotal: function getLateFeeTotal(fee_allocation_group) {
      var _this7 = this;
      var total = 0;
      fee_allocation_group.fee_installments.forEach(function (fee_installment) {
        var fee = _this7.getLateFee(fee_installment);
        total += Number.isInteger(fee) ? fee : 0;
      });
      return total ? this.formatCurrency(total) : '-';
    },
    getInstallmentGrandTotal: function getInstallmentGrandTotal(fee_allocation_group) {
      var amount = this.getInstallmentGrandTotalAmount(fee_allocation_group);
      return Number.isInteger(amount) ? helper.formatCurrency(amount) : '-';
    },
    getInstallmentGrandTotalAmount: function getInstallmentGrandTotalAmount(fee_allocation_group) {
      var _this8 = this;
      var total = 0;
      fee_allocation_group.fee_installments.forEach(function (fee_installment) {
        total += _this8.getInstallmentTotal(fee_installment);
      });
      return total;
    },
    getInstallmentGrandOther: function getInstallmentGrandOther(fee_allocation_group) {
      var amount = this.getInstallmentGrandOtherAmount(fee_allocation_group);
      return Number.isInteger(amount) ? helper.formatCurrency(amount) : '-';
    },
    getInstallmentGrandOtherAmount: function getInstallmentGrandOtherAmount(fee_allocation_group) {
      var _this9 = this;
      var other = 0;
      fee_allocation_group.fee_installments.forEach(function (fee_installment) {
        other += _this9.getInstallmentOther(fee_installment);
      });
      return other;
    },
    getInstallmentPaidGrandTotal: function getInstallmentPaidGrandTotal(fee_allocation_group) {
      var amount = this.getInstallmentPaidGrandTotalAmount(fee_allocation_group);
      return Number.isInteger(amount) ? helper.formatCurrency(amount) : '-';
    },
    getInstallmentPaidGrandTotalAmount: function getInstallmentPaidGrandTotalAmount(fee_allocation_group) {
      var _this10 = this;
      var total = 0;
      fee_allocation_group.fee_installments.forEach(function (fee_installment) {
        total += _this10.getInstallmentPaid(fee_installment);
      });
      return total;
    },
    getInstallmentBalanceGrandTotal: function getInstallmentBalanceGrandTotal(fee_allocation_group) {
      var amount = this.getInstallmentBalanceGrandTotalAmount(fee_allocation_group);
      return Number.isInteger(amount) ? helper.formatCurrency(amount) : '-';
    },
    getInstallmentBalanceGrandTotalAmount: function getInstallmentBalanceGrandTotalAmount(fee_allocation_group) {
      var _this11 = this;
      var total = 0;
      fee_allocation_group.fee_installments.forEach(function (fee_installment) {
        total += _this11.getInstallmentBalance(fee_installment);
      });
      return total;
    },
    paymentMade: function paymentMade() {
      this.getRecord();
    },
    showDate: function showDate(date) {
      return helper.formatDate(date);
    },
    getInstallmentPrintStatus: function getInstallmentPrintStatus(fee_installment) {
      var student_fee_record = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      if (student_fee_record.status == 'paid') return i18n.student.fee_status_paid;else if (student_fee_record.status == 'partially_paid') return i18n.student.fee_status_partially_paid;else if (student_fee_record.status == 'cancelled') return i18n.student.fee_status_cancelled;else if (student_fee_record.status == 'unpaid') return i18n.student.fee_status_unpaid;
    },
    setTransaction: function setTransaction(fee_installment) {
      var student_fee_record = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      this.student_fee_record_id = student_fee_record.id;
      this.feePaymentShow = true;
    },
    print: function print() {
      var loader = this.$loading.show();
      this.calculate();
      axios.post('/api/student/' + this.uuid + '/fee/' + this.record_id + '/print', {
        fee: this.fee
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
      var _this12 = this;
      var loader = this.$loading.show();
      this.calculate();
      axios.post('/api/student/' + this.uuid + '/fee/' + this.record_id + '/pdf', {
        fee: this.fee
      }).then(function (response) {
        loader.hide();
        window.open('/download/report/' + response + '?token=' + _this12.authToken);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    confirmEmptyReceiptDelete: function confirmEmptyReceiptDelete(fee_installment) {
      var _this13 = this;
      return function (dialog) {
        return _this13.deleteEmptyReceipt(fee_installment);
      };
    },
    deleteEmptyReceipt: function deleteEmptyReceipt(fee_installment) {
      var _this14 = this;
      var loader = this.$loading.show();
      var student_fee_record = this.student_record.student_fee_records.find(function (o) {
        return o.fee_installment_id == fee_installment.id;
      });
      axios.post('/api/student/' + this.uuid + '/fee/' + this.record_id + '/' + student_fee_record.id + '/cancel').then(function (response) {
        toastr.success(response.message);
        _this14.getRecord();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    confirmResetFee: function confirmResetFee(student_record) {
      var _this15 = this;
      return function (dialog) {
        return _this15.resetFee(student_record);
      };
    },
    resetFee: function resetFee(student_record) {
      var _this16 = this;
      var loader = this.$loading.show();
      axios.patch('/api/student/' + this.uuid + '/fee/' + this.record_id + '/reset').then(function (response) {
        toastr.success(response.message);
        _this16.getRecord();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
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
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    },
    resetFeeOption: function resetFeeOption() {
      if (!this.student_record.id) return false;
      return this.student_record.student_fee_records.every(function (student_fee_record) {
        return student_fee_record.status == 'unpaid';
      });
    },
    finalTotal: function finalTotal() {
      var _this17 = this;
      var total = 0;
      this.student_record.fee_allocation.fee_allocation_groups.forEach(function (fee_allocation_group) {
        total += _this17.getInstallmentGrandTotalAmount(fee_allocation_group);
      });
      return helper.formatCurrency(total);
    },
    finalOther: function finalOther() {
      var _this18 = this;
      var total = 0;
      this.student_record.fee_allocation.fee_allocation_groups.forEach(function (fee_allocation_group) {
        total += _this18.getInstallmentGrandOtherAmount(fee_allocation_group);
      });
      return helper.formatCurrency(total);
    },
    finalPaid: function finalPaid() {
      var _this19 = this;
      var total = 0;
      this.student_record.fee_allocation.fee_allocation_groups.forEach(function (fee_allocation_group) {
        total += _this19.getInstallmentPaidGrandTotalAmount(fee_allocation_group);
      });
      return helper.formatCurrency(total);
    },
    finalBalance: function finalBalance() {
      var _this20 = this;
      var total = 0;
      this.student_record.fee_allocation.fee_allocation_groups.forEach(function (fee_allocation_group) {
        total += _this20.getInstallmentBalanceGrandTotalAmount(fee_allocation_group);
      });
      return helper.formatCurrency(total);
    }
  },
  watch: {
    '$route.params.uuid': function $routeParamsUuid(uuid) {
      this.uuid = uuid;
      this.record_id = this.$route.params.record_id;
      this.getRecord();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ['id', 'uuid', 'feePayment'],
  data: function data() {
    return {
      default_currency: helper.getConfig('default_currency'),
      payment_gateway: '',
      razorpay_loaded: 0,
      stripe_loaded: 0,
      total: 0,
      stripe: {
        card_number: '',
        month: '',
        year: '',
        cvc: ''
      },
      stripeButton: true,
      paypalButton: true,
      feePaymentForm: new Form({
        amount: 0,
        installment_id: '',
        date: '',
        installments: []
      })
    };
  },
  mounted: function mounted() {
    this.loadFeePayment(this.feePayment);
    if ((this.default_currency.name == 'INR' || !helper.getConfig('mode')) && this.getConfig('razorpay')) {
      this.injectRazorpay();
    }
  },
  methods: {
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    loadFeePayment: function loadFeePayment(feePayment) {
      var _this = this;
      this.feePaymentForm.amount = feePayment.amount;
      this.feePaymentForm.installment_id = feePayment.fee_payment_installment_id;
      this.feePaymentForm.date = feePayment.date;
      this.feePaymentForm.installments = [];
      this.total = 0;
      feePayment.installments.forEach(function (installment) {
        _this.feePaymentForm.installments.push({
          fee_installment_id: installment.fee_installment_id,
          title: installment.title,
          installment_balance: installment.installment_balance,
          late_fee_balance: installment.late_fee_balance
        });
      });
    },
    getInstallmentTotal: function getInstallmentTotal(installment) {
      return installment.installment_balance + parseInt(installment.late_fee_balance);
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
    setPaymentGateway: function setPaymentGateway(gateway) {
      this.payment_gateway = gateway;
    },
    stripeCheckout: function stripeCheckout() {
      var loader = this.$loading.show();
      this.stripeButton = false;
      Stripe.setPublishableKey(this.getConfig('stripe_publishable_key'));
      Stripe.card.createToken({
        number: this.stripe.card_number,
        cvc: this.stripe.cvc,
        exp_month: this.stripe.month,
        exp_year: this.stripe.year
      }, this.stripeResponseHandler);
      loader.hide();
    },
    stripeResponseHandler: function stripeResponseHandler(status, response) {
      var _this2 = this;
      if (status == 200) {
        var loader = this.$loading.show();
        axios.post('/api/student/' + this.uuid + '/payment/' + this.id + '/stripe', {
          stripeToken: response.id,
          amount: this.total * 100,
          fee: this.feePaymentForm.amount,
          handling_fee: this.handlingFee,
          fee_installment_id: this.feePaymentForm.installment_id,
          installments: this.feePaymentForm.installments
        }).then(function (response) {
          loader.hide();
          toastr.success(response.message);
          _this2.$emit('completed');
          _this2.stripeButton = true;
        })["catch"](function (error) {
          loader.hide();
          helper.showErrorMsg(error);
          _this2.stripeButton = true;
        });
      } else {
        toastr.error(response.error.message);
        this.stripeButton = true;
      }
    },
    injectRazorpay: function injectRazorpay() {
      var vm = this;
      var result = $.Deferred(),
        script = document.createElement("script");
      script.async = "async";
      script.type = "text/javascript";
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = script.onreadystatechange = function (_, isAbort) {
        if (!script.readyState || /loaded|complete/.test(script.readyState)) {
          if (isAbort) result.reject();else result.resolve();
        }
        vm.razorpay_loaded = 1;
      };
      script.onerror = function () {
        result.reject();
      };
      document.head.appendChild(script);
      return result.promise();
    },
    callRazorpay: function callRazorpay() {
      var vm = this;
      var options = {
        key: this.getConfig('razorpay_key'),
        protocol: 'https',
        hostname: 'api.razorpay.com',
        amount: this.total * 100,
        name: helper.getConfig('institute_name'),
        description: i18n.finance.fee_payment,
        image: this.getLogo,
        prefill: {
          email: "",
          contact: "",
          name: ""
        },
        notes: {
          student_record_id: this.id,
          fee: this.feePaymentForm.amount,
          handling_fee: this.handlingFee
        },
        handler: function handler(transaction, response) {
          vm.completeRazorpay(transaction.razorpay_payment_id);
        }
      };
      window.rzpay = new Razorpay(options);
      rzpay.open();
    },
    completeRazorpay: function completeRazorpay(transaction_id) {
      var _this3 = this;
      var loader = this.$loading.show();
      axios.post('/api/student/' + this.uuid + '/payment/' + this.id + '/rzp', {
        transaction_id: transaction_id,
        installments: this.feePaymentForm.installments,
        fee_installment_id: this.feePaymentForm.installment_id
      }).then(function (response) {
        loader.hide();
        toastr.success(response.message);
        _this3.$emit('completed');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    callBillDesk: function callBillDesk() {
      var loader = this.$loading.show();
      axios.post('student/' + this.uuid + '/payment/' + this.id + '/billdesk', {
        amount: this.feePaymentForm.amount,
        installment_id: this.feePaymentForm.installment_id,
        installments: this.feePaymentForm.installments
      }).then(function (response) {
        loader.hide();
        bdPayment.initialize({
          msg: response.msg,
          callbackUrl: response.url,
          options: {
            enableChildWindowPosting: true,
            enablePaymentRetry: true,
            retry_attempt_count: 3
          }
        });
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    callPaypal: function callPaypal() {
      var _this4 = this;
      this.paypalButton = false;
      var loader = this.$loading.show();
      axios.post('/api/student/' + this.uuid + '/payment/' + this.id + '/paypal', {
        amount: this.total,
        fee: this.feePaymentForm.amount,
        handling_fee: this.handlingFee,
        fee_installment_id: this.feePaymentForm.installment_id,
        installments: this.feePaymentForm.installments
      }).then(function (response) {
        loader.hide();
        window.location = response;
      })["catch"](function (error) {
        loader.hide();
        _this4.paypalButton = true;
        helper.showErrorMsg(error);
      });
    },
    payWithPaystack: function payWithPaystack() {
      if (helper.getConfig('default_currency').name != 'NGN' && helper.getConfig('default_currency').name != 'GHS') {
        toastr.error(i18n.configuration.currency_not_supported);
        return;
      }
      var vm = this;
      var handler = PaystackPop.setup({
        key: this.getConfig('paystack_public_key'),
        email: helper.getAuthUser('email'),
        amount: this.total * 100,
        currency: helper.getConfig('default_currency').name,
        ref: '' + Math.floor(Math.random() * 1000000000 + 1),
        metadata: {
          custom_fields: [{
            display_name: 'Student ID',
            variable_name: "student_record_id",
            value: this.id
          }, {
            display_name: 'Amount',
            variable_name: "fee",
            value: this.feePaymentForm.amount
          }, {
            display_name: 'Handling Fee',
            variable_name: "handling_fee",
            value: this.handlingFee
          }]
        },
        callback: function callback(response) {
          vm.completePaystack(response.reference);
        },
        onClose: function onClose() {}
      });
      handler.openIframe();
    },
    completePaystack: function completePaystack(transaction_id) {
      var _this5 = this;
      var loader = this.$loading.show();
      axios.post('/api/student/' + this.uuid + '/payment/' + this.id + '/paystack', {
        transaction_id: transaction_id,
        installments: this.feePaymentForm.installments,
        fee_installment_id: this.feePaymentForm.installment_id
      }).then(function (response) {
        loader.hide();
        toastr.success(response.message);
        _this5.$emit('completed');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  },
  computed: {
    getLogo: function getLogo() {
      return helper.getLogo();
    },
    handlingFee: function handlingFee() {
      var handling_fee = 0;
      if (!this.payment_gateway) return handling_fee;
      if (!helper.getConfig(this.payment_gateway + '_charge_handling_fee')) return handling_fee;
      if (helper.getConfig(this.payment_gateway + '_fixed_handling_fee')) handling_fee = helper.getConfig(this.payment_gateway + '_handling_fee');else {
        var percentage = helper.getConfig(this.payment_gateway + '_handling_fee');
        handling_fee = this.feePaymentForm.amount * (percentage / 100);
      }
      return helper.formatNumber(handling_fee);
    },
    handlingFeeAmount: function handlingFeeAmount() {
      if (!helper.getConfig(this.payment_gateway + '_charge_handling_fee')) return;
      return i18n.finance.handling_fee + ' ' + helper.formatCurrency(this.handlingFee);
    },
    totalAmount: function totalAmount() {
      return i18n.finance.payable_amount + ' ' + helper.formatCurrency(this.total);
    },
    getGrandTotal: function getGrandTotal() {
      var total = 0;
      total = total;
      if (!Array.isArray(this.feePaymentForm.installments)) return total;
      this.feePaymentForm.installments.forEach(function (installment) {
        total += installment.installment_balance + parseInt(installment.late_fee_balance);
      });
      total = total ? total + this.handlingFee : total;
      this.total = total;
      return total;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ['id', 'uuid', 'feePayment'],
  data: function data() {
    return {
      feePaymentForm: new Form({
        amount: 0,
        additional_fee_discount: 0,
        additional_fee_charge: 0,
        additional_fee_charge_label: '',
        additional_fee_discount_label: '',
        installments: [],
        installment_id: '',
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
      total: 0,
      selected_account: null,
      accounts: [],
      payment_methods: [],
      selected_payment_method: null,
      payment_method_details: [],
      payment_method_detail: {}
    };
  },
  mounted: function mounted() {
    this.loadFeePayment(this.feePayment);
    this.getPreRequisite();
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    loadFeePayment: function loadFeePayment(feePayment) {
      var _this = this;
      this.feePaymentForm.date = feePayment.date;
      this.feePaymentForm.installment_id = feePayment.fee_payment_installment_id;
      this.feePaymentForm.amount = feePayment.amount;
      this.total = 0;
      this.feePaymentForm.installments = [];
      feePayment.installments.forEach(function (installment) {
        _this.feePaymentForm.installments.push({
          fee_installment_id: installment.fee_installment_id,
          title: installment.title,
          installment_balance: installment.installment_balance,
          late_fee_balance: installment.late_fee_balance
        });
      });
    },
    getInstallmentTotal: function getInstallmentTotal(installment) {
      return installment.installment_balance + parseInt(installment.late_fee_balance);
    },
    getPreRequisite: function getPreRequisite() {
      var _this2 = this;
      var loader = this.$loading.show();
      axios.get('/api/student/fee/pre-requisite').then(function (response) {
        _this2.accounts = response.accounts;
        _this2.payment_methods = response.payment_methods;
        _this2.payment_method_details = response.payment_method_details;
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
      this.feePaymentForm.account_id = selectedOption.id;
    },
    onPaymentMethodSelect: function onPaymentMethodSelect(selectedOption) {
      this.feePaymentForm.payment_method_id = selectedOption.id;
      this.payment_method_detail = this.payment_method_details.find(function (o) {
        return o.id == selectedOption.id;
      });
    },
    onPaymentMethodRemove: function onPaymentMethodRemove(removedOption) {
      this.feePaymentForm.payment_method_id = '';
      this.payment_method_detail = null;
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
    submit: function submit() {
      var _this3 = this;
      var loader = this.$loading.show();
      this.feePaymentForm.post('/api/student/' + this.uuid + '/payment/' + this.id).then(function (response) {
        toastr.success(response.message);
        _this3.$emit('completed');
        _this3.selected_account = null;
        _this3.selected_payment_method = null;
        _this3.feePaymentForm.installments = [];
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  },
  computed: {
    getGrandTotal: function getGrandTotal() {
      var total = 0;
      if (!Array.isArray(this.feePaymentForm.installments)) return total;
      this.feePaymentForm.installments.forEach(function (installment) {
        total += installment.installment_balance + parseInt(installment.late_fee_balance);
      });
      return total + +this.feePaymentForm.additional_fee_charge - +this.feePaymentForm.additional_fee_discount;
    }
  },
  watch: {
    feePayment: function feePayment(val) {
      this.loadFeePayment(val);
    },
    getGrandTotal: function getGrandTotal(val) {
      this.feePaymentForm.amount = val;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/summary.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/summary.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['studentRecord'],
  data: function data() {
    return {
      student_record: {}
    };
  },
  mounted: function mounted() {},
  methods: {
    getStudentName: function getStudentName(student) {
      return helper.getStudentName(student);
    },
    getAdmissionNumber: function getAdmissionNumber(admission) {
      return helper.getAdmissionNumber(admission);
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
  computed: {
    getImage: function getImage() {
      if (!this.student_record.student.student_photo) {
        return this.student_record.student.gender == 'female' ? '/images/female.png' : '/images/male.png';
      } else {
        return '/' + this.student_record.student.student_photo;
      }
    }
  },
  watch: {
    studentRecord: function studentRecord(val) {
      this.student_record = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/fee-detail.vue?vue&type=template&id=39d1cb98&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/fee-detail.vue?vue&type=template&id=39d1cb98& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._l(_vm.transactions, function (txn) {
    return [_c("button", {
      staticClass: "btn btn-info m-r-10",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          _vm.transaction = txn;
        }
      }
    }, [_vm._v(_vm._s((txn.prefix || "") + "" + txn.number))])];
  }), _vm._v(" "), _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("finance.print_receipt"),
      expression: "trans('finance.print_receipt')"
    }],
    staticClass: "btn btn-info btn-sm pull-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.printReceipt
    }
  }, [_c("i", {
    staticClass: "fas fa-print"
  })]), _vm._v(" "), _vm.transaction.id ? [_c("div", {
    staticClass: "table-responsive m-t-20"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("finance.receipt_no")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm.transaction.prefix || "") + "" + _vm.transaction.number) + "\n                                "), _vm.transactionGroup.length > 1 ? _c("span", [_vm._v("(" + _vm._s(_vm.transactionGroup.toString()) + ")")]) : _vm._e()]), _vm._v(" "), !_vm.transaction.is_online_payment ? [_c("td", [_vm._v(_vm._s(_vm.trans("finance.account")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.transaction.account ? _vm.transaction.account.name : ""))])] : [_c("td", [_vm._v(_vm._s(_vm.trans("finance.payment_method")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trans("finance.online_payment")))])]], 2), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("finance.amount")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatCurrency(_vm.transaction.amount)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trans("finance.date")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(_vm.transaction.date)))])]), _vm._v(" "), _c("tr", [!_vm.transaction.is_online_payment ? [_c("td", [_vm._v(_vm._s(_vm.trans("finance.payment_method")))]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(_vm.transaction.payment_method.name) + "\n                                    "), _vm.transaction.instrument_number ? _c("span", [_c("br"), _vm._v(_vm._s(_vm.trans("finance.instrument_number")) + ": " + _vm._s(_vm.transaction.instrument_number))]) : _vm._e(), _vm._v(" "), _vm.transaction.instrument_date ? _c("span", [_c("br"), _vm._v(_vm._s(_vm.trans("finance.instrument_date")) + ": "), _c("span", [_vm._v(_vm._s(_vm._f("moment")(_vm.transaction.instrument_date)))])]) : _vm._e(), _vm._v(" "), _vm.transaction.instrument_clearing_date ? _c("span", [_c("br"), _vm._v(_vm._s(_vm.trans("finance.instrument_clearing_date")) + ": "), _c("span", [_vm._v(_vm._s(_vm._f("moment")(_vm.transaction.instrument_clearing_date)))])]) : _vm._e(), _vm._v(" "), _vm.transaction.instrument_bank_detail ? _c("span", [_c("br"), _vm._v(_vm._s(_vm.trans("finance.instrument_bank_detail")) + ": " + _vm._s(_vm.transaction.instrument_bank_detail))]) : _vm._e(), _vm._v(" "), _vm.transaction.reference_number ? _c("span", [_c("br"), _vm._v(_vm._s(_vm.trans("finance.reference_number")) + ": " + _vm._s(_vm.transaction.reference_number))]) : _vm._e()])] : [_c("td", [_vm._v(_vm._s(_vm.trans("finance.reference_number")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.transaction.reference_number))])], _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trans("finance.date_of_entry")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentDateTime")(_vm.transaction.created_at)))])], 2), _vm._v(" "), _c("tr", [!_vm.transaction.is_online_payment ? [_c("td", [_vm._v(_vm._s(_vm.trans("finance.remarks")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.transaction.remarks))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trans("finance.entry_by")))]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(_vm.getEmployeeName(_vm.transaction.user.employee)) + "\n                                ")])] : _vm._e()], 2)])])]), _vm._v(" "), _vm.transaction.is_deletable && _vm.hasPermission("cancel-fee-payment") ? _c("button", {
    staticClass: "btn btn-block btn-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.cancel_fee_payment = true;
      }
    }
  }, [_vm._v(_vm._s(_vm.trans("student.cancel_fee_payment")))]) : _vm._e(), _vm._v(" "), _vm.cancel_fee_payment ? [_vm.transaction.is_deletable ? _c("form", {
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
  }, [_vm.transactionGroup.length > 1 ? _c("div", {
    staticClass: "form-group"
  }, [_c("div", [_vm._v(_vm._s(_vm.trans("finance.cancel_all_group_fee_payment", {
    numbers: _vm.transactionGroup.toString()
  })))])]) : _vm._e(), _vm._v(" "), _c("div", {
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
    staticClass: "btn btn-danger waves-effect waves-light",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))])])])]) : _vm._e()] : _vm._e()] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=template&id=b9b42674&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=template&id=b9b42674& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("finance.fee_detail")) + " "), _vm.student_record.student ? _c("small", [_vm._v(_vm._s(_vm.getStudentName(_vm.student_record.student)) + "  (" + _vm._s(_vm.student_record.academic_session.name) + ")")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("router-link", {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      to: "/student/list"
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("student.student")))])]), _vm._v(" "), _c("div", {
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
      click: function click($event) {
        return _vm.$router.push("/student/" + _vm.student_record.student.uuid);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-circle-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.view_detail")))]), _vm._v(" "), _vm.hasPermission("set-fee") ? _c("button", {
    staticClass: "dropdown-item custom-dropdown",
    on: {
      click: function click($event) {
        return _vm.$router.push("/student/" + _vm.student_record.student.uuid + "/fee/" + _vm.student_record.id + "/set");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file"
  }), _vm._v(" " + _vm._s(_vm.trans("student.set_fee")))]) : _vm._e(), _vm._v(" "), _c("button", {
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
  }), _vm._v(" " + _vm._s(_vm.trans("general.generate_pdf")))])])])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body py-4"
  }, [_c("student-summary", {
    staticClass: "border-bottom",
    attrs: {
      "student-record": _vm.student_record
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.hasPermission("customize-fee-date") ? _c("div", {
    staticClass: "row justify-content-end px-4"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("student.date_of_payment")
    },
    model: {
      value: _vm.feePayment.date,
      callback: function callback($$v) {
        _vm.$set(_vm.feePayment, "date", $$v);
      },
      expression: "feePayment.date"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.student_record.fee_allocation.fee_allocation_groups, function (fee_allocation_group) {
    return [_c("h4", {
      staticClass: "card-title m-l-20"
    }, [_vm._v(_vm._s(fee_allocation_group.fee_group.name))]), _vm._v(" "), _c("div", {
      staticClass: "table-responsive p-3"
    }, [_c("table", {
      staticClass: "table table-sm"
    }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("finance.fee_installment_title")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.fee_installment_due_date")))]), _vm._v(" "), _vm._l(fee_allocation_group.fee_group.fee_heads, function (fee_head) {
      return _c("th", {
        domProps: {
          textContent: _vm._s(fee_head.name)
        }
      });
    }), _vm._v(" "), _c("th", [fee_allocation_group.fee_group.options.has_transport ? _c("span", [_vm._v(_vm._s(_vm.trans("transport.circle")))]) : _vm._e()]), _vm._v(" "), _c("th", [fee_allocation_group.fee_group.options.has_transport ? _c("span", [_vm._v(_vm._s(_vm.trans("transport.fee")))]) : _vm._e()]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.late_fee")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.installment_total")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.other")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.paid")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.balance")))]), _vm._v(" "), _vm.hasPermission("make-fee-payment") ? _c("th", [_vm._v(_vm._s(_vm.trans("finance.pay_fee")))]) : _c("th", [_vm._v(_vm._s(_vm.trans("finance.fee_status")))])], 2)]), _vm._v(" "), _c("tbody", [_vm._l(fee_allocation_group.fee_installments, function (fee_installment) {
      return _c("tr", [_c("td", [_vm._v(_vm._s(fee_installment.title))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getInstallmentDueDate(fee_installment)) + "\n                                                "), _vm.isInstallmentOverdue(fee_installment) ? [_c("br"), _vm._v(" "), _c("span", {
        staticClass: "label label-danger"
      }, [_vm._v(_vm._s(_vm.trans("finance.fee_overdue_day", {
        day: _vm.isInstallmentOverdue(fee_installment)
      })))])] : _vm._e()], 2), _vm._v(" "), _vm._l(fee_allocation_group.fee_group.fee_heads, function (fee_head) {
        return _c("td", [_vm.checkInstallmentConcession(fee_installment, fee_head.id) ? _c("span", {
          staticStyle: {
            "text-decoration": "line-through"
          }
        }, [_vm._v(_vm._s(_vm.getInstallmentFeeAmountWithoutConcession(fee_installment, fee_head.id)))]) : _vm._e(), _vm._v("\n                                                " + _vm._s(_vm.getInstallmentFeeAmount(fee_installment, fee_head.id)) + "\n                                            ")]);
      }), _vm._v(" "), _c("td", [fee_allocation_group.fee_group.options.has_transport ? _c("span", [_vm._v(_vm._s(_vm.getTransportCircleName(fee_installment)))]) : _vm._e()]), _vm._v(" "), _c("td", [fee_allocation_group.fee_group.options.has_transport ? _c("span", [_vm._v(_vm._s(_vm.getTransportFeeAmount(fee_installment)))]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getLateFeeAmount(fee_installment)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getInstallmentTotalAmount(fee_installment)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getInstallmentOtherAmount(fee_installment)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getInstallmentPaidAmount(fee_installment)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getInstallmentBalanceAmount(fee_installment)))]), _vm._v(" "), _vm.hasPermission("make-fee-payment") ? _c("td", [_vm.getInstallmentStatus(fee_installment) == "unpaid" ? _c("span", [_c("button", {
        staticClass: "btn btn-info btn-sm",
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.showInstallmentDetail(fee_allocation_group, fee_installment);
          }
        }
      }, [_vm._v(_vm._s(_vm.trans("finance.pay_fee")))])]) : _vm.getInstallmentStatus(fee_installment) == "cancelled" ? _c("span", [_c("span", {
        staticClass: "label label-danger"
      }, [_vm._v(_vm._s(_vm.trans("finance.fee_status_cancelled")))])]) : _c("span", [_c("div", {
        staticClass: "btn-group"
      }, [_vm.getInstallmentStatus(fee_installment) == "paid" ? [_c("button", {
        staticClass: "btn btn-sm btn-success"
      }, [_vm._v(_vm._s(_vm.trans("student.fee_status_paid")))]), _vm._v(" "), _vm._m(0, true)] : _vm._e(), _vm._v(" "), _vm.getInstallmentStatus(fee_installment) == "partially_paid" ? [_c("button", {
        staticClass: "btn btn-sm btn-warning",
        on: {
          click: function click($event) {
            return _vm.showInstallmentDetail(fee_allocation_group, fee_installment);
          }
        }
      }, [_vm._v(_vm._s(_vm.trans("student.fee_status_partially_paid")))]), _vm._v(" "), _vm._m(1, true)] : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "dropdown-menu"
      }, [_vm.getInstallmentPaid(fee_installment) ? _c("button", {
        staticClass: "dropdown-item custom-dropdown-menu",
        on: {
          click: function click($event) {
            $event.preventDefault();
            return _vm.setTransaction(fee_installment);
          }
        }
      }, [_c("i", {
        staticClass: "fas fa-arrow-circle-right"
      }), _vm._v(" " + _vm._s(_vm.trans("finance.receipt_detail")) + "\n                                                            ")]) : !_vm.getInstallmentPaid(fee_installment) && _vm.hasPermission("cancel-fee-payment") ? _c("button", {
        directives: [{
          name: "confirm",
          rawName: "v-confirm",
          value: {
            ok: _vm.confirmEmptyReceiptDelete(fee_installment)
          },
          expression: "{ok: confirmEmptyReceiptDelete(fee_installment)}"
        }],
        key: fee_installment.id,
        staticClass: "dropdown-item custom-dropdown-menu"
      }, [_c("i", {
        staticClass: "fas fa-arrow-circle-right"
      }), _vm._v(" " + _vm._s(_vm.trans("student.cancel_fee_payment")) + "\n                                                            ")]) : _vm._e()])], 2)])]) : _c("td", [_vm.getInstallmentStatus(fee_installment) == "unpaid" ? _c("span", [_vm._v(_vm._s(_vm.trans("student.fee_status_unpaid")))]) : _c("span", [_vm._v(_vm._s(_vm.trans("student.fee_status_paid")))])])], 2);
    }), _vm._v(" "), _c("tr", [_c("th", {
      attrs: {
        colspan: "2"
      }
    }, [_vm._v(_vm._s(_vm.trans("general.total")))]), _vm._v(" "), _vm._l(fee_allocation_group.fee_group.fee_heads, function (fee_head) {
      return _c("th", [_vm._v("\n                                                " + _vm._s(_vm.getTotalFee(fee_allocation_group, fee_head.id)) + "\n                                            ")]);
    }), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [fee_allocation_group.fee_group.options.has_transport ? _c("span", [_vm._v(_vm._s(_vm.getTransportFeeTotal(fee_allocation_group)))]) : _vm._e()]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.getLateFeeTotal(fee_allocation_group)))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.getInstallmentGrandTotal(fee_allocation_group)))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.getInstallmentGrandOther(fee_allocation_group)))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.getInstallmentPaidGrandTotal(fee_allocation_group)))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.getInstallmentBalanceGrandTotal(fee_allocation_group)))]), _vm._v(" "), _vm.hasPermission("make-fee-payment") ? _c("th") : _c("th")], 2)], 2)])])];
  }), _vm._v(" "), _c("div", {
    staticClass: "table-responsive p-3"
  }, [_c("table", {
    staticClass: "table table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("finance.installment_total")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.other")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.paid")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.balance")))])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.finalTotal))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.finalOther))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.finalPaid))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.finalBalance))])])])])]), _vm._v(" "), _vm.resetFeeOption && _vm.hasPermission("set-fee") ? _c("div", {
    staticClass: "row justify-content-md-center"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("button", {
    directives: [{
      name: "confirm",
      rawName: "v-confirm",
      value: {
        ok: _vm.confirmResetFee(_vm.student_record)
      },
      expression: "{ok: confirmResetFee(student_record)}"
    }, {
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("student.reset_fee"),
      expression: "trans('student.reset_fee')"
    }],
    key: _vm.student_record.id,
    staticClass: "btn btn-danger btn-block"
  }, [_vm._v(_vm._s(_vm.trans("student.reset_fee")))])])]) : _vm._e()], 2)])])])]), _vm._v(" "), _vm.feePaymentForm && _vm.hasNotAnyRole(["parent", "student"]) && _vm.hasPermission("make-fee-payment") ? _c("fee-payment-form", {
    attrs: {
      uuid: _vm.uuid,
      id: _vm.record_id,
      "fee-payment": _vm.feePayment
    },
    on: {
      completed: _vm.paymentMade,
      closeFeePaymentForm: function closeFeePaymentForm($event) {
        _vm.feePaymentForm = false;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.feePaymentForm && _vm.hasAnyRole(["parent", "student"]) && _vm.hasPermission("make-fee-payment") ? _c("fee-payment-parent-form", {
    attrs: {
      uuid: _vm.uuid,
      id: _vm.record_id,
      "fee-payment": _vm.feePayment
    },
    on: {
      completed: _vm.paymentMade,
      closeFeePaymentForm: function closeFeePaymentForm($event) {
        _vm.feePaymentForm = false;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.feePaymentShow ? _c("transition", {
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
    return [_vm._v("\n                            " + _vm._s(_vm.trans("finance.fee_payment")) + "\n                            "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          _vm.feePaymentShow = false;
        }
      }
    }, [_vm._v("x")])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("div", {
      staticStyle: {
        "max-height": "600px"
      }
    }, [_c("fee-detail", {
      attrs: {
        uuid: _vm.uuid,
        rid: _vm.record_id,
        id: _vm.student_fee_record_id
      },
      on: {
        completed: _vm.getRecord
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "clearfix"
    })], 1)];
  })], 2)])])])]) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-sm btn-success dropdown-toggle dropdown-toggle-split",
    attrs: {
      type: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Toggle Dropdown")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-sm btn-warning dropdown-toggle dropdown-toggle-split",
    attrs: {
      type: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Toggle Dropdown")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=template&id=5e9364e6&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=template&id=5e9364e6& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("transition", {
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
    return [_vm._v("\n                        " + _vm._s(_vm.trans("finance.fee_payment")) + "\n                        "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          return _vm.$emit("closeFeePaymentForm");
        }
      }
    }, [_vm._v("x")])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("h4", [_vm._v(_vm._s(_vm.feePayment.fee_group_name) + " "), _c("span", {
      staticClass: "pull-right"
    }, [_vm._v(_vm._s(_vm._f("moment")(_vm.feePayment.date)))])]), _vm._v(" "), _c("div", {
      staticStyle: {
        "max-height": "600px"
      }
    }, [_c("form", {
      on: {
        submit: function submit($event) {
          $event.preventDefault();
          return _vm.submit.apply(null, arguments);
        },
        keydown: function keydown($event) {
          return _vm.feePaymentForm.errors.clear($event.target.name);
        }
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
    }, [_vm._v(_vm._s(_vm.trans("general.total")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.feePaymentForm.installments, function (installment) {
      return _c("tr", [_c("td", {
        domProps: {
          textContent: _vm._s(installment.title)
        }
      }), _vm._v(" "), _c("td", {
        staticClass: "text-right",
        domProps: {
          textContent: _vm._s(installment.installment_balance)
        }
      }), _vm._v(" "), _c("td", {
        staticClass: "text-right"
      }, [_vm._v("\n                                                    " + _vm._s(installment.late_fee_balance) + "\n                                                ")]), _vm._v(" "), _c("td", {
        staticClass: "text-right",
        domProps: {
          textContent: _vm._s(_vm.getInstallmentTotal(installment))
        }
      })]);
    }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("general.total")))]), _vm._v(" "), _c("th", {
      attrs: {
        colspan: "2"
      }
    }), _vm._v(" "), _c("th", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.getGrandTotal)))])])])])]), _vm._v(" "), _c("div", [_c("h4", {
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
    }, [_vm._v(" \n                                            Razorpay \n                                        ")])]) : _vm._e(), _vm._v(" "), _vm.getConfig("billdesk") ? _c("div", {
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
    }, [_vm._v(" Stripe ")])]) : _vm._e(), _vm._v(" "), _vm.getConfig("paystack") ? _c("div", {
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
    }, [_vm._v(" Paypal ")])]) : _vm._e(), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.handlingFeeAmount))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.totalAmount))]), _vm._v(" "), _vm.payment_gateway == "billdesk" ? [_c("button", {
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
      attrs: {
        type: "button"
      },
      on: {
        click: _vm.stripeCheckout
      }
    }, [_c("span", [_vm._v(_vm._s(_vm.trans("general.proceed")))])]) : _vm._e()] : _vm._e()], 2)])])];
  })], 2)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment.vue?vue&type=template&id=046e14fa&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment.vue?vue&type=template&id=046e14fa& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("transition", {
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
    return [_vm._v("\n                        " + _vm._s(_vm.trans("finance.fee_payment")) + "\n                        "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          return _vm.$emit("closeFeePaymentForm");
        }
      }
    }, [_vm._v("x")])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("h4", [_vm._v(_vm._s(_vm.feePayment.fee_group_name) + " "), _c("span", {
      staticClass: "pull-right"
    }, [_vm._v(_vm._s(_vm._f("moment")(_vm.feePayment.date)))])]), _vm._v(" "), _c("div", {
      staticStyle: {
        "max-height": "600px"
      }
    }, [_c("form", {
      on: {
        submit: function submit($event) {
          $event.preventDefault();
          return _vm.submit.apply(null, arguments);
        },
        keydown: function keydown($event) {
          return _vm.feePaymentForm.errors.clear($event.target.name);
        }
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
    }, [_vm._v(_vm._s(_vm.trans("general.total")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.feePaymentForm.installments, function (installment) {
      return _c("tr", [_c("td", {
        domProps: {
          textContent: _vm._s(installment.title)
        }
      }), _vm._v(" "), _c("td", {
        staticClass: "text-right",
        domProps: {
          textContent: _vm._s(installment.installment_balance)
        }
      }), _vm._v(" "), _c("td", {
        staticClass: "text-right"
      }, [_vm.hasPermission("customize-late-fee") ? [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: installment.late_fee_balance,
          expression: "installment.late_fee_balance"
        }],
        staticClass: "invoice-input",
        attrs: {
          type: "text"
        },
        domProps: {
          value: installment.late_fee_balance
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(installment, "late_fee_balance", $event.target.value);
          }
        }
      })] : [_vm._v("\n                                                        " + _vm._s(installment.late_fee_balance) + "\n                                                    ")]], 2), _vm._v(" "), _c("td", {
        staticClass: "text-right",
        domProps: {
          textContent: _vm._s(_vm.getInstallmentTotal(installment))
        }
      })]);
    }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.additional_fee_charge")))]), _vm._v(" "), _c("td", {
      attrs: {
        colspan: "2"
      }
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.feePaymentForm.additional_fee_charge_label,
        expression: "feePaymentForm.additional_fee_charge_label"
      }],
      staticClass: "invoice-input-left",
      attrs: {
        type: "text",
        name: "additional_fee_charge_label",
        placeholder: _vm.trans("student.fee_label")
      },
      domProps: {
        value: _vm.feePaymentForm.additional_fee_charge_label
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.feePaymentForm, "additional_fee_charge_label", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
        "prop-name": "additional_fee_charge_label"
      }
    })], 1)]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.feePaymentForm.additional_fee_charge,
        expression: "feePaymentForm.additional_fee_charge"
      }],
      staticClass: "invoice-input",
      attrs: {
        type: "text",
        name: "additional_fee_charge",
        placeholder: _vm.trans("student.additional_fee_charge")
      },
      domProps: {
        value: _vm.feePaymentForm.additional_fee_charge
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.feePaymentForm, "additional_fee_charge", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
        "prop-name": "additional_fee_charge"
      }
    })], 1)])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("student.additional_fee_discount")))]), _vm._v(" "), _c("td", {
      attrs: {
        colspan: "2"
      }
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.feePaymentForm.additional_fee_discount_label,
        expression: "feePaymentForm.additional_fee_discount_label"
      }],
      staticClass: "invoice-input-left",
      attrs: {
        type: "text",
        name: "additional_fee_discount_label",
        placeholder: _vm.trans("student.fee_label")
      },
      domProps: {
        value: _vm.feePaymentForm.additional_fee_discount_label
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.feePaymentForm, "additional_fee_discount_label", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
        "prop-name": "additional_fee_discount_label"
      }
    })], 1)]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.feePaymentForm.additional_fee_discount,
        expression: "feePaymentForm.additional_fee_discount"
      }],
      staticClass: "invoice-input",
      attrs: {
        type: "text",
        name: "additional_fee_discount",
        placeholder: _vm.trans("student.additional_fee_discount")
      },
      domProps: {
        value: _vm.feePaymentForm.additional_fee_discount
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.feePaymentForm, "additional_fee_discount", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
        "prop-name": "additional_fee_discount"
      }
    })], 1)])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("general.total")))]), _vm._v(" "), _c("th", {
      attrs: {
        colspan: "2"
      }
    }), _vm._v(" "), _c("th", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.getGrandTotal)))])]), _vm._v(" "), _vm.hasPermission("make-partial-fee-payment") ? _c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("finance.amount")))]), _vm._v(" "), _c("th", {
      attrs: {
        colspan: "2"
      }
    }), _vm._v(" "), _c("th", {
      staticClass: "text-right"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.feePaymentForm.amount,
        expression: "feePaymentForm.amount"
      }],
      staticClass: "invoice-input",
      attrs: {
        type: "text",
        name: "amount",
        placeholder: _vm.trans("finance.amount")
      },
      domProps: {
        value: _vm.feePaymentForm.amount
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.feePaymentForm, "amount", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
        "prop-name": "amount"
      }
    })], 1)]) : _vm._e()])])]), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [_vm.feePaymentForm.amount ? [_c("div", {
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
          return _vm.feePaymentForm.errors.clear("account_id");
        },
        remove: function remove($event) {
          _vm.feePaymentForm.account_id = "";
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
    }, [_vm._v("\n                                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                                    ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
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
          return _vm.feePaymentForm.errors.clear("payment_method_id");
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
    }, [_vm._v("\n                                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                                    ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
        "prop-name": "payment_method_id"
      }
    })], 1)])] : _vm._e(), _vm._v(" "), _vm.getPaymentMethodDetail("instrument_number") ? _c("div", {
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
        value: _vm.feePaymentForm.instrument_number,
        expression: "feePaymentForm.instrument_number"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: "instrument_number",
        placeholder: _vm.trans("finance.instrument_number")
      },
      domProps: {
        value: _vm.feePaymentForm.instrument_number
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.feePaymentForm, "instrument_number", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
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
          return _vm.feePaymentForm.errors.clear("instrument_date");
        }
      },
      model: {
        value: _vm.feePaymentForm.instrument_date,
        callback: function callback($$v) {
          _vm.$set(_vm.feePaymentForm, "instrument_date", $$v);
        },
        expression: "feePaymentForm.instrument_date"
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
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
        value: _vm.feePaymentForm.instrument_bank_detail,
        expression: "feePaymentForm.instrument_bank_detail"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: "instrument_bank_detail",
        placeholder: _vm.trans("finance.instrument_bank_detail")
      },
      domProps: {
        value: _vm.feePaymentForm.instrument_bank_detail
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.feePaymentForm, "instrument_bank_detail", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
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
          return _vm.feePaymentForm.errors.clear("instrument_clearing_date");
        }
      },
      model: {
        value: _vm.feePaymentForm.instrument_clearing_date,
        callback: function callback($$v) {
          _vm.$set(_vm.feePaymentForm, "instrument_clearing_date", $$v);
        },
        expression: "feePaymentForm.instrument_clearing_date"
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
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
        value: _vm.feePaymentForm.reference_number,
        expression: "feePaymentForm.reference_number"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: "reference_number",
        placeholder: _vm.trans("finance.reference_number")
      },
      domProps: {
        value: _vm.feePaymentForm.reference_number
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.feePaymentForm, "reference_number", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
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
    }, [_vm._v(_vm._s(_vm.trans("finance.fee_payment_remarks")))]), _vm._v(" "), _c("autosize-textarea", {
      attrs: {
        rows: "2",
        name: "remarks",
        placeholder: _vm.trans("finance.fee_payment_remarks")
      },
      model: {
        value: _vm.feePaymentForm.remarks,
        callback: function callback($$v) {
          _vm.$set(_vm.feePaymentForm, "remarks", $$v);
        },
        expression: "feePaymentForm.remarks"
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feePaymentForm,
        "prop-name": "remarks"
      }
    })], 1)])], 2), _vm._v(" "), _c("button", {
      staticClass: "btn btn-info waves-effect waves-light pull-right",
      attrs: {
        type: "submit"
      }
    }, [_vm._v(_vm._s(_vm.trans("general.save")))])])]), _vm._v(" "), _c("div", {
      staticClass: "clearfix"
    })];
  })], 2)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/summary.vue?vue&type=template&id=67e4e623&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/summary.vue?vue&type=template&id=67e4e623& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.student_record.student ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group text-center"
  }, [_c("img", {
    staticClass: "img-fluid",
    staticStyle: {
      "max-width": "200px"
    },
    attrs: {
      src: _vm.getImage
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless custom-show-table"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("student.name")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getStudentName(_vm.student_record.student)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("student.admission_number")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getAdmissionNumber(_vm.student_record.admission)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("student.date_of_admission")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(_vm.student_record.admission.date_of_admission)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("academic.course")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.student_record.batch.course.name + " (" + _vm.student_record.batch.course.course_group.name + ")"))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("academic.batch")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.student_record.batch.name))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("student.date_of_birth")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(_vm.student_record.student.date_of_birth)))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless custom-show-table"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("student.father_name")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.student_record.student.parent ? _vm.student_record.student.parent.father_name : ""))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("student.mother_name")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.student_record.student.parent ? _vm.student_record.student.parent.mother_name : ""))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("student.contact_number")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.student_record.student.contact_number))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("student.present_address")))]), _vm._v(" "), _c("td", [_vm._v("\n\t                            " + _vm._s(_vm.student_record.student.present_address_line_1) + "\n\t                            "), _vm.student_record.student.present_address_line_2 ? _c("span", [_vm._v(", " + _vm._s(_vm.student_record.student.present_address_line_2))]) : _vm._e(), _vm._v(" "), _vm.student_record.student.present_city ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.student_record.student.present_city))]) : _vm._e(), _vm._v(" "), _vm.student_record.student.present_state ? _c("span", [_vm._v(", " + _vm._s(_vm.student_record.student.present_state))]) : _vm._e(), _vm._v(" "), _vm.student_record.student.present_zipcode ? _c("span", [_vm._v(", " + _vm._s(_vm.student_record.student.present_zipcode))]) : _vm._e(), _vm._v(" "), _vm.student_record.student.present_country ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.student_record.student.present_country))]) : _vm._e()])])])])])])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=style&index=0&id=b9b42674&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=style&index=0&id=b9b42674&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/student/fee/index.vue"],"names":[],"mappings":";AAk2BA;IACA,aAAA;AACA","sourcesContent":["<template>\r\n    <div>\r\n        <div class=\"page-titles\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <h3 class=\"text-themecolor\">{{trans('finance.fee_detail')}} <small v-if=\"student_record.student\">{{getStudentName(student_record.student)}}  ({{student_record.academic_session.name}})</small>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"action-buttons pull-right\">\r\n                        <router-link to=\"/student/list\" class=\"btn btn-info btn-sm\"><i class=\"fas fa-list\"></i> <span class=\"d-none d-sm-inline\">{{trans('student.student')}}</span></router-link>\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-info btn-sm dropdown-toggle no-caret \" role=\"menu\" id=\"moreOption\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" v-tooltip=\"trans('general.more_option')\">\r\n                                <i class=\"fas fa-ellipsis-h\"></i> <span class=\"d-none d-sm-inline\"></span>\r\n                            </button>\r\n                            <div :class=\"['dropdown-menu',getConfig('direction') == 'ltr' ? 'dropdown-menu-right' : '']\" aria-labelledby=\"moreOption\">\r\n                                <button class=\"dropdown-item custom-dropdown\" @click=\"$router.push('/student/'+student_record.student.uuid)\"><i class=\"fas fa-arrow-circle-right\"></i> {{trans('student.view_detail')}}</button>\r\n                                <button class=\"dropdown-item custom-dropdown\" v-if=\"hasPermission('set-fee')\" @click=\"$router.push('/student/'+student_record.student.uuid+'/fee/'+student_record.id+'/set')\"><i class=\"fas fa-file\"></i> {{trans('student.set_fee')}}</button>\r\n                                <button class=\"dropdown-item custom-dropdown\" @click=\"print\"><i class=\"fas fa-print\"></i> {{trans('general.print')}}</button>\r\n                                <button class=\"dropdown-item custom-dropdown\" @click=\"pdf\"><i class=\"fas fa-file-pdf\"></i> {{trans('general.generate_pdf')}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body py-4\">\r\n                            <student-summary :student-record=\"student_record\" class=\"border-bottom\"></student-summary>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row justify-content-end px-4\" v-if=\"hasPermission('customize-fee-date')\">\r\n                                <div class=\"col-12 col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <datepicker v-model=\"feePayment.date\" :bootstrapStyling=\"true\" :placeholder=\"trans('student.date_of_payment')\"></datepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <template v-for=\"fee_allocation_group in student_record.fee_allocation.fee_allocation_groups\">\r\n                                <h4 class=\"card-title m-l-20\">{{fee_allocation_group.fee_group.name}}</h4>\r\n                                <div class=\"table-responsive p-3\">\r\n                                    <table class=\"table table-sm\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>{{trans('finance.fee_installment_title')}}</th>\r\n                                                <th>{{trans('finance.fee_installment_due_date')}}</th>\r\n                                                <th v-for=\"fee_head in fee_allocation_group.fee_group.fee_heads\" v-text=\"fee_head.name\"></th>\r\n                                                <th>\r\n                                                    <span v-if=\"fee_allocation_group.fee_group.options.has_transport\">{{trans('transport.circle')}}</span>\r\n                                                </th>\r\n                                                <th>\r\n                                                    <span v-if=\"fee_allocation_group.fee_group.options.has_transport\">{{trans('transport.fee')}}</span>\r\n                                                </th>\r\n                                                <th>{{trans('finance.late_fee')}}</th>\r\n                                                <th>{{trans('finance.installment_total')}}</th>\r\n                                                <th>{{trans('finance.other')}}</th>\r\n                                                <th>{{trans('finance.paid')}}</th>\r\n                                                <th>{{trans('finance.balance')}}</th>\r\n                                                <th v-if=\"hasPermission('make-fee-payment')\">{{trans('finance.pay_fee')}}</th>\r\n                                                <th v-else>{{trans('finance.fee_status')}}</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr v-for=\"fee_installment in fee_allocation_group.fee_installments\">\r\n                                                <td>{{fee_installment.title}}</td>\r\n                                                <td>{{getInstallmentDueDate(fee_installment)}}\r\n                                                    <template v-if=\"isInstallmentOverdue(fee_installment)\">\r\n                                                        <br />\r\n                                                        <span class=\"label label-danger\">{{trans('finance.fee_overdue_day', {day: isInstallmentOverdue(fee_installment)})}}</span>\r\n                                                    </template>\r\n                                                </td>\r\n                                                <td v-for=\"fee_head in fee_allocation_group.fee_group.fee_heads\">\r\n                                                    <span v-if=\"checkInstallmentConcession(fee_installment, fee_head.id)\" style=\"text-decoration: line-through;\">{{getInstallmentFeeAmountWithoutConcession(fee_installment, fee_head.id)}}</span>\r\n                                                    {{getInstallmentFeeAmount(fee_installment, fee_head.id)}}\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span v-if=\"fee_allocation_group.fee_group.options.has_transport\">{{getTransportCircleName(fee_installment)}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span v-if=\"fee_allocation_group.fee_group.options.has_transport\">{{getTransportFeeAmount(fee_installment)}}</span>\r\n                                                </td>\r\n                                                <td>{{getLateFeeAmount(fee_installment)}}</td>\r\n                                                <td>{{getInstallmentTotalAmount(fee_installment)}}</td>\r\n                                                <td>{{getInstallmentOtherAmount(fee_installment)}}</td>\r\n                                                <td>{{getInstallmentPaidAmount(fee_installment)}}</td>\r\n                                                <td>{{getInstallmentBalanceAmount(fee_installment)}}</td>\r\n                                                <td v-if=\"hasPermission('make-fee-payment')\">\r\n                                                    <span v-if=\"getInstallmentStatus(fee_installment) == 'unpaid'\">\r\n                                                        <button type=\"button\" class=\"btn btn-info btn-sm\" @click=\"showInstallmentDetail(fee_allocation_group,fee_installment)\">{{trans('finance.pay_fee')}}</button>\r\n                                                    </span>\r\n                                                    <span v-else-if=\"getInstallmentStatus(fee_installment) == 'cancelled'\">\r\n                                                        <span class=\"label label-danger\">{{trans('finance.fee_status_cancelled')}}</span>\r\n                                                    </span>\r\n                                                    <span v-else>\r\n                                                        <div class=\"btn-group\">\r\n                                                            <template v-if=\"getInstallmentStatus(fee_installment) == 'paid'\">\r\n                                                                <button class=\"btn btn-sm btn-success\">{{trans('student.fee_status_paid')}}</button>\r\n                                                                <button type=\"button\" class=\"btn btn-sm btn-success dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                                    <span class=\"sr-only\">Toggle Dropdown</span>\r\n                                                                </button>\r\n                                                            </template>\r\n                                                            <template v-if=\"getInstallmentStatus(fee_installment) == 'partially_paid'\">\r\n                                                                <button class=\"btn btn-sm btn-warning\" @click=\"showInstallmentDetail(fee_allocation_group,fee_installment)\">{{trans('student.fee_status_partially_paid')}}</button>\r\n                                                                <button type=\"button\" class=\"btn btn-sm btn-warning dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                                    <span class=\"sr-only\">Toggle Dropdown</span>\r\n                                                                </button>\r\n                                                            </template>\r\n\r\n                                                            <div class=\"dropdown-menu\">\r\n                                                                <button class=\"dropdown-item custom-dropdown-menu\" @click.prevent=\"setTransaction(fee_installment)\" v-if=\"getInstallmentPaid(fee_installment)\">\r\n                                                                    <i class=\"fas fa-arrow-circle-right\"></i> {{trans('finance.receipt_detail')}}\r\n                                                                </button>\r\n                                                                <button class=\"dropdown-item custom-dropdown-menu\" :key=\"fee_installment.id\" v-confirm=\"{ok: confirmEmptyReceiptDelete(fee_installment)}\" v-else-if=\"!getInstallmentPaid(fee_installment) && hasPermission('cancel-fee-payment')\">\r\n                                                                    <i class=\"fas fa-arrow-circle-right\"></i> {{trans('student.cancel_fee_payment')}}\r\n                                                                </button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </span>\r\n                                                </td>\r\n                                                <td v-else>\r\n                                                    <span v-if=\"getInstallmentStatus(fee_installment) == 'unpaid'\">{{trans('student.fee_status_unpaid')}}</span>\r\n                                                    <span v-else>{{trans('student.fee_status_paid')}}</span>\r\n                                                </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <th colspan=\"2\">{{trans('general.total')}}</th>\r\n                                                <th v-for=\"fee_head in fee_allocation_group.fee_group.fee_heads\">\r\n                                                    {{getTotalFee(fee_allocation_group, fee_head.id)}}\r\n                                                </th>\r\n                                                <th></th>\r\n                                                <th>\r\n                                                    <span v-if=\"fee_allocation_group.fee_group.options.has_transport\">{{getTransportFeeTotal(fee_allocation_group)}}</span>\r\n                                                </th>\r\n                                                <th>{{getLateFeeTotal(fee_allocation_group)}}</th>\r\n                                                <th>{{getInstallmentGrandTotal(fee_allocation_group)}}</th>\r\n                                                <th>{{getInstallmentGrandOther(fee_allocation_group)}}</th>\r\n                                                <th>{{getInstallmentPaidGrandTotal(fee_allocation_group)}}</th>\r\n                                                <th>{{getInstallmentBalanceGrandTotal(fee_allocation_group)}}</th>\r\n                                                <th v-if=\"hasPermission('make-fee-payment')\"></th>\r\n                                                <th v-else></th>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </template>\r\n\r\n\r\n                            <div class=\"table-responsive p-3\">\r\n                                <table class=\"table table\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>{{trans('finance.installment_total')}}</th>\r\n                                            <th>{{trans('finance.other')}}</th>\r\n                                            <th>{{trans('finance.paid')}}</th>\r\n                                            <th>{{trans('finance.balance')}}</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>{{finalTotal}}</td>\r\n                                            <td>{{finalOther}}</td>\r\n                                            <td>{{finalPaid}}</td>\r\n                                            <td>{{finalBalance}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                            <div class=\"row justify-content-md-center\" v-if=\"resetFeeOption && hasPermission('set-fee')\">\r\n                                <div class=\"col-4\">\r\n                                    <button class=\"btn btn-danger btn-block\" :key=\"student_record.id\" v-confirm=\"{ok: confirmResetFee(student_record)}\" v-tooltip=\"trans('student.reset_fee')\">{{trans('student.reset_fee')}}</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <fee-payment-form v-if=\"feePaymentForm && hasNotAnyRole(['parent','student']) && hasPermission('make-fee-payment')\" :uuid=\"uuid\" :id=\"record_id\" :fee-payment=\"feePayment\" @completed=\"paymentMade\" @closeFeePaymentForm=\"feePaymentForm = false\"></fee-payment-form>\r\n        <fee-payment-parent-form v-if=\"feePaymentForm && hasAnyRole(['parent','student']) && hasPermission('make-fee-payment')\" :uuid=\"uuid\" :id=\"record_id\" :fee-payment=\"feePayment\" @completed=\"paymentMade\" @closeFeePaymentForm=\"feePaymentForm = false\"></fee-payment-parent-form>\r\n\r\n        <transition name=\"modal\" v-if=\"feePaymentShow\">\r\n            <div class=\"modal-mask\">\r\n                <div class=\"modal-wrapper\">\r\n                    <div class=\"modal-container modal-lg\">\r\n                        <div class=\"modal-header\">\r\n                            <slot name=\"header\">\r\n                                {{trans('finance.fee_payment')}}\r\n                                <span class=\"float-right pointer\" @click=\"feePaymentShow = false\">x</span>\r\n                            </slot>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <slot name=\"body\">\r\n                                <div style=\"max-height:600px;\">\r\n                                    <fee-detail :uuid=\"uuid\" :rid=\"record_id\" :id=\"student_fee_record_id\" @completed=\"getRecord\"></fee-detail>\r\n                                    <div class=\"clearfix\"></div>\r\n                                </div>\r\n                            </slot>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </transition>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import studentSummary from './../summary'\r\n    import feePaymentForm from './payment'\r\n    import feePaymentParentForm from './payment-parent'\r\n    import feeDetail from './fee-detail'\r\n\r\n    export default {\r\n        components : {studentSummary,feePaymentForm,feePaymentParentForm,feeDetail},\r\n        data() {\r\n            return {\r\n                uuid:this.$route.params.uuid,\r\n                record_id:this.$route.params.record_id,\r\n                student_record: {\r\n                    fee_allocation: {\r\n                        fee_allocation_groups: []\r\n                    }\r\n                },\r\n                feePayment: {\r\n                    fee_group_name: '',\r\n                    fee_payment_installment_id: '',\r\n                    student_fee_record_id: '',\r\n                    date: helper.today(),\r\n                    installments: [],\r\n                    amount: 0\r\n                },\r\n                fee: {\r\n                    groups: []\r\n                },\r\n                feePaymentForm: false,\r\n                feePaymentShow: false\r\n            };\r\n        },\r\n        mounted(){\r\n            if(!helper.hasPermission('list-student-fee')){\r\n                helper.notAccessibleMsg();\r\n                this.$router.push('/dashboard');\r\n            }\r\n\r\n            this.getRecord();\r\n            helper.showDemoNotification(['student']);\r\n        },\r\n        methods: {\r\n            hasPermission(permission){\r\n                return helper.hasPermission(permission);\r\n            },\r\n            hasAnyRole(roles){\r\n                return helper.hasAnyRole(roles);\r\n            },\r\n            hasNotAnyRole(roles){\r\n                return helper.hasNotAnyRole(roles);\r\n            },\r\n            getConfig(config){\r\n                return helper.getConfig(config);\r\n            },\r\n            getStudentName(student){\r\n                return helper.getStudentName(student);\r\n            },\r\n            getRecord(){\r\n                let loader = this.$loading.show();\r\n                this.feePaymentForm = false;\r\n                this.feePaymentShow = false;\r\n                axios.get('/api/student/'+this.uuid+'/fee/'+this.record_id)\r\n                    .then(response => {\r\n                        this.student_record = response.student_record;\r\n\r\n                        if (! this.student_record.student_fee_records.length) {\r\n                            this.$router.push('/student/'+this.uuid); \r\n                        }\r\n\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                        if (this.hasAnyRole(['student','parent'])) {\r\n                            this.$router.push('/student/list')\r\n                        } else {\r\n                           this.$router.push('/student/'+this.uuid+'/fee/'+this.record_id+'/create'); \r\n                        }\r\n                    });\r\n            },\r\n            calculate(){\r\n                this.fee = {\r\n                    groups: []\r\n                };\r\n                this.student_record.fee_allocation.fee_allocation_groups.forEach(fee_allocation_group => {\r\n                    let installments = [];\r\n                    let heads = [];\r\n                    let foots = [];\r\n                    heads.push(i18n.finance.fee_installment_title);\r\n                    heads.push(i18n.finance.fee_installment_due_date);\r\n\r\n                    fee_allocation_group.fee_group.fee_heads.forEach(fee_head => {\r\n                        heads.push(fee_head.name);\r\n                    });\r\n\r\n                    if (fee_allocation_group.fee_group.options.has_transport) {\r\n                        heads.push(i18n.transport.circle);\r\n                        heads.push(i18n.transport.fee);\r\n                    }\r\n\r\n                    foots.push(i18n.finance.total);\r\n                    foots.push('');\r\n\r\n                    heads.push(i18n.finance.late_fee);\r\n                    heads.push(i18n.finance.installment_total);\r\n                    heads.push(i18n.finance.other);\r\n                    heads.push(i18n.finance.paid);\r\n                    heads.push(i18n.finance.balance);\r\n                    heads.push(i18n.finance.fee_status);\r\n\r\n                    fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                        let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n                        \r\n                        let installment_data = [];\r\n                        installment_data.push({\r\n                            text: fee_installment.title\r\n                        });\r\n                        installment_data.push({\r\n                            text: this.showDate(student_fee_record.due_date || fee_installment.due_date)\r\n                        });\r\n\r\n                        fee_allocation_group.fee_group.fee_heads.forEach(fee_head => {\r\n                            installment_data.push({\r\n                                text: this.getInstallmentFeeAmount(fee_installment, fee_head.id),\r\n                                actual: this.getInstallmentFeeAmountWithoutConcession(fee_installment, fee_head.id),\r\n                                is_concession: this.checkInstallmentConcession(fee_installment, fee_head.id) ? true : false\r\n                            });\r\n                        });\r\n\r\n                        if (fee_allocation_group.fee_group.options.has_transport) {\r\n                            installment_data.push({\r\n                                text: this.getTransportCircleName(fee_installment)\r\n                            });\r\n                            installment_data.push({\r\n                                text: this.getTransportFeeAmount(fee_installment)\r\n                            });\r\n                        }\r\n\r\n                        installment_data.push({\r\n                            text: this.getLateFeeAmount(fee_installment)\r\n                        });\r\n\r\n                        installment_data.push({\r\n                            text: this.getInstallmentTotalAmount(fee_installment)\r\n                        })\r\n\r\n                        installment_data.push({\r\n                            text: this.getInstallmentOtherAmount(fee_installment)\r\n                        })\r\n\r\n                        installment_data.push({\r\n                            text: this.getInstallmentPaidAmount(fee_installment)\r\n                        })\r\n\r\n                        installment_data.push({\r\n                            text: this.getInstallmentBalanceAmount(fee_installment)\r\n                        })\r\n\r\n                        installment_data.push({\r\n                            text: this.getInstallmentPrintStatus(fee_installment)\r\n                        })\r\n\r\n                        installments.push({\r\n                            data: installment_data\r\n                        });\r\n                    });\r\n\r\n                    fee_allocation_group.fee_group.fee_heads.forEach(fee_head => {\r\n                        foots.push(this.getTotalFee(fee_allocation_group, fee_head.id));\r\n                    });\r\n                    \r\n                    if (fee_allocation_group.fee_group.options.has_transport) {\r\n                        foots.push('');\r\n                        foots.push(this.getTransportFeeTotal(fee_allocation_group));\r\n                    }\r\n                    \r\n                    foots.push(this.getLateFeeTotal(fee_allocation_group));\r\n                    foots.push(this.getInstallmentGrandTotal(fee_allocation_group));\r\n                    foots.push(this.getInstallmentGrandOther(fee_allocation_group));\r\n                    foots.push(this.getInstallmentPaidGrandTotal(fee_allocation_group));\r\n                    foots.push(this.getInstallmentBalanceGrandTotal(fee_allocation_group));\r\n                    foots.push('');\r\n\r\n                    let group = {\r\n                        name: fee_allocation_group.fee_group.name,\r\n                        heads: heads,\r\n                        installments: installments,\r\n                        foots: foots,\r\n                    }\r\n                    this.fee.groups.push(group);\r\n                });\r\n            },\r\n            formatCurrency(amount){\r\n                return helper.formatCurrency(amount);\r\n            },\r\n            isInstallmentOverdue(fee_installment){\r\n                let installment = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n\r\n                if (helper.today() > (installment.due_date || fee_installment.due_date) && installment.status != 'paid') {\r\n                    return helper.getDateDiff(installment.due_date || fee_installment.due_date);\r\n                }\r\n\r\n                return 0;\r\n            },\r\n            getStatus(fee_installment) {\r\n                let installment = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n                if (installment.status == 'paid') {\r\n                    return '<span class=\"label label-success\">'+i18n.student.fee_status_paid+'</span>';\r\n                } else if(installment.status == 'partially_paid') {\r\n                    return '<span class=\"label label-warning\">'+i18n.student.fee_status_partially_paid+'</span>';\r\n                } else if(installment.status == 'cancelled') {\r\n                    return '<span class=\"label label-danger\">'+i18n.student.fee_status_cancelled+'</span>';\r\n                } else {\r\n                    return '<span class=\"label label-danger\">'+i18n.student.fee_status_unpaid+'</span>';\r\n                }\r\n            },\r\n            getInstallmentDueDate(fee_installment){\r\n                let installment = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n\r\n                return helper.formatDate(installment.due_date || fee_installment.due_date);\r\n            },\r\n            getInstallmentStatus(fee_installment){\r\n                let installment = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n\r\n                return installment.status;\r\n            },\r\n            getInstallmentFee(fee_installment, fee_head_id){\r\n                let amount = this.getInstallmentFeeWithoutConcession(fee_installment, fee_head_id);\r\n                return this.getInstallmentFeeWithConcession(amount, fee_installment, fee_head_id);\r\n            },\r\n            getInstallmentFeeWithoutConcession(fee_installment, fee_head_id){\r\n                let installment_detail = fee_installment.fee_installment_details.find(o => o.fee_head_id == fee_head_id);\r\n\r\n                if (typeof installment_detail == 'undefined')\r\n                    return 0;\r\n\r\n                let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n                let student_optional_fee_record = student_fee_record.student_optional_fee_records.findIndex(o => o.fee_head_id == fee_head_id);\r\n\r\n                return (student_optional_fee_record < 0) ? installment_detail.amount : 0;\r\n            },\r\n            checkInstallmentConcession(fee_installment, fee_head_id){\r\n                let installment_detail = fee_installment.fee_installment_details.find(o => o.fee_head_id == fee_head_id);\r\n\r\n                let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n\r\n                let fee_concession_index = (student_fee_record.fee_concession) ? student_fee_record.fee_concession.fee_concession_details.findIndex(o => o.fee_head_id == fee_head_id) : -1;\r\n\r\n                return (fee_concession_index >= 0) ? true : false;\r\n            },\r\n            getInstallmentFeeWithConcession(amount, fee_installment, fee_head_id){\r\n                let installment_detail = fee_installment.fee_installment_details.find(o => o.fee_head_id == fee_head_id);\r\n\r\n                let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n\r\n                let fee_concession_index = (student_fee_record.fee_concession) ? student_fee_record.fee_concession.fee_concession_details.findIndex(o => o.fee_head_id == fee_head_id) : -1;\r\n\r\n                if (fee_concession_index >= 0) {\r\n                    let fee_concession = student_fee_record.fee_concession.fee_concession_details[fee_concession_index];\r\n\r\n                    let fee_concession_amount = fee_concession.type == 'percent' ? (amount * (fee_concession.amount/100)) : fee_concession.amount;\r\n\r\n                    return ((amount - fee_concession_amount) >= 0) ? Math.ceil(amount - fee_concession_amount) : 0;\r\n                }\r\n\r\n                return Math.ceil(amount);\r\n            },\r\n            getInstallmentFeeAmountWithoutConcession(fee_installment, fee_head_id){\r\n                let amount = this.getInstallmentFeeWithoutConcession(fee_installment, fee_head_id);\r\n\r\n                return helper.formatCurrency(amount);\r\n            },\r\n            getInstallmentFeeAmount(fee_installment, fee_head_id){\r\n                let amount = this.getInstallmentFee(fee_installment, fee_head_id);\r\n                return helper.formatCurrency(amount);\r\n            },\r\n            getInstallmentTotalWithoutLateFee(fee_installment){\r\n                let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id)\r\n\r\n                let total = 0;\r\n                fee_installment.fee_installment_details.forEach(installment_detail => {\r\n                    total += this.getInstallmentFee(fee_installment, installment_detail.fee_head_id);\r\n                });\r\n\r\n                let transport_fee = this.getTransportFee(fee_installment);\r\n\r\n                total += ((Number.isInteger(transport_fee)) ? transport_fee : 0);\r\n\r\n                return total;\r\n            },\r\n            getInstallmentTotal(fee_installment){\r\n                let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id)\r\n                \r\n                let total = this.getInstallmentTotalWithoutLateFee(fee_installment);\r\n\r\n                if (total || student_fee_record.status != 'unpaid') {\r\n                    let late_fee = this.getLateFee(fee_installment);\r\n                    total += ((Number.isInteger(late_fee)) ? late_fee : 0);\r\n                }\r\n\r\n                return total;\r\n            },\r\n            getInstallmentTotalAmount(fee_installment){\r\n                let amount = this.getInstallmentTotal(fee_installment);\r\n                return helper.formatCurrency(amount);\r\n            },\r\n            getInstallmentOther(fee_installment){\r\n                let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n\r\n                let other = 0;\r\n                student_fee_record.transactions.forEach(transaction => {\r\n                    if (! transaction.is_cancelled) {\r\n                        if (transaction.options.additional_fee_charge && transaction.options.additional_fee_charge.amount) {\r\n                            other += transaction.options.additional_fee_charge.amount;\r\n                        }\r\n                        if (transaction.options.additional_fee_discount && transaction.options.additional_fee_discount.amount) {\r\n                            other -= transaction.options.additional_fee_discount.amount;\r\n                        }\r\n                    }\r\n                });\r\n\r\n                return other;\r\n            },\r\n            getInstallmentOtherAmount(fee_installment){\r\n                let amount = this.getInstallmentOther(fee_installment);\r\n                return helper.formatCurrency(amount);\r\n            },\r\n            getInstallmentPaid(fee_installment){\r\n                let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n\r\n                let paid = 0;\r\n                student_fee_record.transactions.forEach(transaction => {\r\n                    if (! transaction.is_cancelled)\r\n                        paid += transaction.amount;\r\n                });\r\n\r\n                return paid;\r\n            },\r\n            getInstallmentPaidAmount(fee_installment){\r\n                let amount = this.getInstallmentPaid(fee_installment);\r\n                return helper.formatCurrency(amount);\r\n            },\r\n            getInstallmentBalance(fee_installment){\r\n                let total = this.getInstallmentTotal(fee_installment);\r\n                let other = this.getInstallmentOther(fee_installment);\r\n                let paid = this.getInstallmentPaid(fee_installment);\r\n                return total + other - paid;\r\n            },\r\n            getInstallmentBalanceAmount(fee_installment){\r\n                let amount = this.getInstallmentBalance(fee_installment);\r\n                return helper.formatCurrency(amount);\r\n            },\r\n            getTransportCircleName(fee_installment){\r\n                let installment = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n                return installment.transport_circle ? installment.transport_circle.name : '-';\r\n            },\r\n            getTransportFee(fee_installment){\r\n                let installment = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n\r\n                if (! installment.transport_circle_id || ! fee_installment.transport_fee_id)\r\n                    return '-';\r\n\r\n                let transport_fee = fee_installment.transport_fee.transport_fee_details.find(o => o.transport_circle_id == installment.transport_circle_id);\r\n                return transport_fee.amount;\r\n            },\r\n            getTransportFeeAmount(fee_installment){\r\n                let amount = this.getTransportFee(fee_installment);\r\n                return (Number.isInteger(amount)) ? helper.formatCurrency(amount) : '-';\r\n            },\r\n            getLateFeeAmount(fee_installment){\r\n                let amount = this.getLateFee(fee_installment);\r\n                return (Number.isInteger(amount)) ? helper.formatCurrency(amount) : '-';\r\n            },\r\n            getLateFee(fee_installment){\r\n                let installment_total = this.getInstallmentTotalWithoutLateFee(fee_installment);\r\n\r\n                if (! installment_total)\r\n                    return '-';\r\n\r\n                let date = helper.toDate(this.feePayment.date);\r\n\r\n                let installment = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n\r\n                if (installment.status == 'paid') {\r\n                    return installment.late_fee_charged;\r\n                }\r\n\r\n                if ((installment.late_fee_applicable == null && !fee_installment.late_fee_applicable) || installment.late_fee_applicable == 0)\r\n                    return '-';\r\n\r\n                if (date <= (installment.due_date || fee_installment.due_date))\r\n                    return '-';\r\n\r\n                let late_day = helper.getDateDiff((installment.due_date || fee_installment.due_date), date);\r\n\r\n                let per_period = Math.floor(late_day / (installment.late_fee_frequency || fee_installment.late_fee_frequency));\r\n                return (installment.late_fee || fee_installment.late_fee) * per_period;\r\n            },\r\n            showInstallmentDetail(fee_allocation_group, fee_installment){\r\n                this.feePayment.installments = [];\r\n                this.feePayment.fee_group_name = fee_allocation_group.fee_group.name;\r\n                let installments = fee_allocation_group.fee_installments.filter(o => o.due_date <= fee_installment.due_date);\r\n\r\n                let total = 0;\r\n                installments.forEach(installment => {\r\n                    let student_installment = this.student_record.student_fee_records.find(o => o.fee_installment_id == installment.id);\r\n                    if (student_installment.status == 'unpaid' || student_installment.status == 'partially_paid') {\r\n\r\n                        let installment_fee = this.getInstallmentTotalWithoutLateFee(installment);\r\n                        let other = this.getInstallmentOther(installment);\r\n                        let late_fee = this.getLateFee(installment);\r\n                        let paid = this.getInstallmentPaid(installment);\r\n                        installment_fee += other;\r\n\r\n                        let installment_balance = (installment_fee > paid) ? (installment_fee - paid) : 0\r\n                        if (installment_fee) {\r\n                            late_fee = ((Number.isInteger(late_fee)) ? late_fee : 0)\r\n                        }\r\n                        let late_fee_balance = (!installment_balance && late_fee) ? (late_fee - (paid - installment_fee)) : late_fee;\r\n\r\n                        let installment_total = installment_fee;\r\n                        if (installment_fee) {\r\n                            late_fee = ((Number.isInteger(late_fee)) ? late_fee : 0)\r\n                            installment_total += late_fee;\r\n                        }\r\n\r\n                        let balance = installment_total - paid;\r\n                        total += balance;\r\n\r\n                        this.feePayment.installments.push({\r\n                            fee_installment_id:  student_installment.fee_installment_id,\r\n                            title: installment.title,\r\n                            installment_fee: installment_fee,\r\n                            installment_balance: installment_balance,\r\n                            late_fee_balance: (Number.isInteger(late_fee_balance)) ? late_fee_balance : 0,\r\n                            late_fee: late_fee,\r\n                            paid: paid,\r\n                            total: balance\r\n                        })\r\n                    }\r\n                });\r\n                this.feePayment.amount = total;\r\n                this.feePayment.fee_payment_installment_id = fee_installment.id;\r\n                this.feePaymentForm = true;\r\n            },\r\n            getTotalFee(fee_allocation_group, fee_head_id){\r\n                let total = 0;\r\n                fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                    total += this.getInstallmentFee(fee_installment, fee_head_id);\r\n                });\r\n                return helper.formatCurrency(total);\r\n            },\r\n            getTransportFeeTotal(fee_allocation_group){\r\n                let total = 0;\r\n                fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                    let fee = this.getTransportFee(fee_installment);\r\n                    total += ((Number.isInteger(fee)) ? fee : 0);\r\n                });\r\n                return total ? this.formatCurrency(total) : '-';\r\n            },\r\n            getLateFeeTotal(fee_allocation_group){\r\n                let total = 0;\r\n                fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                    let fee = this.getLateFee(fee_installment);\r\n                    total += ((Number.isInteger(fee)) ? fee : 0);\r\n                });\r\n                return total ? this.formatCurrency(total) : '-';\r\n            },\r\n            getInstallmentGrandTotal(fee_allocation_group){\r\n                let amount = this.getInstallmentGrandTotalAmount(fee_allocation_group);\r\n                return (Number.isInteger(amount)) ? helper.formatCurrency(amount) : '-';\r\n            },\r\n            getInstallmentGrandTotalAmount(fee_allocation_group){\r\n                let total = 0;\r\n                fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                    total += this.getInstallmentTotal(fee_installment);\r\n                });\r\n                return total;\r\n            },\r\n            getInstallmentGrandOther(fee_allocation_group){\r\n                let amount = this.getInstallmentGrandOtherAmount(fee_allocation_group);\r\n                return (Number.isInteger(amount)) ? helper.formatCurrency(amount) : '-';\r\n            },\r\n            getInstallmentGrandOtherAmount(fee_allocation_group){\r\n                let other = 0;\r\n                fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                    other += this.getInstallmentOther(fee_installment);\r\n                });\r\n                return other;\r\n            },\r\n            getInstallmentPaidGrandTotal(fee_allocation_group){\r\n                let amount = this.getInstallmentPaidGrandTotalAmount(fee_allocation_group);\r\n                return (Number.isInteger(amount)) ? helper.formatCurrency(amount) : '-';\r\n            },\r\n            getInstallmentPaidGrandTotalAmount(fee_allocation_group){\r\n                let total = 0;\r\n                fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                    total += this.getInstallmentPaid(fee_installment);\r\n                });\r\n                return total;\r\n            },\r\n            getInstallmentBalanceGrandTotal(fee_allocation_group){\r\n                let amount = this.getInstallmentBalanceGrandTotalAmount(fee_allocation_group);\r\n                return (Number.isInteger(amount)) ? helper.formatCurrency(amount) : '-';\r\n            },\r\n            getInstallmentBalanceGrandTotalAmount(fee_allocation_group){\r\n                let total = 0;\r\n                fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                    total += this.getInstallmentBalance(fee_installment);\r\n                });\r\n                return total;\r\n            },\r\n            paymentMade(){\r\n                this.getRecord();\r\n            },\r\n            showDate(date){\r\n                return helper.formatDate(date);\r\n            },\r\n            getInstallmentPrintStatus(fee_installment){\r\n                let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n\r\n                if (student_fee_record.status == 'paid')\r\n                    return i18n.student.fee_status_paid;\r\n                else if(student_fee_record.status == 'partially_paid')\r\n                    return i18n.student.fee_status_partially_paid;\r\n                else if(student_fee_record.status == 'cancelled')\r\n                    return i18n.student.fee_status_cancelled;\r\n                else if(student_fee_record.status == 'unpaid')\r\n                    return i18n.student.fee_status_unpaid;\r\n            },\r\n            setTransaction(fee_installment) {\r\n                let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n                this.student_fee_record_id = student_fee_record.id;\r\n                this.feePaymentShow = true;\r\n            },\r\n            print(){\r\n                let loader = this.$loading.show();\r\n                this.calculate();\r\n                axios.post('/api/student/'+this.uuid+'/fee/'+this.record_id+'/print',{fee: this.fee})\r\n                    .then(response => {\r\n                        let print = window.open(\"/print\");\r\n                        loader.hide();\r\n                        print.document.write(response);\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            pdf(){\r\n                let loader = this.$loading.show();\r\n                this.calculate();\r\n                axios.post('/api/student/'+this.uuid+'/fee/'+this.record_id+'/pdf',{fee: this.fee})\r\n                    .then(response => {\r\n                        loader.hide();\r\n                        window.open('/download/report/'+response+'?token='+this.authToken);\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            confirmEmptyReceiptDelete(fee_installment){\r\n                return dialog => this.deleteEmptyReceipt(fee_installment);\r\n            },\r\n            deleteEmptyReceipt(fee_installment){\r\n                let loader = this.$loading.show();\r\n                let student_fee_record = this.student_record.student_fee_records.find(o => o.fee_installment_id == fee_installment.id);\r\n                axios.post('/api/student/'+this.uuid+'/fee/'+this.record_id+'/'+student_fee_record.id+'/cancel')\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        this.getRecord();\r\n                        loader.hide();\r\n                    }).catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            confirmResetFee(student_record){\r\n                return dialog => this.resetFee(student_record);\r\n            },\r\n            resetFee(student_record){\r\n                let loader = this.$loading.show();\r\n                axios.patch('/api/student/'+this.uuid+'/fee/'+this.record_id+'/reset')\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        this.getRecord();\r\n                        loader.hide();\r\n                    }).catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            }\r\n        },\r\n        filters: {\r\n          moment(date) {\r\n            return helper.formatDate(date);\r\n          },\r\n          momentDateTime(date) {\r\n            return helper.formatDateTime(date);\r\n          }\r\n        },\r\n        computed: {\r\n            authToken(){\r\n                return helper.getAuthToken();\r\n            },\r\n            resetFeeOption(){\r\n                if (! this.student_record.id)\r\n                    return false;\r\n\r\n                return this.student_record.student_fee_records.every(student_fee_record => {\r\n                    return student_fee_record.status == 'unpaid';\r\n                });\r\n            },\r\n            finalTotal() {\r\n                let total = 0;\r\n                this.student_record.fee_allocation.fee_allocation_groups.forEach(fee_allocation_group => {\r\n                    total += this.getInstallmentGrandTotalAmount(fee_allocation_group);\r\n                });\r\n                return helper.formatCurrency(total);\r\n            },\r\n            finalOther() {\r\n                let total = 0;\r\n                this.student_record.fee_allocation.fee_allocation_groups.forEach(fee_allocation_group => {\r\n                    total += this.getInstallmentGrandOtherAmount(fee_allocation_group);\r\n                });\r\n                return helper.formatCurrency(total);\r\n            },\r\n            finalPaid() {\r\n                let total = 0;\r\n                this.student_record.fee_allocation.fee_allocation_groups.forEach(fee_allocation_group => {\r\n                    total += this.getInstallmentPaidGrandTotalAmount(fee_allocation_group);\r\n                });\r\n                return helper.formatCurrency(total);\r\n            },\r\n            finalBalance() {\r\n                let total = 0;\r\n                this.student_record.fee_allocation.fee_allocation_groups.forEach(fee_allocation_group => {\r\n                    total += this.getInstallmentBalanceGrandTotalAmount(fee_allocation_group);\r\n                });\r\n                return helper.formatCurrency(total);\r\n            }\r\n        },\r\n        watch: {\r\n            '$route.params.uuid': function (uuid) {\r\n                this.uuid = uuid;\r\n                this.record_id = this.$route.params.record_id;\r\n                this.getRecord()\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/student/fee/payment-parent.vue"],"names":[],"mappings":";AA8cA;IACA,aAAA;AACA","sourcesContent":["<template>\r\n    <transition name=\"modal\">\r\n        <div class=\"modal-mask\">\r\n            <div class=\"modal-wrapper\">\r\n                <div class=\"modal-container modal-lg\">\r\n                    <div class=\"modal-header\">\r\n                        <slot name=\"header\">\r\n                            {{trans('finance.fee_payment')}}\r\n                            <span class=\"float-right pointer\" @click=\"$emit('closeFeePaymentForm')\">x</span>\r\n                        </slot>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <slot name=\"body\">\r\n                            <h4>{{feePayment.fee_group_name}} <span class=\"pull-right\">{{feePayment.date | moment}}</span></h4>\r\n                            <div style=\"max-height:600px;\">\r\n                                <form @submit.prevent=\"submit\" @keydown=\"feePaymentForm.errors.clear($event.target.name)\">\r\n                                    <div class=\"table-responsive p-2\">\r\n                                        <table class=\"table table-bordered\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>{{trans('finance.fee_installment')}}</th>\r\n                                                    <th class=\"text-right\">{{trans('finance.installment_total')}}</th>\r\n                                                    <th class=\"text-right\">{{trans('finance.late_fee')}}</th>\r\n                                                    <th class=\"text-right\">{{trans('general.total')}}</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr v-for=\"installment in feePaymentForm.installments\">\r\n                                                    <td v-text=\"installment.title\"></td>\r\n                                                    <td class=\"text-right\" v-text=\"installment.installment_balance\"></td>\r\n                                                    <td class=\"text-right\">\r\n                                                        {{installment.late_fee_balance}}\r\n                                                    </td>\r\n                                                    <td class=\"text-right\" v-text=\"getInstallmentTotal(installment)\"></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <tfoot>\r\n                                                <tr>\r\n                                                    <th>{{trans('general.total')}}</th>\r\n                                                    <th colspan=\"2\"></th>\r\n                                                    <th class=\"text-right\">{{formatCurrency(getGrandTotal)}}</th>\r\n                                                </tr>\r\n                                            </tfoot>\r\n                                        </table>\r\n                                    </div>\r\n                                    <div>\r\n                                        <h4 class=\"card-title\">{{trans('finance.choose_payment_gateway')}}</h4>\r\n                                        <div class=\"radio radio-success\" v-if=\"getConfig('razorpay') && razorpay_loaded\">\r\n                                            <input type=\"radio\" name=\"payment_gateway\" id=\"razorpay\" value=\"razorpay\" @change=\"setPaymentGateway('razorpay')\">\r\n                                            <label for=\"razorpay\"> \r\n                                                Razorpay \r\n                                            </label>\r\n                                        </div>\r\n                                        <div class=\"radio radio-success\" v-if=\"getConfig('billdesk')\">\r\n                                            <input type=\"radio\" name=\"payment_gateway\" id=\"billdesk\" value=\"billdesk\" @change=\"setPaymentGateway('billdesk')\">\r\n                                            <label for=\"billdesk\"> Billdesk </label>\r\n                                        </div>\r\n                                        <div class=\"radio radio-success\" v-if=\"getConfig('stripe')\">\r\n                                            <input type=\"radio\" name=\"payment_gateway\" id=\"stripe\" value=\"stripe\" @change=\"setPaymentGateway('stripe')\">\r\n                                            <label for=\"stripe\"> Stripe </label>\r\n                                        </div>\r\n                                        <div class=\"radio radio-success\" v-if=\"getConfig('paystack')\">\r\n                                            <input type=\"radio\" name=\"payment_gateway\" id=\"paystack\" value=\"paystack\" @change=\"setPaymentGateway('paystack')\">\r\n                                            <label for=\"paystack\"> Paystack </label>\r\n                                        </div>\r\n                                        <div class=\"radio radio-success\" v-if=\"getConfig('paypal')\">\r\n                                            <input type=\"radio\" name=\"payment_gateway\" id=\"paypal\" value=\"paypal\" @change=\"setPaymentGateway('paypal')\">\r\n                                            <label for=\"paypal\"> Paypal </label>\r\n                                        </div>\r\n\r\n                                        <p>{{handlingFeeAmount}}</p>\r\n                                        <p>{{totalAmount}}</p>\r\n\r\n                                        <template v-if=\"payment_gateway == 'billdesk'\">\r\n                                            <button type=\"button\" class=\"btn btn-info\" @click=\"callBillDesk\">{{trans('general.proceed')}}</button>\r\n                                        </template>\r\n\r\n                                        <template v-if=\"payment_gateway == 'razorpay'\">\r\n                                            <button type=\"button\" class=\"btn btn-info\" @click=\"callRazorpay\">{{trans('general.proceed')}}</button>\r\n                                        </template>\r\n\r\n                                        <template v-if=\"payment_gateway == 'paystack'\">\r\n                                            <button type=\"button\" class=\"btn btn-info\" @click=\"payWithPaystack\">{{trans('general.proceed')}}</button>\r\n                                        </template>\r\n\r\n                                        <template v-if=\"payment_gateway == 'paypal'\">\r\n                                            <button type=\"button\" class=\"btn btn-info\" @click=\"callPaypal\" v-if=\"paypalButton\">{{trans('general.proceed')}}</button>\r\n                                        </template>\r\n\r\n                                        <template v-if=\"payment_gateway == 'stripe'\">\r\n                                            <div class=\"row m-t-40\">\r\n                                                <div class=\"col-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" type=\"number\" maxlength=\"16\" value=\"\" v-model=\"stripe.card_number\" :placeholder=\"trans('finance.card_number')\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-3\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" type=\"number\" value=\"\" v-model=\"stripe.month\" :placeholder=\"trans('finance.card_expiry_month')\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-4\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" type=\"number\" value=\"\" v-model=\"stripe.year\" :placeholder=\"trans('finance.card_expiry_year')\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-1\">\r\n                                                </div>\r\n                                                <div class=\"col-4\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" type=\"number\" value=\"\" v-model=\"stripe.cvc\" :placeholder=\"trans('finance.card_cvc')\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <button type=\"button\" @click=\"stripeCheckout\" class=\"btn btn-info waves-effect waves-light pull-right\" v-if=\"stripeButton\"><span>{{trans('general.proceed')}}</span></button>\r\n                                        </template>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </slot>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </transition>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        components: {},\r\n        props: ['id','uuid','feePayment'],\r\n        data() {\r\n            return {\r\n                default_currency: helper.getConfig('default_currency'),\r\n                payment_gateway: '',\r\n                razorpay_loaded: 0,\r\n                stripe_loaded: 0,\r\n                total: 0,\r\n                stripe: {\r\n                    card_number: '',\r\n                    month: '',\r\n                    year: '',\r\n                    cvc: ''\r\n                },\r\n                stripeButton: true,\r\n                paypalButton: true,\r\n                feePaymentForm: new Form({\r\n                    amount: 0,\r\n                    installment_id: '',\r\n                    date: '',\r\n                    installments: []\r\n                })\r\n            }\r\n        },\r\n        mounted(){\r\n            this.loadFeePayment(this.feePayment);\r\n\r\n            if ((this.default_currency.name == 'INR' || !helper.getConfig('mode')) && this.getConfig('razorpay')) {\r\n                this.injectRazorpay();\r\n            }\r\n        },\r\n        methods: {\r\n            getConfig(config){\r\n                return helper.getConfig(config);\r\n            },\r\n            loadFeePayment(feePayment){\r\n                this.feePaymentForm.amount = feePayment.amount;\r\n                this.feePaymentForm.installment_id = feePayment.fee_payment_installment_id;\r\n                this.feePaymentForm.date = feePayment.date;\r\n                this.feePaymentForm.installments = [];\r\n                this.total = 0;\r\n                feePayment.installments.forEach(installment => {\r\n                    this.feePaymentForm.installments.push({\r\n                        fee_installment_id: installment.fee_installment_id,\r\n                        title: installment.title,\r\n                        installment_balance: installment.installment_balance,\r\n                        late_fee_balance: installment.late_fee_balance\r\n                    });\r\n                })\r\n            },\r\n            getInstallmentTotal(installment){\r\n                return (installment.installment_balance + parseInt(installment.late_fee_balance));\r\n            },\r\n            formatCurrency(amount){\r\n                return helper.formatCurrency(amount);\r\n            },\r\n            setPaymentGateway(gateway){\r\n                this.payment_gateway = gateway;\r\n            },\r\n            stripeCheckout(){\r\n                let loader = this.$loading.show();\r\n                this.stripeButton = false;\r\n                Stripe.setPublishableKey(this.getConfig('stripe_publishable_key'));\r\n                Stripe.card.createToken({\r\n                    number: this.stripe.card_number,\r\n                    cvc: this.stripe.cvc,\r\n                    exp_month: this.stripe.month,\r\n                    exp_year: this.stripe.year\r\n                }, this.stripeResponseHandler);\r\n                loader.hide();\r\n            },\r\n            stripeResponseHandler(status, response) {\r\n                if(status == 200){\r\n                    let loader = this.$loading.show();\r\n                    axios.post('/api/student/'+this.uuid+'/payment/'+this.id+'/stripe',{\r\n                            stripeToken: response.id,\r\n                            amount: this.total * 100,\r\n                            fee: this.feePaymentForm.amount,\r\n                            handling_fee: this.handlingFee,\r\n                            fee_installment_id: this.feePaymentForm.installment_id,\r\n                            installments: this.feePaymentForm.installments\r\n                        })\r\n                        .then(response => {\r\n                            loader.hide();\r\n                            toastr.success(response.message);\r\n                            this.$emit('completed');\r\n                            this.stripeButton = true;\r\n                        })\r\n                        .catch(error => {\r\n                            loader.hide();\r\n                            helper.showErrorMsg(error);\r\n                            this.stripeButton = true;\r\n                        })\r\n                } else {\r\n                    toastr.error(response.error.message);\r\n                    this.stripeButton = true;\r\n                }\r\n            },\r\n            injectRazorpay() {\r\n                let vm = this;\r\n                var result = $.Deferred(),\r\n                script = document.createElement(\"script\");\r\n\r\n                script.async = \"async\";\r\n                script.type = \"text/javascript\";\r\n                script.src = 'https://checkout.razorpay.com/v1/checkout.js';\r\n                script.onload = script.onreadystatechange = function(_, isAbort) {\r\n                    if (!script.readyState || /loaded|complete/.test(script.readyState)) {\r\n                        if (isAbort)\r\n                            result.reject();\r\n                        else \r\n                            result.resolve();\r\n                    }\r\n                    vm.razorpay_loaded = 1;\r\n                };\r\n\r\n                script.onerror = function() {\r\n                    result.reject();\r\n                };\r\n\r\n                document.head.appendChild(script);\r\n\r\n                return result.promise();\r\n            },\r\n            callRazorpay(){\r\n                let vm = this;\r\n                var options = {\r\n                    key: this.getConfig('razorpay_key'),\r\n                    protocol: 'https',\r\n                    hostname: 'api.razorpay.com',\r\n                    amount: this.total * 100,\r\n                    name: helper.getConfig('institute_name'),\r\n                    description: i18n.finance.fee_payment,\r\n                    image: this.getLogo,\r\n                    prefill: {\r\n                        email: \"\",\r\n                        contact: \"\",\r\n                        name: \"\"\r\n                    },\r\n                    notes:{\r\n                        student_record_id: this.id,\r\n                        fee: this.feePaymentForm.amount,\r\n                        handling_fee: this.handlingFee\r\n                    },\r\n                    handler: function (transaction, response){\r\n                        vm.completeRazorpay(transaction.razorpay_payment_id)\r\n                    }\r\n                };\r\n\r\n                window.rzpay = new Razorpay(options);\r\n                rzpay.open();\r\n            },\r\n            completeRazorpay(transaction_id){\r\n                let loader = this.$loading.show();\r\n                axios.post('/api/student/'+this.uuid+'/payment/'+this.id+'/rzp',{\r\n                        transaction_id: transaction_id,\r\n                        installments: this.feePaymentForm.installments,\r\n                        fee_installment_id: this.feePaymentForm.installment_id\r\n                    })\r\n                    .then(response => {\r\n                        loader.hide();\r\n                        toastr.success(response.message);\r\n                        this.$emit('completed');\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    })\r\n            },\r\n            callBillDesk() {\r\n                let loader = this.$loading.show();\r\n\r\n                axios.post('student/'+this.uuid+'/payment/'+this.id+'/billdesk', {\r\n                    amount: this.feePaymentForm.amount,\r\n                    installment_id: this.feePaymentForm.installment_id,\r\n                    installments: this.feePaymentForm.installments\r\n                })\r\n                .then(response => {\r\n                    loader.hide();\r\n\r\n                    bdPayment.initialize({\r\n                        msg : response.msg,\r\n                        callbackUrl: response.url,\r\n                        options : {\r\n                            enableChildWindowPosting : true,\r\n                            enablePaymentRetry : true,\r\n                            retry_attempt_count: 3\r\n                        }\r\n                    }); \r\n                })\r\n                .catch(error => {\r\n                    loader.hide();\r\n                    helper.showErrorMsg(error);\r\n                })\r\n            },\r\n            callPaypal(){\r\n                this.paypalButton = false;\r\n                let loader = this.$loading.show();\r\n                axios.post('/api/student/'+this.uuid+'/payment/'+this.id+'/paypal',{\r\n                        amount: this.total,\r\n                        fee: this.feePaymentForm.amount,\r\n                        handling_fee: this.handlingFee,\r\n                        fee_installment_id: this.feePaymentForm.installment_id,\r\n                        installments: this.feePaymentForm.installments\r\n                    })\r\n                    .then(response => {\r\n                        loader.hide();\r\n                        window.location = response;\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        this.paypalButton = true\r\n                        helper.showErrorMsg(error);\r\n                    })\r\n                ;\r\n            },\r\n            payWithPaystack(){\r\n                if (helper.getConfig('default_currency').name != 'NGN' && helper.getConfig('default_currency').name != 'GHS') {\r\n                    toastr.error(i18n.configuration.currency_not_supported);\r\n                    return;\r\n                }\r\n\r\n                let vm = this;\r\n                var handler = PaystackPop.setup({\r\n                    key: this.getConfig('paystack_public_key'),\r\n                    email: helper.getAuthUser('email'),\r\n                    amount: this.total * 100,\r\n                    currency: helper.getConfig('default_currency').name,\r\n                    ref: ''+Math.floor((Math.random() * 1000000000) + 1),\r\n                    metadata: {\r\n                        custom_fields: [\r\n                            {\r\n                                display_name: 'Student ID',\r\n                                variable_name: \"student_record_id\",\r\n                                value: this.id\r\n                            },\r\n                            {\r\n                                display_name: 'Amount',\r\n                                variable_name: \"fee\",\r\n                                value: this.feePaymentForm.amount\r\n                            },\r\n                            {\r\n                                display_name: 'Handling Fee',\r\n                                variable_name: \"handling_fee\",\r\n                                value: this.handlingFee\r\n                            }\r\n                        ]\r\n                    },\r\n                    callback: function(response){\r\n                        vm.completePaystack(response.reference)\r\n                    },\r\n                    onClose: function(){\r\n                        \r\n                    }\r\n                });\r\n                handler.openIframe();\r\n            },\r\n            completePaystack(transaction_id){\r\n                let loader = this.$loading.show();\r\n                axios.post('/api/student/'+this.uuid+'/payment/'+this.id+'/paystack',{\r\n                        transaction_id: transaction_id,\r\n                        installments: this.feePaymentForm.installments,\r\n                        fee_installment_id: this.feePaymentForm.installment_id\r\n                    })\r\n                    .then(response => {\r\n                        loader.hide();\r\n                        toastr.success(response.message);\r\n                        this.$emit('completed');\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    })\r\n            }\r\n        },\r\n        computed: {\r\n            getLogo(){\r\n                return helper.getLogo();\r\n            },\r\n            handlingFee(){\r\n                let handling_fee = 0;\r\n\r\n                if (!this.payment_gateway)\r\n                    return handling_fee;\r\n\r\n                if (! helper.getConfig(this.payment_gateway+'_charge_handling_fee'))\r\n                    return handling_fee;\r\n\r\n                if(helper.getConfig(this.payment_gateway+'_fixed_handling_fee'))\r\n                    handling_fee = helper.getConfig(this.payment_gateway+'_handling_fee');\r\n                else {\r\n                    let percentage = helper.getConfig(this.payment_gateway+'_handling_fee');\r\n                    handling_fee = this.feePaymentForm.amount * (percentage / 100);\r\n                }\r\n\r\n                return helper.formatNumber(handling_fee);\r\n            },\r\n            handlingFeeAmount(){\r\n                if (! helper.getConfig(this.payment_gateway+'_charge_handling_fee'))\r\n                    return;\r\n\r\n                return i18n.finance.handling_fee+' '+helper.formatCurrency(this.handlingFee);\r\n            },\r\n            totalAmount(){\r\n                return i18n.finance.payable_amount+' '+helper.formatCurrency(this.total);\r\n            },\r\n            getGrandTotal(){\r\n                let total = 0;\r\n                total = total;\r\n\r\n                if(!Array.isArray(this.feePaymentForm.installments))\r\n                    return total;\r\n\r\n                this.feePaymentForm.installments.forEach(installment => {\r\n                    total += (installment.installment_balance + parseInt(installment.late_fee_balance));\r\n                })  \r\n                total = (total) ? (total + this.handlingFee) : total;\r\n                this.total = total; \r\n                return total;\r\n            }\r\n        },\r\n        filters: {\r\n          moment(date) {\r\n            return helper.formatDate(date);\r\n          },\r\n          momentDateTime(date) {\r\n            return helper.formatDateTime(date);\r\n          }\r\n        }\r\n    }\r\n</script>\r\n<style>\r\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=style&index=0&id=b9b42674&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=style&index=0&id=b9b42674&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b9b42674_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=b9b42674&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=style&index=0&id=b9b42674&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b9b42674_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b9b42674_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_parent_vue_vue_type_style_index_0_id_5e9364e6_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_parent_vue_vue_type_style_index_0_id_5e9364e6_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_parent_vue_vue_type_style_index_0_id_5e9364e6_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/student/fee/fee-detail.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/student/fee/fee-detail.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fee_detail_vue_vue_type_template_id_39d1cb98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fee-detail.vue?vue&type=template&id=39d1cb98& */ "./resources/js/views/student/fee/fee-detail.vue?vue&type=template&id=39d1cb98&");
/* harmony import */ var _fee_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fee-detail.vue?vue&type=script&lang=js& */ "./resources/js/views/student/fee/fee-detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _fee_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fee_detail_vue_vue_type_template_id_39d1cb98___WEBPACK_IMPORTED_MODULE_0__.render,
  _fee_detail_vue_vue_type_template_id_39d1cb98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/student/fee/fee-detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/student/fee/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/student/fee/index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_b9b42674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b9b42674& */ "./resources/js/views/student/fee/index.vue?vue&type=template&id=b9b42674&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/student/fee/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_b9b42674_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=b9b42674&lang=css& */ "./resources/js/views/student/fee/index.vue?vue&type=style&index=0&id=b9b42674&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b9b42674___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_b9b42674___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/student/fee/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/student/fee/payment-parent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/student/fee/payment-parent.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payment_parent_vue_vue_type_template_id_5e9364e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-parent.vue?vue&type=template&id=5e9364e6& */ "./resources/js/views/student/fee/payment-parent.vue?vue&type=template&id=5e9364e6&");
/* harmony import */ var _payment_parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-parent.vue?vue&type=script&lang=js& */ "./resources/js/views/student/fee/payment-parent.vue?vue&type=script&lang=js&");
/* harmony import */ var _payment_parent_vue_vue_type_style_index_0_id_5e9364e6_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css& */ "./resources/js/views/student/fee/payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _payment_parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_parent_vue_vue_type_template_id_5e9364e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _payment_parent_vue_vue_type_template_id_5e9364e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/student/fee/payment-parent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/student/fee/payment.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/student/fee/payment.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payment_vue_vue_type_template_id_046e14fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.vue?vue&type=template&id=046e14fa& */ "./resources/js/views/student/fee/payment.vue?vue&type=template&id=046e14fa&");
/* harmony import */ var _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.vue?vue&type=script&lang=js& */ "./resources/js/views/student/fee/payment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_vue_vue_type_template_id_046e14fa___WEBPACK_IMPORTED_MODULE_0__.render,
  _payment_vue_vue_type_template_id_046e14fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/student/fee/payment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/student/summary.vue":
/*!************************************************!*\
  !*** ./resources/js/views/student/summary.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _summary_vue_vue_type_template_id_67e4e623___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary.vue?vue&type=template&id=67e4e623& */ "./resources/js/views/student/summary.vue?vue&type=template&id=67e4e623&");
/* harmony import */ var _summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary.vue?vue&type=script&lang=js& */ "./resources/js/views/student/summary.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _summary_vue_vue_type_template_id_67e4e623___WEBPACK_IMPORTED_MODULE_0__.render,
  _summary_vue_vue_type_template_id_67e4e623___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/student/summary.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/student/fee/fee-detail.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/student/fee/fee-detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./fee-detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/fee-detail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/student/fee/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/student/fee/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/student/fee/payment-parent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/student/fee/payment-parent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment-parent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/student/fee/payment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/student/fee/payment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/student/summary.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/student/summary.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/summary.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/student/fee/fee-detail.vue?vue&type=template&id=39d1cb98&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/student/fee/fee-detail.vue?vue&type=template&id=39d1cb98& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_detail_vue_vue_type_template_id_39d1cb98___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_detail_vue_vue_type_template_id_39d1cb98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_detail_vue_vue_type_template_id_39d1cb98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./fee-detail.vue?vue&type=template&id=39d1cb98& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/fee-detail.vue?vue&type=template&id=39d1cb98&");


/***/ }),

/***/ "./resources/js/views/student/fee/index.vue?vue&type=template&id=b9b42674&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/student/fee/index.vue?vue&type=template&id=b9b42674& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b9b42674___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b9b42674___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b9b42674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=b9b42674& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=template&id=b9b42674&");


/***/ }),

/***/ "./resources/js/views/student/fee/payment-parent.vue?vue&type=template&id=5e9364e6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/student/fee/payment-parent.vue?vue&type=template&id=5e9364e6& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_parent_vue_vue_type_template_id_5e9364e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_parent_vue_vue_type_template_id_5e9364e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_parent_vue_vue_type_template_id_5e9364e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment-parent.vue?vue&type=template&id=5e9364e6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=template&id=5e9364e6&");


/***/ }),

/***/ "./resources/js/views/student/fee/payment.vue?vue&type=template&id=046e14fa&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/student/fee/payment.vue?vue&type=template&id=046e14fa& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_046e14fa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_046e14fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_046e14fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment.vue?vue&type=template&id=046e14fa& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment.vue?vue&type=template&id=046e14fa&");


/***/ }),

/***/ "./resources/js/views/student/summary.vue?vue&type=template&id=67e4e623&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/student/summary.vue?vue&type=template&id=67e4e623& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_summary_vue_vue_type_template_id_67e4e623___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_summary_vue_vue_type_template_id_67e4e623___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_summary_vue_vue_type_template_id_67e4e623___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./summary.vue?vue&type=template&id=67e4e623& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/summary.vue?vue&type=template&id=67e4e623&");


/***/ }),

/***/ "./resources/js/views/student/fee/index.vue?vue&type=style&index=0&id=b9b42674&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/student/fee/index.vue?vue&type=style&index=0&id=b9b42674&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b9b42674_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=b9b42674&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/index.vue?vue&type=style&index=0&id=b9b42674&lang=css&");


/***/ }),

/***/ "./resources/js/views/student/fee/payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/student/fee/payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_parent_vue_vue_type_style_index_0_id_5e9364e6_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/fee/payment-parent.vue?vue&type=style&index=0&id=5e9364e6&lang=css&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=245191330a342017