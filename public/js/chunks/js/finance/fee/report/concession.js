"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[1687],{59652:(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const n={components:{},data:function(){return{list:{total:0,data:[]},batches:[],selected_batches:null,footer:[],filter:{sort_by:"name",order:"asc",first_name:"",last_name:"",batch_id:[],page_length:helper.getConfig("page_length")},orderByOptions:[{value:"admission_number",translation:i18n.student.admission_number},{value:"name",translation:i18n.student.name},{value:"first_guardian_name",translation:i18n.student.first_guardian_name}],showFilterPanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-fee-report")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getConcession()},methods:{hasPermission:function(t){return helper.hasPermission(t)},getConcession:function(t){var e=this,s=this.$loading.show();"number"!=typeof t&&(t=1),this.selectAll=!1;var n=helper.getFilterURL(this.filter);axios.get("/api/fee/report/concession?page="+t+n).then((function(t){e.list=t.list,e.footer=t.footer,e.batches=t.filters.batches,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)},print:function(){var t=this.$loading.show();axios.post("/api/fee/report/concession/print",{filter:this.filter}).then((function(e){var s=window.open("/print");t.hide(),s.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/fee/report/concession/pdf",{filter:this.filter}).then((function(s){e.hide(),window.open("/download/report/"+s+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onBatchSelect:function(t){this.filter.batch_id.push(t.id)},onBatchRemove:function(t){this.filter.batch_id.splice(this.filter.batch_id.indexOf(t.id),1)}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getConcession()},"filter.order":function(t){this.getConcession()},"filter.page_length":function(t){this.getConcession()}}};var a=(0,s(51900).Z)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("finance.fee_concession_report"))+" \n                    "),t.list.total?e("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.list.total,from:t.list.from,to:t.list.to})))]):e("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[t.showFilterPanel?t._e():e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[e("i",{staticClass:"fas fa-filter"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),e("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),e("div",{staticClass:"btn-group"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),e("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[e("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),e("help-button",{on:{clicked:function(e){t.help_topic="finance.fee.report.concession"}}})],1)])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("transition",{attrs:{name:"fade"}},[t.showFilterPanel?e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.first_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.first_name,expression:"filter.first_name"}],staticClass:"form-control",attrs:{type:"text",name:"first_name",placeholder:t.trans("student.first_name")},domProps:{value:t.filter.first_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"first_name",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.last_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.last_name,expression:"filter.last_name"}],staticClass:"form-control",attrs:{type:"text",name:"last_name",placeholder:t.trans("student.last_name")},domProps:{value:t.filter.last_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"last_name",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),e("v-select",{attrs:{label:"name","track-by":"id","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_batches},on:{select:t.onBatchSelect,remove:t.onBatchRemove},model:{value:t.selected_batches,callback:function(e){t.selected_batches=e},expression:"selected_batches"}},[t.batches.length?t._e():e("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getConcession}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[t.list.total?e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.trans("student.admission_number_short")))]),t._v(" "),e("th",[t._v(t._s(t.trans("student.name")))]),t._v(" "),e("th",[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),e("th",[t._v(t._s(t.trans("student.first_guardian_name")))]),t._v(" "),e("th",[t._v(t._s(t.trans("student.contact_number")))]),t._v(" "),e("th",[t._v(t._s(t.trans("finance.fee_installment")))]),t._v(" "),e("th",[t._v(t._s(t.trans("finance.fee_concession")))]),t._v(" "),e("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),e("tbody",t._l(t.list.data,(function(s){return e("tr",[e("td",{domProps:{textContent:t._s(s.admission_number)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.name)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.batch)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.first_guardian_name)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.contact_number)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.fee_installment)}}),t._v(" "),e("td",[e("ul",{staticStyle:{"list-style-type":"none","padding-left":"0px"}},t._l(s.concession,(function(s){return e("li",[t._v("\n                                            "+t._s(s.name)+" "+t._s(s.value)+"\n                                        ")])})),0)]),t._v(" "),e("td",{staticClass:"table-option"},[e("div",{staticClass:"btn-group"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.view_detail"),expression:"trans('general.view_detail')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/student/"+s.uuid+"/fee/"+s.id)}}},[e("i",{staticClass:"fas fa-arrow-circle-right"})])])])])})),0),t._v(" "),e("tfoot",[e("tr",[e("th"),t._v(" "),e("th",[t._v(t._s(t.trans("general.total")))]),t._v(" "),e("th",{attrs:{colspan:"4"}}),t._v(" "),e("th",[t._v(t._s(t.footer.total_concession))]),t._v(" "),e("th")])])])]):t._e(),t._v(" "),t.list.total?t._e():e("module-info",{attrs:{module:"finance",title:"fee_concession_report_module_title",description:"fee_concession_report_module_description",icon:"list"}}),t._v(" "),e("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.list},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getConcession}})],1)])],1),t._v(" "),e("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);const i=a.exports}}]);