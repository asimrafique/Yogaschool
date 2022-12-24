"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/communication/meeting/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      search: '',
      student_search_results: [],
      employee_search_results: [],
      displayResult: false,
      resultLoading: false,
      timeout: null
    };
  },
  methods: {
    searchResult: function searchResult() {
      this.resultLoading = true;
      clearTimeout(this.timeout);
      var self = this;
      this.timeout = setTimeout(function () {
        if (self.search.length < 3) {
          return;
        }
        axios.get('/api/search?q=' + self.search).then(function (response) {
          self.student_search_results = response.student_records;
          self.employee_search_results = response.employees;
          self.resultLoading = false;
        })["catch"](function (error) {
          self.resultLoading = false;
          helper.showErrorMsg(error);
        });
      }, 1000);
    },
    getStudentName: function getStudentName(student) {
      return helper.getStudentName(student);
    },
    getEmployeeName: function getEmployeeName(employee) {
      return helper.getEmployeeName(employee);
    },
    getEmployeeDesignationOnDate: function getEmployeeDesignationOnDate(employee) {
      return helper.getEmployeeDesignationOnDate(employee);
    },
    submitStudent: function submitStudent(student_record) {
      this.$emit('searched', {
        type: 'student',
        id: student_record.id,
        key: 'student_' + student_record.id,
        name: student_record.student.name,
        description_1: student_record.batch.course.name + ' ' + student_record.batch.name,
        description_2: student_record.student.parent.first_guardian_name,
        contact_number: student_record.student.contact_number
      });
      this.displayResult = false;
      this.search = '';
    },
    submitEmployee: function submitEmployee(employee) {
      this.$emit('searched', {
        type: 'employee',
        key: 'employee_' + employee.id,
        id: employee.id,
        name: employee.name,
        description_1: this.getEmployeeDesignationOnDate(employee),
        description_2: employee.employee_code,
        contact_number: employee.contact_number
      });
      this.displayResult = false;
      this.search = '';
    }
  },
  watch: {
    search: function search(val) {
      if (val.length >= 3) {
        this.searchResult();
      } else {
        this.student_search_results = [];
        this.employee_search_results = [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/audience.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/audience.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['meeting']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_user_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/user-search */ "./resources/js/components/user-search.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    userSearch: _components_user_search__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      meetingForm: new Form({
        title: '',
        date: '',
        start_time: '',
        end_time: '',
        owner_video_preference: 0,
        audience_video_preference: 0,
        audience: null,
        course_id: [],
        batch_id: [],
        department_id: [],
        employee_category_id: [],
        description: '',
        upload_token: '',
        individual_students: [],
        individual_employees: []
      }),
      start_time: {
        hour: '',
        minute: '',
        meridiem: 'am'
      },
      end_time: {
        hour: '',
        minute: '',
        meridiem: 'am'
      },
      audiences: [],
      courses: [],
      selected_courses: null,
      batches: [],
      selected_batches: null,
      departments: [],
      selected_departments: null,
      employee_categories: [],
      selected_employee_categories: null,
      module_id: '',
      clearAttachment: true,
      searchResults: []
    };
  },
  props: ['uuid'],
  mounted: function mounted() {
    if (!helper.hasPermission('create-meeting') && !helper.hasPermission('edit-meeting')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getPreRequisite();
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/meeting/pre-requisite').then(function (response) {
        _this.audiences = response.audiences;
        _this.courses = response.courses;
        _this.batches = response.batches;
        _this.departments = response.departments;
        _this.employee_categories = response.employee_categories;
        if (_this.uuid) _this.get();else _this.meetingForm.upload_token = _this.$uuid.v4();
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
      this.meetingForm.individual_students = [];
      this.meetingForm.individual_employees = [];
      this.searchResults.forEach(function (result) {
        if (result.type === 'student') {
          _this2.meetingForm.individual_students.push(result.id);
        } else {
          _this2.meetingForm.individual_employees.push(result.id);
        }
      });
      this.meetingForm.start_time = helper.toTime(this.start_time);
      this.meetingForm.end_time = helper.toTime(this.end_time);
      var loader = this.$loading.show();
      this.meetingForm.post('/api/meeting').then(function (response) {
        toastr.success(response.message);
        _this2.clearAttachment = !_this2.clearAttachment;
        _this2.meetingForm.upload_token = _this2.$uuid.v4();
        _this2.selected_courses = null;
        _this2.selected_batches = null;
        _this2.selected_departments = null;
        _this2.selected_employee_categories = null;
        _this2.meetingForm.individual_students = [];
        _this2.meetingForm.individual_employees = [];
        _this2.searchResults = [];
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
      axios.get('/api/meeting/' + this.uuid).then(function (response) {
        if (!response.is_editable) {
          toastr.error(i18n.user.permission_denied);
          loader.hide();
          _this3.$router.push('/communication/meeting');
        }
        _this3.meetingForm.title = response.meeting.title;
        _this3.meetingForm.date = response.meeting.date;
        _this3.meetingForm.end_date = response.meeting.end_date;
        _this3.meetingForm.description = response.meeting.description;
        _this3.meetingForm.audience = response.meeting.audience;
        _this3.selected_courses = response.meeting.audience == 'selected_course' ? response.selected_audience : [];
        _this3.meetingForm.course_id = response.meeting.audience == 'selected_course' ? _this3.setMultiSelect(response.selected_audience) : [];
        _this3.selected_batches = response.meeting.audience == 'selected_batch' ? response.selected_audience : [];
        _this3.meetingForm.batch_id = response.meeting.audience == 'selected_batch' ? _this3.setMultiSelect(response.selected_audience) : [];
        _this3.selected_departments = response.meeting.audience == 'selected_department' ? response.selected_audience : [];
        _this3.meetingForm.department_id = response.meeting.audience == 'selected_department' ? _this3.setMultiSelect(response.selected_audience) : [];
        _this3.selected_employee_categories = response.meeting.audience == 'selected_employee_category' ? response.selected_audience : [];
        _this3.meetingForm.employee_category_id = response.meeting.audience == 'selected_employee_category' ? _this3.setMultiSelect(response.selected_audience) : [];
        _this3.start_time = response.start_time;
        _this3.end_time = response.end_time;
        _this3.meetingForm.upload_token = response.meeting.upload_token;
        _this3.module_id = response.meeting.id;
        _this3.meetingForm.owner_video_preference = response.meeting.owner_video_preference;
        _this3.meetingForm.audience_video_preference = response.meeting.audience_video_preference;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this3.$router.push('/communication/meeting');
      });
    },
    update: function update() {
      var _this4 = this;
      this.meetingForm.individual_students = [];
      this.meetingForm.individual_employees = [];
      this.searchResults.forEach(function (result) {
        if (result.type === 'student') {
          _this4.meetingForm.individual_students.push(result.id);
        } else {
          _this4.meetingForm.individual_employees.push(result.id);
        }
      });
      this.meetingForm.start_time = helper.toTime(this.start_time);
      this.meetingForm.end_time = helper.toTime(this.end_time);
      var loader = this.$loading.show();
      this.meetingForm.patch('/api/meeting/' + this.uuid).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this4.$router.push('/communication/meeting');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onCourseSelect: function onCourseSelect(selectedOption) {
      this.meetingForm.errors.clear('course_id');
      this.meetingForm.course_id.push(selectedOption.id);
    },
    onCourseRemove: function onCourseRemove(removedOption) {
      this.meetingForm.course_id.splice(this.meetingForm.course_id.indexOf(removedOption.id), 1);
    },
    onBatchSelect: function onBatchSelect(selectedOption) {
      this.meetingForm.errors.clear('batch_id');
      this.meetingForm.batch_id.push(selectedOption.id);
    },
    onBatchRemove: function onBatchRemove(removedOption) {
      this.meetingForm.batch_id.splice(this.meetingForm.batch_id.indexOf(removedOption.id), 1);
    },
    onDepartmentSelect: function onDepartmentSelect(selectedOption) {
      this.meetingForm.errors.clear('department_id');
      this.meetingForm.department_id.push(selectedOption.id);
    },
    onDepartmentRemove: function onDepartmentRemove(removedOption) {
      this.meetingForm.department_id.splice(this.meetingForm.department_id.indexOf(removedOption.id), 1);
    },
    onEmployeeCategorySelect: function onEmployeeCategorySelect(selectedOption) {
      this.meetingForm.errors.clear('employee_category_id');
      this.meetingForm.employee_category_id.push(selectedOption.id);
    },
    onEmployeeCategoryRemove: function onEmployeeCategoryRemove(removedOption) {
      this.meetingForm.employee_category_id.splice(this.meetingForm.employee_category_id.indexOf(removedOption.id), 1);
    },
    setMultiSelect: function setMultiSelect(options) {
      var data = [];
      options.forEach(function (option) {
        data.push(option.id);
      });
      return data;
    },
    addToSearchResult: function addToSearchResult(result) {
      var existing_result = this.searchResults.findIndex(function (o) {
        return o.type === result.type && o.id === result.id;
      });
      if (existing_result < 0) {
        this.searchResults.push(result);
      }
    },
    deleteResult: function deleteResult(result) {
      var idx = this.searchResults.findIndex(function (o) {
        return o.type === result.type && o.id === result.id;
      });
      this.searchResults.splice(idx, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/communication/meeting/form.vue");
/* harmony import */ var _audience__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audience */ "./resources/js/views/communication/meeting/audience.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    meetingForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"],
    meetingAudience: _audience__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      meetings: {
        total: 0,
        data: []
      },
      filter: {
        sort_by: 'date',
        order: 'desc',
        keyword: '',
        course_id: [],
        batch_id: [],
        department_id: [],
        employee_category_id: [],
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'created_at',
        translation: i18n.general.created_at
      }, {
        value: 'date',
        translation: i18n.communication.meeting_date
      }, {
        value: 'title',
        translation: i18n.communication.meeting_title
      }],
      courses: [],
      selected_courses: null,
      batches: [],
      selected_batches: null,
      departments: [],
      selected_departments: null,
      employee_categories: [],
      selected_employee_categories: null,
      showFilterPanel: false,
      showCreatePanel: false,
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-meeting')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getMeetings();
    helper.showDemoNotification(['communication']);
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getEmployeeName: function getEmployeeName(employee) {
      return helper.getEmployeeName(employee);
    },
    getEmployeeDesignationOnDate: function getEmployeeDesignationOnDate(employee, date) {
      return helper.getEmployeeDesignationOnDate(employee, date);
    },
    getMeetings: function getMeetings(page) {
      var _this = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/meeting?page=' + page + url).then(function (response) {
        _this.meetings = response.meetings;
        _this.courses = response.filters.courses;
        _this.batches = response.filters.batches;
        _this.departments = response.filters.departments;
        _this.employee_categories = response.filters.employee_categories;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    showMeeting: function showMeeting(meeting) {
      this.$router.push('/communication/meeting/' + meeting.uuid);
    },
    editMeeting: function editMeeting(meeting) {
      this.$router.push('/communication/meeting/' + meeting.uuid + '/edit');
    },
    confirmDelete: function confirmDelete(meeting) {
      var _this2 = this;
      return function (dialog) {
        return _this2.deleteMeeting(meeting);
      };
    },
    deleteMeeting: function deleteMeeting(meeting) {
      var _this3 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/meeting/' + meeting.uuid).then(function (response) {
        toastr.success(response.message);
        _this3.getMeetings();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    onCourseSelect: function onCourseSelect(selectedOption) {
      this.filter.course_id.push(selectedOption.id);
    },
    onCourseRemove: function onCourseRemove(removedOption) {
      this.filter.course_id.splice(this.filter.course_id.indexOf(removedOption.id), 1);
    },
    onBatchSelect: function onBatchSelect(selectedOption) {
      this.filter.batch_id.push(selectedOption.id);
    },
    onBatchRemove: function onBatchRemove(removedOption) {
      this.filter.batch_id.splice(this.filter.batch_id.indexOf(removedOption.id), 1);
    },
    onDepartmentSelect: function onDepartmentSelect(selectedOption) {
      this.filter.department_id.push(selectedOption.id);
    },
    onDepartmentRemove: function onDepartmentRemove(removedOption) {
      this.filter.department_id.splice(this.filter.department_id.indexOf(removedOption.id), 1);
    },
    onEmployeeCategorySelect: function onEmployeeCategorySelect(selectedOption) {
      this.filter.employee_category_id.push(selectedOption.id);
    },
    onEmployeeCategoryRemove: function onEmployeeCategoryRemove(removedOption) {
      this.filter.employee_category_id.splice(this.filter.employee_category_id.indexOf(removedOption.id), 1);
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
      this.getMeetings();
    },
    'filter.order': function filterOrder(val) {
      this.getMeetings();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getMeetings();
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    },
    isDemo: function isDemo() {
      return !helper.getConfig('mode') ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=template&id=369957ef&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=template&id=369957ef&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "form-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Search Student or Employee"
    },
    domProps: {
      value: _vm.search
    },
    on: {
      keydown: function keydown($event) {
        _vm.displayResult = true;
      },
      focus: function focus($event) {
        _vm.displayResult = true;
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.displayResult ? [_vm.search.length ? _c("ul", {
    staticClass: "autocomplete-results"
  }, [_vm.search.length && _vm.search.length < 3 ? _c("li", {
    staticClass: "autocomplete-no-result"
  }, [_vm._v(_vm._s(_vm.trans("general.type_min_3_char_for_search_result")))]) : _vm.search.length >= 3 && _vm.resultLoading ? _c("li", {
    staticClass: "autocomplete-no-result"
  }, [_vm._v(_vm._s(_vm.trans("general.loading_progress")))]) : _vm.search.length >= 3 && !_vm.student_search_results.length && !_vm.employee_search_results.length && _vm.search.length && !_vm.resultLoading ? _c("li", {
    staticClass: "autocomplete-no-result"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))]) : _vm._e(), _vm._v(" "), _vm.student_search_results.length ? [_c("li", {
    staticClass: "autocomplete-heading"
  }, [_vm._v(_vm._s(_vm.trans("student.student")))]), _vm._v(" "), _vm._l(_vm.student_search_results, function (result) {
    return _c("li", {
      staticClass: "autocomplete-result pointer"
    }, [_c("div", {
      staticClass: "item-info",
      on: {
        click: function click($event) {
          return _vm.submitStudent(result);
        }
      }
    }, [_c("h5", {
      staticClass: "item-heading"
    }, [_vm._v(_vm._s(_vm.getStudentName(result.student)))]), _vm._v(" "), _c("div", {
      staticClass: "item-meta"
    }, [_c("span", {
      staticClass: "father-name"
    }, [_vm._v(_vm._s(result.student.parent.first_guardian_name))]), _vm._v(" "), _c("span", {
      staticClass: "contact"
    }, [_vm._v(" / " + _vm._s(result.student.contact_number))])]), _vm._v(" "), _c("div", {
      staticClass: "item-meta"
    }, [_c("span", {
      staticClass: "course-batch"
    }, [_vm._v(_vm._s(result.batch.course.name + " " + result.batch.name))])])])]);
  })] : _vm._e(), _vm._v(" "), _vm.employee_search_results.length ? [_c("li", {
    staticClass: "autocomplete-heading"
  }, [_vm._v(_vm._s(_vm.trans("employee.employee")))]), _vm._v(" "), _vm._l(_vm.employee_search_results, function (result) {
    return _c("li", {
      staticClass: "autocomplete-result pointer"
    }, [_c("div", {
      staticClass: "item-info",
      on: {
        click: function click($event) {
          return _vm.submitEmployee(result);
        }
      }
    }, [_c("h5", {
      staticClass: "item-heading"
    }, [_vm._v(_vm._s(_vm.getEmployeeName(result)))]), _vm._v(" "), _c("div", {
      staticClass: "item-meta"
    }, [_c("span", {
      staticClass: "contact"
    }, [_vm._v(" / " + _vm._s(result.contact_number))])]), _vm._v(" "), _c("div", {
      staticClass: "item-meta"
    }, [_c("span", {
      staticClass: "course-batch"
    }, [_vm._v(_vm._s(_vm.getEmployeeDesignationOnDate(result)))])])])]);
  })] : _vm._e()], 2) : _vm._e()] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/audience.vue?vue&type=template&id=b67db6a0&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/audience.vue?vue&type=template&id=b67db6a0& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.meeting.audience == "selected_course" ? [_vm._v("\n        " + _vm._s(_vm.trans("academic.course")) + " "), _c("br"), _vm._v(" "), _c("ul", {
    staticStyle: {
      "list-style": "none",
      padding: "0",
      margin: "0"
    }
  }, _vm._l(_vm.meeting.courses, function (course) {
    return _c("li", [_vm._v(_vm._s(course.name + "(" + course.course_group.name + ")"))]);
  }), 0)] : _vm.meeting.audience == "selected_batch" ? [_vm._v("\n        " + _vm._s(_vm.trans("academic.batch")) + " "), _c("br"), _vm._v(" "), _c("ul", {
    staticStyle: {
      "list-style": "none",
      padding: "0",
      margin: "0"
    }
  }, _vm._l(_vm.meeting.batches, function (batch) {
    return _c("li", [_vm._v(_vm._s(batch.name + "(" + batch.course.name + ")"))]);
  }), 0)] : _vm.meeting.audience == "selected_department" ? [_vm._v("\n        " + _vm._s(_vm.trans("employee.department")) + " "), _c("br"), _vm._v(" "), _c("ul", {
    staticStyle: {
      "list-style": "none",
      padding: "0",
      margin: "0"
    }
  }, _vm._l(_vm.meeting.departments, function (department) {
    return _c("li", [_vm._v(_vm._s(department.name))]);
  }), 0)] : _vm.meeting.audience == "selected_employee_category" ? [_vm._v("\n        " + _vm._s(_vm.trans("employee.category")) + " "), _c("br"), _vm._v(" "), _c("ul", {
    staticStyle: {
      "list-style": "none",
      padding: "0",
      margin: "0"
    }
  }, _vm._l(_vm.meeting.employee_categorys, function (employee_category) {
    return _c("li", [_vm._v(_vm._s(employee_category.name))]);
  }), 0)] : _vm._e(), _vm._v(" "), _vm.meeting.options.individual_students && _vm.meeting.options.individual_students.length ? [_c("ul", {
    staticStyle: {
      "list-style": "none",
      padding: "0",
      margin: "0"
    }
  }, [_c("li", [_vm._v(_vm._s(_vm.trans("communication.count_individual_students", {
    attribute: _vm.meeting.options.individual_students.length
  })))])])] : _vm._e(), _vm._v(" "), _vm.meeting.options.individual_employees && _vm.meeting.options.individual_employees.length ? [_c("ul", {
    staticStyle: {
      "list-style": "none",
      padding: "0",
      margin: "0"
    }
  }, [_c("li", [_vm._v(_vm._s(_vm.trans("communication.count_individual_employees", {
    attribute: _vm.meeting.options.individual_employees.length
  })))])])] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=template&id=072b1170&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=template&id=072b1170& ***!
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
  return _c("div", [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.proceed.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.meetingForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("communication.meeting_title")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meetingForm.title,
      expression: "meetingForm.title"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "title",
      placeholder: _vm.trans("communication.meeting_title")
    },
    domProps: {
      value: _vm.meetingForm.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.meetingForm, "title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.meetingForm,
      "prop-name": "title"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("communication.meeting_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("communication.meeting_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.meetingForm.errors.clear("date");
      }
    },
    model: {
      value: _vm.meetingForm.date,
      callback: function callback($$v) {
        _vm.$set(_vm.meetingForm, "date", $$v);
      },
      expression: "meetingForm.date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.meetingForm,
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
  }, [_vm._v(_vm._s(_vm.trans("communication.meeting_start_time")))]), _vm._v(" "), _c("timepicker", {
    attrs: {
      hour: _vm.start_time.hour,
      minute: _vm.start_time.minute,
      meridiem: _vm.start_time.meridiem
    },
    on: {
      "update:hour": function updateHour($event) {
        return _vm.$set(_vm.start_time, "hour", $event);
      },
      "update:minute": function updateMinute($event) {
        return _vm.$set(_vm.start_time, "minute", $event);
      },
      "update:meridiem": function updateMeridiem($event) {
        return _vm.$set(_vm.start_time, "meridiem", $event);
      }
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("communication.meeting_end_time")))]), _vm._v(" "), _c("timepicker", {
    attrs: {
      hour: _vm.end_time.hour,
      minute: _vm.end_time.minute,
      meridiem: _vm.end_time.meridiem
    },
    on: {
      "update:hour": function updateHour($event) {
        return _vm.$set(_vm.end_time, "hour", $event);
      },
      "update:minute": function updateMinute($event) {
        return _vm.$set(_vm.end_time, "minute", $event);
      },
      "update:meridiem": function updateMeridiem($event) {
        return _vm.$set(_vm.end_time, "meridiem", $event);
      }
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meetingForm.audience_video_preference,
      expression: "meetingForm.audience_video_preference"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.meetingForm.audience_video_preference) ? _vm._i(_vm.meetingForm.audience_video_preference, "1") > -1 : _vm.meetingForm.audience_video_preference
    },
    on: {
      change: function change($event) {
        var $$a = _vm.meetingForm.audience_video_preference,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.meetingForm, "audience_video_preference", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.meetingForm, "audience_video_preference", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.meetingForm, "audience_video_preference", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_c("small", [_vm._v(_vm._s(_vm.trans("communication.audience_video_preference")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("communication.meeting_audience")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meetingForm.audience,
      expression: "meetingForm.audience"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "audience"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.meetingForm, "audience", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.meetingForm.errors.clear("audience");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "null",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.audiences, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                " + _vm._s(option.text) + "\n                              ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.meetingForm,
      "prop-name": "audience"
    }
  })], 1)]), _vm._v(" "), _vm.meetingForm.audience == "selected_course" ? _c("div", {
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
      "track-by": "id",
      "group-values": "courses",
      "group-label": "course_group",
      "group-select": false,
      name: "course_id",
      id: "course_id",
      options: _vm.courses,
      placeholder: _vm.trans("academic.select_course"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_courses
    },
    on: {
      select: _vm.onCourseSelect,
      remove: _vm.onCourseRemove
    },
    model: {
      value: _vm.selected_courses,
      callback: function callback($$v) {
        _vm.selected_courses = $$v;
      },
      expression: "selected_courses"
    }
  }, [!_vm.courses.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.meetingForm,
      "prop-name": "course_id"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.meetingForm.audience == "selected_batch" ? _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.batch")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      "group-values": "batches",
      "group-label": "course_group",
      "group-select": false,
      name: "batch_id",
      id: "batch_id",
      options: _vm.batches,
      placeholder: _vm.trans("academic.select_batch"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_batches
    },
    on: {
      select: _vm.onBatchSelect,
      remove: _vm.onBatchRemove
    },
    model: {
      value: _vm.selected_batches,
      callback: function callback($$v) {
        _vm.selected_batches = $$v;
      },
      expression: "selected_batches"
    }
  }, [!_vm.batches.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.meetingForm,
      "prop-name": "batch_id"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.meetingForm.audience == "selected_department" ? _c("div", {
    staticClass: "col-12 col-sm-6"
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
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.meetingForm,
      "prop-name": "department_id"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.meetingForm.audience == "selected_employee_category" ? _c("div", {
    staticClass: "col-12 col-sm-6"
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
      placeholder: _vm.trans("employee.select_category"),
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
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.meetingForm,
      "prop-name": "employee_category_id"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), !_vm.uuid ? _c("div", {
    staticClass: "col-12"
  }, [_c("user-search", {
    on: {
      searched: _vm.addToSearchResult
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("ul", {
    staticClass: "font-80pc"
  }, _vm._l(_vm.searchResults, function (result) {
    return _c("li", {
      key: result.key
    }, [_vm._v("\n                                    " + _vm._s(result.name + " " + result.description_1) + " "), _c("span", {
      staticClass: "text-right text-danger",
      on: {
        click: function click($event) {
          return _vm.deleteResult(result);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-times-circle"
    })]), _vm._v(" "), _c("span", {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(result.description_2) + " " + _vm._s(result.contact_number))])]);
  }), 0)])], 1) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("file-upload-input", {
    attrs: {
      "button-text": _vm.trans("general.upload_document"),
      token: _vm.meetingForm.upload_token,
      module: "meeting",
      "clear-file": _vm.clearAttachment,
      "module-id": _vm.module_id
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("html-editor", {
    attrs: {
      name: "description",
      model: _vm.meetingForm.description,
      height: "300",
      isUpdate: _vm.uuid ? true : false
    },
    on: {
      "update:model": function updateModel($event) {
        return _vm.$set(_vm.meetingForm, "description", $event);
      },
      clearErrors: function clearErrors($event) {
        return _vm.meetingForm.errors.clear("description");
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.meetingForm,
      "prop-name": "description"
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
      to: "/communication/meeting"
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/index.vue?vue&type=template&id=44d750d6&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/index.vue?vue&type=template&id=44d750d6& ***!
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
  }, [_vm._v(_vm._s(_vm.trans("communication.meeting")) + " \n                    "), _vm.meetings.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.meetings.total,
    from: _vm.meetings.from,
    to: _vm.meetings.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_vm.meetings.total && !_vm.showCreatePanel && _vm.hasPermission("create-meeting") ? _c("button", {
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
  }, [_vm._v(_vm._s(_vm.trans("communication.add_new_meeting")))])]) : _vm._e(), _vm._v(" "), !_vm.showFilterPanel ? _c("button", {
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
  }), _vm._v(" "), _c("help-button", {
    on: {
      clicked: function clicked($event) {
        _vm.help_topic = "meeting";
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
  }, [_vm._v(_vm._s(_vm.trans("general.filter")) + "\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.course")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      "group-values": "courses",
      "group-label": "course_group",
      "group-select": false,
      name: "course_id",
      id: "course_id",
      options: _vm.courses,
      placeholder: _vm.trans("academic.select_course"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_courses
    },
    on: {
      select: _vm.onCourseSelect,
      remove: _vm.onCourseRemove
    },
    model: {
      value: _vm.selected_courses,
      callback: function callback($$v) {
        _vm.selected_courses = $$v;
      },
      expression: "selected_courses"
    }
  }, [!_vm.courses.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.batch")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      "group-values": "batches",
      "group-label": "course_group",
      "group-select": false,
      name: "batch_id",
      id: "batch_id",
      options: _vm.batches,
      placeholder: _vm.trans("academic.select_batch"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_batches
    },
    on: {
      select: _vm.onBatchSelect,
      remove: _vm.onBatchRemove
    },
    model: {
      value: _vm.selected_batches,
      callback: function callback($$v) {
        _vm.selected_batches = $$v;
      },
      expression: "selected_batches"
    }
  }, [!_vm.batches.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
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
      placeholder: _vm.trans("employee.select_category"),
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
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("communication.meeting_keyword")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter.keyword,
      expression: "filter.keyword"
    }],
    staticClass: "form-control",
    attrs: {
      name: "keyword"
    },
    domProps: {
      value: _vm.filter.keyword
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filter, "keyword", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
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
      click: _vm.getMeetings
    }
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))])])])]) : _vm._e()]), _vm._v(" "), _vm.hasPermission("create-meeting") ? _c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showCreatePanel ? _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("communication.add_new_meeting")))]), _vm._v(" "), _c("meeting-form", {
    on: {
      completed: _vm.getMeetings,
      cancel: function cancel($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  })], 1)]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.isDemo ? _c("p", {
    staticClass: "alert alert-info m-4"
  }, [_vm._v(_vm._s(_vm.trans("communication.demo_mode_meeting_description")))]) : _vm._e(), _vm._v(" "), _vm.meetings.total ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("communication.meeting_title")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("communication.meeting_duration")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("communication.meeting_audience")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("communication.meeting_created_by")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("general.created_at")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.meetings.data, function (meeting) {
    return _c("tr", [_c("td", [_vm._v("\n                                    " + _vm._s(meeting.title) + "\n                                    "), meeting.is_live ? _c("span", {
      staticClass: "badge badge-success"
    }, [_vm._v(_vm._s(_vm.trans("communication.live")))]) : _vm._e(), _vm._v(" "), meeting.is_expired ? _c("span", {
      staticClass: "badge badge-danger"
    }, [_vm._v(_vm._s(_vm.trans("communication.expired")))]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(_vm._f("moment")(meeting.date)) + " "), meeting.start_time ? _c("span", [_vm._v(_vm._s(_vm._f("momentTime")(meeting.start_time)))]) : _vm._e(), _vm._v(" "), meeting.end_time ? _c("span", [_vm._v(" " + _vm._s(_vm.trans("general.to")) + " \n                                    " + _vm._s(_vm._f("momentTime")(meeting.end_time)))]) : _vm._e()]), _vm._v(" "), _c("td", [_c("meeting-audience", {
      attrs: {
        meeting: meeting
      }
    })], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getEmployeeName(meeting.user.employee)) + " "), _c("br"), _vm._v(" " + _vm._s(_vm.getEmployeeDesignationOnDate(meeting.user.employee, meeting.date)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentDateTime")(meeting.created_at)))]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("general.view_detail"),
        expression: "trans('general.view_detail')"
      }],
      staticClass: "btn btn-success btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.showMeeting(meeting);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-arrow-circle-right"
    })]), _vm._v(" "), _vm.hasPermission("edit-meeting") ? _c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("communication.edit_meeting"),
        expression: "trans('communication.edit_meeting')"
      }],
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.editMeeting(meeting);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })]) : _vm._e(), _vm._v(" "), _vm.hasPermission("delete-meeting") ? _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(meeting)
        },
        expression: "{ok: confirmDelete(meeting)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("communication.delete_meeting"),
        expression: "trans('communication.delete_meeting')"
      }],
      key: meeting.id,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })]) : _vm._e()])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.meetings.total ? _c("module-info", {
    attrs: {
      module: "communication",
      title: "meeting_module_title",
      description: "meeting_module_description",
      icon: "list"
    }
  }, [_c("div", {
    attrs: {
      slot: "btn"
    },
    slot: "btn"
  }, [!_vm.showCreatePanel && _vm.hasPermission("create-meeting") ? _c("button", {
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
      records: _vm.meetings
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getMeetings
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=style&index=0&id=072b1170&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=style&index=0&id=072b1170&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/communication/meeting/form.vue"],"names":[],"mappings":";AA2XA;IACA,aAAA;AACA","sourcesContent":["<template>\r\n    <div>\r\n        <form @submit.prevent=\"proceed\" @keydown=\"meetingForm.errors.clear($event.target.name)\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">{{trans('communication.meeting_title')}}</label>\r\n                        <input class=\"form-control\" type=\"text\" v-model=\"meetingForm.title\" name=\"title\" :placeholder=\"trans('communication.meeting_title')\">\r\n                        <show-error :form-name=\"meetingForm\" prop-name=\"title\"></show-error>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('communication.meeting_date')}}</label>\r\n                                <datepicker v-model=\"meetingForm.date\" :bootstrapStyling=\"true\" @selected=\"meetingForm.errors.clear('date')\" :placeholder=\"trans('communication.meeting_date')\"></datepicker>\r\n                                <show-error :form-name=\"meetingForm\" prop-name=\"date\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('communication.meeting_start_time')}}</label>\r\n                                <timepicker :hour.sync=\"start_time.hour\" :minute.sync=\"start_time.minute\" :meridiem.sync=\"start_time.meridiem\"></timepicker>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('communication.meeting_end_time')}}</label>\r\n                                <timepicker :hour.sync=\"end_time.hour\" :minute.sync=\"end_time.minute\" :meridiem.sync=\"end_time.meridiem\"></timepicker>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\">\r\n                            <!-- <div class=\"form-group\">\r\n                                <label class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" value=\"1\" v-model=\"meetingForm.owner_video_preference\">\r\n                                    <span class=\"custom-control-label\"><small>{{trans('communication.owner_video_preference')}}</small></span>\r\n                                </label> \r\n                            </div> -->\r\n                            <div class=\"form-group\">\r\n                                <label class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" value=\"1\" v-model=\"meetingForm.audience_video_preference\">\r\n                                    <span class=\"custom-control-label\"><small>{{trans('communication.audience_video_preference')}}</small></span>\r\n                                </label> \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('communication.meeting_audience')}}</label>\r\n                                <select v-model=\"meetingForm.audience\" class=\"custom-select col-12\" name=\"audience\" @change=\"meetingForm.errors.clear('audience')\">\r\n                                  <option value=null selected>{{trans('general.select_one')}}</option>\r\n                                  <option v-for=\"option in audiences\" v-bind:value=\"option.value\">\r\n                                    {{ option.text }}\r\n                                  </option>\r\n                                </select>\r\n                                <show-error :form-name=\"meetingForm\" prop-name=\"audience\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\" v-if=\"meetingForm.audience == 'selected_course'\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('academic.course')}}</label>\r\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_courses\" group-values=\"courses\" group-label=\"course_group\" :group-select=\"false\" name=\"course_id\" id=\"course_id\" :options=\"courses\" :placeholder=\"trans('academic.select_course')\" @select=\"onCourseSelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onCourseRemove\" :selected=\"selected_courses\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!courses.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                                <show-error :form-name=\"meetingForm\" prop-name=\"course_id\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\" v-if=\"meetingForm.audience == 'selected_batch'\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('academic.batch')}}</label>\r\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_batches\" group-values=\"batches\" group-label=\"course_group\" :group-select=\"false\" name=\"batch_id\" id=\"batch_id\" :options=\"batches\" :placeholder=\"trans('academic.select_batch')\" @select=\"onBatchSelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onBatchRemove\" :selected=\"selected_batches\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!batches.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                                <show-error :form-name=\"meetingForm\" prop-name=\"batch_id\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\" v-if=\"meetingForm.audience == 'selected_department'\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('employee.department')}}</label>\r\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_departments\" name=\"department_id\" id=\"department_id\" :options=\"departments\" :placeholder=\"trans('employee.select_department')\" @select=\"onDepartmentSelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onDepartmentRemove\" :selected=\"selected_departments\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!departments.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                                <show-error :form-name=\"meetingForm\" prop-name=\"department_id\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\" v-if=\"meetingForm.audience == 'selected_employee_category'\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('employee.category')}}</label>\r\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_employee_categories\" name=\"employee_category_id\" id=\"employee_category_id\" :options=\"employee_categories\" :placeholder=\"trans('employee.select_category')\" @select=\"onEmployeeCategorySelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onEmployeeCategoryRemove\" :selected=\"selected_employee_categories\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!employee_categories.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                                <show-error :form-name=\"meetingForm\" prop-name=\"employee_category_id\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12\" v-if=\"! uuid\">\r\n                            <user-search @searched=\"addToSearchResult\"></user-search>\r\n\r\n                            <div class=\"form-group\">\r\n                                <ul class=\"font-80pc\">\r\n                                    <li v-for=\"result in searchResults\" :key=\"result.key\">\r\n                                        {{result.name+' '+result.description_1}} <span class=\"text-right text-danger\" @click=\"deleteResult(result)\"><i class=\"fas fa-times-circle\"></i></span>\r\n                                        <span class=\"d-block\">{{result.description_2}} {{result.contact_number}}</span>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <file-upload-input :button-text=\"trans('general.upload_document')\" :token=\"meetingForm.upload_token\" module=\"meeting\" :clear-file=\"clearAttachment\" :module-id=\"module_id\"></file-upload-input>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <html-editor name=\"description\" :model.sync=\"meetingForm.description\" height=\"300\" :isUpdate=\"uuid ? true : false\" @clearErrors=\"meetingForm.errors.clear('description')\"></html-editor>\r\n                        <show-error :form-name=\"meetingForm\" prop-name=\"description\"></show-error>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-footer text-right\">\r\n                <router-link to=\"/communication/meeting\" class=\"btn btn-danger waves-effect waves-light \" v-show=\"uuid\">{{trans('general.cancel')}}</router-link>\r\n                <button v-if=\"!uuid\" type=\"button\" class=\"btn btn-danger waves-effect waves-light \" @click=\"$emit('cancel')\">{{trans('general.cancel')}}</button>\r\n                <button type=\"submit\" class=\"btn btn-info waves-effect waves-light\">\r\n                    <span v-if=\"uuid\">{{trans('general.update')}}</span>\r\n                    <span v-else>{{trans('general.save')}}</span>\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</template>\r\n\r\n\r\n<script>\r\n    import userSearch from \"@components/user-search\"\r\n\r\n    export default {\r\n        components: {userSearch},\r\n        data() {\r\n            return {\r\n                meetingForm: new Form({\r\n                    title: '',\r\n                    date: '',\r\n                    start_time: '',\r\n                    end_time: '',\r\n                    owner_video_preference: 0,\r\n                    audience_video_preference: 0,\r\n                    audience: null,\r\n                    course_id: [],\r\n                    batch_id: [],\r\n                    department_id: [],\r\n                    employee_category_id: [],\r\n                    description: '',\r\n                    upload_token: '',\r\n                    individual_students: [],\r\n                    individual_employees: []\r\n                }),\r\n                start_time: {\r\n                    hour: '',\r\n                    minute: '',\r\n                    meridiem: 'am'\r\n                },\r\n                end_time: {\r\n                    hour: '',\r\n                    minute: '',\r\n                    meridiem: 'am'\r\n                },\r\n                audiences: [],\r\n                courses: [],\r\n                selected_courses: null,\r\n                batches: [],\r\n                selected_batches: null,\r\n                departments: [],\r\n                selected_departments: null,\r\n                employee_categories: [],\r\n                selected_employee_categories: null,\r\n                module_id: '',\r\n                clearAttachment: true,\r\n                searchResults: []\r\n            };\r\n        },\r\n        props: ['uuid'],\r\n        mounted() {\r\n            if(!helper.hasPermission('create-meeting') && !helper.hasPermission('edit-meeting')){\r\n                helper.notAccessibleMsg();\r\n                this.$router.push('/dashboard');\r\n            }\r\n\r\n            this.getPreRequisite();\r\n        },\r\n        methods: {\r\n            hasPermission(permission){\r\n                return helper.hasPermission(permission);\r\n            },\r\n            getPreRequisite(){\r\n                let loader = this.$loading.show();\r\n                axios.get('/api/meeting/pre-requisite')\r\n                    .then(response => {\r\n                        this.audiences = response.audiences;\r\n                        this.courses = response.courses;\r\n                        this.batches = response.batches;\r\n                        this.departments = response.departments;\r\n                        this.employee_categories = response.employee_categories;\r\n                        \r\n                        if(this.uuid)\r\n                            this.get();\r\n                        else\r\n                            this.meetingForm.upload_token = this.$uuid.v4();\r\n\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    })\r\n            },\r\n            proceed(){\r\n                if(this.uuid)\r\n                    this.update();\r\n                else\r\n                    this.store();\r\n            },\r\n            store(){\r\n                this.meetingForm.individual_students = [];\r\n                this.meetingForm.individual_employees = [];\r\n                this.searchResults.forEach(result => {\r\n                    if (result.type === 'student') {\r\n                        this.meetingForm.individual_students.push(result.id)\r\n                    } else {\r\n                        this.meetingForm.individual_employees.push(result.id)\r\n                    }\r\n                })\r\n                this.meetingForm.start_time = helper.toTime(this.start_time);\r\n                this.meetingForm.end_time   = helper.toTime(this.end_time);\r\n                let loader = this.$loading.show();\r\n                this.meetingForm.post('/api/meeting')\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        this.clearAttachment = !this.clearAttachment;\r\n                        this.meetingForm.upload_token = this.$uuid.v4();\r\n                        this.selected_courses = null;\r\n                        this.selected_batches = null;\r\n                        this.selected_departments = null;\r\n                        this.selected_employee_categories = null;\r\n                        this.meetingForm.individual_students = [];\r\n                        this.meetingForm.individual_employees = [];\r\n                        this.searchResults = [];\r\n                        this.$emit('completed');\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            get(){\r\n                let loader = this.$loading.show();\r\n                axios.get('/api/meeting/'+this.uuid)\r\n                    .then(response => {\r\n\r\n                        if (! response.is_editable) {\r\n                            toastr.error(i18n.user.permission_denied);\r\n                            loader.hide();\r\n                            this.$router.push('/communication/meeting');\r\n                        }\r\n\r\n                        this.meetingForm.title = response.meeting.title;\r\n                        this.meetingForm.date = response.meeting.date;\r\n                        this.meetingForm.end_date = response.meeting.end_date;\r\n                        this.meetingForm.description = response.meeting.description;\r\n                        this.meetingForm.audience = response.meeting.audience;\r\n                        this.selected_courses = response.meeting.audience == 'selected_course' ? response.selected_audience : [];\r\n                        this.meetingForm.course_id = response.meeting.audience == 'selected_course' ? this.setMultiSelect(response.selected_audience) : [];\r\n                        this.selected_batches = response.meeting.audience == 'selected_batch' ? response.selected_audience : [];\r\n                        this.meetingForm.batch_id = response.meeting.audience == 'selected_batch' ? this.setMultiSelect(response.selected_audience) : [];\r\n                        this.selected_departments = response.meeting.audience == 'selected_department' ? response.selected_audience : [];\r\n                        this.meetingForm.department_id = response.meeting.audience == 'selected_department' ? this.setMultiSelect(response.selected_audience) : [];\r\n                        this.selected_employee_categories = response.meeting.audience == 'selected_employee_category' ? response.selected_audience : [];\r\n                        this.meetingForm.employee_category_id = response.meeting.audience == 'selected_employee_category' ? this.setMultiSelect(response.selected_audience) : [];\r\n                        this.start_time = response.start_time;\r\n                        this.end_time = response.end_time;\r\n                        this.meetingForm.upload_token = response.meeting.upload_token;\r\n                        this.module_id = response.meeting.id;\r\n                        this.meetingForm.owner_video_preference = response.meeting.owner_video_preference;\r\n                        this.meetingForm.audience_video_preference = response.meeting.audience_video_preference;\r\n                        \r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                        this.$router.push('/communication/meeting');\r\n                    });\r\n            },\r\n            update(){\r\n                this.meetingForm.individual_students = [];\r\n                this.meetingForm.individual_employees = [];\r\n                this.searchResults.forEach(result => {\r\n                    if (result.type === 'student') {\r\n                        this.meetingForm.individual_students.push(result.id)\r\n                    } else {\r\n                        this.meetingForm.individual_employees.push(result.id)\r\n                    }\r\n                })\r\n                this.meetingForm.start_time = helper.toTime(this.start_time);\r\n                this.meetingForm.end_time   = helper.toTime(this.end_time);\r\n                let loader = this.$loading.show();\r\n                this.meetingForm.patch('/api/meeting/'+this.uuid)\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        loader.hide();\r\n                        this.$router.push('/communication/meeting');\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            onCourseSelect(selectedOption){\r\n                this.meetingForm.errors.clear('course_id');\r\n                this.meetingForm.course_id.push(selectedOption.id);\r\n            },\r\n            onCourseRemove(removedOption){\r\n                this.meetingForm.course_id.splice(this.meetingForm.course_id.indexOf(removedOption.id), 1);\r\n            },\r\n            onBatchSelect(selectedOption){\r\n                this.meetingForm.errors.clear('batch_id');\r\n                this.meetingForm.batch_id.push(selectedOption.id);\r\n            },\r\n            onBatchRemove(removedOption){\r\n                this.meetingForm.batch_id.splice(this.meetingForm.batch_id.indexOf(removedOption.id), 1);\r\n            },\r\n            onDepartmentSelect(selectedOption){\r\n                this.meetingForm.errors.clear('department_id');\r\n                this.meetingForm.department_id.push(selectedOption.id);\r\n            },\r\n            onDepartmentRemove(removedOption){\r\n                this.meetingForm.department_id.splice(this.meetingForm.department_id.indexOf(removedOption.id), 1);\r\n            },\r\n            onEmployeeCategorySelect(selectedOption){\r\n                this.meetingForm.errors.clear('employee_category_id');\r\n                this.meetingForm.employee_category_id.push(selectedOption.id);\r\n            },\r\n            onEmployeeCategoryRemove(removedOption){\r\n                this.meetingForm.employee_category_id.splice(this.meetingForm.employee_category_id.indexOf(removedOption.id), 1);\r\n            },\r\n            setMultiSelect(options) {\r\n                let data = [];\r\n                options.forEach(option => {\r\n                    data.push(option.id);\r\n                })\r\n\r\n                return data;\r\n            },\r\n            addToSearchResult(result) {\r\n                let existing_result = this.searchResults.findIndex(o => o.type === result.type && o.id === result.id)\r\n\r\n                if (existing_result < 0) {\r\n                    this.searchResults.push(result)\r\n                }\r\n            },\r\n            deleteResult(result) {\r\n                let idx = this.searchResults.findIndex(o => o.type === result.type && o.id === result.id)\r\n                this.searchResults.splice(idx, 1);\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".topbar .top-navbar .app-search input[data-v-369957ef] {\n  background: rgba(0, 20, 40, 0.1);\n  color: #f1f2f4;\n  border: 1px solid rgba(0, 20, 40, 0.1);\n  border-radius: 2px;\n  width: 240px;\n}\n.topbar .top-navbar .app-search input[data-v-369957ef]::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.topbar .top-navbar .app-search input[data-v-369957ef]::placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.topbar .top-navbar .app-search input[data-v-369957ef]:focus {\n  background: rgba(0, 20, 40, 0.2);\n  color: #ffffff;\n  border: 1px solid rgba(0, 20, 40, 0.2);\n}\nul.autocomplete-results[data-v-369957ef] {\n  padding: 0;\n  margin: 0;\n  max-height: 350px;\n  overflow: auto;\n  position: absolute;\n  width: 100%;\n  background: #ffffff;\n  border: 1px solid #d1d2d5;\n  border-top: none;\n  box-shadow: 0 2px 10px rgba(0, 20, 40, 0.2);\n  border-radius: 0 0 6px 6px;\n  z-index: 999999;\n}\nul.autocomplete-results li.autocomplete-heading[data-v-369957ef] {\n  font-size: 16px;\n  padding: 8px;\n  letter-spacing: 0.2px;\n  color: rgba(0, 20, 40, 0.4);\n  border-bottom: 1px solid rgba(0, 20, 40, 0.2);\n}\nul.autocomplete-results li.autocomplete-no-result[data-v-369957ef] {\n  font-size: 12px;\n  padding: 8px;\n  letter-spacing: 0.2px;\n  color: rgba(0, 20, 40, 0.4);\n  border-bottom: 1px solid rgba(0, 20, 40, 0.2);\n}\nul.autocomplete-results > li.autocomplete-result[data-v-369957ef] {\n  display: flex;\n  list-style: none;\n  text-align: left;\n  width: 100%;\n}\nul.autocomplete-results > li.autocomplete-result .item-info[data-v-369957ef] {\n  margin: 0;\n  flex-grow: 2;\n  padding: 5px 8px;\n}\nul.autocomplete-results > li.autocomplete-result .item-info .item-heading[data-v-369957ef] {\n  font-size: 13px;\n  margin-bottom: 0;\n}\nul.autocomplete-results > li.autocomplete-result .item-info .item-meta[data-v-369957ef] {\n  font-size: 11px;\n}\nul.autocomplete-results > li.autocomplete-result[data-v-369957ef]:nth-child(even) {\n  background: rgba(210, 215, 220, 0.2);\n}\nul.autocomplete-results > li.autocomplete-result + li.autocomplete-result[data-v-369957ef] {\n  border-top: 1px solid rgba(0, 20, 40, 0.1);\n}\nul.autocomplete-results > li.autocomplete-result[data-v-369957ef]:hover {\n  background: rgba(200, 205, 215, 0.5);\n  color: rgba(0, 20, 40, 0.8);\n}\nul.autocomplete-results > li.autocomplete-result:hover .item-heading[data-v-369957ef], ul.autocomplete-results > li.autocomplete-result:hover .item-meta[data-v-369957ef] {\n  color: inherit;\n}", "",{"version":3,"sources":["webpack://./resources/js/components/user-search.vue"],"names":[],"mappings":"AACA;EACI,gCAAA;EACA,cAAA;EACA,sCAAA;EACA,kBAAA;EACA,YAAA;AAAJ;AAEA;EACI,+BAAA;AACJ;AAFA;EACI,+BAAA;AACJ;AACA;EACI,gCAAA;EACA,cAAA;EACA,sCAAA;AAEJ;AACA;EACI,UAAA;EACA,SAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,2CAAA;EACA,0BAAA;EACA,eAAA;AAEJ;AAAI;EACI,eAAA;EACA,YAAA;EACA,qBAAA;EACA,2BAAA;EACA,6CAAA;AAER;AAAI;EACI,eAAA;EACA,YAAA;EACA,qBAAA;EACA,2BAAA;EACA,6CAAA;AAER;AACA;EACI,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,WAAA;AAEJ;AAAI;EACI,SAAA;EACA,YAAA;EACA,gBAAA;AAER;AAAQ;EACI,eAAA;EACA,gBAAA;AAEZ;AACQ;EACI,eAAA;AACZ;AAGA;EACI,oCAAA;AAAJ;AAEA;EACI,0CAAA;AACJ;AACA;EACI,oCAAA;EACA,2BAAA;AAEJ;AAAI;EACI,cAAA;AAER","sourcesContent":["\n.topbar .top-navbar .app-search input {\n    background: rgba(0,20,40,0.1);\n    color: #f1f2f4;\n    border: 1px solid rgba(0,20,40,0.1);\n    border-radius: 2px;\n    width: 240px;\n}\n.topbar .top-navbar .app-search input::placeholder {\n    color: rgba(255,255,255,0.4);\n}\n.topbar .top-navbar .app-search input:focus {\n    background: rgba(0,20,40,0.2);\n    color: #ffffff;\n    border: 1px solid rgba(0,20,40,0.2);\n}\n\nul.autocomplete-results {\n    padding: 0;\n    margin: 0;\n    max-height: 350px;\n    overflow: auto;\n    position: absolute;\n    width: 100%;\n    background: #ffffff;\n    border: 1px solid #d1d2d5;\n    border-top: none;\n    box-shadow: 0 2px 10px rgba(0,20,40,0.2);\n    border-radius: 0 0 6px 6px;\n    z-index: 999999;\n\n    li.autocomplete-heading {\n        font-size: 16px;\n        padding: 8px;\n        letter-spacing: 0.2px;\n        color: rgba(0,20,40,0.4);\n        border-bottom: 1px solid rgba(0,20,40,0.2);\n    }\n    li.autocomplete-no-result {\n        font-size: 12px;\n        padding: 8px;\n        letter-spacing: 0.2px;\n        color: rgba(0,20,40,0.4);\n        border-bottom: 1px solid rgba(0,20,40,0.2);\n    }\n}\nul.autocomplete-results > li.autocomplete-result {\n    display: flex;\n    list-style: none;\n    text-align: left;\n    width: 100%;\n\n    .item-info {\n        margin: 0;\n        flex-grow: 2;\n        padding: 5px 8px;\n\n        .item-heading {\n            font-size: 13px;\n            margin-bottom: 0;\n        }\n\n        .item-meta {\n            font-size: 11px;\n        }\n    }\n}\nul.autocomplete-results > li.autocomplete-result:nth-child(even) {\n    background: rgba(210,215,220,0.2);\n}\nul.autocomplete-results > li.autocomplete-result + li.autocomplete-result {\n    border-top: 1px solid rgba(0,20,40,0.1);\n}\nul.autocomplete-results > li.autocomplete-result:hover {\n    background: rgba(200,205,215,0.5);\n    color: rgba(0,20,40,0.8);\n\n    .item-heading, .item-meta {\n        color: inherit;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=style&index=0&id=072b1170&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=style&index=0&id=072b1170&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_072b1170_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=072b1170&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=style&index=0&id=072b1170&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_072b1170_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_072b1170_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_user_search_vue_vue_type_style_index_0_id_369957ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_user_search_vue_vue_type_style_index_0_id_369957ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_user_search_vue_vue_type_style_index_0_id_369957ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/user-search.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/user-search.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user_search_vue_vue_type_template_id_369957ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-search.vue?vue&type=template&id=369957ef&scoped=true& */ "./resources/js/components/user-search.vue?vue&type=template&id=369957ef&scoped=true&");
/* harmony import */ var _user_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-search.vue?vue&type=script&lang=js& */ "./resources/js/components/user-search.vue?vue&type=script&lang=js&");
/* harmony import */ var _user_search_vue_vue_type_style_index_0_id_369957ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true& */ "./resources/js/components/user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_search_vue_vue_type_template_id_369957ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _user_search_vue_vue_type_template_id_369957ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "369957ef",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user-search.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/communication/meeting/audience.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/communication/meeting/audience.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audience_vue_vue_type_template_id_b67db6a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audience.vue?vue&type=template&id=b67db6a0& */ "./resources/js/views/communication/meeting/audience.vue?vue&type=template&id=b67db6a0&");
/* harmony import */ var _audience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audience.vue?vue&type=script&lang=js& */ "./resources/js/views/communication/meeting/audience.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _audience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _audience_vue_vue_type_template_id_b67db6a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _audience_vue_vue_type_template_id_b67db6a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/communication/meeting/audience.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/communication/meeting/form.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/communication/meeting/form.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_072b1170___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=072b1170& */ "./resources/js/views/communication/meeting/form.vue?vue&type=template&id=072b1170&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/communication/meeting/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _form_vue_vue_type_style_index_0_id_072b1170_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=072b1170&lang=css& */ "./resources/js/views/communication/meeting/form.vue?vue&type=style&index=0&id=072b1170&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_072b1170___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_072b1170___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/communication/meeting/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/communication/meeting/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/communication/meeting/index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_44d750d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=44d750d6& */ "./resources/js/views/communication/meeting/index.vue?vue&type=template&id=44d750d6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/communication/meeting/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_44d750d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_44d750d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/communication/meeting/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user-search.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/user-search.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user-search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/communication/meeting/audience.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/communication/meeting/audience.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_audience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./audience.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/audience.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_audience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/communication/meeting/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/communication/meeting/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/communication/meeting/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/communication/meeting/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user-search.vue?vue&type=template&id=369957ef&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/user-search.vue?vue&type=template&id=369957ef&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_user_search_vue_vue_type_template_id_369957ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_user_search_vue_vue_type_template_id_369957ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_user_search_vue_vue_type_template_id_369957ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user-search.vue?vue&type=template&id=369957ef&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=template&id=369957ef&scoped=true&");


/***/ }),

/***/ "./resources/js/views/communication/meeting/audience.vue?vue&type=template&id=b67db6a0&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/communication/meeting/audience.vue?vue&type=template&id=b67db6a0& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_audience_vue_vue_type_template_id_b67db6a0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_audience_vue_vue_type_template_id_b67db6a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_audience_vue_vue_type_template_id_b67db6a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./audience.vue?vue&type=template&id=b67db6a0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/audience.vue?vue&type=template&id=b67db6a0&");


/***/ }),

/***/ "./resources/js/views/communication/meeting/form.vue?vue&type=template&id=072b1170&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/communication/meeting/form.vue?vue&type=template&id=072b1170& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_072b1170___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_072b1170___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_072b1170___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=072b1170& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=template&id=072b1170&");


/***/ }),

/***/ "./resources/js/views/communication/meeting/index.vue?vue&type=template&id=44d750d6&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/communication/meeting/index.vue?vue&type=template&id=44d750d6& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_44d750d6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_44d750d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_44d750d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=44d750d6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/index.vue?vue&type=template&id=44d750d6&");


/***/ }),

/***/ "./resources/js/views/communication/meeting/form.vue?vue&type=style&index=0&id=072b1170&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/communication/meeting/form.vue?vue&type=style&index=0&id=072b1170&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_072b1170_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=072b1170&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/form.vue?vue&type=style&index=0&id=072b1170&lang=css&");


/***/ }),

/***/ "./resources/js/components/user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_user_search_vue_vue_type_style_index_0_id_369957ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user-search.vue?vue&type=style&index=0&id=369957ef&lang=scss&scoped=true&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=aa36994ad4352229