"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/utility/backup/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/utility/backup/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/utility/backup/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      backupForm: new Form({
        delete_previous: false
      }),
      backups: [],
      filter: {
        page_length: helper.getConfig('page_length'),
        sort_by: 'created_at',
        order: 'desc'
      },
      orderByOptions: [{
        value: 'created_at',
        translation: i18n.general.created_at
      }]
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    if (!helper.featureAvailable('backup')) {
      helper.featureNotAvailableMsg();
      this.$router.push('/dashboard');
    }
    this.getBackups();
  },
  methods: {
    createBackup: function createBackup() {
      var _this = this;
      var loader = this.$loading.show();
      this.backupForm.post('/api/backup').then(function (response) {
        toastr.success(response.message);
        _this.getBackups();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getBackups: function getBackups(page) {
      var _this2 = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/backup?page=' + page + url).then(function (response) {
        _this2.backups = response;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    confirmDelete: function confirmDelete(backup) {
      var _this3 = this;
      return function (dialog) {
        return _this3.deleteBackup(backup);
      };
    },
    deleteBackup: function deleteBackup(backup) {
      var _this4 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/backup/' + backup.name).then(function (response) {
        toastr.success(response.message);
        _this4.getBackups();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getDownloadLink: function getDownloadLink(backup) {
      return '/backup/' + backup.name + '/download/?token=' + helper.getAuthToken();
    }
  },
  filters: {
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    }
  },
  watch: {
    filter: {
      handler: function handler(val) {
        this.getBackups();
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/utility/backup/index.vue?vue&type=template&id=f35338f2&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/utility/backup/index.vue?vue&type=template&id=f35338f2& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("utility.backup")) + "\n                    "), !_vm.backups.length ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card border-bottom"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("utility.generate_backup")))]), _vm._v(" "), _c("show-tip", {
    attrs: {
      module: "utility",
      tip: "tip_backup"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("switches", {
    staticClass: "m-l-20",
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.backupForm.delete_previous,
      callback: function callback($$v) {
        _vm.$set(_vm.backupForm, "delete_previous", $$v);
      },
      expression: "backupForm.delete_previous"
    }
  }), _vm._v(" " + _vm._s(_vm.trans("utility.delete_previous_backup?")) + "\n                ")], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.createBackup.apply(null, arguments);
      }
    }
  }, [_vm._v(_vm._s(_vm.trans("utility.generate_backup")))])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.backups ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("utility.backup_name")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("utility.backup_size")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.backups, function (backup) {
    return _c("tr", [_c("td", {
      domProps: {
        textContent: _vm._s(backup.name)
      }
    }), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(backup.size)
      }
    }), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_c("a", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("utility.download_backup"),
        expression: "trans('utility.download_backup')"
      }],
      staticClass: "btn btn-success btn-sm",
      attrs: {
        href: _vm.getDownloadLink(backup)
      }
    }, [_c("i", {
      staticClass: "fas fa-download"
    })]), _vm._v(" "), _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(backup)
        },
        expression: "{ok: confirmDelete(backup)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("utility.delete_backup"),
        expression: "trans('utility.delete_backup')"
      }],
      key: backup.name,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })])])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.backups.length ? _c("module-info", {
    attrs: {
      module: "utility",
      title: "backup_module_title",
      description: "backup_module_description",
      icon: "list"
    }
  }) : _vm._e()], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/utility/backup/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/utility/backup/index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_f35338f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f35338f2& */ "./resources/js/views/utility/backup/index.vue?vue&type=template&id=f35338f2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/utility/backup/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_f35338f2___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_f35338f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/utility/backup/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/utility/backup/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/utility/backup/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/utility/backup/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/utility/backup/index.vue?vue&type=template&id=f35338f2&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/utility/backup/index.vue?vue&type=template&id=f35338f2& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f35338f2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f35338f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f35338f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=f35338f2& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/utility/backup/index.vue?vue&type=template&id=f35338f2&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=1f5c27232e9229d4