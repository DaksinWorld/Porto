(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{328:function(t,e,r){"use strict";r(50);var o={methods:{tabClicked:function(t){if("tab"===t.target.getAttribute("data-toggle")){t.preventDefault();var e=t.target;e.closest(".nav").querySelector(".nav-link.active").classList.remove("active"),e.classList.add("active");var r=document.querySelector(e.getAttribute("href"));r.parentNode.querySelector(".tab-pane.show").classList.remove("show"),r.classList.add("show"),setTimeout((function(){r.parentNode.querySelector(".tab-pane.active").classList.remove("active"),r.classList.add("active")}),150)}}}},c=r(9),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{click:function(e){return t.tabClicked(e)}}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},332:function(t,e,r){"use strict";r(71),r(84);var o={components:{PvTabs:r(328).a},props:{product:Object},data:function(){return{isCustom:!1,isFullwidth:!1,isAddition:!1}},watch:{$route:function(){this.getFlag()}},created:function(){this.getFlag()},methods:{getFlag:function(){"custom-tab"===this.$route.params.type&&(this.isCustom=!0),this.$route.path.includes("fullwidth")&&(this.isFullwidth=!0),this.$route.path.includes("sticky-info")&&(this.isCustom=!0),this.$route.path.includes("sticky-both")&&(this.isAddition=!0)},setRating:function(t){t.currentTarget.parentNode.querySelector(".active")&&t.currentTarget.parentNode.querySelector(".active").classList.remove("active"),t.currentTarget.classList.add("active")}}},c=r(9),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pv-tabs",{staticClass:"product-single-tabs"},[r("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{id:"product-tab-desc","data-toggle":"tab",href:"#product-desc-content",role:"tab","aria-controls":"product-desc-content","aria-selected":"true"}},[t._v("Description")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{id:"product-tab-size","data-toggle":"tab",href:"#product-size-content",role:"tab","aria-controls":"product-size-content","aria-selected":"true"}},[t._v("Size Guide")])]),t._v(" "),t.isCustom||t.isFullwidth||t.isAddition?t._e():r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{id:"product-tab-tags","data-toggle":"tab",href:"#product-tags-content",role:"tab","aria-controls":"product-tags-content","aria-selected":"false"}},[t._v("Additional Information")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{id:"product-tab-reviews","data-toggle":"tab",href:"#product-reviews-content",role:"tab","aria-controls":"product-reviews-content","aria-selected":"false"}},[t._v("Reviews ("+t._s(t.product.reviews)+")")])]),t._v(" "),t.isCustom?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{id:"product-tab-custom","data-toggle":"tab",href:"#product-custom-content",role:"tab","aria-controls":"product-custom-content","aria-selected":"false"}},[t._v("Custom Tab")])]):t._e()]),t._v(" "),r("div",{staticClass:"tab-content"},[r("div",{staticClass:"tab-pane fade show active",attrs:{id:"product-desc-content",role:"tabpanel","aria-labelledby":"product-tab-desc"}},[t.isFullwidth?r("div",{staticClass:"product-desc-content"},[r("p",{staticClass:"mb-1"},[t._v("\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n\t\t\t\t\tdo eiusmod\n\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n\t\t\t\t\tveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n\t\t\t\t\tcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n\t\t\t\t\tvelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n\t\t\t\t\toccaecat.\n\t\t\t\t")]),t._v(" "),r("img",{staticClass:"float-right",attrs:{alt:"image desc",width:"275",height:"276",src:"./images/products/product-img.jpg"}}),t._v(" "),r("p",[t._v("\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n\t\t\t\t\tveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n\t\t\t\t\tcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n\t\t\t\t\tvelit esse cillum dolore.\n\t\t\t\t")]),t._v(" "),r("ul",[r("li",[t._v("Any Product types that You want - Simple, Configurable")]),t._v(" "),r("li",[t._v("Downloadable/Digital Products, Virtual Products")]),t._v(" "),r("li",[t._v("Inventory Management with Backordered items")])]),t._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-sm-6 col-xl-4"},[r("div",{staticClass:"feature-box feature-box-simple text-center"},[r("div",{staticClass:"feature-icon"},[r("i",{staticClass:"fa fa-star"})]),t._v(" "),r("div",{staticClass:"feature-box-content"},[r("h3",[t._v("Dedicated Service")]),t._v(" "),r("p",[t._v("\n\t\t\t\t\t\t\t\t\tConsult our specialists for help with an order,\n\t\t\t\t\t\t\t\t\tcustomization, or design advice\n\t\t\t\t\t\t\t\t")])])])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-xl-4"},[r("div",{staticClass:"feature-box feature-box-simple text-center"},[r("div",{staticClass:"feature-icon"},[r("i",{staticClass:"fa fa-reply"})]),t._v(" "),r("div",{staticClass:"feature-box-content"},[r("h3",[t._v("Free Returns")]),t._v(" "),r("p",[t._v("\n\t\t\t\t\t\t\t\t\tConsult our specialists for help with an order,\n\t\t\t\t\t\t\t\t\tcustomization, or design advice\n\t\t\t\t\t\t\t\t")])])])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-xl-4"},[r("div",{staticClass:"feature-box feature-box-simple text-center"},[r("div",{staticClass:"feature-icon"},[r("i",{staticClass:"fa fa-paper-plane"})]),t._v(" "),r("div",{staticClass:"feature-box-content"},[r("h3",[t._v("International Shipping")]),t._v(" "),r("p",[t._v("\n\t\t\t\t\t\t\t\t\tConsult our specialists for help with an order,\n\t\t\t\t\t\t\t\t\tcustomization, or design advice\n\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),r("p",[t._v("\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n\t\t\t\t\tveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n\t\t\t\t\tcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n\t\t\t\t\tvelit esse cillum dolore. Lorem ipsum dolor sit amet, consectetur\n\t\t\t\t\tadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n\t\t\t\t\tmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n\t\t\t\t\tlaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n\t\t\t\t\tin reprehenderit in voluptate velit esse cillum dolore.Duis aute irure\n\t\t\t\t\tdolor in reprehenderit in voluptate velit esse cillum dolore.\n\t\t\t\t")])]):r("div",{staticClass:"product-desc-content"},[r("p",[t._v("\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n\t\t\t\t\tincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum\n\t\t\t\t\tconsectetur sed do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n\t\t\t\t\tcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.\n\t\t\t\t")]),t._v(" "),r("ul",[r("li",[t._v("\n\t\t\t\t\t\tAny Product types that You want - Simple,\n\t\t\t\t\t\tConfigurable\n\t\t\t\t\t")]),t._v(" "),r("li",[t._v("\n\t\t\t\t\t\tDownloadable/Digital Products, Virtual\n\t\t\t\t\t\tProducts\n\t\t\t\t\t")]),t._v(" "),r("li",[t._v("Inventory Management with Backordered items")])]),t._v(" "),r("p",[t._v("\n\t\t\t\t\tSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n\t\t\t\t\tveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\tconsequat.\n\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"tab-pane fade",attrs:{id:"product-size-content",role:"tabpanel","aria-labelledby":"product-tab-size"}},[r("div",{staticClass:"product-size-content"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("img",{staticClass:"w-auto bg-transparent",attrs:{src:"./images/products/body-shape.png",width:"217",height:"398",alt:"body shape"}})]),t._v(" "),r("div",{staticClass:"col-md-8"},[r("table",{staticClass:"table table-size"},[r("thead",[r("tr",[r("th",[t._v("SIZE")]),t._v(" "),r("th",[t._v("CHEST(in.)")]),t._v(" "),r("th",[t._v("WAIST(in.)")]),t._v(" "),r("th",[t._v("HIPS(in.)")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("XS")]),t._v(" "),r("td",[t._v("34-36")]),t._v(" "),r("td",[t._v("27-29")]),t._v(" "),r("td",[t._v("34.5-36.5")])]),t._v(" "),r("tr",[r("td",[t._v("S")]),t._v(" "),r("td",[t._v("36-38")]),t._v(" "),r("td",[t._v("29-31")]),t._v(" "),r("td",[t._v("36.5-38.5")])]),t._v(" "),r("tr",[r("td",[t._v("M")]),t._v(" "),r("td",[t._v("38-40")]),t._v(" "),r("td",[t._v("31-33")]),t._v(" "),r("td",[t._v("38.5-40.5")])]),t._v(" "),r("tr",[r("td",[t._v("L")]),t._v(" "),r("td",[t._v("40-42")]),t._v(" "),r("td",[t._v("33-36")]),t._v(" "),r("td",[t._v("40.5-43.5")])]),t._v(" "),r("tr",[r("td",[t._v("XL")]),t._v(" "),r("td",[t._v("42-45")]),t._v(" "),r("td",[t._v("36-40")]),t._v(" "),r("td",[t._v("43.5-47.5")])]),t._v(" "),r("tr",[r("td",[t._v("XXL")]),t._v(" "),r("td",[t._v("45-48")]),t._v(" "),r("td",[t._v("40-44")]),t._v(" "),r("td",[t._v("47.5-51.5")])])])])])])])]),t._v(" "),t.isCustom?t._e():r("div",{staticClass:"tab-pane fade",attrs:{id:"product-tags-content",role:"tabpanel","aria-labelledby":"product-tab-tags"}},[r("table",{staticClass:"table table-striped mt-2"},[r("tbody",[r("tr",[r("th",[t._v("Weight")]),t._v(" "),r("td",[t._v("23 kg")])]),t._v(" "),r("tr",[r("th",[t._v("Dimensions")]),t._v(" "),r("td",[t._v("12 × 24 × 35 cm")])]),t._v(" "),r("tr",[r("th",[t._v("Color")]),t._v(" "),r("td",[t._v("Black, Green, Indigo")])]),t._v(" "),r("tr",[r("th",[t._v("Size")]),t._v(" "),r("td",[t._v("Large, Medium, Small")])])])])]),t._v(" "),r("div",{staticClass:"tab-pane fade",attrs:{id:"product-reviews-content",role:"tabpanel","aria-labelledby":"product-tab-reviews"}},[t.product.reviews>0?r("div",{key:"noReviews",staticClass:"product-reviews-content"},[1===t.product.reviews?r("h3",{key:"singleReview",staticClass:"reviews-title"},[t._v(t._s(t.product.reviews)+" review for "+t._s(t.product.name))]):r("h3",{staticClass:"reviews-title"},[t._v(t._s(t.product.reviews)+" reviews for "+t._s(t.product.name))]),t._v(" "),r("div",{staticClass:"comment-list"},t._l([0,1,2,3,4,5].slice(0,t.product.reviews),(function(e,o){return r("div",{key:"reviews-"+o,staticClass:"comments",class:{"ml-5":o%2==1}},[r("figure",{staticClass:"img-thumbnail"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/author.jpg",expression:"'./images/blog/author.jpg'"}],attrs:{alt:"author",width:"80",height:"80"}})]),t._v(" "),r("div",{staticClass:"comment-block mt-2"},[r("div",{staticClass:"comment-header"},[r("div",{staticClass:"comment-arrow"}),t._v(" "),r("div",{staticClass:"ratings-container float-sm-right"},[r("div",{staticClass:"product-ratings"},[r("span",{staticClass:"ratings",style:{width:20*t.product.ratings+"%"}}),t._v(" "),r("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t._f("priceFormat")(t.product.ratings)))])])]),t._v(" "),r("span",{staticClass:"comment-by"},[r("strong",[t._v("Joe Doe")]),t._v(" – April 12, 2018\n\t\t\t\t\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"comment-content"},[r("p",[t._v("Excellent.")])])])])})),0),t._v(" "),r("div",{staticClass:"divider"}),t._v(" "),r("div",{staticClass:"add-product-review"},[r("h3",{staticClass:"review-title"},[t._v("Add a review")]),t._v(" "),r("form",{staticClass:"comment-form m-0",attrs:{action:"#"}},[r("div",{staticClass:"rating-form"},[r("label",{attrs:{for:"rating"}},[t._v("\n\t\t\t\t\t\t\t\tYour rating\n\t\t\t\t\t\t\t\t"),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("span",{staticClass:"rating-stars"},t._l([1,2,3,4,5],(function(e){return r("a",{key:"rating"+e,class:"star-"+e,attrs:{href:"javascript:;"},on:{click:function(e){return t.setRating(e)}}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t\t\t")])})),0),t._v(" "),r("select",{staticStyle:{display:"none"},attrs:{name:"rating",id:"rating"}},[r("option",{attrs:{value:""}},[t._v("Rate…")]),t._v(" "),r("option",{attrs:{value:"5"}},[t._v("Perfect")]),t._v(" "),r("option",{attrs:{value:"4"}},[t._v("Good")]),t._v(" "),r("option",{attrs:{value:"3"}},[t._v("Average")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("Not that bad")]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v("Very poor")])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("\n\t\t\t\t\t\t\t\tYour review\n\t\t\t\t\t\t\t\t"),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("textarea",{staticClass:"form-control form-control-sm",attrs:{cols:"5",rows:"6"}})]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 col-xl-12"},[r("div",{staticClass:"form-group"},[r("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t\t\t"),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",required:""}})])]),t._v(" "),r("div",{staticClass:"col-md-6 col-xl-12"},[r("div",{staticClass:"form-group"},[r("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t\t"),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",required:""}})])]),t._v(" "),r("div",{staticClass:"col-xl-12"},[r("div",{staticClass:"custom-control custom-checkbox"},[r("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"save-name"}}),t._v(" "),r("label",{staticClass:"custom-control-label mb-0",attrs:{for:"save-name"}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSave my\n\t\t\t\t\t\t\t\t\t\tname, email, and website in this browser for the next time I\n\t\t\t\t\t\t\t\t\t\tcomment.\n\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),r("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])]):r("div",{staticClass:"product-reviews-content"},[r("h3",{staticClass:"reviews-title"},[t._v("Reviews")]),t._v(" "),r("p",[t._v("There are no reviews yet.")]),t._v(" "),r("div",{staticClass:"divider"}),t._v(" "),r("div",{staticClass:"add-product-review"},[r("h3",{staticClass:"review-title"},[t._v("Be the first to review “"+t._s(t.product.name)+"”")]),t._v(" "),r("form",{staticClass:"comment-form m-0",attrs:{action:"#"}},[r("div",{staticClass:"rating-form"},[r("label",{attrs:{for:"rating"}},[t._v("\n\t\t\t\t\t\t\t\tYour rating\n\t\t\t\t\t\t\t\t"),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("span",{staticClass:"rating-stars"},t._l([1,2,3,4,5],(function(e){return r("a",{key:"rating"+e,class:"star-"+e,attrs:{href:"javascript:;"},on:{click:function(e){return t.setRating(e)}}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t\t\t")])})),0),t._v(" "),r("select",{staticStyle:{display:"none"},attrs:{name:"rating",id:"rating"}},[r("option",{attrs:{value:""}},[t._v("Rate…")]),t._v(" "),r("option",{attrs:{value:"5"}},[t._v("Perfect")]),t._v(" "),r("option",{attrs:{value:"4"}},[t._v("Good")]),t._v(" "),r("option",{attrs:{value:"3"}},[t._v("Average")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("Not that bad")]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v("Very poor")])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("\n\t\t\t\t\t\t\t\tYour review\n\t\t\t\t\t\t\t\t"),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("textarea",{staticClass:"form-control form-control-sm",attrs:{cols:"5",rows:"6"}})]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 col-xl-12"},[r("div",{staticClass:"form-group"},[r("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t\t\t"),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",required:""}})])]),t._v(" "),r("div",{staticClass:"col-md-6 col-xl-12"},[r("div",{staticClass:"form-group"},[r("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t\t"),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",required:""}})])]),t._v(" "),r("div",{staticClass:"col-xl-12"},[r("div",{staticClass:"custom-control custom-checkbox"},[r("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"save-name"}}),t._v(" "),r("label",{staticClass:"custom-control-label mb-0",attrs:{for:"save-name"}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSave my\n\t\t\t\t\t\t\t\t\t\tname, email, and website in this browser for the next time I\n\t\t\t\t\t\t\t\t\t\tcomment.\n\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),r("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])]),t._v(" "),t.isCustom?r("div",{staticClass:"tab-pane fade",attrs:{id:"product-custom-content",role:"tabpanel","aria-labelledby":"product-tab-custom"}},[t._v("Custom Tab Content")]):t._e()])])}),[],!1,null,null,null);e.a=component.exports},335:function(t,e,r){"use strict";r(33),r(20),r(21),r(38),r(39);var o=r(8),c=(r(34),r(111),r(10),r(18),r(45),r(50),r(71),r(84),r(29)),n=r(141),l=r(333),d=r(331),v=r(23);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{VueSlideToggle:n.a,PvProductNav:l.a,PvQuantityInput:d.a},props:{product:Object,prevProduct:Object,nextProduct:Object,isProductNav:{type:Boolean,default:!0}},data:function(){return{minPrice:0,maxPrice:0,qty:1,currentIndex:0,baseUrl:v.a,vSizes:[],vColors:[],curSize:{name:null,text:null,image:null},curColor:{name:null,text:null,image:null},tIndex:0,isShare:{type:Boolean,default:!0}}},watch:{$route:function(){this.getFlag()}},computed:_(_({},Object(c.c)("wishlist",["wishList"])),{},{curIndex:function(){var t=this;if(null!==this.curColor.name&&0===this.vSizes.length){var e=this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.curColor.name}));return this.tIndex=e,e}if(null!==this.curSize.name&&0===this.vColors.length){var r=this.product.variants.findIndex((function(e){return e.size[0].size_name===t.curSize.name}));return this.tIndex=r,r}if(null!==this.curColor.name&&null!==this.curSize.name){var o=this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.curColor.name&&e.size[0].size_name===t.curSize.name}));return this.tIndex=o,o}return this.tIndex},isCartActive:function(){return!(this.product.stock<parseInt(this.qty))&&(0===this.product.variants.length||(null!==this.curSize.name&&null!==this.curColor.name||(null!==this.curColor.name&&0===this.vSizes.length||null!==this.curSize.name&&0===this.vColors.length)))},isWishlisted:function(){var t=this;return this.wishList.findIndex((function(e){return e.name===t.product.name}))>-1},isPriceShow:function(){return null!==this.curSize.name&&null!==this.curColor.name||(null!==this.curColor.name&&0===this.vSizes.length||null!==this.curSize.name&&0===this.vColors.length)}}),created:function(){this.getFlag()},mounted:function(){var t=this;this.product.variants&&!this.product.price&&(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.sale_price?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)}))),this.product.variants.length>0&&(this.product.variants[0].size[0]&&this.product.variants.forEach((function(e){-1===t.vSizes.findIndex((function(t){return t.name===e.size[0].size_name}))&&t.vSizes.push({name:e.size[0].size_name,text:e.size[0].size,image:e.size[0].size_thumbnail})})),this.product.variants[0].colors[0]&&this.product.variants.forEach((function(e){-1===t.vColors.findIndex((function(t){return t.name===e.colors[0].color_name}))&&t.vColors.push({name:e.colors[0].color_name,text:e.colors[0].color,image:e.colors[0].color_thumbnail})})))},methods:_(_(_({},Object(c.b)("cart",["addToCart"])),Object(c.b)("wishlist",["addToWishlist"])),{},{addCart:function(){if(this.isCartActive){var t,e,r;if(this.product.variants.length>0)e=this.product.price?this.product.sale_price?this.product.sale_price:this.product.price:this.product.variants[this.curIndex].sale_price?this.product.variants[this.curIndex].sale_price:this.product.variants[this.curIndex].price,this.curColor.name&&this.curSize.name&&(r=this.curColor.name.charAt(0).toUpperCase()+this.curColor.name.slice(1)+", "+this.curSize.name),this.curColor.name||(r=this.curSize.name),this.curSize.name||(r=this.curColor.name.charAt(0).toUpperCase()+this.curColor.name.slice(1)),t=_(_({},this.product),{},{qty:this.qty,name:this.product.name+" - "+r,price:e});else t=_(_({},this.product),{},{qty:this.qty,price:this.product.sale_price?this.product.sale_price:this.product.price});this.addToCart({product:t})}},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},isDisabled:function(t,e){return!(!t.name||!e.name)&&(0===this.vSizes.length?-1===this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.name})):0===this.vColors.length?-1===this.product.variants.findIndex((function(t){return t.size[0].size_name===e.name})):-1===this.product.variants.findIndex((function(r){return r.colors[0].color_name===t.name&&r.size[0].size_name===e.name})))},toggleColorItem:function(t){this.isDisabled(t,this.curSize)||(this.curColor===t?this.curColor={name:null,text:null,image:null}:this.curColor=t)},toggleSizeItem:function(t){this.isDisabled(this.curColor,t)||(this.curSize===t?this.curSize={name:null,text:null,image:null}:this.curSize=t)},resetValue:function(){this.curColor={name:null,text:null,image:null},this.curSize={name:null,text:null,image:null}},getFlag:function(){this.$route.path.includes("sticky-info")&&(this.isShare=!1)},changeQty:function(t){this.qty=t}})},C=r(9),component=Object(C.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),t.isProductNav?r("pv-product-nav",{attrs:{"prev-product":t.prevProduct,"next-product":t.nextProduct}}):t._e(),t._v(" "),r("div",{staticClass:"ratings-container"},[r("div",{staticClass:"product-ratings"},[r("span",{staticClass:"ratings",style:"width:"+20*t.product.ratings+"%"}),t._v(" "),r("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t._f("priceFormat")(t.product.ratings)))])]),t._v(" "),t.product.reviews>0?r("a",{staticClass:"rating-link",attrs:{href:"javascript:;"}},[t._v("( "+t._s(t.product.reviews)+" Reviews )")]):r("a",{staticClass:"rating-link",attrs:{href:"javascript:;"}},[t._v("( There is no review yet. )")])]),t._v(" "),r("hr",{staticClass:"short-divider"}),t._v(" "),t.product.price?r("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[r("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]:[r("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]],2):r("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[r("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice))+" – $"+t._s(t._f("priceFormat")(t.maxPrice)))])]:[r("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice)))])]],2),t._v(" "),t.product.short_description?r("div",{staticClass:"product-desc"},[r("p",[t._v(t._s(t.product.short_description))])]):t._e(),t._v(" "),r("ul",{staticClass:"single-info-list"},[t.product.sku?r("li",[t._v("\n\t\t\tSKU:\n\t\t\t"),r("strong",[t._v(t._s(t.product.sku))])]):t._e(),t._v(" "),r("li",[t._v("\n\t\t\tCATEGORY:\n\t\t\t"),r("strong",t._l(t.product.product_categories,(function(e,o){return r("nuxt-link",{key:"product-category-"+o,staticClass:"product-category",attrs:{to:{path:"/shop",query:{category:e.slug}}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t"),o<t.product.product_categories.length-1?[t._v(",")]:t._e()],2)})),1)]),t._v(" "),t.product.product_tags.length>0?r("li",[t._v("\n\t\t\tTAGS:\n\t\t\t"),r("strong",t._l(t.product.product_tags,(function(e,o){return r("nuxt-link",{key:"product-category-"+o,staticClass:"product-category",attrs:{to:{path:"/shop",query:{tag:e.slug}}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t"),o<t.product.product_tags.length-1?[t._v(",")]:t._e()],2)})),1)]):t._e()]),t._v(" "),t.product.variants.length>0?r("div",{staticClass:"product-filters-container"},[t.vColors.length>0?r("div",{staticClass:"product-single-filter"},[r("label",[t._v("Color:")]),t._v(" "),r("ul",{staticClass:"config-size-list config-color-list config-filter-list"},t._l(t.vColors,(function(e,o){return r("li",{key:"variant-color-"+o,class:{disabled:t.isDisabled(e,t.curSize),active:t.curColor===e},on:{click:function(r){return t.toggleColorItem(e)}}},[e.image[0]?r("a",{key:"thumbForm",staticClass:"filter-thumb p-0",class:{disabled:t.isDisabled(e,t.curSize)},attrs:{href:"javascript:;"}},[r("img",{attrs:{src:""+t.baseUrl+e.image[0].url,width:e.image[0].width,height:e.image[0].height,alt:"color thumb"}})]):r("a",{key:"colorForm",staticClass:"filter-color border-0",class:{disabled:t.isDisabled(e,t.curSize)},style:{backgroundColor:e.text},attrs:{href:"javascript:;"}})])})),0)]):t._e(),t._v(" "),t.vSizes.length>0?r("div",{staticClass:"product-single-filter"},[r("label",[t._v("Size:")]),t._v(" "),r("ul",{staticClass:"config-size-list"},t._l(t.vSizes,(function(e,o){return r("li",{key:"variant-size-"+o,class:{disabled:t.isDisabled(t.curColor,e),active:t.curSize===e},on:{click:function(r){return t.toggleSizeItem(e)}}},[e.image[0]?r("a",{key:"thumbSizeForm",staticClass:"filter-thumb p-0",class:{disabled:t.isDisabled(e,t.curSize)},attrs:{href:"javascript:;"}},[r("img",{attrs:{src:""+t.baseUrl+e.image[0].url,width:e.image[0].width,height:e.image[0].height,alt:"size thumb"}})]):r("a",{staticClass:"d-flex align-items-center justify-content-center",class:{disabled:t.isDisabled(t.curColor,e)},attrs:{href:"javascript:;"}},[e.text?[t._v(t._s(e.text))]:r("img",{attrs:{src:""+t.baseUrl+e.thumbnail[0]}})],2)])})),0)]):t._e(),t._v(" "),r("div",{staticClass:"product-single-filter"},[r("vue-slide-toggle",{attrs:{open:null!==t.curColor.name||null!==t.curSize.name}},[r("label"),t._v(" "),r("a",{staticClass:"font1 text-uppercase clear-btn",attrs:{href:"javascript:;"},on:{click:t.resetValue}},[t._v("Clear")])])],1)]):t._e(),t._v(" "),r("div",{staticClass:"product-action"},[t.product.variants.length>0?r("vue-slide-toggle",{attrs:{open:t.isPriceShow}},[t.minPrice===t.maxPrice||t.product.price?r("div",{key:"samePrice",staticClass:"price-box product-filtered-price"},[r("span",{staticClass:"product-stock"},[t._v(t._s(t.product.stock)+" in stock")])]):r("div",{staticClass:"price-box product-filtered-price"},[t.product.variants[t.curIndex].sale_price?[r("del",{staticClass:"old-price"},[r("span",[t._v("$"+t._s(t._f("priceFormat")(t.product.variants[t.curIndex].price)))])]),t._v(" "),r("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.variants[t.curIndex].sale_price)))])]:[r("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.variants[t.curIndex].price)))])]],2)]):t._e(),t._v(" "),r("div",{staticClass:"product-single-qty"},[r("pv-quantity-input",{attrs:{product:t.product,qty:1},on:{changeCurrentQty:t.changeQty}})],1),t._v(" "),r("a",{staticClass:"btn btn-dark add-cart mr-2",class:{disabled:!t.isCartActive},attrs:{href:"javascript:;",title:"Add to Cart"},on:{click:t.addCart}},[t._v("Add to Cart")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-gray view-cart d-none",attrs:{to:"/pages/cart"}},[t._v("View cart")])],1),t._v(" "),r("hr",{staticClass:"divider mb-0 mt-0"}),t._v(" "),r("div",{staticClass:"product-single-share mb-3"},[r("label",{staticClass:"sr-only"},[t._v("Share:")]),t._v(" "),t.isShare?r("div",{staticClass:"social-icons mr-2"},[r("a",{staticClass:"social-icon social-facebook icon-facebook",attrs:{href:"javascript:;",title:"Facebook"}}),t._v(" "),r("a",{staticClass:"social-icon social-twitter icon-twitter",attrs:{href:"javascript:;",title:"Twitter"}}),t._v(" "),r("a",{staticClass:"social-icon social-linkedin fab fa-linkedin-in",attrs:{href:"javascript:;",title:"Linkedin"}}),t._v(" "),r("a",{staticClass:"social-icon social-gplus fab fa-google-plus-g",attrs:{href:"javascript:;",title:"Google +"}}),t._v(" "),r("a",{staticClass:"social-icon social-mail icon-mail-alt",attrs:{href:"javascript:;",title:"Mail"}})]):t._e(),t._v(" "),t.isWishlisted?r("nuxt-link",{staticClass:"btn-icon-wish add-wishlist added-wishlist",attrs:{to:"/pages/wishlist",title:"Go to Wishlist"}},[r("i",{staticClass:"icon-wishlist-2"}),t._v(" "),r("span",[t._v("Go to Wishlist")])]):t._e(),t._v(" "),t.isWishlisted?t._e():r("a",{staticClass:"btn-icon-wish add-wishlist",attrs:{href:"javascript:;",title:"Add to Wishlist"},on:{click:function(e){return t.addWishlist(e)}}},[r("i",{staticClass:"icon-wishlist-2"}),t._v(" "),r("span",[t._v("Add to Wishlist")])])],1)],1)}),[],!1,null,null,null);e.a=component.exports},621:function(t,e,r){"use strict";r.r(e);r(70),r(51),r(329);var o=r(23),c=r(142),n=(r(10),r(146)),l=r.n(n),d=r(318),v=(r(207),{components:{LightBox:l.a},props:{product:Object,isMagnify:{type:Boolean,default:!0}},data:function(){return{baseSlider1:d.b,baseSlider2:d.c,baseUrl:o.a}},computed:{lightBoxMedia:function(){return this.product.large_pictures.reduce((function(t,e){return[].concat(Object(c.a)(t),[{src:"".concat(o.a).concat(e.url),thumb:"".concat(o.a).concat(e.url)}])}),[])}},methods:{openLightBox:function(t){this.$refs.lightBox.showImage(t)}}}),m=r(9),_=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"label-group"},[t.product.is_hot?r("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale?r("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.is_new?r("div",{staticClass:"product-label label-sale"},[t._v("New")]):t._e()]),t._v(" "),t._l(t.product.large_pictures,(function(e,o){return r("div",{key:e.name,staticClass:"product-item col-sm-6"},[r("div",{staticClass:"inner"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+e.url,expression:"`${baseUrl}${item.url}`"}],staticClass:"product-single-image",attrs:{width:e.width,height:e.height,alt:"lgPicture"}})]),t._v(" "),t.isMagnify?r("span",{staticClass:"prod-full-screen",on:{click:function(e){return t.openLightBox(o)}}},[r("i",{staticClass:"icon-plus"})]):t._e()])})),t._v(" "),r("light-box",{ref:"lightBox",attrs:{media:t.lightBoxMedia,"show-light-box":!1}})],2)}),[],!1,null,null,null).exports,h=r(335),C=r(332),f=r(342),y=r(336),x={components:{PvMediaSeven:_,PvDetailOne:h.a,PvDescOne:C.a,PvRelatedProducts:f.a,PvSmallCollection:y.a},data:function(){return{product:null,relatedProducts:null,featuredProducts:null,bestProducts:null,latestProducts:null,topRatedProducts:null,nextProduct:null,prevProduct:null,baseUrl:o.a,loaded:!1,categoryList:[],productCategory:[]}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;this.loaded=!1,o.c.get("".concat(o.a,"/products/").concat(this.$route.params.slug),{params:{demo:o.b}}).then((function(e){t.product=e.data.product,t.relatedProducts=e.data.relatedProducts,t.featuredProducts=e.data.featuredProducts,t.bestProducts=e.data.bestSellingProducts,t.latestProducts=e.data.latestProducts,t.topRatedProducts=e.data.topRatedProducts,t.prevProduct=e.data.prevProduct,t.nextProduct=e.data.nextProduct,t.product.product_categories.map((function(e){t.productCategory.push(e)})),t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))}}},w=Object(m.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("div",{staticClass:"container skeleton-body product-layout-grid"},[r("nav",{staticClass:"breadcrumb-nav",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[r("i",{staticClass:"icon-home"})])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/shop"}},[t._v("Shop")])],1),t._v(" "),t.loaded?r("li",{staticClass:"breadcrumb-item"},t._l(t.productCategory,(function(e,o){return r("nuxt-link",{key:"product-category-"+o,attrs:{to:{path:"/shop",query:{category:e.slug}}}},[t._v(t._s(o===t.productCategory.length-1?e.name:e.name+", "))])})),1):t._e(),t._v(" "),t.loaded?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.name))]):t._e()])]),t._v(" "),t.product?r("div",{staticClass:"product-single-container product-single-grid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 product-single-gallery"},[r("pv-media-seven",{attrs:{product:t.product}})],1),t._v(" "),r("div",{staticClass:"col-lg-4 product-single-details"},[r("pv-detail-one",{attrs:{product:t.product,"prev-product":t.prevProduct,"next-product":t.nextProduct}})],1)])]):r("div",{staticClass:"skel-group"},[r("div",{staticClass:"summary-before col-lg-8"}),t._v(" "),r("div",{staticClass:"summary entry-summary col-lg-4"}),t._v(" "),r("div",{staticClass:"tab-content col-lg-12"})]),t._v(" "),t.product?r("pv-desc-one",{attrs:{product:t.product}}):t._e(),t._v(" "),r("pv-related-products",{staticClass:"mb-1",attrs:{products:t.relatedProducts}}),t._v(" "),r("hr",{staticClass:"mt-0 m-b-5"}),t._v(" "),r("div",{staticClass:"skeleton-body"},[r("pv-small-collection",{attrs:{"featured-products":t.featuredProducts,"best-products":t.bestProducts,"latest-products":t.latestProducts,"top-rated-products":t.topRatedProducts}})],1)],1)])}),[],!1,null,null,null);e.default=w.exports}}]);