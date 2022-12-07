(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[7498],{40895:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});const a={components:{},data:function(){return{gatePassForm:new Form({type:"student",student_id:"",employee_id:"",date:"",time:"",reason:""}),loaded:!1,time:{hour:"",minute:"",meridiem:"am"},students:[],selected_student:null,employees:[],selected_employee:null}},props:["uuid"],mounted:function(){helper.hasPermission("create-gate-pass")||helper.hasPermission("edit-gate-pass")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid&&this.get(),this.getPreRequisite()},methods:{timePadding:function(e){return helper.formatWithPadding(e,2)},proceed:function(){this.uuid?this.update():this.store()},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/gate/pass/pre-requisite").then((function(s){e.students=s.students,e.employees=s.employees,e.gatePassForm.date=helper.today(),e.uuid||(e.loaded=!0),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},store:function(){var e=this;this.gatePassForm.time=this.time.hour&&this.time.minute?helper.formatWithPadding(this.time.hour,2)+":"+helper.formatWithPadding(this.time.minute,2)+" "+this.time.meridiem:"";var t=this.$loading.show();this.gatePassForm.post("/api/gate/pass").then((function(s){toastr.success(s.message),e.time.hour="",e.time.minute="",e.time.meridiem="am",e.gatePassForm.type="student",e.selected_student=null,e.selected_employee=null,e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/gate/pass/"+this.uuid).then((function(s){e.gatePassForm.type=s.gate_pass.type,e.gatePassForm.reason=s.gate_pass.reason,e.gatePassForm.date=s.gate_pass.date,e.time.hour=s.time.hour,e.time.minute=s.time.minute,e.time.meridiem=s.time.meridiem,e.gatePassForm.student_id=s.gate_pass.student_id,e.selected_student=s.selected_student,e.gatePassForm.employee_id=s.gate_pass.employee_id,e.selected_employee=s.selected_employee,e.loaded=!0,t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s),e.$router.push("/reception/gate/pass")}))},update:function(){var e=this;this.gatePassForm.time=this.time.hour&&this.time.minute?helper.formatWithPadding(this.time.hour,2)+":"+helper.formatWithPadding(this.time.minute,2)+" "+this.time.meridiem:"";var t=this.$loading.show();this.gatePassForm.patch("/api/gate/pass/"+this.uuid).then((function(s){toastr.success(s.message),t.hide(),e.$router.push("/reception/gate/pass")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onStudentSelect:function(e){return this.gatePassForm.student_id=e.id},onEmployeeSelect:function(e){return this.gatePassForm.employee_id=e.id}}};const n=(0,s(51900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)},keydown:function(t){return e.gatePassForm.errors.clear(t.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.gate_pass_type")))]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.gatePassForm.type,expression:"gatePassForm.type"}],staticClass:"custom-select col-12",on:{select:function(t){return e.gatePassForm.errors.clear("type")},change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.gatePassForm,"type",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"student"}},[e._v(e._s(e.trans("student.student")))]),e._v(" "),s("option",{attrs:{value:"employee"}},[e._v(e._s(e.trans("employee.employee")))])]),e._v(" "),s("show-error",{attrs:{"form-name":e.gatePassForm,"prop-name":"type"}})],1)])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.gate_pass_date")))]),e._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("reception.gate_pass_date")},on:{selected:function(t){return e.gatePassForm.errors.clear("date")}},model:{value:e.gatePassForm.date,callback:function(t){e.$set(e.gatePassForm,"date",t)},expression:"gatePassForm.date"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.gatePassForm,"prop-name":"date"}})],1)]),e._v(" "),e.loaded?s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.gate_pass_time")))]),e._v(" "),s("timepicker",{attrs:{hour:e.time.hour,minute:e.time.minute,meridiem:e.time.meridiem},on:{"update:hour":function(t){return e.$set(e.time,"hour",t)},"update:minute":function(t){return e.$set(e.time,"minute",t)},"update:meridiem":function(t){return e.$set(e.time,"meridiem",t)}}})],1)]):e._e(),e._v(" "),"student"==e.gatePassForm.type?s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("student.student")))]),e._v(" "),s("v-select",{attrs:{label:"name",name:"student_id",id:"student_id",options:e.students,placeholder:e.trans("student.select_student")},on:{select:e.onStudentSelect,close:function(t){return e.gatePassForm.errors.clear("student_id")},remove:function(t){e.gatePassForm.student_id=""}},model:{value:e.selected_student,callback:function(t){e.selected_student=t},expression:"selected_student"}},[e.students.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),s("show-error",{attrs:{"form-name":e.gatePassForm,"prop-name":"student_id"}})],1)]):e._e(),e._v(" "),"employee"==e.gatePassForm.type?s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee")))]),e._v(" "),s("v-select",{attrs:{label:"name",name:"employee_id",id:"employee_id",options:e.employees,placeholder:e.trans("employee.select_employee")},on:{select:e.onEmployeeSelect,close:function(t){return e.gatePassForm.errors.clear("employee_id")},remove:function(t){e.gatePassForm.employee_id=""}},model:{value:e.selected_employee,callback:function(t){e.selected_employee=t},expression:"selected_employee"}},[e.employees.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),s("show-error",{attrs:{"form-name":e.gatePassForm,"prop-name":"employee_id"}})],1)]):e._e(),e._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.gate_pass_reason")))]),e._v(" "),s("autosize-textarea",{attrs:{rows:"1",name:"reason",placeholder:e.trans("reception.gate_pass_reason")},model:{value:e.gatePassForm.reason,callback:function(t){e.$set(e.gatePassForm,"reason",t)},expression:"gatePassForm.reason"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.gatePassForm,"prop-name":"reason"}})],1)])]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:e.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/reception/gate/pass"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.uuid?e._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.uuid?s("span",[e._v(e._s(e.trans("general.update")))]):s("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports},51401:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});const a={components:{gatePassForm:s(40895).Z},data:function(){return{gate_passes:{total:0,data:[]},filter:{sort_by:"created_at",order:"desc",type:"",student_id:[],employee_id:[],date_start_date:"",date_end_date:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"date",translation:i18n.reception.date},{value:"created_at",translation:i18n.general.created_at}],types:[{text:i18n.student.student,value:"student"},{text:i18n.employee.employee,value:"employee"}],showFilterPanel:!1,showCreatePanel:!1,students:[],selected_students:null,employees:[],selected_employees:null,help_topic:"",showUuid:"",showModal:!1}},mounted:function(){helper.hasPermission("list-gate-pass")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getGatePasses(),helper.showDemoNotification(["reception"])},methods:{hasPermission:function(e){return helper.hasPermission(e)},showAction:function(e){this.showUuid=e.uuid,this.showModal=!0},getStudentName:function(e){return helper.getStudentName(e)},getEmployeeName:function(e){return helper.getEmployeeName(e)},getGatePasses:function(e){var t=this,s=this.$loading.show();"number"!=typeof e&&(e=1),this.filter.date_start_date=helper.toDate(this.filter.date_start_date),this.filter.date_end_date=helper.toDate(this.filter.date_end_date);var a=helper.getFilterURL(this.filter);axios.get("/api/gate/pass?page="+e+a).then((function(e){t.gate_passes=e.gate_passes,t.students=e.filters.students,t.employees=e.filters.employees,s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},editGatePass:function(e){this.$router.push("/reception/gate/pass/"+e.uuid+"/edit")},confirmDelete:function(e){var t=this;return function(s){return t.deleteGatePass(e)}},deleteGatePass:function(e){var t=this,s=this.$loading.show();axios.delete("/api/gate/pass/"+e.uuid).then((function(e){toastr.success(e.message),t.getGatePasses(),s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},getConfig:function(e){return helper.getConfig(e)},print:function(){var e=this.$loading.show();axios.post("/api/gate/pass/print",{filter:this.filter}).then((function(t){var s=window.open("/print");e.hide(),s.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/gate/pass/pdf",{filter:this.filter}).then((function(s){t.hide(),window.open("/download/report/"+s+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onStudentSelect:function(e){this.filter.student_id.push(e.id)},onStudentRemove:function(e){this.filter.student_id.splice(this.filter.student_id.indexOf(e.id),1)},onEmployeeSelect:function(e){this.filter.employee_id.push(e.id)},onEmployeeRemove:function(e){this.filter.employee_id.splice(this.filter.employee_id.indexOf(e.id),1)},getEmployeeDesignationOnDate:function(e,t){return helper.getEmployeeDesignationOnDate(e,t)}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)},momentTime:function(e){return helper.formatTime(e)}},watch:{"filter.sort_by":function(e){this.getGatePasses()},"filter.order":function(e){this.getGatePasses()},"filter.page_length":function(e){this.getGatePasses()}},computed:{authToken:function(){return helper.getAuthToken()}}};const n=(0,s(51900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("reception.gate_pass"))+" \n                    "),e.gate_passes.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.gate_passes.total,from:e.gate_passes.from,to:e.gate_passes.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[e.gate_passes.total&&!e.showCreatePanel&&e.hasPermission("create-gate-pass")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("reception.add_new_gate_pass")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[s("i",{staticClass:"fas fa-filter"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),s("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),s("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[s("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[s("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),s("help-button",{on:{clicked:function(t){e.help_topic="reception.gate-pass"}}})],1)])])]),e._v(" "),s("div",{staticClass:"container-fluid"},[s("transition",{attrs:{name:"fade"}},[e.showFilterPanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.gate_pass_type")))]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.filter.type,expression:"filter.type"}],staticClass:"custom-select col-12",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.filter,"type",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",selected:""}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.types,(function(t){return s("option",{domProps:{value:t.value}},[e._v("\n                                    "+e._s(t.text)+"\n                                  ")])}))],2)])]),e._v(" "),"student"==e.filter.type?s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("student.student")))]),e._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"student_id",id:"student_id",options:e.students,placeholder:e.trans("student.select_student"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_students},on:{select:e.onStudentSelect,remove:e.onStudentRemove},model:{value:e.selected_students,callback:function(t){e.selected_students=t},expression:"selected_students"}},[e.students.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]):e._e(),e._v(" "),"employee"==e.filter.type?s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee")))]),e._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"employee_id",id:"employee_id",options:e.employees,placeholder:e.trans("employee.select_employee"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_employees},on:{select:e.onEmployeeSelect,remove:e.onEmployeeRemove},model:{value:e.selected_employees,callback:function(t){e.selected_employees=t},expression:"selected_employees"}},[e.employees.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]):e._e(),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("date-range-picker",{attrs:{"start-date":e.filter.date_start_date,"end-date":e.filter.date_end_date,label:e.trans("general.date_between")},on:{"update:startDate":function(t){return e.$set(e.filter,"date_start_date",t)},"update:start-date":function(t){return e.$set(e.filter,"date_start_date",t)},"update:endDate":function(t){return e.$set(e.filter,"date_end_date",t)},"update:end-date":function(t){return e.$set(e.filter,"date_end_date",t)}}})],1)]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getGatePasses}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),e.hasPermission("create-gate-pass")?s("transition",{attrs:{name:"fade"}},[e.showCreatePanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("reception.add_new_gate_pass")))]),e._v(" "),s("gate-pass-form",{on:{completed:e.getGatePasses,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]):e._e(),e._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[e.gate_passes.total?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[e._v("#")]),e._v(" "),s("th",[e._v(e._s(e.trans("reception.gate_pass_detail")))]),e._v(" "),s("th",[e._v(e._s(e.trans("reception.gate_pass_date")))]),e._v(" "),s("th",[e._v(e._s(e.trans("reception.gate_pass_time")))]),e._v(" "),s("th",[e._v(e._s(e.trans("reception.gate_pass_reason")))]),e._v(" "),s("th",[e._v(e._s(e.trans("general.entry_by")))]),e._v(" "),s("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),s("tbody",e._l(e.gate_passes.data,(function(t){return s("tr",[s("td",{domProps:{textContent:e._s(t.id)}}),e._v(" "),s("td",["student"==t.type?[e._v("\n                                        "+e._s(e.trans("student.name")+": "+e.getStudentName(t.student))+" "),s("br"),e._v("\n                                        "+e._s(e.trans("student.first_guardian_name")+": "+t.student.parent.first_guardian_name)+" "),s("br"),e._v("\n                                        "+e._s(e.trans("student.mother_name")+": "+t.student.parent.mother_name)+" "),s("br"),e._v("\n                                        "+e._s(e.trans("student.contact_number")+": "+t.student.contact_number)+" "),s("br")]:e._e(),e._v(" "),"employee"==t.type?[e._v("\n                                        "+e._s(e.getEmployeeName(t.employee))+" "),s("br"),e._v("\n                                        "+e._s(e.getEmployeeDesignationOnDate(t.employee,t.date))+"\n                                    ")]:e._e()],2),e._v(" "),s("td",[e._v(e._s(e._f("moment")(t.date)))]),e._v(" "),s("td",[e._v(e._s(e._f("momentTime")(t.time)))]),e._v(" "),s("td",[e._v(e._s(t.reason))]),e._v(" "),s("td",[e._v(e._s(e.getEmployeeName(t.user.employee))+" "),s("br"),e._v(" "+e._s(e.getEmployeeDesignationOnDate(t.user.employee,t.date)))]),e._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[s("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.print"),expression:"trans('general.print')"}],staticClass:"btn btn-success btn-sm",attrs:{href:"/reception/gate/pass/"+t.uuid+"/print?token="+e.authToken,target:"_blank"}},[s("i",{staticClass:"fas fa-print"})]),e._v(" "),e.hasPermission("edit-gate-pass")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("reception.edit_gate_pass"),expression:"trans('reception.edit_gate_pass')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return s.preventDefault(),e.editGatePass(t)}}},[s("i",{staticClass:"fas fa-edit"})]):e._e(),e._v(" "),e.hasPermission("delete-gate-pass")?s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(gate_pass)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("reception.delete_gate_pass"),expression:"trans('reception.delete_gate_pass')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[s("i",{staticClass:"fas fa-trash"})]):e._e()])])])})),0)])]):e._e(),e._v(" "),e.gate_passes.total?e._e():s("module-info",{attrs:{module:"reception",title:"gate_pass_module_title",description:"gate_pass_module_description",icon:"list"}},[s("div",{attrs:{slot:"btn"},slot:"btn"},[!e.showCreatePanel&&e.hasPermission("create-gate-pass")?s("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))]):e._e()])]),e._v(" "),s("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.gate_passes},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getGatePasses}})],1)])],1),e._v(" "),s("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=index.js.map?id=a5f3fa79a358cdf7969e