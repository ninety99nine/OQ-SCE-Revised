"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7586,8002,6577],{18002:(e,t,o)=>{o.r(t),o.d(t,{default:()=>S});var r=o(94865),n={key:0,class:"text-sm text-gray-500 mb-5"},a={key:0},i={key:1},l={class:"flex items-end justify-between"},c=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-2",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),s=(0,r.createElementVNode)("span",null,"Create Option",-1),d={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},u=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],m={key:2,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},p=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)];var f=o(96486),h=o.n(f),v=o(39038),x=o(90732),O=o(75802),V=o(91098),g=o(55092),y=o(19138),b=o(88458),C=o(26232),k=o(87087),w=o(71121);function B(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function N(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?B(Object(o),!0).forEach((function(t){_(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function _(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const E={components:{useForm:v.cI,DefaultTabs:x.Z,DefaultModal:O.Z,PrimaryButton:g.Z,DefaultColorPicker:C.Z,DefaultTextArea:y.Z,SelectActiveState:b.default,TextOrCodeEditor:k.Z,ScreenOrDisplaySelector:w.default},props:{staticOptions:{type:Array},staticOption:{type:Object,default:null},index:{type:Number,default:null},mode:{type:String,default:null,validator:function(e){return["create","clone","update"].includes(e)}}},data:function(){return{form:null,tabs:[{label:"General",value:1},{label:"Optional",value:2}],selectedTab:1,useVersionBuilder:(0,V.P)()}},computed:{modeInCaps:function(){return this.mode.charAt(0).toUpperCase()+this.mode.slice(1)}},methods:{resetForm:function(){"create"==this.mode?this.form=(0,v.cI)((0,V.P)().getBlankStaticOption(this.staticOptions)):"clone"==this.mode?this.form=(0,v.cI)((0,V.P)().getClonedStaticOption(this.staticOption)):"update"==this.mode&&(this.form=(0,v.cI)(N(N({},(0,V.P)().getBlankStaticOption()),h().cloneDeep(this.staticOption))))},createStaticOption:function(e){this.form.clearErrors();var t=this.useVersionBuilder.searchStaticOptionsByName(this.staticOptions,this.form.name,!0).length,o=this.useVersionBuilder.searchStaticOptionsByInput(this.staticOptions,this.form.input,!0).length;if((0!=this.form.name.code_editor_mode||""!=this.form.name.text&&null!=this.form.name.text)&&(1!=this.form.name.code_editor_mode||""!=this.form.name.code_editor_text&&null!=this.form.name.code_editor_text)?["create","clone"].includes(this.mode)&&t&&this.form.setError("name","This option name is already in use"):this.form.setError("name","The option name is required"),(0!=this.form.input.code_editor_mode||""!=this.form.input.text&&null!=this.form.input.text)&&(1!=this.form.input.code_editor_mode||""!=this.form.input.code_editor_text&&null!=this.form.input.code_editor_text)?(["create","clone"].includes(this.mode)&&o||"update"==this.mode&&o&&(0==this.staticOption.input.code_editor_mode&&this.staticOption.input.text!==this.form.input.text||1==this.staticOption.input.code_editor_mode&&this.staticOption.input.code_editor_text!==this.form.input.code_editor_text))&&this.form.setError("input","This option input is already in use"):this.form.setError("input","The option input is required"),!1===this.form.hasErrors){var r=this.form.data();"update"==this.mode?this.useVersionBuilder.updateStaticOption(this.staticOptions,r,this.index):this.useVersionBuilder.addStaticOption(this.staticOptions,r);var n=this.mode+"d";this.$message({message:"Option "+n+" successfully",type:"success"}),e()}},cancelCreateStaticOption:function(){this.form.clearErrors()}}};const S=(0,o(83744).Z)(E,[["render",function(e,t,o,f,h,v){var x=(0,r.resolveComponent)("DefaultTabs"),O=(0,r.resolveComponent)("SelectActiveState"),V=(0,r.resolveComponent)("TextOrCodeEditor"),g=(0,r.resolveComponent)("ScreenOrDisplaySelector"),y=(0,r.resolveComponent)("DefaultTextArea"),b=(0,r.resolveComponent)("DefaultColorPicker"),C=(0,r.resolveComponent)("PrimaryButton"),k=(0,r.resolveComponent)("DefaultModal");return(0,r.openBlock)(),(0,r.createBlock)(k,{defaultText:"Cancel",onOpen:t[10]||(t[10]=function(e){return v.resetForm()}),onClose:t[11]||(t[11]=function(t){return e.$emit("close")}),primaryAction:v.createStaticOption,primaryText:v.modeInCaps+" Option",defaultAction:v.cancelCreateStaticOption},{title:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(v.modeInCaps+" Option"),1)]})),trigger:(0,r.withCtx)((function(){return["create"==o.mode?((0,r.openBlock)(),(0,r.createBlock)(C,{key:0,name:"trigger",class:"px-3"},{default:(0,r.withCtx)((function(){return[c,s]})),_:1})):"clone"==o.mode?((0,r.openBlock)(),(0,r.createElementBlock)("svg",d,u)):"update"==o.mode?((0,r.openBlock)(),(0,r.createElementBlock)("svg",m,p)):(0,r.createCommentVNode)("",!0)]})),default:(0,r.withCtx)((function(){return["clone"==o.mode?((0,r.openBlock)(),(0,r.createElementBlock)("p",n,"Cloning option")):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(x,{modelValue:h.selectedTab,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.selectedTab=e}),tabs:h.tabs,class:"mb-8",color:"blue"},null,8,["modelValue","tabs"]),(0,r.createVNode)(r.Transition,{name:"fade",mode:"out-in",appear:""},{default:(0,r.withCtx)((function(){return[1==h.selectedTab?((0,r.openBlock)(),(0,r.createElementBlock)("div",a,[(0,r.createVNode)(O,{modelValue:h.form.active,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.form.active=e}),class:"mb-4"},null,8,["modelValue"]),(0,r.createVNode)(V,{modelValue:h.form.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return h.form.name=e}),label:"Name",error:h.form.errors.name,class:"mb-4"},null,8,["modelValue","error"]),(0,r.createVNode)(V,{modelValue:h.form.value,"onUpdate:modelValue":t[3]||(t[3]=function(e){return h.form.value=e}),label:"Value",error:h.form.errors.value,class:"mb-4"},null,8,["modelValue","error"]),(0,r.createVNode)(V,{modelValue:h.form.input,"onUpdate:modelValue":t[4]||(t[4]=function(e){return h.form.input=e}),label:"Input",error:h.form.errors.input,class:"mb-4"},null,8,["modelValue","error"]),(0,r.createVNode)(g,{modelValue:h.form.link,"onUpdate:modelValue":t[5]||(t[5]=function(e){return h.form.link=e})},null,8,["modelValue"])])):((0,r.openBlock)(),(0,r.createElementBlock)("div",i,[(0,r.createVNode)(V,{modelValue:h.form.separator.top,"onUpdate:modelValue":t[6]||(t[6]=function(e){return h.form.separator.top=e}),label:"Top Separator",placeholder:"---",error:h.form.errors.separator_top,class:"mb-4"},null,8,["modelValue","error"]),(0,r.createVNode)(V,{modelValue:h.form.separator.bottom,"onUpdate:modelValue":t[7]||(t[7]=function(e){return h.form.separator.bottom=e}),label:"Bottom Separator",placeholder:"---",error:h.form.errors.separator_bottom,class:"mb-4"},null,8,["modelValue","error"]),(0,r.createElementVNode)("div",l,[(0,r.createVNode)(y,{modelValue:h.form.comment,"onUpdate:modelValue":t[8]||(t[8]=function(e){return h.form.comment=e}),label:"Comment",class:"flex-1 mr-4"},null,8,["modelValue"]),(0,r.createVNode)(b,{modelValue:h.form.hexColor,"onUpdate:modelValue":t[9]||(t[9]=function(e){return h.form.hexColor=e})},null,8,["modelValue"])])]))]})),_:1})]})),_:1},8,["primaryAction","primaryText","defaultAction"])}]])},46577:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var r=o(94865),n=(0,r.createTextVNode)("Delete Option"),a={class:"text-sm text-gray-500 mb-5"},i=(0,r.createTextVNode)(" Are you sure you want to delete the "),l={key:0,class:"text-blue-500 font-bold"},c=(0,r.createTextVNode)(" option. After this option is deleted you cannot recover it again. "),s=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),d={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},u=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)];var m=o(75802),p=o(91098),f=o(55092);const h={components:{DefaultModal:m.Z,PrimaryButton:f.Z},props:{staticOptions:{type:Object,default:function(){return[]}},staticOption:{type:Object,default:null},index:{type:Number,default:null},showButton:{type:Boolean,default:!1}},data:function(){return{useVersionBuilder:(0,p.P)()}},methods:{deleteStaticOption:function(e){this.useVersionBuilder.removeStaticOptionByIndex(this.staticOptions,this.index),this.$message({message:"Option deleted successfully",type:"success"}),e()}}};const v=(0,o(83744).Z)(h,[["render",function(e,t,o,m,p,f){var h=(0,r.resolveComponent)("PrimaryButton"),v=(0,r.resolveComponent)("DefaultModal");return(0,r.openBlock)(),(0,r.createBlock)(v,{defaultText:"Cancel",onOpen:t[0]||(t[0]=function(t){return e.$emit("open")}),onClose:t[1]||(t[1]=function(t){return e.$emit("close")}),dangerText:"Delete Option",dangerAction:f.deleteStaticOption},{title:(0,r.withCtx)((function(){return[n]})),trigger:(0,r.withCtx)((function(){return[o.showButton?((0,r.openBlock)(),(0,r.createBlock)(h,{key:0,name:"trigger",class:"px-3"},{default:(0,r.withCtx)((function(){return[s]})),_:1})):((0,r.openBlock)(),(0,r.createElementBlock)("svg",d,u))]})),default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("p",a,[i,0==o.staticOption.name.code_editor_mode?((0,r.openBlock)(),(0,r.createElementBlock)("span",l,(0,r.toDisplayString)(o.staticOption.name.text),1)):(0,r.createCommentVNode)("",!0),c])]})),_:1},8,["dangerAction"])}]])},47586:(e,t,o)=>{o.r(t),o.d(t,{default:()=>N});var r=o(94865),n={class:"col-span-6 flex items-center"},a={class:"col-span-6 flex justify-end items-center relative"},i={class:"flex items-center text-gray-400 text-xs transition-all duration-300 opacity-100 group-hover:opacity-0"},l=(0,r.createTextVNode)("Active"),c=(0,r.createTextVNode)("Inactive"),s=(0,r.createTextVNode)("Conditional"),d={class:"absolute right-8 flex items-center justify-end transition-all duration-300 opacity-0 group-hover:opacity-100"},u=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 cursor-grab hover:text-blue-500 active:cursor-grabbing draggble-handle",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1),m={class:"ml-4 mr-1"},p=(0,r.createElementVNode)("div",{class:"border-t border-dashed pt-4 mt-4"},[(0,r.createElementVNode)("p",{class:"text-xs text-gray-600 break-normal"},"Static Option details ...")],-1),f={class:"flex justify-between p-4"},h={class:"text-xs mr-4"};var v=o(47936),x=o(20714),O=o(53529),V=o(80498),g=o(23806),y=o(39266),b=o(11868),C=o(46577),k=o(26232),w=o(18002);const B={props:["staticOptions","staticOption","index"],components:{TextEditor:x.Z,HiddenCode:O.Z,SuccessBadge:V.Z,PrimaryBadge:g.Z,WarningBadge:y.Z,DeleteStaticOptionModal:C.default,DefaultColorPicker:k.Z,CreateOrUpdateStaticOptionModal:w.default,InfoPopover:b.Z,SlideUpDown:v.Z},data:function(){return{active:!1}},methods:{toggleSelection:function(){this.active=!this.active}}};const N=(0,o(83744).Z)(B,[["render",function(e,t,o,v,x,O){var V=(0,r.resolveComponent)("TextEditor"),g=(0,r.resolveComponent)("HiddenCode"),y=(0,r.resolveComponent)("SuccessBadge"),b=(0,r.resolveComponent)("WarningBadge"),C=(0,r.resolveComponent)("PrimaryBadge"),k=(0,r.resolveComponent)("CreateOrUpdateStaticOptionModal"),w=(0,r.resolveComponent)("DeleteStaticOptionModal"),B=(0,r.resolveComponent)("InfoPopover"),N=(0,r.resolveComponent)("DefaultColorPicker"),_=(0,r.resolveComponent)("SlideUpDown");return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:(0,r.normalizeClass)(["rounded-md border",x.active?"shadow-sm border-2 my-4":"mb-2"]),style:(0,r.normalizeStyle)({borderLeftColor:o.staticOption.hexColor,borderLeftWidth:"4px"})},[(0,r.createElementVNode)("div",{onClick:t[2]||(t[2]=function(e){return O.toggleSelection()}),class:(0,r.normalizeClass)(["grid grid-cols-12 group text-xs text-gray-700 py-2 px-4 cursor-pointer",x.active?"border-b border-dashed bg-blue-50 rounded-t-md":"bg-gray-50 rounded-md"]),style:(0,r.normalizeStyle)({backgroundColor:o.staticOption.hexColor+"05"})},[(0,r.createElementVNode)("div",n,[0==o.staticOption.name.code_editor_mode?((0,r.openBlock)(),(0,r.createBlock)(V,{key:0,modelValue:o.staticOption.name.text,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.staticOption.name.text=e}),read_only:!0},null,8,["modelValue"])):((0,r.openBlock)(),(0,r.createBlock)(g,{key:1,modelValue:o.staticOption.name.code_editor_text,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.staticOption.name.code_editor_text=e}),read_only:!0},null,8,["modelValue"]))]),(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",i,["yes"==o.staticOption.active.selected_type?((0,r.openBlock)(),(0,r.createBlock)(y,{key:0},{default:(0,r.withCtx)((function(){return[l]})),_:1})):"no"==o.staticOption.active.selected_type?((0,r.openBlock)(),(0,r.createBlock)(b,{key:1},{default:(0,r.withCtx)((function(){return[c]})),_:1})):"conditional"==o.staticOption.active.selected_type?((0,r.openBlock)(),(0,r.createBlock)(C,{key:2},{default:(0,r.withCtx)((function(){return[s]})),_:1})):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",d,[(0,r.createVNode)(k,{staticOptions:o.staticOptions,staticOption:o.staticOption,index:o.index,mode:"update"},null,8,["staticOptions","staticOption","index"]),(0,r.createVNode)(w,{staticOptions:o.staticOptions,staticOption:o.staticOption,index:o.index},null,8,["staticOptions","staticOption","index"]),(0,r.createVNode)(k,{staticOptions:o.staticOptions,staticOption:o.staticOption,mode:"clone"},null,8,["staticOptions","staticOption"]),u]),(0,r.createElementVNode)("div",m,[(0,r.createVNode)(B,{title:"Details"},{default:(0,r.withCtx)((function(){return[p]})),_:1})])])],6),(0,r.createVNode)(_,{modelValue:x.active,"onUpdate:modelValue":t[4]||(t[4]=function(e){return x.active=e}),duration:300},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("span",h,(0,r.toDisplayString)(o.staticOption.comment?o.staticOption.comment:"No comments"),1),(0,r.createVNode)(N,{modelValue:o.staticOption.hexColor,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.staticOption.hexColor=e})},null,8,["modelValue"])])]})),_:1},8,["modelValue"])],6)}]])}}]);