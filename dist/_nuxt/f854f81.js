(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{321:function(t,e,o){"use strict";var r=o(322);const n=function(t){t.directive("Sticky",r.a)};window.Vue&&Vue.use(n),r.a.install=n,e.a=r.a},322:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,style={},e={})=>{for(let e in style)t.style[e]=style[e];for(let o in e)e[o]&&!t.classList.contains(o)?t.classList.add(o):!e[o]&&t.classList.contains(o)&&t.classList.remove(o)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const o=this.getAttribute("sticky-offset")||{},r=this.getAttribute("sticky-side")||"top",n=this.getAttribute("sticky-z-index")||"10",c=this.getAttribute("on-stick")||null;this.options={topOffset:Number(o.top)||0,bottomOffset:Number(o.bottom)||0,shouldTopSticky:"top"===r||"both"===r,shouldBottomSticky:"bottom"===r||"both"===r,zIndex:n,onStick:c}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick((()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach((t=>{const e=this.update.bind(this);this.unsubscribers.push((()=>window.removeEventListener(t,e))),this.unsubscribers.push((()=>this.containerEl.removeEventListener(t,e))),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})}))}))}doUnbind(){this.unsubscribers.forEach((t=>t())),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame((()=>{this.isPending=!1,this.recomputeState(),this.updateElements()})),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,o=this.options.topOffset,r=this.options.bottomOffset;return t<=o&&e>=r}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,o=this.options.topOffset;return t<=this.options.bottomOffset&&e>=o}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},o={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const r=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;r<0&&(e.top=r+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",o["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const r=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;r<0&&(e.bottom=r+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",o["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,o),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach((t=>{this.el.style.removeProperty(t)})),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,o){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,o.context),t[namespace].doBind())},unbind(t,e,o){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,o){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,o.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},334:function(t,e,o){"use strict";var r=o(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"category-banner-container bg-gray"},[o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/banners/banner-top.jpg",expression:"'./images/banners/banner-top.jpg'",arg:"background-image"}],staticClass:"category-banner banner text-uppercase"},[t._m(0)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container position-relative"},[o("div",{staticClass:"row"},[o("div",{staticClass:"pl-lg-5 pb-5 pb-sm-0 col-sm-5 col-xl-4 col-lg-4 offset-1"},[o("h3",[t._v("\n\t\t\t\t\t\tElectronic\n\t\t\t\t\t\t"),o("br"),t._v("Deals\n\t\t\t\t\t")]),t._v(" "),o("a",{staticClass:"btn btn-dark",attrs:{href:"javascript:;"}},[t._v("Get Yours!")])]),t._v(" "),o("div",{staticClass:"pl-lg-3 col-sm-4 offset-sm-0 offset-1 pt-3"},[o("div",{staticClass:"coupon-sale-content"},[o("h4",{staticClass:"m-b-1 coupon-sale-text bg-white text-transform-none"},[t._v("Exclusive COUPON")]),t._v(" "),o("h5",{staticClass:"mb-2 coupon-sale-text d-block ls-10 p-0"},[o("i",{staticClass:"ls-0"},[t._v("UP TO")]),t._v(" "),o("b",{staticClass:"text-dark"},[t._v("$100")]),t._v(" OFF\n\t\t\t\t\t\t")])])])])])}],!1,null,null,null);e.a=component.exports},620:function(t,e,o){"use strict";o.r(e);o(329);var r=o(351),n=(o(33),o(20),o(21),o(10),o(38),o(18),o(39),o(8)),c=o(337),l=o(344),d=o(15),h=o(23),v=o(321);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{PvProductOne:c.a,PvPagination:l.a,PvSidebarFilterOne:r.a},directives:{Sticky:v.a},props:{categoryList:Array},data:function(){return{products:null,repeatCount:new Array(100),orderBy:"default",itemsPerPage:12,totalCount:0,isSticky:!0,isSidebar:!0}},watch:{$route:function(){this.getProducts()}},created:function(){this.getProducts(!1)},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler,{passive:!0}),this.stickyFilterHandler(),window.addEventListener("scroll",this.stickyFilterHandler,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.resizeHandler),window.removeEventListener("scroll",this.stickyFilterHandler)},methods:{getProducts:function(){var t=this;document.querySelector("body").classList.add("sidebar-opened"),this.products=null,h.c.get("".concat(h.a,"/shop"),{params:f(f({},this.$route.query),{},{demo:h.b,order_by:this.orderBy,per_page:this.itemsPerPage})}).then((function(e){t.products=e.data.products,t.totalCount=e.data.totalCount,Object(d.e)()})).catch((function(t){return{error:JSON.stringify(t)}}))},toggleSidebar:function(){var body=document.querySelector("body");body.classList.contains("sidebar-opened")?body.classList.remove("sidebar-opened"):body.classList.add("sidebar-opened")},resizeHandler:function(){this.isSticky=window.innerWidth>991},stickyFilterHandler:function(){var filter=document.querySelector(".horizontal-filter.sticky-header"),t=document.querySelector(".header .sticky-header.header-middle").offsetHeight;if(window.innerWidth<992&&window.pageYOffset>600){if(filter.classList.add("fixed"),!document.querySelector(".sticky-filter-wrapper")){var e=document.createElement("div");e.className="sticky-filter-wrapper",filter.parentNode.insertBefore(e,filter),document.querySelector(".sticky-filter-wrapper").insertAdjacentElement("beforeend",filter)}filter.setAttribute("style","top: "+t+"px")}else filter.classList.remove("fixed"),filter.setAttribute("style","")},changePerPage:function(){this.$router.push(f(f({},this.$route),{},{query:f(f({},this.$route.query),{},{per_page:this.itemsPerPage,page:1})}))}}},_=o(9),C=Object(_.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[!t.products||t.products&&t.products.length>0?o("nav",{staticClass:"toolbox sticky-header horizontal-filter mb-1 mobile-sticky"},[o("div",{staticClass:"toolbox-left"},[o("a",{staticClass:"sidebar-toggle",attrs:{href:"javascript:;"},on:{click:t.toggleSidebar}},[o("svg",{attrs:{"data-name":"Layer 3",id:"Layer_3",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},[o("line",{staticClass:"cls-1",attrs:{x1:"15",x2:"26",y1:"9",y2:"9"}}),t._v(" "),o("line",{staticClass:"cls-1",attrs:{x1:"6",x2:"9",y1:"9",y2:"9"}}),t._v(" "),o("line",{staticClass:"cls-1",attrs:{x1:"23",x2:"26",y1:"16",y2:"16"}}),t._v(" "),o("line",{staticClass:"cls-1",attrs:{x1:"6",x2:"17",y1:"16",y2:"16"}}),t._v(" "),o("line",{staticClass:"cls-1",attrs:{x1:"17",x2:"26",y1:"23",y2:"23"}}),t._v(" "),o("line",{staticClass:"cls-1",attrs:{x1:"6",x2:"11",y1:"23",y2:"23"}}),t._v(" "),o("path",{staticClass:"cls-2",attrs:{d:"M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"}}),t._v(" "),o("path",{staticClass:"cls-2",attrs:{d:"M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"}}),t._v(" "),o("path",{staticClass:"cls-3",attrs:{d:"M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"}}),t._v(" "),o("path",{staticClass:"cls-2",attrs:{d:"M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"}})]),t._v(" "),o("span",[t._v("Filter")])]),t._v(" "),o("div",{staticClass:"toolbox-item filter-toggle d-none d-lg-flex",class:{opened:t.isSidebar}},[o("span",[t._v("Filters:")]),t._v(" "),o("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.toggleSidebar(),t.isSidebar=!t.isSidebar}}},[t._v(" ")])])]),t._v(" "),t.totalCount>0?o("div",{staticClass:"toolbox-item toolbox-sort ml-lg-auto"},[o("label",[t._v("Sort By:")]),t._v(" "),o("div",{staticClass:"select-custom"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.orderBy,expression:"orderBy"}],staticClass:"form-control",attrs:{name:"orderby"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.orderBy=e.target.multiple?o:o[0]},t.getProducts]}},[o("option",{attrs:{value:"default",selected:"default"}},[t._v("Default sorting")]),t._v(" "),o("option",{attrs:{value:"featured"}},[t._v("Sort by popularity")]),t._v(" "),o("option",{attrs:{value:"rating"}},[t._v("Sort by average rating")]),t._v(" "),o("option",{attrs:{value:"new"}},[t._v("Sort by newness")]),t._v(" "),o("option",{attrs:{value:"price-asc"}},[t._v("Sort by price: low to high")]),t._v(" "),o("option",{attrs:{value:"price-dec"}},[t._v("Sort by price: high to low")])])])]):t._e(),t._v(" "),o("div",{staticClass:"toolbox-item toolbox-show ml-auto ml-lg-0"},[o("label",[t._v("Show:")]),t._v(" "),o("div",{staticClass:"select-custom"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.itemsPerPage,expression:"itemsPerPage"}],staticClass:"form-control",attrs:{name:"count"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.itemsPerPage=e.target.multiple?o:o[0]},t.changePerPage]}},[o("option",{domProps:{value:9}},[t._v("9")]),t._v(" "),o("option",{domProps:{value:12}},[t._v("12")]),t._v(" "),o("option",{domProps:{value:24}},[t._v("24")]),t._v(" "),o("option",{domProps:{value:36}},[t._v("36")])])])]),t._v(" "),o("div",{staticClass:"toolbox-item layout-modes"},[o("nuxt-link",{staticClass:"layout-btn btn-grid active",attrs:{to:{path:"/shop",query:t.$route.query},title:"Grid"}},[o("i",{staticClass:"icon-mode-grid"})]),t._v(" "),o("nuxt-link",{staticClass:"layout-btn btn-list",attrs:{to:{path:"/shop/list",query:t.$route.query},title:"List"}},[o("i",{staticClass:"icon-mode-list"})])],1)]):t._e(),t._v(" "),t.products&&0===t.products.length?o("div",{staticClass:"sidebar-toggle custom-sidebar-toggle",on:{click:t.toggleSidebar}},[o("i",{staticClass:"fas fa-sliders-h"})]):t._e(),t._v(" "),o("div",{staticClass:"row main-content-wrap"},[o("div",{staticClass:"col-lg-9 main-content"},[o("div",{staticClass:"row"},[t.products&&t.products.length>0?t._l(t.products,(function(e,r){return o("div",{key:"shop-product"+r,staticClass:"col-6 col-sm-4",class:t.isSidebar?"":"col-lg-3"},[o("pv-product-one",{attrs:{product:e}})],1)})):t._e(),t._v(" "),t.products&&0===t.products.length?[t._m(0)]:t._e(),t._v(" "),t.products?t._e():t._l(t.repeatCount.slice(0,12),(function(e,r){return o("div",{key:"skel-shop"+r,staticClass:"col-6 col-sm-4",class:t.isSidebar?"":"col-lg-3"},[o("div",{staticClass:"skel-pro"})])}))],2),t._v(" "),t.totalCount>0?o("nav",{staticClass:"toolbox toolbox-pagination"},[o("div",{staticClass:"toolbox-item toolbox-show mb-0"},[o("label",[t._v("Show:")]),t._v(" "),o("div",{staticClass:"select-custom"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.itemsPerPage,expression:"itemsPerPage"}],staticClass:"form-control",attrs:{name:"count"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.itemsPerPage=e.target.multiple?o:o[0]},t.changePerPage]}},[o("option",{domProps:{value:9}},[t._v("9")]),t._v(" "),o("option",{domProps:{value:12}},[t._v("12")]),t._v(" "),o("option",{domProps:{value:24}},[t._v("24")]),t._v(" "),o("option",{domProps:{value:36}},[t._v("36")])])])]),t._v(" "),t.totalCount?o("pv-pagination",{attrs:{"total-count":t.totalCount,"items-per-page":t.itemsPerPage}}):t._e()],1):t._e()]),t._v(" "),o("div",{staticClass:"sidebar-overlay",on:{click:t.toggleSidebar}}),t._v(" "),o("aside",{staticClass:"sidebar-shop col-lg-3 order-lg-first mobile-sidebar",attrs:{"sticky-container":""}},[t.isSticky?o("div",{directives:[{name:"sticky",rawName:"v-sticky"}],attrs:{"sticky-offset":"{top: 75}"}},[t.categoryList.length>0?o("pv-sidebar-filter-one",{attrs:{"category-list":t.categoryList}}):o("div",{staticClass:"sidebar-content skeleton-body"},[o("aside",{staticClass:"widget"}),t._v(" "),o("aside",{staticClass:"widget"}),t._v(" "),o("aside",{staticClass:"widget"})])],1):o("div",[t.categoryList.length>0?o("pv-sidebar-filter-one",{attrs:{"category-list":t.categoryList}}):o("div",{staticClass:"sidebar-content skeleton-body"},[o("aside",{staticClass:"widget"}),t._v(" "),o("aside",{staticClass:"widget"}),t._v(" "),o("aside",{staticClass:"widget"})])],1)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"info-box with-icon p-0 shop-info"},[o("p",[t._v("No products were found matching your selection.")])])}],!1,null,null,null).exports,k=o(334),w={components:{PvSidebarFilterOne:r.a,PvProductListThree:C,PvShopBanner:k.a},data:function(){return{categoryList:[],featuredProducts:[]}},mounted:function(){this.getCategoryLists()},methods:{getCategoryLists:function(){var t=this;h.c.get("".concat(h.a,"/shop/sidebar-list"),{params:{demo:h.b}}).then((function(e){t.categoryList=e.data.sidebarList})).catch((function(t){return{error:JSON.stringify(t)}}))}}},x=Object(_.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"main skeleton-body"},[o("pv-shop-banner"),t._v(" "),o("div",{staticClass:"container"},[o("nav",{staticClass:"breadcrumb-nav",attrs:{"aria-label":"breadcrumb"}},[o("ol",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("nuxt-link",{attrs:{to:"/"}},[o("i",{staticClass:"icon-home"})])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item active"},[t._v("Shop")])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("pv-product-list-three",{attrs:{"category-list":t.categoryList}})],1)])]),t._v(" "),o("div",{staticClass:"mb-4"})],1)}),[],!1,null,null,null);e.default=x.exports}}]);