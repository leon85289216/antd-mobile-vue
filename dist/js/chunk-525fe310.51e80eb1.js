(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-525fe310"],{4562:function(e,t,a){},5891:function(e,t,a){},"5b15":function(e,t,a){},"5fee":function(e,t,a){},"898d":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("demo-wrapper",{attrs:{title:"基本"}},[a("demo1")],1),a("demo-wrapper",{attrs:{title:"单级菜单"}},[a("demo2")],1),a("demo-wrapper",{attrs:{title:"菜单多选"}},[a("demo3")],1),a("demo-wrapper",{attrs:{title:"单级菜单多选"}},[a("demo4")],1)],1)},n=[],i=a("d225"),s=a("308d"),o=a("6bb5"),u=a("4e2b"),c=a("9ab4"),r=a("b687"),h=(a("ac6a"),a("b0b4")),d=a("8bbf"),v=a.n(d),b=a("65d9"),m=a.n(b),f=(a("5891"),[{value:"1",label:"Food",children:[{label:"All Foods",value:"1",disabled:!1},{label:"Chinese Food",value:"2"},{label:"Hot Pot",value:"3"},{label:"Buffet",value:"4"},{label:"Fast Food",value:"5"},{label:"Snack",value:"6"},{label:"Bread",value:"7"},{label:"Fruit",value:"8"},{label:"Noodle",value:"9"},{label:"Leisure Food",value:"10"}]},{value:"2",label:"Supermarket",children:[{label:"All Supermarkets",value:"1"},{label:"Supermarket",value:"2",disabled:!0},{label:"C-Store",value:"3"},{label:"Personal Care",value:"4"}]},{value:"3",label:"Extra",isLeaf:!0,children:[{label:"you can not see",value:"1"}]}]),k=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.state={initData:[],show:!1},e}return Object(u["a"])(t,e),Object(h["a"])(t,[{key:"onChange",value:function(e){var t="";f.forEach(function(a){a.value===e[0]&&(t=a.label,a.children&&e[1]&&a.children.forEach(function(a){a.value===e[1]&&(t+=" ".concat(a.label))}))}),console.log(t)}},{key:"handleClick",value:function(e){var t=this;e.preventDefault(),this.state.show=!this.state.show,this.state.initData.length||setTimeout(function(){t.state.initData=f},500)}},{key:"onMaskClick",value:function(){this.state.show=!1}},{key:"render",value:function(){var e=arguments[0],t=this.state,a=t.initData,l=t.show,n=e("m-menu",{class:"foo-menu",attrs:{data:a,value:["1","3"],height:.6*document.documentElement.clientHeight},on:{change:this.onChange.bind(this)}}),i=e("div",{style:{width:"100%",height:.6*document.documentElement.clientHeight,display:"flex",justifyContent:"center"}},[e("m-activity-indicator",{attrs:{size:"large"}})]);return e("div",{class:l?"menu-active demo":"demo"},[e("div",[e("m-nav-bar",{attrs:{leftContent:"Menu",mode:"light",icon:e("img",{attrs:{src:"https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg",alt:""},class:"am-icon am-icon-md"})},on:{leftClick:this.handleClick},class:"top-nav-bar"},["Here is title"])]),l?a.length?n:i:null,l?e("div",{class:"menu-mask",on:{click:this.onMaskClick.bind(this)}}):null])}}]),t}(v.a);k=c["b"]([m()({name:"MenuExample"})],k);var p=k,g=(a("4562"),[{value:"1",label:"Food",children:null},{value:"2",label:"Supermarket"},{value:"3",label:"Extra",isLeaf:!0}]),C=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.state={initData:[],show:!1},e}return Object(u["a"])(t,e),Object(h["a"])(t,[{key:"onChange",value:function(e){var t="";g.forEach(function(a){a.value===e[0]&&(t=a.label,a.children&&e[1]&&a.children.forEach(function(a){a.value===e[1]&&(t+=" ".concat(a.label))}))}),console.log(t)}},{key:"handleClick",value:function(e){var t=this;e.preventDefault(),this.state.show=!this.state.show,this.state.initData.length||setTimeout(function(){t.state.initData=g},500)}},{key:"onMaskClick",value:function(){this.state.show=!1}},{key:"render",value:function(){var e=arguments[0],t=this.state,a=t.initData,l=t.show,n=e("m-menu",{class:"single-foo-menu",attrs:{data:a,value:["1"],level:1,height:.6*document.documentElement.clientHeight},on:{change:this.onChange}}),i=e("div",{style:{position:"absolute",width:"100%",height:.6*document.documentElement.clientHeight,display:"flex",justifyContent:"center"}},[e("m-activity-indicator",{attrs:{size:"large"}})]);return e("div",{class:l?"single-menu-active demo":"demo"},[e("div",[e("m-nav-bar",{attrs:{leftContent:"Menu",mode:"light"},on:{leftClick:this.handleClick.bind(this)},class:"single-top-nav-bar"},["OneLevel menu"])]),l?a.length?n:i:null,l?e("div",{class:"menu-mask",on:{click:this.onMaskClick.bind(this)}}):null])}}]),t}(v.a);C=c["b"]([m()({name:"MenuExample"})],C);var y=C,w=(a("5fee"),[{value:"1",label:"Food",children:[{label:"American Foods",value:"1",disabled:!1},{label:"Chinese Food",value:"2"},{label:"Hot Pot",value:"3"},{label:"Buffet",value:"4"},{label:"Fast Food",value:"5"},{label:"Snack",value:"6"},{label:"Bread",value:"7"},{label:"Fruit",value:"8"},{label:"Noodle",value:"9"},{label:"Leisure Food",value:"10"}]},{value:"2",label:"Supermarket",children:[{label:"All Supermarkets",value:"1"},{label:"Supermarket",value:"2",disabled:!0},{label:"C-Store",value:"3"},{label:"Personal Care",value:"4"}]},{value:"3",label:"Extra",isLeaf:!0,children:[{label:"you can not see",value:"1"}]}]),j=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.state={initData:null,show:!1},e}return Object(u["a"])(t,e),Object(h["a"])(t,[{key:"onChange",value:function(e){console.log(e)}},{key:"onOk",value:function(e){console.log(e),this.onCancel()}},{key:"onCancel",value:function(){this.state.show=!1}},{key:"handleClick",value:function(e){var t=this;e.preventDefault(),this.state.show=!this.state.show,this.state.initData||setTimeout(function(){t.state.initData=w},500)}},{key:"onMaskClick",value:function(){this.state.show=!1}},{key:"render",value:function(){var e=arguments[0],t=this.state,a=t.initData,l=t.show,n=e("m-menu",{class:"multi-foo-menu",attrs:{data:a,value:["1",["3","4"]],height:.6*document.documentElement.clientHeight,multiSelect:!0},on:{change:this.onChange,ok:this.onOk,cancel:this.onCancel}}),i=e("div",{style:{position:"absolute",width:"100%",height:.6*document.documentElement.clientHeight,display:"flex",justifyContent:"center"}},[e("m-activity-indicator",{attrs:{size:"large"}})]);return e("div",{class:l?"multi-menu-active demo":"demo"},[e("div",[e("m-nav-bar",{attrs:{leftContent:"Menu",mode:"light"},on:{leftClick:this.handleClick.bind(this)},class:"multi-top-nav-bar"},["Multi select menu"])]),l?a?n:i:null,l?e("div",{class:"menu-mask",on:{click:this.onMaskClick.bind(this)}}):null])}}]),t}(v.a);j=c["b"]([m()({name:"MenuExample"})],j);var O=j,D=(a("5b15"),[{value:"1",label:"Food"},{value:"2",label:"Supermarket"},{value:"3",label:"Extra",isLeaf:!0}]),E=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.state={initData:null,show:!1},e}return Object(u["a"])(t,e),Object(h["a"])(t,[{key:"onChange",value:function(e){console.log(e)}},{key:"onOk",value:function(e){console.log(e),this.onCancel()}},{key:"onCancel",value:function(){this.state.show=!1}},{key:"handleClick",value:function(e){var t=this;e.preventDefault(),this.state.show=!this.state.show,this.state.initData||setTimeout(function(){t.state.initData=D},500)}},{key:"onMaskClick",value:function(){this.state.show=!1}},{key:"render",value:function(){var e=arguments[0],t=this.state,a=t.initData,l=t.show,n=e("m-menu",{class:"single-multi-foo-menu",attrs:{data:a,value:["1"],level:1,height:.6*document.documentElement.clientHeight,multiSelect:!0},on:{change:this.onChange.bind(this),ok:this.onOk.bind(this),cancel:this.onCancel.bind(this)}}),i=e("div",{style:{position:"absolute",width:"100%",height:.6*document.documentElement.clientHeight,display:"flex",justifyContent:"center"}},[e("m-activity-indicator",{attrs:{size:"large"}})]);return e("div",{class:l?"single-multi-menu-active":""},[e("div",[e("m-nav-bar",{attrs:{leftContent:"Menu",mode:"light"},on:{leftClick:this.handleClick.bind(this)},class:"single-multi-top-nav-bar"},["Single Multi menu"])]),l?a?n:i:null,l?e("div",{class:"menu-mask",on:{click:this.onMaskClick.bind(this)}}):null])}}]),t}(v.a);E=c["b"]([m()({name:"MenuExample"})],E);var M=E,F=function(e){function t(){return Object(i["a"])(this,t),Object(s["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(v.a);F=c["b"]([m()({name:"Demo",components:{demo1:p,demo2:y,demo3:O,demo4:M,DemoWrapper:r["a"]}})],F);var S=F,x=S,H=a("2877"),L=Object(H["a"])(x,l,n,!1,null,null,null);t["default"]=L.exports},b687:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-preview-item"},[a("div",{staticClass:"demo-title"},[e._v("\n    "+e._s(e.title)+"\n  ")]),a("div",{staticClass:"demo-container"},[e._t("default")],2)])},n=[],i=a("d225"),s=a("308d"),o=a("6bb5"),u=a("4e2b"),c=a("9ab4"),r=a("8bbf"),h=a.n(r),d=a("65d9"),v=a.n(d),b=a("60a3"),m=function(e){function t(){return Object(i["a"])(this,t),Object(s["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(h.a);c["b"]([Object(b["d"])({type:[String,Object]})],m.prototype,"title",void 0),m=c["b"]([v()({name:"DemoWrapper"})],m);var f=m,k=f,p=(a("debd"),a("2877")),g=Object(p["a"])(k,l,n,!1,null,null,null);t["a"]=g.exports},babd:function(e,t,a){},debd:function(e,t,a){"use strict";var l=a("babd"),n=a.n(l);n.a}}]);
//# sourceMappingURL=chunk-525fe310.51e80eb1.js.map