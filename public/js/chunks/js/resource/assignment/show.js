"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[9582],{17471:(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});const n={components:{},props:["uuid","url"],mounted:function(){this.uuid&&this.get()},data:function(){return{assignment:[],attachments:[]}},methods:{get:function(){var t=this,e=this.$loading.show();axios.get("/api/assignment/"+this.uuid).then((function(s){t.assignment=s.assignment,t.attachments=s.attachments,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getEmployeeName:function(t){return helper.getEmployeeName(t)},getEmployeeDesignation:function(t,e){return helper.getEmployeeDesignation(t,e)}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)},moment:function(t){return helper.formatDate(t)}}};const a=(0,s(51900).Z)(n,(function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container modal-lg"},[t.assignment.id?e("div",{staticClass:"modal-header"},[t._t("header",(function(){return[e("span",[t._v(t._s(t.assignment.title))]),t._v(" "),e("span",{staticClass:"float-right pointer",on:{click:function(e){return t.$emit("close")}}},[t._v("x")])]}))],2):t._e(),t._v(" "),t.assignment.id?e("div",{staticClass:"modal-body"},[t._t("body",(function(){return[e("h6",{staticClass:"card-title"},[e("strong",[t._v(t._s(t.trans("academic.subject"))+":")]),t._v(" "+t._s(t.assignment.subject.name+" ("+t.assignment.subject.code+")")+" \n                            "),e("br"),t._v(" "),e("strong",[t._v(t._s(t.trans("academic.batch"))+":")]),t._v(" "+t._s(t.assignment.subject.batch.course.name+" "+t.assignment.subject.batch.name)+" \n                            "),e("br"),t._v(" "),e("strong",[t._v(t._s(t.trans("resource.date_of_assignment"))+":")]),t._v(" "+t._s(t._f("moment")(t.assignment.date_of_assignment))+" \n                            "),e("br"),t._v(" "),e("strong",[t._v(t._s(t.trans("resource.due_date_of_assignment"))+":")]),t._v(" "+t._s(t._f("moment")(t.assignment.due_date))+" \n                            "),t.assignment.employee?e("p",{staticClass:"pull-right"},[e("strong",[t._v(t._s(t.trans("resource.assignment_posted_by"))+":")]),t._v(" "+t._s(t.getEmployeeName(t.assignment.employee))+" "+t._s(t.getEmployeeDesignation(t.assignment.employee,t.assignment.date_of_assignment))+"\n                            ")]):t._e()]),t._v(" "),e("div",{staticClass:"m-t-20 html-view",domProps:{innerHTML:t._s(t.assignment.description)}}),t._v(" "),t.attachments.length?e("div",[e("ul",{staticClass:"m-t-10 upload-file-list"},t._l(t.attachments,(function(s){return e("li",{staticClass:"upload-file-list-item"},[e("a",{staticClass:"no-link-color",attrs:{href:"/resource/assignment/".concat(t.assignment.uuid,"/attachment/").concat(s.uuid,"/download?token=").concat(t.authToken)}},[e("i",{class:["file-icon","fas","fa-lg",s.file_info.icon]}),t._v(" "),e("span",{staticClass:"upload-file-list-item-size"},[t._v(t._s(s.file_info.size))]),t._v(" "+t._s(s.user_filename))])])})),0)]):t._e(),t._v(" "),e("hr"),t._v(" "),e("p",[e("i",{staticClass:"far fa-clock"}),t._v(" "),e("small",[t._v(t._s(t.trans("general.created_at"))+" "+t._s(t._f("momentDateTime")(t.assignment.created_at)))]),t._v(" "),e("span",{staticClass:"pull-right"},[e("i",{staticClass:"far fa-clock"}),t._v(" "),e("small",[t._v(t._s(t.trans("general.updated_at"))+" "+t._s(t._f("momentDateTime")(t.assignment.updated_at)))])])])]}))],2):t._e()])])])])}),[],!1,null,null,null).exports}}]);