"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/configuration/paymentGateway/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/payment-gateway/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/payment-gateway/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      configForm: new Form({
        config_type: '',
        paypal: 0,
        paypal_mode: 0,
        paypal_client_id: '',
        paypal_client_secret: '',
        paypal_charge_handling_fee: 0,
        paypal_fixed_handling_fee: 0,
        paypal_handling_fee: '',
        stripe: 0,
        stripe_mode: 0,
        stripe_publishable_key: '',
        stripe_private_key: '',
        stripe_charge_handling_fee: 0,
        stripe_fixed_handling_fee: 0,
        stripe_handling_fee: '',
        razorpay: 0,
        razorpay_mode: 0,
        razorpay_key: '',
        razorpay_secret: '',
        razorpay_charge_handling_fee: 0,
        razorpay_fixed_handling_fee: 0,
        razorpay_handling_fee: '',
        paystack: 0,
        paystack_mode: 0,
        paystack_public_key: '',
        paystack_secret_key: '',
        paystack_charge_handling_fee: 0,
        paystack_fixed_handling_fee: 0,
        paystack_handling_fee: '',
        billdesk: 0,
        billdesk_mode: 0,
        billdesk_merchant_id: '',
        billdesk_security_id: '',
        billdesk_checksum_key: '',
        billdesk_charge_handling_fee: 0,
        billdesk_fixed_handling_fee: 0,
        billdesk_handling_fee: '',
        billdesk_email: '',
        billdesk_phone: ''
      }, false),
      default_currency: helper.getConfig('default_currency'),
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getConfiguration();
  },
  methods: {
    getConfiguration: function getConfiguration() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/configuration').then(function (response) {
        _this.configForm = helper.formAssign(_this.configForm, response);
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    submit: function submit() {
      var _this2 = this;
      var loader = this.$loading.show();
      this.configForm.config_type = 'payment_gateway';
      this.configForm.post('/api/configuration').then(function (response) {
        loader.hide();
        _this2.$store.dispatch('setConfig', {
          loaded: false
        });
        toastr.success(response.message);
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/payment-gateway/index.vue?vue&type=template&id=1e92e290&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/payment-gateway/index.vue?vue&type=template&id=1e92e290& ***!
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
  }, [_vm._v(_vm._s(_vm.trans("finance.payment_gateway")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_c("button", {
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/dashboard");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-home"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.home")))])]), _vm._v(" "), _c("help-button", {
    on: {
      clicked: function clicked($event) {
        _vm.help_topic = "configuration.payment_gateway";
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      },
      keydown: function keydown($event) {
        return _vm.configForm.errors.clear($event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paypal,
      expression: "configForm.paypal"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "paypal"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.paypal) ? _vm._i(_vm.configForm.paypal, "1") > -1 : _vm.configForm.paypal
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.paypal,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "paypal", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "paypal", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "paypal", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v("Paypal")])])]), _vm._v(" "), _vm.configForm.paypal ? [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paypal_mode,
      expression: "configForm.paypal_mode"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "paypal_mode"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.paypal_mode) ? _vm._i(_vm.configForm.paypal_mode, "1") > -1 : _vm.configForm.paypal_mode
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.paypal_mode,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "paypal_mode", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "paypal_mode", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "paypal_mode", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v("Paypal Live Mode")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Paypal Client Id")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paypal_client_id,
      expression: "configForm.paypal_client_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "paypal_client_id",
      placeholder: "Paypal Client Id"
    },
    domProps: {
      value: _vm.configForm.paypal_client_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "paypal_client_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "paypal_client_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Paypal Client Secret")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paypal_client_secret,
      expression: "configForm.paypal_client_secret"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "paypal_client_secret",
      placeholder: "Paypal Client Secret"
    },
    domProps: {
      value: _vm.configForm.paypal_client_secret
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "paypal_client_secret", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "paypal_client_secret"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paypal_charge_handling_fee,
      expression: "configForm.paypal_charge_handling_fee"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "paypal_charge_handling_fee"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.paypal_charge_handling_fee) ? _vm._i(_vm.configForm.paypal_charge_handling_fee, "1") > -1 : _vm.configForm.paypal_charge_handling_fee
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.paypal_charge_handling_fee,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "paypal_charge_handling_fee", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "paypal_charge_handling_fee", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "paypal_charge_handling_fee", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("finance.charge_gateway_handling_fee")))])])]), _vm._v(" "), _vm.configForm.paypal_charge_handling_fee ? [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paypal_fixed_handling_fee,
      expression: "configForm.paypal_fixed_handling_fee"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "paypal_fixed_handling_fee"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.paypal_fixed_handling_fee) ? _vm._i(_vm.configForm.paypal_fixed_handling_fee, "1") > -1 : _vm.configForm.paypal_fixed_handling_fee
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.paypal_fixed_handling_fee,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "paypal_fixed_handling_fee", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "paypal_fixed_handling_fee", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "paypal_fixed_handling_fee", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("finance.fixed_gateway_handling_fee")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.gateway_handling_fee", {
    gateway: "Paypal"
  })))]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paypal_handling_fee,
      expression: "configForm.paypal_handling_fee"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "paypal_handling_fee",
      placeholder: _vm.trans("finance.gateway_handling_fee", {
        gateway: "Paypal"
      })
    },
    domProps: {
      value: _vm.configForm.paypal_handling_fee
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "paypal_handling_fee", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_vm.configForm.paypal_fixed_handling_fee ? _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.default_currency.symbol))]) : _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("%")])])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "paypal_handling_fee"
    }
  })], 1)] : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.stripe,
      expression: "configForm.stripe"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "stripe"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.stripe) ? _vm._i(_vm.configForm.stripe, "1") > -1 : _vm.configForm.stripe
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.stripe,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "stripe", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "stripe", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "stripe", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v("Stripe")])])]), _vm._v(" "), _vm.configForm.stripe ? [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.stripe_mode,
      expression: "configForm.stripe_mode"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "stripe_mode"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.stripe_mode) ? _vm._i(_vm.configForm.stripe_mode, "1") > -1 : _vm.configForm.stripe_mode
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.stripe_mode,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "stripe_mode", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "stripe_mode", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "stripe_mode", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v("Stripe Live Mode")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Stripe Publishable Key")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.stripe_publishable_key,
      expression: "configForm.stripe_publishable_key"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "stripe_publishable_key",
      placeholder: "Stripe Publishable Key"
    },
    domProps: {
      value: _vm.configForm.stripe_publishable_key
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "stripe_publishable_key", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "stripe_publishable_key"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Stripe Private Key")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.stripe_private_key,
      expression: "configForm.stripe_private_key"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "stripe_private_key",
      placeholder: "Stripe Private Key"
    },
    domProps: {
      value: _vm.configForm.stripe_private_key
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "stripe_private_key", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "stripe_private_key"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.stripe_charge_handling_fee,
      expression: "configForm.stripe_charge_handling_fee"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "stripe_charge_handling_fee"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.stripe_charge_handling_fee) ? _vm._i(_vm.configForm.stripe_charge_handling_fee, "1") > -1 : _vm.configForm.stripe_charge_handling_fee
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.stripe_charge_handling_fee,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "stripe_charge_handling_fee", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "stripe_charge_handling_fee", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "stripe_charge_handling_fee", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("finance.charge_gateway_handling_fee")))])])]), _vm._v(" "), _vm.configForm.stripe_charge_handling_fee ? [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.stripe_fixed_handling_fee,
      expression: "configForm.stripe_fixed_handling_fee"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "stripe_fixed_handling_fee"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.stripe_fixed_handling_fee) ? _vm._i(_vm.configForm.stripe_fixed_handling_fee, "1") > -1 : _vm.configForm.stripe_fixed_handling_fee
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.stripe_fixed_handling_fee,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "stripe_fixed_handling_fee", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "stripe_fixed_handling_fee", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "stripe_fixed_handling_fee", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("finance.fixed_gateway_handling_fee")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.gateway_handling_fee", {
    gateway: "Stripe"
  })))]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.stripe_handling_fee,
      expression: "configForm.stripe_handling_fee"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "stripe_handling_fee",
      placeholder: _vm.trans("finance.gateway_handling_fee", {
        gateway: "Stripe"
      })
    },
    domProps: {
      value: _vm.configForm.stripe_handling_fee
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "stripe_handling_fee", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_vm.configForm.stripe_fixed_handling_fee ? _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.default_currency.symbol))]) : _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("%")])])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "stripe_handling_fee"
    }
  })], 1)] : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.razorpay,
      expression: "configForm.razorpay"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "razorpay"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.razorpay) ? _vm._i(_vm.configForm.razorpay, "1") > -1 : _vm.configForm.razorpay
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.razorpay,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "razorpay", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "razorpay", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "razorpay", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v("Razorpay")])])]), _vm._v(" "), _vm.configForm.razorpay ? [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.razorpay_mode,
      expression: "configForm.razorpay_mode"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "razorpay_mode"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.razorpay_mode) ? _vm._i(_vm.configForm.razorpay_mode, "1") > -1 : _vm.configForm.razorpay_mode
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.razorpay_mode,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "razorpay_mode", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "razorpay_mode", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "razorpay_mode", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v("Razorpay Live Mode")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Razorpay Key")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.razorpay_key,
      expression: "configForm.razorpay_key"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "razorpay_key",
      placeholder: "Razorpay Key"
    },
    domProps: {
      value: _vm.configForm.razorpay_key
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "razorpay_key", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "razorpay_key"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Razorpay Secret")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.razorpay_secret,
      expression: "configForm.razorpay_secret"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "razorpay_secret",
      placeholder: "Razorpay Secret"
    },
    domProps: {
      value: _vm.configForm.razorpay_secret
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "razorpay_secret", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "razorpay_secret"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.razorpay_charge_handling_fee,
      expression: "configForm.razorpay_charge_handling_fee"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "razorpay_charge_handling_fee"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.razorpay_charge_handling_fee) ? _vm._i(_vm.configForm.razorpay_charge_handling_fee, "1") > -1 : _vm.configForm.razorpay_charge_handling_fee
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.razorpay_charge_handling_fee,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "razorpay_charge_handling_fee", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "razorpay_charge_handling_fee", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "razorpay_charge_handling_fee", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("finance.charge_gateway_handling_fee")))])])]), _vm._v(" "), _vm.configForm.razorpay_charge_handling_fee ? [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.razorpay_fixed_handling_fee,
      expression: "configForm.razorpay_fixed_handling_fee"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "razorpay_fixed_handling_fee"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.razorpay_fixed_handling_fee) ? _vm._i(_vm.configForm.razorpay_fixed_handling_fee, "1") > -1 : _vm.configForm.razorpay_fixed_handling_fee
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.razorpay_fixed_handling_fee,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "razorpay_fixed_handling_fee", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "razorpay_fixed_handling_fee", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "razorpay_fixed_handling_fee", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("finance.fixed_gateway_handling_fee")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.gateway_handling_fee", {
    gateway: "Razorpay"
  })))]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.razorpay_handling_fee,
      expression: "configForm.razorpay_handling_fee"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "razorpay_handling_fee",
      placeholder: _vm.trans("finance.gateway_handling_fee", {
        gateway: "Razorpay"
      })
    },
    domProps: {
      value: _vm.configForm.razorpay_handling_fee
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "razorpay_handling_fee", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_vm.configForm.razorpay_fixed_handling_fee ? _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.default_currency.symbol))]) : _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("%")])])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "razorpay_handling_fee"
    }
  })], 1)] : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paystack,
      expression: "configForm.paystack"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "paystack"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.paystack) ? _vm._i(_vm.configForm.paystack, "1") > -1 : _vm.configForm.paystack
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.paystack,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "paystack", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "paystack", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "paystack", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v("Paystack")])])]), _vm._v(" "), _vm.configForm.paystack ? [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paystack_mode,
      expression: "configForm.paystack_mode"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "paystack_mode"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.paystack_mode) ? _vm._i(_vm.configForm.paystack_mode, "1") > -1 : _vm.configForm.paystack_mode
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.paystack_mode,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "paystack_mode", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "paystack_mode", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "paystack_mode", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v("Paystack Live Mode")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Paystack Publishable Key")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paystack_public_key,
      expression: "configForm.paystack_public_key"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "paystack_public_key",
      placeholder: "Paystack Public Key"
    },
    domProps: {
      value: _vm.configForm.paystack_public_key
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "paystack_public_key", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "paystack_public_key"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Paystack Secret Key")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paystack_secret_key,
      expression: "configForm.paystack_secret_key"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "paystack_secret_key",
      placeholder: "Paystack Secret Key"
    },
    domProps: {
      value: _vm.configForm.paystack_secret_key
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "paystack_secret_key", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "paystack_secret_key"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paystack_charge_handling_fee,
      expression: "configForm.paystack_charge_handling_fee"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "paystack_charge_handling_fee"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.paystack_charge_handling_fee) ? _vm._i(_vm.configForm.paystack_charge_handling_fee, "1") > -1 : _vm.configForm.paystack_charge_handling_fee
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.paystack_charge_handling_fee,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "paystack_charge_handling_fee", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "paystack_charge_handling_fee", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "paystack_charge_handling_fee", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("finance.charge_gateway_handling_fee")))])])]), _vm._v(" "), _vm.configForm.paystack_charge_handling_fee ? [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paystack_fixed_handling_fee,
      expression: "configForm.paystack_fixed_handling_fee"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "paystack_fixed_handling_fee"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.paystack_fixed_handling_fee) ? _vm._i(_vm.configForm.paystack_fixed_handling_fee, "1") > -1 : _vm.configForm.paystack_fixed_handling_fee
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.paystack_fixed_handling_fee,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "paystack_fixed_handling_fee", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "paystack_fixed_handling_fee", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "paystack_fixed_handling_fee", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("finance.fixed_gateway_handling_fee")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.gateway_handling_fee", {
    gateway: "Paystack"
  })))]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.paystack_handling_fee,
      expression: "configForm.paystack_handling_fee"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "paystack_handling_fee",
      placeholder: _vm.trans("finance.gateway_handling_fee", {
        gateway: "Paystack"
      })
    },
    domProps: {
      value: _vm.configForm.paystack_handling_fee
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "paystack_handling_fee", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_vm.configForm.paystack_fixed_handling_fee ? _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.default_currency.symbol))]) : _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("%")])])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "paystack_handling_fee"
    }
  })], 1)] : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.billdesk,
      expression: "configForm.billdesk"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "billdesk"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.billdesk) ? _vm._i(_vm.configForm.billdesk, "1") > -1 : _vm.configForm.billdesk
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.billdesk,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "billdesk", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "billdesk", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "billdesk", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v("Billdesk")])])]), _vm._v(" "), _vm.configForm.billdesk ? [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.billdesk_mode,
      expression: "configForm.billdesk_mode"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "billdesk_mode"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.billdesk_mode) ? _vm._i(_vm.configForm.billdesk_mode, "1") > -1 : _vm.configForm.billdesk_mode
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.billdesk_mode,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "billdesk_mode", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "billdesk_mode", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "billdesk_mode", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v("Billdesk Live Mode")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Billdesk Merchant ID")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.billdesk_merchant_id,
      expression: "configForm.billdesk_merchant_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "billdesk_merchant_id",
      placeholder: "Billdesk Merchant ID"
    },
    domProps: {
      value: _vm.configForm.billdesk_merchant_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "billdesk_merchant_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "billdesk_merchant_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Billdesk Security ID")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.billdesk_security_id,
      expression: "configForm.billdesk_security_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "billdesk_security_id",
      placeholder: "Billdesk Security ID"
    },
    domProps: {
      value: _vm.configForm.billdesk_security_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "billdesk_security_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "billdesk_security_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Billdesk Checksum Key")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.billdesk_checksum_key,
      expression: "configForm.billdesk_checksum_key"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "billdesk_checksum_key",
      placeholder: "Billdesk Checksum Key"
    },
    domProps: {
      value: _vm.configForm.billdesk_checksum_key
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "billdesk_checksum_key", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "billdesk_checksum_key"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Billdesk Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.billdesk_email,
      expression: "configForm.billdesk_email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "billdesk_email",
      placeholder: "Billdesk Email"
    },
    domProps: {
      value: _vm.configForm.billdesk_email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "billdesk_email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "billdesk_email"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Billdesk Phone")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.billdesk_phone,
      expression: "configForm.billdesk_phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "billdesk_phone",
      placeholder: "Billdesk Phone"
    },
    domProps: {
      value: _vm.configForm.billdesk_phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "billdesk_phone", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "billdesk_phone"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.billdesk_charge_handling_fee,
      expression: "configForm.billdesk_charge_handling_fee"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "billdesk_charge_handling_fee"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.billdesk_charge_handling_fee) ? _vm._i(_vm.configForm.billdesk_charge_handling_fee, "1") > -1 : _vm.configForm.billdesk_charge_handling_fee
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.billdesk_charge_handling_fee,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "billdesk_charge_handling_fee", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "billdesk_charge_handling_fee", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "billdesk_charge_handling_fee", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("finance.charge_gateway_handling_fee")))])])]), _vm._v(" "), _vm.configForm.billdesk_charge_handling_fee ? [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.billdesk_fixed_handling_fee,
      expression: "configForm.billdesk_fixed_handling_fee"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      value: "1",
      name: "billdesk_fixed_handling_fee"
    },
    domProps: {
      checked: Array.isArray(_vm.configForm.billdesk_fixed_handling_fee) ? _vm._i(_vm.configForm.billdesk_fixed_handling_fee, "1") > -1 : _vm.configForm.billdesk_fixed_handling_fee
    },
    on: {
      change: function change($event) {
        var $$a = _vm.configForm.billdesk_fixed_handling_fee,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.configForm, "billdesk_fixed_handling_fee", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.configForm, "billdesk_fixed_handling_fee", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.configForm, "billdesk_fixed_handling_fee", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "custom-control-label"
  }, [_vm._v(_vm._s(_vm.trans("finance.fixed_gateway_handling_fee")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("finance.gateway_handling_fee", {
    gateway: "Billdesk"
  })))]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.billdesk_handling_fee,
      expression: "configForm.billdesk_handling_fee"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: "",
      name: "billdesk_handling_fee",
      placeholder: _vm.trans("finance.gateway_handling_fee", {
        gateway: "Billdesk"
      })
    },
    domProps: {
      value: _vm.configForm.billdesk_handling_fee
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "billdesk_handling_fee", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_vm.configForm.billdesk_fixed_handling_fee ? _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.default_currency.symbol))]) : _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("%")])])]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "billdesk_handling_fee"
    }
  })], 1)] : _vm._e()] : _vm._e()], 2)]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-info waves-effect waves-light pull-right m-t-10",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/configuration/payment-gateway/index.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/configuration/payment-gateway/index.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1e92e290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1e92e290& */ "./resources/js/views/configuration/payment-gateway/index.vue?vue&type=template&id=1e92e290&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/payment-gateway/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1e92e290___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1e92e290___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/payment-gateway/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/payment-gateway/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/configuration/payment-gateway/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/payment-gateway/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/payment-gateway/index.vue?vue&type=template&id=1e92e290&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/configuration/payment-gateway/index.vue?vue&type=template&id=1e92e290& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e92e290___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e92e290___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e92e290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1e92e290& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/payment-gateway/index.vue?vue&type=template&id=1e92e290&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=9cc8c767730b4b7a