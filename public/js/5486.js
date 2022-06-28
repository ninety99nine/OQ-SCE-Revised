"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5486],{85347:(e,o,r)=>{r.d(o,{Z:()=>u});var l=r(94865),t={class:"flex items-center"},a=["id","disabled"],n=["for"],d={key:1,class:"text-xs text-gray-400 ml-2"};var s=r(96486),i=r(11868),c=r(24788);const m={components:{InfoPopover:i.Z,DefaultError:c.Z},props:{modelValue:Boolean,label:String,info:String,note:String,size:{type:String,default:"xs"},disabled:{type:Boolean,default:!1},error:{type:String,default:""}},data:function(){return{uniqueId:(0,s.uniqueId)("input-"),localModelValue:this.modelValue}},watch:{modelValue:function(e,o){this.localModelValue=e},localModelValue:function(e,o){this.$emit("update:modelValue",e),this.$emit("onChange",e)}}};const u=(0,r(83744).Z)(m,[["render",function(e,o,r,s,i,c){var m=(0,l.resolveComponent)("InfoPopover"),u=(0,l.resolveComponent)("DefaultError");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("div",t,[(0,l.withDirectives)((0,l.createElementVNode)("input",{id:i.uniqueId,type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=function(e){return i.localModelValue=e}),disabled:r.disabled,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"},null,8,a),[[l.vModelCheckbox,i.localModelValue]]),r.label?((0,l.openBlock)(),(0,l.createElementBlock)("label",{key:0,for:i.uniqueId,class:(0,l.normalizeClass)("text-"+r.size+" font-medium text-gray-900 ml-2")},(0,l.toDisplayString)(r.label),11,n)):(0,l.createCommentVNode)("",!0),r.note?((0,l.openBlock)(),(0,l.createElementBlock)("span",d," — "+(0,l.toDisplayString)(r.note),1)):(0,l.createCommentVNode)("",!0),r.info?((0,l.openBlock)(),(0,l.createBlock)(m,{key:2,info:r.info,class:"ml-2"},null,8,["info"])):e.$slots.info?((0,l.openBlock)(),(0,l.createBlock)(m,{key:3,class:"ml-2"},{default:(0,l.withCtx)((function(){return[(0,l.renderSlot)(e.$slots,"info")]})),_:3})):(0,l.createCommentVNode)("",!0)]),(0,l.createVNode)(u,{error:r.error,class:"mt-2"},null,8,["error"])])}]])},5486:(e,o,r)=>{r.r(o),r.d(o,{default:()=>k});var l=r(94865),t={class:"text-sm text-gray-500 mb-5"},a=(0,l.createTextVNode)("Once you delete this app, there is no going back. Please be certain. Enter the confirmation code "),n={class:"text-gray-800 font-bold"},d=(0,l.createTextVNode)(" to confirm this action."),s={class:"text-xs text-gray-400 ml-2"},i={class:"flex items-center justify-between mb-6"};var c=r(68524),m=r(23806),u=r(91209),f=r(50967),p=r(85347),b=r(70838);const V={components:(h={DefaultInput:c.Z,PrimaryBadge:m.Z,DefaultSelect:u.Z,DefaultSwitch:f.Z,DefaultCheckbox:p.Z,DefaultTextArea:b.Z},g="PrimaryBadge",v=m.Z,g in h?Object.defineProperty(h,g,{value:v,enumerable:!0,configurable:!0,writable:!0}):h[g]=v,h),props:{form:Object,mode:String,app:{type:Object,default:null}},computed:{sharedShortCodeOptions:function(){return this.$page.props.sharedShortCodesPayload.map((function(e){return{label:e.code,value:e.id}}))},versionOptions:function(){return((this.app||{}).versions?this.app.versions:this.$page.props.versionsPayload).map((function(e){return{label:e.number,value:e.id}}))}}};var h,g,v;const k=(0,r(83744).Z)(V,[["render",function(e,o,r,c,m,u){var f=(0,l.resolveComponent)("DefaultInput"),p=(0,l.resolveComponent)("DefaultTextArea"),b=(0,l.resolveComponent)("DefaultSwitch"),V=(0,l.resolveComponent)("DefaultSelect"),h=(0,l.resolveComponent)("PrimaryBadge"),g=(0,l.resolveComponent)("DefaultCheckbox");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,["Delete"==r.mode?((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:0},[(0,l.createElementVNode)("p",t,[a,(0,l.createElementVNode)("span",n,(0,l.toDisplayString)(r.app.confirmation_code),1),d]),(0,l.createVNode)(f,{modelValue:r.form.confirmation_code,"onUpdate:modelValue":o[0]||(o[0]=function(e){return r.form.confirmation_code=e}),label:"Reset code",placeholder:"Enter the reset code",disabled:r.form.processing||r.form.processing,error:r.form.errors.confirmation_code,class:"mb-6"},null,8,["modelValue","disabled","error"])],64)):((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:1},[(0,l.createVNode)(f,{modelValue:r.form.name,"onUpdate:modelValue":o[1]||(o[1]=function(e){return r.form.name=e}),label:"Name",placeholder:"My App",disabled:r.form.processing,error:r.form.errors.name,class:"mb-6"},null,8,["modelValue","disabled","error"]),(0,l.createVNode)(p,{modelValue:r.form.description,"onUpdate:modelValue":o[2]||(o[2]=function(e){return r.form.description=e}),label:"Description",placeholder:"This is a budget app",disabled:r.form.processing,error:r.form.errors.description,class:"mb-6"},null,8,["modelValue","disabled","error"]),(0,l.createVNode)(b,{modelValue:r.form.online,"onUpdate:modelValue":o[3]||(o[3]=function(e){return r.form.online=e}),label:"Online",disabled:r.form.processing,error:r.form.errors.online,class:"mb-6"},{default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("span",s," — Your app is "+(0,l.toDisplayString)(r.form.online?"online":"offline"),1)]})),_:1},8,["modelValue","disabled","error"]),r.form.online?(0,l.createCommentVNode)("",!0):((0,l.openBlock)(),(0,l.createBlock)(p,{key:0,modelValue:r.form.offline_message,"onUpdate:modelValue":o[4]||(o[4]=function(e){return r.form.offline_message=e}),label:"Offline Message",placeholder:"This service is currently not available",disabled:r.form.processing,error:r.form.errors.offline_message,class:"mb-4"},null,8,["modelValue","disabled","error"])),(0,l.createElementVNode)("div",i,[(0,l.createVNode)(V,{modelValue:r.form.shared_short_code_id,"onUpdate:modelValue":o[5]||(o[5]=function(e){return r.form.shared_short_code_id=e}),options:u.sharedShortCodeOptions,label:"Shared Short Code",placeholder:"Select a shared shortcode",disabled:r.form.processing,error:r.form.errors.shared_short_code_id,class:"w-60"},null,8,["modelValue","options","disabled","error"]),(0,l.createVNode)(h,{class:"mt-4"},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)((0,l.toDisplayString)(r.form.shared_code),1)]})),_:1})])],64)),"Update"==r.mode?((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:2},[(0,l.createVNode)(V,{modelValue:r.form.active_version_id,"onUpdate:modelValue":o[6]||(o[6]=function(e){return r.form.active_version_id=e}),options:u.versionOptions,label:"Active version",placeholder:"Select a version",disabled:r.form.processing,error:r.form.errors.active_version_id,class:"mb-6"},null,8,["modelValue","options","disabled","error"]),(0,l.createVNode)(f,{modelValue:r.form.dedicated_code,"onUpdate:modelValue":o[7]||(o[7]=function(e){return r.form.dedicated_code=e}),label:"Dedicated Code",placeholder:"*123#",disabled:r.form.processing,error:r.form.errors.dedicated_code,class:"mb-6"},null,8,["modelValue","disabled","error"]),"The dedicated code is already used by another app. Do you want to reassign the shortcode?"==r.form.errors.dedicated_code?((0,l.openBlock)(),(0,l.createBlock)(g,{key:0,modelValue:r.form.overide_dedicated_code,"onUpdate:modelValue":o[8]||(o[8]=function(e){return r.form.overide_dedicated_code=e}),label:"Reassign dedicated code to this app",disabled:r.form.processing,error:r.form.errors.overide_dedicated_code,class:"mb-6"},null,8,["modelValue","disabled","error"])):(0,l.createCommentVNode)("",!0)],64)):(0,l.createCommentVNode)("",!0)],64)}]])}}]);