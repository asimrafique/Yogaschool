(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[5329],{59004:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(94015),i=t.n(a),s=t(23645),r=t.n(s)()(i());r.push([n.id,".teacher-group-title{font-weight:500}","",{version:3,sources:["webpack://./resources/js/views/pages/themes/default/teachers.vue"],names:[],mappings:"AA6FA,qBACI,eA5FJ",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.teacher-group-title {\n    font-weight: 500;\n}\n"],sourceRoot:""}]);const c=r},88008:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(94015),i=t.n(a),s=t(23645),r=t.n(s)()(i());r.push([n.id,".card.teacher-card[data-v-c0ced870]{cursor:pointer;opacity:.9;transition:all .3s ease-in-out}.card.teacher-card .teacher-info .teacher-thumb[data-v-c0ced870]{background:#e1e2e3;border-radius:50%;float:left;height:100px;margin-right:20px;overflow:hidden;text-align:center;width:100px}.card.teacher-card .teacher-info .teacher-thumb i[data-v-c0ced870]{font-size:50px;padding-top:25px}.card.teacher-card .teacher-info .teacher-thumb img[data-v-c0ced870]{width:100%}.card.teacher-card .teacher-info p[data-v-c0ced870]{margin-bottom:0;min-height:100px;padding-top:10px}.card.teacher-card .teacher-info p span[data-v-c0ced870]{display:block}.card.teacher-card .teacher-info p span.teacher-name[data-v-c0ced870]{font-size:120%;font-weight:500}.card.teacher-card .teacher-info p span.designation[data-v-c0ced870]{font-size:100%}.card.teacher-card .teacher-info p span.other[data-v-c0ced870]{font-size:90%}","",{version:3,sources:["webpack://./resources/js/widgets/teacher-card.vue"],names:[],mappings:"AAsDA,oCAGI,cAAA,CAFA,UAAA,CACA,8BApDJ,CAwDQ,iEAKI,kBAAA,CADA,iBAAA,CAHA,UAAA,CAEA,YAAA,CAGA,iBAAA,CAEA,eAAA,CADA,iBAAA,CALA,WAhDZ,CAuDY,mEAEI,cAAA,CADA,gBApDhB,CAuDY,qEACI,UArDhB,CAwDQ,oDAEI,eAAA,CACA,gBAAA,CAFA,gBApDZ,CAwDY,yDACI,aAtDhB,CAwDgB,sEACI,cAAA,CACA,eAtDpB,CAwDgB,qEACI,cAtDpB,CAwDgB,+DACI,aAtDpB",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.card.teacher-card {\n    opacity: 0.9;\n    transition: all 0.3s ease-in-out;\n    cursor: pointer;\n\n    .teacher-info {\n        .teacher-thumb {\n            float: left;\n            width: 100px;\n            height: 100px;\n            border-radius: 50%;\n            background: #e1e2e3;\n            margin-right: 20px;\n            text-align: center;\n            overflow: hidden;\n            i {\n                padding-top: 25px;\n                font-size: 50px;\n            }\n            img {\n                width: 100%;\n            }\n        }\n        p{\n            padding-top: 10px;\n            margin-bottom: 0;\n            min-height: 100px;\n\n            span {\n                display: block;\n\n                &.teacher-name{\n                    font-size: 120%;\n                    font-weight: 500;\n                }\n                &.designation{\n                    font-size: 100%;\n                }\n                &.other{\n                    font-size: 90%;\n                }\n            }\n        }\n    }\n}\n"],sourceRoot:""}]);const c=r},91845:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>p});const a={props:{teacher:{type:Object,default:function(){return{}}}},methods:{getConfig:function(n){return helper.getConfig(n)},getEmployeePhoto:function(n){return"/"+n.photo},getEmployeeName:function(n){return helper.getEmployeeName(n)},getEmployeeDesignationOnly:function(n){return helper.getEmployeeDesignationOnly(n)},getEmployeeDateOfJoining:function(n){return helper.getEmployeeDateOfJoining(n)}}};var i=t(93379),s=t.n(i),r=t(88008),c={insert:"head",singleton:!1};s()(r.Z,c);r.Z.locals;var o=t(51900);const h={components:{TeacherCard:(0,o.Z)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"card card-box with-shadow teacher-card"},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"teacher-info"},[t("span",{staticClass:"teacher-thumb pull-left"},[n.teacher.photo?[t("img",{staticClass:"img-circle",attrs:{src:n.getEmployeePhoto(n.teacher)}})]:[t("i",{staticClass:"fas fa-user"})]],2),n._v(" "),t("p",[t("span",{staticClass:"teacher-name"},[n._v(n._s(n.getEmployeeName(n.teacher)))]),n._v(" "),n.getConfig("show_teacher_contact_number")?t("span",{staticClass:"other small text-muted"},[t("i",{staticClass:"fas fa-phone"}),n._v(" "+n._s(n.teacher.contact_number))]):n._e(),n._v(" "),n.getConfig("show_teacher_email")?t("span",{staticClass:"other small text-muted"},[t("i",{staticClass:"fas fa-envelope"}),n._v(" "+n._s(n.teacher.email))]):n._e(),n._v(" "),n.getConfig("show_teacher_date_of_joining")?t("span",{staticClass:"other small text-muted"},[t("i",{staticClass:"fas fa-calendar"}),n._v(" "+n._s(n.trans("general.since"))+" "+n._s(n.getEmployeeDateOfJoining(n.teacher)))]):n._e()])])])])}),[],!1,null,"c0ced870",null).exports},data:function(){return{page:{},teachers:{}}},mounted:function(){this.getData(),this.getTeachers(),helper.showDemoNotification(["frontend_teacher"])},methods:{getData:function(){var n=this,e=this.$loading.show();axios.get("/api/frontend/page/teachers/content").then((function(t){n.page=t.page,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t),422==t.response.status&&n.$router.push("/")}))},getTeachers:function(){var n=this,e=this.$loading.show();axios.get("/api/frontend/teacher/list").then((function(t){n.teachers=t.teachers,e.hide()})).catch((function(n){e.hide(),helper.showErrorMsg(n)}))},getConfig:function(n){return helper.getConfig(n)}},filters:{moment:function(n){return helper.formatDate(n)},momentDateTime:function(n){return helper.formatDateTime(n)}}};var d=t(59004),l={insert:"head",singleton:!1};s()(d.Z,l);d.Z.locals;const p=(0,o.Z)(h,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"page-title"},[t("div",{staticClass:"fix-width fix-width-mobile"},[t("h2",[n._v(n._s(n.page.title))])])]),n._v(" "),n.page.body?t("div",{staticClass:"fix-width fix-width-mobile p-t-80"},[t("div",{staticClass:"page-body",domProps:{innerHTML:n._s(n.page.body)}})]):n._e(),n._v(" "),t("div",{staticClass:"fix-width fix-width-mobile p-y-80"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"teacher-feed"},n._l(n.teachers,(function(e,a){return t("div",{key:a,staticClass:"row teacher-group m-b-30"},[t("div",{staticClass:"col-12"},[t("h2",{staticClass:"teacher-group-title m-b-20"},[n._v(n._s(a))])]),n._v(" "),n._l(e,(function(n){return t("div",{key:n.id,staticClass:"col-12 col-sm-6 col-md-4"},[t("teacher-card",{staticClass:"teacher-item",attrs:{teacher:n}})],1)}))],2)})),0)])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=teachers.js.map?id=4daebf780e6ef2b77fa6