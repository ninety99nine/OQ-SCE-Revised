"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5021],{15021:(e,o,r)=>{r.r(o),r.d(o,{default:()=>u});var n=r(94865),t={class:"grid grid-cols-3 gap-x-8 gap-y-4"},l=["onMouseenter","onMouseleave","onClick"],s={class:"text-xs mr-4"};var i=r(91098);const c={components:{DefaultColorPicker:r(26232).Z},data:function(){return{namesHovered:[],useVersionBuilder:(0,i.P)()}},methods:{addHover:function(e){this.namesHovered.push(e)},removeHover:function(e){this.namesHovered.splice(this.namesHovered.indexOf(e),1)},isHovering:function(e){return this.namesHovered.includes(e)},style:function(e,o){return{border:"1px solid "+this.color(e,o,50),backgroundColor:this.color(e,o,10)}},color:function(e,o,r){return this.isHovering(e)?o+r:"transparent"},openColorPicker:function(e,o){this.$refs[e][0].$refs.colorPicker.handleTrigger()}}};const u=(0,r(83744).Z)(c,[["render",function(e,o,r,i,c,u){var a=(0,n.resolveComponent)("DefaultColorPicker");return(0,n.openBlock)(),(0,n.createElementBlock)("div",t,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(c.useVersionBuilder.builder.color_scheme.event_colors,(function(e,o){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{key:o,class:"col-span-1 flex items-center justify-between p-2 pl-4 rounded-md cursor-pointer transition-all duration-300",onMouseenter:function(e){return u.addHover(o)},onMouseleave:function(e){return u.removeHover(o)},style:(0,n.normalizeStyle)(u.style(o,e)),onClick:function(e){return u.openColorPicker(o,e)}},[(0,n.createElementVNode)("span",s,(0,n.toDisplayString)(o),1),(0,n.createVNode)(a,{ref_for:!0,ref:o,modelValue:c.useVersionBuilder.builder.color_scheme.event_colors[o],"onUpdate:modelValue":function(e){return c.useVersionBuilder.builder.color_scheme.event_colors[o]=e}},null,8,["modelValue","onUpdate:modelValue"])],44,l)})),128))])}]])}}]);