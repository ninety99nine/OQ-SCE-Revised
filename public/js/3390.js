"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3390,9782,7840,6006,8990,5934,7385],{27840:(e,r,t)=>{t.r(r),t.d(r,{default:()=>x});var a=t(94865),o={key:0,class:"text-sm text-gray-500 mb-5"},n=(0,a.createTextVNode)("Cloning "),l={class:"text-blue-500 font-bold"},s=(0,a.createTextVNode)(" marker"),d=(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-2",viewBox:"0 0 20 20",fill:"currentColor"},[(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),c=(0,a.createElementVNode)("span",null,"Create Marker",-1),i={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},u=[(0,a.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],m={key:2,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},k=[(0,a.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)];t(96486);var h=t(39038),p=t(68524),f=t(75802),v=t(91098),g=t(55092);const V={components:{useForm:h.cI,DefaultInput:p.Z,DefaultModal:f.Z,PrimaryButton:g.Z},props:{markers:{type:Array,default:function(){return[]}},marker:{type:String,default:null},index:{type:Number,default:null},mode:{type:String,default:null,validator:function(e){return["create","clone","update"].includes(e)}}},data:function(){return{form:null,useVersionBuilder:(0,v.P)()}},computed:{modeInCaps:function(){return this.mode.charAt(0).toUpperCase()+this.mode.slice(1)}},methods:{resetForm:function(){"create"==this.mode?this.form=(0,h.cI)((0,v.P)().getBlankMarker(this.markers)):["clone","update"].includes(this.mode)&&(this.form=(0,h.cI)((0,v.P)().getClonedMarker(this.marker)))},createMarker:function(e){this.form.clearErrors();var r=this.useVersionBuilder.searchMarkers(this.markers,this.form.name,!0).length;if(0==this.form.name.length?this.form.setError("name","The marker name is required"):this.form.name.length<3?this.form.setError("name","The marker name is too short"):this.form.name.length>50?this.form.setError("name","The marker name is too long"):(["create","clone"].includes(this.mode)&&r||"update"==this.mode&&r&&this.marker!==this.form.name)&&this.form.setError("name","This marker name is already in use"),!1===this.form.hasErrors){var t=this.form.data();"update"==this.mode?this.useVersionBuilder.updateMarker(this.markers,t,this.index):this.useVersionBuilder.addMarker(this.markers,t);var a=this.mode+"d";this.$message({message:"Marker "+a+" successfully",type:"success"}),e()}},cancelCreateMarker:function(){this.form.clearErrors()}}};const x=(0,t(83744).Z)(V,[["render",function(e,r,t,h,p,f){var v=(0,a.resolveComponent)("DefaultInput"),g=(0,a.resolveComponent)("PrimaryButton"),V=(0,a.resolveComponent)("DefaultModal");return(0,a.openBlock)(),(0,a.createBlock)(V,{defaultText:"Cancel",onOpen:r[1]||(r[1]=function(e){return f.resetForm()}),onClose:r[2]||(r[2]=function(r){return e.$emit("close")}),primaryAction:f.createMarker,primaryText:f.modeInCaps+" Marker",defaultAction:f.cancelCreateMarker},{title:(0,a.withCtx)((function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(f.modeInCaps+" Marker"),1)]})),default:(0,a.withCtx)((function(e){var d=e.firePrimaryAction;return["clone"==t.mode?((0,a.openBlock)(),(0,a.createElementBlock)("p",o,[n,(0,a.createElementVNode)("span",l,(0,a.toDisplayString)(t.marker),1),s])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(v,{modelValue:p.form.name,"onUpdate:modelValue":r[0]||(r[0]=function(e){return p.form.name=e}),label:"Name",error:p.form.errors.name,onKeyup:(0,a.withKeys)(d,["enter"]),autofocus:!0,class:"mb-6"},null,8,["modelValue","error","onKeyup"])]})),trigger:(0,a.withCtx)((function(){return["create"==t.mode?((0,a.openBlock)(),(0,a.createBlock)(g,{key:0,name:"trigger",class:"px-3"},{default:(0,a.withCtx)((function(){return[d,c]})),_:1})):"clone"==t.mode?((0,a.openBlock)(),(0,a.createElementBlock)("svg",i,u)):"update"==t.mode?((0,a.openBlock)(),(0,a.createElementBlock)("svg",m,k)):(0,a.createCommentVNode)("",!0)]})),_:1},8,["primaryAction","primaryText","defaultAction"])}]])},16006:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var a=t(94865),o=(0,a.createTextVNode)("Delete Marker"),n={class:"text-sm text-gray-500 mb-5"},l=(0,a.createTextVNode)(" Are you sure you want to delete the "),s={class:"text-blue-500 font-bold"},d=(0,a.createTextVNode)(" marker. After this marker is deleted you cannot recover it again. "),c=(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),i={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},u=[(0,a.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)];var m=t(75802),k=t(91098),h=t(55092);const p={components:{DefaultModal:m.Z,PrimaryButton:h.Z},props:{markers:{type:Array,default:function(){return[]}},marker:{type:String,default:null},index:{type:Number,default:null},showButton:{type:Boolean,default:!1}},data:function(){return{useVersionBuilder:(0,k.P)()}},methods:{deleteMarker:function(e){this.useVersionBuilder.removeMarkerByIndex(this.markers,this.index),this.$message({message:"Marker deleted successfully",type:"success"}),e()}}};const f=(0,t(83744).Z)(p,[["render",function(e,r,t,m,k,h){var p=(0,a.resolveComponent)("PrimaryButton"),f=(0,a.resolveComponent)("DefaultModal");return(0,a.openBlock)(),(0,a.createBlock)(f,{defaultText:"Cancel",onOpen:r[0]||(r[0]=function(r){return e.$emit("open")}),onClose:r[1]||(r[1]=function(r){return e.$emit("close")}),dangerText:"Delete Marker",dangerAction:h.deleteMarker},{title:(0,a.withCtx)((function(){return[o]})),trigger:(0,a.withCtx)((function(){return[t.showButton?((0,a.openBlock)(),(0,a.createBlock)(p,{key:0,name:"trigger",class:"px-3"},{default:(0,a.withCtx)((function(){return[c]})),_:1})):((0,a.openBlock)(),(0,a.createElementBlock)("svg",i,u))]})),default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("p",n,[l,(0,a.createElementVNode)("span",s,(0,a.toDisplayString)(t.marker),1),d])]})),_:1},8,["dangerAction"])}]])},78990:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var a=t(94865),o={class:"col-span-6 flex items-center"},n={class:"col-span-6 relative"},l={class:"absolute right-0 flex justify-end transition-all duration-300 opacity-0 group-hover:opacity-100"},s=(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 cursor-grab hover:text-blue-500 active:cursor-grabbing draggble-handle",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,a.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1);var d=t(16006),c=t(27840);const i={props:["markers","marker","index"],components:{DeleteMarkerModal:d.default,CreateOrUpdateMarkerModal:c.default},data:function(){return{hexColor:"#00c2b1"}}};const u=(0,t(83744).Z)(i,[["render",function(e,r,t,d,c,i){var u=(0,a.resolveComponent)("CreateOrUpdateMarkerModal"),m=(0,a.resolveComponent)("DeleteMarkerModal");return(0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"rounded-md border mb-2",style:(0,a.normalizeStyle)({borderLeftColor:c.hexColor,borderLeftWidth:"4px"})},[(0,a.createElementVNode)("div",{class:"grid grid-cols-12 group text-xs text-gray-700 py-2 px-4 cursor-pointer bg-gray-50 rounded-md",style:(0,a.normalizeStyle)({backgroundColor:c.hexColor+"05"})},[(0,a.createElementVNode)("div",o,[(0,a.createElementVNode)("span",null,(0,a.toDisplayString)(t.marker),1)]),(0,a.createElementVNode)("div",n,[(0,a.createElementVNode)("div",l,[(0,a.createVNode)(u,{markers:t.markers,marker:t.marker,index:t.index,mode:"update"},null,8,["markers","marker","index"]),(0,a.createVNode)(m,{markers:t.markers,marker:t.marker,index:t.index},null,8,["markers","marker","index"]),(0,a.createVNode)(u,{markers:t.markers,marker:t.marker,mode:"clone"},null,8,["markers","marker"]),s])])],4)],4)}]])},85934:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var a=t(94865);var o=t(78990),n=t(97385),l=t(9980),s=t.n(l);const d={props:["modelValue","searchTerm"],components:{NoMarkers:n.default,draggable:s(),Marker:o.default},data:function(){return{}},computed:{filteredMarkers:{get:function(){var e=this;return this.modelValue.filter((function(r){var t=r.toLowerCase().includes(e.searchTerm);return""==e.searchTerm||t}))},set:function(e){""==this.searchTerm?this.$emit("update:modelValue",e):this.$message({message:"You cannot reorder markers while searching",type:"warning"})}}}};const c=(0,t(83744).Z)(d,[["render",function(e,r,t,o,n,l){var s=(0,a.resolveComponent)("Marker"),d=(0,a.resolveComponent)("NoMarkers"),c=(0,a.resolveComponent)("draggable");return(0,a.openBlock)(),(0,a.createBlock)(c,{invertSwap:!0,"item-key":"markers",handle:".draggble-handle","ghost-class":"bg-yellow-100",modelValue:l.filteredMarkers,"onUpdate:modelValue":r[0]||(r[0]=function(e){return l.filteredMarkers=e})},{item:(0,a.withCtx)((function(e){var r=e.element,o=e.index;return[((0,a.openBlock)(),(0,a.createBlock)(s,{markers:t.modelValue,marker:r,index:o,key:r.id},null,8,["markers","marker","index"]))]})),footer:(0,a.withCtx)((function(){return[0==l.filteredMarkers.length?((0,a.openBlock)(),(0,a.createBlock)(d,{key:0,markers:t.modelValue},null,8,["markers"])):(0,a.createCommentVNode)("",!0)]})),_:1},8,["modelValue"])}]])},97385:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var a=t(94865),o={class:"flex items-center justify-between bg-white rounded-sm border border-dashed border-gray-400 p-5"},n=(0,a.createStaticVNode)('<div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg><div><p class="text-gray-800 text-md mb-1">No markers</p><p class="text-gray-600 text-xs">Go ahead and create your first marker</p></div></div>',1),l={class:"flex justify-end"},s=(0,a.createElementVNode)("span",{class:"ml-2"},"Create Marker",-1);const d={props:["markers"],components:{CreateOrUpdateMarkerModal:t(27840).default}};const c=(0,t(83744).Z)(d,[["render",function(e,r,t,d,c,i){var u=(0,a.resolveComponent)("CreateOrUpdateMarkerModal");return(0,a.openBlock)(),(0,a.createElementBlock)("div",o,[n,(0,a.createElementVNode)("div",l,[(0,a.createVNode)(u,{markers:t.markers,mode:"create"},{default:(0,a.withCtx)((function(){return[s]})),_:1},8,["markers"])])])}]])},69782:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var a=t(94865),o={class:"p-4 rounded-lg bg-gray-50 shadow-md border"},n={class:"flex items-center justify-between border-b border-dotted pb-4 mb-4"};var l=t(85934),s=t(91098),d=t(14720),c=t(27840);const i={props:{modelValue:{type:Array},something:{type:String}},components:{Markers:l.default,DefaultSearchBar:d.Z,CreateOrUpdateMarkerModal:c.default},data:function(){return{searchTerm:"",localModelValue:this.modelValue,useVersionBuilder:(0,s.P)()}},watch:{modelValue:function(e,r){this.localModelValue=e},localModelValue:function(e,r){this.$emit("update:modelValue",e)}}};const u=(0,t(83744).Z)(i,[["render",function(e,r,t,l,s,d){var c=(0,a.resolveComponent)("DefaultSearchBar"),i=(0,a.resolveComponent)("CreateOrUpdateMarkerModal"),u=(0,a.resolveComponent)("Markers");return(0,a.openBlock)(),(0,a.createElementBlock)("div",o,[(0,a.createElementVNode)("div",n,[(0,a.createVNode)(c,{modelValue:s.searchTerm,"onUpdate:modelValue":r[0]||(r[0]=function(e){return s.searchTerm=e}),placeholder:"Search markers"},null,8,["modelValue"]),s.localModelValue.length?((0,a.openBlock)(),(0,a.createBlock)(i,{key:0,markers:s.localModelValue,mode:"create"},null,8,["markers"])):(0,a.createCommentVNode)("",!0)]),(0,a.createVNode)(u,{modelValue:s.localModelValue,"onUpdate:modelValue":r[1]||(r[1]=function(e){return s.localModelValue=e}),searchTerm:s.searchTerm,class:"mb-6"},null,8,["modelValue","searchTerm"])])}]])},3390:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var a=t(94865);var o=t(69782),n=t(91098);const l={components:{MarkersEditor:o.default},data:function(){return{useVersionBuilder:(0,n.P)()}},computed:{markers:{get:function(){return this.useVersionBuilder.selectedScreen.markers},set:function(e){return this.useVersionBuilder.selectedScreen.markers=e}}}};const s=(0,t(83744).Z)(l,[["render",function(e,r,t,o,n,l){var s=(0,a.resolveComponent)("MarkersEditor");return(0,a.openBlock)(),(0,a.createBlock)(s,{modelValue:l.markers,"onUpdate:modelValue":r[0]||(r[0]=function(e){return l.markers=e})},null,8,["modelValue"])}]])}}]);