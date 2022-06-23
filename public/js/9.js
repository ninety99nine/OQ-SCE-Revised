"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9,9633],{59633:(e,o,r)=>{r.r(o),r.d(o,{default:()=>f});var t=r(94865),n={class:"text-sm text-gray-500 mb-5"},a=(0,t.createTextVNode)("Once you delete this app, there is no going back. Please be certain. Enter the confirmation code "),s={class:"text-gray-800 font-bold"},l=(0,t.createTextVNode)(" to confirm this action."),i={class:"text-xs text-gray-400 ml-2"};var c=r(68524),d=r(91209),p=r(50967),m=r(19138);const u={components:{DefaultInput:c.Z,DefaultSelect:d.Z,DefaultSwitch:p.Z,DefaultTextArea:m.Z},props:{form:Object,mode:String,app:{type:Object,default:null},versionOptions:{type:Array,default:function(){return[]}},sharedShortCodes:{type:Array,default:function(){return[]}}},computed:{sharedShortCodeOptions:function(){return this.sharedShortCodes.map((function(e){return{label:e.code,value:e.code}}))},selectableVersionOptions:function(){return((this.app||{}).versions?this.app.versions:this.versionOptions).map((function(e){return{label:e.number,value:e.id}}))}}};const f=(0,r(83744).Z)(u,[["render",function(e,o,r,c,d,p){var m=(0,t.resolveComponent)("DefaultInput"),u=(0,t.resolveComponent)("DefaultTextArea"),f=(0,t.resolveComponent)("DefaultSwitch"),h=(0,t.resolveComponent)("DefaultSelect");return(0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,null,["Delete"==r.mode?((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:0},[(0,t.createElementVNode)("p",n,[a,(0,t.createElementVNode)("span",s,(0,t.toDisplayString)(r.app.confirmation_code),1),l]),(0,t.createVNode)(m,{modelValue:r.form.confirmation_code,"onUpdate:modelValue":o[0]||(o[0]=function(e){return r.form.confirmation_code=e}),label:"Reset code",placeholder:"Enter the reset code",disabled:r.form.processing||r.form.processing,error:r.form.errors.confirmation_code,class:"mb-6"},null,8,["modelValue","disabled","error"])],64)):((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:1},[(0,t.createVNode)(m,{modelValue:r.form.name,"onUpdate:modelValue":o[1]||(o[1]=function(e){return r.form.name=e}),label:"Name",placeholder:"My App",disabled:r.form.processing,error:r.form.errors.name,class:"mb-6"},null,8,["modelValue","disabled","error"]),(0,t.createVNode)(u,{modelValue:r.form.description,"onUpdate:modelValue":o[2]||(o[2]=function(e){return r.form.description=e}),label:"Description",placeholder:"This is a budget app",disabled:r.form.processing,error:r.form.errors.description,class:"mb-6"},null,8,["modelValue","disabled","error"]),(0,t.createVNode)(f,{modelValue:r.form.online,"onUpdate:modelValue":o[3]||(o[3]=function(e){return r.form.online=e}),label:"Online",disabled:r.form.processing,error:r.form.errors.online,class:"mb-6"},{default:(0,t.withCtx)((function(){return[(0,t.createElementVNode)("span",i," — Your app is "+(0,t.toDisplayString)(r.form.online?"online":"offline"),1)]})),_:1},8,["modelValue","disabled","error"]),r.form.online?(0,t.createCommentVNode)("",!0):((0,t.openBlock)(),(0,t.createBlock)(u,{key:0,modelValue:r.form.offline_message,"onUpdate:modelValue":o[4]||(o[4]=function(e){return r.form.offline_message=e}),label:"Offline Message",placeholder:"This service is currently not available",disabled:r.form.processing,error:r.form.errors.offline_message,class:"mb-4"},null,8,["modelValue","disabled","error"]))],64)),"Create"==r.mode?((0,t.openBlock)(),(0,t.createBlock)(h,{key:2,modelValue:r.form.shared_short_code,"onUpdate:modelValue":o[5]||(o[5]=function(e){return r.form.shared_short_code=e}),options:p.sharedShortCodeOptions,label:"Shared Short Code",placeholder:"Select a shared shortcode",disabled:r.form.processing,error:r.form.errors.shared_short_code,class:"mb-6"},null,8,["modelValue","options","disabled","error"])):(0,t.createCommentVNode)("",!0),"Update"==r.mode?((0,t.openBlock)(),(0,t.createBlock)(h,{key:3,modelValue:r.form.active_version_id,"onUpdate:modelValue":o[6]||(o[6]=function(e){return r.form.active_version_id=e}),options:p.selectableVersionOptions,label:"Active version",placeholder:"Select a version",disabled:r.form.processing,error:r.form.errors.active_version_id,class:"mb-6"},null,8,["modelValue","options","disabled","error"])):(0,t.createCommentVNode)("",!0)],64)}]])},20009:(e,o,r)=>{r.r(o),r.d(o,{default:()=>k});var t=r(94865),n=(0,t.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,t.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),a=(0,t.createTextVNode)(" Edit "),s={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},l=[(0,t.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)],i=(0,t.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,t.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),c={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 cursor-pointer hover:text-red-500 active:text-red-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},d=[(0,t.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)],p=(0,t.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2",viewBox:"0 0 20 20",fill:"currentColor"},[(0,t.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1);var m=r(39038),u=r(59633),f=r(75802),h=r(12551),g=r(55092);const v={components:{useForm:m.cI,CreateOrUpdateAppForm:u.default,DefaultModal:f.Z,DangerButton:h.Z,PrimaryButton:g.Z},props:{app:{type:Object,default:null},mode:{type:String,default:"Create"},showButton:{type:Boolean,default:!0},sharedShortCodes:Array},data:function(){return{form:this.getForm()}},methods:{getForm:function(){return this.app&&"Update"==this.mode?(0,m.cI)({name:this.app.name,online:this.app.online,description:this.app.description,offline_message:this.app.offline_message,active_version_id:this.app.active_version_id,destination:"project.show"}):this.app&&"Delete"==this.mode?(0,m.cI)({confirmation_code:""}):"Create"==this.mode?(0,m.cI)({name:"",online:!0,description:"",offline_message:"This service is currently not available",shared_short_code:this.sharedShortCodes[0].code}):(0,m.cI)({})},handleAction:function(e){this.app&&"Update"==this.mode?this.updateApp(e):this.app&&"Delete"==this.mode?this.deleteApp(e):"Create"==this.mode&&this.createApp(e)},createApp:function(e){var o=this;this.form.clearErrors(),this.form.post(route("apps.create",{project:this.route().params.project}),{preserveState:!0,preserveScroll:!0,onSuccess:function(){o.$message({message:"App created successfully",type:"success"}),o.form.reset(),e()},onError:function(e){o.$message({message:"Sorry, we found some mistakes",type:"error"})}})},updateApp:function(e){var o=this;this.form.clearErrors(),this.form.put(route("app.update",{project:this.route().params.project,app:this.app.id}),{preserveState:!0,preserveScroll:!0,onSuccess:function(){o.$message({message:"App updated successfully",type:"success"}),o.form.defaults(),e()},onError:function(e){o.$message({message:"Sorry, we found some mistakes",type:"error"})}})},deleteApp:function(e){var o=this;this.form.clearErrors(),this.form.delete(route("app.delete",{project:this.route().params.project,app:this.app.id}),{preserveState:!0,preserveScroll:!0,onSuccess:function(){o.$message({message:"App deleted successfully",type:"success"}),o.form.reset(),e()},onError:function(e){o.$message({message:"Sorry, we found some mistakes",type:"error"})}})},cancelCreateApp:function(){this.form.clearErrors(),this.form.reset()}}};const k=(0,r(83744).Z)(v,[["render",function(e,o,r,m,u,f){var h=(0,t.resolveComponent)("CreateOrUpdateAppForm"),g=(0,t.resolveComponent)("PrimaryButton"),v=(0,t.resolveComponent)("DangerButton"),k=(0,t.resolveComponent)("DefaultModal");return(0,t.openBlock)(),(0,t.createBlock)(k,{defaultText:"Cancel",onOpen:o[0]||(o[0]=function(o){return e.$emit("open")}),onClose:o[1]||(o[1]=function(o){return e.$emit("close")}),defaultAction:f.cancelCreateApp,isLoading:u.form.processing,dangerText:"Delete"==r.mode?r.mode+" App":"",dangerAction:f.handleAction,primaryText:["Create","Update"].includes(r.mode)?"Create"==r.mode?r.mode+" App":"Save Changes":"",primaryAction:f.handleAction},{title:(0,t.withCtx)((function(){return[(0,t.createTextVNode)((0,t.toDisplayString)(r.mode)+" App",1)]})),trigger:(0,t.withCtx)((function(){return["Update"==r.mode?((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:0},[r.showButton?((0,t.openBlock)(),(0,t.createBlock)(g,{key:0,disabled:u.form.processing,name:"trigger"},{default:(0,t.withCtx)((function(){return[n,a]})),_:1},8,["disabled"])):((0,t.openBlock)(),(0,t.createElementBlock)("svg",s,l))],64)):"Delete"==r.mode?((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:1},[r.showButton?((0,t.openBlock)(),(0,t.createBlock)(v,{key:0,disabled:u.form.processing,name:"trigger"},{default:(0,t.withCtx)((function(){return[i,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(r.mode),1)]})),_:1},8,["disabled"])):((0,t.openBlock)(),(0,t.createElementBlock)("svg",c,d))],64)):((0,t.openBlock)(),(0,t.createBlock)(g,{key:2,disabled:u.form.processing,name:"trigger"},{default:(0,t.withCtx)((function(){return[p,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(r.mode)+" App ",1)]})),_:1},8,["disabled"]))]})),default:(0,t.withCtx)((function(){return[(0,t.createVNode)(h,{form:u.form,app:r.app,mode:r.mode,sharedShortCodes:r.sharedShortCodes},null,8,["form","app","mode","sharedShortCodes"])]})),_:1},8,["defaultAction","isLoading","dangerText","dangerAction","primaryText","primaryAction"])}]])}}]);