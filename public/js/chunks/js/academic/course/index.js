(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[999],{93834:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(94015),o=s.n(r),n=s(23645),a=s.n(n)()(o());a.push([e.id,".loading-overlay.is-full-page{z-index:1060}","",{version:3,sources:["webpack://./resources/js/views/academic/course/form.vue"],names:[],mappings:"AAiOA,8BACA,YACA",sourcesContent:['<template>\n    <div>\n        <form @submit.prevent="proceed" @keydown="courseForm.errors.clear($event.target.name)">\n            <div class="row">\n                <div class="col-12 col-sm-3">\n                    <div class="form-group">\n                        <label for="">{{trans(\'academic.course_name\')}}</label>\n                        <input class="form-control" type="text" v-model="courseForm.name" name="name" :placeholder="trans(\'academic.course_name\')">\n                        <show-error :form-name="courseForm" prop-name="name"></show-error>\n                    </div>\n                </div>\n                <div class="col-12 col-sm-3">\n                    <div class="form-group">\n                        <label for="">{{trans(\'academic.course_group\')}} </label> <button type="button" class="btn btn-xs btn-info pull-right" v-if="hasPermission(\'access-configuration\')" @click="showCourseGroupModal = true">{{trans(\'general.add_new\')}}</button>\n                        <v-select label="name" v-model="selected_course_group" name="course_group_id" id="course_group_id" :options="course_groups" :placeholder="trans(\'academic.select_course_group\')" @select="onCourseGroupSelect" @close="courseForm.errors.clear(\'course_group_id\')" @remove="courseForm.course_group_id = \'\'">\n                            <div class="multiselect__option" slot="afterList" v-if="!course_groups.length">\n                                {{trans(\'general.no_option_found\')}}\n                            </div>\n                        </v-select>\n                        <show-error :form-name="courseForm" prop-name="course_group_id"></show-error>\n                    </div>\n                </div>\n                <div class="col-12 col-sm-3">\n                    <div class="form-group">\n                        <label for="">{{trans(\'academic.course_description\')}}</label>\n                        <input class="form-control" type="text" v-model="courseForm.description" name="description" :placeholder="trans(\'academic.course_description\')">\n                        <show-error :form-name="courseForm" prop-name="description"></show-error>\n                    </div>\n                </div>\n                \x3c!-- <div class="col-12 col-sm-3">\n                    <div class="form-group">\n                        <label for="">{{trans(\'student.attendance_type\')}}</label>\n                        <select v-model="courseForm.attendance_type" class="custom-select col-12" name="attendance_type" @change="courseForm.errors.clear(\'attendance_type\')">\n                          <option v-for="option in attendance_types" v-bind:value="option.value">\n                            {{ option.text }}\n                          </option>\n                        </select>\n                        <show-error :form-name="courseForm" prop-name="attendance_type"></show-error>\n                    </div>\n                </div> --\x3e\n                <div class="col-12 col-sm-3">\n                    <div class="form-group">\n                        <div>{{trans(\'student.enable_registration\')}}</div>\n                        <switches class="m-t-10" v-model="courseForm.enable_registration" theme="bootstrap" color="success"></switches> \n                        <show-error :form-name="courseForm" prop-name="enable_registration"></show-error>\n                    </div>\n                </div>\n                <div class="col-12 col-sm-3">\n                    <div class="form-group">\n                        <div>{{trans(\'student.enable_registration_fee\')}}</div>\n                        <switches class="m-t-10" v-model="courseForm.enable_registration_fee" theme="bootstrap" color="success"></switches> \n                        <show-error :form-name="courseForm" prop-name="enable_registration_fee"></show-error>\n                    </div>\n                </div>\n                <div class="col-12 col-sm-3" v-if="courseForm.enable_registration_fee">\n                    <div class="form-group">\n                        <label for="">{{trans(\'student.registration_fee\')}}</label>\n                        <currency-input :position="default_currency.position" :symbol="default_currency.symbol" name="registration_fee" :placeholder="trans(\'student.registration_fee\')" v-model="courseForm.registration_fee" @input.native="courseForm.errors.clear(\'registration_fee\')"></currency-input>\n                        <show-error :form-name="courseForm" prop-name="registration_fee"></show-error>\n                    </div>\n                </div>\n            </div>\n\n            <div class="card-footer text-right">\n                <router-link to="/academic/course" class="btn btn-danger waves-effect waves-light " v-show="id">{{trans(\'general.cancel\')}}</router-link>\n                <button v-if="!id" type="button" class="btn btn-danger waves-effect waves-light " @click="$emit(\'cancel\')">{{trans(\'general.cancel\')}}</button>\n                <button type="submit" class="btn btn-info waves-effect waves-light">\n                    <span v-if="id">{{trans(\'general.update\')}}</span>\n                    <span v-else>{{trans(\'general.save\')}}</span>\n                </button>\n            </div>\n        </form>\n\n        <transition name="modal" v-if="showCourseGroupModal">\n            <div class="modal-mask">\n                <div class="modal-wrapper">\n                    <div class="modal-container modal-lg">\n                        <div class="modal-header">\n                            <slot name="header">\n                                {{trans(\'academic.add_new_course_group\')}}\n                                <span class="float-right pointer" @click="showCourseGroupModal = false">x</span>\n                            </slot>\n                        </div>\n                        <div class="modal-body">\n                            <slot name="body">\n                                <course-group-form @completed="getPreRequisite" @cancel="showCourseGroupModal = false"></course-group-form>\n                                <div class="clearfix"></div>\n                            </slot>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </transition>\n    </div>\n</template>\n\n\n<script>\n    import courseGroupForm from \'../../configuration/academic/course-group/form\'\n\n    export default {\n        components: {courseGroupForm},\n        data() {\n            return {\n                courseForm: new Form({\n                    name : \'\',\n                    description : \'\',\n                    course_group_id: \'\',\n                    attendance_type: helper.getConfig(\'default_attendance_type\'),\n                    enable_registration: \'\',\n                    enable_registration_fee: \'\',\n                    registration_fee: \'\'\n                }),\n                course_groups: [],\n                selected_course_group: null,\n                default_currency: helper.getConfig(\'default_currency\'),\n                attendance_types: [\n                    {\n                        "text": i18n.student.attendance_type_daily,\n                        "value": "daily"\n                    }\n                    // {\n                    //     "text": i18n.student.attendance_type_subject_wise,\n                    //     "value": "subject_wise"\n                    // }\n                ],\n                showCourseGroupModal: false\n            };\n        },\n        props: [\'id\'],\n        mounted() {\n            if(!helper.hasPermission(\'create-course\') && !helper.hasPermission(\'edit-course\')){\n                helper.notAccessibleMsg();\n                this.$router.push(\'/dashboard\');\n            }\n\n            if(this.id)\n                this.get();\n\n            this.getPreRequisite();\n        },\n        methods: {\n            hasPermission(permission){\n                return helper.hasPermission(permission);\n            },\n            proceed(){\n                if(this.id)\n                    this.update();\n                else\n                    this.store();\n            },\n            getPreRequisite(){\n                let loader = this.$loading.show();\n                axios.get(\'/api/course/pre-requisite\')\n                    .then(response => {\n                        this.course_groups = response;\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    });\n            },\n            store(){\n                let loader = this.$loading.show();\n                this.courseForm.post(\'/api/course\')\n                    .then(response => {\n                        toastr.success(response.message);\n                        this.courseForm.attendance_type = helper.getConfig(\'default_attendance_type\');\n                        this.selected_course_group = null;\n                        this.$emit(\'completed\');\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    });\n            },\n            get(){\n                let loader = this.$loading.show();\n                axios.get(\'/api/course/\'+this.id)\n                    .then(response => {\n                        this.courseForm.name = response.name;\n                        this.courseForm.description = response.description;\n                        this.courseForm.attendance_type = response.options ? response.options.attendance_type : helper.getConfig(\'default_attendance_type\');\n                        this.courseForm.enable_registration = response.options ? response.options.enable_registration : helper.getConfig(\'enable_registration\');\n                        this.courseForm.enable_registration_fee = response.options ? response.options.enable_registration_fee : helper.getConfig(\'enable_registration_fee\');\n                        this.courseForm.registration_fee = response.options ? response.options.registration_fee : helper.getConfig(\'registration_fee\');\n                        this.courseForm.course_group_id = response.course_group_id;\n                        this.selected_course_group = {id: response.course_group_id, name: response.course_group.name};\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                        this.$router.push(\'/academic/course\');\n                    });\n            },\n            update(){\n                let loader = this.$loading.show();\n                this.courseForm.patch(\'/api/course/\'+this.id)\n                    .then(response => {\n                        toastr.success(response.message);\n                        loader.hide();\n                        this.$router.push(\'/academic/course\');\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    });\n            },\n            getConfig(config) {\n                return helper.getConfig(config);\n            },\n            onCourseGroupSelect(selectedOption){\n                this.courseForm.course_group_id = selectedOption.id;\n            },\n            hideCourseGroupForm(){\n                $(\'.add-course-group-form\').modal(\'hide\');\n            }\n        }\n    }\n<\/script>\n\n<style>\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n</style>'],sourceRoot:""}]);const i=a},57314:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});const r={components:{courseGroupForm:s(67113).Z},data:function(){return{courseForm:new Form({name:"",description:"",course_group_id:"",attendance_type:helper.getConfig("default_attendance_type"),enable_registration:"",enable_registration_fee:"",registration_fee:""}),course_groups:[],selected_course_group:null,default_currency:helper.getConfig("default_currency"),attendance_types:[{text:i18n.student.attendance_type_daily,value:"daily"}],showCourseGroupModal:!1}},props:["id"],mounted:function(){helper.hasPermission("create-course")||helper.hasPermission("edit-course")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.id&&this.get(),this.getPreRequisite()},methods:{hasPermission:function(e){return helper.hasPermission(e)},proceed:function(){this.id?this.update():this.store()},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/course/pre-requisite").then((function(s){e.course_groups=s,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},store:function(){var e=this,t=this.$loading.show();this.courseForm.post("/api/course").then((function(s){toastr.success(s.message),e.courseForm.attendance_type=helper.getConfig("default_attendance_type"),e.selected_course_group=null,e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/course/"+this.id).then((function(s){e.courseForm.name=s.name,e.courseForm.description=s.description,e.courseForm.attendance_type=s.options?s.options.attendance_type:helper.getConfig("default_attendance_type"),e.courseForm.enable_registration=s.options?s.options.enable_registration:helper.getConfig("enable_registration"),e.courseForm.enable_registration_fee=s.options?s.options.enable_registration_fee:helper.getConfig("enable_registration_fee"),e.courseForm.registration_fee=s.options?s.options.registration_fee:helper.getConfig("registration_fee"),e.courseForm.course_group_id=s.course_group_id,e.selected_course_group={id:s.course_group_id,name:s.course_group.name},t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s),e.$router.push("/academic/course")}))},update:function(){var e=this,t=this.$loading.show();this.courseForm.patch("/api/course/"+this.id).then((function(s){toastr.success(s.message),t.hide(),e.$router.push("/academic/course")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getConfig:function(e){return helper.getConfig(e)},onCourseGroupSelect:function(e){this.courseForm.course_group_id=e.id},hideCourseGroupForm:function(){$(".add-course-group-form").modal("hide")}}};var o=s(93379),n=s.n(o),a=s(93834),i={insert:"head",singleton:!1};n()(a.Z,i);a.Z.locals;const c=(0,s(51900).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)},keydown:function(t){return e.courseForm.errors.clear(t.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.course_name")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.courseForm.name,expression:"courseForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("academic.course_name")},domProps:{value:e.courseForm.name},on:{input:function(t){t.target.composing||e.$set(e.courseForm,"name",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.courseForm,"prop-name":"name"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.course_group"))+" ")]),e._v(" "),e.hasPermission("access-configuration")?s("button",{staticClass:"btn btn-xs btn-info pull-right",attrs:{type:"button"},on:{click:function(t){e.showCourseGroupModal=!0}}},[e._v(e._s(e.trans("general.add_new")))]):e._e(),e._v(" "),s("v-select",{attrs:{label:"name",name:"course_group_id",id:"course_group_id",options:e.course_groups,placeholder:e.trans("academic.select_course_group")},on:{select:e.onCourseGroupSelect,close:function(t){return e.courseForm.errors.clear("course_group_id")},remove:function(t){e.courseForm.course_group_id=""}},model:{value:e.selected_course_group,callback:function(t){e.selected_course_group=t},expression:"selected_course_group"}},[e.course_groups.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                            "+e._s(e.trans("general.no_option_found"))+"\n                        ")])]),e._v(" "),s("show-error",{attrs:{"form-name":e.courseForm,"prop-name":"course_group_id"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.course_description")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.courseForm.description,expression:"courseForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("academic.course_description")},domProps:{value:e.courseForm.description},on:{input:function(t){t.target.composing||e.$set(e.courseForm,"description",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.courseForm,"prop-name":"description"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("div",[e._v(e._s(e.trans("student.enable_registration")))]),e._v(" "),s("switches",{staticClass:"m-t-10",attrs:{theme:"bootstrap",color:"success"},model:{value:e.courseForm.enable_registration,callback:function(t){e.$set(e.courseForm,"enable_registration",t)},expression:"courseForm.enable_registration"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.courseForm,"prop-name":"enable_registration"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("div",[e._v(e._s(e.trans("student.enable_registration_fee")))]),e._v(" "),s("switches",{staticClass:"m-t-10",attrs:{theme:"bootstrap",color:"success"},model:{value:e.courseForm.enable_registration_fee,callback:function(t){e.$set(e.courseForm,"enable_registration_fee",t)},expression:"courseForm.enable_registration_fee"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.courseForm,"prop-name":"enable_registration_fee"}})],1)]),e._v(" "),e.courseForm.enable_registration_fee?s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("student.registration_fee")))]),e._v(" "),s("currency-input",{attrs:{position:e.default_currency.position,symbol:e.default_currency.symbol,name:"registration_fee",placeholder:e.trans("student.registration_fee")},nativeOn:{input:function(t){return e.courseForm.errors.clear("registration_fee")}},model:{value:e.courseForm.registration_fee,callback:function(t){e.$set(e.courseForm,"registration_fee",t)},expression:"courseForm.registration_fee"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.courseForm,"prop-name":"registration_fee"}})],1)]):e._e()]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/academic/course"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?s("span",[e._v(e._s(e.trans("general.update")))]):s("span",[e._v(e._s(e.trans("general.save")))])])],1)]),e._v(" "),e.showCourseGroupModal?s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container modal-lg"},[s("div",{staticClass:"modal-header"},[e._t("header",(function(){return[e._v("\n                            "+e._s(e.trans("academic.add_new_course_group"))+"\n                            "),s("span",{staticClass:"float-right pointer",on:{click:function(t){e.showCourseGroupModal=!1}}},[e._v("x")])]}))],2),e._v(" "),s("div",{staticClass:"modal-body"},[e._t("body",(function(){return[s("course-group-form",{on:{completed:e.getPreRequisite,cancel:function(t){e.showCourseGroupModal=!1}}}),e._v(" "),s("div",{staticClass:"clearfix"})]}))],2)])])])]):e._e()],1)}),[],!1,null,null,null).exports},97728:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});const r={components:{courseForm:s(57314).Z},data:function(){return{courses:{total:0,data:[]},course:{},filter:{sort_by:"position",order:"asc",course_group_id:[],page_length:helper.getConfig("page_length")},orderByOptions:[{value:"position",translation:i18n.academic.course_order},{value:"name",translation:i18n.academic.course_name}],course_groups:[],selected_course_groups:null,showFilterPanel:!1,showCreatePanel:!1,showReorderModal:!1,showBatchReorderModal:!1,list:[],batch_list:[],help_topic:""}},mounted:function(){helper.hasPermission("list-course")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getCourses(),helper.showDemoNotification(["academic"])},methods:{hasPermission:function(e){return helper.hasPermission(e)},showBatchReorderAction:function(e){this.showBatchReorderModal=!0,this.getBatchList(e)},getBatchList:function(e){var t=this;this.batch_list=[],this.course=e,e.batches.forEach((function(e){t.batch_list.push(e.name)}))},getCourses:function(e){var t=this,s=this.$loading.show();"number"!=typeof e&&(e=1);var r=helper.getFilterURL(this.filter);axios.get("/api/course?page="+e+r).then((function(e){t.list=[],t.courses=e.courses,t.course_groups=e.filters.course_groups,t.courses.data.forEach((function(e){t.list.push(e.name)})),s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},editCourse:function(e){this.$router.push("/academic/course/"+e.id+"/edit")},confirmDelete:function(e){var t=this;return function(s){return t.deleteCourse(e)}},deleteCourse:function(e){var t=this,s=this.$loading.show();axios.delete("/api/course/"+e.id).then((function(e){toastr.success(e.message),t.getCourses(),s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},getConfig:function(e){return helper.getConfig(e)},formatCurrency:function(e){return helper.formatCurrency(e)},print:function(){var e=this.$loading.show();axios.post("/api/course/print",{filter:this.filter}).then((function(t){var s=window.open("/print");e.hide(),s.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/course/pdf",{filter:this.filter}).then((function(s){t.hide(),window.open("/download/report/"+s+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onCourseGroupSelect:function(e){this.filter.course_group_id.push(e.id)},onCourseGroupRemove:function(e){this.filter.course_group_id.splice(this.filter.course_group_id.indexOf(e.id),1)},reorderCourse:function(){var e=this;axios.post("/api/course/reorder",{list:this.list}).then((function(t){toastr.success(t.message),e.showReorderModal=!1,e.getCourses()})).catch((function(e){helper.showErrorMsg(e)}))},reorderBatch:function(){var e=this;axios.post("/api/course/"+this.course.id+"/batch/reorder",{list:this.batch_list}).then((function(t){toastr.success(t.message),e.showBatchReorderModal=!1,e.getCourses()})).catch((function(e){helper.showErrorMsg(e)}))}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getCourses()},"filter.order":function(e){this.getCourses()},"filter.page_length":function(e){this.getCourses()}},computed:{authToken:function(){return helper.getAuthToken()}}};const o=(0,s(51900).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("academic.course"))+" \n                    "),e.courses.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.courses.total,from:e.courses.from,to:e.courses.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[e.courses.total&&!e.showCreatePanel&&e.hasPermission("create-course")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("academic.add_new_course")))])]):e._e(),e._v(" "),e.hasPermission("edit-course")&&e.courses.total?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("academic.reorder_course"),expression:"trans('academic.reorder_course')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showReorderModal=!0}}},[s("i",{staticClass:"fas fa-arrows-alt"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("academic.reorder_course")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[s("i",{staticClass:"fas fa-filter"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),s("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),s("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[s("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[s("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),s("help-button",{on:{clicked:function(t){e.help_topic="academic.course"}}})],1)])])]),e._v(" "),s("div",{staticClass:"container-fluid"},[s("transition",{attrs:{name:"fade"}},[e.showFilterPanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("v-select",{attrs:{label:"name","track-by":"id",name:"course_group_id",id:"course_group_id",options:e.course_groups,placeholder:e.trans("academic.select_course_group"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_course_groups},on:{select:e.onCourseGroupSelect,remove:e.onCourseGroupRemove},model:{value:e.selected_course_groups,callback:function(t){e.selected_course_groups=t},expression:"selected_course_groups"}},[e.course_groups.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)])]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getCourses}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),e.hasPermission("create-course")?s("transition",{attrs:{name:"fade"}},[e.showCreatePanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("academic.add_new_course")))]),e._v(" "),s("course-form",{on:{completed:e.getCourses,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]):e._e(),e._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[e.courses.total?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.trans("academic.course_name")))]),e._v(" "),s("th",[e._v(e._s(e.trans("academic.course_group")))]),e._v(" "),s("th",[e._v(e._s(e.trans("academic.batch")))]),e._v(" "),s("th",[e._v(e._s(e.trans("general.option")))]),e._v(" "),s("th",[e._v(e._s(e.trans("academic.course_description")))]),e._v(" "),s("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),s("tbody",e._l(e.courses.data,(function(t){return s("tr",[s("td",{domProps:{textContent:e._s(t.name)}}),e._v(" "),s("td",{domProps:{textContent:e._s(t.course_group.name)}}),e._v(" "),s("td",[s("ul",{staticStyle:{"list-style":"none",padding:"0",margin:"0"}},e._l(t.batches,(function(t){return s("li",[e._v(e._s(t.name))])})),0)]),e._v(" "),s("td",[t.options?[t.options.enable_registration?s("span",{staticClass:"badge badge-success"},[e._v(e._s(e.trans("student.registration_enabled")))]):e._e(),e._v(" "),s("br"),e._v(" "),t.options.enable_registration_fee?s("span",{staticClass:"badge badge-success"},[e._v(e._s(e.trans("student.registration_fee_enabled"))+" ("+e._s(e.formatCurrency(t.options.registration_fee))+") ")]):e._e()]:[e.getConfig("enable_registration")?s("span",{staticClass:"badge badge-success"},[e._v(e._s(e.trans("student.registration_enabled")))]):e._e(),e._v(" "),s("br"),e._v(" "),e.getConfig("enable_registration_fee")?s("span",{staticClass:"badge badge-success"},[e._v(e._s(e.trans("student.registration_fee_enabled"))+" ("+e._s(e.formatCurrency(t.options.registration_fee))+") ")]):e._e()]],2),e._v(" "),s("td",{domProps:{textContent:e._s(t.description)}}),e._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[t.batches?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("academic.reorder_batch"),expression:"trans('academic.reorder_batch')"}],staticClass:"btn btn-success btn-sm",on:{click:function(s){return s.preventDefault(),e.showBatchReorderAction(t)}}},[s("i",{staticClass:"fas fa-arrows-alt"})]):e._e(),e._v(" "),e.hasPermission("edit-course")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("academic.edit_course"),expression:"trans('academic.edit_course')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return s.preventDefault(),e.editCourse(t)}}},[s("i",{staticClass:"fas fa-edit"})]):e._e(),e._v(" "),e.hasPermission("delete-course")?s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(course)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("academic.delete_course"),expression:"trans('academic.delete_course')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[s("i",{staticClass:"fas fa-trash"})]):e._e()])])])})),0)])]):e._e(),e._v(" "),e.courses.total?e._e():s("module-info",{attrs:{module:"academic",title:"course_module_title",description:"course_module_description",icon:"list"}},[s("div",{attrs:{slot:"btn"},slot:"btn"},[!e.showCreatePanel&&e.hasPermission("create-course")?s("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))]):e._e()])]),e._v(" "),s("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.courses},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getCourses}})],1)])],1),e._v(" "),e.hasPermission("edit-course")&&e.showReorderModal?s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container modal-lg"},[s("div",{staticClass:"modal-header"},[e._t("header",(function(){return[e._v("\n                            "+e._s(e.trans("academic.reorder_course"))+"\n                            "),s("span",{staticClass:"float-right pointer",on:{click:function(t){e.showReorderModal=!1}}},[e._v("x")])]}))],2),e._v(" "),s("div",{staticClass:"modal-body"},[e._t("body",(function(){return[s("draggable",{staticClass:"list-group",on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}},e._l(e.list,(function(t){return s("div",{key:t.id,staticClass:"list-group-item pointer"},[s("i",{staticClass:"fas fa-arrows-alt"}),e._v(" "+e._s(t))])})),0),e._v(" "),s("button",{staticClass:"btn btn-info pull-right m-t-10",attrs:{type:"button"},on:{click:e.reorderCourse}},[e._v(e._s(e.trans("general.save")))])]}))],2)])])])]):e._e(),e._v(" "),e.hasPermission("edit-course")&&e.showBatchReorderModal?s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container modal-lg"},[s("div",{staticClass:"modal-header"},[e._t("header",(function(){return[e._v("\n                            "+e._s(e.trans("academic.reorder_batch"))+"\n                            "),s("span",{staticClass:"float-right pointer",on:{click:function(t){e.showBatchReorderModal=!1}}},[e._v("x")])]}))],2),e._v(" "),s("div",{staticClass:"modal-body"},[e._t("body",(function(){return[s("draggable",{staticClass:"list-group",on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.batch_list,callback:function(t){e.batch_list=t},expression:"batch_list"}},e._l(e.batch_list,(function(t){return s("div",{key:t.id,staticClass:"list-group-item pointer"},[s("i",{staticClass:"fas fa-arrows-alt"}),e._v(" "+e._s(t))])})),0),e._v(" "),s("button",{staticClass:"btn btn-info pull-right m-t-10",attrs:{type:"button"},on:{click:e.reorderBatch}},[e._v(e._s(e.trans("general.save")))])]}))],2)])])])]):e._e(),e._v(" "),s("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null).exports},67113:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});const r={components:{},data:function(){return{courseGroupForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.courseGroupForm.post("/api/academic/course/group").then((function(s){toastr.success(s.message),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/academic/course/group/"+this.id).then((function(s){e.courseGroupForm.name=s.name,e.courseGroupForm.description=s.description,t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s),e.$router.push("/configuration/academic/course/group")}))},update:function(){var e=this,t=this.$loading.show();this.courseGroupForm.patch("/api/academic/course/group/"+this.id).then((function(s){toastr.success(s.message),t.hide(),e.$router.push("/configuration/academic/course/group")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}}};const o=(0,s(51900).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)},keydown:function(t){return e.courseGroupForm.errors.clear(t.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.course_group_name")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.courseGroupForm.name,expression:"courseGroupForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("academic.course_group_name")},domProps:{value:e.courseGroupForm.name},on:{input:function(t){t.target.composing||e.$set(e.courseGroupForm,"name",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.courseGroupForm,"prop-name":"name"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.course_group_description")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.courseGroupForm.description,expression:"courseGroupForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("academic.course_group_description")},domProps:{value:e.courseGroupForm.description},on:{input:function(t){t.target.composing||e.$set(e.courseGroupForm,"description",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.courseGroupForm,"prop-name":"description"}})],1)])]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/academic/course/group"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?s("span",[e._v(e._s(e.trans("general.update")))]):s("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=index.js.map?id=78a66222790c9e5d2674