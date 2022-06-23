"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[137],{137:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var s=n(94865),o={class:"flex justify-between"},r={class:"block text-sm font-semibold text-gray-700 my-8"},l={class:"relative"},a={class:"flex items-start space-x-4 overflow-y-auto bg-gray-100 rounded-t-md border py-4 px-10"},c={key:0,class:"absolute top-2 bottom-4 left-0 w-12 bg-gradient-to-r from-gray-100 rounded-l-md border-l border-transparent"},u={key:1,class:"absolute top-2 bottom-4 right-0 w-12 bg-gradient-to-l from-gray-100 rounded-r-md border-r border-transparent"},p={key:0,class:"flex items-center"},i={class:"bg-white border-2 p-8 rounded-full text-center"},d=(0,s.createElementVNode)("span",{class:"block text-gray-400 text-xs italic"},"Dial",-1),m={class:"font-bold"},h=(0,s.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 ml-4 mr-2 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,s.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1),g={class:"flex-none bg-white border rounded-lg shadow-md p-4 w-60 mb-2"},f={class:"text-gray-600 text-xs whitespace-pre-wrap"},k={key:0,class:"text-gray-600 text-sm whitespace-pre-wrap my-4 text-center"},x=(0,s.createElementVNode)("span",{class:"text-gray-400 text-xs italic mr-2"},"Reply:",-1),y={class:"font-bold"},b={key:2},w=[(0,s.createElementVNode)("span",{class:"text-xs"},"No search results",-1)];const V={props:["view"],components:{DefaultSearchBar:n(14720).Z},data:function(){return{search:null,session:this.$page.props.sessionPayload,screens:[{input:"*250#",output:"Screen 1"},{input:"1",output:"Screen 2"},{input:"2",output:"Screen 3"},{input:"3",output:"Screen 4"},{input:"4",output:"Screen 5"},{input:"5",output:"Screen 6"},{input:"6",output:"Screen 7"}]}},watch:{"$page.props":function(e,t){this.session=this.$page.props.sessionPayload}},computed:{filteredInputsAndOutputs:function(){var e=this;return 0==[null,""].includes(this.search)?this.session.inputs_and_outputs.filter((function(t){return t.output.toLowerCase().includes(e.search.toLowerCase())})):this.session.inputs_and_outputs}}};const E=(0,n(83744).Z)(V,[["render",function(e,t,n,V,E,N){var v=(0,s.resolveComponent)("DefaultSearchBar");return(0,s.openBlock)(),(0,s.createElementBlock)("div",null,[(0,s.createElementVNode)("div",o,[(0,s.createElementVNode)("span",r,(0,s.toDisplayString)(E.session.total_inputs_and_outputs)+" "+(0,s.toDisplayString)(1==E.session.total_inputs_and_outputs?"Interaction":"Interactions"),1),(0,s.createVNode)(v,{modelValue:E.search,"onUpdate:modelValue":t[0]||(t[0]=function(e){return E.search=e}),placeholder:"Search content"},null,8,["modelValue"])]),(0,s.createElementVNode)("div",l,[(0,s.createElementVNode)("div",a,[N.filteredInputsAndOutputs.length?((0,s.openBlock)(),(0,s.createElementBlock)("div",c)):(0,s.createCommentVNode)("",!0),N.filteredInputsAndOutputs.length?((0,s.openBlock)(),(0,s.createElementBlock)("div",u)):(0,s.createCommentVNode)("",!0),((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(N.filteredInputsAndOutputs,(function(e,t){return(0,s.openBlock)(),(0,s.createElementBlock)("div",{key:t,class:"flex items-center space-x-4"},[0==t&&[null,""].includes(E.search)?((0,s.openBlock)(),(0,s.createElementBlock)("div",p,[(0,s.createElementVNode)("span",i,[d,(0,s.createElementVNode)("span",m,(0,s.toDisplayString)(e.input),1)]),h])):(0,s.createCommentVNode)("",!0),(0,s.createElementVNode)("div",null,[(0,s.createElementVNode)("div",g,[(0,s.createElementVNode)("p",f,(0,s.toDisplayString)(e.output),1)]),t!=E.session.inputs_and_outputs.length-1?((0,s.openBlock)(),(0,s.createElementBlock)("p",k,[(0,s.createElementVNode)("span",null,[x,(0,s.createElementVNode)("span",y,(0,s.toDisplayString)(E.session.inputs_and_outputs[t+1].input),1)])])):(0,s.createCommentVNode)("",!0)])])})),128)),0==N.filteredInputsAndOutputs.length?((0,s.openBlock)(),(0,s.createElementBlock)("div",b,w)):(0,s.createCommentVNode)("",!0)])])])}]])}}]);