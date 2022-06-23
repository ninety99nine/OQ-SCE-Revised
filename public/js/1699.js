"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1699,4193],{74193:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var a=r(94865),o={key:0,class:"text-sm text-gray-500 mb-5"},n=(0,a.createTextVNode)("Cloning "),l={class:"text-blue-500 font-bold"},s=(0,a.createTextVNode)(" display"),i={key:0,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},c=[(0,a.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],d=(0,a.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1);var u=r(39038),m=r(68524),p=r(75802),h=r(91098),f=r(55092);const y={components:{useForm:u.cI,DefaultInput:m.Z,DefaultModal:p.Z,PrimaryButton:f.Z},props:{display:{type:Object,default:null},mode:{type:String,default:null,validator:function(e){return["create","clone"].includes(e)}}},data:function(){return{form:null,useVersionBuilder:(0,h.P)()}},computed:{action:function(){return this.display?"Clone":"Create"}},methods:{resetForm:function(){"create"==this.mode?this.form=(0,u.cI)((0,h.P)().getBlankDisplay()):"clone"==this.mode&&(this.form=(0,u.cI)((0,h.P)().getClonedDisplay(this.display)))},createDisplay:function(e){this.form.clearErrors();var t=this.useVersionBuilder.searchScreenDisplays(this.form.name,!0).length;if(0==this.form.name.length?this.form.setError("name","The display name is required"):this.form.name.length<3?this.form.setError("name","The display name is too short"):this.form.name.length>50?this.form.setError("name","The display name is too long"):t&&this.form.setError("name","This display name is already in use"),!1===this.form.hasErrors){var r=this.form.data();this.useVersionBuilder.addDisplay(r),this.useVersionBuilder.selectDisplay(r),this.$message({message:"Display "+(this.display?"cloned":"created")+" successfully",type:"success"}),e()}},cancelCreateDisplay:function(){this.form.clearErrors()}}};const v=(0,r(83744).Z)(y,[["render",function(e,t,r,u,m,p){var h=(0,a.resolveComponent)("DefaultInput"),f=(0,a.resolveComponent)("PrimaryButton"),y=(0,a.resolveComponent)("DefaultModal");return(0,a.openBlock)(),(0,a.createBlock)(y,{defaultText:"Cancel",onOpen:t[1]||(t[1]=function(e){return p.resetForm()}),onClose:t[2]||(t[2]=function(t){return e.$emit("close")}),primaryAction:p.createDisplay,primaryText:p.action+" Display",defaultAction:p.cancelCreateDisplay},{title:(0,a.withCtx)((function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(p.action+" Display"),1)]})),default:(0,a.withCtx)((function(e){var i=e.firePrimaryAction;return["clone"==r.mode?((0,a.openBlock)(),(0,a.createElementBlock)("p",o,[n,(0,a.createElementVNode)("span",l,(0,a.toDisplayString)(r.display.name),1),s])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(h,{modelValue:m.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return m.form.name=e}),label:"Name",placeholder:"Home",error:m.form.errors.name,onKeyup:(0,a.withKeys)(i,["enter"]),autofocus:!0},null,8,["modelValue","error","onKeyup"])]})),trigger:(0,a.withCtx)((function(){return["clone"==r.mode?((0,a.openBlock)(),(0,a.createElementBlock)("svg",i,c)):((0,a.openBlock)(),(0,a.createBlock)(f,{key:1,name:"trigger",class:"px-3"},{default:(0,a.withCtx)((function(){return[d,(0,a.renderSlot)(e.$slots,"default")]})),_:3}))]})),_:3},8,["primaryAction","primaryText","defaultAction"])}]])},11699:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(94865),o={class:"flex items-center justify-between bg-white rounded-sm border border-dashed border-gray-400 p-5"},n=(0,a.createStaticVNode)('<div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg><div><p class="text-gray-800 text-md mb-1">No displays</p><p class="text-gray-600 text-xs">Go ahead and create your first display</p></div></div>',1),l={class:"flex justify-end"},s=(0,a.createElementVNode)("span",{class:"ml-2"},"Create Display",-1);const i={components:{CreateDisplayModal:r(74193).default}};const c=(0,r(83744).Z)(i,[["render",function(e,t,r,i,c,d){var u=(0,a.resolveComponent)("CreateDisplayModal");return(0,a.openBlock)(),(0,a.createElementBlock)("div",o,[n,(0,a.createElementVNode)("div",l,[(0,a.createVNode)(u,{mode:"create"},{default:(0,a.withCtx)((function(){return[s]})),_:1})])])}]])}}]);