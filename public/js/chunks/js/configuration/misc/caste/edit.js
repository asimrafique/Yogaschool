"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[6354],{48530:(t,s,e)=>{e.r(s),e.d(s,{default:()=>i});const a={components:{casteForm:e(49059).Z},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const i=(0,e(51900).Z)(a,(function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("misc.edit_caste")))])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(s){return t.$router.push("/configuration/misc/caste")}}},[s("i",{staticClass:"fas fa-list"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("misc.caste")))])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("caste-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null).exports},49059:(t,s,e)=>{e.d(s,{Z:()=>i});const a={data:function(){return{casteForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,s=this.$loading.show();this.casteForm.post("/api/misc/caste").then((function(e){toastr.success(e.message),t.$emit("completed"),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,s=this.$loading.show();axios.get("/api/misc/caste/"+this.id).then((function(e){t.casteForm.name=e.name,t.casteForm.description=e.description,s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e),t.$router.push("/configuration/misc/caste")}))},update:function(){var t=this,s=this.$loading.show();this.casteForm.patch("/api/misc/caste/"+this.id).then((function(e){toastr.success(e.message),s.hide(),t.$router.push("/configuration/misc/caste")})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))}}};const i=(0,e(51900).Z)(a,(function(){var t=this,s=t._self._c;return s("form",{on:{submit:function(s){return s.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(s){return t.casteForm.errors.clear(s.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("misc.caste_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.casteForm.name,expression:"casteForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("misc.caste_name")},domProps:{value:t.casteForm.name},on:{input:function(s){s.target.composing||t.$set(t.casteForm,"name",s.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.casteForm,"prop-name":"name"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("misc.caste_description")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.casteForm.description,expression:"casteForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("misc.caste_description")},domProps:{value:t.casteForm.description},on:{input:function(s){s.target.composing||t.$set(t.casteForm,"description",s.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.casteForm,"prop-name":"description"}})],1)])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/configuration/misc/caste"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(s){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?s("span",[t._v(t._s(t.trans("general.update")))]):s("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports}}]);