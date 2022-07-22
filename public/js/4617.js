"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4617],{74617:(e,r,o)=>{o.r(r),o.d(r,{default:()=>m});var s=o(94865),n=(0,s.createElementVNode)("span",null,"Change your account password",-1),a={class:"flex justify-end"},t=(0,s.createTextVNode)("Change Password");var d=o(39038),l=o(66222),u=o(73905),c=o(55092);const i={components:{DefaultInput:l.Z,PrimaryAlert:u.Z,PrimaryButton:c.Z},data:function(){return{form:(0,d.cI)({new_password:"",curr_password:"",new_password_confirmation:""})}},methods:{changePassword:function(){var e=this;this.form.clearErrors(),this.form.post(route("settings.account.update"),{preserveState:!0,preserveScroll:!0,onSuccess:function(){e.$message({message:"Password changed successfully",type:"success"}),e.form.reset()},onError:function(r){e.$message({message:"Sorry, we found some mistakes",type:"error"})}})}}};const m=(0,o(83744).Z)(i,[["render",function(e,r,o,d,l,u){var c=(0,s.resolveComponent)("PrimaryAlert"),i=(0,s.resolveComponent)("DefaultInput"),m=(0,s.resolveComponent)("PrimaryButton");return(0,s.openBlock)(),(0,s.createElementBlock)("div",null,[(0,s.createVNode)(c,{class:"mb-6"},{default:(0,s.withCtx)((function(){return[n]})),_:1}),(0,s.createVNode)(i,{modelValue:l.form.curr_password,"onUpdate:modelValue":r[0]||(r[0]=function(e){return l.form.curr_password=e}),type:"password",label:"Current Password",disabled:l.form.processing,error:l.form.errors.curr_password,onKeyup:r[1]||(r[1]=(0,s.withKeys)((function(e){return u.changePassword()}),["enter"])),class:"mb-4"},null,8,["modelValue","disabled","error"]),(0,s.createVNode)(i,{modelValue:l.form.new_password,"onUpdate:modelValue":r[2]||(r[2]=function(e){return l.form.new_password=e}),type:"password",label:"New Password",disabled:l.form.processing,error:l.form.errors.new_password,onKeyup:r[3]||(r[3]=(0,s.withKeys)((function(e){return u.changePassword()}),["enter"])),class:"mb-4"},null,8,["modelValue","disabled","error"]),(0,s.createVNode)(i,{modelValue:l.form.new_password_confirmation,"onUpdate:modelValue":r[4]||(r[4]=function(e){return l.form.new_password_confirmation=e}),type:"password",label:"Confirm New Password",disabled:l.form.processing,error:l.form.errors.new_password_confirmation,onKeyup:r[5]||(r[5]=(0,s.withKeys)((function(e){return u.changePassword()}),["enter"])),class:"mb-6"},null,8,["modelValue","disabled","error"]),(0,s.createElementVNode)("div",a,[(0,s.createVNode)(m,{onClick:r[6]||(r[6]=(0,s.withModifiers)((function(e){return u.changePassword()}),["stop"])),disabled:l.form.processing},{default:(0,s.withCtx)((function(){return[t]})),_:1},8,["disabled"])])])}]])}}]);