"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[6165],{15872:(s,t,e)=>{e.r(t),e.d(t,{default:()=>a});const i={components:{classTimingForm:e(34490).Z},data:function(){return{uuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("edit-class-timing")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const a=(0,e(51900).Z)(i,(function(){var s=this,t=s._self._c;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[s._v(s._s(s.trans("academic.edit_class_timing")))])]),s._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return s.$router.push("/academic/class/timing")}}},[t("i",{staticClass:"fas fa-list"}),s._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[s._v(s._s(s.trans("academic.class_timing")))])])])])])]),s._v(" "),t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body"},[t("class-timing-form",{attrs:{uuid:s.uuid}})],1)])])])}),[],!1,null,null,null).exports},34490:(s,t,e)=>{e.d(t,{Z:()=>a});const i={components:{},props:["uuid"],data:function(){return{classTimingForm:new Form({name:"",description:"",sessions:[]}),hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],mins:[0,5,10,15,20,25,30,35,40,45,50,55],is_disabled_editing:!1}},mounted:function(){this.uuid||this.addRow(),this.uuid&&this.get()},methods:{proceed:function(){this.uuid?this.update():this.store()},get:function(){var s=this,t=this.$loading.show();axios.get("/api/class/timing/"+this.uuid).then((function(e){s.classTimingForm.name=e.name,s.classTimingForm.description=e.description,e.class_timing_sessions.forEach((function(t){s.classTimingForm.sessions.push({uuid:t.uuid,name:t.name,start_hour:Number(t.start.split(":")[0]),start_min:Number(t.start.split(":")[1]),end_hour:Number(t.end.split(":")[0]),end_min:Number(t.end.split(":")[1]),is_a_break:t.is_a_break})})),s.is_disabled_editing=!!e.timetable_allocations.length,t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s)}))},addRow:function(){this.classTimingForm.sessions.push({uuid:this.$uuid.v4(),name:"",start_hour:"",start_min:"",end_hour:"",end_min:"",is_a_break:!1})},timePadding:function(s){return helper.formatWithPadding(s,2)},getSessionName:function(s){return s+"_name"},getSessionStartHourName:function(s){return s+"_start_hour"},getSessionStartMinName:function(s){return s+"_start_min"},getSessionEndHourName:function(s){return s+"_end_hour"},getSessionEndMinName:function(s){return s+"_end_min"},setNextStartHour:function(s,t){(this.classTimingForm.errors.clear(this.getSessionEndHourName(t)),void 0!==this.classTimingForm.sessions[t+1])&&(this.classTimingForm.sessions[t+1].start_hour=s.end_hour)},setNextStartMin:function(s,t){(this.classTimingForm.errors.clear(this.getSessionEndMinName(t)),void 0!==this.classTimingForm.sessions[t+1])&&(this.classTimingForm.sessions[t+1].start_min=s.end_min)},confirmDelete:function(s){var t=this;return function(e){return t.deleteSession(s)}},deleteSession:function(s){this.classTimingForm.sessions.splice(s,1)},store:function(){var s=this,t=this.$loading.show();this.classTimingForm.post("/api/class/timing").then((function(e){toastr.success(e.message),s.classTimingForm.sessions=[],s.addRow(),s.$router.push("/academic/class/timing"),t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s)}))},update:function(){var s=this,t=this.$loading.show();this.classTimingForm.patch("/api/class/timing/"+this.uuid).then((function(e){toastr.success(e.message),t.hide(),s.$router.push("/academic/class/timing")})).catch((function(s){t.hide(),helper.showErrorMsg(s)}))}}};const a=(0,e(51900).Z)(i,(function(){var s=this,t=s._self._c;return t("div",{staticClass:"p-t-20"},[t("form",{on:{submit:function(t){return t.preventDefault(),s.proceed.apply(null,arguments)},keydown:function(t){return s.classTimingForm.errors.clear(t.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("academic.class_timing_name")))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.classTimingForm.name,expression:"classTimingForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:s.trans("academic.class_timing_name")},domProps:{value:s.classTimingForm.name},on:{input:function(t){t.target.composing||s.$set(s.classTimingForm,"name",t.target.value)}}}),s._v(" "),t("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":"name"}})],1)]),s._v(" "),t("div",{staticClass:"col-12 col-sm-9"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("academic.class_timing_description")))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.classTimingForm.description,expression:"classTimingForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:s.trans("academic.class_timing_description")},domProps:{value:s.classTimingForm.description},on:{input:function(t){t.target.composing||s.$set(s.classTimingForm,"description",t.target.value)}}}),s._v(" "),t("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":"description"}})],1)])]),s._v(" "),s._l(s.classTimingForm.sessions,(function(e,i){return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v("\n                            "+s._s(s.trans("academic.class_timing_session_name"))+"\n                            "),t("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:s.confirmDelete(i)},expression:"{ok: confirmDelete(index)}"},{name:"tooltip",rawName:"v-tooltip",value:s.trans("academic.delete_class_timing_session"),expression:"trans('academic.delete_class_timing_session')"}],key:"".concat(i,"_delete_session"),staticClass:"btn btn-xs btn-danger",attrs:{type:"button"}},[t("i",{staticClass:"fas fa-times"})])]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"session.name"}],staticClass:"form-control",attrs:{type:"text",name:s.getSessionName(i),placeholder:s.trans("academic.class_timing_session_name")},domProps:{value:e.name},on:{input:function(t){t.target.composing||s.$set(e,"name",t.target.value)}}}),s._v(" "),t("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":s.getSessionName}})],1)]),s._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("academic.start_time")))]),s._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-6"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.start_hour,expression:"session.start_hour"}],staticClass:"custom-select col-12",attrs:{name:s.getSessionStartHourName(i)},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(e,"start_hour",t.target.multiple?i:i[0])},function(t){s.classTimingForm.errors.clear(s.getSessionStartHourName(i))}]}},[t("option",{attrs:{value:"null",selected:""}},[s._v(s._s(s.trans("academic.select_hour")))]),s._v(" "),s._l(s.hours,(function(e){return t("option",{domProps:{value:e}},[s._v("\n                                    "+s._s(s.timePadding(e))+"\n                                  ")])}))],2),s._v(" "),t("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":s.getSessionStartHourName(i)}})],1),s._v(" "),t("div",{staticClass:"col-6"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.start_min,expression:"session.start_min"}],staticClass:"custom-select col-12",attrs:{name:s.getSessionStartHourName(i)},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(e,"start_min",t.target.multiple?i:i[0])},function(t){s.classTimingForm.errors.clear(s.getSessionStartHourName(i))}]}},[t("option",{attrs:{value:"null",selected:""}},[s._v(s._s(s.trans("academic.select_min")))]),s._v(" "),s._l(s.mins,(function(e){return t("option",{domProps:{value:e}},[s._v("\n                                    "+s._s(s.timePadding(e))+"\n                                  ")])}))],2),s._v(" "),t("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":s.getSessionStartMinName(i)}})],1)])])]),s._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("academic.end_time")))]),s._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-6"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.end_hour,expression:"session.end_hour"}],staticClass:"custom-select col-12",attrs:{name:s.getSessionEndHourName(i)},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(e,"end_hour",t.target.multiple?i:i[0])},function(t){return s.setNextStartHour(e,i)}]}},[t("option",{attrs:{value:"null",selected:""}},[s._v(s._s(s.trans("academic.select_hour")))]),s._v(" "),s._l(s.hours,(function(e){return t("option",{domProps:{value:e}},[s._v("\n                                    "+s._s(s.timePadding(e))+"\n                                  ")])}))],2),s._v(" "),t("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":s.getSessionEndHourName(i)}})],1),s._v(" "),t("div",{staticClass:"col-6"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.end_min,expression:"session.end_min"}],staticClass:"custom-select col-12",attrs:{name:s.getSessionEndMinName(i)},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(e,"end_min",t.target.multiple?i:i[0])},function(t){return s.setNextStartMin(e,i)}]}},[t("option",{attrs:{value:"null",selected:""}},[s._v(s._s(s.trans("academic.select_min")))]),s._v(" "),s._l(s.mins,(function(e){return t("option",{domProps:{value:e}},[s._v("\n                                    "+s._s(s.timePadding(e))+"\n                                  ")])}))],2),s._v(" "),t("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":s.getSessionEndMinName(i)}})],1)])])]),s._v(" "),t("div",{staticClass:"col-12 col-sm-2"},[t("div",{staticClass:"form-group"},[t("div",[s._v(s._s(s.trans("academic.is_a_break")))]),s._v(" "),t("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.is_a_break,callback:function(t){s.$set(e,"is_a_break",t)},expression:"session.is_a_break"}})],1)]),s._v(" "),s._m(0,!0)])})),s._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light",attrs:{type:"button"},on:{click:s.addRow}},[s._v(s._s(s.trans("academic.add_class_timing_session")))])])])]),s._v(" "),t("div",{staticClass:"card-footer text-right"},[t("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return s.$router.push("/academic/class/timing")}}},[s._v(s._s(s.trans("general.cancel")))]),s._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit",disabled:s.is_disabled_editing}},[s.is_disabled_editing?t("i",{staticClass:"fas fa-lock"}):s._e(),s._v(" "+s._s(s.trans("general.save")))])])],2)])}),[function(){var s=this._self._c;return s("div",{staticClass:"col-12 col-sm-1"},[s("div",{staticClass:"form-group"})])}],!1,null,null,null).exports}}]);