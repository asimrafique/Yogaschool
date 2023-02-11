"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[1208],{67045:(t,n,e)=>{function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t,n,e){return(n=function(t){var n=function(t,n){if("object"!==a(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n||"default");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===a(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,{Z:()=>r});const c={components:{},data:function(){return{accountForm:new Form({name:"",prefix:"",opening_balance:"",type:"",account_number:"",bank_name:"",bank_identification_code:"",branch_name:"",is_active:!1}),default_currency:helper.getConfig("default_currency")}},props:["id"],mounted:function(){this.id&&this.getAccount()},methods:{proceed:function(){this.id?this.updateAccount():this.storeAccount()},storeAccount:function(){var t=this,n=this.$loading.show();this.accountForm.post("/api/account").then((function(e){toastr.success(e.message),t.$emit("completed"),n.hide()})).catch((function(t){n.hide(),helper.showErrorMsg(t)}))},getAccount:function(){var t=this,n=this.$loading.show();axios.get("/api/account/"+this.id).then((function(e){t.accountForm.name=e.name,t.accountForm.prefix=e.prefix,t.accountForm.opening_balance=t.formatNumber(e.opening_balance),t.accountForm.type=e.type,t.accountForm.account_number=e.account_number,t.accountForm.bank_name=e.bank_name,t.accountForm.branch_name=e.branch_name,t.accountForm.bank_identification_code=e.bank_identification_code,t.accountForm.is_active=e.is_active,n.hide()})).catch((function(e){n.hide(),t.$router.push("/finance/account")}))},updateAccount:function(){var t=this,n=this.$loading.show();this.accountForm.patch("/api/account/"+this.id).then((function(e){toastr.success(e.message),n.hide(),t.$router.push("/finance/account")})).catch((function(t){n.hide(),helper.showErrorMsg(t)}))},formatCurrency:function(t){return helper.formatCurrency(t)},formatNumber:function(t){return helper.formatNumber(t,this.default_currency.decimal_place)}}};const r=(0,e(51900).Z)(c,(function(){var t=this,n=t._self._c;return n("form",{on:{submit:function(n){return n.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(n){return t.accountForm.errors.clear(n.target.name)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.account_name")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountForm.name,expression:"accountForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("finance.account_name")},domProps:{value:t.accountForm.name},on:{input:function(n){n.target.composing||t.$set(t.accountForm,"name",n.target.value)}}}),t._v(" "),n("show-error",{attrs:{"form-name":t.accountForm,"prop-name":"name"}})],1)]),t._v(" "),n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.account_prefix")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountForm.prefix,expression:"accountForm.prefix"}],staticClass:"form-control",attrs:{type:"text",name:"prefix",placeholder:t.trans("finance.account_prefix")},domProps:{value:t.accountForm.prefix},on:{input:function(n){n.target.composing||t.$set(t.accountForm,"prefix",n.target.value)}}}),t._v(" "),n("show-error",{attrs:{"form-name":t.accountForm,"prop-name":"prefix"}})],1)]),t._v(" "),n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.account_opening_balance")))]),t._v(" "),n("currency-input",{attrs:{position:t.default_currency.position,symbol:t.default_currency.symbol,name:"opening_balance",placeholder:t.trans("finance.account_opening_balance")},nativeOn:{input:function(n){return t.accountForm.errors.clear("opening_balance")}},model:{value:t.accountForm.opening_balance,callback:function(n){t.$set(t.accountForm,"opening_balance",n)},expression:"accountForm.opening_balance"}}),t._v(" "),n("show-error",{attrs:{"form-name":t.accountForm,"prop-name":"opening_balance"}})],1)]),t._v(" "),n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"form-group"},[n("div",{staticClass:"radio radio-success"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountForm.type,expression:"accountForm.type"}],attrs:{type:"radio",value:"bank",id:"type_bank",name:"type"},domProps:o({checked:"bank"==t.accountForm.type},"checked",t._q(t.accountForm.type,"bank")),on:{click:function(n){return t.accountForm.errors.clear("type")},change:function(n){return t.$set(t.accountForm,"type","bank")}}}),t._v(" "),n("label",{attrs:{for:"type_bank"}},[t._v(t._s(t.trans("finance.bank")))])]),t._v(" "),n("div",{staticClass:"radio radio-success"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountForm.type,expression:"accountForm.type"}],attrs:{type:"radio",value:"cash",id:"type_cash",name:"type"},domProps:o({checked:"cash"==t.accountForm.type},"checked",t._q(t.accountForm.type,"cash")),on:{click:function(n){return t.accountForm.errors.clear("type")},change:function(n){return t.$set(t.accountForm,"type","cash")}}}),t._v(" "),n("label",{attrs:{for:"type_cash"}},[t._v(t._s(t.trans("finance.cash")))])]),t._v(" "),n("show-error",{attrs:{"form-name":t.accountForm,"prop-name":"type"}})],1)]),t._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("switches",{staticClass:"m-l-20",attrs:{theme:"bootstrap",color:"success"},model:{value:t.accountForm.is_active,callback:function(n){t.$set(t.accountForm,"is_active",n)},expression:"accountForm.is_active"}}),t._v(" "+t._s(t.trans("finance.account_is_active"))+"\n                    ")],1)])])]),t._v(" "),"bank"==t.accountForm.type?n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.account_number")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountForm.account_number,expression:"accountForm.account_number"}],staticClass:"form-control",attrs:{type:"text",name:"account_number",placeholder:t.trans("finance.account_number")},domProps:{value:t.accountForm.account_number},on:{input:function(n){n.target.composing||t.$set(t.accountForm,"account_number",n.target.value)}}}),t._v(" "),n("show-error",{attrs:{"form-name":t.accountForm,"prop-name":"account_number"}})],1)]),t._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.bank_name")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountForm.bank_name,expression:"accountForm.bank_name"}],staticClass:"form-control",attrs:{type:"text",name:"bank_name",placeholder:t.trans("finance.bank_name")},domProps:{value:t.accountForm.bank_name},on:{input:function(n){n.target.composing||t.$set(t.accountForm,"bank_name",n.target.value)}}}),t._v(" "),n("show-error",{attrs:{"form-name":t.accountForm,"prop-name":"bank_name"}})],1)]),t._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.branch_name")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountForm.branch_name,expression:"accountForm.branch_name"}],staticClass:"form-control",attrs:{type:"text",name:"branch_name",placeholder:t.trans("finance.branch_name")},domProps:{value:t.accountForm.branch_name},on:{input:function(n){n.target.composing||t.$set(t.accountForm,"branch_name",n.target.value)}}}),t._v(" "),n("show-error",{attrs:{"form-name":t.accountForm,"prop-name":"branch_name"}})],1)]),t._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.bank_identification_code")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountForm.bank_identification_code,expression:"accountForm.bank_identification_code"}],staticClass:"form-control",attrs:{type:"text",name:"bank_identification_code",placeholder:t.trans("finance.bank_identification_code")},domProps:{value:t.accountForm.bank_identification_code},on:{input:function(n){n.target.composing||t.$set(t.accountForm,"bank_identification_code",n.target.value)}}}),t._v(" "),n("show-error",{attrs:{"form-name":t.accountForm,"prop-name":"bank_identification_code"}})],1)])])]):t._e()]),t._v(" "),n("div",{staticClass:"card-footer text-right"},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/finance/account"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():n("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(n){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),n("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?n("span",[t._v(t._s(t.trans("general.update")))]):n("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports},30702:(t,n,e)=>{e.r(n),e.d(n,{default:()=>r});const a={components:{accountForm:e(67045).Z},data:function(){return{accounts:{total:0,data:[]},filter:{sort_by:"name",order:"asc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.finance.account_name},{value:"opening_balance",translation:i18n.finance.account_opening_balance},{value:"created_at",translation:i18n.general.created_at}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("list-account")&&helper.hasPermission("create-account")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),helper.hasPermission("list-account")&&this.getAccounts()},methods:{getConfig:function(t){return helper.getConfig(t)},hasPermission:function(t){return helper.hasPermission(t)},getAccounts:function(t){var n=this,e=this.$loading.show();"number"!=typeof t&&(t=1);var a=helper.getFilterURL(this.filter);axios.get("/api/account?page="+t+a).then((function(t){n.accounts=t,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},editAccount:function(t){this.$router.push("/finance/account/"+t.id+"/edit")},confirmDelete:function(t){var n=this;return function(e){return n.deleteAccount(t)}},deleteAccount:function(t){var n=this,e=this.$loading.show();axios.delete("/api/account/"+t.id).then((function(t){toastr.success(t.message),n.getAccounts(),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},formatCurrency:function(t){return helper.formatCurrency(t)},print:function(){var t=this.$loading.show();axios.post("/api/account/print",{filter:this.filter}).then((function(n){var e=window.open("/print");t.hide(),e.document.write(n)})).catch((function(n){t.hide(),helper.showErrorMsg(n)}))},pdf:function(){var t=this,n=this.$loading.show();axios.post("/api/account/pdf",{filter:this.filter}).then((function(e){n.hide(),window.open("/download/report/"+e+"?token="+t.authToken)})).catch((function(t){n.hide(),helper.showErrorMsg(t)}))}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getAccounts()},"filter.order":function(t){this.getAccounts()},"filter.page_length":function(t){this.getAccounts()}},computed:{authToken:function(){return helper.getAuthToken()}}},o=a;var c=(0,e(51900).Z)(o,(function(){var t=this,n=t._self._c;return n("div",[n("div",{staticClass:"page-titles"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("finance.account"))+" \n                    "),t.accounts.total?n("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.accounts.total,from:t.accounts.from,to:t.accounts.to})))]):n("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"action-buttons pull-right"},[t.accounts.total&&!t.showCreatePanel&&t.hasPermission("create-account")?n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(n){t.showCreatePanel=!t.showCreatePanel}}},[n("i",{staticClass:"fas fa-plus"}),t._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("finance.add_new_account")))])]):t._e(),t._v(" "),n("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(n){t.filter.sort_by=n},updateOrder:function(n){t.filter.order=n}}}),t._v(" "),n("div",{staticClass:"btn-group"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),n("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),n("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[n("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[n("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),n("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[n("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),n("help-button",{on:{clicked:function(n){t.help_topic="finance.account"}}})],1)])])]),t._v(" "),n("div",{staticClass:"container-fluid"},[t.hasPermission("create-account")?n("transition",{attrs:{name:"fade"}},[t.showCreatePanel?n("div",{staticClass:"card card-form"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("finance.add_new_account")))]),t._v(" "),n("account-form",{on:{completed:t.getAccounts,cancel:function(n){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[t.accounts.total?n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-sm"},[n("thead",[n("tr",[n("th",[t._v(t._s(t.trans("finance.account_name")))]),t._v(" "),n("th",[t._v(t._s(t.trans("finance.account_prefix")))]),t._v(" "),n("th",[t._v(t._s(t.trans("finance.account_opening_balance")))]),t._v(" "),n("th",[t._v(t._s(t.trans("finance.account_type")))]),t._v(" "),n("th",[t._v(t._s(t.trans("finance.bank_detail")))]),t._v(" "),n("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),n("tbody",t._l(t.accounts.data,(function(e){return n("tr",[n("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),n("td",{domProps:{textContent:t._s(e.prefix)}}),t._v(" "),n("td",[t._v(t._s(t.formatCurrency(e.opening_balance)))]),t._v(" "),n("td",{domProps:{textContent:t._s(t.trans("finance."+e.type))}}),t._v(" "),n("td",["bank"==e.type?n("ul",{staticStyle:{"list-style":"none",padding:"0",margin:"0"}},[n("li",[n("strong",[t._v(t._s(t.trans("finance.account_number"))+":")]),t._v(" "+t._s(e.account_number))]),t._v(" "),n("li",[n("strong",[t._v(t._s(t.trans("finance.bank_name"))+":")]),t._v(" "+t._s(e.bank_name))]),t._v(" "),n("li",[n("strong",[t._v(t._s(t.trans("finance.branch_name"))+":")]),t._v(" "+t._s(e.branch_name))]),t._v(" "),n("li",[n("strong",[t._v(t._s(t.trans("finance.bank_identification_code"))+":")]),t._v(" "+t._s(e.bank_identification_code))])]):t._e()]),t._v(" "),n("td",{staticClass:"table-option"},[n("div",{staticClass:"btn-group"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("finance.edit_account"),expression:"trans('finance.edit_account')"}],staticClass:"btn btn-info btn-sm",on:{click:function(n){return n.preventDefault(),t.editAccount(e)}}},[n("i",{staticClass:"fas fa-edit"})]),t._v(" "),n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(account)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("finance.delete_account"),expression:"trans('finance.delete_account')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[n("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):t._e(),t._v(" "),t.accounts.total?t._e():n("module-info",{attrs:{module:"finance",title:"account_module_title",description:"account_module_description",icon:"list"}},[n("div",{attrs:{slot:"btn"},slot:"btn"},[!t.showCreatePanel&&t.hasPermission("create-account")?n("button",{staticClass:"btn btn-info btn-md",on:{click:function(n){t.showCreatePanel=!t.showCreatePanel}}},[n("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))]):t._e()])]),t._v(" "),n("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.accounts},on:{"update:pageLength":function(n){return t.$set(t.filter,"page_length",n)},"update:page-length":function(n){return t.$set(t.filter,"page_length",n)},updateRecords:t.getAccounts}})],1)])],1),t._v(" "),n("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);const r=c.exports}}]);