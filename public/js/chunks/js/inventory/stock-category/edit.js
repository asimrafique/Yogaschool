(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[4849],{80912:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>a});const o={components:{stockCategoryForm:e(93849).Z},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("edit-stock-category")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const a=(0,e(51900).Z)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("inventory.edit_stock_category")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(s){return t.$router.push("/inventory/stock/category")}}},[e("i",{staticClass:"fas fa-list"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("inventory.stock_category")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("stock-category-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null).exports},93849:(t,s,e)=>{"use strict";e.d(s,{Z:()=>a});const o={components:{},props:["id"],data:function(){return{stockCategoryForm:new Form({name:"",description:""})}},mounted:function(){this.id&&this.getStockCategory()},methods:{proceed:function(){this.id?this.updateStockCategory():this.storeStockCategory()},storeStockCategory:function(){var t=this,s=this.$loading.show();this.stockCategoryForm.post("/api/stock/category").then((function(e){toastr.success(e.message),t.$emit("completed"),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},getStockCategory:function(){var t=this,s=this.$loading.show();axios.get("/api/stock/category/"+this.id).then((function(e){t.stockCategoryForm.name=e.name,t.stockCategoryForm.description=e.description,s.hide()})).catch((function(e){s.hide(),t.$router.push("/inventory/stock/category")}))},updateStockCategory:function(){var t=this,s=this.$loading.show();this.stockCategoryForm.patch("/api/stock/category/"+this.id).then((function(e){toastr.success(e.message),t.$emit("completed"),s.hide(),t.$router.push("/inventory/stock/category")})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))}}};const a=(0,e(51900).Z)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("form",{on:{submit:function(s){return s.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(s){return t.stockCategoryForm.errors.clear(s.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("inventory.stock_category_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.stockCategoryForm.name,expression:"stockCategoryForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("inventory.stock_category_name")},domProps:{value:t.stockCategoryForm.name},on:{input:function(s){s.target.composing||t.$set(t.stockCategoryForm,"name",s.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.stockCategoryForm,"prop-name":"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("inventory.stock_category_description")))]),t._v(" "),e("autosize-textarea",{attrs:{rows:"2",name:"description",placeholder:t.trans("stock.stock_category_description")},model:{value:t.stockCategoryForm.description,callback:function(s){t.$set(t.stockCategoryForm,"description",s)},expression:"stockCategoryForm.description"}}),t._v(" "),e("show-error",{attrs:{"form-name":t.stockCategoryForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/inventory/stock/category"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(s){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=edit.js.map?id=c6239ad92fdf0f1ad391