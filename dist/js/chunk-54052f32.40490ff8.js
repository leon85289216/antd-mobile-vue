(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54052f32"],{"25be":function(t,e,a){},"2ead":function(t,e){t.exports='<h1 id="time指令">time指令</h1>\n<h2 id="何时使用">何时使用</h2>\n<p>当需要显示一个时间对象时</p>\n'},"7ab1":function(t,e,a){"use strict";var n=a("25be"),o=a.n(n);o.a},c98f:function(t,e,a){"use strict";var n=function(t,e,a){var n,o=e.value,r="",m="YYYY-MM-DD HH:mm:ss";if("string"===typeof o){var s=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;s.test(o)?(n=moment(o,"YYYY-MM-DDTHH:mm:ss.sZ").toDate(),n.setHours(n.getHours()+8)):r=o}else{var i=e.value;n=new Date(i),i?(r=moment(i).format(m),a.data.attrs&&a.data.attrs.format&&(r=moment(i).format(a.data.attrs.format))):r=""}if(e.modifiers.pretty&&n){var c=new Date,u=c.getTime(),f=u-n.getTime();f>0?f<1e3?r="刚刚":f<6e4?r="".concat(Math.floor(f/1e3),"秒前"):f<36e5?r="".concat(Math.floor(f/1e3/60),"分钟前"):c.getFullYear()===n.getFullYear()&&(r=c.getMonth()===n.getMonth()&&c.getDay()===n.getDay()?moment(n).format("HH:mm:ss"):moment(n).format("MM-DD HH:mm:ss")):c.getFullYear()===n.getFullYear()&&(r=c.getMonth()===n.getMonth()&&c.getDay()===n.getDay()?moment(n).format("HH:mm:ss"):moment(n).format("MM-DD HH:mm:ss"))}t.innerHTML=r},o={bind:function(t,e,a){n(t,e,a)},update:function(t,e,a){n(t,e,a)}};e["a"]={install:function(t){t.directive("time",o)}}},c9ee:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"basic"}},[a("markdown",{attrs:{source:t.title}})],1),t._m(0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[a("span"),a("h2",[t._v("示例代码")])])}],r=a("d225"),m=a("b0b4"),s=a("308d"),i=a("6bb5"),c=a("4e2b"),u=a("9ab4"),f=a("8bbf"),d=a.n(f),l=a("65d9"),b=a.n(l),v=a("c98f"),g=a("2ead"),h=a.n(g);d.a.use(v["a"]);var p=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.title=h.a,t}return Object(c["a"])(e,t),Object(m["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(d.a);p=u["b"]([b()({name:"ComponentDemo"})],p);var D=p,H=D,M=(a("7ab1"),a("2877")),Y=Object(M["a"])(H,n,o,!1,null,"07c9f60a",null);e["default"]=Y.exports}}]);
//# sourceMappingURL=chunk-54052f32.40490ff8.js.map