(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[5822],{57949:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const s={props:["onlineExam"],methods:{confirmStatusChange:function(t){var e=this;return function(n){return e.changeExamStatus(t)}},changeExamStatus:function(t){var e=this,n=this.$loading.show();axios.post("/api/online-exam/"+this.onlineExam.uuid+"/status?status="+t).then((function(t){e.$emit("updateExam"),toastr.success(t.message),n.hide()})).catch((function(t){n.hide(),helper.showErrorMsg(t)}))}},filters:{moment:function(t){return helper.formatDate(t)},momentTime:function(t){return helper.formatTime(t)},momentDateTime:function(t){return helper.formatDateTime(t)}}};const a=(0,n(51900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card border-right"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title m-3"},[t._v(t._s(t.onlineExam.name)+"\n                    "),n("div",{staticClass:"action-buttons pull-right"},[t.onlineExam.is_published?t._e():n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmStatusChange("publish")},expression:"{ok: confirmStatusChange('publish')}"}],key:"publishExam",staticClass:"btn btn-success btn-sm",on:{click:function(t){}}},[n("i",{staticClass:"fas fa-check"}),t._v(" "+t._s(t.trans("exam.publish_online_exam")))]),t._v(" "),t.onlineExam.is_published?n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmStatusChange("draft")},expression:"{ok: confirmStatusChange('draft')}"}],key:"draftExam",staticClass:"btn btn-danger btn-sm"},[n("i",{staticClass:"fas fa-times"}),t._v(" "+t._s(t.trans("exam.draft_online_exam")))]):t._e()])]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-sm custom-show-table"},[n("tbody",[n("tr",[n("td",[t._v(t._s(t.trans("exam.online_exam_is_published")))]),t._v(" "),n("td",{staticStyle:{"font-weight":"bold","font-size":"120%"}},[t.onlineExam.is_published?n("span",{staticClass:"text-success"},[t._v(t._s(t.trans("exam.online_exam_published")))]):n("span",{staticClass:"text-danger"},[t._v(t._s(t.trans("exam.online_exam_not_published")))])])]),t._v(" "),t.onlineExam.id?n("tr",[n("td",[t._v(t._s(t.trans("exam.online_exam_status")))]),t._v(" "),n("td",[n("span",{class:["label","label-"+t.onlineExam.status_detail.type]},[t._v(t._s(t.onlineExam.status_detail.text))])])]):t._e(),t._v(" "),n("tr",[n("td",[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),n("td",[t._v("\n                                    "+t._s(t.onlineExam.batch.course.name+" "+t.onlineExam.batch.name)+"\n                                ")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.trans("academic.subject")))]),t._v(" "),n("td",[t._v("\n                                    "+t._s(t.onlineExam.subject.name+" ("+t.onlineExam.subject.name+")")+"\n                                ")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.trans("exam.online_exam_date")))]),t._v(" "),n("td",[t._v("\n                                    "+t._s(t._f("moment")(t.onlineExam.date))+" \n                                    "+t._s(t._f("momentTime")(t.onlineExam.start_time))+" "+t._s(t.trans("general.to"))+"\n                                    "+t._s(t._f("momentTime")(t.onlineExam.end_time))+"\n                                ")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.trans("exam.online_exam_type")))]),t._v(" "),n("td",[t._v("\n                                    "+t._s(t.trans("exam.online_exam_type_"+t.onlineExam.exam_type))+"\n                                ")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.trans("exam.online_exam_passing_percentage")))]),t._v(" "),n("td",[t._v("\n                                    "+t._s(t.onlineExam.passing_percentage)+"%\n                                ")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.trans("exam.online_exam_is_negative_mark_applicable")))]),t._v(" "),n("td",[t._v("\n                                    "+t._s(t.onlineExam.is_negative_mark_applicable?t.trans("list.yes"):t.trans("list.no"))+" "+t._s(t.onlineExam.is_negative_mark_applicable?t.onlineExam.negative_mark_percentage_per_question+"%":"")+"\n                                ")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.trans("general.created_at")))]),t._v(" "),n("td",[t._v("\n                                    "+t._s(t._f("momentDateTime")(t.onlineExam.created_at))+"\n                                ")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.trans("general.updated_at")))]),t._v(" "),n("td",[t._v("\n                                    "+t._s(t._f("momentDateTime")(t.onlineExam.updated_at))+"\n                                ")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"2"}},[t._v("\n                                    "+t._s(t.onlineExam.description)+"\n                                ")])])])])])])])])}),[],!1,null,null,null).exports},67728:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const s={components:{onlineExamDetail:n(57949).Z},data:function(){return{uuid:this.$route.params.uuid,online_exam:{batch:{course:{}},subject:{},records:[],questions:[]},students:[]}},mounted:function(){helper.hasPermission("edit-online-exam")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getOnlineExam()},methods:{hasPermission:function(t){return helper.hasPermission(t)},getOnlineExam:function(){var t=this;this.showQuestionModal=!1;var e=this.$loading.show();axios.get("/api/online-exam/"+this.uuid+"?student=1").then((function(n){t.online_exam=n.online_exam,t.students=n.students,e.hide()})).catch((function(n){e.hide(),helper.showErrorMsg(n),t.$router.push("/dashboard")}))},getStudentName:function(t){return helper.getStudentName(t)},getRollNumber:function(t){return helper.getRollNumber(t)}},filters:{moment:function(t){return helper.formatDate(t)},momentTime:function(t){return helper.formatTime(t)},momentDateTime:function(t){return helper.formatDateTime(t)}}};const a=(0,n(51900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-titles"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("exam.online_exam"))+"\n                    "),t.online_exam?n("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.online_exam.name))]):t._e()])]),t._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"action-buttons pull-right"},[n("router-link",{staticClass:"btn btn-info btn-sm",attrs:{to:"/online-exam"}},[n("i",{staticClass:"fas fa-list"}),t._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("exam.online_exam")))])]),t._v(" "),n("router-link",{staticClass:"btn btn-info btn-sm",attrs:{to:"/online-exam/"+t.online_exam.uuid+"/questions"}},[n("i",{staticClass:"fas fa-list"}),t._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("exam.online_exam_questions")))])])],1)])])]),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-4"},[n("online-exam-detail",{attrs:{onlineExam:t.online_exam},on:{updateExam:t.getOnlineExam}})],1),t._v(" "),n("div",{staticClass:"col-12 col-sm-8 p-0"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-boy"},[n("h4",{staticClass:"card-title m-3"},[t._v(t._s(t.trans("exam.online_exam_records")))]),t._v(" "),t.students.length?n("div",{staticClass:"table-responsive p-2"},[n("table",{staticClass:"table table-bordered table-sm"},[n("thead",[n("tr",[n("th",[t._v(t._s(t.trans("exam.online_exam_rank")))]),t._v(" "),n("th",[t._v(t._s(t.trans("student.student")))]),t._v(" "),n("th",[t._v(t._s(t.trans("student.roll_number")))]),t._v(" "),n("th",[t._v(t._s(t.trans("exam.online_exam_start_time")))]),t._v(" "),n("th",[t._v(t._s(t.trans("exam.online_exam_end_time")))]),t._v(" "),n("th",[t._v(t._s(t.trans("exam.obtained_mark")))])])]),t._v(" "),n("thead",t._l(t.students,(function(e,s){return n("tr",[n("td",[t._v(t._s(s+1))]),t._v(" "),n("td",[e.record_id?n("span",[n("router-link",{attrs:{to:"/online-exam/"+t.uuid+"/records/"+e.record_id+"/report"}},[t._v(t._s(e.name))])],1):n("span",[t._v(t._s(e.name))])]),t._v(" "),n("td",[t._v(t._s(e.roll_number))]),t._v(" "),n("td",[t._v(t._s(t._f("momentDateTime")(e.start)))]),t._v(" "),n("td",[t._v(t._s(t._f("momentDateTime")(e.end)))]),t._v(" "),n("td",[t._v(t._s(e.mark))])])})),0)])]):t._e()])])])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=records.js.map?id=9204ef78da1d103f78c0