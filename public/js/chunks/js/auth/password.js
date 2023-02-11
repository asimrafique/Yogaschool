"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[5582],{77117:(t,s,e)=>{e.d(s,{Z:()=>a});const r={methods:{getConfig:function(t){return helper.getConfig(t)}}};const a=(0,e(51900).Z)(r,(function(){var t=this,s=t._self._c;return s("div",[s("p",{staticClass:"text-center"},[s("small",[t._v(t._s(t.getConfig("footer_credit"))+" "+t._s(t.trans("general.version")+" "+t.getConfig("v")))])])])}),[],!1,null,null,null).exports},38906:(t,s,e)=>{e.r(s),e.d(s,{default:()=>a});const r={data:function(){return{passwordForm:new Form({email:""})}},components:{guestFooter:e(77117).Z},mounted:function(){if(!helper.featureAvailable("reset_password"))return helper.featureNotAvailableMsg(),this.$router.push("/dashboard")},methods:{submit:function(t){var s=this,e=this.$loading.show();this.passwordForm.post("/api/auth/password").then((function(t){toastr.success(t.message),e.hide(),s.$router.push("/login")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)}},computed:{getLogo:function(){return helper.getLogo()}}};const a=(0,e(51900).Z)(r,(function(){var t=this,s=t._self._c;return s("section",{attrs:{id:"wrapper"}},[s("div",{staticClass:"login-register guest-page"},[s("div",{staticClass:"login-box card guest-box"},[s("div",{staticClass:"card-body p-4"},[s("img",{staticClass:"mx-auto d-block",staticStyle:{"max-width":"250px"},attrs:{src:t.getLogo}}),t._v(" "),s("form",{staticClass:"form-horizontal form-material",attrs:{id:"passwordform"},on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)},keydown:function(s){return t.passwordForm.errors.clear(s.target.name)}}},[s("h3",{staticClass:"box-title m-t-20 m-b-10"},[t._v(t._s(t.trans("passwords.reset_password")))]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordForm.email,expression:"passwordForm.email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:t.trans("auth.email")},domProps:{value:t.passwordForm.email},on:{input:function(s){s.target.composing||t.$set(t.passwordForm,"email",s.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.passwordForm,"prop-name":"email"}})],1),t._v(" "),t.getConfig("recaptcha")&&t.getConfig("reset_password_recaptcha")?s("div",{staticClass:"g-recaptcha",attrs:{"data-sitekey":t.getConfig("recaptcha_key")}}):t._e(),t._v(" "),s("div",{staticClass:"form-group text-center m-t-20"},[s("button",{staticClass:"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light",attrs:{type:"submit"}},[t._v(t._s(t.trans("passwords.reset_password")))])]),t._v(" "),s("div",{staticClass:"form-group m-b-0"},[s("div",{staticClass:"col-sm-12 text-center"},[s("p",[t._v(t._s(t.trans("auth.back_to_login?"))+" "),s("router-link",{staticClass:"text-info m-l-5",attrs:{to:"/login"}},[s("b",[t._v(t._s(t.trans("auth.sign_in")))])])],1)])])])]),t._v(" "),s("guest-footer")],1)])])}),[],!1,null,null,null).exports}}]);