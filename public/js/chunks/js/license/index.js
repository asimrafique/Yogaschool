(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[4442],{95658:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>o});const a={data:function(){return{licenseForm:new Form({access_code:"",envato_email:""})}},mounted:function(){helper.getConfig("l")&&this.$router.push("/")},methods:{submit:function(){var t=this,s=this.$loading.show();this.licenseForm.post("/api/license").then((function(e){t.$store.dispatch("setConfig",{l:1}),toastr.success(e.message),s.hide(),t.$router.push("/")})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))}}};const o=(0,e(51900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("install.license_verification")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(s){return s.preventDefault(),t.logout.apply(null,arguments)}}},[e("i",{staticClass:"fas fa-power-off"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("auth.logout")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-4"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)},keydown:function(s){return t.licenseForm.errors.clear(s.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6 col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("install.access_code")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.licenseForm.access_code,expression:"licenseForm.access_code"}],staticClass:"form-control",attrs:{type:"text",name:"access_code",placeholder:t.trans("install.access_code")},domProps:{value:t.licenseForm.access_code},on:{input:function(s){s.target.composing||t.$set(t.licenseForm,"access_code",s.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.licenseForm,"prop-name":"access_code"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("install.envato_email")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.licenseForm.envato_email,expression:"licenseForm.envato_email"}],staticClass:"form-control",attrs:{type:"text",name:"envato_email",placeholder:t.trans("install.envato_email")},domProps:{value:t.licenseForm.envato_email},on:{input:function(s){s.target.composing||t.$set(t.licenseForm,"envato_email",s.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.licenseForm,"prop-name":"envato_email"}})],1)])]),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-info waves-effect waves-light m-t-10",attrs:{type:"submit"}},[t._v(t._s(t.trans("install.verify")))])])])])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=index.js.map?id=828101cf5f0a3d42f630