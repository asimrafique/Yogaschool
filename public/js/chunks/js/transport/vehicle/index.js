"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/transport/vehicle/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      vehicleForm: new Form({
        name: '',
        registration_number: '',
        make: '',
        model: '',
        max_seating_capacity: '',
        max_allowed: '',
        is_owned: '',
        owner_name: '',
        owner_company_name: '',
        owner_phone: '',
        owner_email: '',
        vehicle_fuel_type_id: '',
        max_fuel_capacity: '',
        is_active: false,
        advance_info: false,
        disposal_info: false,
        chasis_number: '',
        engine_number: '',
        cubic_capacity: '',
        "class": '',
        registration_date: '',
        registration_place: '',
        sale_date: '',
        selling_price: '',
        buyer_name: '',
        buyer_contact_number: '',
        buyer_address: ''
      }),
      vehicle_fuel_types: [],
      selected_vehicle_fuel_type: null
    };
  },
  props: ['id'],
  mounted: function mounted() {
    if (this.id) this.getVehicle();
    this.getPreRequisite();
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/vehicle/pre-requisite').then(function (response) {
        _this.vehicle_fuel_types = response.vehicle_fuel_types;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    proceed: function proceed() {
      if (this.id) this.updateVehicle();else this.storeVehicle();
    },
    storeVehicle: function storeVehicle() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.vehicleForm.make = moment(this.vehicleForm.make).format('YYYY-MM');
      this.vehicleForm.post('/api/vehicle').then(function (response) {
        toastr.success(response.message);
        _this2.$emit('completed');
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getVehicle: function getVehicle() {
      var _this3 = this;
      var loader = this.$loading.show();
      axios.get('/api/vehicle/' + this.id).then(function (response) {
        _this3.vehicleForm.name = response.name;
        _this3.vehicleForm.registration_number = response.registration_number;
        _this3.vehicleForm.make = response.make;
        _this3.vehicleForm.model = response.model;
        _this3.vehicleForm.is_owned = response.is_owned;
        _this3.vehicleForm.max_seating_capacity = response.max_seating_capacity;
        _this3.vehicleForm.max_allowed = response.max_allowed;
        _this3.vehicleForm.owner_name = response.owner_name;
        _this3.vehicleForm.owner_company_name = response.owner_company_name;
        _this3.vehicleForm.owner_phone = response.owner_phone;
        _this3.vehicleForm.owner_email = response.owner_email;
        _this3.vehicleForm.vehicle_fuel_type_id = response.vehicle_fuel_type_id;
        _this3.selected_vehicle_fuel_type = response.vehicle_fuel_type_id ? {
          id: response.vehicle_fuel_type_id,
          name: response.vehicle_fuel_type.name
        } : null;
        _this3.vehicleForm.max_fuel_capacity = response.max_fuel_capacity;
        _this3.vehicleForm.is_active = response.is_active;
        var advance_info = response.options && response.options.hasOwnProperty("advance") ? response.options.advance : {
          chasis_number: '',
          engine_number: '',
          cubic_capacity: '',
          "class": '',
          registration_date: '',
          registration_place: ''
        };
        var disposal_info = response.options && response.options.hasOwnProperty("disposal") ? response.options.disposal : {
          sale_date: '',
          selling_price: '',
          buyer_name: '',
          buyer_contact_number: '',
          buyer_address: ''
        };
        _this3.vehicleForm.chasis_number = advance_info.chasis_number;
        _this3.vehicleForm.engine_number = advance_info.engine_number;
        _this3.vehicleForm.cubic_capacity = advance_info.cubic_capacity;
        _this3.vehicleForm["class"] = advance_info["class"];
        _this3.vehicleForm.registration_date = advance_info.registration_date;
        _this3.vehicleForm.registration_place = advance_info.registration_place;
        _this3.vehicleForm.sale_date = disposal_info.sale_date;
        _this3.vehicleForm.selling_price = disposal_info.selling_price;
        _this3.vehicleForm.buyer_name = disposal_info.buyer_name;
        _this3.vehicleForm.buyer_contact_number = disposal_info.buyer_contact_number;
        _this3.vehicleForm.buyer_address = disposal_info.buyer_address;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        _this3.$router.push('/transport/vehicle');
      });
    },
    updateVehicle: function updateVehicle() {
      var _this4 = this;
      var loader = this.$loading.show();
      this.vehicleForm.make = moment(this.vehicleForm.make).format('YYYY-MM');
      this.vehicleForm.patch('/api/vehicle/' + this.id).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this4.$router.push('/transport/vehicle');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onFuelTypeSelect: function onFuelTypeSelect(selectedOption) {
      this.vehicleForm.vehicle_fuel_type_id = selectedOption.id;
    },
    onVehicleSelect: function onVehicleSelect(selectedOption) {
      this.vehicleForm.vehicle_id = selectedOption.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/transport/vehicle/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    vehicleForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      vehicles: {
        total: 0,
        data: []
      },
      filter: {
        sort_by: 'name',
        order: 'asc',
        name: '',
        registration_number: '',
        status: '',
        type: '',
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'name',
        translation: i18n.transport.vehicle_name
      }, {
        value: 'registration_number',
        translation: i18n.transport.vehicle_registration_number
      }, {
        value: 'created_at',
        translation: i18n.general.created_at
      }],
      vehicle_types: [{
        text: i18n.transport.vehicle_owned,
        value: 'owned'
      }, {
        text: i18n.transport.vehicle_contract,
        value: 'contract'
      }],
      vehicle_statuses: [{
        text: i18n.transport.vehicle_active,
        value: 'active'
      }, {
        text: i18n.transport.vehicle_inactive,
        value: 'inactive'
      }],
      showCreatePanel: false,
      showFilterPanel: false,
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-vehicle') || !helper.hasPermission('create-vehicle')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    if (helper.hasPermission('list-vehicle')) this.getVehicles();
  },
  methods: {
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getVehicles: function getVehicles(page) {
      var _this = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/vehicle?page=' + page + url).then(function (response) {
        _this.vehicles = response;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    editVehicle: function editVehicle(vehicle) {
      this.$router.push('/transport/vehicle/' + vehicle.id + '/edit');
    },
    confirmDelete: function confirmDelete(vehicle) {
      var _this2 = this;
      return function (dialog) {
        return _this2.deleteVehicle(vehicle);
      };
    },
    deleteVehicle: function deleteVehicle(vehicle) {
      var _this3 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/vehicle/' + vehicle.id).then(function (response) {
        toastr.success(response.message);
        _this3.getVehicles();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    print: function print() {
      var loader = this.$loading.show();
      axios.post('/api/vehicle/print', {
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
      axios.post('/api/vehicle/pdf', {
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
    moment: function moment(date) {
      return helper.formatDate(date);
    },
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    }
  },
  watch: {
    'filter.sort_by': function filterSort_by(val) {
      this.getVehicles();
    },
    'filter.order': function filterOrder(val) {
      this.getVehicles();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getVehicles();
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/form.vue?vue&type=template&id=f4b47fa8&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/form.vue?vue&type=template&id=f4b47fa8& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.proceed.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.vehicleForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
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
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.name,
      expression: "vehicleForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: _vm.trans("transport.vehicle_name")
    },
    domProps: {
      value: _vm.vehicleForm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
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
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_registration_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.registration_number,
      expression: "vehicleForm.registration_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "registration_number",
      placeholder: _vm.trans("transport.vehicle_registration_number")
    },
    domProps: {
      value: _vm.vehicleForm.registration_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "registration_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "registration_number"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_max_seating_capacity")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.max_seating_capacity,
      expression: "vehicleForm.max_seating_capacity"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "max_seating_capacity",
      placeholder: _vm.trans("transport.vehicle_max_seating_capacity")
    },
    domProps: {
      value: _vm.vehicleForm.max_seating_capacity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "max_seating_capacity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "max_seating_capacity"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_max_allowed")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.max_allowed,
      expression: "vehicleForm.max_allowed"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "max_allowed",
      placeholder: _vm.trans("transport.vehicle_max_allowed")
    },
    domProps: {
      value: _vm.vehicleForm.max_allowed
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "max_allowed", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "max_allowed"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_make")))]), _vm._v(" "), _c("vue-monthly-picker", {
    attrs: {
      name: "make",
      placeHolder: _vm.trans("transport.vehicle_make"),
      dateFormat: "YYYY-MM "
    },
    model: {
      value: _vm.vehicleForm.make,
      callback: function callback($$v) {
        _vm.$set(_vm.vehicleForm, "make", $$v);
      },
      expression: "vehicleForm.make"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_model")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.model,
      expression: "vehicleForm.model"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "model",
      placeholder: _vm.trans("transport.vehicle_model")
    },
    domProps: {
      value: _vm.vehicleForm.model
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "model", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "model"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", [_vm._v(_vm._s(_vm.trans("transport.vehicle_is_active")))]), _vm._v(" "), _c("switches", {
    staticClass: "m-t-10",
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.vehicleForm.is_active,
      callback: function callback($$v) {
        _vm.$set(_vm.vehicleForm, "is_active", $$v);
      },
      expression: "vehicleForm.is_active"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.is_owned,
      expression: "vehicleForm.is_owned"
    }],
    attrs: {
      type: "radio",
      value: "1",
      id: "owned",
      name: "is_owned"
    },
    domProps: _defineProperty({
      checked: _vm.vehicleForm.is_owned
    }, "checked", _vm._q(_vm.vehicleForm.is_owned, "1")),
    on: {
      click: function click($event) {
        return _vm.vehicleForm.errors.clear("is_owned");
      },
      change: function change($event) {
        return _vm.$set(_vm.vehicleForm, "is_owned", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "owned"
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_owned")))])]), _vm._v(" "), _c("div", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.is_owned,
      expression: "vehicleForm.is_owned"
    }],
    attrs: {
      type: "radio",
      value: "0",
      id: "contract",
      name: "is_owned"
    },
    domProps: _defineProperty({
      checked: !_vm.vehicleForm.is_owned
    }, "checked", _vm._q(_vm.vehicleForm.is_owned, "0")),
    on: {
      click: function click($event) {
        return _vm.vehicleForm.errors.clear("is_owned");
      },
      change: function change($event) {
        return _vm.$set(_vm.vehicleForm, "is_owned", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "contract"
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_contract")))])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "is_owned"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
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
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_owner_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.owner_name,
      expression: "vehicleForm.owner_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "owner_name",
      placeholder: _vm.trans("transport.vehicle_owner_name")
    },
    domProps: {
      value: _vm.vehicleForm.owner_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "owner_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "owner_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_owner_company_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.owner_company_name,
      expression: "vehicleForm.owner_company_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "owner_company_name",
      placeholder: _vm.trans("transport.vehicle_owner_company_name")
    },
    domProps: {
      value: _vm.vehicleForm.owner_company_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "owner_company_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "owner_company_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_owner_phone")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.owner_phone,
      expression: "vehicleForm.owner_phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "owner_phone",
      placeholder: _vm.trans("transport.vehicle_owner_phone")
    },
    domProps: {
      value: _vm.vehicleForm.owner_phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "owner_phone", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "owner_phone"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_owner_email")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.owner_email,
      expression: "vehicleForm.owner_email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "owner_email",
      placeholder: _vm.trans("transport.vehicle_owner_email")
    },
    domProps: {
      value: _vm.vehicleForm.owner_email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "owner_email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "owner_email"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_fuel_type")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "vehicle_fuel_type_id",
      id: "vehicle_fuel_type_id",
      options: _vm.vehicle_fuel_types,
      placeholder: _vm.trans("general.select_one")
    },
    on: {
      select: _vm.onFuelTypeSelect,
      close: function close($event) {
        return _vm.vehicleForm.errors.clear("vehicle_fuel_type_id");
      },
      remove: function remove($event) {
        _vm.vehicleForm.vehicle_fuel_type_id = "";
      }
    },
    model: {
      value: _vm.selected_vehicle_fuel_type,
      callback: function callback($$v) {
        _vm.selected_vehicle_fuel_type = $$v;
      },
      expression: "selected_vehicle_fuel_type"
    }
  }, [!_vm.vehicle_fuel_types.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "vehicle_fuel_type_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.max_fuel_capacity")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.max_fuel_capacity,
      expression: "vehicleForm.max_fuel_capacity"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "max_fuel_capacity",
      placeholder: _vm.trans("transport.max_fuel_capacity")
    },
    domProps: {
      value: _vm.vehicleForm.max_fuel_capacity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "max_fuel_capacity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "max_fuel_capacity"
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", [_vm._v(_vm._s(_vm.trans("transport.vehicle_advance_info")))]), _vm._v(" "), _c("switches", {
    staticClass: "m-t-10",
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.vehicleForm.advance_info,
      callback: function callback($$v) {
        _vm.$set(_vm.vehicleForm, "advance_info", $$v);
      },
      expression: "vehicleForm.advance_info"
    }
  })], 1)]), _vm._v(" "), _vm.vehicleForm.advance_info ? [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_chasis_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.chasis_number,
      expression: "vehicleForm.chasis_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "chasis_number",
      placeholder: _vm.trans("transport.vehicle_chasis_number")
    },
    domProps: {
      value: _vm.vehicleForm.chasis_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "chasis_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "chasis_number"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_engine_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.engine_number,
      expression: "vehicleForm.engine_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "engine_number",
      placeholder: _vm.trans("transport.vehicle_engine_number")
    },
    domProps: {
      value: _vm.vehicleForm.engine_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "engine_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "engine_number"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_cubic_capacity")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.cubic_capacity,
      expression: "vehicleForm.cubic_capacity"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cubic_capacity",
      placeholder: _vm.trans("transport.vehicle_cubic_capacity")
    },
    domProps: {
      value: _vm.vehicleForm.cubic_capacity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "cubic_capacity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "cubic_capacity"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_class")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm["class"],
      expression: "vehicleForm.class"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "class",
      placeholder: _vm.trans("transport.vehicle_class")
    },
    domProps: {
      value: _vm.vehicleForm["class"]
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "class", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "class"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_registration_place")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.registration_place,
      expression: "vehicleForm.registration_place"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "registration_place",
      placeholder: _vm.trans("transport.vehicle_registration_place")
    },
    domProps: {
      value: _vm.vehicleForm.registration_place
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "registration_place", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "registration_place"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_registration_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("transport.vehicle_registration_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.vehicleForm.errors.clear("registration_date");
      }
    },
    model: {
      value: _vm.vehicleForm.registration_date,
      callback: function callback($$v) {
        _vm.$set(_vm.vehicleForm, "registration_date", $$v);
      },
      expression: "vehicleForm.registration_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "registration_date"
    }
  })], 1)])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", [_vm._v(_vm._s(_vm.trans("transport.vehicle_disposal_info")))]), _vm._v(" "), _c("switches", {
    staticClass: "m-t-10",
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.vehicleForm.disposal_info,
      callback: function callback($$v) {
        _vm.$set(_vm.vehicleForm, "disposal_info", $$v);
      },
      expression: "vehicleForm.disposal_info"
    }
  })], 1)]), _vm._v(" "), _vm.vehicleForm.disposal_info ? [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_sale_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("transport.vehicle_sale_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.vehicleForm.errors.clear("sale_date");
      }
    },
    model: {
      value: _vm.vehicleForm.sale_date,
      callback: function callback($$v) {
        _vm.$set(_vm.vehicleForm, "sale_date", $$v);
      },
      expression: "vehicleForm.sale_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "sale_date"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_selling_price")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.selling_price,
      expression: "vehicleForm.selling_price"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "selling_price",
      placeholder: _vm.trans("transport.vehicle_selling_price")
    },
    domProps: {
      value: _vm.vehicleForm.selling_price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "selling_price", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "selling_price"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_buyer_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.buyer_name,
      expression: "vehicleForm.buyer_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "buyer_name",
      placeholder: _vm.trans("transport.vehicle_buyer_name")
    },
    domProps: {
      value: _vm.vehicleForm.buyer_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "buyer_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "buyer_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_buyer_contact_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.buyer_contact_number,
      expression: "vehicleForm.buyer_contact_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "buyer_contact_number",
      placeholder: _vm.trans("transport.vehicle_buyer_contact_number")
    },
    domProps: {
      value: _vm.vehicleForm.buyer_contact_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "buyer_contact_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "buyer_contact_number"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_buyer_address")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleForm.buyer_address,
      expression: "vehicleForm.buyer_address"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "buyer_address",
      placeholder: _vm.trans("transport.vehicle_buyer_address")
    },
    domProps: {
      value: _vm.vehicleForm.buyer_address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleForm, "buyer_address", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleForm,
      "prop-name": "buyer_address"
    }
  })], 1)])] : _vm._e()], 2), _vm._v(" "), _c("div", {
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
      to: "/transport/vehicle"
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
  }, [_vm.id ? _c("span", [_vm._v(_vm._s(_vm.trans("general.update")))]) : _c("span", [_vm._v(_vm._s(_vm.trans("general.save")))])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/index.vue?vue&type=template&id=d49b0ccc&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/index.vue?vue&type=template&id=d49b0ccc& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle")) + " \n                    "), _vm.vehicles.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.vehicles.total,
    from: _vm.vehicles.from,
    to: _vm.vehicles.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_vm.vehicles.total && !_vm.showCreatePanel && _vm.hasPermission("create-vehicle") ? _c("button", {
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
  }, [_vm._v(_vm._s(_vm.trans("transport.add_new_vehicle")))])]) : _vm._e(), _vm._v(" "), !_vm.showFilterPanel ? _c("button", {
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
        _vm.help_topic = "transport.vehicle";
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
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter.name,
      expression: "filter.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: _vm.trans("transport.vehicle_name")
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
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_registration_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter.registration_number,
      expression: "filter.registration_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "registration_number",
      placeholder: _vm.trans("transport.vehicle_registration_number")
    },
    domProps: {
      value: _vm.filter.registration_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filter, "registration_number", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_type")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter.type,
      expression: "filter.type"
    }],
    staticClass: "custom-select col-12",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filter, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "null",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.vehicle_types, function (vehicle_type) {
    return _c("option", {
      domProps: {
        value: vehicle_type.value
      }
    }, [_vm._v("\n                                    " + _vm._s(vehicle_type.text) + "\n                                  ")]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_status")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter.status,
      expression: "filter.status"
    }],
    staticClass: "custom-select col-12",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filter, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "null",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.vehicle_statuses, function (vehicle_status) {
    return _c("option", {
      domProps: {
        value: vehicle_status.value
      }
    }, [_vm._v("\n                                    " + _vm._s(vehicle_status.text) + "\n                                  ")]);
  })], 2)])])]), _vm._v(" "), _c("div", {
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
      click: _vm.getVehicles
    }
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))])])])]) : _vm._e()]), _vm._v(" "), _vm.hasPermission("create-vehicle") ? _c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showCreatePanel ? _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("transport.add_new_vehicle")))]), _vm._v(" "), _c("vehicle-form", {
    on: {
      completed: _vm.getVehicles,
      cancel: function cancel($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  })], 1)]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.vehicles.total ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("transport.vehicle_name")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("transport.vehicle_registration_number")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("transport.vehicle_model")))]), _vm._v(" "), _c("th", [_c("small", [_vm._v(_vm._s(_vm.trans("transport.vehicle_max_seating_capacity")))])]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("transport.vehicle_max_allowed")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("transport.vehicle_owner")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.vehicles.data, function (vehicle) {
    return _c("tr", [_c("td", [_vm._v("\n                                    " + _vm._s(vehicle.name) + " "), vehicle.is_active ? _c("span", {
      staticClass: "label label-success"
    }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_active")))]) : _c("span", {
      staticClass: "label label-danger"
    }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_inactive")))])]), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(vehicle.registration_number)
      }
    }), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(vehicle.model) + " "), vehicle.make ? _c("span", [_vm._v(_vm._s("(" + _vm.trans("transport.vehicle_make") + ": " + vehicle.make + ")"))]) : _vm._e()]), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(vehicle.max_seating_capacity)
      }
    }), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(vehicle.max_allowed)
      }
    }), _vm._v(" "), _c("td", [vehicle.is_owned ? _c("span", {
      staticClass: "label label-info"
    }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_owned")))]) : _c("span", {
      staticClass: "label label-warning"
    }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_contract")))]), _vm._v(" "), _c("ul", {
      staticStyle: {
        "list-style": "none",
        padding: "0",
        margin: "0"
      }
    }, [_c("li", [_c("strong", [_vm._v(_vm._s(_vm.trans("transport.vehicle_owner_name")) + ":")]), _vm._v(" " + _vm._s(vehicle.owner_name))]), _vm._v(" "), _c("li", [_c("strong", [_vm._v(_vm._s(_vm.trans("transport.vehicle_owner_company_name")) + ":")]), _vm._v(" " + _vm._s(vehicle.owner_company_name))]), _vm._v(" "), _c("li", [_c("strong", [_vm._v(_vm._s(_vm.trans("transport.vehicle_owner_phone")) + ":")]), _vm._v(" " + _vm._s(vehicle.owner_phone))]), _vm._v(" "), _c("li", [_c("strong", [_vm._v(_vm._s(_vm.trans("transport.vehicle_owner_email")) + ":")]), _vm._v(" " + _vm._s(vehicle.owner_email))])])]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("transport.edit_vehicle"),
        expression: "trans('transport.edit_vehicle')"
      }],
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.editVehicle(vehicle);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })]), _vm._v(" "), _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(vehicle)
        },
        expression: "{ok: confirmDelete(vehicle)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("transport.delete_vehicle"),
        expression: "trans('transport.delete_vehicle')"
      }],
      key: vehicle.id,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })])])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.vehicles.total ? _c("module-info", {
    attrs: {
      module: "transport",
      title: "vehicle_module_title",
      description: "vehicle_module_description",
      icon: "list"
    }
  }, [_c("div", {
    attrs: {
      slot: "btn"
    },
    slot: "btn"
  }, [!_vm.showCreatePanel && _vm.hasPermission("create-vehicle") ? _c("button", {
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
      records: _vm.vehicles
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getVehicles
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

/***/ "./resources/js/views/transport/vehicle/form.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/transport/vehicle/form.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_f4b47fa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=f4b47fa8& */ "./resources/js/views/transport/vehicle/form.vue?vue&type=template&id=f4b47fa8&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/transport/vehicle/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_f4b47fa8___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_f4b47fa8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/transport/vehicle/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/transport/vehicle/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/transport/vehicle/index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_d49b0ccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d49b0ccc& */ "./resources/js/views/transport/vehicle/index.vue?vue&type=template&id=d49b0ccc&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/transport/vehicle/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d49b0ccc___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_d49b0ccc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/transport/vehicle/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/transport/vehicle/form.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/transport/vehicle/form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/transport/vehicle/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/transport/vehicle/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/transport/vehicle/form.vue?vue&type=template&id=f4b47fa8&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/transport/vehicle/form.vue?vue&type=template&id=f4b47fa8& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_f4b47fa8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_f4b47fa8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_f4b47fa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=f4b47fa8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/form.vue?vue&type=template&id=f4b47fa8&");


/***/ }),

/***/ "./resources/js/views/transport/vehicle/index.vue?vue&type=template&id=d49b0ccc&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/transport/vehicle/index.vue?vue&type=template&id=d49b0ccc& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d49b0ccc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d49b0ccc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d49b0ccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=d49b0ccc& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/index.vue?vue&type=template&id=d49b0ccc&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=0c0a5fa4deabeb3c