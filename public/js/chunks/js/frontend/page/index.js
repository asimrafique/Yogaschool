(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[5592],{82401:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});const a={components:{},data:function(){return{pageForm:new Form({title:"",is_draft:0,show_blocks:0,show_latest_articles:0,body:"",has_slider:0,sliders:[],upload_token:""}),module_id:"",clearAttachment:!0}},props:["uuid"],mounted:function(){helper.frontendConfigurationAccessible()||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid?this.get():this.pageForm.upload_token=this.$uuid.v4()},methods:{hasPermission:function(t){return helper.hasPermission(t)},proceed:function(){this.uuid?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.pageForm.post("/api/frontend/page").then((function(s){toastr.success(s.message),t.clearAttachment=!t.clearAttachment,t.pageForm.upload_token=t.$uuid.v4(),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/frontend/page/"+this.uuid).then((function(s){t.pageForm.title=s.page.title,t.pageForm.body=s.page.body,t.pageForm.is_draft=s.page.is_draft,t.pageForm.show_blocks=s.page.options.show_blocks,t.pageForm.show_latest_articles=s.page.options.show_latest_articles,t.pageForm.has_slider=s.page.options.has_slider,t.pageForm.has_slider&&(t.pageForm.sliders=[],s.page.options.sliders.forEach((function(e){t.pageForm.sliders.push({image:e.image,title:e.title,description:e.description})}))),t.pageForm.upload_token=s.page.upload_token,t.module_id=s.page.id,e.hide()})).catch((function(s){e.hide(),helper.showErrorMsg(s),t.$router.push("/frontend/page")}))},update:function(){var t=this,e=this.$loading.show();this.pageForm.patch("/api/frontend/page/"+this.uuid).then((function(s){toastr.success(s.message),e.hide(),t.$router.push("/frontend/page")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getSliderDescription:function(t){return"slider_description_"+t},getSliderTitle:function(t){return"slider_title_"+t},getSliderId:function(t){return"slider_id_"+t},addNewSliderImage:function(){this.pageForm.sliders.push({image:"",title:"",description:""})},confirmDelete:function(t){var e=this;return function(s){return e.deleteSliderImage(t)}},deleteSliderImage:function(t){this.pageForm.sliders.splice(t,1)},updateImage:function(){}}};const o=(0,s(51900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.pageForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("frontend.page_title")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.pageForm.title,expression:"pageForm.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:t.trans("frontend.page_title")},domProps:{value:t.pageForm.title},on:{input:function(e){e.target.composing||t.$set(t.pageForm,"title",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.pageForm,"prop-name":"title"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pageForm.is_draft,expression:"pageForm.is_draft"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.pageForm.is_draft)?t._i(t.pageForm.is_draft,"1")>-1:t.pageForm.is_draft},on:{change:function(e){var s=t.pageForm.is_draft,a=e.target,o=!!a.checked;if(Array.isArray(s)){var i=t._i(s,"1");a.checked?i<0&&t.$set(t.pageForm,"is_draft",s.concat(["1"])):i>-1&&t.$set(t.pageForm,"is_draft",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.pageForm,"is_draft",o)}}}),t._v(" "),s("span",{staticClass:"custom-control-label"},[t._v(t._s(t.trans("frontend.page_is_draft")))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pageForm.has_slider,expression:"pageForm.has_slider"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.pageForm.has_slider)?t._i(t.pageForm.has_slider,"1")>-1:t.pageForm.has_slider},on:{change:function(e){var s=t.pageForm.has_slider,a=e.target,o=!!a.checked;if(Array.isArray(s)){var i=t._i(s,"1");a.checked?i<0&&t.$set(t.pageForm,"has_slider",s.concat(["1"])):i>-1&&t.$set(t.pageForm,"has_slider",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.pageForm,"has_slider",o)}}}),t._v(" "),s("span",{staticClass:"custom-control-label"},[t._v(t._s(t.trans("frontend.page_has_slider")))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pageForm.show_blocks,expression:"pageForm.show_blocks"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.pageForm.show_blocks)?t._i(t.pageForm.show_blocks,"1")>-1:t.pageForm.show_blocks},on:{change:function(e){var s=t.pageForm.show_blocks,a=e.target,o=!!a.checked;if(Array.isArray(s)){var i=t._i(s,"1");a.checked?i<0&&t.$set(t.pageForm,"show_blocks",s.concat(["1"])):i>-1&&t.$set(t.pageForm,"show_blocks",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.pageForm,"show_blocks",o)}}}),t._v(" "),s("span",{staticClass:"custom-control-label"},[t._v(t._s(t.trans("frontend.show_blocks")))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pageForm.show_latest_articles,expression:"pageForm.show_latest_articles"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.pageForm.show_latest_articles)?t._i(t.pageForm.show_latest_articles,"1")>-1:t.pageForm.show_latest_articles},on:{change:function(e){var s=t.pageForm.show_latest_articles,a=e.target,o=!!a.checked;if(Array.isArray(s)){var i=t._i(s,"1");a.checked?i<0&&t.$set(t.pageForm,"show_latest_articles",s.concat(["1"])):i>-1&&t.$set(t.pageForm,"show_latest_articles",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.pageForm,"show_latest_articles",o)}}}),t._v(" "),s("span",{staticClass:"custom-control-label"},[t._v(t._s(t.trans("frontend.show_latest_articles")))])])])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("file-upload-input",{attrs:{"button-text":t.trans("general.attachment"),token:t.pageForm.upload_token,module:"frontend-page","clear-file":t.clearAttachment,"module-id":t.module_id}})],1)]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("html-editor",{attrs:{name:"body",model:t.pageForm.body,height:"300",isUpdate:!!t.uuid},on:{"update:model":function(e){return t.$set(t.pageForm,"body",e)},clearErrors:function(e){return t.pageForm.errors.clear("body")}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.pageForm,"prop-name":"body"}})],1)])]),t._v(" "),t._l(t.pageForm.sliders,(function(e,a){return t.pageForm.has_slider?s("div",{key:a,staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-1"},[s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(a)},expression:"{ok: confirmDelete(index)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.delete"),expression:"trans('general.delete')"}],key:a,staticClass:"btn btn-danger btn-sm",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-trash"})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"slider.title"}],staticClass:"form-control",attrs:{type:"text",name:t.getSliderTitle(a),placeholder:t.trans("frontend.slider_image_title")},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.pageForm,"prop-name":t.getSliderTitle(a)}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("autosize-textarea",{attrs:{rows:"2",name:"getSliderDescription(index)",placeholder:t.trans("frontend.slider_image_description")},model:{value:e.description,callback:function(s){t.$set(e,"description",s)},expression:"slider.description"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.pageForm,"prop-name":t.getSliderDescription(a)}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("upload-image",{attrs:{id:t.getSliderId(a),"button-text":t.trans("frontend.choose_slider_image"),"upload-path":"/frontend/page/slider/image","remove-path":"/frontend/page/slider/image","image-source":e.image},on:{uploaded:function(t){e.image=t},removed:function(t){e.image=""}}})],1)]):t._e()})),t._v(" "),t.pageForm.has_slider?s("button",{staticClass:"btn btn-info btn-sm mx-4 m-b-20",attrs:{type:"button"},on:{click:t.addNewSliderImage}},[t._v(t._s(t.trans("frontend.add_new_slider_image")))]):t._e(),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/frontend/page"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.uuid?t._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.uuid?s("span",[t._v(t._s(t.trans("general.update")))]):s("span",[t._v(t._s(t.trans("general.save")))])])],1)],2)])}),[],!1,null,null,null).exports},95958:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(82401);const o={components:{},props:["uuid"],mounted:function(){helper.frontendConfigurationAccessible()||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid&&this.get()},data:function(){return{page:[],attachments:[]}},methods:{get:function(){var t=this,e=this.$loading.show();axios.get("/api/frontend/page/"+this.uuid).then((function(s){t.page=s.page,t.attachments=s.attachments,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)},moment:function(t){return helper.formatDate(t)}}};var i=s(51900);const r=(0,i.Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container modal-lg"},[t.page.id?s("div",{staticClass:"modal-header"},[t._t("header",(function(){return[s("span",[t._v(t._s(t.page.title)+" "),t.page.is_draft?s("span",{staticClass:"label label-success"},[t._v(t._s(t.trans("frontend.page_is_draft")))]):t._e()]),t._v(" "),s("span",{staticClass:"float-right pointer",on:{click:function(e){return t.$emit("close")}}},[t._v("x")])]}))],2):t._e(),t._v(" "),t.page.id?s("div",{staticClass:"modal-body"},[t._t("body",(function(){return[s("div",{staticClass:"m-t-20",domProps:{innerHTML:t._s(t.page.body)}}),t._v(" "),t.attachments.length?s("div",[s("ul",{staticClass:"m-t-10 upload-file-list"},t._l(t.attachments,(function(e){return s("li",{staticClass:"upload-file-list-item"},[s("a",{staticClass:"no-link-color",attrs:{href:"/frontend/page/"+t.page.uuid+"/attachment/"+e.uuid+"/download?token="+t.authToken}},[s("i",{class:["file-icon","fas","fa-lg",e.file_info.icon]}),t._v(" "),s("span",{staticClass:"upload-file-list-item-size"},[t._v(t._s(e.file_info.size))]),t._v(" "+t._s(e.user_filename))])])})),0)]):t._e(),t._v(" "),s("hr"),t._v(" "),s("p",[s("i",{staticClass:"far fa-clock"}),t._v(" "),s("small",[t._v(t._s(t.trans("general.created_at"))+" "+t._s(t._f("momentDateTime")(t.page.created_at)))]),t._v(" "),s("span",{staticClass:"pull-right"},[s("i",{staticClass:"far fa-clock"}),t._v(" "),s("small",[t._v(t._s(t.trans("general.updated_at"))+" "+t._s(t._f("momentDateTime")(t.page.updated_at)))])])])]}))],2):t._e()])])])])}),[],!1,null,null,null).exports,n={components:{pageForm:a.Z,pageDetail:r},data:function(){return{pages:{total:0,data:[]},filter:{sort_by:"title",order:"asc",title:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"title",translation:i18n.frontend.page_title}],showFilterPanel:!1,showCreatePanel:!1,help_topic:"",showUuid:"",showModal:!1}},mounted:function(){helper.frontendConfigurationAccessible()||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPages(),helper.showDemoNotification(["frontend"])},methods:{hasPermission:function(t){return helper.hasPermission(t)},showAction:function(t){this.showUuid=t.uuid,this.showModal=!0},getPages:function(t){var e=this,s=this.$loading.show();"number"!=typeof t&&(t=1);var a=helper.getFilterURL(this.filter);axios.get("/api/frontend/page?page="+t+a).then((function(t){e.pages=t.pages,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},editPage:function(t){this.$router.push("/frontend/page/"+t.uuid+"/edit")},confirmDelete:function(t){var e=this;return function(s){return e.deletePage(t)}},deletePage:function(t){var e=this,s=this.$loading.show();axios.delete("/api/frontend/page/"+t.uuid).then((function(t){toastr.success(t.message),e.getPages(),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)},print:function(){var t=this.$loading.show();axios.post("/api/frontend/page/print",{filter:this.filter}).then((function(e){var s=window.open("/print");t.hide(),s.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/frontend/page/pdf",{filter:this.filter}).then((function(s){e.hide(),window.open("/download/report/"+s+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getPages()},"filter.order":function(t){this.getPages()},"filter.page_length":function(t){this.getPages()}},computed:{authToken:function(){return helper.getAuthToken()}}};const l=(0,i.Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("frontend.page"))+" \n                    "),t.pages.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.pages.total,from:t.pages.from,to:t.pages.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[t.pages.total&&!t.showCreatePanel?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("frontend.add_new_page")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[s("i",{staticClass:"fas fa-filter"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),s("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),s("help-button",{on:{clicked:function(e){t.help_topic="frontend.page"}}})],1)])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("transition",{attrs:{name:"fade"}},[t.showFilterPanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("frontend.page_title")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.title,expression:"filter.title"}],staticClass:"form-control",attrs:{name:"title"},domProps:{value:t.filter.title},on:{input:function(e){e.target.composing||t.$set(t.filter,"title",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getPages}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.showCreatePanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("frontend.add_new_page")))]),t._v(" "),s("page-form",{on:{completed:t.getPages,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t.pages.total?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.trans("frontend.page_title")))]),t._v(" "),s("th",[t._v(t._s(t.trans("frontend.page_draft")))]),t._v(" "),s("th",{staticStyle:{width:"50%"}},[t._v(t._s(t.trans("frontend.page_body")))]),t._v(" "),s("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),s("tbody",t._l(t.pages.data,(function(e){return s("tr",[s("td",{domProps:{textContent:t._s(e.title)}}),t._v(" "),s("td",[e.is_draft?s("span",[s("i",{staticClass:"fas fa-check"})]):s("span",[s("i",{staticClass:"fas fa-times"})])]),t._v(" "),s("td",{domProps:{innerHTML:t._s(e.excerpt)}}),t._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("frontend.view_page"),expression:"trans('frontend.view_page')"}],staticClass:"btn btn-success btn-sm",on:{click:function(s){return s.preventDefault(),t.showAction(e)}}},[s("i",{staticClass:"fas fa-arrow-circle-right"})]),t._v(" "),s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("frontend.edit_page"),expression:"trans('frontend.edit_page')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return s.preventDefault(),t.editPage(e)}}},[s("i",{staticClass:"fas fa-edit"})]),t._v(" "),s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(page)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("frontend.delete_page"),expression:"trans('frontend.delete_page')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[s("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):t._e(),t._v(" "),t.pages.total?t._e():s("module-info",{attrs:{module:"frontend",title:"page_module_title",description:"page_module_description",icon:"list"}},[s("div",{attrs:{slot:"btn"},slot:"btn"},[t.showCreatePanel?t._e():s("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))])])]),t._v(" "),s("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.pages},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getPages}})],1)])],1),t._v(" "),t.showModal?s("page-detail",{attrs:{uuid:t.showUuid},on:{close:function(e){t.showModal=!1}}}):t._e(),t._v(" "),s("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=index.js.map?id=eca54b389a88fcc0183b