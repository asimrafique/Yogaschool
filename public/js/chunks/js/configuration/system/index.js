"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[3819],{95260:(t,o,e)=>{e.d(o,{Z:()=>s});const r={props:{setupWizard:{default:!1},configurations:{required:!1}},components:{},data:function(){return{configForm:new Form({color_theme:"",direction:"",sidebar:"",date_format:"",time_format:"",notification_position:"",timezone:"",first_day_of_week:"",page_length:10,locale:"",currency:"",footer_credit:"",biometric_auth_token:"",pusher_auth_token:"",https:0,error_display:0,frontend_website:0,online_registration:0,multilingual:0,ip_filter:0,email_log:0,email_template:0,todo:0,backup:0,maintenance_mode:0,maintenance_mode_message:"",online_registration_header:"",online_registration_success_message:"",config_type:""},!1),systemConfigVariables:{color_themes:[],directions:[],sidebar:[],date_formats:[],time_formats:[],notification_positions:[],timezones:[],locales:[],currencies:[],days:[]},direction:"",locale:"",sidebar:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite(),this.setupWizard||this.getConfiguration()},methods:{getPreRequisite:function(){var t=this,o=this.$loading.show();axios.get("/api/configuration/variable?type=system").then((function(e){t.systemConfigVariables.color_themes=e.color_themes,t.systemConfigVariables.directions=e.directions,t.systemConfigVariables.currencies=e.currencies,t.systemConfigVariables.sidebar=e.sidebar,t.systemConfigVariables.date_formats=e.date_formats,t.systemConfigVariables.time_formats=e.time_formats,t.systemConfigVariables.days=e.days,t.systemConfigVariables.notification_positions=e.notification_positions,t.systemConfigVariables.timezones=e.timezones,t.systemConfigVariables.locales=e.locales,o.hide()})).catch((function(t){o.hide(),helper.showErrorMsg(t)}))},getConfiguration:function(){var t=this,o=this.$loading.show();axios.get("/api/configuration").then((function(e){t.configForm=helper.formAssign(t.configForm,e),t.direction=e.direction,t.locale=e.locale,t.sidebar=e.sidebar,o.hide()})).catch((function(t){o.hide(),helper.showErrorMsg(t)}))},submit:function(){var t=this,o=this.$loading.show();return this.configForm.config_type="system",this.configForm.https=this.configForm.https?1:0,this.configForm.error_display=this.configForm.error_display?1:0,this.configForm.frontend_website=this.configForm.frontend_website?1:0,this.configForm.online_registration=this.configForm.online_registration?1:0,this.configForm.multilingual=this.configForm.multilingual?1:0,this.configForm.ip_filter=this.configForm.ip_filter?1:0,this.configForm.email_log=this.configForm.email_log?1:0,this.configForm.email_template=this.configForm.email_template?1:0,this.configForm.todo=this.configForm.todo?1:0,this.configForm.backup=this.configForm.backup?1:0,this.configForm.maintenance_mode=this.configForm.maintenance_mode?1:0,this.configForm.post("/api/configuration").then((function(e){return t.$store.dispatch("setConfig",{loaded:!1}),toastr.success(e.message),o.hide(),!0})).catch((function(t){return o.hide(),helper.showErrorMsg(t),!1}))},getConfig:function(t){return helper.getConfig(t)}},watch:{configurations:function(t){t&&helper.formAssign(this.configForm,t)}}};const s=(0,e(51900).Z)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"card"},[o("div",{staticClass:"card-body p-4"},[o("form",{on:{submit:function(o){return o.preventDefault(),t.submit.apply(null,arguments)},keydown:function(o){return t.configForm.errors.clear(o.target.name)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.default_color_theme")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.color_theme,expression:"configForm.color_theme"}],staticClass:"custom-select col-12",attrs:{name:"color_theme"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"color_theme",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("color_theme")}]}},t._l(t.systemConfigVariables.color_themes,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"color_theme"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.default_direction")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.direction,expression:"configForm.direction"}],staticClass:"custom-select col-12",attrs:{name:"direction"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"direction",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("direction")}]}},t._l(t.systemConfigVariables.directions,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"direction"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.default_sidebar")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.sidebar,expression:"configForm.sidebar"}],staticClass:"custom-select col-12",attrs:{name:"sidebar"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"sidebar",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("sidebar")}]}},t._l(t.systemConfigVariables.sidebar,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"sidebar"}})],1)]),t._v(" "),t.getConfig("multilingual")?o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.default_locale")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.locale,expression:"configForm.locale"}],staticClass:"custom-select col-12",attrs:{name:"locale"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"locale",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("locale")}]}},t._l(t.systemConfigVariables.locales,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"locale"}})],1)]):t._e(),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.date_format")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.date_format,expression:"configForm.date_format"}],staticClass:"custom-select col-12",attrs:{name:"date_format"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"date_format",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("date_format")}]}},t._l(t.systemConfigVariables.date_formats,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"date_format"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.time_format")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.time_format,expression:"configForm.time_format"}],staticClass:"custom-select col-12",attrs:{name:"time_format"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"time_format",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("time_format")}]}},t._l(t.systemConfigVariables.time_formats,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"time_format"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.notification_position")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.notification_position,expression:"configForm.notification_position"}],staticClass:"custom-select col-12",attrs:{name:"notification_position"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"notification_position",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("notification_position")}]}},t._l(t.systemConfigVariables.notification_positions,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"notification_position"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.timezone")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.timezone,expression:"configForm.timezone"}],staticClass:"custom-select col-12",attrs:{name:"timezone"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"timezone",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("timezone")}]}},t._l(t.systemConfigVariables.timezones,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"timezone"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("calendar.first_day_of_week")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.first_day_of_week,expression:"configForm.first_day_of_week"}],staticClass:"custom-select col-12",attrs:{name:"first_day_of_week"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"first_day_of_week",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("first_day_of_week")}]}},t._l(t.systemConfigVariables.days,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"first_day_of_week"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.currency")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.currency,expression:"configForm.currency"}],staticClass:"custom-select col-12",attrs:{name:"currency"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"currency",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("currency")}]}},t._l(t.systemConfigVariables.currencies,(function(e){return o("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"currency"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.page_length")))]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.configForm.page_length,expression:"configForm.page_length"}],staticClass:"custom-select col-12",attrs:{name:"page_length"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.configForm,"page_length",o.target.multiple?e:e[0])},function(o){return t.configForm.errors.clear("page_length")}]}},t._l(t.getConfig("pagination"),(function(e){return o("option",{domProps:{value:e}},[t._v("\n                                    "+t._s(e+" "+t.trans("general.per_page"))+"\n                                  ")])})),0),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"page_length"}})],1)]),t._v(" "),t.getConfig("show_footer_credit")?o("div",{staticClass:"col-12 col-sm-8"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.footer_credit")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.configForm.footer_credit,expression:"configForm.footer_credit"}],staticClass:"form-control",attrs:{type:"text",name:"footer_credit",placeholder:t.trans("configuration.footer_credit")},domProps:{value:t.configForm.footer_credit},on:{input:function(o){o.target.composing||t.$set(t.configForm,"footer_credit",o.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"footer_credit"}})],1)]):t._e(),t._v(" "),o("div",{staticClass:"col-12"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.biometric_auth_token")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.configForm.biometric_auth_token,expression:"configForm.biometric_auth_token"}],staticClass:"form-control",attrs:{type:"text",name:"biometric_auth_token",placeholder:t.trans("configuration.biometric_auth_token")},domProps:{value:t.configForm.biometric_auth_token},on:{input:function(o){o.target.composing||t.$set(t.configForm,"biometric_auth_token",o.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"biometric_auth_token"}})],1)]),t._v(" "),o("div",{staticClass:"col-12"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.pusher_auth_token")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.configForm.pusher_auth_token,expression:"configForm.pusher_auth_token"}],staticClass:"form-control",attrs:{type:"text",name:"pusher_auth_token",placeholder:t.trans("configuration.pusher_auth_token")},domProps:{value:t.configForm.pusher_auth_token},on:{input:function(o){o.target.composing||t.$set(t.configForm,"pusher_auth_token",o.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"pusher_auth_token"}})],1)])])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.https")))]),t._v(" "),o("div",[o("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.https,callback:function(o){t.$set(t.configForm,"https",o)},expression:"configForm.https"}})],1)])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.error_display")))]),t._v(" "),o("div",[o("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.error_display,callback:function(o){t.$set(t.configForm,"error_display",o)},expression:"configForm.error_display"}})],1)])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.multilingual")))]),t._v(" "),o("div",[o("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.multilingual,callback:function(o){t.$set(t.configForm,"multilingual",o)},expression:"configForm.multilingual"}})],1)])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("frontend.enable_frontend_website")))]),t._v(" "),o("div",[o("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.frontend_website,callback:function(o){t.$set(t.configForm,"frontend_website",o)},expression:"configForm.frontend_website"}})],1)])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.enable_online_registration")))]),t._v(" "),o("div",[o("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.online_registration,callback:function(o){t.$set(t.configForm,"online_registration",o)},expression:"configForm.online_registration"}})],1)])]),t._v(" "),o("div",{staticClass:"col-12"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.online_registration_header")))]),t._v(" "),o("autosize-textarea",{staticClass:"form-control",attrs:{row:"1",placeholder:t.trans("configuration.online_registration_header"),rows:"2",name:"online_registration_header"},model:{value:t.configForm.online_registration_header,callback:function(o){t.$set(t.configForm,"online_registration_header",o)},expression:"configForm.online_registration_header"}}),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"online_registration_header"}})],1)]),t._v(" "),o("div",{staticClass:"col-12"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.online_registration_success_message")))]),t._v(" "),o("autosize-textarea",{staticClass:"form-control",attrs:{row:"1",placeholder:t.trans("configuration.online_registration_success_message"),rows:"2",name:"online_registration_success_message"},model:{value:t.configForm.online_registration_success_message,callback:function(o){t.$set(t.configForm,"online_registration_success_message",o)},expression:"configForm.online_registration_success_message"}}),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"online_registration_success_message"}})],1)])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("utility.ip_filter")))]),t._v(" "),o("div",[o("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.ip_filter,callback:function(o){t.$set(t.configForm,"ip_filter",o)},expression:"configForm.ip_filter"}})],1)])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("utility.todo")))]),t._v(" "),o("div",[o("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.todo,callback:function(o){t.$set(t.configForm,"todo",o)},expression:"configForm.todo"}})],1)])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("utility.backup")))]),t._v(" "),o("div",[o("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.backup,callback:function(o){t.$set(t.configForm,"backup",o)},expression:"configForm.backup"}})],1)])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.maintenance_mode")))]),t._v(" "),o("div",[o("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.maintenance_mode,callback:function(o){t.$set(t.configForm,"maintenance_mode",o)},expression:"configForm.maintenance_mode"}})],1)])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[t.configForm.maintenance_mode?o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.maintenance_mode_message")))]),t._v(" "),o("autosize-textarea",{staticClass:"form-control",attrs:{row:"1",placeholder:t.trans("configuration.maintenance_mode_message"),rows:"1",name:"maintenance_mode_message"},model:{value:t.configForm.maintenance_mode_message,callback:function(o){t.$set(t.configForm,"maintenance_mode_message",o)},expression:"configForm.maintenance_mode_message"}}),t._v(" "),o("show-error",{attrs:{"form-name":t.configForm,"prop-name":"maintenance_mode_message"}})],1):t._e()])])])]),t._v(" "),t.setupWizard?t._e():o("button",{staticClass:"btn btn-info waves-effect waves-light pull-right m-t-10",attrs:{type:"submit"}},[t._v(t._s(t.trans("general.save")))])])])])}),[],!1,null,null,null).exports},74134:(t,o,e)=>{e.r(o),e.d(o,{default:()=>s});const r={components:{systemForm:e(95260).Z},data:function(){return{help_topic:""}}};const s=(0,e(51900).Z)(r,(function(){var t=this,o=t._self._c;return o("div",[o("div",{staticClass:"page-titles"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("configuration.system_configuration")))])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"action-buttons pull-right"},[o("button",{staticClass:"btn btn-info btn-sm",on:{click:function(o){return t.$router.push("/dashboard")}}},[o("i",{staticClass:"fas fa-home"}),t._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.home")))])]),t._v(" "),o("help-button",{on:{clicked:function(o){t.help_topic="configuration.system.configuration"}}})],1)])])]),t._v(" "),o("div",{staticClass:"container-fluid"},[o("system-form")],1),t._v(" "),o("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null).exports}}]);