import{s as S,f as p,g as $,h as g,d as f,j as m,i as h,L as D,l as E,m as V,a as I,c as O,J as P,n as R}from"../chunks/scheduler.7748c726.js";import{S as j,i as q,b as d,d as v,m as k,a as u,t as _,e as b,g as z,c as A}from"../chunks/index.b48d8149.js";import{R as B,e as C}from"../chunks/params.1aa17b96.js";import{C as w}from"../chunks/Chip.264a211e.js";import{C as J}from"../chunks/CommonPage.e5891a0a.js";function x(a,e,n){const t=a.slice();return t[2]=e[n],t}function L(a){let e,n;return e=new w({props:{$$slots:{default:[U]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){k(e,t,r),n=!0},p(t,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function M(a){let e,n,t=C(a[0]),r=[];for(let o=0;o<t.length;o+=1)r[o]=y(x(a,t,o));const s=o=>_(r[o],1,1,()=>{r[o]=null});return{c(){e=p("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=$(o,"DIV",{class:!0});var c=g(e);for(let l=0;l<r.length;l+=1)r[l].l(c);c.forEach(f),this.h()},h(){m(e,"class","resume-grid svelte-15x5ii8")},m(o,c){h(o,e,c);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);n=!0},p(o,c){if(c&1){t=C(o[0]);let l;for(l=0;l<t.length;l+=1){const i=x(o,t,l);r[l]?(r[l].p(i,c),u(r[l],1)):(r[l]=y(i),r[l].c(),u(r[l],1),r[l].m(e,null))}for(z(),l=t.length;l<r.length;l+=1)s(l);A()}},i(o){if(!n){for(let c=0;c<t.length;c+=1)u(r[c]);n=!0}},o(o){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)_(r[c]);n=!1},d(o){o&&f(e),D(r,o)}}}function U(a){let e;return{c(){e=E("Ooops! no CV at the moment.")},l(n){e=V(n,"Ooops! no CV at the moment.")},m(n,t){h(n,e,t)},d(n){n&&f(e)}}}function F(a){let e=a[2].name+"",n;return{c(){n=E(e)},l(t){n=V(t,e)},m(t,r){h(t,n,r)},p:R,d(t){t&&f(n)}}}function y(a){let e,n,t,r;return n=new w({props:{size:"1.25em",$$slots:{default:[F]},$$scope:{ctx:a}}}),{c(){e=p("a"),d(n.$$.fragment),t=I(),this.h()},l(s){e=$(s,"A",{href:!0,target:!0,rel:!0,class:!0});var o=g(e);v(n.$$.fragment,o),t=O(o),o.forEach(f),this.h()},h(){m(e,"href",a[2].url),m(e,"target","_blank"),m(e,"rel","noopener noreferrer"),m(e,"class","svelte-15x5ii8")},m(s,o){h(s,e,o),k(n,e,null),P(e,t),r=!0},p(s,o){const c={};o&32&&(c.$$scope={dirty:o,ctx:s}),n.$set(c)},i(s){r||(u(n.$$.fragment,s),r=!0)},o(s){_(n.$$.fragment,s),r=!1},d(s){s&&f(e),b(n)}}}function G(a){let e,n,t,r;const s=[M,L],o=[];function c(l,i){return l[0]&&l[0].length>0?0:1}return n=c(a),t=o[n]=s[n](a),{c(){e=p("div"),t.c(),this.h()},l(l){e=$(l,"DIV",{class:!0});var i=g(e);t.l(i),i.forEach(f),this.h()},h(){m(e,"class","resume svelte-15x5ii8")},m(l,i){h(l,e,i),o[n].m(e,null),r=!0},p(l,i){t.p(l,i)},i(l){r||(u(t),r=!0)},o(l){_(t),r=!1},d(l){l&&f(e),o[n].d()}}}function H(a){let e,n;return e=new J({props:{title:a[1],$$slots:{default:[G]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){k(e,t,r),n=!0},p(t,[r]){const s={};r&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function K(a){const{items:e,title:n}=B;return[e,n]}class Y extends j{constructor(e){super(),q(this,e,K,H,S,{})}}export{Y as component};
