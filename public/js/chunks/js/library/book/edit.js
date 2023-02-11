"use strict";(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[5233],{22115:(o,e,t)=>{t.r(e),t.d(e,{default:()=>s});const r={components:{bookForm:t(68319).Z},data:function(){return{uuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("edit-book")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const s=(0,t(51900).Z)(r,(function(){var o=this,e=o._self._c;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[o._v(o._s(o.trans("library.edit_book")))])]),o._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return o.$router.push("/library/book")}}},[e("i",{staticClass:"fas fa-list"}),o._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[o._v(o._s(o.trans("library.book")))])])])])])]),o._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("book-form",{attrs:{uuid:o.uuid}})],1)])])])}),[],!1,null,null,null).exports},68319:(o,e,t)=>{function r(o){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r(o)}function s(o,e,t){return(e=function(o){var e=function(o,e){if("object"!==r(o)||null===o)return o;var t=o[Symbol.toPrimitive];if(void 0!==t){var s=t.call(o,e||"default");if("object"!==r(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(o)}(o,"string");return"symbol"===r(e)?e:String(e)}(e))in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}t.d(e,{Z:()=>i});const a={components:{},data:function(){return{bookForm:new Form({title:"",isbn_number:"",book_author_id:"",book_language_id:"",book_topic_id:"",book_publisher_id:"",edition:"",page:"",price:"",type:"",summary:"",description:""}),book_authors:[],selected_book_author:null,book_languages:[],selected_book_language:null,book_topics:[],selected_book_topic:null,book_publishers:[],selected_book_publisher:null,default_currency:helper.getConfig("default_currency")}},props:["uuid"],mounted:function(){helper.hasPermission("create-book")||helper.hasPermission("edit-book")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid&&this.get(),this.getPreRequisite()},methods:{proceed:function(){this.uuid?this.update():this.store()},getPreRequisite:function(){var o=this,e=this.$loading.show();axios.get("/api/book/pre-requisite").then((function(t){o.book_authors=t.book_authors,o.book_languages=t.book_languages,o.book_topics=t.book_topics,o.book_publishers=t.book_publishers,e.hide()})).catch((function(o){e.hide(),helper.showErrorMsg(o)}))},store:function(){var o=this,e=this.$loading.show();this.bookForm.post("/api/book").then((function(t){toastr.success(t.message),o.selected_book_author=null,o.selected_book_language=null,o.selected_book_topic=null,o.selected_book_publisher=null,o.$emit("completed"),e.hide()})).catch((function(o){e.hide(),helper.showErrorMsg(o)}))},get:function(){var o=this,e=this.$loading.show();axios.get("/api/book/"+this.uuid).then((function(t){o.bookForm.title=t.book.title,o.bookForm.isbn_number=t.book.isbn_number,o.bookForm.edition=t.book.edition,o.bookForm.price=t.book.price,o.bookForm.page=t.book.page,o.bookForm.type=t.book.type,o.bookForm.summary=t.book.summary,o.bookForm.description=t.book.description,o.bookForm.book_author_id=t.book.book_author_id,o.bookForm.book_language_id=t.book.book_language_id,o.bookForm.book_topic_id=t.book.book_topic_id,o.bookForm.book_publisher_id=t.book.book_publisher_id,o.selected_book_author=t.selected_book_author,o.selected_book_language=t.selected_book_language,o.selected_book_topic=t.selected_book_topic,o.selected_book_publisher=t.selected_book_publisher,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t),o.$router.push("/library/book")}))},update:function(){var o=this,e=this.$loading.show();this.bookForm.patch("/api/book/"+this.uuid).then((function(t){toastr.success(t.message),e.hide(),o.$router.push("/library/book")})).catch((function(o){e.hide(),helper.showErrorMsg(o)}))},onBookAuthorSelect:function(o){this.bookForm.book_author_id=o.id},onBookLanguageSelect:function(o){this.bookForm.book_language_id=o.id},onBookTopicSelect:function(o){this.bookForm.book_topic_id=o.id},onBookPublisherSelect:function(o){this.bookForm.book_publisher_id=o.id}}};const i=(0,t(51900).Z)(a,(function(){var o=this,e=o._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),o.proceed.apply(null,arguments)},keydown:function(e){return o.bookForm.errors.clear(e.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_title")))]),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.bookForm.title,expression:"bookForm.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:o.trans("library.book_title")},domProps:{value:o.bookForm.title},on:{input:function(e){e.target.composing||o.$set(o.bookForm,"title",e.target.value)}}}),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"title"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_author")))]),o._v(" "),e("v-select",{attrs:{label:"name",name:"book_author_id",id:"book_author_id",options:o.book_authors,placeholder:o.trans("library.select_book_author")},on:{select:o.onBookAuthorSelect,close:function(e){return o.bookForm.errors.clear("book_author_id")},remove:function(e){o.bookForm.book_author_id=""}},model:{value:o.selected_book_author,callback:function(e){o.selected_book_author=e},expression:"selected_book_author"}},[o.book_authors.length?o._e():e("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[o._v("\n                        "+o._s(o.trans("general.no_option_found"))+"\n                    ")])]),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"book_author_id"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_language")))]),o._v(" "),e("v-select",{attrs:{label:"name",name:"book_language_id",id:"book_language_id",options:o.book_languages,placeholder:o.trans("library.select_book_language")},on:{select:o.onBookLanguageSelect,close:function(e){return o.bookForm.errors.clear("book_language_id")},remove:function(e){o.bookForm.book_language_id=""}},model:{value:o.selected_book_language,callback:function(e){o.selected_book_language=e},expression:"selected_book_language"}},[o.book_languages.length?o._e():e("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[o._v("\n                        "+o._s(o.trans("general.no_option_found"))+"\n                    ")])]),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"book_language_id"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_topic")))]),o._v(" "),e("v-select",{attrs:{label:"name",name:"book_topic_id",id:"book_topic_id",options:o.book_topics,placeholder:o.trans("library.select_book_topic")},on:{select:o.onBookTopicSelect,close:function(e){return o.bookForm.errors.clear("book_topic_id")},remove:function(e){o.bookForm.book_topic_id=""}},model:{value:o.selected_book_topic,callback:function(e){o.selected_book_topic=e},expression:"selected_book_topic"}},[o.book_topics.length?o._e():e("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[o._v("\n                        "+o._s(o.trans("general.no_option_found"))+"\n                    ")])]),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"book_topic_id"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_publisher")))]),o._v(" "),e("v-select",{attrs:{label:"name",name:"book_publisher_id",id:"book_publisher_id",options:o.book_publishers,placeholder:o.trans("library.select_book_publisher")},on:{select:o.onBookPublisherSelect,close:function(e){return o.bookForm.errors.clear("book_publisher_id")},remove:function(e){o.bookForm.book_publisher_id=""}},model:{value:o.selected_book_publisher,callback:function(e){o.selected_book_publisher=e},expression:"selected_book_publisher"}},[o.book_publishers.length?o._e():e("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[o._v("\n                        "+o._s(o.trans("general.no_option_found"))+"\n                    ")])]),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"book_publisher_id"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_type")))]),o._v(" "),e("div",{staticClass:"radio radio-success"},[e("input",{directives:[{name:"model",rawName:"v-model",value:o.bookForm.type,expression:"bookForm.type"}],attrs:{type:"radio",value:"reference",id:"type_reference",name:"type"},domProps:s({checked:"reference"==o.bookForm.type},"checked",o._q(o.bookForm.type,"reference")),on:{click:function(e){return o.bookForm.errors.clear("type")},change:function(e){return o.$set(o.bookForm,"type","reference")}}}),o._v(" "),e("label",{attrs:{for:"type_reference"}},[o._v(o._s(o.trans("library.book_type_reference")))])]),o._v(" "),e("div",{staticClass:"radio radio-success"},[e("input",{directives:[{name:"model",rawName:"v-model",value:o.bookForm.type,expression:"bookForm.type"}],attrs:{type:"radio",value:"text",id:"type_text",name:"type"},domProps:s({checked:"text"==o.bookForm.type},"checked",o._q(o.bookForm.type,"text")),on:{click:function(e){return o.bookForm.errors.clear("type")},change:function(e){return o.$set(o.bookForm,"type","text")}}}),o._v(" "),e("label",{attrs:{for:"type_text"}},[o._v(o._s(o.trans("library.book_type_text")))])]),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"type"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_isbn_number")))]),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.bookForm.isbn_number,expression:"bookForm.isbn_number"}],staticClass:"form-control",attrs:{type:"text",name:"isbn_number",placeholder:o.trans("library.book_isbn_number")},domProps:{value:o.bookForm.isbn_number},on:{input:function(e){e.target.composing||o.$set(o.bookForm,"isbn_number",e.target.value)}}}),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"isbn_number"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_edition")))]),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.bookForm.edition,expression:"bookForm.edition"}],staticClass:"form-control",attrs:{type:"text",name:"edition",placeholder:o.trans("library.book_edition")},domProps:{value:o.bookForm.edition},on:{input:function(e){e.target.composing||o.$set(o.bookForm,"edition",e.target.value)}}}),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"edition"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_page")))]),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.bookForm.page,expression:"bookForm.page"}],staticClass:"form-control",attrs:{type:"text",name:"page",placeholder:o.trans("library.book_page")},domProps:{value:o.bookForm.page},on:{input:function(e){e.target.composing||o.$set(o.bookForm,"page",e.target.value)}}}),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"page"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_price")))]),o._v(" "),e("currency-input",{attrs:{position:o.default_currency.position,symbol:o.default_currency.symbol,name:"price",placeholder:o.trans("library.book_price")},nativeOn:{input:function(e){return o.bookForm.errors.clear("price")}},model:{value:o.bookForm.price,callback:function(e){o.$set(o.bookForm,"price",e)},expression:"bookForm.price"}}),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"price"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_summary")))]),o._v(" "),e("autosize-textarea",{attrs:{rows:"2",name:"summary",placeholder:o.trans("library.book_summary")},model:{value:o.bookForm.summary,callback:function(e){o.$set(o.bookForm,"summary",e)},expression:"bookForm.summary"}}),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"summary"}})],1)]),o._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[o._v(o._s(o.trans("library.book_description")))]),o._v(" "),e("autosize-textarea",{attrs:{rows:"2",name:"description",placeholder:o.trans("library.book_description")},model:{value:o.bookForm.description,callback:function(e){o.$set(o.bookForm,"description",e)},expression:"bookForm.description"}}),o._v(" "),e("show-error",{attrs:{"form-name":o.bookForm,"prop-name":"description"}})],1)])]),o._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:o.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light",attrs:{to:"/library/book"}},[o._v(o._s(o.trans("general.cancel")))]),o._v(" "),o.uuid?o._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light",attrs:{type:"button"},on:{click:function(e){return o.$emit("cancel")}}},[o._v(o._s(o.trans("general.cancel")))]),o._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[o.uuid?e("span",[o._v(o._s(o.trans("general.update")))]):e("span",[o._v(o._s(o.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports}}]);