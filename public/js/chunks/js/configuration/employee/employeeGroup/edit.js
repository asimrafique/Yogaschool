"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[8416],{75425:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const s={components:{employeeGroupForm:o(20677).Z},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const r=(0,o(51900).Z)(s,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.edit_employee_group")))])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/configuration/employee/group")}}},[t("i",{staticClass:"fas fa-list"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.employee_group")))])])])])])]),e._v(" "),t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-body p-4"},[t("employee-group-form",{attrs:{id:e.id}})],1)])])])}),[],!1,null,null,null).exports},20677:(e,t,o)=>{o.d(t,{Z:()=>r});const s={data:function(){return{employeeGroupForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.employeeGroupForm.post("/api/employee/group").then((function(o){toastr.success(o.message),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/group/"+this.id).then((function(o){e.employeeGroupForm.name=o.name,e.employeeGroupForm.description=o.description,t.hide()})).catch((function(o){t.hide(),helper.showErrorMsg(o),e.$router.push("/configuration/employee/group")}))},update:function(){var e=this,t=this.$loading.show();this.employeeGroupForm.patch("/api/employee/group/"+this.id).then((function(o){toastr.success(o.message),t.hide(),e.$router.push("/configuration/employee/group")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}}};const r=(0,o(51900).Z)(s,(function(){var e=this,t=e._self._c;return t("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)},keydown:function(t){return e.employeeGroupForm.errors.clear(t.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee_group_name")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeGroupForm.name,expression:"employeeGroupForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("employee.employee_group_name")},domProps:{value:e.employeeGroupForm.name},on:{input:function(t){t.target.composing||e.$set(e.employeeGroupForm,"name",t.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.employeeGroupForm,"prop-name":"name"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee_group_description")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeGroupForm.description,expression:"employeeGroupForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("employee.employee_group_description")},domProps:{value:e.employeeGroupForm.description},on:{input:function(t){t.target.composing||e.$set(e.employeeGroupForm,"description",t.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.employeeGroupForm,"prop-name":"description"}})],1)])]),e._v(" "),t("div",{staticClass:"card-footer text-right"},[t("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/configuration/employee/group"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():t("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?t("span",[e._v(e._s(e.trans("general.update")))]):t("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports}}]);