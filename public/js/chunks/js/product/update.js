"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/product/update"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/product.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    product: {
      required: true
    },
    update: {
      required: false,
      "default": 0
    }
  },
  computed: {
    checkSupportValidity: function checkSupportValidity() {
      if (helper.today() <= this.product.date_of_support_expiry) return true;else return false;
    }
  },
  filters: {
    moment: function moment(date) {
      return helper.formatDate(date);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/update.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/update.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ "./resources/js/views/product/product.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    product: _product__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      update_tips: '',
      product: {},
      is_processing: 0,
      is_downloading: 0,
      is_updating: 0,
      is_downloaded: 0,
      updateForm: new Form({
        build: '',
        version: ''
      })
    };
  },
  mounted: function mounted() {
    if (!helper.hasRole('admin')) {
      this.$router.push('/');
    }
    this.getPreRequisite();
  },
  methods: {
    confirmUpdate: function confirmUpdate() {
      var _this = this;
      return function (dialog) {
        return _this.update();
      };
    },
    confirmDownload: function confirmDownload(action) {
      var _this2 = this;
      return function (dialog) {
        return _this2.download(action);
      };
    },
    getPreRequisite: function getPreRequisite() {
      var _this3 = this;
      var loader = this.$loading.show();
      axios.get('/api/update').then(function (response) {
        _this3.update_tips = response.update_tips;
        _this3.product = response.product;
        if (response.is_downloaded) {
          _this3.is_downloaded = 1;
          _this3.updateForm.build = _this3.product.next_release_build;
          _this3.updateForm.version = _this3.product.next_release_version;
        }
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    download: function download(action) {
      var _this4 = this;
      var loader = this.$loading.show();
      this.is_processing = 1;
      this.is_downloading = 1;
      axios.post('/api/download').then(function (response) {
        toastr.success(response.message);
        _this4.is_downloading = 0;
        _this4.is_downloaded = 1;
        _this4.updateForm.build = response.release.build;
        _this4.updateForm.version = response.release.version;
        if (action) _this4.update();
        loader.hide();
      })["catch"](function (error) {
        helper.showErrorMsg(error);
        _this4.is_processing = 0;
        _this4.is_downloading = 0;
        loader.hide();
      });
    },
    update: function update() {
      var _this5 = this;
      var loader = this.$loading.show();
      this.is_updating = 1;
      this.updateForm.post('/api/update').then(function (response) {
        toastr.success(response.message);
        loader.hide();
        location.reload();
      })["catch"](function (error) {
        loader.hide();
        _this5.is_processing = 0;
        _this5.is_updating = 0;
        helper.showErrorMsg(error);
      });
    },
    getFileSize: function getFileSize(size) {
      return helper.bytesToSize(size);
    }
  },
  filters: {
    moment: function moment(date) {
      return helper.formatDate(date);
    }
  },
  computed: {
    checkSupportValidity: function checkSupportValidity() {
      if (helper.today() <= this.product.date_of_support_expiry) return true;else return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/product.vue?vue&type=template&id=69271ba0&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/product.vue?vue&type=template&id=69271ba0& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "table-responsive"
  }, [_vm.product.name ? _c("table", {
    staticClass: "table"
  }, [_c("tbody", [_c("tr", [_c("th", [_vm._v("Product Name")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.product.name))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Current Version")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.product.current_version))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Latest Version")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm.product.latest_version) + "\n                        "), _vm.product.current_version != _vm.product.latest_version && !_vm.update ? _c("span", [_c("br"), _c("router-link", {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      to: "/update"
    }
  }, [_vm._v("Update Available")])], 1) : _vm._e(), _vm._v(" "), _vm.product.current_version == _vm.product.latest_version ? _c("span", {
    staticClass: "btn btn-success btn-sm"
  }, [_vm._v("Up-to-date")]) : _vm._e()])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Latest Version Release")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(_vm.product.latest_version_release)))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Purchase Code")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.product.purchase_code))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Registered Email Id")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.product.email))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("License Type")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.product.license_type))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Date of Purchase")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(_vm.product.date_of_purchase)))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Support Validity "), _c("br"), _vm._v(" "), _c("a", {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      href: "http://codecanyon.net/item/x/".concat(_vm.product.envato_code, "?=ScriptMint"),
      target: "_blank"
    }
  }, [_vm._v("Renew Support")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(_vm.product.date_of_support_expiry)) + " "), _c("br"), _vm._v(" "), _vm.checkSupportValidity ? _c("span", {
    staticClass: "label label-success"
  }, [_vm._v("Supported")]) : _c("span", {
    staticClass: "label label-danger"
  }, [_vm._v("Expired")])])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Access Code")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.product.access_code))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Checksum")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.product.checksum))])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/update.vue?vue&type=template&id=37eb47b0&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/update.vue?vue&type=template&id=37eb47b0& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("general.update")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/dashboard");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-home"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.home")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid p-4"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("general.update")))]), _vm._v(" "), _vm.product.current_version == _vm.product.latest_version && _vm.product.name ? _c("div", {
    staticClass: "alert alert-danger"
  }, [_vm._v("No update available! Please check later.")]) : _c("div", [!_vm.is_processing ? [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.update_tips)
    }
  }), _vm._v(" "), _vm.product.name ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("tbody", [_c("tr", [_c("th", [_vm._v("Version Available for Upgrade")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.product.next_release_version))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Date of Release")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("moment")(_vm.product.next_release_date)))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Update Size")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getFileSize(_vm.product.next_release_size)))])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "2"
    },
    domProps: {
      innerHTML: _vm._s(_vm.product.next_release_change_log)
    }
  })])])]), _vm._v(" "), !_vm.is_downloaded ? _c("button", {
    directives: [{
      name: "confirm",
      rawName: "v-confirm",
      value: {
        ok: _vm.confirmDownload(0)
      },
      expression: "{ok: confirmDownload(0)}"
    }],
    key: "download",
    staticClass: "btn btn-info",
    attrs: {
      type: "button"
    }
  }, [_vm._v("Download")]) : _vm._e(), _vm._v(" "), _vm.is_downloaded ? _c("button", {
    directives: [{
      name: "confirm",
      rawName: "v-confirm",
      value: {
        ok: _vm.confirmUpdate()
      },
      expression: "{ok: confirmUpdate()}"
    }],
    key: "direct-update",
    staticClass: "btn btn-info",
    attrs: {
      type: "button"
    }
  }, [_vm._v("Update")]) : _vm._e(), _vm._v(" "), !_vm.is_downloaded ? _c("button", {
    directives: [{
      name: "confirm",
      rawName: "v-confirm",
      value: {
        ok: _vm.confirmDownload(1)
      },
      expression: "{ok: confirmDownload(1)}"
    }],
    key: "download-update",
    staticClass: "btn btn-success",
    attrs: {
      type: "button"
    }
  }, [_vm._v("Download & Update")]) : _vm._e()]) : _vm._e()] : [_c("p", {
    staticClass: "text-center"
  }, [_vm._v("Don't perform any action till we are performing update!")]), _vm._v(" "), _vm.is_downloading ? _c("p", {
    staticClass: "text-center"
  }, [_vm._v("Update Size (" + _vm._s(_vm.getFileSize(_vm.product.next_release_size)) + ") - Downloading.....")]) : _vm._e(), _vm._v(" "), _vm.is_updating ? _c("p", {
    staticClass: "text-center"
  }, [_vm._v("Updating.....")]) : _vm._e(), _vm._v(" "), _vm.is_downloaded ? _c("button", {
    directives: [{
      name: "confirm",
      rawName: "v-confirm",
      value: {
        ok: _vm.confirmUpdate()
      },
      expression: "{ok: confirmUpdate()}"
    }],
    key: "update",
    staticClass: "btn btn-info",
    attrs: {
      type: "button"
    }
  }, [_vm._v("Update")]) : _vm._e()]], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("general.product_information")))]), _vm._v(" "), _c("product", {
    attrs: {
      product: _vm.product,
      update: "1"
    }
  })], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/product/product.vue":
/*!************************************************!*\
  !*** ./resources/js/views/product/product.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_vue_vue_type_template_id_69271ba0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=69271ba0& */ "./resources/js/views/product/product.vue?vue&type=template&id=69271ba0&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/views/product/product.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_69271ba0___WEBPACK_IMPORTED_MODULE_0__.render,
  _product_vue_vue_type_template_id_69271ba0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/product/product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/product/update.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/product/update.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _update_vue_vue_type_template_id_37eb47b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.vue?vue&type=template&id=37eb47b0& */ "./resources/js/views/product/update.vue?vue&type=template&id=37eb47b0&");
/* harmony import */ var _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.vue?vue&type=script&lang=js& */ "./resources/js/views/product/update.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _update_vue_vue_type_template_id_37eb47b0___WEBPACK_IMPORTED_MODULE_0__.render,
  _update_vue_vue_type_template_id_37eb47b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/product/update.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/product/product.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/product/product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/product/update.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/product/update.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./update.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/update.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/product/product.vue?vue&type=template&id=69271ba0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/product/product.vue?vue&type=template&id=69271ba0& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_69271ba0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_69271ba0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_69271ba0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product.vue?vue&type=template&id=69271ba0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/product.vue?vue&type=template&id=69271ba0&");


/***/ }),

/***/ "./resources/js/views/product/update.vue?vue&type=template&id=37eb47b0&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/product/update.vue?vue&type=template&id=37eb47b0& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_37eb47b0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_37eb47b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_37eb47b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./update.vue?vue&type=template&id=37eb47b0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/update.vue?vue&type=template&id=37eb47b0&");


/***/ })

}]);
//# sourceMappingURL=update.js.map?id=c3a444903df1a363