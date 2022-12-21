"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/configuration/frontend/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/frontend/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/frontend/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      configForm: new Form({
        show_teacher_contact_number: 0,
        show_teacher_email: 0,
        show_teacher_date_of_joining: 0,
        config_type: ''
      }, false)
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getConfiguration();
  },
  methods: {
    getConfiguration: function getConfiguration() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/configuration').then(function (response) {
        _this.configForm = helper.formAssign(_this.configForm, response);
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    submit: function submit() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.configForm.config_type = 'frontend';
      this.configForm.post('/api/configuration').then(function (response) {
        _this2.$store.dispatch('setConfig', {
          loaded: false
        });
        toastr.success(response.message);
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/frontend/index.vue?vue&type=template&id=7754c84d&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/frontend/index.vue?vue&type=template&id=7754c84d& ***!
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
  return _c("div", [_c("div", {
    staticClass: "page-titles"
  }, [_c("h3", {
    staticClass: "text-themecolor"
  }, [_vm._v(_vm._s(_vm.trans("frontend.frontend_configuration")))])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
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
        return _vm.configForm.errors.clear($event.target.name);
      }
    }
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("employee.teacher")))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox m-t-20"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.show_teacher_contact_number,
      expression: "configForm.show_teacher_contact_number"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "show_teacher_contact_number"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.show_teacher_contact_number) ? _vm._i(_vm.configForm.show_teacher_contact_number, "1") > -1 : _vm.configForm.show_teacher_contact_number
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.show_teacher_contact_number,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "show_teacher_contact_number", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "show_teacher_contact_number", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "show_teacher_contact_number", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("frontend.show_teacher_contact_number")))])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "show_teacher_contact_number"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox m-t-20"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.show_teacher_email,
      expression: "configForm.show_teacher_email"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "show_teacher_email"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.show_teacher_email) ? _vm._i(_vm.configForm.show_teacher_email, "1") > -1 : _vm.configForm.show_teacher_email
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.show_teacher_email,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "show_teacher_email", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "show_teacher_email", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "show_teacher_email", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("frontend.show_teacher_email")))])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "show_teacher_email"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox m-t-20"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.show_teacher_date_of_joining,
      expression: "configForm.show_teacher_date_of_joining"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "show_teacher_date_of_joining"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.show_teacher_date_of_joining) ? _vm._i(_vm.configForm.show_teacher_date_of_joining, "1") > -1 : _vm.configForm.show_teacher_date_of_joining
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.show_teacher_date_of_joining,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "show_teacher_date_of_joining", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "show_teacher_date_of_joining", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "show_teacher_date_of_joining", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("frontend.show_teacher_date_of_joining")))])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "show_teacher_date_of_joining"
    }
  })], 1)])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-info waves-effect waves-light pull-right m-t-10",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/configuration/frontend/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/configuration/frontend/index.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_7754c84d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7754c84d& */ "./resources/js/views/configuration/frontend/index.vue?vue&type=template&id=7754c84d&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/frontend/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7754c84d___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_7754c84d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/frontend/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/frontend/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/configuration/frontend/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/frontend/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/frontend/index.vue?vue&type=template&id=7754c84d&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/configuration/frontend/index.vue?vue&type=template&id=7754c84d& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7754c84d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7754c84d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7754c84d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=7754c84d& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/frontend/index.vue?vue&type=template&id=7754c84d&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=f1c218591c7c4f97