"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[6312],{50140:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});const c={components:{},data:function(){return{subjectTeacherForm:new Form({batch_id:"",subjects:[]},!1),filter:{batch_id:"",show_history:!0},selected_batch:null,batches:[],subjects:[],subject_teachers:[],edit_count:0,help_topic:""}},mounted:function(){this.getDetail(),helper.showDemoNotification(["academic"])},methods:{getConfig:function(e){return helper.getConfig(e)},hasPermission:function(e){return helper.hasPermission(e)},getDetail:function(){var e=this,t=this.$loading.show();axios.get("/api/subject/teacher").then((function(s){e.batches=s.batches,e.subject_teachers=s.subject_teachers,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getSubjects:function(){var e=this,t=this.$loading.show();axios.post("/api/subject/teacher/"+this.subjectTeacherForm.batch_id).then((function(s){e.subjects=s,e.subjectTeacherForm.subjects=[],e.subjects.forEach((function(t){e.subjectTeacherForm.subjects.push({subject_teachers:t.subject_teachers,subject_id:t.id,name:t.name+" ("+t.code+")",change:!1,date_effective:"",selected_employee:null,employee_id:"",description:"",show:!1})})),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},submit:function(){var e=this,t=this.$loading.show();this.subjectTeacherForm.post("/api/subject/teacher").then((function(s){toastr.success(s.message),e.edit_count=0,e.getSubjects(),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onBatchSelect:function(e){this.filter.batch_id=e.id,this.subjectTeacherForm.batch_id=e.id,this.getSubjects()},getDateEffectiveFieldName:function(e){return e+"_date_effective"},getDescriptionFieldName:function(e){return e+"_description"},getEmployeeFieldName:function(e){return e+"_employee_id"},onEmployeeSelect:function(e,t){var s=t.split("_")[0];this.subjectTeacherForm.subjects[s].employee_id=e.id},showEditPanel:function(e){e.change=!0,this.edit_count++},hideEditPanel:function(e){e.change=!1,this.edit_count--},getEmployeeName:function(e){return helper.getEmployeeNameWithCode(e)},getCurrentSubjectTeacherName:function(e){var t=this.getCurrentSubjectTeacher(e);return void 0!==t?this.getEmployeeName(t.employee):"-"},getCurrentSubjectTeacher:function(e){var t=e.find((function(e){return e.date_effective<=helper.today()}));return void 0===t&&(t=e[0]),t},confirmDelete:function(e){var t=this;return function(s){return t.deleteSubjectTeacher(e)}},deleteSubjectTeacher:function(e){var t=this,s=this.$loading.show();axios.delete("/api/subject/teacher/"+e.id).then((function(e){toastr.success(e.message),t.edit_count=0,t.getSubjects(),s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},showAction:function(e){this.subjectTeacherForm.subjects[e].show=!0},hideAction:function(e){this.subjectTeacherForm.subjects[e].show=!1},print:function(){var e=this.$loading.show();axios.post("/api/subject/teacher/print",{filter:this.filter}).then((function(t){var s=window.open("/print");e.hide(),s.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/subject/teacher/pdf",{filter:this.filter}).then((function(s){t.hide(),window.open("/download/report/"+s+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},computed:{authToken:function(){return helper.getAuthToken()}}},a=c;var i=(0,s(51900).Z)(a,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("academic.subject_teacher")))])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[t("div",{staticClass:"btn-group"},[t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),t("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:function(t){e.filter.show_history=!e.filter.show_history}}},[e.filter.show_history?t("span",[t("i",{staticClass:"fas fa-eye-slash"}),e._v(" "+e._s(e.trans("academic.hide_subject_teacher_history")))]):t("span",[t("i",{staticClass:"fas fa-eye"}),e._v(" "+e._s(e.trans("academic.show_subject_teacher_history")))])]),e._v(" "),t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[t("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[t("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),t("help-button",{on:{clicked:function(t){e.help_topic="academic.subject-teacher"}}})],1)])])]),e._v(" "),t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card p-4"},[t("div",{staticClass:"card-body"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)},keydown:function(t){return e.subjectTeacherForm.errors.clear(t.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.batch")))]),e._v(" "),t("v-select",{attrs:{label:"name","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:e.batches,placeholder:e.trans("academic.select_batch")},on:{select:e.onBatchSelect,close:function(t){return e.subjectTeacherForm.errors.clear("batch_id")},remove:function(t){e.subjectTeacherForm.batch_id=""}},model:{value:e.selected_batch,callback:function(t){e.selected_batch=t},expression:"selected_batch"}},[e.batches.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                            "+e._s(e.trans("general.no_option_found"))+"\n                                        ")])]),e._v(" "),t("show-error",{attrs:{"form-name":e.subjectTeacherForm,"prop-name":"batch_id"}})],1)])]),e._v(" "),e.subjectTeacherForm.batch_id&&e.subjectTeacherForm.subjects.length?t("div",{staticClass:"row m-b-20"},[t("div",{staticClass:"col-12 col-sm-4"},[t("h6",[e._v(e._s(e.trans("academic.subject")))])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-4"},[t("h6",[e._v(e._s(e.trans("academic.current_subject_teacher")))])]),e._v(" "),e.filter.show_history?t("div",{staticClass:"col-12 col-sm-4"},[t("h6",[e._v(e._s(e.trans("academic.subject_teacher_history")))])]):e._e()]):e._e(),e._v(" "),e.subjectTeacherForm.batch_id&&!e.subjectTeacherForm.subjects.length?t("p",{staticClass:"has-error"},[e._v("\n                            "+e._s(e.trans("academic.could_not_find_any_subject"))+"\n                        ")]):e._e(),e._v(" "),e._l(e.subjectTeacherForm.subjects,(function(s,c){return t("div",{staticClass:"row m-b-10",on:{mouseover:function(t){return e.showAction(c)},mouseout:function(t){return e.hideAction(c)}}},[t("div",{staticClass:"col-12 col-sm-4"},[e._v("\n                                "+e._s(s.name)+"\n                                "),t("span",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"subject.show"}],staticClass:"m-l-10"},[!s.change&&e.hasPermission("store-subject-teacher")?t("i",{staticClass:"fas fa-edit",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.showEditPanel(s)}}}):e._e(),e._v(" "),s.change?t("i",{staticClass:"fas fa-times-circle",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.hideEditPanel(s)}}}):e._e()])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-4"},[s.subject_teachers.length?t("span",[e._v("\n                                    "+e._s(e.getCurrentSubjectTeacherName(s.subject_teachers))+"\n                                    "),t("i",{directives:[{name:"show",rawName:"v-show",value:s.show&&e.hasPermission("store-subject-teacher"),expression:"subject.show && hasPermission('store-subject-teacher')"},{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(s.subject_teachers[0])},expression:"{ok: confirmDelete(subject.subject_teachers[0])}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("academic.delete_subject_teacher"),expression:"trans('academic.delete_subject_teacher')"}],key:s.subject_teachers[0].id,staticClass:"fas fa-times-circle m-l-10",staticStyle:{cursor:"pointer",color:"red"}})]):t("span",[e._v("-")])]),e._v(" "),e.filter.show_history?t("div",{staticClass:"col-12 col-sm-4"},[s.subject_teachers.length?t("ul",{staticStyle:{"list-style":"none",padding:"0",margin:"0"}},e._l(s.subject_teachers,(function(s,c){return t("li",[e._v("\n                                        ("+e._s(c+1)+") \n                                        "+e._s(e.getEmployeeName(s.employee)+" "+e.trans("general.from"))+" "+e._s(e._f("moment")(s.date_effective))+" \n                                    ")])})),0):e._e(),e._v(" "),s.subject_teachers.length?e._e():t("span",[e._v("-")])]):e._e(),e._v(" "),s.change?t("div",{staticClass:"col-12 my-4"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-4"},[t("v-select",{attrs:{label:"name",name:e.getEmployeeFieldName(c),id:e.getEmployeeFieldName(c),options:e.subject_teachers,placeholder:e.trans("academic.select_subject_teacher")},on:{select:e.onEmployeeSelect,close:function(t){e.subjectTeacherForm.errors.clear(e.getEmployeeFieldName(c))},remove:function(e){s.employee_id=""}},model:{value:s.selected_employee,callback:function(t){e.$set(s,"selected_employee",t)},expression:"subject.selected_employee"}},[e.subject_teachers.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                                "+e._s(e.trans("general.no_option_found"))+"\n                                            ")])]),e._v(" "),t("show-error",{attrs:{"form-name":e.subjectTeacherForm,"prop-name":e.getEmployeeFieldName(c)}})],1),e._v(" "),t("div",{staticClass:"col-12 col-sm-4"},[t("datepicker",{attrs:{bootstrapStyling:!0,name:e.getDateEffectiveFieldName(c),placeholder:e.trans("academic.date_effective")},on:{selected:function(t){e.subjectTeacherForm.errors.clear(e.getDateEffectiveFieldName(c))}},model:{value:s.date_effective,callback:function(t){e.$set(s,"date_effective",t)},expression:"subject.date_effective"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.subjectTeacherForm,"prop-name":e.getDateEffectiveFieldName(c)}})],1),e._v(" "),t("div",{staticClass:"col-12 col-sm-4"},[t("autosize-textarea",{attrs:{rows:"1",name:e.getDescriptionFieldName(c),placeholder:e.trans("academic.subject_teacher_description")},model:{value:s.description,callback:function(t){e.$set(s,"description",t)},expression:"subject.description"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.subjectTeacherForm,"prop-name":e.getDescriptionFieldName(c)}})],1)])]):e._e()])})),e._v(" "),t("div",{staticClass:"text-right"},[e.edit_count?t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))]):e._e()])],2)])])]),e._v(" "),t("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null);const o=i.exports}}]);