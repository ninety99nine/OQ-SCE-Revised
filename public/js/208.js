"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[208],{40208:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var r=l(94865),u=(0,r.createElementVNode)("div",{class:"flex items-center justify-between border-b border-dotted pb-2 mb-8"},[(0,r.createElementVNode)("h5",{class:"text-sm font-semibold tracking-tight text-gray-600"},"Simulator Settings")],-1),o={class:"text-xs text-gray-400 ml-2"},s=(0,r.createElementVNode)("div",{class:"border-b border-dotted pb-4 my-8"},[(0,r.createElementVNode)("h5",{class:"text-sm font-semibold tracking-tight text-gray-600"},"Log Settings"),(0,r.createElementVNode)("h5",{class:"text-xs tracking-tight text-gray-400 mt-4 italic text-justify"},"Showing the debugging logs may slow down the performance of the simulator. Turn off the logs for better performance")],-1);var i=l(66222),n=l(91098),a=l(50967),d=l(34223);const m={components:{DefaultInput:i.Z,DefaultSwitch:a.Z,DefaultTextArea:d.Z},data:function(){return{useVersionBuilder:(0,n.P)()}}};const b=(0,l(83744).Z)(m,[["render",function(e,t,l,i,n,a){var d=(0,r.resolveComponent)("DefaultInput"),m=(0,r.resolveComponent)("DefaultSwitch"),b=(0,r.resolveComponent)("DefaultTextArea");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[u,(0,r.createVNode)(d,{modelValue:n.useVersionBuilder.builder.simulator.subscriber.phone_number,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.useVersionBuilder.builder.simulator.subscriber.phone_number=e}),label:"Mobile number",placeholder:"26772001234",class:"mb-6"},null,8,["modelValue"]),(0,r.createVNode)(m,{modelValue:n.useVersionBuilder.builder.simulator.settings.allow_timeouts,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.useVersionBuilder.builder.simulator.settings.allow_timeouts=e}),label:"Allow Timeouts",class:"mb-6"},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("span",o," — "+(0,r.toDisplayString)(n.useVersionBuilder.builder.simulator.settings.allow_timeouts?"Timeout enabled":"Timeout disabled"),1)]})),_:1},8,["modelValue"]),(0,r.createVNode)(d,{modelValue:n.useVersionBuilder.builder.simulator.settings.timeout_limit_in_seconds,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.useVersionBuilder.builder.simulator.settings.timeout_limit_in_seconds=e}),type:"number",label:"Timeout In Seconds",placeholder:"120",disabled:0==n.useVersionBuilder.builder.simulator.settings.allow_timeouts,class:"mb-6"},null,8,["modelValue","disabled"]),(0,r.createVNode)(b,{modelValue:n.useVersionBuilder.builder.simulator.settings.timeout_message,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.useVersionBuilder.builder.simulator.settings.timeout_message=e}),label:"Timeout Message",disabled:0==n.useVersionBuilder.builder.simulator.settings.allow_timeouts},null,8,["modelValue","disabled"]),s,(0,r.createVNode)(m,{modelValue:n.useVersionBuilder.builder.simulator.debugger.return_logs,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.useVersionBuilder.builder.simulator.debugger.return_logs=e}),label:"Show Debugging Logs",class:"mb-6"},null,8,["modelValue"]),n.useVersionBuilder.builder.simulator.debugger.return_logs?((0,r.openBlock)(),(0,r.createBlock)(m,{key:0,modelValue:n.useVersionBuilder.builder.simulator.debugger.return_summarized_logs,"onUpdate:modelValue":t[5]||(t[5]=function(e){return n.useVersionBuilder.builder.simulator.debugger.return_summarized_logs=e}),label:"Summarize Debugging Logs",class:"mb-6"},null,8,["modelValue"])):(0,r.createCommentVNode)("",!0)])}]])}}]);