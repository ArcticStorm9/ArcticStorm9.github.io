import{s as v,n as c}from"./scheduler.e108d1fd.js";import{S as p,i as k,g as u,h as m,j as g,f as i,k as o,a as b,A as y,m as x,n as A,x as D,o as E}from"./index.2c788b53.js";import{e as f}from"./each.e59479a4.js";function d(n,a,l){const e=n.slice();return e[2]=a[l][0],e[3]=a[l][1],e}function _(n){let a,l=n[2]+"",e,r;return{c(){a=u("a"),e=x(l),this.h()},l(s){a=m(s,"A",{href:!0,class:!0});var t=g(a);e=A(t,l),t.forEach(i),this.h()},h(){o(a,"href",r=n[0]+n[3]),o(a,"class","px-4 py-8 border-slate-200 border bg-slate-100 font-semibold rounded-md dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-200 hover:border-slate-300 dark:hover:bg-slate-700 dark:hover:border-slate-600")},m(s,t){b(s,a,t),D(a,e)},p(s,t){t&2&&l!==(l=s[2]+"")&&E(e,l),t&3&&r!==(r=s[0]+s[3])&&o(a,"href",r)},d(s){s&&i(a)}}}function N(n){let a,l=f(n[1]),e=[];for(let r=0;r<l.length;r+=1)e[r]=_(d(n,l,r));return{c(){a=u("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){a=m(r,"DIV",{class:!0});var s=g(a);for(let t=0;t<e.length;t+=1)e[t].l(s);s.forEach(i),this.h()},h(){o(a,"class","grid gap-2 md:grid-cols-2")},m(r,s){b(r,a,s);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(a,null)},p(r,[s]){if(s&3){l=f(r[1]);let t;for(t=0;t<l.length;t+=1){const h=d(r,l,t);e[t]?e[t].p(h,s):(e[t]=_(h),e[t].c(),e[t].m(a,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=l.length}},i:c,o:c,d(r){r&&i(a),y(e,r)}}}function S(n,a,l){let{base:e}=a,{paths:r}=a;return n.$$set=s=>{"base"in s&&l(0,e=s.base),"paths"in s&&l(1,r=s.paths)},[e,r]}class I extends p{constructor(a){super(),k(this,a,S,N,v,{base:0,paths:1})}}export{I as N};
