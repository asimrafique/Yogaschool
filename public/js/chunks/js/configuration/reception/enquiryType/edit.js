"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[6785],{25954:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});const i={components:{enquiryTypeForm:n(20815).Z},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const s=(0,n(51900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("reception.edit_enquiry_type")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/configuration/reception/enquiry/type")}}},[e("i",{staticClass:"fas fa-list"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("reception.enquiry_type")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("enquiry-type-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null).exports},20815:(t,e,n)=>{n.d(e,{Z:()=>s});const i={data:function(){return{enquiryTypeForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.enquiryTypeForm.post("/api/reception/enquiry/type").then((function(n){toastr.success(n.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/reception/enquiry/type/"+this.id).then((function(n){t.enquiryTypeForm.name=n.name,t.enquiryTypeForm.description=n.description,e.hide()})).catch((function(n){e.hide(),helper.showErrorMsg(n),t.$router.push("/configuration/reception/enquiry/type")}))},update:function(){var t=this,e=this.$loading.show();this.enquiryTypeForm.patch("/api/reception/enquiry/type/"+this.id).then((function(n){toastr.success(n.message),e.hide(),t.$router.push("/configuration/reception/enquiry/type")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}};const s=(0,n(51900).Z)(i,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.enquiryTypeForm.errors.clear(e.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.enquiry_type_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.enquiryTypeForm.name,expression:"enquiryTypeForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("reception.enquiry_type_name")},domProps:{value:t.enquiryTypeForm.name},on:{input:function(e){e.target.composing||t.$set(t.enquiryTypeForm,"name",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.enquiryTypeForm,"prop-name":"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.enquiry_type_description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.enquiryTypeForm.description,expression:"enquiryTypeForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("reception.enquiry_type_description")},domProps:{value:t.enquiryTypeForm.description},on:{input:function(e){e.target.composing||t.$set(t.enquiryTypeForm,"description",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.enquiryTypeForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/configuration/reception/enquiry/type"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports}}]);