"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[3766],{62920:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});const n={components:{},data:function(){return{parentForm:new Form({first_guardian_name:"",first_guardian_relation:"",second_guardian_name:"",second_guardian_relation:"",first_guardian_contact_number_1:""}),guardian_relations:[]}},props:["id"],mounted:function(){helper.hasPermission("edit-student")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/student/pre-requisite?form_type=student_parent").then((function(a){t.guardian_relations=a.guardian_relations,t.id&&t.get(),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.parentForm.post("/api/student/parent").then((function(a){toastr.success(a.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/student/parent/"+this.id).then((function(a){t.parentForm.first_guardian_name=a.first_guardian_name,t.parentForm.first_guardian_relation=a.first_guardian_relation,t.parentForm.second_guardian_name=a.second_guardian_name,t.parentForm.second_guardian_relation=a.second_guardian_relation,t.parentForm.first_guardian_contact_number_1=a.first_guardian_contact_number_1,e.hide()})).catch((function(a){e.hide(),helper.showErrorMsg(a),t.$router.push("/student/parent")}))},update:function(){var t=this,e=this.$loading.show();this.parentForm.patch("/api/student/parent/"+this.id).then((function(a){toastr.success(a.message),e.hide(),t.$router.push("/student/parent")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)}}};var r=a(51900);const s={components:{parentForm:(0,r.Z)(n,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.parentForm.errors.clear(e.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.first_guardian_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.parentForm.first_guardian_name,expression:"parentForm.first_guardian_name"}],staticClass:"form-control",attrs:{type:"text",name:"first_guardian_name",placeholder:t.trans("finance.first_guardian_name")},domProps:{value:t.parentForm.first_guardian_name},on:{input:function(e){e.target.composing||t.$set(t.parentForm,"first_guardian_name",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.parentForm,"prop-name":"first_guardian_name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("general.relation")))]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.parentForm.first_guardian_relation,expression:"parentForm.first_guardian_relation"}],staticClass:"custom-select col-12",attrs:{name:"first_guardian_relation"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.parentForm,"first_guardian_relation",e.target.multiple?a:a[0])},function(e){return t.parentForm.errors.clear("first_guardian_relation")}]}},[e("option",{attrs:{value:""}},[t._v(t._s(t.trans("general.select_one")))]),t._v(" "),t._l(t.guardian_relations,(function(a){return e("option",{domProps:{value:a.id}},[t._v("\n                    "+t._s(a.name)+"\n                  ")])}))],2),t._v(" "),e("show-error",{attrs:{"form-name":t.parentForm,"prop-name":"first_guardian_relation"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.first_guardian_contact_number")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.parentForm.first_guardian_contact_number_1,expression:"parentForm.first_guardian_contact_number_1"}],staticClass:"form-control",attrs:{type:"text",name:"first_guardian_contact_number_1",placeholder:t.trans("finance.first_guardian_contact_number")},domProps:{value:t.parentForm.first_guardian_contact_number_1},on:{input:function(e){e.target.composing||t.$set(t.parentForm,"first_guardian_contact_number_1",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.parentForm,"prop-name":"first_guardian_contact_number_1"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.second_guardian_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.parentForm.second_guardian_name,expression:"parentForm.second_guardian_name"}],staticClass:"form-control",attrs:{type:"text",name:"second_guardian_name",placeholder:t.trans("finance.second_guardian_name")},domProps:{value:t.parentForm.second_guardian_name},on:{input:function(e){e.target.composing||t.$set(t.parentForm,"second_guardian_name",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.parentForm,"prop-name":"second_guardian_name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.second_guardian_relation")))]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.parentForm.second_guardian_relation,expression:"parentForm.second_guardian_relation"}],staticClass:"custom-select col-12",attrs:{name:"second_guardian_relation"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.parentForm,"second_guardian_relation",e.target.multiple?a:a[0])},function(e){return t.parentForm.errors.clear("second_guardian_relation")}]}},[e("option",{attrs:{value:""}},[t._v(t._s(t.trans("general.select_one")))]),t._v(" "),t._l(t.guardian_relations,(function(a){return e("option",{domProps:{value:a.id}},[t._v("\n                    "+t._s(a.name)+"\n                  ")])}))],2),t._v(" "),e("show-error",{attrs:{"form-name":t.parentForm,"prop-name":"second_guardian_relation"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/student/parent"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports},data:function(){return{student_parents:{total:0,data:[]},filter:{sort_by:"created_at",order:"desc",first_guardian_name:"",second_guardian_name:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"created_at",translation:i18n.general.created_at},{value:"first_guardian_name",translation:i18n.student.first_guardian_name},{value:"second_guardian_name",translation:i18n.student.second_guardian_name}],showCreatePanel:!1,showFilterPanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("edit-student")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getParents()},methods:{hasPermission:function(t){return helper.hasPermission(t)},getConfig:function(t){return helper.getConfig(t)},getParents:function(t){var e=this,a=this.$loading.show();"number"!=typeof t&&(t=1);var n=helper.getFilterURL(this.filter);axios.get("/api/student/parent?page="+t+n).then((function(t){e.student_parents=t.student_parents,a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},print:function(){var t=this.$loading.show();axios.post("/api/student/parent/print",{filter:this.filter}).then((function(e){var a=window.open("/print");t.hide(),a.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/student/parent/pdf",{filter:this.filter}).then((function(a){e.hide(),window.open("/download/report/"+a+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},confirmDelete:function(t){var e=this;return function(a){return e.deleteRegistration(t)}},deleteRegistration:function(t){var e=this,a=this.$loading.show();axios.delete("/api/student/parent/"+t.id).then((function(t){toastr.success(t.message),e.getParents(),a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getParents()},"filter.order":function(t){this.getParents()},"filter.page_length":function(t){this.getParents()}}},i=s;var o=(0,r.Z)(i,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("student.parent"))+"\n                    "),t.student_parents.total?e("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.student_parents.total,from:t.student_parents.from,to:t.student_parents.to})))]):e("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[t.student_parents.total&&!t.showCreatePanel&&t.hasPermission("edit-student")?e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[e("i",{staticClass:"fas fa-plus"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("student.add_new_parent")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[e("i",{staticClass:"fas fa-filter"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),e("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),e("div",{staticClass:"btn-group"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),e("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),e("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[e("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),e("help-button",{on:{clicked:function(e){t.help_topic="student-parent"}}})],1)])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("transition",{attrs:{name:"fade"}},[t.showFilterPanel?e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.first_guardian_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.first_guardian_name,expression:"filter.first_guardian_name"}],staticClass:"form-control",attrs:{name:"first_guardian_name"},domProps:{value:t.filter.first_guardian_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"first_guardian_name",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.second_guardian_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.second_guardian_name,expression:"filter.second_guardian_name"}],staticClass:"form-control",attrs:{name:"second_guardian_name"},domProps:{value:t.filter.second_guardian_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"second_guardian_name",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getParents}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),t.hasPermission("edit-student")?e("transition",{attrs:{name:"fade"}},[t.showCreatePanel?e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("student.add_new_parent")))]),t._v(" "),e("parent-form",{on:{completed:t.getParents,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]):t._e(),t._v(" "),t.hasPermission("edit-student")?e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[t.student_parents.total?e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.trans("student.father_name")))]),t._v(" "),e("th",[t._v(t._s(t.trans("student.mother_name")))]),t._v(" "),e("th",[t._v(t._s(t.trans("student.first_guardian_contact_number")))]),t._v(" "),e("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),e("tbody",t._l(t.student_parents.data,(function(a){return e("tr",[e("td",{domProps:{textContent:t._s(a.father_name)}}),t._v(" "),e("td",{domProps:{textContent:t._s(a.mother_name)}}),t._v(" "),e("td",{domProps:{textContent:t._s(a.first_guardian_contact_number_1)}}),t._v(" "),e("td",{staticClass:"table-option"},[e("div",{staticClass:"btn-group"},[t.hasPermission("edit-student")?e("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(a)},expression:"{ok: confirmDelete(student_parent)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("student.delete_parent"),expression:"trans('student.delete_parent')"}],key:a.id,staticClass:"btn btn-danger btn-sm"},[e("i",{staticClass:"fas fa-trash"})]):t._e()])])])})),0)])]):t._e(),t._v(" "),t.student_parents.total?t._e():e("module-info",{attrs:{module:"student",title:"student_parent_module_title",description:"student_parent_module_description",icon:"check-circle"}},[e("div",{attrs:{slot:"btn"},slot:"btn"},[t.showCreatePanel?t._e():e("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[e("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))])])]),t._v(" "),e("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.student_parents},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getParents}})],1)]):t._e()],1),t._v(" "),e("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);const l=o.exports}}]);