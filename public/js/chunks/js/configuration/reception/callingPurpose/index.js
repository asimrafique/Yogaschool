"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[205],{70533:(t,e,n)=>{n.d(e,{Z:()=>o});const s={data:function(){return{callingPurposeForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.callingPurposeForm.post("/api/reception/calling/purpose").then((function(n){toastr.success(n.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/reception/calling/purpose/"+this.id).then((function(n){t.callingPurposeForm.name=n.name,t.callingPurposeForm.description=n.description,e.hide()})).catch((function(n){e.hide(),helper.showErrorMsg(n),t.$router.push("/configuration/reception/calling/purpose")}))},update:function(){var t=this,e=this.$loading.show();this.callingPurposeForm.patch("/api/reception/calling/purpose/"+this.id).then((function(n){toastr.success(n.message),e.hide(),t.$router.push("/configuration/reception/calling/purpose")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}};const o=(0,n(51900).Z)(s,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.callingPurposeForm.errors.clear(e.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.calling_purpose_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.callingPurposeForm.name,expression:"callingPurposeForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("reception.calling_purpose_name")},domProps:{value:t.callingPurposeForm.name},on:{input:function(e){e.target.composing||t.$set(t.callingPurposeForm,"name",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.callingPurposeForm,"prop-name":"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.calling_purpose_description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.callingPurposeForm.description,expression:"callingPurposeForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("reception.calling_purpose_description")},domProps:{value:t.callingPurposeForm.description},on:{input:function(e){e.target.composing||t.$set(t.callingPurposeForm,"description",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.callingPurposeForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/configuration/reception/calling/purpose"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports},85849:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});const s={components:{callingPurposeForm:n(70533).Z},data:function(){return{calling_purposes:{total:0,data:[]},filter:{sort_by:"name",order:"asc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.reception.calling_purpose_name}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getCallingPurposes()},methods:{getConfig:function(t){return helper.getConfig(t)},getCallingPurposes:function(t){var e=this,n=this.$loading.show();"number"!=typeof t&&(t=1);var s=helper.getFilterURL(this.filter);axios.get("/api/reception/calling/purpose?page="+t+s).then((function(t){e.calling_purposes=t,n.hide()})).catch((function(t){n.hide(),helper.showErrorMsg(t)}))},editCallingPurpose:function(t){this.$router.push("/configuration/reception/calling/purpose/"+t.id+"/edit")},confirmDelete:function(t){var e=this;return function(n){return e.deleteCallingPurpose(t)}},deleteCallingPurpose:function(t){var e=this,n=this.$loading.show();axios.delete("/api/reception/calling/purpose/"+t.id).then((function(t){toastr.success(t.message),e.getCallingPurposes(),n.hide()})).catch((function(t){n.hide(),helper.showErrorMsg(t)}))},print:function(){var t=this.$loading.show();axios.post("/api/reception/calling/purpose/print",{filter:this.filter}).then((function(e){var n=window.open("/print");t.hide(),n.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/reception/calling/purpose/pdf",{filter:this.filter}).then((function(n){e.hide(),window.open("/download/report/"+n+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getCallingPurposes()},"filter.order":function(t){this.getCallingPurposes()},"filter.page_length":function(t){this.getCallingPurposes()}},computed:{authToken:function(){return helper.getAuthToken()}}},o=s;var i=(0,n(51900).Z)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("reception.calling_purpose"))+" \n                    "),t.calling_purposes.total?e("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.calling_purposes.total,from:t.calling_purposes.from,to:t.calling_purposes.to})))]):e("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[t.calling_purposes.total&&!t.showCreatePanel?e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[e("i",{staticClass:"fas fa-plus"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("reception.add_new_calling_purpose")))])]):t._e(),t._v(" "),e("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),e("div",{staticClass:"btn-group"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),e("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[e("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),e("help-button",{on:{clicked:function(e){t.help_topic="configuration.reception.calling-purpose"}}})],1)])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("transition",{attrs:{name:"fade"}},[t.showCreatePanel?e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("reception.add_new_calling_purpose")))]),t._v(" "),e("calling-purpose-form",{on:{completed:t.getCallingPurposes,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[t.calling_purposes.total?e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.trans("reception.calling_purpose_name")))]),t._v(" "),e("th",[t._v(t._s(t.trans("reception.calling_purpose_description")))]),t._v(" "),e("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),e("tbody",t._l(t.calling_purposes.data,(function(n){return e("tr",[e("td",{domProps:{textContent:t._s(n.name)}}),t._v(" "),e("td",{domProps:{textContent:t._s(n.description)}}),t._v(" "),e("td",{staticClass:"table-option"},[e("div",{staticClass:"btn-group"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("reception.edit_calling_purpose"),expression:"trans('reception.edit_calling_purpose')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){return e.preventDefault(),t.editCallingPurpose(n)}}},[e("i",{staticClass:"fas fa-edit"})]),t._v(" "),e("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(n)},expression:"{ok: confirmDelete(calling_purpose)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("reception.delete_calling_purpose"),expression:"trans('reception.delete_calling_purpose')"}],key:n.id,staticClass:"btn btn-danger btn-sm"},[e("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):t._e(),t._v(" "),t.calling_purposes.total?t._e():e("module-info",{attrs:{module:"reception",title:"calling_purpose_module_title",description:"calling_purpose_module_description",icon:"list"}},[e("div",{attrs:{slot:"btn"},slot:"btn"},[t.showCreatePanel?t._e():e("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[e("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))])])]),t._v(" "),e("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.calling_purposes},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getCallingPurposes},nativeOn:{change:function(e){return t.getCallingPurposes.apply(null,arguments)}}})],1)])],1),t._v(" "),e("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);const a=i.exports}}]);