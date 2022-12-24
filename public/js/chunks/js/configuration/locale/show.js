"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/configuration/locale/show"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      modules: {},
      words: {},
      locale: {},
      module: this.$route.params.module ? this.$route.params.module : 'auth',
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    if (!helper.featureAvailable('multilingual')) {
      helper.featureNotAvailableMsg();
      this.$router.push('/dashboard');
    }
    this.fetchWords();
  },
  methods: {
    fetchWords: function fetchWords() {
      var _this = this;
      var loader = this.$loading.show();
      axios.post('/api/locale/fetch', {
        locale: this.$route.params.locale,
        module: this.module
      }).then(function (response) {
        _this.modules = response.modules;
        _this.words = response.words;
        _this.locale = response.locale;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this.$router.push('/configuration/locale');
      });
    },
    getName: function getName(name) {
      name = helper.ucword(name);
      return name.replace(/_/g, ' ');
    },
    getModuleLink: function getModuleLink(module) {
      return '/configuration/locale/' + this.$route.params.locale + '/' + module;
    },
    saveTranslation: function saveTranslation() {
      var loader = this.$loading.show();
      axios.post('/api/locale/translate', {
        locale: this.$route.params.locale,
        module: this.module,
        words: this.words
      }).then(function (response) {
        toastr.success(response.message);
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    toWord: function toWord(word) {
      return helper.toWord(word);
    }
  },
  watch: {
    '$route.params.module': function $routeParamsModule(newModule, oldModule) {
      this.module = newModule;
      this.fetchWords();
    }
  },
  computed: {
    getWordCount: function getWordCount() {
      return _size(this.words);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=template&id=2eb4c18a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=template&id=2eb4c18a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  }, [_vm._v(_vm._s(_vm.trans("configuration.translation")) + " (" + _vm._s(_vm.locale.name) + ") ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/configuration/locale");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-globe"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("configuration.locale")))])]), _vm._v(" "), _c("div", {
    staticClass: "btn-group"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    staticStyle: {
      "margin-top": "-5px"
    },
    attrs: {
      type: "button",
      href: "#",
      role: "button",
      id: "moduleLink",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-boxes"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("configuration.locale_module")) + " "), _c("span", [_vm._v("(" + _vm._s(_vm.toWord(_vm.module)) + ")")]), _vm._v(" "), _c("i", {
    staticClass: "fas fa-chevron-down"
  })])]), _vm._v(" "), _c("div", {
    "class": ["dropdown-menu", _vm.getConfig("direction") == "ltr" ? "dropdown-menu-right" : ""],
    attrs: {
      "aria-labelledby": "moduleLink"
    }
  }, _vm._l(_vm.modules, function (mod) {
    return _c("button", {
      staticClass: "dropdown-item",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.$router.push("/configuration/locale/" + _vm.locale.locale + "/" + mod);
        }
      }
    }, [_vm._v("\n                                " + _vm._s(_vm.toWord(mod)) + " "), mod == _vm.module ? _c("span", {
      staticClass: "pull-right"
    }, [_c("i", {
      staticClass: "fas fa-check"
    })]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("help-button", {
    on: {
      clicked: function clicked($event) {
        _vm.help_topic = "configuration.locale.translation";
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_vm.getWordCount ? _c("div", [_c("div", {
    staticClass: "row"
  }, [_vm._l(_vm.words, function (word, index) {
    return [_typeof(word) === "object" ? _vm._l(word, function (wrd, i) {
      return _c("div", {
        staticClass: "col-12 col-sm-4"
      }, [_c("div", {
        staticClass: "form-group"
      }, [_c("label", {
        staticStyle: {
          color: "red"
        },
        attrs: {
          "for": ""
        }
      }, [_vm._v(_vm._s(_vm.trans(_vm.module + "." + index + "." + i)))]), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.words[index][i],
          expression: "words[index][i]"
        }],
        staticClass: "form-control",
        attrs: {
          type: "text",
          name: "".concat(index, "_").concat(i)
        },
        domProps: {
          value: _vm.words[index][i]
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(_vm.words[index], i, $event.target.value);
          }
        }
      })])]);
    }) : [_c("div", {
      staticClass: "col-12 col-sm-4"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      staticClass: "font-weight-bold",
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(_vm.trans(_vm.module + "." + index)))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.words[index],
        expression: "words[index]"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: index
      },
      domProps: {
        value: _vm.words[index]
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.words, index, $event.target.value);
        }
      }
    })])])]];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm pull-right",
    on: {
      click: _vm.saveTranslation
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))])])]) : _vm._e(), _vm._v(" "), !_vm.getWordCount ? _c("div", [_c("p", {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])]) : _vm._e()])])]), _vm._v(" "), _c("right-panel", {
    attrs: {
      topic: _vm.help_topic
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.list-group-item .active {color:#ffffff;}\n", "",{"version":3,"sources":["webpack://./resources/js/views/configuration/locale/show.vue"],"names":[],"mappings":";AAyJA,0BAAA,aAAA,CAAA","sourcesContent":["<template>\r\n    <div>\r\n        <div class=\"page-titles\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <h3 class=\"text-themecolor\">{{trans('configuration.translation')}} ({{locale.name}}) </h3>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"action-buttons pull-right\">\r\n                        <button class=\"btn btn-info btn-sm\" @click=\"$router.push('/configuration/locale')\"><i class=\"fas fa-globe\"></i> <span class=\"d-none d-sm-inline\">{{trans('configuration.locale')}}</span></button>\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" style=\"margin-top:-5px;\" class=\"btn btn-info btn-sm\" href=\"#\" role=\"button\" id=\"moduleLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <i class=\"fas fa-boxes\"></i> <span class=\"d-none d-sm-inline\">{{trans('configuration.locale_module')}} <span>({{toWord(module)}})</span> <i class=\"fas fa-chevron-down\"></i> </span>\r\n                            </button>\r\n                            <div :class=\"['dropdown-menu',getConfig('direction') == 'ltr' ? 'dropdown-menu-right' : '']\" aria-labelledby=\"moduleLink\">\r\n                                <button style=\"cursor:pointer;\" class=\"dropdown-item\" v-for=\"mod in modules\" @click=\"$router.push('/configuration/locale/'+locale.locale+'/'+mod)\">\r\n                                    {{toWord(mod)}} <span v-if=\"mod == module\" class=\"pull-right\"><i class=\"fas fa-check\"></i></span> \r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <help-button @clicked=\"help_topic = 'configuration.locale.translation'\"></help-button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body p-4\">\r\n                    <div v-if=\"getWordCount\">\r\n                        <div class=\"row\">\r\n                            <template v-for=\"(word,index) in words\">\r\n                                <template v-if=\"typeof word === 'object'\">\r\n                                    <div class=\"col-12 col-sm-4\" v-for=\"(wrd,i) in word\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"\" style=\"color:red;\">{{trans(module+'.'+index+'.'+i)}}</label>\r\n                                            <!-- <label for=\"\">{{index}}_{{i}}</label> -->\r\n                                            <input class=\"form-control\" type=\"text\" v-model=\"words[index][i]\" :name=\"`${index}_${i}`\">\r\n                                        </div>\r\n                                    </div>\r\n                                </template>\r\n                                <template v-else>\r\n                                    <div class=\"col-12 col-sm-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"\" class=\"font-weight-bold\">{{trans(module+'.'+index)}}</label>\r\n                                            <!-- <label for=\"\">{{index}}</label> -->\r\n                                            <input class=\"form-control\" type=\"text\" v-model=\"words[index]\" :name=\"index\">\r\n                                        </div>\r\n                                    </div>\r\n                                </template>\r\n                            </template>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <button class=\"btn btn-info btn-sm pull-right\" @click=\"saveTranslation\">{{trans('general.save')}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div v-if=\"!getWordCount\">\r\n                        <p class=\"alert alert-danger\">{{trans('general.no_result_found')}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <right-panel :topic=\"help_topic\"></right-panel>\r\n    </div>\r\n</template>\r\n\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                modules: {},\r\n                words: {},\r\n                locale: {},\r\n                module: (this.$route.params.module) ? this.$route.params.module : 'auth',\r\n                help_topic: ''\r\n            };\r\n        },\r\n        mounted(){\r\n            if(!helper.hasPermission('access-configuration')){\r\n                helper.notAccessibleMsg();\r\n                this.$router.push('/dashboard');\r\n            }\r\n\r\n            if(!helper.featureAvailable('multilingual')){\r\n                helper.featureNotAvailableMsg();\r\n                this.$router.push('/dashboard');\r\n            }\r\n\r\n            this.fetchWords();\r\n        },\r\n        methods: {\r\n            fetchWords(){\r\n                let loader = this.$loading.show();\r\n                axios.post('/api/locale/fetch',{\r\n                    locale: this.$route.params.locale,\r\n                    module: this.module\r\n                    })\r\n                    .then(response => {\r\n                        this.modules = response.modules;\r\n                        this.words = response.words;\r\n                        this.locale = response.locale;\r\n                        loader.hide();\r\n                    }).catch(error => {\r\n                        loader.hide();\r\n                        helper.showErrorMsg(error);\r\n                        this.$router.push('/configuration/locale');\r\n                    });\r\n            },\r\n            getName(name){\r\n                name = helper.ucword(name);\r\n                return name.replace(/_/g, ' ');\r\n            },\r\n            getModuleLink(module){\r\n                return '/configuration/locale/'+this.$route.params.locale+'/'+module\r\n            },\r\n            saveTranslation(){\r\n                let loader = this.$loading.show();\r\n                axios.post('/api/locale/translate',{\r\n                    locale: this.$route.params.locale,\r\n                    module: this.module,\r\n                    words: this.words\r\n                }).then(response => {\r\n                    toastr.success(response.message);\r\n                    loader.hide();\r\n                }).catch(error => {\r\n                    loader.hide();\r\n                    helper.showErrorMsg(error);\r\n                });\r\n            },\r\n            getConfig(config){\r\n                return helper.getConfig(config);\r\n            },\r\n            toWord(word){\r\n                return helper.toWord(word);\r\n            }\r\n        },\r\n        watch: {\r\n            '$route.params.module'(newModule, oldModule) {\r\n                this.module = newModule;\r\n                this.fetchWords();\r\n            }\r\n        },\r\n        computed: {\r\n            getWordCount(){\r\n                return _size(this.words);\r\n            }\r\n        }\r\n    }\r\n</script>\r\n<style>\r\n    .list-group-item .active {color:#ffffff;}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_2eb4c18a_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_2eb4c18a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_2eb4c18a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/configuration/locale/show.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/configuration/locale/show.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_2eb4c18a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=2eb4c18a& */ "./resources/js/views/configuration/locale/show.vue?vue&type=template&id=2eb4c18a&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/locale/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _show_vue_vue_type_style_index_0_id_2eb4c18a_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css& */ "./resources/js/views/configuration/locale/show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_2eb4c18a___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_2eb4c18a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/locale/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/locale/show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/configuration/locale/show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/locale/show.vue?vue&type=template&id=2eb4c18a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/configuration/locale/show.vue?vue&type=template&id=2eb4c18a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_2eb4c18a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_2eb4c18a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_2eb4c18a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=2eb4c18a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=template&id=2eb4c18a&");


/***/ }),

/***/ "./resources/js/views/configuration/locale/show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/configuration/locale/show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_2eb4c18a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/locale/show.vue?vue&type=style&index=0&id=2eb4c18a&lang=css&");


/***/ })

}]);
//# sourceMappingURL=show.js.map?id=87531b2e5f9e2d06