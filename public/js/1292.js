"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1292],{91292:(e,a,n)=>{n.r(a),n.d(a,{default:()=>E});var l=n(94865),t={class:"grid grid-cols-2 gap-8 mb-6"},o={class:"col-span-1"},i={class:"col-span-1"},r=(0,l.createElementVNode)("span",null," If enabled, this feature separates the content by its line breaks before limiting the content. This is useful if the display consists of menus that must not be cut off, especially menus consisting of multiple words. This means each menu will not be split into separate portions and placed in separate pagination groups. ",-1),c={class:"grid grid-cols-2 gap-8 mb-6"},d={class:"col-span-1"},s={class:"col-span-1"},u={class:"grid grid-cols-2 gap-8 mb-6"},p={class:"col-span-1"},m={class:"col-span-1"},g={class:"grid grid-cols-2 gap-8 mb-6"},b={class:"col-span-1"},V={class:"col-span-1"};var _=n(91098),f=n(50967),h=n(91209),N=n(88458),v=n(87087);const k={props:["global","pagination"],components:{DefaultSwitch:f.Z,DefaultSelect:h.Z,SelectActiveState:N.default,TextOrCodeEditor:v.Z},data:function(){return{useVersionBuilder:(0,_.P)(),targetOptions:[{label:"Instruction Content",value:"instruction"},{label:"Action Content",value:"action"},{label:"Both",value:"both"}],separationOptions:[{label:"Words",value:"words"},{label:"Characters",value:"characters"}]}}};const E=(0,n(83744).Z)(k,[["render",function(e,a,n,_,f,h){var N=(0,l.resolveComponent)("DefaultSwitch"),v=(0,l.resolveComponent)("SelectActiveState"),k=(0,l.resolveComponent)("DefaultSelect"),E=(0,l.resolveComponent)("TextOrCodeEditor");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[0==n.global?((0,l.openBlock)(),(0,l.createBlock)(N,{key:0,modelValue:n.pagination.use_global_pagination,"onUpdate:modelValue":a[0]||(a[0]=function(e){return n.pagination.use_global_pagination=e}),label:"Global Pagination",note:(n.pagination.use_global_pagination?"Disable ":"Enable")+" the use of global pagination",class:"mb-6"},null,8,["modelValue","note"])):(0,l.createCommentVNode)("",!0),1==n.global||0==n.global&&0==n.pagination.use_global_pagination?((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:1},[(0,l.createVNode)(v,{modelValue:n.pagination.active,"onUpdate:modelValue":a[1]||(a[1]=function(e){return n.pagination.active=e}),class:"mb-6"},null,8,["modelValue"]),(0,l.createElementVNode)("div",t,[(0,l.createElementVNode)("div",o,[(0,l.createVNode)(k,{modelValue:n.pagination.content_target.selected_type,"onUpdate:modelValue":a[2]||(a[2]=function(e){return n.pagination.content_target.selected_type=e}),options:f.targetOptions,label:"Target",note:"📃 Content to paginate"},null,8,["modelValue","options"])]),(0,l.createElementVNode)("div",i,[(0,l.createVNode)(k,{modelValue:n.pagination.slice.separation_type,"onUpdate:modelValue":a[3]||(a[3]=function(e){return n.pagination.slice.separation_type=e}),options:f.separationOptions,label:"Separation",note:"✂️ Content separation technique"},null,8,["modelValue","options"])])]),(0,l.createVNode)(N,{modelValue:n.pagination.paginate_by_line_breaks,"onUpdate:modelValue":a[4]||(a[4]=function(e){return n.pagination.paginate_by_line_breaks=e}),note:(n.pagination.paginate_by_line_breaks?"Disable":"Enable")+" separation by line breaks before pagination",class:"mb-6"},{info:(0,l.withCtx)((function(){return[r]})),_:1},8,["modelValue","note"]),(0,l.createElementVNode)("div",c,[(0,l.createElementVNode)("div",d,[(0,l.createVNode)(E,{modelValue:n.pagination.scroll_down.name,"onUpdate:modelValue":a[5]||(a[5]=function(e){return n.pagination.scroll_down.name=e}),label:"Scroll ⬇️ Name",placeholder:"99. Next",note:"Proceed forward name"},null,8,["modelValue"])]),(0,l.createElementVNode)("div",s,[(0,l.createVNode)(E,{modelValue:n.pagination.scroll_down.input,"onUpdate:modelValue":a[6]||(a[6]=function(e){return n.pagination.scroll_down.input=e}),label:"Scroll ⬇️ Input",placeholder:"99",note:"Proceed forward input"},null,8,["modelValue"])])]),(0,l.createElementVNode)("div",u,[(0,l.createElementVNode)("div",p,[(0,l.createVNode)(E,{modelValue:n.pagination.scroll_up.name,"onUpdate:modelValue":a[7]||(a[7]=function(e){return n.pagination.scroll_up.name=e}),label:"Scroll ⬆️ Name",placeholder:"0. Back",note:"Proceed backward name"},null,8,["modelValue"])]),(0,l.createElementVNode)("div",m,[(0,l.createVNode)(E,{modelValue:n.pagination.scroll_up.input,"onUpdate:modelValue":a[8]||(a[8]=function(e){return n.pagination.scroll_up.input=e}),label:"Scroll ⬆️ Input",placeholder:"0",note:"Proceed backward input"},null,8,["modelValue"])])]),(0,l.createElementVNode)("div",g,[(0,l.createElementVNode)("div",b,[(0,l.createVNode)(E,{modelValue:n.pagination.slice.start,"onUpdate:modelValue":a[9]||(a[9]=function(e){return n.pagination.slice.start=e}),label:"Start Slice Position",placeholder:"0",note:"📍 Start pagination offset"},null,8,["modelValue"])]),(0,l.createElementVNode)("div",V,[(0,l.createVNode)(E,{modelValue:n.pagination.slice.end,"onUpdate:modelValue":a[10]||(a[10]=function(e){return n.pagination.slice.end=e}),label:"End Slice Position",placeholder:"0",note:"📍 End pagination offset"},null,8,["modelValue"])])]),(0,l.createVNode)(E,{modelValue:n.pagination.trailing_end,"onUpdate:modelValue":a[11]||(a[11]=function(e){return n.pagination.trailing_end=e}),label:"Trailing Characters",placeholder:"...",note:"Content continuation hint",class:"w-1/2 mb-6"},null,8,["modelValue"]),(0,l.createVNode)(N,{modelValue:n.pagination.break_line_before_trail,"onUpdate:modelValue":a[12]||(a[12]=function(e){return n.pagination.break_line_before_trail=e}),note:(n.pagination.break_line_before_trail?"Disable ":"Enable")+" line break before trailing characters",class:"mb-4"},null,8,["modelValue","note"]),(0,l.createVNode)(N,{modelValue:n.pagination.break_line_after_trail,"onUpdate:modelValue":a[13]||(a[13]=function(e){return n.pagination.break_line_after_trail=e}),note:(n.pagination.break_line_after_trail?"Disable ":"Enable")+" line break after trailing characters"},null,8,["modelValue","note"])],64)):(0,l.createCommentVNode)("",!0)])}]])}}]);