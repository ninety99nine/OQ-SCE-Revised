"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4798],{84798:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(94865),s=(0,n.createTextVNode)("Delete Screen"),o={class:"text-sm text-gray-500 mb-5"},c=(0,n.createTextVNode)("Are you sure you want to delete the "),l={class:"text-blue-500 font-bold"},i=(0,n.createTextVNode)(" screen. After this screen is deleted you cannot recover it again."),a=(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),u={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},d=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)];var h=r(75802),m=r(91098),p=r(55092);const f={components:{DefaultModal:h.Z,PrimaryButton:p.Z},props:{screen:Object,showButton:{type:Boolean,default:!1}},data:function(){return{useVersionBuilder:(0,m.P)()}},methods:{deleteScreen:function(e){var t=this.useVersionBuilder.hasSelectedSpecificScreen(this.screen);this.useVersionBuilder.removeScreen(this.screen);var r=this.useVersionBuilder.hasScreenMarkedAsFirstDisplayScreen();this.useVersionBuilder.hasScreens?0==r&&this.useVersionBuilder.markScreenAsFirstDisplayScreen(this.useVersionBuilder.screens[0]):this.useVersionBuilder.unselectScreen(),t&&this.useVersionBuilder.selectRecomendedScreen(),this.$message({message:"Screen deleted successfully",type:"success"}),e()}}};const v=(0,r(83744).Z)(f,[["render",function(e,t,r,h,m,p){var f=(0,n.resolveComponent)("PrimaryButton"),v=(0,n.resolveComponent)("DefaultModal");return(0,n.openBlock)(),(0,n.createBlock)(v,{defaultText:"Cancel",onOpen:t[0]||(t[0]=function(t){return e.$emit("open")}),onClose:t[1]||(t[1]=function(t){return e.$emit("close")}),dangerText:"Delete Screen",dangerAction:p.deleteScreen},{title:(0,n.withCtx)((function(){return[s]})),trigger:(0,n.withCtx)((function(){return[r.showButton?((0,n.openBlock)(),(0,n.createBlock)(f,{key:0,name:"trigger",class:"px-3"},{default:(0,n.withCtx)((function(){return[a]})),_:1})):((0,n.openBlock)(),(0,n.createElementBlock)("svg",u,d))]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("p",o,[c,(0,n.createElementVNode)("span",l,(0,n.toDisplayString)(r.screen.name),1),i])]})),_:1},8,["dangerAction"])}]])}}]);