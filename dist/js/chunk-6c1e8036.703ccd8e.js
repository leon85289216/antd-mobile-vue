(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c1e8036"],{"0478":function(t,n,e){},"06cd":function(t,n,e){"use strict";var r=e("0478"),a=e.n(r);a.a},"0c58":function(t,n){t.exports='<h4 id="无动画">无动画</h4>\n'},"0d12":function(t,n){t.exports='<h4 id="垂直样式">垂直样式</h4>\n'},"11e9":function(t,n,e){var r=e("52a7"),a=e("4630"),o=e("6821"),i=e("6a99"),d=e("69a8"),c=e("c69a"),s=Object.getOwnPropertyDescriptor;n.f=e("9e1e")?s:function(t,n){if(t=o(t),n=i(n,!0),c)try{return s(t,n)}catch(e){}if(d(t,n))return a(!r.f.call(t,n),t[n])}},"15bf":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{attrs:{id:"basic"}},[e("markdown",{attrs:{source:t.title}})],1),t._m(0),e("demo1",{attrs:{id:"demo1"}}),e("demo2",{attrs:{id:"demo2"}}),e("demo3",{attrs:{id:"demo3"}}),e("demo4",{attrs:{id:"demo4"}}),e("demo5",{attrs:{id:"demo5"}}),e("demo6",{attrs:{id:"demo6"}}),t._m(1),e("markdown",{attrs:{source:t.props}})],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[e("span"),e("h2",[t._v("示例代码")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"markdown-body",attrs:{id:"props"}},[e("span"),e("h2",[t._v("属性说明")])])}],o=e("d225"),i=e("b0b4"),d=e("308d"),c=e("6bb5"),s=e("4e2b"),f=e("9ab4"),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},u=[],b="const tabs2 = [\n  {title: 'First Tab', sub: '1'},\n  {title: 'Second Tab', sub: '2'},\n  {title: 'Third Tab', sub: '3'}\n];\n\nimport Vue from 'vue';\nimport Component from 'vue-class-component';\n\n@Component({\n  name: 'TabBarExample'\n})\nexport default class TabBarExample extends Vue {\n\n  get tabs() {\n    return [\n      {title: <m-badge text=\"3\">First Tab</m-badge>},\n      {title: <m-badge text=\"ä»Šæ—¥(20)\">Second Tab</m-badge>},\n      {title: <m-badge dot>Third Tab</m-badge>}\n    ];\n  }\n\n  public render() {\n    return <div>\n      <m-tabs tabs={this.tabs}\n              initialPage={1}\n              onChange={(tab, index) => {\n                console.log('onChange', index, tab);\n              }}\n              onTabClick={(tab, index) => {\n                console.log('onTabClick', index, tab);\n              }}\n      >\n        <div style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '150px',\n          backgroundColor: '#fff'\n        }}>\n          Content of first tab\n        </div>\n        <div style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '150px',\n          backgroundColor: '#fff'\n        }}>\n          Content of second tab\n        </div>\n        <div style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '150px',\n          backgroundColor: '#fff'\n        }}>\n          Content of third tab\n        </div>\n      </m-tabs>\n      <m-white-space/>\n      <m-tabs tabs={tabs2}\n              initialPage={1}\n              tabBarPosition=\"bottom\"\n              renderTab={tab => <span>{tab.title}</span>}\n      >\n        <div style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '150px',\n          backgroundColor: '#fff'\n        }}>\n          Content of first tab\n        </div>\n        <div style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '150px',\n          backgroundColor: '#fff'\n        }}>\n          Content of second tab\n        </div>\n        <div style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '150px',\n          backgroundColor: '#fff'\n        }}>\n          Content of third tab\n        </div>\n      </m-tabs>\n      <m-white-space/>\n    </div>;\n  }\n}\n",p=e("b6d8"),m=e.n(p),v=e("8bbf"),h=e.n(v),y=e("65d9"),g=e.n(y),x=e("4f8a"),C=function(t){function n(){var t;return Object(o["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.code=b,t.md=m.a,t}return Object(s["a"])(n,t),n}(h.a);C=f["b"]([g()({name:"Demo1",components:{CodeBox:x["a"]}})],C);var k=C,j=k,T=e("2877"),O=Object(T["a"])(j,l,u,!1,null,null,null),w=O.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},I=[],E="import Vue from 'vue';\nimport Component from 'vue-class-component';\nimport {Sticky, StickyContainer} from '../../sticky';\nimport Tabs from '../src';\n\nconst tabs = [\n  {title: 'First Tab', key: 't1'},\n  {title: 'Second Tab', key: 't2'},\n  {title: 'Third Tab', key: 't3'}\n];\n\n@Component({\n  name: 'TabsExample'\n})\nexport default class TabsExample extends Vue {\n\n  public renderTabBar(props) {\n    return <Sticky>\n      <div style={{zIndex: 1}}><Tabs.DefaultTabBar attrs={props} /></div>\n    </Sticky>;\n  }\n\n  public render() {\n    return <div>\n      <m-white-space/>\n      <StickyContainer>\n        <m-tabs tabs={tabs}\n                initialPage=\"t2\"\n                renderTabBar={this.renderTabBar}>\n          <div key=\"t1\" style={{\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            height: '250px',\n            backgroundColor: '#fff'\n          }}>\n            Content of first tab\n          </div>\n          <div key=\"t2\" style={{\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            height: '250px',\n            backgroundColor: '#fff'\n          }}>\n            Content of second tab\n          </div>\n          <div key=\"t3\" style={{\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            height: '250px',\n            backgroundColor: '#fff'\n          }}>\n            Content of third tab\n          </div>\n        </m-tabs>\n      </StickyContainer>\n      <m-white-space/>\n    </div>;\n  }\n}\n",B=e("e2d0"),S=e.n(B),A=function(t){function n(){var t;return Object(o["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.code=E,t.md=S.a,t}return Object(s["a"])(n,t),n}(h.a);A=f["b"]([g()({name:"Demo2",components:{CodeBox:x["a"]}})],A);var N=A,P=N,F=Object(T["a"])(P,_,I,!1,null,null,null),D=F.exports,V=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},$=[],M="import Vue from 'vue';\nimport Component from 'vue-class-component';\n\n\nconst tabs = [\n  {title: 'First Tab', key: 't1'},\n  {title: 'Second Tab', key: 't2'},\n  {title: 'Third Tab', key: 't3'}\n];\n\n@Component({\n  name: 'TabBarExample'\n})\nexport default class TabBarExample extends Vue {\n\n  public render() {\n    return <div>\n      <m-white-space/>\n      <m-tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>\n        <div key=\"t1\" style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '250px',\n          backgroundColor: '#fff'\n        }}>\n          Content of first tab\n        </div>\n        <div key=\"t2\" style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '250px',\n          backgroundColor: '#fff'\n        }}>\n          Content of second tab\n        </div>\n        <div key=\"t3\" style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '250px',\n          backgroundColor: '#fff'\n        }}>\n          Content of third tab\n        </div>\n      </m-tabs>\n      <m-white-space/>\n    </div>;\n  }\n}\n",L=e("0c58"),R=e.n(L),U=function(t){function n(){var t;return Object(o["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.code=M,t.md=R.a,t}return Object(s["a"])(n,t),n}(h.a);U=f["b"]([g()({name:"Demo3",components:{CodeBox:x["a"]}})],U);var G=U,z=G,J=Object(T["a"])(z,V,$,!1,null,null,null),X=J.exports,Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},q=[],H="const tabs = [\n  {title: 'First Tab', key: 't1'},\n  {title: 'Second Tab', key: 't2'},\n  {title: 'Third Tab', key: 't3'}\n];\n\nexport default {\n  render() {\n    return <div>\n      <m-white-space/>\n      <div style={{height: '200px'}}>\n        <m-tabs tabs={tabs}\n                initialPage={'t2'}>\n          <div key=\"t1\" style={{\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            height: '250px',\n            backgroundColor: '#fff'\n          }}>\n            Content of first tab\n          </div>\n          <div key=\"t2\" style={{\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            height: '250px',\n            backgroundColor: '#fff'\n          }}>\n            Content of second tab\n          </div>\n          <div key=\"t3\" style={{\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            height: '250px',\n            backgroundColor: '#fff'\n          }}>\n            Content of third tab\n          </div>\n        </m-tabs>\n      </div>\n    </div>;\n  }\n};\n",K=e("38e3"),Q=e.n(K),W=function(t){function n(){var t;return Object(o["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.code=H,t.md=Q.a,t}return Object(s["a"])(n,t),n}(h.a);W=f["b"]([g()({name:"Demo4",components:{CodeBox:x["a"]}})],W);var Z=W,tt=Z,nt=Object(T["a"])(tt,Y,q,!1,null,null,null),et=nt.exports,rt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},at=[],ot="const tabs = [\n  {title: '1 Tab', key: 't1'},\n  {title: '2 Tab', key: 't2'},\n  {title: '3 Tab', key: 't3'}\n];\n\nexport default {\n  render() {\n    return <div style={{height: '200px'}}>\n      <m-white-space/>\n      <m-tabs tabs={tabs}\n              initialPage={'t2'}\n              tabBarPosition=\"left\"\n              tabDirection=\"vertical\"\n      >\n        <div key=\"t1\" style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '250px',\n          backgroundColor: '#fff'\n        }}>\n          Content of first tab\n        </div>\n        <div key=\"t2\" style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '250px',\n          backgroundColor: '#fff'\n        }}>\n          Content of second tab\n        </div>\n        <div key=\"t3\" style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          height: '250px',\n          backgroundColor: '#fff'\n        }}>\n          Content of third tab\n        </div>\n      </m-tabs>\n      <m-white-space/>\n    </div>;\n  }\n};\n",it=e("0d12"),dt=e.n(it),ct=function(t){function n(){var t;return Object(o["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.code=ot,t.md=dt.a,t}return Object(s["a"])(n,t),n}(h.a);ct=f["b"]([g()({name:"Demo5",components:{CodeBox:x["a"]}})],ct);var st=ct,ft=st,lt=Object(T["a"])(ft,rt,at,!1,null,null,null),ut=lt.exports,bt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},pt=[],mt="import Vue from 'vue';\nimport Component from 'vue-class-component';\nimport Tabs from '../src';\n\n@Component({\n  name: 'TabsExample'\n})\nexport default class TabsExample extends Vue {\n\n  public renderContent(tab) {\n    return (<div key={tab.key} style={{\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      height: '150px',\n      backgroundColor: '#fff'\n    }}>\n      <p>Content of {tab.title}</p>\n    </div>);\n  }\n\n  public render() {\n    const tabs = [\n      {title: '1st Tab', key: '1'},\n      {title: '2nd Tab', key: '2'},\n      {title: '3rd Tab', key: '3'},\n      {title: '4th Tab', key: '4'},\n      {title: '5th Tab', key: '5'},\n      {title: '6th Tab', key: '6'},\n      {title: '7th Tab', key: '7'},\n      {title: '8th Tab', key: '8'},\n      {title: '9th Tab', key: '9'}\n    ];\n\n    return (\n      <div>\n        <m-white-space/>\n        <m-tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar attrs={props} page={3}/>}>\n          {\n            tabs.map(tab => this.renderContent(tab))\n          }\n        </m-tabs>\n        <m-white-space/>\n      </div>\n    );\n  }\n}\n",vt=e("c1c2"),ht=e.n(vt),yt=function(t){function n(){var t;return Object(o["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.code=mt,t.md=ht.a,t}return Object(s["a"])(n,t),n}(h.a);yt=f["b"]([g()({name:"Demo6",components:{CodeBox:x["a"]}})],yt);var gt=yt,xt=gt,Ct=Object(T["a"])(xt,bt,pt,!1,null,null,null),kt=Ct.exports,jt=e("300c"),Tt=e("27ae"),Ot=e.n(Tt),wt=e("816c"),_t=e.n(wt);h.a.use(jt["a"]);var It=function(t){function n(){var t;return Object(o["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.title=Ot.a,t.props=_t.a,t}return Object(s["a"])(n,t),Object(i["a"])(n,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),n}(h.a);It=f["b"]([g()({name:"ComponentDemo",components:{demo1:w,demo2:D,demo3:X,demo4:et,demo5:ut,demo6:kt}})],It);var Et=It,Bt=Et,St=(e("ff67"),Object(T["a"])(Bt,r,a,!1,null,"30022a84",null));n["default"]=St.exports},"19dd":function(t,n,e){},"20fd":function(t,n,e){"use strict";var r=e("d9f6"),a=e("aebd");t.exports=function(t,n,e){n in t?r.f(t,n,a(0,e)):t[n]=e}},2638:function(t,n,e){"use strict";function r(){return r=Object.assign||function(t){for(var n,e=1;e<arguments.length;e++)for(var r in n=arguments[e],n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},r.apply(this,arguments)}var a=["attrs","props","domProps"],o=["class","style","directives"],i=["on","nativeOn"],d=function(t){return t.reduce(function(t,n){for(var e in n)if(t[e])if(-1!==a.indexOf(e))t[e]=r({},t[e],n[e]);else if(-1!==o.indexOf(e)){var d=t[e]instanceof Array?t[e]:[t[e]],s=n[e]instanceof Array?n[e]:[n[e]];t[e]=d.concat(s)}else if(-1!==i.indexOf(e))for(var f in n[e])if(t[e][f]){var l=t[e][f]instanceof Array?t[e][f]:[t[e][f]],u=n[e][f]instanceof Array?n[e][f]:[n[e][f]];t[e][f]=l.concat(u)}else t[e][f]=n[e][f];else if("hook"==e)for(var b in n[e])t[e][b]=t[e][b]?c(t[e][b],n[e][b]):n[e][b];else t[e]=n[e];else t[e]=n[e];return t},{})},c=function(t,n){return function(){t&&t.apply(this,arguments),n&&n.apply(this,arguments)}};t.exports=d},"27ae":function(t,n){t.exports='<h1 id="标签页--m-tabs">标签页  m-tabs</h1>\n'},"300c":function(t,n,e){"use strict";var r=e("dfdd"),a=(e("dde9"),r["a"]);a.install=function(t){t.component("MTabs",r["a"])},n["a"]=a},3702:function(t,n,e){var r=e("481b"),a=e("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[a]===t)}},"38e3":function(t,n){t.exports='<h4 id="固定高度">固定高度</h4>\n'},"40c3":function(t,n,e){var r=e("6b4c"),a=e("5168")("toStringTag"),o="Arguments"==r(function(){return arguments}()),i=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,d;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=i(n=Object(t),a))?e:o?r(n):"Object"==(d=r(n))&&"function"==typeof n.callee?"Arguments":d}},"4ee1":function(t,n,e){var r=e("5168")("iterator"),a=!1;try{var o=[7][r]();o["return"]=function(){a=!0},Array.from(o,function(){throw 2})}catch(i){}t.exports=function(t,n){if(!n&&!a)return!1;var e=!1;try{var o=[7],d=o[r]();d.next=function(){return{done:e=!0}},o[r]=function(){return d},t(o)}catch(i){}return e}},"4f8a":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"code-box code-box-target"},[e("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),e("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),e("pre",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),e("ae-layout",[t._v("\n      "),e("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")]),t._v("\n  ")],1)],1)},a=[],o=e("d225"),i=e("b0b4"),d=e("308d"),c=e("6bb5"),s=e("4e2b"),f=e("9ab4"),l=e("8bbf"),u=e.n(l),b=e("65d9"),p=e.n(b),m=e("60a3"),v=function(t){function n(){var t;return Object(o["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.showCode=!1,t}return Object(s["a"])(n,t),Object(i["a"])(n,[{key:"copied",value:function(){this.$message.success("已复制")}}]),n}(u.a);f["b"]([Object(m["d"])(String)],v.prototype,"code",void 0),f["b"]([Object(m["d"])(String)],v.prototype,"markdown",void 0),v=f["b"]([p()({name:"CodeBox"})],v);var h=v,y=h,g=(e("06cd"),e("2877")),x=Object(g["a"])(y,r,a,!1,null,null,null);n["a"]=x.exports},5176:function(t,n,e){t.exports=e("51b6")},"51b6":function(t,n,e){e("a3c3"),t.exports=e("584a").Object.assign},"549b":function(t,n,e){"use strict";var r=e("d864"),a=e("63b6"),o=e("241e"),i=e("b0dc"),d=e("3702"),c=e("b447"),s=e("20fd"),f=e("7cd6");a(a.S+a.F*!e("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,a,l,u=o(t),b="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,v=void 0!==m,h=0,y=f(u);if(v&&(m=r(m,p>2?arguments[2]:void 0,2)),void 0==y||b==Array&&d(y))for(n=c(u.length),e=new b(n);n>h;h++)s(e,h,v?m(u[h],h):u[h]);else for(l=y.call(u),e=new b;!(a=l.next()).done;h++)s(e,h,v?i(l,m,[a.value,h],!0):a.value);return e.length=h,e}})},"54a1":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("95d5")},"58c1":function(t,n,e){},"5dbc":function(t,n,e){var r=e("d3f4"),a=e("8b97").set;t.exports=function(t,n,e){var o,i=n.constructor;return i!==e&&"function"==typeof i&&(o=i.prototype)!==e.prototype&&r(o)&&a&&a(t,o),t}},"658b":function(t,n,e){"use strict";e.r(n);e("f5df"),e("19dd")},"7cd6":function(t,n,e){var r=e("40c3"),a=e("5168")("iterator"),o=e("481b");t.exports=e("584a").getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||o[r(t)]}},"816c":function(t,n){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>activeCardColor</td>\n<td>激活的卡片背景色（未激活卡片的边框色与之相同）</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>animated</td>\n<td>切换标签时是否有动画</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>card</td>\n<td>使用卡片样式</td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>destroyInactiveTab</td>\n<td>是否销毁未激活的标签页</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>distanceToChangeTab</td>\n<td>切换卡片的滑动距离，0-1之间</td>\n<td>number</td>\n<td>0</td>\n</tr>\n<tr>\n<td>page</td>\n<td></td>\n<td>number | string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td>class前缀</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prerenderingSiblingsNumber</td>\n<td>与当前激活标签相邻的提前渲染的标签数量</td>\n<td>number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>renderTabBar</td>\n<td></td>\n<td>(props: any) =&gt; VNode</td>\n<td></td>\n</tr>\n<tr>\n<td>swipeable</td>\n<td>是否支持手势</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>tabBarActiveTextColor</td>\n<td>激活的标签页文字颜色</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>tabBarBackgroundColor</td>\n<td>标签页背景颜色</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>tabBarInactiveTextColor</td>\n<td>未激活的标签页文字颜色</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>tabBarPosition</td>\n<td>TabBar&#39;s position</td>\n<td>default: top</td>\n<td>&#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;</td>\n</tr>\n<tr>\n<td>tabBarTextStyle</td>\n<td>标签栏文字样式</td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>tabBarUnderlineStyle</td>\n<td>标签下划线样式</td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>tabDirection</td>\n<td>标签页方向</td>\n<td>&#39;horizontal&#39; | &#39;vertical&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>tabs</td>\n<td>标签数据</td>\n<td>Models.TabData[]</td>\n<td></td>\n</tr>\n<tr>\n<td>useLeftInsteadTransform</td>\n<td>use left instead of transform</td>\n<td>default: false</td>\n<td>boolean</td>\n</tr>\n<tr>\n<td>useOnPan</td>\n<td></td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>usePaged</td>\n<td></td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>value</td>\n<td>当前激活的卡片的索引</td>\n<td>number | string</td>\n<td>0</td>\n</tr>\n</tbody></table>\n"},"8b97":function(t,n,e){var r=e("d3f4"),a=e("cb7c"),o=function(t,n){if(a(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(a){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},9093:function(t,n,e){var r=e("ce10"),a=e("e11e").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},9306:function(t,n,e){"use strict";var r=e("c3a1"),a=e("9aa9"),o=e("355d"),i=e("241e"),d=e("335c"),c=Object.assign;t.exports=!c||e("294c")(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){var e=i(t),c=arguments.length,s=1,f=a.f,l=o.f;while(c>s){var u,b=d(arguments[s++]),p=f?r(b).concat(f(b)):r(b),m=p.length,v=0;while(m>v)l.call(b,u=p[v++])&&(e[u]=b[u])}return e}:c},"95d5":function(t,n,e){var r=e("40c3"),a=e("5168")("iterator"),o=e("481b");t.exports=e("584a").isIterable=function(t){var n=Object(t);return void 0!==n[a]||"@@iterator"in n||o.hasOwnProperty(r(n))}},a3c3:function(t,n,e){var r=e("63b6");r(r.S+r.F,"Object",{assign:e("9306")})},aa77:function(t,n,e){var r=e("5ca1"),a=e("be13"),o=e("79e5"),i=e("fdef"),d="["+i+"]",c="​",s=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),l=function(t,n,e){var a={},d=o(function(){return!!i[t]()||c[t]()!=c}),s=a[t]=d?n(u):i[t];e&&(a[e]=s),r(r.P+r.F*d,"String",a)},u=l.trim=function(t,n){return t=String(a(t)),1&n&&(t=t.replace(s,"")),2&n&&(t=t.replace(f,"")),t};t.exports=l},b0dc:function(t,n,e){var r=e("e4ae");t.exports=function(t,n,e,a){try{return a?n(r(e)[0],e[1]):n(e)}catch(i){var o=t["return"];throw void 0!==o&&r(o.call(t)),i}}},b6d8:function(t,n){t.exports='<h4 id="基本">基本</h4>\n'},bd86:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e("85f2"),a=e.n(r);function o(t,n,e){return n in t?a()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},c1c2:function(t,n){t.exports='<h4 id="自定义个数，超出界面宽度，多于5个标签">自定义个数，超出界面宽度，多于5个标签</h4>\n'},c5f6:function(t,n,e){"use strict";var r=e("7726"),a=e("69a8"),o=e("2d95"),i=e("5dbc"),d=e("6a99"),c=e("79e5"),s=e("9093").f,f=e("11e9").f,l=e("86cc").f,u=e("aa77").trim,b="Number",p=r[b],m=p,v=p.prototype,h=o(e("2aeb")(v))==b,y="trim"in String.prototype,g=function(t){var n=d(t,!1);if("string"==typeof n&&n.length>2){n=y?n.trim():u(n,3);var e,r,a,o=n.charCodeAt(0);if(43===o||45===o){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+n}for(var i,c=n.slice(2),s=0,f=c.length;s<f;s++)if(i=c.charCodeAt(s),i<48||i>a)return NaN;return parseInt(c,r)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof p&&(h?c(function(){v.valueOf.call(e)}):o(e)!=b)?i(new m(g(n)),e,p):g(n)};for(var x,C=e("9e1e")?s(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;C.length>k;k++)a(m,x=C[k])&&!a(p,x)&&l(p,x,f(m,x));p.prototype=v,v.constructor=p,e("2aba")(r,b,p)}},cd3f:function(t,n,e){},d2d5:function(t,n,e){e("1654"),e("549b"),t.exports=e("584a").Array.from},dde9:function(t,n,e){"use strict";e("658b"),e("cd3f")},e2d0:function(t,n){t.exports='<h4 id="标签栏固定">标签栏固定</h4>\n'},f5df:function(t,n,e){},fdef:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ff67:function(t,n,e){"use strict";var r=e("58c1"),a=e.n(r);a.a}}]);
//# sourceMappingURL=chunk-6c1e8036.703ccd8e.js.map