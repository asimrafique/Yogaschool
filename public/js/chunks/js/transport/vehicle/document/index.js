"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/transport/vehicle/document/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      vehicleDocumentForm: new Form({
        title: '',
        vehicle_id: '',
        vehicle_document_type_id: '',
        date_of_expiry: '',
        description: '',
        policy_number: '',
        insurance_date: '',
        insurance_amount: '',
        insured_amount: '',
        insurance_company_name: '',
        insurance_agent_name: '',
        insurance_agent_contact_number: '',
        upload_token: ''
      }),
      vehicles: [],
      selected_vehicle: null,
      selected_vehicle_document_type: null,
      vehicle_document_types: [],
      vehicle_document_type_details: [],
      clearAttachment: false,
      expiry_date: false,
      insurance_document: false,
      module_id: ''
    };
  },
  mounted: function mounted() {
    this.vehicleDocumentForm.upload_token = this.$uuid.v4();
    this.getPreRequisite();
    if (this.id) this.getDocument();
  },
  methods: {
    proceed: function proceed() {
      if (this.id) this.updateDocument();else this.storeDocument();
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/vehicle/document/pre-requisite').then(function (response) {
        _this.vehicles = response.vehicles;
        _this.vehicle_document_types = response.vehicle_document_types;
        _this.vehicle_document_type_details = response.vehicle_document_type_details;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    storeDocument: function storeDocument() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.vehicleDocumentForm.post('/api/vehicle/document').then(function (response) {
        toastr.success(response.message);
        _this2.clearAttachment = !_this2.clearAttachment;
        _this2.$emit('completed');
        _this2.vehicleDocumentForm.upload_token = _this2.$uuid.v4();
        _this2.selected_vehicle_document_type = null;
        _this2.selected_vehicle = null;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getDocument: function getDocument() {
      var _this3 = this;
      var loader = this.$loading.show();
      axios.get('/api/vehicle/document/' + this.id).then(function (response) {
        _this3.vehicleDocumentForm.title = response.vehicle_document.title;
        _this3.vehicleDocumentForm.vehicle_id = response.vehicle_document.vehicle_id;
        _this3.vehicleDocumentForm.date_of_expiry = response.vehicle_document.date_of_expiry;
        _this3.vehicleDocumentForm.vehicle_document_type_id = response.vehicle_document.vehicle_document_type_id;
        _this3.selected_vehicle_document_type = {
          id: response.vehicle_document.vehicle_document_type_id,
          name: response.vehicle_document.vehicle_document_type.name
        };
        _this3.selected_vehicle = {
          id: response.vehicle_document.vehicle_id,
          name: response.vehicle_document.vehicle.name
        };
        _this3.vehicleDocumentForm.description = response.vehicle_document.description;
        _this3.vehicleDocumentForm.upload_token = response.vehicle_document.upload_token;
        _this3.expiry_date = response.vehicle_document.vehicle_document_type.has_expiry_date ? true : false;
        _this3.insurance_document = response.vehicle_document.vehicle_document_type.is_insurance_document ? true : false;
        _this3.module_id = response.vehicle_document.id;
        var insurance_info = response.vehicle_document.options && response.vehicle_document.options.hasOwnProperty("insurance") ? response.vehicle_document.options.insurance : {
          policy_number: '',
          insurance_date: '',
          insurance_amount: '',
          insured_amount: '',
          insurance_company_name: '',
          insurance_agent_name: '',
          insurance_agent_contact_number: ''
        };
        _this3.vehicleDocumentForm.policy_number = insurance_info.policy_number;
        _this3.vehicleDocumentForm.insurance_date = insurance_info.insurance_date;
        _this3.vehicleDocumentForm.insurance_amount = insurance_info.insurance_amount;
        _this3.vehicleDocumentForm.insured_amount = insurance_info.insured_amount;
        _this3.vehicleDocumentForm.insurance_company_name = insurance_info.insurance_company_name;
        _this3.vehicleDocumentForm.insurance_agent_name = insurance_info.insurance_agent_name;
        _this3.vehicleDocumentForm.insurance_agent_contact_number = insurance_info.insurance_agent_contact_number;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        _this3.$router.push('/transport/vehicle/document');
      });
    },
    updateDocument: function updateDocument() {
      var _this4 = this;
      var loader = this.$loading.show();
      this.vehicleDocumentForm.patch('/api/vehicle/document/' + this.id).then(function (response) {
        toastr.success(response.message);
        _this4.$emit('completed');
        loader.hide();
        _this4.$router.push('/transport/vehicle/document');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onDocumentTypeSelect: function onDocumentTypeSelect(selectedOption) {
      this.vehicleDocumentForm.vehicle_document_type_id = selectedOption.id;
      var vehicle_document_type = this.vehicle_document_type_details.find(function (o) {
        return o.id == selectedOption.id;
      });
      if (vehicle_document_type.has_expiry_date) {
        this.expiry_date = true;
      } else {
        this.expiry_date = false;
      }
      if (vehicle_document_type.is_insurance_document) {
        this.insurance_document = true;
      } else {
        this.insurance_document = false;
      }
    },
    onVehicleSelect: function onVehicleSelect(selectedOption) {
      this.vehicleDocumentForm.vehicle_id = selectedOption.id;
    }
  },
  watch: {
    'vehicleDocumentForm.vehicle_document_type_id': function vehicleDocumentFormVehicle_document_type_id(val) {
      if (!val) {
        this.expiry_date = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/views/transport/vehicle/document/form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    vehicleDocumentForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      vehicle_documents: {
        total: 0,
        data: []
      },
      filter: {
        sort_by: 'date_of_expiry',
        order: 'desc',
        expired: false,
        expiring_in: 0,
        vehicle_id: [],
        vehicle_document_type_id: [],
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'vehicle_id',
        translation: i18n.transport.vehicle
      }, {
        value: 'date_of_expiry',
        translation: i18n.transport.date_of_expiry
      }, {
        value: 'title',
        translation: i18n.transport.vehicle_document_title
      }, {
        value: 'created_at',
        translation: i18n.general.created_at
      }],
      vehicles: [],
      selected_vehicle: null,
      vehicle_document_types: [],
      selected_vehicle_document_type: null,
      showCreatePanel: false,
      showFilterPanel: false,
      viewId: '',
      vehicle_document: {},
      documents: [],
      showDetailModal: false,
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-vehicle-document') || !helper.hasPermission('create-vehicle-document')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    if (helper.hasPermission('list-vehicle-document')) this.getVehicleDocuments();
    helper.showDemoNotification(['transport']);
  },
  methods: {
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getVehicleDocuments: function getVehicleDocuments(page) {
      var _this = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/vehicle/document?page=' + page + url).then(function (response) {
        _this.vehicle_documents = response.vehicle_documents;
        _this.vehicles = response.filters.vehicles;
        _this.vehicle_document_types = response.filters.vehicle_document_types;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getVehicleDocument: function getVehicleDocument() {
      var _this2 = this;
      var loader = this.$loading.show();
      axios.get('/api/vehicle/document/' + this.viewId).then(function (response) {
        _this2.vehicle_document = response.vehicle_document;
        _this2.documents = response.documents;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    editVehicleLog: function editVehicleLog(vehicle_document) {
      this.$router.push('/transport/vehicle/document/' + vehicle_document.id + '/edit');
    },
    confirmDelete: function confirmDelete(vehicle_document) {
      var _this3 = this;
      return function (dialog) {
        return _this3.deleteVehicleLog(vehicle_document);
      };
    },
    deleteVehicleLog: function deleteVehicleLog(vehicle_document) {
      var _this4 = this;
      var loader = this.$loading.show();
      axios["delete"]('/api/vehicle/document/' + vehicle_document.id).then(function (response) {
        toastr.success(response.message);
        _this4.getVehicleDocuments();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    print: function print() {
      var loader = this.$loading.show();
      axios.post('/api/vehicle/document/print', {
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
      axios.post('/api/vehicle/document/pdf', {
        filter: this.filter
      }).then(function (response) {
        loader.hide();
        window.open('/download/report/' + response + '?token=' + _this5.authToken);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onVehicleSelect: function onVehicleSelect(selectedOption) {
      this.filter.vehicle_id.push(selectedOption.id);
    },
    onVehicleRemove: function onVehicleRemove(removedOption) {
      this.filter.vehicle_id.splice(this.filter.vehicle_id.indexOf(removedOption.id), 1);
    },
    onVehicleDocumentTypeSelect: function onVehicleDocumentTypeSelect(selectedOption) {
      this.filter.vehicle_document_type_id.push(selectedOption.id);
    },
    onVehicleDocumentTypeRemove: function onVehicleDocumentTypeRemove(removedOption) {
      this.filter.vehicle_document_type_id.splice(this.filter.vehicle_document_type_id.indexOf(removedOption.id), 1);
    },
    getStatus: function getStatus(vehicle_document) {
      return helper.getVehicleDocumentStatus(vehicle_document);
    },
    showDetailAction: function showDetailAction(vehicle_document) {
      this.viewId = vehicle_document.id;
      this.showDetailModal = true;
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
      this.getVehicleDocuments();
    },
    'filter.order': function filterOrder(val) {
      this.getVehicleDocuments();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getVehicleDocuments();
    },
    viewId: function viewId(val) {
      if (val) this.getVehicleDocument();else {
        this.vehicle_document = {};
        this.documents = [];
      }
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/form.vue?vue&type=template&id=016b8300&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/form.vue?vue&type=template&id=016b8300& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
        return _vm.vehicleDocumentForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "vehicle_id",
      id: "vehicle_id",
      options: _vm.vehicles,
      placeholder: _vm.trans("general.select_one")
    },
    on: {
      select: _vm.onVehicleSelect,
      close: function close($event) {
        return _vm.vehicleDocumentForm.errors.clear("vehicle_id");
      },
      remove: function remove($event) {
        _vm.vehicleDocumentForm.vehicle_id = "";
      }
    },
    model: {
      value: _vm.selected_vehicle,
      callback: function callback($$v) {
        _vm.selected_vehicle = $$v;
      },
      expression: "selected_vehicle"
    }
  }, [!_vm.vehicles.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "vehicle_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-9"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_document_title")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleDocumentForm.title,
      expression: "vehicleDocumentForm.title"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "title",
      placeholder: _vm.trans("transport.vehicle_document_title")
    },
    domProps: {
      value: _vm.vehicleDocumentForm.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleDocumentForm, "title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "title"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_document_type")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "vehicle_document_type_id",
      id: "vehicle_document_type_id",
      options: _vm.vehicle_document_types,
      placeholder: _vm.trans("general.select_one")
    },
    on: {
      select: _vm.onDocumentTypeSelect,
      close: function close($event) {
        return _vm.vehicleDocumentForm.errors.clear("vehicle_document_type_id");
      },
      remove: function remove($event) {
        _vm.vehicleDocumentForm.vehicle_document_type_id = "";
      }
    },
    model: {
      value: _vm.selected_vehicle_document_type,
      callback: function callback($$v) {
        _vm.selected_vehicle_document_type = $$v;
      },
      expression: "selected_vehicle_document_type"
    }
  }, [!_vm.vehicle_document_types.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                " + _vm._s(_vm.trans("general.no_option_found")) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "vehicle_document_type_id"
    }
  })], 1)]), _vm._v(" "), _vm.expiry_date ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.date_of_expiry")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("transport.date_of_expiry")
    },
    on: {
      selected: function selected($event) {
        return _vm.vehicleDocumentForm.errors.clear("date_of_expiry");
      }
    },
    model: {
      value: _vm.vehicleDocumentForm.date_of_expiry,
      callback: function callback($$v) {
        _vm.$set(_vm.vehicleDocumentForm, "date_of_expiry", $$v);
      },
      expression: "vehicleDocumentForm.date_of_expiry"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "date_of_expiry"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_document_description")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "2",
      name: "description",
      placeholder: _vm.trans("vehicle.vehicle_document_description")
    },
    model: {
      value: _vm.vehicleDocumentForm.description,
      callback: function callback($$v) {
        _vm.$set(_vm.vehicleDocumentForm, "description", $$v);
      },
      expression: "vehicleDocumentForm.description"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "description"
    }
  })], 1)]), _vm._v(" "), _vm.insurance_document ? [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_policy_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleDocumentForm.policy_number,
      expression: "vehicleDocumentForm.policy_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "policy_number",
      placeholder: _vm.trans("transport.vehicle_policy_number")
    },
    domProps: {
      value: _vm.vehicleDocumentForm.policy_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleDocumentForm, "policy_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "policy_number"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_insurance_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("transport.vehicle_insurance_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.vehicleDocumentForm.errors.clear("insurance_date");
      }
    },
    model: {
      value: _vm.vehicleDocumentForm.insurance_date,
      callback: function callback($$v) {
        _vm.$set(_vm.vehicleDocumentForm, "insurance_date", $$v);
      },
      expression: "vehicleDocumentForm.insurance_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "insurance_date"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_insurance_amount")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleDocumentForm.insurance_amount,
      expression: "vehicleDocumentForm.insurance_amount"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "insurance_amount",
      placeholder: _vm.trans("transport.vehicle_insurance_amount")
    },
    domProps: {
      value: _vm.vehicleDocumentForm.insurance_amount
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleDocumentForm, "insurance_amount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "insurance_amount"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_insured_amount")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleDocumentForm.insured_amount,
      expression: "vehicleDocumentForm.insured_amount"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "insured_amount",
      placeholder: _vm.trans("transport.vehicle_insured_amount")
    },
    domProps: {
      value: _vm.vehicleDocumentForm.insured_amount
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleDocumentForm, "insured_amount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "insured_amount"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_insurance_company_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleDocumentForm.insurance_company_name,
      expression: "vehicleDocumentForm.insurance_company_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "insurance_company_name",
      placeholder: _vm.trans("transport.vehicle_insurance_company_name")
    },
    domProps: {
      value: _vm.vehicleDocumentForm.insurance_company_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleDocumentForm, "insurance_company_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "insurance_company_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_insurance_agent_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleDocumentForm.insurance_agent_name,
      expression: "vehicleDocumentForm.insurance_agent_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "insurance_agent_name",
      placeholder: _vm.trans("transport.vehicle_insurance_agent_name")
    },
    domProps: {
      value: _vm.vehicleDocumentForm.insurance_agent_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleDocumentForm, "insurance_agent_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "insurance_agent_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_insurance_agent_contact_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vehicleDocumentForm.insurance_agent_contact_number,
      expression: "vehicleDocumentForm.insurance_agent_contact_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "insurance_agent_contact_number",
      placeholder: _vm.trans("transport.vehicle_insurance_agent_contact_number")
    },
    domProps: {
      value: _vm.vehicleDocumentForm.insurance_agent_contact_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehicleDocumentForm, "insurance_agent_contact_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.vehicleDocumentForm,
      "prop-name": "insurance_agent_contact_number"
    }
  })], 1)])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("file-upload-input", {
    attrs: {
      "button-text": _vm.trans("general.upload_document"),
      token: _vm.vehicleDocumentForm.upload_token,
      module: "vehicle_document",
      "clear-file": _vm.clearAttachment,
      "module-id": _vm.module_id
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
      to: "/transport/vehicle/document"
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/index.vue?vue&type=template&id=dab5dd74&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/index.vue?vue&type=template&id=dab5dd74& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_document")) + " \n                    "), _vm.vehicle_documents.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.vehicle_documents.total,
    from: _vm.vehicle_documents.from,
    to: _vm.vehicle_documents.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_vm.vehicle_documents.total && !_vm.showCreatePanel && _vm.hasPermission("create-vehicle-document") ? _c("button", {
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
  }, [_vm._v(_vm._s(_vm.trans("transport.add_new_vehicle_document")))])]) : _vm._e(), _vm._v(" "), !_vm.showFilterPanel ? _c("button", {
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
        _vm.help_topic = "transport.vehicle.document";
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
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "vehicle_id",
      id: "vehicle_id",
      options: _vm.vehicles,
      placeholder: _vm.trans("transport.select_vehicle"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_vehicle
    },
    on: {
      select: _vm.onVehicleSelect,
      remove: _vm.onVehicleRemove
    },
    model: {
      value: _vm.selected_vehicle,
      callback: function callback($$v) {
        _vm.selected_vehicle = $$v;
      },
      expression: "selected_vehicle"
    }
  }, [!_vm.vehicles.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_document_type")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      "track-by": "id",
      name: "vehicle_document_type_id",
      id: "vehicle_document_type_id",
      options: _vm.vehicle_document_types,
      placeholder: _vm.trans("transport.select_vehicle_document_type"),
      multiple: true,
      "close-on-select": false,
      "clear-on-select": false,
      "hide-selected": true,
      selected: _vm.selected_vehicle_document_type
    },
    on: {
      select: _vm.onVehicleDocumentTypeSelect,
      remove: _vm.onVehicleDocumentTypeRemove
    },
    model: {
      value: _vm.selected_vehicle_document_type,
      callback: function callback($$v) {
        _vm.selected_vehicle_document_type = $$v;
      },
      expression: "selected_vehicle_document_type"
    }
  }, [!_vm.vehicle_document_types.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                                    ")]) : _vm._e()])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-1"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", [_vm._v(_vm._s(_vm.trans("transport.vehicle_document_status_expired")))]), _vm._v(" "), _c("switches", {
    staticClass: "m-t-20",
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.filter.expired,
      callback: function callback($$v) {
        _vm.$set(_vm.filter, "expired", $$v);
      },
      expression: "filter.expired"
    }
  })], 1)]), _vm._v(" "), !_vm.filter.expired ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("transport.vehicle_document_expiring_in_days")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter.expiring_in,
      expression: "filter.expiring_in"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "expiring_in",
      placeholder: _vm.trans("transport.vehicle_document_expiring_in_days")
    },
    domProps: {
      value: _vm.filter.expiring_in
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filter, "expiring_in", $event.target.value);
      }
    }
  })])]) : _vm._e()]), _vm._v(" "), _c("div", {
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
      click: _vm.getVehicleDocuments
    }
  }, [_vm._v(_vm._s(_vm.trans("general.filter")))])])])]) : _vm._e()]), _vm._v(" "), _vm.hasPermission("create-vehicle-document") ? _c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showCreatePanel ? _c("div", {
    staticClass: "card card-form"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("transport.add_new_vehicle_document")))]), _vm._v(" "), _c("vehicle-document-form", {
    on: {
      completed: _vm.getVehicleDocuments,
      cancel: function cancel($event) {
        _vm.showCreatePanel = !_vm.showCreatePanel;
      }
    }
  })], 1)]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.vehicle_documents.total ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("transport.vehicle")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("transport.vehicle_document_type")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("transport.vehicle_document_title")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("transport.date_of_expiry")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("transport.vehicle_document_description")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.vehicle_documents.data, function (vehicle_document) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(vehicle_document.vehicle.name + " (" + vehicle_document.vehicle.registration_number + ")"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(vehicle_document.vehicle_document_type.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(vehicle_document.title))]), _vm._v(" "), _c("td", [vehicle_document.date_of_expiry ? _c("span", [_vm._v("\n                                        " + _vm._s(_vm._f("moment")(vehicle_document.date_of_expiry)) + "\n                                        "), _c("span", {
      "class": ["label", "label-" + _vm.getStatus(vehicle_document)["color"]]
    }, [_vm._v(_vm._s(_vm.trans("transport." + _vm.getStatus(vehicle_document)["status"], {
      day: _vm.getStatus(vehicle_document)["day"]
    })))])]) : _c("span", [_vm._v("-")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(vehicle_document.description))]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("transport.view_vehicle_document"),
        expression: "trans('transport.view_vehicle_document')"
      }],
      staticClass: "btn btn-success btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.showDetailAction(vehicle_document);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-arrow-circle-right"
    })]), _vm._v(" "), _c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("transport.edit_vehicle_document"),
        expression: "trans('transport.edit_vehicle_document')"
      }],
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.editVehicleLog(vehicle_document);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })]), _vm._v(" "), _c("button", {
      directives: [{
        name: "confirm",
        rawName: "v-confirm",
        value: {
          ok: _vm.confirmDelete(vehicle_document)
        },
        expression: "{ok: confirmDelete(vehicle_document)}"
      }, {
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("transport.delete_vehicle_document"),
        expression: "trans('transport.delete_vehicle_document')"
      }],
      key: vehicle_document.id,
      staticClass: "btn btn-danger btn-sm"
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })])])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.vehicle_documents.total ? _c("module-info", {
    attrs: {
      module: "transport",
      title: "vehicle_document_module_title",
      description: "vehicle_document_module_description",
      icon: "list"
    }
  }, [_c("div", {
    attrs: {
      slot: "btn"
    },
    slot: "btn"
  }, [!_vm.showCreatePanel && _vm.hasPermission("create-vehicle-document") ? _c("button", {
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
      records: _vm.vehicle_documents
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getVehicleDocuments
    }
  })], 1)])], 1), _vm._v(" "), _vm.showDetailModal ? _c("transition", {
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
    return [_vm.vehicle_document.vehicle ? _c("span", [_vm._v(_vm._s(_vm.vehicle_document.vehicle.name + " (" + _vm.vehicle_document.vehicle.registration_number + ")"))]) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "float-right pointer",
      on: {
        click: function click($event) {
          _vm.showDetailModal = false;
        }
      }
    }, [_vm._v("x")])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._t("body", function () {
    return [_vm.vehicle_document.vehicle_document_type ? _c("h4", {
      staticClass: "card-title"
    }, [_vm._v(_vm._s(_vm.vehicle_document.title) + " (" + _vm._s(_vm.vehicle_document.vehicle_document_type.name) + ")")]) : _vm._e(), _vm._v(" "), _vm.vehicle_document.date_of_expiry ? _c("div", [_vm._v("\n                                " + _vm._s(_vm.trans("transport.date_of_expiry")) + ": " + _vm._s(_vm._f("moment")(_vm.vehicle_document.date_of_expiry)) + "\n                                "), _c("span", {
      "class": ["label", "label-" + _vm.getStatus(_vm.vehicle_document)["color"]]
    }, [_vm._v(_vm._s(_vm.trans("transport." + _vm.getStatus(_vm.vehicle_document)["status"], {
      day: _vm.getStatus(_vm.vehicle_document)["day"]
    })))])]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "m-t-20",
      domProps: {
        innerHTML: _vm._s(_vm.vehicle_document.description)
      }
    }), _vm._v(" "), _vm.documents.length ? _c("div", [_c("ul", {
      staticClass: "m-t-10 upload-file-list"
    }, _vm._l(_vm.documents, function (document) {
      return _c("li", {
        staticClass: "upload-file-list-item"
      }, [_c("a", {
        staticClass: "no-link-color",
        attrs: {
          href: "/transport/vehicle/document/".concat(_vm.vehicle_document.id, "/attachment/").concat(document.uuid, "/download?token=").concat(_vm.authToken)
        }
      }, [_c("i", {
        "class": ["file-icon", "fas", "fa-lg", document.file_info.icon]
      }), _vm._v(" "), _c("span", {
        staticClass: "upload-file-list-item-size"
      }, [_vm._v(_vm._s(document.file_info.size))]), _vm._v(" " + _vm._s(document.user_filename))])]);
    }), 0)]) : _vm._e(), _vm._v(" "), _c("hr"), _vm._v(" "), _c("p", [_c("i", {
      staticClass: "far fa-clock"
    }), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.trans("general.created_at")) + " " + _vm._s(_vm._f("momentDateTime")(_vm.vehicle_document.created_at)))]), _vm._v(" "), _c("span", {
      staticClass: "pull-right"
    }, [_c("i", {
      staticClass: "far fa-clock"
    }), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.trans("general.updated_at")) + " " + _vm._s(_vm._f("momentDateTime")(_vm.vehicle_document.updated_at)))])])]), _vm._v(" "), _c("div", {
      staticClass: "clearfix"
    })];
  })], 2)])])])]) : _vm._e(), _vm._v(" "), _c("right-panel", {
    attrs: {
      topic: _vm.help_topic
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/transport/vehicle/document/form.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/transport/vehicle/document/form.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_016b8300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=016b8300& */ "./resources/js/views/transport/vehicle/document/form.vue?vue&type=template&id=016b8300&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/transport/vehicle/document/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_016b8300___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_016b8300___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/transport/vehicle/document/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/transport/vehicle/document/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/transport/vehicle/document/index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_dab5dd74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=dab5dd74& */ "./resources/js/views/transport/vehicle/document/index.vue?vue&type=template&id=dab5dd74&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/transport/vehicle/document/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_dab5dd74___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_dab5dd74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/transport/vehicle/document/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/transport/vehicle/document/form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/transport/vehicle/document/form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/transport/vehicle/document/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/transport/vehicle/document/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/transport/vehicle/document/form.vue?vue&type=template&id=016b8300&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/transport/vehicle/document/form.vue?vue&type=template&id=016b8300& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_016b8300___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_016b8300___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_016b8300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=016b8300& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/form.vue?vue&type=template&id=016b8300&");


/***/ }),

/***/ "./resources/js/views/transport/vehicle/document/index.vue?vue&type=template&id=dab5dd74&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/transport/vehicle/document/index.vue?vue&type=template&id=dab5dd74& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dab5dd74___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dab5dd74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dab5dd74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=dab5dd74& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/transport/vehicle/document/index.vue?vue&type=template&id=dab5dd74&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=27ee4037e593055a