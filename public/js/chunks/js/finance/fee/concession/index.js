"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[508],{89015:(e,t,n)=>{n.d(t,{Z:()=>o});const s={components:{},data:function(){return{feeConcessionForm:new Form({name:"",description:"",fee_heads:[]}),default_currency:helper.getConfig("default_currency"),fee_heads:[]}},props:["id"],mounted:function(){helper.hasPermission("create-fee-concession")||helper.hasPermission("edit-fee-concession")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{proceed:function(){this.id?this.update():this.store()},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/fee/concession/pre-requisite").then((function(n){e.fee_heads=n,e.populateFeeHeads(),e.id&&e.get(),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},store:function(){var e=this,t=this.$loading.show();this.feeConcessionForm.post("/api/fee/concession").then((function(n){toastr.success(n.message),e.feeConcessionForm.fee_heads=[],e.populateFeeHeads(),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/fee/concession/"+this.id).then((function(n){e.feeConcessionForm.name=n.name,e.feeConcessionForm.description=n.description,e.feeConcessionForm.fee_heads.forEach((function(e){var t=n.fee_concession_details.find((function(t){return t.fee_head_id==e.fee_head_id}));e.amount=t?t.amount:0,e.type=t&&"amount"==t.type?1:0})),t.hide()})).catch((function(n){t.hide(),helper.showErrorMsg(n),e.$router.push("/finance/fee/concession")}))},update:function(){var e=this,t=this.$loading.show();this.feeConcessionForm.patch("/api/fee/concession/"+this.id).then((function(n){toastr.success(n.message),t.hide(),e.$router.push("/finance/fee/concession")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getConfig:function(e){return helper.getConfig(e)},populateFeeHeads:function(){var e=this;this.fee_heads.forEach((function(t){e.feeConcessionForm.fee_heads.push({fee_head_id:t.id,fee_head_name:t.name+" ("+t.fee_group.name+")",amount:0,type:0})}))}}};const o=(0,n(51900).Z)(s,(function(){var e=this,t=e._self._c;return t("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)},keydown:function(t){return e.feeConcessionForm.errors.clear(t.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.fee_concession_name")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.feeConcessionForm.name,expression:"feeConcessionForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("finance.fee_concession_name")},domProps:{value:e.feeConcessionForm.name},on:{input:function(t){t.target.composing||e.$set(e.feeConcessionForm,"name",t.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.feeConcessionForm,"prop-name":"name"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.fee_concession_description")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.feeConcessionForm.description,expression:"feeConcessionForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("finance.fee_concession_description")},domProps:{value:e.feeConcessionForm.description},on:{input:function(t){t.target.composing||e.$set(e.feeConcessionForm,"description",t.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.feeConcessionForm,"prop-name":"description"}})],1)])]),e._v(" "),e._l(e.feeConcessionForm.fee_heads,(function(n){return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"m-t-10",attrs:{for:""}},[e._v(e._s(n.fee_head_name))])])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-2"},[t("div",{staticClass:"form-group"},[n.type?[t("currency-input",{attrs:{position:e.default_currency.position,symbol:e.default_currency.symbol,name:"discount_".concat(n.fee_head_id),placeholder:e.trans("finance.fee_concession_discount")},model:{value:n.amount,callback:function(t){e.$set(n,"amount",t)},expression:"fee_head.amount"}})]:[t("div",{staticClass:"input-group mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.amount,expression:"fee_head.amount"}],staticClass:"form-control",attrs:{type:"text",name:"discount_".concat(n.fee_head_id),placeholder:e.trans("finance.fee_concession_discount")},domProps:{value:n.amount},on:{input:function(t){t.target.composing||e.$set(n,"amount",t.target.value)}}}),e._v(" "),e._m(0,!0)])],e._v(" "),t("show-error",{attrs:{"form-name":e.feeConcessionForm,"prop-name":"discount_".concat(n.fee_head_id)}})],2)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-2"},[t("div",{staticClass:"form-group"},[t("switches",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.type?e.trans("finance.turn_off_for_discount_in_percent"):e.trans("finance.turn_on_for_discount_in_amount"),expression:"fee_head.type ? trans('finance.turn_off_for_discount_in_percent') : trans('finance.turn_on_for_discount_in_amount')"}],staticClass:"m-l-20 m-t-10",attrs:{theme:"bootstrap",color:"success"},model:{value:n.type,callback:function(t){e.$set(n,"type",t)},expression:"fee_head.type"}})],1)])])})),e._v(" "),t("div",{staticClass:"card-footer text-right"},[t("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/finance/fee/concession"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():t("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?t("span",[e._v(e._s(e.trans("general.update")))]):t("span",[e._v(e._s(e.trans("general.save")))])])],1)],2)}),[function(){var e=this._self._c;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[this._v("%")])])}],!1,null,null,null).exports},16470:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const s={components:{feeConcessionForm:n(89015).Z},data:function(){return{fee_concessions:{total:0,data:[]},filter:{sort_by:"name",order:"asc",name:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.finance.fee_concession_name}],showCreatePanel:!1,showFilterPanel:!1}},mounted:function(){helper.hasPermission("list-fee-concession")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getFeeConcessions(),helper.showDemoNotification(["finance"])},methods:{getConfig:function(e){return helper.getConfig(e)},hasPermission:function(e){return helper.hasPermission(e)},getFeeConcessions:function(e){var t=this,n=this.$loading.show();"number"!=typeof e&&(e=1);var s=helper.getFilterURL(this.filter);axios.get("/api/fee/concession?page="+e+s).then((function(e){t.fee_concessions=e,n.hide()})).catch((function(e){n.hide(),helper.showErrorMsg(e)}))},editFeeConcession:function(e){this.$router.push("/finance/fee/concession/"+e.id+"/edit")},confirmDelete:function(e){var t=this;return function(n){return t.deleteFeeConcession(e)}},deleteFeeConcession:function(e){var t=this,n=this.$loading.show();axios.delete("/api/fee/concession/"+e.id).then((function(e){toastr.success(e.message),t.getFeeConcessions(),n.hide()})).catch((function(e){n.hide(),helper.showErrorMsg(e)}))},formatCurrency:function(e){return helper.formatCurrency(e)},print:function(){var e=this.$loading.show();axios.post("/api/fee/concession/print",{filter:this.filter}).then((function(t){var n=window.open("/print");e.hide(),n.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/fee/concession/pdf",{filter:this.filter}).then((function(n){t.hide(),window.open("/download/report/"+n+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getFeeConcessions()},"filter.order":function(e){this.getFeeConcessions()},"filter.page_length":function(e){this.getFeeConcessions()}},computed:{authToken:function(){return helper.getAuthToken()}}};const o=(0,n(51900).Z)(s,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("finance.fee_concession"))+" \n                    "),e.fee_concessions.total?t("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.fee_concessions.total,from:e.fee_concessions.from,to:e.fee_concessions.to})))]):t("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[e.fee_concessions.total&&e.hasPermission("create-fee-concession")?t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[t("i",{staticClass:"fas fa-plus"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("finance.add_new_fee_concession")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[t("i",{staticClass:"fas fa-filter"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),t("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),t("div",{staticClass:"btn-group"},[t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),t("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[t("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[t("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),t("help-button",{on:{clicked:function(t){e.help_topic="finance.fee.concession"}}})],1)])])]),e._v(" "),t("div",{staticClass:"container-fluid"},[t("transition",{attrs:{name:"fade"}},[e.showFilterPanel?t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body"},[t("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.fee_concession_name")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.name,expression:"filter.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("finance.fee_concession_name")},domProps:{value:e.filter.name},on:{input:function(t){t.target.composing||e.$set(e.filter,"name",t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"card-footer text-right"},[t("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getFeeConcessions}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),e.hasPermission("create-fee-concession")?t("transition",{attrs:{name:"fade"}},[e.showCreatePanel?t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body"},[t("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("finance.add_new_fee_concession")))]),e._v(" "),t("fee-concession-form",{on:{completed:e.getFeeConcessions,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]):e._e(),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[e.fee_concessions.total?t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-sm"},[t("thead",[t("tr",[t("th",[e._v(e._s(e.trans("finance.fee_concession_name")))]),e._v(" "),t("th",[e._v(e._s(e.trans("finance.fee_head")))]),e._v(" "),t("th",[e._v(e._s(e.trans("finance.fee_concession_description")))]),e._v(" "),t("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),t("tbody",e._l(e.fee_concessions.data,(function(n){return t("tr",[t("td",{domProps:{textContent:e._s(n.name)}}),e._v(" "),t("td",e._l(n.fee_concession_details,(function(n){return t("div",{staticClass:"row"},[t("div",{staticClass:"col-8"},[t("i",{staticClass:"fas fa-check"}),e._v(" "+e._s(n.fee_head.name)+" ("+e._s(n.fee_head.fee_group.name)+")\n                                        ")]),e._v(" "),t("div",{staticClass:"col-4"},["percent"==n.type?t("span",[e._v(e._s(n.amount)+"%")]):t("span",[e._v(e._s(e.formatCurrency(n.amount)))])])])})),0),e._v(" "),t("td",{domProps:{textContent:e._s(n.description)}}),e._v(" "),t("td",{staticClass:"table-option"},[t("div",{staticClass:"btn-group"},[e.hasPermission("edit-fee-concession")?t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("finance.edit_fee_concession"),expression:"trans('finance.edit_fee_concession')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){return t.preventDefault(),e.editFeeConcession(n)}}},[t("i",{staticClass:"fas fa-edit"})]):e._e(),e._v(" "),e.hasPermission("delete-fee-concession")?t("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(n)},expression:"{ok: confirmDelete(fee_concession)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("finance.delete_fee_concession"),expression:"trans('finance.delete_fee_concession')"}],key:n.id,staticClass:"btn btn-danger btn-sm"},[t("i",{staticClass:"fas fa-trash"})]):e._e()])])])})),0)])]):e._e(),e._v(" "),e.fee_concessions.total?e._e():t("module-info",{attrs:{module:"finance",title:"fee_concession_module_title",description:"fee_concession_module_description",icon:"list"}},[t("div",{attrs:{slot:"btn"},slot:"btn"},[!e.showCreatePanel&&e.hasPermission("create-fee-concession")?t("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[t("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))]):e._e()])]),e._v(" "),t("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.fee_concessions},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getFeeConcessions}})],1)])],1)])}),[],!1,null,null,null).exports}}]);