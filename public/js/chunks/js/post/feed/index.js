"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/post/feed/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/article/show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/article/show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ['uuid', 'url'],
  mounted: function mounted() {
    if (this.uuid) this.get();
  },
  data: function data() {
    return {
      article: [],
      attachments: []
    };
  },
  methods: {
    get: function get() {
      var _this = this;
      var loader = this.$loading.show();
      var articleUrl = this.url ? '/api' + this.url : '/api/article/' + this.uuid;
      axios.get(articleUrl).then(function (response) {
        _this.article = response.article;
        _this.attachments = response.attachments;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getEmployeeName: function getEmployeeName(employee) {
      return helper.getEmployeeName(employee);
    },
    getEmployeeDesignation: function getEmployeeDesignation(employee, date) {
      return helper.getEmployeeDesignation(employee, date);
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  },
  filters: {
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    },
    moment: function moment(date) {
      return helper.formatDate(date);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/feed/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/feed/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _article_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../article/show */ "./resources/js/views/post/article/show.vue");
/* harmony import */ var _js_widgets_article_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/widgets/article-card */ "./resources/js/widgets/article-card.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ArticleDetail: _article_show__WEBPACK_IMPORTED_MODULE_0__["default"],
    ArticleCard: _js_widgets_article_card__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      articles: {
        total: 0,
        data: []
      },
      filter: {
        sort_by: 'date_of_article',
        order: 'desc',
        keyword: '',
        article_type_id: [],
        date_of_article_start_date: '',
        date_of_article_end_date: '',
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'date_of_article',
        translation: i18n.post.date_of_article
      }, {
        value: 'title',
        translation: i18n.post.article_title
      }],
      article_types: [],
      selected_article_types: null,
      help_topic: '',
      showUuid: '',
      showModal: false
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-article')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getArticles();
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    showArticle: function showArticle(article) {
      this.showUuid = article.uuid;
      this.showModal = true;
    },
    getArticles: function getArticles(page) {
      var _this = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      this.filter.date_of_article_start_date = helper.toDate(this.filter.date_of_article_start_date);
      this.filter.date_of_end_start_date = helper.toDate(this.filter.date_of_end_start_date);
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/article?page=' + page + url).then(function (response) {
        _this.articles = response.articles;
        _this.article_types = response.filters.article_types;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    onArticleTypeSelect: function onArticleTypeSelect(selectedOption) {
      this.filter.article_type_id.push(selectedOption.id);
    },
    onArticleTypeRemove: function onArticleTypeRemove(removedOption) {
      this.filter.article_type_id.splice(this.filter.article_type_id.indexOf(removedOption.id), 1);
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
  watch: {
    'filter.sort_by': function filterSort_by(val) {
      this.getArticles();
    },
    'filter.order': function filterOrder(val) {
      this.getArticles();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getArticles();
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    article: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    bodyClass: String
  },
  components: {},
  data: function data() {
    return {};
  },
  methods: {
    getEmployeePhoto: function getEmployeePhoto(employee) {
      return '/' + employee.photo;
    },
    getEmployeeName: function getEmployeeName(employee) {
      return helper.getEmployeeName(employee);
    },
    getEmployeeDesignationOnly: function getEmployeeDesignationOnly(employee) {
      return helper.getEmployeeDesignationOnly(employee);
    },
    getExcerpts: function getExcerpts(content) {
      return helper.getExcerpts(content);
    },
    truncateWords: function truncateWords(text, length, suffix) {
      return helper.truncateWords(text, length, suffix);
    }
  },
  filters: {
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    },
    moment: function moment(date) {
      return helper.formatDate(date);
    },
    momentTime: function momentTime(time) {
      return helper.formatTime(time);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/article/show.vue?vue&type=template&id=04333416&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/article/show.vue?vue&type=template&id=04333416& ***!
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
  return _c("transition", {
    attrs: {
      name: "modal"
    }
  }, [_c("div", {
    staticClass: "modal-mask"
  }, [_c("div", {
    staticClass: "modal-wrapper"
  }, [_c("div", {
    staticClass: "modal-container modal-lg"
  }, [_vm.article.id ? _c("div", {
    staticClass: "modal-header"
  }, [_vm._t("header", function () {
    return [_c("span", [_vm._v(_vm._s(_vm.article.title) + " "), _vm.article.is_public ? _c("span", {
      staticClass: "label label-success"
    }, [_vm._v(_vm._s(_vm.trans("post.article_public")))]) : _vm._e()]), _vm._v(" "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          return _vm.$emit("close");
        }
      }
    }, [_vm._v("x")])];
  })], 2) : _vm._e(), _vm._v(" "), _vm.article.id ? _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("h6", {
      staticClass: "card-title"
    }, [_vm._v("\n                            " + _vm._s(_vm.trans("post.date_of_article")) + ": " + _vm._s(_vm._f("moment")(_vm.article.date_of_article)) + " \n                            "), _vm.article.user ? _c("p", {
      staticClass: "pull-right"
    }, [_c("strong", [_vm._v(_vm._s(_vm.trans("post.article_posted_by")) + ":")]), _vm._v(" " + _vm._s(_vm.getEmployeeName(_vm.article.user.employee)) + " " + _vm._s(_vm.getEmployeeDesignation(_vm.article.user.employee, _vm.article.date_of_article)) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "m-t-20 html-view",
      domProps: {
        innerHTML: _vm._s(_vm.article.description)
      }
    }), _vm._v(" "), _vm.attachments.length ? _c("div", [_c("ul", {
      staticClass: "m-t-10 upload-file-list"
    }, _vm._l(_vm.attachments, function (attachment) {
      return _c("li", {
        staticClass: "upload-file-list-item"
      }, [_c("a", {
        staticClass: "no-link-color",
        attrs: {
          href: "/post/article/".concat(_vm.article.uuid, "/attachment/").concat(attachment.uuid, "/download?token=").concat(_vm.authToken)
        }
      }, [_c("i", {
        "class": ["file-icon", "fas", "fa-lg", attachment.file_info.icon]
      }), _vm._v(" "), _c("span", {
        staticClass: "upload-file-list-item-size"
      }, [_vm._v(_vm._s(attachment.file_info.size))]), _vm._v(" " + _vm._s(attachment.user_filename))])]);
    }), 0)]) : _vm._e(), _vm._v(" "), _c("hr"), _vm._v(" "), _c("p", [_c("i", {
      staticClass: "far fa-clock"
    }), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.trans("general.created_at")) + " " + _vm._s(_vm._f("momentDateTime")(_vm.article.created_at)))]), _vm._v(" "), _c("span", {
      staticClass: "pull-right"
    }, [_c("i", {
      staticClass: "far fa-clock"
    }), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.trans("general.updated_at")) + " " + _vm._s(_vm._f("momentDateTime")(_vm.article.updated_at)))])])])];
  })], 2) : _vm._e()])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/feed/index.vue?vue&type=template&id=5c34e541&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/feed/index.vue?vue&type=template&id=5c34e541& ***!
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
  return _c("div", [_c("div", {
    staticClass: "page-titles"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("h3", {
    staticClass: "text-themecolor"
  }, [_vm._v(_vm._s(_vm.trans("post.feed")) + " \n                    "), _vm.articles.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.articles.total,
    from: _vm.articles.from,
    to: _vm.articles.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid container-body"
  }, [_vm.articles.total ? _c("div", {
    staticClass: "article-feed card-columns"
  }, _vm._l(_vm.articles.data, function (article) {
    return _c("div", {
      staticClass: "article-item",
      on: {
        click: function click($event) {
          return _vm.showArticle(article);
        }
      }
    }, [_c("article-card", {
      attrs: {
        article: article
      }
    })], 1);
  }), 0) : _vm._e(), _vm._v(" "), _c("pagination-record", {
    attrs: {
      "page-length": _vm.filter.page_length,
      records: _vm.articles
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getArticles
    }
  })], 1), _vm._v(" "), _vm.showModal ? _c("article-detail", {
    attrs: {
      uuid: _vm.showUuid
    },
    on: {
      close: function close($event) {
        _vm.showModal = false;
      }
    }
  }) : _vm._e(), _vm._v(" "), _c("right-panel", {
    attrs: {
      topic: _vm.help_topic
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=template&id=485d96e5&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=template&id=485d96e5&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("article", {
    staticClass: "card card-box with-shadow article-card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("header", [_c("h5", {
    staticClass: "h5 card-title"
  }, [_vm._v(_vm._s(_vm.article.title))]), _vm._v(" "), _c("div", {
    staticClass: "article-meta"
  }, [_c("small", {
    staticClass: "type text-muted"
  }, [_c("i", {
    staticClass: "fas fa-hashtag"
  }), _vm._v(" " + _vm._s(_vm.article.article_type.name))]), _vm._v(" "), _c("small", {
    staticClass: "date text-muted"
  }, [_c("i", {
    staticClass: "far fa-clock"
  }), _vm._v(" " + _vm._s(_vm._f("moment")(_vm.article.date_of_article)))])])]), _vm._v(" "), _c("div", {
    staticClass: "article-content"
  }, [_c("p", {
    staticClass: "card-text",
    domProps: {
      innerHTML: _vm._s(_vm.article.excerpt)
    }
  })]), _vm._v(" "), _c("footer", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-8"
  }, [_c("div", {
    staticClass: "article-author"
  }, [_c("span", {
    staticClass: "author-thumb pull-left"
  }, [!_vm.article.user.employee.photo ? [_c("i", {
    staticClass: "fas fa-user"
  })] : [_c("img", {
    staticClass: "img-circle",
    attrs: {
      src: _vm.getEmployeePhoto(_vm.article.user.employee)
    }
  })]], 2), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.getEmployeeName(_vm.article.user.employee)))]), _vm._v(" "), _c("span", {
    staticClass: "designation small text-muted"
  }, [_vm._v(_vm._s(_vm.getEmployeeDesignationOnly(_vm.article.user.employee)))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "cta text-right"
  }, [_c("button", {
    staticClass: "btn btn-info",
    attrs: {
      type: "button"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.read_more")))])])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card.article-card[data-v-485d96e5] {\n  opacity: 0.9;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.card.article-card header[data-v-485d96e5] {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px dotted #f1f2f3;\n}\n.card.article-card header .h5[data-v-485d96e5] {\n  margin-bottom: 0.75rem;\n  display: block;\n}\n.card.article-card header .article-meta small + small[data-v-485d96e5] {\n  margin-left: 0.5rem;\n}\n.card.article-card .article-content[data-v-485d96e5] {\n  font-size: 95%;\n  margin-bottom: 1rem;\n}\n.card.article-card footer[data-v-485d96e5] {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px dotted #f1f2f3;\n}\n.card.article-card footer .article-author .author-thumb[data-v-485d96e5] {\n  float: left;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #f1f2f3;\n  margin-right: 10px;\n  text-align: center;\n}\n.card.article-card footer .article-author .author-thumb i[data-v-485d96e5] {\n  padding-top: 15px;\n}\n.card.article-card footer .article-author .author-thumb img[data-v-485d96e5] {\n  width: 100%;\n}\n.card.article-card footer .article-author p[data-v-485d96e5] {\n  margin-bottom: 0;\n}\n.card.article-card footer .article-author p span[data-v-485d96e5] {\n  display: block;\n}\n.card.article-card footer .article-author p span.author[data-v-485d96e5] {\n  font-weight: 500;\n}\n.card.article-card footer .cta[data-v-485d96e5] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  height: 50px;\n}", "",{"version":3,"sources":["webpack://./resources/js/widgets/article-card.vue"],"names":[],"mappings":"AACA;EACI,YAAA;EACA,gCAAA;EACA,eAAA;AAAJ;AAEI;EACI,sBAAA;EACA,uBAAA;EACA,iCAAA;AAAR;AAEQ;EACI,sBAAA;EACA,cAAA;AAAZ;AAEQ;EACI,mBAAA;AAAZ;AAGI;EACI,cAAA;EACA,mBAAA;AADR;AAGI;EACI,mBAAA;EACA,oBAAA;EACA,8BAAA;AADR;AAIY;EACI,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;AAFhB;AAGgB;EACI,iBAAA;AADpB;AAGgB;EACI,WAAA;AADpB;AAIY;EACI,gBAAA;AAFhB;AAIgB;EACI,cAAA;AAFpB;AAIoB;EACI,gBAAA;AAFxB;AAQQ;EACI,aAAA;EACA,yBAAA;EACA,qBAAA;EACA,YAAA;AANZ","sourcesContent":["\n.card.article-card {\n    opacity: 0.9;\n    transition: all 0.3s ease-in-out;\n    cursor: pointer;\n\n    header {\n        margin-bottom: 0.75rem;\n        padding-bottom: 0.75rem;\n        border-bottom: 1px dotted #f1f2f3;\n\n        .h5 {\n            margin-bottom: 0.75rem;\n            display: block;\n        }\n        .article-meta small + small{\n            margin-left: 0.5rem;\n        }\n    }\n    .article-content {\n        font-size: 95%;\n        margin-bottom: 1rem;\n    }\n    footer {\n        margin-top: 0.75rem;\n        padding-top: 0.75rem;\n        border-top: 1px dotted #f1f2f3;\n\n        .article-author {\n            .author-thumb {\n                float: left;\n                width: 50px;\n                height: 50px;\n                border-radius: 50%;\n                background: #f1f2f3;\n                margin-right: 10px;\n                text-align: center;\n                i {\n                    padding-top: 15px;\n                }\n                img {\n                    width: 100%;\n                }\n            }\n            p{\n                margin-bottom: 0;\n\n                span {\n                    display: block;\n\n                    &.author{\n                        font-weight: 500;\n                    }\n                }\n            }\n        }\n\n        .cta {\n            display: flex;\n            justify-content: flex-end;\n            align-items: flex-end;\n            height: 50px;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_article_card_vue_vue_type_style_index_0_id_485d96e5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_article_card_vue_vue_type_style_index_0_id_485d96e5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_article_card_vue_vue_type_style_index_0_id_485d96e5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/post/article/show.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/post/article/show.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_04333416___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=04333416& */ "./resources/js/views/post/article/show.vue?vue&type=template&id=04333416&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/views/post/article/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_04333416___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_04333416___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/post/article/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/post/feed/index.vue":
/*!************************************************!*\
  !*** ./resources/js/views/post/feed/index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_5c34e541___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5c34e541& */ "./resources/js/views/post/feed/index.vue?vue&type=template&id=5c34e541&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/post/feed/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5c34e541___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_5c34e541___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/post/feed/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/widgets/article-card.vue":
/*!***********************************************!*\
  !*** ./resources/js/widgets/article-card.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _article_card_vue_vue_type_template_id_485d96e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-card.vue?vue&type=template&id=485d96e5&scoped=true& */ "./resources/js/widgets/article-card.vue?vue&type=template&id=485d96e5&scoped=true&");
/* harmony import */ var _article_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-card.vue?vue&type=script&lang=js& */ "./resources/js/widgets/article-card.vue?vue&type=script&lang=js&");
/* harmony import */ var _article_card_vue_vue_type_style_index_0_id_485d96e5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss& */ "./resources/js/widgets/article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _article_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _article_card_vue_vue_type_template_id_485d96e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _article_card_vue_vue_type_template_id_485d96e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "485d96e5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/widgets/article-card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/post/article/show.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/post/article/show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/article/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/post/feed/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/post/feed/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/feed/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/widgets/article-card.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/widgets/article-card.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./article-card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/post/article/show.vue?vue&type=template&id=04333416&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/post/article/show.vue?vue&type=template&id=04333416& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_04333416___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_04333416___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_04333416___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=04333416& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/article/show.vue?vue&type=template&id=04333416&");


/***/ }),

/***/ "./resources/js/views/post/feed/index.vue?vue&type=template&id=5c34e541&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/post/feed/index.vue?vue&type=template&id=5c34e541& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5c34e541___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5c34e541___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5c34e541___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=5c34e541& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/post/feed/index.vue?vue&type=template&id=5c34e541&");


/***/ }),

/***/ "./resources/js/widgets/article-card.vue?vue&type=template&id=485d96e5&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/widgets/article-card.vue?vue&type=template&id=485d96e5&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_article_card_vue_vue_type_template_id_485d96e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_article_card_vue_vue_type_template_id_485d96e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_article_card_vue_vue_type_template_id_485d96e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./article-card.vue?vue&type=template&id=485d96e5&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=template&id=485d96e5&scoped=true&");


/***/ }),

/***/ "./resources/js/widgets/article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/widgets/article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_article_card_vue_vue_type_style_index_0_id_485d96e5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/widgets/article-card.vue?vue&type=style&index=0&id=485d96e5&scoped=true&lang=scss&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=6bb404291f03c0e6