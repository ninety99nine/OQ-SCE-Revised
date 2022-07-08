"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8990,7840,6006],{27840:(e,r,t)=>{t.r(r),t.d(r,{default:()=>w});var o=t(94865),a={key:0,class:"text-sm text-gray-500 mb-5"},n=(0,o.createTextVNode)("Cloning "),l={class:"text-blue-500 font-bold"},s=(0,o.createTextVNode)(" marker"),i=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-2",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),d=(0,o.createElementVNode)("span",null,"Create Marker",-1),c={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},m=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],u={key:2,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},h=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)];t(96486);var k=t(39038),p=t(66222),f=t(75802),v=t(91098),g=t(55092);const x={components:{useForm:k.cI,DefaultInput:p.Z,DefaultModal:f.Z,PrimaryButton:g.Z},props:{markers:{type:Array,default:function(){return[]}},marker:{type:String,default:null},index:{type:Number,default:null},mode:{type:String,default:null,validator:function(e){return["create","clone","update"].includes(e)}}},data:function(){return{form:null,useVersionBuilder:(0,v.P)()}},computed:{modeInCaps:function(){return this.mode.charAt(0).toUpperCase()+this.mode.slice(1)}},methods:{resetForm:function(){"create"==this.mode?this.form=(0,k.cI)((0,v.P)().getBlankMarker(this.markers)):["clone","update"].includes(this.mode)&&(this.form=(0,k.cI)((0,v.P)().getClonedMarker(this.marker)))},createMarker:function(e){this.form.clearErrors();var r=this.useVersionBuilder.searchMarkers(this.markers,this.form.name,!0).length;if(0==this.form.name.length?this.form.setError("name","The marker name is required"):this.form.name.length<3?this.form.setError("name","The marker name is too short"):this.form.name.length>50?this.form.setError("name","The marker name is too long"):(["create","clone"].includes(this.mode)&&r||"update"==this.mode&&r&&this.marker!==this.form.name)&&this.form.setError("name","This marker name is already in use"),!1===this.form.hasErrors){var t=this.form.data();"update"==this.mode?this.useVersionBuilder.updateMarker(this.markers,t,this.index):this.useVersionBuilder.addMarker(this.markers,t);var o=this.mode+"d";this.$message({message:"Marker "+o+" successfully",type:"success"}),e()}},cancelCreateMarker:function(){this.form.clearErrors()}}};const w=(0,t(83744).Z)(x,[["render",function(e,r,t,k,p,f){var v=(0,o.resolveComponent)("DefaultInput"),g=(0,o.resolveComponent)("PrimaryButton"),x=(0,o.resolveComponent)("DefaultModal");return(0,o.openBlock)(),(0,o.createBlock)(x,{defaultText:"Cancel",onOpen:r[1]||(r[1]=function(e){return f.resetForm()}),onClose:r[2]||(r[2]=function(r){return e.$emit("close")}),primaryAction:f.createMarker,primaryText:f.modeInCaps+" Marker",defaultAction:f.cancelCreateMarker},{title:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(f.modeInCaps+" Marker"),1)]})),default:(0,o.withCtx)((function(e){var i=e.firePrimaryAction;return["clone"==t.mode?((0,o.openBlock)(),(0,o.createElementBlock)("p",a,[n,(0,o.createElementVNode)("span",l,(0,o.toDisplayString)(t.marker),1),s])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(v,{modelValue:p.form.name,"onUpdate:modelValue":r[0]||(r[0]=function(e){return p.form.name=e}),label:"Name",error:p.form.errors.name,onKeyup:(0,o.withKeys)(i,["enter"]),autofocus:!0,class:"mb-6"},null,8,["modelValue","error","onKeyup"])]})),trigger:(0,o.withCtx)((function(){return["create"==t.mode?((0,o.openBlock)(),(0,o.createBlock)(g,{key:0,name:"trigger",class:"px-3"},{default:(0,o.withCtx)((function(){return[i,d]})),_:1})):"clone"==t.mode?((0,o.openBlock)(),(0,o.createElementBlock)("svg",c,m)):"update"==t.mode?((0,o.openBlock)(),(0,o.createElementBlock)("svg",u,h)):(0,o.createCommentVNode)("",!0)]})),_:1},8,["primaryAction","primaryText","defaultAction"])}]])},16006:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var o=t(94865),a=(0,o.createTextVNode)("Delete Marker"),n={class:"text-sm text-gray-500 mb-5"},l=(0,o.createTextVNode)(" Are you sure you want to delete the "),s={class:"text-blue-500 font-bold"},i=(0,o.createTextVNode)(" marker. After this marker is deleted you cannot recover it again. "),d=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),c={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},m=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)];var u=t(75802),h=t(91098),k=t(55092);const p={components:{DefaultModal:u.Z,PrimaryButton:k.Z},props:{markers:{type:Array,default:function(){return[]}},marker:{type:String,default:null},index:{type:Number,default:null},showButton:{type:Boolean,default:!1}},data:function(){return{useVersionBuilder:(0,h.P)()}},methods:{deleteMarker:function(e){this.useVersionBuilder.removeMarkerByIndex(this.markers,this.index),this.$message({message:"Marker deleted successfully",type:"success"}),e()}}};const f=(0,t(83744).Z)(p,[["render",function(e,r,t,u,h,k){var p=(0,o.resolveComponent)("PrimaryButton"),f=(0,o.resolveComponent)("DefaultModal");return(0,o.openBlock)(),(0,o.createBlock)(f,{defaultText:"Cancel",onOpen:r[0]||(r[0]=function(r){return e.$emit("open")}),onClose:r[1]||(r[1]=function(r){return e.$emit("close")}),dangerText:"Delete Marker",dangerAction:k.deleteMarker},{title:(0,o.withCtx)((function(){return[a]})),trigger:(0,o.withCtx)((function(){return[t.showButton?((0,o.openBlock)(),(0,o.createBlock)(p,{key:0,name:"trigger",class:"px-3"},{default:(0,o.withCtx)((function(){return[d]})),_:1})):((0,o.openBlock)(),(0,o.createElementBlock)("svg",c,m))]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("p",n,[l,(0,o.createElementVNode)("span",s,(0,o.toDisplayString)(t.marker),1),i])]})),_:1},8,["dangerAction"])}]])},78990:(e,r,t)=>{t.r(r),t.d(r,{default:()=>m});var o=t(94865),a={class:"col-span-6 flex items-center"},n={class:"col-span-6 relative"},l={class:"absolute right-0 flex justify-end transition-all duration-300 opacity-0 group-hover:opacity-100"},s=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 cursor-grab hover:text-blue-500 active:cursor-grabbing draggble-handle",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1);var i=t(16006),d=t(27840);const c={props:["markers","marker","index"],components:{DeleteMarkerModal:i.default,CreateOrUpdateMarkerModal:d.default},data:function(){return{hexColor:"#00c2b1"}}};const m=(0,t(83744).Z)(c,[["render",function(e,r,t,i,d,c){var m=(0,o.resolveComponent)("CreateOrUpdateMarkerModal"),u=(0,o.resolveComponent)("DeleteMarkerModal");return(0,o.openBlock)(),(0,o.createElementBlock)("div",{class:"rounded-md border mb-2",style:(0,o.normalizeStyle)({borderLeftColor:d.hexColor,borderLeftWidth:"4px"})},[(0,o.createElementVNode)("div",{class:"grid grid-cols-12 group text-xs text-gray-700 py-2 px-4 cursor-pointer bg-gray-50 rounded-md",style:(0,o.normalizeStyle)({backgroundColor:d.hexColor+"05"})},[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(t.marker),1)]),(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",l,[(0,o.createVNode)(m,{markers:t.markers,marker:t.marker,index:t.index,mode:"update"},null,8,["markers","marker","index"]),(0,o.createVNode)(u,{markers:t.markers,marker:t.marker,index:t.index},null,8,["markers","marker","index"]),(0,o.createVNode)(m,{markers:t.markers,marker:t.marker,mode:"clone"},null,8,["markers","marker"]),s])])],4)],4)}]])}}]);