"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[5599],{2087:(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});const n={components:{departmentForm:s(60385).Z},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const a=(0,s(51900).Z)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("employee.edit_department")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/configuration/employee/department")}}},[e("i",{staticClass:"fas fa-list"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("employee.department")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("department-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null).exports},60385:(t,e,s)=>{s.d(e,{Z:()=>a});const n={data:function(){return{departmentForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.departmentForm.post("/api/employee/department").then((function(s){toastr.success(s.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/employee/department/"+this.id).then((function(s){t.departmentForm.name=s.name,t.departmentForm.description=s.description,e.hide()})).catch((function(s){e.hide(),helper.showErrorMsg(s),t.$router.push("/configuration/employee/department")}))},update:function(){var t=this,e=this.$loading.show();this.departmentForm.patch("/api/employee/department/"+this.id).then((function(s){toastr.success(s.message),e.hide(),t.$router.push("/configuration/employee/department")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}};const a=(0,s(51900).Z)(n,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.departmentForm.errors.clear(e.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("employee.department_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.departmentForm.name,expression:"departmentForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("employee.department_name")},domProps:{value:t.departmentForm.name},on:{input:function(e){e.target.composing||t.$set(t.departmentForm,"name",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.departmentForm,"prop-name":"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("employee.department_description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.departmentForm.description,expression:"departmentForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("employee.department_description")},domProps:{value:t.departmentForm.description},on:{input:function(e){e.target.composing||t.$set(t.departmentForm,"description",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.departmentForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/configuration/employee/department"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports}}]);