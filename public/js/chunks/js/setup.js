"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/setup"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/session/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/session/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    setupWizard: {
      "default": false
    },
    id: ''
  },
  components: {},
  data: function data() {
    return {
      academicSessionForm: new Form({
        name: '',
        description: '',
        start_date: '',
        end_date: '',
        transfer_certificate_format: '',
        is_default: 0,
        exam_report_analysis: false,
        exam_report_analysis_staff_token: '',
        exam_report_analysis_student_token: ''
      }),
      transfer_certificate_formats: [],
      selected_transfer_certificate_format: null
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('create-academic-session') && !helper.hasPermission('edit-academic-session')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getPreRequisite();
  },
  methods: {
    proceed: function proceed() {
      if (this.id) this.update();else this.store();
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/academic/session/pre-requisite').then(function (response) {
        _this.transfer_certificate_formats = response.transfer_certificate_formats;
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
      this.academicSessionForm.post('/api/academic/session').then(function (response) {
        _this2.$store.dispatch('setAcademicSession', response.academic_sessions);
        toastr.success(response.message);
        _this2.$emit('completed');
        loader.hide();
        if (_this2.setupWizard) _this2.$router.push('/dashboard');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    get: function get() {
      var _this3 = this;
      var loader = this.$loading.show();
      axios.get('/api/academic/session/' + this.id).then(function (response) {
        _this3.academicSessionForm.name = response.name;
        _this3.academicSessionForm.description = response.description;
        _this3.academicSessionForm.start_date = response.start_date;
        _this3.academicSessionForm.end_date = response.end_date;
        _this3.academicSessionForm.is_default = response.is_default;
        var transfer_certificate_format_id = response.options && response.options.hasOwnProperty("transfer_certificate_format") ? response.options.transfer_certificate_format : null;
        var transfer_certificate_format = _this3.transfer_certificate_formats.find(function (o) {
          return o.id == transfer_certificate_format_id;
        });
        _this3.academicSessionForm.transfer_certificate_format = transfer_certificate_format_id;
        _this3.selected_transfer_certificate_format = transfer_certificate_format || null;
        _this3.academicSessionForm.exam_report_analysis = response.exam_report_analysis;
        _this3.academicSessionForm.exam_report_analysis_staff_token = response.exam_report_analysis_staff_token;
        _this3.academicSessionForm.exam_report_analysis_student_token = response.exam_report_analysis_student_token;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        _this3.$router.push('/academic/session');
      });
    },
    update: function update() {
      var _this4 = this;
      var loader = this.$loading.show();
      this.academicSessionForm.patch('/api/academic/session/' + this.id).then(function (response) {
        _this4.$store.dispatch('setConfig', {
          loaded: false
        });
        toastr.success(response.message);
        loader.hide();
        _this4.$router.push('/academic/session');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onTransferCertificateFormatSelect: function onTransferCertificateFormatSelect(selectedOption) {
      return this.academicSessionForm.transfer_certificate_format = selectedOption.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/basic/form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/basic/form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    setupWizard: {
      "default": false
    },
    configurations: {
      required: false
    }
  },
  components: {},
  data: function data() {
    return {
      configForm: new Form({
        institute_name: '',
        institute_running_body: '',
        institute_recognition_number: '',
        institute_recognition_body: '',
        institute_foundation_date: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
        fax: '',
        email: '',
        website: '',
        config_type: ''
      }, false),
      icon: '',
      logo: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.icon = helper.getConfig('icon');
    this.logo = helper.getConfig('logo');
    if (!this.setupWizard) this.getConfiguration();
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
      this.configForm.config_type = 'basic';
      return this.configForm.post('/api/configuration').then(function (response) {
        _this2.$store.dispatch('setConfig', {
          loaded: false
        });
        toastr.success(response.message);
        loader.hide();
        return true;
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        return false;
      });
    },
    updateLogo: function updateLogo(val) {
      this.$store.dispatch('setConfig', {
        logo: val
      });
    },
    updateIcon: function updateIcon(val) {
      this.$store.dispatch('setConfig', {
        icon: val
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
    configurations: function configurations(val) {
      if (val) helper.formAssign(this.configForm, val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/mail/form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/mail/form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    setupWizard: {
      "default": false
    },
    configurations: {
      required: false
    }
  },
  components: {},
  data: function data() {
    return {
      configForm: new Form({
        driver: '',
        from_name: '',
        from_address: '',
        smtp_host: '',
        smtp_port: '',
        smtp_username: '',
        smtp_password: '',
        smtp_encryption: '',
        mailgun_host: '',
        mailgun_port: '',
        mailgun_username: '',
        mailgun_password: '',
        mailgun_encryption: '',
        mailgun_domain: '',
        mailgun_secret: '',
        mandrill_secret: '',
        config_type: ''
      }, false),
      mail_drivers: [],
      encryptions: [{
        text: 'SSL',
        value: 'ssl'
      }, {
        text: 'TLS',
        value: 'tls'
      }]
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getPreRequisite();
    if (!this.setupWizard) this.getConfiguration();
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/configuration/variable?type=mail').then(function (response) {
        _this.mail_drivers = response.mail_drivers;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getConfiguration: function getConfiguration() {
      var _this2 = this;
      var loader = this.$loading.show();
      axios.get('/api/configuration').then(function (response) {
        _this2.configForm = helper.formAssign(_this2.configForm, response);
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    submit: function submit() {
      var _this3 = this;
      var loader = this.$loading.show();
      this.configForm.config_type = 'mail';
      return this.configForm.post('/api/configuration').then(function (response) {
        _this3.$store.dispatch('setConfig', {
          loaded: false
        });
        toastr.success(response.message);
        loader.hide();
        return true;
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        return false;
      });
    }
  },
  watch: {
    configurations: function configurations(val) {
      if (val) helper.formAssign(this.configForm, val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/menu/form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/menu/form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    setupWizard: {
      "default": false
    },
    configurations: {
      required: false
    }
  },
  components: {},
  data: function data() {
    return {
      configForm: new Form({
        config_type: 'menu',
        modules: []
      }, false),
      menus: [],
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/home');
    }
    this.getPreRequisite();

    // if(!this.setupWizard)
    //     this.getConfiguration();
  },

  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/configuration/variable?type=menu').then(function (response) {
        _this.configForm.modules = response.modules;
        _this.menus = response.menus;
        _this.configForm.modules.forEach(function (module) {
          if (response.menus.findIndex(function (o) {
            return o === module.menu.name;
          }) >= 0) {
            module.menu.visibility = true;
          } else {
            module.menu.visibility = false;
          }
          module.menu.submenu.forEach(function (sbmenu) {
            if (response.menus.findIndex(function (o) {
              return o === sbmenu.name;
            }) >= 0) {
              sbmenu.visibility = true;
            } else {
              sbmenu.visibility = false;
            }
          });
        });
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getMenuName: function getMenuName(name) {
      return 'show_' + name + '_menu';
    },
    updateSubMenu: function updateSubMenu(menu) {
      if (!menu.visibility) {
        menu.submenu.forEach(function (sbmenu) {
          sbmenu.visibility = false;
        });
      } else {
        menu.submenu.forEach(function (sbmenu) {
          sbmenu.visibility = true;
        });
      }
    },
    submit: function submit() {
      var _this2 = this;
      var loader = this.$loading.show();
      return this.configForm.post('/api/configuration').then(function (response) {
        loader.hide();
        _this2.$store.dispatch('setConfig', {
          loaded: false
        });
        toastr.success(response.message);
        return true;
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        return false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    setupWizard: {
      "default": false
    },
    configurations: {
      required: false
    }
  },
  components: {},
  data: function data() {
    return {
      configForm: new Form({
        color_theme: '',
        direction: '',
        sidebar: '',
        date_format: '',
        time_format: '',
        notification_position: '',
        timezone: '',
        first_day_of_week: '',
        page_length: 10,
        locale: '',
        currency: '',
        footer_credit: '',
        biometric_auth_token: '',
        pusher_auth_token: '',
        https: 0,
        error_display: 0,
        frontend_website: 0,
        online_registration: 0,
        multilingual: 0,
        ip_filter: 0,
        email_log: 0,
        email_template: 0,
        todo: 0,
        backup: 0,
        maintenance_mode: 0,
        maintenance_mode_message: '',
        online_registration_header: '',
        online_registration_success_message: '',
        config_type: ''
      }, false),
      systemConfigVariables: {
        color_themes: [],
        directions: [],
        sidebar: [],
        date_formats: [],
        time_formats: [],
        notification_positions: [],
        timezones: [],
        locales: [],
        currencies: [],
        days: []
      },
      direction: '',
      locale: '',
      sidebar: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getPreRequisite();
    if (!this.setupWizard) this.getConfiguration();
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/configuration/variable?type=system').then(function (response) {
        _this.systemConfigVariables.color_themes = response.color_themes;
        _this.systemConfigVariables.directions = response.directions;
        _this.systemConfigVariables.currencies = response.currencies;
        _this.systemConfigVariables.sidebar = response.sidebar;
        _this.systemConfigVariables.date_formats = response.date_formats;
        _this.systemConfigVariables.time_formats = response.time_formats;
        _this.systemConfigVariables.days = response.days;
        _this.systemConfigVariables.notification_positions = response.notification_positions;
        _this.systemConfigVariables.timezones = response.timezones;
        _this.systemConfigVariables.locales = response.locales;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getConfiguration: function getConfiguration() {
      var _this2 = this;
      var loader = this.$loading.show();
      axios.get('/api/configuration').then(function (response) {
        _this2.configForm = helper.formAssign(_this2.configForm, response);
        _this2.direction = response.direction;
        _this2.locale = response.locale;
        _this2.sidebar = response.sidebar;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    submit: function submit() {
      var _this3 = this;
      var loader = this.$loading.show();
      this.configForm.config_type = 'system';
      this.configForm.https = this.configForm.https ? 1 : 0;
      this.configForm.error_display = this.configForm.error_display ? 1 : 0;
      this.configForm.frontend_website = this.configForm.frontend_website ? 1 : 0;
      this.configForm.online_registration = this.configForm.online_registration ? 1 : 0;
      this.configForm.multilingual = this.configForm.multilingual ? 1 : 0;
      this.configForm.ip_filter = this.configForm.ip_filter ? 1 : 0;
      this.configForm.email_log = this.configForm.email_log ? 1 : 0;
      this.configForm.email_template = this.configForm.email_template ? 1 : 0;
      this.configForm.todo = this.configForm.todo ? 1 : 0;
      this.configForm.backup = this.configForm.backup ? 1 : 0;
      this.configForm.maintenance_mode = this.configForm.maintenance_mode ? 1 : 0;
      return this.configForm.post('/api/configuration').then(function (response) {
        _this3.$store.dispatch('setConfig', {
          loaded: false
        });
        toastr.success(response.message);
        loader.hide();
        return true;
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        return false;
      });
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    }
  },
  watch: {
    configurations: function configurations(val) {
      if (val) helper.formAssign(this.configForm, val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setup/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setup/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _configuration_basic_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configuration/basic/form */ "./resources/js/views/configuration/basic/form.vue");
/* harmony import */ var _configuration_system_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration/system/form */ "./resources/js/views/configuration/system/form.vue");
/* harmony import */ var _configuration_mail_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration/mail/form */ "./resources/js/views/configuration/mail/form.vue");
/* harmony import */ var _configuration_menu_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration/menu/form */ "./resources/js/views/configuration/menu/form.vue");
/* harmony import */ var _academic_session_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../academic/session/form */ "./resources/js/views/academic/session/form.vue");
var _components$methods$d;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components$methods$d = {
  components: {
    basicConfigurationForm: _configuration_basic_form__WEBPACK_IMPORTED_MODULE_0__["default"],
    systemConfigurationForm: _configuration_system_form__WEBPACK_IMPORTED_MODULE_1__["default"],
    mailConfigurationForm: _configuration_mail_form__WEBPACK_IMPORTED_MODULE_2__["default"],
    academicSessionForm: _academic_session_form__WEBPACK_IMPORTED_MODULE_4__["default"],
    menuConfigurationForm: _configuration_menu_form__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {},
  data: function data() {
    return {
      configurations: []
    };
  },
  mounted: function mounted() {
    if (this.$route.query.reload) window.location = window.location.pathname;
    if (!helper.hasRole('admin') || !helper.getConfig('setup_wizard')) this.$router.push('/dashboard');
    this.getConfiguration();
  }
}, _defineProperty(_components$methods$d, "methods", {
  getConfiguration: function getConfiguration() {
    var _this = this;
    var loader = this.$loading.show();
    axios.get('/api/configuration').then(function (response) {
      _this.configurations = response;
      loader.hide();
    })["catch"](function (error) {
      loader.hide();
      helper.showErrorMsg(error);
    });
  },
  hideSetupWizard: function hideSetupWizard() {
    var _this2 = this;
    var loader = this.$loading.show();
    axios.post('/api/setup/wizard', {
      action: 'hide'
    }).then(function (response) {
      loader.hide();
      _this2.$router.push('/dashboard');
    })["catch"](function (error) {
      loader.hide();
      helper.showErrorMsg(error);
    });
  },
  storeBasicConfiguration: function storeBasicConfiguration() {
    return this.$refs.basic.submit();
  },
  storeSystemConfiguration: function storeSystemConfiguration() {
    return this.$refs.system.submit();
  },
  storeMailConfiguration: function storeMailConfiguration() {
    return this.$refs.mail.submit();
  },
  storeMenuConfiguration: function storeMenuConfiguration() {
    return this.$refs.menu.submit();
  },
  finish: function finish() {
    this.$refs.session.store();
  }
}), _defineProperty(_components$methods$d, "watch", {}), _components$methods$d);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/session/form.vue?vue&type=template&id=0fd33ab6&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/session/form.vue?vue&type=template&id=0fd33ab6& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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
        return _vm.academicSessionForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("academic.session_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.academicSessionForm.name,
      expression: "academicSessionForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: _vm.trans("academic.session_name")
    },
    domProps: {
      value: _vm.academicSessionForm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.academicSessionForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.academicSessionForm,
      "prop-name": "name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.session_start_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("academic.session_start_date"),
      disabled: _vm.id ? true : false
    },
    on: {
      selected: function selected($event) {
        return _vm.academicSessionForm.errors.clear("start_date");
      }
    },
    model: {
      value: _vm.academicSessionForm.start_date,
      callback: function callback($$v) {
        _vm.$set(_vm.academicSessionForm, "start_date", $$v);
      },
      expression: "academicSessionForm.start_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.academicSessionForm,
      "prop-name": "start_date"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.session_end_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("academic.session_end_date"),
      disabled: _vm.id ? true : false
    },
    on: {
      selected: function selected($event) {
        return _vm.academicSessionForm.errors.clear("end_date");
      }
    },
    model: {
      value: _vm.academicSessionForm.end_date,
      callback: function callback($$v) {
        _vm.$set(_vm.academicSessionForm, "end_date", $$v);
      },
      expression: "academicSessionForm.end_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.academicSessionForm,
      "prop-name": "end_date"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.session_description")))]), _vm._v(" "), _c("autosize-textarea", {
    attrs: {
      rows: "1",
      name: "description",
      placeholder: _vm.trans("academic.session_description")
    },
    model: {
      value: _vm.academicSessionForm.description,
      callback: function callback($$v) {
        _vm.$set(_vm.academicSessionForm, "description", $$v);
      },
      expression: "academicSessionForm.description"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.academicSessionForm,
      "prop-name": "description"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.transfer_certificate_format")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "name",
      name: "transfer_certificate_format",
      id: "transfer_certificate_format",
      options: _vm.transfer_certificate_formats,
      placeholder: _vm.trans("academic.select_transfer_certificate_format")
    },
    on: {
      select: _vm.onTransferCertificateFormatSelect,
      close: function close($event) {
        return _vm.academicSessionForm.errors.clear("transfer_certificate_format");
      },
      remove: function remove($event) {
        _vm.academicSessionForm.transfer_certificate_format = "";
      }
    },
    model: {
      value: _vm.selected_transfer_certificate_format,
      callback: function callback($$v) {
        _vm.selected_transfer_certificate_format = $$v;
      },
      expression: "selected_transfer_certificate_format"
    }
  }, [!_vm.transfer_certificate_formats.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n                        " + _vm._s(_vm.trans("general.no_option_found")) + "\n                    ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.academicSessionForm,
      "prop-name": "transfer_certificate_format"
    }
  })], 1)])]), _vm._v(" "), !_vm.setupWizard ? [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("switches", {
    staticClass: "m-l-20",
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.academicSessionForm.is_default,
      callback: function callback($$v) {
        _vm.$set(_vm.academicSessionForm, "is_default", $$v);
      },
      expression: "academicSessionForm.is_default"
    }
  }), _vm._v(" " + _vm._s(_vm.trans("academic.session_is_default")) + "\n                ")], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("switches", {
    staticClass: "m-l-20",
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.academicSessionForm.exam_report_analysis,
      callback: function callback($$v) {
        _vm.$set(_vm.academicSessionForm, "exam_report_analysis", $$v);
      },
      expression: "academicSessionForm.exam_report_analysis"
    }
  }), _vm._v(" " + _vm._s(_vm.trans("exam.exam_report_analysis")) + "\n                ")], 1)]), _vm._v(" "), _vm.academicSessionForm.exam_report_analysis ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.exam_report_analysis_student_token")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.academicSessionForm.exam_report_analysis_student_token,
      expression: "academicSessionForm.exam_report_analysis_student_token"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "exam_report_analysis_student_token",
      placeholder: _vm.trans("academic.exam_report_analysis_student_token")
    },
    domProps: {
      value: _vm.academicSessionForm.exam_report_analysis_student_token
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.academicSessionForm, "exam_report_analysis_student_token", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.academicSessionForm,
      "prop-name": "exam_report_analysis_student_token"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.academicSessionForm.exam_report_analysis ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.exam_report_analysis_staff_token")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.academicSessionForm.exam_report_analysis_staff_token,
      expression: "academicSessionForm.exam_report_analysis_staff_token"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "exam_report_analysis_staff_token",
      placeholder: _vm.trans("academic.exam_report_analysis_staff_token")
    },
    domProps: {
      value: _vm.academicSessionForm.exam_report_analysis_staff_token
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.academicSessionForm, "exam_report_analysis_staff_token", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.academicSessionForm,
      "prop-name": "exam_report_analysis_staff_token"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
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
      to: "/academic/session"
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
  }, [_vm.id ? _c("span", [_vm._v(_vm._s(_vm.trans("general.update")))]) : _c("span", [_vm._v(_vm._s(_vm.trans("general.save")))])])], 1)] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/basic/form.vue?vue&type=template&id=20cf2fbd&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/basic/form.vue?vue&type=template&id=20cf2fbd& ***!
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
    staticClass: "row"
  }, [_c("div", {
    "class": ["col-12", !_vm.setupWizard ? "col-sm-7" : "", "p-0", "pl-3"]
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
    staticClass: "col-12 col-sm-8"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.institute_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.institute_name,
      expression: "configForm.institute_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "institute_name",
      placeholder: _vm.trans("configuration.institute_name")
    },
    domProps: {
      value: _vm.configForm.institute_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "institute_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "institute_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.institute_running_body")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.institute_running_body,
      expression: "configForm.institute_running_body"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "institute_running_body",
      placeholder: _vm.trans("configuration.institute_running_body")
    },
    domProps: {
      value: _vm.configForm.institute_running_body
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "institute_running_body", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "institute_running_body"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.institute_foundation_date")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      bootstrapStyling: true,
      placeholder: _vm.trans("configuration.institute_foundation_date")
    },
    on: {
      selected: function selected($event) {
        return _vm.configForm.errors.clear("institute_foundation_date");
      }
    },
    model: {
      value: _vm.configForm.institute_foundation_date,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "institute_foundation_date", $$v);
      },
      expression: "configForm.institute_foundation_date"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "institute_foundation_date"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.institute_recognition_body")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.institute_recognition_body,
      expression: "configForm.institute_recognition_body"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "institute_recognition_body",
      placeholder: _vm.trans("configuration.institute_recognition_body")
    },
    domProps: {
      value: _vm.configForm.institute_recognition_body
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "institute_recognition_body", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "institute_recognition_body"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.institute_recognition_number")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.institute_recognition_number,
      expression: "configForm.institute_recognition_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "institute_recognition_number",
      placeholder: _vm.trans("configuration.institute_recognition_number")
    },
    domProps: {
      value: _vm.configForm.institute_recognition_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "institute_recognition_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "institute_recognition_number"
    }
  })], 1)])]), _vm._v(" "), _c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.trans("configuration.contact_information")))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.address_line_1")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.address_line_1,
      expression: "configForm.address_line_1"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "address_line_1",
      placeholder: _vm.trans("configuration.address_line_1")
    },
    domProps: {
      value: _vm.configForm.address_line_1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "address_line_1", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "address_line_1"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.address_line_2")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.address_line_2,
      expression: "configForm.address_line_2"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "address_line_2",
      placeholder: _vm.trans("configuration.address_line_2")
    },
    domProps: {
      value: _vm.configForm.address_line_2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "address_line_2", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "address_line_2"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.city")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.city,
      expression: "configForm.city"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "city",
      placeholder: _vm.trans("configuration.city")
    },
    domProps: {
      value: _vm.configForm.city
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "city", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "city"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.state")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.state,
      expression: "configForm.state"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "state",
      placeholder: _vm.trans("configuration.state")
    },
    domProps: {
      value: _vm.configForm.state
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "state", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "state"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.zipcode")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.zipcode,
      expression: "configForm.zipcode"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "zipcode",
      placeholder: _vm.trans("configuration.zipcode")
    },
    domProps: {
      value: _vm.configForm.zipcode
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "zipcode", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "zipcode"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.country")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.country,
      expression: "configForm.country"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "country",
      placeholder: _vm.trans("configuration.country")
    },
    domProps: {
      value: _vm.configForm.country
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "country", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "country"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.phone")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.phone,
      expression: "configForm.phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "phone",
      placeholder: _vm.trans("configuration.phone")
    },
    domProps: {
      value: _vm.configForm.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "phone", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "phone"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.fax")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.fax,
      expression: "configForm.fax"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "fax",
      placeholder: _vm.trans("configuration.fax")
    },
    domProps: {
      value: _vm.configForm.fax
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "fax", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "fax"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.email")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.email,
      expression: "configForm.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "email",
      placeholder: _vm.trans("configuration.email")
    },
    domProps: {
      value: _vm.configForm.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "email"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.website")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.website,
      expression: "configForm.website"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "website",
      placeholder: _vm.trans("configuration.website")
    },
    domProps: {
      value: _vm.configForm.website
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "website", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "website"
    }
  })], 1)])]), _vm._v(" "), !_vm.setupWizard ? _c("button", {
    staticClass: "btn btn-info waves-effect waves-light m-t-10 pull-right",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))]) : _vm._e()])])])]), _vm._v(" "), !_vm.setupWizard ? _c("div", {
    staticClass: "col-12 col-sm-5 hidden-sm-down p-0 pr-3"
  }, [_c("div", {
    staticClass: "card border-left"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("upload-image", {
    attrs: {
      id: "logo",
      "button-text": _vm.trans("general.choose_logo"),
      "upload-path": "/configuration/logo",
      "remove-path": "/configuration/logo/remove",
      "image-source": _vm.logo
    },
    on: {
      uploaded: _vm.updateLogo,
      removed: _vm.updateLogo
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("upload-image", {
    attrs: {
      id: "icon",
      "button-text": _vm.trans("general.choose_icon"),
      "upload-path": "/configuration/icon",
      "remove-path": "/configuration/icon/remove",
      "image-source": _vm.icon
    },
    on: {
      uploaded: _vm.updateIcon,
      removed: _vm.updateIcon
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm custom-show-table"
  }, [_c("tbody", _vm._l(_vm.configForm, function (config, key) {
    return key != "config_type" && key != "errors" && key != "originalData" && key != "autoReset" ? _c("tr", [_c("td", [_vm._v(_vm._s(_vm.trans("configuration." + key)))]), _vm._v(" "), _c("td", [key == "institute_foundation_date" ? _c("span", [_vm._v(_vm._s(_vm._f("moment")(_vm.configForm[key])))]) : _c("span", [_vm._v(_vm._s(_vm.configForm[key]))])])]) : _vm._e();
  }), 0)])])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/mail/form.vue?vue&type=template&id=a9825dd8&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/mail/form.vue?vue&type=template&id=a9825dd8& ***!
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
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
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
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mail_driver")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.driver,
      expression: "configForm.driver"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "driver"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "driver", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("driver");
      }]
    }
  }, _vm._l(_vm.mail_drivers, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "driver"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mail_from_name")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.from_name,
      expression: "configForm.from_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "from_name",
      placeholder: _vm.trans("configuration.mail_from_name")
    },
    domProps: {
      value: _vm.configForm.from_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "from_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "from_name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mail_from_address")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.from_address,
      expression: "configForm.from_address"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "from_address",
      placeholder: _vm.trans("configuration.mail_from_address")
    },
    domProps: {
      value: _vm.configForm.from_address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "from_address", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "from_address"
    }
  })], 1)])]), _vm._v(" "), !_vm.setupWizard ? _c("button", {
    staticClass: "btn btn-info waves-effect waves-light m-t-10",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-8"
  }, [_vm.configForm.driver === "mailgun" ? _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mailgun_domain")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.mailgun_domain,
      expression: "configForm.mailgun_domain"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "mailgun_domain",
      placeholder: _vm.trans("configuration.mailgun_domain")
    },
    domProps: {
      value: _vm.configForm.mailgun_domain
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "mailgun_domain", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "mailgun_domain"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mailgun_secret")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.mailgun_secret,
      expression: "configForm.mailgun_secret"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "mailgun_secret",
      placeholder: _vm.trans("configuration.mailgun_secret")
    },
    domProps: {
      value: _vm.configForm.mailgun_secret
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "mailgun_secret", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "mailgun_secret"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.configForm.driver === "mandrill" ? _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mandrill_secret")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.mandrill_secret,
      expression: "configForm.mandrill_secret"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "mandrill_secret",
      placeholder: _vm.trans("configuration.mandrill_secret")
    },
    domProps: {
      value: _vm.configForm.mandrill_secret
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "mandrill_secret", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "mandrill_secret"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.configForm.driver === "smtp" ? _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.smtp_host")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.smtp_host,
      expression: "configForm.smtp_host"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "smtp_host",
      placeholder: _vm.trans("configuration.smtp_host")
    },
    domProps: {
      value: _vm.configForm.smtp_host
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "smtp_host", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "smtp_host"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.smtp_port")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.smtp_port,
      expression: "configForm.smtp_port"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "smtp_port",
      placeholder: _vm.trans("configuration.smtp_port")
    },
    domProps: {
      value: _vm.configForm.smtp_port
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "smtp_port", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "smtp_port"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.smtp_username")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.smtp_username,
      expression: "configForm.smtp_username"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "smtp_username",
      placeholder: _vm.trans("configuration.smtp_username")
    },
    domProps: {
      value: _vm.configForm.smtp_username
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "smtp_username", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "smtp_username"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.smtp_password")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.smtp_password,
      expression: "configForm.smtp_password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "smtp_password",
      placeholder: _vm.trans("configuration.smtp_password")
    },
    domProps: {
      value: _vm.configForm.smtp_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "smtp_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "smtp_password"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.smtp_encryption")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.smtp_encryption,
      expression: "configForm.smtp_encryption"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "smtp_encryption"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "smtp_encryption", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("smtp_encryption");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "null",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.encryptions, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                                " + _vm._s(option.text) + "\n                                              ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "smtp_encryption"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.configForm.driver === "mailgun" ? _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mailgun_host")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.mailgun_host,
      expression: "configForm.mailgun_host"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "mailgun_host",
      placeholder: _vm.trans("configuration.mailgun_host")
    },
    domProps: {
      value: _vm.configForm.mailgun_host
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "mailgun_host", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "mailgun_host"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mailgun_port")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.mailgun_port,
      expression: "configForm.mailgun_port"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "mailgun_port",
      placeholder: _vm.trans("configuration.mailgun_port")
    },
    domProps: {
      value: _vm.configForm.mailgun_port
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "mailgun_port", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "mailgun_port"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mailgun_username")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.mailgun_username,
      expression: "configForm.mailgun_username"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "mailgun_username",
      placeholder: _vm.trans("configuration.mailgun_username")
    },
    domProps: {
      value: _vm.configForm.mailgun_username
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "mailgun_username", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "mailgun_username"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mailgun_password")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.mailgun_password,
      expression: "configForm.mailgun_password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "mailgun_password",
      placeholder: _vm.trans("configuration.mailgun_password")
    },
    domProps: {
      value: _vm.configForm.mailgun_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "mailgun_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "mailgun_password"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.mailgun_encryption")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.smtp_encryption,
      expression: "configForm.smtp_encryption"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "smtp_encryption"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "smtp_encryption", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("smtp_encryption");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "null",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.encryptions, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                                " + _vm._s(option.text) + "\n                                              ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "mailgun_encryption"
    }
  })], 1)])])]) : _vm._e()])])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/menu/form.vue?vue&type=template&id=4911de6c&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/menu/form.vue?vue&type=template&id=4911de6c& ***!
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
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
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
    staticClass: "col-12 offset-md-1"
  }, [_vm._l(_vm.configForm.modules, function (module) {
    return [_c("h4", {
      staticClass: "card-title"
    }, [_vm._v(_vm._s(_vm.trans(module.translation)))]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      staticClass: "custom-control custom-checkbox"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: module.menu.visibility,
        expression: "module.menu.visibility"
      }],
      staticClass: "custom-control-input",
      attrs: {
        type: "checkbox",
        value: "1",
        name: _vm.getMenuName(module.menu.name)
      },
      domProps: {
        checked: Array.isArray(module.menu.visibility) ? _vm._i(module.menu.visibility, "1") > -1 : module.menu.visibility
      },
      on: {
        change: [function ($event) {
          var $$a = module.menu.visibility,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = "1",
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(module.menu, "visibility", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(module.menu, "visibility", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(module.menu, "visibility", $$c);
          }
        }, function ($event) {
          return _vm.updateSubMenu(module.menu);
        }]
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "custom-control-label"
    }, [_vm._v(_vm._s(_vm.trans(module.menu.translation)))])])]), _vm._v(" "), _vm._l(module.menu.submenu, function (submenu) {
      return _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: module.menu.visibility,
          expression: "module.menu.visibility"
        }],
        staticClass: "form-group",
        staticStyle: {
          "padding-left": "40px"
        }
      }, [_c("label", {
        staticClass: "custom-control custom-checkbox"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: submenu.visibility,
          expression: "submenu.visibility"
        }],
        staticClass: "custom-control-input",
        attrs: {
          type: "checkbox",
          value: "1",
          name: _vm.getMenuName(submenu.name)
        },
        domProps: {
          checked: Array.isArray(submenu.visibility) ? _vm._i(submenu.visibility, "1") > -1 : submenu.visibility
        },
        on: {
          change: function change($event) {
            var $$a = submenu.visibility,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = "1",
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && _vm.$set(submenu, "visibility", $$a.concat([$$v]));
              } else {
                $$i > -1 && _vm.$set(submenu, "visibility", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(submenu, "visibility", $$c);
            }
          }
        }
      }), _vm._v(" "), _c("span", {
        staticClass: "custom-control-label"
      }, [_vm._v(_vm._s(_vm.trans(submenu.translation)))])])]);
    })];
  })], 2)]), _vm._v(" "), !_vm.setupWizard ? _c("button", {
    staticClass: "btn btn-info waves-effect waves-light pull-right m-t-10",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))]) : _vm._e()])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8& ***!
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
  return _c("div", {
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
    staticClass: "col-12 col-sm-6"
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
  }, [_vm._v(_vm._s(_vm.trans("configuration.default_color_theme")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.color_theme,
      expression: "configForm.color_theme"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "color_theme"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "color_theme", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("color_theme");
      }]
    }
  }, _vm._l(_vm.systemConfigVariables.color_themes, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "color_theme"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.default_direction")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.direction,
      expression: "configForm.direction"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "direction"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "direction", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("direction");
      }]
    }
  }, _vm._l(_vm.systemConfigVariables.directions, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "direction"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.default_sidebar")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.sidebar,
      expression: "configForm.sidebar"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "sidebar"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "sidebar", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("sidebar");
      }]
    }
  }, _vm._l(_vm.systemConfigVariables.sidebar, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "sidebar"
    }
  })], 1)]), _vm._v(" "), _vm.getConfig("multilingual") ? _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.default_locale")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.locale,
      expression: "configForm.locale"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "locale"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "locale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("locale");
      }]
    }
  }, _vm._l(_vm.systemConfigVariables.locales, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "locale"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.date_format")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.date_format,
      expression: "configForm.date_format"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "date_format"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "date_format", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("date_format");
      }]
    }
  }, _vm._l(_vm.systemConfigVariables.date_formats, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "date_format"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.time_format")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.time_format,
      expression: "configForm.time_format"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "time_format"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "time_format", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("time_format");
      }]
    }
  }, _vm._l(_vm.systemConfigVariables.time_formats, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "time_format"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.notification_position")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.notification_position,
      expression: "configForm.notification_position"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "notification_position"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "notification_position", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("notification_position");
      }]
    }
  }, _vm._l(_vm.systemConfigVariables.notification_positions, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "notification_position"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.timezone")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.timezone,
      expression: "configForm.timezone"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "timezone"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "timezone", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("timezone");
      }]
    }
  }, _vm._l(_vm.systemConfigVariables.timezones, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "timezone"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("calendar.first_day_of_week")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.first_day_of_week,
      expression: "configForm.first_day_of_week"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "first_day_of_week"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "first_day_of_week", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("first_day_of_week");
      }]
    }
  }, _vm._l(_vm.systemConfigVariables.days, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "first_day_of_week"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.currency")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.currency,
      expression: "configForm.currency"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "currency"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "currency", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("currency");
      }]
    }
  }, _vm._l(_vm.systemConfigVariables.currencies, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                                    " + _vm._s(option.text) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "currency"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.page_length")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.page_length,
      expression: "configForm.page_length"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      name: "page_length"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.configForm, "page_length", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.configForm.errors.clear("page_length");
      }]
    }
  }, _vm._l(_vm.getConfig("pagination"), function (option) {
    return _c("option", {
      domProps: {
        value: option
      }
    }, [_vm._v("\n                                    " + _vm._s(option + " " + _vm.trans("general.per_page")) + "\n                                  ")]);
  }), 0), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "page_length"
    }
  })], 1)]), _vm._v(" "), _vm.getConfig("show_footer_credit") ? _c("div", {
    staticClass: "col-12 col-sm-8"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.footer_credit")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.footer_credit,
      expression: "configForm.footer_credit"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "footer_credit",
      placeholder: _vm.trans("configuration.footer_credit")
    },
    domProps: {
      value: _vm.configForm.footer_credit
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "footer_credit", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "footer_credit"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.biometric_auth_token")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.biometric_auth_token,
      expression: "configForm.biometric_auth_token"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "biometric_auth_token",
      placeholder: _vm.trans("configuration.biometric_auth_token")
    },
    domProps: {
      value: _vm.configForm.biometric_auth_token
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "biometric_auth_token", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "biometric_auth_token"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.pusher_auth_token")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.configForm.pusher_auth_token,
      expression: "configForm.pusher_auth_token"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "pusher_auth_token",
      placeholder: _vm.trans("configuration.pusher_auth_token")
    },
    domProps: {
      value: _vm.configForm.pusher_auth_token
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.configForm, "pusher_auth_token", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "pusher_auth_token"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
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
  }, [_vm._v(_vm._s(_vm.trans("configuration.https")))]), _vm._v(" "), _c("div", [_c("switches", {
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.configForm.https,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "https", $$v);
      },
      expression: "configForm.https"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.error_display")))]), _vm._v(" "), _c("div", [_c("switches", {
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.configForm.error_display,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "error_display", $$v);
      },
      expression: "configForm.error_display"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.multilingual")))]), _vm._v(" "), _c("div", [_c("switches", {
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.configForm.multilingual,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "multilingual", $$v);
      },
      expression: "configForm.multilingual"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("frontend.enable_frontend_website")))]), _vm._v(" "), _c("div", [_c("switches", {
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.configForm.frontend_website,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "frontend_website", $$v);
      },
      expression: "configForm.frontend_website"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.enable_online_registration")))]), _vm._v(" "), _c("div", [_c("switches", {
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.configForm.online_registration,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "online_registration", $$v);
      },
      expression: "configForm.online_registration"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.online_registration_header")))]), _vm._v(" "), _c("autosize-textarea", {
    staticClass: "form-control",
    attrs: {
      row: "1",
      placeholder: _vm.trans("configuration.online_registration_header"),
      rows: "2",
      name: "online_registration_header"
    },
    model: {
      value: _vm.configForm.online_registration_header,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "online_registration_header", $$v);
      },
      expression: "configForm.online_registration_header"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "online_registration_header"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.online_registration_success_message")))]), _vm._v(" "), _c("autosize-textarea", {
    staticClass: "form-control",
    attrs: {
      row: "1",
      placeholder: _vm.trans("configuration.online_registration_success_message"),
      rows: "2",
      name: "online_registration_success_message"
    },
    model: {
      value: _vm.configForm.online_registration_success_message,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "online_registration_success_message", $$v);
      },
      expression: "configForm.online_registration_success_message"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "online_registration_success_message"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("utility.ip_filter")))]), _vm._v(" "), _c("div", [_c("switches", {
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.configForm.ip_filter,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "ip_filter", $$v);
      },
      expression: "configForm.ip_filter"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("utility.todo")))]), _vm._v(" "), _c("div", [_c("switches", {
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.configForm.todo,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "todo", $$v);
      },
      expression: "configForm.todo"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("utility.backup")))]), _vm._v(" "), _c("div", [_c("switches", {
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.configForm.backup,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "backup", $$v);
      },
      expression: "configForm.backup"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.maintenance_mode")))]), _vm._v(" "), _c("div", [_c("switches", {
    attrs: {
      theme: "bootstrap",
      color: "success"
    },
    model: {
      value: _vm.configForm.maintenance_mode,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "maintenance_mode", $$v);
      },
      expression: "configForm.maintenance_mode"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_vm.configForm.maintenance_mode ? _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("configuration.maintenance_mode_message")))]), _vm._v(" "), _c("autosize-textarea", {
    staticClass: "form-control",
    attrs: {
      row: "1",
      placeholder: _vm.trans("configuration.maintenance_mode_message"),
      rows: "1",
      name: "maintenance_mode_message"
    },
    model: {
      value: _vm.configForm.maintenance_mode_message,
      callback: function callback($$v) {
        _vm.$set(_vm.configForm, "maintenance_mode_message", $$v);
      },
      expression: "configForm.maintenance_mode_message"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.configForm,
      "prop-name": "maintenance_mode_message"
    }
  })], 1) : _vm._e()])])])]), _vm._v(" "), !_vm.setupWizard ? _c("button", {
    staticClass: "btn btn-info waves-effect waves-light pull-right m-t-10",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))]) : _vm._e()])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setup/index.vue?vue&type=template&id=90a8c2de&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setup/index.vue?vue&type=template&id=90a8c2de& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("configuration.hide_setup_wizard"),
      expression: "trans('configuration.hide_setup_wizard')"
    }],
    staticClass: "btn btn-danger pull-right m-2",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.hideSetupWizard
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  })]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }), _vm._v(" "), _c("form-wizard", {
    attrs: {
      color: "#55CE63",
      title: _vm.trans("configuration.setup_title"),
      subtitle: _vm.trans("configuration.setup_subtitle"),
      nextButtonText: _vm.trans("configuration.setup_next_button_content"),
      backButtonText: _vm.trans("configuration.setup_previous_button_content"),
      finishButtonText: _vm.trans("configuration.setup_finish_button_content")
    },
    on: {
      "on-complete": _vm.finish
    }
  }, [_c("tab-content", {
    attrs: {
      title: _vm.trans("configuration.basic_configuration"),
      "before-change": _vm.storeBasicConfiguration
    }
  }, [_c("basic-configuration-form", {
    ref: "basic",
    staticClass: "m-b-20",
    attrs: {
      "setup-wizard": true,
      configurations: _vm.configurations
    }
  })], 1), _vm._v(" "), _c("tab-content", {
    attrs: {
      title: _vm.trans("configuration.system_configuration"),
      "before-change": _vm.storeSystemConfiguration
    }
  }, [_c("system-configuration-form", {
    ref: "system",
    staticClass: "m-b-20",
    attrs: {
      "setup-wizard": true,
      configurations: _vm.configurations
    }
  })], 1), _vm._v(" "), _c("tab-content", {
    attrs: {
      title: _vm.trans("configuration.mail_configuration"),
      "before-change": _vm.storeMailConfiguration
    }
  }, [_c("mail-configuration-form", {
    ref: "mail",
    staticClass: "m-b-20",
    attrs: {
      "setup-wizard": true,
      configurations: _vm.configurations
    }
  })], 1), _vm._v(" "), _c("tab-content", {
    attrs: {
      title: _vm.trans("configuration.menu_configuration"),
      "before-change": _vm.storeMenuConfiguration
    }
  }, [_c("menu-configuration-form", {
    ref: "menu",
    staticClass: "m-b-20",
    attrs: {
      "setup-wizard": true,
      configurations: _vm.configurations
    }
  })], 1), _vm._v(" "), _c("tab-content", {
    attrs: {
      title: _vm.trans("academic.academic_session")
    }
  }, [_c("academic-session-form", {
    ref: "session",
    staticClass: "m-b-20",
    attrs: {
      "setup-wizard": true
    }
  })], 1)], 1)], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/academic/session/form.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/academic/session/form.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_0fd33ab6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=0fd33ab6& */ "./resources/js/views/academic/session/form.vue?vue&type=template&id=0fd33ab6&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/academic/session/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_0fd33ab6___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_0fd33ab6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/academic/session/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/basic/form.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/configuration/basic/form.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_20cf2fbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=20cf2fbd& */ "./resources/js/views/configuration/basic/form.vue?vue&type=template&id=20cf2fbd&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/basic/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_20cf2fbd___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_20cf2fbd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/basic/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/mail/form.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/configuration/mail/form.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_a9825dd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=a9825dd8& */ "./resources/js/views/configuration/mail/form.vue?vue&type=template&id=a9825dd8&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/mail/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_a9825dd8___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_a9825dd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/mail/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/menu/form.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/configuration/menu/form.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_4911de6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=4911de6c& */ "./resources/js/views/configuration/menu/form.vue?vue&type=template&id=4911de6c&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/menu/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_4911de6c___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_4911de6c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/menu/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/system/form.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/configuration/system/form.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=9d9258c8& */ "./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/system/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/setup/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/setup/index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_90a8c2de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=90a8c2de& */ "./resources/js/views/setup/index.vue?vue&type=template&id=90a8c2de&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/setup/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_90a8c2de___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_90a8c2de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/setup/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/academic/session/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/academic/session/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/session/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/basic/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/configuration/basic/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/basic/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/mail/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/configuration/mail/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/mail/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/menu/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/configuration/menu/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/menu/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/setup/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/setup/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setup/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/academic/session/form.vue?vue&type=template&id=0fd33ab6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/academic/session/form.vue?vue&type=template&id=0fd33ab6& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_0fd33ab6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_0fd33ab6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_0fd33ab6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=0fd33ab6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/academic/session/form.vue?vue&type=template&id=0fd33ab6&");


/***/ }),

/***/ "./resources/js/views/configuration/basic/form.vue?vue&type=template&id=20cf2fbd&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/configuration/basic/form.vue?vue&type=template&id=20cf2fbd& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_20cf2fbd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_20cf2fbd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_20cf2fbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=20cf2fbd& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/basic/form.vue?vue&type=template&id=20cf2fbd&");


/***/ }),

/***/ "./resources/js/views/configuration/mail/form.vue?vue&type=template&id=a9825dd8&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/configuration/mail/form.vue?vue&type=template&id=a9825dd8& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_a9825dd8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_a9825dd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_a9825dd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=a9825dd8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/mail/form.vue?vue&type=template&id=a9825dd8&");


/***/ }),

/***/ "./resources/js/views/configuration/menu/form.vue?vue&type=template&id=4911de6c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/configuration/menu/form.vue?vue&type=template&id=4911de6c& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_4911de6c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_4911de6c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_4911de6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=4911de6c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/menu/form.vue?vue&type=template&id=4911de6c&");


/***/ }),

/***/ "./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=9d9258c8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8&");


/***/ }),

/***/ "./resources/js/views/setup/index.vue?vue&type=template&id=90a8c2de&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/setup/index.vue?vue&type=template&id=90a8c2de& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_90a8c2de___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_90a8c2de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_90a8c2de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=90a8c2de& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setup/index.vue?vue&type=template&id=90a8c2de&");


/***/ })

}]);
//# sourceMappingURL=setup.js.map?id=a455a465892a6d8b