"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/library/book/show"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['book', 'id', 'bookPostId'],
  data: function data() {
    return {
      postDetailForm: new Form({
        number: '',
        book_condition_id: '',
        location: '',
        remarks: '',
        is_not_available: 0
      }),
      book_conditions: []
    };
  },
  mounted: function mounted() {
    this.fillDetail();
    this.getPreRequisite();
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/book/post/pre-requisite').then(function (response) {
        _this.book_conditions = response.book_conditions;
        loader.hide();
      })["catch"](function (error) {
        helper.showErrorMsg(error);
        loader.hide();
      });
    },
    fillDetail: function fillDetail() {
      var _this2 = this;
      var book_post = this.book.book_posts.find(function (o) {
        return o.id == _this2.bookPostId;
      });
      if (!book_post) this.$emit('close');
      var book_post_detail = book_post.book_post_details.find(function (o) {
        return o.id == _this2.id;
      });
      if (!book_post_detail) this.$emit('close');
      this.postDetailForm.number = book_post_detail.number;
      this.postDetailForm.book_condition_id = book_post_detail.book_condition_id || '';
      this.postDetailForm.location = book_post_detail.location;
      this.postDetailForm.remarks = book_post_detail.remarks;
      this.postDetailForm.is_not_available = book_post_detail.is_not_available;
    },
    submit: function submit() {
      var _this3 = this;
      var loader = this.$loading.show();
      this.postDetailForm.patch('/api/book/' + this.book.uuid + '/post/detail/' + this.id).then(function (response) {
        toastr.success(response.message);
        _this3.$emit('completed');
        _this3.$emit('close');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _post_detail_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-detail-edit */ "./resources/js/views/library/book/post-detail-edit.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    bookPostDetailEdit: _post_detail_edit__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['book'],
  data: function data() {
    return {
      showEditModal: false,
      editId: '',
      editBookPostId: ''
    };
  },
  mounted: function mounted() {},
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    editBook: function editBook(book_post_detail) {
      this.showEditModal = true;
      this.editId = book_post_detail.id;
      this.editBookPostId = book_post_detail.book_post_id;
    },
    confirmDelete: function confirmDelete(book_post_detail) {
      var _this = this;
      return function (dialog) {
        return _this.deleteBookPostDetail(book_post_detail);
      };
    },
    deleteBookPostDetail: function deleteBookPostDetail(book_post_detail) {
      var _this2 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/book/' + this.book.uuid + '/post/detail/' + book_post_detail.id).then(function (response) {
        toastr.success(response.message);
        _this2.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: {
    book: Object,
    lastBookNumber: Number
  },
  data: function data() {
    return {
      bookPostForm: new Form({
        date_of_addition: '',
        quantity: '',
        addition_method: '',
        details: [],
        remarks: ''
      }),
      book_conditions: []
    };
  },
  mounted: function mounted() {
    this.getPreRequisite();
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/book/post/pre-requisite').then(function (response) {
        _this.book_conditions = response.book_conditions;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getNumberName: function getNumberName(index) {
      return index + '_number';
    },
    getLocationName: function getLocationName(index) {
      return index + '_location';
    },
    getConditionName: function getConditionName(index) {
      return index + '_condition';
    },
    submit: function submit() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.bookPostForm.post('/api/book/' + this.book.uuid + '/post').then(function (response) {
        toastr.success(response.message);
        _this2.bookPostForm.details = [];
        _this2.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  },
  watch: {
    'bookPostForm.quantity': function bookPostFormQuantity(value) {
      value = parseInt(value);
      if (value > 20) {
        this.bookPostForm.quantity = 1;
        return toastr.error(i18n.library.book_post_max_limit_crossed);
      }
      this.bookPostForm.details = [];
      var max_number = this.lastBookNumber + value;
      for (var number = this.lastBookNumber; number < max_number; number++) {
        this.bookPostForm.details.push({
          number: number,
          location: '',
          book_condition_id: ''
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-list.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['book'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    confirmDelete: function confirmDelete(book_post) {
      var _this = this;
      return function (dialog) {
        return _this.deleteBookPost(book_post);
      };
    },
    deleteBookPost: function deleteBookPost(book_post) {
      var _this2 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/book/' + this.book.uuid + '/post/' + book_post.id).then(function (response) {
        toastr.success(response.message);
        _this2.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _post_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-form */ "./resources/js/views/library/book/post-form.vue");
/* harmony import */ var _post_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-list */ "./resources/js/views/library/book/post-list.vue");
/* harmony import */ var _post_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-detail */ "./resources/js/views/library/book/post-detail.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    bookPostForm: _post_form__WEBPACK_IMPORTED_MODULE_0__["default"],
    bookPostList: _post_list__WEBPACK_IMPORTED_MODULE_1__["default"],
    bookPostDetail: _post_detail__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      uuid: this.$route.params.uuid,
      book: {},
      last_book_number: 0,
      tab: ''
    };
  },
  mounted: function mounted() {
    this.get();
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    get: function get() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/book/' + this.uuid).then(function (response) {
        _this.book = response.book;
        _this.last_book_number = response.last_book_number;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    formatCurrency: function formatCurrency(amount) {
      return helper.formatCurrency(amount);
    }
  },
  computed: {
    getQuantity: function getQuantity() {
      var quantity = 0;
      this.book.book_posts.forEach(function (book_post) {
        quantity += book_post.book_post_details.length;
      });
      return quantity;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=template&id=64fb6a7c&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=template&id=64fb6a7c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_vm._t("header", function () {
    return [_vm._v("\n                            " + _vm._s(_vm.trans("library.edit_book")) + "\n                            "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          return _vm.$emit("close");
        }
      }
    }, [_vm._v("x")])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("form", {
      on: {
        submit: function submit($event) {
          $event.preventDefault();
          return _vm.submit.apply(null, arguments);
        },
        keydown: function keydown($event) {
          return _vm.postDetailForm.errors.clear($event.target.name);
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
    }, [_vm._v(_vm._s(_vm.trans("library.book_number")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.postDetailForm.number,
        expression: "postDetailForm.number"
      }],
      staticClass: "form-control",
      attrs: {
        type: "number",
        name: "number",
        placeholder: _vm.trans("library.book_number")
      },
      domProps: {
        value: _vm.postDetailForm.number
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.postDetailForm, "number", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.postDetailForm,
        "prop-name": "number"
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(_vm.trans("library.book_location")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.postDetailForm.location,
        expression: "postDetailForm.location"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: "location",
        placeholder: _vm.trans("library.book_location")
      },
      domProps: {
        value: _vm.postDetailForm.location
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.postDetailForm, "location", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.postDetailForm,
        "prop-name": "location"
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(_vm.trans("library.book_condition")))]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.postDetailForm.book_condition_id,
        expression: "postDetailForm.book_condition_id"
      }],
      staticClass: "custom-select col-12",
      attrs: {
        name: "book_condition_id"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(_vm.postDetailForm, "book_condition_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.postDetailForm.errors.clear("book_condition_id");
        }]
      }
    }, [_c("option", {
      attrs: {
        value: "null",
        selected: ""
      }
    }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.book_conditions, function (condition) {
      return _c("option", {
        domProps: {
          value: condition.id
        }
      }, [_vm._v("\n\t\t\t\t\t\t                        \t" + _vm._s(condition.name) + "\n\t\t\t\t\t\t                      \t")]);
    })], 2), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.postDetailForm,
        "prop-name": "book_condition_id"
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-4"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      staticClass: "custom-control custom-checkbox"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.postDetailForm.is_not_available,
        expression: "postDetailForm.is_not_available"
      }],
      staticClass: "custom-control-input",
      attrs: {
        type: "checkbox",
        value: "1",
        name: "is_not_available"
      },
      domProps: {
        checked: Array.isArray(_vm.postDetailForm.is_not_available) ? _vm._i(_vm.postDetailForm.is_not_available, "1") > -1 : _vm.postDetailForm.is_not_available
      },
      on: {
        change: function change($event) {
          var $$a = _vm.postDetailForm.is_not_available,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = "1",
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.postDetailForm, "is_not_available", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.postDetailForm, "is_not_available", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.postDetailForm, "is_not_available", $$c);
          }
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "custom-control-label"
    }, [_vm._v(_vm._s(_vm.trans("library.book_not_available")))])])])]), _vm._v(" "), _c("div", {
      staticClass: "col-8"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(_vm.trans("library.book_post_detail_remarks")))]), _vm._v(" "), _c("autosize-textarea", {
      attrs: {
        rows: "1",
        name: "remarks",
        placeholder: _vm.trans("library.book_post_remarks")
      },
      model: {
        value: _vm.postDetailForm.remarks,
        callback: function callback($$v) {
          _vm.$set(_vm.postDetailForm, "remarks", $$v);
        },
        expression: "postDetailForm.remarks"
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.postDetailForm,
        "prop-name": "remarks"
      }
    })], 1)])]), _vm._v(" "), _c("div", {
      staticClass: "text-right"
    }, [_c("button", {
      staticClass: "btn btn-danger waves-effect waves-light m-r-10",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("close");
        }
      }
    }, [_vm._v(_vm._s(_vm.trans("general.cancel")))]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-info waves-effect waves-light",
      attrs: {
        type: "submit"
      }
    }, [_vm._v(_vm._s(_vm.trans("general.save")))])])]), _vm._v(" "), _c("div", {
      staticClass: "clearfix"
    })];
  })], 2)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail.vue?vue&type=template&id=58f57ecb&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail.vue?vue&type=template&id=58f57ecb& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("library.book_number")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("library.book_location")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("library.book_condition")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("library.book_availability")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("library.book_post_detail_remarks")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.book.book_posts, function (book_post) {
    return _vm._l(book_post.book_post_details, function (book_post_detail) {
      return _c("tr", [_c("td", [_vm._v(_vm._s(book_post_detail.number))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(book_post_detail.location))]), _vm._v(" "), _c("td", [book_post_detail.book_condition_id ? _c("span", [_vm._v(_vm._s(book_post_detail.book_condition.name))]) : _c("span", [_vm._v("-")])]), _vm._v(" "), _c("td", [book_post_detail.is_not_available ? _c("span", [_c("i", {
        staticClass: "fas fa-times"
      })]) : _c("span", [_c("i", {
        staticClass: "fas fa-check"
      })])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(book_post_detail.remarks))]), _vm._v(" "), _c("td", {
        staticClass: "table-option"
      }, [_c("div", {
        staticClass: "btn-group"
      }, [_vm.hasPermission("edit-book") ? _c("button", {
        directives: [{
          name: "tooltip",
          rawName: "v-tooltip",
          value: _vm.trans("library.edit_book"),
          expression: "trans('library.edit_book')"
        }],
        staticClass: "btn btn-info btn-sm",
        on: {
          click: function click($event) {
            $event.preventDefault();
            return _vm.editBook(book_post_detail);
          }
        }
      }, [_c("i", {
        staticClass: "fas fa-edit"
      })]) : _vm._e(), _vm._v(" "), _vm.hasPermission("delete-book") ? _c("button", {
        directives: [{
          name: "confirm",
          rawName: "v-confirm",
          value: {
            ok: _vm.confirmDelete(book_post_detail)
          },
          expression: "{ok: confirmDelete(book_post_detail)}"
        }, {
          name: "tooltip",
          rawName: "v-tooltip",
          value: _vm.trans("library.delete_book"),
          expression: "trans('library.delete_book')"
        }],
        key: book_post_detail.id,
        staticClass: "btn btn-danger btn-sm"
      }, [_c("i", {
        staticClass: "fas fa-trash"
      })]) : _vm._e()])])]);
    });
  })], 2)]), _vm._v(" "), _vm.showEditModal ? _c("book-post-detail-edit", {
    attrs: {
      book: _vm.book,
      "book-post-id": _vm.editBookPostId,
      id: _vm.editId
    },
    on: {
      close: function close($event) {
        _vm.showEditModal = false;
      },
      completed: function completed($event) {
        return _vm.$emit("completed");
      }
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-form.vue?vue&type=template&id=27409b84&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-form.vue?vue&type=template&id=27409b84& ***!
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
  return _c("div", [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.bookPostForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("library.date_of_addition")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("library.date_of_addition")
    },
    on: {
      selected: function selected($event) {
        return _vm.bookPostForm.errors.clear("date_of_addition");
      }
    },
    model: {
      value: _vm.bookPostForm.date_of_addition,
      callback: function callback($$v) {
        _vm.$set(_vm.bookPostForm, "date_of_addition", $$v);
      },
      expression: "bookPostForm.date_of_addition"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.bookPostForm,
      "prop-name": "date_of_addition"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("library.book_quantity")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bookPostForm.quantity,
      expression: "bookPostForm.quantity"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "quantity",
      placeholder: _vm.trans("library.book_quantity")
    },
    domProps: {
      value: _vm.bookPostForm.quantity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.bookPostForm, "quantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.bookPostForm,
      "prop-name": "quantity"
    }
  })], 1)])]), _vm._v(" "), _vm.bookPostForm.details.length ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("library.book_number")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("library.book_location")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("library.book_condition")))])])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.bookPostForm.details, function (detail, index) {
    return _vm.bookPostForm.details.length ? _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12 col-sm-4"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: detail.number,
        expression: "detail.number"
      }],
      staticClass: "form-control",
      attrs: {
        type: "number",
        name: _vm.getNumberName(index),
        placeholder: _vm.trans("library.book_number")
      },
      domProps: {
        value: detail.number
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(detail, "number", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.bookPostForm,
        "prop-name": _vm.getNumberName(index)
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: detail.location,
        expression: "detail.location"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: _vm.getLocationName(index),
        placeholder: _vm.trans("library.book_location")
      },
      domProps: {
        value: detail.location
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(detail, "location", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.bookPostForm,
        "prop-name": _vm.getLocationName(index)
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: detail.book_condition_id,
        expression: "detail.book_condition_id"
      }],
      staticClass: "custom-select col-12",
      attrs: {
        name: _vm.getConditionName(index)
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(detail, "book_condition_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "null",
        selected: ""
      }
    }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.book_conditions, function (condition) {
      return _c("option", {
        domProps: {
          value: condition.id
        }
      }, [_vm._v("\n                            \t" + _vm._s(condition.name) + "\n                          \t")]);
    })], 2), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.bookPostForm,
        "prop-name": _vm.getConditionName(index)
      }
    })], 1)])]) : _vm._e();
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("library.book_post_remarks")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "1",
      name: "remarks",
      placeholder: _vm.trans("library.book_post_remarks")
    },
    model: {
      value: _vm.bookPostForm.remarks,
      callback: function callback($$v) {
        _vm.$set(_vm.bookPostForm, "remarks", $$v);
      },
      expression: "bookPostForm.remarks"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.bookPostForm,
      "prop-name": "remarks"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))])])], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-list.vue?vue&type=template&id=2058d918&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-list.vue?vue&type=template&id=2058d918& ***!
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
  return _vm.book.id ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("library.date_of_addition")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("library.book_quantity")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("library.book_post_remarks")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.book.book_posts, function (book_post) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(_vm._f("moment")(book_post.date_of_addition)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(book_post.quantity))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(book_post.remarks))]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_vm.hasPermission("delete-book") ? _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(book_post)
        },
        expression: "{ok: confirmDelete(book_post)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("library.delete_book_post"),
        expression: "trans('library.delete_book_post')"
      }],
      key: book_post.id,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })]) : _vm._e()])])]);
  }), 0)])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/show.vue?vue&type=template&id=5c69e0c0&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/show.vue?vue&type=template&id=5c69e0c0& ***!
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
  return _vm.book.id ? _c("div", [_c("div", {
    staticClass: "page-titles"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("h3", {
    staticClass: "text-themecolor"
  }, [_vm._v(_vm._s(_vm.trans("library.book_detail")) + "\n                    "), _c("span", {
    staticClass: "card-subtitle"
  }, [_vm._v(_vm._s("#" + _vm.book.id))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("router-link", {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      to: "/library/book"
    }
  }, [_c("i", {
    staticClass: "fas fa-list"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("library.book")))])])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-8 p-0"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    attrs: {
      id: "accordion"
    }
  }, [_vm.hasPermission("edit-book") ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header collapsed",
    attrs: {
      id: "post",
      "data-toggle": "collapse",
      "data-target": "#collapsePost",
      "aria-expanded": "false",
      "aria-controls": "collapsePost"
    },
    on: {
      click: function click($event) {
        _vm.tab = "post";
      }
    }
  }, [_c("h5", [_c("i", {
    staticClass: "fas fa-lg fa-book fa-fix-w-32"
  }), _vm._v(" " + _vm._s(_vm.trans("library.add_more_book")))])]), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapsePost",
      "aria-labelledby": "post",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.tab == "post" ? _c("book-post-form", {
    attrs: {
      book: _vm.book,
      "last-book-number": _vm.last_book_number
    },
    on: {
      completed: _vm.get
    }
  }) : _vm._e()], 1)])]) : _vm._e(), _vm._v(" "), _vm.hasPermission("edit-book") ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header collapsed",
    attrs: {
      id: "post-list",
      "data-toggle": "collapse",
      "data-target": "#collapseListPost",
      "aria-expanded": "false",
      "aria-controls": "collapseListPost"
    },
    on: {
      click: function click($event) {
        _vm.tab = "post-list";
      }
    }
  }, [_c("h5", [_c("i", {
    staticClass: "fas fa-lg fa-book-open fa-fix-w-32"
  }), _vm._v(" " + _vm._s(_vm.trans("library.list_book_addition")))])]), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseListPost",
      "aria-labelledby": "post",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.tab == "post-list" ? _c("book-post-list", {
    attrs: {
      book: _vm.book
    },
    on: {
      completed: _vm.get
    }
  }) : _vm._e()], 1)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header collapsed",
    attrs: {
      id: "post-detail",
      "data-toggle": "collapse",
      "data-target": "#collapseListPostDetail",
      "aria-expanded": "false",
      "aria-controls": "collapseListPostDetail"
    },
    on: {
      click: function click($event) {
        _vm.tab = "post-detail";
      }
    }
  }, [_c("h5", [_c("i", {
    staticClass: "fas fa-lg fa-swatchbook fa-fix-w-32"
  }), _vm._v(" " + _vm._s(_vm.trans("library.list_book")))])]), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseListPostDetail",
      "aria-labelledby": "post",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.tab == "post-detail" ? _c("book-post-detail", {
    attrs: {
      book: _vm.book
    },
    on: {
      completed: _vm.get
    }
  }) : _vm._e()], 1)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4 p-l-0 border-left"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm custom-show-table"
  }, [_c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_title")))]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "60%"
    }
  }, [_vm._v(_vm._s(_vm.book.title))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_isbn_number")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.book.isbn_number))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_author")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.book.book_author_id ? _vm.book.book_author.name : ""))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_language")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.book.book_language_id ? _vm.book.book_language.name : ""))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_topic")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.book.book_topic_id ? _vm.book.book_topic.name : ""))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_publisher")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.book.book_publisher_id ? _vm.book.book_publisher.name : ""))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_edition")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.book.edition))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_type")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trans("library.book_type_" + _vm.book.type)))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_page")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.book.page))])]), _vm._v(" "), _c("tr", {
    staticClass: "highlight"
  }, [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_quantity")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getQuantity))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_price")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatCurrency(_vm.book.price)))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_summary")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.book.summary))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("library.book_description")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.book.description))])])])])])])])])])])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/library/book/post-detail-edit.vue"],"names":[],"mappings":";AA8IA;IACA,aAAA;AACA","sourcesContent":["<template>\r\n    <transition name=\"modal\">\r\n        <div class=\"modal-mask\">\r\n            <div class=\"modal-wrapper\">\r\n                <div class=\"modal-container modal-lg\">\r\n                    <div class=\"modal-header\">\r\n                        <slot name=\"header\">\r\n                            {{trans('library.edit_book')}}\r\n                            <span class=\"float-right pointer\" @click=\"$emit('close')\">x</span>\r\n                        </slot>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <slot name=\"body\">\r\n\t\t\t\t\t\t    <form @submit.prevent=\"submit\" @keydown=\"postDetailForm.errors.clear($event.target.name)\">\r\n\t\t\t\t\t\t    \t<div class=\"row\">\r\n\t\t\t\t\t\t        \t<div class=\"col-12 col-sm-4\">\r\n\t\t\t\t\t\t                <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t        <label for=\"\">{{trans('library.book_number')}}</label>\r\n\t\t\t\t\t\t                    <input class=\"form-control\" type=\"number\" v-model=\"postDetailForm.number\" name=\"number\" :placeholder=\"trans('library.book_number')\">\r\n\t\t\t\t\t\t                    <show-error :form-name=\"postDetailForm\" prop-name=\"number\"></show-error>\r\n\t\t\t\t\t\t                </div>\r\n\t\t\t\t\t\t        \t</div>\r\n\t\t\t\t\t\t        \t<div class=\"col-12 col-sm-4\">\r\n\t\t\t\t\t\t                <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t        <label for=\"\">{{trans('library.book_location')}}</label>\r\n\t\t\t\t\t\t                    <input class=\"form-control\" type=\"text\" v-model=\"postDetailForm.location\" name=\"location\" :placeholder=\"trans('library.book_location')\">\r\n\t\t\t\t\t\t                    <show-error :form-name=\"postDetailForm\" prop-name=\"location\"></show-error>\r\n\t\t\t\t\t\t                </div>\r\n\t\t\t\t\t\t        \t</div>\r\n\t\t\t\t\t\t        \t<div class=\"col-12 col-sm-4\">\r\n\t\t\t\t\t\t                <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t        <label for=\"\">{{trans('library.book_condition')}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<select v-model=\"postDetailForm.book_condition_id\" class=\"custom-select col-12\" name=\"book_condition_id\" @change=\"postDetailForm.errors.clear('book_condition_id')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=null selected>{{trans('general.select_one')}}</option>\r\n\t\t\t\t\t\t              \t\t\t<option v-for=\"condition in book_conditions\" v-bind:value=\"condition.id\">\r\n\t\t\t\t\t\t                        \t{{ condition.name }}\r\n\t\t\t\t\t\t                      \t</option>\r\n\t\t\t\t\t\t                    </select>\r\n\t\t\t\t\t\t                    <show-error :form-name=\"postDetailForm\" prop-name=\"book_condition_id\"></show-error>\r\n\t\t\t\t\t\t                </div>\r\n\t\t\t\t\t\t        \t</div>\r\n\t\t\t\t\t\t        \t<div class=\"col-4\">\r\n\t\t\t\t\t\t        \t\t<div class=\"form-group\">\r\n\t\t\t\t\t                        <label class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t                            <input type=\"checkbox\" class=\"custom-control-input\" v-model=\"postDetailForm.is_not_available\" value=\"1\" name=\"is_not_available\">\r\n\t\t\t\t\t                            <span class=\"custom-control-label\">{{trans('library.book_not_available')}}</span>\r\n\t\t\t\t\t                        </label>\r\n\t\t\t\t\t\t        \t\t</div>\r\n\t\t\t\t\t\t        \t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t        <label for=\"\">{{trans('library.book_post_detail_remarks')}}</label>\r\n\t\t\t\t\t\t\t\t\t        <autosize-textarea v-model=\"postDetailForm.remarks\" rows=\"1\" name=\"remarks\" :placeholder=\"trans('library.book_post_remarks')\"></autosize-textarea>\r\n\t\t\t\t\t\t\t\t\t        <show-error :form-name=\"postDetailForm\" prop-name=\"remarks\"></show-error>\r\n\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t    \t</div>\r\n\r\n\t\t\t\t\t\t    \t<div class=\"text-right\">\r\n\r\n\t\t\t\t\t\t\t        <button type=\"button\" class=\"btn btn-danger waves-effect waves-light m-r-10\" @click=\"$emit('close')\">{{trans('general.cancel')}}</button>\r\n\t\t\t\t\t\t\t        <button type=\"submit\" class=\"btn btn-info waves-effect waves-light\">{{trans('general.save')}}</button>\r\n\t\t\t\t\t\t    \t\t\r\n\t\t\t\t\t\t    \t</div>\r\n\t\t\t\t\t\t    </form>\t\r\n\t\t\t\t\t\t    <div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t</slot>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</transition>\r\n</template>\r\n\r\n<script>\r\n\texport default {\r\n\t\tprops: ['book','id','bookPostId'],\r\n\t\tdata(){\r\n\t\t\treturn  {\r\n\t\t\t\tpostDetailForm: new Form({\r\n\t\t\t\t\tnumber: '',\r\n\t\t\t\t\tbook_condition_id: '',\r\n\t\t\t\t\tlocation: '',\r\n\t\t\t\t\tremarks: '',\r\n\t\t\t\t\tis_not_available: 0\r\n\t\t\t\t}),\r\n\t\t\t\tbook_conditions: []\r\n\t\t\t}\r\n\t\t},\r\n\t\tmounted(){\r\n\t\t\tthis.fillDetail();\r\n\t\t\tthis.getPreRequisite();\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tgetPreRequisite(){\r\n\t\t\t\tlet loader = this.$loading.show();\r\n\t\t\t\taxios.get('/api/book/post/pre-requisite')\r\n\t\t\t\t\t.then(response => {\r\n\t\t\t\t\t\tthis.book_conditions = response.book_conditions;\r\n\t\t\t\t\t\tloader.hide();\r\n\t\t\t\t\t})\r\n\t\t\t\t\t.catch(error => {\r\n\t\t\t\t\t\thelper.showErrorMsg(error);\r\n\t\t\t\t\t\tloader.hide();\r\n\t\t\t\t\t})\r\n\t\t\t},\r\n\t\t\tfillDetail(){\r\n\t\t\t\tlet book_post = this.book.book_posts.find(o => o.id == this.bookPostId);\r\n\r\n\t\t\t\tif (! book_post)\r\n\t\t\t\t\tthis.$emit('close');\r\n\r\n\t\t\t\tlet book_post_detail = book_post.book_post_details.find(o => o.id == this.id);\r\n\r\n\t\t\t\tif (! book_post_detail)\r\n\t\t\t\t\tthis.$emit('close');\r\n\r\n\t\t\t\tthis.postDetailForm.number = book_post_detail.number;\r\n\t\t\t\tthis.postDetailForm.book_condition_id = book_post_detail.book_condition_id || '';\r\n\t\t\t\tthis.postDetailForm.location = book_post_detail.location;\r\n\t\t\t\tthis.postDetailForm.remarks = book_post_detail.remarks;\r\n\t\t\t\tthis.postDetailForm.is_not_available = book_post_detail.is_not_available;\r\n\t\t\t},\r\n\t\t\tsubmit(){\r\n\t\t\t\tlet loader = this.$loading.show();\r\n\t\t\t\tthis.postDetailForm.patch('/api/book/'+this.book.uuid+'/post/detail/'+this.id)\r\n\t\t\t\t\t.then(response => {\r\n\t\t\t\t\t\ttoastr.success(response.message);\r\n\t\t\t\t\t\tthis.$emit('completed');\r\n\t\t\t\t\t\tthis.$emit('close');\r\n\t\t\t\t\t\tloader.hide();\r\n\t\t\t\t\t})\r\n\t\t\t\t\t.catch(error => {\r\n\t\t\t\t\t\tloader.hide();\r\n\t\t\t\t\t\thelper.showErrorMsg(error);\r\n\t\t\t\t\t})\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style>\r\n.loading-overlay.is-full-page{\r\n    z-index: 1060;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_edit_vue_vue_type_style_index_0_id_64fb6a7c_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_edit_vue_vue_type_style_index_0_id_64fb6a7c_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_edit_vue_vue_type_style_index_0_id_64fb6a7c_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/library/book/post-detail-edit.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/library/book/post-detail-edit.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _post_detail_edit_vue_vue_type_template_id_64fb6a7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-detail-edit.vue?vue&type=template&id=64fb6a7c& */ "./resources/js/views/library/book/post-detail-edit.vue?vue&type=template&id=64fb6a7c&");
/* harmony import */ var _post_detail_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-detail-edit.vue?vue&type=script&lang=js& */ "./resources/js/views/library/book/post-detail-edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _post_detail_edit_vue_vue_type_style_index_0_id_64fb6a7c_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css& */ "./resources/js/views/library/book/post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _post_detail_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _post_detail_edit_vue_vue_type_template_id_64fb6a7c___WEBPACK_IMPORTED_MODULE_0__.render,
  _post_detail_edit_vue_vue_type_template_id_64fb6a7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/library/book/post-detail-edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/library/book/post-detail.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/library/book/post-detail.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _post_detail_vue_vue_type_template_id_58f57ecb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-detail.vue?vue&type=template&id=58f57ecb& */ "./resources/js/views/library/book/post-detail.vue?vue&type=template&id=58f57ecb&");
/* harmony import */ var _post_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-detail.vue?vue&type=script&lang=js& */ "./resources/js/views/library/book/post-detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _post_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _post_detail_vue_vue_type_template_id_58f57ecb___WEBPACK_IMPORTED_MODULE_0__.render,
  _post_detail_vue_vue_type_template_id_58f57ecb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/library/book/post-detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/library/book/post-form.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/library/book/post-form.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _post_form_vue_vue_type_template_id_27409b84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-form.vue?vue&type=template&id=27409b84& */ "./resources/js/views/library/book/post-form.vue?vue&type=template&id=27409b84&");
/* harmony import */ var _post_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-form.vue?vue&type=script&lang=js& */ "./resources/js/views/library/book/post-form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _post_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _post_form_vue_vue_type_template_id_27409b84___WEBPACK_IMPORTED_MODULE_0__.render,
  _post_form_vue_vue_type_template_id_27409b84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/library/book/post-form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/library/book/post-list.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/library/book/post-list.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _post_list_vue_vue_type_template_id_2058d918___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-list.vue?vue&type=template&id=2058d918& */ "./resources/js/views/library/book/post-list.vue?vue&type=template&id=2058d918&");
/* harmony import */ var _post_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-list.vue?vue&type=script&lang=js& */ "./resources/js/views/library/book/post-list.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _post_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _post_list_vue_vue_type_template_id_2058d918___WEBPACK_IMPORTED_MODULE_0__.render,
  _post_list_vue_vue_type_template_id_2058d918___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/library/book/post-list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/library/book/show.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/library/book/show.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_5c69e0c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=5c69e0c0& */ "./resources/js/views/library/book/show.vue?vue&type=template&id=5c69e0c0&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/views/library/book/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_5c69e0c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_5c69e0c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/library/book/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/library/book/post-detail-edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/library/book/post-detail-edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./post-detail-edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/library/book/post-detail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/library/book/post-detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./post-detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/library/book/post-form.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/library/book/post-form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./post-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/library/book/post-list.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/library/book/post-list.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./post-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-list.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/library/book/show.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/library/book/show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/library/book/post-detail-edit.vue?vue&type=template&id=64fb6a7c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/library/book/post-detail-edit.vue?vue&type=template&id=64fb6a7c& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_edit_vue_vue_type_template_id_64fb6a7c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_edit_vue_vue_type_template_id_64fb6a7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_edit_vue_vue_type_template_id_64fb6a7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./post-detail-edit.vue?vue&type=template&id=64fb6a7c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=template&id=64fb6a7c&");


/***/ }),

/***/ "./resources/js/views/library/book/post-detail.vue?vue&type=template&id=58f57ecb&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/library/book/post-detail.vue?vue&type=template&id=58f57ecb& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_vue_vue_type_template_id_58f57ecb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_vue_vue_type_template_id_58f57ecb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_vue_vue_type_template_id_58f57ecb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./post-detail.vue?vue&type=template&id=58f57ecb& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail.vue?vue&type=template&id=58f57ecb&");


/***/ }),

/***/ "./resources/js/views/library/book/post-form.vue?vue&type=template&id=27409b84&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/library/book/post-form.vue?vue&type=template&id=27409b84& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_form_vue_vue_type_template_id_27409b84___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_form_vue_vue_type_template_id_27409b84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_form_vue_vue_type_template_id_27409b84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./post-form.vue?vue&type=template&id=27409b84& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-form.vue?vue&type=template&id=27409b84&");


/***/ }),

/***/ "./resources/js/views/library/book/post-list.vue?vue&type=template&id=2058d918&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/library/book/post-list.vue?vue&type=template&id=2058d918& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_list_vue_vue_type_template_id_2058d918___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_list_vue_vue_type_template_id_2058d918___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_list_vue_vue_type_template_id_2058d918___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./post-list.vue?vue&type=template&id=2058d918& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-list.vue?vue&type=template&id=2058d918&");


/***/ }),

/***/ "./resources/js/views/library/book/show.vue?vue&type=template&id=5c69e0c0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/library/book/show.vue?vue&type=template&id=5c69e0c0& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_5c69e0c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_5c69e0c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_5c69e0c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=5c69e0c0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/show.vue?vue&type=template&id=5c69e0c0&");


/***/ }),

/***/ "./resources/js/views/library/book/post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/library/book/post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_post_detail_edit_vue_vue_type_style_index_0_id_64fb6a7c_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/library/book/post-detail-edit.vue?vue&type=style&index=0&id=64fb6a7c&lang=css&");


/***/ })

}]);
//# sourceMappingURL=show.js.map?id=7ee050a94e692a97