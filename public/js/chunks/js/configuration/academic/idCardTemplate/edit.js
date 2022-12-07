(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[3575],{53219:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});const r={components:{idCardTemplateForm:a(40672).Z},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const i=(0,a(51900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("academic.edit_id_card_template")))])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/configuration/academic/id-card/template")}}},[a("i",{staticClass:"fas fa-list"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("academic.id_card_template")))])])])])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body p-t-20"},[a("id-card-template-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null).exports},40672:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});const r={data:function(){return{idCardTemplateForm:new Form({name:"",type:"",per_page_limit:"",height:"",width:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.idCardTemplateForm.post("/api/academic/id-card/template").then((function(a){toastr.success(a.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/academic/id-card/template/"+this.id).then((function(a){t.idCardTemplateForm.name=a.name,t.idCardTemplateForm.type=a.type,t.idCardTemplateForm.height=a.height,t.idCardTemplateForm.width=a.width,t.idCardTemplateForm.per_page_limit=a.options.per_page_limit,e.hide()})).catch((function(a){e.hide(),helper.showErrorMsg(a),t.$router.push("/configuration/academic/id-card/template")}))},update:function(){var t=this,e=this.$loading.show();this.idCardTemplateForm.patch("/api/academic/id-card/template/"+this.id).then((function(a){toastr.success(a.message),e.hide(),t.$router.push("/configuration/academic/id-card/template")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}};const i=(0,a(51900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.idCardTemplateForm.errors.clear(e.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.id_card_template_name")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.idCardTemplateForm.name,expression:"idCardTemplateForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("academic.id_card_template_name")},domProps:{value:t.idCardTemplateForm.name},on:{input:function(e){e.target.composing||t.$set(t.idCardTemplateForm,"name",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.idCardTemplateForm,"prop-name":"name"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"radio radio-success"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.idCardTemplateForm.type,expression:"idCardTemplateForm.type"}],attrs:{type:"radio",value:"student",id:"student",name:"type"},domProps:{checked:t.idCardTemplateForm.type,checked:t._q(t.idCardTemplateForm.type,"student")},on:{click:function(e){return t.idCardTemplateForm.errors.clear("type")},change:function(e){return t.$set(t.idCardTemplateForm,"type","student")}}}),t._v(" "),a("label",{attrs:{for:"student"}},[t._v(t._s(t.trans("student.student")))])]),t._v(" "),a("div",{staticClass:"radio radio-success"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.idCardTemplateForm.type,expression:"idCardTemplateForm.type"}],attrs:{type:"radio",value:"employee",id:"employee",name:"type"},domProps:{checked:!t.idCardTemplateForm.type,checked:t._q(t.idCardTemplateForm.type,"employee")},on:{click:function(e){return t.idCardTemplateForm.errors.clear("type")},change:function(e){return t.$set(t.idCardTemplateForm,"type","employee")}}}),t._v(" "),a("label",{attrs:{for:"employee"}},[t._v(t._s(t.trans("employee.employee")))])]),t._v(" "),a("show-error",{attrs:{"form-name":t.idCardTemplateForm,"prop-name":"type"}})],1)])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.id_card_template_width")))]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.idCardTemplateForm.width,expression:"idCardTemplateForm.width"}],staticClass:"form-control",attrs:{type:"text",name:"width",placeholder:t.trans("academic.id_card_template_width")},domProps:{value:t.idCardTemplateForm.width},on:{input:function(e){e.target.composing||t.$set(t.idCardTemplateForm,"width",e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),a("show-error",{attrs:{"form-name":t.idCardTemplateForm,"prop-name":"width"}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.id_card_template_height")))]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.idCardTemplateForm.height,expression:"idCardTemplateForm.height"}],staticClass:"form-control",attrs:{type:"text",name:"height",placeholder:t.trans("academic.id_card_template_height")},domProps:{value:t.idCardTemplateForm.height},on:{input:function(e){e.target.composing||t.$set(t.idCardTemplateForm,"height",e.target.value)}}}),t._v(" "),t._m(1)]),t._v(" "),a("show-error",{attrs:{"form-name":t.idCardTemplateForm,"prop-name":"height"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.id_card_template_per_page_limit")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.idCardTemplateForm.per_page_limit,expression:"idCardTemplateForm.per_page_limit"}],staticClass:"form-control",attrs:{type:"text",name:"per_page_limit",placeholder:t.trans("academic.id_card_template_per_page_limit")},domProps:{value:t.idCardTemplateForm.per_page_limit},on:{input:function(e){e.target.composing||t.$set(t.idCardTemplateForm,"per_page_limit",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.idCardTemplateForm,"prop-name":"per_page_limit"}})],1)])])])]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/academic/id-card/template"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():a("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?a("span",[t._v(t._s(t.trans("general.update")))]):a("span",[t._v(t._s(t.trans("general.save")))])])],1)])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[t._v("mm")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[t._v("mm")])])}],!1,null,null,null).exports}}]);
//# sourceMappingURL=edit.js.map?id=f26c6751f2f708003483