"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8989,7916],{87916:(e,r,t)=>{t.r(r),t.d(r,{default:()=>F});var o=t(94865),n={class:"text-sm text-gray-500 mb-5"},s=(0,o.createTextVNode)("Once you delete this version, there is no going back. Please be certain. Enter the confirmation code "),a={class:"text-gray-800 font-bold"},l=(0,o.createTextVNode)(" to confirm this action."),i={key:0,class:"text-xs text-gray-400 ml-2"},c={key:0,class:"text-sm text-gray-500 border-b pb-5 mb-5"},d=(0,o.createTextVNode)("Resetting this version will destroy the version screens, displays, events and settings. Once you reset a version, there is no going back. Enter the reset code "),m={class:"text-gray-800 font-bold"},u=(0,o.createTextVNode)(" to confirm this action."),p={key:3},f={class:"flex items-center justify-between mb-4"},h=(0,o.createElementVNode)("span",{class:"text-sm font-medium text-gray-900"},"Features",-1),v=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-1",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),g=(0,o.createElementVNode)("span",null,"Add Feature",-1),k={class:"flex items-center justify-between py-1 px-2 rounded-md -ml-2"},V=["onClick"],w=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)],b=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mt-3 ml-4 hover:text-blue-500 cursor-grab active:cursor-grabbing draggble-handle",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1),x=(0,o.createTextVNode)("No features mentioned");var y=t(9980),B=t.n(y),C=t(73905),N=t(66222),E=t(72864),_=t(50967),D=t(34223);const S={components:{draggable:B(),PrimaryAlert:C.Z,DefaultInput:N.Z,DefaultButton:E.Z,DefaultSwitch:_.Z,DefaultTextArea:D.Z},props:{form:Object,mode:String,version:{type:Object,default:null}},methods:{addFeature:function(){this.form.features.push("")},removeFeature:function(e){this.form.features.splice(e,1),this.$message({message:"Feature removed",type:"success"})}}};const F=(0,t(83744).Z)(S,[["render",function(e,r,t,y,B,C){var N=(0,o.resolveComponent)("DefaultInput"),E=(0,o.resolveComponent)("DefaultTextArea"),_=(0,o.resolveComponent)("DefaultSwitch"),D=(0,o.resolveComponent)("DefaultButton"),S=(0,o.resolveComponent)("draggable"),F=(0,o.resolveComponent)("PrimaryAlert");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,["Delete"==t.mode?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[(0,o.createElementVNode)("p",n,[s,(0,o.createElementVNode)("span",a,(0,o.toDisplayString)(t.version.confirmation_code),1),l]),(0,o.createVNode)(N,{modelValue:t.form.confirmation_code,"onUpdate:modelValue":r[0]||(r[0]=function(e){return t.form.confirmation_code=e}),label:"Reset code",placeholder:"Enter the reset code",disabled:t.form.processing||t.form.processing,error:t.form.errors.confirmation_code,class:"mb-6"},null,8,["modelValue","disabled","error"])],64)):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[(0,o.createVNode)(N,{modelValue:t.form.number,"onUpdate:modelValue":r[1]||(r[1]=function(e){return t.form.number=e}),label:"Number",placeholder:"1.00",disabled:t.form.processing,error:t.form.errors.number,class:"mb-6"},null,8,["modelValue","disabled","error"]),(0,o.createVNode)(E,{modelValue:t.form.description,"onUpdate:modelValue":r[2]||(r[2]=function(e){return t.form.description=e}),label:"Description",placeholder:"This is the first version",disabled:t.form.processing,error:t.form.errors.description,class:"mb-6"},null,8,["modelValue","disabled","error"])],64)),t.version&&"Update"==t.mode?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:2},[(0,o.createVNode)(_,{modelValue:t.form.reset_builder,"onUpdate:modelValue":r[3]||(r[3]=function(e){return t.form.reset_builder=e}),label:"Reset",disabled:t.form.processing,error:t.form.errors.reset_builder,class:"mb-6"},{default:(0,o.withCtx)((function(){return[t.form.reset_builder?((0,o.openBlock)(),(0,o.createElementBlock)("span",i," — This version will be reset")):(0,o.createCommentVNode)("",!0)]})),_:1},8,["modelValue","disabled","error"]),t.form.reset_builder?((0,o.openBlock)(),(0,o.createElementBlock)("p",c,[d,(0,o.createElementVNode)("span",m,(0,o.toDisplayString)(t.version.confirmation_code),1),u])):(0,o.createCommentVNode)("",!0),t.form.reset_builder?((0,o.openBlock)(),(0,o.createBlock)(N,{key:1,modelValue:t.form.confirmation_code,"onUpdate:modelValue":r[4]||(r[4]=function(e){return t.form.confirmation_code=e}),label:"Reset code",placeholder:"Enter the reset code",disabled:t.form.processing||t.form.processing,error:t.form.errors.confirmation_code,class:"mb-6"},null,8,["modelValue","disabled","error"])):(0,o.createCommentVNode)("",!0)],64)):(0,o.createCommentVNode)("",!0),"Create"==t.mode||"Update"==t.mode?((0,o.openBlock)(),(0,o.createElementBlock)("div",p,[(0,o.createElementVNode)("div",f,[h,(0,o.createVNode)(D,{onClick:r[5]||(r[5]=function(e){return C.addFeature()}),class:"px-3"},{default:(0,o.withCtx)((function(){return[v,g]})),_:1})]),(0,o.createVNode)(S,{group:"features",invertSwap:!0,"item-key":"features",modelValue:t.form.features,"onUpdate:modelValue":r[6]||(r[6]=function(e){return t.form.features=e}),handle:".draggble-handle","ghost-class":"bg-yellow-100"},{item:(0,o.withCtx)((function(e){e.element;var r=e.index;return[(0,o.createElementVNode)("div",k,[(0,o.createVNode)(N,{modelValue:t.form.features[r],"onUpdate:modelValue":function(e){return t.form.features[r]=e},placeholder:"Feature #"+(r+1),error:t.form.errors["features."+r],disabled:t.form.processing||t.form.processing,class:"flex-1"},null,8,["modelValue","onUpdate:modelValue","placeholder","error","disabled"]),((0,o.openBlock)(),(0,o.createElementBlock)("svg",{onClick:function(e){return C.removeFeature(r)},xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mt-3 ml-8 hover:text-red-500 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},w,8,V)),b])]})),_:1},8,["modelValue"]),0==t.form.features.length?((0,o.openBlock)(),(0,o.createBlock)(F,{key:0},{default:(0,o.withCtx)((function(){return[x]})),_:1})):(0,o.createCommentVNode)("",!0)])):(0,o.createCommentVNode)("",!0)],64)}]])},48989:(e,r,t)=>{t.r(r),t.d(r,{default:()=>k});var o=t(94865),n=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),s=(0,o.createTextVNode)(" Edit "),a={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},l=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)],i=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),c={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 cursor-pointer hover:text-red-500 active:text-red-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},d=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)],m=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1);var u=t(39038),p=t(87916),f=t(75802),h=t(12551),v=t(55092);const g={components:{useForm:u.cI,CreateOrUpdateVersionForm:p.default,DefaultModal:f.Z,DangerButton:h.Z,PrimaryButton:v.Z},props:{version:{type:Object,default:null},mode:{type:String,default:"Create"},showButton:{type:Boolean,default:!0}},data:function(){return{form:this.getForm()}},methods:{getForm:function(){var e;return this.version&&"Update"==this.mode?(0,u.cI)({description:this.version.description,features:null!==(e=this.version.features)&&void 0!==e?e:[],number:this.version.number,reset_builder:!1,confirmation_code:"",destination:"app.show"}):this.version&&"Delete"==this.mode?(0,u.cI)({confirmation_code:""}):"Create"==this.mode?(0,u.cI)({description:"",features:[],number:""}):(0,u.cI)({})},handleAction:function(e){this.version&&"Update"==this.mode?this.updateVersion(e):this.version&&"Delete"==this.mode?this.deleteVersion(e):"Create"==this.mode&&this.createVersion(e)},createVersion:function(e){var r=this;this.form.clearErrors(),this.form.post(route("versions.create",{project:this.route().params.project,app:this.route().params.app}),{preserveState:!0,preserveScroll:!0,onSuccess:function(){r.$message({message:"Version created successfully",type:"success"}),r.form.reset(),e()},onError:function(e){r.$message({message:"Sorry, we found some mistakes",type:"error"})}})},updateVersion:function(e){var r=this;this.form.clearErrors(),this.form.put(route("version.update",{project:this.route().params.project,app:this.route().params.app,version:this.version.id}),{preserveState:!0,preserveScroll:!0,onSuccess:function(){r.$message({message:"Version updated successfully",type:"success"}),r.form.defaults(),e()},onError:function(e){r.$message({message:"Sorry, we found some mistakes",type:"error"})}})},deleteVersion:function(e){var r=this;this.form.clearErrors(),this.form.delete(route("version.delete",{project:this.route().params.project,app:this.route().params.app,version:this.version.id}),{preserveState:!0,preserveScroll:!0,onSuccess:function(){r.$message({message:"Version deleted successfully",type:"success"}),r.form.reset(),e()},onError:function(e){r.$message({message:"Sorry, we found some mistakes",type:"error"})}})},cancelCreateVersion:function(){this.form.clearErrors(),this.form.reset()}}};const k=(0,t(83744).Z)(g,[["render",function(e,r,t,u,p,f){var h=(0,o.resolveComponent)("CreateOrUpdateVersionForm"),v=(0,o.resolveComponent)("PrimaryButton"),g=(0,o.resolveComponent)("DangerButton"),k=(0,o.resolveComponent)("DefaultModal");return(0,o.openBlock)(),(0,o.createBlock)(k,{defaultText:"Cancel",onOpen:r[0]||(r[0]=function(r){return e.$emit("open")}),onClose:r[1]||(r[1]=function(r){return e.$emit("close")}),defaultAction:f.cancelCreateVersion,isLoading:p.form.processing,dangerText:"Delete"==t.mode?t.mode+" Version":"",dangerAction:f.handleAction,primaryText:["Create","Update"].includes(t.mode)?"Create"==t.mode?t.mode+" Version":"Save Changes":"",primaryAction:f.handleAction},{title:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.mode)+" Version",1)]})),trigger:(0,o.withCtx)((function(){return["Update"==t.mode?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[t.showButton?((0,o.openBlock)(),(0,o.createBlock)(v,{key:0,disabled:p.form.processing,name:"trigger"},{default:(0,o.withCtx)((function(){return[n,s]})),_:1},8,["disabled"])):((0,o.openBlock)(),(0,o.createElementBlock)("svg",a,l))],64)):"Delete"==t.mode?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[t.showButton?((0,o.openBlock)(),(0,o.createBlock)(g,{key:0,disabled:p.form.processing,name:"trigger"},{default:(0,o.withCtx)((function(){return[i,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(t.mode),1)]})),_:1},8,["disabled"])):((0,o.openBlock)(),(0,o.createElementBlock)("svg",c,d))],64)):((0,o.openBlock)(),(0,o.createBlock)(v,{key:2,disabled:p.form.processing,name:"trigger"},{default:(0,o.withCtx)((function(){return[m,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(t.mode)+" Version ",1)]})),_:1},8,["disabled"]))]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(h,{form:p.form,version:t.version,mode:t.mode},null,8,["form","version","mode"])]})),_:1},8,["defaultAction","isLoading","dangerText","dangerAction","primaryText","primaryAction"])}]])}}]);