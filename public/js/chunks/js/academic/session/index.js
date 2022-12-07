(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[8214],{24908:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});const a={props:{setupWizard:{default:!1},id:""},components:{},data:function(){return{academicSessionForm:new Form({name:"",description:"",start_date:"",end_date:"",transfer_certificate_format:"",is_default:0,exam_report_analysis:!1,exam_report_analysis_staff_token:"",exam_report_analysis_student_token:""}),transfer_certificate_formats:[],selected_transfer_certificate_format:null}},mounted:function(){helper.hasPermission("create-academic-session")||helper.hasPermission("edit-academic-session")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{proceed:function(){this.id?this.update():this.store()},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/academic/session/pre-requisite").then((function(s){e.transfer_certificate_formats=s.transfer_certificate_formats,e.id&&e.get(),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},store:function(){var e=this,t=this.$loading.show();this.academicSessionForm.post("/api/academic/session").then((function(s){e.$store.dispatch("setAcademicSession",s.academic_sessions),toastr.success(s.message),e.$emit("completed"),t.hide(),e.setupWizard&&e.$router.push("/dashboard")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/academic/session/"+this.id).then((function(s){e.academicSessionForm.name=s.name,e.academicSessionForm.description=s.description,e.academicSessionForm.start_date=s.start_date,e.academicSessionForm.end_date=s.end_date,e.academicSessionForm.is_default=s.is_default;var a=s.options&&s.options.hasOwnProperty("transfer_certificate_format")?s.options.transfer_certificate_format:null,o=e.transfer_certificate_formats.find((function(e){return e.id==a}));e.academicSessionForm.transfer_certificate_format=a,e.selected_transfer_certificate_format=o||null,e.academicSessionForm.exam_report_analysis=s.exam_report_analysis,e.academicSessionForm.exam_report_analysis_staff_token=s.exam_report_analysis_staff_token,e.academicSessionForm.exam_report_analysis_student_token=s.exam_report_analysis_student_token,t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s),e.$router.push("/academic/session")}))},update:function(){var e=this,t=this.$loading.show();this.academicSessionForm.patch("/api/academic/session/"+this.id).then((function(s){e.$store.dispatch("setConfig",{loaded:!1}),toastr.success(s.message),t.hide(),e.$router.push("/academic/session")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onTransferCertificateFormatSelect:function(e){return this.academicSessionForm.transfer_certificate_format=e.id}}};const o=(0,s(51900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)},keydown:function(t){return e.academicSessionForm.errors.clear(t.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.session_name")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.academicSessionForm.name,expression:"academicSessionForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("academic.session_name")},domProps:{value:e.academicSessionForm.name},on:{input:function(t){t.target.composing||e.$set(e.academicSessionForm,"name",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"name"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.session_start_date")))]),e._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("academic.session_start_date"),disabled:!!e.id},on:{selected:function(t){return e.academicSessionForm.errors.clear("start_date")}},model:{value:e.academicSessionForm.start_date,callback:function(t){e.$set(e.academicSessionForm,"start_date",t)},expression:"academicSessionForm.start_date"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"start_date"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.session_end_date")))]),e._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("academic.session_end_date"),disabled:!!e.id},on:{selected:function(t){return e.academicSessionForm.errors.clear("end_date")}},model:{value:e.academicSessionForm.end_date,callback:function(t){e.$set(e.academicSessionForm,"end_date",t)},expression:"academicSessionForm.end_date"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"end_date"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.session_description")))]),e._v(" "),s("autosize-textarea",{attrs:{rows:"1",name:"description",placeholder:e.trans("academic.session_description")},model:{value:e.academicSessionForm.description,callback:function(t){e.$set(e.academicSessionForm,"description",t)},expression:"academicSessionForm.description"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"description"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.transfer_certificate_format")))]),e._v(" "),s("v-select",{attrs:{label:"name",name:"transfer_certificate_format",id:"transfer_certificate_format",options:e.transfer_certificate_formats,placeholder:e.trans("academic.select_transfer_certificate_format")},on:{select:e.onTransferCertificateFormatSelect,close:function(t){return e.academicSessionForm.errors.clear("transfer_certificate_format")},remove:function(t){e.academicSessionForm.transfer_certificate_format=""}},model:{value:e.selected_transfer_certificate_format,callback:function(t){e.selected_transfer_certificate_format=t},expression:"selected_transfer_certificate_format"}},[e.transfer_certificate_formats.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),s("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"transfer_certificate_format"}})],1)])]),e._v(" "),e.setupWizard?e._e():[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("switches",{staticClass:"m-l-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.academicSessionForm.is_default,callback:function(t){e.$set(e.academicSessionForm,"is_default",t)},expression:"academicSessionForm.is_default"}}),e._v(" "+e._s(e.trans("academic.session_is_default"))+"\n                ")],1)])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("switches",{staticClass:"m-l-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.academicSessionForm.exam_report_analysis,callback:function(t){e.$set(e.academicSessionForm,"exam_report_analysis",t)},expression:"academicSessionForm.exam_report_analysis"}}),e._v(" "+e._s(e.trans("exam.exam_report_analysis"))+"\n                ")],1)]),e._v(" "),e.academicSessionForm.exam_report_analysis?s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.exam_report_analysis_student_token")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.academicSessionForm.exam_report_analysis_student_token,expression:"academicSessionForm.exam_report_analysis_student_token"}],staticClass:"form-control",attrs:{type:"text",name:"exam_report_analysis_student_token",placeholder:e.trans("academic.exam_report_analysis_student_token")},domProps:{value:e.academicSessionForm.exam_report_analysis_student_token},on:{input:function(t){t.target.composing||e.$set(e.academicSessionForm,"exam_report_analysis_student_token",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"exam_report_analysis_student_token"}})],1)]):e._e(),e._v(" "),e.academicSessionForm.exam_report_analysis?s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.exam_report_analysis_staff_token")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.academicSessionForm.exam_report_analysis_staff_token,expression:"academicSessionForm.exam_report_analysis_staff_token"}],staticClass:"form-control",attrs:{type:"text",name:"exam_report_analysis_staff_token",placeholder:e.trans("academic.exam_report_analysis_staff_token")},domProps:{value:e.academicSessionForm.exam_report_analysis_staff_token},on:{input:function(t){t.target.composing||e.$set(e.academicSessionForm,"exam_report_analysis_staff_token",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.academicSessionForm,"prop-name":"exam_report_analysis_staff_token"}})],1)]):e._e()]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/academic/session"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?s("span",[e._v(e._s(e.trans("general.update")))]):s("span",[e._v(e._s(e.trans("general.save")))])])],1)]],2)}),[],!1,null,null,null).exports},2239:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});const a={components:{academicSessionForm:s(24908).Z},data:function(){return{academic_sessions:{total:0,data:[]},filter:{sort_by:"start_date",order:"desc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.academic.session_name},{value:"start_date",translation:i18n.academic.session_start_date},{value:"end_date",translation:i18n.academic.session_end_date}],showCreatePanel:!1,showImportModal:!1,importForm:new Form({academic_session_id:"",course_group:0,course:0,batch:0,subject:0,fee_group:0,fee_head:0,transport_circle:0}),help_topic:""}},mounted:function(){helper.hasPermission("list-academic-session")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getAcademicSessions(),helper.showDemoNotification(["academic"])},methods:{getConfig:function(e){return helper.getConfig(e)},hasPermission:function(e){return helper.hasPermission(e)},getAcademicSessions:function(e){var t=this,s=this.$loading.show();"number"!=typeof e&&(e=1);var a=helper.getFilterURL(this.filter);axios.get("/api/academic/session?page="+e+a).then((function(e){t.academic_sessions=e,s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},editAcademicSession:function(e){this.$router.push("/academic/session/"+e.id+"/edit")},confirmDelete:function(e){var t=this;return function(s){return t.deleteAcademicSession(e)}},deleteAcademicSession:function(e){var t=this,s=this.$loading.show();axios.delete("/api/academic/session/"+e.id).then((function(e){t.$store.dispatch("setAcademicSession",e.academic_sessions),toastr.success(e.message),t.getAcademicSessions(),s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},getStatus:function(e){return e.is_default?'<i class="fas fa-check"></i>':'<i class="fas fa-times"></i>'},print:function(){var e=this.$loading.show();axios.post("/api/academic/session/print",{filter:this.filter}).then((function(t){e.hide(),window.open("/print").document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/academic/session/pdf",{filter:this.filter}).then((function(s){t.hide(),window.open("/download/report/"+s+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},importData:function(){var e=this;this.importForm.post("/api/academic/session/import").then((function(t){toastr.success(t.message),e.showImportModal=!1})).catch((function(e){helper.showErrorMsg(e)}))}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getAcademicSessions()},"filter.order":function(e){this.getAcademicSessions()},"filter.page_length":function(e){this.getAcademicSessions()},"importForm.subject":function(e){this.importForm.batch=this.importForm.subject||this.importForm.batch},"importForm.batch":function(e){this.importForm.course=this.importForm.batch||this.importForm.course},"importForm.course":function(e){this.importForm.course_group=this.importForm.course||this.importForm.course_group},"importForm.fee_head":function(e){this.importForm.fee_group=this.importForm.fee_head||this.importForm.fee_group}},computed:{authToken:function(){return helper.getAuthToken()},getAcademicSessionList:function(){return helper.getAcademicSessions()},getDefaultAcademicSession:function(){return helper.getDefaultAcademicSession()}}};const o=(0,s(51900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("academic.session"))+" \n                    "),e.academic_sessions.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.academic_sessions.total,from:e.academic_sessions.from,to:e.academic_sessions.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[e.academic_sessions.total&&!e.showCreatePanel&&e.hasPermission("create-academic-session")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("academic.add_new_session")))])]):e._e(),e._v(" "),e.hasPermission("import-previous-session-data")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.import"),expression:"trans('general.import')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showImportModal=!0}}},[s("i",{staticClass:"fas fa-file-import"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.import")))])]):e._e(),e._v(" "),s("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),s("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[s("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[s("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),s("help-button",{on:{clicked:function(t){e.help_topic="academic.session"}}})],1)])])]),e._v(" "),s("div",{staticClass:"container-fluid"},[e.hasPermission("create-academic-session")?s("transition",{attrs:{name:"fade"}},[e.showCreatePanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("academic.add_new_session")))]),e._v(" "),s("show-tip",{attrs:{module:"academic",tip:"date_of_academic_session_not_editable"}}),e._v(" "),s("academic-session-form",{on:{completed:e.getAcademicSessions,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]):e._e(),e._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[e.academic_sessions.total?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.trans("academic.session_name")))]),e._v(" "),s("th",[e._v(e._s(e.trans("academic.session_start_date")))]),e._v(" "),s("th",[e._v(e._s(e.trans("academic.session_end_date")))]),e._v(" "),s("th",[e._v(e._s(e.trans("academic.session_default")))]),e._v(" "),s("th",[e._v(e._s(e.trans("academic.session_description")))]),e._v(" "),s("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),s("tbody",e._l(e.academic_sessions.data,(function(t){return s("tr",[s("td",{domProps:{textContent:e._s(t.name)}}),e._v(" "),s("td",[e._v(e._s(e._f("moment")(t.start_date)))]),e._v(" "),s("td",[e._v(e._s(e._f("moment")(t.end_date)))]),e._v(" "),s("td",{domProps:{innerHTML:e._s(e.getStatus(t))}}),e._v(" "),s("td",{domProps:{textContent:e._s(t.description)}}),e._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[e.hasPermission("edit-academic-session")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("academic.edit_session"),expression:"trans('academic.edit_session')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return s.preventDefault(),e.editAcademicSession(t)}}},[s("i",{staticClass:"fas fa-edit"})]):e._e(),e._v(" "),e.hasPermission("delete-academic-session")?s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(academic_session)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("academic.delete_session"),expression:"trans('academic.delete_session')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[s("i",{staticClass:"fas fa-trash"})]):e._e()])])])})),0)])]):e._e(),e._v(" "),e.academic_sessions.total?e._e():s("module-info",{attrs:{module:"academic",title:"session_module_title",description:"session_module_description",icon:"list"}},[s("div",{attrs:{slot:"btn"},slot:"btn"},[!e.showCreatePanel&&e.hasPermission("create-academic-session")?s("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))]):e._e()])]),e._v(" "),s("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.academic_sessions},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getAcademicSessions}})],1)])],1),e._v(" "),e.showImportModal?s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container modal-lg"},[s("div",{staticClass:"modal-header"},[e._t("header",(function(){return[e._v("\n                            "+e._s(e.trans("academic.import_data"))+"\n                            "),s("span",{staticClass:"float-right pointer",on:{click:function(t){e.showImportModal=!1}}},[e._v("x")])]}))],2),e._v(" "),s("div",{staticClass:"modal-body"},[e._t("body",(function(){return[s("div",{staticClass:"form-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.importForm.academic_session_id,expression:"importForm.academic_session_id"}],staticClass:"custom-select col-12",attrs:{name:"academic_session_id"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.importForm,"academic_session_id",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[e._v(e._s(e.trans("academic.select_session")))]),e._v(" "),e._l(e.getAcademicSessionList,(function(t){return t.id!=e.getDefaultAcademicSession.id?s("option",{domProps:{value:t.id}},[e._v("\n                                    "+e._s(t.name)+"\n                                  ")]):e._e()}))],2)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.importForm.course_group,expression:"importForm.course_group"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.importForm.course_group)?e._i(e.importForm.course_group,"1")>-1:e.importForm.course_group},on:{change:function(t){var s=e.importForm.course_group,a=t.target,o=!!a.checked;if(Array.isArray(s)){var r=e._i(s,"1");a.checked?r<0&&e.$set(e.importForm,"course_group",s.concat(["1"])):r>-1&&e.$set(e.importForm,"course_group",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.importForm,"course_group",o)}}}),e._v(" "),s("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("academic.course_group")))])])]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.importForm.course,expression:"importForm.course"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.importForm.course)?e._i(e.importForm.course,"1")>-1:e.importForm.course},on:{change:function(t){var s=e.importForm.course,a=t.target,o=!!a.checked;if(Array.isArray(s)){var r=e._i(s,"1");a.checked?r<0&&e.$set(e.importForm,"course",s.concat(["1"])):r>-1&&e.$set(e.importForm,"course",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.importForm,"course",o)}}}),e._v(" "),s("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("academic.course")))])])]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.importForm.batch,expression:"importForm.batch"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.importForm.batch)?e._i(e.importForm.batch,"1")>-1:e.importForm.batch},on:{change:function(t){var s=e.importForm.batch,a=t.target,o=!!a.checked;if(Array.isArray(s)){var r=e._i(s,"1");a.checked?r<0&&e.$set(e.importForm,"batch",s.concat(["1"])):r>-1&&e.$set(e.importForm,"batch",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.importForm,"batch",o)}}}),e._v(" "),s("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("academic.batch")))])])]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.importForm.subject,expression:"importForm.subject"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.importForm.subject)?e._i(e.importForm.subject,"1")>-1:e.importForm.subject},on:{change:function(t){var s=e.importForm.subject,a=t.target,o=!!a.checked;if(Array.isArray(s)){var r=e._i(s,"1");a.checked?r<0&&e.$set(e.importForm,"subject",s.concat(["1"])):r>-1&&e.$set(e.importForm,"subject",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.importForm,"subject",o)}}}),e._v(" "),s("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("academic.subject")))])])])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.importForm.fee_group,expression:"importForm.fee_group"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.importForm.fee_group)?e._i(e.importForm.fee_group,"1")>-1:e.importForm.fee_group},on:{change:function(t){var s=e.importForm.fee_group,a=t.target,o=!!a.checked;if(Array.isArray(s)){var r=e._i(s,"1");a.checked?r<0&&e.$set(e.importForm,"fee_group",s.concat(["1"])):r>-1&&e.$set(e.importForm,"fee_group",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.importForm,"fee_group",o)}}}),e._v(" "),s("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("finance.fee_group")))])])]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.importForm.fee_head,expression:"importForm.fee_head"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.importForm.fee_head)?e._i(e.importForm.fee_head,"1")>-1:e.importForm.fee_head},on:{change:function(t){var s=e.importForm.fee_head,a=t.target,o=!!a.checked;if(Array.isArray(s)){var r=e._i(s,"1");a.checked?r<0&&e.$set(e.importForm,"fee_head",s.concat(["1"])):r>-1&&e.$set(e.importForm,"fee_head",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.importForm,"fee_head",o)}}}),e._v(" "),s("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("finance.fee_head")))])])]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.importForm.transport_circle,expression:"importForm.transport_circle"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.importForm.transport_circle)?e._i(e.importForm.transport_circle,"1")>-1:e.importForm.transport_circle},on:{change:function(t){var s=e.importForm.transport_circle,a=t.target,o=!!a.checked;if(Array.isArray(s)){var r=e._i(s,"1");a.checked?r<0&&e.$set(e.importForm,"transport_circle",s.concat(["1"])):r>-1&&e.$set(e.importForm,"transport_circle",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.importForm,"transport_circle",o)}}}),e._v(" "),s("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("transport.transport_circle")))])])])])]),e._v(" "),s("button",{staticClass:"btn btn-info pull-right",attrs:{type:"button"},on:{click:e.importData}},[e._v(e._s(e.trans("general.import")))]),e._v(" "),s("button",{staticClass:"btn btn-danger pull-right m-r-10",attrs:{type:"button"},on:{click:function(t){e.showImportModal=!1}}},[e._v(e._s(e.trans("general.cancel")))])]}))],2)])])])]):e._e(),e._v(" "),s("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=index.js.map?id=ba86e9a0778bc08205f9