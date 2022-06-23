"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3250],{33250:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var r=s(94865),n=(0,r.createTextVNode)("Delete Display"),l={class:"text-sm text-gray-500 mb-5"},o=(0,r.createTextVNode)("Are you sure you want to delete the "),i={class:"text-blue-500 font-bold"},a=(0,r.createTextVNode)(" display. After this display is deleted you cannot recover it again."),u=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),c={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},d=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)];var p=s(75802),h=s(91098),y=s(55092);const m={components:{DefaultModal:p.Z,PrimaryButton:y.Z},props:{display:Object,showButton:{type:Boolean,default:!1}},data:function(){return{useVersionBuilder:(0,h.P)()}},methods:{deleteDisplay:function(e){var t=this.useVersionBuilder.hasSelectedSpecificDisplay(this.display);this.useVersionBuilder.removeDisplay(this.display);var s=this.useVersionBuilder.hasDisplayMarkedAsFirstDisplay();this.useVersionBuilder.hasScreenDisplays&&0==s&&this.useVersionBuilder.markDisplayAsFirstDisplay(this.useVersionBuilder.screenDisplays[0]),t&&this.useVersionBuilder.selectRecomendedDisplay(),this.$message({message:"Display deleted successfully",type:"success"}),e()}}};const f=(0,s(83744).Z)(m,[["render",function(e,t,s,p,h,y){var m=(0,r.resolveComponent)("PrimaryButton"),f=(0,r.resolveComponent)("DefaultModal");return(0,r.openBlock)(),(0,r.createBlock)(f,{defaultText:"Cancel",onOpen:t[0]||(t[0]=function(t){return e.$emit("open")}),onClose:t[1]||(t[1]=function(t){return e.$emit("close")}),dangerText:"Delete Display",dangerAction:y.deleteDisplay},{title:(0,r.withCtx)((function(){return[n]})),trigger:(0,r.withCtx)((function(){return[s.showButton?((0,r.openBlock)(),(0,r.createBlock)(m,{key:0,name:"trigger",class:"px-3"},{default:(0,r.withCtx)((function(){return[u]})),_:1})):((0,r.openBlock)(),(0,r.createElementBlock)("svg",c,d))]})),default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("p",l,[o,(0,r.createElementVNode)("span",i,(0,r.toDisplayString)(s.display.name),1),a])]})),_:1},8,["dangerAction"])}]])}}]);