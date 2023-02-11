"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[7022],{75217:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});const a={components:{},data:function(){return{recordForm:new Form({batch_id:"",exam_id:"",subject_id:"",marks:[]},!1),all_batches:[],batches:[],selected_batch:null,exams:[],selected_exam:null,subjects:[],selected_subject:null,batch_with_subjects:[],student_records:[],exam_assessment:{},exam_record:{},disable_filter:!1,disable_input:!0,show_comment:!1}},mounted:function(){helper.hasPermission("store-exam-mark")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{hasPermission:function(e){return helper.hasPermission(e)},getMarkName:function(e,t){return e+"_"+t+"_mark"},getCommentName:function(e){return e+"_comment"},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/exam/record/pre-requisite").then((function(s){e.all_batches=s.batches,e.exams=s.exams,e.batch_with_subjects=s.batch_with_subjects,e.id&&e.get(),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getSubjects:function(){var e=this,t=this.$loading.show();this.subjects=[],this.selected_subject=null;var s=this.batch_with_subjects.find((function(t){return t.id==e.recordForm.batch_id}));void 0!==s?(s.subjects.forEach((function(t){e.subjects.push({id:t.id,name:t.name+" ("+t.code+")"})})),t.hide()):t.hide()},resetFilter:function(){this.recordForm.marks=[],this.student_records=[],this.exam_assessment={},this.disable_filter=!1},getRecordMaxMark:function(e){if(this.exam_record){var t=(this.exam_record.options.hasOwnProperty("assessment_details")?this.exam_record.options.assessment_details:[]).find((function(t){return t.id==e.id}));return void 0!==t?t.max_mark:e.max_mark}return e.max_mark},getRecordPassPercentage:function(e){if(this.exam_record){var t=(this.exam_record.options.hasOwnProperty("assessment_details")?this.exam_record.options.assessment_details:[]).find((function(t){return t.id==e.id}));return void 0!==t?t.pass_percentage:e.pass_percentage}return e.pass_percentage},getStudents:function(){var e=this,t=this.$loading.show();this.disable_filter=!0,axios.post("/api/exam/record/student",{exam_id:this.recordForm.exam_id,batch_id:this.recordForm.batch_id,subject_id:this.recordForm.subject_id}).then((function(s){e.student_records=s.student_records,e.exam_assessment=s.exam_assessment,e.disable_input=s.exam_record.disable_input,e.exam_record=s.exam_record,e.recordForm.marks=[],e.student_records.forEach((function(t){var a=0,r="";if(s.exam_record&&s.exam_record.marks){var o=s.exam_record.marks.find((function(e){return e.id==t.id}));void 0!==o&&(o.hasOwnProperty("is_absent")&&(a=o.is_absent?1:0),o.hasOwnProperty("comment")&&(r=o.comment))}e.exam_record.options.hasOwnProperty("assessment_details")&&e.exam_assessment.details.forEach((function(t){var s=e.exam_record.options.assessment_details.find((function(e){return e.id==t.id}));void 0!==s?(t.max_mark=s.max_mark,t.pass_percentage=s.pass_percentage,t.is_applicable=s.is_applicable):t.is_applicable=!0}));var i=[];e.exam_assessment.details.forEach((function(e){var a=0,r="",o=0;if(s.exam_record&&s.exam_record.marks){var n=s.exam_record.marks.find((function(e){return e.id==t.id}));if(void 0!==n&&n.hasOwnProperty("assessment_details")){var c=n.assessment_details.find((function(t){return t.id==e.id}));void 0!==c&&(a=c.ob,o=c.is_absent?1:0,r=c.comment)}}e.is_applicable=!e.hasOwnProperty("is_applicable")||e.is_applicable,e.is_applicable&&i.push({id:e.id,ob:a,is_absent:o,comment:r})})),e.recordForm.marks.push({id:t.id,name:helper.getStudentName(t.student),roll_number:helper.getRollNumber(t),is_absent:a,ob_marks:i,comment:r})})),e.recordForm.marks.sort((function(e,t){var s=e.name.toUpperCase(),a=t.name.toUpperCase();return s<a?-1:s>a?1:0})),t.hide()})).catch((function(s){e.disable_filter=!1,t.hide(),helper.showErrorMsg(s)}))},submit:function(){var e=this.$loading.show();this.recordForm.post("/api/exam/record").then((function(t){e.hide(),toastr.success(t.message)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},confirmDelete:function(){var e=this;return function(t){return e.deleteRecord()}},deleteRecord:function(){var e=this,t=this.$loading.show();axios.post("/api/exam/record/delete",{batch_id:this.recordForm.batch_id,exam_id:this.recordForm.exam_id,subject_id:this.recordForm.subject_id}).then((function(s){toastr.success(s.message),e.getStudents(),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onBatchSelect:function(e){this.recordForm.batch_id=e.id},onExamSelect:function(e){this.recordForm.batch_id="",this.selected_batch=null,e.course_group_id?this.batches=this.all_batches.filter((function(t){return t.course_group===e.course_group_name})):this.batches=this.all_batches,this.recordForm.exam_id=e.id},onSubjectSelect:function(e){this.recordForm.subject_id=e.id}},watch:{"recordForm.batch_id":function(e){this.id||this.getSubjects()}}};const r=(0,s(51900).Z)(a,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("exam.record")))])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/exam/record/observation")}}},[t("i",{staticClass:"fas fa-list"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("exam.record_observation")))])]),e._v(" "),t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/exam/schedule")}}},[t("i",{staticClass:"fas fa-list"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("exam.schedule")))])])])])])]),e._v(" "),t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body p-t-20"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)},keydown:function(t){return e.recordForm.errors.clear(t.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("exam.exam"))+" ")]),e._v(" "),t("v-select",{attrs:{label:"name",disabled:e.disable_filter,name:"exam_id",id:"exam_id",options:e.exams,placeholder:e.trans("exam.select_exam")},on:{select:e.onExamSelect,close:function(t){return e.recordForm.errors.clear("exam_id")},remove:function(t){e.recordForm.exam_id=""}},model:{value:e.selected_exam,callback:function(t){e.selected_exam=t},expression:"selected_exam"}},[e.exams.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n\t\t\t                                "+e._s(e.trans("general.no_option_found"))+"\n\t\t\t                            ")])]),e._v(" "),t("show-error",{attrs:{"form-name":e.recordForm,"prop-name":"exam_id"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.batch"))+" ")]),e._v(" "),t("v-select",{attrs:{label:"name",disabled:e.disable_filter,"group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:e.batches,placeholder:e.trans("academic.select_batch")},on:{select:e.onBatchSelect,close:function(t){return e.recordForm.errors.clear("batch_id")},remove:function(t){e.recordForm.batch_id=""}},model:{value:e.selected_batch,callback:function(t){e.selected_batch=t},expression:"selected_batch"}},[e.batches.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n\t\t\t                                "+e._s(e.trans("general.no_option_found"))+"\n\t\t\t                            ")])]),e._v(" "),t("show-error",{attrs:{"form-name":e.recordForm,"prop-name":"batch_id"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.subject"))+" ")]),e._v(" "),t("v-select",{attrs:{label:"name",disabled:e.disable_filter,name:"subject_id",id:"subject_id",options:e.subjects,placeholder:e.trans("academic.select_subject")},on:{select:e.onSubjectSelect,close:function(t){return e.recordForm.errors.clear("subject_id")},remove:function(t){e.recordForm.subject_id=""}},model:{value:e.selected_subject,callback:function(t){e.selected_subject=t},expression:"selected_subject"}},[e.subjects.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n\t\t\t                                "+e._s(e.trans("general.no_option_found"))+"\n\t\t\t                            ")])]),e._v(" "),t("show-error",{attrs:{"form-name":e.recordForm,"prop-name":"subject_id"}})],1)])]),e._v(" "),t("div",{staticClass:"card-footer text-right"},[e.disable_filter?t("button",{staticClass:"btn btn-danger m-r-10",attrs:{type:"button"},on:{click:e.resetFilter}},[e._v(e._s(e.trans("general.reset")))]):t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getStudents}},[e._v(e._s(e.trans("general.proceed")))])]),e._v(" "),e.recordForm.marks.length?t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[e.show_comment?t("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(t){e.show_comment=!e.show_comment}}},[e._v(e._s(e.trans("exam.hide_comment")))]):t("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(t){e.show_comment=!e.show_comment}}},[e._v(e._s(e.trans("exam.show_comment")))])]),e._v(" "),e._l(e.exam_assessment.details,(function(s){return s.is_applicable?t("div",{staticClass:"col-12 col-sm-2"},[t("div",{staticClass:"form-group"},[t("label",[e._v(e._s(s.name))]),e._v(" "),t("br"),e._v(" "),t("span",{staticClass:"help-block font-80pc"},[e._v(e._s(e.trans("exam.assessment_detail",{max_mark:e.getRecordMaxMark(s),pass_percentage:e.getRecordPassPercentage(s)})))])])]):e._e()}))],2):e._e(),e._v(" "),e._l(e.recordForm.marks,(function(s,a){return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[e._v("\n                                    "+e._s(s.name)+" "+e._s(s.roll_number)+"\n                                    "),t("div",{staticClass:"form-group"},[t("label",{staticClass:"custom-control custom-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.is_absent,expression:"mark.is_absent"}],staticClass:"custom-control-input",attrs:{disabled:e.disable_input,type:"checkbox",value:"1"},domProps:{checked:Array.isArray(s.is_absent)?e._i(s.is_absent,"1")>-1:s.is_absent},on:{change:function(t){var a=s.is_absent,r=t.target,o=!!r.checked;if(Array.isArray(a)){var i=e._i(a,"1");r.checked?i<0&&e.$set(s,"is_absent",a.concat(["1"])):i>-1&&e.$set(s,"is_absent",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(s,"is_absent",o)}}}),e._v(" "),t("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("exam.is_absent")))])])])])]),e._v(" "),s.is_absent?[e.show_comment?t("div",{staticClass:"col-12 col-sm-9"},[t("div",{staticClass:"form-group"},[t("autosize-textarea",{attrs:{disabled:e.disable_input,rows:"1",name:e.getCommentName(a),placeholder:e.trans("exam.mark_comment")},model:{value:s.comment,callback:function(t){e.$set(s,"comment",t)},expression:"mark.comment"}})],1)]):e._e()]:[e._l(s.ob_marks,(function(s,r){return t("div",{staticClass:"col-12 col-sm-2"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.ob,expression:"ob_mark.ob"}],staticClass:"form-control",attrs:{disabled:e.disable_input,type:"text",name:e.getMarkName(a,r),placeholder:e.trans("exam.obtained_mark")},domProps:{value:s.ob},on:{input:function(t){t.target.composing||e.$set(s,"ob",t.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.recordForm,"prop-name":e.getMarkName(a,r)}})],1)])})),e._v(" "),e.show_comment?t("div",{staticClass:"col-12"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"}),e._v(" "),t("div",{staticClass:"col-12 col-sm-9"},[t("div",{staticClass:"form-group"},[t("autosize-textarea",{attrs:{disabled:e.disable_input,rows:"1",name:e.getCommentName(a),placeholder:e.trans("exam.mark_comment")},model:{value:s.comment,callback:function(t){e.$set(s,"comment",t)},expression:"mark.comment"}})],1)])])]):e._e()]],2)})),e._v(" "),e.recordForm.marks.length&&!e.disable_input?t("div",{staticClass:"card-footer text-right"},[t("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete()},expression:"{ok: confirmDelete()}"}],key:"delete-record",staticClass:"btn btn-danger",attrs:{type:"button"}},[e._v(e._s(e.trans("general.delete")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])]):e._e()],2)])])])])}),[],!1,null,null,null).exports}}]);