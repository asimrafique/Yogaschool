"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[4017],{25141:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});const s={components:{categoryForm:o(20092).Z},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const r=(0,o(51900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("employee.edit_category")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/configuration/employee/category")}}},[e("i",{staticClass:"fas fa-list"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("employee.category")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("category-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null).exports},20092:(t,e,o)=>{o.d(e,{Z:()=>r});const s={components:{},data:function(){return{categoryForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.categoryForm.post("/api/employee/category").then((function(o){toastr.success(o.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/employee/category/"+this.id).then((function(o){o.name==helper.getConfig("system_admin_employee_category")&&(toastr.error(i18n.user.permission_denied),e.hide(),t.$router.push("/configuration/employee/category")),t.categoryForm.name=o.name,t.categoryForm.description=o.description,e.hide()})).catch((function(o){e.hide(),helper.showErrorMsg(o),t.$router.push("/configuration/employee/category")}))},update:function(){var t=this,e=this.$loading.show();this.categoryForm.patch("/api/employee/category/"+this.id).then((function(o){toastr.success(o.message),e.hide(),t.$router.push("/configuration/employee/category")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}};const r=(0,o(51900).Z)(s,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.categoryForm.errors.clear(e.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("employee.category_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryForm.name,expression:"categoryForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("employee.category_name")},domProps:{value:t.categoryForm.name},on:{input:function(e){e.target.composing||t.$set(t.categoryForm,"name",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.categoryForm,"prop-name":"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("employee.category_description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryForm.description,expression:"categoryForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("employee.category_description")},domProps:{value:t.categoryForm.description},on:{input:function(e){e.target.composing||t.$set(t.categoryForm,"description",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.categoryForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/configuration/employee/category"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports}}]);