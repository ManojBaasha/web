import{s as M,q as j,S as N,a as v,f as T,c as y,g as C,h as S,d as p,j as V,i as g,N as k,a3 as P,U,V as W,W as z,l as A,m as B,p as F}from"./scheduler.584cf0e4.js";import{S as G,i as H,h as J,b as q,d as w,m as D,a as d,t as $,e as E}from"./index.86942a03.js";import{M as K}from"./MainTitle.80aa6fe5.js";import{T as L}from"./TabTitle.cd099401.js";function O(l){let e;return{c(){e=A(l[0])},l(a){e=B(a,l[0])},m(a,r){g(a,e,r)},p(a,r){r&1&&F(e,a[0])},d(a){a&&p(e)}}}function Q(l){let e,a,r,f,i,_,n,m;function I(t){l[2](t)}let h={};l[0]!==void 0&&(h.title=l[0]),e=new L({props:h}),j.push(()=>J(e,"title",I)),i=new K({props:{$$slots:{default:[O]},$$scope:{ctx:l}}});const u=l[1].default,o=N(u,l,l[3],null);return{c(){q(e.$$.fragment),r=v(),f=T("div"),q(i.$$.fragment),_=v(),n=T("div"),o&&o.c(),this.h()},l(t){w(e.$$.fragment,t),r=y(t),f=C(t,"DIV",{class:!0});var s=S(f);w(i.$$.fragment,s),_=y(s),n=C(s,"DIV",{class:!0});var c=S(n);o&&o.l(c),c.forEach(p),s.forEach(p),this.h()},h(){V(n,"class","col gap-5 flex-1"),V(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,s){D(e,t,s),g(t,r,s),g(t,f,s),D(i,f,null),k(f,_),k(f,n),o&&o.m(n,null),m=!0},p(t,[s]){const c={};!a&&s&1&&(a=!0,c.title=t[0],P(()=>a=!1)),e.$set(c);const b={};s&9&&(b.$$scope={dirty:s,ctx:t}),i.$set(b),o&&o.p&&(!m||s&8)&&U(o,u,t,t[3],m?z(u,t[3],s,null):W(t[3]),null)},i(t){m||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),m=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),m=!1},d(t){t&&(p(r),p(f)),E(e,t),E(i),o&&o.d(t)}}}function R(l,e,a){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function _(n){i=n,a(0,i)}return l.$$set=n=>{"title"in n&&a(0,i=n.title),"$$scope"in n&&a(3,f=n.$$scope)},[i,r,_,f]}class tt extends G{constructor(e){super(),H(this,e,R,Q,M,{title:0})}}export{tt as C};
