"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1966,3374,7488],{73374:(e,t,o)=>{o.r(t),o.d(t,{default:()=>O});var n=o(94865),r={key:0,class:"text-sm text-gray-500 mb-5"},a=(0,n.createTextVNode)("Cloning "),i={class:"text-blue-500 font-bold"},l=(0,n.createTextVNode)(" navigation"),s={class:"flex items-end justify-between"},c=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),d={key:0,class:"ml-2"},u={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},m=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],p={key:2,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},f=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)];var v=o(96486),g=o.n(v),h=o(39038),y=o(68524),x=o(75802),V=o(91098),k=o(91209),C=o(55092),N=o(19138),b=o(88458),w=o(26232),B=o(87087),_=o(71121);function E(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function D(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?E(Object(o),!0).forEach((function(t){T(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function T(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const S={components:{useForm:h.cI,DefaultInput:y.Z,DefaultModal:x.Z,DefaultSelect:k.Z,PrimaryButton:C.Z,DefaultColorPicker:w.Z,DefaultTextArea:N.Z,SelectActiveState:b.default,TextOrCodeEditor:B.Z,ScreenOrDisplaySelector:_.default},props:{navigations:{type:Array},navigation:{type:Object,default:null},index:{type:Number,default:null},mode:{type:String,default:null,validator:function(e){return["create","clone","update"].includes(e)}}},data:function(){return{form:null,navigationTypes:[{label:"Custom Inputs",value:"custom"},{label:"Regex Match",value:"regex"}],useVersionBuilder:(0,V.P)()}},computed:{modeInCaps:function(){return this.mode.charAt(0).toUpperCase()+this.mode.slice(1)}},methods:{resetForm:function(){"create"==this.mode?this.form=(0,h.cI)((0,V.P)().getBlankNavigation()):"clone"==this.mode?this.form=(0,h.cI)((0,V.P)().getClonedNavigation(this.navigation)):"update"==this.mode&&(this.form=(0,h.cI)(D(D({},(0,V.P)().getBlankNavigation()),g().cloneDeep(this.navigation))))},createNavigation:function(e){this.form.clearErrors();var t=this.useVersionBuilder.searchNavigations(this.navigations,this.form.name,!0).length;if(0==this.form.name.length?this.form.setError("name","The navigation name is required"):this.form.name.length<3?this.form.setError("name","The navigation name is too short"):this.form.name.length>50?this.form.setError("name","The navigation name is too long"):(["create","clone"].includes(this.mode)&&t||"update"==this.mode&&t&&this.navigation.name!==this.form.name)&&this.form.setError("name","This navigation name is already in use"),"custom"==this.form.selected_type?(0==this.form[this.form.selected_type].inputs.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].inputs.text)||1==this.form[this.form.selected_type].inputs.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].inputs.code_editor_text))&&this.form.setError("inputs","The navigation input is required"):"regex"==this.form.selected_type&&(0==this.form[this.form.selected_type].rule.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].rule.text)||1==this.form[this.form.selected_type].rule.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].rule.code_editor_text))&&this.form.setError("rule","The navigation regex rule is required"),(0==this.form[this.form.selected_type].step.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].step.text)||1==this.form[this.form.selected_type].step.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].step.code_editor_text))&&this.form.setError("step","The navigation step is required"),(0==this.form[this.form.selected_type].link.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].link.text)||1==this.form[this.form.selected_type].link.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].link.code_editor_text))&&this.form.setError("link","The navigation link is required"),!1===this.form.hasErrors){var o=this.form.data();"update"==this.mode?this.useVersionBuilder.updateNavigation(this.navigations,o,this.index):this.useVersionBuilder.addNavigation(this.navigations,o);var n=this.mode+"d";this.$message({message:"Navigation "+n+" successfully",type:"success"}),e()}},cancelCreateNavigation:function(){this.form.clearErrors()}}};const O=(0,o(83744).Z)(S,[["render",function(e,t,o,v,g,h){var y=this,x=(0,n.resolveComponent)("SelectActiveState"),V=(0,n.resolveComponent)("DefaultInput"),k=(0,n.resolveComponent)("DefaultSelect"),C=(0,n.resolveComponent)("TextOrCodeEditor"),N=(0,n.resolveComponent)("ScreenOrDisplaySelector"),b=(0,n.resolveComponent)("DefaultTextArea"),w=(0,n.resolveComponent)("DefaultColorPicker"),B=(0,n.resolveComponent)("PrimaryButton"),_=(0,n.resolveComponent)("DefaultModal");return(0,n.openBlock)(),(0,n.createBlock)(_,{defaultText:"Cancel",onOpen:t[9]||(t[9]=function(e){return h.resetForm()}),onClose:t[10]||(t[10]=function(t){return e.$emit("close")}),primaryAction:h.createNavigation,primaryText:h.modeInCaps+" Navigation",defaultAction:h.cancelCreateNavigation},{title:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(h.modeInCaps+" Navigation"),1)]})),trigger:(0,n.withCtx)((function(){return["create"==o.mode?((0,n.openBlock)(),(0,n.createBlock)(B,{key:0,name:"trigger",class:"px-3"},{default:(0,n.withCtx)((function(){return[c,e.$slots.default?((0,n.openBlock)(),(0,n.createElementBlock)("span",d,[(0,n.renderSlot)(e.$slots,"default")])):(0,n.createCommentVNode)("",!0)]})),_:3})):"clone"==o.mode?((0,n.openBlock)(),(0,n.createElementBlock)("svg",u,m)):"update"==o.mode?((0,n.openBlock)(),(0,n.createElementBlock)("svg",p,f)):(0,n.createCommentVNode)("",!0)]})),default:(0,n.withCtx)((function(){return["clone"==o.mode?((0,n.openBlock)(),(0,n.createElementBlock)("p",r,[a,(0,n.createElementVNode)("span",i,(0,n.toDisplayString)(o.navigation.name),1),l])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(x,{modelValue:g.form.active,"onUpdate:modelValue":t[0]||(t[0]=function(e){return g.form.active=e}),class:"mb-6"},null,8,["modelValue"]),(0,n.createVNode)(V,{modelValue:g.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.form.name=e}),label:"Name",error:g.form.errors.name,class:"mb-6"},null,8,["modelValue","error"]),(0,n.createVNode)(k,{modelValue:g.form.selected_type,"onUpdate:modelValue":t[2]||(t[2]=function(e){return g.form.selected_type=e}),options:g.navigationTypes,label:"Navigation Trigger",error:g.form.errors.selected_type,class:"mb-6"},null,8,["modelValue","options","error"]),"custom"==g.form.selected_type?((0,n.openBlock)(),(0,n.createBlock)(C,{key:1,modelValue:g.form[y.form.selected_type].inputs,"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.form[y.form.selected_type].inputs=e}),label:"Input(s)",placeholder:"1, 2, 3",error:g.form.errors.inputs,class:"mb-6"},null,8,["modelValue","error"])):"regex"==g.form.selected_type?((0,n.openBlock)(),(0,n.createBlock)(C,{key:2,modelValue:g.form[y.form.selected_type].rule,"onUpdate:modelValue":t[4]||(t[4]=function(e){return g.form[y.form.selected_type].rule=e}),label:"Regex Rule",placeholder:"/[a-zA-Z]+/",error:g.form.errors.rule,class:"mb-6"},null,8,["modelValue","error"])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(C,{modelValue:g.form[y.form.selected_type].step,"onUpdate:modelValue":t[5]||(t[5]=function(e){return g.form[y.form.selected_type].step=e}),label:"Step",placeholder:"1",note:"Loops to navigate",error:g.form.errors.step,class:"mb-6"},null,8,["modelValue","error"]),(0,n.createVNode)(N,{modelValue:g.form[y.form.selected_type].link,"onUpdate:modelValue":t[6]||(t[6]=function(e){return g.form[y.form.selected_type].link=e}),label:"Navigation Target",info:"Screen to trigger navigaition",showDisplays:!1,error:g.form.errors.link,class:"mb-6"},null,8,["modelValue","error"]),(0,n.createElementVNode)("div",s,[(0,n.createVNode)(b,{modelValue:g.form.comment,"onUpdate:modelValue":t[7]||(t[7]=function(e){return g.form.comment=e}),label:"Comment",class:"flex-1 mr-4"},null,8,["modelValue"]),(0,n.createVNode)(w,{modelValue:g.form.hexColor,"onUpdate:modelValue":t[8]||(t[8]=function(e){return g.form.hexColor=e})},null,8,["modelValue"])])]})),_:3},8,["primaryAction","primaryText","defaultAction"])}]])},77488:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var n=o(94865),r=(0,n.createTextVNode)("Delete Navigation"),a={class:"text-sm text-gray-500 mb-5"},i=(0,n.createTextVNode)("Are you sure you want to delete the "),l={class:"text-blue-500 font-bold"},s=(0,n.createTextVNode)(" navigation. After this navigation is deleted you cannot recover it again."),c=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),d={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},u=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)];var m=o(75802),p=o(91098),f=o(55092);const v={components:{DefaultModal:m.Z,PrimaryButton:f.Z},props:{navigations:{type:Object,default:function(){return[]}},navigation:{type:Object,default:null},index:{type:Number,default:null},showButton:{type:Boolean,default:!1}},data:function(){return{useVersionBuilder:(0,p.P)()}},methods:{deleteNavigation:function(e){this.useVersionBuilder.removeNavigationByIndex(this.navigations,this.index),this.$message({message:"Navigation deleted successfully",type:"success"}),e()}}};const g=(0,o(83744).Z)(v,[["render",function(e,t,o,m,p,f){var v=(0,n.resolveComponent)("PrimaryButton"),g=(0,n.resolveComponent)("DefaultModal");return(0,n.openBlock)(),(0,n.createBlock)(g,{defaultText:"Cancel",onOpen:t[0]||(t[0]=function(t){return e.$emit("open")}),onClose:t[1]||(t[1]=function(t){return e.$emit("close")}),dangerText:"Delete Navigation",dangerAction:f.deleteNavigation},{title:(0,n.withCtx)((function(){return[r]})),trigger:(0,n.withCtx)((function(){return[o.showButton?((0,n.openBlock)(),(0,n.createBlock)(v,{key:0,name:"trigger",class:"px-3"},{default:(0,n.withCtx)((function(){return[c]})),_:1})):((0,n.openBlock)(),(0,n.createElementBlock)("svg",d,u))]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("p",a,[i,(0,n.createElementVNode)("span",l,(0,n.toDisplayString)(o.navigation.name),1),s])]})),_:1},8,["dangerAction"])}]])},11966:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var n=o(94865),r={class:"col-span-6 flex items-center"},a={class:"col-span-6 flex justify-end items-center relative"},i={class:"flex items-center text-gray-400 text-xs transition-all duration-300 opacity-100 group-hover:opacity-0"},l=(0,n.createTextVNode)("Active"),s=(0,n.createTextVNode)("Inactive"),c=(0,n.createTextVNode)("Conditional"),d={class:"absolute right-8 flex items-center justify-end transition-all duration-300 opacity-0 group-hover:opacity-100"},u=(0,n.createTextVNode)("Copy Navigation"),m=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 cursor-grab hover:text-blue-500 active:cursor-grabbing draggble-handle",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1),p={class:"ml-4 mr-1"},f=(0,n.createElementVNode)("div",{class:"border-t border-dashed pt-4 mt-4"},[(0,n.createElementVNode)("p",{class:"text-xs text-gray-600 break-normal"},"Navigation details ...")],-1),v={class:"flex justify-between p-4"},g={class:"text-xs mr-4"};var h=o(47936),y=o(41745),x=o(11868),V=o(80498),k=o(23806),C=o(39266),N=o(91098),b=o(77488),w=o(26232),B=o(73374);const _={props:["navigations","navigation","index"],components:{SlideUpDown:h.Z,CopyToClipboard:y.Z,InfoPopover:x.Z,SuccessBadge:V.Z,PrimaryBadge:k.Z,WarningBadge:C.Z,DeleteNavigationModal:b.default,DefaultColorPicker:w.Z,CreateOrUpdateNavigationModal:B.default},data:function(){return{active:!1,clipboards:[{label:"Copy Name",value:this.navigation.name,message:"Copied the Navigation Name"}],useVersionBuilder:(0,N.P)()}},computed:{totalExactMatches:function(){return this.useVersionBuilder.searchNavigations(this.navigations,this.navigation.name,!0).length}},methods:{toggleSelection:function(){this.active=!this.active},copyNavigation:function(){window.localStorage.setItem("navigation",JSON.stringify(this.navigation)),this.$message({message:"Navigation Copied",type:"success"})}}};const E=(0,o(83744).Z)(_,[["render",function(e,t,o,h,y,x){var V=(0,n.resolveComponent)("SuccessBadge"),k=(0,n.resolveComponent)("WarningBadge"),C=(0,n.resolveComponent)("PrimaryBadge"),N=(0,n.resolveComponent)("CopyToClipboard"),b=(0,n.resolveComponent)("CreateOrUpdateNavigationModal"),w=(0,n.resolveComponent)("DeleteNavigationModal"),B=(0,n.resolveComponent)("InfoPopover"),_=(0,n.resolveComponent)("DefaultColorPicker"),E=(0,n.resolveComponent)("SlideUpDown");return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:(0,n.normalizeClass)(["rounded-md border",y.active?"shadow-sm border-2 my-4":"mb-2"]),style:(0,n.normalizeStyle)({borderLeftColor:o.navigation.hexColor,borderLeftWidth:"4px"})},[(0,n.createElementVNode)("div",{onClick:t[1]||(t[1]=function(e){return x.toggleSelection()}),class:(0,n.normalizeClass)(["grid grid-cols-12 group text-xs text-gray-700 py-2 px-4 cursor-pointer",y.active?"border-b border-dashed bg-blue-50 rounded-tr-md":"bg-gray-50 rounded-r-md"]),style:(0,n.normalizeStyle)({backgroundColor:o.navigation.hexColor+"05"})},[(0,n.createElementVNode)("div",r,[o.navigation.name&&1==x.totalExactMatches?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,class:(0,n.normalizeClass)({"text-blue-500 font-semibold":y.active})},(0,n.toDisplayString)(o.navigation.name),3)):o.navigation.name&&x.totalExactMatches>1?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:1,class:(0,n.normalizeClass)(["text-red-500",{"font-semibold italic":y.active}])},"Duplicate name",2)):((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:2,class:(0,n.normalizeClass)(["text-red-500",{"font-semibold italic":y.active}])},"No name",2))]),(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",i,["yes"==o.navigation.active.selected_type?((0,n.openBlock)(),(0,n.createBlock)(V,{key:0},{default:(0,n.withCtx)((function(){return[l]})),_:1})):"no"==o.navigation.active.selected_type?((0,n.openBlock)(),(0,n.createBlock)(k,{key:1},{default:(0,n.withCtx)((function(){return[s]})),_:1})):"conditional"==o.navigation.active.selected_type?((0,n.openBlock)(),(0,n.createBlock)(C,{key:2},{default:(0,n.withCtx)((function(){return[c]})),_:1})):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",d,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(y.clipboards,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(N,{value:e.value,message:e.message,key:t,class:"whitespace-nowrap mr-2"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(C,{clickable:!0},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.label),1)]})),_:2},1024)]})),_:2},1032,["value","message"])})),128)),(0,n.createVNode)(C,{onClick:t[0]||(t[0]=(0,n.withModifiers)((function(e){return x.copyNavigation()}),["stop"])),clickable:!0,class:"whitespace-nowrap mr-4"},{default:(0,n.withCtx)((function(){return[u]})),_:1}),(0,n.createVNode)(b,{navigations:o.navigations,navigation:o.navigation,index:o.index,mode:"update"},null,8,["navigations","navigation","index"]),(0,n.createVNode)(w,{navigations:o.navigations,navigation:o.navigation,index:o.index},null,8,["navigations","navigation","index"]),(0,n.createVNode)(b,{navigations:o.navigations,navigation:o.navigation,mode:"clone"},null,8,["navigations","navigation"]),m]),(0,n.createElementVNode)("div",p,[(0,n.createVNode)(B,{title:o.navigation.type},{default:(0,n.withCtx)((function(){return[f]})),_:1},8,["title"])])])],6),(0,n.createVNode)(E,{modelValue:y.active,"onUpdate:modelValue":t[3]||(t[3]=function(e){return y.active=e}),duration:300},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("span",g,(0,n.toDisplayString)(o.navigation.comment?o.navigation.comment:"No comments"),1),(0,n.createVNode)(_,{modelValue:o.navigation.hexColor,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.navigation.hexColor=e})},null,8,["modelValue"])])]})),_:1},8,["modelValue"])],6)}]])}}]);