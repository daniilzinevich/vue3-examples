(function(e){function t(t){for(var r,u,c=t[0],a=t[1],g=t[2],d=0,p=[];d<c.length;d++)u=c[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);i&&i(t);while(p.length)p.shift()();return l.push.apply(l,g||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},l=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue3-examples/reactivity/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var g=0;g<c.length;g++)t(c[g]);var i=a;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("a1e9"),o=n("5c40");function l(){const e=Object(r["h"])({toggleA:!1,toggleB:!0}),t=Object(o["a"])(()=>e.toggleA&&e.toggleB);return[e,t]}const[u,c]=l();document.getElementById("toggle1").checked=u.toggleA,document.getElementById("toggle1").addEventListener("change",e=>{u.toggleA=e.target.checked}),document.getElementById("toggle2").checked=u.toggleB,document.getElementById("toggle2").addEventListener("change",e=>{u.toggleB=e.target.checked}),document.getElementById("both").value=c.value,Object(o["b"])(c,()=>document.getElementById("both").value=c.value)}});
