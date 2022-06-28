"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[205],{85347:(e,t,o)=>{o.d(t,{Z:()=>p});var l=o(94865),n={class:"flex items-center"},r=["id","disabled"],a=["for"],s={key:1,class:"text-xs text-gray-400 ml-2"};var i=o(96486),c=o(11868),u=o(24788);const d={components:{InfoPopover:c.Z,DefaultError:u.Z},props:{modelValue:Boolean,label:String,info:String,note:String,size:{type:String,default:"xs"},disabled:{type:Boolean,default:!1},error:{type:String,default:""}},data:function(){return{uniqueId:(0,i.uniqueId)("input-"),localModelValue:this.modelValue}},watch:{modelValue:function(e,t){this.localModelValue=e},localModelValue:function(e,t){this.$emit("update:modelValue",e),this.$emit("onChange",e)}}};const p=(0,o(83744).Z)(d,[["render",function(e,t,o,i,c,u){var d=(0,l.resolveComponent)("InfoPopover"),p=(0,l.resolveComponent)("DefaultError");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("div",n,[(0,l.withDirectives)((0,l.createElementVNode)("input",{id:c.uniqueId,type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.localModelValue=e}),disabled:o.disabled,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"},null,8,r),[[l.vModelCheckbox,c.localModelValue]]),o.label?((0,l.openBlock)(),(0,l.createElementBlock)("label",{key:0,for:c.uniqueId,class:(0,l.normalizeClass)("text-"+o.size+" font-medium text-gray-900 ml-2")},(0,l.toDisplayString)(o.label),11,a)):(0,l.createCommentVNode)("",!0),o.note?((0,l.openBlock)(),(0,l.createElementBlock)("span",s," — "+(0,l.toDisplayString)(o.note),1)):(0,l.createCommentVNode)("",!0),o.info?((0,l.openBlock)(),(0,l.createBlock)(d,{key:2,info:o.info,class:"ml-2"},null,8,["info"])):e.$slots.info?((0,l.openBlock)(),(0,l.createBlock)(d,{key:3,class:"ml-2"},{default:(0,l.withCtx)((function(){return[(0,l.renderSlot)(e.$slots,"info")]})),_:3})):(0,l.createCommentVNode)("",!0)]),(0,l.createVNode)(p,{error:o.error,class:"mt-2"},null,8,["error"])])}]])},70205:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var l=o(94865),n={class:"flex items-center justify-between mb-6"},r=(0,l.createElementVNode)("h1",{class:"text-xl font-semibold text-gray-700 mb-2"},"Global Variables",-1),a={class:"flex divide-x border rounded-md py-2 px-6"},s={class:"text-center text-xs m-auto"},i=(0,l.createElementVNode)("p",{class:"mb-2 text-gray-400"},"Total",-1),c={class:"flex items-end justify-between mb-6"},u={class:"flex justify-center bg-blue-50 p-2"};var d=o(9669),p=o.n(d),m=o(91209),f=o(85347),h=o(49510);const b={props:["prettifyJson"],components:{DefaultSelect:m.Z,DefaultCheckbox:f.Z,DefaultSearchBar:h.Z},data:function(){return{totalGlobalVariables:this.$page.props.statistics.totalGlobalVariables,selectedVersion:this.route().params.version,versionOptions:this.$page.props.versionOptions.map((function(e){return{label:e.number,value:e.id}})),search:null,request:null,refreshContentInterval:null}},methods:{refreshContent:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(0!=t||!this.request){1==t&&(this.request&&this.request.cancel(),this.$emit("isLoading",!0));var o=p().CancelToken.source();this.request={cancel:o.cancel};var l,n={cancelToken:o.token};"global.variables.show"===route().current()?l=route(route().current(),{project:this.route().params.project,app:this.route().params.app,version:this.selectedVersion,search:this.search}):"account.global.variables.show"===route().current()&&(l=route(route().current(),{project:this.route().params.project,account:this.route().params.account,app:this.route().params.app,version:this.selectedVersion,search:this.search})),p().get(l,n).then((function(t){e.$emit("response",t.data),e.$emit("isLoading",!1),e.request=null}))}},cleanUp:function(){clearInterval(this.refreshContentInterval),this.refreshContentInterval=null}},created:function(){this.refreshContentInterval=setInterval(function(){this.refreshContent(!1)}.bind(this),3e3)},unmounted:function(){this.cleanUp()}};const v=(0,o(83744).Z)(b,[["render",function(e,t,o,d,p,m){var f=(0,l.resolveComponent)("DefaultSelect"),h=(0,l.resolveComponent)("DefaultSearchBar"),b=(0,l.resolveComponent)("DefaultCheckbox");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createElementVNode)("div",n,[r,(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",s,[i,(0,l.createElementVNode)("p",{class:(0,l.normalizeClass)([(0==p.totalGlobalVariables?"text-gray-300":"text-blue-500")+" font-semibold text-lg"])},(0,l.toDisplayString)(p.totalGlobalVariables),3)])])]),(0,l.createElementVNode)("div",c,[(0,l.createVNode)(f,{modelValue:p.selectedVersion,"onUpdate:modelValue":t[0]||(t[0]=function(e){return p.selectedVersion=e}),options:p.versionOptions,onChange:t[1]||(t[1]=function(e){return m.refreshContent()}),label:"Filter by version",placeholder:"Select version",class:"w-40"},null,8,["modelValue","options"]),(0,l.createVNode)(h,{modelValue:p.search,"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.search=e}),onOnSearch:t[3]||(t[3]=function(e){return m.refreshContent()}),placeholder:"Search global variables",class:"w-80"},null,8,["modelValue"])]),(0,l.createElementVNode)("div",u,[(0,l.createVNode)(b,{modelValue:o.prettifyJson,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.prettifyJson=e}),onOnChange:t[5]||(t[5]=function(t){return e.$emit("update:prettifyJson",t)}),label:"Prettify Metadata"},null,8,["modelValue"])])])}]])}}]);