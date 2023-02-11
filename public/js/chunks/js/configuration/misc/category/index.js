"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[6481],{68767:(t,e,a)=>{a.d(e,{Z:()=>o});const s={data:function(){return{categoryForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.categoryForm.post("/api/misc/category").then((function(a){toastr.success(a.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/misc/category/"+this.id).then((function(a){t.categoryForm.name=a.name,t.categoryForm.description=a.description,e.hide()})).catch((function(a){e.hide(),helper.showErrorMsg(a),t.$router.push("/configuration/misc/category")}))},update:function(){var t=this,e=this.$loading.show();this.categoryForm.patch("/api/misc/category/"+this.id).then((function(a){toastr.success(a.message),e.hide(),t.$router.push("/configuration/misc/category")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}};const o=(0,a(51900).Z)(s,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.categoryForm.errors.clear(e.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("misc.category_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryForm.name,expression:"categoryForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("misc.category_name")},domProps:{value:t.categoryForm.name},on:{input:function(e){e.target.composing||t.$set(t.categoryForm,"name",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.categoryForm,"prop-name":"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("misc.category_description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryForm.description,expression:"categoryForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("misc.category_description")},domProps:{value:t.categoryForm.description},on:{input:function(e){e.target.composing||t.$set(t.categoryForm,"description",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.categoryForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/configuration/misc/category"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports},92147:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});const s={components:{categoryForm:a(68767).Z},data:function(){return{categories:{total:0,data:[]},filter:{sort_by:"name",order:"asc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.misc.category_name}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getCategories()},methods:{getConfig:function(t){return helper.getConfig(t)},getCategories:function(t){var e=this,a=this.$loading.show();"number"!=typeof t&&(t=1);var s=helper.getFilterURL(this.filter);axios.get("/api/misc/category?page="+t+s).then((function(t){e.categories=t,a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},editCategory:function(t){this.$router.push("/configuration/misc/category/"+t.id+"/edit")},confirmDelete:function(t){var e=this;return function(a){return e.deleteCategory(t)}},deleteCategory:function(t){var e=this,a=this.$loading.show();axios.delete("/api/misc/category/"+t.id).then((function(t){toastr.success(t.message),e.getCategories(),a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},print:function(){var t=this.$loading.show();axios.post("/api/misc/category/print",{filter:this.filter}).then((function(e){var a=window.open("/print");t.hide(),a.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/misc/category/pdf",{filter:this.filter}).then((function(a){e.hide(),window.open("/download/report/"+a+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getCategories()},"filter.order":function(t){this.getCategories()},"filter.page_length":function(t){this.getCategories()}},computed:{authToken:function(){return helper.getAuthToken()}}},o=s;var n=(0,a(51900).Z)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("misc.category"))+" \n                    "),t.categories.total?e("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.categories.total,from:t.categories.from,to:t.categories.to})))]):e("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[t.categories.total&&!t.showCreatePanel?e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[e("i",{staticClass:"fas fa-plus"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("misc.add_new_category")))])]):t._e(),t._v(" "),e("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),e("div",{staticClass:"btn-group"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),e("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[e("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),e("help-button",{on:{clicked:function(e){t.help_topic="configuration.misc.category"}}})],1)])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("transition",{attrs:{name:"fade"}},[t.showCreatePanel?e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("misc.add_new_category")))]),t._v(" "),e("category-form",{on:{completed:t.getCategories,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[t.categories.total?e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.trans("misc.category_name")))]),t._v(" "),e("th",[t._v(t._s(t.trans("misc.category_description")))]),t._v(" "),e("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),e("tbody",t._l(t.categories.data,(function(a){return e("tr",[e("td",{domProps:{textContent:t._s(a.name)}}),t._v(" "),e("td",{domProps:{textContent:t._s(a.description)}}),t._v(" "),e("td",{staticClass:"table-option"},[e("div",{staticClass:"btn-group"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("misc.edit_category"),expression:"trans('misc.edit_category')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){return e.preventDefault(),t.editCategory(a)}}},[e("i",{staticClass:"fas fa-edit"})]),t._v(" "),e("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(a)},expression:"{ok: confirmDelete(category)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("misc.delete_category"),expression:"trans('misc.delete_category')"}],key:a.id,staticClass:"btn btn-danger btn-sm"},[e("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):t._e(),t._v(" "),t.categories.total?t._e():e("module-info",{attrs:{module:"misc",title:"category_module_title",description:"category_module_description",icon:"list"}},[e("div",{attrs:{slot:"btn"},slot:"btn"},[t.showCreatePanel?t._e():e("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[e("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))])])]),t._v(" "),e("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.categories},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getCategories},nativeOn:{change:function(e){return t.getCategories.apply(null,arguments)}}})],1)])],1),t._v(" "),e("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);const r=n.exports}}]);