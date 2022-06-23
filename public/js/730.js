"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[730,2611,3374,7488,1966,6792,4553],{73374:(e,t,o)=>{o.r(t),o.d(t,{default:()=>D});var n=o(94865),a={key:0,class:"text-sm text-gray-500 mb-5"},r=(0,n.createTextVNode)("Cloning "),i={class:"text-blue-500 font-bold"},l=(0,n.createTextVNode)(" navigation"),s={class:"flex items-end justify-between"},c=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),d={key:0,class:"ml-2"},u={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},m=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],p={key:2,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},v=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)];var g=o(96486),f=o.n(g),h=o(39038),y=o(68524),N=o(75802),V=o(91098),k=o(91209),x=o(55092),w=o(19138),C=o(88458),b=o(26232),B=o(87087),_=o(71121);function E(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function S(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?E(Object(o),!0).forEach((function(t){T(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function T(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const M={components:{useForm:h.cI,DefaultInput:y.Z,DefaultModal:N.Z,DefaultSelect:k.Z,PrimaryButton:x.Z,DefaultColorPicker:b.Z,DefaultTextArea:w.Z,SelectActiveState:C.default,TextOrCodeEditor:B.Z,ScreenOrDisplaySelector:_.default},props:{navigations:{type:Array},navigation:{type:Object,default:null},index:{type:Number,default:null},mode:{type:String,default:null,validator:function(e){return["create","clone","update"].includes(e)}}},data:function(){return{form:null,navigationTypes:[{label:"Custom Inputs",value:"custom"},{label:"Regex Match",value:"regex"}],useVersionBuilder:(0,V.P)()}},computed:{modeInCaps:function(){return this.mode.charAt(0).toUpperCase()+this.mode.slice(1)}},methods:{resetForm:function(){"create"==this.mode?this.form=(0,h.cI)((0,V.P)().getBlankNavigation()):"clone"==this.mode?this.form=(0,h.cI)((0,V.P)().getClonedNavigation(this.navigation)):"update"==this.mode&&(this.form=(0,h.cI)(S(S({},(0,V.P)().getBlankNavigation()),f().cloneDeep(this.navigation))))},createNavigation:function(e){this.form.clearErrors();var t=this.useVersionBuilder.searchNavigations(this.navigations,this.form.name,!0).length;if(0==this.form.name.length?this.form.setError("name","The navigation name is required"):this.form.name.length<3?this.form.setError("name","The navigation name is too short"):this.form.name.length>50?this.form.setError("name","The navigation name is too long"):(["create","clone"].includes(this.mode)&&t||"update"==this.mode&&t&&this.navigation.name!==this.form.name)&&this.form.setError("name","This navigation name is already in use"),"custom"==this.form.selected_type?(0==this.form[this.form.selected_type].inputs.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].inputs.text)||1==this.form[this.form.selected_type].inputs.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].inputs.code_editor_text))&&this.form.setError("inputs","The navigation input is required"):"regex"==this.form.selected_type&&(0==this.form[this.form.selected_type].rule.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].rule.text)||1==this.form[this.form.selected_type].rule.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].rule.code_editor_text))&&this.form.setError("rule","The navigation regex rule is required"),(0==this.form[this.form.selected_type].step.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].step.text)||1==this.form[this.form.selected_type].step.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].step.code_editor_text))&&this.form.setError("step","The navigation step is required"),(0==this.form[this.form.selected_type].link.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].link.text)||1==this.form[this.form.selected_type].link.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].link.code_editor_text))&&this.form.setError("link","The navigation link is required"),!1===this.form.hasErrors){var o=this.form.data();"update"==this.mode?this.useVersionBuilder.updateNavigation(this.navigations,o,this.index):this.useVersionBuilder.addNavigation(this.navigations,o);var n=this.mode+"d";this.$message({message:"Navigation "+n+" successfully",type:"success"}),e()}},cancelCreateNavigation:function(){this.form.clearErrors()}}};const D=(0,o(83744).Z)(M,[["render",function(e,t,o,g,f,h){var y=this,N=(0,n.resolveComponent)("SelectActiveState"),V=(0,n.resolveComponent)("DefaultInput"),k=(0,n.resolveComponent)("DefaultSelect"),x=(0,n.resolveComponent)("TextOrCodeEditor"),w=(0,n.resolveComponent)("ScreenOrDisplaySelector"),C=(0,n.resolveComponent)("DefaultTextArea"),b=(0,n.resolveComponent)("DefaultColorPicker"),B=(0,n.resolveComponent)("PrimaryButton"),_=(0,n.resolveComponent)("DefaultModal");return(0,n.openBlock)(),(0,n.createBlock)(_,{defaultText:"Cancel",onOpen:t[9]||(t[9]=function(e){return h.resetForm()}),onClose:t[10]||(t[10]=function(t){return e.$emit("close")}),primaryAction:h.createNavigation,primaryText:h.modeInCaps+" Navigation",defaultAction:h.cancelCreateNavigation},{title:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(h.modeInCaps+" Navigation"),1)]})),trigger:(0,n.withCtx)((function(){return["create"==o.mode?((0,n.openBlock)(),(0,n.createBlock)(B,{key:0,name:"trigger",class:"px-3"},{default:(0,n.withCtx)((function(){return[c,e.$slots.default?((0,n.openBlock)(),(0,n.createElementBlock)("span",d,[(0,n.renderSlot)(e.$slots,"default")])):(0,n.createCommentVNode)("",!0)]})),_:3})):"clone"==o.mode?((0,n.openBlock)(),(0,n.createElementBlock)("svg",u,m)):"update"==o.mode?((0,n.openBlock)(),(0,n.createElementBlock)("svg",p,v)):(0,n.createCommentVNode)("",!0)]})),default:(0,n.withCtx)((function(){return["clone"==o.mode?((0,n.openBlock)(),(0,n.createElementBlock)("p",a,[r,(0,n.createElementVNode)("span",i,(0,n.toDisplayString)(o.navigation.name),1),l])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(N,{modelValue:f.form.active,"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.form.active=e}),class:"mb-6"},null,8,["modelValue"]),(0,n.createVNode)(V,{modelValue:f.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.form.name=e}),label:"Name",error:f.form.errors.name,class:"mb-6"},null,8,["modelValue","error"]),(0,n.createVNode)(k,{modelValue:f.form.selected_type,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.form.selected_type=e}),options:f.navigationTypes,label:"Navigation Trigger",error:f.form.errors.selected_type,class:"mb-6"},null,8,["modelValue","options","error"]),"custom"==f.form.selected_type?((0,n.openBlock)(),(0,n.createBlock)(x,{key:1,modelValue:f.form[y.form.selected_type].inputs,"onUpdate:modelValue":t[3]||(t[3]=function(e){return f.form[y.form.selected_type].inputs=e}),label:"Input(s)",placeholder:"1, 2, 3",error:f.form.errors.inputs,class:"mb-6"},null,8,["modelValue","error"])):"regex"==f.form.selected_type?((0,n.openBlock)(),(0,n.createBlock)(x,{key:2,modelValue:f.form[y.form.selected_type].rule,"onUpdate:modelValue":t[4]||(t[4]=function(e){return f.form[y.form.selected_type].rule=e}),label:"Regex Rule",placeholder:"/[a-zA-Z]+/",error:f.form.errors.rule,class:"mb-6"},null,8,["modelValue","error"])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(x,{modelValue:f.form[y.form.selected_type].step,"onUpdate:modelValue":t[5]||(t[5]=function(e){return f.form[y.form.selected_type].step=e}),label:"Step",placeholder:"1",note:"Loops to navigate",error:f.form.errors.step,class:"mb-6"},null,8,["modelValue","error"]),(0,n.createVNode)(w,{modelValue:f.form[y.form.selected_type].link,"onUpdate:modelValue":t[6]||(t[6]=function(e){return f.form[y.form.selected_type].link=e}),label:"Navigation Target",info:"Screen to trigger navigaition",showDisplays:!1,error:f.form.errors.link,class:"mb-6"},null,8,["modelValue","error"]),(0,n.createElementVNode)("div",s,[(0,n.createVNode)(C,{modelValue:f.form.comment,"onUpdate:modelValue":t[7]||(t[7]=function(e){return f.form.comment=e}),label:"Comment",class:"flex-1 mr-4"},null,8,["modelValue"]),(0,n.createVNode)(b,{modelValue:f.form.hexColor,"onUpdate:modelValue":t[8]||(t[8]=function(e){return f.form.hexColor=e})},null,8,["modelValue"])])]})),_:3},8,["primaryAction","primaryText","defaultAction"])}]])},77488:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var n=o(94865),a=(0,n.createTextVNode)("Delete Navigation"),r={class:"text-sm text-gray-500 mb-5"},i=(0,n.createTextVNode)("Are you sure you want to delete the "),l={class:"text-blue-500 font-bold"},s=(0,n.createTextVNode)(" navigation. After this navigation is deleted you cannot recover it again."),c=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),d={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},u=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)];var m=o(75802),p=o(91098),v=o(55092);const g={components:{DefaultModal:m.Z,PrimaryButton:v.Z},props:{navigations:{type:Object,default:function(){return[]}},navigation:{type:Object,default:null},index:{type:Number,default:null},showButton:{type:Boolean,default:!1}},data:function(){return{useVersionBuilder:(0,p.P)()}},methods:{deleteNavigation:function(e){this.useVersionBuilder.removeNavigationByIndex(this.navigations,this.index),this.$message({message:"Navigation deleted successfully",type:"success"}),e()}}};const f=(0,o(83744).Z)(g,[["render",function(e,t,o,m,p,v){var g=(0,n.resolveComponent)("PrimaryButton"),f=(0,n.resolveComponent)("DefaultModal");return(0,n.openBlock)(),(0,n.createBlock)(f,{defaultText:"Cancel",onOpen:t[0]||(t[0]=function(t){return e.$emit("open")}),onClose:t[1]||(t[1]=function(t){return e.$emit("close")}),dangerText:"Delete Navigation",dangerAction:v.deleteNavigation},{title:(0,n.withCtx)((function(){return[a]})),trigger:(0,n.withCtx)((function(){return[o.showButton?((0,n.openBlock)(),(0,n.createBlock)(g,{key:0,name:"trigger",class:"px-3"},{default:(0,n.withCtx)((function(){return[c]})),_:1})):((0,n.openBlock)(),(0,n.createElementBlock)("svg",d,u))]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("p",r,[i,(0,n.createElementVNode)("span",l,(0,n.toDisplayString)(o.navigation.name),1),s])]})),_:1},8,["dangerAction"])}]])},11966:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var n=o(94865),a={class:"col-span-6 flex items-center"},r={class:"col-span-6 flex justify-end items-center relative"},i={class:"flex items-center text-gray-400 text-xs transition-all duration-300 opacity-100 group-hover:opacity-0"},l=(0,n.createTextVNode)("Active"),s=(0,n.createTextVNode)("Inactive"),c=(0,n.createTextVNode)("Conditional"),d={class:"absolute right-8 flex items-center justify-end transition-all duration-300 opacity-0 group-hover:opacity-100"},u=(0,n.createTextVNode)("Copy Navigation"),m=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 cursor-grab hover:text-blue-500 active:cursor-grabbing draggble-handle",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1),p={class:"ml-4 mr-1"},v=(0,n.createElementVNode)("div",{class:"border-t border-dashed pt-4 mt-4"},[(0,n.createElementVNode)("p",{class:"text-xs text-gray-600 break-normal"},"Navigation details ...")],-1),g={class:"flex justify-between p-4"},f={class:"text-xs mr-4"};var h=o(47936),y=o(41745),N=o(11868),V=o(80498),k=o(23806),x=o(39266),w=o(91098),C=o(77488),b=o(26232),B=o(73374);const _={props:["navigations","navigation","index"],components:{SlideUpDown:h.Z,CopyToClipboard:y.Z,InfoPopover:N.Z,SuccessBadge:V.Z,PrimaryBadge:k.Z,WarningBadge:x.Z,DeleteNavigationModal:C.default,DefaultColorPicker:b.Z,CreateOrUpdateNavigationModal:B.default},data:function(){return{active:!1,clipboards:[{label:"Copy Name",value:this.navigation.name,message:"Copied the Navigation Name"}],useVersionBuilder:(0,w.P)()}},computed:{totalExactMatches:function(){return this.useVersionBuilder.searchNavigations(this.navigations,this.navigation.name,!0).length}},methods:{toggleSelection:function(){this.active=!this.active},copyNavigation:function(){window.localStorage.setItem("navigation",JSON.stringify(this.navigation)),this.$message({message:"Navigation Copied",type:"success"})}}};const E=(0,o(83744).Z)(_,[["render",function(e,t,o,h,y,N){var V=(0,n.resolveComponent)("SuccessBadge"),k=(0,n.resolveComponent)("WarningBadge"),x=(0,n.resolveComponent)("PrimaryBadge"),w=(0,n.resolveComponent)("CopyToClipboard"),C=(0,n.resolveComponent)("CreateOrUpdateNavigationModal"),b=(0,n.resolveComponent)("DeleteNavigationModal"),B=(0,n.resolveComponent)("InfoPopover"),_=(0,n.resolveComponent)("DefaultColorPicker"),E=(0,n.resolveComponent)("SlideUpDown");return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:(0,n.normalizeClass)(["rounded-md border",y.active?"shadow-sm border-2 my-4":"mb-2"]),style:(0,n.normalizeStyle)({borderLeftColor:o.navigation.hexColor,borderLeftWidth:"4px"})},[(0,n.createElementVNode)("div",{onClick:t[1]||(t[1]=function(e){return N.toggleSelection()}),class:(0,n.normalizeClass)(["grid grid-cols-12 group text-xs text-gray-700 py-2 px-4 cursor-pointer",y.active?"border-b border-dashed bg-blue-50 rounded-tr-md":"bg-gray-50 rounded-r-md"]),style:(0,n.normalizeStyle)({backgroundColor:o.navigation.hexColor+"05"})},[(0,n.createElementVNode)("div",a,[o.navigation.name&&1==N.totalExactMatches?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,class:(0,n.normalizeClass)({"text-blue-500 font-semibold":y.active})},(0,n.toDisplayString)(o.navigation.name),3)):o.navigation.name&&N.totalExactMatches>1?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:1,class:(0,n.normalizeClass)(["text-red-500",{"font-semibold italic":y.active}])},"Duplicate name",2)):((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:2,class:(0,n.normalizeClass)(["text-red-500",{"font-semibold italic":y.active}])},"No name",2))]),(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("div",i,["yes"==o.navigation.active.selected_type?((0,n.openBlock)(),(0,n.createBlock)(V,{key:0},{default:(0,n.withCtx)((function(){return[l]})),_:1})):"no"==o.navigation.active.selected_type?((0,n.openBlock)(),(0,n.createBlock)(k,{key:1},{default:(0,n.withCtx)((function(){return[s]})),_:1})):"conditional"==o.navigation.active.selected_type?((0,n.openBlock)(),(0,n.createBlock)(x,{key:2},{default:(0,n.withCtx)((function(){return[c]})),_:1})):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",d,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(y.clipboards,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(w,{value:e.value,message:e.message,key:t,class:"whitespace-nowrap mr-2"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(x,{clickable:!0},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.label),1)]})),_:2},1024)]})),_:2},1032,["value","message"])})),128)),(0,n.createVNode)(x,{onClick:t[0]||(t[0]=(0,n.withModifiers)((function(e){return N.copyNavigation()}),["stop"])),clickable:!0,class:"whitespace-nowrap mr-4"},{default:(0,n.withCtx)((function(){return[u]})),_:1}),(0,n.createVNode)(C,{navigations:o.navigations,navigation:o.navigation,index:o.index,mode:"update"},null,8,["navigations","navigation","index"]),(0,n.createVNode)(b,{navigations:o.navigations,navigation:o.navigation,index:o.index},null,8,["navigations","navigation","index"]),(0,n.createVNode)(C,{navigations:o.navigations,navigation:o.navigation,mode:"clone"},null,8,["navigations","navigation"]),m]),(0,n.createElementVNode)("div",p,[(0,n.createVNode)(B,{title:o.navigation.type},{default:(0,n.withCtx)((function(){return[v]})),_:1},8,["title"])])])],6),(0,n.createVNode)(E,{modelValue:y.active,"onUpdate:modelValue":t[3]||(t[3]=function(e){return y.active=e}),duration:300},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",g,[(0,n.createElementVNode)("span",f,(0,n.toDisplayString)(o.navigation.comment?o.navigation.comment:"No comments"),1),(0,n.createVNode)(_,{modelValue:o.navigation.hexColor,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.navigation.hexColor=e})},null,8,["modelValue"])])]})),_:1},8,["modelValue"])],6)}]])},96792:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var n=o(94865);var a=o(9980),r=o.n(a),i=o(84553),l=o(11966),s=o(91098);const c={props:["modelValue","searchTerm"],components:{NoNavigations:i.default,draggable:r(),NavigationMenu:l.default},data:function(){return{useVersionBuilder:(0,s.P)()}},computed:{filteredNavigations:{get:function(){var e=this;return this.modelValue.filter((function(t){var o=t.name.toLowerCase().includes(e.searchTerm.toLowerCase());return""==e.searchTerm||o}))},set:function(e){""==this.searchTerm?this.$emit("update:modelValue",e):this.$message({message:"You cannot reorder navigations while searching",type:"warning"})}}}};const d=(0,o(83744).Z)(c,[["render",function(e,t,o,a,r,i){var l=(0,n.resolveComponent)("NavigationMenu"),s=(0,n.resolveComponent)("NoNavigations"),c=(0,n.resolveComponent)("draggable");return(0,n.openBlock)(),(0,n.createBlock)(c,{invertSwap:!0,handle:".draggble-handle","item-key":"navigation-menus","ghost-class":"bg-yellow-100",modelValue:i.filteredNavigations,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.filteredNavigations=e})},{item:(0,n.withCtx)((function(e){var t=e.element,a=e.index;return[((0,n.openBlock)(),(0,n.createBlock)(l,{navigations:o.modelValue,navigation:t,index:a,key:t.id},null,8,["navigations","navigation","index"]))]})),footer:(0,n.withCtx)((function(){return[0==i.filteredNavigations.length?((0,n.openBlock)(),(0,n.createBlock)(s,{key:0,navigations:o.modelValue},null,8,["navigations"])):(0,n.createCommentVNode)("",!0)]})),_:1},8,["modelValue"])}]])},84553:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var n=o(94865),a={class:"flex items-center justify-between bg-white rounded-sm border border-dashed border-gray-400 p-5"},r=(0,n.createStaticVNode)('<div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg><div><p class="text-gray-800 text-md mb-1">No navigations</p><p class="text-gray-600 text-xs">Go ahead and create your first navigation</p></div></div>',1),i={class:"flex justify-end"},l=(0,n.createElementVNode)("span",null,"Create Navigation",-1);const s={props:["navigations"],components:{CreateOrUpdateNavigationModal:o(73374).default}};const c=(0,o(83744).Z)(s,[["render",function(e,t,o,s,c,d){var u=(0,n.resolveComponent)("CreateOrUpdateNavigationModal");return(0,n.openBlock)(),(0,n.createElementBlock)("div",a,[r,(0,n.createElementVNode)("div",i,[(0,n.createVNode)(u,{navigations:o.navigations,mode:"create"},{default:(0,n.withCtx)((function(){return[l]})),_:1},8,["navigations"])])])}]])},42611:(e,t,o)=>{o.r(t),o.d(t,{default:()=>B});var n=o(94865),a={class:"flex items-center justify-between border-b border-dotted pb-4 mb-4"},r={key:0,class:"flex items-center"},i={key:0,class:"text-sm font-semibold tracking-tight text-gray-600"},l={key:1,class:"text-xs text-gray-400 ml-2"},s={class:"flex items-center"},c={key:0,class:"flex items-center"},d=(0,n.createTextVNode)("Paste"),u={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},m=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"},null,-1)],p={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},v=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"},null,-1)],g={key:0},f=(0,n.createElementVNode)("span",{class:"mr-2"},"📌",-1),h={key:0,class:"text-blue-500 font-bold text-xs"},y={key:1,class:"text-blue-500 font-bold text-xs"};var N=o(47936),V=o(96792),k=o(91098),x=o(80498),w=o(14720),C=o(73374);const b={props:{modelValue:Array,title:String,note:String,highlight:{type:Boolean,default:!0},collapsable:{type:Boolean,default:!0}},components:{NavigationMenus:V.default,SlideUpDown:N.Z,SuccessBadge:x.Z,DefaultSearchBar:w.Z,CreateOrUpdateNavigationModal:C.default},data:function(){return{searchTerm:"",setInterval:null,hasNavigationToPaste:!1,isShowingNavigations:!1,canShowNavigationsSummary:!1,localModelValue:this.modelValue,useVersionBuilder:(0,k.P)()}},watch:{modelValue:function(e,t){this.localModelValue=e},localModelValue:function(e,t){this.$emit("update:modelValue",e)}},computed:{screen:function(){return this.useVersionBuilder.selectedScreen}},methods:{pasteNavigation:function(){var e=window.localStorage.getItem("navigation");null!==e&&(e=JSON.parse(e),e=this.useVersionBuilder.getClonedNavigation(e),this.localModelValue.push(e),window.localStorage.removeItem("navigation"),this.hasNavigationToPaste=!1,this.$message({message:"Navigation Pasted",type:"success"}))},checkPastableNavigation:function(){var e=window.localStorage.getItem("navigation");this.hasNavigationToPaste=null!==e}},created:function(){var e=this;setTimeout((function(){e.isShowingNavigations=!0,e.canShowNavigationsSummary=!0}),100),this.setInterval=setInterval((function(){e.checkPastableNavigation()}),1e3)},beforeUnmount:function(){clearInterval(this.setInterval)}};const B=(0,o(83744).Z)(b,[["render",function(e,t,o,N,V,k){var x=(0,n.resolveComponent)("DefaultSearchBar"),w=(0,n.resolveComponent)("SuccessBadge"),C=(0,n.resolveComponent)("CreateOrUpdateNavigationModal"),b=(0,n.resolveComponent)("NavigationMenus"),B=(0,n.resolveComponent)("SlideUpDown");return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:(0,n.normalizeClass)({"p-4 rounded-lg bg-gray-50 shadow-md border":o.highlight})},[(0,n.createElementVNode)("div",a,[o.title||o.note?((0,n.openBlock)(),(0,n.createElementBlock)("div",r,[o.title?((0,n.openBlock)(),(0,n.createElementBlock)("h5",i,(0,n.toDisplayString)(o.title),1)):(0,n.createCommentVNode)("",!0),o.note?((0,n.openBlock)(),(0,n.createElementBlock)("span",l," — "+(0,n.toDisplayString)(o.note),1)):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[V.isShowingNavigations?((0,n.openBlock)(),(0,n.createBlock)(x,{key:0,modelValue:V.searchTerm,"onUpdate:modelValue":t[0]||(t[0]=function(e){return V.searchTerm=e}),placeholder:"Search navigations"},null,8,["modelValue"])):(0,n.createCommentVNode)("",!0)]})),_:1}),(0,n.createElementVNode)("div",s,[(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[V.isShowingNavigations?((0,n.openBlock)(),(0,n.createElementBlock)("div",c,[(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[V.hasNavigationToPaste?((0,n.openBlock)(),(0,n.createBlock)(w,{key:0,onClick:t[1]||(t[1]=(0,n.withModifiers)((function(e){return k.pasteNavigation()}),["stop"])),clickable:!0,class:"mr-4"},{default:(0,n.withCtx)((function(){return[d]})),_:1})):(0,n.createCommentVNode)("",!0)]})),_:1}),V.localModelValue.length?((0,n.openBlock)(),(0,n.createBlock)(C,{key:0,navigations:V.localModelValue,mode:"create",class:"mr-4"},null,8,["navigations"])):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0)]})),_:1}),o.collapsable?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,onClick:t[2]||(t[2]=(0,n.withModifiers)((function(e){return V.isShowingNavigations=!V.isShowingNavigations}),["stop"])),class:"text-gray-400"},[(0,n.createVNode)(n.Transition,{name:"fade",mode:"out-in"},{default:(0,n.withCtx)((function(){return[V.isShowingNavigations?((0,n.openBlock)(),(0,n.createElementBlock)("svg",u,m)):((0,n.openBlock)(),(0,n.createElementBlock)("svg",p,v))]})),_:1})])):(0,n.createCommentVNode)("",!0)])]),(0,n.createVNode)(B,{modelValue:V.isShowingNavigations,"onUpdate:modelValue":t[4]||(t[4]=function(e){return V.isShowingNavigations=e}),duration:300},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(b,{modelValue:V.localModelValue,"onUpdate:modelValue":t[3]||(t[3]=function(e){return V.localModelValue=e}),searchTerm:V.searchTerm,class:(0,n.normalizeClass)(["transition-all duration-1000",V.isShowingNavigations?"mb-0":"mb-8"])},null,8,["modelValue","searchTerm","class"])]})),_:1},8,["modelValue"]),(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[1==V.canShowNavigationsSummary&&0==V.isShowingNavigations?((0,n.openBlock)(),(0,n.createElementBlock)("div",g,[f,0==V.localModelValue.length?((0,n.openBlock)(),(0,n.createElementBlock)("span",h,"No Navigations")):((0,n.openBlock)(),(0,n.createElementBlock)("span",y,"Found "+(0,n.toDisplayString)(V.localModelValue.length)+" "+(0,n.toDisplayString)(1==V.localModelValue.length?" Navigation":" Navigations"),1))])):(0,n.createCommentVNode)("",!0)]})),_:1})],2)}]])},60730:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var n=o(94865),a=(0,n.createElementVNode)("span",null,[(0,n.createTextVNode)(" Activate "),(0,n.createElementVNode)("span",{class:"font-semibold text-blue-500"},"Screen Repeat"),(0,n.createTextVNode)(" to utilize the "),(0,n.createElementVNode)("span",{class:"font-semibold text-blue-500"},"Navigation"),(0,n.createTextVNode)(" functionality. This will grant the ability to navigate between different instances of the screen repeat cycle. The user can navigate to the next or previous instance of the repeat cycle. ")],-1);var r=o(42611),i=o(60835),l=o(91098);const s={props:["display"],components:{NavigationsEditor:r.default,WarningAlert:i.Z},data:function(){return{useVersionBuilder:(0,l.P)()}},computed:{screen:function(){return this.useVersionBuilder.selectedScreen}}};const c=(0,o(83744).Z)(s,[["render",function(e,t,o,r,i,l){var s=(0,n.resolveComponent)("WarningAlert"),c=(0,n.resolveComponent)("NavigationsEditor");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,["no"===l.screen.repeat.active.selected_type?((0,n.openBlock)(),(0,n.createBlock)(s,{key:0,class:"mb-6"},{default:(0,n.withCtx)((function(){return[a]})),_:1})):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(c,{modelValue:o.display.content.screen_repeat_navigation.forward_navigation,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.display.content.screen_repeat_navigation.forward_navigation=e}),title:"Forward Navigation",note:"Proceed to the next repeat loop",class:"mb-6"},null,8,["modelValue"]),(0,n.createVNode)(c,{modelValue:o.display.content.screen_repeat_navigation.backward_navigation,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.display.content.screen_repeat_navigation.backward_navigation=e}),title:"Backward Navigation",note:"Return to the previous repeat loop",class:"mb-6"},null,8,["modelValue"])])}]])}}]);