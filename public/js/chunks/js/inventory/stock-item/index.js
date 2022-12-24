"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/inventory/stock-item/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ['id'],
  data: function data() {
    return {
      stockItemForm: new Form({
        name: '',
        code: '',
        opening_quantity: '',
        stock_category_id: '',
        description: ''
      }),
      stock_categories: [],
      selected_stock_category: null
    };
  },
  mounted: function mounted() {
    this.getPreRequisite();
    if (this.id) this.getStockItem();
  },
  methods: {
    proceed: function proceed() {
      if (this.id) this.updateStockItem();else this.storeStockItem();
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/stock/item/pre-requisite').then(function (response) {
        _this.stock_categories = response.stock_categories;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    storeStockItem: function storeStockItem() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.stockItemForm.post('/api/stock/item').then(function (response) {
        toastr.success(response.message);
        _this2.selected_stock_category = null;
        _this2.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getStockItem: function getStockItem() {
      var _this3 = this;
      var loader = this.$loading.show();
      axios.get('/api/stock/item/' + this.id).then(function (response) {
        _this3.stockItemForm.name = response.stock_item.name;
        _this3.stockItemForm.code = response.stock_item.code;
        _this3.stockItemForm.opening_quantity = response.stock_item.opening_quantity;
        _this3.stockItemForm.description = response.stock_item.description;
        _this3.stockItemForm.stock_category_id = response.stock_item.stock_category_id;
        _this3.selected_stock_category = response.selected_stock_category;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        _this3.$router.push('/inventory/stock/item');
      });
    },
    updateStockItem: function updateStockItem() {
      var _this4 = this;
      var loader = this.$loading.show();
      this.stockItemForm.patch('/api/stock/item/' + this.id).then(function (response) {
        toastr.success(response.message);
        _this4.$emit('completed');
        loader.hide();
        _this4.$router.push('/inventory/stock/item');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onStockCategorySelect: function onStockCategorySelect(selectedOption) {
      this.stockItemForm.stock_category_id = selectedOption.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/inventory/stock-item/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    stockItemForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      stock_items: {
        total: 0,
        data: []
      },
      filter: {
        sort_by: 'name',
        order: 'desc',
        stock_category_id: [],
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'name',
        translation: i18n.inventory.stock_item_name
      }, {
        value: 'created_at',
        translation: i18n.general.created_at
      }],
      stock_categories: [],
      selected_stock_category: null,
      showFilterPanel: false,
      showCreatePanel: false,
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-stock-item') || !helper.hasPermission('create-stock-item')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    if (helper.hasPermission('list-stock-item')) this.getStockItems();
    helper.showDemoNotification(['inventory']);
  },
  methods: {
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getStockItems: function getStockItems(page) {
      var _this = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/stock/item?page=' + page + url).then(function (response) {
        _this.stock_items = response.stock_items;
        _this.stock_categories = response.filters.stock_categories;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    editStockCategory: function editStockCategory(stock_item) {
      this.$router.push('/inventory/stock/item/' + stock_item.id + '/edit');
    },
    confirmDelete: function confirmDelete(stock_item) {
      var _this2 = this;
      return function (dialog) {
        return _this2.deleteStockCategory(stock_item);
      };
    },
    deleteStockCategory: function deleteStockCategory(stock_item) {
      var _this3 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/stock/item/' + stock_item.id).then(function (response) {
        toastr.success(response.message);
        _this3.getStockItems();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    print: function print() {
      var loader = this.$loading.show();
      axios.post('/api/stock/item/print', {
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
      axios.post('/api/stock/item/pdf', {
        filter: this.filter
      }).then(function (response) {
        loader.hide();
        window.open('/download/report/' + response + '?token=' + _this4.authToken);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onStockCategorySelect: function onStockCategorySelect(selectedOption) {
      this.filter.stock_category_id.push(selectedOption.id);
    },
    onStockCategoryRemove: function onStockCategoryRemove(removedOption) {
      this.filter.stock_category_id.splice(this.filter.stock_category_id.indexOf(removedOption.id), 1);
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
      this.getStockItems();
    },
    'filter.order': function filterOrder(val) {
      this.getStockItems();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getStockItems();
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/form.vue?vue&type=template&id=8ef902b2&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/form.vue?vue&type=template&id=8ef902b2& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
        return _vm.stockItemForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("inventory.stock_category")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "stock_category_id",
      id: "stock_category_id",
      options: _vm.stock_categories,
      placeholder: _vm.trans("general.select_one")
    },
    on: {
      select: _vm.onStockCategorySelect,
      close: function close($event) {
        return _vm.stockItemForm.errors.clear("stock_category_id");
      },
      remove: function remove($event) {
        _vm.stockItemForm.stock_category_id = "";
      }
    },
    model: {
      value: _vm.selected_stock_category,
      callback: function callback($$v) {
        _vm.selected_stock_category = $$v;
      },
      expression: "selected_stock_category"
    }
  }, [!_vm.stock_categories.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.stockItemForm,
      "prop-name": "stock_category_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("inventory.stock_item_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.stockItemForm.name,
      expression: "stockItemForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: _vm.trans("inventory.stock_item_name")
    },
    domProps: {
      value: _vm.stockItemForm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.stockItemForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.stockItemForm,
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
  }, [_vm._v(_vm._s(_vm.trans("inventory.stock_item_code")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.stockItemForm.code,
      expression: "stockItemForm.code"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "code",
      placeholder: _vm.trans("inventory.stock_item_code")
    },
    domProps: {
      value: _vm.stockItemForm.code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.stockItemForm, "code", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.stockItemForm,
      "prop-name": "code"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("inventory.stock_item_opening_quantity")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.stockItemForm.opening_quantity,
      expression: "stockItemForm.opening_quantity"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "opening_quantity",
      placeholder: _vm.trans("inventory.stock_item_opening_quantity")
    },
    domProps: {
      value: _vm.stockItemForm.opening_quantity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.stockItemForm, "opening_quantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.stockItemForm,
      "prop-name": "opening_quantity"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("inventory.stock_item_description")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "2",
      name: "description",
      placeholder: _vm.trans("stock.stock_item_description")
    },
    model: {
      value: _vm.stockItemForm.description,
      callback: function callback($$v) {
        _vm.$set(_vm.stockItemForm, "description", $$v);
      },
      expression: "stockItemForm.description"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.stockItemForm,
      "prop-name": "description"
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
      to: "/inventory/stock/item"
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/index.vue?vue&type=template&id=82e6eb02&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/index.vue?vue&type=template&id=82e6eb02& ***!
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
  return _c("div", [_c("div", {
    staticClass: "page-titles"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("h3", {
    staticClass: "text-themecolor"
  }, [_vm._v(_vm._s(_vm.trans("inventory.stock_item")) + " \n                    "), _vm.stock_items.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.stock_items.total,
    from: _vm.stock_items.from,
    to: _vm.stock_items.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_vm.stock_items.total && !_vm.showCreatePanel && _vm.hasPermission("create-stock-item") ? _c("button", {
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
  }, [_vm._v(_vm._s(_vm.trans("inventory.add_new_stock_item")))])]) : _vm._e(), _vm._v(" "), !_vm.showFilterPanel ? _c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        _vm.showFilterPanel = !_vm.showFilterPanel;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-filter"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))])]) : _vm._e(), _vm._v(" "), _c("sort-by", {
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
        _vm.help_topic = "inventory.stock.item";
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showFilterPanel ? _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("inventory.stock_category")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "stock_category_id",
      id: "stock_category_id",
      options: _vm.stock_categories,
      placeholder: _vm.trans("inventory.select_stock_category"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_stock_category
    },
    on: {
      select: _vm.onStockCategorySelect,
      remove: _vm.onStockCategoryRemove
    },
    model: {
      value: _vm.selected_stock_category,
      callback: function callback($$v) {
        _vm.selected_stock_category = $$v;
      },
      expression: "selected_stock_category"
    }
  }, [!_vm.stock_categories.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("inventory.stock_item_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter.name,
      expression: "filter.name"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name"
    },
    domProps: {
      value: _vm.filter.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filter, "name", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-right"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.showFilterPanel = false;
      }
    }
  }, [_vm._v(_vm._s(_vm.trans("general.cancel")))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.getStockItems
    }
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))])])])]) : _vm._e()]), _vm._v(" "), _vm.hasPermission("create-stock-item") ? _c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showCreatePanel ? _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("inventory.add_new_stock_item")))]), _vm._v(" "), _c("stock-item-form", {
    on: {
      completed: _vm.getStockItems,
      cancel: function cancel($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  })], 1)]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.stock_items.total ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("inventory.stock_item_name")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("inventory.stock_item_code")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("inventory.stock_item_opening_quantity")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("inventory.stock_item_net_quantity")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("inventory.stock_category")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("inventory.stock_item_description")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.stock_items.data, function (stock_item) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(stock_item.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(stock_item.code))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(stock_item.opening_quantity))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(stock_item.net_quantity))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(stock_item.category.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(stock_item.description))]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("inventory.edit_stock_item"),
        expression: "trans('inventory.edit_stock_item')"
      }],
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.editStockCategory(stock_item);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })]), _vm._v(" "), _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(stock_item)
        },
        expression: "{ok: confirmDelete(stock_item)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("inventory.delete_stock_item"),
        expression: "trans('inventory.delete_stock_item')"
      }],
      key: stock_item.id,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })])])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.stock_items.total ? _c("module-info", {
    attrs: {
      module: "inventory",
      title: "stock_item_module_title",
      description: "stock_item_module_description",
      icon: "list"
    }
  }, [_c("div", {
    attrs: {
      slot: "btn"
    },
    slot: "btn"
  }, [!_vm.showCreatePanel && _vm.hasPermission("create-stock-item") ? _c("button", {
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
      records: _vm.stock_items
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getStockItems
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

/***/ "./resources/js/views/inventory/stock-item/form.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/inventory/stock-item/form.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_8ef902b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=8ef902b2& */ "./resources/js/views/inventory/stock-item/form.vue?vue&type=template&id=8ef902b2&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/inventory/stock-item/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_8ef902b2___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_8ef902b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/inventory/stock-item/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/inventory/stock-item/index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/inventory/stock-item/index.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_82e6eb02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=82e6eb02& */ "./resources/js/views/inventory/stock-item/index.vue?vue&type=template&id=82e6eb02&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/inventory/stock-item/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_82e6eb02___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_82e6eb02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/inventory/stock-item/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/inventory/stock-item/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/inventory/stock-item/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/inventory/stock-item/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/inventory/stock-item/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/inventory/stock-item/form.vue?vue&type=template&id=8ef902b2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/inventory/stock-item/form.vue?vue&type=template&id=8ef902b2& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8ef902b2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8ef902b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8ef902b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=8ef902b2& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/form.vue?vue&type=template&id=8ef902b2&");


/***/ }),

/***/ "./resources/js/views/inventory/stock-item/index.vue?vue&type=template&id=82e6eb02&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/inventory/stock-item/index.vue?vue&type=template&id=82e6eb02& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_82e6eb02___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_82e6eb02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_82e6eb02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=82e6eb02& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inventory/stock-item/index.vue?vue&type=template&id=82e6eb02&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=24dfac227b29f334