"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[1259],{24587:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});const a={components:{},data:function(){return{list:{total:0,data:[]},batches:[],selected_batches:null,fee_groups:[],selected_fee_groups:null,footer:[],filter:{sort_by:"name",order:"asc",first_name:"",last_name:"",min:"",batch_id:[],fee_group_id:[],page_length:helper.getConfig("page_length")},selectAll:!1,sendSMSForm:new Form({ids:[],sms:""}),orderByOptions:[{value:"admission_number",translation:i18n.student.admission_number},{value:"name",translation:i18n.student.name},{value:"first_guardian_name",translation:i18n.student.first_guardian_name},{value:"total",translation:i18n.finance.total_fee}],showFilterPanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-fee-report")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getDue()},methods:{hasPermission:function(t){return helper.hasPermission(t)},getDue:function(t){var e=this,s=this.$loading.show();"number"!=typeof t&&(t=1),this.selectAll=!1;var a=helper.getFilterURL(this.filter);axios.get("/api/fee/report/due?page="+t+a).then((function(t){e.list=t.list,e.footer=t.footer,e.batches=t.filters.batches,e.fee_groups=t.filters.fee_groups;var a=[];e.list.data.forEach((function(t){a.push(t.id)})),e.selectAll=a.every((function(t){return e.sendSMSForm.ids.indexOf(t)>-1}))?1:0,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},toggleSelectAll:function(){var t=this;this.selectAll?this.list.data.forEach((function(e){t.sendSMSForm.ids.indexOf(e.id)<0&&t.sendSMSForm.ids.push(e.id)})):this.list.data.forEach((function(e){var s=t.sendSMSForm.ids.indexOf(e.id);s>=0&&t.sendSMSForm.ids.splice(s,1)}))},getConfig:function(t){return helper.getConfig(t)},print:function(){var t=this.$loading.show();axios.post("/api/fee/report/due/print",{filter:this.filter}).then((function(e){var s=window.open("/print");t.hide(),s.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/fee/report/due/pdf",{filter:this.filter}).then((function(s){e.hide(),window.open("/download/report/"+s+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onBatchSelect:function(t){this.filter.batch_id.push(t.id)},onBatchRemove:function(t){this.filter.batch_id.splice(this.filter.batch_id.indexOf(t.id),1)},onFeeGroupSelect:function(t){this.filter.fee_group_id.push(t.id)},onFeeGroupRemove:function(t){this.filter.fee_group_id.splice(this.filter.fee_group_id.indexOf(t.id),1)},confirmSendAction:function(){var t=this;return function(e){return t.sendSMS()}},sendSMS:function(){var t=this,e=this.$loading.show();this.sendSMSForm.filter=this.filter,this.sendSMSForm.post("/api/fee/report/due/sms").then((function(s){toastr.success(s.message),t.sendSMSForm.ids=[],e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getDue()},"filter.order":function(t){this.getDue()},"filter.page_length":function(t){this.getDue()}},computed:{authToken:function(){return helper.getAuthToken()},sampleMessage:function(){var t=this.list.data[0];return this.sendSMSForm.sms.replace("#NAME#",t.name).replace("#BATCH#",t.batch).replace("#FIRST_GUARDIAN_NAME#",t.first_guardian_name).replace("#FEE_GROUP#",t.fee_group).replace("#TOTAL_FEE#",t.total).replace("#DUE_DATE#",helper.formatDate(t.due_date)).replace("#OVERDUE#",t.overdue).replace("#LATE_FEE#",t.late_fee)},characterCount:function(){return this.sendSMSForm.sms.length}}};const n=(0,s(51900).Z)(a,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("finance.fee_due_report"))+" \n                    "),t.list.total?e("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.list.total,from:t.list.from,to:t.list.to})))]):e("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[t.showFilterPanel?t._e():e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[e("i",{staticClass:"fas fa-filter"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),e("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),e("div",{staticClass:"btn-group"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),e("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[e("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),e("help-button",{on:{clicked:function(e){t.help_topic="finance.fee.report.summary"}}})],1)])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("transition",{attrs:{name:"fade"}},[t.showFilterPanel?e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.first_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.first_name,expression:"filter.first_name"}],staticClass:"form-control",attrs:{type:"text",name:"first_name",placeholder:t.trans("student.first_name")},domProps:{value:t.filter.first_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"first_name",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.last_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.last_name,expression:"filter.last_name"}],staticClass:"form-control",attrs:{type:"text",name:"last_name",placeholder:t.trans("student.last_name")},domProps:{value:t.filter.last_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"last_name",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),e("v-select",{attrs:{label:"name","track-by":"id","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_batches},on:{select:t.onBatchSelect,remove:t.onBatchRemove},model:{value:t.selected_batches,callback:function(e){t.selected_batches=e},expression:"selected_batches"}},[t.batches.length?t._e():e("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.fee_group")))]),t._v(" "),e("v-select",{attrs:{label:"name","track-by":"id",name:"fee_group_id",id:"fee_group_id",options:t.fee_groups,placeholder:t.trans("finance.select_fee_group"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_fee_groups},on:{select:t.onFeeGroupSelect,remove:t.onFeeGroupRemove},model:{value:t.selected_fee_groups,callback:function(e){t.selected_fee_groups=e},expression:"selected_fee_groups"}},[t.fee_groups.length?t._e():e("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.installment_greater_than")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.min,expression:"filter.min"}],staticClass:"form-control",attrs:{type:"text",name:"min",placeholder:t.trans("student.min")},domProps:{value:t.filter.min},on:{input:function(e){e.target.composing||t.$set(t.filter,"min",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getDue}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[t.list.total?e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[t.hasPermission("send-sms")?e("th",{staticClass:"select-all"},[e("label",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,"1")>-1:t.selectAll},on:{change:[function(e){var s=t.selectAll,a=e.target,n=!!a.checked;if(Array.isArray(s)){var o=t._i(s,"1");a.checked?o<0&&(t.selectAll=s.concat(["1"])):o>-1&&(t.selectAll=s.slice(0,o).concat(s.slice(o+1)))}else t.selectAll=n},t.toggleSelectAll]}}),t._v(" "),e("span",{staticClass:"custom-control-label"})])]):t._e(),t._v(" "),e("th",[t._v(t._s(t.trans("student.admission_number_short")))]),t._v(" "),e("th",[t._v(t._s(t.trans("student.name")))]),t._v(" "),e("th",[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),e("th",[t._v(t._s(t.trans("student.first_guardian_name")))]),t._v(" "),e("th",[t._v(t._s(t.trans("student.contact_number")))]),t._v(" "),e("th",[t._v(t._s(t.trans("finance.fee_group")))]),t._v(" "),e("th",[t._v(t._s(t.trans("finance.total_fee")))]),t._v(" "),e("th",[t._v(t._s(t.trans("finance.fee_installment_due_date")))]),t._v(" "),e("th",[t._v(t._s(t.trans("finance.fee_overdue")))]),t._v(" "),e("th",[t._v(t._s(t.trans("finance.late_fee")))]),t._v(" "),e("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),e("tbody",t._l(t.list.data,(function(s){return e("tr",[t.hasPermission("send-sms")?e("td",{staticClass:"select-all"},[e("label",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sendSMSForm.ids,expression:"sendSMSForm.ids"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{value:s.id,checked:Array.isArray(t.sendSMSForm.ids)?t._i(t.sendSMSForm.ids,s.id)>-1:t.sendSMSForm.ids},on:{change:function(e){var a=t.sendSMSForm.ids,n=e.target,o=!!n.checked;if(Array.isArray(a)){var r=s.id,i=t._i(a,r);n.checked?i<0&&t.$set(t.sendSMSForm,"ids",a.concat([r])):i>-1&&t.$set(t.sendSMSForm,"ids",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.sendSMSForm,"ids",o)}}}),t._v(" "),e("span",{staticClass:"custom-control-label"})])]):t._e(),t._v(" "),e("td",{domProps:{textContent:t._s(s.admission_number)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.name)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.batch)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.first_guardian_name)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.contact_number)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.fee_group)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.total)}}),t._v(" "),e("td",[t._v(t._s(t._f("moment")(s.due_date)))]),t._v(" "),e("td",[e("span",{staticClass:"label label-danger"},[t._v(t._s(t.trans("finance.fee_overdue_day",{day:s.overdue})))])]),t._v(" "),e("td",[t._v(t._s(s.late_fee))]),t._v(" "),e("td",{staticClass:"table-option"},[e("div",{staticClass:"btn-group"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.view_detail"),expression:"trans('general.view_detail')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/student/"+s.uuid+"/fee/"+s.student_record_id)}}},[e("i",{staticClass:"fas fa-arrow-circle-right"})])])])])})),0),t._v(" "),e("tfoot",[e("tr",[e("th",{attrs:{colspan:"7"}}),t._v(" "),e("th",[t._v(t._s(t.footer.grand_total))]),t._v(" "),e("th"),t._v(" "),e("th")])])])]):t._e(),t._v(" "),t.list.total?t._e():e("module-info",{attrs:{module:"finance",title:"fee_due_report_module_title",description:"fee_due_report_module_description",icon:"list"}}),t._v(" "),e("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.list},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getDue}})],1),t._v(" "),t.sendSMSForm.ids.length&&t.hasPermission("send-sms")?e("div",{staticClass:"m-t-10 card-body border-top p-4"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("communication.send_sms")))]),t._v(" "),e("p",[t._v(t._s(t.trans("general.total_selected",{type:t.trans("student.student"),count:t.sendSMSForm.ids.length})))]),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)},keydown:function(e){return t.sendSMSForm.errors.clear(e.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("communication.sms"))+" "+t._s(t.trans("communication.character_count",{count:t.characterCount}))+" ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sendSMSForm.sms,expression:"sendSMSForm.sms"}],staticClass:"form-control",attrs:{rows:"2",name:"sms",placeholder:t.trans("communication.sms")},domProps:{value:t.sendSMSForm.sms},on:{input:function(e){e.target.composing||t.$set(t.sendSMSForm,"sms",e.target.value)}}}),t._v(" "),e("p",{staticClass:"help-block font-80pc"},[t._v(t._s(t.trans("communication.template_variable_tip")))]),t._v(" "),e("p",{staticClass:"help-block font-90pc"},[t._v(t._s(t.trans("communication.available_variables"))+": NAME, BATCH, FIRST_GUARDIAN_NAME, FEE_GROUP,  TOTAL_FEE, DUE_DATE, LATE_FEE")]),t._v(" "),e("show-error",{attrs:{"form-name":t.sendSMSForm,"prop-name":"sms"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("communication.sample_sms")))]),t._v(" "),e("p",[t._v(t._s(t.sampleMessage))])])])]),t._v(" "),e("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmSendAction()},expression:"{ok: confirmSendAction()}"}],key:"send-due",staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"}},[t._v(t._s(t.trans("general.send")))])])]):t._e()])],1),t._v(" "),e("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null).exports}}]);