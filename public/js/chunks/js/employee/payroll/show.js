"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/employee/payroll/show"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      uuid: this.$route.params.uuid,
      payroll: {},
      employee_salary: {},
      attendance_summary: []
    };
  },
  mounted: function mounted() {
    this.get();
  },
  methods: {
    getEmployeeNameWithCode: function getEmployeeNameWithCode(employee) {
      return helper.getEmployeeNameWithCode(employee);
    },
    getEmployeeDesignationOnDate: function getEmployeeDesignationOnDate(employee, date) {
      return helper.getEmployeeDesignationOnDate(employee, date);
    },
    get: function get() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/employee/payroll/' + this.uuid).then(function (response) {
        _this.payroll = response.payroll;
        _this.employee_salary = response.salary;
        _this.attendance_summary = response.attendance_types;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
    getVoucherNumber: function getVoucherNumber(transaction) {
      return helper.getVoucherNumber(transaction);
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
    getTotalEarningSalary: function getTotalEarningSalary() {
      var total = 0;
      this.payroll.payroll_details.forEach(function (payroll_detail) {
        total += payroll_detail.pay_head.type == 'earning' ? payroll_detail.amount || 0 : 0;
      });
      return total;
    },
    getTotalDeductionSalary: function getTotalDeductionSalary() {
      var total = 0;
      this.payroll.payroll_details.forEach(function (payroll_detail) {
        total += payroll_detail.pay_head.type == 'deduction' ? payroll_detail.amount || 0 : 0;
      });
      return total;
    },
    getNetSalary: function getNetSalary() {
      return this.getTotalEarningSalary - this.getTotalDeductionSalary;
    },
    getPayrollStatus: function getPayrollStatus() {
      return helper.getPayrollStatus(this.payroll);
    },
    getPayrollNumber: function getPayrollNumber() {
      return helper.getPayrollNumber(this.payroll);
    },
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=template&id=4e69d80e&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=template&id=4e69d80e& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll")) + " "), _vm.payroll.id ? _c("span", [_vm._v(_vm._s("#" + _vm.getPayrollNumber))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/employee/payroll/list");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("employee.list_payroll")))])]), _vm._v(" "), _c("a", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("general.print"),
      expression: "trans('general.print')"
    }],
    staticClass: "btn btn-info btn-sm",
    attrs: {
      href: "/employee/payroll/".concat(_vm.payroll.uuid, "/print?token=").concat(_vm.authToken),
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "fas fa-print"
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.employee_salary.payroll_template ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm custom-show-table"
  }, [_c("tbody", [_vm._l(_vm.attendance_summary, function (attendance) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(attendance.name + " (" + attendance.alias + ")"))]), _vm._v(" "), _c("td", [_vm._v("\n\t\t\t                                    " + _vm._s(attendance.count) + "\n\t\t\t                                    "), (attendance.type == "production_based_earning" || attendance.type == "production_based_deduction") && attendance.count ? _c("span", [_vm._v("\n\t\t\t                                        (" + _vm._s(attendance.value + " " + attendance.unit) + ")\n\t\t\t                                    ")]) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("general.created_at")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentDateTime")(_vm.payroll.created_at)))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("general.updated_at")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentDateTime")(_vm.payroll.updated_at)))])])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-8 border-left"
  }, [_c("div", {
    staticClass: "card widget"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row border-bottom"
  }, [_c("div", {
    staticClass: "col p-4 b-r"
  }, [_vm._v("\n\t\t\t                                " + _vm._s(_vm.getEmployeeNameWithCode(_vm.employee_salary.employee))), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "font-90pc"
  }, [_vm._v(_vm._s(_vm.getEmployeeDesignationOnDate(_vm.employee_salary.employee, _vm.employee_salary.start_date)))])]), _vm._v(" "), _c("div", {
    staticClass: "col p-4 b-r"
  }, [_vm._v("\n\t\t\t                                " + _vm._s(_vm._f("moment")(_vm.payroll.start_date)) + " " + _vm._s(_vm.trans("general.to")) + " " + _vm._s(_vm._f("moment")(_vm.payroll.end_date)) + "\n\t\t\t                                "), _c("br"), _vm._v(" "), _vm._l(_vm.getPayrollStatus, function (status) {
    return _c("span", {
      "class": ["label", "label-" + status.color, "m-r-5"]
    }, [_vm._v(_vm._s(status.label))]);
  })], 2)])])]), _vm._v(" "), _c("table", {
    staticClass: "payroll-table"
  }, [_c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("employee.pay_head_type_earning")))]), _vm._v(" "), _c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("employee.pay_head_type_deduction")))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border-right",
    attrs: {
      valign: "top"
    }
  }, [_c("table", {
    staticClass: "payroll-table"
  }, _vm._l(_vm.payroll.payroll_details, function (payroll_detail) {
    return payroll_detail.pay_head.type == "earning" ? _c("tr", [_c("td", [_vm._v(_vm._s(payroll_detail.pay_head.name))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n\t\t\t                                        " + _vm._s(_vm.formatCurrency(payroll_detail.amount)) + "\n\t\t\t                                    ")])]) : _vm._e();
  }), 0)]), _vm._v(" "), _c("td", {
    attrs: {
      valign: "top"
    }
  }, [_c("table", {
    staticClass: "payroll-table"
  }, _vm._l(_vm.payroll.payroll_details, function (payroll_detail) {
    return payroll_detail.pay_head.type == "deduction" ? _c("tr", [_c("td", [_vm._v(_vm._s(payroll_detail.pay_head.name))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n\t\t\t                                        " + _vm._s(_vm.formatCurrency(payroll_detail.amount)) + "\n\t\t\t                                    ")])]) : _vm._e();
  }), 0)])]), _vm._v(" "), _c("tr", [_c("td", [_c("table", {
    staticClass: "payroll-table"
  }, [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("employee.earning_salary")))]), _vm._v(" "), _c("td", {
    attrs: {
      align: "right"
    }
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.getTotalEarningSalary)))])])])]), _vm._v(" "), _c("td", {
    attrs: {
      valign: "top"
    }
  }, [_c("table", {
    staticClass: "payroll-table"
  }, [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("employee.deduction_salary")))]), _vm._v(" "), _c("td", {
    attrs: {
      align: "right"
    }
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.getTotalDeductionSalary)))])])])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.trans("employee.net_salary")))]), _vm._v(" "), _c("td", {
    staticClass: "font-weight-bold",
    attrs: {
      align: "right"
    }
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.getNetSalary)))])])]), _vm._v(" "), _vm.payroll.transactions.length ? [_c("h5", {
    staticClass: "card-title m-t-10 m-b-10"
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll_transaction")))]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm custom-show-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("finance.voucher_number")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.amount")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.account")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("finance.payment_method")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("finance.date_of_transaction")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.payroll.transactions, function (transaction) {
    return _c("tr", [_c("td", {
      domProps: {
        textContent: _vm._s(_vm.getVoucherNumber(transaction))
      }
    }), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatCurrency(transaction.amount)))]), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(transaction.account.name)
      }
    }), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        textContent: _vm._s(transaction.payment_method.name)
      }
    }), _vm._v(" "), transaction.instrument_number ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.trans("finance.instrument_number")) + " "), _c("u", [_vm._v(_vm._s(transaction.instrument_number) + " ")])]) : _vm._e(), _vm._v(" "), transaction.instrument_date ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.trans("finance.instrument_date")) + " "), _c("u", [_vm._v(_vm._s(_vm._f("moment")(transaction.instrument_date)) + " ")])]) : _vm._e(), _vm._v(" "), transaction.instrument_bank_detail ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.trans("finance.instrument_bank_detail")) + " "), _c("u", [_vm._v(_vm._s(transaction.instrument_bank_detail) + " ")])]) : _vm._e(), _vm._v(" "), transaction.instrument_clearing_date ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.trans("finance.instrument_clearing_date")) + " "), _c("u", [_vm._v(_vm._s(_vm._f("moment")(transaction.instrument_clearing_date)) + " ")])]) : _vm._e(), _vm._v(" "), transaction.reference_number ? _c("span", [_c("br"), _vm._v(" " + _vm._s(_vm.trans("finance.reference_number")) + " "), _c("u", [_vm._v(_vm._s(transaction.reference_number))])]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_vm._v(_vm._s(_vm._f("moment")(transaction.date)))])]);
  }), 0)])])] : _vm._e()], 2)]) : _vm._e()])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".payroll-table {\n  width: 100%;\n  font-size: 13px;\n}\n.payroll-table th, .payroll-table td {\n  width: 50%;\n  padding: 5px 10px;\n}\n.payroll-table tr + tr {\n  border-top: 1px solid #f3f1f1;\n}\n.payroll-table .borderless-input {\n  text-align: right;\n  border: 0;\n  height: auto;\n  width: 100%;\n  color: #54667a;\n}", "",{"version":3,"sources":["webpack://./resources/js/views/employee/payroll/show.vue"],"names":[],"mappings":"AACA;EACI,WAAA;EACA,eAAA;AAAJ;AAEI;EACI,UAAA;EACA,iBAAA;AAAR;AAGI;EACI,6BAAA;AADR;AAII;EACI,iBAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;AAFR","sourcesContent":["\n.payroll-table {\n    width: 100%;\n    font-size:13px;\n\n    th, td {\n        width:50%;\n        padding:5px 10px;\n    }\n\n    tr + tr{\n        border-top: 1px solid #f3f1f1;\n    }\n\n    .borderless-input{\n        text-align:right;\n        border:0;\n        height: auto;\n        width:100%;\n        color: #54667a;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_4e69d80e_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_4e69d80e_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_4e69d80e_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/employee/payroll/show.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/employee/payroll/show.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_4e69d80e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=4e69d80e& */ "./resources/js/views/employee/payroll/show.vue?vue&type=template&id=4e69d80e&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/views/employee/payroll/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _show_vue_vue_type_style_index_0_id_4e69d80e_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss& */ "./resources/js/views/employee/payroll/show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_4e69d80e___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_4e69d80e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/employee/payroll/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/employee/payroll/show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/employee/payroll/show.vue?vue&type=template&id=4e69d80e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/show.vue?vue&type=template&id=4e69d80e& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4e69d80e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4e69d80e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4e69d80e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=4e69d80e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=template&id=4e69d80e&");


/***/ }),

/***/ "./resources/js/views/employee/payroll/show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_4e69d80e_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/show.vue?vue&type=style&index=0&id=4e69d80e&lang=scss&");


/***/ })

}]);
//# sourceMappingURL=show.js.map?id=04589f4dd5ca8ba3