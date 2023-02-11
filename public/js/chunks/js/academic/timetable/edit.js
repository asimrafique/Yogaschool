"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[8781],{80784:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});const s={components:{timetableForm:a(46539).Z},data:function(){return{uuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("edit-timetable")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const i=(0,a(51900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("academic.edit_timetable")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/academic/timetable")}}},[e("i",{staticClass:"fas fa-list"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("academic.timetable")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("timetable-form",{attrs:{uuid:t.uuid}})],1)])])])}),[],!1,null,null,null).exports},46539:(t,e,a)=>{a.d(e,{Z:()=>i});const s={props:["uuid"],components:{},data:function(){return{timetableForm:new Form({batch_id:"",date_effective:"",days:[]}),class_timings:[],batches:[],days:[],selected_batch:null}},mounted:function(){this.getPreRequisite()},methods:{proceed:function(){this.uuid?this.update():this.store()},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/timetable/pre-requisite").then((function(a){t.class_timings=a.class_timings,t.batches=a.batches,t.days=a.days,t.populateDays(),t.uuid&&t.getTimetable(),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getTimetable:function(){var t=this,e=this.$loading.show();axios.get("/api/timetable/"+this.uuid).then((function(a){t.timetableForm.batch_id=a.timetable.batch_id,t.timetableForm.date_effective=a.timetable.date_effective,t.selected_batch={id:batch_id,name:a.timetable.batch.course.name+" "+a.timetable.batch.name};var s=0;a.timetable.timetable_allocations.forEach((function(t){t.timetable_allocation_details.length&&s++})),s&&(toastr.error(i18n.academic.timetable_cannot_be_changed_after_allocation),t.$router.push("/academic/timetable")),t.timetableForm.days.forEach((function(t){var e=a.timetable.timetable_allocations.find((function(e){return e.day==t.day}));e&&(t.is_weekoff=!e.class_timing_id,t.class_timing_id=e.class_timing_id,t.selected_class_timing=e.class_timing_id?{id:e.class_timing_id,name:e.class_timing.name}:null)})),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},populateDays:function(){var t=this;this.days.forEach((function(e){t.timetableForm.days.push({day:e.id,day_name:e.name,class_timing_id:"",selected_class_timing:null,is_weekoff:!1})}))},getClassTimingName:function(t){return t+"_class_timing"},onClassTimingSelect:function(t,e){var a=e.split("_")[0];this.timetableForm.days[a].class_timing_id=t.id},onBatchSelect:function(t){this.timetableForm.batch_id=t.id},store:function(){var t=this,e=this.$loading.show();this.timetableForm.post("/api/timetable").then((function(a){t.timetableForm.days=[],t.selected_batch=null,t.populateDays(),toastr.success(a.message),t.$router.push("/academic/timetable"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},update:function(){var t=this,e=this.$loading.show();this.timetableForm.patch("/api/timetable/"+this.uuid).then((function(a){toastr.success(a.message),e.hide(),t.$router.push("/academic/timetable")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}};const i=(0,a(51900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.timetableForm.errors.clear(e.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),e("v-select",{attrs:{label:"name","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch")},on:{select:t.onBatchSelect,close:function(e){return t.timetableForm.errors.clear("batch_id")},remove:function(e){t.timetableForm.batch_id=""}},model:{value:t.selected_batch,callback:function(e){t.selected_batch=e},expression:"selected_batch"}},[t.batches.length?t._e():e("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n\t                            "+t._s(t.trans("general.no_option_found"))+"\n\t                        ")])]),t._v(" "),e("show-error",{attrs:{"form-name":t.timetableForm,"prop-name":"batch_id"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.date_effective")))]),t._v(" "),e("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("academic.date_effective")},on:{selected:function(e){return t.timetableForm.errors.clear("date_effective")}},model:{value:t.timetableForm.date_effective,callback:function(e){t.$set(t.timetableForm,"date_effective",e)},expression:"timetableForm.date_effective"}}),t._v(" "),e("show-error",{attrs:{"form-name":t.timetableForm,"prop-name":"date_effective"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.timetable_description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.timetableForm.description,expression:"timetableForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("academic.timetable_description")},domProps:{value:t.timetableForm.description},on:{input:function(e){e.target.composing||t.$set(t.timetableForm,"description",e.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.timetableForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"row"},[t._l(t.timetableForm.days,(function(a,s){return[e("div",{staticClass:"col-12 col-sm-2"},[e("div",{staticClass:"form-group"},[e("div",[e("strong",[t._v(t._s(a.day_name))])]),t._v(" "),e("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:a.is_weekoff,callback:function(e){t.$set(a,"is_weekoff",e)},expression:"day.is_weekoff"}}),t._v(" "+t._s(t.trans("academic.is_weekoff"))+"\n\t                    ")],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[a.is_weekoff?t._e():e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.class_timing")))]),t._v(" "),e("v-select",{attrs:{label:"name",name:t.getClassTimingName(s),id:t.getClassTimingName(s),options:t.class_timings,placeholder:t.trans("academic.select_class_timing")},on:{select:t.onClassTimingSelect,close:function(e){t.timetableForm.errors.clear(t.getClassTimingName(s))},remove:function(t){a.class_timing_id=""}},model:{value:a.selected_class_timing,callback:function(e){t.$set(a,"selected_class_timing",e)},expression:"day.selected_class_timing"}},[t.class_timings.length?t._e():e("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n\t                                "+t._s(t.trans("general.no_option_found"))+"\n\t                            ")])]),t._v(" "),e("show-error",{attrs:{"form-name":t.timetableForm,"prop-name":t.getClassTimingName(s)}})],1)])]}))],2),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/academic/timetable")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t._v(t._s(t.trans("general.save")))])])])])}),[],!1,null,null,null).exports}}]);