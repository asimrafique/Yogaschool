"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/academic/certificate/create"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/academic/certificate/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    certificateForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    if (!helper.hasPermission('create-certificate')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
  },
  methods: {},
  computed: {},
  filters: {},
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      certificateForm: new Form({
        certificate_template_id: '',
        body: '',
        student_record_id: '',
        employee_id: '',
        custom_fields: []
      }),
      type: '',
      certificate_templates: [],
      certificate_template_details: [],
      selected_certificate_template: null,
      selected_student: null,
      selected_student_record: null,
      selected_employee: null,
      studentFilter: {
        name: '',
        page_length: helper.getConfig('page_length')
      },
      employeeFilter: {
        name: '',
        page_length: helper.getConfig('page_length')
      },
      students: {
        data: [],
        total: 0
      },
      employees: {
        data: [],
        total: 0
      }
    };
  },
  mounted: function mounted() {
    this.getPreRequisite();
  },
  methods: {
    getStudentName: function getStudentName(student) {
      return helper.getStudentName(student);
    },
    getStudentFatherName: function getStudentFatherName(student) {
      return student.parent.father_name;
    },
    getEmployeeName: function getEmployeeName(employee) {
      return helper.getEmployeeName(employee);
    },
    getEmployeeCode: function getEmployeeCode(employee) {
      return helper.getEmployeeCode(employee);
    },
    getCustomFieldName: function getCustomFieldName(index) {
      return index + '_custom_field';
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/certificate/pre-requisite').then(function (response) {
        _this.certificate_templates = response.certificate_templates;
        _this.certificate_template_details = response.certificate_template_details;
        if (_this.uuid) _this.get();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onCertificateTemplateSelect: function onCertificateTemplateSelect(selectedOption) {
      var _this2 = this;
      this.certificateForm.certificate_template_id = selectedOption.id;
      var certificate_template = this.certificate_template_details.find(function (o) {
        return o.id == selectedOption.id;
      });
      this.certificateForm.custom_fields = [];
      if (typeof certificate_template != 'undefined') {
        this.type = certificate_template.type;
        this.certificateForm.body = certificate_template.body;
        certificate_template.options.custom_fields.forEach(function (custom_field) {
          _this2.certificateForm.custom_fields.push({
            name: custom_field,
            value: ''
          });
        });
      }
    },
    onCertificateTemplateRemove: function onCertificateTemplateRemove(removedOption) {
      this.certificateForm.certificate_template_id = '';
      this.type = '';
      this.certificateForm.body = '';
    },
    searchStudent: function searchStudent(page) {
      var _this3 = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.studentFilter);
      axios.get('/api/student/search/name?page=' + page + url).then(function (response) {
        _this3.students = response;
        if (!response.total) {
          loader.hide();
          return toastr.error(i18n.general.no_search_result_found);
        }
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    selectStudentRecord: function selectStudentRecord(student, student_record) {
      this.certificateForm.student_record_id = student_record.id;
      this.selected_student = student;
      this.selected_student_record = student_record;
      this.students = [];
      this.studentFilter.name = '';
      this.updateTemplate();
    },
    searchEmployee: function searchEmployee(page) {
      var _this4 = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.employeeFilter);
      axios.get('/api/employee/search/name?page=' + page + url).then(function (response) {
        _this4.employees = response;
        if (!response.total) {
          loader.hide();
          return toastr.error(i18n.general.no_search_result_found);
        }
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    selectEmployee: function selectEmployee(employee) {
      this.certificateForm.employee_id = employee.id;
      this.selected_employee = employee;
      this.employees = [];
      this.employeeFilter.name = '';
      this.updateTemplate();
    },
    updateTemplate: function updateTemplate() {
      var _this5 = this;
      var certificate_template = this.certificate_template_details.find(function (o) {
        return o.id == _this5.certificateForm.certificate_template_id;
      });
      if (typeof certificate_template == 'undefined') return;
      var body = certificate_template.body;
      body = this.updateCustomFields(body);
      if (!this.selected_student && !this.selected_employee) {
        this.certificateForm.body = body;
        return;
      }
      this.certificateForm.body = this.selected_student ? this.updateStudentRecord(body) : this.updateEmployeeRecord(body);
    },
    updateStudentRecord: function updateStudentRecord(body) {
      var student = this.selected_student;
      var student_record = this.selected_student_record;
      var parent = student.parent;
      if (!student_record || !parent) return body;
      var name = this.getStudentName(student);
      return body.replace("#NAME#", name).replace("#FIRST_NAME#", student.first_name).replace("#LAST_NAME#", student.last_name || '').replace("#FATHER_NAME#", parent.father_name).replace("#MOTHER_NAME#", parent.mother_name).replace("#COURSE#", student_record.batch.course.name).replace("#BATCH#", student_record.batch.name).replace("#SESSION#", helper.getDefaultAcademicSession().name).replace("#DATE_OF_BIRTH#", helper.formatDate(student.date_of_birth)).replace("#ADMISSION_NUMBER#", helper.getAdmissionNumber(student_record.admission)).replace("#DATE_OF_ADMISSION#", helper.formatDate(student_record.admission.date_of_admission)).replace("#ROLL_NUMBER#", helper.getRollNumber(student_record)).replace("#CURRENT_DATE#", helper.defaultDate()).replace("#CURRENT_TIME#", helper.defaultTime()).replace("#CURRENT_DATE_TIME#", helper.defaultDateTime()).replace("#PRESENT_ADDRESS#", student.present_address).replace("#PERMANENT_ADDRESS#", student.permanent_address);
    },
    updateEmployeeRecord: function updateEmployeeRecord(body) {
      var employee = this.selected_employee;
      return body.replace("#NAME#", this.getEmployeeName(employee)).replace("#FIRST_NAME#", employee.first_name).replace("#LAST_NAME#", employee.last_name).replace("#FATHER_NAME#", employee.father_name).replace("#MOTHER_NAME#", employee.mother_name).replace("#DATE_OF_BIRTH#", helper.formatDate(employee.date_of_birth)).replace("#EMPLOYEE_CODE#", this.getEmployeeCode(employee)).replace("#DESIGNATION#", helper.getEmployeeDesignationOnDate(employee)).replace("#DATE_OF_JOINING#", helper.getEmployeeDateOfJoining(employee)).replace("#CURRENT_DATE#", helper.defaultDate()).replace("#CURRENT_TIME#", helper.defaultTime()).replace("#CURRENT_DATE_TIME#", helper.defaultDateTime()).replace("#PRESENT_ADDRESS#", employee.present_address).replace("#PERMANENT_ADDRESS#", employee.permanent_address);
    },
    updateCustomFields: function updateCustomFields(body) {
      this.certificateForm.custom_fields.forEach(function (custom_field) {
        if (custom_field.value) body = body.replace('#' + custom_field.name + '#', custom_field.value);
      });
      return body;
    },
    proceed: function proceed() {
      if (this.uuid) this.update();else this.store();
    },
    store: function store() {
      var _this6 = this;
      var loader = this.$loading.show();
      this.certificateForm.post('/api/certificate').then(function (response) {
        toastr.success(response.message);
        _this6.type = null;
        _this6.selected_certificate_template = null;
        _this6.certificateForm.custom_fields = [];
        _this6.selected_student = null;
        _this6.selected_student_record = null;
        _this6.selected_employee = null;
        _this6.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    get: function get() {
      var _this7 = this;
      var loader = this.$loading.show();
      axios.get('/api/certificate/' + this.uuid).then(function (response) {
        _this7.certificateForm.certificate_template_id = response.certificate.certificate_template_id;
        _this7.selected_certificate_template = response.certificate.certificate_template_id ? {
          id: response.certificate.certificate_template_id,
          name: response.certificate.certificate_template.name
        } : null;
        _this7.certificateForm.student_record_id = response.certificate.student_record_id;
        _this7.certificateForm.employee_id = response.certificate.employee_id;
        _this7.type = response.certificate.certificate_template.type;
        if (_this7.type == 'student') {
          _this7.selected_student = response.certificate.student_record.student;
          _this7.selected_student.student_records = [response.certificate.student_record];
          _this7.selected_student.parent = response.certificate.student_record.student.parent;
        } else if (_this7.type == 'employee') {
          _this7.selected_employee = response.certificate.employee;
        }
        _this7.certificateForm.body = response.certificate.body;
        _this7.certificateForm.custom_fields = [];
        if (response.certificate.options && response.certificate.options.custom_fields) {
          var custom_fields = [];
          response.certificate.options.custom_fields.forEach(function (custom_field) {
            custom_fields.push({
              name: custom_field.name,
              value: custom_field.value
            });
          });
          _this7.certificateForm.custom_fields = custom_fields;
        }
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this7.$router.push('/academic/certificate');
      });
    },
    update: function update() {
      var _this8 = this;
      var loader = this.$loading.show();
      this.certificateForm.patch('/api/certificate/' + this.uuid).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this8.$router.push('/academic/certificate');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  },
  computed: {},
  filters: {},
  watch: {
    'certificateForm.custom_fields': {
      handler: function handler(val) {
        this.updateTemplate();
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/create.vue?vue&type=template&id=72fac24d&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/create.vue?vue&type=template&id=72fac24d& ***!
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
  }, [_vm._v(_vm._s(_vm.trans("academic.add_new_certificate")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/academic/certificate");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("academic.certificate")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card p-4"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("certificate-form")], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/form.vue?vue&type=template&id=5f703756&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/form.vue?vue&type=template&id=5f703756& ***!
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
  return _c("div", [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.proceed.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.certificateForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-5"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.certificate_template")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "certificate_template_id",
      id: "certificate_template_id",
      options: _vm.certificate_templates,
      placeholder: _vm.trans("academic.select_certificate_template")
    },
    on: {
      select: _vm.onCertificateTemplateSelect,
      close: function close($event) {
        return _vm.certificateForm.errors.clear("certificate_template_id");
      },
      remove: _vm.onCertificateTemplateRemove
    },
    model: {
      value: _vm.selected_certificate_template,
      callback: function callback($$v) {
        _vm.selected_certificate_template = $$v;
      },
      expression: "selected_certificate_template"
    }
  }, [!_vm.certificate_templates.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.certificateForm,
      "prop-name": "certificate_template_id"
    }
  })], 1), _vm._v(" "), _vm.type == "student" ? _c("div", [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "input-group mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.studentFilter.name,
      expression: "studentFilter.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "student_name",
      placeholder: _vm.trans("student.student_search_by_name")
    },
    domProps: {
      value: _vm.studentFilter.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.studentFilter, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    staticClass: "btn btn-info pull-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.searchStudent
    }
  }, [_c("i", {
    staticClass: "fas fa-search"
  }), _vm._v(" " + _vm._s(_vm.trans("general.search")))])])])]), _vm._v(" "), _vm.students.total ? [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("student.name")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("academic.batch")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("student.first_guardian_name")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("student.contact_number")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  })])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.students.data, function (student) {
    return _vm._l(student.student_records, function (student_record) {
      return _c("tr", [_c("td", [_vm._v(_vm._s(_vm.getStudentName(student)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(student_record.batch.course.name + " " + student_record.batch.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(student.parent.first_guardian_name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(student.contact_number))]), _vm._v(" "), _c("td", {
        staticClass: "table-option"
      }, [_c("button", {
        staticClass: "btn btn-sm btn-info",
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.selectStudentRecord(student, student_record);
          }
        }
      }, [_vm._v(_vm._s(_vm.trans("student.select_student")))])])]);
    });
  })], 2)])]), _vm._v(" "), _c("pagination-record", {
    attrs: {
      "page-length": _vm.studentFilter.page_length,
      records: _vm.students
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.studentFilter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.studentFilter, "page_length", $event);
      },
      updateRecords: _vm.searchStudent
    }
  })] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.type == "employee" ? _c("div", [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "input-group mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.employeeFilter.name,
      expression: "employeeFilter.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "employee_name",
      placeholder: _vm.trans("employee.employee_search_by_name")
    },
    domProps: {
      value: _vm.employeeFilter.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.employeeFilter, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    staticClass: "btn btn-info pull-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.searchEmployee
    }
  }, [_c("i", {
    staticClass: "fas fa-search"
  }), _vm._v(" " + _vm._s(_vm.trans("general.search")))])])])]), _vm._v(" "), _vm.employees.total ? [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("employee.code")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("employee.name")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("employee.father_name")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("employee.contact_number")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  })])]), _vm._v(" "), _c("tbody", _vm._l(_vm.employees.data, function (employee) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(_vm.getEmployeeCode(employee)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getEmployeeName(employee)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(employee.father_name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(employee.contact_number))]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("button", {
      staticClass: "btn btn-sm btn-info",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.selectEmployee(employee);
        }
      }
    }, [_vm._v(_vm._s(_vm.trans("employee.select_employee")))])])]);
  }), 0)])]), _vm._v(" "), _c("pagination-record", {
    attrs: {
      "page-length": _vm.employeeFilter.page_length,
      records: _vm.employees
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.employeeFilter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.employeeFilter, "page_length", $event);
      },
      updateRecords: _vm.searchEmployee
    }
  })] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.type == "student" && _vm.selected_student && _vm.selected_student_record ? _c("div", {
    staticClass: "m-b-20"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_vm._v(_vm._s(_vm.trans("student.name") + ": " + _vm.getStudentName(_vm.selected_student)))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._v(_vm._s(_vm.trans("student.father_name") + ": " + _vm.getStudentFatherName(_vm.selected_student)) + " "), _c("br")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._v(_vm._s(_vm.trans("academic.batch") + ": " + _vm.selected_student_record.batch.course.name + " " + _vm.selected_student_record.batch.name))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._v(_vm._s(_vm.trans("student.contact_number") + ": " + _vm.selected_student.contact_number))])])]) : _vm._e(), _vm._v(" "), _vm.type == "employee" && _vm.selected_employee ? _c("div", {
    staticClass: "m-b-20"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_vm._v(_vm._s(_vm.trans("employee.code") + ": " + _vm.getEmployeeCode(_vm.selected_employee)))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._v(_vm._s(_vm.trans("employee.name") + ": " + _vm.getEmployeeName(_vm.selected_employee)))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._v(_vm._s(_vm.trans("employee.father_name") + ": " + _vm.selected_employee.father_name) + " "), _c("br")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._v(_vm._s(_vm.trans("employee.contact_number") + ": " + _vm.selected_employee.contact_number))])])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.certificateForm.custom_fields, function (custom_field, index) {
    return _c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(custom_field.name))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: custom_field.value,
        expression: "custom_field.value"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: _vm.getCustomFieldName(index),
        placeholder: _vm.trans("academic.enter_certificate_template_custom_field_value")
      },
      domProps: {
        value: custom_field.value
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(custom_field, "value", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.certificateForm,
        "prop-name": _vm.getCustomFieldName(index)
      }
    })], 1);
  }), _vm._v(" "), _vm.certificateForm.certificate_template_id ? _c("button", {
    staticClass: "btn btn-info",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))]) : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-7"
  }, [_vm.certificateForm.body ? _c("div", {
    staticClass: "border p-4",
    domProps: {
      innerHTML: _vm._s(_vm.certificateForm.body)
    }
  }) : _vm._e()])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/academic/certificate/create.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/academic/certificate/create.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_72fac24d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=72fac24d& */ "./resources/js/views/academic/certificate/create.vue?vue&type=template&id=72fac24d&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/academic/certificate/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_72fac24d___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_72fac24d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/academic/certificate/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/academic/certificate/form.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/academic/certificate/form.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_5f703756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=5f703756& */ "./resources/js/views/academic/certificate/form.vue?vue&type=template&id=5f703756&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/academic/certificate/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_5f703756___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_5f703756___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/academic/certificate/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/academic/certificate/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/academic/certificate/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/academic/certificate/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/academic/certificate/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/academic/certificate/create.vue?vue&type=template&id=72fac24d&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/academic/certificate/create.vue?vue&type=template&id=72fac24d& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_72fac24d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_72fac24d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_72fac24d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=72fac24d& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/create.vue?vue&type=template&id=72fac24d&");


/***/ }),

/***/ "./resources/js/views/academic/certificate/form.vue?vue&type=template&id=5f703756&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/academic/certificate/form.vue?vue&type=template&id=5f703756& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_5f703756___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_5f703756___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_5f703756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=5f703756& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/certificate/form.vue?vue&type=template&id=5f703756&");


/***/ })

}]);
//# sourceMappingURL=create.js.map?id=6e2e62ac039735f6