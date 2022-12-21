"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/communication/meeting/my-meeting"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/my-meeting.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/my-meeting.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      meetings: {
        total: 0,
        data: []
      },
      filter: {
        sort_by: 'date',
        order: 'desc',
        page_length: helper.getConfig('page_length')
      },
      orderByOptions: [{
        value: 'created_at',
        translation: i18n.general.created_at
      }, {
        value: 'date',
        translation: i18n.communication.meeting_date
      }, {
        value: 'title',
        translation: i18n.communication.meeting_title
      }],
      help_topic: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-meeting')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.getMeetings();
    helper.showDemoNotification(['communication']);
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    getEmployeeName: function getEmployeeName(employee) {
      return helper.getEmployeeName(employee);
    },
    getEmployeeDesignationOnDate: function getEmployeeDesignationOnDate(employee, date) {
      return helper.getEmployeeDesignationOnDate(employee, date);
    },
    getMeetings: function getMeetings(page) {
      var _this = this;
      var loader = this.$loading.show();
      if (typeof page !== 'number') {
        page = 1;
      }
      var url = helper.getFilterURL(this.filter);
      axios.get('/api/my-meeting?page=' + page + url).then(function (response) {
        _this.meetings = response;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    showMeeting: function showMeeting(meeting) {
      this.$router.push('/communication/meeting/' + meeting.uuid);
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    }
  },
  filters: {
    moment: function moment(date) {
      return helper.formatDate(date);
    },
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    },
    momentTime: function momentTime(time) {
      return helper.formatTime(time);
    }
  },
  watch: {
    'filter.sort_by': function filterSort_by(val) {
      this.getMeetings();
    },
    'filter.order': function filterOrder(val) {
      this.getMeetings();
    },
    'filter.page_length': function filterPage_length(val) {
      this.getMeetings();
    }
  },
  computed: {
    authToken: function authToken() {
      return helper.getAuthToken();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/my-meeting.vue?vue&type=template&id=654c59c6&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/my-meeting.vue?vue&type=template&id=654c59c6& ***!
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
  }, [_vm._v(_vm._s(_vm.trans("communication.meeting")) + " \n                    "), _vm.meetings.total ? _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.total_result_found", {
    count: _vm.meetings.total,
    from: _vm.meetings.from,
    to: _vm.meetings.to
  })))]) : _c("span", {
    staticClass: "card-subtitle d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("general.no_result_found")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.meetings.total ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.trans("communication.meeting_title")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("communication.meeting_duration")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("communication.meeting_created_by")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("general.created_at")))]), _vm._v(" "), _c("th", {
    staticClass: "table-option"
  }, [_vm._v(_vm._s(_vm.trans("general.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.meetings.data, function (meeting) {
    return _c("tr", [_c("td", [_vm._v("\n                                    " + _vm._s(meeting.title) + "\n                                    "), meeting.is_live ? _c("span", {
      staticClass: "badge badge-success"
    }, [_vm._v(_vm._s(_vm.trans("communication.live")))]) : _vm._e(), _vm._v(" "), meeting.is_expired ? _c("span", {
      staticClass: "badge badge-danger"
    }, [_vm._v(_vm._s(_vm.trans("communication.expired")))]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(_vm._f("moment")(meeting.date)) + " "), meeting.start_time ? _c("span", [_vm._v(_vm._s(_vm._f("momentTime")(meeting.start_time)))]) : _vm._e(), _vm._v(" "), meeting.end_time ? _c("span", [_vm._v(" " + _vm._s(_vm.trans("general.to")) + " \n                                    " + _vm._s(_vm._f("momentTime")(meeting.end_time)))]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.getEmployeeName(meeting.user.employee)) + " "), _c("br"), _vm._v(" " + _vm._s(_vm.getEmployeeDesignationOnDate(meeting.user.employee, meeting.date)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("momentDateTime")(meeting.created_at)))]), _vm._v(" "), _c("td", {
      staticClass: "table-option"
    }, [_c("div", {
      staticClass: "btn-group"
    }, [_c("button", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.trans("general.view_detail"),
        expression: "trans('general.view_detail')"
      }],
      staticClass: "btn btn-success btn-sm",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.showMeeting(meeting);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-arrow-circle-right"
    })])])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), !_vm.meetings.total ? _c("module-info", {
    attrs: {
      module: "communication",
      title: "my_meeting_not_found_title",
      description: "my_meeting_not_found_description",
      icon: "list"
    }
  }) : _vm._e(), _vm._v(" "), _c("pagination-record", {
    attrs: {
      "page-length": _vm.filter.page_length,
      records: _vm.meetings
    },
    on: {
      "update:pageLength": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      "update:page-length": function updatePageLength($event) {
        return _vm.$set(_vm.filter, "page_length", $event);
      },
      updateRecords: _vm.getMeetings
    }
  })], 1)])]), _vm._v(" "), _c("right-panel", {
    attrs: {
      topic: _vm.help_topic
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/communication/meeting/my-meeting.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/communication/meeting/my-meeting.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _my_meeting_vue_vue_type_template_id_654c59c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-meeting.vue?vue&type=template&id=654c59c6& */ "./resources/js/views/communication/meeting/my-meeting.vue?vue&type=template&id=654c59c6&");
/* harmony import */ var _my_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-meeting.vue?vue&type=script&lang=js& */ "./resources/js/views/communication/meeting/my-meeting.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _my_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_meeting_vue_vue_type_template_id_654c59c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _my_meeting_vue_vue_type_template_id_654c59c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/communication/meeting/my-meeting.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/communication/meeting/my-meeting.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/communication/meeting/my-meeting.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_my_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./my-meeting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/my-meeting.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_my_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/communication/meeting/my-meeting.vue?vue&type=template&id=654c59c6&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/communication/meeting/my-meeting.vue?vue&type=template&id=654c59c6& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_my_meeting_vue_vue_type_template_id_654c59c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_my_meeting_vue_vue_type_template_id_654c59c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_my_meeting_vue_vue_type_template_id_654c59c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./my-meeting.vue?vue&type=template&id=654c59c6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/communication/meeting/my-meeting.vue?vue&type=template&id=654c59c6&");


/***/ })

}]);
//# sourceMappingURL=my-meeting.js.map?id=ff46a770f00178d3