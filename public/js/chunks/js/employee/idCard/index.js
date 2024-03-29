"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/employee/idCard/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/id-card/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/id-card/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      idCardForm: new Form({
        department_id: '',
        id_card_template_id: ''
      }, false),
      departments: [],
      selected_department: null,
      id_card_templates: [],
      selected_id_card_template: null,
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('generate-employee-id-card')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getPreRequisite();
    helper.showDemoNotification(['employee']);
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/employee/id-card/pre-requisite').then(function (response) {
        _this.departments = response.departments;
        _this.id_card_templates = response.id_card_templates;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onDepartmentSelect: function onDepartmentSelect(selectedOption) {
      var loader = this.$loading.show();
      this.idCardForm.department_id = selectedOption.id;
      loader.hide();
    },
    onDepartmentRemove: function onDepartmentRemove(removedOption) {
      this.idCardForm.department_id = '';
    },
    onIdCardTemplateSelect: function onIdCardTemplateSelect(selectedOption) {
      var loader = this.$loading.show();
      this.idCardForm.id_card_template_id = selectedOption.id;
      loader.hide();
    },
    onIdCardTemplateRemove: function onIdCardTemplateRemove(removedOption) {
      this.idCardForm.id_card_template_id = '';
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
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    },
    getURL: function getURL() {
      return '/employee/id-card/print?department_id=' + this.idCardForm.department_id + '&token=' + this.authToken + '&id_card_template_id=' + this.idCardForm.id_card_template_id;
      ;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/id-card/index.vue?vue&type=template&id=f15ee5ba&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/id-card/index.vue?vue&type=template&id=f15ee5ba& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("employee.id_card")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("help-button", {
    on: {
      clicked: function clicked($event) {
        _vm.help_topic = "";
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.idCardForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.department")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "department_id",
      id: "department_id",
      options: _vm.departments,
      placeholder: _vm.trans("employee.select_department")
    },
    on: {
      select: _vm.onDepartmentSelect,
      close: function close($event) {
        return _vm.idCardForm.errors.clear("department_id");
      },
      remove: _vm.onDepartmentRemove
    },
    model: {
      value: _vm.selected_department,
      callback: function callback($$v) {
        _vm.selected_department = $$v;
      },
      expression: "selected_department"
    }
  }, [!_vm.departments.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n\t\t\t\t\t\t                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n\t\t\t\t\t\t                        ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.idCardForm,
      "prop-name": "department_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.id_card_template")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "id_card_template_id",
      id: "id_card_template_id",
      options: _vm.id_card_templates,
      placeholder: _vm.trans("academic.select_id_card_template")
    },
    on: {
      select: _vm.onIdCardTemplateSelect,
      close: function close($event) {
        return _vm.idCardForm.errors.clear("id_card_template_id");
      },
      remove: _vm.onIdCardTemplateRemove
    },
    model: {
      value: _vm.selected_id_card_template,
      callback: function callback($$v) {
        _vm.selected_id_card_template = $$v;
      },
      expression: "selected_id_card_template"
    }
  }, [!_vm.id_card_templates.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n\t\t\t\t\t\t                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n\t\t\t\t\t\t                        ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.idCardForm,
      "prop-name": "id_card_template_id"
    }
  })], 1)])]), _vm._v(" "), _vm.idCardForm.department_id && _vm.idCardForm.id_card_template_id ? _c("div", {
    staticClass: "form-group"
  }, [_c("a", {
    staticClass: "btn btn-info",
    attrs: {
      href: _vm.getURL,
      target: "_blank"
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.generate_id_card")))])]) : _vm._e()])])])])])]), _vm._v(" "), _c("right-panel", {
    attrs: {
      topic: _vm.help_topic
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/employee/id-card/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/employee/id-card/index.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_f15ee5ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f15ee5ba& */ "./resources/js/views/employee/id-card/index.vue?vue&type=template&id=f15ee5ba&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/employee/id-card/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_f15ee5ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_f15ee5ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/employee/id-card/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/employee/id-card/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/employee/id-card/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/id-card/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/employee/id-card/index.vue?vue&type=template&id=f15ee5ba&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/employee/id-card/index.vue?vue&type=template&id=f15ee5ba& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f15ee5ba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f15ee5ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f15ee5ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=f15ee5ba& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/employee/id-card/index.vue?vue&type=template&id=f15ee5ba&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=79ac676ed4daa005