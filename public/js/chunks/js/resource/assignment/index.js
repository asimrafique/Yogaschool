"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/resource/assignment/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      assignmentForm: new Form({
        batch_id: '',
        subject_id: '',
        title: '',
        date_of_assignment: '',
        due_date: '',
        description: '',
        upload_token: ''
      }),
      batches: [],
      selected_batch: null,
      subjects: [],
      selected_subject: null,
      subject_detail: [],
      module_id: '',
      clearAttachment: true
    };
  },
  props: ['uuid'],
  mounted: function mounted() {
    if (!helper.hasPermission('create-assignment') && !helper.hasPermission('edit-assignment')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    if (this.uuid) this.get();else this.assignmentForm.upload_token = this.$uuid.v4();
    this.getPreRequisite();
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/assignment/pre-requisite').then(function (response) {
        _this.batches = response.batches;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getSubjects: function getSubjects() {
      var _this2 = this;
      if (!this.uuid) {
        this.assignmentForm.subject_id = '';
        this.selected_subject = null;
      }
      var loader = this.$loading.show();
      axios.post('/api/batch/' + this.assignmentForm.batch_id + '/subjects').then(function (response) {
        _this2.subjects = response.subjects;
        _this2.subject_details = response.subject_details;
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
      var _this3 = this;
      var loader = this.$loading.show();
      this.assignmentForm.post('/api/assignment').then(function (response) {
        toastr.success(response.message);
        _this3.clearAttachment = !_this3.clearAttachment;
        _this3.assignmentForm.upload_token = _this3.$uuid.v4();
        _this3.selected_batch = null;
        _this3.selected_subject = null;
        _this3.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    get: function get() {
      var _this4 = this;
      var loader = this.$loading.show();
      axios.get('/api/assignment/' + this.uuid).then(function (response) {
        var assignment = response.assignment;
        _this4.assignmentForm.title = assignment.title;
        _this4.assignmentForm.date_of_assignment = assignment.date_of_assignment;
        _this4.assignmentForm.due_date = assignment.due_date;
        _this4.assignmentForm.description = assignment.description;
        _this4.assignmentForm.batch_id = assignment.subject.batch_id;
        _this4.assignmentForm.subject_id = assignment.subject_id;
        _this4.selected_batch = _this4.assignmentForm.batch_id ? {
          id: assignment.subject.batch_id,
          name: assignment.subject.batch.course.name + ' ' + assignment.subject.batch.name
        } : null;
        _this4.selected_subject = assignment.subject_id ? {
          id: assignment.subject_id,
          name: assignment.subject.name + ' (' + assignment.subject.code + ')'
        } : null;
        _this4.assignmentForm.upload_token = assignment.upload_token;
        _this4.module_id = assignment.id;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this4.$router.push('/resource/assignment');
      });
    },
    update: function update() {
      var _this5 = this;
      var loader = this.$loading.show();
      this.assignmentForm.patch('/api/assignment/' + this.uuid).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this5.$router.push('/resource/assignment');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onBatchSelect: function onBatchSelect(selectedOption) {
      this.assignmentForm.batch_id = selectedOption.id;
    },
    onSubjectSelect: function onSubjectSelect(selectedOption) {
      this.assignmentForm.subject_id = selectedOption.id;
    }
  },
  watch: {
    'assignmentForm.batch_id': function assignmentFormBatch_id(val) {
      if (val) {
        this.getSubjects();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/resource/assignment/form.vue");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show */ "./resources/js/views/resource/assignment/show.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    assignmentForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignmentDetail: _show__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      assignments: {
        total: 0,
        data: []
      },
      filter: {
        sort_by: 'date_of_assignment',
        order: 'desc',
        title: '',
        batch_id: [],
        date_of_assignment_start_date: '',
        date_of_assignment_end_date: '',
        due_date_start_date: '',
        due_date_end_date: '',
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'date_of_assignment',
        translation: i18n.resource.date_of_assignment
      }, {
        value: 'title',
        translation: i18n.resource.assignment_title
      }],
      batches: [],
      selected_batches: null,
      showFilterPanel: false,
      showCreatePanel: false,
      help_topic: '',
      showUuid: '',
      showModal: false
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-assignment')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getAssignments();
    helper.showDemoNotification(['resource']);
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    showAction: function showAction(assignment) {
      this.showUuid = assignment.uuid;
      this.showModal = true;
    },
    getEmployeeName: function getEmployeeName(employee) {
      return helper.getEmployeeName(employee);
    },
    getEmployeeDesignationOnDate: function getEmployeeDesignationOnDate(employee, date) {
      return helper.getEmployeeDesignationOnDate(employee, date);
    },
    getAssignments: function getAssignments(page) {
      var _this = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      this.filter.date_of_assignment_start_date = helper.toDate(this.filter.date_of_assignment_start_date);
      this.filter.date_of_assignment_end_date = helper.toDate(this.filter.date_of_assignment_end_date);
      this.filter.due_date_start_date = helper.toDate(this.filter.due_date_start_date);
      this.filter.due_date_end_date = helper.toDate(this.filter.due_date_end_date);
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/assignment?page=' + page + url).then(function (response) {
        _this.assignments = response.assignments;
        _this.batches = response.filters.batches;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    editAssignment: function editAssignment(assignment) {
      this.$router.push('/resource/assignment/' + assignment.uuid + '/edit');
    },
    confirmDelete: function confirmDelete(assignment) {
      var _this2 = this;
      return function (dialog) {
        return _this2.deleteAssignment(assignment);
      };
    },
    deleteAssignment: function deleteAssignment(assignment) {
      var _this3 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/assignment/' + assignment.uuid).then(function (response) {
        toastr.success(response.message);
        _this3.getAssignments();
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
      axios.post('/api/assignment/print', {
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
      axios.post('/api/assignment/pdf', {
        filter: this.filter
      }).then(function (response) {
        loader.hide();
        window.open('/download/report/' + response + '?token=' + _this4.authToken);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onBatchSelect: function onBatchSelect(selectedOption) {
      this.filter.batch_id.push(selectedOption.id);
    },
    onBatchRemove: function onBatchRemove(removedOption) {
      this.filter.batch_id.splice(this.filter.batch_id.indexOf(removedOption.id), 1);
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
      this.getAssignments();
    },
    'filter.order': function filterOrder(val) {
      this.getAssignments();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getAssignments();
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/show.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/show.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ['uuid', 'url'],
  mounted: function mounted() {
    if (this.uuid) this.get();
  },
  data: function data() {
    return {
      assignment: [],
      attachments: []
    };
  },
  methods: {
    get: function get() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/assignment/' + this.uuid).then(function (response) {
        _this.assignment = response.assignment;
        _this.attachments = response.attachments;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getEmployeeName: function getEmployeeName(employee) {
      return helper.getEmployeeName(employee);
    },
    getEmployeeDesignation: function getEmployeeDesignation(employee, date) {
      return helper.getEmployeeDesignation(employee, date);
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  },
  filters: {
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    },
    moment: function moment(date) {
      return helper.formatDate(date);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=template&id=81706b78&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=template&id=81706b78& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
        return _vm.assignmentForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("academic.batch")) + " ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "group-values": "batches",
      "group-label": "course_group",
      "group-select": false,
      name: "batch_id",
      id: "batch_id",
      options: _vm.batches,
      placeholder: _vm.trans("academic.select_batch")
    },
    on: {
      select: _vm.onBatchSelect,
      close: function close($event) {
        return _vm.assignmentForm.errors.clear("batch_id");
      },
      remove: function remove($event) {
        _vm.assignmentForm.batch_id = "";
      }
    },
    model: {
      value: _vm.selected_batch,
      callback: function callback($$v) {
        _vm.selected_batch = $$v;
      },
      expression: "selected_batch"
    }
  }, [!_vm.batches.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.assignmentForm,
      "prop-name": "batch_id"
    }
  })], 1), _vm._v(" "), _vm.assignmentForm.batch_id ? _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.subject")) + " ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "subject_id",
      id: "subject_id",
      options: _vm.subjects,
      placeholder: _vm.trans("resource.select_subject")
    },
    on: {
      select: _vm.onSubjectSelect,
      close: function close($event) {
        return _vm.assignmentForm.errors.clear("subject_id");
      },
      remove: function remove($event) {
        _vm.assignmentForm.subject_id = "";
      }
    },
    model: {
      value: _vm.selected_subject,
      callback: function callback($$v) {
        _vm.selected_subject = $$v;
      },
      expression: "selected_subject"
    }
  }, [!_vm.subjects.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.assignmentForm,
      "prop-name": "subject_id"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("resource.assignment_title")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.assignmentForm.title,
      expression: "assignmentForm.title"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "title",
      placeholder: _vm.trans("resource.assignment_title")
    },
    domProps: {
      value: _vm.assignmentForm.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.assignmentForm, "title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.assignmentForm,
      "prop-name": "title"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("resource.date_of_assignment")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("resource.date_of_assignment")
    },
    on: {
      selected: function selected($event) {
        return _vm.assignmentForm.errors.clear("date_of_assignment");
      }
    },
    model: {
      value: _vm.assignmentForm.date_of_assignment,
      callback: function callback($$v) {
        _vm.$set(_vm.assignmentForm, "date_of_assignment", $$v);
      },
      expression: "assignmentForm.date_of_assignment"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.assignmentForm,
      "prop-name": "date_of_assignment"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("resource.due_date_of_assignment")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("resource.due_date_of_assignment")
    },
    on: {
      selected: function selected($event) {
        return _vm.assignmentForm.errors.clear("due_date");
      }
    },
    model: {
      value: _vm.assignmentForm.due_date,
      callback: function callback($$v) {
        _vm.$set(_vm.assignmentForm, "due_date", $$v);
      },
      expression: "assignmentForm.due_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.assignmentForm,
      "prop-name": "due_date"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("file-upload-input", {
    attrs: {
      "button-text": _vm.trans("general.upload_document"),
      token: _vm.assignmentForm.upload_token,
      module: "assignment",
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
      model: _vm.assignmentForm.description,
      height: "300",
      isUpdate: _vm.uuid ? true : false
    },
    on: {
      "update:model": function updateModel($event) {
        return _vm.$set(_vm.assignmentForm, "description", $event);
      },
      clearErrors: function clearErrors($event) {
        return _vm.assignmentForm.errors.clear("description");
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.assignmentForm,
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
      to: "/resource/assignment"
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/index.vue?vue&type=template&id=df5c9afc&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/index.vue?vue&type=template&id=df5c9afc& ***!
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
  }, [_vm._v(_vm._s(_vm.trans("resource.assignment")) + " \n                    "), _vm.assignments.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.assignments.total,
    from: _vm.assignments.from,
    to: _vm.assignments.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_vm.assignments.total && !_vm.showCreatePanel && _vm.hasPermission("create-assignment") ? _c("button", {
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
  }, [_vm._v(_vm._s(_vm.trans("resource.add_new_assignment")))])]) : _vm._e(), _vm._v(" "), !_vm.showFilterPanel ? _c("button", {
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
        _vm.help_topic = "resource.assignment";
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
  }, [_vm._v(_vm._s(_vm.trans("resource.assignment_title")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter.title,
      expression: "filter.title"
    }],
    staticClass: "form-control",
    attrs: {
      name: "title"
    },
    domProps: {
      value: _vm.filter.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filter, "title", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("date-range-picker", {
    attrs: {
      "start-date": _vm.filter.date_of_assignment_start_date,
      "end-date": _vm.filter.date_of_assignment_end_date,
      label: _vm.trans("resource.date_of_assignment_between")
    },
    on: {
      "update:startDate": function updateStartDate($event) {
        return _vm.$set(_vm.filter, "date_of_assignment_start_date", $event);
      },
      "update:start-date": function updateStartDate($event) {
        return _vm.$set(_vm.filter, "date_of_assignment_start_date", $event);
      },
      "update:endDate": function updateEndDate($event) {
        return _vm.$set(_vm.filter, "date_of_assignment_end_date", $event);
      },
      "update:end-date": function updateEndDate($event) {
        return _vm.$set(_vm.filter, "date_of_assignment_end_date", $event);
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("date-range-picker", {
    attrs: {
      "start-date": _vm.filter.due_date_start_date,
      "end-date": _vm.filter.due_date_end_date,
      label: _vm.trans("resource.due_date_between")
    },
    on: {
      "update:startDate": function updateStartDate($event) {
        return _vm.$set(_vm.filter, "due_date_start_date", $event);
      },
      "update:start-date": function updateStartDate($event) {
        return _vm.$set(_vm.filter, "due_date_start_date", $event);
      },
      "update:endDate": function updateEndDate($event) {
        return _vm.$set(_vm.filter, "due_date_end_date", $event);
      },
      "update:end-date": function updateEndDate($event) {
        return _vm.$set(_vm.filter, "due_date_end_date", $event);
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
      click: _vm.getAssignments
    }
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))])])])]) : _vm._e()]), _vm._v(" "), _vm.hasPermission("create-assignment") ? _c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showCreatePanel ? _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("resource.add_new_assignment")))]), _vm._v(" "), _c("assignment-form", {
    on: {
      completed: _vm.getAssignments,
      cancel: function cancel($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  })], 1)]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.assignments.total ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("academic.subject")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("academic.batch")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("resource.assignment_title")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("resource.date_of_assignment")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("resource.due_date_of_assignment")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("resource.assignment_posted_by")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("general.created_at")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.assignments.data, function (assignment) {
    return _c("tr", [_c("td", {
      domProps: {
        textContent: _vm._s(assignment.subject.name + " (" + assignment.subject.code + ")")
      }
    }), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(assignment.subject.batch.course.name + " " + assignment.subject.batch.name)
      }
    }), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(assignment.title)
      }
    }), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(assignment.date_of_assignment)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(assignment.due_date)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getEmployeeName(assignment.employee)) + " "), _c("br"), _vm._v(" " + _vm._s(_vm.getEmployeeDesignationOnDate(assignment.employee, assignment.date_of_assignment)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentDateTime")(assignment.created_at)))]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("resource.view_assignment"),
        expression: "trans('resource.view_assignment')"
      }],
      staticClass: "btn btn-success btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.showAction(assignment);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-arrow-circle-right"
    })]), _vm._v(" "), _vm.hasPermission("edit-assignment") ? _c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("resource.edit_assignment"),
        expression: "trans('resource.edit_assignment')"
      }],
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.editAssignment(assignment);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })]) : _vm._e(), _vm._v(" "), _vm.hasPermission("delete-assignment") ? _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(assignment)
        },
        expression: "{ok: confirmDelete(assignment)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("resource.delete_assignment"),
        expression: "trans('resource.delete_assignment')"
      }],
      key: assignment.id,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })]) : _vm._e()])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.assignments.total ? _c("module-info", {
    attrs: {
      module: "resource",
      title: "assignment_module_title",
      description: "assignment_module_description",
      icon: "list"
    }
  }, [_c("div", {
    attrs: {
      slot: "btn"
    },
    slot: "btn"
  }, [!_vm.showCreatePanel && _vm.hasPermission("create-assignment") ? _c("button", {
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
      records: _vm.assignments
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getAssignments
    }
  })], 1)])], 1), _vm._v(" "), _vm.showModal ? _c("assignment-detail", {
    attrs: {
      uuid: _vm.showUuid
    },
    on: {
      close: function close($event) {
        _vm.showModal = false;
      }
    }
  }) : _vm._e(), _vm._v(" "), _c("right-panel", {
    attrs: {
      topic: _vm.help_topic
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/show.vue?vue&type=template&id=e24c5806&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/show.vue?vue&type=template&id=e24c5806& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm.assignment.id ? _c("div", {
    staticClass: "modal-header"
  }, [_vm._t("header", function () {
    return [_c("span", [_vm._v(_vm._s(_vm.assignment.title))]), _vm._v(" "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          return _vm.$emit("close");
        }
      }
    }, [_vm._v("x")])];
  })], 2) : _vm._e(), _vm._v(" "), _vm.assignment.id ? _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("h6", {
      staticClass: "card-title"
    }, [_c("strong", [_vm._v(_vm._s(_vm.trans("academic.subject")) + ":")]), _vm._v(" " + _vm._s(_vm.assignment.subject.name + " (" + _vm.assignment.subject.code + ")") + " \n                            "), _c("br"), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.trans("academic.batch")) + ":")]), _vm._v(" " + _vm._s(_vm.assignment.subject.batch.course.name + " " + _vm.assignment.subject.batch.name) + " \n                            "), _c("br"), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.trans("resource.date_of_assignment")) + ":")]), _vm._v(" " + _vm._s(_vm._f("moment")(_vm.assignment.date_of_assignment)) + " \n                            "), _c("br"), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.trans("resource.due_date_of_assignment")) + ":")]), _vm._v(" " + _vm._s(_vm._f("moment")(_vm.assignment.due_date)) + " \n                            "), _vm.assignment.employee ? _c("p", {
      staticClass: "pull-right"
    }, [_c("strong", [_vm._v(_vm._s(_vm.trans("resource.assignment_posted_by")) + ":")]), _vm._v(" " + _vm._s(_vm.getEmployeeName(_vm.assignment.employee)) + " " + _vm._s(_vm.getEmployeeDesignation(_vm.assignment.employee, _vm.assignment.date_of_assignment)) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "m-t-20 html-view",
      domProps: {
        innerHTML: _vm._s(_vm.assignment.description)
      }
    }), _vm._v(" "), _vm.attachments.length ? _c("div", [_c("ul", {
      staticClass: "m-t-10 upload-file-list"
    }, _vm._l(_vm.attachments, function (attachment) {
      return _c("li", {
        staticClass: "upload-file-list-item"
      }, [_c("a", {
        staticClass: "no-link-color",
        attrs: {
          href: "/resource/assignment/".concat(_vm.assignment.uuid, "/attachment/").concat(attachment.uuid, "/download?token=").concat(_vm.authToken)
        }
      }, [_c("i", {
        "class": ["file-icon", "fas", "fa-lg", attachment.file_info.icon]
      }), _vm._v(" "), _c("span", {
        staticClass: "upload-file-list-item-size"
      }, [_vm._v(_vm._s(attachment.file_info.size))]), _vm._v(" " + _vm._s(attachment.user_filename))])]);
    }), 0)]) : _vm._e(), _vm._v(" "), _c("hr"), _vm._v(" "), _c("p", [_c("i", {
      staticClass: "far fa-clock"
    }), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.trans("general.created_at")) + " " + _vm._s(_vm._f("momentDateTime")(_vm.assignment.created_at)))]), _vm._v(" "), _c("span", {
      staticClass: "pull-right"
    }, [_c("i", {
      staticClass: "far fa-clock"
    }), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.trans("general.updated_at")) + " " + _vm._s(_vm._f("momentDateTime")(_vm.assignment.updated_at)))])])])];
  })], 2) : _vm._e()])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/resource/assignment/form.vue"],"names":[],"mappings":";AAkNA;IACA,aAAA;AACA","sourcesContent":["<template>\n    <div>\n        <form @submit.prevent=\"proceed\" @keydown=\"assignmentForm.errors.clear($event.target.name)\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"form-group\">\n                        <label for=\"\">{{trans('academic.batch')}} </label>\n                        <v-select label=\"name\" v-model=\"selected_batch\" group-values=\"batches\" group-label=\"course_group\" :group-select=\"false\" name=\"batch_id\" id=\"batch_id\" :options=\"batches\" :placeholder=\"trans('academic.select_batch')\" @select=\"onBatchSelect\" @close=\"assignmentForm.errors.clear('batch_id')\" @remove=\"assignmentForm.batch_id = ''\">\n                            <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!batches.length\">\n                                {{trans('general.no_option_found')}}\n                            </div>\n                        </v-select>\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"batch_id\"></show-error>\n                    </div>\n                    <div class=\"form-group\" v-if=\"assignmentForm.batch_id\">\n                        <label for=\"\">{{trans('academic.subject')}} </label>\n                        <v-select label=\"name\" v-model=\"selected_subject\" name=\"subject_id\" id=\"subject_id\" :options=\"subjects\" :placeholder=\"trans('resource.select_subject')\" @select=\"onSubjectSelect\" @close=\"assignmentForm.errors.clear('subject_id')\" @remove=\"assignmentForm.subject_id = ''\">\n                            <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!subjects.length\">\n                                {{trans('general.no_option_found')}}\n                            </div>\n                        </v-select>\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"subject_id\"></show-error>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">{{trans('resource.assignment_title')}}</label>\n                        <input class=\"form-control\" type=\"text\" v-model=\"assignmentForm.title\" name=\"title\" :placeholder=\"trans('resource.assignment_title')\">\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"title\"></show-error>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">{{trans('resource.date_of_assignment')}}</label>\n                        <datepicker v-model=\"assignmentForm.date_of_assignment\" :bootstrapStyling=\"true\" @selected=\"assignmentForm.errors.clear('date_of_assignment')\" :placeholder=\"trans('resource.date_of_assignment')\"></datepicker>\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"date_of_assignment\"></show-error>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">{{trans('resource.due_date_of_assignment')}}</label>\n                        <datepicker v-model=\"assignmentForm.due_date\" :bootstrapStyling=\"true\" @selected=\"assignmentForm.errors.clear('due_date')\" :placeholder=\"trans('resource.due_date_of_assignment')\"></datepicker>\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"due_date\"></show-error>\n                    </div>\n                    <div class=\"form-group\">\n                        <file-upload-input :button-text=\"trans('general.upload_document')\" :token=\"assignmentForm.upload_token\" module=\"assignment\" :clear-file=\"clearAttachment\" :module-id=\"module_id\"></file-upload-input>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"form-group\">\n                        <html-editor name=\"description\" :model.sync=\"assignmentForm.description\" height=\"300\" :isUpdate=\"uuid ? true : false\" @clearErrors=\"assignmentForm.errors.clear('description')\"></html-editor>\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"description\"></show-error>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer text-right\">\n                <router-link to=\"/resource/assignment\" class=\"btn btn-danger waves-effect waves-light \" v-show=\"uuid\">{{trans('general.cancel')}}</router-link>\n                <button v-if=\"!uuid\" type=\"button\" class=\"btn btn-danger waves-effect waves-light \" @click=\"$emit('cancel')\">{{trans('general.cancel')}}</button>\n                <button type=\"submit\" class=\"btn btn-info waves-effect waves-light\">\n                    <span v-if=\"uuid\">{{trans('general.update')}}</span>\n                    <span v-else>{{trans('general.save')}}</span>\n                </button>\n            </div>\n        </form>\n    </div>\n</template>\n\n\n<script>\n\n    export default {\n        components: {},\n        data() {\n            return {\n                assignmentForm: new Form({\n                    batch_id: '',\n                    subject_id: '',\n                    title: '',\n                    date_of_assignment: '',\n                    due_date: '',\n                    description: '',\n                    upload_token: ''\n                }),\n                batches: [],\n                selected_batch: null,\n                subjects: [],\n                selected_subject: null,\n                subject_detail: [],\n                module_id: '',\n                clearAttachment: true\n            };\n        },\n        props: ['uuid'],\n        mounted() {\n            if(!helper.hasPermission('create-assignment') && !helper.hasPermission('edit-assignment')){\n                helper.notAccessibleMsg();\n                this.$router.push('/dashboard');\n            }\n\n            if(this.uuid)\n                this.get();\n            else\n                this.assignmentForm.upload_token = this.$uuid.v4();\n\n            this.getPreRequisite();\n        },\n        methods: {\n            hasPermission(permission){\n                return helper.hasPermission(permission);\n            },\n            getPreRequisite(){\n                let loader = this.$loading.show();\n                axios.get('/api/assignment/pre-requisite')\n                    .then(response => {\n                        this.batches = response.batches;\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    })\n            },\n            getSubjects(){\n                if (!this.uuid) {\n                    this.assignmentForm.subject_id = '';\n                    this.selected_subject = null;\n                }\n                let loader = this.$loading.show();\n                axios.post('/api/batch/'+this.assignmentForm.batch_id+'/subjects')\n                    .then(response => {\n                        this.subjects = response.subjects;\n                        this.subject_details = response.subject_details;\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    })\n            },\n            proceed(){\n                if(this.uuid)\n                    this.update();\n                else\n                    this.store();\n            },\n            store(){\n                let loader = this.$loading.show();\n                this.assignmentForm.post('/api/assignment')\n                    .then(response => {\n                        toastr.success(response.message);\n                        this.clearAttachment = !this.clearAttachment;\n                        this.assignmentForm.upload_token = this.$uuid.v4();\n                        this.selected_batch = null;\n                        this.selected_subject = null;\n                        this.$emit('completed');\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    });\n            },\n            get(){\n                let loader = this.$loading.show();\n                axios.get('/api/assignment/'+this.uuid)\n                    .then(response => {\n                        let assignment = response.assignment;\n                        this.assignmentForm.title = assignment.title;\n                        this.assignmentForm.date_of_assignment = assignment.date_of_assignment;\n                        this.assignmentForm.due_date = assignment.due_date;\n                        this.assignmentForm.description = assignment.description;\n                        this.assignmentForm.batch_id = assignment.subject.batch_id;\n                        this.assignmentForm.subject_id = assignment.subject_id;\n                        this.selected_batch = this.assignmentForm.batch_id ? {id: assignment.subject.batch_id, name: assignment.subject.batch.course.name+' '+assignment.subject.batch.name} : null;\n                        this.selected_subject = assignment.subject_id ? {id: assignment.subject_id, name: assignment.subject.name+' ('+assignment.subject.code+')'} : null;\n                        this.assignmentForm.upload_token = assignment.upload_token;\n                        this.module_id = assignment.id;\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                        this.$router.push('/resource/assignment');\n                    });\n            },\n            update(){\n                let loader = this.$loading.show();\n                this.assignmentForm.patch('/api/assignment/'+this.uuid)\n                    .then(response => {\n                        toastr.success(response.message);\n                        loader.hide();\n                        this.$router.push('/resource/assignment');\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    });\n            },\n            onBatchSelect(selectedOption){\n                this.assignmentForm.batch_id = selectedOption.id;\n            },\n            onSubjectSelect(selectedOption){\n                this.assignmentForm.subject_id = selectedOption.id;\n            }\n        },\n        watch: {\n            'assignmentForm.batch_id': function(val) {\n                if (val) {\n                    this.getSubjects();\n                }\n            }\n        }\n    }\n</script>\n\n<style>\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_81706b78_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=81706b78&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_81706b78_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_81706b78_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/resource/assignment/form.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/resource/assignment/form.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_81706b78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=81706b78& */ "./resources/js/views/resource/assignment/form.vue?vue&type=template&id=81706b78&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/resource/assignment/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _form_vue_vue_type_style_index_0_id_81706b78_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=81706b78&lang=css& */ "./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_81706b78___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_81706b78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/resource/assignment/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/resource/assignment/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/resource/assignment/index.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_df5c9afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=df5c9afc& */ "./resources/js/views/resource/assignment/index.vue?vue&type=template&id=df5c9afc&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/resource/assignment/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_df5c9afc___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_df5c9afc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/resource/assignment/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/resource/assignment/show.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/resource/assignment/show.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_e24c5806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=e24c5806& */ "./resources/js/views/resource/assignment/show.vue?vue&type=template&id=e24c5806&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/views/resource/assignment/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_e24c5806___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_e24c5806___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/resource/assignment/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/resource/assignment/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/resource/assignment/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/resource/assignment/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/resource/assignment/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/resource/assignment/show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/resource/assignment/show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/resource/assignment/form.vue?vue&type=template&id=81706b78&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/resource/assignment/form.vue?vue&type=template&id=81706b78& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_81706b78___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_81706b78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_81706b78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=81706b78& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=template&id=81706b78&");


/***/ }),

/***/ "./resources/js/views/resource/assignment/index.vue?vue&type=template&id=df5c9afc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/resource/assignment/index.vue?vue&type=template&id=df5c9afc& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_df5c9afc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_df5c9afc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_df5c9afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=df5c9afc& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/index.vue?vue&type=template&id=df5c9afc&");


/***/ }),

/***/ "./resources/js/views/resource/assignment/show.vue?vue&type=template&id=e24c5806&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/resource/assignment/show.vue?vue&type=template&id=e24c5806& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_e24c5806___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_e24c5806___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_e24c5806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=e24c5806& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/show.vue?vue&type=template&id=e24c5806&");


/***/ }),

/***/ "./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_81706b78_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=81706b78&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=7701a2eebb137972