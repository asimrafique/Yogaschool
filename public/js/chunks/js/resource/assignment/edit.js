"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/resource/assignment/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/resource/assignment/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    assignmentForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      uuid: this.$route.params.uuid
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('edit-assignment')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/edit.vue?vue&type=template&id=0289188a&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/edit.vue?vue&type=template&id=0289188a& ***!
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
  return _c("div", [_c("div", {
    staticClass: "page-titles"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("h3", {
    staticClass: "text-themecolor"
  }, [_vm._v(_vm._s(_vm.trans("resource.edit_assignment")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/resource/assignment");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("resource.assignment")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body p-t-20"
  }, [_c("assignment-form", {
    attrs: {
      uuid: _vm.uuid
    }
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


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
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/resource/assignment/form.vue"],"names":[],"mappings":";AAkNA;IACA,aAAA;AACA","sourcesContent":["<template>\r\n    <div>\r\n        <form @submit.prevent=\"proceed\" @keydown=\"assignmentForm.errors.clear($event.target.name)\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">{{trans('academic.batch')}} </label>\r\n                        <v-select label=\"name\" v-model=\"selected_batch\" group-values=\"batches\" group-label=\"course_group\" :group-select=\"false\" name=\"batch_id\" id=\"batch_id\" :options=\"batches\" :placeholder=\"trans('academic.select_batch')\" @select=\"onBatchSelect\" @close=\"assignmentForm.errors.clear('batch_id')\" @remove=\"assignmentForm.batch_id = ''\">\r\n                            <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!batches.length\">\r\n                                {{trans('general.no_option_found')}}\r\n                            </div>\r\n                        </v-select>\r\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"batch_id\"></show-error>\r\n                    </div>\r\n                    <div class=\"form-group\" v-if=\"assignmentForm.batch_id\">\r\n                        <label for=\"\">{{trans('academic.subject')}} </label>\r\n                        <v-select label=\"name\" v-model=\"selected_subject\" name=\"subject_id\" id=\"subject_id\" :options=\"subjects\" :placeholder=\"trans('resource.select_subject')\" @select=\"onSubjectSelect\" @close=\"assignmentForm.errors.clear('subject_id')\" @remove=\"assignmentForm.subject_id = ''\">\r\n                            <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!subjects.length\">\r\n                                {{trans('general.no_option_found')}}\r\n                            </div>\r\n                        </v-select>\r\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"subject_id\"></show-error>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">{{trans('resource.assignment_title')}}</label>\r\n                        <input class=\"form-control\" type=\"text\" v-model=\"assignmentForm.title\" name=\"title\" :placeholder=\"trans('resource.assignment_title')\">\r\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"title\"></show-error>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">{{trans('resource.date_of_assignment')}}</label>\r\n                        <datepicker v-model=\"assignmentForm.date_of_assignment\" :bootstrapStyling=\"true\" @selected=\"assignmentForm.errors.clear('date_of_assignment')\" :placeholder=\"trans('resource.date_of_assignment')\"></datepicker>\r\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"date_of_assignment\"></show-error>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">{{trans('resource.due_date_of_assignment')}}</label>\r\n                        <datepicker v-model=\"assignmentForm.due_date\" :bootstrapStyling=\"true\" @selected=\"assignmentForm.errors.clear('due_date')\" :placeholder=\"trans('resource.due_date_of_assignment')\"></datepicker>\r\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"due_date\"></show-error>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <file-upload-input :button-text=\"trans('general.upload_document')\" :token=\"assignmentForm.upload_token\" module=\"assignment\" :clear-file=\"clearAttachment\" :module-id=\"module_id\"></file-upload-input>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <html-editor name=\"description\" :model.sync=\"assignmentForm.description\" height=\"300\" :isUpdate=\"uuid ? true : false\" @clearErrors=\"assignmentForm.errors.clear('description')\"></html-editor>\r\n                        <show-error :form-name=\"assignmentForm\" prop-name=\"description\"></show-error>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer text-right\">\r\n                <router-link to=\"/resource/assignment\" class=\"btn btn-danger waves-effect waves-light \" v-show=\"uuid\">{{trans('general.cancel')}}</router-link>\r\n                <button v-if=\"!uuid\" type=\"button\" class=\"btn btn-danger waves-effect waves-light \" @click=\"$emit('cancel')\">{{trans('general.cancel')}}</button>\r\n                <button type=\"submit\" class=\"btn btn-info waves-effect waves-light\">\r\n                    <span v-if=\"uuid\">{{trans('general.update')}}</span>\r\n                    <span v-else>{{trans('general.save')}}</span>\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</template>\r\n\r\n\r\n<script>\r\n\r\n    export default {\r\n        components: {},\r\n        data() {\r\n            return {\r\n                assignmentForm: new Form({\r\n                    batch_id: '',\r\n                    subject_id: '',\r\n                    title: '',\r\n                    date_of_assignment: '',\r\n                    due_date: '',\r\n                    description: '',\r\n                    upload_token: ''\r\n                }),\r\n                batches: [],\r\n                selected_batch: null,\r\n                subjects: [],\r\n                selected_subject: null,\r\n                subject_detail: [],\r\n                module_id: '',\r\n                clearAttachment: true\r\n            };\r\n        },\r\n        props: ['uuid'],\r\n        mounted() {\r\n            if(!helper.hasPermission('create-assignment') && !helper.hasPermission('edit-assignment')){\r\n                helper.notAccessibleMsg();\r\n                this.$router.push('/dashboard');\r\n            }\r\n\r\n            if(this.uuid)\r\n                this.get();\r\n            else\r\n                this.assignmentForm.upload_token = this.$uuid.v4();\r\n\r\n            this.getPreRequisite();\r\n        },\r\n        methods: {\r\n            hasPermission(permission){\r\n                return helper.hasPermission(permission);\r\n            },\r\n            getPreRequisite(){\r\n                let loader = this.$loading.show();\r\n                axios.get('/api/assignment/pre-requisite')\r\n                    .then(response => {\r\n                        this.batches = response.batches;\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    })\r\n            },\r\n            getSubjects(){\r\n                if (!this.uuid) {\r\n                    this.assignmentForm.subject_id = '';\r\n                    this.selected_subject = null;\r\n                }\r\n                let loader = this.$loading.show();\r\n                axios.post('/api/batch/'+this.assignmentForm.batch_id+'/subjects')\r\n                    .then(response => {\r\n                        this.subjects = response.subjects;\r\n                        this.subject_details = response.subject_details;\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    })\r\n            },\r\n            proceed(){\r\n                if(this.uuid)\r\n                    this.update();\r\n                else\r\n                    this.store();\r\n            },\r\n            store(){\r\n                let loader = this.$loading.show();\r\n                this.assignmentForm.post('/api/assignment')\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        this.clearAttachment = !this.clearAttachment;\r\n                        this.assignmentForm.upload_token = this.$uuid.v4();\r\n                        this.selected_batch = null;\r\n                        this.selected_subject = null;\r\n                        this.$emit('completed');\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            get(){\r\n                let loader = this.$loading.show();\r\n                axios.get('/api/assignment/'+this.uuid)\r\n                    .then(response => {\r\n                        let assignment = response.assignment;\r\n                        this.assignmentForm.title = assignment.title;\r\n                        this.assignmentForm.date_of_assignment = assignment.date_of_assignment;\r\n                        this.assignmentForm.due_date = assignment.due_date;\r\n                        this.assignmentForm.description = assignment.description;\r\n                        this.assignmentForm.batch_id = assignment.subject.batch_id;\r\n                        this.assignmentForm.subject_id = assignment.subject_id;\r\n                        this.selected_batch = this.assignmentForm.batch_id ? {id: assignment.subject.batch_id, name: assignment.subject.batch.course.name+' '+assignment.subject.batch.name} : null;\r\n                        this.selected_subject = assignment.subject_id ? {id: assignment.subject_id, name: assignment.subject.name+' ('+assignment.subject.code+')'} : null;\r\n                        this.assignmentForm.upload_token = assignment.upload_token;\r\n                        this.module_id = assignment.id;\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                        this.$router.push('/resource/assignment');\r\n                    });\r\n            },\r\n            update(){\r\n                let loader = this.$loading.show();\r\n                this.assignmentForm.patch('/api/assignment/'+this.uuid)\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        loader.hide();\r\n                        this.$router.push('/resource/assignment');\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            onBatchSelect(selectedOption){\r\n                this.assignmentForm.batch_id = selectedOption.id;\r\n            },\r\n            onSubjectSelect(selectedOption){\r\n                this.assignmentForm.subject_id = selectedOption.id;\r\n            }\r\n        },\r\n        watch: {\r\n            'assignmentForm.batch_id': function(val) {\r\n                if (val) {\r\n                    this.getSubjects();\r\n                }\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\r\n}\r\n</style>"],"sourceRoot":""}]);
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

/***/ "./resources/js/views/resource/assignment/edit.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/resource/assignment/edit.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_0289188a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=0289188a& */ "./resources/js/views/resource/assignment/edit.vue?vue&type=template&id=0289188a&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/resource/assignment/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_0289188a___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_0289188a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/resource/assignment/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/views/resource/assignment/edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/resource/assignment/edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/resource/assignment/edit.vue?vue&type=template&id=0289188a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/resource/assignment/edit.vue?vue&type=template&id=0289188a& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_0289188a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_0289188a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_0289188a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=0289188a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/edit.vue?vue&type=template&id=0289188a&");


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

/***/ "./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_81706b78_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=81706b78&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/resource/assignment/form.vue?vue&type=style&index=0&id=81706b78&lang=css&");


/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=a432859542ae79e5