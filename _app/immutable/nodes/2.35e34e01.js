import{s as F,f as k,g as x,h as b,d as h,j as f,i as M,I as d,n as R,K as te,o as le,a as E,l as z,c as $,m as B,R as oe,q as se,S as N,T as Y,U as ae}from"../chunks/scheduler.8b06bb63.js";import{S as H,i as G,b as A,d as q,m as C,a as U,c as re,t as T,e as P,g as ie}from"../chunks/index.0ddcd8ca.js";import{e as D}from"../chunks/each.70c794b1.js";import{g as ce,I as S,u as Z,M as fe,b as ue,T as O,H as me}from"../chunks/params.1b037e23.js";import{M as he}from"../chunks/MainTitle.cf155cff.js";import{i as ge}from"../chunks/index.97b3c5e0.js";const pe=""+new URL("../assets/cat.bf0b403f.png",import.meta.url).href,de=""+new URL("../assets/codingcat.aba42d02.png",import.meta.url).href,_e=""+new URL("../assets/ghost.61a78f30.png",import.meta.url).href,ve=""+new URL("../assets/gncat.7f2b2458.png",import.meta.url).href,we=""+new URL("../assets/gymcat.f674869d.png",import.meta.url).href,be=""+new URL("../assets/manoj.1023f147.png",import.meta.url).href,ke=""+new URL("../assets/pepe1.24961c0d.png",import.meta.url).href,xe=""+new URL("../assets/pepe2.ef231d63.png",import.meta.url).href,Me=""+new URL("../assets/risitas.8e9d16a3.png",import.meta.url).href,Ee=""+new URL("../assets/stick2.cf1dd43e.png",import.meta.url).href,$e=""+new URL("../assets/stick3.9e44f6f8.png",import.meta.url).href;function X(l,t,n){const o=l.slice();return o[10]=t[n],o}function J(l){let t,n,o,s,e,a=l[10].name+"",r,c;return{c(){t=k("div"),n=k("img"),s=E(),e=k("span"),r=z(a),c=E(),this.h()},l(_){t=x(_,"DIV",{class:!0});var g=b(t);n=x(g,"IMG",{class:!0,src:!0,alt:!0}),s=$(g),e=x(g,"SPAN",{class:!0});var v=b(e);r=B(v,a),v.forEach(h),c=$(g),g.forEach(h),this.h()},h(){f(n,"class","w-120px h-120px aspect-square"),oe(n.src,o=ce(l[10].logo))||f(n,"src",o),f(n,"alt",l[10].name),f(e,"class","text-center m-t-20px"),f(t,"class","box-content w-150px p-15px col-center")},m(_,g){M(_,t,g),d(t,n),d(t,s),d(t,e),d(e,r),d(t,c)},p:R,d(_){_&&h(t)}}}function Ie(l){let t,n,o=D(l[1]),s=[];for(let e=0;e<o.length;e+=1)s[e]=J(X(l,o,e));return{c(){t=k("div"),n=k("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=x(e,"DIV",{class:!0});var a=b(t);n=x(a,"DIV",{class:!0});var r=b(n);for(let c=0;c<s.length;c+=1)s[c].l(r);r.forEach(h),a.forEach(h),this.h()},h(){f(n,"class","row overflow-hidden box-content w-150px"),f(t,"class","carrousel flex-[0.5] row-center")},m(e,a){M(e,t,a),d(t,n);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(n,null);l[3](n)},p(e,[a]){if(a&2){o=D(e[1]);let r;for(r=0;r<o.length;r+=1){const c=X(e,o,r);s[r]?s[r].p(c,a):(s[r]=J(c),s[r].c(),s[r].m(n,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=o.length}},i:R,o:R,d(e){e&&h(t),te(s,e),l[3](null)}}}const Le=5e3;function Re(l,t,n){const o=[{name:"Me when im coding",logo:de},{name:"Me with music",logo:_e},{name:"Me at 3am",logo:Ee},{name:"Me when you sleep",logo:ve},{name:"Me when you text @not_jonam",logo:$e},{name:"Me at the gym",logo:we},{name:"Me asf",logo:be},{name:"Me with 300mg Caffeine",logo:xe},{name:"Me when theres drama",logo:Me},{name:"Me when im delulu",logo:ke},{name:"Me during the day",logo:pe}];let s,e,a=0,r=!0;const c=v=>{v?a<o.length-1?n(2,a=a+1):(n(2,a=a-1),r=!1):a>0?n(2,a=a-1):(n(2,a=a+1),r=!0)},_=v=>{clearTimeout(e),e=setTimeout(()=>{c(v),_(r)},Le)};le(()=>{_(!0)});function g(v){se[v?"unshift":"push"](()=>{s=v,n(0,s)})}return l.$$.update=()=>{l.$$.dirty&5&&s&&s.scroll({left:a*150,behavior:"smooth"})},[s,o,a,g]}class Ue extends H{constructor(t){super(),G(this,t,Re,Ie,F,{})}}const Q=l=>l===S.Youtube?"0 0 461.001 461.001":l===S.Facebook?"0 0 408.788 408.788":[S.GitHub,S.Search,S.Code].includes(l)?"0 0 16 16":"0 0 24 24";function ye(l){let t,n,o;return{c(){t=N("svg"),n=N("path"),this.h()},l(s){t=Y(s,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var e=b(t);n=Y(e,"path",{d:!0}),b(n).forEach(h),e.forEach(h),this.h()},h(){f(n,"d",l[2]),f(t,"class","inline-block"),f(t,"viewBox",o=Q(l[2])),f(t,"fill",l[1]),f(t,"height",l[0]),f(t,"width",l[0])},m(s,e){M(s,t,e),d(t,n),l[4](t)},p(s,[e]){e&4&&f(n,"d",s[2]),e&4&&o!==(o=Q(s[2]))&&f(t,"viewBox",o),e&2&&f(t,"fill",s[1]),e&1&&f(t,"height",s[0]),e&1&&f(t,"width",s[0])},i:R,o:R,d(s){s&&h(t),l[4](null)}}}function je(l,t,n){let o,{size:s="30px"}=t,{color:e="var(--main-text)"}=t,{icon:a}=t;function r(c){se[c?"unshift":"push"](()=>{o=c,n(3,o)})}return l.$$set=c=>{"size"in c&&n(0,s=c.size),"color"in c&&n(1,e=c.color),"icon"in c&&n(2,a=c.icon)},[s,e,a,o,r]}class Se extends H{constructor(t){super(),G(this,t,je,ye,F,{size:0,color:1,icon:2})}}function W(l,t,n){const o=l.slice();return o[7]=t[n],o}function Te(l){let t,n,o,s;return{c(){t=z(l[3]),n=E(),o=z(l[1]),s=z(",")},l(e){t=B(e,l[3]),n=$(e),o=B(e,l[1]),s=B(e,",")},m(e,a){M(e,t,a),M(e,n,a),M(e,o,a),M(e,s,a)},p:R,d(e){e&&(h(t),h(n),h(o),h(s))}}}function ee(l){let t,n,o,s;return n=new Se({props:{icon:ue(l[7].platform),color:"var(--accent-text)",size:"20px"}}),{c(){t=k("a"),A(n.$$.fragment),o=E(),this.h()},l(e){t=x(e,"A",{class:!0,href:!0,target:!0,rel:!0});var a=b(t);q(n.$$.fragment,a),o=$(a),a.forEach(h),this.h()},h(){f(t,"class","decoration-none"),f(t,"href",`${l[6](l[7].link)?"mailto:":""}${l[7].link}`),f(t,"target","_blank"),f(t,"rel","noreferrer")},m(e,a){M(e,t,a),C(n,t,null),d(t,o),s=!0},p:R,i(e){s||(U(n.$$.fragment,e),s=!0)},o(e){T(n.$$.fragment,e),s=!1},d(e){e&&h(t),P(n)}}}function ze(l){let t,n,o,s,e,a,r,c,_,g,v,I,y;document.title=t=Z(l[4],O),e=new he({props:{classes:"md:text-left ",$$slots:{default:[Te]},$$scope:{ctx:l}}});let L=D(l[2]),u=[];for(let i=0;i<L.length;i+=1)u[i]=ee(W(l,L,i));const ne=i=>T(u[i],1,1,()=>{u[i]=null});return I=new Ue({props:{items:l[5]??fe}}),{c(){n=E(),o=k("div"),s=k("div"),A(e.$$.fragment),a=E(),r=k("p"),c=z(l[0]),_=E(),g=k("div");for(let i=0;i<u.length;i+=1)u[i].c();v=E(),A(I.$$.fragment),this.h()},l(i){ae("svelte-gorrxo",document.head).forEach(h),n=$(i),o=x(i,"DIV",{class:!0});var w=b(o);s=x(w,"DIV",{class:!0});var m=b(s);q(e.$$.fragment,m),a=$(m),r=x(m,"P",{class:!0});var j=b(r);c=B(j,l[0]),j.forEach(h),_=$(m),g=x(m,"DIV",{class:!0});var K=b(g);for(let V=0;V<u.length;V+=1)u[V].l(K);K.forEach(h),m.forEach(h),v=$(w),q(I.$$.fragment,w),w.forEach(h),this.h()},h(){f(r,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),f(g,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),f(s,"class","md:flex-1 gap-10px"),f(o,"class","col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(i,p){M(i,n,p),M(i,o,p),d(o,s),C(e,s,null),d(s,a),d(s,r),d(r,c),d(s,_),d(s,g);for(let w=0;w<u.length;w+=1)u[w]&&u[w].m(g,null);d(o,v),C(I,o,null),y=!0},p(i,[p]){(!y||p&16)&&t!==(t=Z(i[4],O))&&(document.title=t);const w={};if(p&1024&&(w.$$scope={dirty:p,ctx:i}),e.$set(w),p&68){L=D(i[2]);let m;for(m=0;m<L.length;m+=1){const j=W(i,L,m);u[m]?(u[m].p(j,p),U(u[m],1)):(u[m]=ee(j),u[m].c(),U(u[m],1),u[m].m(g,null))}for(ie(),m=L.length;m<u.length;m+=1)ne(m);re()}},i(i){if(!y){U(e.$$.fragment,i);for(let p=0;p<L.length;p+=1)U(u[p]);U(I.$$.fragment,i),y=!0}},o(i){T(e.$$.fragment,i),u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)T(u[p]);T(I.$$.fragment,i),y=!1},d(i){i&&(h(n),h(o)),P(e),te(u,i),P(I)}}}function Be(l){const{description:t,lastName:n,links:o,name:s,title:e,skills:a}=me;return[t,n,o,s,e,a,c=>{const _=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!ge(c)&&_.test(c)}]}class Fe extends H{constructor(t){super(),G(this,t,Be,ze,F,{})}}export{Fe as component};
