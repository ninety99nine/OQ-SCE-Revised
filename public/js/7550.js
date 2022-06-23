"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7550],{77550:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var o=n(94865),r=(0,o.createTextVNode)("Paste Properties"),l=(0,o.createElementVNode)("span",{class:"text-justify"}," Select the preferred method to apply these screen properties ",-1),c=(0,o.createTextVNode)("Paste Properties");var i=n(73905),s=n(75802),a=n(91098),u=n(80498),d=n(55092),p=n(91209),f=n(50967);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}const b={components:{PrimaryAlert:i.Z,DefaultModal:s.Z,SuccessBadge:u.Z,PrimaryButton:d.Z,DefaultSelect:p.Z,DefaultSwitch:f.Z},data:function(){return{selectedOption:"Merge",options:[{label:"Merge"},{label:"Replace"}],changeEventIds:!0,changeDisplayIds:!0,overideConditionalEventLogic:!0,useVersionBuilder:(0,a.P)(),screen:(0,a.P)().selectedScreen}},methods:{hasEvents:function(){var e=window.localStorage.getItem("screen_properties");return e=JSON.parse(e),Object.keys(e).includes("events")},pasteProperties:function(e){var t=this,n=window.localStorage.getItem("screen_properties");if(null!==n){n=JSON.parse(n);for(var o=Object.keys(n),r=Object.values(n),l=0;l<o.length;l++){var c=o[l],i=r[l];"displays"===c&&this.changeDisplayIds?i=i.map((function(e){return t.useVersionBuilder.getClonedDisplay(e)})):"events"===c&&this.changeEventIds&&(i.on_enter.collection=i.on_enter.collection.map((function(e){return t.useVersionBuilder.getClonedEvent(e)})),i.on_leave.collection=i.on_leave.collection.map((function(e){return t.useVersionBuilder.getClonedEvent(e)})),i.on_response.collection=i.on_response.collection.map((function(e){return t.useVersionBuilder.getClonedEvent(e)}))),"Merge"==this.selectedOption?"events"===c?(this.screen[c].on_enter.collection=[].concat(y(this.screen[c].on_enter.collection),y(i.on_enter.collection)),this.screen[c].on_leave.collection=[].concat(y(this.screen[c].on_leave.collection),y(i.on_leave.collection)),this.screen[c].on_response.collection=[].concat(y(this.screen[c].on_response.collection),y(i.on_response.collection)),this.overideConditionalEventLogic&&(this.screen[c].on_enter.conditional=i.on_enter.conditional,this.screen[c].on_leave.conditional=i.on_leave.conditional,this.screen[c].on_response.conditional=i.on_response.conditional)):Array.isArray(i)?this.screen[c]=[].concat(y(this.screen[c]),y(i)):this.screen[c]=m(m({},this.screen[c]),i):"Replace"==this.selectedOption&&(this.screen[c]=i)}this.$message({message:"Screen properties Pasted",type:"success"})}e()}}};const O=(0,n(83744).Z)(b,[["render",function(e,t,n,i,s,a){var u=(0,o.resolveComponent)("PrimaryAlert"),d=(0,o.resolveComponent)("DefaultSelect"),p=(0,o.resolveComponent)("DefaultSwitch"),f=(0,o.resolveComponent)("SuccessBadge"),h=(0,o.resolveComponent)("DefaultModal");return(0,o.openBlock)(),(0,o.createBlock)(h,{defaultText:"Cancel",primaryText:"Paste Properties",primaryAction:a.pasteProperties},{title:(0,o.withCtx)((function(){return[r]})),trigger:(0,o.withCtx)((function(){return[(0,o.createVNode)(f,{clickable:!0},{default:(0,o.withCtx)((function(){return[c]})),_:1})]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(u,null,{default:(0,o.withCtx)((function(){return[l]})),_:1}),(0,o.createVNode)(d,{modelValue:s.selectedOption,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.selectedOption=e}),options:s.options,label:"Select Method",class:"my-6"},null,8,["modelValue","options"]),(0,o.createVNode)(p,{modelValue:s.changeDisplayIds,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.changeDisplayIds=e}),note:"Change display ids"},null,8,["modelValue"]),a.hasEvents()?((0,o.openBlock)(),(0,o.createBlock)(p,{key:0,modelValue:s.changeEventIds,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.changeEventIds=e}),note:"Change event ids",class:"mt-6"},null,8,["modelValue"])):(0,o.createCommentVNode)("",!0),a.hasEvents()?((0,o.openBlock)(),(0,o.createBlock)(p,{key:1,modelValue:s.overideConditionalEventLogic,"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.overideConditionalEventLogic=e}),note:"Overide (Select events conditionally)",info:"Turn on to overide the logic to select events conditionally",class:"mt-6"},null,8,["modelValue"])):(0,o.createCommentVNode)("",!0)]})),_:1},8,["primaryAction"])}]])}}]);