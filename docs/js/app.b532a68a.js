(function(e){function t(t){for(var r,l,u=t[0],c=t[1],s=t[2],i=0,d=[];i<u.length;i++)l=u[i],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/transparent-base-component/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("BaseInput",{attrs:{label:"Username",type:"text",placeholder:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("BaseInput",{attrs:{label:"Password",type:"password",placeholder:"********"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("BaseInput",{attrs:{label:"Checkbox",type:"checkbox"},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),n("BaseInput",{attrs:{label:"radio",type:"radio"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}}),n("br"),e._v(" "+e._s(e.username)+" - "+e._s(e.password)+" - "+e._s(e.checkbox)+" - "+e._s(e.radio)+" "),n("br"),n("hr"),n("br"),n("input",{domProps:{value:e.searchText},on:{input:function(t){e.searchText=t.target.value}}}),n("h1",[e._v(e._s(e.searchText))])],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v(" "+e._s(e.label)+" "),n("input",{attrs:{type:e.type,placeholder:e.placeholder},on:{input:function(t){return e.replicate(t)}}})])])},u=[],c={name:"BaseInput",props:{label:String,type:String,placeholder:{type:String,default:""}},methods:{replicate:function(e){console.log(this.value),console.log(this.pvalue),console.log(e.target.value),this.$emit("input",e.target.value)}}},s=c,p=n("2877"),i=Object(p["a"])(s,l,u,!1,null,null,null),d=i.exports,f={name:"App",components:{BaseInput:d},data:function(){return{username:"",password:"",checkbox:"",radio:"",searchText:"Input your text here"}}},b=f,h=(n("034f"),Object(p["a"])(b,o,a,!1,null,null,null)),v=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.b532a68a.js.map