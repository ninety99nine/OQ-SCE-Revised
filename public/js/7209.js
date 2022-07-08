"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7209],{97209:(e,r,o)=>{o.r(r),o.d(r,{default:()=>S});var t=o(94865),l={key:0,class:"text-sm text-gray-500 mb-5"},a=(0,t.createTextVNode)("Cloning "),n={class:"text-blue-500 font-bold"},i=(0,t.createTextVNode)(" variable"),s=(0,t.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-2",viewBox:"0 0 20 20",fill:"currentColor"},[(0,t.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),u=(0,t.createElementVNode)("span",null,"Create Variable",-1),c={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},m=[(0,t.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],d={key:2,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},f=[(0,t.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)];var p=o(96486),b=o.n(p),h=o(39038),v=o(66222),V=o(75802),g=o(91098),y=o(50389),k=o(89125),w=o(50967),C=o(53233),B=o(55092);function O(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function x(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?O(Object(o),!0).forEach((function(r){E(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function E(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}const N={components:{useForm:h.cI,DefaultInput:v.Z,DefaultModal:V.Z,CodeEditor:y.Z,DefaultSwitch:w.Z,DefaultSelect:C.Z,PrimaryButton:B.Z,VariableInput:k.Z},props:{variable:{type:Object,default:null},index:{type:Number,default:null},mode:{type:String,default:null,validator:function(e){return["create","clone","update"].includes(e)}}},data:function(){return{form:null,typeOptions:[{label:"String",value:"string"},{label:"Integer",value:"integer"},{label:"Boolean",value:"boolean"},{label:"Code",value:"code"},{label:"Null",value:"null"},{label:"Empty Array",value:"empty array"}],booleanOptions:[{label:"True",value:"true"},{label:"False",value:"false"}],useVersionBuilder:(0,g.P)()}},computed:{modeInCaps:function(){return this.mode.charAt(0).toUpperCase()+this.mode.slice(1)}},methods:{resetForm:function(){"create"==this.mode?this.form=(0,h.cI)((0,g.P)().getBlankGlobalVariable()):"clone"==this.mode?this.form=(0,h.cI)((0,g.P)().getClonedGlobalVariable(this.variable)):"update"==this.mode&&(this.form=(0,h.cI)(x(x({},(0,g.P)().getBlankGlobalVariable()),b().cloneDeep(this.variable))))},createVariable:function(e){var r=this.useVersionBuilder.searchGlobalVariables(this.form.name,!0).length;if(0==this.form.name.length?this.form.setError("name","The variable name is required"):this.form.name.length<3?this.form.setError("name","The variable name is too short"):this.form.name.length>50?this.form.setError("name","The variable name is too long"):(["create","clone"].includes(this.mode)&&r||"update"==this.mode&&r&&this.variable.name!==this.form.name)&&this.form.setError("name","This variable name is already in use"),"boolean"===this.form.type&&null==this.form.value.boolean?this.form.setError("value","The variable boolean is required"):"integer"===this.form.type&&null==this.form.value.integer?this.form.setError("value","The variable integer is required"):"code"===this.form.type&&null==this.form.value.code&&this.form.setError("value","The variable code is required"),!1===this.form.hasErrors){var o=this.form.data();"update"==this.mode?this.useVersionBuilder.updateGlobalVariable(o,this.index):this.useVersionBuilder.addGlobalVariable(o);var t=this.mode+"d";this.$message({message:"Variable "+t+" successfully",type:"success"}),e()}},cancelCreateVariable:function(){this.form.clearErrors()}}};const S=(0,o(83744).Z)(N,[["render",function(e,r,o,p,b,h){var v=(0,t.resolveComponent)("VariableInput"),V=(0,t.resolveComponent)("DefaultSelect"),g=(0,t.resolveComponent)("DefaultInput"),y=(0,t.resolveComponent)("CodeEditor"),k=(0,t.resolveComponent)("DefaultSwitch"),w=(0,t.resolveComponent)("PrimaryButton"),C=(0,t.resolveComponent)("DefaultModal");return(0,t.openBlock)(),(0,t.createBlock)(C,{defaultText:"Cancel",onOpen:r[10]||(r[10]=function(e){return h.resetForm()}),onClose:r[11]||(r[11]=function(r){return e.$emit("close")}),primaryAction:h.createVariable,primaryText:h.modeInCaps+" Variable",defaultAction:h.cancelCreateVariable},{title:(0,t.withCtx)((function(){return[(0,t.createTextVNode)((0,t.toDisplayString)(h.modeInCaps+" Variable"),1)]})),trigger:(0,t.withCtx)((function(){return["create"==o.mode?((0,t.openBlock)(),(0,t.createBlock)(w,{key:0,name:"trigger",class:"px-3"},{default:(0,t.withCtx)((function(){return[s,u]})),_:1})):"clone"==o.mode?((0,t.openBlock)(),(0,t.createElementBlock)("svg",c,m)):"update"==o.mode?((0,t.openBlock)(),(0,t.createElementBlock)("svg",d,f)):(0,t.createCommentVNode)("",!0)]})),default:(0,t.withCtx)((function(){return["clone"==o.mode?((0,t.openBlock)(),(0,t.createElementBlock)("p",l,[a,(0,t.createElementVNode)("span",n,(0,t.toDisplayString)(o.variable.name),1),i])):(0,t.createCommentVNode)("",!0),(0,t.createVNode)(v,{modelValue:b.form.name,"onUpdate:modelValue":r[0]||(r[0]=function(e){return b.form.name=e}),label:"Name",error:b.form.errors.name,onOnSetError:r[1]||(r[1]=function(e){return b.form.setError("name",e)}),onOnClearError:r[2]||(r[2]=function(e){return b.form.clearErrors("name")}),class:"mb-6"},null,8,["modelValue","error"]),(0,t.createVNode)(V,{modelValue:b.form.type,"onUpdate:modelValue":r[3]||(r[3]=function(e){return b.form.type=e}),options:b.typeOptions,label:"Select Type",placeholder:"Select the variable type",class:"mb-6"},null,8,["modelValue","options"]),"string"===b.form.type?((0,t.openBlock)(),(0,t.createBlock)(g,{key:1,modelValue:b.form.value.string,"onUpdate:modelValue":r[4]||(r[4]=function(e){return b.form.value.string=e}),label:"String",error:b.form.errors.value,class:"mb-6"},null,8,["modelValue","error"])):"integer"===b.form.type?((0,t.openBlock)(),(0,t.createBlock)(g,{key:2,type:"number",modelValue:b.form.value.integer,"onUpdate:modelValue":r[5]||(r[5]=function(e){return b.form.value.integer=e}),label:"Integer",error:b.form.errors.value,class:"mb-6"},null,8,["modelValue","error"])):"boolean"===b.form.type?((0,t.openBlock)(),(0,t.createBlock)(V,{key:3,modelValue:b.form.value.boolean,"onUpdate:modelValue":r[6]||(r[6]=function(e){return b.form.value.boolean=e}),options:b.booleanOptions,label:"Select Boolean",error:b.form.errors.value,placeholder:"Select boolean value",class:"mb-6"},null,8,["modelValue","options","error"])):"code"===b.form.type?((0,t.openBlock)(),(0,t.createBlock)(y,{key:4,modelValue:b.form.value.code,"onUpdate:modelValue":r[7]||(r[7]=function(e){return b.form.value.code=e}),error:b.form.errors.value,height:"300px",class:"mb-6"},null,8,["modelValue","error"])):(0,t.createCommentVNode)("",!0),(0,t.createVNode)(k,{modelValue:b.form.is_constant,"onUpdate:modelValue":r[8]||(r[8]=function(e){return b.form.is_constant=e}),label:"Make Constant",info:"Once the value is evaluated and set, it cannot be modified or overridden during application runtime. This value can only be modified here as a global variable",class:"mb-6"},null,8,["modelValue"]),(0,t.createVNode)(k,{modelValue:b.form.is_global,"onUpdate:modelValue":r[9]||(r[9]=function(e){return b.form.is_global=e}),label:"Save for next session",info:"Once the value is evaluated and set, it will be preserved for the next session",class:"mb-6"},null,8,["modelValue"])]})),_:1},8,["primaryAction","primaryText","defaultAction"])}]])}}]);