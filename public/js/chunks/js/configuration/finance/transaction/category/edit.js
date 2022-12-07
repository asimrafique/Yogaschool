(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[547],{89035:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i});var a=e(94015),r=e.n(a),o=e(23645),s=e.n(o)()(r());s.push([t.id,".loading-overlay.is-full-page{z-index:1060}","",{version:3,sources:["webpack://./resources/js/views/configuration/finance/transaction/category/form.vue"],names:[],mappings:"AA0HA,8BACA,YACA",sourcesContent:['<template>\n    <form @submit.prevent="proceed" @keydown="transactionCategoryForm.errors.clear($event.target.name)">\n        <div class="row">\n            <div class="col-12 col-sm-4">\n                <div class="form-group">\n                    <label for="">{{trans(\'finance.transaction_category_name\')}}</label>\n                    <input class="form-control" type="text" v-model="transactionCategoryForm.name" name="name" :placeholder="trans(\'finance.transaction_category_name\')">\n                    <show-error :form-name="transactionCategoryForm" prop-name="name"></show-error>\n                </div>\n            </div>\n            <div class="col-12 col-sm-4">\n                <div class="form-group">\n                    <label for="">{{trans(\'finance.transaction_category_type\')}}</label>\n                    <select v-model="transactionCategoryForm.type" class="col-12 custom-select" @change="transactionCategoryForm.errors.clear(\'type\')" name="type">\n                      <option value=null selected>{{trans(\'general.select_one\')}}</option>\n                      <option v-for="type in types" v-bind:value="type.value">\n                        {{ type.text }}\n                      </option>\n                    </select>\n                    <show-error :form-name="transactionCategoryForm" prop-name="type"></show-error>\n                </div>\n            </div>\n            <div class="col-12 col-sm-4">\n                <div class="form-group">\n                    <label for="">{{trans(\'finance.transaction_category_description\')}}</label>\n                    <input class="form-control" type="text" v-model="transactionCategoryForm.description" name="description" :placeholder="trans(\'finance.transaction_category_description\')">\n                    <show-error :form-name="transactionCategoryForm" prop-name="description"></show-error>\n                </div>\n            </div>\n        </div>\n\n        <div class="card-footer text-right">\n            <button v-if="!id" type="button" class="btn btn-danger waves-effect waves-light " @click="$emit(\'cancel\')">{{trans(\'general.cancel\')}}</button>\n            <router-link to="/configuration/finance/transaction/category" class="btn btn-danger waves-effect waves-light " v-show="id">{{trans(\'general.cancel\')}}</router-link>\n            <button type="submit" class="btn btn-info waves-effect waves-light">\n                <span v-if="id">{{trans(\'general.update\')}}</span>\n                <span v-else>{{trans(\'general.save\')}}</span>\n            </button>\n        </div>\n    </form>\n</template>\n\n\n<script>\n    export default {\n        data() {\n            return {\n                transactionCategoryForm: new Form({\n                    name : \'\',\n                    type: \'\',\n                    description : \'\'\n                }),\n                types: [\n                    {\n                        text: i18n.finance.income,\n                        value: \'income\'\n                    },\n                    {\n                        text: i18n.finance.expense,\n                        value: \'expense\'\n                    }\n                ]\n            };\n        },\n        props: [\'id\'],\n        mounted() {\n            if(this.id)\n                this.get();\n        },\n        methods: {\n            proceed(){\n                if(this.id)\n                    this.update();\n                else\n                    this.store();\n            },\n            store(){\n                let loader = this.$loading.show();\n                this.transactionCategoryForm.post(\'/api/finance/transaction/category\')\n                    .then(response => {\n                        toastr.success(response.message);\n                        this.$emit(\'completed\');\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    });\n            },\n            get(){\n                let loader = this.$loading.show();\n                axios.get(\'/api/finance/transaction/category/\'+this.id)\n                    .then(response => {\n                        this.transactionCategoryForm.name = response.name;\n                        this.transactionCategoryForm.type = response.type;\n                        this.transactionCategoryForm.description = response.description;\n                        loader.hide();\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                        this.$router.push(\'/configuration/finance/transaction/category\');\n                    });\n            },\n            update(){\n                let loader = this.$loading.show();\n                this.transactionCategoryForm.patch(\'/api/finance/transaction/category/\'+this.id)\n                    .then(response => {\n                        toastr.success(response.message);\n                        loader.hide();\n                        this.$router.push(\'/configuration/finance/transaction/category\');\n                    })\n                    .catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                    });\n            }\n        }\n    }\n<\/script>\n\n<style>\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n</style>\n'],sourceRoot:""}]);const i=s},40919:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>r});const a={components:{transactionCategoryForm:e(14518).Z},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const r=(0,e(51900).Z)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("finance.edit_transaction_category")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(n){return t.$router.push("/configuration/finance/transaction/category")}}},[e("i",{staticClass:"fas fa-list"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("finance.transaction_category")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("transaction-category-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null).exports},14518:(t,n,e)=>{"use strict";e.d(n,{Z:()=>c});const a={data:function(){return{transactionCategoryForm:new Form({name:"",type:"",description:""}),types:[{text:i18n.finance.income,value:"income"},{text:i18n.finance.expense,value:"expense"}]}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,n=this.$loading.show();this.transactionCategoryForm.post("/api/finance/transaction/category").then((function(e){toastr.success(e.message),t.$emit("completed"),n.hide()})).catch((function(t){n.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,n=this.$loading.show();axios.get("/api/finance/transaction/category/"+this.id).then((function(e){t.transactionCategoryForm.name=e.name,t.transactionCategoryForm.type=e.type,t.transactionCategoryForm.description=e.description,n.hide()})).catch((function(e){n.hide(),helper.showErrorMsg(e),t.$router.push("/configuration/finance/transaction/category")}))},update:function(){var t=this,n=this.$loading.show();this.transactionCategoryForm.patch("/api/finance/transaction/category/"+this.id).then((function(e){toastr.success(e.message),n.hide(),t.$router.push("/configuration/finance/transaction/category")})).catch((function(t){n.hide(),helper.showErrorMsg(t)}))}}};var r=e(93379),o=e.n(r),s=e(89035),i={insert:"head",singleton:!1};o()(s.Z,i);s.Z.locals;const c=(0,e(51900).Z)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{on:{submit:function(n){return n.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(n){return t.transactionCategoryForm.errors.clear(n.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.transaction_category_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transactionCategoryForm.name,expression:"transactionCategoryForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("finance.transaction_category_name")},domProps:{value:t.transactionCategoryForm.name},on:{input:function(n){n.target.composing||t.$set(t.transactionCategoryForm,"name",n.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.transactionCategoryForm,"prop-name":"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.transaction_category_type")))]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.transactionCategoryForm.type,expression:"transactionCategoryForm.type"}],staticClass:"col-12 custom-select",attrs:{name:"type"},on:{change:[function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.transactionCategoryForm,"type",n.target.multiple?e:e[0])},function(n){return t.transactionCategoryForm.errors.clear("type")}]}},[e("option",{attrs:{value:"null",selected:""}},[t._v(t._s(t.trans("general.select_one")))]),t._v(" "),t._l(t.types,(function(n){return e("option",{domProps:{value:n.value}},[t._v("\n                    "+t._s(n.text)+"\n                  ")])}))],2),t._v(" "),e("show-error",{attrs:{"form-name":t.transactionCategoryForm,"prop-name":"type"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.transaction_category_description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transactionCategoryForm.description,expression:"transactionCategoryForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("finance.transaction_category_description")},domProps:{value:t.transactionCategoryForm.description},on:{input:function(n){n.target.composing||t.$set(t.transactionCategoryForm,"description",n.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.transactionCategoryForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(n){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/finance/transaction/category"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=edit.js.map?id=cb8dab54ca4cc4a327b3