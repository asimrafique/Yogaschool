"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/finance/fee/allocation/show"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ['iuuid'],
  data: function data() {
    return {
      feeInstallmentForm: new Form({
        title: '',
        due_date: '',
        late_fee_applicable: '',
        late_fee_frequency: '',
        late_fee: '',
        fee_heads: [],
        selected_transport_fee: null,
        transport_fee_id: ''
      }),
      fee_group: {},
      paid_installment: 0,
      transport_fees: [],
      late_fee_frequencies: []
    };
  },
  mounted: function mounted() {
    this.getPreRequisite();
    this.getInstallment();
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/fee/installment/pre-requisite').then(function (response) {
        _this.late_fee_frequencies = response.late_fee_frequencies;
        _this.transport_fees = response.transport_fees;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getFeeName: function getFeeName(index, fee_id) {
      return index + '_' + fee_id + '_fee';
    },
    getTransportFeeName: function getTransportFeeName(index) {
      return index + '_transport_fee';
    },
    getInstallment: function getInstallment() {
      var _this2 = this;
      var loader = this.$loading.show();
      axios.get('/api/fee/installment/' + this.iuuid).then(function (response) {
        _this2.feeInstallmentForm.fee_heads = [];
        _this2.feeInstallmentForm.title = response.title;
        _this2.feeInstallmentForm.due_date = response.due_date;
        _this2.feeInstallmentForm.late_fee_applicable = response.late_fee_applicable;
        _this2.feeInstallmentForm.late_fee_frequency = response.late_fee_frequency;
        _this2.feeInstallmentForm.late_fee = response.late_fee;
        _this2.feeInstallmentForm.transport_fee_id = response.transport_fee_id;
        _this2.feeInstallmentForm.selected_transport_fee = response.transport_fee_id ? {
          id: response.transport_fee_id,
          name: response.transport_fee.name
        } : null;
        _this2.paid_installment = response.paid_installment;
        _this2.fee_group = response.fee_allocation_group.fee_group;
        response.fee_installment_details.forEach(function (fee_installment_detail) {
          _this2.feeInstallmentForm.fee_heads.push({
            id: fee_installment_detail.fee_head_id,
            amount: fee_installment_detail.amount,
            is_optional: fee_installment_detail.is_optional,
            name: fee_installment_detail.fee_head.name
          });
        });
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
      this.$emit('loaded');
    },
    submit: function submit() {
      var _this3 = this;
      var loader = this.$loading.show();
      this.feeInstallmentForm.patch('/api/fee/installment/' + this.iuuid).then(function (response) {
        toastr.success(response.message);
        _this3.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onTransportFeeSelect: function onTransportFeeSelect(selectedOption, id) {
      this.feeInstallmentForm.transport_fee_id = selectedOption.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fee_installment_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fee-installment-form */ "./resources/js/views/finance/fee/allocation/fee-installment-form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    feeInstallmentForm: _fee_installment_form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      uuid: this.$route.params.uuid,
      fee_allocation: {
        batch: {},
        course: {},
        fee_installments: []
      },
      transport_circles: [],
      transport_fee_details: [],
      fee_concession_details: [],
      fee_concessions: [],
      transport_circle_id: '',
      selected_transport_circle: null,
      fee_concession_id: '',
      selected_fee_concession: null,
      fee: {
        groups: []
      },
      iuuid: '',
      showEditModal: false
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-fee-allocation')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getPreRequisite();
    this.getFeeAllocation();
  },
  methods: {
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/fee/allocation/show/pre-requisite').then(function (response) {
        _this.transport_circles = response.transport_circles;
        _this.fee_concessions = response.fee_concessions;
        _this.transport_fee_details = response.transport_fee_details;
        _this.fee_concession_details = response.fee_concession_details;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getFeeAllocation: function getFeeAllocation() {
      var _this2 = this;
      var loader = this.$loading.show();
      axios.get('/api/fee/allocation/' + this.uuid).then(function (response) {
        _this2.fee_allocation = response;
        _this2.calculate();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this2.$router.push('/finance/fee/allocation');
      });
    },
    showEditAction: function showEditAction(installment) {
      this.iuuid = installment.uuid;
      this.showEditModal = true;
    },
    calculate: function calculate() {
      var _this3 = this;
      this.fee = {
        groups: []
      };
      this.fee_allocation.fee_allocation_groups.forEach(function (fee_allocation_group) {
        var installments = [];
        var heads = [];
        var foots = [];
        heads.push(i18n.finance.fee_installment_title);
        heads.push(i18n.finance.fee_installment_due_date);
        heads.push(i18n.finance.late_fee);
        foots.push(i18n.finance.total);
        foots.push('');
        foots.push('');
        fee_allocation_group.fee_group.fee_heads.forEach(function (fee_head) {
          heads.push(fee_head.name);
        });
        var has_transport = fee_allocation_group.fee_group.options && fee_allocation_group.fee_group.options.has_transport ? true : false;
        if (has_transport) heads.push(i18n.transport.fee);
        heads.push(i18n.finance.installment_total);
        fee_allocation_group.fee_installments.forEach(function (fee_installment) {
          var installment_data = [];
          installment_data.push({
            text: fee_installment.title
          });
          installment_data.push({
            text: _this3.showDate(fee_installment.due_date)
          });
          var late_fee = fee_installment.late_fee_applicable ? _this3.formatCurrency(fee_installment.late_fee) + '/' + _this3.getLateFeeFrequencyName(fee_installment.late_fee_frequency) : '-';
          installment_data.push({
            text: late_fee
          });
          fee_allocation_group.fee_group.fee_heads.forEach(function (fee_head) {
            installment_data.push({
              text: _this3.formatCurrency(_this3.getFee(fee_installment, fee_head.id, 1)),
              actual: _this3.formatCurrency(_this3.getFee(fee_installment, fee_head.id, 0)),
              is_concession: _this3.fee_concession_id ? true : false,
              is_optional: _this3.isFeeHeadOptional(fee_installment, fee_head.id)
            });
          });
          if (has_transport) installment_data.push({
            text: _this3.getTransportFee(fee_allocation_group, fee_installment.id)
          });
          installment_data.push({
            text: _this3.formatCurrency(_this3.getInstallmentTotal(fee_allocation_group, fee_installment))
          });
          installments.push({
            uuid: fee_installment.uuid,
            data: installment_data
          });
        });
        fee_allocation_group.fee_group.fee_heads.forEach(function (fee_head) {
          foots.push(_this3.formatCurrency(_this3.getTotalFee(fee_allocation_group, fee_head.id)));
        });
        if (has_transport) foots.push(_this3.getTransportFeeTotal(fee_allocation_group));
        foots.push(_this3.formatCurrency(_this3.getInstallmentGrandTotal(fee_allocation_group)));
        var group = {
          name: fee_allocation_group.fee_group.name,
          heads: heads,
          installments: installments,
          foots: foots
        };
        _this3.fee.groups.push(group);
      });
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
    getLateFeeFrequencyName: function getLateFeeFrequencyName(frequency) {
      return helper.getLateFeeFrequencyName(frequency);
    },
    onTransportCircleSelect: function onTransportCircleSelect(selectedOption) {
      this.transport_circle_id = selectedOption.id;
      this.calculate();
    },
    onTransportCircleRemove: function onTransportCircleRemove() {
      this.transport_circle_id = '';
      this.calculate();
    },
    onFeeConcessionSelect: function onFeeConcessionSelect(selectedOption) {
      this.fee_concession_id = selectedOption.id;
      this.calculate();
    },
    onFeeConcessionRemove: function onFeeConcessionRemove() {
      this.fee_concession_id = '';
      this.calculate();
    },
    isFeeHeadOptional: function isFeeHeadOptional(fee_installment, fee_head_id) {
      var installment = fee_installment.fee_installment_details.find(function (o) {
        return o.fee_head_id == fee_head_id;
      });
      return installment && installment.is_optional ? true : false;
    },
    getFee: function getFee(fee_installment, fee_head_id, fee_con) {
      var _this4 = this;
      var installment = fee_installment.fee_installment_details.find(function (o) {
        return o.fee_head_id == fee_head_id;
      });
      var amount = installment ? installment.amount : 0;
      var discount = 0;
      if (this.fee_concession_id && fee_con) {
        var concession = this.fee_concession_details.find(function (o) {
          return o.fee_concession_id == _this4.fee_concession_id && o.fee_head_id == fee_head_id;
        });
        discount = concession ? concession.type == 'percent' ? amount * (concession.amount / 100) : concession.amount : 0;
      }
      amount -= discount;
      if (amount < 0) amount = 0;
      return amount;
    },
    getTotalFee: function getTotalFee(fee_allocation_group, fee_head_id) {
      var _this5 = this;
      var total = 0;
      fee_allocation_group.fee_installments.forEach(function (fee_installment) {
        total += _this5.getFee(fee_installment, fee_head_id, 1);
      });
      return total;
    },
    getInstallmentTotal: function getInstallmentTotal(fee_allocation_group, fee_installment) {
      var _this6 = this;
      var total = 0;
      fee_allocation_group.fee_group.fee_heads.forEach(function (fee_head) {
        total += _this6.getFee(fee_installment, fee_head.id, 1);
      });
      total += this.getTransportFeeAmount(fee_allocation_group, fee_installment.id);
      return total;
    },
    getInstallmentGrandTotal: function getInstallmentGrandTotal(fee_allocation_group) {
      var _this7 = this;
      var total = 0;
      fee_allocation_group.fee_installments.forEach(function (fee_installment) {
        total += _this7.getInstallmentTotal(fee_allocation_group, fee_installment);
      });
      return total;
    },
    getTransportFeeTotal: function getTransportFeeTotal(fee_allocation_group) {
      var _this8 = this;
      var total = 0;
      fee_allocation_group.fee_installments.forEach(function (fee_installment) {
        total += _this8.getTransportFeeAmount(fee_allocation_group, fee_installment.id);
      });
      return total ? this.formatCurrency(total) : '-';
    },
    getTransportFee: function getTransportFee(fee_allocation_group, fee_installment_id) {
      var fee = this.getTransportFeeAmount(fee_allocation_group, fee_installment_id);
      return fee ? this.formatCurrency(fee) : '-';
    },
    getTransportFeeAmount: function getTransportFeeAmount(fee_allocation_group, fee_installment_id) {
      var _this9 = this;
      if (!fee_allocation_group.fee_group.options || fee_allocation_group.fee_group.options && !fee_allocation_group.fee_group.options.has_transport) return 0;
      var installment = fee_allocation_group.fee_installments.find(function (o) {
        return o.id == fee_installment_id;
      });
      if (!installment || installment && !installment.transport_fee_id) return 0;
      var transport_fee_detail = this.transport_fee_details.find(function (o) {
        return o.transport_fee_id == installment.transport_fee_id && o.transport_circle_id == _this9.transport_circle_id;
      });
      return transport_fee_detail ? transport_fee_detail.amount : 0;
    },
    showDate: function showDate(date) {
      return helper.formatDate(date);
    },
    print: function print() {
      var loader = this.$loading.show();
      axios.post('/api/fee/allocation/' + this.uuid + '/print', {
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
      var _this10 = this;
      var loader = this.$loading.show();
      axios.post('/api/fee/allocation/' + this.uuid + '/pdf', {
        fee: this.fee
      }).then(function (response) {
        loader.hide();
        window.open('/download/report/' + response + '?token=' + _this10.authToken);
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=template&id=64f3ef61&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=template&id=64f3ef61& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.feeInstallmentForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
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
  }, [_vm._v(_vm._s(_vm.trans("finance.fee_installment_title")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.feeInstallmentForm.title,
      expression: "feeInstallmentForm.title"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "title",
      placeholder: _vm.trans("finance.fee_installment_title"),
      disabled: _vm.paid_installment > 0
    },
    domProps: {
      value: _vm.feeInstallmentForm.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.feeInstallmentForm, "title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.feeInstallmentForm,
      "prop-name": "title"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.fee_installment_due_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("finance.fee_installment_due_date"),
      name: "due_date"
    },
    on: {
      selected: function selected($event) {
        return _vm.feeInstallmentForm.errors.clear("due_date");
      }
    },
    model: {
      value: _vm.feeInstallmentForm.due_date,
      callback: function callback($$v) {
        _vm.$set(_vm.feeInstallmentForm, "due_date", $$v);
      },
      expression: "feeInstallmentForm.due_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.feeInstallmentForm,
      "prop-name": "due_date"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.late_fee_applicable")))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("switches", {
    staticClass: "m-l-20",
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.feeInstallmentForm.late_fee_applicable,
      callback: function callback($$v) {
        _vm.$set(_vm.feeInstallmentForm, "late_fee_applicable", $$v);
      },
      expression: "feeInstallmentForm.late_fee_applicable"
    }
  })], 1)]), _vm._v(" "), _vm.feeInstallmentForm.late_fee_applicable ? _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.late_fee_frequency")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.feeInstallmentForm.late_fee_frequency,
      expression: "feeInstallmentForm.late_fee_frequency"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "late_fee_frequency"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.feeInstallmentForm, "late_fee_frequency", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.late_fee_frequencies, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.feeInstallmentForm,
      "prop-name": "late_fee_frequency"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.feeInstallmentForm.late_fee_applicable ? _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.late_fee")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.feeInstallmentForm.late_fee,
      expression: "feeInstallmentForm.late_fee"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "late_fee",
      placeholder: _vm.trans("finance.late_fee")
    },
    domProps: {
      value: _vm.feeInstallmentForm.late_fee
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.feeInstallmentForm, "late_fee", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.feeInstallmentForm,
      "prop-name": "late_fee"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._l(_vm.feeInstallmentForm.fee_heads, function (fee_head, index) {
    return _c("div", {
      staticClass: "col-12 col-sm-6"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(fee_head.name))]), _vm._v(" "), _c("div", {
      staticClass: "input-group mb-3"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: fee_head.amount,
        expression: "fee_head.amount"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: _vm.getFeeName(index, fee_head.id),
        placeholder: _vm.trans("finance.fee_installment_amount"),
        disabled: _vm.paid_installment > 0
      },
      domProps: {
        value: fee_head.amount
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(fee_head, "amount", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "input-group-append"
    }, [_c("div", {
      staticClass: "input-group-text"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: fee_head.is_optional,
        expression: "fee_head.is_optional"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("finance.fee_is_optional"),
        expression: "trans('finance.fee_is_optional')"
      }],
      attrs: {
        type: "checkbox",
        disabled: _vm.paid_installment > 0
      },
      domProps: {
        checked: Array.isArray(fee_head.is_optional) ? _vm._i(fee_head.is_optional, null) > -1 : fee_head.is_optional
      },
      on: {
        change: function change($event) {
          var $$a = fee_head.is_optional,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(fee_head, "is_optional", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(fee_head, "is_optional", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(fee_head, "is_optional", $$c);
          }
        }
      }
    })])])]), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.feeInstallmentForm,
        "prop-name": _vm.getFeeName(index, fee_head.id)
      }
    })], 1)]);
  }), _vm._v(" "), _vm.fee_group.options && _vm.fee_group.options.has_transport ? _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.transport")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "transport_fee",
      id: "transport_fee",
      options: _vm.transport_fees,
      placeholder: _vm.trans("general.select_one"),
      disabled: _vm.paid_installment > 0
    },
    on: {
      select: _vm.onTransportFeeSelect,
      close: function close($event) {},
      remove: function remove($event) {}
    },
    model: {
      value: _vm.feeInstallmentForm.selected_transport_fee,
      callback: function callback($$v) {
        _vm.$set(_vm.feeInstallmentForm, "selected_transport_fee", $$v);
      },
      expression: "feeInstallmentForm.selected_transport_fee"
    }
  }, [!_vm.transport_fees.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.feeInstallmentForm,
      "prop-name": "transport_fee"
    }
  })], 1)]) : _vm._e()], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=template&id=e2ea0942&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=template&id=e2ea0942& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("finance.fee_allocation")) + " \n                    "), _vm.fee_allocation.course ? [_vm._v(_vm._s(_vm.fee_allocation.course.name))] : _vm._e(), _vm._v(" "), !_vm.fee_allocation.course && _vm.fee_allocation.batch ? [_vm._v(_vm._s(_vm.fee_allocation.batch.course.name + " " + _vm.fee_allocation.batch.name))] : _vm._e(), _vm._v(" "), _vm.fee_allocation.paid_count ? _c("i", {
    staticClass: "fas fa-lock fa-lg"
  }) : _vm._e()], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/finance/fee/allocation");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("finance.fee_allocation")))])]), _vm._v(" "), _c("div", {
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
  }), _vm._v(" " + _vm._s(_vm.trans("general.generate_pdf")))])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card p-4"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.circle")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "transport_circle_id",
      id: "transport_circle_id",
      options: _vm.transport_circles,
      placeholder: _vm.trans("general.select_one")
    },
    on: {
      select: _vm.onTransportCircleSelect,
      close: function close($event) {},
      remove: _vm.onTransportCircleRemove
    },
    model: {
      value: _vm.selected_transport_circle,
      callback: function callback($$v) {
        _vm.selected_transport_circle = $$v;
      },
      expression: "selected_transport_circle"
    }
  }, [!_vm.transport_circles.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.fee_concession")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "fee_concession_id",
      id: "fee_concession_id",
      options: _vm.fee_concessions,
      placeholder: _vm.trans("general.select_one")
    },
    on: {
      select: _vm.onFeeConcessionSelect,
      close: function close($event) {},
      remove: _vm.onFeeConcessionRemove
    },
    model: {
      value: _vm.selected_fee_concession,
      callback: function callback($$v) {
        _vm.selected_fee_concession = $$v;
      },
      expression: "selected_fee_concession"
    }
  }, [!_vm.fee_concessions.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()])], 1)])])])]), _vm._v(" "), _vm._l(_vm.fee.groups, function (group) {
    return _c("div", {
      staticClass: "card"
    }, [_c("div", {
      staticClass: "card-body"
    }, [_c("h4", {
      staticClass: "card-title px-4"
    }, [_vm._v(_vm._s(group.name))]), _vm._v(" "), _c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-sm"
    }, [_c("thead", [_c("tr", [_vm._l(group.heads, function (head) {
      return _c("th", [_vm._v(_vm._s(head))]);
    }), _vm._v(" "), _c("th")], 2)]), _vm._v(" "), _c("tbody", [_vm._l(group.installments, function (installment) {
      return _c("tr", [_vm._l(installment.data, function (detail) {
        return _c("td", [detail.is_concession && detail.text != detail.actual ? [_c("span", {
          staticStyle: {
            "text-decoration": "line-through"
          }
        }, [_vm._v(_vm._s(detail.actual))]), _vm._v(" " + _vm._s(detail.text))] : [_vm._v(_vm._s(detail.text))], _vm._v(" "), detail.is_optional ? [_c("small", [_vm._v("(" + _vm._s(_vm.trans("finance.optional")) + ")")])] : _vm._e()], 2);
      }), _vm._v(" "), _c("td", [_vm.hasPermission("edit-fee-allocation") ? _c("button", {
        directives: [{
          name: "tooltip",
          rawName: "v-tooltip",
          value: _vm.trans("finance.edit_fee_installment"),
          expression: "trans('finance.edit_fee_installment')"
        }],
        staticClass: "btn btn-info btn-sm",
        on: {
          click: function click($event) {
            $event.preventDefault();
            return _vm.showEditAction(installment);
          }
        }
      }, [_c("i", {
        staticClass: "fas fa-edit"
      })]) : _vm._e()])], 2);
    }), _vm._v(" "), _c("tr", [_vm._l(group.foots, function (foot) {
      return _c("td", [_vm._v(_vm._s(foot))]);
    }), _vm._v(" "), _c("td")], 2)], 2)])])])]);
  })], 2), _vm._v(" "), _vm.showEditModal ? _c("transition", {
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
    return [_vm._v("\n                            " + _vm._s(_vm.trans("finance.edit_fee_installment")) + "\n                            "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          _vm.showEditModal = false;
        }
      }
    }, [_vm._v("x")])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("fee-installment-form", {
      attrs: {
        iuuid: _vm.iuuid
      },
      on: {
        completed: _vm.getFeeAllocation,
        close: function close($event) {
          _vm.showEditModal = false;
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "clearfix"
    })];
  })], 2)])])])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=style&index=0&id=e2ea0942&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=style&index=0&id=e2ea0942&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/finance/fee/allocation/show.vue"],"names":[],"mappings":";AA6ZA;IACA,aAAA;AACA","sourcesContent":["<template>\r\n    <div>\r\n        <div class=\"page-titles\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <h3 class=\"text-themecolor\">{{trans('finance.fee_allocation')}} \r\n                        <template v-if=\"fee_allocation.course\">{{fee_allocation.course.name}}</template>\r\n                        <template v-if=\"!fee_allocation.course && fee_allocation.batch\">{{fee_allocation.batch.course.name+' '+fee_allocation.batch.name}}</template>\r\n                        <i class=\"fas fa-lock fa-lg\" v-if=\"fee_allocation.paid_count\"></i>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"action-buttons pull-right\">\r\n                        <button class=\"btn btn-info btn-sm\" @click=\"$router.push('/finance/fee/allocation')\"><i class=\"fas fa-list\"></i> <span class=\"d-none d-sm-inline\">{{trans('finance.fee_allocation')}}</span></button>\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-info btn-sm dropdown-toggle no-caret \" role=\"menu\" id=\"moreOption\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" v-tooltip=\"trans('general.more_option')\">\r\n                                <i class=\"fas fa-ellipsis-h\"></i> <span class=\"d-none d-sm-inline\"></span>\r\n                            </button>\r\n                            <div :class=\"['dropdown-menu',getConfig('direction') == 'ltr' ? 'dropdown-menu-right' : '']\" aria-labelledby=\"moreOption\">\r\n                                <button class=\"dropdown-item custom-dropdown\" @click=\"print\"><i class=\"fas fa-print\"></i> {{trans('general.print')}}</button>\r\n                                <button class=\"dropdown-item custom-dropdown\" @click=\"pdf\"><i class=\"fas fa-file-pdf\"></i> {{trans('general.generate_pdf')}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"card p-4\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('transport.circle')}}</label>\r\n                                <v-select label=\"name\" v-model=\"selected_transport_circle\" name=\"transport_circle_id\" id=\"transport_circle_id\" :options=\"transport_circles\" :placeholder=\"trans('general.select_one')\" @select=\"onTransportCircleSelect\" @close=\"\" @remove=\"onTransportCircleRemove\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!transport_circles.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('finance.fee_concession')}}</label>\r\n                                <v-select label=\"name\" v-model=\"selected_fee_concession\" name=\"fee_concession_id\" id=\"fee_concession_id\" :options=\"fee_concessions\" :placeholder=\"trans('general.select_one')\" @select=\"onFeeConcessionSelect\" @close=\"\" @remove=\"onFeeConcessionRemove\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!fee_concessions.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\" v-for=\"group in fee.groups\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title px-4\">{{group.name}}</h4>\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-sm\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th v-for=\"head in group.heads\">{{head}}</th>\r\n                                    <th></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr v-for=\"installment in group.installments\">\r\n                                    <td v-for=\"detail in installment.data\">\r\n                                        <template v-if=\"detail.is_concession && detail.text != detail.actual\"><span style=\"text-decoration: line-through;\">{{detail.actual}}</span> {{detail.text}}</template>\r\n                                        <template v-else>{{detail.text}}</template>\r\n\r\n                                        <template v-if=\"detail.is_optional\"><small>({{trans('finance.optional')}})</small></template>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button class=\"btn btn-info btn-sm\" v-if=\"hasPermission('edit-fee-allocation')\" v-tooltip=\"trans('finance.edit_fee_installment')\" @click.prevent=\"showEditAction(installment)\"><i class=\"fas fa-edit\"></i></button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td v-for=\"foot in group.foots\">{{foot}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <transition name=\"modal\" v-if=\"showEditModal\">\r\n            <div class=\"modal-mask\">\r\n                <div class=\"modal-wrapper\">\r\n                    <div class=\"modal-container modal-lg\">\r\n                        <div class=\"modal-header\">\r\n                            <slot name=\"header\">\r\n                                {{trans('finance.edit_fee_installment')}}\r\n                                <span class=\"float-right pointer\" @click=\"showEditModal = false\">x</span>\r\n                            </slot>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <slot name=\"body\">\r\n                                <fee-installment-form :iuuid=\"iuuid\" @completed=\"getFeeAllocation\" @close=\"showEditModal = false\"></fee-installment-form>\r\n                                <div class=\"clearfix\"></div>\r\n                            </slot>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </transition>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import feeInstallmentForm from './fee-installment-form'\r\n\r\n    export default {\r\n        components : { feeInstallmentForm },\r\n        data() {\r\n            return {\r\n                uuid:this.$route.params.uuid,\r\n                fee_allocation: {\r\n                \tbatch: {\r\n\r\n                \t},\r\n                \tcourse: {\r\n\r\n                \t},\r\n                \tfee_installments: []\r\n                },\r\n                transport_circles: [],\r\n                transport_fee_details: [],\r\n                fee_concession_details: [],\r\n                fee_concessions: [],\r\n                transport_circle_id: '',\r\n                selected_transport_circle: null,\r\n                fee_concession_id: '',\r\n                selected_fee_concession: null,\r\n                fee: {\r\n                    groups: []\r\n                },\r\n                iuuid: '',\r\n                showEditModal: false\r\n            }\r\n        },\r\n        mounted(){\r\n            if(!helper.hasPermission('list-fee-allocation')){\r\n                helper.notAccessibleMsg();\r\n                this.$router.push('/dashboard');\r\n            }\r\n\r\n            this.getPreRequisite();\r\n\r\n            this.getFeeAllocation();\r\n        },\r\n        methods: {\r\n            getConfig(config){\r\n                return helper.getConfig(config);\r\n            },\r\n            hasPermission(permission){\r\n                return helper.hasPermission(permission);\r\n            },\r\n            getPreRequisite(){\r\n                let loader = this.$loading.show();\r\n                axios.get('/api/fee/allocation/show/pre-requisite')\r\n                    .then(response => {\r\n                        this.transport_circles = response.transport_circles;\r\n                        this.fee_concessions = response.fee_concessions;\r\n                        this.transport_fee_details = response.transport_fee_details;\r\n                        this.fee_concession_details = response.fee_concession_details;\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n        \tgetFeeAllocation(){\r\n                let loader = this.$loading.show();\r\n        \t\taxios.get('/api/fee/allocation/'+this.uuid)\r\n        \t\t\t.then(response => {\r\n        \t\t\t\tthis.fee_allocation = response;\r\n                        this.calculate();\r\n                        loader.hide();\r\n        \t\t\t})\r\n        \t\t\t.catch(error => {\r\n                        loader.hide();\r\n        \t\t\t\thelper.showErrorMsg(error);\r\n        \t\t\t\tthis.$router.push('/finance/fee/allocation');\r\n        \t\t\t})\r\n        \t},\r\n            showEditAction(installment){\r\n                this.iuuid = installment.uuid;\r\n                this.showEditModal = true;\r\n            },\r\n            calculate(){\r\n                this.fee = {\r\n                    groups: []\r\n                };\r\n                this.fee_allocation.fee_allocation_groups.forEach(fee_allocation_group => {\r\n                    let installments = [];\r\n                    let heads = [];\r\n                    let foots = [];\r\n                    heads.push(i18n.finance.fee_installment_title);\r\n                    heads.push(i18n.finance.fee_installment_due_date);\r\n                    heads.push(i18n.finance.late_fee);\r\n\r\n                    foots.push(i18n.finance.total);\r\n                    foots.push('');\r\n                    foots.push('');\r\n\r\n                    fee_allocation_group.fee_group.fee_heads.forEach(fee_head => {\r\n                        heads.push(fee_head.name);\r\n                    });\r\n\r\n                    let has_transport = (fee_allocation_group.fee_group.options && fee_allocation_group.fee_group.options.has_transport) ? true : false;\r\n\r\n                    if (has_transport)\r\n                        heads.push(i18n.transport.fee);\r\n\r\n                    heads.push(i18n.finance.installment_total);\r\n\r\n                    fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                        let installment_data = [];\r\n                        installment_data.push({\r\n                            text: fee_installment.title\r\n                        });\r\n                        installment_data.push({\r\n                            text: this.showDate(fee_installment.due_date)\r\n                        });\r\n\r\n                        let late_fee = (fee_installment.late_fee_applicable) ? (this.formatCurrency(fee_installment.late_fee)+'/'+this.getLateFeeFrequencyName(fee_installment.late_fee_frequency)) : '-';\r\n\r\n                        installment_data.push({\r\n                            text: late_fee\r\n                        });\r\n\r\n                        fee_allocation_group.fee_group.fee_heads.forEach(fee_head => {\r\n                            installment_data.push({\r\n                                text: this.formatCurrency(this.getFee(fee_installment, fee_head.id, 1)),\r\n                                actual: this.formatCurrency(this.getFee(fee_installment, fee_head.id, 0)),\r\n                                is_concession: this.fee_concession_id ? true : false,\r\n                                is_optional: this.isFeeHeadOptional(fee_installment, fee_head.id)\r\n                            });\r\n                        });\r\n\r\n                        if (has_transport)\r\n                            installment_data.push({\r\n                                text: this.getTransportFee(fee_allocation_group,fee_installment.id)\r\n                            });\r\n\r\n                        installment_data.push({\r\n                            text: this.formatCurrency(this.getInstallmentTotal(fee_allocation_group, fee_installment))\r\n                        });\r\n\r\n                        installments.push({\r\n                            uuid: fee_installment.uuid,\r\n                            data: installment_data\r\n                        });\r\n                    });\r\n\r\n                    fee_allocation_group.fee_group.fee_heads.forEach(fee_head => {\r\n                        foots.push(this.formatCurrency(this.getTotalFee(fee_allocation_group, fee_head.id)));\r\n                    });\r\n                    \r\n                    if (has_transport)\r\n                        foots.push(this.getTransportFeeTotal(fee_allocation_group));\r\n                    \r\n                    foots.push(this.formatCurrency(this.getInstallmentGrandTotal(fee_allocation_group)));\r\n\r\n                    let group = {\r\n                        name: fee_allocation_group.fee_group.name,\r\n                        heads: heads,\r\n                        installments: installments,\r\n                        foots: foots,\r\n                    }\r\n                    this.fee.groups.push(group);\r\n                });\r\n            },\r\n            formatCurrency(amount){\r\n                return helper.formatCurrency(amount);\r\n            },\r\n            getLateFeeFrequencyName(frequency){\r\n                return helper.getLateFeeFrequencyName(frequency);\r\n            },\r\n            onTransportCircleSelect(selectedOption){\r\n                this.transport_circle_id = selectedOption.id;\r\n                this.calculate();\r\n            },\r\n            onTransportCircleRemove(){\r\n                this.transport_circle_id = '';\r\n                this.calculate();\r\n            },\r\n            onFeeConcessionSelect(selectedOption){\r\n                this.fee_concession_id = selectedOption.id;\r\n                this.calculate();\r\n            },\r\n            onFeeConcessionRemove(){\r\n                this.fee_concession_id = '';\r\n                this.calculate();\r\n            },\r\n            isFeeHeadOptional(fee_installment, fee_head_id){\r\n                let installment = fee_installment.fee_installment_details.find(o => o.fee_head_id == fee_head_id);\r\n                return (installment && installment.is_optional) ? true : false;\r\n            },\r\n            getFee(fee_installment, fee_head_id, fee_con){\r\n                let installment = fee_installment.fee_installment_details.find(o => o.fee_head_id == fee_head_id);\r\n                let amount = (installment) ? installment.amount : 0;\r\n                let discount = 0;\r\n\r\n                if (this.fee_concession_id && fee_con) {\r\n                    let concession = this.fee_concession_details.find(o => o.fee_concession_id == this.fee_concession_id && o.fee_head_id == fee_head_id);\r\n                    discount = (concession) ? (concession.type == 'percent' ? (amount * (concession.amount/100)) : concession.amount) : 0;\r\n                }\r\n\r\n                amount -= discount;\r\n\r\n                if (amount < 0)\r\n                    amount = 0;\r\n\r\n                return amount;\r\n            },\r\n            getTotalFee(fee_allocation_group, fee_head_id){\r\n                let total = 0;\r\n                fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                    total += this.getFee(fee_installment, fee_head_id, 1);\r\n                });\r\n                return total;\r\n            },\r\n            getInstallmentTotal(fee_allocation_group, fee_installment) {\r\n                let total = 0;\r\n                fee_allocation_group.fee_group.fee_heads.forEach(fee_head => {\r\n                    total += this.getFee(fee_installment, fee_head.id, 1);\r\n                });\r\n                total += this.getTransportFeeAmount(fee_allocation_group, fee_installment.id);\r\n                return total;\r\n            },\r\n            getInstallmentGrandTotal(fee_allocation_group){\r\n                let total = 0;\r\n                fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                    total += this.getInstallmentTotal(fee_allocation_group, fee_installment);\r\n                });\r\n                return total;\r\n            },\r\n            getTransportFeeTotal(fee_allocation_group){\r\n                let total = 0;\r\n                fee_allocation_group.fee_installments.forEach(fee_installment => {\r\n                    total += this.getTransportFeeAmount(fee_allocation_group, fee_installment.id);\r\n                });\r\n                return total ? this.formatCurrency(total) : '-';\r\n            },\r\n            getTransportFee(fee_allocation_group,fee_installment_id){\r\n                let fee = this.getTransportFeeAmount(fee_allocation_group, fee_installment_id);\r\n                return fee ? this.formatCurrency(fee) : '-';\r\n            },\r\n            getTransportFeeAmount(fee_allocation_group, fee_installment_id){\r\n                if (!fee_allocation_group.fee_group.options || (fee_allocation_group.fee_group.options && !fee_allocation_group.fee_group.options.has_transport))\r\n                    return 0;\r\n\r\n                let installment = fee_allocation_group.fee_installments.find(o => o.id == fee_installment_id);\r\n\r\n                if (!installment || (installment && !installment.transport_fee_id))\r\n                    return 0;\r\n\r\n                let transport_fee_detail = this.transport_fee_details.find(o => o.transport_fee_id == installment.transport_fee_id && o.transport_circle_id == this.transport_circle_id);\r\n\r\n                return (transport_fee_detail) ? transport_fee_detail.amount : 0;\r\n            },\r\n            showDate(date){\r\n                return helper.formatDate(date);\r\n            },\r\n            print(){\r\n                let loader = this.$loading.show();\r\n                axios.post('/api/fee/allocation/'+this.uuid+'/print',{fee: this.fee})\r\n                    .then(response => {\r\n                        let print = window.open(\"/print\");\r\n                        loader.hide();\r\n                        print.document.write(response);\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            pdf(){\r\n                let loader = this.$loading.show();\r\n                axios.post('/api/fee/allocation/'+this.uuid+'/pdf',{fee: this.fee})\r\n                    .then(response => {\r\n                        loader.hide();\r\n                        window.open('/download/report/'+response+'?token='+this.authToken);\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            }\r\n        },\r\n        filters: {\r\n          moment(date) {\r\n            return helper.formatDate(date);\r\n          },\r\n          momentDateTime(date) {\r\n            return helper.formatDateTime(date);\r\n          }\r\n        },\r\n        computed: {\r\n            authToken(){\r\n                return helper.getAuthToken();\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=style&index=0&id=e2ea0942&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=style&index=0&id=e2ea0942&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_e2ea0942_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=style&index=0&id=e2ea0942&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=style&index=0&id=e2ea0942&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_e2ea0942_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_e2ea0942_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/finance/fee/allocation/fee-installment-form.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/views/finance/fee/allocation/fee-installment-form.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fee_installment_form_vue_vue_type_template_id_64f3ef61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fee-installment-form.vue?vue&type=template&id=64f3ef61& */ "./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=template&id=64f3ef61&");
/* harmony import */ var _fee_installment_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fee-installment-form.vue?vue&type=script&lang=js& */ "./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _fee_installment_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fee_installment_form_vue_vue_type_template_id_64f3ef61___WEBPACK_IMPORTED_MODULE_0__.render,
  _fee_installment_form_vue_vue_type_template_id_64f3ef61___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/finance/fee/allocation/fee-installment-form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/finance/fee/allocation/show.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/finance/fee/allocation/show.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_e2ea0942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=e2ea0942& */ "./resources/js/views/finance/fee/allocation/show.vue?vue&type=template&id=e2ea0942&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/views/finance/fee/allocation/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _show_vue_vue_type_style_index_0_id_e2ea0942_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&id=e2ea0942&lang=css& */ "./resources/js/views/finance/fee/allocation/show.vue?vue&type=style&index=0&id=e2ea0942&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_e2ea0942___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_e2ea0942___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/finance/fee/allocation/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_installment_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./fee-installment-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_installment_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/finance/fee/allocation/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/finance/fee/allocation/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=template&id=64f3ef61&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=template&id=64f3ef61& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_installment_form_vue_vue_type_template_id_64f3ef61___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_installment_form_vue_vue_type_template_id_64f3ef61___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fee_installment_form_vue_vue_type_template_id_64f3ef61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./fee-installment-form.vue?vue&type=template&id=64f3ef61& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/fee-installment-form.vue?vue&type=template&id=64f3ef61&");


/***/ }),

/***/ "./resources/js/views/finance/fee/allocation/show.vue?vue&type=template&id=e2ea0942&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/finance/fee/allocation/show.vue?vue&type=template&id=e2ea0942& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_e2ea0942___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_e2ea0942___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_e2ea0942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=e2ea0942& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=template&id=e2ea0942&");


/***/ }),

/***/ "./resources/js/views/finance/fee/allocation/show.vue?vue&type=style&index=0&id=e2ea0942&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/finance/fee/allocation/show.vue?vue&type=style&index=0&id=e2ea0942&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_e2ea0942_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=style&index=0&id=e2ea0942&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/fee/allocation/show.vue?vue&type=style&index=0&id=e2ea0942&lang=css&");


/***/ })

}]);
//# sourceMappingURL=show.js.map?id=44c796b9429e72db