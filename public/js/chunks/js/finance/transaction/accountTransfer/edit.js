"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/finance/transaction/accountTransfer/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/finance/transaction/account-transfer/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    accountTransferForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      uuid: this.$route.params.uuid
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('edit-account-transfer')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      accountTransferForm: new Form({
        from_account_id: '',
        to_account_id: '',
        payment_method_id: '',
        instrument_number: '',
        instrument_date: '',
        instrument_clearing_date: '',
        instrument_bank_detail: '',
        reference_number: '',
        amount: '',
        date_of_account_transfer: '',
        description: '',
        upload_token: ''
      }),
      accounts: [],
      selected_from_account: null,
      selected_to_account: null,
      payment_methods: [],
      selected_payment_method: null,
      payment_method_details: [],
      payment_method_detail: {},
      module_id: '',
      clearAttachment: true,
      showTransactionCategoryModal: false,
      default_currency: helper.getConfig('default_currency')
    };
  },
  props: ['uuid'],
  mounted: function mounted() {
    if (!helper.hasPermission('create-account-transfer') && !helper.hasPermission('edit-account-transfer')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    if (this.uuid) this.get();else this.accountTransferForm.upload_token = this.$uuid.v4();
    this.getPreRequisite();
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      this.showTransactionCategoryModal = false;
      axios.get('/api/account/transfer/pre-requisite').then(function (response) {
        _this.accounts = response.accounts;
        _this.payment_methods = response.payment_methods;
        _this.payment_method_details = response.payment_method_details;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    proceed: function proceed() {
      if (this.uuid) this.update();else this.store();
    },
    store: function store() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.accountTransferForm.post('/api/account/transfer').then(function (response) {
        toastr.success(response.message);
        _this2.clearAttachment = !_this2.clearAttachment;
        _this2.accountTransferForm.upload_token = _this2.$uuid.v4();
        _this2.selected_from_account = null;
        _this2.selected_to_account = null;
        _this2.selected_payment_method = null;
        _this2.payment_method_detail = null;
        _this2.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    get: function get() {
      var _this3 = this;
      var loader = this.$loading.show();
      axios.get('/api/account/transfer/' + this.uuid).then(function (response) {
        _this3.accountTransferForm.amount = _this3.formatNumber(response.account_transfer.amount);
        _this3.accountTransferForm.date_of_account_transfer = response.account_transfer.date_of_account_transfer;
        _this3.accountTransferForm.description = response.account_transfer.description;
        _this3.accountTransferForm.from_account_id = response.account_transfer.from_account_id;
        _this3.selected_account = response.account_transfer.from_account_id ? {
          id: response.account_transfer.from_account_id,
          name: response.account_transfer.from_account.name
        } : null;
        _this3.accountTransferForm.to_account_id = response.account_transfer.to_account_id;
        _this3.selected_account = response.account_transfer.to_account_id ? {
          id: response.account_transfer.to_account_id,
          name: response.account_transfer.to_account.name
        } : null;
        _this3.accountTransferForm.payment_method_id = response.account_transfer.transaction.payment_method_id;
        _this3.selected_payment_method = response.account_transfer.transaction.payment_method_id ? {
          id: response.account_transfer.transaction.payment_method_id,
          name: response.account_transfer.transaction.payment_method.name
        } : null;
        _this3.accountTransferForm.instrument_number = response.account_transfer.transaction.instrument_number;
        _this3.accountTransferForm.instrument_date = response.account_transfer.transaction.instrument_date;
        _this3.accountTransferForm.instrument_clearing_date = response.account_transfer.transaction.instrument_clearing_date;
        _this3.accountTransferForm.instrument_bank_detail = response.account_transfer.transaction.instrument_bank_detail;
        _this3.accountTransferForm.reference_number = response.account_transfer.transaction.reference_number;
        _this3.accountTransferForm.upload_token = response.account_transfer.upload_token;
        _this3.module_id = response.account_transfer.id;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this3.$router.push('/finance/transaction/account/transfer');
      });
    },
    update: function update() {
      var _this4 = this;
      var loader = this.$loading.show();
      this.accountTransferForm.patch('/api/account/transfer/' + this.uuid).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this4.$router.push('/finance/transaction/account/transfer');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onFromAccountSelect: function onFromAccountSelect(selectedOption) {
      this.accountTransferForm.from_account_id = selectedOption.id;
    },
    onToAccountSelect: function onToAccountSelect(selectedOption) {
      this.accountTransferForm.to_account_id = selectedOption.id;
    },
    onPaymentMethodSelect: function onPaymentMethodSelect(selectedOption) {
      this.accountTransferForm.payment_method_id = selectedOption.id;
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=template&id=0b266ab9&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=template&id=0b266ab9& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("finance.edit_account_transfer")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/finance/transaction/account/transfer");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("finance.account_transfer")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body p-t-20"
  }, [_c("account-transfer-form", {
    attrs: {
      uuid: _vm.uuid
    }
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=template&id=7035c71a&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=template&id=7035c71a& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        return _vm.proceed.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.accountTransferForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.from_account")) + " ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "from_account_id",
      id: "from_account_id",
      options: _vm.accounts,
      placeholder: _vm.trans("finance.select_from_account"),
      disabled: _vm.uuid ? true : false
    },
    on: {
      select: _vm.onFromAccountSelect,
      close: function close($event) {
        return _vm.accountTransferForm.errors.clear("from_account_id");
      },
      remove: function remove($event) {
        _vm.accountTransferForm.from_account_id = "";
      }
    },
    model: {
      value: _vm.selected_from_account,
      callback: function callback($$v) {
        _vm.selected_from_account = $$v;
      },
      expression: "selected_from_account"
    }
  }, [!_vm.accounts.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
      "prop-name": "from_account_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.to_account")) + " ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "to_account_id",
      id: "to_account_id",
      options: _vm.accounts,
      placeholder: _vm.trans("finance.select_to_account"),
      disabled: _vm.uuid ? true : false
    },
    on: {
      select: _vm.onToAccountSelect,
      close: function close($event) {
        return _vm.accountTransferForm.errors.clear("to_account_id");
      },
      remove: function remove($event) {
        _vm.accountTransferForm.to_account_id = "";
      }
    },
    model: {
      value: _vm.selected_to_account,
      callback: function callback($$v) {
        _vm.selected_to_account = $$v;
      },
      expression: "selected_to_account"
    }
  }, [!_vm.accounts.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
      "prop-name": "to_account_id"
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
        return _vm.accountTransferForm.errors.clear("amount");
      }
    },
    model: {
      value: _vm.accountTransferForm.amount,
      callback: function callback($$v) {
        _vm.$set(_vm.accountTransferForm, "amount", $$v);
      },
      expression: "accountTransferForm.amount"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
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
  }, [_vm._v(_vm._s(_vm.trans("finance.date_of_account_transfer")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("finance.date_of_account_transfer")
    },
    on: {
      selected: function selected($event) {
        return _vm.accountTransferForm.errors.clear("date_of_account_transfer");
      }
    },
    model: {
      value: _vm.accountTransferForm.date_of_account_transfer,
      callback: function callback($$v) {
        _vm.$set(_vm.accountTransferForm, "date_of_account_transfer", $$v);
      },
      expression: "accountTransferForm.date_of_account_transfer"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
      "prop-name": "date_of_account_transfer"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.payment_method")) + " ")]), _vm._v(" "), _c("v-select", {
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
        return _vm.accountTransferForm.errors.clear("payment_method_id");
      },
      remove: function remove($event) {
        _vm.accountTransferForm.payment_method_id = "";
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
  }, [_vm._v("\n                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
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
      value: _vm.accountTransferForm.instrument_number,
      expression: "accountTransferForm.instrument_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "instrument_number",
      placeholder: _vm.trans("finance.instrument_number")
    },
    domProps: {
      value: _vm.accountTransferForm.instrument_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.accountTransferForm, "instrument_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
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
        return _vm.accountTransferForm.errors.clear("instrument_date");
      }
    },
    model: {
      value: _vm.accountTransferForm.instrument_date,
      callback: function callback($$v) {
        _vm.$set(_vm.accountTransferForm, "instrument_date", $$v);
      },
      expression: "accountTransferForm.instrument_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
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
      value: _vm.accountTransferForm.instrument_bank_detail,
      expression: "accountTransferForm.instrument_bank_detail"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "instrument_bank_detail",
      placeholder: _vm.trans("finance.instrument_bank_detail")
    },
    domProps: {
      value: _vm.accountTransferForm.instrument_bank_detail
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.accountTransferForm, "instrument_bank_detail", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
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
        return _vm.accountTransferForm.errors.clear("instrument_clearing_date");
      }
    },
    model: {
      value: _vm.accountTransferForm.instrument_clearing_date,
      callback: function callback($$v) {
        _vm.$set(_vm.accountTransferForm, "instrument_clearing_date", $$v);
      },
      expression: "accountTransferForm.instrument_clearing_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
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
      value: _vm.accountTransferForm.reference_number,
      expression: "accountTransferForm.reference_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "reference_number",
      placeholder: _vm.trans("finance.reference_number")
    },
    domProps: {
      value: _vm.accountTransferForm.reference_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.accountTransferForm, "reference_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
      "prop-name": "reference_number"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-9"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.account_transfer_description")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "1",
      name: "description",
      placeholder: _vm.trans("finance.account_transfer_description")
    },
    model: {
      value: _vm.accountTransferForm.description,
      callback: function callback($$v) {
        _vm.$set(_vm.accountTransferForm, "description", $$v);
      },
      expression: "accountTransferForm.description"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.accountTransferForm,
      "prop-name": "description"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("file-upload-input", {
    attrs: {
      "button-text": _vm.trans("general.upload_document"),
      token: _vm.accountTransferForm.upload_token,
      module: "account-transfer",
      "clear-file": _vm.clearAttachment,
      "module-id": _vm.module_id
    }
  })], 1)])]), _vm._v(" "), _c("div", {
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
      to: "/finance/transaction/account/transfer"
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

/***/ "./resources/js/views/finance/transaction/account-transfer/edit.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/views/finance/transaction/account-transfer/edit.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_0b266ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=0b266ab9& */ "./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=template&id=0b266ab9&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_0b266ab9___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_0b266ab9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/finance/transaction/account-transfer/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/finance/transaction/account-transfer/form.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/views/finance/transaction/account-transfer/form.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_7035c71a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=7035c71a& */ "./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=template&id=7035c71a&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_7035c71a___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_7035c71a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/finance/transaction/account-transfer/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=template&id=0b266ab9&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=template&id=0b266ab9& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_0b266ab9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_0b266ab9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_0b266ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=0b266ab9& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/edit.vue?vue&type=template&id=0b266ab9&");


/***/ }),

/***/ "./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=template&id=7035c71a&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=template&id=7035c71a& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7035c71a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7035c71a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7035c71a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=7035c71a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/finance/transaction/account-transfer/form.vue?vue&type=template&id=7035c71a&");


/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=c2357abaf0f0dddb