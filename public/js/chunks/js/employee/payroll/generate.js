"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/employee/payroll/generate"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['uuid'],
  components: {},
  data: function data() {
    return {
      payrollForm: new Form({
        employee_id: '',
        start_date: '',
        end_date: '',
        pay_heads: [],
        remarks: ''
      }, false),
      payroll: {},
      employee_salary: {},
      attendance_summary: {},
      employees: [],
      selected_employee: null,
      editPayrollAmount: false
    };
  },
  mounted: function mounted() {
    if (!helper.hasAnyPermission(['generate-payroll', 'edit-payroll'])) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.editPayrollAmount = helper.hasPermission('edit-payroll-amount') ? true : false;
    this.getPreRequisite();
  },
  methods: {
    getEmployeeNameWithCode: function getEmployeeNameWithCode(employee) {
      return helper.getEmployeeNameWithCode(employee);
    },
    getEmployeeDesignationOnDate: function getEmployeeDesignationOnDate(employee, date) {
      return helper.getEmployeeDesignationOnDate(employee, date);
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/employee/payroll/pre-requisite').then(function (response) {
        _this.employees = response.employees;
        if (_this.uuid) _this.get();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onEmployeeSelect: function onEmployeeSelect(selectedOption) {
      this.payrollForm.employee_id = selectedOption.id;
    },
    reset: function reset() {
      this.employee_salary = {};
      this.payrollForm.pay_heads = [];
    },
    fetch: function fetch() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.payrollForm.post('/api/employee/payroll/fetch').then(function (response) {
        _this2.employee_salary = response.salary;
        _this2.attendance_summary = response.attendance_types;
        _this2.payrollForm.pay_heads = [];
        response.salary.payroll_template.payroll_template_details.forEach(function (payroll_template_detail) {
          if (payroll_template_detail.category != 'not_applicable') {
            _this2.payrollForm.pay_heads.push({
              payroll_template_detail_id: payroll_template_detail.id,
              pay_head_id: payroll_template_detail.pay_head_id,
              type: payroll_template_detail.pay_head.type,
              name: payroll_template_detail.pay_head.name,
              amount: payroll_template_detail.amount
            });
          }
        });
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    get: function get() {
      var _this3 = this;
      var loader = this.$loading.show();
      axios.get('/api/employee/payroll/' + this.uuid).then(function (response) {
        _this3.payroll = response.payroll;
        _this3.payrollForm.start_date = _this3.payroll.start_date;
        _this3.payrollForm.end_date = _this3.payroll.end_date;
        _this3.payrollForm.employee_id = _this3.payroll.employee_id;
        _this3.payrollForm.remarks = _this3.payroll.remarks;
        _this3.employee_salary = response.salary;
        _this3.attendance_summary = response.attendance_types;
        _this3.payrollForm.pay_heads = [];
        response.salary.payroll_template.payroll_template_details.forEach(function (payroll_template_detail) {
          var amount = payroll_template_detail.amount;
          var payroll_detail = _this3.payroll.payroll_details.find(function (o) {
            return o.pay_head_id == payroll_template_detail.pay_head_id;
          });
          amount = typeof payroll_detail != 'undefined' ? payroll_detail.amount : amount;
          _this3.payrollForm.pay_heads.push({
            payroll_template_detail_id: payroll_template_detail.id,
            pay_head_id: payroll_template_detail.pay_head_id,
            type: payroll_template_detail.pay_head.type,
            name: payroll_template_detail.pay_head.name,
            amount: amount
          });
        });
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
    proceed: function proceed() {
      if (this.uuid) this.update();else this.store();
    },
    store: function store() {
      var _this4 = this;
      var loader = this.$loading.show();
      this.payrollForm.post('/api/employee/payroll/generate').then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this4.$router.push('/employee/payroll/list');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    update: function update() {
      var _this5 = this;
      var loader = this.$loading.show();
      this.payrollForm.patch('/api/employee/payroll/' + this.uuid).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this5.$router.push('/employee/payroll/list');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  },
  computed: {
    getTotalEarningSalary: function getTotalEarningSalary() {
      var total = 0;
      this.payrollForm.pay_heads.forEach(function (pay_head) {
        total += pay_head.type == 'earning' ? pay_head.amount || 0 : 0;
      });
      return total;
    },
    getTotalDeductionSalary: function getTotalDeductionSalary() {
      var total = 0;
      this.payrollForm.pay_heads.forEach(function (pay_head) {
        total += pay_head.type == 'deduction' ? pay_head.amount || 0 : 0;
      });
      return total;
    },
    getNetSalary: function getNetSalary() {
      return this.getTotalEarningSalary - this.getTotalDeductionSalary;
    }
  },
  watch: {},
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/generate.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/generate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/employee/payroll/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    payrollForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    if (!helper.hasPermission('generate-payroll')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=template&id=09390a40&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=template&id=09390a40& ***!
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
  return _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.proceed.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.payrollForm.errors.clear($event.target.name);
      }
    }
  }, [!_vm.employee_salary.payroll_template ? [_c("div", {
    staticClass: "row p-4"
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
      placeholder: _vm.trans("employee.select_employee")
    },
    on: {
      select: _vm.onEmployeeSelect,
      close: function close($event) {
        return _vm.payrollForm.errors.clear("employee_id");
      },
      remove: function remove($event) {
        _vm.payrollForm.employee_id = "";
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
  }, [_vm._v("\n                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollForm,
      "prop-name": "employee_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll_start_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("employee.payroll_start_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.payrollForm.errors.clear("start_date");
      }
    },
    model: {
      value: _vm.payrollForm.start_date,
      callback: function callback($$v) {
        _vm.$set(_vm.payrollForm, "start_date", $$v);
      },
      expression: "payrollForm.start_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollForm,
      "prop-name": "start_date"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll_end_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("employee.payroll_end_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.payrollForm.errors.clear("end_date");
      }
    },
    model: {
      value: _vm.payrollForm.end_date,
      callback: function callback($$v) {
        _vm.$set(_vm.payrollForm, "end_date", $$v);
      },
      expression: "payrollForm.end_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.payrollForm,
      "prop-name": "end_date"
    }
  })], 1)])]), _vm._v(" "), !_vm.employee_salary.payroll_template ? _c("button", {
    staticClass: "btn btn-info m-r-10 pull-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.fetch
    }
  }, [_vm._v(_vm._s(_vm.trans("general.submit")))]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.employee_salary.payroll_template ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm custom-show-table"
  }, [_c("tbody", _vm._l(_vm.attendance_summary, function (attendance) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(attendance.name + " (" + attendance.alias + ")"))]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(attendance.count) + "\n                                "), (attendance.type == "production_based_earning" || attendance.type == "production_based_deduction") && attendance.count ? _c("span", [_vm._v("\n                                    (" + _vm._s(attendance.value + " " + attendance.unit) + ")\n                                ")]) : _vm._e()])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-8 border-left"
  }, [_c("div", {
    staticClass: "card widget"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row border-bottom"
  }, [_c("div", {
    staticClass: "col p-4 b-r"
  }, [_vm._v("\n                            " + _vm._s(_vm.getEmployeeNameWithCode(_vm.employee_salary.employee))), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "font-90pc"
  }, [_vm._v(_vm._s(_vm.getEmployeeDesignationOnDate(_vm.employee_salary.employee, _vm.employee_salary.start_date)))])]), _vm._v(" "), _c("div", {
    staticClass: "col p-4 b-r"
  }, [_vm._v("\n                            " + _vm._s(_vm._f("moment")(_vm.payrollForm.start_date)) + " " + _vm._s(_vm.trans("general.to")) + " " + _vm._s(_vm._f("moment")(_vm.payrollForm.end_date)) + "\n                        ")])])])]), _vm._v(" "), _c("table", {
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
  }, _vm._l(_vm.payrollForm.pay_heads, function (pay_head) {
    return pay_head.type == "earning" ? _c("tr", [_c("td", [_vm._v(_vm._s(pay_head.name))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm.editPayrollAmount ? [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: pay_head.amount,
        expression: "pay_head.amount"
      }],
      staticClass: "borderless-input",
      attrs: {
        type: "text",
        placeholder: _vm.trans("employee.salary_structure_amount")
      },
      domProps: {
        value: pay_head.amount
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(pay_head, "amount", $event.target.value);
        }
      }
    })] : [_vm._v("\n                                        " + _vm._s(pay_head.amount) + "\n                                    ")]], 2)]) : _vm._e();
  }), 0)]), _vm._v(" "), _c("td", {
    attrs: {
      valign: "top"
    }
  }, [_c("table", {
    staticClass: "payroll-table"
  }, _vm._l(_vm.payrollForm.pay_heads, function (pay_head) {
    return pay_head.type == "deduction" ? _c("tr", [_c("td", [_vm._v(_vm._s(pay_head.name))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm.editPayrollAmount ? [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: pay_head.amount,
        expression: "pay_head.amount"
      }],
      staticClass: "borderless-input",
      attrs: {
        type: "text",
        placeholder: _vm.trans("employee.salary_structure_amount")
      },
      domProps: {
        value: pay_head.amount
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(pay_head, "amount", $event.target.value);
        }
      }
    })] : [_vm._v("\n                                        " + _vm._s(pay_head.amount) + "\n                                    ")]], 2)]) : _vm._e();
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
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.getNetSalary)))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll_remarks")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "2",
      name: "remarks",
      placeholder: _vm.trans("employee.payroll_remarks")
    },
    model: {
      value: _vm.payrollForm.remarks,
      callback: function callback($$v) {
        _vm.$set(_vm.payrollForm, "remarks", $$v);
      },
      expression: "payrollForm.remarks"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _vm.employee_salary.payroll_template ? _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-info pull-right",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))]), _vm._v(" "), !_vm.uuid ? _c("button", {
    staticClass: "btn btn-danger pull-right m-r-10",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.reset
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.payroll_reset_query")))]) : _vm._e()]) : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/generate.vue?vue&type=template&id=57f24071&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/generate.vue?vue&type=template&id=57f24071& ***!
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
  }, [_vm._v(_vm._s(_vm.trans("employee.generate_payroll")))])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v(_vm._s(_vm.trans("employee.list_payroll")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("payroll-form")], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=style&index=0&id=09390a40&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=style&index=0&id=09390a40&lang=scss& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".payroll-table {\n  width: 100%;\n  font-size: 13px;\n}\n.payroll-table th, .payroll-table td {\n  width: 50%;\n  padding: 5px 10px;\n}\n.payroll-table tr + tr {\n  border-top: 1px solid #f3f1f1;\n}\n.payroll-table .borderless-input {\n  text-align: right;\n  border: 0;\n  height: auto;\n  width: 100%;\n  color: #54667a;\n}", "",{"version":3,"sources":["webpack://./resources/js/views/employee/payroll/form.vue"],"names":[],"mappings":"AACA;EACI,WAAA;EACA,eAAA;AAAJ;AAEI;EACI,UAAA;EACA,iBAAA;AAAR;AAGI;EACI,6BAAA;AADR;AAII;EACI,iBAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;AAFR","sourcesContent":["\n.payroll-table {\n    width: 100%;\n    font-size:13px;\n\n    th, td {\n        width:50%;\n        padding:5px 10px;\n    }\n\n    tr + tr{\n        border-top: 1px solid #f3f1f1;\n    }\n\n    .borderless-input{\n        text-align:right;\n        border:0;\n        height: auto;\n        width:100%;\n        color: #54667a;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=style&index=0&id=09390a40&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=style&index=0&id=09390a40&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_09390a40_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=09390a40&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=style&index=0&id=09390a40&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_09390a40_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_09390a40_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/employee/payroll/form.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/employee/payroll/form.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_09390a40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=09390a40& */ "./resources/js/views/employee/payroll/form.vue?vue&type=template&id=09390a40&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/employee/payroll/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _form_vue_vue_type_style_index_0_id_09390a40_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=09390a40&lang=scss& */ "./resources/js/views/employee/payroll/form.vue?vue&type=style&index=0&id=09390a40&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_09390a40___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_09390a40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/employee/payroll/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/employee/payroll/generate.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/employee/payroll/generate.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generate_vue_vue_type_template_id_57f24071___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate.vue?vue&type=template&id=57f24071& */ "./resources/js/views/employee/payroll/generate.vue?vue&type=template&id=57f24071&");
/* harmony import */ var _generate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate.vue?vue&type=script&lang=js& */ "./resources/js/views/employee/payroll/generate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _generate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _generate_vue_vue_type_template_id_57f24071___WEBPACK_IMPORTED_MODULE_0__.render,
  _generate_vue_vue_type_template_id_57f24071___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/employee/payroll/generate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/employee/payroll/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/employee/payroll/generate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/generate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_generate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./generate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/generate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_generate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/employee/payroll/form.vue?vue&type=template&id=09390a40&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/form.vue?vue&type=template&id=09390a40& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_09390a40___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_09390a40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_09390a40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=09390a40& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=template&id=09390a40&");


/***/ }),

/***/ "./resources/js/views/employee/payroll/generate.vue?vue&type=template&id=57f24071&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/generate.vue?vue&type=template&id=57f24071& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_generate_vue_vue_type_template_id_57f24071___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_generate_vue_vue_type_template_id_57f24071___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_generate_vue_vue_type_template_id_57f24071___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./generate.vue?vue&type=template&id=57f24071& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/generate.vue?vue&type=template&id=57f24071&");


/***/ }),

/***/ "./resources/js/views/employee/payroll/form.vue?vue&type=style&index=0&id=09390a40&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/employee/payroll/form.vue?vue&type=style&index=0&id=09390a40&lang=scss& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_09390a40_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=09390a40&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/payroll/form.vue?vue&type=style&index=0&id=09390a40&lang=scss&");


/***/ })

}]);
//# sourceMappingURL=generate.js.map?id=64757ecac7c33231