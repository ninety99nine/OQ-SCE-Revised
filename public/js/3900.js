"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3900,472,9201,4798],{60472:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var n=t(94865),o={class:"flex justify-end relative"},s=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 hover:text-blue-500 cursor-grab active:cursor-grabbing draggble-handle",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1),l={class:"absolute right-0 w-24 flex group-hover:hidden justify-end"},c={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-green-500 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},a=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)],i={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-green-500 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},u=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},null,-1),(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},null,-1)];var d=t(91098),m=t(84798),h=t(49201);const f={props:["screen","index"],components:{DeleteScreenModal:m.default,CreateScreenModal:h.default},data:function(){return{useVersionBuilder:(0,d.P)()}},computed:{active:function(){return this.screen.id===(this.useVersionBuilder.selectedScreen||{}).id},firstDisplayScreen:function(){return this.screen.first_display_screen},usingConditionalScreens:function(){return this.useVersionBuilder.builder.conditional_screens.active},usingRepeatingScreen:function(){return["yes","conditional"].includes(this.screen.repeat.active.selected_type)}},methods:{selectScreen:function(){this.useVersionBuilder.selectScreen(this.screen.id)},duplicateScreen:function(){}}};const p=(0,t(83744).Z)(f,[["render",function(e,r,t,d,m,h){var f=(0,n.resolveComponent)("DeleteScreenModal"),p=(0,n.resolveComponent)("CreateScreenModal");return(0,n.openBlock)(),(0,n.createElementBlock)("li",{onClick:r[0]||(r[0]=function(){return h.selectScreen&&h.selectScreen.apply(h,arguments)}),class:(0,n.normalizeClass)(["group overflow-hidden text-xs text-gray-700 flex justify-between border rounded-md cursor-pointer p-2 mb-1 hover:bg-blue-50 hover:border-blue-300 hover:shadow",h.active?"border-blue-300 bg-blue-100 shadow":"border-transparent"])},[t.screen.name?((0,n.openBlock)(),(0,n.createElementBlock)("span",{key:0,class:(0,n.normalizeClass)({"text-blue-500":h.active})},(0,n.toDisplayString)(t.screen.name),3)):((0,n.openBlock)(),(0,n.createElementBlock)("span",{key:1,class:(0,n.normalizeClass)(["text-red-500",{italic:h.active}])},"No name",2)),(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["absolute right-0 w-24 hidden group-hover:flex justify-end",{"bg-blue-50":h.active}])},[(0,n.createVNode)(f,{screen:t.screen},null,8,["screen"]),(0,n.createVNode)(p,{screen:t.screen},null,8,["screen"]),s],2),(0,n.createElementVNode)("div",l,[h.usingRepeatingScreen?((0,n.openBlock)(),(0,n.createElementBlock)("svg",c,a)):(0,n.createCommentVNode)("",!0),h.firstDisplayScreen&&!h.usingConditionalScreens?((0,n.openBlock)(),(0,n.createElementBlock)("svg",i,u)):(0,n.createCommentVNode)("",!0)])])],2)}]])},23900:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var n=t(94865),o={class:"h-48 overflow-y-auto border bg-gray-50 rounded-md p-2 resize-y"},s=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-40 w-40 text-blue-100 m-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1);var l=t(9980),c=t.n(l),a=t(60472),i=t(91098);const u={components:{draggable:c(),ScreenMenu:a.default},data:function(){return{useVersionBuilder:(0,i.P)()}},computed:{filteredScreens:{get:function(){return this.useVersionBuilder.filteredScreens.map((function(e){return{id:e.id,name:e.name,first_display_screen:e.first_display_screen,repeat:{active:{selected_type:e.repeat.active.selected_type}}}}))},set:function(e){var r=this;""==this.useVersionBuilder.filterScreenSearch?this.useVersionBuilder.builder.screens=e.map((function(e){return r.useVersionBuilder.builder.screens.find((function(r){return r.id===e.id}))})):this.$message({message:"You cannot reorder screens while searching",type:"warning"})}}}};const d=(0,t(83744).Z)(u,[["render",function(e,r,t,l,c,a){var i=(0,n.resolveComponent)("ScreenMenu"),u=(0,n.resolveComponent)("draggable");return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createVNode)(u,{tag:"ul",invertSwap:!0,"item-key":"screen-menus",handle:".draggble-handle","ghost-class":"bg-yellow-100",modelValue:a.filteredScreens,"onUpdate:modelValue":r[0]||(r[0]=function(e){return a.filteredScreens=e})},(0,n.createSlots)({item:(0,n.withCtx)((function(e){var r=e.element,t=e.index;return[((0,n.openBlock)(),(0,n.createBlock)(i,{screen:r,index:t,key:r.id,class:"draggble-screen"},null,8,["screen","index"]))]})),_:2},[0===a.filteredScreens.length?{name:"footer",fn:(0,n.withCtx)((function(){return[s]}))}:void 0]),1032,["modelValue"])])}]])},49201:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var n=t(94865),o={key:0,class:"text-sm text-gray-500 mb-5"},s=(0,n.createTextVNode)("Cloning "),l={class:"text-blue-500 font-bold"},c=(0,n.createTextVNode)(" screen"),a={key:0,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},i=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],u=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1);var d=t(39038),m=t(68524),h=t(75802),f=t(91098),p=t(55092);const v={components:{useForm:d.cI,DefaultInput:m.Z,DefaultModal:h.Z,PrimaryButton:p.Z},props:{screen:{type:Object,default:null}},data:function(){return{form:null,useVersionBuilder:(0,f.P)()}},computed:{action:function(){return this.screen?"Clone":"Create"}},methods:{resetForm:function(){this.form=(0,d.cI)(this.screen?(0,f.P)().getClonedScreen(this.screen):(0,f.P)().getBlankScreen())},createScreen:function(e){this.form.clearErrors();var r=this.useVersionBuilder.searchScreens(this.form.name,!0).length;if(0==this.form.name.length)this.form.setError("name","The screen name is required");else if(this.form.name.length<3)this.form.setError("name","The screen name is too short");else if(this.form.name.length>50)this.form.setError("name","The screen name is too long");else if(r>0)this.form.setError("name","This screen name is already in use");else{var t=this.form.data();this.useVersionBuilder.addScreen(t),this.useVersionBuilder.selectScreen(t),this.$message({message:"Screen "+(this.screen?"cloned":"created")+" successfully",type:"success"}),e()}},cancelCreateScreen:function(){this.form.clearErrors()}}};const g=(0,t(83744).Z)(v,[["render",function(e,r,t,d,m,h){var f=(0,n.resolveComponent)("DefaultInput"),p=(0,n.resolveComponent)("PrimaryButton"),v=(0,n.resolveComponent)("DefaultModal");return(0,n.openBlock)(),(0,n.createBlock)(v,{defaultText:"Cancel",onOpen:r[1]||(r[1]=function(e){return h.resetForm()}),onClose:r[2]||(r[2]=function(r){return e.$emit("close")}),primaryAction:h.createScreen,primaryText:h.action+" Screen",defaultAction:h.cancelCreateScreen},{title:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(h.action+" Screen"),1)]})),default:(0,n.withCtx)((function(e){var a=e.firePrimaryAction;return[t.screen?((0,n.openBlock)(),(0,n.createElementBlock)("p",o,[s,(0,n.createElementVNode)("span",l,(0,n.toDisplayString)(t.screen.name),1),c])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(f,{modelValue:m.form.name,"onUpdate:modelValue":r[0]||(r[0]=function(e){return m.form.name=e}),label:"Name",placeholder:"Home",error:m.form.errors.name,onKeyup:(0,n.withKeys)(a,["enter"]),autofocus:!0},null,8,["modelValue","error","onKeyup"])]})),trigger:(0,n.withCtx)((function(){return[t.screen?((0,n.openBlock)(),(0,n.createElementBlock)("svg",a,i)):((0,n.openBlock)(),(0,n.createBlock)(p,{key:1,name:"trigger",class:"px-3"},{default:(0,n.withCtx)((function(){return[u,(0,n.renderSlot)(e.$slots,"default")]})),_:3}))]})),_:3},8,["primaryAction","primaryText","defaultAction"])}]])},84798:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var n=t(94865),o=(0,n.createTextVNode)("Delete Screen"),s={class:"text-sm text-gray-500 mb-5"},l=(0,n.createTextVNode)("Are you sure you want to delete the "),c={class:"text-blue-500 font-bold"},a=(0,n.createTextVNode)(" screen. After this screen is deleted you cannot recover it again."),i=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),u={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},d=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)];var m=t(75802),h=t(91098),f=t(55092);const p={components:{DefaultModal:m.Z,PrimaryButton:f.Z},props:{screen:Object,showButton:{type:Boolean,default:!1}},data:function(){return{useVersionBuilder:(0,h.P)()}},methods:{deleteScreen:function(e){var r=this.useVersionBuilder.hasSelectedSpecificScreen(this.screen);this.useVersionBuilder.removeScreen(this.screen);var t=this.useVersionBuilder.hasScreenMarkedAsFirstDisplayScreen();this.useVersionBuilder.hasScreens?0==t&&this.useVersionBuilder.markScreenAsFirstDisplayScreen(this.useVersionBuilder.screens[0]):this.useVersionBuilder.unselectScreen(),r&&this.useVersionBuilder.selectRecomendedScreen(),this.$message({message:"Screen deleted successfully",type:"success"}),e()}}};const v=(0,t(83744).Z)(p,[["render",function(e,r,t,m,h,f){var p=(0,n.resolveComponent)("PrimaryButton"),v=(0,n.resolveComponent)("DefaultModal");return(0,n.openBlock)(),(0,n.createBlock)(v,{defaultText:"Cancel",onOpen:r[0]||(r[0]=function(r){return e.$emit("open")}),onClose:r[1]||(r[1]=function(r){return e.$emit("close")}),dangerText:"Delete Screen",dangerAction:f.deleteScreen},{title:(0,n.withCtx)((function(){return[o]})),trigger:(0,n.withCtx)((function(){return[t.showButton?((0,n.openBlock)(),(0,n.createBlock)(p,{key:0,name:"trigger",class:"px-3"},{default:(0,n.withCtx)((function(){return[i]})),_:1})):((0,n.openBlock)(),(0,n.createElementBlock)("svg",u,d))]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("p",s,[l,(0,n.createElementVNode)("span",c,(0,n.toDisplayString)(t.screen.name),1),a])]})),_:1},8,["dangerAction"])}]])}}]);