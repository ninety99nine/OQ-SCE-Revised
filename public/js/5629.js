"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5629],{95629:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var n=s(94865),o={class:"flex items-center justify-between mb-6"},a=(0,n.createElementVNode)("h1",{class:"text-xl font-semibold text-gray-700 mb-2"},"Sessions",-1),l={class:"flex divide-x border rounded-md py-2 px-6"},r={class:"text-center text-xs m-auto pr-6"},i=(0,n.createElementVNode)("p",{class:"mb-2 text-gray-400"},"Total Sessions",-1),c={key:0,class:"text-center text-xs m-auto px-6"},u=(0,n.createElementVNode)("p",{class:"mb-2 text-gray-400"},"Mobile",-1),p={class:"text-gray-300 font-semibold text-lg"},d={key:1,class:"text-center text-xs m-auto px-6"},m=(0,n.createElementVNode)("p",{class:"mb-2 text-gray-400"},"Simulator",-1),h={class:"text-gray-300 font-semibold text-lg"},g={class:"text-center text-xs m-auto px-6"},f=(0,n.createElementVNode)("p",{class:"mb-2 text-gray-400"},"Fail",-1),b={class:"text-center text-xs m-auto pl-6"},v=(0,n.createElementVNode)("p",{class:"mb-2 text-gray-400"},"Success",-1),S={class:"flex items-end justify-between mb-6"};var V=s(9669),x=s.n(V),y=s(53233),C=s(49510);const N={props:["showingOnMainMenu"],components:{DefaultSelect:y.Z,DefaultSearchBar:C.Z},data:function(){return{totalSessions:this.$page.props.statistics.totalSessions,totalFailSessions:this.$page.props.statistics.totalFailSessions,totalSuccessSessions:this.$page.props.statistics.totalSuccessSessions,totalMobileSessions:this.$page.props.statistics.totalMobileSessions,totalSimulatorSessions:this.$page.props.statistics.totalSimulatorSessions,origin:"any",originOptions:[{label:"Any",value:"any"},{label:"Mobile",value:"mobile"},{label:"Simulator",value:"simulator"}],requestType:"any",requestTypeOptions:[{label:"Any",value:"any"},{label:"Started",value:"1"},{label:"Running",value:"2"},{label:"Ended",value:"3"},{label:"Timed Out",value:"4"}],status:"any",statusOptions:[{label:"Any",value:"any"},{label:"Success",value:"success"},{label:"Fail",value:"fail"}],selectedVersion:this.route().params.version,versionOptions:this.$page.props.versionOptions.map((function(e){return{label:e.number,value:e.id}})),search:null,request:null,refreshContentInterval:null}},methods:{refreshContent:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$emit("selectedVersion",this.selectedVersion),0!=t||!this.request){1==t&&(this.request&&this.request.cancel(),this.$emit("isLoading",!0));var s=x().CancelToken.source();this.request={cancel:s.cancel};var n,o,a={cancelToken:s.token};if("sessions.show"===route().current())n=route(route().current(),{project:this.route().params.project,app:this.route().params.app,version:this.selectedVersion,origin:this.origin,status:this.status,search:this.search,requestType:this.requestType,page:null!==(o=this.route().params.page)&&void 0!==o?o:1});else if("account.sessions.show"===route().current()){var l;n=route(route().current(),{project:this.route().params.project,account:this.route().params.account,app:this.route().params.app,version:this.selectedVersion,origin:this.origin,status:this.status,search:this.search,requestType:this.requestType,page:null!==(l=this.route().params.page)&&void 0!==l?l:1})}x().get(n,a).then((function(t){e.$emit("response",t.data),e.$emit("isLoading",!1),e.request=null}))}},cleanUp:function(){clearInterval(this.refreshContentInterval),this.refreshContentInterval=null}},created:function(){this.refreshContentInterval=setInterval(function(){this.refreshContent(!1)}.bind(this),3e3)},unmounted:function(){this.cleanUp()}};const E=(0,s(83744).Z)(N,[["render",function(e,t,s,V,x,y){var C=(0,n.resolveComponent)("DefaultSelect"),N=(0,n.resolveComponent)("DefaultSearchBar");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("div",o,[a,(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",r,[i,(0,n.createElementVNode)("p",{class:(0,n.normalizeClass)([(0==x.totalSessions?"text-gray-300":"text-blue-500")+" font-semibold text-lg"])},(0,n.toDisplayString)(x.totalSessions),3)]),s.showingOnMainMenu?((0,n.openBlock)(),(0,n.createElementBlock)("div",c,[u,(0,n.createElementVNode)("p",p,(0,n.toDisplayString)(x.totalMobileSessions),1)])):(0,n.createCommentVNode)("",!0),s.showingOnMainMenu?((0,n.openBlock)(),(0,n.createElementBlock)("div",d,[m,(0,n.createElementVNode)("p",h,(0,n.toDisplayString)(x.totalSimulatorSessions),1)])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",g,[f,(0,n.createElementVNode)("p",{class:(0,n.normalizeClass)([(0==x.totalFailSessions?"text-gray-300":"text-red-500")+" font-semibold text-lg"])},(0,n.toDisplayString)(x.totalFailSessions),3)]),(0,n.createElementVNode)("div",b,[v,(0,n.createElementVNode)("p",{class:(0,n.normalizeClass)([(0==x.totalSuccessSessions?"text-gray-300":"text-green-500")+" font-semibold text-lg"])},(0,n.toDisplayString)(x.totalSuccessSessions),3)])])]),(0,n.createElementVNode)("div",S,[(0,n.createVNode)(C,{modelValue:x.selectedVersion,"onUpdate:modelValue":t[0]||(t[0]=function(e){return x.selectedVersion=e}),options:x.versionOptions,onChange:t[1]||(t[1]=function(e){return y.refreshContent()}),label:"Filter by version",placeholder:"Select version",class:"w-40"},null,8,["modelValue","options"]),s.showingOnMainMenu?((0,n.openBlock)(),(0,n.createBlock)(C,{key:0,modelValue:x.origin,"onUpdate:modelValue":t[2]||(t[2]=function(e){return x.origin=e}),options:x.originOptions,onChange:t[3]||(t[3]=function(e){return y.refreshContent()}),label:"Filter by origin",placeholder:"Select origin",class:"w-40"},null,8,["modelValue","options"])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(C,{modelValue:x.requestType,"onUpdate:modelValue":t[4]||(t[4]=function(e){return x.requestType=e}),options:x.requestTypeOptions,onChange:t[5]||(t[5]=function(e){return y.refreshContent()}),label:"Filter by request",placeholder:"Select request",class:"w-40"},null,8,["modelValue","options"]),(0,n.createVNode)(C,{modelValue:x.status,"onUpdate:modelValue":t[6]||(t[6]=function(e){return x.status=e}),options:x.statusOptions,onChange:t[7]||(t[7]=function(e){return y.refreshContent()}),label:"Filter by status",placeholder:"Select status",class:"w-40"},null,8,["modelValue","options"]),(0,n.createVNode)(N,{modelValue:x.search,"onUpdate:modelValue":t[8]||(t[8]=function(e){return x.search=e}),onOnSearch:t[9]||(t[9]=function(e){return y.refreshContent()}),placeholder:"Search sessions"},null,8,["modelValue"])])])}]])}}]);