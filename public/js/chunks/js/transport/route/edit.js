"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/transport/route/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/transport/route/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    transportRouteForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('edit-transport-route')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=script&lang=js& ***!
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
      transportRouteForm: new Form({
        name: '',
        description: '',
        transport_stoppages: []
      }),
      transport_stoppages: [],
      selected_transport_stoppages: null,
      showTransportStoppageModal: false
    };
  },
  props: ['id'],
  mounted: function mounted() {
    if (!helper.hasPermission('create-transport-route') && !helper.hasPermission('edit-transport-route')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getPreRequisite();
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    proceed: function proceed() {
      if (this.id) this.update();else this.store();
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      this.showTransportStoppageModal = false;
      axios.get('/api/transport/route/pre-requisite').then(function (response) {
        _this.transport_stoppages = response;
        if (_this.id) _this.get();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    store: function store() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.transportRouteForm.post('/api/transport/route').then(function (response) {
        toastr.success(response.message);
        _this2.transportRouteForm.transport_stoppages = [];
        _this2.selected_transport_stoppages = null;
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
      axios.get('/api/transport/route/' + this.id).then(function (response) {
        _this3.transportRouteForm.name = response.transport_route.name;
        _this3.transportRouteForm.description = response.transport_route.description;
        _this3.selected_transport_stoppages = response.selected_transport_stoppages;
        response.selected_transport_stoppages.forEach(function (transport_route) {
          _this3.transportRouteForm.transport_stoppages.push(transport_route.id);
        });
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this3.$router.push('/transport/route');
      });
    },
    update: function update() {
      var _this4 = this;
      var loader = this.$loading.show();
      this.transportRouteForm.patch('/api/transport/route/' + this.id).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this4.$router.push('/transport/route');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    onTransportStoppageSelect: function onTransportStoppageSelect(selectedOption) {
      this.transportRouteForm.transport_stoppages.push(selectedOption.id);
    },
    onTransportStoppageRemove: function onTransportStoppageRemove(removedOption) {
      this.transportRouteForm.transport_stoppages.splice(this.transportRouteForm.transport_stoppages.indexOf(removedOption.id), 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/edit.vue?vue&type=template&id=08128b35&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/edit.vue?vue&type=template&id=08128b35& ***!
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
  }, [_vm._v(_vm._s(_vm.trans("transport.edit_route")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/transport/route");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("transport.edit_route")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body p-t-20"
  }, [_c("transport-route-form", {
    attrs: {
      id: _vm.id
    }
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=template&id=765d8622&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=template&id=765d8622& ***!
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
  return _c("div", [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.proceed.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.transportRouteForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("transport.route_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.transportRouteForm.name,
      expression: "transportRouteForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: _vm.trans("transport.route_name")
    },
    domProps: {
      value: _vm.transportRouteForm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.transportRouteForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.transportRouteForm,
      "prop-name": "name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.route_description")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.transportRouteForm.description,
      expression: "transportRouteForm.description"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "description",
      placeholder: _vm.trans("transport.route_description")
    },
    domProps: {
      value: _vm.transportRouteForm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.transportRouteForm, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.transportRouteForm,
      "prop-name": "description"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.stoppage")) + " ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "transport_stoppages",
      id: "transport_stoppages",
      options: _vm.transport_stoppages,
      placeholder: _vm.trans("transport.select_stoppage"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_transport_stoppages
    },
    on: {
      select: _vm.onTransportStoppageSelect,
      remove: _vm.onTransportStoppageRemove
    },
    model: {
      value: _vm.selected_transport_stoppages,
      callback: function callback($$v) {
        _vm.selected_transport_stoppages = $$v;
      },
      expression: "selected_transport_stoppages"
    }
  }, [!_vm.transport_stoppages.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.transportRouteForm,
      "prop-name": "transport_stoppages"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 text-right"
  }, [_c("router-link", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.id,
      expression: "id"
    }],
    staticClass: "btn btn-danger waves-effect waves-light",
    attrs: {
      to: "/transport/route"
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
  }, [_vm.id ? _c("span", [_vm._v(_vm._s(_vm.trans("general.update")))]) : _c("span", [_vm._v(_vm._s(_vm.trans("general.save")))])])], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=style&index=0&id=765d8622&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=style&index=0&id=765d8622&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/transport/route/form.vue"],"names":[],"mappings":";AAkKA;IACA,aAAA;AACA","sourcesContent":["<template>\r\n    <div>\r\n        <form @submit.prevent=\"proceed\" @keydown=\"transportRouteForm.errors.clear($event.target.name)\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">{{trans('transport.route_name')}}</label>\r\n                        <input class=\"form-control\" type=\"text\" v-model=\"transportRouteForm.name\" name=\"name\" :placeholder=\"trans('transport.route_name')\">\r\n                        <show-error :form-name=\"transportRouteForm\" prop-name=\"name\"></show-error>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">{{trans('transport.route_description')}}</label>\r\n                        <input class=\"form-control\" type=\"text\" v-model=\"transportRouteForm.description\" name=\"description\" :placeholder=\"trans('transport.route_description')\">\r\n                        <show-error :form-name=\"transportRouteForm\" prop-name=\"description\"></show-error>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">{{trans('transport.stoppage')}} </label> \r\n                        <v-select label=\"name\" track-by=\"id\" v-model=\"selected_transport_stoppages\" name=\"transport_stoppages\" id=\"transport_stoppages\" :options=\"transport_stoppages\" :placeholder=\"trans('transport.select_stoppage')\" @select=\"onTransportStoppageSelect\" :multiple=\"true\" :close-on-select=\"false\" :clear-on-select=\"false\" :hide-selected=\"true\" @remove=\"onTransportStoppageRemove\" :selected=\"selected_transport_stoppages\">\r\n                            <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!transport_stoppages.length\">\r\n                                {{trans('general.no_option_found')}}\r\n                            </div>\r\n                        </v-select>\r\n                        <show-error :form-name=\"transportRouteForm\" prop-name=\"transport_stoppages\"></show-error>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-6\">\r\n                    </div>\r\n                    <div class=\"col-12 col-sm-6 text-right\">\r\n                        <router-link to=\"/transport/route\" class=\"btn btn-danger waves-effect waves-light \" v-show=\"id\">{{trans('general.cancel')}}</router-link>\r\n                        <button v-if=\"!id\" type=\"button\" class=\"btn btn-danger waves-effect waves-light \" @click=\"$emit('cancel')\">{{trans('general.cancel')}}</button>\r\n                        <button type=\"submit\" class=\"btn btn-info waves-effect waves-light\">\r\n                            <span v-if=\"id\">{{trans('general.update')}}</span>\r\n                            <span v-else>{{trans('general.save')}}</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</template>\r\n\r\n\r\n<script>\r\n    export default {\r\n        components: {},\r\n        data() {\r\n            return {\r\n                transportRouteForm: new Form({\r\n                    name : '',\r\n                    description : '',\r\n                    transport_stoppages: []\r\n                }),\r\n                transport_stoppages: [],\r\n                selected_transport_stoppages: null,\r\n                showTransportStoppageModal: false\r\n            };\r\n        },\r\n        props: ['id'],\r\n        mounted() {\r\n            if(!helper.hasPermission('create-transport-route') && !helper.hasPermission('edit-transport-route')){\r\n                helper.notAccessibleMsg();\r\n                this.$router.push('/dashboard');\r\n            }\r\n\r\n            this.getPreRequisite();\r\n        },\r\n        methods: {\r\n            hasPermission(permission){\r\n                return helper.hasPermission(permission);\r\n            },\r\n            proceed(){\r\n                if(this.id)\r\n                    this.update();\r\n                else\r\n                    this.store();\r\n            },\r\n            getPreRequisite(){\r\n                let loader = this.$loading.show();\r\n                this.showTransportStoppageModal = false;\r\n                axios.get('/api/transport/route/pre-requisite')\r\n                    .then(response => {\r\n                        this.transport_stoppages = response;\r\n\r\n                        if(this.id)\r\n                            this.get();\r\n\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            store(){\r\n                let loader = this.$loading.show();\r\n                this.transportRouteForm.post('/api/transport/route')\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        this.transportRouteForm.transport_stoppages = [];\r\n                        this.selected_transport_stoppages = null;\r\n                        this.$emit('completed');\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            get(){\r\n                let loader = this.$loading.show();\r\n                axios.get('/api/transport/route/'+this.id)\r\n                    .then(response => {\r\n                        this.transportRouteForm.name = response.transport_route.name;\r\n                        this.transportRouteForm.description = response.transport_route.description;\r\n                        this.selected_transport_stoppages = response.selected_transport_stoppages;\r\n                        response.selected_transport_stoppages.forEach(transport_route => {\r\n                            this.transportRouteForm.transport_stoppages.push(transport_route.id);\r\n                        });\r\n                        loader.hide();\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                        this.$router.push('/transport/route');\r\n                    });\r\n            },\r\n            update(){\r\n                let loader = this.$loading.show();\r\n                this.transportRouteForm.patch('/api/transport/route/'+this.id)\r\n                    .then(response => {\r\n                        toastr.success(response.message);\r\n                        loader.hide();\r\n                        this.$router.push('/transport/route');\r\n                    })\r\n                    .catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                    });\r\n            },\r\n            getConfig(config) {\r\n                return helper.getConfig(config);\r\n            },\r\n            onTransportStoppageSelect(selectedOption){\r\n                this.transportRouteForm.transport_stoppages.push(selectedOption.id);\r\n            },\r\n            onTransportStoppageRemove(removedOption){\r\n                this.transportRouteForm.transport_stoppages.splice(this.transportRouteForm.transport_stoppages.indexOf(removedOption.id), 1);\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=style&index=0&id=765d8622&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=style&index=0&id=765d8622&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_765d8622_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=765d8622&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=style&index=0&id=765d8622&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_765d8622_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_765d8622_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/transport/route/edit.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/transport/route/edit.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_08128b35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=08128b35& */ "./resources/js/views/transport/route/edit.vue?vue&type=template&id=08128b35&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/transport/route/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_08128b35___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_08128b35___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/transport/route/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/transport/route/form.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/transport/route/form.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_765d8622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=765d8622& */ "./resources/js/views/transport/route/form.vue?vue&type=template&id=765d8622&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/transport/route/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _form_vue_vue_type_style_index_0_id_765d8622_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=765d8622&lang=css& */ "./resources/js/views/transport/route/form.vue?vue&type=style&index=0&id=765d8622&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_765d8622___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_765d8622___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/transport/route/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/transport/route/edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/transport/route/edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/transport/route/form.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/transport/route/form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/transport/route/edit.vue?vue&type=template&id=08128b35&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/transport/route/edit.vue?vue&type=template&id=08128b35& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_08128b35___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_08128b35___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_08128b35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=08128b35& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/edit.vue?vue&type=template&id=08128b35&");


/***/ }),

/***/ "./resources/js/views/transport/route/form.vue?vue&type=template&id=765d8622&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/transport/route/form.vue?vue&type=template&id=765d8622& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_765d8622___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_765d8622___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_765d8622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=765d8622& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=template&id=765d8622&");


/***/ }),

/***/ "./resources/js/views/transport/route/form.vue?vue&type=style&index=0&id=765d8622&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/transport/route/form.vue?vue&type=style&index=0&id=765d8622&lang=css& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_765d8622_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=765d8622&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/route/form.vue?vue&type=style&index=0&id=765d8622&lang=css&");


/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=87947c8f429bc8bf