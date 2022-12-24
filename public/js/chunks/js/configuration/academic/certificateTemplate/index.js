"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/configuration/academic/certificateTemplate/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      certificateTemplateForm: new Form({
        name: '',
        type: '',
        body: '',
        custom_fields: []
      }),
      student_custom_fields: [],
      employee_custom_fields: []
    };
  },
  props: ['id'],
  mounted: function mounted() {
    if (this.id) this.get();
    this.getPreRequisite();
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/academic/certificate/template/pre-requisite').then(function (response) {
        _this.student_custom_fields = response.student_custom_fields;
        _this.employee_custom_fields = response.employee_custom_fields;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    addRow: function addRow() {
      var new_index = this.certificateTemplateForm.custom_fields.push({
        name: ''
      });
    },
    getCustomFieldName: function getCustomFieldName(index) {
      return index + '_custom_field_name';
    },
    confirmDeleteCustomField: function confirmDeleteCustomField(index) {
      var _this2 = this;
      return function (dialog) {
        return _this2.deleteCustomField(index);
      };
    },
    deleteCustomField: function deleteCustomField(index) {
      this.certificateTemplateForm.custom_fields.splice(index, 1);
    },
    proceed: function proceed() {
      if (this.id) this.update();else this.store();
    },
    store: function store() {
      var _this3 = this;
      var loader = this.$loading.show();
      this.certificateTemplateForm.post('/api/academic/certificate/template').then(function (response) {
        toastr.success(response.message);
        _this3.certificateTemplateForm.custom_fields = [];
        _this3.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    get: function get() {
      var _this4 = this;
      var loader = this.$loading.show();
      axios.get('/api/academic/certificate/template/' + this.id).then(function (response) {
        _this4.certificateTemplateForm.name = response.name;
        _this4.certificateTemplateForm.type = response.type;
        _this4.certificateTemplateForm.body = response.body;
        response.options.custom_fields.forEach(function (custom_field) {
          _this4.certificateTemplateForm.custom_fields.push({
            name: custom_field
          });
        });
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this4.$router.push('/configuration/academic/certificate/template');
      });
    },
    update: function update() {
      var _this5 = this;
      var loader = this.$loading.show();
      this.certificateTemplateForm.patch('/api/academic/certificate/template/' + this.id).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this5.$router.push('/configuration/academic/certificate/template');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/configuration/academic/certificate-template/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    certificateTemplateForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      certificate_templates: {
        total: 0,
        data: []
      },
      filter: {
        sort_by: 'name',
        order: 'asc',
        name: '',
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'name',
        translation: i18n.academic.certificate_template_name
      }, {
        value: 'type',
        translation: i18n.academic.certificate_template_type
      }],
      showCreatePanel: false,
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getCertificateTemplates();
  },
  methods: {
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    getCertificateTemplates: function getCertificateTemplates(page) {
      var _this = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/academic/certificate/template?page=' + page + url).then(function (response) {
        _this.certificate_templates = response;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    editCertificateTemplate: function editCertificateTemplate(certificate_template) {
      this.$router.push('/configuration/academic/certificate/template/' + certificate_template.id + '/edit');
    },
    confirmDelete: function confirmDelete(certificate_template) {
      var _this2 = this;
      return function (dialog) {
        return _this2.deleteCertificateTemplate(certificate_template);
      };
    },
    deleteCertificateTemplate: function deleteCertificateTemplate(certificate_template) {
      var _this3 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/academic/certificate/template/' + certificate_template.id).then(function (response) {
        toastr.success(response.message);
        _this3.getCertificateTemplates();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    print: function print() {
      var loader = this.$loading.show();
      axios.post('/api/academic/certificate/template/print', {
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
      var _this4 = this;
      var loader = this.$loading.show();
      axios.post('/api/academic/certificate/template/pdf', {
        filter: this.filter
      }).then(function (response) {
        loader.hide();
        window.open('/download/report/' + response + '?token=' + _this4.authToken);
      })["catch"](function (error) {
        loader.hide();
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
      this.getCertificateTemplates();
    },
    'filter.order': function filterOrder(val) {
      this.getCertificateTemplates();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getCertificateTemplates();
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=template&id=81ef619a&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=template&id=81ef619a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
        return _vm.certificateTemplateForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("academic.certificate_template_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.certificateTemplateForm.name,
      expression: "certificateTemplateForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: _vm.trans("academic.certificate_template_name")
    },
    domProps: {
      value: _vm.certificateTemplateForm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.certificateTemplateForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.certificateTemplateForm,
      "prop-name": "name"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.certificateTemplateForm.type,
      expression: "certificateTemplateForm.type"
    }],
    attrs: {
      type: "radio",
      value: "student",
      id: "student",
      name: "type"
    },
    domProps: _defineProperty({
      checked: _vm.certificateTemplateForm.type
    }, "checked", _vm._q(_vm.certificateTemplateForm.type, "student")),
    on: {
      click: function click($event) {
        return _vm.certificateTemplateForm.errors.clear("type");
      },
      change: function change($event) {
        return _vm.$set(_vm.certificateTemplateForm, "type", "student");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "student"
    }
  }, [_vm._v(_vm._s(_vm.trans("student.student")))])]), _vm._v(" "), _c("div", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.certificateTemplateForm.type,
      expression: "certificateTemplateForm.type"
    }],
    attrs: {
      type: "radio",
      value: "employee",
      id: "employee",
      name: "type"
    },
    domProps: _defineProperty({
      checked: !_vm.certificateTemplateForm.type
    }, "checked", _vm._q(_vm.certificateTemplateForm.type, "employee")),
    on: {
      click: function click($event) {
        return _vm.certificateTemplateForm.errors.clear("type");
      },
      change: function change($event) {
        return _vm.$set(_vm.certificateTemplateForm, "type", "employee");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "employee"
    }
  }, [_vm._v(_vm._s(_vm.trans("employee.employee")))])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.certificateTemplateForm,
      "prop-name": "type"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm waves-effect waves-light pull-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.addRow
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.add_new_certificate_template_custom_field")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, _vm._l(_vm.certificateTemplateForm.custom_fields, function (custom_field, index) {
    return _c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(_vm.trans("academic.certificate_template_custom_field")) + " " + _vm._s(index + 1))]), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12 col-sm-11"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: custom_field.name,
        expression: "custom_field.name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        name: _vm.getCustomFieldName(index),
        placeholder: _vm.trans("academic.certificate_template_custom_field_name")
      },
      domProps: {
        value: custom_field.name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(custom_field, "name", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("show-error", {
      attrs: {
        "form-name": _vm.certificateTemplateForm,
        "prop-name": _vm.getCustomFieldName(index)
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-1"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDeleteCustomField(index)
        },
        expression: "{ok: confirmDeleteCustomField(index)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("academic.delete_certificate_template_custom_field"),
        expression: "trans('academic.delete_certificate_template_custom_field')"
      }],
      key: "".concat(index, "_delete_custom_field"),
      staticClass: "btn btn-xs btn-danger",
      attrs: {
        type: "button"
      }
    }, [_c("i", {
      staticClass: "fas fa-times"
    })])])])])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm.certificateTemplateForm.type ? _c("p", [_vm._v(_vm._s(_vm.trans("academic.certificate_template_available_variables")) + ": \n\t            \t\t"), _vm.certificateTemplateForm.type == "student" ? _c("span", [_vm._v(_vm._s(_vm.student_custom_fields.join(", ")))]) : _vm._e(), _vm._v(" "), _vm.certificateTemplateForm.type == "employee" ? _c("span", [_vm._v(_vm._s(_vm.employee_custom_fields.join(", ")))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("html-editor", {
    attrs: {
      name: "body",
      model: _vm.certificateTemplateForm.body,
      height: "300",
      isUpdate: _vm.id ? true : false
    },
    on: {
      "update:model": function updateModel($event) {
        return _vm.$set(_vm.certificateTemplateForm, "body", $event);
      },
      clearErrors: function clearErrors($event) {
        return _vm.certificateTemplateForm.errors.clear("body");
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.certificateTemplateForm,
      "prop-name": "body"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("router-link", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.id,
      expression: "id"
    }],
    staticClass: "btn btn-danger waves-effect waves-light",
    attrs: {
      to: "/configuration/academic/certificate/template"
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
  }, [_vm.id ? _c("span", [_vm._v(_vm._s(_vm.trans("general.update")))]) : _c("span", [_vm._v(_vm._s(_vm.trans("general.save")))])])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=template&id=eebc691a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=template&id=eebc691a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("academic.certificate_template")) + " \n                    "), _vm.certificate_templates.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.certificate_templates.total,
    from: _vm.certificate_templates.from,
    to: _vm.certificate_templates.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_vm.certificate_templates.total && !_vm.showCreatePanel ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("general.add_new"),
      expression: "trans('general.add_new')"
    }],
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("academic.add_new_certificate_template")))])]) : _vm._e(), _vm._v(" "), _c("sort-by", {
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
        _vm.help_topic = "configuration.academic.certificate_template";
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showCreatePanel ? _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("academic.add_new_certificate_template")))]), _vm._v(" "), _c("certificate-template-form", {
    on: {
      completed: _vm.getCertificateTemplates,
      cancel: function cancel($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.certificate_templates.total ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("academic.certificate_template_name")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("academic.certificate_template_type")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.certificate_templates.data, function (certificate_template) {
    return _c("tr", [_c("td", {
      domProps: {
        textContent: _vm._s(certificate_template.name)
      }
    }), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(certificate_template.type == "student" ? _vm.trans("student.student") : _vm.trans("employee.employee"))
      }
    }), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("academic.edit_certificate_template"),
        expression: "trans('academic.edit_certificate_template')"
      }],
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.editCertificateTemplate(certificate_template);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })]), _vm._v(" "), _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(certificate_template)
        },
        expression: "{ok: confirmDelete(certificate_template)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("academic.delete_certificate_template"),
        expression: "trans('academic.delete_certificate_template')"
      }],
      key: certificate_template.id,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })])])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.certificate_templates.total ? _c("module-info", {
    attrs: {
      module: "academic",
      title: "certificate_template_module_title",
      description: "certificate_template_module_description",
      icon: "list"
    }
  }, [_c("div", {
    attrs: {
      slot: "btn"
    },
    slot: "btn"
  }, [!_vm.showCreatePanel ? _c("button", {
    staticClass: "btn btn-info btn-md",
    on: {
      click: function click($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" " + _vm._s(_vm.trans("general.add_new")))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c("pagination-record", {
    attrs: {
      "page-length": _vm.filter.page_length,
      records: _vm.certificate_templates
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getCertificateTemplates
    },
    nativeOn: {
      change: function change($event) {
        return _vm.getCertificateTemplates.apply(null, arguments);
      }
    }
  })], 1)])], 1), _vm._v(" "), _c("right-panel", {
    attrs: {
      topic: _vm.help_topic
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/configuration/academic/certificate-template/form.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/configuration/academic/certificate-template/form.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_81ef619a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=81ef619a& */ "./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=template&id=81ef619a&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_81ef619a___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_81ef619a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/academic/certificate-template/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/academic/certificate-template/index.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/configuration/academic/certificate-template/index.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_eebc691a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=eebc691a& */ "./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=template&id=eebc691a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_eebc691a___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_eebc691a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/academic/certificate-template/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=template&id=81ef619a&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=template&id=81ef619a& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_81ef619a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_81ef619a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_81ef619a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=81ef619a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/form.vue?vue&type=template&id=81ef619a&");


/***/ }),

/***/ "./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=template&id=eebc691a&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=template&id=eebc691a& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eebc691a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eebc691a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eebc691a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=eebc691a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/academic/certificate-template/index.vue?vue&type=template&id=eebc691a&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=9623d5c4626a2dac