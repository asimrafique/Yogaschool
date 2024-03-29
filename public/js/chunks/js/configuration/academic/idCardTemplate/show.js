"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/configuration/academic/idCardTemplate/show"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      id: this.$route.params.id,
      id_card_template: {},
      background_image: '',
      signature_image: ''
    };
  },
  mounted: function mounted() {
    this.getIdCardTemplate();
  },
  methods: {
    getIdCardTemplate: function getIdCardTemplate() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/academic/id-card/template/' + this.id).then(function (response) {
        _this.id_card_template = response;
        _this.background_image = response.options.background_image;
        _this.signature_image = response.options.signature_image;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this.$router.push('/dashboard');
      });
    },
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    updateImage: function updateImage() {}
  },
  filters: {
    moment: function moment(date) {
      return helper.formatDate(date);
    },
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=template&id=2e7431d2&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=template&id=2e7431d2& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("academic.id_card_template")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("router-link", {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      to: "/configuration/academic/id-card/template"
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("academic.id_card_template")))])])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "card border-right"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title m-3"
  }, [_c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.id_card_template.name))])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm custom-show-table"
  }, [_c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("academic.id_card_template_type")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.id_card_template.type == "student" ? _vm.trans("student.student") : _vm.trans("employee.employee")))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("academic.id_card_template_width")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.id_card_template.width) + "mm")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("academic.id_card_template_height")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.id_card_template.height) + "mm")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("academic.id_card_template_per_page_limit")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.id_card_template.options.per_page_limit))])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("h2", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.trans("academic.id_card_template_background_image")))]), _vm._v(" "), _c("upload-image", {
    attrs: {
      id: "background_image",
      "upload-path": "/academic/id-card/template/background/".concat(_vm.id_card_template.id),
      "remove-path": "/academic/id-card/template/background/remove/".concat(_vm.id_card_template.id),
      "image-source": _vm.background_image
    },
    on: {
      uploaded: _vm.updateImage,
      removed: _vm.updateImage
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("h2", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.trans("academic.id_card_template_signature_image")))]), _vm._v(" "), _c("upload-image", {
    attrs: {
      id: "signature_image",
      "upload-path": "/academic/id-card/template/signature/".concat(_vm.id_card_template.id),
      "remove-path": "/academic/id-card/template/signature/remove/".concat(_vm.id_card_template.id),
      "image-source": _vm.signature_image
    },
    on: {
      uploaded: _vm.updateImage,
      removed: _vm.updateImage
    }
  })], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/configuration/academic/id-card-template/show.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/configuration/academic/id-card-template/show.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_2e7431d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=2e7431d2& */ "./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=template&id=2e7431d2&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_2e7431d2___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_2e7431d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/academic/id-card-template/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=template&id=2e7431d2&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=template&id=2e7431d2& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_2e7431d2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_2e7431d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_2e7431d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=2e7431d2& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/id-card-template/show.vue?vue&type=template&id=2e7431d2&");


/***/ })

}]);
//# sourceMappingURL=show.js.map?id=c5a14fad3dc2a551