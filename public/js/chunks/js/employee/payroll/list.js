"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[7815],{4390:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});const a={components:{},data:function(){return{payrolls:{total:0,data:[]},filter:{sort_by:"start_date",order:"desc",employee_id:[],page_length:helper.getConfig("page_length")},orderByOptions:[{value:"start_date",translation:i18n.employee.payroll_start_date},{value:"end_date",translation:i18n.employee.payroll_end_date},{value:"created_at",translation:i18n.general.created_at}],employees:[],selected_employees:null,showFilterPanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("list-payroll")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPayrolls()},methods:{hasPermission:function(e){return helper.hasPermission(e)},getEmployeeNameWithCode:function(e){return helper.getEmployeeNameWithCode(e)},getEmployeeDesignationOnDate:function(e,t){return helper.getEmployeeDesignationOnDate(e,t)},getPayrollStatus:function(e){return helper.getPayrollStatus(e)},getPayrollNumber:function(e){return helper.getPayrollNumber(e)},getPayrolls:function(e){var t=this,s=this.$loading.show();"number"!=typeof e&&(e=1);var a=helper.getFilterURL(this.filter);axios.get("/api/employee/payroll/list?page="+e+a).then((function(e){t.payrolls=e.payrolls,t.employees=e.filters.employees,s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},editPayroll:function(e){this.$router.push("/employee/payroll/"+e.uuid+"/edit")},confirmDelete:function(e){var t=this;return function(s){return t.deletePayroll(e)}},deletePayroll:function(e){var t=this,s=this.$loading.show();axios.delete("/api/employee/payroll/"+e.uuid).then((function(e){toastr.success(e.message),t.getPayrolls(),s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},getConfig:function(e){return helper.getConfig(e)},print:function(){var e=this.$loading.show();axios.post("/api/employee/payroll/print",{filter:this.filter}).then((function(t){var s=window.open("/print");e.hide(),s.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/employee/payroll/pdf",{filter:this.filter}).then((function(s){t.hide(),window.open("/download/report/"+s+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},formatCurrency:function(e){return helper.formatCurrency(e)},onEmployeeSelect:function(e){this.filter.employee_id.push(e.id)},onEmployeeRemove:function(e){this.filter.employee_id.splice(this.filter.employee_id.indexOf(e.id),1)}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getPayrolls()},"filter.order":function(e){this.getPayrolls()},"filter.page_length":function(e){this.getPayrolls()}},computed:{authToken:function(){return helper.getAuthToken()}}};const l=(0,s(51900).Z)(a,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.payroll"))+" \n                    "),e.payrolls.total?t("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.payrolls.total,from:e.payrolls.from,to:e.payrolls.to})))]):t("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[e.payrolls.total&&e.hasPermission("generate-payroll")?t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.generate_new_payroll"),expression:"trans('employee.generate_new_payroll')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/payroll/generate")}}},[t("i",{staticClass:"fas fa-plus"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.generate_new_payroll")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[t("i",{staticClass:"fas fa-filter"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),t("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),t("div",{staticClass:"btn-group"},[t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),t("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[t("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[t("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),t("help-button",{on:{clicked:function(t){e.help_topic="employee.payroll"}}})],1)])])]),e._v(" "),t("div",{staticClass:"container-fluid"},[t("transition",{attrs:{name:"fade"}},[e.showFilterPanel?t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body"},[t("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee")))]),e._v(" "),t("v-select",{attrs:{label:"name","track-by":"id",name:"employee_id",id:"employee_id",options:e.employees,placeholder:e.trans("employee.select_employee"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_employees},on:{select:e.onEmployeeSelect,remove:e.onEmployeeRemove},model:{value:e.selected_employees,callback:function(t){e.selected_employees=t},expression:"selected_employees"}},[e.employees.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)])]),e._v(" "),t("div",{staticClass:"card-footer text-right"},[t("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getPayrolls}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[e.payrolls.total?t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-sm"},[t("thead",[t("tr",[t("th",[e._v(e._s(e.trans("employee.payroll")))]),e._v(" "),t("th",[e._v(e._s(e.trans("employee.employee")))]),e._v(" "),t("th",[e._v(e._s(e.trans("employee.payroll_period")))]),e._v(" "),t("th",[e._v(e._s(e.trans("employee.net_salary")))]),e._v(" "),t("th",[e._v(e._s(e.trans("employee.payroll_status")))]),e._v(" "),t("th",[e._v(e._s(e.trans("general.created_at")))]),e._v(" "),t("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),t("tbody",e._l(e.payrolls.data,(function(s){return t("tr",[t("td",[e._v(e._s("#"+e.getPayrollNumber(s)))]),e._v(" "),t("td",[e._v("\n                                    "+e._s(e.getEmployeeNameWithCode(s.employee))+" "),t("br"),e._v(" "),t("span",{staticClass:"font-90pc"},[e._v(e._s(e.getEmployeeDesignationOnDate(s.employee,s.start_date)))])]),e._v(" "),t("td",[e._v(e._s(e._f("moment")(s.start_date))+" "+e._s(e.trans("general.to"))+" "+e._s(e._f("moment")(s.end_date)))]),e._v(" "),t("td",[e._v(e._s(e.formatCurrency(s.total)))]),e._v(" "),t("td",e._l(e.getPayrollStatus(s),(function(s){return t("span",{class:["label","label-"+s.color,"m-r-5"]},[e._v(e._s(s.label))])})),0),e._v(" "),t("td",[e._v(e._s(e._f("momentDateTime")(s.created_at)))]),e._v(" "),t("td",{staticClass:"table-option"},[t("div",{staticClass:"btn-group"},[t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.view"),expression:"trans('general.view')"}],staticClass:"btn btn-success btn-sm",on:{click:function(t){return e.$router.push("/employee/payroll/"+s.uuid)}}},[t("i",{staticClass:"fas fa-arrow-circle-right"})]),e._v(" "),t("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.print"),expression:"trans('general.print')"}],staticClass:"btn btn-secondary btn-sm",attrs:{href:"/employee/payroll/".concat(s.uuid,"/print?token=").concat(e.authToken),target:"_blank"}},[t("i",{staticClass:"fas fa-print"})]),e._v(" "),e.hasPermission("edit-payroll")?t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.edit_payroll"),expression:"trans('employee.edit_payroll')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){return t.preventDefault(),e.editPayroll(s)}}},[t("i",{staticClass:"fas fa-edit"})]):e._e(),e._v(" "),e.hasPermission("delete-payroll")?t("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(s)},expression:"{ok: confirmDelete(payroll)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.delete_payroll"),expression:"trans('employee.delete_payroll')"}],key:s.id,staticClass:"btn btn-danger btn-sm"},[t("i",{staticClass:"fas fa-trash"})]):e._e()])])])})),0)])]):e._e(),e._v(" "),e.payrolls.total?e._e():t("module-info",{attrs:{module:"employee",title:"payroll_module_title",description:"payroll_module_description",icon:"list"}},[t("div",{attrs:{slot:"btn"},slot:"btn"},[e.hasPermission("generate-payroll")?t("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){return e.$router.push("/employee/payroll/generate")}}},[t("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("employee.generate_new_payroll")))]):e._e()])]),e._v(" "),t("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.payrolls},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getPayrolls}})],1)])],1),e._v(" "),t("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null).exports}}]);