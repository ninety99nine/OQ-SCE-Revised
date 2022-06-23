"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6577],{46577:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(94865),r=(0,o.createTextVNode)("Delete Option"),l={class:"text-sm text-gray-500 mb-5"},a=(0,o.createTextVNode)(" Are you sure you want to delete the "),i={key:0,class:"text-blue-500 font-bold"},s=(0,o.createTextVNode)(" option. After this option is deleted you cannot recover it again. "),c=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),u={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},d=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)];var p=n(75802),m=n(91098),h=n(55092);const f={components:{DefaultModal:p.Z,PrimaryButton:h.Z},props:{staticOptions:{type:Object,default:function(){return[]}},staticOption:{type:Object,default:null},index:{type:Number,default:null},showButton:{type:Boolean,default:!1}},data:function(){return{useVersionBuilder:(0,m.P)()}},methods:{deleteStaticOption:function(e){this.useVersionBuilder.removeStaticOptionByIndex(this.staticOptions,this.index),this.$message({message:"Option deleted successfully",type:"success"}),e()}}};const v=(0,n(83744).Z)(f,[["render",function(e,t,n,p,m,h){var f=(0,o.resolveComponent)("PrimaryButton"),v=(0,o.resolveComponent)("DefaultModal");return(0,o.openBlock)(),(0,o.createBlock)(v,{defaultText:"Cancel",onOpen:t[0]||(t[0]=function(t){return e.$emit("open")}),onClose:t[1]||(t[1]=function(t){return e.$emit("close")}),dangerText:"Delete Option",dangerAction:h.deleteStaticOption},{title:(0,o.withCtx)((function(){return[r]})),trigger:(0,o.withCtx)((function(){return[n.showButton?((0,o.openBlock)(),(0,o.createBlock)(f,{key:0,name:"trigger",class:"px-3"},{default:(0,o.withCtx)((function(){return[c]})),_:1})):((0,o.openBlock)(),(0,o.createElementBlock)("svg",u,d))]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("p",l,[a,0==n.staticOption.name.code_editor_mode?((0,o.openBlock)(),(0,o.createElementBlock)("span",i,(0,o.toDisplayString)(n.staticOption.name.text),1)):(0,o.createCommentVNode)("",!0),s])]})),_:1},8,["dangerAction"])}]])}}]);