"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/employee/attendance/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      filter: {
        department_id: [],
        designation_id: [],
        employee_category_id: [],
        month: ''
      },
      date: '',
      days: 0,
      employees: [],
      departments: [],
      designations: [],
      employee_categories: [],
      selected_designations: null,
      selected_departments: null,
      selected_employee_categories: null,
      attendance_summary_with_name: []
    };
  },
  mounted: function mounted() {
    this.filter.month = moment().format('YYYY-MM');
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
      axios.get('/api/employee/attendance/regular/pre-requisite').then(function (response) {
        _this.departments = response.departments;
        _this.designations = response.designations;
        _this.employee_categories = response.employee_categories;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    list: function list() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.filter.month = moment(this.filter.month).format('YYYY-MM');
      axios.post('/api/employee/attendance/regular/list', {
        department_id: this.filter.department_id,
        designation_id: this.filter.designation_id,
        employee_category_id: this.filter.employee_category_id,
        month: this.filter.month
      }).then(function (response) {
        _this2.employees = response.employees;
        _this2.attendance_summary_with_name = response.attendance_summary_with_name;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg();
      });
    },
    onDepartmentSelect: function onDepartmentSelect(selectedOption) {
      this.filter.department_id.push(selectedOption.id);
    },
    onDepartmentRemove: function onDepartmentRemove(removedOption) {
      this.filter.department_id.splice(this.filter.department_id.indexOf(removedOption.id), 1);
    },
    onDesignationSelect: function onDesignationSelect(selectedOption) {
      this.filter.designation_id.push(selectedOption.id);
    },
    onDesignationRemove: function onDesignationRemove(removedOption) {
      this.filter.designation_id.splice(this.filter.designation_id.indexOf(removedOption.id), 1);
    },
    onEmployeeCategorySelect: function onEmployeeCategorySelect(selectedOption) {
      this.filter.employee_category_id.push(selectedOption.id);
    },
    onEmployeeCategoryRemove: function onEmployeeCategoryRemove(removedOption) {
      this.filter.employee_category_id.splice(this.filter.employee_category_id.indexOf(removedOption.id), 1);
    },
    getAttendanceSummary: function getAttendanceSummary(employee, symbol) {
      var attendance = employee.summary.find(function (o) {
        return o.symbol == symbol;
      });
      if (typeof attendance == 'undefined') return 0;
      return attendance.value;
    }
  },
  watch: {
    'filter.month': function filterMonth(val) {
      this.date = moment(val, 'YYYY-MM') + '-01';
      this.days = moment(val, 'YYYY-MM').daysInMonth();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=template&id=61c55cfe&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=template&id=61c55cfe& ***!
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
  }, [_vm._v(_vm._s(_vm.trans("employee.list_attendance")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/employee/attendance/regular");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-check"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("employee.mark_attendance")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body p-4"
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
  }, [_vm._v(_vm._s(_vm.trans("employee.category")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "employee_category_id",
      id: "employee_category_id",
      options: _vm.employee_categories,
      placeholder: _vm.trans("employee.select_employee_category"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_employee_categories
    },
    on: {
      select: _vm.onEmployeeCategorySelect,
      remove: _vm.onEmployeeCategoryRemove
    },
    model: {
      value: _vm.selected_employee_categories,
      callback: function callback($$v) {
        _vm.selected_employee_categories = $$v;
      },
      expression: "selected_employee_categories"
    }
  }, [!_vm.employee_categories.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.designation")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "designation_id",
      id: "designation_id",
      options: _vm.designations,
      placeholder: _vm.trans("employee.select_designation"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_designations
    },
    on: {
      select: _vm.onDesignationSelect,
      remove: _vm.onDesignationRemove
    },
    model: {
      value: _vm.selected_designations,
      callback: function callback($$v) {
        _vm.selected_designations = $$v;
      },
      expression: "selected_designations"
    }
  }, [!_vm.designations.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.department")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "department_id",
      id: "department_id",
      options: _vm.departments,
      placeholder: _vm.trans("employee.select_department"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_departments
    },
    on: {
      select: _vm.onDepartmentSelect,
      remove: _vm.onDepartmentRemove
    },
    model: {
      value: _vm.selected_departments,
      callback: function callback($$v) {
        _vm.selected_departments = $$v;
      },
      expression: "selected_departments"
    }
  }, [!_vm.departments.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.attendance_month")))]), _vm._v(" "), _c("vue-monthly-picker", {
    attrs: {
      name: "month",
      placeHolder: _vm.trans("employee.attendance_month"),
      dateFormat: "YYYY-MM "
    },
    model: {
      value: _vm.filter.month,
      callback: function callback($$v) {
        _vm.$set(_vm.filter, "month", $$v);
      },
      expression: "filter.month"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-info pull-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.list
    }
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))])]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }), _vm._v(" "), _vm.employees.length ? _c("div", {
    staticClass: "row m-t-20"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive font-90pc p-2"
  }, [_c("table", {
    staticClass: "table table-sm table-bordered attendance-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("employee.employee")))]), _vm._v(" "), _vm._l(_vm.days, function (index) {
    return _c("th", {
      staticClass: "date-cell"
    }, [_vm._v(_vm._s(index))]);
  }), _vm._v(" "), _vm._l(_vm.attendance_summary_with_name, function (attendance) {
    return _c("th", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: attendance.name,
        expression: "attendance.name"
      }],
      staticClass: "text-center font-weight-bold"
    }, [_vm._v("\n                                            " + _vm._s(attendance.symbol) + "\n                                        ")]);
  })], 2)]), _vm._v(" "), _c("tbody", _vm._l(_vm.employees, function (employee) {
    return _c("tr", [_c("td", [_vm._v("\n                                            " + _vm._s(_vm.getEmployeeNameWithCode(employee)) + " "), _c("br"), _vm._v(" "), _c("span", {
      staticClass: "font-90pc"
    }, [_vm._v(_vm._s(_vm.getEmployeeDesignationOnDate(employee, _vm.date)))])]), _vm._v(" "), _vm._l(employee.attendances, function (attendance) {
      return _c("td", {
        "class": "text-center font-weight-bold text-".concat(attendance.color)
      }, [attendance.symbol == "H" ? _c("span", {
        directives: [{
          name: "tooltip",
          rawName: "v-tooltip",
          value: attendance.description,
          expression: "attendance.description"
        }],
        staticClass: "marking-cell"
      }, [_c("i", {
        staticClass: "fas fa-hospital-symbol"
      })]) : _c("span", {
        directives: [{
          name: "tooltip",
          rawName: "v-tooltip",
          value: attendance.description,
          expression: "attendance.description"
        }],
        staticClass: "marking-cell"
      }, [_vm._v("\n                                                " + _vm._s(attendance.symbol) + "\n                                            ")])]);
    }), _vm._v(" "), _vm._l(_vm.attendance_summary_with_name, function (attendance) {
      return _c("td", {
        staticClass: "text-center font-weight-bold"
      }, [_vm._v("\n                                            " + _vm._s(_vm.getAttendanceSummary(employee, attendance.symbol)) + "\n                                        ")]);
    })], 2);
  }), 0)])])])]) : _vm._e()])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=style&index=0&id=61c55cfe&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=style&index=0&id=61c55cfe&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.attendance-table tr th.date-cell{\n    text-align: center;\n    min-width: 20px;\n    max-width: 20px;\n}\n.attendance-table tr td {\n    vertical-align: middle;\n}\n.attendance-table tr td span.marking-cell {\n    display: block;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/employee/attendance/index.vue"],"names":[],"mappings":";AAgOA;IACA,kBAAA;IACA,eAAA;IACA,eAAA;AACA;AACA;IACA,sBAAA;AACA;AACA;IACA,cAAA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;AACA","sourcesContent":["<template>\n    <div>\n        <div class=\"page-titles\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-6\">\n                    <h3 class=\"text-themecolor\">{{trans('employee.list_attendance')}}</h3>\n                </div>\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"action-buttons pull-right\">\n                        <button class=\"btn btn-info btn-sm\" @click=\"$router.push('/employee/attendance/regular')\"><i class=\"fas fa-check\"></i> <span class=\"d-none d-sm-inline\">{{trans('employee.mark_attendance')}}</span></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"container-fluid\">\n            <div class=\"card\">\n                <div class=\"card-body p-4\">\n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-3\">\n                            <div class=\"form-group\">\n                                <label for=\"\">{{trans('employee.category')}}</label>\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_employee_categories\" name=\"employee_category_id\" id=\"employee_category_id\" :options=\"employee_categories\" :placeholder=\"trans('employee.select_employee_category')\" @select=\"onEmployeeCategorySelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onEmployeeCategoryRemove\" :selected=\"selected_employee_categories\">\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!employee_categories.length\">\n                                        {{trans('general.no_option_found')}}\n                                    </div>\n                                </v-select>\n                            </div>\n                        </div>\n                        <div class=\"col-12 col-sm-3\">\n                            <div class=\"form-group\">\n                                <label for=\"\">{{trans('employee.designation')}}</label>\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_designations\" name=\"designation_id\" id=\"designation_id\" :options=\"designations\" :placeholder=\"trans('employee.select_designation')\" @select=\"onDesignationSelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onDesignationRemove\" :selected=\"selected_designations\">\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!designations.length\">\n                                        {{trans('general.no_option_found')}}\n                                    </div>\n                                </v-select>\n                            </div>\n                        </div>\n                        <div class=\"col-12 col-sm-3\">\n                            <div class=\"form-group\">\n                                <label for=\"\">{{trans('employee.department')}}</label>\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_departments\" name=\"department_id\" id=\"department_id\" :options=\"departments\" :placeholder=\"trans('employee.select_department')\" @select=\"onDepartmentSelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onDepartmentRemove\" :selected=\"selected_departments\">\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!departments.length\">\n                                        {{trans('general.no_option_found')}}\n                                    </div>\n                                </v-select>\n                            </div>\n                        </div>\n                        <div class=\"col-12 col-sm-3\">\n                            <div class=\"form-group\">\n                                <label for=\"\">{{trans('employee.attendance_month')}}</label>\n                                <vue-monthly-picker v-model=\"filter.month\" name=\"month\" :placeHolder=\"trans('employee.attendance_month')\" dateFormat=\"YYYY-MM \"></vue-monthly-picker>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"button\" class=\"btn btn-info pull-right\" @click=\"list\">{{trans('general.filter')}}</button>\n                    </div>\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"row m-t-20\" v-if=\"employees.length\">\n                        <div class=\"col-12\">\n                            <div class=\"table-responsive font-90pc p-2\">\n                                <table class=\"table table-sm table-bordered attendance-table\">\n                                    <thead>\n                                        <tr>\n                                            <th>{{trans('employee.employee')}}</th>\n                                            <th class=\"date-cell\" v-for=\"index in days\">{{index}}</th>\n                                            <th class=\"text-center font-weight-bold\" v-for=\"attendance in attendance_summary_with_name\" v-tooltip=\"attendance.name\">\n                                                {{attendance.symbol}}\n                                            </th>\n                                        </tr>   \n                                    </thead>\n                                    <tbody>\n                                        <tr v-for=\"employee in employees\">\n                                            <td>\n                                                {{getEmployeeNameWithCode(employee)}} <br /> \n                                                <span class=\"font-90pc\">{{getEmployeeDesignationOnDate(employee, date)}}</span>\n                                            </td>\n                                            <td :class=\"`text-center font-weight-bold text-${attendance.color}`\" v-for=\"attendance in employee.attendances\">\n                                                <span class=\"marking-cell\" v-tooltip=\"attendance.description\" v-if=\"attendance.symbol == 'H'\">\n                                                    <i class=\"fas fa-hospital-symbol\"></i>\n                                                </span>\n                                                <span class=\"marking-cell\" v-tooltip=\"attendance.description\" v-else>\n                                                    {{attendance.symbol}}\n                                                </span>\n                                            </td>\n                                            <td class=\"text-center font-weight-bold\" v-for=\"attendance in attendance_summary_with_name\">\n                                                {{getAttendanceSummary(employee, attendance.symbol)}}\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        components: {},\n        data(){\n            return {\n                filter: {\n                    department_id: [],\n                    designation_id: [],\n                    employee_category_id: [],\n                    month: ''\n                },\n                date: '',\n                days: 0,\n                employees: [],\n                departments: [],\n                designations: [],\n                employee_categories: [],\n                selected_designations: null,\n                selected_departments: null,\n                selected_employee_categories: null,\n                attendance_summary_with_name: []\n            }\n        },\n        mounted(){\n            this.filter.month = moment().format('YYYY-MM');\n            this.getPreRequisite();\n        },\n        methods: {\n            hasPermission(permission){\n                return helper.hasPermission(permission);\n            },\n            getEmployeeNameWithCode(employee){\n                return helper.getEmployeeNameWithCode(employee);\n            },\n            getEmployeeDesignationOnDate(employee, date){\n                return helper.getEmployeeDesignationOnDate(employee, date);\n            },\n            getPreRequisite(){\n                let loader = this.$loading.show();\n                axios.get('/api/employee/attendance/regular/pre-requisite')\n                    .then(response => {\n                        this.departments = response.departments;\n                        this.designations = response.designations;\n                        this.employee_categories = response.employee_categories;\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    })\n            },\n            list(){\n                let loader = this.$loading.show();\n                this.filter.month = moment(this.filter.month).format('YYYY-MM');\n                axios.post('/api/employee/attendance/regular/list',{\n                        department_id: this.filter.department_id,\n                        designation_id: this.filter.designation_id,\n                        employee_category_id: this.filter.employee_category_id,\n                        month: this.filter.month,\n                    })\n                    .then(response => {\n                        this.employees = response.employees;\n                        this.attendance_summary_with_name = response.attendance_summary_with_name;\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg();\n                    })\n            },\n            onDepartmentSelect(selectedOption){\n                this.filter.department_id.push(selectedOption.id);\n            },\n            onDepartmentRemove(removedOption){\n                this.filter.department_id.splice(this.filter.department_id.indexOf(removedOption.id), 1);\n            },\n            onDesignationSelect(selectedOption){\n                this.filter.designation_id.push(selectedOption.id);\n            },\n            onDesignationRemove(removedOption){\n                this.filter.designation_id.splice(this.filter.designation_id.indexOf(removedOption.id), 1);\n            },\n            onEmployeeCategorySelect(selectedOption){\n                this.filter.employee_category_id.push(selectedOption.id);\n            },\n            onEmployeeCategoryRemove(removedOption){\n                this.filter.employee_category_id.splice(this.filter.employee_category_id.indexOf(removedOption.id), 1);\n            },\n            getAttendanceSummary(employee, symbol){\n                let attendance = employee.summary.find(o => o.symbol == symbol);\n\n                if (typeof attendance == 'undefined')\n                    return 0;\n\n                return attendance.value;\n            }\n        },\n        watch: {\n            'filter.month': function(val){\n                this.date = moment(val, 'YYYY-MM')+'-01';\n                this.days = moment(val,'YYYY-MM').daysInMonth();\n            }\n        }\n    }\n</script>\n\n<style>\n    .attendance-table tr th.date-cell{\n        text-align: center;\n        min-width: 20px;\n        max-width: 20px;\n    }\n    .attendance-table tr td {\n        vertical-align: middle;\n    }\n    .attendance-table tr td span.marking-cell {\n        display: block;\n        width: 100%;\n        height: 100%;\n        text-align: center;\n    }\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=style&index=0&id=61c55cfe&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=style&index=0&id=61c55cfe&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61c55cfe_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=61c55cfe&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=style&index=0&id=61c55cfe&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61c55cfe_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61c55cfe_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/employee/attendance/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/employee/attendance/index.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_61c55cfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=61c55cfe& */ "./resources/js/views/employee/attendance/index.vue?vue&type=template&id=61c55cfe&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/employee/attendance/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_61c55cfe_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=61c55cfe&lang=css& */ "./resources/js/views/employee/attendance/index.vue?vue&type=style&index=0&id=61c55cfe&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_61c55cfe___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_61c55cfe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/employee/attendance/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/employee/attendance/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/employee/attendance/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/employee/attendance/index.vue?vue&type=template&id=61c55cfe&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/employee/attendance/index.vue?vue&type=template&id=61c55cfe& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_61c55cfe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_61c55cfe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_61c55cfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=61c55cfe& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=template&id=61c55cfe&");


/***/ }),

/***/ "./resources/js/views/employee/attendance/index.vue?vue&type=style&index=0&id=61c55cfe&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/employee/attendance/index.vue?vue&type=style&index=0&id=61c55cfe&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61c55cfe_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=61c55cfe&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/attendance/index.vue?vue&type=style&index=0&id=61c55cfe&lang=css&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=0a54a708f86c0624