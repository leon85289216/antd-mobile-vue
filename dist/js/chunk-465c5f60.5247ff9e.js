(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-465c5f60"],{"0373":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("demo")],1)},o=[],i=n("d225"),a=n("308d"),c=n("6bb5"),u=n("4e2b"),s=n("9ab4"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":t.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"## 定义全局接口"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),n("demo1",{attrs:{id:"demo1"}})],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])}],p=n("b0b4"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},d=[],v="<template>\n  <div>\n    <div>\n      <m-button type=\"info\"\n                :block=\"false\"\n                @click=\"registerAPI\">注册API\n      </m-button>\n      <m-button v-if=\"showRequest\"\n                class=\"m-l\"\n                type=\"info\"\n                :block=\"false\"\n                @click=\"requestAPI\">测试接口请求\n      </m-button>\n    </div>\n    <div class=\"m-t\">\n      <div v-codemirror.format=\"code\"\n           v-if=\"apiResult\"\n           type=\"json\">\n      </div>\n    </div>\n  </div>\n</template>\n<script lang=\"ts\">\n  import HttpMethod from '@/packages/api-proxy/src/method';\n  import AegisUI from '@/packages/global';\n  import MButton from '@/packages/m-button/src/index.vue';\n  import {message} from 'ant-design-vue';\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n  import {ApiResponse} from '../../../../../types';\n  import Codemirror from '../../../codemirror-directive';\n\n  Vue.use(Codemirror);\n\n  @Component({\n    name: 'Demo1',\n    components: {MButton}\n  })\n  export default class Demo1 extends Vue {\n    private apiResult: any = null;\n    private showRequest: boolean = false;\n\n    get code() {\n      if (this.apiResult) {\n        return JSON.stringify(this.apiResult);\n      } else {\n        return '';\n      }\n    }\n\n    public registerAPI() {\n      AegisUI.proxyAPI({\n        user: {\n          get: {\n            url: 'https://oa.aegis-info.com/api/management/info',\n            method: HttpMethod.GET\n          }\n        }\n      }, {\n        basePath: '/api',\n        httpStatusErrorHandler: () => {\n        },\n        logicErrorHandler: (data: ApiResponse<any>, code: number): boolean => {\n          return false;\n        },\n        pathSuffix: ''\n      });\n      if (this.$api) {\n        this.showRequest = true;\n      }\n    }\n\n    public async requestAPI() {\n      try {\n        this.apiResult = await this.$api['user']['get'].r();\n      } catch (e) {\n        message.success('接口请求完成');\n        this.apiResult = e;\n      } finally {\n\n      }\n    }\n\n  }\n<\/script>\n",y=n("e830"),b=n.n(y),m=n("8bbf"),g=n.n(m),_=n("65d9"),w=n.n(_),j=n("4f8a"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("m-button",{attrs:{inline:"",size:"small",type:"info"},on:{click:t.registerAPI}},[t._v("注册API\n    ")]),t.showRequest?n("m-button",{staticClass:"m-l",attrs:{inline:"",size:"small",type:"info"},on:{click:t.requestAPI}},[t._v("测试接口请求\n    ")]):t._e()],1),n("div",{staticClass:"m-t"},[t.apiResult?n("div",{directives:[{name:"codemirror",rawName:"v-codemirror.format",value:t.code,expression:"code",modifiers:{format:!0}}],attrs:{type:"json"}}):t._e()])])},x=[],E=n("f499"),A=n.n(E),P=(n("96cf"),n("3cd0")),k=n("48e5"),I=n("106e"),S=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(a["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.apiResult=null,t.showRequest=!1,t}return Object(u["a"])(e,t),Object(p["a"])(e,[{key:"registerAPI",value:function(){P["a"].proxyAPI({user:{get:{url:"https://oa.aegis-info.com/api/management/info",method:k["a"].GET}}},{basePath:"/api",httpStatusErrorHandler:function(){},logicErrorHandler:function(t,e){return!1},pathSuffix:""}),this.$api&&(this.showRequest=!0)}},{key:"requestAPI",value:function(){return s["a"](this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$api["user"]["get"].r();case 3:this.apiResult=t.sent,t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),this.$message.success("接口请求完成"),this.apiResult=t.t0;case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}},t,this,[[0,6,10,12]])}))}},{key:"code",get:function(){return this.apiResult?A()(this.apiResult):""}}]),e}(g.a);S=s["b"]([w()({name:"Demo1",components:{MButton:I["a"]}})],S);var R=S,N=R,C=n("2877"),L=Object(C["a"])(N,O,x,!1,null,null,null),T=L.exports,F=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(a["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.code=v,t.md=b.a,t}return Object(u["a"])(e,t),e}(g.a);F=s["b"]([w()({name:"Demo1",components:{CodeBox:j["a"],DemoComp:T}})],F);var U=F,z=U,G=Object(C["a"])(z,h,d,!1,null,null,null),$=G.exports,H=n("d2aa"),D=n.n(H),M=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(a["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.title=D.a,t}return Object(u["a"])(e,t),Object(p["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(g.a);M=s["b"]([w()({name:"ComponentDemo",components:{demo1:$}})],M);var q=M,B=q,V=(n("3235"),Object(C["a"])(B,f,l,!1,null,"18546c48",null)),J=V.exports,Y=function(t){function e(){return Object(i["a"])(this,e),Object(a["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(g.a);Y=s["b"]([w()({name:"Global",components:{demo:J}})],Y);var K=Y,X=K,W=Object(C["a"])(X,r,o,!1,null,null,null);e["default"]=W.exports},"0478":function(t,e,n){},"06cd":function(t,e,n){"use strict";var r=n("0478"),o=n.n(r);o.a},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),a=n("6a99"),c=n("69a8"),u=n("c69a"),s=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?s:function(t,e){if(t=i(t),e=a(e,!0),u)try{return s(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},2638:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var r in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)}var o=["attrs","props","domProps"],i=["class","style","directives"],a=["on","nativeOn"],c=function(t){return t.reduce(function(t,e){for(var n in e)if(t[n])if(-1!==o.indexOf(n))t[n]=r({},t[n],e[n]);else if(-1!==i.indexOf(n)){var c=t[n]instanceof Array?t[n]:[t[n]],s=e[n]instanceof Array?e[n]:[e[n]];t[n]=c.concat(s)}else if(-1!==a.indexOf(n))for(var f in e[n])if(t[n][f]){var l=t[n][f]instanceof Array?t[n][f]:[t[n][f]],p=e[n][f]instanceof Array?e[n][f]:[e[n][f]];t[n][f]=l.concat(p)}else t[n][f]=e[n][f];else if("hook"==n)for(var h in e[n])t[n][h]=t[n][h]?u(t[n][h],e[n][h]):e[n][h];else t[n]=e[n];else t[n]=e[n];return t},{})},u=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=c},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),o=n("d2c8"),i="includes";r(r.P+r.F*n("5147")(i),"String",{includes:function(t){return!!~o(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3235:function(t,e,n){"use strict";var r=n("c8c6"),o=n.n(r);o.a},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3cd0":function(t,e,n){"use strict";var r=n("d847"),o=n.n(r),i=n("8b8a"),a=n("cebe"),c=n.n(a),u=n("8bbf"),s=n.n(u),f=function(t,e,n){c.a.defaults.baseURL=e.basePath;var r=Object(i["a"])(t,e,n||{}),a={installed:!1,install:function(t){a.installed||t.prototype.$api||o()(t.prototype,{$api:{get:function(){return r}}})}};return s.a.use(a),r};e["a"]={proxyAPI:f}},"48e5":function(t,e,n){"use strict";var r;(function(t){t["GET"]="GET",t["POST"]="POST",t["PUT"]="PUT",t["DELETE"]="DELETE"})(r||(r={})),e["a"]=r},"4f8a":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box code-box-target"},[n("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),n("ae-layout",[t._v("\n      "),n("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")]),t._v("\n  ")],1)],1)},o=[],i=n("d225"),a=n("b0b4"),c=n("308d"),u=n("6bb5"),s=n("4e2b"),f=n("9ab4"),l=n("8bbf"),p=n.n(l),h=n("65d9"),d=n.n(h),v=n("60a3"),y=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.showCode=!1,t}return Object(s["a"])(e,t),Object(a["a"])(e,[{key:"copied",value:function(){this.$message.success("已复制")}}]),e}(p.a);f["b"]([Object(v["d"])(String)],y.prototype,"code",void 0),f["b"]([Object(v["d"])(String)],y.prototype,"markdown",void 0),y=f["b"]([d()({name:"CodeBox"})],y);var b=y,m=b,g=(n("06cd"),n("2877")),_=Object(g["a"])(m,r,o,!1,null,null,null);e["a"]=_.exports},"5bba":function(t,e,n){n("9d98");var r=n("584a").Object;t.exports=function(t,e){return r.defineProperties(t,e)}},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},6762:function(t,e,n){"use strict";var r=n("5ca1"),o=n("c366")(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),o=n("0bfb"),i=n("9e1e"),a="toString",c=/./[a],u=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?u(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):c.name!=a&&u(function(){return c.call(this)})},"8b8a":function(t,e,n){"use strict";var r=n("795b"),o=n.n(r),i=n("7618"),a=n("5176"),c=n.n(a),u=n("cebe"),s=n.n(u),f=n("da81"),l=n.n(f),p=n("48e5"),h=(n("6762"),n("2fdb"),n("6b54"),n("a745")),d=n.n(h),v=n("b383"),y=n.n(v),b=d.a||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function m(t,e){for(var n=g(t),r=0;r<n.length;r++){var o=n[r];if(0===o.indexOf(":")){var i=o.substr(1);if(null===e[i]||void 0===e[i])throw Error("缺少路径参数".concat(i,", 请求路径为: ").concat(t,"，请求的参数为").concat(e));n[r]=e[i],delete e[i]}}return n.join("")}function g(t){for(var e=[],n=-1,r=0;r<t.length;r++){var o=t[r];":"===o&&(0===r||"/"===t[r-1])||["/","?","&","#"].indexOf(o)>=0&&n>=0?(r>0&&e.push(t.substring(n,r)),n=r):r===t.length-1&&n>=0?(r>0&&e.push(t.substring(n,r+1)),n=r):-1===n&&(n=r)}return e}var _=function(t,e){if(e){if(b(e))throw Error("不接受数组参数");var n=c()({},e);return t.url=m(t.url,n),t.isFormData&&[p["a"].POST,p["a"].PUT].includes(t.method)?t.data=y.a.stringify(n):[p["a"].GET,p["a"].DELETE].includes(t.method)?t.url="".concat(t.url,"?").concat(y.a.stringify(n)):t.data=n,t}return t},w=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s.a.defaults.baseURL=e.basePath;var r=c()({},t);function a(t,e){var n=t;for(var r in n.url&&(n=l()({},n,e),n.request=function(t,e){return h.call(n,l()({},e,n),t)},n.req=function(t,e){return f.call(n,l()({},e,n),t,!1)},n.r=function(t,e){return f.call(n,l()({},e,n),t,!0)}),n)n.hasOwnProperty(r)&&"object"===Object(i["a"])(n[r])&&(n[r]=a(n[r],e));return n}var u=a(r,n),f=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=h(t,e);return o.a.resolve(r).then(function(t){return new o.a(function(e,r){t.data.code?r(t.data):e(n?t.data.data:t.data)})})},h=function(t,n){t.url=t.url+(e.pathSuffix||""),t.method=t.method||p["a"].GET,_(t,n);var r=s.a.request(t);return o.a.resolve(r).then(function(n){return new o.a(function(r){(void 0===t.errorHandleType||"global"===t.errorHandleType)&&e.logicErrorHandler&&n.data.code&&e.logicErrorHandler(n.data,n.data.code),r(n)})}).catch(function(n){return new o.a(function(r,o){void 0!==t.errorHandleType&&"global"!==t.errorHandleType||!e.httpStatusErrorHandler||(n.response?e.httpStatusErrorHandler(n,n.response.status):e.httpStatusErrorHandler(n)),o(n)})})};return u};e["a"]=w},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"91dd":function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,i){e=e||"&",n=n||"=";var a={};if("string"!==typeof t||0===t.length)return a;var c=/\+/g;t=t.split(e);var u=1e3;i&&"number"===typeof i.maxKeys&&(u=i.maxKeys);var s=t.length;u>0&&s>u&&(s=u);for(var f=0;f<s;++f){var l,p,h,d,v=t[f].replace(c,"%20"),y=v.indexOf(n);y>=0?(l=v.substr(0,y),p=v.substr(y+1)):(l=v,p=""),h=decodeURIComponent(l),d=decodeURIComponent(p),r(a,h)?o(a[h])?a[h].push(d):a[h]=[a[h],d]:a[h]=d}return a};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=x(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",p="executing",h="completed",d={};function v(){}function y(){}function b(){}var m={};m[i]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(I([])));_&&_!==n&&r.call(_,i)&&(m=_);var w=b.prototype=v.prototype=Object.create(m);function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){function e(n,o,i,a){var c=s(t[n],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}var n;function o(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=o}function x(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return S()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?h:l,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function I(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=w.constructor=b,b.constructor=y,b[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,o){var i=new O(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},j(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},"9d98":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperties:n("7e90")})},a21f:function(t,e,n){var r=n("584a"),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},a745:function(t,e,n){t.exports=n("f410")},aa77:function(t,e,n){var r=n("5ca1"),o=n("be13"),i=n("79e5"),a=n("fdef"),c="["+a+"]",u="​",s=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,e,n){var o={},c=i(function(){return!!a[t]()||u[t]()!=u}),s=o[t]=c?e(p):a[t];n&&(o[n]=s),r(r.P+r.F*c,"String",o)},p=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},b383:function(t,e,n){"use strict";e.decode=e.parse=n("91dd"),e.encode=e.stringify=n("e099")},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),i=n("2d95"),a=n("5dbc"),c=n("6a99"),u=n("79e5"),s=n("9093").f,f=n("11e9").f,l=n("86cc").f,p=n("aa77").trim,h="Number",d=r[h],v=d,y=d.prototype,b=i(n("2aeb")(y))==h,m="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():p(e,3);var n,r,o,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var a,u=e.slice(2),s=0,f=u.length;s<f;s++)if(a=u.charCodeAt(s),a<48||a>o)return NaN;return parseInt(u,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(b?u(function(){y.valueOf.call(n)}):i(n)!=h)?a(new v(g(e)),n,d):g(e)};for(var _,w=n("9e1e")?s(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;w.length>j;j++)o(v,_=w[j])&&!o(d,_)&&l(d,_,f(v,_));d.prototype=y,y.constructor=d,n("2aba")(r,h,d)}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},c8c6:function(t,e,n){},d2aa:function(t,e){t.exports='<h1 id="全局工具类">全局工具类</h1>\n<h2 id="用法">用法</h2>\n<h3 id="接口对象代理">接口对象代理</h3>\n<pre><code class="language-typescript">import {Global, AppConfig} from &#39;aegis-ui&#39;;\n\nconst apiObj = {\n  user: {\n    get: {\n      url: &#39;/user/:id&#39;,\n      method: HttpMethod.GET\n    }\n  }\n}\nconst appConfig: AppConfig = {\n  basePath: &#39;/api&#39;\n}\nGlobal.proxyAPI(apiObj, appConfig)</code></pre>\n'},d847:function(t,e,n){t.exports=n("5bba")},da81:function(t,e,n){(function(t,n){var r=200,o="__lodash_hash_undefined__",i=800,a=16,c=9007199254740991,u="[object Arguments]",s="[object Array]",f="[object AsyncFunction]",l="[object Boolean]",p="[object Date]",h="[object Error]",d="[object Function]",v="[object GeneratorFunction]",y="[object Map]",b="[object Number]",m="[object Null]",g="[object Object]",_="[object Proxy]",w="[object RegExp]",j="[object Set]",O="[object String]",x="[object Undefined]",E="[object WeakMap]",A="[object ArrayBuffer]",P="[object DataView]",k="[object Float32Array]",I="[object Float64Array]",S="[object Int8Array]",R="[object Int16Array]",N="[object Int32Array]",C="[object Uint8Array]",L="[object Uint8ClampedArray]",T="[object Uint16Array]",F="[object Uint32Array]",U=/[\\^$.*+?()[\]{}|]/g,z=/^\[object .+?Constructor\]$/,G=/^(?:0|[1-9]\d*)$/,$={};$[k]=$[I]=$[S]=$[R]=$[N]=$[C]=$[L]=$[T]=$[F]=!0,$[u]=$[s]=$[A]=$[l]=$[P]=$[p]=$[h]=$[d]=$[y]=$[b]=$[g]=$[w]=$[j]=$[O]=$[E]=!1;var H="object"==typeof t&&t&&t.Object===Object&&t,D="object"==typeof self&&self&&self.Object===Object&&self,M=H||D||Function("return this")(),q=e&&!e.nodeType&&e,B=q&&"object"==typeof n&&n&&!n.nodeType&&n,V=B&&B.exports===q,J=V&&H.process,Y=function(){try{return J&&J.binding&&J.binding("util")}catch(t){}}(),K=Y&&Y.isTypedArray;function X(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function W(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function Q(t){return function(e){return t(e)}}function Z(t,e){return null==t?void 0:t[e]}function tt(t,e){return function(n){return t(e(n))}}function et(t,e){return"__proto__"==e?void 0:t[e]}var nt=Array.prototype,rt=Function.prototype,ot=Object.prototype,it=M["__core-js_shared__"],at=rt.toString,ct=ot.hasOwnProperty,ut=function(){var t=/[^.]+$/.exec(it&&it.keys&&it.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),st=ot.toString,ft=at.call(Object),lt=RegExp("^"+at.call(ct).replace(U,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pt=V?M.Buffer:void 0,ht=M.Symbol,dt=M.Uint8Array,vt=pt?pt.allocUnsafe:void 0,yt=tt(Object.getPrototypeOf,Object),bt=Object.create,mt=ot.propertyIsEnumerable,gt=nt.splice,_t=ht?ht.toStringTag:void 0,wt=function(){try{var t=we(Object,"defineProperty");return t({},"",{}),t}catch(e){}}(),jt=pt?pt.isBuffer:void 0,Ot=Math.max,xt=Date.now,Et=we(M,"Map"),At=we(Object,"create"),Pt=function(){function t(){}return function(e){if(!Me(e))return{};if(bt)return bt(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function kt(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function It(){this.__data__=At?At(null):{},this.size=0}function St(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Rt(t){var e=this.__data__;if(At){var n=e[t];return n===o?void 0:n}return ct.call(e,t)?e[t]:void 0}function Nt(t){var e=this.__data__;return At?void 0!==e[t]:ct.call(e,t)}function Ct(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=At&&void 0===e?o:e,this}function Lt(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Tt(){this.__data__=[],this.size=0}function Ft(t){var e=this.__data__,n=ee(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():gt.call(e,n,1),--this.size,!0}function Ut(t){var e=this.__data__,n=ee(e,t);return n<0?void 0:e[n][1]}function zt(t){return ee(this.__data__,t)>-1}function Gt(t,e){var n=this.__data__,r=ee(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function $t(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Ht(){this.size=0,this.__data__={hash:new kt,map:new(Et||Lt),string:new kt}}function Dt(t){var e=_e(this,t)["delete"](t);return this.size-=e?1:0,e}function Mt(t){return _e(this,t).get(t)}function qt(t){return _e(this,t).has(t)}function Bt(t,e){var n=_e(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Vt(t){var e=this.__data__=new Lt(t);this.size=e.size}function Jt(){this.__data__=new Lt,this.size=0}function Yt(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}function Kt(t){return this.__data__.get(t)}function Xt(t){return this.__data__.has(t)}function Wt(t,e){var n=this.__data__;if(n instanceof Lt){var o=n.__data__;if(!Et||o.length<r-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new $t(o)}return n.set(t,e),this.size=n.size,this}function Qt(t,e){var n=Ue(t),r=!n&&Fe(t),o=!n&&!r&&$e(t),i=!n&&!r&&!o&&Ve(t),a=n||r||o||i,c=a?W(t.length,String):[],u=c.length;for(var s in t)!e&&!ct.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||xe(s,u))||c.push(s);return c}function Zt(t,e,n){(void 0===n||Te(t[e],n))&&(void 0!==n||e in t)||ne(t,e,n)}function te(t,e,n){var r=t[e];ct.call(t,e)&&Te(r,n)&&(void 0!==n||e in t)||ne(t,e,n)}function ee(t,e){var n=t.length;while(n--)if(Te(t[n][0],e))return n;return-1}function ne(t,e,n){"__proto__"==e&&wt?wt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}kt.prototype.clear=It,kt.prototype["delete"]=St,kt.prototype.get=Rt,kt.prototype.has=Nt,kt.prototype.set=Ct,Lt.prototype.clear=Tt,Lt.prototype["delete"]=Ft,Lt.prototype.get=Ut,Lt.prototype.has=zt,Lt.prototype.set=Gt,$t.prototype.clear=Ht,$t.prototype["delete"]=Dt,$t.prototype.get=Mt,$t.prototype.has=qt,$t.prototype.set=Bt,Vt.prototype.clear=Jt,Vt.prototype["delete"]=Yt,Vt.prototype.get=Kt,Vt.prototype.has=Xt,Vt.prototype.set=Wt;var re=ge();function oe(t){return null==t?void 0===t?x:m:_t&&_t in Object(t)?je(t):Se(t)}function ie(t){return qe(t)&&oe(t)==u}function ae(t){if(!Me(t)||Pe(t))return!1;var e=He(t)?lt:z;return e.test(Le(t))}function ce(t){return qe(t)&&De(t.length)&&!!$[oe(t)]}function ue(t){if(!Me(t))return Ie(t);var e=ke(t),n=[];for(var r in t)("constructor"!=r||!e&&ct.call(t,r))&&n.push(r);return n}function se(t,e,n,r,o){t!==e&&re(e,function(i,a){if(Me(i))o||(o=new Vt),fe(t,e,a,n,se,r,o);else{var c=r?r(et(t,a),i,a+"",t,e,o):void 0;void 0===c&&(c=i),Zt(t,a,c)}},Ye)}function fe(t,e,n,r,o,i,a){var c=et(t,n),u=et(e,n),s=a.get(u);if(s)Zt(t,n,s);else{var f=i?i(c,u,n+"",t,e,a):void 0,l=void 0===f;if(l){var p=Ue(u),h=!p&&$e(u),d=!p&&!h&&Ve(u);f=u,p||h||d?Ue(c)?f=c:Ge(c)?f=ye(c):h?(l=!1,f=he(u,!0)):d?(l=!1,f=ve(u,!0)):f=[]:Be(u)||Fe(u)?(f=c,Fe(c)?f=Je(c):(!Me(c)||r&&He(c))&&(f=Oe(u))):l=!1}l&&(a.set(u,f),o(f,u,r,i,a),a["delete"](u)),Zt(t,n,f)}}function le(t,e){return Ne(Re(t,e,We),t+"")}var pe=wt?function(t,e){return wt(t,"toString",{configurable:!0,enumerable:!1,value:Xe(e),writable:!0})}:We;function he(t,e){if(e)return t.slice();var n=t.length,r=vt?vt(n):new t.constructor(n);return t.copy(r),r}function de(t){var e=new t.constructor(t.byteLength);return new dt(e).set(new dt(t)),e}function ve(t,e){var n=e?de(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function ye(t,e){var n=-1,r=t.length;e||(e=Array(r));while(++n<r)e[n]=t[n];return e}function be(t,e,n,r){var o=!n;n||(n={});var i=-1,a=e.length;while(++i<a){var c=e[i],u=r?r(n[c],t[c],c,n,t):void 0;void 0===u&&(u=t[c]),o?ne(n,c,u):te(n,c,u)}return n}function me(t){return le(function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&Ee(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);while(++r<o){var c=n[r];c&&t(e,c,r,i)}return e})}function ge(t){return function(e,n,r){var o=-1,i=Object(e),a=r(e),c=a.length;while(c--){var u=a[t?c:++o];if(!1===n(i[u],u,i))break}return e}}function _e(t,e){var n=t.__data__;return Ae(e)?n["string"==typeof e?"string":"hash"]:n.map}function we(t,e){var n=Z(t,e);return ae(n)?n:void 0}function je(t){var e=ct.call(t,_t),n=t[_t];try{t[_t]=void 0;var r=!0}catch(i){}var o=st.call(t);return r&&(e?t[_t]=n:delete t[_t]),o}function Oe(t){return"function"!=typeof t.constructor||ke(t)?{}:Pt(yt(t))}function xe(t,e){var n=typeof t;return e=null==e?c:e,!!e&&("number"==n||"symbol"!=n&&G.test(t))&&t>-1&&t%1==0&&t<e}function Ee(t,e,n){if(!Me(n))return!1;var r=typeof e;return!!("number"==r?ze(n)&&xe(e,n.length):"string"==r&&e in n)&&Te(n[e],t)}function Ae(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function Pe(t){return!!ut&&ut in t}function ke(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||ot;return t===n}function Ie(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}function Se(t){return st.call(t)}function Re(t,e,n){return e=Ot(void 0===e?t.length-1:e,0),function(){var r=arguments,o=-1,i=Ot(r.length-e,0),a=Array(i);while(++o<i)a[o]=r[e+o];o=-1;var c=Array(e+1);while(++o<e)c[o]=r[o];return c[e]=n(a),X(t,this,c)}}var Ne=Ce(pe);function Ce(t){var e=0,n=0;return function(){var r=xt(),o=a-(r-n);if(n=r,o>0){if(++e>=i)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Le(t){if(null!=t){try{return at.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Te(t,e){return t===e||t!==t&&e!==e}var Fe=ie(function(){return arguments}())?ie:function(t){return qe(t)&&ct.call(t,"callee")&&!mt.call(t,"callee")},Ue=Array.isArray;function ze(t){return null!=t&&De(t.length)&&!He(t)}function Ge(t){return qe(t)&&ze(t)}var $e=jt||Qe;function He(t){if(!Me(t))return!1;var e=oe(t);return e==d||e==v||e==f||e==_}function De(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}function Me(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function qe(t){return null!=t&&"object"==typeof t}function Be(t){if(!qe(t)||oe(t)!=g)return!1;var e=yt(t);if(null===e)return!0;var n=ct.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&at.call(n)==ft}var Ve=K?Q(K):ce;function Je(t){return be(t,Ye(t))}function Ye(t){return ze(t)?Qt(t,!0):ue(t)}var Ke=me(function(t,e,n){se(t,e,n)});function Xe(t){return function(){return t}}function We(t){return t}function Qe(){return!1}n.exports=Ke}).call(this,n("c8ba"),n("62e4")(t))},e099:function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,c){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===typeof t?i(a(t),function(a){var c=encodeURIComponent(r(a))+n;return o(t[a])?i(t[a],function(t){return c+encodeURIComponent(r(t))}).join(e):c+encodeURIComponent(r(t[a]))}).join(e):c?encodeURIComponent(r(c))+n+encodeURIComponent(r(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var a=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},e830:function(t,e){t.exports='<h2 id="定义全局接口">定义全局接口</h2>\n'},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f499:function(t,e,n){t.exports=n("a21f")},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-465c5f60.5247ff9e.js.map