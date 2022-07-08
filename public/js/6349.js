"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6349],{66349:(e,t,l)=>{l.r(t),l.d(t,{default:()=>p});var r=l(94865),s={key:0},o=(0,r.createElementVNode)("p",{class:"text-gray-500 text-xs mt-4 mb-6"},"Block access to all mobile numbers except the numbers provided above",-1),i={key:1},n=(0,r.createElementVNode)("p",{class:"text-gray-500 text-xs mt-4 mb-6"},"Grant access to all mobile numbers except the numbers provided above",-1),a={key:2,class:"text-gray-500 text-xs"};var u=l(91098),c=l(53233),d=l(34223),m=l(87087);const b={components:{DefaultSelect:c.Z,DefaultTextarea:d.Z,TextOrCodeEditor:m.Z},data:function(){return{useVersionBuilder:(0,u.P)(),restrictions:[{label:"None"},{label:"Blacklist"},{label:"Whitelist"}]}}};const p=(0,l(83744).Z)(b,[["render",function(e,t,l,u,c,d){var m=(0,r.resolveComponent)("DefaultSelect"),b=(0,r.resolveComponent)("TextOrCodeEditor"),p=(0,r.resolveComponent)("DefaultTextarea");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createVNode)(m,{modelValue:c.useVersionBuilder.builder.restrictions.selected_type,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.useVersionBuilder.builder.restrictions.selected_type=e}),options:c.restrictions,label:"Select restriction",class:"w-1/4 mb-6"},null,8,["modelValue","options"]),(0,r.createVNode)(r.Transition,{name:"fade",mode:"out-in",duration:250},{default:(0,r.withCtx)((function(){return["Whitelist"==c.useVersionBuilder.builder.restrictions.selected_type?((0,r.openBlock)(),(0,r.createElementBlock)("div",s,[(0,r.createVNode)(b,{modelValue:c.useVersionBuilder.builder.restrictions.whitelist.numbers,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.useVersionBuilder.builder.restrictions.whitelist.numbers=e}),label:"Whitelist",placeholder:"number1, number2, e.t.c",info:"Separate numbers by comma",showCode:!0},null,8,["modelValue"]),o,(0,r.createVNode)(p,{modelValue:c.useVersionBuilder.builder.restrictions.whitelist.message,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.useVersionBuilder.builder.restrictions.whitelist.message=e}),label:"Message",placeholder:"Access denied to service",info:"Message to show to numbers that do not appear on the whitelist"},null,8,["modelValue"])])):"Blacklist"==c.useVersionBuilder.builder.restrictions.selected_type?((0,r.openBlock)(),(0,r.createElementBlock)("div",i,[(0,r.createVNode)(b,{modelValue:c.useVersionBuilder.builder.restrictions.blacklist.numbers,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.useVersionBuilder.builder.restrictions.blacklist.numbers=e}),label:"Blacklist",placeholder:"number1, number2, e.t.c",info:"Separate numbers by comma",showCode:!0},null,8,["modelValue"]),n,(0,r.createVNode)(p,{modelValue:c.useVersionBuilder.builder.restrictions.blacklist.message,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.useVersionBuilder.builder.restrictions.blacklist.message=e}),label:"Message",placeholder:"Access denied to service",info:"Message to show to numbers that appear on the blacklist"},null,8,["modelValue"])])):((0,r.openBlock)(),(0,r.createElementBlock)("p",a,"Grant access to all mobile numbers"))]})),_:1})])}]])}}]);