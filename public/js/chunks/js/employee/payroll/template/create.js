"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[703],{9206:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const o={components:{payrollTemplateForm:a(90046).Z},data:function(){return{ruuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("manage-payroll-template")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const l=(0,a(51900).Z)(o,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.payroll_template")))])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/payroll/template")}}},[t("i",{staticClass:"fas fa-list"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.payroll_template")))])])])])])]),e._v(" "),t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body"},[t("payroll-template-form")],1)])])])}),[],!1,null,null,null).exports},90046:(e,t,a)=>{a.d(t,{Z:()=>l});const o={components:{},props:["uuid"],data:function(){return{payrollTemplateForm:new Form({name:"",is_active:"",description:"",pay_heads:[]}),pay_heads:[],attendance_types:[],categories:[{text:i18n.employee.pay_head_category_not_applicable,value:"not_applicable"},{text:i18n.employee.pay_head_category_attendance,value:"attendance"},{text:i18n.employee.pay_head_category_flat_rate,value:"flat_rate"},{text:i18n.employee.pay_head_category_user_defined,value:"user_defined"},{text:i18n.employee.pay_head_category_computation,value:"computation"},{text:i18n.employee.pay_head_category_production,value:"production"}]}},mounted:function(){this.getPreRequisite()},methods:{hasPermission:function(e){return helper.hasPermission(e)},getPayHeadNameWithAlias:function(e){return helper.getPayHeadNameWithAlias(e)},getCategoryName:function(e){return"pay_head_category_"+e},getComputationName:function(e){return"pay_head_computation_"+e},getAttendanceTypeName:function(e){return"attendance_type_"+e},populatePayHeads:function(){var e=this;this.pay_heads.forEach((function(t){e.payrollTemplateForm.pay_heads.push({id:t.id,name:t.name,alias:t.alias,type:t.type,category:null,attendance_type_id:null,computation:""})}))},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/payroll/template/pre-requisite").then((function(a){t.hide(),e.pay_heads=a.pay_heads,e.attendance_types=a.attendance_types,e.payrollTemplateForm.pay_heads=[],e.uuid?e.get():e.populatePayHeads()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},proceed:function(){this.uuid?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.payrollTemplateForm.post("/api/employee/payroll/template").then((function(a){toastr.success(a.message),e.payrollTemplateForm.pay_heads=[],e.populatePayHeads(),t.hide(),e.$emit("completed")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/payroll/template/"+this.uuid).then((function(a){var o=a.payroll_template;e.payrollTemplateForm.name=o.name,e.payrollTemplateForm.is_active=o.is_active,e.payrollTemplateForm.description=o.description,o.payroll_template_details.forEach((function(t){e.payrollTemplateForm.pay_heads.push({id:t.pay_head.id,name:t.pay_head.name,alias:t.pay_head.alias,type:t.pay_head.type,category:t.category,computation:t.computation,attendance_type_id:t.employee_attendance_type_id})})),e.pay_heads.forEach((function(t){void 0===e.payrollTemplateForm.pay_heads.find((function(e){return e.id==t.id}))&&e.payrollTemplateForm.pay_heads.push({id:t.id,name:t.name,alias:t.alias,type:t.type,category:null,computation:"",attendance_type_id:null})})),t.hide()})).catch((function(a){t.hide(),helper.showErrorMsg(a),e.$router.push("/employee/payroll/template")}))},update:function(){var e=this,t=this.$loading.show();this.payrollTemplateForm.patch("/api/employee/payroll/template/"+this.uuid).then((function(a){toastr.success(a.message),t.hide(),e.$router.push("/employee/payroll/template")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}}};const l=(0,a(51900).Z)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p-t-20"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)},keydown:function(t){return e.payrollTemplateForm.errors.clear(t.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.payroll_template_name")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.payrollTemplateForm.name,expression:"payrollTemplateForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("employee.payroll_template_name")},domProps:{value:e.payrollTemplateForm.name},on:{input:function(t){t.target.composing||e.$set(e.payrollTemplateForm,"name",t.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.payrollTemplateForm,"prop-name":"name"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.payroll_template_is_active")))]),e._v(" "),t("br"),e._v(" "),t("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:e.payrollTemplateForm.is_active,callback:function(t){e.$set(e.payrollTemplateForm,"is_active",t)},expression:"payrollTemplateForm.is_active"}})],1)]),e._v(" "),t("div",{staticClass:"col-12"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.payroll_template_description")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.payrollTemplateForm.description,expression:"payrollTemplateForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("employee.payroll_template_description")},domProps:{value:e.payrollTemplateForm.description},on:{input:function(t){t.target.composing||e.$set(e.payrollTemplateForm,"description",t.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.payrollTemplateForm,"prop-name":"description"}})],1)])]),e._v(" "),t("draggable",{staticClass:"list-group",on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.payrollTemplateForm.pay_heads,callback:function(t){e.$set(e.payrollTemplateForm,"pay_heads",t)},expression:"payrollTemplateForm.pay_heads"}},e._l(e.payrollTemplateForm.pay_heads,(function(a,o){return t("div",{key:a.id,staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("i",{staticClass:"fas fa-arrows-alt pointer m-r-20"}),e._v(" "),t("span",{class:"earning"==a.type?"text-success":"text-danger"},[e._v(e._s(e.getPayHeadNameWithAlias(a)))])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.category,expression:"pay_head.category"}],staticClass:"custom-select col-12",attrs:{name:e.getCategoryName(o)},on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(a,"category",t.target.multiple?o:o[0])},function(t){e.payrollTemplateForm.errors.clear(e.getCategoryName(o))}]}},[t("option",{attrs:{value:"null"}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.categories,(function(a){return t("option",{domProps:{value:a.value}},[e._v("\n                            "+e._s(a.text)+"\n                          ")])}))],2),e._v(" "),t("show-error",{attrs:{"form-name":e.payrollTemplateForm,"prop-name":e.getCategoryName(o)}})],1)]),e._v(" "),"production"==a.category?t("div",{staticClass:"col-12 col-sm-4"},[t("div",{staticClass:"form-group"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.attendance_type_id,expression:"pay_head.attendance_type_id"}],staticClass:"custom-select col-12",attrs:{name:e.getAttendanceTypeName(o)},on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(a,"attendance_type_id",t.target.multiple?o:o[0])},function(t){e.payrollTemplateForm.errors.clear(e.getAttendanceTypeName(o))}]}},[t("option",{attrs:{value:"null"}},[e._v(e._s(e.trans("employee.select_attendance_type")))]),e._v(" "),e._l(e.attendance_types,(function(a){return t("option",{domProps:{value:a.id}},[e._v("\n                            "+e._s(a.name)+" ("+e._s(a.unit)+")\n                          ")])}))],2),e._v(" "),t("show-error",{attrs:{"form-name":e.payrollTemplateForm,"prop-name":e.getAttendanceTypeName(o)}})],1)]):e._e(),e._v(" "),"computation"==a.category?t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.computation,expression:"pay_head.computation"}],staticClass:"form-control",attrs:{type:"text",name:e.getComputationName(o),placeholder:e.trans("employee.pay_head_computation")},domProps:{value:a.computation},on:{input:function(t){t.target.composing||e.$set(a,"computation",t.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.payrollTemplateForm,"prop-name":e.getComputationName(o)}})],1)]):e._e()])})),0),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"text-right"},[t("router-link",{directives:[{name:"show",rawName:"v-show",value:e.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/employee/payroll/template"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])],1)])],1)])}),[],!1,null,null,null).exports}}]);