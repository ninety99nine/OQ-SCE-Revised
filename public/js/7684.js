"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7684],{17684:(e,t,l)=>{l.r(t),l.d(t,{default:()=>f});var s=l(94865),o=(0,s.createTextVNode)("Select conditions to enable saving session logs"),n={class:"w-full text-sm text-left text-gray-500"},r={class:"text-xs text-gray-700 uppercase bg-gray-50"},a={class:"border-b hover:bg-gray-50"},i={class:"flex text-xs text-gray-500 mt-4"},u=(0,s.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,s.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),d={key:0,class:"flex items-center space-x-4 mt-6"},c=(0,s.createElementVNode)("span",{class:"text-xs font-medium text-gray-900"},"Save logs for",-1);var m=l(73905),g=l(66222),p=l(11868),v=l(91098),b=l(53233);const V={components:{PrimaryAlert:m.Z,DefaultInput:g.Z,InfoPopover:p.Z,DefaultSelect:b.Z},data:function(){return{useVersionBuilder:(0,v.P)(),headers:["Simulator Logs","Mobile Logs"],saveLogTypes:["simulator","mobile"],saveLogOptions:[{label:"Never",value:"never",description:"Never save logs of any session"},{label:"Always",value:"always",description:"Always save logs of every session"},{label:"On Fail",value:"on_fail",description:"Only save logs of failed sessions"},{label:"On Success",value:"on_success",description:"Only save logs of sucessful sessions"}]}},computed:{durationOptions:function(){return[{label:1==this.useVersionBuilder.builder.log_settings.duration.number?"Minute":"Minutes",value:"minutes"},{label:1==this.useVersionBuilder.builder.log_settings.duration.number?"Hour":"Hours",value:"hours"},{label:1==this.useVersionBuilder.builder.log_settings.duration.number?"Day":"Days",value:"days"},{label:1==this.useVersionBuilder.builder.log_settings.duration.number?"Week":"Weeks",value:"weeks"},{label:1==this.useVersionBuilder.builder.log_settings.duration.number?"Month":"Months",value:"months"},{label:1==this.useVersionBuilder.builder.log_settings.duration.number?"Year":"Years",value:"years"}]}}};const f=(0,l(83744).Z)(V,[["render",function(e,t,l,m,g,p){var v=(0,s.resolveComponent)("PrimaryAlert"),b=(0,s.resolveComponent)("DefaultSelect"),V=(0,s.resolveComponent)("DefaultInput"),f=(0,s.resolveComponent)("InfoPopover");return(0,s.openBlock)(),(0,s.createElementBlock)("div",null,[(0,s.createVNode)(v,{class:"mb-6"},{default:(0,s.withCtx)((function(){return[o]})),_:1}),(0,s.createElementVNode)("table",n,[(0,s.createElementVNode)("thead",r,[(0,s.createElementVNode)("tr",null,[((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(g.headers,(function(e,t){return(0,s.openBlock)(),(0,s.createElementBlock)("th",{key:t,scope:"col",class:"px-6 py-3"},[(0,s.createElementVNode)("span",null,(0,s.toDisplayString)(e),1)])})),128))])]),(0,s.createElementVNode)("tbody",null,[(0,s.createElementVNode)("tr",a,[((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(g.saveLogTypes,(function(e,t){return(0,s.openBlock)(),(0,s.createElementBlock)("td",{key:t,scope:"row",class:"px-6 py-3"},[(0,s.createVNode)(b,{modelValue:g.useVersionBuilder.builder.log_settings[e].save_logs,"onUpdate:modelValue":function(t){return g.useVersionBuilder.builder.log_settings[e].save_logs=t},options:g.saveLogOptions,class:"w-40"},null,8,["modelValue","onUpdate:modelValue","options"]),(0,s.createElementVNode)("div",i,[u,(0,s.createElementVNode)("span",null,(0,s.toDisplayString)(g.saveLogOptions.find((function(t){return t.value==g.useVersionBuilder.builder.log_settings[e].save_logs})).description),1)])])})),128))])])]),"never"!=g.useVersionBuilder.builder.log_settings.simulator.save_logs||"never"!=g.useVersionBuilder.builder.log_settings.mobile.save_logs?((0,s.openBlock)(),(0,s.createElementBlock)("div",d,[c,(0,s.createVNode)(V,{modelValue:g.useVersionBuilder.builder.log_settings.duration.number,"onUpdate:modelValue":t[0]||(t[0]=function(e){return g.useVersionBuilder.builder.log_settings.duration.number=e}),type:"number"},null,8,["modelValue"]),(0,s.createVNode)(b,{modelValue:g.useVersionBuilder.builder.log_settings.duration.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.useVersionBuilder.builder.log_settings.duration.type=e}),options:p.durationOptions,class:"w-40"},null,8,["modelValue","options"]),(0,s.createVNode)(f,{info:"The time to wait until the logs are deleted"})])):(0,s.createCommentVNode)("",!0)])}]])}}]);