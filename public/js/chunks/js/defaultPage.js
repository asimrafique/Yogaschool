"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/defaultPage"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _var_modules_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../var/modules.json */ "./resources/var/modules.json");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      searchOverlay: false,
      search: '',
      student_search_results: [],
      employee_search_results: [],
      resultLoading: false,
      timeout: null,
      scrollOptions: {
        vuescroll: {
          mode: 'native'
        },
        bar: {
          background: '#e3e3e3'
        },
        scrollPanel: {
          maxHeight: 600
        }
      }
    };
  },
  mounted: function mounted() {
    var self = this;
    window.onkeydown = function (e) {
      if (!e) e = window.event;
      if (!e.metaKey && !self.searchOverlay) {
        if ((e.target.localName === 'body' || e.target.localName === 'document') && (e.keyCode >= 65 && event.keyCode <= 90 || e.keyCode >= 48 && event.keyCode <= 57)) {
          var _char = event.which || event.keyCode;
          var character = event.key || String.fromCharCode(_char);
          self.searchOverlay = true;
        }
      }
    };
  },
  created: function created() {
    var _this = this;
    var handlerEscape = function handlerEscape(e) {
      if (e.key === 'Esc' || e.key === 'Escape') {
        _this.search = '';
        _this.searchOverlay = false;
      }
    };
    document.addEventListener('keydown', handlerEscape);
    this.$once('hook:beforeDestroy', function () {
      document.removeEventListener('keydown', handlerEscape);
    });
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    searchResult: function searchResult() {
      this.resultLoading = true;
      clearTimeout(this.timeout);
      var self = this;
      this.timeout = setTimeout(function () {
        if (self.search.length < 3) {
          return;
        }
        axios.get('/api/search?q=' + self.search).then(function (response) {
          self.student_search_results = response.student_records;
          self.employee_search_results = response.employees;
          self.resultLoading = false;
        })["catch"](function (error) {
          self.resultLoading = false;
          helper.showErrorMsg(error);
        });
      }, 1000);
    },
    getStatus: function getStatus(employee) {
      var term = employee.employee_terms;
      if (term.length && term[0].date_of_joining <= helper.today() && (!term[0].date_of_leaving || term[0].date_of_leaving >= helper.today())) return '<span class="label label-success">' + i18n.employee.status_active + '</span>';else return '<span class="label label-danger">' + i18n.employee.status_inactive + '</span>';
    },
    navigateToEmployee: function navigateToEmployee(uuid) {
      this.search = '';
      this.searchOverlay = false;
      this.$router.push('/employee/' + uuid);
    },
    navigateToStudent: function navigateToStudent(uuid) {
      this.search = '';
      this.searchOverlay = false;
      this.$router.push('/student/' + uuid);
    },
    navigateToStudentFee: function navigateToStudentFee(id, uuid) {
      this.search = '';
      this.searchOverlay = false;
      this.$router.push('/student/' + uuid + '/fee/' + id);
    }
  },
  watch: {
    search: function search(val) {
      if (val.length >= 3) {
        this.searchResult();
      } else {
        this.resultLoading = false;
        this.student_search_results = [];
        this.employee_search_results = [];
      }
    }
  },
  computed: {
    searchHint: function searchHint() {
      if (this.search.length < 3) {
        return i18n.general.any_search_type_atleast_3_characters;
      } else if (this.resultLoading) {
        return i18n.general.any_search_loading;
      } else {
        var result = this.student_search_results.length + this.employee_search_results.length;
        return result + ' ' + i18n.general.any_search_loaded;
      }
    }
  },
  updated: function updated() {
    if (this.$refs.searchTermElement) {
      this.$refs.searchTermElement.focus();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default-page.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default-page.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/header.vue */ "./resources/js/layouts/partials/header.vue");
/* harmony import */ var _partials_sidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/sidebar.vue */ "./resources/js/layouts/partials/sidebar.vue");
/* harmony import */ var _partials_footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/footer.vue */ "./resources/js/layouts/partials/footer.vue");
/* harmony import */ var _components_key_search_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/key-search.vue */ "./resources/js/components/key-search.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      message: '',
      sidebar: helper.getConfig('user_sidebar') || helper.getConfig('sidebar')
    };
  },
  components: {
    AppHeader: _partials_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppSidebar: _partials_sidebar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppFooter: _partials_footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    KeySearch: _components_key_search_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {
    helper.notification();
    $('.scroll-sidebar').slimScroll({
      position: 'left',
      size: "5px",
      height: '100%',
      color: '#dcdcdc'
    });
    $('.message-scroll').slimScroll({
      position: 'right',
      size: "5px",
      height: '570',
      color: '#dcdcdc'
    });
    $('.slimscrollright').slimScroll({
      position: 'left',
      size: "5px",
      height: '100%',
      color: '#dcdcdc'
    });
    $("body").addClass("fix-header fix-sidebar");
    if (this.sidebar == 'mini') this.miniSidebar();
    $('#theme').attr('href', '/css/colors/' + (helper.getConfig('user_color_theme') || helper.getConfig('color_theme')) + '.css');
    var set = function set() {
      var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      var topOffset = 70;
      if (width < 1170) {
        $("body").addClass("mini-sidebar");
        $('.navbar-brand span').hide();
        $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
        $(".sidebartoggler i").addClass("fa-arrow-circle-right");
        $(".sidebartoggler i").removeClass("fa-arrow-circle-left");
      }
      var height = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
      height = height - topOffset;
      if (height < 1) height = 1;
      if (height > topOffset) {
        $(".page-wrapper").css("min-height", height + "px");
      }
    };
    $(window).ready(set);
    $(window).on("resize", set);
    $(document).on('click', ".right-sidebar-toggle", function () {
      $(".right-sidebar").slideDown(50);
      $(".right-sidebar").toggleClass("shw-rside");
    });
    $(document).on('click', '.sidebartoggler', function () {
      if ($("body").hasClass("mini-sidebar")) {
        $("body").trigger("resize");
        $(".scroll-sidebar, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible");
        $("body").removeClass("mini-sidebar");
        $('.navbar-brand span').show();
        $(".sidebartoggler i").removeClass("fa-arrow-circle-right");
        $(".sidebartoggler i").addClass("fa-arrow-circle-left");
      } else {
        $("body").trigger("resize");
        $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
        $("body").addClass("mini-sidebar");
        $('.navbar-brand span').hide();
        $(".sidebartoggler i").removeClass("fa-arrow-circle-left");
        $(".sidebartoggler i").addClass("fa-arrow-circle-right");
      }
    });
    $(".fix-header .topbar").stick_in_parent();
    $(document).on('click', ".nav-toggler", function () {
      $("body").toggleClass("show-sidebar");
      $(".nav-toggler i").toggleClass("fa-bars");
      $(".nav-toggler i").toggleClass("fa-times");
    });
    $(".sidebartoggler").on('click', function () {});
    $('#sidebarnav').metisMenu();
  },
  methods: {
    miniSidebar: function miniSidebar() {
      $('body').addClass("mini-sidebar");
      $("body").trigger("resize");
      $('.navbar-brand span').hide();
      $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
      $(".sidebartoggler i").removeClass("fa-arrow-circle-left");
      $(".sidebartoggler i").addClass("fa-arrow-circle-right");
    },
    normalSidebar: function normalSidebar() {
      $("body").trigger("resize");
      $('.navbar-brand span').show();
      $(".scroll-sidebar, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible");
      $('body').removeClass("mini-sidebar");
      $(".sidebartoggler i").removeClass("fa-arrow-circle-right");
      $(".sidebartoggler i").addClass("fa-arrow-circle-left");
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    }
  },
  watch: {
    sidebar: function sidebar(val) {
      if (val == 'mini') this.miniSidebar();else this.normalSidebar();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/footer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/footer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/header.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/header.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import globalSearch from './global-search'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  mounted: function mounted() {},
  methods: {
    logout: function logout() {
      var _this = this;
      helper.logout().then(function () {
        _this.$router.push('/login');
      });
    },
    getAuthUser: function getAuthUser(name) {
      return helper.getAuthUser(name);
    },
    getConfig: function getConfig(name) {
      return helper.getConfig(name);
    },
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    hasRole: function hasRole(role) {
      return helper.hasRole(role);
    },
    setDefaultAcademicSession: function setDefaultAcademicSession(academic_session) {
      var _this2 = this;
      axios.post('/api/academic/session/' + academic_session.id + '/user/default').then(function (response) {
        _this2.$store.dispatch('setDefaultAcademicSession', academic_session);
        location.reload();
      })["catch"](function (error) {
        helper.showErrorMsg(error);
      });
    }
  },
  computed: {
    getIcon: function getIcon() {
      return helper.getIcon();
    },
    getAcademicSessions: function getAcademicSessions() {
      return helper.getAcademicSessions();
    },
    getDefaultAcademicSession: function getDefaultAcademicSession() {
      return helper.getDefaultAcademicSession();
    },
    getAuthUserRoles: function getAuthUserRoles() {
      return helper.ucword(this.$store.getters.getAuthUserRoles);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/menu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/menu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    hasAnyPermission: function hasAnyPermission(permissions) {
      return helper.hasAnyPermission(permissions);
    },
    hasRole: function hasRole(role) {
      return helper.hasRole(role);
    },
    hasNotAnyRole: function hasNotAnyRole(role) {
      return helper.hasNotAnyRole(role);
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    },
    showMenu: function showMenu(menu) {
      var menus = helper.getConfig('menu');
      return Array.isArray(menus) && menus.findIndex(function (o) {
        return o === menu;
      }) >= 0 ? true : false;
    }
  },
  computed: {
    configMenu: function configMenu() {
      return this.$route.meta.menu == 'configuration' ? true : false;
    },
    moduleConfigMenu: function moduleConfigMenu() {
      return this.$route.meta.menu == 'module-configuration' ? true : false;
    },
    moduleMenu: function moduleMenu() {
      return this.$route.meta.menu != 'configuration' && this.$route.meta.menu != 'module-configuration' ? true : false;
    },
    hasExamReportAnalysis: function hasExamReportAnalysis() {
      var academic_session = helper.getDefaultAcademicSession();
      return academic_session && academic_session.exam_report_analysis ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/sidebar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/sidebar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./resources/js/layouts/partials/menu.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    mainMenu: _menu__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {},
  methods: {
    logout: function logout() {
      var _this = this;
      helper.logout().then(function () {
        _this.$router.push('/login');
      });
    },
    getAuthUser: function getAuthUser(name) {
      return helper.getAuthUser(name);
    },
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=template&id=24dcc33e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=template&id=24dcc33e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.searchOverlay,
      expression: "searchOverlay"
    }],
    staticClass: "search-overlay"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    ref: "searchTermElement",
    staticClass: "search-term",
    attrs: {
      type: "text",
      placeholder: _vm.trans("general.any_search_hint"),
      spellcheck: "false",
      autocomplete: "false"
    },
    domProps: {
      value: _vm.search
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "search-helper"
  }, [_vm._v(_vm._s(_vm.searchHint))]), _vm._v(" "), _vm.student_search_results.length || _vm.employee_search_results.length ? _c("div", {
    staticClass: "row",
    staticStyle: {
      padding: "40px 10px 10px 40px"
    }
  }, [_vm.student_search_results.length ? _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("h2", {
    staticClass: "result-header"
  }, [_vm._v(_vm._s(_vm.trans("student.student")))]), _vm._v(" "), _c("vue-scroll", {
    attrs: {
      ops: _vm.scrollOptions
    }
  }, _vm._l(_vm.student_search_results, function (student_record) {
    return _c("div", {
      key: student_record.student.uuid,
      staticClass: "result-info",
      on: {
        click: function click($event) {}
      }
    }, [_c("span", {
      staticClass: "result-thumb pull-left"
    }, [!student_record.student.student_photo ? [student_record.student.gender == "female" ? _c("img", {
      staticClass: "img-circle",
      attrs: {
        src: "/images/avatar_female_kid.png"
      }
    }) : _c("img", {
      staticClass: "img-circle",
      attrs: {
        src: "/images/avatar_male_kid.png"
      }
    })] : [_c("img", {
      staticStyle: {
        height: "inherit",
        width: "auto"
      },
      attrs: {
        src: "/".concat(student_record.student.student_photo)
      }
    })]], 2), _vm._v(" "), _c("p", [_c("span", {
      staticClass: "other small"
    }, [_vm._v(_vm._s(student_record.admission.admission_number) + " \n                                    "), student_record.student.age ? [_vm._v("(" + _vm._s(student_record.student.age.years + " " + _vm.trans("list.year") + " " + student_record.student.age.months + " " + _vm.trans("list.month")) + ")")] : _vm._e()], 2), _vm._v(" "), _c("span", {
      staticClass: "result-name"
    }, [_vm._v(_vm._s(student_record.student.name))]), _vm._v(" "), _c("span", {
      staticClass: "other small"
    }, [_vm._v(_vm._s(student_record.batch.course.name + " " + student_record.batch.name) + " (" + _vm._s(student_record.full_roll_number) + ")")]), _vm._v(" "), _c("span", {
      staticClass: "other small"
    }, [_vm._v(_vm._s(student_record.student.parent.first_guardian_name) + " "), _c("i", {
      staticClass: "fas fa-mobile"
    }), _vm._v(" " + _vm._s(student_record.student.contact_number) + "\n                                ")]), _vm._v(" "), _c("span", {
      staticStyle: {
        display: "block",
        "margin-top": "10px"
      }
    }, [_c("button", {
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          return _vm.navigateToStudent(student_record.student.uuid);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-arrow-circle-right"
    }), _vm._v(" " + _vm._s(_vm.trans("general.view")))]), _vm._v(" "), _vm.hasPermission("list-student-fee") ? _c("button", {
      staticClass: "btn btn-success btn-sm",
      on: {
        click: function click($event) {
          return _vm.navigateToStudentFee(student_record.id, student_record.student.uuid);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-file"
    }), _vm._v(" " + _vm._s(_vm.trans("finance.view_fee_allocation")) + "\n    \t                            ")]) : _vm._e()])])]);
  }), 0)], 1) : _vm._e(), _vm._v(" "), _vm.employee_search_results.length ? _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("h2", {
    staticClass: "result-header"
  }, [_vm._v(_vm._s(_vm.trans("employee.employee")))]), _vm._v(" "), _c("vue-scroll", {
    attrs: {
      ops: _vm.scrollOptions
    }
  }, _vm._l(_vm.employee_search_results, function (employee) {
    return _c("div", {
      key: employee.uuid,
      staticClass: "result-info",
      on: {
        click: function click($event) {}
      }
    }, [_c("span", {
      staticClass: "result-thumb pull-left"
    }, [!employee.photo ? [employee.gender == "female" ? _c("img", {
      staticClass: "img-circle",
      attrs: {
        src: "/images/avatar_female.png"
      }
    }) : _c("img", {
      staticClass: "img-circle",
      attrs: {
        src: "/images/avatar_male.png"
      }
    })] : [_c("img", {
      staticStyle: {
        height: "inherit",
        width: "auto"
      },
      attrs: {
        src: "/".concat(employee.photo)
      }
    })]], 2), _vm._v(" "), _c("p", [_c("span", {
      staticClass: "other small"
    }, [_vm._v(_vm._s(employee.employee_code) + " \n                                    "), employee.age ? [_vm._v("(" + _vm._s(employee.age.years + " " + _vm.trans("list.year") + " " + employee.age.months + " " + _vm.trans("list.month")) + ")")] : _vm._e()], 2), _vm._v(" "), _c("span", {
      staticClass: "result-name"
    }, [_vm._v(_vm._s(employee.name) + " "), _c("span", {
      staticStyle: {
        display: "inline-block"
      },
      domProps: {
        innerHTML: _vm._s(_vm.getStatus(employee))
      }
    })]), _vm._v(" "), _c("span", {
      staticClass: "other small"
    }, [employee.employee_designations.length && employee.employee_designations[0].department_id ? [_vm._v(_vm._s(employee.employee_designations[0].department.name))] : _vm._e(), _vm._v(" "), employee.employee_designations.length ? [_vm._v("\n                                        " + _vm._s(employee.employee_designations[0].designation.name + " (" + employee.employee_designations[0].designation.employee_category.name + ")") + "\n                                    ")] : _vm._e()], 2), _vm._v(" "), _c("span", {
      staticClass: "other small"
    }, [employee.employee_terms[0] ? [_vm._v(_vm._s(_vm.trans("general.since")) + " " + _vm._s(_vm._f("moment")(employee.employee_terms[0].date_of_joining)))] : _vm._e(), _vm._v(" "), _c("i", {
      staticClass: "fas fa-mobile"
    }), _vm._v(" " + _vm._s(employee.contact_number) + "\n                                ")], 2), _vm._v(" "), _c("span", {
      staticStyle: {
        display: "block",
        "margin-top": "10px"
      }
    }, [_c("button", {
      staticClass: "btn btn-info btn-sm",
      on: {
        click: function click($event) {
          return _vm.navigateToEmployee(employee.uuid);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-arrow-circle-right"
    }), _vm._v(" " + _vm._s(_vm.trans("general.view")))])])])]);
  }), 0)], 1) : _vm._e()]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default-page.vue?vue&type=template&id=5f78555f&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default-page.vue?vue&type=template&id=5f78555f& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "main-wrapper"
    }
  }, [_c("tour-notification", {
    staticClass: "d-none d-sm-inline"
  }), _vm._v(" "), _c("app-header"), _vm._v(" "), _c("app-sidebar"), _vm._v(" "), _c("key-search"), _vm._v(" "), _c("div", {
    staticClass: "page-wrapper page-wrapper-header"
  }, [_c("router-view"), _vm._v(" "), _c("app-footer")], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/footer.vue?vue&type=template&id=6d0536b8&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/footer.vue?vue&type=template&id=6d0536b8& ***!
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
  return _c("footer", {
    staticClass: "footer"
  }, [_vm._v("\n        " + _vm._s(_vm.getConfig("footer_credit")) + " " + _vm._s(_vm.trans("general.version") + " " + _vm.getConfig("v")) + "\n    ")]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/header.vue?vue&type=template&id=2aa06ed4&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/header.vue?vue&type=template&id=2aa06ed4& ***!
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
  return _c("header", {
    staticClass: "topbar"
  }, [_c("nav", {
    staticClass: "navbar top-navbar navbar-expand-md navbar-light"
  }, [_c("div", {
    staticClass: "navbar-header white-sm"
  }, [_c("router-link", {
    staticClass: "navbar-brand",
    attrs: {
      to: "/"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.getIcon
    }
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "navbar-collapse"
  }, [_c("ul", {
    staticClass: "navbar-nav mt-md-0"
  }, [_vm._m(0), _vm._v(" "), _c("li", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip.right",
      value: _vm.trans("general.toggle_sidebar"),
      expression: "trans('general.toggle_sidebar')",
      modifiers: {
        right: true
      }
    }],
    staticClass: "nav-item"
  }, [_vm._m(1)]), _vm._v(" "), _vm.getConfig("maintenance_mode") ? _c("li", {
    staticClass: "nav-item d-none d-sm-inline"
  }, [_c("span", {
    staticClass: "mt-4 badge badge-danger m-b-10"
  }, [_vm._v(_vm._s(_vm.trans("configuration.under_maintenance")))])]) : _vm._e(), _vm._v(" "), !_vm.getConfig("mode") ? _c("li", {
    staticClass: "nav-item d-none d-sm-inline"
  }, [_c("span", {
    staticClass: "mt-4 badge badge-danger m-b-10"
  }, [_vm._v(_vm._s(_vm.trans("configuration.test_mode")))])]) : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "nav-item hidden-sm-down d-none d-sm-inline"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.any_search_title")))])])]), _vm._v(" "), _c("ul", {
    staticClass: "navbar-nav flex-filler"
  }), _vm._v(" "), _c("ul", {
    staticClass: "navbar-nav my-lg-0"
  }, [!_vm.getConfig("mode") ? _c("li", {
    staticClass: "nav-item d-none d-md-inline"
  }, [_vm._m(2)]) : _vm._e(), _vm._v(" "), _vm.getAcademicSessions.length && _vm.hasPermission("change-academic-session") ? _c("li", {
    staticClass: "nav-item dropdown"
  }, [_c("a", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip.bottom",
      value: _vm.trans("academic_session.academic_session"),
      expression: "trans('academic_session.academic_session')",
      modifiers: {
        bottom: true
      }
    }],
    staticClass: "nav-link dropdown-toggle text-muted waves-effect waves-dark",
    attrs: {
      href: "",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v(_vm._s(_vm.getDefaultAcademicSession ? _vm.getDefaultAcademicSession.name : _vm.trans("academic_session.choose_session")) + " "), _c("i", {
    staticClass: "fa fa-chevron-down"
  })]), _vm._v(" "), _c("div", {
    "class": ["dropdown-menu", _vm.getConfig("direction") != "rtl" ? "dropdown-menu-right" : ""]
  }, [_c("ul", {
    staticClass: "dropdown-user",
    staticStyle: {
      "padding-bottom": "10px"
    }
  }, [_vm._l(_vm.getAcademicSessions, function (academic_session) {
    return _c("li", {
      staticStyle: {
        padding: "10px 20px 0 20px",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.setDefaultAcademicSession(academic_session);
        }
      }
    }, [_vm._v("\n                                " + _vm._s(academic_session.name) + "\n                                "), _vm.getDefaultAcademicSession && academic_session.id == _vm.getDefaultAcademicSession.id ? _c("span", {
      staticClass: "pull-right"
    }, [_c("i", {
      staticClass: "fas fa-check"
    })]) : _vm._e()]);
  }), _vm._v(" "), _vm.hasPermission("create-academic-session") ? _c("li", {
    staticStyle: {
      padding: "10px 20px 0 20px",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.$router.push("/academic/session");
      }
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.add_new_session")))]) : _vm._e()], 2)])]) : _vm._e(), _vm._v(" "), _vm.getAcademicSessions.length && !_vm.hasPermission("change-academic-session") ? _c("li", {
    staticClass: "nav-item dropdown"
  }, [_c("a", {
    staticClass: "nav-link dropdown-toggle text-muted waves-effect waves-dark",
    attrs: {
      href: "#"
    }
  }, [_vm._v(_vm._s(_vm.getDefaultAcademicSession ? _vm.getDefaultAcademicSession.name : ""))])]) : _vm._e(), _vm._v(" "), _vm.getConfig("todo") && _vm.hasPermission("access-todo") ? _c("li", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip.bottom",
      value: _vm.trans("todo.todo"),
      expression: "trans('todo.todo')",
      modifiers: {
        bottom: true
      }
    }],
    staticClass: "nav-item d-none d-sm-inline"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/utility/todo"
    }
  }, [_c("i", {
    staticClass: "far fa-check-circle"
  })])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("access-configuration") ? _c("li", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip.bottom",
      value: _vm.trans("configuration.configuration"),
      expression: "trans('configuration.configuration')",
      modifiers: {
        bottom: true
      }
    }],
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/configuration"
    }
  }, [_c("i", {
    staticClass: "fas fa-cogs"
  })])], 1) : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "nav-item dropdown"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    "class": ["dropdown-menu", _vm.getConfig("user_direction") != "rtl" ? "dropdown-menu-right" : ""]
  }, [_c("ul", {
    staticClass: "dropdown-user"
  }, [_c("li", [_c("div", {
    staticClass: "dw-user-box"
  }, [_c("div", {
    staticClass: "u-text"
  }, [_c("h6", [_vm._v(_vm._s(_vm.trans("general.greeting") + ", " + _vm.getAuthUser("name") + " (" + _vm.getAuthUserRoles + ")"))])])])]), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/change/password"
    }
  }, [_c("i", {
    staticClass: "fas fa-key"
  }), _vm._v(" " + _vm._s(_vm.trans("user.change_password")))])], 1), _vm._v(" "), _vm.getConfig("pb") ? [_vm.hasRole("admin") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/product/about"
    }
  }, [_c("i", {
    staticClass: "fas fa-user-tie"
  }), _vm._v(" " + _vm._s(_vm.trans("general.about")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasRole("admin") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/product/support"
    }
  }, [_c("i", {
    staticClass: "fas fa-life-ring"
  }), _vm._v(" " + _vm._s(_vm.trans("general.support")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasRole("admin") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/product/update"
    }
  }, [_c("i", {
    staticClass: "fas fa-download"
  }), _vm._v(" " + _vm._s(_vm.trans("general.update")))])], 1) : _vm._e()] : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "divider",
    attrs: {
      role: "separator"
    }
  }), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.logout.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.trans("auth.logout")))])])], 2)])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark",
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "fas fa-bars"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    staticClass: "nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark",
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "icon-arrow-left-circle fas"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "https://instikit.com/buy/regular"
    }
  }, [_c("i", {
    staticClass: "fas fa-shopping-cart"
  }), _vm._v(" Buy Now")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    staticClass: "nav-link dropdown-toggle text-muted waves-effect waves-dark",
    attrs: {
      href: "",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-user"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/menu.vue?vue&type=template&id=4fae0aa8&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/menu.vue?vue&type=template&id=4fae0aa8& ***!
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
  return _c("ul", {
    attrs: {
      id: "sidebarnav"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/dashboard",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-home fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("general.dashboard")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration"),
      expression: "configMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/basic",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-cog fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.basic_configuration")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration"),
      expression: "configMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/social",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-share-alt fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.social_network")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration"),
      expression: "configMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/system",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-cogs fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.system_configuration")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration"),
      expression: "configMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/mail",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-envelope fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.mail_configuration")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration") && _vm.getConfig("multilingual"),
      expression: "configMenu && hasPermission('access-configuration') && getConfig('multilingual')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/locale",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-globe fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.locale")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration") && _vm.hasRole("admin"),
      expression: "configMenu && hasPermission('access-configuration') && hasRole('admin')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/role",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-users fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.role")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration") && _vm.hasRole("admin"),
      expression: "configMenu && hasPermission('access-configuration') && hasRole('admin')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/permission",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-key fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.permission")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration"),
      expression: "configMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/sms",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-comment fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.sms")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration"),
      expression: "configMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/payment/gateway",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-credit-card fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("finance.payment_gateway")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration"),
      expression: "configMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/authentication",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-sign-in-alt fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("auth.authentication")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration"),
      expression: "configMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/menu",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-ellipsis-h fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.menu")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.configMenu && _vm.hasPermission("access-configuration"),
      expression: "configMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration/module",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-boxes fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.module_configuration")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-user-circle fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("reception.reception_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/reception/enquiry/type"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.enquiry_type")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/reception/enquiry/source"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.enquiry_source")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/reception/visiting/purpose"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.visiting_purpose")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/reception/calling/purpose"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.calling_purpose")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/reception/complaint/type"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.complaint_type")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-school fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("academic.academic_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/academic/course/group"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.course_group")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/academic/institute"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.institute_other")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/academic/certificate/template"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" "), _c("span", {
    staticClass: "font-90pc"
  }, [_vm._v(_vm._s(_vm.trans("academic.certificate_template")))])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/academic/id-card/template"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" "), _c("span", {
    staticClass: "font-90pc"
  }, [_vm._v(_vm._s(_vm.trans("academic.id_card_template")))])])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-money-bill-alt fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("finance.finance_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/finance/transaction/category"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" "), _c("span", {
    staticClass: "font-90pc"
  }, [_vm._v(_vm._s(_vm.trans("finance.transaction_category")))])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/finance/payment/method"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.payment_method")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-graduation-cap fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("student.student_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/student"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("general.general")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/student/group"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.student_group")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/student/document/type"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.document_type_only")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-file-alt fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("exam.configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/exam/term"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("exam.term")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/exam/assessment"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("exam.assessment")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/exam/observation"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" "), _c("span", {
    staticClass: "font-80pc"
  }, [_vm._v(_vm._s(_vm.trans("exam.observation")))])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/exam/grade"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("exam.grade")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-user-tie fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("employee.employee_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/employee"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("general.general")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/employee/category"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" "), _c("span", {
    staticClass: "font-90pc"
  }, [_vm._v(_vm._s(_vm.trans("employee.category")))])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/employee/designation"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.designation")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/employee/department"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.department")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/employee/group"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.employee_group")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/employee/document/type"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.document_type_only")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/employee/leave/type"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.leave_type")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/employee/attendance/type"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.attendance_type")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/employee/pay/head"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.pay_head")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-truck fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("transport.transport_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/transport/vehicle/document/type"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.vehicle_document_type_only")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/transport/vehicle/fuel/type"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.vehicle_fuel_type")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/transport/vehicle/service/center"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.vehicle_service_center_only")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-book fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("library.library_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/library"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("general.general")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/library/book/author"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("library.book_author")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/library/book/language"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("library.book_language")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/library/book/topic"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("library.book_topic")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/library/book/publisher"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("library.book_publisher")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/library/book/condition"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("library.book_condition")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-calendar-alt fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("calendar.calendar_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/calendar/event/type"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("calendar.event_type")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-newspaper fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("post.post_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/post/article/type"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("post.article_type")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-building fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("asset.asset_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/asset/building"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("asset.building")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/asset/room"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("asset.room")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-suitcase fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("frontend.frontend_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/frontend/index"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("frontend.frontend")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    staticClass: "has-arrow",
    attrs: {
      to: "/configuration/custom-field",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-cubes fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.custom_field")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleConfigMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleConfigMenu && hasPermission('access-configuration')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-align-justify fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("misc.misc_configuration")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/misc/religion"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("misc.religion")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/misc/caste"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("misc.caste")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/misc/category"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("misc.category")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: "/configuration/misc/blood/group"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("misc.blood_group")))])], 1)])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("institute_document") && _vm.hasPermission("list-institute-document"),
      expression: "moduleMenu && showMenu('institute_document') && hasPermission('list-institute-document')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/institute/document",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-file fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("institute.document")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("reception") && _vm.hasAnyPermission(["list-enquiry", "list-visitor-log", "list-postal-record", "list-call-log", "list-complaint", "list-gate-pass"]),
      expression: "moduleMenu && showMenu('reception') && hasAnyPermission(['list-enquiry','list-visitor-log','list-postal-record','list-call-log','list-complaint','list-gate-pass'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-user-circle fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("reception.reception")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("list-enquiry") && _vm.showMenu("enquiry") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/reception/enquiry"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.admission_enquiry")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-visitor-log") && _vm.showMenu("visitor_log") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/reception/visitor/log"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.visitor_log")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-call-log") && _vm.showMenu("call_log") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/reception/call/log"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.call_log")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-postal-record") && _vm.showMenu("postal_record") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/reception/postal/record"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.postal_record")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-complaint") && _vm.showMenu("complaint") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/reception/complaint"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.complaint")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-gate-pass") && _vm.showMenu("gate_pass") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/reception/gate/pass"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.gate_pass")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-visitor-message") && _vm.showMenu("visitor_message") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/reception/visitor/message"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("reception.visitor_message")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("academic") && _vm.hasAnyPermission(["list-academic-session", "list-course", "list-batch", "list-class-teacher", "list-subject", "list-subject-teacher", "list-class-timing", "list-timetable"]),
      expression: "moduleMenu && showMenu('academic') && hasAnyPermission(['list-academic-session','list-course','list-batch','list-class-teacher','list-subject','list-subject-teacher','list-class-timing','list-timetable'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-school fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("academic.academic")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("list-academic-session") && _vm.showMenu("academic_session") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/academic/session"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.academic_session")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-course") && _vm.showMenu("course") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/academic/course"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.course")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-batch") && _vm.showMenu("batch") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/academic/batch"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.batch")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-class-teacher") && _vm.showMenu("class_teacher") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/academic/class/teacher"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.class_teacher")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-subject") && _vm.showMenu("subject") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/academic/subject"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.subject")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-subject-teacher") && _vm.showMenu("subject_teacher") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/academic/subject/teacher"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.subject_teacher")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-class-timing") && _vm.showMenu("class_timing") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/academic/class/timing"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.class_timing")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-timetable") && _vm.showMenu("timetable") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/academic/timetable"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.timetable")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-certificate") && _vm.showMenu("certificate") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/academic/certificate"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("academic.certificate")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("student") && _vm.hasAnyPermission(["list-registration", "list-student", "edit-roll-number", "generate-student-id-card", "list-student-attendance", "promote-student", "terminate-student"]),
      expression: "moduleMenu && showMenu('student') && hasAnyPermission(['list-registration','list-student','edit-roll-number','generate-student-id-card','list-student-attendance','promote-student','terminate-student'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-graduation-cap fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("student.student")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("import-student") && _vm.showMenu("student_import") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/import"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.import")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-registration") && _vm.showMenu("registration") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/registration/card-view"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.registration")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-registration") && _vm.showMenu("registration") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/room/card-view"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" Accomodation ")])], 1) : _vm._e(), _vm._v(" "), (_vm.hasPermission("list-student") || _vm.hasPermission("list-class-teacher-wise-student")) && _vm.showMenu("student_list") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/card-view"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.student_list")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("edit-roll-number") && _vm.showMenu("roll_number") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/roll/number"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.roll_number")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("generate-student-id-card") && _vm.showMenu("student_id_card") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/id-card"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.id_card")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("edit-student") && _vm.showMenu("student_image_upload") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/image"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.image_upload")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-student-attendance") && _vm.showMenu("student_attendance") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/attendance"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.attendance")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("promote-student") && _vm.showMenu("promotion") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/promotion"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.promotion")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("terminate-student") && _vm.showMenu("termination") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/termination"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.termination")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("edit-student") && _vm.showMenu("student_parent") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/parent"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("student.parent")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("edit-student") && _vm.showMenu("student_login") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/student/login"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.trans("student.login")))])])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("employee") && _vm.hasAnyPermission(["list-employee", "generate-employee-id-card"]),
      expression: "moduleMenu && showMenu('employee') && hasAnyPermission(['list-employee', 'generate-employee-id-card'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-user-tie fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("employee.employee")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("import-employee") && _vm.showMenu("employee_import") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/employee/import"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.import")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("employee_list") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/employee/card-view"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.employee_list")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("generate-employee-id-card") && _vm.showMenu("employee_id_card") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/employee/id-card"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.id_card")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("employee_attendance") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/employee/attendance"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.attendance")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("employee_leave") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/employee/leave"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.leave")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("employee_payroll") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/employee/payroll"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("employee.payroll")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("exam") && _vm.hasAnyPermission(["list-exam-schedule", "list-exam-mark", "access-exam-report", "access-class-teacher-wise-exam-report", "list-online-exam"]),
      expression: "moduleMenu && showMenu('exam') && hasAnyPermission(['list-exam-schedule','list-exam-mark','access-exam-report','access-class-teacher-wise-exam-report','list-online-exam'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-file-alt fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("exam.exam")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("list-exam-schedule") && _vm.showMenu("exam_schedule") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/exam/schedule"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("exam.schedule")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-exam-mark") && _vm.showMenu("exam_record_mark") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/exam/record"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("exam.record")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasAnyPermission(["access-exam-report", "access-class-teacher-wise-exam-report"]) && _vm.showMenu("exam_report_card") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/exam/report"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("exam.report")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasNotAnyRole(["student", "parent"]) && _vm.showMenu("exam_topper_report") ? [_vm.hasAnyPermission(["access-exam-report", "access-class-teacher-wise-exam-report"]) ? _c("li", [_c("router-link", {
    attrs: {
      to: "/exam/report/topper"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("exam.topper_report")))])], 1) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.hasExamReportAnalysis ? _c("li", [_c("router-link", {
    attrs: {
      to: "/exam/report/analysis"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("exam.report_analysis")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-online-exam") && _vm.showMenu("online_exam") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/online-exam"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("exam.online_exam")))])], 1) : _vm._e()], 2)]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("finance") && _vm.hasAnyPermission(["list-transport-fee", "list-fee-group", "list-fee-head", "list-fee-allocation", "list-fee-concession", "list-account", "list-income", "list-expense", "list-account-transfer"]),
      expression: "moduleMenu && showMenu('finance') && hasAnyPermission(['list-transport-fee','list-fee-group','list-fee-head','list-fee-allocation','list-fee-concession','list-account','list-income','list-expense','list-account-transfer'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-money-bill-alt fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("finance.finance")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("list-fee-group") && _vm.showMenu("fee_group") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/finance/fee/group"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.fee_group")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-fee-head") && _vm.showMenu("fee_head") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/finance/fee/head"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.fee_head")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-transport-fee") && _vm.showMenu("transport_fee") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/transport/fee"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.fee")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-fee-concession") && _vm.showMenu("fee_concession") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/finance/fee/concession"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.fee_concession")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-fee-allocation") && _vm.showMenu("fee_allocation") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/finance/fee/allocation"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.fee_allocation")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-account") && _vm.showMenu("account") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/finance/account"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.account")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-income") && _vm.showMenu("income") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/finance/transaction/income"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.income")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-expense") && _vm.showMenu("expense") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/finance/transaction/expense"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.expense")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-account-transfer") && _vm.showMenu("account_transfer") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/finance/transaction/account/transfer"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("finance.account_transfer")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("finance_report") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/finance/report"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("general.report")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("transport") && _vm.hasAnyPermission(["list-vehicle", "list-vehicle-incharge", "list-vehicle-document", "list-vehicle-log", "list-vehicle-service-record", "list-vehicle-fuel"]),
      expression: "moduleMenu && showMenu('transport') && hasAnyPermission(['list-vehicle','list-vehicle-incharge','list-vehicle-document','list-vehicle-log','list-vehicle-service-record','list-vehicle-fuel'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-truck fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("transport.transport")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.showMenu("transport_route") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/transport/route"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.route")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-vehicle") && _vm.showMenu("vehicle") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/transport/vehicle"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.vehicle")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-vehicle-incharge") && _vm.showMenu("vehicle_incharge") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/transport/vehicle/incharge"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.vehicle_incharge")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-vehicle-document") && _vm.showMenu("vehicle_document") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/transport/vehicle/document"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.document")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-vehicle-fuel") && _vm.showMenu("vehicle_fuel") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/transport/vehicle/fuel"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.fuel")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-vehicle-log") && _vm.showMenu("vehicle_log") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/transport/vehicle/log"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.log")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-vehicle-service-record") && _vm.showMenu("vehicle_service_record") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/transport/vehicle/service/record"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("transport.service_record")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("access-transport-report") && _vm.showMenu("transport_report") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/transport/report"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("general.report")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("calendar") && _vm.hasAnyPermission(["list-holiday", "list-event"]),
      expression: "moduleMenu && showMenu('calendar') && hasAnyPermission(['list-holiday','list-event'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-calendar-alt fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("calendar.calendar")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("list-holiday") && _vm.showMenu("holiday") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/calendar/holiday"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("calendar.holiday")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-event") && _vm.showMenu("event") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/calendar/event"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("calendar.event")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasAnyPermission(["list-birthday", "list-anniversary", "list-work-anniversary"]) && _vm.showMenu("celebration") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/calendar/celebration/birthday"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("calendar.celebration")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("resource") && _vm.hasAnyPermission(["list-assignment", "list-notes", "list-lesson-plan", "list-syllabus"]),
      expression: "moduleMenu && showMenu('resource') && hasAnyPermission(['list-assignment','list-notes','list-lesson-plan','list-syllabus'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-folder fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("resource.resource")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("list-assignment") && _vm.showMenu("assignment") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/resource/assignment"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("resource.assignment")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-notes") && _vm.showMenu("notes") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/resource/notes"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("resource.notes")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-lesson-plan") && _vm.showMenu("lesson_plan") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/resource/lesson/plan"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("resource.lesson_plan")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-syllabus") && _vm.showMenu("syllabus") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/resource/syllabus"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("resource.syllabus")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("library") && _vm.hasAnyPermission(["list-book", "issue-book", "return-book"]),
      expression: "moduleMenu && showMenu('library') && hasAnyPermission(['list-book','issue-book','return-book'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-book fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("library.library")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("list-book") && _vm.showMenu("book") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/library/book"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("library.book")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("issue-book") && _vm.showMenu("issue_book") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/library/issue"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("library.issue")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("return-book") && _vm.showMenu("return_book") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/library/return"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("library.return")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("inventory") && _vm.hasAnyPermission(["list-stock-category", "list-stock-item", "list-vendor", "list-stock-purchase", "list-stock-transfer"]),
      expression: "moduleMenu && showMenu('inventory') && hasAnyPermission(['list-stock-category', 'list-stock-item','list-vendor','list-stock-purchase','list-stock-transfer'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-box fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("inventory.inventory")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("list-stock-category") && _vm.showMenu("stock_category") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/inventory/stock/category"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("inventory.stock_category")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-stock-item") && _vm.showMenu("stock_item") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/inventory/stock/item"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("inventory.stock_item")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-vendor") && _vm.showMenu("vendor") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/inventory/vendor"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("inventory.vendor")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-stock-purchase") && _vm.showMenu("stock_purchase") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/inventory/stock/purchase"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("inventory.stock_purchase")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-stock-transfer") && _vm.showMenu("stock_transfer") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/inventory/stock/transfer"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("inventory.stock_transfer")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("post") && _vm.hasPermission("list-article"),
      expression: "moduleMenu && showMenu('post') && hasPermission('list-article')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-newspaper fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("post.post")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.showMenu("post_feed") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/post/feed"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("post.feed")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("article") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/post/article"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("post.article")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("communication") && _vm.hasAnyPermission(["send-sms", "send-email", "send-push-notification", "list-meeting"]),
      expression: "moduleMenu && showMenu('communication') && hasAnyPermission(['send-sms','send-email','send-push-notification', 'list-meeting'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-paper-plane fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("communication.communication")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("create-meeting") && _vm.showMenu("meeting") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/communication/meeting"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("communication.meeting")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("list-meeting") && _vm.showMenu("my_meeting") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/communication/my-meeting"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("communication.my_meeting")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("communication_history") && _vm.hasAnyPermission(["send-sms", "send-email", "send-push-notification"]) ? _c("li", [_c("router-link", {
    attrs: {
      to: "/communication"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("communication.history")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("my_notification") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/communication/notification"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("communication.my_notification")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("send-sms") && _vm.showMenu("send_sms") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/communication/sms"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("communication.sms")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("send-email") && _vm.showMenu("send_email") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/communication/email"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("communication.email")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("send-push-notification") && _vm.showMenu("send_push_notification") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/communication/push-notification"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("communication.push_notification")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("frontend") && _vm.hasPermission("configure-frontend"),
      expression: "moduleMenu && showMenu('frontend') && hasPermission('configure-frontend')"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-suitcase fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("frontend.frontend")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.showMenu("frontend_page") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/frontend/page"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("frontend.page")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("frontend_block") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/frontend/block"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("frontend.block")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("frontend_menu") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/frontend/menu"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("frontend.menu")))])], 1) : _vm._e()])]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.showMenu("utility") && _vm.hasAnyPermission(["access-todo", "access-configuration"]),
      expression: "moduleMenu && showMenu('utility') && hasAnyPermission(['access-todo','access-configuration'])"
    }]
  }, [_c("a", {
    staticClass: "has-arrow",
    attrs: {
      href: "#",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-puzzle-piece fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("utility.utility")))])]), _vm._v(" "), _c("ul", {
    staticClass: "collapse",
    attrs: {
      "aria-expanded": "false"
    }
  }, [_vm.hasPermission("access-todo") && _vm.showMenu("todo") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/utility/todo"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("utility.todo")))])], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("access-configuration") ? [_vm.showMenu("backup") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/utility/backup"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("utility.backup")))])], 1) : _vm._e(), _vm._v(" "), _vm.showMenu("ip_filter") ? _c("li", [_c("router-link", {
    attrs: {
      to: "/utility/ip-filter"
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  }), _vm._v(" " + _vm._s(_vm.trans("utility.ip_filter")))])], 1) : _vm._e()] : _vm._e()], 2)]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.moduleMenu && _vm.hasPermission("access-configuration"),
      expression: "moduleMenu && hasPermission('access-configuration')"
    }]
  }, [_c("router-link", {
    attrs: {
      to: "/configuration",
      exact: ""
    }
  }, [_c("i", {
    staticClass: "fas fa-cogs fa-fw"
  }), _vm._v(" "), _c("span", {
    staticClass: "hide-menu"
  }, [_vm._v(_vm._s(_vm.trans("configuration.configuration")))])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/sidebar.vue?vue&type=template&id=0ed9ac23&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/sidebar.vue?vue&type=template&id=0ed9ac23& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("aside", {
    staticClass: "left-sidebar"
  }, [_c("div", {
    staticClass: "scroll-sidebar"
  }, [_c("nav", {
    staticClass: "sidebar-nav"
  }, [_c("main-menu")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "sidebar-footer"
  }, [_vm.hasPermission("access-configuration") ? _c("router-link", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("configuration.configuration"),
      expression: "trans('configuration.configuration')"
    }],
    staticClass: "link",
    attrs: {
      to: "/configuration"
    }
  }, [_c("i", {
    staticClass: "fas fa-cogs"
  })]) : _vm._e(), _vm._v(" "), _c("router-link", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("user.change_password"),
      expression: "trans('user.change_password')"
    }],
    staticClass: "link",
    attrs: {
      to: "/change/password"
    }
  }, [_c("i", {
    staticClass: "fas fa-key"
  })]), _vm._v(" "), _c("a", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("auth.logout"),
      expression: "trans('auth.logout')"
    }],
    staticClass: "link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.logout.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-power-off"
  })])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".search-overlay[data-v-24dcc33e] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  opacity: 0.9;\n  z-index: 999999;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.search-term[data-v-24dcc33e] {\n  font-size: 72px;\n  font-weight: bold;\n  padding: 40px 10px 10px 40px;\n  border: 0;\n}\n.search-helper[data-v-24dcc33e] {\n  padding: 0 10px 10px 40px;\n  font-size: 20px;\n}\n.result-header[data-v-24dcc33e] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.result-info[data-v-24dcc33e] {\n  display: block;\n  border-bottom: 2px solid black;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n}\n.result-info .result-thumb[data-v-24dcc33e] {\n  float: left;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #e1e2e3;\n  margin-right: 20px;\n  text-align: center;\n  overflow: hidden;\n}\n.result-info .result-thumb i[data-v-24dcc33e] {\n  padding-top: 25px;\n  font-size: 50px;\n}\n.result-info .result-thumb img[data-v-24dcc33e] {\n  width: 100%;\n}\n.result-info p[data-v-24dcc33e] {\n  padding-top: 10px;\n  margin-bottom: 0;\n  min-height: 100px;\n  color: #1a1a1a;\n}\n.result-info p span[data-v-24dcc33e] {\n  display: block;\n}\n.result-info p span.result-name[data-v-24dcc33e] {\n  font-size: 120%;\n  font-weight: 500;\n}\n.result-info p span.title[data-v-24dcc33e] {\n  font-size: 100%;\n}\n.result-info p span.other[data-v-24dcc33e] {\n  font-size: 90%;\n}\n.result-info[data-v-24dcc33e] {\n  border: 2px solid #000000;\n  border-radius: 10px;\n  margin-top: 10px;\n  padding: 10px;\n}", "",{"version":3,"sources":["webpack://./resources/js/components/key-search.vue"],"names":[],"mappings":"AACC;EACC,eAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACM,gBAAA;AAAR;AAGC;EACC,eAAA;EACA,iBAAA;EACA,4BAAA;EACA,SAAA;AAAF;AAGC;EACC,yBAAA;EACA,eAAA;AAAF;AAGC;EACC,eAAA;EACA,iBAAA;AAAF;AAGC;EACC,cAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;AAAF;AAEQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;AAAZ;AACY;EACI,iBAAA;EACA,eAAA;AAChB;AACY;EACI,WAAA;AAChB;AAGQ;EACI,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;AADZ;AAGY;EACI,cAAA;AADhB;AAGgB;EACI,eAAA;EACA,gBAAA;AADpB;AAGgB;EACI,eAAA;AADpB;AAGgB;EACI,cAAA;AADpB;AAOC;EACC,yBAAA;EACM,mBAAA;EACA,gBAAA;EACA,aAAA;AAJR","sourcesContent":["\n\t.search-overlay {\n\t\tposition: fixed; \n\t\ttop: 0; \n\t\tbottom: 0; \n\t\tleft: 0; \n\t\tright: 0; \n\t\tbackground: white; \n\t\topacity: 0.9; \n\t\tz-index: 999999; \n\t\twidth: 100%; \n\t\theight: 100%;\n        overflow: hidden\n\t}\n\n\t.search-term {\n\t\tfont-size: 72px;\n\t\tfont-weight: bold;\n\t\tpadding: 40px 10px 10px 40px;\n\t\tborder: 0;\n\t}\n\n\t.search-helper {\n\t\tpadding: 0 10px 10px 40px;\n\t\tfont-size: 20px;\n\t}\n\n\t.result-header {\n\t\tfont-size: 24px;\n\t\tfont-weight: bold;\n\t}\n\n\t.result-info {\n\t\tdisplay: block;\n\t\tborder-bottom: 2px solid black;\n\t\tmargin-bottom: 10px;\n\t\tpadding-bottom: 10px;\n\n        .result-thumb {\n            float: left;\n            width: 100px;\n            height: 100px;\n            border-radius: 50%;\n            background: #e1e2e3;\n            margin-right: 20px;\n            text-align: center;\n            overflow: hidden;\n            i {\n                padding-top: 25px;\n                font-size: 50px;\n            }\n            img {\n                width: 100%;\n            }\n        }\n\n        p{\n            padding-top: 10px;\n            margin-bottom: 0;\n            min-height: 100px;\n            color: lighten(black, 10%);\n\n            span {\n                display: block;\n\n                &.result-name{\n                    font-size: 120%;\n                    font-weight: 500;\n                }\n                &.title{\n                    font-size: 100%;\n                }\n                &.other{\n                    font-size: 90%;\n                }\n            }\n        }\n\t}\n\n\t.result-info {\n\t\tborder:2px solid #000000;\n        border-radius: 10px;\n        margin-top: 10px;\n        padding: 10px;\n\t}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_key_search_vue_vue_type_style_index_0_id_24dcc33e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_key_search_vue_vue_type_style_index_0_id_24dcc33e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_key_search_vue_vue_type_style_index_0_id_24dcc33e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/key-search.vue":
/*!************************************************!*\
  !*** ./resources/js/components/key-search.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _key_search_vue_vue_type_template_id_24dcc33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key-search.vue?vue&type=template&id=24dcc33e&scoped=true& */ "./resources/js/components/key-search.vue?vue&type=template&id=24dcc33e&scoped=true&");
/* harmony import */ var _key_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key-search.vue?vue&type=script&lang=js& */ "./resources/js/components/key-search.vue?vue&type=script&lang=js&");
/* harmony import */ var _key_search_vue_vue_type_style_index_0_id_24dcc33e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss& */ "./resources/js/components/key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _key_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _key_search_vue_vue_type_template_id_24dcc33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _key_search_vue_vue_type_template_id_24dcc33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "24dcc33e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/key-search.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/default-page.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/default-page.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_page_vue_vue_type_template_id_5f78555f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-page.vue?vue&type=template&id=5f78555f& */ "./resources/js/layouts/default-page.vue?vue&type=template&id=5f78555f&");
/* harmony import */ var _default_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-page.vue?vue&type=script&lang=js& */ "./resources/js/layouts/default-page.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _default_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _default_page_vue_vue_type_template_id_5f78555f___WEBPACK_IMPORTED_MODULE_0__.render,
  _default_page_vue_vue_type_template_id_5f78555f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/default-page.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/partials/footer.vue":
/*!**************************************************!*\
  !*** ./resources/js/layouts/partials/footer.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_6d0536b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=6d0536b8& */ "./resources/js/layouts/partials/footer.vue?vue&type=template&id=6d0536b8&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/js/layouts/partials/footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_6d0536b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_6d0536b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/partials/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/partials/header.vue":
/*!**************************************************!*\
  !*** ./resources/js/layouts/partials/header.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_vue_vue_type_template_id_2aa06ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=2aa06ed4& */ "./resources/js/layouts/partials/header.vue?vue&type=template&id=2aa06ed4&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/layouts/partials/header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_2aa06ed4___WEBPACK_IMPORTED_MODULE_0__.render,
  _header_vue_vue_type_template_id_2aa06ed4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/partials/header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/partials/menu.vue":
/*!************************************************!*\
  !*** ./resources/js/layouts/partials/menu.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_vue_vue_type_template_id_4fae0aa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=4fae0aa8& */ "./resources/js/layouts/partials/menu.vue?vue&type=template&id=4fae0aa8&");
/* harmony import */ var _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js& */ "./resources/js/layouts/partials/menu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_vue_vue_type_template_id_4fae0aa8___WEBPACK_IMPORTED_MODULE_0__.render,
  _menu_vue_vue_type_template_id_4fae0aa8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/partials/menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/partials/sidebar.vue":
/*!***************************************************!*\
  !*** ./resources/js/layouts/partials/sidebar.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar_vue_vue_type_template_id_0ed9ac23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.vue?vue&type=template&id=0ed9ac23& */ "./resources/js/layouts/partials/sidebar.vue?vue&type=template&id=0ed9ac23&");
/* harmony import */ var _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.vue?vue&type=script&lang=js& */ "./resources/js/layouts/partials/sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sidebar_vue_vue_type_template_id_0ed9ac23___WEBPACK_IMPORTED_MODULE_0__.render,
  _sidebar_vue_vue_type_template_id_0ed9ac23___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/partials/sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/key-search.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/key-search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_key_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./key-search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_key_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/default-page.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/default-page.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./default-page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default-page.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/partials/footer.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/partials/footer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/partials/header.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/partials/header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/partials/menu.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/layouts/partials/menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/menu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/partials/sidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/layouts/partials/sidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/key-search.vue?vue&type=template&id=24dcc33e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/key-search.vue?vue&type=template&id=24dcc33e&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_key_search_vue_vue_type_template_id_24dcc33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_key_search_vue_vue_type_template_id_24dcc33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_key_search_vue_vue_type_template_id_24dcc33e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./key-search.vue?vue&type=template&id=24dcc33e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=template&id=24dcc33e&scoped=true&");


/***/ }),

/***/ "./resources/js/layouts/default-page.vue?vue&type=template&id=5f78555f&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/default-page.vue?vue&type=template&id=5f78555f& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_page_vue_vue_type_template_id_5f78555f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_page_vue_vue_type_template_id_5f78555f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_page_vue_vue_type_template_id_5f78555f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./default-page.vue?vue&type=template&id=5f78555f& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default-page.vue?vue&type=template&id=5f78555f&");


/***/ }),

/***/ "./resources/js/layouts/partials/footer.vue?vue&type=template&id=6d0536b8&":
/*!*********************************************************************************!*\
  !*** ./resources/js/layouts/partials/footer.vue?vue&type=template&id=6d0536b8& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_6d0536b8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_6d0536b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_6d0536b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=6d0536b8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/footer.vue?vue&type=template&id=6d0536b8&");


/***/ }),

/***/ "./resources/js/layouts/partials/header.vue?vue&type=template&id=2aa06ed4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/layouts/partials/header.vue?vue&type=template&id=2aa06ed4& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2aa06ed4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2aa06ed4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2aa06ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=template&id=2aa06ed4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/header.vue?vue&type=template&id=2aa06ed4&");


/***/ }),

/***/ "./resources/js/layouts/partials/menu.vue?vue&type=template&id=4fae0aa8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/layouts/partials/menu.vue?vue&type=template&id=4fae0aa8& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_4fae0aa8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_4fae0aa8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_4fae0aa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./menu.vue?vue&type=template&id=4fae0aa8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/menu.vue?vue&type=template&id=4fae0aa8&");


/***/ }),

/***/ "./resources/js/layouts/partials/sidebar.vue?vue&type=template&id=0ed9ac23&":
/*!**********************************************************************************!*\
  !*** ./resources/js/layouts/partials/sidebar.vue?vue&type=template&id=0ed9ac23& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_0ed9ac23___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_0ed9ac23___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_0ed9ac23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sidebar.vue?vue&type=template&id=0ed9ac23& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/partials/sidebar.vue?vue&type=template&id=0ed9ac23&");


/***/ }),

/***/ "./resources/js/components/key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_key_search_vue_vue_type_style_index_0_id_24dcc33e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/key-search.vue?vue&type=style&index=0&id=24dcc33e&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/var/modules.json":
/*!************************************!*\
  !*** ./resources/var/modules.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"module":"institute","translation":"institute.institute","menu":{"name":"institute_document","translation":"institute.document","visibility":true,"submenu":[]}},{"module":"reception","translation":"reception.reception","menu":{"name":"reception","translation":"reception.reception","visibility":true,"submenu":[{"name":"enquiry","translation":"reception.admission_enquiry","visibility":true,"submenu":[]},{"name":"visitor_log","translation":"reception.visitor_log","visibility":true,"submenu":[]},{"name":"call_log","translation":"reception.call_log","visibility":true,"submenu":[]},{"name":"postal_record","translation":"reception.postal_record","visibility":true,"submenu":[]},{"name":"complaint","translation":"reception.complaint","visibility":true,"submenu":[]},{"name":"gate_pass","translation":"reception.gate_pass","visibility":true,"submenu":[]},{"name":"visitor_message","translation":"reception.visitor_message","visibility":true,"submenu":[]}]}},{"module":"academic","translation":"academic.academic","menu":{"name":"academic","translation":"academic.academic","visibility":true,"submenu":[{"name":"academic_session","translation":"academic.academic_session","visibility":true,"submenu":[]},{"name":"course","translation":"academic.course","visibility":true,"submenu":[]},{"name":"batch","translation":"academic.batch","visibility":true,"submenu":[]},{"name":"class_teacher","translation":"academic.class_teacher","visibility":true,"submenu":[]},{"name":"subject","translation":"academic.subject","visibility":true,"submenu":[]},{"name":"subject_teacher","translation":"academic.subject_teacher","visibility":true,"submenu":[]},{"name":"class_timing","translation":"academic.class_timing","visibility":true,"submenu":[]},{"name":"timetable","translation":"academic.timetable","visibility":true,"submenu":[]},{"name":"certificate","translation":"academic.certificate","visibility":true,"submenu":[]}]}},{"module":"student","translation":"student.student","menu":{"name":"student","translation":"student.student","visibility":true,"submenu":[{"name":"student_import","translation":"student.import","visibility":true,"submenu":[]},{"name":"registration","translation":"student.registration","visibility":true,"submenu":[]},{"name":"student_list","translation":"student.student_list","visibility":true,"submenu":[]},{"name":"roll_number","translation":"student.roll_number","visibility":true,"submenu":[]},{"name":"student_id_card","translation":"student.id_card","visibility":true,"submenu":[]},{"name":"student_image_upload","translation":"student.image_upload","visibility":true,"submenu":[]},{"name":"student_attendance","translation":"student.attendance","visibility":true,"submenu":[]},{"name":"promotion","translation":"student.promotion","visibility":true,"submenu":[]},{"name":"termination","translation":"student.termination","visibility":true,"submenu":[]},{"name":"student_parent","translation":"student.parent","visibility":true,"submenu":[]},{"name":"student_login","translation":"student.login","visibility":true,"submenu":[]}]}},{"module":"employee","translation":"employee.employee","menu":{"name":"employee","translation":"employee.employee","visibility":true,"submenu":[{"name":"employee_import","translation":"employee.import","visibility":true,"submenu":[]},{"name":"employee_list","translation":"employee.employee_list","visibility":true,"submenu":[]},{"name":"employee_id_card","translation":"employee.id_card","visibility":true,"submenu":[]},{"name":"employee_attendance","translation":"employee.attendance","visibility":true,"submenu":[]},{"name":"employee_leave","translation":"employee.leave","visibility":true,"submenu":[]},{"name":"employee_payroll","translation":"employee.payroll","visibility":true,"submenu":[]}]}},{"module":"exam","translation":"exam.exam","menu":{"name":"exam","translation":"exam.exam","visibility":true,"submenu":[{"name":"exam_schedule","translation":"exam.schedule","visibility":true,"submenu":[]},{"name":"exam_record_mark","translation":"exam.record","visibility":true,"submenu":[]},{"name":"exam_report_card","translation":"exam.report","visibility":true,"submenu":[]},{"name":"exam_topper_report","translation":"exam.topper_report","visibility":true,"submenu":[]},{"name":"online_exam","translation":"exam.online_exam","visibility":true,"submenu":[]}]}},{"module":"finance","translation":"finance.finance","menu":{"name":"finance","translation":"finance.finance","visibility":true,"submenu":[{"name":"fee_group","translation":"finance.fee_group","visibility":true,"submenu":[]},{"name":"fee_head","translation":"finance.fee_head","visibility":true,"submenu":[]},{"name":"transport_fee","translation":"transport.fee","visibility":true,"submenu":[]},{"name":"fee_concession","translation":"finance.fee_concession","visibility":true,"submenu":[]},{"name":"fee_allocation","translation":"finance.fee_allocation","visibility":true,"submenu":[]},{"name":"account","translation":"finance.account","visibility":true,"submenu":[]},{"name":"income","translation":"finance.income","visibility":true,"submenu":[]},{"name":"expense","translation":"finance.expense","visibility":true,"submenu":[]},{"name":"account_transfer","translation":"finance.account_transfer","visibility":true,"submenu":[]},{"name":"finance_report","translation":"general.report","visibility":true,"submenu":[]}]}},{"module":"transport","translation":"transport.transport","menu":{"name":"transport","translation":"transport.transport","visibility":true,"submenu":[{"name":"transport_route","translation":"transport.transport_route","visibility":true,"submenu":[]},{"name":"vehicle","translation":"transport.vehicle","visibility":true,"submenu":[]},{"name":"vehicle_incharge","translation":"transport.vehicle_incharge","visibility":true,"submenu":[]},{"name":"vehicle_document","translation":"transport.document","visibility":true,"submenu":[]},{"name":"vehicle_fuel","translation":"transport.fuel","visibility":true,"submenu":[]},{"name":"vehicle_log","translation":"transport.log","visibility":true,"submenu":[]},{"name":"vehicle_service_record","translation":"transport.service_record","visibility":true,"submenu":[]},{"name":"transport_report","translation":"general.report","visibility":true,"submenu":[]}]}},{"module":"calendar","translation":"calendar.calendar","menu":{"name":"calendar","translation":"calendar.calendar","visibility":true,"submenu":[{"name":"holiday","translation":"calendar.holiday","visibility":true,"submenu":[]},{"name":"event","translation":"calendar.event","visibility":true,"submenu":[]},{"name":"celebration","translation":"calendar.celebration","visibility":true,"submenu":[]}]}},{"module":"resource","translation":"resource.resource","menu":{"name":"resource","translation":"resource.resource","visibility":true,"submenu":[{"name":"assignment","translation":"resource.assignment","visibility":true,"submenu":[]},{"name":"notes","translation":"resource.notes","visibility":true,"submenu":[]},{"name":"lesson_plan","translation":"resource.lesson_plan","visibility":true,"submenu":[]},{"name":"syllabus","translation":"resource.syllabus","visibility":true,"submenu":[]}]}},{"module":"library","translation":"library.library","menu":{"name":"library","translation":"library.library","visibility":true,"submenu":[{"name":"book","translation":"library.book","visibility":true,"submenu":[]},{"name":"issue_book","translation":"library.issue","visibility":true,"submenu":[]},{"name":"return_book","translation":"library.return","visibility":true,"submenu":[]}]}},{"module":"inventory","translation":"inventory.inventory","menu":{"name":"inventory","translation":"inventory.inventory","visibility":true,"submenu":[{"name":"stock_category","translation":"inventory.stock_category","visibility":true,"submenu":[]},{"name":"stock_item","translation":"inventory.stock_item","visibility":true,"submenu":[]},{"name":"vendor","translation":"inventory.vendor","visibility":true,"submenu":[]},{"name":"stock_purchase","translation":"inventory.stock_purchase","visibility":true,"submenu":[]},{"name":"stock_transfer","translation":"inventory.stock_transfer","visibility":true,"submenu":[]}]}},{"module":"post","translation":"post.post","menu":{"name":"post","translation":"post.post","visibility":true,"submenu":[{"name":"post_feed","translation":"post.feed","visibility":true,"submenu":[]},{"name":"article","translation":"post.article","visibility":true,"submenu":[]}]}},{"module":"communication","translation":"communication.communication","menu":{"name":"communication","translation":"communication.communication","visibility":true,"submenu":[{"name":"meeting","translation":"communication.meeting","visibility":true,"submenu":[]},{"name":"my_meeting","translation":"communication.my_meeting","visibility":true,"submenu":[]},{"name":"communication_history","translation":"communication.history","visibility":true,"submenu":[]},{"name":"my_notification","translation":"communication.my_notification","visibility":true,"submenu":[]},{"name":"send_sms","translation":"communication.sms","visibility":true,"submenu":[]},{"name":"send_email","translation":"communication.email","visibility":true,"submenu":[]},{"name":"send_push_notification","translation":"communication.push_notification","visibility":true,"submenu":[]}]}},{"module":"frontend","translation":"frontend.frontend","menu":{"name":"frontend","translation":"frontend.frontend","visibility":true,"submenu":[{"name":"frontend_page","translation":"frontend.page","visibility":true,"submenu":[]},{"name":"frontend_menu","translation":"frontend.menu","visibility":true,"submenu":[]},{"name":"frontend_block","translation":"frontend.block","visibility":true,"submenu":[]}]}},{"module":"utility","translation":"utility.utility","menu":{"name":"utility","translation":"utility.utility","visibility":true,"submenu":[{"name":"todo","translation":"utility.todo","visibility":true,"submenu":[]},{"name":"backup","translation":"utility.backup","visibility":true,"submenu":[]},{"name":"ip_filter","translation":"utility.ip_filter","visibility":true,"submenu":[]}]}}]');

/***/ })

}]);
//# sourceMappingURL=defaultPage.js.map?id=af064ac3a5a98a48