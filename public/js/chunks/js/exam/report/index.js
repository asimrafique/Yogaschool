"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/exam/report/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      reportForm: new Form({
        batch_id: '',
        student_id: '',
        exam_term_id: '',
        exam_id: '',
        type: ''
      }, false),
      exams: [],
      types: [],
      exam_terms: [],
      batches: [],
      selected_batch: null,
      students: [],
      selected_student: null,
      disable_filter: false
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-exam-report') && !helper.hasPermission('access-class-teacher-wise-exam-report')) {
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
      axios.get('/api/exam/report/pre-requisite').then(function (response) {
        _this.batches = response.batches;
        _this.types = response.types;
        _this.exam_terms = response.exam_terms;
        _this.exams = response.exams;
        _this.reportForm.type = _this.types[0].value;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getStudents: function getStudents() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.students = [];
      this.selected_student = null;
      axios.post('/api/exam/report/student', {
        batch_id: this.reportForm.batch_id
      }).then(function (response) {
        _this2.students = response.students;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    resetFilter: function resetFilter() {
      this.disable_filter = false;
    },
    getReport: function getReport() {
      var loader = this.$loading.show();
      axios.post('/api/exam/report', {
        batch_id: this.reportForm.batch_id,
        student_record_id: this.reportForm.student_id,
        type: this.reportForm.type,
        exam_term_id: this.reportForm.type == 'term_wise' ? this.reportForm.exam_term_id : '',
        exam_id: this.reportForm.type == 'exam_wise' ? this.reportForm.exam_id : ''
      }).then(function (response) {
        var print = window.open("/print");
        loader.hide();
        print.document.write(response);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getPDFReport: function getPDFReport() {
      var _this3 = this;
      var loader = this.$loading.show();
      axios.post('/api/exam/report/pdf', {
        batch_id: this.reportForm.batch_id,
        student_record_id: this.reportForm.student_id,
        type: this.reportForm.type,
        exam_term_id: this.reportForm.type == 'term_wise' ? this.reportForm.exam_term_id : '',
        exam_id: this.reportForm.type == 'exam_wise' ? this.reportForm.exam_id : ''
      }).then(function (response) {
        loader.hide();
        window.open('/download/report/' + response + '?token=' + _this3.authToken);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onBatchSelect: function onBatchSelect(selectedOption) {
      this.reportForm.batch_id = selectedOption.id;
      this.getStudents();
    },
    onStudentSelect: function onStudentSelect(selectedOption) {
      this.reportForm.student_id = selectedOption.id;
    }
  },
  watch: {},
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/index.vue?vue&type=template&id=fde04490&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/index.vue?vue&type=template&id=fde04490& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("exam.report")))])]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body p-t-20"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.reportForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("academic.batch")) + " ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      disabled: _vm.disable_filter,
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
        return _vm.reportForm.errors.clear("batch_id");
      },
      remove: function remove($event) {
        _vm.reportForm.batch_id = "";
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
  }, [_vm._v("\n\t\t\t                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n\t\t\t                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.reportForm,
      "prop-name": "batch_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.student")) + " ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      disabled: _vm.disable_filter,
      name: "student_id",
      id: "student_id",
      options: _vm.students,
      placeholder: _vm.trans("student.select_student")
    },
    on: {
      select: _vm.onStudentSelect,
      close: function close($event) {
        return _vm.reportForm.errors.clear("student_id");
      },
      remove: function remove($event) {
        _vm.reportForm.student_id = "";
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
  }, [_vm._v("\n\t\t\t                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n\t\t\t                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.reportForm,
      "prop-name": "student_id"
    }
  })], 1)]), _vm._v(" "), _vm.types.length > 1 ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("exam.term_report_type")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reportForm.type,
      expression: "reportForm.type"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "type"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.reportForm, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.reportForm.errors.clear("type");
      }]
    }
  }, _vm._l(_vm.types, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                        " + _vm._s(option.text) + "\n                                      ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.reportForm,
      "prop-name": "type"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.types.length > 1 && _vm.reportForm.type == "term_wise" ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("exam.term")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reportForm.exam_term_id,
      expression: "reportForm.exam_term_id"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "exam_term_id"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.reportForm, "exam_term_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.reportForm.errors.clear("exam_term_id");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.exam_terms, function (option) {
    return _c("option", {
      domProps: {
        value: option.id
      }
    }, [_vm._v("\n                                        " + _vm._s(option.name) + "\n                                      ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.reportForm,
      "prop-name": "exam_term_id"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.types.length > 1 && _vm.reportForm.type == "exam_wise" ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("exam.term")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reportForm.exam_id,
      expression: "reportForm.exam_id"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "exam_id"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.reportForm, "exam_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.reportForm.errors.clear("exam_id");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.exams, function (option) {
    return _c("option", {
      domProps: {
        value: option.id
      }
    }, [_vm._v("\n                                        " + _vm._s(option.name) + "\n                                      ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.reportForm,
      "prop-name": "exam_id"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.getReport
    }
  }, [_vm._v(_vm._s(_vm.trans("general.print")))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.getPDFReport
    }
  }, [_vm._v(_vm._s(_vm.trans("general.generate_pdf")))])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/exam/report/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/exam/report/index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_fde04490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=fde04490& */ "./resources/js/views/exam/report/index.vue?vue&type=template&id=fde04490&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/exam/report/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_fde04490___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_fde04490___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/exam/report/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/exam/report/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/exam/report/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/exam/report/index.vue?vue&type=template&id=fde04490&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/exam/report/index.vue?vue&type=template&id=fde04490& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fde04490___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fde04490___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fde04490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=fde04490& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/index.vue?vue&type=template&id=fde04490&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=b3be12926f2617de