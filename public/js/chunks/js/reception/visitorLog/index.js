"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/reception/visitorLog/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/form.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      visitorLogForm: new Form({
        name: '',
        company_name: '',
        relation_with_student: '',
        contact_number: '',
        address: '',
        type: 'parent',
        student_id: '',
        visiting_purpose_id: '',
        employee_id: '',
        visitor_count: 1,
        date_of_visit: '',
        entry_time: '',
        exit_time: '',
        remarks: ''
      }),
      loaded: false,
      entry_time: {
        hour: '',
        minute: '',
        meridiem: 'am'
      },
      exit_time: {
        hour: '',
        minute: '',
        meridiem: ''
      },
      visiting_purposes: [],
      selected_visiting_purpose: null,
      students: [],
      selected_student: null,
      employees: [],
      selected_employee: null
    };
  },
  props: ['uuid'],
  mounted: function mounted() {
    if (!helper.hasPermission('create-visitor-log') && !helper.hasPermission('edit-visitor-log')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    if (this.uuid) this.get();
    this.getPreRequisite();
  },
  methods: {
    timePadding: function timePadding(time) {
      return helper.formatWithPadding(time, 2);
    },
    proceed: function proceed() {
      if (this.uuid) this.update();else this.store();
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/visitor/log/pre-requisite').then(function (response) {
        _this.visiting_purposes = response.visiting_purposes;
        _this.students = response.students;
        _this.employees = response.employees;
        _this.visitorLogForm.date_of_visit = helper.today();
        if (!_this.uuid) _this.loaded = true;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    store: function store() {
      var _this2 = this;
      this.visitorLogForm.entry_time = this.entry_time.hour && this.entry_time.minute ? helper.formatWithPadding(this.entry_time.hour, 2) + ':' + helper.formatWithPadding(this.entry_time.minute, 2) + ' ' + this.entry_time.meridiem : '';
      var loader = this.$loading.show();
      this.visitorLogForm.post('/api/visitor/log').then(function (response) {
        toastr.success(response.message);
        _this2.selected_visiting_purpose = null;
        _this2.selected_student = null;
        _this2.selected_employee = null;
        _this2.entry_time.hour = '';
        _this2.entry_time.minute = '';
        _this2.entry_time.meridiem = 'am';
        _this2.visitorLogForm.type = 'parent';
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
      axios.get('/api/visitor/log/' + this.uuid).then(function (response) {
        _this3.visitorLogForm.type = response.visitor_log.type;
        _this3.visitorLogForm.name = response.visitor_log.name;
        _this3.visitorLogForm.company_name = response.visitor_log.company_name;
        _this3.visitorLogForm.contact_number = response.visitor_log.contact_number;
        _this3.visitorLogForm.address = response.visitor_log.address;
        _this3.visitorLogForm.student_id = response.visitor_log.student_id;
        _this3.selected_student = response.selected_student;
        _this3.visitorLogForm.relation_with_student = response.visitor_log.relation_with_student;
        _this3.visitorLogForm.visiting_purpose_id = response.visitor_log.visiting_purpose_id;
        _this3.selected_visiting_purpose = response.selected_visiting_purpose;
        _this3.visitorLogForm.employee_id = response.visitor_log.employee_id;
        _this3.selected_employee = response.selected_employee;
        _this3.visitorLogForm.remarks = response.visitor_log.remarks;
        _this3.visitorLogForm.date_of_visit = response.visitor_log.date_of_visit;
        _this3.entry_time.hour = response.entry_time.hour;
        _this3.entry_time.minute = response.entry_time.minute;
        _this3.entry_time.meridiem = response.entry_time.meridiem;
        if (response.visitor_log.exit_time) {
          _this3.exit_time.hour = response.exit_time.hour;
          _this3.exit_time.minute = response.exit_time.minute;
          _this3.exit_time.meridiem = response.exit_time.meridiem;
        }
        _this3.loaded = true;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this3.$router.push('/reception/visitor/log');
      });
    },
    update: function update() {
      var _this4 = this;
      this.visitorLogForm.entry_time = this.entry_time.hour && this.entry_time.minute ? helper.formatWithPadding(this.entry_time.hour, 2) + ':' + helper.formatWithPadding(this.entry_time.minute, 2) + ' ' + this.entry_time.meridiem : '';
      this.visitorLogForm.exit_time = this.exit_time.hour && this.exit_time.minute ? helper.formatWithPadding(this.exit_time.hour, 2) + ':' + helper.formatWithPadding(this.exit_time.minute, 2) + ' ' + this.exit_time.meridiem : '';
      var loader = this.$loading.show();
      this.visitorLogForm.patch('/api/visitor/log/' + this.uuid).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this4.$router.push('/reception/visitor/log');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onVisitingPurposeSelect: function onVisitingPurposeSelect(selectedOption) {
      return this.visitorLogForm.visiting_purpose_id = selectedOption.id;
    },
    onStudentSelect: function onStudentSelect(selectedOption) {
      return this.visitorLogForm.student_id = selectedOption.id;
    },
    onEmployeeSelect: function onEmployeeSelect(selectedOption) {
      return this.visitorLogForm.employee_id = selectedOption.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/reception/visitor-log/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    visitorLogForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      visitor_logs: {
        total: 0,
        data: []
      },
      filter: {
        sort_by: 'entry_time',
        order: 'desc',
        type: '',
        student_id: [],
        employee_id: [],
        visiting_purpose_id: [],
        date_of_visit_start_date: '',
        date_of_visit_end_date: '',
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'entry_time',
        translation: i18n.reception.entry_time
      }, {
        value: 'created_at',
        translation: i18n.general.created_at
      }],
      types: [{
        text: i18n.reception.visitor_type_parent,
        value: 'parent'
      }, {
        text: i18n.reception.visitor_type_other,
        value: 'other'
      }],
      showFilterPanel: false,
      showCreatePanel: false,
      students: [],
      selected_students: null,
      employees: [],
      selected_employees: null,
      visiting_purposes: [],
      selected_visiting_purposes: null,
      help_topic: '',
      showUuid: '',
      showModal: false
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-visitor-log')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getVisitorLogs();
    helper.showDemoNotification(['reception']);
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    showAction: function showAction(visitor_log) {
      this.showUuid = visitor_log.uuid;
      this.showModal = true;
    },
    getStudentName: function getStudentName(student) {
      return helper.getStudentName(student);
    },
    getEmployeeName: function getEmployeeName(employee) {
      return helper.getEmployeeName(employee);
    },
    getVisitorLogs: function getVisitorLogs(page) {
      var _this = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      this.filter.date_of_visit_start_date = helper.toDate(this.filter.date_of_visit_start_date);
      this.filter.date_of_visit_end_date = helper.toDate(this.filter.date_of_visit_end_date);
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/visitor/log?page=' + page + url).then(function (response) {
        _this.visitor_logs = response.visitor_logs;
        _this.students = response.filters.students;
        _this.employees = response.filters.employees;
        _this.visiting_purposes = response.filters.visiting_purposes;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    editVisitorLog: function editVisitorLog(visitor_log) {
      this.$router.push('/reception/visitor/log/' + visitor_log.uuid + '/edit');
    },
    confirmDelete: function confirmDelete(visitor_log) {
      var _this2 = this;
      return function (dialog) {
        return _this2.deleteVisitorLog(visitor_log);
      };
    },
    deleteVisitorLog: function deleteVisitorLog(visitor_log) {
      var _this3 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/visitor/log/' + visitor_log.uuid).then(function (response) {
        toastr.success(response.message);
        _this3.getVisitorLogs();
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
      axios.post('/api/visitor/log/print', {
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
      axios.post('/api/visitor/log/pdf', {
        filter: this.filter
      }).then(function (response) {
        loader.hide();
        window.open('/download/report/' + response + '?token=' + _this4.authToken);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onStudentSelect: function onStudentSelect(selectedOption) {
      this.filter.student_id.push(selectedOption.id);
    },
    onStudentRemove: function onStudentRemove(removedOption) {
      this.filter.student_id.splice(this.filter.student_id.indexOf(removedOption.id), 1);
    },
    onEmployeeSelect: function onEmployeeSelect(selectedOption) {
      this.filter.employee_id.push(selectedOption.id);
    },
    onEmployeeRemove: function onEmployeeRemove(removedOption) {
      this.filter.employee_id.splice(this.filter.employee_id.indexOf(removedOption.id), 1);
    },
    onVisitingPurposeSelect: function onVisitingPurposeSelect(selectedOption) {
      this.filter.visiting_purpose_id.push(selectedOption.id);
    },
    onVisitingPurposeRemove: function onVisitingPurposeRemove(removedOption) {
      this.filter.visiting_purpose_id.splice(this.filter.visiting_purpose_id.indexOf(removedOption.id), 1);
    },
    getEmployeeDesignationOnDate: function getEmployeeDesignationOnDate(employee, date) {
      return helper.getEmployeeDesignationOnDate(employee, date);
    }
  },
  filters: {
    moment: function moment(date) {
      return helper.formatDate(date);
    },
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    },
    momentTime: function momentTime(time) {
      return helper.formatTime(time);
    }
  },
  watch: {
    'filter.sort_by': function filterSort_by(val) {
      this.getVisitorLogs();
    },
    'filter.order': function filterOrder(val) {
      this.getVisitorLogs();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getVisitorLogs();
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/form.vue?vue&type=template&id=157ab0a6&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/form.vue?vue&type=template&id=157ab0a6& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
        return _vm.visitorLogForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("reception.visitor_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitorLogForm.name,
      expression: "visitorLogForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: _vm.trans("reception.visitor_name")
    },
    domProps: {
      value: _vm.visitorLogForm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visitorLogForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "radio radio-success m-t-20"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitorLogForm.type,
      expression: "visitorLogForm.type"
    }],
    attrs: {
      type: "radio",
      value: "parent",
      id: "type_parent",
      name: "type"
    },
    domProps: _defineProperty({
      checked: _vm.visitorLogForm.type == "parent"
    }, "checked", _vm._q(_vm.visitorLogForm.type, "parent")),
    on: {
      click: function click($event) {
        return _vm.visitorLogForm.errors.clear("type");
      },
      change: function change($event) {
        return _vm.$set(_vm.visitorLogForm, "type", "parent");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "type_parent"
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.visitor_type_parent")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitorLogForm.type,
      expression: "visitorLogForm.type"
    }],
    attrs: {
      type: "radio",
      value: "other",
      id: "type_other",
      name: "type"
    },
    domProps: _defineProperty({
      checked: _vm.visitorLogForm.type == "other"
    }, "checked", _vm._q(_vm.visitorLogForm.type, "other")),
    on: {
      click: function click($event) {
        return _vm.visitorLogForm.errors.clear("type");
      },
      change: function change($event) {
        return _vm.$set(_vm.visitorLogForm, "type", "other");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "type_other"
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.visitor_type_other")))])])])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "type"
    }
  })], 1)]), _vm._v(" "), _vm.visitorLogForm.type == "parent" ? [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.student")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "student_id",
      id: "student_id",
      options: _vm.students,
      placeholder: _vm.trans("student.select_student")
    },
    on: {
      select: _vm.onStudentSelect,
      close: function close($event) {
        return _vm.visitorLogForm.errors.clear("student_id");
      },
      remove: function remove($event) {
        _vm.visitorLogForm.student_id = "";
      }
    },
    model: {
      value: _vm.selected_student,
      callback: function callback($$v) {
        _vm.selected_student = $$v;
      },
      expression: "selected_student"
    }
  }, [!_vm.students.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "student_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.relation_with_student")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitorLogForm.relation_with_student,
      expression: "visitorLogForm.relation_with_student"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "relation_with_student",
      placeholder: _vm.trans("reception.relation_with_student")
    },
    domProps: {
      value: _vm.visitorLogForm.relation_with_student
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visitorLogForm, "relation_with_student", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "relation_with_student"
    }
  })], 1)])] : _vm._e(), _vm._v(" "), _vm.visitorLogForm.type == "other" ? [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.visitor_company_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitorLogForm.company_name,
      expression: "visitorLogForm.company_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "company_name",
      placeholder: _vm.trans("reception.visitor_company_name")
    },
    domProps: {
      value: _vm.visitorLogForm.company_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visitorLogForm, "company_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "company_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.visitor_contact_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitorLogForm.contact_number,
      expression: "visitorLogForm.contact_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "contact_number",
      placeholder: _vm.trans("reception.visitor_contact_number")
    },
    domProps: {
      value: _vm.visitorLogForm.contact_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visitorLogForm, "contact_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "contact_number"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.visitor_address")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "1",
      name: "addres",
      placeholder: _vm.trans("reception.visitor_address")
    },
    model: {
      value: _vm.visitorLogForm.address,
      callback: function callback($$v) {
        _vm.$set(_vm.visitorLogForm, "address", $$v);
      },
      expression: "visitorLogForm.address"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "address"
    }
  })], 1)])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.visitor_count")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitorLogForm.visitor_count,
      expression: "visitorLogForm.visitor_count"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "visitor_count",
      placeholder: _vm.trans("reception.visitor_count")
    },
    domProps: {
      value: _vm.visitorLogForm.visitor_count
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visitorLogForm, "visitor_count", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "visitor_count"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.visiting_purpose")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "visiting_purpose_id",
      id: "visiting_purpose_id",
      options: _vm.visiting_purposes,
      placeholder: _vm.trans("reception.select_visiting_purpose")
    },
    on: {
      select: _vm.onVisitingPurposeSelect,
      close: function close($event) {
        return _vm.visitorLogForm.errors.clear("visiting_purpose_id");
      },
      remove: function remove($event) {
        _vm.visitorLogForm.visiting_purpose_id = "";
      }
    },
    model: {
      value: _vm.selected_visiting_purpose,
      callback: function callback($$v) {
        _vm.selected_visiting_purpose = $$v;
      },
      expression: "selected_visiting_purpose"
    }
  }, [!_vm.visiting_purposes.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "visiting_purpose_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.whom_to_meet")))]), _vm._v(" "), _c("v-select", {
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
        return _vm.visitorLogForm.errors.clear("employee_id");
      },
      remove: function remove($event) {
        _vm.visitorLogForm.employee_id = "";
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
      "form-name": _vm.visitorLogForm,
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
  }, [_vm._v(_vm._s(_vm.trans("reception.date_of_visit")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("reception.date_of_visit")
    },
    on: {
      selected: function selected($event) {
        return _vm.visitorLogForm.errors.clear("date_of_visit");
      }
    },
    model: {
      value: _vm.visitorLogForm.date_of_visit,
      callback: function callback($$v) {
        _vm.$set(_vm.visitorLogForm, "date_of_visit", $$v);
      },
      expression: "visitorLogForm.date_of_visit"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "date_of_visit"
    }
  })], 1)]), _vm._v(" "), _vm.loaded ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.entry_time")))]), _vm._v(" "), _c("timepicker", {
    attrs: {
      hour: _vm.entry_time.hour,
      minute: _vm.entry_time.minute,
      meridiem: _vm.entry_time.meridiem
    },
    on: {
      "update:hour": function updateHour($event) {
        return _vm.$set(_vm.entry_time, "hour", $event);
      },
      "update:minute": function updateMinute($event) {
        return _vm.$set(_vm.entry_time, "minute", $event);
      },
      "update:meridiem": function updateMeridiem($event) {
        return _vm.$set(_vm.entry_time, "meridiem", $event);
      }
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.uuid ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.exit_time")))]), _vm._v(" "), _c("timepicker", {
    attrs: {
      hour: _vm.exit_time.hour,
      minute: _vm.exit_time.minute,
      meridiem: _vm.exit_time.meridiem
    },
    on: {
      "update:hour": function updateHour($event) {
        return _vm.$set(_vm.exit_time, "hour", $event);
      },
      "update:minute": function updateMinute($event) {
        return _vm.$set(_vm.exit_time, "minute", $event);
      },
      "update:meridiem": function updateMeridiem($event) {
        return _vm.$set(_vm.exit_time, "meridiem", $event);
      }
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.visitor_remarks")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "1",
      name: "remarks",
      placeholder: _vm.trans("reception.visitor_remarks")
    },
    model: {
      value: _vm.visitorLogForm.remarks,
      callback: function callback($$v) {
        _vm.$set(_vm.visitorLogForm, "remarks", $$v);
      },
      expression: "visitorLogForm.remarks"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.visitorLogForm,
      "prop-name": "remarks"
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
      to: "/reception/visitor/log"
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
  }, [_vm.uuid ? _c("span", [_vm._v(_vm._s(_vm.trans("general.update")))]) : _c("span", [_vm._v(_vm._s(_vm.trans("general.save")))])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/index.vue?vue&type=template&id=19b28239&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/index.vue?vue&type=template&id=19b28239& ***!
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
  }, [_vm._v(_vm._s(_vm.trans("reception.visitor_log")) + " \n                    "), _vm.visitor_logs.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.visitor_logs.total,
    from: _vm.visitor_logs.from,
    to: _vm.visitor_logs.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_vm.visitor_logs.total && !_vm.showCreatePanel && _vm.hasPermission("create-visitor-log") ? _c("button", {
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
  }, [_vm._v(_vm._s(_vm.trans("reception.add_new_visitor_log")))])]) : _vm._e(), _vm._v(" "), !_vm.showFilterPanel ? _c("button", {
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
        _vm.help_topic = "reception.visitor-log";
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
  }, [_vm._v(_vm._s(_vm.trans("reception.visitor_type")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter.type,
      expression: "filter.type"
    }],
    staticClass: "custom-select col-12",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filter, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "null",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.types, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  })], 2)])]), _vm._v(" "), _vm.filter.type == "parent" ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.student")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "student_id",
      id: "student_id",
      options: _vm.students,
      placeholder: _vm.trans("student.select_student"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_students
    },
    on: {
      select: _vm.onStudentSelect,
      remove: _vm.onStudentRemove
    },
    model: {
      value: _vm.selected_students,
      callback: function callback($$v) {
        _vm.selected_students = $$v;
      },
      expression: "selected_students"
    }
  }, [!_vm.students.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)]) : _vm._e(), _vm._v(" "), _vm.filter.type == "other" ? _c("div", {
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
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("reception.visiting_purpose")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "visiting_purpose_id",
      id: "visiting_purpose_id",
      options: _vm.visiting_purposes,
      placeholder: _vm.trans("reception.select_visiting_purpose"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_visiting_purposes
    },
    on: {
      select: _vm.onVisitingPurposeSelect,
      remove: _vm.onVisitingPurposeRemove
    },
    model: {
      value: _vm.selected_visiting_purposes,
      callback: function callback($$v) {
        _vm.selected_visiting_purposes = $$v;
      },
      expression: "selected_visiting_purposes"
    }
  }, [!_vm.visiting_purposes.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("date-range-picker", {
    attrs: {
      "start-date": _vm.filter.date_of_visit_start_date,
      "end-date": _vm.filter.date_of_visit_end_date,
      label: _vm.trans("general.date_between")
    },
    on: {
      "update:startDate": function updateStartDate($event) {
        return _vm.$set(_vm.filter, "date_of_visit_start_date", $event);
      },
      "update:start-date": function updateStartDate($event) {
        return _vm.$set(_vm.filter, "date_of_visit_start_date", $event);
      },
      "update:endDate": function updateEndDate($event) {
        return _vm.$set(_vm.filter, "date_of_visit_end_date", $event);
      },
      "update:end-date": function updateEndDate($event) {
        return _vm.$set(_vm.filter, "date_of_visit_end_date", $event);
      }
    }
  })], 1)]), _vm._v(" "), _c("div", {
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
      click: _vm.getVisitorLogs
    }
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))])])])]) : _vm._e()]), _vm._v(" "), _vm.hasPermission("create-visitor-log") ? _c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showCreatePanel ? _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("reception.add_new_visitor_log")))]), _vm._v(" "), _c("visitor-log-form", {
    on: {
      completed: _vm.getVisitorLogs,
      cancel: function cancel($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  })], 1)]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.visitor_logs.total ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("reception.visiting_purpose")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("reception.visitor_detail")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("reception.visitor_count")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("reception.date_of_visit")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("reception.entry_time")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("reception.exit_time")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("reception.whom_to_meet")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("reception.visitor_remarks")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.visitor_logs.data, function (visitor_log) {
    return _c("tr", [_c("td", {
      domProps: {
        textContent: _vm._s(visitor_log.id)
      }
    }), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(visitor_log.visiting_purpose.name)
      }
    }), _vm._v(" "), _c("td", [visitor_log.type == "parent" ? [visitor_log.name ? [_vm._v(_vm._s(_vm.trans("reception.visitor_name") + ": " + visitor_log.name) + " "), _c("br")] : _vm._e(), _vm._v(" "), visitor_log.relation_with_student ? [_vm._v(_vm._s(_vm.trans("reception.relation_with_student") + ": " + visitor_log.relation_with_student) + " "), _c("br")] : _vm._e(), _vm._v("\n                                        " + _vm._s(_vm.trans("student.name") + ": " + _vm.getStudentName(visitor_log.student)) + " "), _c("br"), _vm._v("\n                                        " + _vm._s(_vm.trans("student.first_guardian_name") + ": " + visitor_log.student.parent.first_guardian_name) + " "), _c("br"), _vm._v("\n                                        " + _vm._s(_vm.trans("student.mother_name") + ": " + visitor_log.student.parent.mother_name) + " "), _c("br"), _vm._v("\n                                        " + _vm._s(_vm.trans("student.contact_number") + ": " + visitor_log.student.contact_number) + " "), _c("br")] : [_vm._v("\n                                        " + _vm._s(_vm.trans("reception.visitor_name") + ": " + visitor_log.name) + " "), _c("br"), _vm._v("\n                                        " + _vm._s(_vm.trans("reception.visitor_company_name") + ": " + visitor_log.company_name) + " "), _c("br"), _vm._v("\n                                        " + _vm._s(_vm.trans("reception.visitor_contact_number") + ": " + visitor_log.contact_number) + " "), _c("br"), _vm._v("\n                                        " + _vm._s(_vm.trans("reception.visitor_address") + ": " + visitor_log.address) + "\n                                    ")]], 2), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(visitor_log.visitor_count)
      }
    }), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(visitor_log.date_of_visit)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentTime")(visitor_log.entry_time)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentTime")(visitor_log.exit_time)))]), _vm._v(" "), _c("td", [visitor_log.employee_id ? _c("span", [_vm._v("\n                                        " + _vm._s(_vm.getEmployeeName(visitor_log.employee)) + " "), _c("br"), _vm._v("\n                                        " + _vm._s(_vm.getEmployeeDesignationOnDate(visitor_log.employee, visitor_log.date_of_visit)) + "\n                                    ")]) : _c("span", [_vm._v("\n                                        -\n                                    ")])]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(visitor_log.remarks) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_c("a", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("general.print"),
        expression: "trans('general.print')"
      }],
      staticClass: "btn btn-success btn-sm",
      attrs: {
        href: "/reception/visitor/pass/".concat(visitor_log.uuid, "/print?token=").concat(_vm.authToken),
        target: "_blank"
      }
    }, [_c("i", {
      staticClass: "fas fa-print"
    })]), _vm._v(" "), _vm.hasPermission("edit-visitor-log") ? _c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("reception.edit_visitor_log"),
        expression: "trans('reception.edit_visitor_log')"
      }],
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.editVisitorLog(visitor_log);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })]) : _vm._e(), _vm._v(" "), _vm.hasPermission("delete-visitor-log") ? _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(visitor_log)
        },
        expression: "{ok: confirmDelete(visitor_log)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("reception.delete_visitor_log"),
        expression: "trans('reception.delete_visitor_log')"
      }],
      key: visitor_log.id,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })]) : _vm._e()])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.visitor_logs.total ? _c("module-info", {
    attrs: {
      module: "reception",
      title: "visitor_log_module_title",
      description: "visitor_log_module_description",
      icon: "list"
    }
  }, [_c("div", {
    attrs: {
      slot: "btn"
    },
    slot: "btn"
  }, [!_vm.showCreatePanel && _vm.hasPermission("create-visitor-log") ? _c("button", {
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
      records: _vm.visitor_logs
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getVisitorLogs
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

/***/ "./resources/js/views/reception/visitor-log/form.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/reception/visitor-log/form.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_157ab0a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=157ab0a6& */ "./resources/js/views/reception/visitor-log/form.vue?vue&type=template&id=157ab0a6&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/reception/visitor-log/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_157ab0a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_157ab0a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reception/visitor-log/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/reception/visitor-log/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/reception/visitor-log/index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_19b28239___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=19b28239& */ "./resources/js/views/reception/visitor-log/index.vue?vue&type=template&id=19b28239&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/reception/visitor-log/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_19b28239___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_19b28239___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reception/visitor-log/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/reception/visitor-log/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/reception/visitor-log/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reception/visitor-log/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/reception/visitor-log/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reception/visitor-log/form.vue?vue&type=template&id=157ab0a6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/reception/visitor-log/form.vue?vue&type=template&id=157ab0a6& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_157ab0a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_157ab0a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_157ab0a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=157ab0a6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/form.vue?vue&type=template&id=157ab0a6&");


/***/ }),

/***/ "./resources/js/views/reception/visitor-log/index.vue?vue&type=template&id=19b28239&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/reception/visitor-log/index.vue?vue&type=template&id=19b28239& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_19b28239___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_19b28239___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_19b28239___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=19b28239& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/reception/visitor-log/index.vue?vue&type=template&id=19b28239&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=9fcb0f14a72343b8