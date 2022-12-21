"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/configuration/exam/assessment/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      assessmentForm: new Form({
        name: '',
        description: '',
        details: []
      })
    };
  },
  props: ['id'],
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    if (this.id) this.get();else {
      this.addRow();
    }
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    addRow: function addRow() {
      var new_index = this.assessmentForm.details.push({
        name: '',
        code: '',
        max_mark: '',
        pass_percentage: '',
        description: ''
      });
    },
    confirmDeleteDetail: function confirmDeleteDetail(index) {
      var _this = this;
      return function (dialog) {
        return _this.deleteDetail(index);
      };
    },
    deleteDetail: function deleteDetail(index) {
      this.assessmentForm.details.splice(index, 1);
    },
    getDetailName: function getDetailName(index) {
      return index + '_detail_name';
    },
    getDetailCode: function getDetailCode(index) {
      return index + '_detail_code';
    },
    getDetailMaxMarkName: function getDetailMaxMarkName(index) {
      return index + '_detail_max_mark';
    },
    getDetailPassPercentageName: function getDetailPassPercentageName(index) {
      return index + '_detail_pass_percentage';
    },
    getDetailDescriptionName: function getDetailDescriptionName(index) {
      return index + '_detail_description';
    },
    proceed: function proceed() {
      if (this.id) this.update();else this.store();
    },
    store: function store() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.assessmentForm.post('/api/exam/assessment').then(function (response) {
        toastr.success(response.message);
        _this2.assessmentForm.details = [];
        _this2.addRow();
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
      axios.get('/api/exam/assessment/' + this.id).then(function (response) {
        _this3.assessmentForm.name = response.name;
        _this3.assessmentForm.description = response.description;
        response.details.forEach(function (detail) {
          _this3.assessmentForm.details.push({
            name: detail.name,
            code: detail.code,
            max_mark: detail.max_mark,
            pass_percentage: detail.pass_percentage,
            description: detail.description
          });
        });
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this3.$router.push('/configuration/exam/assessment');
      });
    },
    update: function update() {
      var _this4 = this;
      var loader = this.$loading.show();
      this.assessmentForm.patch('/api/exam/assessment/' + this.id).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this4.$router.push('/configuration/exam/assessment');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/configuration/exam/assessment/form.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    assessmentForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"],
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_1___default())
  },
  data: function data() {
    return {
      assessments: {
        total: 0,
        data: []
      },
      assessment: {},
      filter: {
        sort_by: 'name',
        order: 'asc',
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'name',
        translation: i18n.exam.assessment_name
      }],
      showReorderModal: false,
      assessment_detail_list: [],
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getAssessments();
  },
  methods: {
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    showReorderAction: function showReorderAction(course) {
      this.showReorderModal = true;
      this.getAssessmentDetailList(course);
    },
    getAssessmentDetailList: function getAssessmentDetailList(assessment) {
      var _this = this;
      this.assessment_detail_list = [];
      this.assessment = assessment;
      assessment.details.forEach(function (detail) {
        _this.assessment_detail_list.push(detail.name);
      });
    },
    getAssessments: function getAssessments(page) {
      var _this2 = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/exam/assessment?page=' + page + url).then(function (response) {
        _this2.assessments = response;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    editAssessment: function editAssessment(assessment) {
      this.$router.push('/configuration/exam/assessment/' + assessment.id + '/edit');
    },
    confirmDelete: function confirmDelete(assessment) {
      var _this3 = this;
      return function (dialog) {
        return _this3.deleteAssessment(assessment);
      };
    },
    deleteAssessment: function deleteAssessment(assessment) {
      var _this4 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/exam/assessment/' + assessment.id).then(function (response) {
        toastr.success(response.message);
        _this4.getAssessments();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    print: function print() {
      var loader = this.$loading.show();
      axios.post('/api/exam/assessment/print', {
        filter: this.filter
      }).then(function (response) {
        var print = window.open("/print");
        loader.hide();
        print.document.write(response);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    pdf: function pdf() {
      var _this5 = this;
      var loader = this.$loading.show();
      axios.post('/api/exam/assessment/pdf', {
        filter: this.filter
      }).then(function (response) {
        loader.hide();
        window.open('/download/report/' + response + '?token=' + _this5.authToken);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    reorderAssessment: function reorderAssessment() {
      var _this6 = this;
      axios.post('/api/exam/assessment/' + this.assessment.id + '/reorder', {
        list: this.assessment_detail_list
      }).then(function (response) {
        toastr.success(response.message);
        _this6.showReorderModal = false;
        _this6.getAssessments();
      })["catch"](function (error) {
        helper.showErrorMsg(error);
      });
    }
  },
  filters: {
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    }
  },
  watch: {
    'filter.sort_by': function filterSort_by(val) {
      this.getAssessments();
    },
    'filter.order': function filterOrder(val) {
      this.getAssessments();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getAssessments();
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/form.vue?vue&type=template&id=3780b9b9&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/form.vue?vue&type=template&id=3780b9b9& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
        return _vm.assessmentForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("exam.assessment_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.assessmentForm.name,
      expression: "assessmentForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: _vm.trans("exam.assessment_name")
    },
    domProps: {
      value: _vm.assessmentForm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.assessmentForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.assessmentForm,
      "prop-name": "name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("exam.assessment_description")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.assessmentForm.description,
      expression: "assessmentForm.description"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "description",
      placeholder: _vm.trans("exam.assessment_description")
    },
    domProps: {
      value: _vm.assessmentForm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.assessmentForm, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.assessmentForm,
      "prop-name": "description"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h6", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("exam.assessment_type")))]), _vm._v(" "), _vm._l(_vm.assessmentForm.details, function (detail, index) {
    return [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12 col-sm-3"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(_vm.trans("exam.assessment_detail_name")) + " \n                                "), _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDeleteDetail(index)
        },
        expression: "{ok: confirmDeleteDetail(index)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("general.delete"),
        expression: "trans('general.delete')"
      }],
      key: "".concat(index, "_delete_detail"),
      staticClass: "btn btn-xs btn-danger m-l-20",
      attrs: {
        type: "button"
      }
    }, [_c("i", {
      staticClass: "fas fa-times"
    })])]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: detail.name,
        expression: "detail.name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: _vm.getDetailName(index),
        placeholder: _vm.trans("exam.assessment_detail_name")
      },
      domProps: {
        value: detail.name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(detail, "name", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.assessmentForm,
        "prop-name": _vm.getDetailName(index)
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-1"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(_vm.trans("exam.assessment_detail_code")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: detail.code,
        expression: "detail.code"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: _vm.getDetailCode(index),
        placeholder: _vm.trans("exam.assessment_detail_code")
      },
      domProps: {
        value: detail.code
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(detail, "code", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.assessmentForm,
        "prop-name": _vm.getDetailCode(index)
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-2"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(_vm.trans("exam.assessment_detail_max_mark")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: detail.max_mark,
        expression: "detail.max_mark"
      }],
      staticClass: "form-control",
      attrs: {
        type: "number",
        name: _vm.getDetailMaxMarkName(index),
        placeholder: _vm.trans("exam.assessment_detail_max_mark")
      },
      domProps: {
        value: detail.max_mark
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(detail, "max_mark", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.assessmentForm,
        "prop-name": _vm.getDetailMaxMarkName(index)
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-2"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(_vm.trans("exam.assessment_detail_pass_percentage")))]), _vm._v(" "), _c("div", {
      staticClass: "input-group mb-3"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: detail.pass_percentage,
        expression: "detail.pass_percentage"
      }],
      staticClass: "form-control",
      attrs: {
        type: "number",
        name: _vm.getDetailPassPercentageName(index),
        placeholder: _vm.trans("exam.assessment_detail_pass_percentage")
      },
      domProps: {
        value: detail.pass_percentage
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(detail, "pass_percentage", $event.target.value);
        }
      }
    }), _vm._v(" "), _vm._m(0, true)]), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.assessmentForm,
        "prop-name": _vm.getDetailPassPercentageName(index)
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(_vm.trans("exam.assessment_detail_description")))]), _vm._v(" "), _c("autosize-textarea", {
      attrs: {
        rows: "2",
        name: _vm.getDetailDescriptionName(index),
        placeholder: _vm.trans("resource.assessment_detail_description")
      },
      model: {
        value: detail.description,
        callback: function callback($$v) {
          _vm.$set(detail, "description", $$v);
        },
        expression: "detail.description"
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.assessmentForm,
        "prop-name": _vm.getDetailDescriptionName(index)
      }
    })], 1)])])];
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm waves-effect waves-light",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.addRow
    }
  }, [_vm._v(_vm._s(_vm.trans("exam.add_new_assessment_detail")))])])], 2)]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("router-link", {
    staticClass: "btn btn-danger waves-effect waves-light",
    attrs: {
      to: "/configuration/exam/assessment"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.cancel")))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "submit"
    }
  }, [_vm.id ? _c("span", [_vm._v(_vm._s(_vm.trans("general.update")))]) : _c("span", [_vm._v(_vm._s(_vm.trans("general.save")))])])], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text",
    attrs: {
      id: "basic-addon1"
    }
  }, [_vm._v("%")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/index.vue?vue&type=template&id=1f36b1ad&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/index.vue?vue&type=template&id=1f36b1ad& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("exam.assessment")) + " \n                    "), _vm.assessments.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.assessments.total,
    from: _vm.assessments.from,
    to: _vm.assessments.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("general.add_new"),
      expression: "trans('general.add_new')"
    }],
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/configuration/exam/assessment/create");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("exam.add_new_assessment")))])]), _vm._v(" "), _c("sort-by", {
    attrs: {
      "order-by-options": _vm.orderByOptions,
      "sort-by": _vm.filter.sort_by,
      order: _vm.filter.order
    },
    on: {
      updateSortBy: function updateSortBy(value) {
        _vm.filter.sort_by = value;
      },
      updateOrder: function updateOrder(value) {
        _vm.filter.order = value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "btn-group"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("general.more_option"),
      expression: "trans('general.more_option')"
    }],
    staticClass: "btn btn-info btn-sm dropdown-toggle no-caret",
    attrs: {
      type: "button",
      role: "menu",
      id: "moreOption",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-ellipsis-h"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  })]), _vm._v(" "), _c("div", {
    "class": ["dropdown-menu", _vm.getConfig("direction") == "ltr" ? "dropdown-menu-right" : ""],
    attrs: {
      "aria-labelledby": "moreOption"
    }
  }, [_c("button", {
    staticClass: "dropdown-item custom-dropdown",
    on: {
      click: _vm.print
    }
  }, [_c("i", {
    staticClass: "fas fa-print"
  }), _vm._v(" " + _vm._s(_vm.trans("general.print")))]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item custom-dropdown",
    on: {
      click: _vm.pdf
    }
  }, [_c("i", {
    staticClass: "fas fa-file-pdf"
  }), _vm._v(" " + _vm._s(_vm.trans("general.generate_pdf")))])])]), _vm._v(" "), _c("help-button", {
    on: {
      clicked: function clicked($event) {
        _vm.help_topic = "configuration.exam.assessment";
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.assessments.total ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("exam.assessment_name")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("exam.assessment_type")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("exam.assessment_description")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.assessments.data, function (assessment) {
    return _c("tr", [_c("td", {
      domProps: {
        textContent: _vm._s(assessment.name)
      }
    }), _vm._v(" "), _c("td", [_c("ul", {
      staticStyle: {
        "list-style": "none",
        padding: "0",
        margin: "0"
      }
    }, _vm._l(assessment.details, function (detail) {
      return _c("li", [_vm._v("\n                                            " + _vm._s(detail.name) + " (" + _vm._s(_vm.trans("exam.assessment_detail", {
        max_mark: detail.max_mark,
        pass_percentage: detail.pass_percentage
      })) + ")\n                                        ")]);
    }), 0)]), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(assessment.description)
      }
    }), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [assessment.details ? _c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("exam.reorder_assessment"),
        expression: "trans('exam.reorder_assessment')"
      }],
      staticClass: "btn btn-success btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.showReorderAction(assessment);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-arrows-alt"
    })]) : _vm._e(), _vm._v(" "), _c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("exam.edit_assessment"),
        expression: "trans('exam.edit_assessment')"
      }],
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.editAssessment(assessment);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })]), _vm._v(" "), _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(assessment)
        },
        expression: "{ok: confirmDelete(assessment)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("exam.delete_assessment"),
        expression: "trans('exam.delete_assessment')"
      }],
      key: assessment.id,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })])])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.assessments.total ? _c("module-info", {
    attrs: {
      module: "exam",
      title: "assessment_module_title",
      description: "assessment_module_description",
      icon: "list"
    }
  }, [_c("div", {
    attrs: {
      slot: "btn"
    },
    slot: "btn"
  }, [_c("button", {
    staticClass: "btn btn-info btn-md",
    on: {
      click: function click($event) {
        return _vm.$router.push("/configuration/exam/assessment/create");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" " + _vm._s(_vm.trans("general.add_new")))])])]) : _vm._e(), _vm._v(" "), _c("pagination-record", {
    attrs: {
      "page-length": _vm.filter.page_length,
      records: _vm.assessments
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getAssessments
    },
    nativeOn: {
      change: function change($event) {
        return _vm.getAssessments.apply(null, arguments);
      }
    }
  })], 1)])]), _vm._v(" "), _vm.showReorderModal ? _c("transition", {
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
    return [_vm._v("\n                            " + _vm._s(_vm.trans("exam.reorder_assessment")) + "\n                            "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          _vm.showReorderModal = false;
        }
      }
    }, [_vm._v("x")])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_c("draggable", {
      staticClass: "list-group",
      on: {
        start: function start($event) {
          _vm.drag = true;
        },
        end: function end($event) {
          _vm.drag = false;
        }
      },
      model: {
        value: _vm.assessment_detail_list,
        callback: function callback($$v) {
          _vm.assessment_detail_list = $$v;
        },
        expression: "assessment_detail_list"
      }
    }, _vm._l(_vm.assessment_detail_list, function (item) {
      return _c("div", {
        key: item.id,
        staticClass: "list-group-item pointer"
      }, [_c("i", {
        staticClass: "fas fa-arrows-alt"
      }), _vm._v(" " + _vm._s(item))]);
    }), 0), _vm._v(" "), _c("button", {
      staticClass: "btn btn-info pull-right m-t-10",
      attrs: {
        type: "button"
      },
      on: {
        click: _vm.reorderAssessment
      }
    }, [_vm._v(_vm._s(_vm.trans("general.save")))])];
  })], 2)])])])]) : _vm._e(), _vm._v(" "), _c("right-panel", {
    attrs: {
      topic: _vm.help_topic
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/configuration/exam/assessment/form.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/configuration/exam/assessment/form.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_3780b9b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=3780b9b9& */ "./resources/js/views/configuration/exam/assessment/form.vue?vue&type=template&id=3780b9b9&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/exam/assessment/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_3780b9b9___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_3780b9b9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/exam/assessment/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/exam/assessment/index.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/configuration/exam/assessment/index.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1f36b1ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1f36b1ad& */ "./resources/js/views/configuration/exam/assessment/index.vue?vue&type=template&id=1f36b1ad&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/exam/assessment/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1f36b1ad___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1f36b1ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/exam/assessment/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/exam/assessment/form.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/configuration/exam/assessment/form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/exam/assessment/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/configuration/exam/assessment/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/exam/assessment/form.vue?vue&type=template&id=3780b9b9&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/configuration/exam/assessment/form.vue?vue&type=template&id=3780b9b9& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3780b9b9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3780b9b9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3780b9b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=3780b9b9& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/form.vue?vue&type=template&id=3780b9b9&");


/***/ }),

/***/ "./resources/js/views/configuration/exam/assessment/index.vue?vue&type=template&id=1f36b1ad&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/configuration/exam/assessment/index.vue?vue&type=template&id=1f36b1ad& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f36b1ad___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f36b1ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f36b1ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1f36b1ad& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/exam/assessment/index.vue?vue&type=template&id=1f36b1ad&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=20eceecfd1d31487