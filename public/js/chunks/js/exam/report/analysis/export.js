"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/exam/report/analysis/export"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/analysis/export.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/analysis/export.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      analysisForm: new Form({
        type: ''
      }),
      courseGroupWiseFilter: {
        course_group_id: []
      },
      batchWiseFilter: {
        batch_id: []
      },
      examWiseFilter: {
        exam_id: '',
        batch_id: []
      },
      types: [],
      course_groups: [],
      exams: [],
      batches: [],
      all_batches: [],
      exam_wise_batches: [],
      selected_course_groups: null,
      selected_batches: null,
      selected_exam_wise_batches: null,
      selected_exam: null
    };
  },
  mounted: function mounted() {
    if (!helper.hasRole('admin')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getPreRequisite();
  },
  methods: {
    hasRole: function hasRole(admin) {
      return helper.hasRole(admin);
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/exam/report/analysis/pre-requisite').then(function (response) {
        _this.course_groups = response.course_groups;
        _this.batches = response.batches;
        _this.all_batches = response.batches;
        _this.exams = response.exams;
        _this.types = response.types;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    exportData: function exportData() {
      var filter = {};
      if (this.analysisForm.type === 'course-group-wise') {
        filter = this.courseGroupWiseFilter;
      } else if (this.analysisForm.type === 'batch-wise') {
        filter = this.batchWiseFilter;
      } else if (this.analysisForm.type === 'exam-wise') {
        filter = this.examWiseFilter;
      }
      var url = helper.getFilterURL(filter);
      return '/api/exam/report/analysis/export?type=' + this.analysisForm.type + url + '&token=' + this.authToken;
    },
    exportBatchWiseData: function exportBatchWiseData() {
      var url = helper.getFilterURL(this.batchWiseFilter);
      return '/api/exam/report/analysis/export?type=batch-wise' + url + '&token=' + this.authToken;
    },
    onCourseGroupSelect: function onCourseGroupSelect(selectedOption) {
      this.courseGroupWiseFilter.course_group_id.push(selectedOption.id);
    },
    onCourseGroupRemove: function onCourseGroupRemove(removedOption) {
      this.courseGroupWiseFilter.course_group_id.splice(this.courseGroupWiseFilter.course_group_id.indexOf(removedOption.id), 1);
    },
    onBatchSelect: function onBatchSelect(selectedOption) {
      this.batchWiseFilter.batch_id.push(selectedOption.id);
    },
    onBatchRemove: function onBatchRemove(removedOption) {
      this.batchWiseFilter.batch_id.splice(this.batchWiseFilter.batch_id.indexOf(removedOption.id), 1);
    },
    submit: function submit() {},
    onExamWiseBatchSelect: function onExamWiseBatchSelect(selectedOption) {
      this.examWiseFilter.batch_id.push(selectedOption.id);
    },
    onExamWiseBatchRemove: function onExamWiseBatchRemove(removedOption) {
      this.examWiseFilter.batch_id.splice(this.examWiseFilter.batch_id.indexOf(removedOption.id), 1);
    },
    onExamSelect: function onExamSelect(selectedOption) {
      this.examWiseFilter.batch_id = [];
      if (selectedOption.course_group_id) this.exam_wise_batches = this.all_batches.filter(function (o) {
        return o.course_group === selectedOption.course_group_name;
      });else this.exam_wise_batches = this.all_batches;
      this.examWiseFilter.exam_id = selectedOption.id;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/analysis/export.vue?vue&type=template&id=a92489a6&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/analysis/export.vue?vue&type=template&id=a92489a6& ***!
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
  }, [_vm._v(_vm._s(_vm.trans("exam.exam_report_analysis")))])]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v(_vm._s(_vm.trans("general.type")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.analysisForm.type,
      expression: "analysisForm.type"
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
        _vm.$set(_vm.analysisForm, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.analysisForm.errors.clear("type");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.types, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                        " + _vm._s(option.text) + "\n                                      ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.analysisForm,
      "prop-name": "type"
    }
  })], 1)]), _vm._v(" "), _vm.analysisForm.type === "course-group-wise" ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.course_group")) + " ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "course_group_id",
      id: "course_group_id",
      options: _vm.course_groups,
      placeholder: _vm.trans("academic.select_course_group"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_course_groups
    },
    on: {
      select: _vm.onCourseGroupSelect,
      remove: _vm.onCourseGroupRemove
    },
    model: {
      value: _vm.selected_course_groups,
      callback: function callback($$v) {
        _vm.selected_course_groups = $$v;
      },
      expression: "selected_course_groups"
    }
  }, [!_vm.course_groups.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                        ")]) : _vm._e()])], 1)]) : _vm._e(), _vm._v(" "), _vm.analysisForm.type === "batch-wise" ? _c("div", {
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
  }, [_vm._v("\n                                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                        ")]) : _vm._e()])], 1)]) : _vm._e(), _vm._v(" "), _vm.analysisForm.type === "exam-wise" ? [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("exam.exam")) + " ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "exam_id",
      id: "exam_id",
      options: _vm.exams,
      placeholder: _vm.trans("exam.select_exam")
    },
    on: {
      select: _vm.onExamSelect,
      remove: function remove($event) {
        _vm.examWiseFilter.exam_id = "";
      }
    },
    model: {
      value: _vm.selected_exam,
      callback: function callback($$v) {
        _vm.selected_exam = $$v;
      },
      expression: "selected_exam"
    }
  }, [!_vm.exams.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                            ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
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
      "track-by": "id",
      "group-values": "batches",
      "group-label": "course_group",
      "group-select": false,
      name: "batch_id",
      id: "batch_id",
      options: _vm.exam_wise_batches,
      placeholder: _vm.trans("academic.select_batch"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_exam_wise_batches
    },
    on: {
      select: _vm.onExamWiseBatchSelect,
      remove: _vm.onExamWiseBatchRemove
    },
    model: {
      value: _vm.selected_exam_wise_batches,
      callback: function callback($$v) {
        _vm.selected_exam_wise_batches = $$v;
      },
      expression: "selected_exam_wise_batches"
    }
  }, [!_vm.exam_wise_batches.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                            ")]) : _vm._e()])], 1)])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("a", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      target: "_blank",
      href: _vm.exportData()
    }
  }, [_vm._v(_vm._s(_vm.trans("general.export")))])])])])])])]);
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

/***/ "./resources/js/views/exam/report/analysis/export.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/exam/report/analysis/export.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _export_vue_vue_type_template_id_a92489a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export.vue?vue&type=template&id=a92489a6& */ "./resources/js/views/exam/report/analysis/export.vue?vue&type=template&id=a92489a6&");
/* harmony import */ var _export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./export.vue?vue&type=script&lang=js& */ "./resources/js/views/exam/report/analysis/export.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _export_vue_vue_type_template_id_a92489a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _export_vue_vue_type_template_id_a92489a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/exam/report/analysis/export.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/exam/report/analysis/export.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/exam/report/analysis/export.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./export.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/analysis/export.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/exam/report/analysis/export.vue?vue&type=template&id=a92489a6&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/exam/report/analysis/export.vue?vue&type=template&id=a92489a6& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_export_vue_vue_type_template_id_a92489a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_export_vue_vue_type_template_id_a92489a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_export_vue_vue_type_template_id_a92489a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./export.vue?vue&type=template&id=a92489a6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/exam/report/analysis/export.vue?vue&type=template&id=a92489a6&");


/***/ })

}]);
//# sourceMappingURL=export.js.map?id=7fb5962dad67f04b