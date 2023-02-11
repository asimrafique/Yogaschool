"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[9035],{84688:(t,e,s)=>{s.r(e),s.d(e,{default:()=>o});const n={components:{documentTypeForm:s(6108).Z},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("student.edit_document_type")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/configuration/student/document/type")}}},[e("i",{staticClass:"fas fa-list"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("student.document_type")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("document-type-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null).exports},6108:(t,e,s)=>{s.d(e,{Z:()=>o});const n={data:function(){return{documentTypeForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.documentTypeForm.post("/api/student/document/type").then((function(s){toastr.success(s.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/student/document/type/"+this.id).then((function(s){t.documentTypeForm.name=s.name,t.documentTypeForm.description=s.description,e.hide()})).catch((function(s){e.hide(),helper.showErrorMsg(s),t.$router.push("/configuration/student/document/type")}))},update:function(){var t=this,e=this.$loading.show();this.documentTypeForm.patch("/api/student/document/type/"+this.id).then((function(s){toastr.success(s.message),e.hide(),t.$router.push("/configuration/student/document/type")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.documentTypeForm.errors.clear(e.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.document_type_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.documentTypeForm.name,expression:"documentTypeForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("student.document_type_name")},domProps:{value:t.documentTypeForm.name},on:{input:function(e){e.target.composing||t.$set(t.documentTypeForm,"name",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.documentTypeForm,"prop-name":"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.document_type_description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.documentTypeForm.description,expression:"documentTypeForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("student.document_type_description")},domProps:{value:t.documentTypeForm.description},on:{input:function(e){e.target.composing||t.$set(t.documentTypeForm,"description",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.documentTypeForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/configuration/student/document/type"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports}}]);