"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[624,2587,2436,5523,472,3900,208,9201,4798],{60833:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(94865);const o={props:{clickable:{type:Boolean,default:!1}}};const i=(0,t(83744).Z)(o,[["render",function(e,n,t,o,i,l){return(0,r.openBlock)(),(0,r.createElementBlock)("span",{class:(0,r.normalizeClass)(["bg-red-50 text-red-500 border border-red-500 text-xs px-2.5 py-0.5 rounded",{"cursor-pointer hover:bg-red-100 active:bg-red-200":t.clickable}])},[(0,r.renderSlot)(e.$slots,"default")],2)}]])},2701:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(94865);const o={props:{clickable:{type:Boolean,default:!1}}};const i=(0,t(83744).Z)(o,[["render",function(e,n,t,o,i,l){return(0,r.openBlock)(),(0,r.createElementBlock)("span",{class:(0,r.normalizeClass)(["bg-gray-100 text-gray-600 border border-gray-400 text-xs px-2.5 py-0.5 rounded",{"cursor-pointer hover:bg-blue-200 active:bg-blue-300":t.clickable}])},[(0,r.renderSlot)(e.$slots,"default")],2)}]])},72436:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var r=t(94865),o={class:"flex justify-between w-full"},i={class:"flex"},l=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"},null,-1)],s=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"},null,-1)],a=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"},null,-1),(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"},null,-1)],c=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"},null,-1)],u=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)],d=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)],m=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},null,-1),(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},null,-1)];var g=t(91098),p=t(80498),h=t(39266),f=t(23806),b=t(2701),v=t(60833),B=t(51795);const V={props:["configMenus","configMenu","index"],components:{SuccessBadge:p.Z,WarningBadge:h.Z,PrimaryBadge:f.Z,DefaultBadge:b.Z,DangerBadge:v.Z,NumberBadge:B.Z},data:function(){return{useVersionBuilder:(0,g.P)()}},computed:{active:function(){return this.useVersionBuilder.selectedConfigMenu==this.configMenu.name}},methods:{onClick:function(){this.useVersionBuilder.selectConfigMenu(this.configMenu.name)},setBorders:function(){if(this.configMenu.borders&&this.configMenu.borders.length){for(var e="",n=0;n<this.configMenu.borders.length;n++)"t"==this.configMenu.borders[n]?e+=" mt-2 pt-2 border-dashed border-"+this.configMenu.borders[n]:"b"==this.configMenu.borders[n]&&(e+=" mb-2 pb-2 border-dashed border-"+this.configMenu.borders[n]);return e}return""}}};const k=(0,t(83744).Z)(V,[["render",function(e,n,t,g,p,h){var f=(0,r.resolveComponent)("NumberBadge");return(0,r.openBlock)(),(0,r.createElementBlock)("li",{onClick:n[0]||(n[0]=function(){return h.onClick&&h.onClick.apply(h,arguments)}),class:(0,r.normalizeClass)(h.setBorders())},[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["group overflow-hidden text-xs text-gray-700 flex justify-between border rounded-md cursor-pointer relative p-2 mb-1 hover:bg-blue-50 hover:border-blue-300 hover:shadow",h.active?"border-blue-300 bg-blue-100 shadow":"border-transparent"])},[(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",i,["Sms Connection"==t.configMenu.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",class:(0,r.normalizeClass)(["h-4 w-4 mr-2",h.active?"text-blue-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},l,2)):"Restrictions"==t.configMenu.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:1,xmlns:"http://www.w3.org/2000/svg",class:(0,r.normalizeClass)(["h-4 w-4 mr-2",h.active?"text-blue-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},s,2)):"Firebase Connection"==t.configMenu.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:2,xmlns:"http://www.w3.org/2000/svg",class:(0,r.normalizeClass)(["h-4 w-4 mr-2",h.active?"text-blue-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},a,2)):"AppWrite Connection"==t.configMenu.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",class:(0,r.normalizeClass)(["h-4 w-4 mr-2",h.active?"text-blue-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},c,2)):"Airtime Billing Connection"==t.configMenu.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:4,xmlns:"http://www.w3.org/2000/svg",class:(0,r.normalizeClass)(["h-4 w-4 mr-2",h.active?"text-blue-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},u,2)):"Global Pagination"==t.configMenu.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:5,xmlns:"http://www.w3.org/2000/svg",class:(0,r.normalizeClass)(["h-4 w-4 mr-2",h.active?"text-blue-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},d,2)):"Select Screens Conditionally"==t.configMenu.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:6,xmlns:"http://www.w3.org/2000/svg",class:(0,r.normalizeClass)(["h-4 w-4 mr-2",h.active?"text-blue-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},m,2)):(0,r.createCommentVNode)("",!0),t.configMenu.name?((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:7,class:(0,r.normalizeClass)({"text-blue-500 font-semibold":h.active})},(0,r.toDisplayString)(t.configMenu.name),3)):(0,r.createCommentVNode)("",!0)]),t.configMenu.count?((0,r.openBlock)(),(0,r.createBlock)(f,{key:0,count:t.configMenu.count,active:h.active,class:"absolute top-1 right-2"},null,8,["count","active"])):(0,r.createCommentVNode)("",!0),t.configMenu.note?((0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)(t.configMenu.note.type+"Badge"),{key:1,class:"absolute transition-all duration-500 top-1.5 right-0 opacity-100 group-hover:-right-24"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(t.configMenu.note.message),1)]})),_:1})):(0,r.createCommentVNode)("",!0)])],2)],2)}]])},35523:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var r=t(94865),o={class:"border bg-gray-50 rounded-md p-2 mt-4"},i={key:0};var l=t(72436),s={class:"inline-flex relative rounded-md text-gray-800 text-xs border border-red-100 bg-white"},a={key:0,class:"absolute top-0 bottom-0 left-0 flex items-center px-4 bg-red-100"},c=(0,r.createElementVNode)("div",{style:{width:"16px",height:"16px"},class:"flex-none"},[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-full text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1);const u={props:{showIcon:{type:Boolean,default:!0}}};var d=t(83744);const m=(0,d.Z)(u,[["render",function(e,n,t,o,i,l){return(0,r.openBlock)(),(0,r.createElementBlock)("div",s,[t.showIcon?((0,r.openBlock)(),(0,r.createElementBlock)("div",a,[(0,r.renderSlot)(e.$slots,"icon",{},(function(){return[c]}))])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["py-2 px-4",t.showIcon?"ml-12 bg-red-100/30":" bg-red-100"])},[(0,r.renderSlot)(e.$slots,"default")],2)])}]]);var g=t(91098);const p={components:{ConfigMenu:l.default,DangerAlert:m},data:function(){return{error:"",configMenus:[],useVersionBuilder:(0,g.P)()}},watch:{"useVersionBuilder.builder.application_events.on_start.collection":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0},"useVersionBuilder.builder.application_events.on_close.collection":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0},"useVersionBuilder.builder.global_events":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0},"useVersionBuilder.builder.global_variables":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0},"useVersionBuilder.builder.conditional_screens":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0},"useVersionBuilder.builder.restrictions":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0},"useVersionBuilder.builder.firebase_connection":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0},"useVersionBuilder.builder.appwrite_connection":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0},"useVersionBuilder.builder.sms_connection":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0},"useVersionBuilder.builder.airtime_billing_connection":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0},"useVersionBuilder.builder.log_settings":{handler:function(e,n){this.configMenus=this.getConfigMenus()},deep:!0}},methods:{getConfigMenus:function(){try{var e=this.useVersionBuilder.globalEvents.length,n=this.useVersionBuilder.globalVariables.length,t=this.useVersionBuilder.builder.application_events.on_start.collection.length+this.useVersionBuilder.builder.application_events.on_close.collection.length;if("None"==this.useVersionBuilder.builder.restrictions.selected_type)var r={type:"Default",message:this.useVersionBuilder.builder.restrictions.selected_type};else r={type:"Primary",message:this.useVersionBuilder.builder.restrictions.selected_type};if(0==this.useVersionBuilder.builder.firebase_connection.json.code_editor_mode&&[null,""].includes(this.useVersionBuilder.builder.firebase_connection.json.text))var o={type:"Default",message:"Incomplete"};else if(1==this.useVersionBuilder.builder.firebase_connection.json.code_editor_mode)o={type:"Primary",message:"Verify"};else o={type:"Success",message:"Complete"};if(0==this.useVersionBuilder.builder.appwrite_connection.endpoint.code_editor_mode&&[null,""].includes(this.useVersionBuilder.builder.appwrite_connection.endpoint.text)||0==this.useVersionBuilder.builder.appwrite_connection.project_id.code_editor_mode&&[null,""].includes(this.useVersionBuilder.builder.appwrite_connection.project_id.text)||0==this.useVersionBuilder.builder.appwrite_connection.api_key.code_editor_mode&&[null,""].includes(this.useVersionBuilder.builder.appwrite_connection.api_key.text))var i={type:"Default",message:"Incomplete"};else if(1==this.useVersionBuilder.builder.appwrite_connection.endpoint.code_editor_mode||1==this.useVersionBuilder.builder.appwrite_connection.project_id.code_editor_mode||1==this.useVersionBuilder.builder.appwrite_connection.api_key.code_editor_mode)i={type:"Primary",message:"Verify"};else i={type:"Success",message:"Complete"};if(0==this.useVersionBuilder.builder.airtime_billing_connection.client_id.code_editor_mode&&[null,""].includes(this.useVersionBuilder.builder.airtime_billing_connection.client_id.text)||0==this.useVersionBuilder.builder.airtime_billing_connection.client_secret.code_editor_mode&&[null,""].includes(this.useVersionBuilder.builder.airtime_billing_connection.client_secret.text))var l={type:"Default",message:"Incomplete"};else if(1==this.useVersionBuilder.builder.airtime_billing_connection.client_id.code_editor_mode||1==this.useVersionBuilder.builder.airtime_billing_connection.client_secret.code_editor_mode)l={type:"Primary",message:"Verify"};else l={type:"Success",message:"Complete"};if(0==this.useVersionBuilder.builder.sms_connection.username.code_editor_mode&&[null,""].includes(this.useVersionBuilder.builder.sms_connection.username.text)||0==this.useVersionBuilder.builder.sms_connection.password.code_editor_mode&&[null,""].includes(this.useVersionBuilder.builder.sms_connection.password.text))var s={type:"Default",message:"Incomplete"};else if(1==this.useVersionBuilder.builder.sms_connection.username.code_editor_mode||1==this.useVersionBuilder.builder.sms_connection.password.code_editor_mode)s={type:"Primary",message:"Verify"};else s={type:"Success",message:"Complete"};return[{name:"Global Variables",onClick:function(){},count:n},{name:"Global Events",onClick:function(){},borders:["t"],count:e},{name:"Application Events",onClick:function(){},borders:["b"],count:t},{name:"Global Pagination",onClick:function(){}},{name:"Restrictions",onClick:function(){},note:r},{name:"Select Screens Conditionally",onClick:function(){},note:this.useVersionBuilder.builder.conditional_screens.active?{type:"Primary",message:"Yes"}:{type:"Default",message:"No"}},{name:"Sms Connection",onClick:function(){},borders:["t"],note:s},{name:"Firebase Connection",onClick:function(){},note:o},{name:"AppWrite Connection",onClick:function(){},note:i},{name:"Airtime Billing Connection",onClick:function(){},borders:["b"],note:l},{name:"Log Settings",onClick:function(){},note:"never"!==this.useVersionBuilder.builder.log_settings.mobile.save_logs||"never"!==this.useVersionBuilder.builder.log_settings.simulator.save_logs?{type:"Primary",message:"Enabled"}:{type:"Default",message:"Disabled"}},{name:"Color Scheme",onClick:function(){}}]}catch(e){return this.error="The applicaiton menus failed to load because the builder is not compatible",console.log("The application encoutered an error, see the error logged below"),console.error(e),console.log("Refer to the application builder logged below"),console.log(this.useVersionBuilder.builder),[]}}},mounted:function(){this.configMenus=this.getConfigMenus()}},h=(0,d.Z)(p,[["render",function(e,n,t,l,s,a){var c=(0,r.resolveComponent)("ConfigMenu"),u=(0,r.resolveComponent)("DangerAlert");return(0,r.openBlock)(),(0,r.createElementBlock)("ul",o,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(s.configMenus,(function(e,n){return(0,r.openBlock)(),(0,r.createBlock)(c,{key:n,configMenus:s.configMenus,configMenu:e,index:n},null,8,["configMenus","configMenu","index"])})),128)),s.error?((0,r.openBlock)(),(0,r.createElementBlock)("li",i,[(0,r.createVNode)(u,null,{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(s.error),1)]})),_:1})])):(0,r.createCommentVNode)("",!0)])}]])},60472:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var r=t(94865),o={class:"flex justify-end relative"},i=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 hover:text-blue-500 cursor-grab active:cursor-grabbing draggble-handle",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1),l={class:"absolute right-0 w-24 flex group-hover:hidden justify-end"},s={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-green-500 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},a=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)],c={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-green-500 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},u=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},null,-1),(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},null,-1)];var d=t(91098),m=t(84798),g=t(49201);const p={props:["screen","index"],components:{DeleteScreenModal:m.default,CreateScreenModal:g.default},data:function(){return{useVersionBuilder:(0,d.P)()}},computed:{active:function(){return this.screen.id===(this.useVersionBuilder.selectedScreen||{}).id},firstDisplayScreen:function(){return this.screen.first_display_screen},usingConditionalScreens:function(){return this.useVersionBuilder.builder.conditional_screens.active},usingRepeatingScreen:function(){return["yes","conditional"].includes(this.screen.repeat.active.selected_type)}},methods:{selectScreen:function(){this.useVersionBuilder.selectScreen(this.screen.id)},duplicateScreen:function(){}}};const h=(0,t(83744).Z)(p,[["render",function(e,n,t,d,m,g){var p=(0,r.resolveComponent)("DeleteScreenModal"),h=(0,r.resolveComponent)("CreateScreenModal");return(0,r.openBlock)(),(0,r.createElementBlock)("li",{onClick:n[0]||(n[0]=function(){return g.selectScreen&&g.selectScreen.apply(g,arguments)}),class:(0,r.normalizeClass)(["group overflow-hidden text-xs text-gray-700 flex justify-between border rounded-md cursor-pointer p-2 mb-1 hover:bg-blue-50 hover:border-blue-300 hover:shadow",g.active?"border-blue-300 bg-blue-100 shadow":"border-transparent"])},[t.screen.name?((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:0,class:(0,r.normalizeClass)({"text-blue-500":g.active})},(0,r.toDisplayString)(t.screen.name),3)):((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:1,class:(0,r.normalizeClass)(["text-red-500",{italic:g.active}])},"No name",2)),(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["absolute right-0 w-24 hidden group-hover:flex justify-end",{"bg-blue-50":g.active}])},[(0,r.createVNode)(p,{screen:t.screen},null,8,["screen"]),(0,r.createVNode)(h,{screen:t.screen},null,8,["screen"]),i],2),(0,r.createElementVNode)("div",l,[g.usingRepeatingScreen?((0,r.openBlock)(),(0,r.createElementBlock)("svg",s,a)):(0,r.createCommentVNode)("",!0),g.firstDisplayScreen&&!g.usingConditionalScreens?((0,r.openBlock)(),(0,r.createElementBlock)("svg",c,u)):(0,r.createCommentVNode)("",!0)])])],2)}]])},23900:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var r=t(94865),o={class:"h-48 overflow-y-auto border bg-gray-50 rounded-md p-2 resize-y"},i=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-40 w-40 text-blue-100 m-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1);var l=t(9980),s=t.n(l),a=t(60472),c=t(91098);const u={components:{draggable:s(),ScreenMenu:a.default},data:function(){return{useVersionBuilder:(0,c.P)()}},computed:{filteredScreens:{get:function(){return this.useVersionBuilder.filteredScreens.map((function(e){return{id:e.id,name:e.name,first_display_screen:e.first_display_screen,repeat:{active:{selected_type:e.repeat.active.selected_type}}}}))},set:function(e){var n=this;""==this.useVersionBuilder.filterScreenSearch?this.useVersionBuilder.builder.screens=e.map((function(e){return n.useVersionBuilder.builder.screens.find((function(n){return n.id===e.id}))})):this.$message({message:"You cannot reorder screens while searching",type:"warning"})}}}};const d=(0,t(83744).Z)(u,[["render",function(e,n,t,l,s,a){var c=(0,r.resolveComponent)("ScreenMenu"),u=(0,r.resolveComponent)("draggable");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createVNode)(u,{tag:"ul",invertSwap:!0,"item-key":"screen-menus",handle:".draggble-handle","ghost-class":"bg-yellow-100",modelValue:a.filteredScreens,"onUpdate:modelValue":n[0]||(n[0]=function(e){return a.filteredScreens=e})},(0,r.createSlots)({item:(0,r.withCtx)((function(e){var n=e.element,t=e.index;return[((0,r.openBlock)(),(0,r.createBlock)(c,{screen:n,index:t,key:n.id,class:"draggble-screen"},null,8,["screen","index"]))]})),_:2},[0===a.filteredScreens.length?{name:"footer",fn:(0,r.withCtx)((function(){return[i]}))}:void 0]),1032,["modelValue"])])}]])},52587:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var r=t(94865),o={class:"flex items-center justify-between border-b border-dotted pb-2 mb-2"},i={class:"flex items-center"},l=(0,r.createElementVNode)("h5",{class:"text-sm font-semibold tracking-tight text-gray-600"},"Screens",-1),s={class:"mb-2"};var a=t(51795),c=t(23900),u=t(91098),d=t(35523),m=t(49510),g=t(49201);const p={components:{NumberBadge:a.Z,ScreenMenus:c.default,ConfigMenus:d.default,CreateScreenModal:g.default,DefaultSearchBar:m.Z},data:function(){return{useVersionBuilder:(0,u.P)()}}};const h=(0,t(83744).Z)(p,[["render",function(e,n,t,a,c,u){var d=(0,r.resolveComponent)("NumberBadge"),m=(0,r.resolveComponent)("CreateScreenModal"),g=(0,r.resolveComponent)("DefaultSearchBar"),p=(0,r.resolveComponent)("ScreenMenus"),h=(0,r.resolveComponent)("ConfigMenus");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",i,[l,c.useVersionBuilder.totalScreens?((0,r.openBlock)(),(0,r.createBlock)(d,{key:0,count:c.useVersionBuilder.totalScreens,active:!1,class:"ml-2"},null,8,["count"])):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",null,[(0,r.createVNode)(m)])]),(0,r.createElementVNode)("div",s,[(0,r.createVNode)(g,{modelValue:c.useVersionBuilder.filterScreenSearch,"onUpdate:modelValue":n[0]||(n[0]=function(e){return c.useVersionBuilder.filterScreenSearch=e}),placeholder:"Search screens"},null,8,["modelValue"])]),(0,r.createVNode)(p),(0,r.createVNode)(h)])}]])},40208:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var r=t(94865),o=(0,r.createElementVNode)("div",{class:"flex items-center justify-between border-b border-dotted pb-2 mb-8"},[(0,r.createElementVNode)("h5",{class:"text-sm font-semibold tracking-tight text-gray-600"},"Simulator Settings")],-1),i={class:"text-xs text-gray-400 ml-2"},l=(0,r.createElementVNode)("div",{class:"border-b border-dotted pb-4 my-8"},[(0,r.createElementVNode)("h5",{class:"text-sm font-semibold tracking-tight text-gray-600"},"Log Settings"),(0,r.createElementVNode)("h5",{class:"text-xs tracking-tight text-gray-400 mt-4 italic text-justify"},"Showing the debugging logs may slow down the performance of the simulator. Turn off the logs for better performance")],-1);var s=t(68524),a=t(91098),c=t(50967),u=t(70838);const d={components:{DefaultInput:s.Z,DefaultSwitch:c.Z,DefaultTextArea:u.Z},data:function(){return{useVersionBuilder:(0,a.P)()}}};const m=(0,t(83744).Z)(d,[["render",function(e,n,t,s,a,c){var u=(0,r.resolveComponent)("DefaultInput"),d=(0,r.resolveComponent)("DefaultSwitch"),m=(0,r.resolveComponent)("DefaultTextArea");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[o,(0,r.createVNode)(u,{modelValue:a.useVersionBuilder.builder.simulator.subscriber.phone_number,"onUpdate:modelValue":n[0]||(n[0]=function(e){return a.useVersionBuilder.builder.simulator.subscriber.phone_number=e}),label:"Mobile number",placeholder:"26772001234",class:"mb-6"},null,8,["modelValue"]),(0,r.createVNode)(d,{modelValue:a.useVersionBuilder.builder.simulator.settings.allow_timeouts,"onUpdate:modelValue":n[1]||(n[1]=function(e){return a.useVersionBuilder.builder.simulator.settings.allow_timeouts=e}),label:"Allow Timeouts",class:"mb-6"},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("span",i," — "+(0,r.toDisplayString)(a.useVersionBuilder.builder.simulator.settings.allow_timeouts?"Timeout enabled":"Timeout disabled"),1)]})),_:1},8,["modelValue"]),(0,r.createVNode)(u,{modelValue:a.useVersionBuilder.builder.simulator.settings.timeout_limit_in_seconds,"onUpdate:modelValue":n[2]||(n[2]=function(e){return a.useVersionBuilder.builder.simulator.settings.timeout_limit_in_seconds=e}),type:"number",label:"Timeout In Seconds",placeholder:"120",disabled:0==a.useVersionBuilder.builder.simulator.settings.allow_timeouts,class:"mb-6"},null,8,["modelValue","disabled"]),(0,r.createVNode)(m,{modelValue:a.useVersionBuilder.builder.simulator.settings.timeout_message,"onUpdate:modelValue":n[3]||(n[3]=function(e){return a.useVersionBuilder.builder.simulator.settings.timeout_message=e}),label:"Timeout Message",disabled:0==a.useVersionBuilder.builder.simulator.settings.allow_timeouts},null,8,["modelValue","disabled"]),l,(0,r.createVNode)(d,{modelValue:a.useVersionBuilder.builder.simulator.debugger.return_logs,"onUpdate:modelValue":n[4]||(n[4]=function(e){return a.useVersionBuilder.builder.simulator.debugger.return_logs=e}),label:"Show Debugging Logs",class:"mb-6"},null,8,["modelValue"]),a.useVersionBuilder.builder.simulator.debugger.return_logs?((0,r.openBlock)(),(0,r.createBlock)(d,{key:0,modelValue:a.useVersionBuilder.builder.simulator.debugger.return_summarized_logs,"onUpdate:modelValue":n[5]||(n[5]=function(e){return a.useVersionBuilder.builder.simulator.debugger.return_summarized_logs=e}),label:"Summarize Debugging Logs",class:"mb-6"},null,8,["modelValue"])):(0,r.createCommentVNode)("",!0)])}]])},60624:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var r=t(94865);var o=t(52587),i=t(40208),l=t(91098);const s={props:["showEditor"],components:{BuilderEditorAside:o.default,BuilderSimulatorAside:i.default},data:function(){return{useVersionBuilder:(0,l.P)()}}};const a=(0,t(83744).Z)(s,[["render",function(e,n,t,o,i,l){var s=(0,r.resolveComponent)("BuilderEditorAside"),a=(0,r.resolveComponent)("BuilderSimulatorAside");return(0,r.openBlock)(),(0,r.createBlock)(r.Transition,{name:"fade",mode:"out-in",duration:250},{default:(0,r.withCtx)((function(){return[i.useVersionBuilder.hasDownloadedBuilder&&i.useVersionBuilder.hasSavedBuilder?((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:0},[t.showEditor?((0,r.openBlock)(),(0,r.createBlock)(s,{key:0})):((0,r.openBlock)(),(0,r.createBlock)(a,{key:1}))],64)):(0,r.createCommentVNode)("",!0)]})),_:1})}]])},49201:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var r=t(94865),o={key:0,class:"text-sm text-gray-500 mb-5"},i=(0,r.createTextVNode)("Cloning "),l={class:"text-blue-500 font-bold"},s=(0,r.createTextVNode)(" screen"),a={key:0,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},c=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],u=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1);var d=t(39038),m=t(68524),g=t(75802),p=t(91098),h=t(55092);const f={components:{useForm:d.cI,DefaultInput:m.Z,DefaultModal:g.Z,PrimaryButton:h.Z},props:{screen:{type:Object,default:null}},data:function(){return{form:null,useVersionBuilder:(0,p.P)()}},computed:{action:function(){return this.screen?"Clone":"Create"}},methods:{resetForm:function(){this.form=(0,d.cI)(this.screen?(0,p.P)().getClonedScreen(this.screen):(0,p.P)().getBlankScreen())},createScreen:function(e){this.form.clearErrors();var n=this.useVersionBuilder.searchScreens(this.form.name,!0).length;if(0==this.form.name.length)this.form.setError("name","The screen name is required");else if(this.form.name.length<3)this.form.setError("name","The screen name is too short");else if(this.form.name.length>50)this.form.setError("name","The screen name is too long");else if(n>0)this.form.setError("name","This screen name is already in use");else{var t=this.form.data();this.useVersionBuilder.addScreen(t),this.useVersionBuilder.selectScreen(t),this.$message({message:"Screen "+(this.screen?"cloned":"created")+" successfully",type:"success"}),e()}},cancelCreateScreen:function(){this.form.clearErrors()}}};const b=(0,t(83744).Z)(f,[["render",function(e,n,t,d,m,g){var p=(0,r.resolveComponent)("DefaultInput"),h=(0,r.resolveComponent)("PrimaryButton"),f=(0,r.resolveComponent)("DefaultModal");return(0,r.openBlock)(),(0,r.createBlock)(f,{defaultText:"Cancel",onOpen:n[1]||(n[1]=function(e){return g.resetForm()}),onClose:n[2]||(n[2]=function(n){return e.$emit("close")}),primaryAction:g.createScreen,primaryText:g.action+" Screen",defaultAction:g.cancelCreateScreen},{title:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(g.action+" Screen"),1)]})),default:(0,r.withCtx)((function(e){var a=e.firePrimaryAction;return[t.screen?((0,r.openBlock)(),(0,r.createElementBlock)("p",o,[i,(0,r.createElementVNode)("span",l,(0,r.toDisplayString)(t.screen.name),1),s])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(p,{modelValue:m.form.name,"onUpdate:modelValue":n[0]||(n[0]=function(e){return m.form.name=e}),label:"Name",placeholder:"Home",error:m.form.errors.name,onKeyup:(0,r.withKeys)(a,["enter"]),autofocus:!0},null,8,["modelValue","error","onKeyup"])]})),trigger:(0,r.withCtx)((function(){return[t.screen?((0,r.openBlock)(),(0,r.createElementBlock)("svg",a,c)):((0,r.openBlock)(),(0,r.createBlock)(h,{key:1,name:"trigger",class:"px-3"},{default:(0,r.withCtx)((function(){return[u,(0,r.renderSlot)(e.$slots,"default")]})),_:3}))]})),_:3},8,["primaryAction","primaryText","defaultAction"])}]])},84798:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var r=t(94865),o=(0,r.createTextVNode)("Delete Screen"),i={class:"text-sm text-gray-500 mb-5"},l=(0,r.createTextVNode)("Are you sure you want to delete the "),s={class:"text-blue-500 font-bold"},a=(0,r.createTextVNode)(" screen. After this screen is deleted you cannot recover it again."),c=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),u={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},d=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)];var m=t(75802),g=t(91098),p=t(55092);const h={components:{DefaultModal:m.Z,PrimaryButton:p.Z},props:{screen:Object,showButton:{type:Boolean,default:!1}},data:function(){return{useVersionBuilder:(0,g.P)()}},methods:{deleteScreen:function(e){var n=this.useVersionBuilder.hasSelectedSpecificScreen(this.screen);this.useVersionBuilder.removeScreen(this.screen);var t=this.useVersionBuilder.hasScreenMarkedAsFirstDisplayScreen();this.useVersionBuilder.hasScreens?0==t&&this.useVersionBuilder.markScreenAsFirstDisplayScreen(this.useVersionBuilder.screens[0]):this.useVersionBuilder.unselectScreen(),n&&this.useVersionBuilder.selectRecomendedScreen(),this.$message({message:"Screen deleted successfully",type:"success"}),e()}}};const f=(0,t(83744).Z)(h,[["render",function(e,n,t,m,g,p){var h=(0,r.resolveComponent)("PrimaryButton"),f=(0,r.resolveComponent)("DefaultModal");return(0,r.openBlock)(),(0,r.createBlock)(f,{defaultText:"Cancel",onOpen:n[0]||(n[0]=function(n){return e.$emit("open")}),onClose:n[1]||(n[1]=function(n){return e.$emit("close")}),dangerText:"Delete Screen",dangerAction:p.deleteScreen},{title:(0,r.withCtx)((function(){return[o]})),trigger:(0,r.withCtx)((function(){return[t.showButton?((0,r.openBlock)(),(0,r.createBlock)(h,{key:0,name:"trigger",class:"px-3"},{default:(0,r.withCtx)((function(){return[c]})),_:1})):((0,r.openBlock)(),(0,r.createElementBlock)("svg",u,d))]})),default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("p",i,[l,(0,r.createElementVNode)("span",s,(0,r.toDisplayString)(t.screen.name),1),a])]})),_:1},8,["dangerAction"])}]])}}]);