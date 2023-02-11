"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[8467],{75040:(e,t,r)=>{r.d(t,{Z:()=>c});const i={components:{},props:["id"],data:function(){return{vehicleServiceRecordForm:new Form({amount:"",log:"",next_due_date:"",vehicle_id:"",vehicle_service_center_id:"",date_of_service:"",description:"",upload_token:""}),default_currency:helper.getConfig("default_currency"),vehicles:[],vehicle_service_centers:[],selected_vehicle:null,selected_vehicle_service_center:null,clearAttachment:!1}},mounted:function(){var e=this;this.vehicleServiceRecordForm.upload_token=this.$uuid.v4();var t=this.$loading.show();axios.get("/api/vehicle/service/record/pre-requisite").then((function(r){e.vehicles=r.vehicles,e.vehicle_service_centers=r.vehicle_service_centers,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)})),this.id&&this.getServiceRecord()},methods:{proceed:function(){this.id?this.updateServiceRecord():this.storeServiceRecord()},storeServiceRecord:function(){var e=this,t=this.$loading.show();this.vehicleServiceRecordForm.post("/api/vehicle/service/record").then((function(r){toastr.success(r.message),e.clearAttachment=!e.clearAttachment,e.$emit("completed"),e.vehicleServiceRecordForm.upload_token=e.$uuid.v4(),e.selected_vehicle=null,e.selected_vehicle_service_center=null,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getServiceRecord:function(){var e=this,t=this.$loading.show();axios.get("/api/vehicle/service/record/"+this.id).then((function(r){e.vehicleServiceRecordForm.amount=r.vehicle_service_record.amount,e.vehicleServiceRecordForm.log=r.vehicle_service_record.log,e.vehicleServiceRecordForm.vehicle_id=r.vehicle_service_record.vehicle_id,e.vehicleServiceRecordForm.vehicle_service_center_id=r.vehicle_service_record.vehicle_service_center_id,e.vehicleServiceRecordForm.date_of_service=r.vehicle_service_record.date_of_service,e.vehicleServiceRecordForm.next_due_date=r.vehicle_service_record.next_due_date,e.selected_vehicle={id:r.vehicle_service_record.vehicle_id,name:r.vehicle_service_record.vehicle.name},e.selected_vehicle_service_center=r.vehicle_service_record.vehicle_service_center_id?{id:r.vehicle_service_record.vehicle_service_center_id,name:r.vehicle_service_record.vehicle_service_center.name}:null,e.vehicleServiceRecordForm.description=r.vehicle_service_record.description,e.vehicleServiceRecordForm.upload_token=r.vehicle_service_record.upload_token,t.hide()})).catch((function(r){t.hide(),e.$router.push("/transport/vehicle/service/record")}))},updateServiceRecord:function(){var e=this,t=this.$loading.show();this.vehicleServiceRecordForm.patch("/api/vehicle/service/record/"+this.id).then((function(r){toastr.success(r.message),e.$emit("completed"),t.hide(),e.$router.push("/transport/vehicle/service/record")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onVehicleSelect:function(e){this.vehicleServiceRecordForm.vehicle_id=e.id},onVehicleServiceCenterSelect:function(e){this.vehicleServiceRecordForm.vehicle_service_center_id=e.id}}};const c=(0,r(51900).Z)(i,(function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)},keydown:function(t){return e.vehicleServiceRecordForm.errors.clear(t.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),t("v-select",{attrs:{label:"name",name:"vehicle_id",id:"vehicle_id",options:e.vehicles,placeholder:e.trans("general.select_one")},on:{select:e.onVehicleSelect,close:function(t){return e.vehicleServiceRecordForm.errors.clear("vehicle_id")},remove:function(t){e.vehicleServiceRecordForm.vehicle_id=""}},model:{value:e.selected_vehicle,callback:function(t){e.selected_vehicle=t},expression:"selected_vehicle"}},[e.vehicles.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                "+e._s(e.trans("general.no_option_found"))+"\n                            ")])]),e._v(" "),t("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"vehicle_id"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center")))]),e._v(" "),t("v-select",{attrs:{label:"name",name:"vehicle_service_center_id",id:"vehicle_service_center_id",options:e.vehicle_service_centers,placeholder:e.trans("general.select_one")},on:{select:e.onVehicleServiceCenterSelect,close:function(t){return e.vehicleServiceRecordForm.errors.clear("vehicle_service_center_id")},remove:function(t){e.vehicleServiceRecordForm.vehicle_service_center_id=""}},model:{value:e.selected_vehicle_service_center,callback:function(t){e.selected_vehicle_service_center=t},expression:"selected_vehicle_service_center"}},[e.vehicles.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                "+e._s(e.trans("general.no_option_found"))+"\n                            ")])]),e._v(" "),t("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"vehicle_service_center_id"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.date_of_service")))]),e._v(" "),t("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("transport.date_of_service")},on:{selected:function(t){return e.vehicleServiceRecordForm.errors.clear("date_of_service")}},model:{value:e.vehicleServiceRecordForm.date_of_service,callback:function(t){e.$set(e.vehicleServiceRecordForm,"date_of_service",t)},expression:"vehicleServiceRecordForm.date_of_service"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"date_of_service"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_record_amount")))]),e._v(" "),t("currency-input",{attrs:{position:e.default_currency.position,symbol:e.default_currency.symbol,name:"amount",placeholder:e.trans("transport.vehicle_service_record_amount")},nativeOn:{input:function(t){return e.vehicleServiceRecordForm.errors.clear("amount")}},model:{value:e.vehicleServiceRecordForm.amount,callback:function(t){e.$set(e.vehicleServiceRecordForm,"amount",t)},expression:"vehicleServiceRecordForm.amount"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"amount"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_log_log")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleServiceRecordForm.log,expression:"vehicleServiceRecordForm.log"}],staticClass:"form-control",attrs:{type:"text",name:"log",placeholder:e.trans("transport.vehicle_log_log")},domProps:{value:e.vehicleServiceRecordForm.log},on:{input:function(t){t.target.composing||e.$set(e.vehicleServiceRecordForm,"log",t.target.value)}}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"log"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_record_next_due_date")))]),e._v(" "),t("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("transport.vehicle_service_record_next_due_date")},on:{selected:function(t){return e.vehicleServiceRecordForm.errors.clear("vehicle_service_record_next_due_date")}},model:{value:e.vehicleServiceRecordForm.next_due_date,callback:function(t){e.$set(e.vehicleServiceRecordForm,"next_due_date",t)},expression:"vehicleServiceRecordForm.next_due_date"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"next_due_date"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_record_description")))]),e._v(" "),t("autosize-textarea",{attrs:{rows:"2",name:"description",placeholder:e.trans("vehicle.vehicle_service_record_description")},model:{value:e.vehicleServiceRecordForm.description,callback:function(t){e.$set(e.vehicleServiceRecordForm,"description",t)},expression:"vehicleServiceRecordForm.description"}}),e._v(" "),t("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"description"}})],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("label"),e._v(" "),t("div",{staticClass:"form-group"},[t("file-upload-input",{attrs:{"button-text":e.trans("general.upload_document"),token:e.vehicleServiceRecordForm.upload_token,module:"vehicle_service_record","clear-file":e.clearAttachment,"module-id":e.id}})],1)])]),e._v(" "),t("div",{staticClass:"card-footer text-right"},[t("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/transport/vehicle/service/record"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():t("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?t("span",[e._v(e._s(e.trans("general.update")))]):t("span",[e._v(e._s(e.trans("general.save")))])])],1)])])}),[],!1,null,null,null).exports},8127:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});const i={components:{vehicleServiceRecordForm:r(75040).Z},data:function(){return{vehicle_service_records:{total:0,data:[]},filter:{sort_by:"date_of_service",order:"desc",vehicle_id:[],vehicle_service_center_id:[],date_of_service_start_date:moment().startOf("month").format("YYYY-MM-DD"),date_of_service_end_date:moment().endOf("month").format("YYYY-MM-DD"),page_length:helper.getConfig("page_length")},orderByOptions:[{value:"vehicle_id",translation:i18n.transport.vehicle},{value:"date_of_service",translation:i18n.transport.date_of_service},{value:"amount",translation:i18n.transport.vehicle_service_record_amount},{value:"next_due_date",translation:i18n.transport.vehicle_service_record_next_due_date},{value:"created_at",translation:i18n.general.created_at}],vehicles:[],vehicle_service_centers:[],selected_vehicle:null,selected_vehicle_service_center:null,showCreatePanel:!1,showFilterPanel:!1,viewId:"",vehicle_service_record:{},attachments:[],total_amount:0,showDetailModal:!1,help_topic:""}},mounted:function(){helper.hasPermission("list-vehicle-service-record")&&helper.hasPermission("create-vehicle-service-record")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),helper.hasPermission("list-vehicle-service-record")&&this.getVehicleServiceRecords(),helper.showDemoNotification(["transport"])},methods:{getConfig:function(e){return helper.getConfig(e)},hasPermission:function(e){return helper.hasPermission(e)},getVehicleServiceRecords:function(e){var t=this,r=this.$loading.show();"number"!=typeof e&&(e=1),this.filter.date_of_service_start_date=helper.toDate(this.filter.date_of_service_start_date),this.filter.date_of_service_end_date=helper.toDate(this.filter.date_of_service_end_date);var i=helper.getFilterURL(this.filter);axios.get("/api/vehicle/service/record?page="+e+i).then((function(e){t.vehicle_service_records=e.vehicle_service_records,t.vehicles=e.filters.vehicles,t.vehicle_service_centers=e.filters.vehicle_service_centers,t.total_amount=e.total_amount,r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},getVehicleServiceRecord:function(){var e=this,t=this.$loading.show();axios.get("/api/vehicle/service/record/"+this.viewId).then((function(r){e.vehicle_service_record=r.vehicle_service_record,e.attachments=r.attachments,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},editVehicleServiceRecord:function(e){this.$router.push("/transport/vehicle/service/record/"+e.id+"/edit")},confirmDelete:function(e){var t=this;return function(r){return t.deleteVehicleServiceRecord(e)}},deleteVehicleServiceRecord:function(e){var t=this,r=this.$loading.show();axios.delete("/api/vehicle/service/record/"+e.id).then((function(e){toastr.success(e.message),t.getVehicleServiceRecords(),r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},print:function(){var e=this.$loading.show();axios.post("/api/vehicle/service/record/print",{filter:this.filter}).then((function(t){var r=window.open("/print");e.hide(),r.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/vehicle/service/record/pdf",{filter:this.filter}).then((function(r){t.hide(),window.open("/download/report/"+r+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onVehicleSelect:function(e){this.filter.vehicle_id.push(e.id)},onVehicleRemove:function(e){this.filter.vehicle_id.splice(this.filter.vehicle_id.indexOf(e.id),1)},onVehicleServiceCenterSelect:function(e){this.filter.vehicle_service_center_id.push(e.id)},onVehicleServiceCenterRemove:function(e){this.filter.vehicle_service_center_id.splice(this.filter.vehicle_service_center_id.indexOf(e.id),1)},showDetailAction:function(e){this.viewId=e.id,this.showDetailModal=!0},formatCurrency:function(e){return helper.formatCurrency(e)},formatNumber:function(e,t){return helper.formatNumber(e,t)}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getVehicleServiceRecords()},"filter.order":function(e){this.getVehicleServiceRecords()},"filter.page_length":function(e){this.getVehicleServiceRecords()},viewId:function(e){e?this.getVehicleServiceRecord():(this.vehicle_service_record={},this.attachments=[])}},computed:{authToken:function(){return helper.getAuthToken()}}};const c=(0,r(51900).Z)(i,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("transport.vehicle_service_record"))+" \n                    "),e.vehicle_service_records.total?t("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.vehicle_service_records.total,from:e.vehicle_service_records.from,to:e.vehicle_service_records.to})))]):t("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[e.vehicle_service_records.total&&!e.showCreatePanel&&e.hasPermission("create-vehicle-service-record")?t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[t("i",{staticClass:"fas fa-plus"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("transport.add_new_vehicle_service_record")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[t("i",{staticClass:"fas fa-filter"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),t("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),t("div",{staticClass:"btn-group"},[t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),t("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[t("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),t("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[t("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),t("help-button",{on:{clicked:function(t){e.help_topic="transport.vehicle.service-record"}}})],1)])])]),e._v(" "),t("div",{staticClass:"container-fluid"},[t("transition",{attrs:{name:"fade"}},[e.showFilterPanel?t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body"},[t("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),t("v-select",{attrs:{label:"name","track-by":"id",name:"vehicle_id",id:"vehicle_id",options:e.vehicles,placeholder:e.trans("transport.select_vehicle"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_vehicle},on:{select:e.onVehicleSelect,remove:e.onVehicleRemove},model:{value:e.selected_vehicle,callback:function(t){e.selected_vehicle=t},expression:"selected_vehicle"}},[e.vehicles.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center")))]),e._v(" "),t("v-select",{attrs:{label:"name","track-by":"id",name:"vehicle_service_center_id",id:"vehicle_service_center_id",options:e.vehicle_service_centers,placeholder:e.trans("transport.select_vehicle_service_center"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_vehicle_service_center},on:{select:e.onVehicleServiceCenterSelect,remove:e.onVehicleServiceCenterRemove},model:{value:e.selected_vehicle_service_center,callback:function(t){e.selected_vehicle_service_center=t},expression:"selected_vehicle_service_center"}},[e.vehicle_service_centers.length?e._e():t("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("date-range-picker",{attrs:{"start-date":e.filter.date_of_service_start_date,"end-date":e.filter.date_of_service_end_date,label:e.trans("transport.date_of_service_between")},on:{"update:startDate":function(t){return e.$set(e.filter,"date_of_service_start_date",t)},"update:start-date":function(t){return e.$set(e.filter,"date_of_service_start_date",t)},"update:endDate":function(t){return e.$set(e.filter,"date_of_service_end_date",t)},"update:end-date":function(t){return e.$set(e.filter,"date_of_service_end_date",t)}}})],1)]),e._v(" "),t("div",{staticClass:"card-footer text-right"},[t("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getVehicleServiceRecords}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),e.hasPermission("create-vehicle-service-record")?t("transition",{attrs:{name:"fade"}},[e.showCreatePanel?t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body"},[t("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("transport.add_new_vehicle_service_record")))]),e._v(" "),t("vehicle-service-record-form",{on:{completed:e.getVehicleServiceRecords,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]):e._e(),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[e.vehicle_service_records.total?t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-sm"},[t("thead",[t("tr",[t("th",[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.vehicle_service_center")))]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.vehicle_service_record_amount")))]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.vehicle_log_log")))]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.date_of_service")))]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.vehicle_service_record_next_due_date")))]),e._v(" "),t("th",[e._v(e._s(e.trans("transport.vehicle_service_record_description")))]),e._v(" "),t("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),t("tbody",e._l(e.vehicle_service_records.data,(function(r){return t("tr",[t("td",[e._v(e._s(r.vehicle.name+" ("+r.vehicle.registration_number+")"))]),e._v(" "),t("td",[r.vehicle_service_center?t("span",[e._v(e._s(r.vehicle_service_center.name))]):t("span",[e._v("-")])]),e._v(" "),t("td",[e._v(e._s(e.formatCurrency(r.amount)))]),e._v(" "),t("td",[e._v(e._s(r.log))]),e._v(" "),t("td",[e._v(e._s(e._f("moment")(r.date_of_service)))]),e._v(" "),t("td",[e._v(e._s(e._f("moment")(r.next_due_date)))]),e._v(" "),t("td",[e._v(e._s(r.description))]),e._v(" "),t("td",{staticClass:"table-option"},[t("div",{staticClass:"btn-group"},[t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("transport.view_vehicle_service_record"),expression:"trans('transport.view_vehicle_service_record')"}],staticClass:"btn btn-success btn-sm",on:{click:[function(t){return t.preventDefault(),e.showDetailAction(r)},function(t){e.showDetailModal=!0}]}},[t("i",{staticClass:"fas fa-arrow-circle-right"})]),e._v(" "),t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("transport.edit_vehicle_service_record"),expression:"trans('transport.edit_vehicle_service_record')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){return t.preventDefault(),e.editVehicleServiceRecord(r)}}},[t("i",{staticClass:"fas fa-edit"})]),e._v(" "),t("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(r)},expression:"{ok: confirmDelete(vehicle_service_record)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("transport.delete_vehicle_service_record"),expression:"trans('transport.delete_vehicle_service_record')"}],key:r.id,staticClass:"btn btn-danger btn-sm"},[t("i",{staticClass:"fas fa-trash"})])])])])})),0),e._v(" "),t("tfoot",[t("tr",[t("td",{attrs:{colspan:"2"}},[e._v(e._s(e.trans("general.total")))]),e._v(" "),t("td",[e._v(e._s(e.formatCurrency(e.total_amount)))]),e._v(" "),t("td",{attrs:{colspan:"5"}})])])])]):e._e(),e._v(" "),e.vehicle_service_records.total?e._e():t("module-info",{attrs:{module:"transport",title:"vehicle_service_record_module_title",description:"vehicle_service_record_module_description",icon:"list"}},[t("div",{attrs:{slot:"btn"},slot:"btn"},[!e.showCreatePanel&&e.hasPermission("create-vehicle-service-record")?t("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[t("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))]):e._e()])]),e._v(" "),t("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.vehicle_service_record},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getVehicleServiceRecords}})],1)])],1),e._v(" "),e.showDetailModal?t("transition",{attrs:{name:"modal"}},[t("div",{staticClass:"modal-mask"},[t("div",{staticClass:"modal-wrapper"},[t("div",{staticClass:"modal-container modal-lg"},[t("div",{staticClass:"modal-header"},[e._t("header",(function(){return[e._v("\n                            "+e._s(e.vehicle_service_record.vehicle?e.vehicle_service_record.vehicle.name+" ("+e.vehicle_service_record.vehicle.registration_number+")":"")+" "),e.vehicle_service_record.vehicle_service_center?t("span",[e._v(e._s(e.trans("transport.vehicle_service_center"))+": "+e._s(e.vehicle_service_record.vehicle_service_center.name))]):e._e(),e._v(" "),t("span",{staticClass:"float-right pointer",on:{click:function(t){e.showDetailModal=!1}}},[e._v("x")])]}))],2),e._v(" "),t("div",{staticClass:"modal-body"},[e._t("body",(function(){return[t("div",[e._v("\n                                "+e._s(e.trans("transport.date_of_service"))+": "+e._s(e._f("moment")(e.vehicle_service_record.date_of_service))+" "),t("br"),e._v("\n                                "+e._s(e.trans("transport.vehicle_service_record_next_due_date"))+": "+e._s(e._f("moment")(e.vehicle_service_record.next_due_date))+"\n                            ")]),e._v(" "),t("div",{staticClass:"m-t-20",domProps:{innerHTML:e._s(e.vehicle_service_record.description)}}),e._v(" "),e.attachments.length?t("div",[t("ul",{staticClass:"m-t-10 upload-file-list"},e._l(e.attachments,(function(r){return t("li",{staticClass:"upload-file-list-item"},[t("a",{staticClass:"no-link-color",attrs:{href:"/transport/vehicle/service/record/".concat(e.vehicle_service_record.id,"/attachment/").concat(r.uuid,"/download?token=").concat(e.authToken)}},[t("i",{class:["file-icon","fas","fa-lg",r.file_info.icon]}),e._v(" "),t("span",{staticClass:"upload-file-list-item-size"},[e._v(e._s(r.file_info.size))]),e._v(" "+e._s(r.user_filename))])])})),0)]):e._e(),e._v(" "),t("hr"),e._v(" "),t("p",[t("i",{staticClass:"far fa-clock"}),e._v(" "),t("small",[e._v(e._s(e.trans("general.created_at"))+" "+e._s(e._f("momentDateTime")(e.vehicle_service_record.created_at)))]),e._v(" "),t("span",{staticClass:"pull-right"},[t("i",{staticClass:"far fa-clock"}),e._v(" "),t("small",[e._v(e._s(e.trans("general.updated_at"))+" "+e._s(e._f("momentDateTime")(e.vehicle_service_record.updated_at)))])])]),e._v(" "),t("div",{staticClass:"clearfix"})]}))],2)])])])]):e._e(),e._v(" "),t("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null).exports}}]);