"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/calendar/event/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/calendar/event/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    eventForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      uuid: this.$route.params.uuid
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('edit-event')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _configuration_calendar_event_type_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configuration/calendar/event-type/form */ "./resources/js/views/configuration/calendar/event-type/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    eventTypeForm: _configuration_calendar_event_type_form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      eventForm: new Form({
        event_type_id: '',
        title: '',
        no_time: 0,
        venue: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        audience: 'everyone',
        course_id: [],
        batch_id: [],
        department_id: [],
        employee_category_id: [],
        description: '',
        upload_token: ''
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
      event_types: [],
      selected_event_type: null,
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
      showEventTypeModal: false
    };
  },
  props: ['uuid'],
  mounted: function mounted() {
    if (!helper.hasPermission('create-event') && !helper.hasPermission('edit-event')) {
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
      this.showEventTypeModal = false;
      axios.get('/api/event/pre-requisite').then(function (response) {
        _this.event_types = response.event_types;
        _this.audiences = response.audiences;
        _this.courses = response.courses;
        _this.batches = response.batches;
        _this.departments = response.departments;
        _this.employee_categories = response.employee_categories;
        if (_this.uuid) _this.get();else _this.eventForm.upload_token = _this.$uuid.v4();
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
      this.eventForm.start_time = helper.toTime(this.start_time);
      this.eventForm.end_time = helper.toTime(this.end_time);
      var loader = this.$loading.show();
      this.eventForm.post('/api/event').then(function (response) {
        toastr.success(response.message);
        _this2.clearAttachment = !_this2.clearAttachment;
        _this2.eventForm.upload_token = _this2.$uuid.v4();
        _this2.selected_event_type = null;
        _this2.selected_courses = null;
        _this2.selected_batches = null;
        _this2.selected_departments = null;
        _this2.selected_employee_categories = null;
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
      axios.get('/api/event/' + this.uuid).then(function (response) {
        _this3.eventForm.title = response.event.title;
        _this3.eventForm.venue = response.event.venue;
        _this3.eventForm.start_date = response.event.start_date;
        _this3.eventForm.end_date = response.event.end_date;
        _this3.eventForm.description = response.event.description;
        _this3.eventForm.event_type_id = response.event.event_type_id;
        _this3.selected_event_type = response.event.event_type_id ? {
          id: response.event.event_type_id,
          name: response.event.event_type.name
        } : null;
        _this3.eventForm.audience = response.event.audience;
        _this3.eventForm.no_time = response.event.start_time ? 0 : 1;
        _this3.selected_courses = response.event.audience == 'selected_course' ? response.selected_audience : [];
        _this3.eventForm.course_id = response.event.audience == 'selected_course' ? _this3.setMultiSelect(response.selected_audience) : [];
        _this3.selected_batches = response.event.audience == 'selected_batch' ? response.selected_audience : [];
        _this3.eventForm.batch_id = response.event.audience == 'selected_batch' ? _this3.setMultiSelect(response.selected_audience) : [];
        _this3.selected_departments = response.event.audience == 'selected_department' ? response.selected_audience : [];
        _this3.eventForm.department_id = response.event.audience == 'selected_department' ? _this3.setMultiSelect(response.selected_audience) : [];
        _this3.selected_employee_categories = response.event.audience == 'selected_employee_category' ? response.selected_audience : [];
        _this3.eventForm.employee_category_id = response.event.audience == 'selected_employee_category' ? _this3.setMultiSelect(response.selected_audience) : [];
        _this3.start_time = response.start_time;
        _this3.end_time = response.end_time;
        _this3.eventForm.upload_token = response.event.upload_token;
        _this3.module_id = response.event.id;
        if (!response.is_editable) {
          toastr.error(i18n.user.permission_denied);
          loader.hide();
          _this3.$router.push('/calendar/event');
        }
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this3.$router.push('/calendar/event');
      });
    },
    update: function update() {
      var _this4 = this;
      this.eventForm.start_time = helper.toTime(this.start_time);
      this.eventForm.end_time = helper.toTime(this.end_time);
      var loader = this.$loading.show();
      this.eventForm.patch('/api/event/' + this.uuid).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this4.$router.push('/calendar/event');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onEventTypeSelect: function onEventTypeSelect(selectedOption) {
      this.eventForm.event_type_id = selectedOption.id;
    },
    onCourseSelect: function onCourseSelect(selectedOption) {
      this.eventForm.errors.clear('course_id');
      this.eventForm.course_id.push(selectedOption.id);
    },
    onCourseRemove: function onCourseRemove(removedOption) {
      this.eventForm.course_id.splice(this.eventForm.course_id.indexOf(removedOption.id), 1);
    },
    onBatchSelect: function onBatchSelect(selectedOption) {
      this.eventForm.errors.clear('batch_id');
      this.eventForm.batch_id.push(selectedOption.id);
    },
    onBatchRemove: function onBatchRemove(removedOption) {
      this.eventForm.batch_id.splice(this.eventForm.batch_id.indexOf(removedOption.id), 1);
    },
    onDepartmentSelect: function onDepartmentSelect(selectedOption) {
      this.eventForm.errors.clear('department_id');
      this.eventForm.department_id.push(selectedOption.id);
    },
    onDepartmentRemove: function onDepartmentRemove(removedOption) {
      this.eventForm.department_id.splice(this.eventForm.department_id.indexOf(removedOption.id), 1);
    },
    onEmployeeCategorySelect: function onEmployeeCategorySelect(selectedOption) {
      this.eventForm.errors.clear('employee_category_id');
      this.eventForm.employee_category_id.push(selectedOption.id);
    },
    onEmployeeCategoryRemove: function onEmployeeCategoryRemove(removedOption) {
      this.eventForm.employee_category_id.splice(this.eventForm.employee_category_id.indexOf(removedOption.id), 1);
    },
    setMultiSelect: function setMultiSelect(options) {
      var data = [];
      options.forEach(function (option) {
        data.push(option.id);
      });
      return data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      eventTypeForm: new Form({
        name: '',
        description: ''
      })
    };
  },
  props: ['id'],
  mounted: function mounted() {
    if (this.id) this.get();
  },
  methods: {
    proceed: function proceed() {
      if (this.id) this.update();else this.store();
    },
    store: function store() {
      var _this = this;
      var loader = this.$loading.show();
      this.eventTypeForm.post('/api/calendar/event/type').then(function (response) {
        toastr.success(response.message);
        _this.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    get: function get() {
      var _this2 = this;
      var loader = this.$loading.show();
      axios.get('/api/calendar/event/type/' + this.id).then(function (response) {
        _this2.eventTypeForm.name = response.name;
        _this2.eventTypeForm.description = response.description;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this2.$router.push('/configuration/calendar/event/type');
      });
    },
    update: function update() {
      var _this3 = this;
      var loader = this.$loading.show();
      this.eventTypeForm.patch('/api/calendar/event/type/' + this.id).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this3.$router.push('/configuration/calendar/event/type');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/edit.vue?vue&type=template&id=3cf796a1&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/edit.vue?vue&type=template&id=3cf796a1& ***!
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
  return _c("div", [_c("div", {
    staticClass: "page-titles"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("h3", {
    staticClass: "text-themecolor"
  }, [_vm._v(_vm._s(_vm.trans("calendar.edit_event")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/calendar/event");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("calendar.event")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("event-form", {
    attrs: {
      uuid: _vm.uuid
    }
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=template&id=0c936f4a&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=template&id=0c936f4a& ***!
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
  return _c("div", [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.proceed.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.eventForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_title")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.eventForm.title,
      expression: "eventForm.title"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "title",
      placeholder: _vm.trans("calendar.event_title")
    },
    domProps: {
      value: _vm.eventForm.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.eventForm, "title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.eventForm,
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
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_type")) + " ")]), _vm._v(" "), _vm.hasPermission("access-configuration") ? _c("button", {
    staticClass: "btn btn-xs btn-info pull-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.showEventTypeModal = true;
      }
    }
  }, [_vm._v(_vm._s(_vm.trans("general.add_new")))]) : _vm._e(), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "event_type_id",
      id: "event_type_id",
      options: _vm.event_types,
      placeholder: _vm.trans("calendar.select_event_type")
    },
    on: {
      select: _vm.onEventTypeSelect,
      close: function close($event) {
        return _vm.eventForm.errors.clear("event_type_id");
      },
      remove: function remove($event) {
        _vm.eventForm.event_type_id = "";
      }
    },
    model: {
      value: _vm.selected_event_type,
      callback: function callback($$v) {
        _vm.selected_event_type = $$v;
      },
      expression: "selected_event_type"
    }
  }, [!_vm.event_types.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                    " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.eventForm,
      "prop-name": "event_type_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_venue")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.eventForm.venue,
      expression: "eventForm.venue"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "venue",
      placeholder: _vm.trans("calendar.event_venue")
    },
    domProps: {
      value: _vm.eventForm.venue
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.eventForm, "venue", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.eventForm,
      "prop-name": "venue"
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
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_start_date")))]), _vm._v(" "), _c("label", {
    staticClass: "custom-control custom-checkbox float-right"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.eventForm.no_time,
      expression: "eventForm.no_time"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.eventForm.no_time) ? _vm._i(_vm.eventForm.no_time, "1") > -1 : _vm.eventForm.no_time
    },
    on: {
      change: function change($event) {
        var $$a = _vm.eventForm.no_time,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.eventForm, "no_time", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.eventForm, "no_time", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.eventForm, "no_time", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_no_time")))])]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("calendar.event_start_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.eventForm.errors.clear("start_date");
      }
    },
    model: {
      value: _vm.eventForm.start_date,
      callback: function callback($$v) {
        _vm.$set(_vm.eventForm, "start_date", $$v);
      },
      expression: "eventForm.start_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.eventForm,
      "prop-name": "start_date"
    }
  })], 1)]), _vm._v(" "), !_vm.eventForm.no_time ? _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_start_time")))]), _vm._v(" "), _c("timepicker", {
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
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_end_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("calendar.event_end_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.eventForm.errors.clear("end_date");
      }
    },
    model: {
      value: _vm.eventForm.end_date,
      callback: function callback($$v) {
        _vm.$set(_vm.eventForm, "end_date", $$v);
      },
      expression: "eventForm.end_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.eventForm,
      "prop-name": "end_date"
    }
  })], 1)]), _vm._v(" "), !_vm.eventForm.no_time ? _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_end_time")))]), _vm._v(" "), _c("timepicker", {
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
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_audience")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.eventForm.audience,
      expression: "eventForm.audience"
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
        _vm.$set(_vm.eventForm, "audience", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.eventForm.errors.clear("audience");
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
      "form-name": _vm.eventForm,
      "prop-name": "audience"
    }
  })], 1)]), _vm._v(" "), _vm.eventForm.audience == "selected_course" ? _c("div", {
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
      "form-name": _vm.eventForm,
      "prop-name": "course_id"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.eventForm.audience == "selected_batch" ? _c("div", {
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
      "form-name": _vm.eventForm,
      "prop-name": "batch_id"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.eventForm.audience == "selected_department" ? _c("div", {
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
      "form-name": _vm.eventForm,
      "prop-name": "department_id"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.eventForm.audience == "selected_employee_category" ? _c("div", {
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
      "form-name": _vm.eventForm,
      "prop-name": "employee_category_id"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("file-upload-input", {
    attrs: {
      "button-text": _vm.trans("general.upload_document"),
      token: _vm.eventForm.upload_token,
      module: "event",
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
      model: _vm.eventForm.description,
      height: "300",
      isUpdate: _vm.uuid ? true : false
    },
    on: {
      "update:model": function updateModel($event) {
        return _vm.$set(_vm.eventForm, "description", $event);
      },
      clearErrors: function clearErrors($event) {
        return _vm.eventForm.errors.clear("description");
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.eventForm,
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
      to: "/calendar/event"
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
  }, [_vm.uuid ? _c("span", [_vm._v(_vm._s(_vm.trans("general.update")))]) : _c("span", [_vm._v(_vm._s(_vm.trans("general.save")))])])], 1)]), _vm._v(" "), _vm.showEventTypeModal ? _c("transition", {
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
    return [_vm._v("\n                            " + _vm._s(_vm.trans("calendar.add_new_event_type")) + "\n                            "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          _vm.showEventTypeModal = false;
        }
      }
    }, [_vm._v("x")])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("event-type-form", {
      on: {
        completed: _vm.getPreRequisite,
        cancel: function cancel($event) {
          _vm.showEventTypeModal = false;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=template&id=70b663ed&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=template&id=70b663ed& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        return _vm.eventTypeForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_type_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.eventTypeForm.name,
      expression: "eventTypeForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: _vm.trans("calendar.event_type_name")
    },
    domProps: {
      value: _vm.eventTypeForm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.eventTypeForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.eventTypeForm,
      "prop-name": "name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("calendar.event_type_description")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.eventTypeForm.description,
      expression: "eventTypeForm.description"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "description",
      placeholder: _vm.trans("calendar.event_type_description")
    },
    domProps: {
      value: _vm.eventTypeForm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.eventTypeForm, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.eventTypeForm,
      "prop-name": "description"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("router-link", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.id,
      expression: "id"
    }],
    staticClass: "btn btn-danger waves-effect waves-light",
    attrs: {
      to: "/configuration/calendar/event/type"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.cancel")))]), _vm._v(" "), !_vm.id ? _c("button", {
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
  }, [_vm.id ? _c("span", [_vm._v(_vm._s(_vm.trans("general.update")))]) : _c("span", [_vm._v(_vm._s(_vm.trans("general.save")))])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=style&index=0&id=0c936f4a&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=style&index=0&id=0c936f4a&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/calendar/event/form.vue"],"names":[],"mappings":";AA8XA;IACA,aAAA;AACA","sourcesContent":["<template>\r\n    <div>\r\n        <form @submit.prevent=\"proceed\" @keydown=\"eventForm.errors.clear($event.target.name)\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">{{trans('calendar.event_title')}}</label>\r\n                        <input class=\"form-control\" type=\"text\" v-model=\"eventForm.title\" name=\"title\" :placeholder=\"trans('calendar.event_title')\">\r\n                        <show-error :form-name=\"eventForm\" prop-name=\"title\"></show-error>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('calendar.event_type')}} </label> <button type=\"button\" class=\"btn btn-xs btn-info pull-right\" v-if=\"hasPermission('access-configuration')\" @click=\"showEventTypeModal = true\">{{trans('general.add_new')}}</button>\r\n                                <v-select label=\"name\" v-model=\"selected_event_type\" name=\"event_type_id\" id=\"event_type_id\" :options=\"event_types\" :placeholder=\"trans('calendar.select_event_type')\" @select=\"onEventTypeSelect\" @close=\"eventForm.errors.clear('event_type_id')\" @remove=\"eventForm.event_type_id = ''\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!event_types.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                                <show-error :form-name=\"eventForm\" prop-name=\"event_type_id\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('calendar.event_venue')}}</label>\r\n                                <input class=\"form-control\" type=\"text\" v-model=\"eventForm.venue\" name=\"venue\" :placeholder=\"trans('calendar.event_venue')\">\r\n                                <show-error :form-name=\"eventForm\" prop-name=\"venue\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('calendar.event_start_date')}}</label>\r\n                                <label class=\"custom-control custom-checkbox float-right\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" v-model=\"eventForm.no_time\" value=\"1\">\r\n                                    <span class=\"custom-control-label\">{{trans('calendar.event_no_time')}}</span>\r\n                                </label>\r\n                                <datepicker v-model=\"eventForm.start_date\" :bootstrapStyling=\"true\" @selected=\"eventForm.errors.clear('start_date')\" :placeholder=\"trans('calendar.event_start_date')\"></datepicker>\r\n                                <show-error :form-name=\"eventForm\" prop-name=\"start_date\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\" v-if=\"!eventForm.no_time\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('calendar.event_start_time')}}</label>\r\n                                <timepicker :hour.sync=\"start_time.hour\" :minute.sync=\"start_time.minute\" :meridiem.sync=\"start_time.meridiem\"></timepicker>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('calendar.event_end_date')}}</label>\r\n                                <datepicker v-model=\"eventForm.end_date\" :bootstrapStyling=\"true\" @selected=\"eventForm.errors.clear('end_date')\" :placeholder=\"trans('calendar.event_end_date')\"></datepicker>\r\n                                <show-error :form-name=\"eventForm\" prop-name=\"end_date\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\" v-if=\"!eventForm.no_time\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('calendar.event_end_time')}}</label>\r\n                                <timepicker :hour.sync=\"end_time.hour\" :minute.sync=\"end_time.minute\" :meridiem.sync=\"end_time.meridiem\"></timepicker>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('calendar.event_audience')}}</label>\r\n                                <select v-model=\"eventForm.audience\" class=\"custom-select col-12\" name=\"audience\" @change=\"eventForm.errors.clear('audience')\">\r\n                                  <option value=null selected>{{trans('general.select_one')}}</option>\r\n                                  <option v-for=\"option in audiences\" v-bind:value=\"option.value\">\r\n                                    {{ option.text }}\r\n                                  </option>\r\n                                </select>\r\n                                <show-error :form-name=\"eventForm\" prop-name=\"audience\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\" v-if=\"eventForm.audience == 'selected_course'\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('academic.course')}}</label>\r\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_courses\" group-values=\"courses\" group-label=\"course_group\" :group-select=\"false\" name=\"course_id\" id=\"course_id\" :options=\"courses\" :placeholder=\"trans('academic.select_course')\" @select=\"onCourseSelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onCourseRemove\" :selected=\"selected_courses\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!courses.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                                <show-error :form-name=\"eventForm\" prop-name=\"course_id\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\" v-if=\"eventForm.audience == 'selected_batch'\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('academic.batch')}}</label>\r\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_batches\" group-values=\"batches\" group-label=\"course_group\" :group-select=\"false\" name=\"batch_id\" id=\"batch_id\" :options=\"batches\" :placeholder=\"trans('academic.select_batch')\" @select=\"onBatchSelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onBatchRemove\" :selected=\"selected_batches\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!batches.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                                <show-error :form-name=\"eventForm\" prop-name=\"batch_id\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\" v-if=\"eventForm.audience == 'selected_department'\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('employee.department')}}</label>\r\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_departments\" name=\"department_id\" id=\"department_id\" :options=\"departments\" :placeholder=\"trans('employee.select_department')\" @select=\"onDepartmentSelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onDepartmentRemove\" :selected=\"selected_departments\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!departments.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                                <show-error :form-name=\"eventForm\" prop-name=\"department_id\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12 col-sm-6\" v-if=\"eventForm.audience == 'selected_employee_category'\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">{{trans('employee.category')}}</label>\r\n                                <v-select label=\"name\" track-by=\"id\" v-model=\"selected_employee_categories\" name=\"employee_category_id\" id=\"employee_category_id\" :options=\"employee_categories\" :placeholder=\"trans('employee.select_category')\" @select=\"onEmployeeCategorySelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onEmployeeCategoryRemove\" :selected=\"selected_employee_categories\">\r\n                                    <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!employee_categories.length\">\r\n                                        {{trans('general.no_option_found')}}\r\n                                    </div>\r\n                                </v-select>\r\n                                <show-error :form-name=\"eventForm\" prop-name=\"employee_category_id\"></show-error>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <file-upload-input :button-text=\"trans('general.upload_document')\" :token=\"eventForm.upload_token\" module=\"event\" :clear-file=\"clearAttachment\" :module-id=\"module_id\"></file-upload-input>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <html-editor name=\"description\" :model.sync=\"eventForm.description\" height=\"300\" :isUpdate=\"uuid ? true : false\" @clearErrors=\"eventForm.errors.clear('description')\"></html-editor>\r\n                        <show-error :form-name=\"eventForm\" prop-name=\"description\"></show-error>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-footer text-right\">\r\n                <router-link to=\"/calendar/event\" class=\"btn btn-danger waves-effect waves-light \" v-show=\"uuid\">{{trans('general.cancel')}}</router-link>\r\n                <button v-if=\"!uuid\" type=\"button\" class=\"btn btn-danger waves-effect waves-light \" @click=\"$emit('cancel')\">{{trans('general.cancel')}}</button>\r\n                <button type=\"submit\" class=\"btn btn-info waves-effect waves-light\">\r\n                    <span v-if=\"uuid\">{{trans('general.update')}}</span>\r\n                    <span v-else>{{trans('general.save')}}</span>\r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n        <transition name=\"modal\" v-if=\"showEventTypeModal\">\r\n            <div class=\"modal-mask\">\r\n                <div class=\"modal-wrapper\">\r\n                    <div class=\"modal-container modal-lg\">\r\n                        <div class=\"modal-header\">\r\n                            <slot name=\"header\">\r\n                                {{trans('calendar.add_new_event_type')}}\r\n                                <span class=\"float-right pointer\" @click=\"showEventTypeModal = false\">x</span>\r\n                            </slot>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <slot name=\"body\">\r\n                                <event-type-form @completed=\"getPreRequisite\" @cancel=\"showEventTypeModal = false\"></event-type-form>\r\n                                <div class=\"clearfix\"></div>\r\n                            </slot>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </transition>\r\n    </div>\r\n</template>\r\n\r\n\r\n<script>\r\n    import eventTypeForm from '../../configuration/calendar/event-type/form'\r\n\r\n    export default {\r\n        components: {eventTypeForm},\r\n        data() {\r\n            return {\r\n                eventForm: new Form({\r\n                    event_type_id: '',\r\n                    title: '',\r\n                    no_time: 0,\r\n                    venue: '',\r\n                    start_date: '',\r\n                    end_date: '',\r\n                    start_time: '',\r\n                    end_time: '',\r\n                    audience: 'everyone',\r\n                    course_id: [],\r\n                    batch_id: [],\r\n                    department_id: [],\r\n                    employee_category_id: [],\r\n                    description: '',\r\n                    upload_token: ''\r\n                }),\r\n                start_time: {\r\n                    hour: '',\r\n                    minute: '',\r\n                    meridiem: 'am'\r\n                },\r\n                end_time: {\r\n                    hour: '',\r\n                    minute: '',\r\n                    meridiem: 'am'\r\n                },\r\n                audiences: [],\r\n                event_types: [],\r\n                selected_event_type: null,\r\n                courses: [],\r\n                selected_courses: null,\r\n                batches: [],\r\n                selected_batches: null,\r\n                departments: [],\r\n                selected_departments: null,\r\n                employee_categories: [],\r\n                selected_employee_categories: null,\r\n                module_id: '',\r\n                clearAttachment: true,\r\n                showEventTypeModal: false\r\n            };\r\n        },\r\n        props: ['uuid'],\r\n        mounted() {\r\n            if(!helper.hasPermission('create-event') && !helper.hasPermission('edit-event')){\r\n                helper.notAccessibleMsg();\r\n                this.$router.push('/dashboard');\r\n            }\r\n\r\n            this.getPreRequisite();\r\n        },\r\n        methods: {\r\n            hasPermission(permission){\r\n                return helper.hasPermission(permission);\r\n            },\r\n            getPreRequisite(){\r\n                let loader = this.$loading.show();\r\n                this.showEventTypeModal = false;\r\n                axios.get('/api/event/pre-requisite')\r\n                    .then(response => {\r\n                        this.event_types = response.event_types;\r\n                        this.audiences = response.audiences;\r\n                        this.courses = response.courses;\r\n                        this.batches = response.batches;\r\n                        this.departments = response.departments;\r\n                        this.employee_categories = response.employee_categories;\r\n                        \r\n                        if(this.uuid)\r\n                            this.get();\r\n                        else\r\n                            this.eventForm.upload_token = this.$uuid.v4();\r\n\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    })\r\n            },\r\n            proceed(){\r\n                if(this.uuid)\r\n                    this.update();\r\n                else\r\n                    this.store();\r\n            },\r\n            store(){\r\n                this.eventForm.start_time = helper.toTime(this.start_time);\r\n                this.eventForm.end_time   = helper.toTime(this.end_time);\r\n                let loader = this.$loading.show();\r\n                this.eventForm.post('/api/event')\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        this.clearAttachment = !this.clearAttachment;\r\n                        this.eventForm.upload_token = this.$uuid.v4();\r\n                        this.selected_event_type = null;\r\n                        this.selected_courses = null;\r\n                        this.selected_batches = null;\r\n                        this.selected_departments = null;\r\n                        this.selected_employee_categories = null;\r\n                        this.$emit('completed');\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            get(){\r\n                let loader = this.$loading.show();\r\n                axios.get('/api/event/'+this.uuid)\r\n                    .then(response => {\r\n                        this.eventForm.title = response.event.title;\r\n                        this.eventForm.venue = response.event.venue;\r\n                        this.eventForm.start_date = response.event.start_date;\r\n                        this.eventForm.end_date = response.event.end_date;\r\n                        this.eventForm.description = response.event.description;\r\n                        this.eventForm.event_type_id = response.event.event_type_id;\r\n                        this.selected_event_type = response.event.event_type_id ? {id: response.event.event_type_id, name: response.event.event_type.name} : null;\r\n                        this.eventForm.audience = response.event.audience;\r\n                        this.eventForm.no_time = response.event.start_time ? 0 : 1;\r\n                        this.selected_courses = response.event.audience == 'selected_course' ? response.selected_audience : [];\r\n                        this.eventForm.course_id = response.event.audience == 'selected_course' ? this.setMultiSelect(response.selected_audience) : [];\r\n                        this.selected_batches = response.event.audience == 'selected_batch' ? response.selected_audience : [];\r\n                        this.eventForm.batch_id = response.event.audience == 'selected_batch' ? this.setMultiSelect(response.selected_audience) : [];\r\n                        this.selected_departments = response.event.audience == 'selected_department' ? response.selected_audience : [];\r\n                        this.eventForm.department_id = response.event.audience == 'selected_department' ? this.setMultiSelect(response.selected_audience) : [];\r\n                        this.selected_employee_categories = response.event.audience == 'selected_employee_category' ? response.selected_audience : [];\r\n                        this.eventForm.employee_category_id = response.event.audience == 'selected_employee_category' ? this.setMultiSelect(response.selected_audience) : [];\r\n                        this.start_time = response.start_time;\r\n                        this.end_time = response.end_time;\r\n                        this.eventForm.upload_token = response.event.upload_token;\r\n                        this.module_id = response.event.id;\r\n\r\n                        if (! response.is_editable) {\r\n                            toastr.error(i18n.user.permission_denied);\r\n                            loader.hide();\r\n                            this.$router.push('/calendar/event');\r\n                        }\r\n                        \r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                        this.$router.push('/calendar/event');\r\n                    });\r\n            },\r\n            update(){\r\n                this.eventForm.start_time = helper.toTime(this.start_time);\r\n                this.eventForm.end_time   = helper.toTime(this.end_time);\r\n                let loader = this.$loading.show();\r\n                this.eventForm.patch('/api/event/'+this.uuid)\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        loader.hide();\r\n                        this.$router.push('/calendar/event');\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            onEventTypeSelect(selectedOption){\r\n                this.eventForm.event_type_id = selectedOption.id;\r\n            },\r\n            onCourseSelect(selectedOption){\r\n                this.eventForm.errors.clear('course_id');\r\n                this.eventForm.course_id.push(selectedOption.id);\r\n            },\r\n            onCourseRemove(removedOption){\r\n                this.eventForm.course_id.splice(this.eventForm.course_id.indexOf(removedOption.id), 1);\r\n            },\r\n            onBatchSelect(selectedOption){\r\n                this.eventForm.errors.clear('batch_id');\r\n                this.eventForm.batch_id.push(selectedOption.id);\r\n            },\r\n            onBatchRemove(removedOption){\r\n                this.eventForm.batch_id.splice(this.eventForm.batch_id.indexOf(removedOption.id), 1);\r\n            },\r\n            onDepartmentSelect(selectedOption){\r\n                this.eventForm.errors.clear('department_id');\r\n                this.eventForm.department_id.push(selectedOption.id);\r\n            },\r\n            onDepartmentRemove(removedOption){\r\n                this.eventForm.department_id.splice(this.eventForm.department_id.indexOf(removedOption.id), 1);\r\n            },\r\n            onEmployeeCategorySelect(selectedOption){\r\n                this.eventForm.errors.clear('employee_category_id');\r\n                this.eventForm.employee_category_id.push(selectedOption.id);\r\n            },\r\n            onEmployeeCategoryRemove(removedOption){\r\n                this.eventForm.employee_category_id.splice(this.eventForm.employee_category_id.indexOf(removedOption.id), 1);\r\n            },\r\n            setMultiSelect(options) {\r\n                let data = [];\r\n                options.forEach(option => {\r\n                    data.push(option.id);\r\n                })\r\n\r\n                return data;\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=style&index=0&id=0c936f4a&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=style&index=0&id=0c936f4a&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_0c936f4a_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=0c936f4a&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=style&index=0&id=0c936f4a&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_0c936f4a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_0c936f4a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/calendar/event/edit.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/calendar/event/edit.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_3cf796a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=3cf796a1& */ "./resources/js/views/calendar/event/edit.vue?vue&type=template&id=3cf796a1&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/calendar/event/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_3cf796a1___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_3cf796a1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/calendar/event/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/calendar/event/form.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/calendar/event/form.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_0c936f4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=0c936f4a& */ "./resources/js/views/calendar/event/form.vue?vue&type=template&id=0c936f4a&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/calendar/event/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _form_vue_vue_type_style_index_0_id_0c936f4a_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=0c936f4a&lang=css& */ "./resources/js/views/calendar/event/form.vue?vue&type=style&index=0&id=0c936f4a&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_0c936f4a___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_0c936f4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/calendar/event/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/calendar/event-type/form.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/views/configuration/calendar/event-type/form.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_70b663ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=70b663ed& */ "./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=template&id=70b663ed&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_70b663ed___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_70b663ed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/calendar/event-type/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/calendar/event/edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/calendar/event/edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/calendar/event/form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/calendar/event/form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/calendar/event/edit.vue?vue&type=template&id=3cf796a1&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/calendar/event/edit.vue?vue&type=template&id=3cf796a1& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_3cf796a1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_3cf796a1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_3cf796a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=3cf796a1& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/edit.vue?vue&type=template&id=3cf796a1&");


/***/ }),

/***/ "./resources/js/views/calendar/event/form.vue?vue&type=template&id=0c936f4a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/calendar/event/form.vue?vue&type=template&id=0c936f4a& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_0c936f4a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_0c936f4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_0c936f4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=0c936f4a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=template&id=0c936f4a&");


/***/ }),

/***/ "./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=template&id=70b663ed&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=template&id=70b663ed& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_70b663ed___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_70b663ed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_70b663ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=70b663ed& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/calendar/event-type/form.vue?vue&type=template&id=70b663ed&");


/***/ }),

/***/ "./resources/js/views/calendar/event/form.vue?vue&type=style&index=0&id=0c936f4a&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/calendar/event/form.vue?vue&type=style&index=0&id=0c936f4a&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_0c936f4a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=0c936f4a&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calendar/event/form.vue?vue&type=style&index=0&id=0c936f4a&lang=css&");


/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=e3069dc36761cb51