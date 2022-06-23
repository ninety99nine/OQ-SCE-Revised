"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9633],{59633:(e,o,r)=>{r.r(o),r.d(o,{default:()=>f});var t=r(94865),l={class:"text-sm text-gray-500 mb-5"},n=(0,t.createTextVNode)("Once you delete this app, there is no going back. Please be certain. Enter the confirmation code "),a={class:"text-gray-800 font-bold"},s=(0,t.createTextVNode)(" to confirm this action."),d={class:"text-xs text-gray-400 ml-2"};var i=r(68524),c=r(91209),m=r(50967),u=r(19138);const p={components:{DefaultInput:i.Z,DefaultSelect:c.Z,DefaultSwitch:m.Z,DefaultTextArea:u.Z},props:{form:Object,mode:String,app:{type:Object,default:null},versionOptions:{type:Array,default:function(){return[]}},sharedShortCodes:{type:Array,default:function(){return[]}}},computed:{sharedShortCodeOptions:function(){return this.sharedShortCodes.map((function(e){return{label:e.code,value:e.code}}))},selectableVersionOptions:function(){return((this.app||{}).versions?this.app.versions:this.versionOptions).map((function(e){return{label:e.number,value:e.id}}))}}};const f=(0,r(83744).Z)(p,[["render",function(e,o,r,i,c,m){var u=(0,t.resolveComponent)("DefaultInput"),p=(0,t.resolveComponent)("DefaultTextArea"),f=(0,t.resolveComponent)("DefaultSwitch"),b=(0,t.resolveComponent)("DefaultSelect");return(0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,null,["Delete"==r.mode?((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:0},[(0,t.createElementVNode)("p",l,[n,(0,t.createElementVNode)("span",a,(0,t.toDisplayString)(r.app.confirmation_code),1),s]),(0,t.createVNode)(u,{modelValue:r.form.confirmation_code,"onUpdate:modelValue":o[0]||(o[0]=function(e){return r.form.confirmation_code=e}),label:"Reset code",placeholder:"Enter the reset code",disabled:r.form.processing||r.form.processing,error:r.form.errors.confirmation_code,class:"mb-6"},null,8,["modelValue","disabled","error"])],64)):((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:1},[(0,t.createVNode)(u,{modelValue:r.form.name,"onUpdate:modelValue":o[1]||(o[1]=function(e){return r.form.name=e}),label:"Name",placeholder:"My App",disabled:r.form.processing,error:r.form.errors.name,class:"mb-6"},null,8,["modelValue","disabled","error"]),(0,t.createVNode)(p,{modelValue:r.form.description,"onUpdate:modelValue":o[2]||(o[2]=function(e){return r.form.description=e}),label:"Description",placeholder:"This is a budget app",disabled:r.form.processing,error:r.form.errors.description,class:"mb-6"},null,8,["modelValue","disabled","error"]),(0,t.createVNode)(f,{modelValue:r.form.online,"onUpdate:modelValue":o[3]||(o[3]=function(e){return r.form.online=e}),label:"Online",disabled:r.form.processing,error:r.form.errors.online,class:"mb-6"},{default:(0,t.withCtx)((function(){return[(0,t.createElementVNode)("span",d," — Your app is "+(0,t.toDisplayString)(r.form.online?"online":"offline"),1)]})),_:1},8,["modelValue","disabled","error"]),r.form.online?(0,t.createCommentVNode)("",!0):((0,t.openBlock)(),(0,t.createBlock)(p,{key:0,modelValue:r.form.offline_message,"onUpdate:modelValue":o[4]||(o[4]=function(e){return r.form.offline_message=e}),label:"Offline Message",placeholder:"This service is currently not available",disabled:r.form.processing,error:r.form.errors.offline_message,class:"mb-4"},null,8,["modelValue","disabled","error"]))],64)),"Create"==r.mode?((0,t.openBlock)(),(0,t.createBlock)(b,{key:2,modelValue:r.form.shared_short_code,"onUpdate:modelValue":o[5]||(o[5]=function(e){return r.form.shared_short_code=e}),options:m.sharedShortCodeOptions,label:"Shared Short Code",placeholder:"Select a shared shortcode",disabled:r.form.processing,error:r.form.errors.shared_short_code,class:"mb-6"},null,8,["modelValue","options","disabled","error"])):(0,t.createCommentVNode)("",!0),"Update"==r.mode?((0,t.openBlock)(),(0,t.createBlock)(b,{key:3,modelValue:r.form.active_version_id,"onUpdate:modelValue":o[6]||(o[6]=function(e){return r.form.active_version_id=e}),options:m.selectableVersionOptions,label:"Active version",placeholder:"Select a version",disabled:r.form.processing,error:r.form.errors.active_version_id,class:"mb-6"},null,8,["modelValue","options","disabled","error"])):(0,t.createCommentVNode)("",!0)],64)}]])}}]);