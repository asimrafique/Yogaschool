"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[2069],{93354:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const o={components:{},data:function(){return{transport_stoppages:[],selected_transport_stoppage:null,transport_route_students:{total:0,data:[]},filter:{transport_stoppage:"",sort_by:"created_at",order:"desc",page_length:helper.getConfig("page_length")},help_topic:""}},mounted:function(){helper.hasPermission("access-transport-report")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{hasPermission:function(t){return helper.hasPermission(t)},getConfig:function(t){return helper.getConfig(t)},getAdmissionNumber:function(t){return helper.getAdmissionNumber(t)},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/transport/report/pre-requisite").then((function(s){t.transport_stoppages=s.transport_stoppages,t.transport_routes=s.transport_routes,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getReport:function(t){var e=this,s=this.$loading.show();"number"!=typeof t&&(t=1);var o=helper.getFilterURL(this.filter);axios.get("/api/transport/report/stoppage?page="+t+o).then((function(t){e.transport_route_students=t,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},getStudentName:function(t){return helper.getStudentName(t)},onTransportStoppageSelect:function(t){var e=this.$loading.show();this.filter.transport_stoppage=t.id,this.getReport(),e.hide()},onTransportStoppageRemove:function(t){},print:function(){var t=this.$loading.show();axios.post("/api/transport/report/stoppage/print",{filter:this.filter}).then((function(e){var s=window.open("/print");t.hide(),s.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/transport/report/stoppage/pdf",{filter:this.filter}).then((function(s){e.hide(),window.open("/download/report/"+s+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},computed:{authToken:function(){return helper.getAuthToken()}}};const r=(0,s(51900).Z)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("transport.stoppage_wise_report")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("div",{staticClass:"btn-group"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),e("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[e("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),e("help-button",{on:{clicked:function(e){t.help_topic="transport"}}})],1)])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-4"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.stoppage")))]),t._v(" "),e("v-select",{attrs:{label:"name",name:"transport_stoppage_id",id:"transport_stoppage_id",options:t.transport_stoppages,placeholder:t.trans("transport.select_stoppage")},on:{select:t.onTransportStoppageSelect,remove:t.onTransportStoppageRemove},model:{value:t.selected_transport_stoppage,callback:function(e){t.selected_transport_stoppage=e},expression:"selected_transport_stoppage"}})],1)])])])])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[t.transport_route_students.total?e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.trans("student.admission_number")))]),t._v(" "),e("th",[t._v(t._s(t.trans("student.name")))]),t._v(" "),e("th",[t._v(t._s(t.trans("academic.course")))]),t._v(" "),e("th",[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),e("th",[t._v(t._s(t.trans("transport.route")))])])]),t._v(" "),e("tbody",t._l(t.transport_route_students.data,(function(s){return e("tr",[e("td",{domProps:{textContent:t._s(t.getAdmissionNumber(s.student_record.admission))}}),t._v(" "),e("td",{domProps:{textContent:t._s(t.getStudentName(s.student_record.student))}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.student_record.batch.course.name)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.student_record.batch.name)}}),t._v(" "),e("td",{domProps:{textContent:t._s(s.transport_route_detail.transport_route.name)}})])})),0)])]):t._e(),t._v(" "),t.transport_route_students.total?t._e():e("module-info",{attrs:{module:"transport",title:"stoppage_wise_report_module_title",description:"stoppage_wise_report_module_description",icon:"list"}}),t._v(" "),e("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.transport_route_students},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getReport},nativeOn:{change:function(e){return t.getReport.apply(null,arguments)}}})],1)])])])]),t._v(" "),e("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null).exports}}]);