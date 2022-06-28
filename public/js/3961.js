"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3961,8002],{18002:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var r=o(94865),n={key:0,class:"text-sm text-gray-500 mb-5"},a={key:0},l={key:1},i={class:"flex items-end justify-between"},s=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-2",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),c=(0,r.createElementVNode)("span",null,"Create Option",-1),u={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},d=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],m={key:2,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},p=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)];var f=o(96486),h=o.n(f),v=o(39038),V=o(90732),O=o(75802),b=o(91098),x=o(55092),y=o(70838),k=o(88458),w=o(26232),C=o(87087),g=o(71121);function B(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function _(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?B(Object(o),!0).forEach((function(t){N(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function N(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const S={components:{useForm:v.cI,DefaultTabs:V.Z,DefaultModal:O.Z,PrimaryButton:x.Z,DefaultColorPicker:w.Z,DefaultTextArea:y.Z,SelectActiveState:k.default,TextOrCodeEditor:C.Z,ScreenOrDisplaySelector:g.default},props:{staticOptions:{type:Array},staticOption:{type:Object,default:null},index:{type:Number,default:null},mode:{type:String,default:null,validator:function(e){return["create","clone","update"].includes(e)}}},data:function(){return{form:null,tabs:[{label:"General",value:1},{label:"Optional",value:2}],selectedTab:1,useVersionBuilder:(0,b.P)()}},computed:{modeInCaps:function(){return this.mode.charAt(0).toUpperCase()+this.mode.slice(1)}},methods:{resetForm:function(){"create"==this.mode?this.form=(0,v.cI)((0,b.P)().getBlankStaticOption(this.staticOptions)):"clone"==this.mode?this.form=(0,v.cI)((0,b.P)().getClonedStaticOption(this.staticOption)):"update"==this.mode&&(this.form=(0,v.cI)(_(_({},(0,b.P)().getBlankStaticOption()),h().cloneDeep(this.staticOption))))},createStaticOption:function(e){this.form.clearErrors();var t=this.useVersionBuilder.searchStaticOptionsByName(this.staticOptions,this.form.name,!0).length,o=this.useVersionBuilder.searchStaticOptionsByInput(this.staticOptions,this.form.input,!0).length;if((0!=this.form.name.code_editor_mode||""!=this.form.name.text&&null!=this.form.name.text)&&(1!=this.form.name.code_editor_mode||""!=this.form.name.code_editor_text&&null!=this.form.name.code_editor_text)?["create","clone"].includes(this.mode)&&t&&this.form.setError("name","This option name is already in use"):this.form.setError("name","The option name is required"),(0!=this.form.input.code_editor_mode||""!=this.form.input.text&&null!=this.form.input.text)&&(1!=this.form.input.code_editor_mode||""!=this.form.input.code_editor_text&&null!=this.form.input.code_editor_text)?(["create","clone"].includes(this.mode)&&o||"update"==this.mode&&o&&(0==this.staticOption.input.code_editor_mode&&this.staticOption.input.text!==this.form.input.text||1==this.staticOption.input.code_editor_mode&&this.staticOption.input.code_editor_text!==this.form.input.code_editor_text))&&this.form.setError("input","This option input is already in use"):this.form.setError("input","The option input is required"),!1===this.form.hasErrors){var r=this.form.data();"update"==this.mode?this.useVersionBuilder.updateStaticOption(this.staticOptions,r,this.index):this.useVersionBuilder.addStaticOption(this.staticOptions,r);var n=this.mode+"d";this.$message({message:"Option "+n+" successfully",type:"success"}),e()}},cancelCreateStaticOption:function(){this.form.clearErrors()}}};const E=(0,o(83744).Z)(S,[["render",function(e,t,o,f,h,v){var V=(0,r.resolveComponent)("DefaultTabs"),O=(0,r.resolveComponent)("SelectActiveState"),b=(0,r.resolveComponent)("TextOrCodeEditor"),x=(0,r.resolveComponent)("ScreenOrDisplaySelector"),y=(0,r.resolveComponent)("DefaultTextArea"),k=(0,r.resolveComponent)("DefaultColorPicker"),w=(0,r.resolveComponent)("PrimaryButton"),C=(0,r.resolveComponent)("DefaultModal");return(0,r.openBlock)(),(0,r.createBlock)(C,{defaultText:"Cancel",onOpen:t[10]||(t[10]=function(e){return v.resetForm()}),onClose:t[11]||(t[11]=function(t){return e.$emit("close")}),primaryAction:v.createStaticOption,primaryText:v.modeInCaps+" Option",defaultAction:v.cancelCreateStaticOption},{title:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(v.modeInCaps+" Option"),1)]})),trigger:(0,r.withCtx)((function(){return["create"==o.mode?((0,r.openBlock)(),(0,r.createBlock)(w,{key:0,name:"trigger",class:"px-3"},{default:(0,r.withCtx)((function(){return[s,c]})),_:1})):"clone"==o.mode?((0,r.openBlock)(),(0,r.createElementBlock)("svg",u,d)):"update"==o.mode?((0,r.openBlock)(),(0,r.createElementBlock)("svg",m,p)):(0,r.createCommentVNode)("",!0)]})),default:(0,r.withCtx)((function(){return["clone"==o.mode?((0,r.openBlock)(),(0,r.createElementBlock)("p",n,"Cloning option")):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(V,{modelValue:h.selectedTab,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.selectedTab=e}),tabs:h.tabs,class:"mb-8",color:"blue"},null,8,["modelValue","tabs"]),(0,r.createVNode)(r.Transition,{name:"fade",mode:"out-in",appear:""},{default:(0,r.withCtx)((function(){return[1==h.selectedTab?((0,r.openBlock)(),(0,r.createElementBlock)("div",a,[(0,r.createVNode)(O,{modelValue:h.form.active,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.form.active=e}),class:"mb-4"},null,8,["modelValue"]),(0,r.createVNode)(b,{modelValue:h.form.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return h.form.name=e}),label:"Name",error:h.form.errors.name,class:"mb-4"},null,8,["modelValue","error"]),(0,r.createVNode)(b,{modelValue:h.form.value,"onUpdate:modelValue":t[3]||(t[3]=function(e){return h.form.value=e}),label:"Value",error:h.form.errors.value,class:"mb-4"},null,8,["modelValue","error"]),(0,r.createVNode)(b,{modelValue:h.form.input,"onUpdate:modelValue":t[4]||(t[4]=function(e){return h.form.input=e}),label:"Input",error:h.form.errors.input,class:"mb-4"},null,8,["modelValue","error"]),(0,r.createVNode)(x,{modelValue:h.form.link,"onUpdate:modelValue":t[5]||(t[5]=function(e){return h.form.link=e})},null,8,["modelValue"])])):((0,r.openBlock)(),(0,r.createElementBlock)("div",l,[(0,r.createVNode)(b,{modelValue:h.form.separator.top,"onUpdate:modelValue":t[6]||(t[6]=function(e){return h.form.separator.top=e}),label:"Top Separator",placeholder:"---",error:h.form.errors.separator_top,class:"mb-4"},null,8,["modelValue","error"]),(0,r.createVNode)(b,{modelValue:h.form.separator.bottom,"onUpdate:modelValue":t[7]||(t[7]=function(e){return h.form.separator.bottom=e}),label:"Bottom Separator",placeholder:"---",error:h.form.errors.separator_bottom,class:"mb-4"},null,8,["modelValue","error"]),(0,r.createElementVNode)("div",i,[(0,r.createVNode)(y,{modelValue:h.form.comment,"onUpdate:modelValue":t[8]||(t[8]=function(e){return h.form.comment=e}),label:"Comment",class:"flex-1 mr-4"},null,8,["modelValue"]),(0,r.createVNode)(k,{modelValue:h.form.hexColor,"onUpdate:modelValue":t[9]||(t[9]=function(e){return h.form.hexColor=e})},null,8,["modelValue"])])]))]})),_:1})]})),_:1},8,["primaryAction","primaryText","defaultAction"])}]])},28002:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var r=o(94865),n={class:"flex items-center justify-between bg-white rounded-sm border border-dashed border-gray-400 p-5"},a=(0,r.createStaticVNode)('<div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg><div><p class="text-gray-800 text-md mb-1">No options</p><p class="text-gray-600 text-xs">Go ahead and create your first option</p></div></div>',1),l={class:"flex justify-end"},i=(0,r.createElementVNode)("span",{class:"ml-2"},"Create Option",-1);const s={props:["staticOptions"],components:{CreateOrUpdateStaticOptionModal:o(18002).default}};const c=(0,o(83744).Z)(s,[["render",function(e,t,o,s,c,u){var d=(0,r.resolveComponent)("CreateOrUpdateStaticOptionModal");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[a,(0,r.createElementVNode)("div",l,[(0,r.createVNode)(d,{staticOptions:o.staticOptions,mode:"create"},{default:(0,r.withCtx)((function(){return[i]})),_:1},8,["staticOptions"])])])}]])}}]);