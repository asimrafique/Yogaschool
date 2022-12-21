"use strict";
(self["webpackChunkInstiKit"] = self["webpackChunkInstiKit"] || []).push([["js/student/attendance/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      attendanceForm: new Form({
        batch_id: '',
        attendance_method: '',
        subject_id: '',
        session: '',
        date_of_attendance: '',
        students: []
      }, false),
      disable_filter: false,
      previous_date: '',
      holidays: [],
      all_holidays: [],
      attendance: {},
      attendances: [],
      disabled: {
        dates: []
      },
      all_disabled: {
        dates: []
      },
      header: [],
      student_data: [],
      days: 0,
      subjects: [],
      batches: [],
      selected_batch: null,
      selected_batch_detail: {},
      student_records: [],
      batch_with_subjects: [],
      attendance_methods: [],
      attendance_method_more_than_once_types: [],
      isEditable: false,
      isDeletable: false
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('list-student-attendance')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }
    this.attendanceForm.date_of_attendance = helper.getConfig('current_date');
    this.previous_date = this.attendanceForm.date_of_attendance;
    this.getPreRequisite();
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      return helper.hasPermission(permission);
    },
    resetFilter: function resetFilter() {
      this.student_data = [];
      this.disable_filter = false;
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;
      var loader = this.$loading.show();
      axios.get('/api/student/attendance/pre-requisite').then(function (response) {
        _this.attendance_methods = response.attendance_methods;
        _this.attendance_method_more_than_once_types = response.attendance_method_more_than_once_types;
        _this.batches = response.batches;
        _this.batch_with_subjects = response.batch_with_subjects;
        _this.holidays = response.holidays;
        _this.all_holidays = response.holidays;
        response.holidays.forEach(function (holiday) {
          _this.disabled.dates.push(new Date(holiday.date));
          _this.all_disabled.dates.push(new Date(holiday.date));
        });
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    dateSelected: function dateSelected() {},
    getStudent: function getStudent() {
      var _this2 = this;
      this.disable_filter = true;
      var loader = this.$loading.show();
      axios.post('/api/student/attendance/fetch', {
        batch_id: this.attendanceForm.batch_id,
        date_of_attendance: this.attendanceForm.date_of_attendance,
        subject_id: this.attendanceForm.subject_id,
        session: this.attendanceForm.session,
        attendance_method: this.attendanceForm.attendance_method
      }).then(function (response) {
        _this2.student_records = response.student_records;
        _this2.selected_batch_detail = response.batch;
        _this2.attendance = response.attendance;
        _this2.attendances = response.attendances;
        _this2.header = response.header;
        _this2.student_data = response.student_data;
        _this2.isEditable = response.is_editable;
        _this2.isDeletable = response.is_deletable;
        _this2.attendanceForm.students = response.current_date_attendance;
        loader.hide();
      })["catch"](function (error) {
        _this2.disable_filter = false;
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onBatchSelect: function onBatchSelect(selectedOption) {
      var _this3 = this;
      var loader = this.$loading.show();
      this.attendanceForm.batch_id = selectedOption.id;
      var batch = this.batch_with_subjects.find(function (o) {
        return o.id == _this3.attendanceForm.batch_id;
      });
      if (typeof batch == 'undefined') {
        return;
      }
      this.holidays = this.all_holidays;
      this.disabled.dates = this.all_disabled.dates;
      var holidays_except = batch.holidays_except && Array.isArray(batch.holidays_except) ? batch.holidays_except : [];
      holidays_except.forEach(function (holiday_except) {
        _this3.disabled.dates = _this3.disabled.dates.filter(function (o) {
          return helper.toDate(o) != helper.toDate(holiday_except);
        });
        _this3.holidays = _this3.holidays.filter(function (o) {
          return helper.toDate(o.date) != helper.toDate(holiday_except);
        });
      });
      this.attendanceForm.attendance_method = batch.options && batch.options.default_attendance_method ? batch.options.default_attendance_method : 'once';
      this.attendanceForm.subject_id = '';
      this.subjects = [];
      batch.subjects.forEach(function (subject) {
        _this3.subjects.push({
          id: subject.id,
          name: subject.name + ' (' + subject.code + ')'
        });
      });
      loader.hide();
    },
    onBatchRemove: function onBatchRemove(removedOption) {
      this.attendanceForm.batch_id = '';
      this.student_data = [];
      this.student_records = [];
    },
    currentDate: function currentDate(date) {
      if (date == moment(this.attendanceForm.date_of_attendance).format('D')) return true;
      return false;
    },
    toggleAttendance: function toggleAttendance(student, day) {
      if (!this.isEditable) {
        return;
      }
      var options = ['late'];
      if (this.attendanceForm.attendance_method == 'once') {
        options.push('half_day');
      }
      options.push('present');
      options.push('absent');
      var record_detail = this.student_data.find(function (o) {
        return o.id == student.id;
      });
      var record = record_detail.attendances[day];
      var index = options.indexOf(record.label);
      index = ++index % options.length;
      record.label = options[index];
      var data = this.attendanceForm.students.find(function (o) {
        return o.id == student.id;
      });
      data.attendance = options[index];
    },
    markAllPresent: function markAllPresent() {
      var _this4 = this;
      var day = moment(this.attendanceForm.date_of_attendance).format('D');
      this.student_data.forEach(function (student) {
        if (student.sno) {
          var record = student.attendances[day];
          if (record.label != 'unavailable') {
            record.label = 'present';
            var data = _this4.attendanceForm.students.find(function (o) {
              return o.id == student.id;
            });
            data.attendance = 'present';
          }
        }
      });
    },
    markAllAbsent: function markAllAbsent() {
      var _this5 = this;
      var day = moment(this.attendanceForm.date_of_attendance).format('D');
      this.student_data.forEach(function (student) {
        if (student.sno) {
          var record = student.attendances[day];
          if (record.label != 'unavailable') {
            record.label = 'absent';
            var data = _this5.attendanceForm.students.find(function (o) {
              return o.id == student.id;
            });
            data.attendance = 'absent';
          }
        }
      });
    },
    submit: function submit() {
      var _this6 = this;
      var loader = this.$loading.show();
      this.attendanceForm.post('/api/student/attendance').then(function (response) {
        _this6.getStudent();
        toastr.success(response.message);
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    confirmDelete: function confirmDelete() {
      var _this7 = this;
      return function (dialog) {
        return _this7.deleteAttendance();
      };
    },
    deleteAttendance: function deleteAttendance() {
      var _this8 = this;
      var loader = this.$loading.show();
      axios.post('/api/student/attendance/delete', {
        batch_id: this.attendanceForm.batch_id,
        date_of_attendance: this.attendanceForm.date_of_attendance,
        subject_id: this.attendanceForm.subject_id,
        session: this.attendanceForm.session
      }).then(function (response) {
        toastr.success(response.message);
        _this8.getStudent();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    confirmDefault: function confirmDefault() {
      var _this9 = this;
      return function (dialog) {
        return _this9.defaultAttendance();
      };
    },
    defaultAttendance: function defaultAttendance() {
      var _this10 = this;
      var loader = this.$loading.show();
      axios.post('/api/student/attendance/default', {
        batch_id: this.attendanceForm.batch_id,
        date_of_attendance: this.attendanceForm.date_of_attendance,
        subject_id: this.attendanceForm.subject_id,
        session: this.attendanceForm.session
      }).then(function (response) {
        toastr.success(response.message);
        _this10.getStudent();
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    }
  },
  computed: {},
  filters: {
    moment: function moment(date) {
      return helper.formatDate(date);
    },
    momentDateTime: function momentDateTime(date) {
      return helper.formatDateTime(date);
    }
  },
  watch: {
    'attendanceForm.date_of_attendance': function attendanceFormDate_of_attendance(val) {
      this.days = moment(val, "YYYY-MM").daysInMonth();
      this.previous_date = helper.toDate(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=template&id=77c1c502&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=template&id=77c1c502& ***!
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
  return _c("div", [_c("div", {
    staticClass: "page-titles"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("h3", {
    staticClass: "text-themecolor"
  }, [_vm._v(_vm._s(_vm.trans("student.attendance")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("div", {
    staticClass: "action-buttons pull-right"
  }, [_vm.attendanceForm.date_of_attendance ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("student.absentee"),
      expression: "trans('student.absentee')"
    }],
    staticClass: "btn btn-info btn-sm",
    on: {
      click: function click($event) {
        return _vm.$router.push("/student/attendance/absentee");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-user-minus"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline"
  }, [_vm._v(_vm._s(_vm.trans("student.absentee")))])]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
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
        return _vm.attendanceForm.errors.clear($event.target.name);
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
  }, [_vm._v(_vm._s(_vm.trans("academic.batch")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      disabled: _vm.disable_filter,
      label: "name",
      "group-values": "batches",
      "group-label": "course_group",
      "group-select": false,
      name: "batch_id",
      id: "batch_id",
      options: _vm.batches,
      placeholder: _vm.trans("academic.select_batch")
    },
    on: {
      select: _vm.onBatchSelect,
      close: function close($event) {
        return _vm.attendanceForm.errors.clear("batch_id");
      },
      remove: _vm.onBatchRemove
    },
    model: {
      value: _vm.selected_batch,
      callback: function callback($$v) {
        _vm.selected_batch = $$v;
      },
      expression: "selected_batch"
    }
  }, [!_vm.batches.length ? _c("div", {
    staticClass: "multiselect__option",
    attrs: {
      slot: "afterList"
    },
    slot: "afterList"
  }, [_vm._v("\n\t\t\t\t                            " + _vm._s(_vm.trans("general.no_option_found")) + "\n\t\t\t\t                        ")]) : _vm._e()]), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.attendanceForm,
      "prop-name": "batch_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.attendance_method")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.attendanceForm.attendance_method,
      expression: "attendanceForm.attendance_method"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      disabled: _vm.disable_filter,
      name: "attendance_method"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.attendanceForm, "attendance_method", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.attendance_methods, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n\t                                    " + _vm._s(option.text) + "\n\t                                  ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.attendanceForm,
      "prop-name": "attendance_method"
    }
  })], 1)]), _vm._v(" "), _vm.attendanceForm.attendance_method == "more_than_once" ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.attendance_session")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.attendanceForm.session,
      expression: "attendanceForm.session"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      disabled: _vm.disable_filter,
      name: "session"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.attendanceForm, "session", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.attendance_method_more_than_once_types, function (option) {
    return _c("option", {
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n\t                                    " + _vm._s(option.text) + "\n\t                                  ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.attendanceForm,
      "prop-name": "session"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.attendanceForm.attendance_method == "subject_wise" ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("academic.subject")) + " ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.attendanceForm.subject_id,
      expression: "attendanceForm.subject_id"
    }],
    staticClass: "custom-select col-12",
    attrs: {
      disabled: _vm.disable_filter,
      name: "subject_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.attendanceForm, "subject_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.trans("general.select_one")))]), _vm._v(" "), _vm._l(_vm.subjects, function (option) {
    return _c("option", {
      domProps: {
        value: option.id
      }
    }, [_vm._v("\n\t                                    " + _vm._s(option.name) + "\n\t                                  ")]);
  })], 2), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.attendanceForm,
      "prop-name": "subject_id"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.attendanceForm.batch_id ? _c("div", {
    staticClass: "col-12 col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.trans("student.date_of_attendance")))]), _vm._v(" "), _c("datepicker", {
    attrs: {
      disabled: _vm.disable_filter,
      bootstrapStyling: true,
      disabledDates: _vm.disabled,
      placeholder: _vm.trans("student.date_of_attendance")
    },
    on: {
      selected: _vm.dateSelected
    },
    model: {
      value: _vm.attendanceForm.date_of_attendance,
      callback: function callback($$v) {
        _vm.$set(_vm.attendanceForm, "date_of_attendance", $$v);
      },
      expression: "attendanceForm.date_of_attendance"
    }
  }), _vm._v(" "), _c("show-error", {
    attrs: {
      "form-name": _vm.attendanceForm,
      "prop-name": "date_of_attendance"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [!_vm.disable_filter ? _c("button", {
    staticClass: "btn btn-info waves-effect waves-light",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.getStudent
    }
  }, [_vm._v(_vm._s(_vm.trans("general.proceed")))]) : _c("button", {
    staticClass: "btn btn-danger m-r-10",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.resetFilter
    }
  }, [_vm._v(_vm._s(_vm.trans("general.reset")))])]), _vm._v(" "), _vm.student_data.length ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive font-90pc p-2"
  }, [_c("table", {
    staticClass: "table table-sm table-bordered attendance-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.trans("student.name")))]), _vm._v(" "), _vm._l(_vm.header, function (header_date) {
    return _c("th", {
      "class": ["date-cell"]
    }, [_vm._v(_vm._s(header_date))]);
  }), _vm._v(" "), _c("th")], 2)]), _vm._v(" "), _c("tbody", _vm._l(_vm.student_data, function (student) {
    return student.sno ? _c("tr", [_c("td", [_vm._v(_vm._s(student.sno))]), _vm._v(" "), _c("td", {
      staticStyle: {
        "font-size": "120%"
      }
    }, [_vm._v(_vm._s(student.name))]), _vm._v(" "), _vm._l(student.attendances, function (attendance_record, index) {
      return _c("td", {
        "class": [attendance_record.label == "holiday" || attendance_record.label == "unavailable" ? "disabled" : ""]
      }, [_c("span", {
        staticClass: "marking-cell"
      }, [attendance_record.label == "unavailable" ? _c("span") : attendance_record.label == "holiday" ? _c("span", {
        directives: [{
          name: "tooltip",
          rawName: "v-tooltip",
          value: attendance_record.description,
          expression: "attendance_record.description"
        }]
      }, [_c("i", {
        staticClass: "fas fa-hospital-symbol"
      })]) : _vm.currentDate(index) ? _c("span", {
        "class": ["marking-cell", _vm.isEditable ? "pointer" : ""],
        on: {
          click: function click($event) {
            return _vm.toggleAttendance(student, index);
          }
        }
      }, [attendance_record.label == "present" ? _c("i", {
        staticClass: "fas fa-check text-success"
      }) : _vm._e(), _vm._v(" "), attendance_record.label == "late" ? _c("i", {
        staticClass: "fas fa-history text-info"
      }) : _vm._e(), _vm._v(" "), attendance_record.label == "half_day" ? _c("i", {
        staticClass: "fas fa-coffee text-warning"
      }) : _vm._e(), _vm._v(" "), attendance_record.label == "unmarked" || attendance_record.label == "absent" ? _c("i", {
        staticClass: "fas fa-times text-danger"
      }) : _vm._e()]) : _c("span", {
        staticClass: "marking-cell"
      }, [attendance_record.label == "present" ? _c("i", {
        staticClass: "fas fa-check text-success"
      }) : _vm._e(), _vm._v(" "), attendance_record.label == "late" ? _c("i", {
        staticClass: "fas fa-history text-info"
      }) : _vm._e(), _vm._v(" "), attendance_record.label == "half_day" ? _c("i", {
        staticClass: "fas fa-coffee text-warning"
      }) : _vm._e(), _vm._v(" "), attendance_record.label == "absent" ? _c("i", {
        staticClass: "fas fa-times text-danger"
      }) : _vm._e()])])]);
    }), _vm._v(" "), _c("td", [_vm._v(_vm._s(student.monthly_count))])], 2) : _c("tr", [_c("th"), _vm._v(" "), _c("th", {
      staticStyle: {
        "font-size": "120%"
      }
    }, [_vm._v(_vm._s(student.name))]), _vm._v(" "), _vm._l(student.attendances, function (attendance_record) {
      return _c("th", {
        "class": ["date-cell"]
      }, [_vm._v(_vm._s(attendance_record.count))]);
    }), _vm._v(" "), _c("th")], 2);
  }), 0)])])])]) : _vm._e(), _vm._v(" "), !_vm.student_data.length && _vm.disable_filter ? _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p", {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.trans("general.no_data_found", {
    data: _vm.trans("student.student")
  })))])])]) : _vm._e(), _vm._v(" "), _vm.student_data.length && _vm.isEditable ? _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-success pull-right",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.save")))]), _vm._v(" "), _vm.isEditable && _vm.attendance && !_vm.attendance.is_default ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.trans("student.attendance_default_description"),
      expression: "trans('student.attendance_default_description')"
    }, {
      name: "confirm",
      rawName: "v-confirm",
      value: {
        ok: _vm.confirmDefault()
      },
      expression: "{ok: confirmDefault()}"
    }],
    key: "make-attendance-default",
    staticClass: "btn btn-info pull-right m-r-10",
    attrs: {
      type: "button"
    }
  }, [_vm._v(_vm._s(_vm.trans("student.attendance_default")))]) : _vm._e(), _vm._v(" "), _vm.isEditable && _vm.isDeletable ? _c("button", {
    directives: [{
      name: "confirm",
      rawName: "v-confirm",
      value: {
        ok: _vm.confirmDelete()
      },
      expression: "{ok: confirmDelete()}"
    }],
    key: "delete-attendance",
    staticClass: "btn btn-danger pull-right m-r-10",
    attrs: {
      type: "button"
    }
  }, [_vm._v(_vm._s(_vm.trans("general.delete")))]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.markAllPresent
    }
  }, [_vm._v(_vm._s(_vm.trans("student.attendance_mark_all_present")))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.markAllAbsent
    }
  }, [_vm._v(_vm._s(_vm.trans("student.attendance_mark_all_absent")))])]) : _vm._e(), _vm._v(" "), _vm.student_data.length ? _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("span", {
    staticClass: "mr-2"
  }, [_c("i", {
    staticClass: "fas fa-check text-success"
  }), _vm._v(" " + _vm._s(_vm.trans("student.attendance_present")))]), _vm._v(" "), _c("span", {
    staticClass: "mr-2"
  }, [_c("i", {
    staticClass: "fas fa-history text-info"
  }), _vm._v(" " + _vm._s(_vm.trans("student.attendance_late")))]), _vm._v(" "), _c("span", {
    staticClass: "mr-2"
  }, [_c("i", {
    staticClass: "fas fa-coffee text-warning"
  }), _vm._v(" " + _vm._s(_vm.trans("student.attendance_half_day")))]), _vm._v(" "), _c("span", {}, [_c("i", {
    staticClass: "fas fa-times text-danger"
  }), _vm._v(" " + _vm._s(_vm.trans("student.attendance_absent")))])])]) : _vm._e()])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=style&index=0&id=77c1c502&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=style&index=0&id=77c1c502&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.disabled{\n\tbackground-color:#f1f2f3;\n}\n.current {\n\tfont-weight: 500;\n\tfont-size: 120%;\n}\n.attendance-table tr th.date-cell{\n\ttext-align: center;\n\tmin-width: 20px;\n\tmax-width: 20px;\n}\n.attendance-table tr td span.marking-cell {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/student/attendance/index.vue"],"names":[],"mappings":";AAkcA;CACA,wBAAA;AACA;AACA;CACA,gBAAA;CACA,eAAA;AACA;AACA;CACA,kBAAA;CACA,eAAA;CACA,eAAA;AACA;AACA;CACA,cAAA;CACA,WAAA;CACA,YAAA;CACA,kBAAA;AACA","sourcesContent":["<template>\n    <div>\n        <div class=\"page-titles\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-6\">\n            \t\t<h3 class=\"text-themecolor\">{{trans('student.attendance')}}</h3>\n            \t</div>\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"action-buttons pull-right\">\n                        <button class=\"btn btn-info btn-sm\" v-if=\"attendanceForm.date_of_attendance\" @click=\"$router.push('/student/attendance/absentee')\" v-tooltip=\"trans('student.absentee')\"><i class=\"fas fa-user-minus\"></i> <span class=\"d-none d-sm-inline\">{{trans('student.absentee')}}</span></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"container-fluid\">\n        \t<div class=\"card\">\n        \t\t<div class=\"card-body p-4\">\n\t\t\t\t    <form @submit.prevent=\"submit\" @keydown=\"attendanceForm.errors.clear($event.target.name)\">\n\t\t\t\t        <div class=\"row\">\n\t\t\t\t            <div class=\"col-12 col-sm-3\">\n\t\t\t\t                <div class=\"form-group\">\n\t\t\t\t                    <label for=\"\">{{trans('academic.batch')}}</label>\n\t\t\t\t                    <v-select :disabled=\"disable_filter\" label=\"name\" v-model=\"selected_batch\" group-values=\"batches\" group-label=\"course_group\" :group-select=\"false\" name=\"batch_id\" id=\"batch_id\" :options=\"batches\" :placeholder=\"trans('academic.select_batch')\" @select=\"onBatchSelect\" @close=\"attendanceForm.errors.clear('batch_id')\" @remove=\"onBatchRemove\">\n\t\t\t\t                        <div class=\"multiselect__option\" slot=\"afterList\" v-if=\"!batches.length\">\n\t\t\t\t                            {{trans('general.no_option_found')}}\n\t\t\t\t                        </div>\n\t\t\t\t                    </v-select>\n\t\t\t\t                    <show-error :form-name=\"attendanceForm\" prop-name=\"batch_id\"></show-error>\n\t\t\t\t                </div>\n\t\t\t\t            </div>\n\t                        <div class=\"col-12 col-sm-3\">\n\t                            <div class=\"form-group\">\n\t                                <label for=\"\">{{trans('student.attendance_method')}}</label>\n\t                                <select :disabled=\"disable_filter\" v-model=\"attendanceForm.attendance_method\" class=\"custom-select col-12\" name=\"attendance_method\">\n\t                                  <option value=\"\" selected>{{trans('general.select_one')}}</option>\n\t                                  <option v-for=\"option in attendance_methods\" v-bind:value=\"option.value\">\n\t                                    {{ option.text }}\n\t                                  </option>\n\t                                </select>\n\t                                <show-error :form-name=\"attendanceForm\" prop-name=\"attendance_method\"></show-error>\n\t                            </div>\n\t                        </div>\n\t                        <div class=\"col-12 col-sm-3\" v-if=\"attendanceForm.attendance_method == 'more_than_once'\">\n\t                            <div class=\"form-group\">\n\t                                <label for=\"\">{{trans('student.attendance_session')}}</label>\n\t                                <select :disabled=\"disable_filter\" v-model=\"attendanceForm.session\" class=\"custom-select col-12\" name=\"session\">\n\t                                  <option value=\"\" selected>{{trans('general.select_one')}}</option>\n\t                                  <option v-for=\"option in attendance_method_more_than_once_types\" v-bind:value=\"option.value\">\n\t                                    {{ option.text }}\n\t                                  </option>\n\t                                </select>\n\t                                <show-error :form-name=\"attendanceForm\" prop-name=\"session\"></show-error>\n\t                            </div>\n\t                        </div>\n\t\t\t                <div class=\"col-12 col-sm-3\" v-if=\"attendanceForm.attendance_method == 'subject_wise'\">\n\t\t\t                    <div class=\"form-group\">\n\t\t\t                        <label for=\"\">{{trans('academic.subject')}} </label>\n\t                                <select :disabled=\"disable_filter\" v-model=\"attendanceForm.subject_id\" class=\"custom-select col-12\" name=\"subject_id\">\n\t                                  <option value=\"\" selected>{{trans('general.select_one')}}</option>\n\t                                  <option v-for=\"option in subjects\" v-bind:value=\"option.id\">\n\t                                    {{ option.name }}\n\t                                  </option>\n\t                                </select>\n\t\t\t                        <show-error :form-name=\"attendanceForm\" prop-name=\"subject_id\"></show-error>\n\t\t\t                    </div>\n\t\t\t                </div>\n\t\t\t\t            <div class=\"col-12 col-sm-3\" v-if=\"attendanceForm.batch_id\">\n\t\t\t\t                <div class=\"form-group\">\n\t\t\t\t                    <label for=\"\">{{trans('student.date_of_attendance')}}</label>\n\t\t\t\t                    <datepicker :disabled=\"disable_filter\" v-model=\"attendanceForm.date_of_attendance\" :bootstrapStyling=\"true\" @selected=\"dateSelected\" :disabledDates=\"disabled\" :placeholder=\"trans('student.date_of_attendance')\"></datepicker>\n\t\t\t\t                    <show-error :form-name=\"attendanceForm\" prop-name=\"date_of_attendance\"></show-error>\n\t\t\t\t                </div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t            <div class=\"text-right\">\n\t\t\t                <button type=\"button\" v-if=\"! disable_filter\" @click=\"getStudent\" class=\"btn btn-info waves-effect waves-light\">{{trans('general.proceed')}}</button>\n                            <button type=\"button\" v-else @click=\"resetFilter\" class=\"btn btn-danger m-r-10\">{{trans('general.reset')}}</button>\n\t\t\t            </div>\n\n\t\t\t\t        <div class=\"row\" v-if=\"student_data.length\">\n\t\t\t\t            <div class=\"col-12\">\n\t\t\t\t            \t<div class=\"table-responsive font-90pc p-2\">\n\t\t\t\t            \t\t<table class=\"table table-sm table-bordered attendance-table\">\n\t\t\t\t            \t\t\t<thead>\n\t\t\t\t            \t\t\t\t<tr>\n\t\t\t\t            \t\t\t\t\t<th>#</th>\n\t\t\t\t            \t\t\t\t\t<th>{{trans('student.name')}}</th>\n\t\t\t\t            \t\t\t\t\t<th :class=\"['date-cell']\" v-for=\"header_date in header\">{{header_date}}</th>\n\t\t\t\t            \t\t\t\t\t<th></th>\n\t\t\t\t            \t\t\t\t</tr>\t\n\t\t\t\t            \t\t\t</thead>\n\t\t\t\t            \t\t\t<tbody>\n\t\t\t\t            \t\t\t\t<tr v-for=\"student in student_data\" v-if=\"student.sno\">\n\t\t\t\t            \t\t\t\t\t<td>{{student.sno}}</td>\n\t\t\t\t            \t\t\t\t\t<td style=\"font-size:120%;\">{{student.name}}</td>\n\t\t\t\t            \t\t\t\t\t<td :class=\"[(attendance_record.label == 'holiday' || attendance_record.label == 'unavailable') ? 'disabled' : '']\" v-for=\"(attendance_record,index) in student.attendances\">\n\t\t\t\t            \t\t\t\t\t\t<span class=\"marking-cell\">\n\t\t\t\t            \t\t\t\t\t\t\t<span v-if=\"attendance_record.label == 'unavailable'\"></span>\n\t\t\t\t            \t\t\t\t\t\t\t<span v-else-if=\"attendance_record.label == 'holiday'\" v-tooltip=\"attendance_record.description\">\n\t\t\t\t            \t\t\t\t\t\t\t\t<i class=\"fas fa-hospital-symbol\"></i>\n\t\t\t\t            \t\t\t\t\t\t\t</span>\n\t\t\t\t\t            \t\t\t\t\t\t<span :class=\"['marking-cell', isEditable ? 'pointer' : '']\" v-else-if=\"currentDate(index)\" @click=\"toggleAttendance(student, index)\">\n\t\t\t\t\t            \t\t\t\t\t\t\t<i class=\"fas fa-check text-success\" v-if=\"attendance_record.label == 'present'\"></i>\n\t\t\t\t\t            \t\t\t\t\t\t\t<i class=\"fas fa-history text-info\" v-if=\"attendance_record.label == 'late'\"></i>\n\t\t\t\t\t            \t\t\t\t\t\t\t<i class=\"fas fa-coffee text-warning\" v-if=\"attendance_record.label == 'half_day'\"></i>\n\t\t\t\t\t            \t\t\t\t\t\t\t<i class=\"fas fa-times text-danger\" v-if=\"attendance_record.label == 'unmarked' || attendance_record.label == 'absent'\"></i>\n\t\t\t\t\t            \t\t\t\t\t\t</span>\n\t\t\t\t\t            \t\t\t\t\t\t<span class=\"marking-cell\" v-else>\n\t\t\t\t\t            \t\t\t\t\t\t\t<i class=\"fas fa-check text-success\" v-if=\"attendance_record.label == 'present'\"></i>\n\t\t\t\t\t            \t\t\t\t\t\t\t<i class=\"fas fa-history text-info\" v-if=\"attendance_record.label == 'late'\"></i>\n\t\t\t\t\t            \t\t\t\t\t\t\t<i class=\"fas fa-coffee text-warning\" v-if=\"attendance_record.label == 'half_day'\"></i>\n\t\t\t\t\t            \t\t\t\t\t\t\t<i class=\"fas fa-times text-danger\" v-if=\"attendance_record.label == 'absent'\"></i>\n\t\t\t\t\t            \t\t\t\t\t\t</span>\n\t\t\t\t            \t\t\t\t\t\t</span>\n\t\t\t\t            \t\t\t\t\t</td>\n\t\t\t\t            \t\t\t\t\t<td>{{student.monthly_count}}</td>\n\t\t\t\t            \t\t\t\t</tr>\n\t\t\t\t            \t\t\t\t<tr v-else>\n\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"font-size:120%;\">{{student.name}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th :class=\"['date-cell']\" v-for=\"attendance_record in student.attendances\">{{attendance_record.count}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t            \t\t\t\t</tr>\n\t\t\t\t            \t\t\t</tbody>\n\t\t\t\t            \t\t</table>\n\t\t\t\t            \t</div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\n\t\t\t\t        <div class=\"row mt-2\" v-if=\"!student_data.length && disable_filter\">\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<p class=\"alert alert-danger\">{{trans('general.no_data_found', {data: trans('student.student')})}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"form-group\" v-if=\"student_data.length && isEditable\">\n\t\t\t\t        \t<button type=\"submit\" class=\"btn btn-success pull-right\">{{trans('general.save')}}</button>\n\t\t\t\t        \t<button type=\"button\" class=\"btn btn-info pull-right m-r-10\" v-if=\"isEditable && attendance && ! attendance.is_default\" key=\"make-attendance-default\" v-tooltip=\"trans('student.attendance_default_description')\" v-confirm=\"{ok: confirmDefault()}\">{{trans('student.attendance_default')}}</button>\n\t\t\t\t        \t<button type=\"button\" class=\"btn btn-danger pull-right m-r-10\" v-if=\"isEditable && isDeletable\" key=\"delete-attendance\" v-confirm=\"{ok: confirmDelete()}\">{{trans('general.delete')}}</button>\n\t\t\t\t        \t<button type=\"button\" @click=\"markAllPresent\" class=\"btn btn-info btn-sm\">{{trans('student.attendance_mark_all_present')}}</button>\n\t\t\t\t        \t<button type=\"button\" @click=\"markAllAbsent\" class=\"btn btn-info btn-sm\">{{trans('student.attendance_mark_all_absent')}}</button>\n\t\t\t\t        </div>\n\n\t\t\t\t        <div class=\"row mt-2\" v-if=\"student_data.length\">\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<span class=\"mr-2\"><i class=\"fas fa-check text-success\"></i> {{trans('student.attendance_present')}}</span>\n\t\t\t\t\t\t\t\t<span class=\"mr-2\"><i class=\"fas fa-history text-info\"></i> {{trans('student.attendance_late')}}</span>\n\t\t\t\t\t\t\t\t<span class=\"mr-2\"><i class=\"fas fa-coffee text-warning\"></i> {{trans('student.attendance_half_day')}}</span>\n\t\t\t\t\t\t\t\t<span class=\"\"><i class=\"fas fa-times text-danger\"></i> {{trans('student.attendance_absent')}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t        </div>\n\t\t\t\t    </form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\n\texport default {\n\t\tcomponents: {},\n\t\tdata(){\n\t\t\treturn {\n\t\t\t\tattendanceForm: new Form({\n\t\t\t\t\tbatch_id: '',\n\t\t\t\t\tattendance_method: '',\n\t\t\t\t\tsubject_id: '',\n\t\t\t\t\tsession: '',\n\t\t\t\t\tdate_of_attendance: '',\n\t\t\t\t\tstudents: []\n\t\t\t\t},false),\n                disable_filter: false,\n\t\t\t\tprevious_date: '',\n\t\t\t\tholidays: [],\n\t\t\t\tall_holidays: [],\n\t\t\t\tattendance: {},\n\t\t\t\tattendances: [],\n\t\t\t\tdisabled: {\n\t\t\t\t\tdates:[]\n\t\t\t\t},\n\t\t\t\tall_disabled: {\n\t\t\t\t\tdates:[]\n\t\t\t\t},\n\t\t\t\theader: [],\n\t\t\t\tstudent_data: [],\n\t\t\t\tdays: 0,\n\t\t\t\tsubjects: [],\n\t\t\t\tbatches: [],\n\t\t\t\tselected_batch: null,\n\t\t\t\tselected_batch_detail: {},\n\t\t\t\tstudent_records: [],\n\t\t\t\tbatch_with_subjects: [],\n\t\t\t\tattendance_methods: [],\n\t\t\t\tattendance_method_more_than_once_types: [],\n\t\t\t\tisEditable: false,\n\t\t\t\tisDeletable: false\n\t\t\t}\n\t\t},\n\t\tmounted(){\n\t\t\tif(!helper.hasPermission('list-student-attendance')){\n                helper.notAccessibleMsg();\n                this.$router.push('/dashboard');\n\t\t\t}\n\n\t\t\tthis.attendanceForm.date_of_attendance = helper.getConfig('current_date');\n\t\t\tthis.previous_date = this.attendanceForm.date_of_attendance;\n\t\t\tthis.getPreRequisite();\n\t\t},\n\t\tmethods: {\n\t\t\thasPermission(permission){\n\t\t\t\treturn helper.hasPermission(permission);\n\t\t\t},\n            resetFilter(){\n            \tthis.student_data = [];\n                this.disable_filter = false;\n            },\n\t\t\tgetPreRequisite(){\n\t\t\t\tlet loader = this.$loading.show();\n\t\t\t\taxios.get('/api/student/attendance/pre-requisite')\n\t\t\t\t\t.then(response => {\n\t\t\t\t\t\tthis.attendance_methods = response.attendance_methods;\n\t\t\t\t\t\tthis.attendance_method_more_than_once_types = response.attendance_method_more_than_once_types;\n\t\t\t\t\t\tthis.batches = response.batches;\n\t\t\t\t\t\tthis.batch_with_subjects = response.batch_with_subjects;\n\t\t\t\t\t\tthis.holidays = response.holidays;\n\t\t\t\t\t\tthis.all_holidays = response.holidays;\n\t\t                response.holidays.forEach(holiday => {\n\t\t                    this.disabled.dates.push(new Date(holiday.date));\n\t\t                    this.all_disabled.dates.push(new Date(holiday.date));\n\t\t                });\n\t\t\t\t\t\tloader.hide();\n\t\t\t\t\t})\n\t\t\t\t\t.catch(error => {\n\t\t\t\t\t\tloader.hide();\n\t\t\t\t\t\thelper.showErrorMsg(error);\n\t\t\t\t\t})\n\t\t\t},\n\t\t\tdateSelected(){\n\t\t\t},\n\t\t\tgetStudent(){\n\t\t\t\tthis.disable_filter = true;\n\t\t\t\tlet loader = this.$loading.show();\n\t\t\t\taxios.post('/api/student/attendance/fetch', {\n\t\t\t\t\tbatch_id: this.attendanceForm.batch_id, \n\t\t\t\t\tdate_of_attendance: this.attendanceForm.date_of_attendance,\n\t\t\t\t\tsubject_id: this.attendanceForm.subject_id,\n\t\t\t\t\tsession: this.attendanceForm.session,\n\t\t\t\t\tattendance_method: this.attendanceForm.attendance_method\n\t\t\t\t})\n\t\t\t\t\t.then(response => {\n\t\t\t\t\t\tthis.student_records = response.student_records;\n\t\t\t\t\t\tthis.selected_batch_detail = response.batch;\n\t\t\t\t\t\tthis.attendance = response.attendance;\n\t\t\t\t\t\tthis.attendances = response.attendances;\n\t\t\t\t\t\tthis.header = response.header;\n\t\t\t\t\t\tthis.student_data = response.student_data;\n\t\t\t\t\t\tthis.isEditable = response.is_editable;\n\t\t\t\t\t\tthis.isDeletable = response.is_deletable;\n\t\t\t\t\t\tthis.attendanceForm.students = response.current_date_attendance;\n\t\t\t\t\t\tloader.hide();\n\t\t\t\t\t})\n\t\t\t\t\t.catch(error => {\n\t\t\t\t\t\tthis.disable_filter = false;\n\t\t\t\t\t\tloader.hide();\n\t\t\t\t\t\thelper.showErrorMsg(error);\n\t\t\t\t\t})\n\t\t\t},\n\t\t\tonBatchSelect(selectedOption){\n\t\t\t\tlet loader = this.$loading.show();\n\t\t\t\tthis.attendanceForm.batch_id = selectedOption.id;\n                let batch = this.batch_with_subjects.find(o => o.id == this.attendanceForm.batch_id);\n\n                if (typeof batch == 'undefined') {\n                \treturn;\n                }\n\n                this.holidays = this.all_holidays;\n                this.disabled.dates = this.all_disabled.dates;\n                let holidays_except = batch.holidays_except && Array.isArray(batch.holidays_except) ? batch.holidays_except : [];\n\n                holidays_except.forEach(holiday_except => {\n\t                this.disabled.dates = this.disabled.dates.filter(o => helper.toDate(o) != helper.toDate(holiday_except));\n\t                this.holidays = this.holidays.filter(o => helper.toDate(o.date) != helper.toDate(holiday_except));\n                })\n\n\t\t\t\tthis.attendanceForm.attendance_method = batch.options && batch.options.default_attendance_method ? batch.options.default_attendance_method : 'once';\n\n\t\t\t\tthis.attendanceForm.subject_id = '';\n                this.subjects = [];\n\n                batch.subjects.forEach(subject => {\n                \tthis.subjects.push({\n                \t\tid: subject.id,\n                \t\tname: subject.name+' ('+subject.code+')'\n                \t});\n                });\n\n\t\t\t\tloader.hide();\n\t\t\t},\n\t\t\tonBatchRemove(removedOption){\n\t\t\t\tthis.attendanceForm.batch_id = '';\n\t\t\t\tthis.student_data = [];\n\t\t\t\tthis.student_records = [];\n\t\t\t},\n\t\t\tcurrentDate(date){\n\t\t\t\tif (date == moment(this.attendanceForm.date_of_attendance).format('D'))\n\t\t\t\t\treturn true;\n\n\t\t\t\treturn false;\n\t\t\t},\n\t\t\ttoggleAttendance(student, day){\n\t\t\t\tif (! this.isEditable) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tlet options = ['late'];\n\t\t\t\tif (this.attendanceForm.attendance_method == 'once') {\n\t\t\t\t\toptions.push('half_day');\n\t\t\t\t}\n\t\t\t\toptions.push('present');\n\t\t\t\toptions.push('absent');\n\t\t\t\tlet record_detail = this.student_data.find(o => o.id == student.id);\n\t\t\t\tlet record = record_detail.attendances[day];\n\t\t\t\tlet index = options.indexOf(record.label);\n\t\t\t\tindex = ++index%options.length; \n\t\t\t\trecord.label = options[index];\n\n\t\t\t\tlet data = this.attendanceForm.students.find(o => o.id == student.id);\n\t\t\t\tdata.attendance = options[index];\n\t\t\t},\n\t\t\tmarkAllPresent(){\n\t\t\t\tlet day = moment(this.attendanceForm.date_of_attendance).format('D');\n\t\t\t\tthis.student_data.forEach(student => {\n\t\t\t\t\tif (student.sno) {\n\t\t\t\t\t\tlet record = student.attendances[day];\n\t\t\t\t\t\tif (record.label != 'unavailable') {\n\t\t\t\t\t\t\trecord.label = 'present';\n\n\t\t\t\t\t\t\tlet data = this.attendanceForm.students.find(o => o.id == student.id);\n\t\t\t\t\t\t\tdata.attendance = 'present';\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t},\n\t\t\tmarkAllAbsent(){\n\t\t\t\tlet day = moment(this.attendanceForm.date_of_attendance).format('D');\n\t\t\t\tthis.student_data.forEach(student => {\n\t\t\t\t\tif (student.sno) {\n\t\t\t\t\t\tlet record = student.attendances[day];\n\t\t\t\t\t\tif (record.label != 'unavailable') {\n\t\t\t\t\t\t\trecord.label = 'absent';\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tlet data = this.attendanceForm.students.find(o => o.id == student.id);\n\t\t\t\t\t\t\tdata.attendance = 'absent';\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t},\n\t\t\tsubmit(){\n\t\t\t\tlet loader = this.$loading.show();\n\t\t\t\tthis.attendanceForm.post('/api/student/attendance')\n\t\t\t\t\t.then(response => {\n\t\t\t\t\t\tthis.getStudent();\n\t\t\t\t\t\ttoastr.success(response.message);\n\t\t\t\t\t\tloader.hide();\n\t\t\t\t\t})\n\t\t\t\t\t.catch(error => {\n\t\t\t\t\t\tloader.hide();\n\t\t\t\t\t\thelper.showErrorMsg(error);\n\t\t\t\t\t})\n\t\t\t},\n            confirmDelete(){\n                return dialog => this.deleteAttendance();\n            },\n            deleteAttendance(){\n                let loader = this.$loading.show();\n                axios.post('/api/student/attendance/delete', {\n                \t\tbatch_id: this.attendanceForm.batch_id,\n                \t\tdate_of_attendance: this.attendanceForm.date_of_attendance,\n                \t\tsubject_id: this.attendanceForm.subject_id,\n                \t\tsession: this.attendanceForm.session\n                \t})\n                    .then(response => {\n                        toastr.success(response.message);\n                        this.getStudent();\n                        loader.hide();\n                    }).catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    });\n            },\n            confirmDefault(){\n                return dialog => this.defaultAttendance();\n            },\n            defaultAttendance(){\n                let loader = this.$loading.show();\n                axios.post('/api/student/attendance/default', {\n                \t\tbatch_id: this.attendanceForm.batch_id,\n                \t\tdate_of_attendance: this.attendanceForm.date_of_attendance,\n                \t\tsubject_id: this.attendanceForm.subject_id,\n                \t\tsession: this.attendanceForm.session\n                \t})\n                    .then(response => {\n                        toastr.success(response.message);\n                        this.getStudent();\n                        loader.hide();\n                    }).catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    });\n            }\n\t\t},\n\t\tcomputed: {\n\t\t},\n        filters: {\n          moment(date) {\n            return helper.formatDate(date);\n          },\n          momentDateTime(date) {\n            return helper.formatDateTime(date);\n          }\n        },\n        watch: {\n        \t'attendanceForm.date_of_attendance': function(val){\n\t\t\t\tthis.days = moment(val, \"YYYY-MM\").daysInMonth();\n\t\t\t\tthis.previous_date = helper.toDate(val);\n        \t}\n        }\n\t}\n</script>\n\n<style>\n\t.disabled{\n\t\tbackground-color:#f1f2f3;\n\t}\n\t.current {\n\t\tfont-weight: 500;\n\t\tfont-size: 120%;\n\t}\n\t.attendance-table tr th.date-cell{\n\t\ttext-align: center;\n\t\tmin-width: 20px;\n\t\tmax-width: 20px;\n\t}\n\t.attendance-table tr td span.marking-cell {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\ttext-align: center;\n\t}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=style&index=0&id=77c1c502&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=style&index=0&id=77c1c502&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77c1c502_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=77c1c502&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=style&index=0&id=77c1c502&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77c1c502_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77c1c502_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/student/attendance/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/student/attendance/index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_77c1c502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=77c1c502& */ "./resources/js/views/student/attendance/index.vue?vue&type=template&id=77c1c502&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/student/attendance/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_77c1c502_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=77c1c502&lang=css& */ "./resources/js/views/student/attendance/index.vue?vue&type=style&index=0&id=77c1c502&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_77c1c502___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_77c1c502___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/student/attendance/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/student/attendance/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/student/attendance/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/student/attendance/index.vue?vue&type=template&id=77c1c502&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/student/attendance/index.vue?vue&type=template&id=77c1c502& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_77c1c502___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_77c1c502___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_77c1c502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=77c1c502& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=template&id=77c1c502&");


/***/ }),

/***/ "./resources/js/views/student/attendance/index.vue?vue&type=style&index=0&id=77c1c502&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/student/attendance/index.vue?vue&type=style&index=0&id=77c1c502&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77c1c502_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=77c1c502&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/student/attendance/index.vue?vue&type=style&index=0&id=77c1c502&lang=css&");


/***/ })

}]);
//# sourceMappingURL=index.js.map?id=8ce01b5dc12256de