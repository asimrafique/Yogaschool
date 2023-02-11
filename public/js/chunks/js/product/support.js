"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[4968],{94970:(t,s,r)=>{r.d(s,{Z:()=>o});const e={props:{product:{required:!0},update:{required:!1,default:0}},computed:{checkSupportValidity:function(){return helper.today()<=this.product.date_of_support_expiry}},filters:{moment:function(t){return helper.formatDate(t)}}};const o=(0,r(51900).Z)(e,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"table-responsive"},[t.product.name?s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",[t._v("Product Name")]),t._v(" "),s("td",[t._v(t._s(t.product.name))])]),t._v(" "),s("tr",[s("th",[t._v("Current Version")]),t._v(" "),s("td",[t._v(t._s(t.product.current_version))])]),t._v(" "),s("tr",[s("th",[t._v("Latest Version")]),t._v(" "),s("td",[t._v("\n                        "+t._s(t.product.latest_version)+"\n                        "),t.product.current_version==t.product.latest_version||t.update?t._e():s("span",[s("br"),s("router-link",{staticClass:"btn btn-info btn-sm",attrs:{to:"/update"}},[t._v("Update Available")])],1),t._v(" "),t.product.current_version==t.product.latest_version?s("span",{staticClass:"btn btn-success btn-sm"},[t._v("Up-to-date")]):t._e()])]),t._v(" "),s("tr",[s("th",[t._v("Latest Version Release")]),t._v(" "),s("td",[t._v(t._s(t._f("moment")(t.product.latest_version_release)))])]),t._v(" "),s("tr",[s("th",[t._v("Purchase Code")]),t._v(" "),s("td",[t._v(t._s(t.product.purchase_code))])]),t._v(" "),s("tr",[s("th",[t._v("Registered Email Id")]),t._v(" "),s("td",[t._v(t._s(t.product.email))])]),t._v(" "),s("tr",[s("th",[t._v("License Type")]),t._v(" "),s("td",[t._v(t._s(t.product.license_type))])]),t._v(" "),s("tr",[s("th",[t._v("Date of Purchase")]),t._v(" "),s("td",[t._v(t._s(t._f("moment")(t.product.date_of_purchase)))])]),t._v(" "),s("tr",[s("th",[t._v("Support Validity "),s("br"),t._v(" "),s("a",{staticClass:"btn btn-info btn-sm",attrs:{href:"http://codecanyon.net/item/x/".concat(t.product.envato_code,"?=ScriptMint"),target:"_blank"}},[t._v("Renew Support")])]),t._v(" "),s("td",[t._v(t._s(t._f("moment")(t.product.date_of_support_expiry))+" "),s("br"),t._v(" "),t.checkSupportValidity?s("span",{staticClass:"label label-success"},[t._v("Supported")]):s("span",{staticClass:"label label-danger"},[t._v("Expired")])])]),t._v(" "),s("tr",[s("th",[t._v("Access Code")]),t._v(" "),s("td",[t._v(t._s(t.product.access_code))])]),t._v(" "),s("tr",[s("th",[t._v("Checksum")]),t._v(" "),s("td",[t._v(t._s(t.product.checksum))])])])]):t._e()])}),[],!1,null,null,null).exports},53531:(t,s,r)=>{r.r(s),r.d(s,{default:()=>o});const e={components:{product:r(94970).Z},data:function(){return{support_tips:"",product:{},supportForm:new Form({help_topic:"",body:"",purchase_code:"",product_name:"",date_of_support_expiry:"",subject:""})}},mounted:function(){helper.hasRole("admin")&&helper.getConfig("pb")||this.$router.push("/"),this.getPreRequisite()},methods:{getPreRequisite:function(){var t=this,s=this.$loading.show();axios.get("/api/support").then((function(r){t.support_tips=r.support_tips,t.product=r.product,t.supportForm.purchase_code=t.product.purchase_code,t.supportForm.product_name=t.product.name,t.supportForm.date_of_support_expiry=t.product.date_of_support_expiry,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},submit:function(){var t=this.$loading.show();this.supportForm.post("/api/support").then((function(s){toastr.success(s.message),t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s)}))}},filters:{moment:function(t){return helper.formatDate(t)}},computed:{checkSupportValidity:function(){return helper.today()<=this.product.date_of_support_expiry}}};const o=(0,r(51900).Z)(e,(function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("general.support")))])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(s){return t.$router.push("/dashboard")}}},[s("i",{staticClass:"fas fa-home"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.home")))])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid p-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.support")))]),t._v(" "),t.product.name&&!t.checkSupportValidity?s("div",{staticClass:"alert alert-danger"},[t._v("Your support is expired. Please renew your support.")]):s("div",[s("div",{domProps:{innerHTML:t._s(t.support_tips)}}),t._v(" "),s("form",{on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)},keydown:function(s){return t.supportForm.errors.clear(s.target.name)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.supportForm.subject,expression:"supportForm.subject"}],staticClass:"form-control",attrs:{type:"text",name:"subject",placeholder:"Subject"},domProps:{value:t.supportForm.subject},on:{input:function(s){s.target.composing||t.$set(t.supportForm,"subject",s.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.supportForm,"prop-name":"subject"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("autosize-textarea",{staticClass:"form-control",attrs:{rows:"5",placeholder:"Body",name:"body"},model:{value:t.supportForm.body,callback:function(s){t.$set(t.supportForm,"body",s)},expression:"supportForm.body"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.supportForm,"prop-name":"body"}})],1),t._v(" "),t._m(0)])])])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.product_information")))]),t._v(" "),s("product",{attrs:{product:t.product}})],1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-info waves-effect waves-light m-t-10",attrs:{type:"submit"}},[this._v("Submit")])])}],!1,null,null,null).exports}}]);