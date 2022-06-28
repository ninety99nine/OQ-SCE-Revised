"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3333],{85347:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(94865),r={class:"flex items-center"},a=["id","disabled"],l=["for"],s={key:1,class:"text-xs text-gray-400 ml-2"};var i=n(96486),c=n(11868),u=n(24788);const d={components:{InfoPopover:c.Z,DefaultError:u.Z},props:{modelValue:Boolean,label:String,info:String,note:String,size:{type:String,default:"xs"},disabled:{type:Boolean,default:!1},error:{type:String,default:""}},data:function(){return{uniqueId:(0,i.uniqueId)("input-"),localModelValue:this.modelValue}},watch:{modelValue:function(e,t){this.localModelValue=e},localModelValue:function(e,t){this.$emit("update:modelValue",e),this.$emit("onChange",e)}}};const p=(0,n(83744).Z)(d,[["render",function(e,t,n,i,c,u){var d=(0,o.resolveComponent)("InfoPopover"),p=(0,o.resolveComponent)("DefaultError");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("div",r,[(0,o.withDirectives)((0,o.createElementVNode)("input",{id:c.uniqueId,type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.localModelValue=e}),disabled:n.disabled,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"},null,8,a),[[o.vModelCheckbox,c.localModelValue]]),n.label?((0,o.openBlock)(),(0,o.createElementBlock)("label",{key:0,for:c.uniqueId,class:(0,o.normalizeClass)("text-"+n.size+" font-medium text-gray-900 ml-2")},(0,o.toDisplayString)(n.label),11,l)):(0,o.createCommentVNode)("",!0),n.note?((0,o.openBlock)(),(0,o.createElementBlock)("span",s," — "+(0,o.toDisplayString)(n.note),1)):(0,o.createCommentVNode)("",!0),n.info?((0,o.openBlock)(),(0,o.createBlock)(d,{key:2,info:n.info,class:"ml-2"},null,8,["info"])):e.$slots.info?((0,o.openBlock)(),(0,o.createBlock)(d,{key:3,class:"ml-2"},{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"info")]})),_:3})):(0,o.createCommentVNode)("",!0)]),(0,o.createVNode)(p,{error:n.error,class:"mt-2"},null,8,["error"])])}]])},83333:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(94865),r={class:"flex items-center justify-between mb-6"},a=(0,o.createElementVNode)("h1",{class:"text-xl font-semibold text-gray-700 mb-2"},"Database Entries",-1),l={class:"flex divide-x border rounded-md py-2 px-6"},s={class:"text-center text-xs m-auto"},i=(0,o.createElementVNode)("p",{class:"mb-2 text-gray-400"},"Total",-1),c={class:"flex items-end justify-between mb-6"},u={class:"flex justify-center bg-blue-50 p-2"};var d=n(9669),p=n.n(d),m=n(91209),f=n(85347),h=n(49510);const b={props:["prettifyJson"],components:{DefaultCheckbox:f.Z,DefaultSelect:m.Z,DefaultSearchBar:h.Z},data:function(){return{totalDatabaseEntries:this.$page.props.statistics.totalDatabaseEntries,selectedVersion:this.route().params.version,versionOptions:this.$page.props.versionOptions.map((function(e){return{label:e.number,value:e.id}})),search:null,request:null,refreshContentInterval:null}},methods:{refreshContent:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(0!=t||!this.request){1==t&&(this.request&&this.request.cancel(),this.$emit("isLoading",!0));var n=p().CancelToken.source();this.request={cancel:n.cancel};var o,r={cancelToken:n.token};"database.entries.show"===route().current()?o=route(route().current(),{project:this.route().params.project,app:this.route().params.app,version:this.selectedVersion,search:this.search}):"account.database.entries.show"===route().current()&&(o=route(route().current(),{project:this.route().params.project,account:this.route().params.account,app:this.route().params.app,version:this.selectedVersion,search:this.search})),p().get(o,r).then((function(t){e.$emit("response",t.data),e.$emit("isLoading",!1),e.request=null}))}},cleanUp:function(){clearInterval(this.refreshContentInterval),this.refreshContentInterval=null}},created:function(){this.refreshContentInterval=setInterval(function(){this.refreshContent(!1)}.bind(this),3e3)},unmounted:function(){this.cleanUp()}};const v=(0,n(83744).Z)(b,[["render",function(e,t,n,d,p,m){var f=(0,o.resolveComponent)("DefaultSelect"),h=(0,o.resolveComponent)("DefaultSearchBar"),b=(0,o.resolveComponent)("DefaultCheckbox");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("div",r,[a,(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",s,[i,(0,o.createElementVNode)("p",{class:(0,o.normalizeClass)([(0==p.totalDatabaseEntries?"text-gray-300":"text-blue-500")+" font-semibold text-lg"])},(0,o.toDisplayString)(p.totalDatabaseEntries),3)])])]),(0,o.createElementVNode)("div",c,[(0,o.createVNode)(f,{modelValue:p.selectedVersion,"onUpdate:modelValue":t[0]||(t[0]=function(e){return p.selectedVersion=e}),options:p.versionOptions,onChange:t[1]||(t[1]=function(e){return m.refreshContent()}),label:"Filter by version",placeholder:"Select version",class:"w-40"},null,8,["modelValue","options"]),(0,o.createVNode)(h,{modelValue:p.search,"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.search=e}),onOnSearch:t[3]||(t[3]=function(e){return m.refreshContent()}),placeholder:"Search database entries",class:"w-80"},null,8,["modelValue"])]),(0,o.createElementVNode)("div",u,[(0,o.createVNode)(b,{modelValue:n.prettifyJson,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.prettifyJson=e}),onOnChange:t[5]||(t[5]=function(t){return e.$emit("update:prettifyJson",t)}),label:"Prettify Metadata"},null,8,["modelValue"])])])}]])}}]);