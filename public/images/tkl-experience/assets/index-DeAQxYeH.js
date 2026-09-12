var Vg=Object.defineProperty;var Gg=(r,t,e)=>t in r?Vg(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var j=(r,t,e)=>Gg(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ep(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ia={duration:.5,overwrite:!1,delay:0},vh,rn,Pe,ni=1e8,Te=1/ni,tu=Math.PI*2,Wg=tu/4,Xg=0,Tp=Math.sqrt,Yg=Math.cos,qg=Math.sin,en=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},qi=function(t){return typeof t=="number"},xh=function(t){return typeof t>"u"},Li=function(t){return typeof t=="object"},Cn=function(t){return t!==!1},yh=function(){return typeof window<"u"},Ta=function(t){return ze(t)||en(t)},wp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,$g=/random\([^)]+\)/g,Zg=/,\s*/g,pf=/(?:-?\.?\d|\.)+/gi,Ap=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ic=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cp=/[+-]=-?[.\d]+/,Kg=/[^,'"\[\]\s]+/gi,Jg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,yi,eu,Mh,$n={},Pl={},Rp,Pp=function(t){return(Pl=Ks(t,$n))&&Dn},Sh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ra=function(t,e){return!e&&console.warn(t)},Lp=function(t,e){return t&&($n[t]=e)&&Pl&&(Pl[t]=e)||$n},sa=function(){return 0},jg={suppressEvents:!0,isStart:!0,kill:!1},fl={suppressEvents:!0,kill:!1},Qg={suppressEvents:!0},bh={},dr=[],nu={},Dp,Bn={},rc={},mf=30,dl=[],Eh="",Th=function(t){var e=t[0],n,i;if(Li(e)||ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=dl.length;i--&&!dl[i].targetTest(e););n=dl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new tm(t[i],n)))||t.splice(i,1);return t},Xr=function(t){return t._gsap||Th(ii(t))[0]._gsap},Ip=function(t,e,n){return(n=t[e])&&ze(n)?t[e]():xh(n)&&t.getAttribute&&t.getAttribute(e)||n},Rn=function(t,e){return(t=t.split(",")).forEach(e)||t},ke=function(t){return Math.round(t*1e5)/1e5||0},De=function(t){return Math.round(t*1e7)/1e7||0},ks=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},t_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ll=function(){var t=dr.length,e=dr.slice(0),n,i;for(nu={},dr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wh=function(t){return!!(t._initted||t._startAt||t.add)},Up=function(t,e,n,i){dr.length&&!rn&&Ll(),t.render(e,n,!!(rn&&e<0&&wh(t))),dr.length&&!rn&&Ll()},Np=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Kg).length<2?e:en(t)?t.trim():t},Op=function(t){return t},Zn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},e_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ks=function(t,e){for(var n in e)t[n]=e[n];return t},gf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Li(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Dl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ko=function(t){var e=t.parent||Ie,n=t.keyframes?e_(dn(t.keyframes)):Zn;if(Cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},n_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Fp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Yl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},vr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},i_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},iu=function(t,e,n,i){return t._startAt&&(rn?t._startAt.revert(fl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},r_=function r(t){return!t||t._ts&&r(t.parent)},_f=function(t){return t._repeat?Js(t._tTime,t=t.duration()+t._rDelay)*t:0},Js=function(t,e){var n=Math.floor(t=De(t/e));return t&&n===t?n-1:n},Il=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ql=function(t){return t._end=De(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},$l=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=De(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ql(t),n._dirty||Yr(n,t)),t},zp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Il(t.rawTime(),e),(!e._dur||ya(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),Yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},bi=function(t,e,n,i){return e.parent&&vr(e),e._start=De((qi(n)?n:n||t!==Ie?Qn(t,n,e):t._time)+e._delay),e._end=De(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Fp(t,e,"_first","_last",t._sort?"_start":0),ru(e)||(t._recent=e),i||zp(t,e),t._ts<0&&$l(t,t._tTime),t},Bp=function(t,e){return($n.ScrollTrigger||Sh("scrollTrigger",e))&&$n.ScrollTrigger.create(e,t)},kp=function(t,e,n,i,s){if(Ch(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!rn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dp!==Vn.frame)return dr.push(t),t._lazy=[s,i],1},s_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ru=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},o_=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&s_(t)&&!(!t._initted&&ru(t))||(t._ts<0||t._dp._ts<0)&&!ru(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ya(0,t._tDur,e),u=Js(l,a),t._yoyo&&u&1&&(o=1-o),u!==Js(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||rn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&kp(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&iu(t,e,n,!0),t._onUpdate&&!n&&Wn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Wn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&vr(t,1),!n&&!rn&&(Wn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},a_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},js=function(t,e,n,i){var s=t._repeat,o=De(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:De(o*(s+1)+t._rDelay*s):o,a>0&&!i&&$l(t,t._tTime=t._tDur*a),t.parent&&ql(t),n||Yr(t.parent,t),t},vf=function(t){return t instanceof An?Yr(t):js(t,t._dur)},l_={_start:0,endTime:sa,totalDuration:sa},Qn=function r(t,e,n){var i=t.labels,s=t._recent||l_,o=t.duration()>=ni?s.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ho=function(t,e,n){var i=qi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;o.immediateRender=Cn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Xe(e[0],o,e[s+1])},Er=function(t,e){return t||t===0?e(t):e},ya=function(t,e,n){return n<t?t:n>e?e:n},hn=function(t,e){return!en(t)||!(e=Jg.exec(t))?"":e[1]},c_=function(t,e,n){return Er(n,function(i){return ya(t,e,i)})},su=[].slice,Hp=function(t,e){return t&&Li(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Li(t[0]))&&!t.nodeType&&t!==yi},u_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return en(i)&&!e||Hp(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(t,e,n){return Pe&&!e&&Pe.selector?Pe.selector(t):en(t)&&!n&&(eu||!Qs())?su.call((e||Mh).querySelectorAll(t),0):dn(t)?u_(t,n):Hp(t)?su.call(t,0):t?[t]:[]},ou=function(t){return t=ii(t)[0]||ra("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ii(e,n.querySelectorAll?n:n===t?ra("Invalid scope")||Mh.createElement("div"):t)}},Vp=function(t){return t.sort(function(){return .5-Math.random()})},Gp=function(t){if(ze(t))return t;var e=Li(t)?t:{each:t},n=qr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return en(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||e).length,m=o[_],p,y,S,v,R,w,E,A,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,ni])[1],!M){for(E=-ni;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:i%M,y=M===ni?0:l?_*h/M-.5:i/M|0,E=0,A=ni,w=0;w<_;w++)S=w%M-p,v=y-(w/M|0),m[w]=R=c?Math.abs(c==="y"?v:S):Tp(S*S+v*v),R>E&&(E=R),R<A&&(A=R);i==="random"&&Vp(m),m.max=E-A,m.min=A,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=hn(e.amount||e.each)||0,n=n&&_<0?b_(n):n}return _=(m[f]-m.min)/m.max||0,De(m.b+(n?n(_):_)*m.v)+m.u}},au=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=De(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(qi(n)?0:hn(n))}},Wp=function(t,e){var n=dn(t),i,s;return!n&&Li(t)&&(i=n=t.radius||ni,t.values?(t=ii(t.values),(s=!qi(t[0]))&&(i*=i)):t=au(t.increment)),Er(e,n?ze(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||qi(o)?u:u+hn(o)}:au(t))},Xp=function(t,e,n,i){return Er(dn(t)?!e:n===!0?!!(n=0):!i,function(){return dn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},h_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},f_=function(t,e){return function(n){return t(parseFloat(n))+(e||hn(n))}},d_=function(t,e,n){return qp(t,e,0,1,n)},Yp=function(t,e,n){return Er(n,function(i){return t[~~e(i)]})},p_=function r(t,e,n){var i=e-t;return dn(t)?Yp(t,r(0,t.length),e):Er(n,function(s){return(i+(s-t)%i)%i+t})},m_=function r(t,e,n){var i=e-t,s=i*2;return dn(t)?Yp(t,r(0,t.length-1),e):Er(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},oa=function(t){return t.replace($g,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Zg);return Xp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},qp=function(t,e,n,i,s){var o=e-t,a=i-n;return Er(s,function(l){return n+((l-t)/o*a||0)})},g_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=en(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(dn(t)&&!dn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=Ks(dn(t)?[]:{},t));if(!u){for(l in e)Ah.call(a,t,l,"get",e[l]);s=function(g){return Lh(g,a)||(o?t.p:t)}}}return Er(n,s)},xf=function(t,e,n){var i=t.labels,s=ni,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wn=function(t,e,n){var i=t.vars,s=i[e],o=Pe,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&dr.length&&Ll(),a&&(Pe=a),u=l?s.apply(c,l):s.call(c),Pe=o,u},Lo=function(t){return vr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!rn),t.progress()<1&&Wn(t,"onInterrupt"),t},Us,$p=[],Zp=function(t){if(t)if(t=!t.name&&t.default||t,yh()||t.headless){var e=t.name,n=ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:sa,render:Lh,add:Ah,kill:I_,modifier:D_,rawVars:0},o={targetTest:0,get:0,getSetter:Ph,aliases:{},register:0};if(Qs(),t!==i){if(Bn[e])return;Zn(i,Zn(Dl(t,s),o)),Ks(i.prototype,Ks(s,Dl(t,o))),Bn[i.prop=e]=i,t.targetTest&&(dl.push(i),bh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Lp(e,i),t.register&&t.register(Dn,i,Pn)}else $p.push(t)},Ee=255,Do={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},sc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},Kp=function(t,e,n){var i=t?qi(t)?[t>>16,t>>8&Ee,t&Ee]:0:Do.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Do[t])i=Do[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(pf),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=sc(l+1/3,s,o),i[1]=sc(l,s,o),i[2]=sc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Ap),n&&i.length<4&&(i[3]=1),i}else i=t.match(pf)||Do.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Jp=function(t){var e=[],n=[],i=-1;return t.split(pr).forEach(function(s){var o=s.match(Is)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},yf=function(t,e,n){var i="",s=(t+i).match(pr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Kp(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Jp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(pr,"1").split(Is),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(pr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},pr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Do)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),__=/hsl[a]?\(/,jp=function(t){var e=t.join(" "),n;if(pr.lastIndex=0,pr.test(e))return n=__.test(e),t[1]=yf(t[1],n),t[0]=yf(t[0],n,Jp(t[1])),!0},aa,Vn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,y=m===!0,S,v,R,w;if((p>t||p<0)&&(n+=p-e),i+=p,R=i-n,S=R-o,(S>0||y)&&(w=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=S+(S>=s?4:s-S),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](R,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Rp&&(!eu&&yh()&&(yi=eu=window,Mh=yi.document||{},$n.gsap=Dn,(yi.gsapVersions||(yi.gsapVersions=[])).push(Dn.version),Pp(Pl||yi.GreenSockGlobals||!yi.gsap&&yi||{}),$p.forEach(Zp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},aa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),aa=0,c=sa},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,y){var S=p?function(v,R,w,E){m(v,R,w,E),h.remove(S)}:m;return h.remove(m),a[y?"unshift":"push"](S),Qs(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Qs=function(){return!aa&&Vn.wake()},le={},v_=/^[\d.\-M][\d.\-,\s]/,x_=/["']/g,y_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(x_,"").trim():+c,i=l.substr(a+1).trim();return e},M_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},S_=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[y_(e[1])]:M_(t).split(",").map(Np)):le._CE&&v_.test(t)?le._CE("",t):n},b_=function(t){return function(e){return 1-t(1-e)}},qr=function(t,e){return t&&(ze(t)?t:le[t]||S_(t))||e},ss=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Rn(t,function(a){le[a]=$n[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},Qp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},oc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/tu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*qg((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Qp(a);return s=tu/s,l.config=function(c,u){return r(t,c,u)},l},ac=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Qp(n);return i.config=function(s){return r(t,s)},i};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ss(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;ss("Elastic",oc("in"),oc("out"),oc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ss("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ss("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ss("Circ",function(r){return-(Tp(1-r*r)-1)});ss("Sine",function(r){return r===1?1:-Yg(r*Wg)+1});ss("Back",ac("in"),ac("out"),ac());le.SteppedEase=le.steps=$n.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Te;return function(a){return((i*ya(0,o,a)|0)+s)*n}}};ia.ease=le["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Eh+=r+","+r+"Params,"});var tm=function(t,e){this.id=Xg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ip,this.set=e?e.getSetter:Ph},la=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,js(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),aa||Vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($l(this,n),!s._dp||s.parent||zp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Up(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_f(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_f(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Js(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Il(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts,this.totalTime(ya(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ql(this),i_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=De(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&bi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Il(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Qg);var i=rn;return rn=n,wh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Qn(this,n),Cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cn(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Te)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=ze(n)?n:Op,l=function(){var u=i.then;i.then=null,s&&s(),ze(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Lo(this)},r})();Zn(la.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var An=(function(r){Ep(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Cn(n.sortChildren),Ie&&bi(n.parent||Ie,ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Bp(ki(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ho(0,arguments,this),this},e.from=function(i,s,o){return Ho(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ho(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xe(i,s,Qn(this,o),1),this},e.call=function(i,s,o){return bi(this,Xe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Xe(i,o,Qn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ko(o).immediateRender=Cn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ko(a).immediateRender=Cn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:De(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,y,S,v,R,w,E;if(this!==Ie&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,S=this._ts,p=!S,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=De(u%m),u===l?(_=this._repeat,f=c):(R=De(u/m),_=~~R,_&&_===R&&(f=c,_--),f>c&&(f=c)),R=Js(this._tTime,m),!a&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),w&&_&1&&(f=c-f,E=1),_!==R&&!this._lock){var A=w&&R&1,M=A===(w&&_&1);if(_<R&&(A=!A),a=A?0:u%c?c:u,this._lock=1,this.render(a||(E?0:De(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=a_(this,De(a),De(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(Wn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-Te);break}}d=g}else{d=this._last;for(var x=i<0?i:f;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||rn&&wh(d)),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=x?-Te:Te);break}}d=g}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-Te)._zTime=f>=a?1:-1,this._ts))return this._start=v,ql(this),this.render(i,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Wn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(qi(s)||(s=Qn(this,s,i)),!(i instanceof la)){if(dn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(ze(i))i=Xe.delayedCall(0,i);else return this}return this!==i?bi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return en(i)?this.removeLabel(i):ze(i)?this.killTweensOf(i):(i.parent===this&&Yl(this,i),i===this._recent&&(this._recent=this._last),Yr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=De(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Qn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Xe.delayedCall(0,s||sa,o);return a.data="isPause",this._hasPause=1,bi(this,a,Qn(this,i))},e.removePause=function(i){var s=this._first;for(i=Qn(this,i);s;)s._start===i&&s.data==="isPause"&&vr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)lr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=qi(s),u;l;)l instanceof Xe?t_(l._targets,a)&&(c?(!lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Qn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Xe.to(o,Zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&js(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Zn({startAt:{time:Qn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),xf(this,Qn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),xf(this,Qn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=De(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Yr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,bi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=De(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;js(o,o===Ie&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ie._ts&&(Up(Ie,Il(i,Ie)),Dp=Vn.frame),Vn.frame>=mf){mf+=Yn.autoSleep||120;var s=Ie._first;if((!s||!s._ts)&&Yn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},t})(la);Zn(An.prototype,{_lock:0,_hasPause:0,_forcing:0});var E_=function(t,e,n,i,s,o,a){var l=new Pn(this._pt,t,e,0,1,om,null,s),c=0,u=0,h,f,d,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=oa(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),f=n.match(ic)||[];h=ic.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ks(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=ic.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Cp.test(i)||p)&&(l.e=0),this._pt=l,l},Ah=function(t,e,n,i,s,o,a,l,c,u){ze(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:ze(h)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=ze(h)?c?R_:rm:Rh,g;if(en(i)&&(~i.indexOf("random(")&&(i=oa(i)),i.charAt(1)==="="&&(g=ks(f,i)+(hn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||lu)return!isNaN(f*i)&&i!==""?(g=new Pn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?L_:sm,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&Sh(e,i),E_.call(this,t,e,f,i,d,l||Yn.stringFilter,c))},T_=function(t,e,n,i,s){if(ze(t)&&(t=Vo(t,s,e,n,i)),!Li(t)||t.style&&t.nodeType||dn(t)||wp(t))return en(t)?Vo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Vo(t[a],s,e,n,i);return o},em=function(t,e,n,i,s,o){var a,l,c,u;if(Bn[t]&&(a=new Bn[t]).init(s,a.rawVars?e[t]:T_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Pn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Us))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},lr,lu,Ch=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!vh,v=t.timeline,R=i.easeReverse||h,w,E,A,M,x,L,U,N,G,k,B,F,I;if(v&&(!f||!s)&&(s="none"),t._ease=qr(s,ia.ease),t._rEase=R&&(qr(R)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||f&&!i.stagger){if(N=m[0]?Xr(m[0]).harness:0,F=N&&i[N.prop],w=Dl(i,bh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?fl:jg),_._lazy=0),o){if(vr(t._startAt=Xe.set(m,Zn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Wn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn||!a&&!d)&&t._startAt.revert(fl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),A=Zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Cn(l),immediateRender:a,stagger:0,parent:p},w),F&&(A[N.prop]=F),vr(t._startAt=Xe.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn?t._startAt.revert(fl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Cn(l)||l&&!g,E=0;E<m.length;E++){if(x=m[E],U=x._gsap||Th(m)[E]._gsap,t._ptLookup[E]=k={},nu[U.id]&&dr.length&&Ll(),B=y===m?E:y.indexOf(x),N&&(G=new N).init(x,F||w,t,B,y)!==!1&&(t._pt=M=new Pn(t._pt,x,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(X){k[X]=M}),G.priority&&(L=1)),!N||F)for(A in w)Bn[A]&&(G=em(A,w,t,B,x,y))?G.priority&&(L=1):k[A]=M=Ah.call(t,x,A,"get",w[A],B,y,0,i.stringFilter);t._op&&t._op[E]&&t.kill(x,t._op[E]),S&&t._pt&&(lr=t,Ie.killTweensOf(x,k,t.globalTime(e)),I=!t.parent,lr=0),t._pt&&l&&(nu[U.id]=1)}L&&am(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!I,f&&e<=0&&v.render(ni,!0,!0)},w_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return lu=1,t.vars[e]="+=0",Ch(t,a),lu=0,l?ra(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=ke(n)+hn(h.e)),h.b&&(h.b=u.s+hn(h.b))},A_=function(t,e){var n=t[0]?Xr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ks({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},C_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(dn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Vo=function(t,e,n,i,s){return ze(t)?t.call(e,n,i,s):en(t)&&~t.indexOf("random(")?oa(t):t},nm=Eh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",im={};Rn(nm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return im[r]=1});var Xe=(function(r){Ep(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ko(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Ie,y=(dn(n)||wp(n)?qi(n[0]):"length"in i)?[n]:ii(n),S,v,R,w,E,A,M,x;if(a._targets=y.length?Th(y):ra("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ta(c)||Ta(u)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(S=a.timeline=new An({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:y}),S.kill(),S.parent=S._dp=ki(a),S._start=0,f||Ta(c)||Ta(u)){if(w=y.length,M=f&&Gp(f),Li(f))for(E in f)~nm.indexOf(E)&&(x||(x={}),x[E]=f[E]);for(v=0;v<w;v++)R=Dl(i,im),R.stagger=0,L&&(R.easeReverse=L),x&&Ks(R,x),A=y[v],R.duration=+Vo(c,ki(a),v,A,y),R.delay=(+Vo(u,ki(a),v,A,y)||0)-a._delay,!f&&w===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),S.to(A,R,M?M(v,A,y):0),S._ease=le.none;S.duration()?c=u=0:a.timeline=0}else if(g){ko(Zn(S.vars.defaults,{ease:"none"})),S._ease=qr(g.ease||i.ease||"none");var U=0,N,G,k;if(dn(g))g.forEach(function(B){return S.to(y,B,">")}),S.duration();else{R={};for(E in g)E==="ease"||E==="easeEach"||C_(E,g[E],R,g.easeEach);for(E in R)for(N=R[E].sort(function(B,F){return B.t-F.t}),U=0,v=0;v<N.length;v++)G=N[v],k={ease:G.e,duration:(G.t-(v?N[v-1].t:0))/100*c},k[E]=G.v,S.to(y,k,U),U+=k.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!vh&&(lr=ki(a),Ie.killTweensOf(y),lr=0),bi(p,ki(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===De(p._time)&&Cn(h)&&r_(ki(a))&&p.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-u)||0)),m&&Bp(ki(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Te&&!u?l:i<Te?0:i,f,d,g,_,m,p,y,S;if(!c)o_(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=De(h%_),h===l?(g=this._repeat,f=c):(m=De(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),m=Js(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(De(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(kp(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var R=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(v?-1:1)/R:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(Wn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&iu(this,i,s,o),Wn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&iu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&vr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Wn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){aa||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ch(this,c),u=this._ease(c/this._dur),w_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):($l(this,0),this.parent||Fp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Lo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,lr&&lr.vars.overwrite!==!0)._first||Lo(this),this.parent&&o!==this.timeline.totalDuration()&&js(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&n_(a,l))return s==="all"&&(this._pt=0),Lo(this);for(h=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},Rn(s,function(y){return _[y]=1}),s=_),s=A_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Yl(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Lo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ho(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ho(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ie.killTweensOf(i,s,o)},t})(la);Zn(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(r){Xe[r]=function(){var t=new An,e=su.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Rh=function(t,e,n){return t[e]=n},rm=function(t,e,n){return t[e](n)},R_=function(t,e,n,i){return t[e](i.fp,n)},P_=function(t,e,n){return t.setAttribute(e,n)},Ph=function(t,e){return ze(t[e])?rm:xh(t[e])&&t.setAttribute?P_:Rh},sm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},L_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},om=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Lh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},D_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},I_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Yl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},U_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},am=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Pn=(function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||sm,this.d=l||this,this.set=c||Rh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=U_,this.m=n,this.mt=s,this.tween=i},r})();Rn(Eh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return bh[r]=1});$n.TweenMax=$n.TweenLite=Xe;$n.TimelineLite=$n.TimelineMax=An;Ie=new An({sortChildren:!1,defaults:ia,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=jp;var $r=[],pl={},N_=[],Mf=0,O_=0,lc=function(t){return(pl[t]||N_).map(function(e){return e()})},cu=function(){var t=Date.now(),e=[];t-Mf>2&&(lc("matchMediaInit"),$r.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=yi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),lc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mf=t,lc("matchMedia"))},lm=(function(){function r(e,n){this.selector=n&&ou(n),this.data=[],this._r=[],this.isReverted=!1,this.id=O_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ze(n)&&(s=i,i=n,n=ze);var o=this,a=function(){var c=Pe,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=ou(s)),Pe=o,h=i.apply(o,arguments),ze(h)&&o._r.push(h),Pe=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ze?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Pe;Pe=null,n(this),Pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof An?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=$r.length;o--;)$r[o].id===this.id&&$r.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),F_=(function(){function r(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Li(n)||(n={matches:n});var o=new lm(0,s||this.scope),a=o.conditions={},l,c,u;Pe&&!o.selector&&(o.selector=Pe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=yi.matchMedia(n[c]),l&&($r.indexOf(o)<0&&$r.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(cu):l.addEventListener("change",cu)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ul={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Zp(i)})},timeline:function(t){return new An(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=ii(t)[0]);var s=Xr(t||{}).get,o=n?Op:Np;return n==="native"&&(n=""),t&&(e?o((Bn[e]&&Bn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Bn[a]&&Bn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ii(t),t.length>1){var i=t.map(function(u){return Dn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Bn[e],a=Xr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Us._pt=0,h.init(t,n?u+n:u,Us,0,[t]),h.render(1,h),Us._pt&&Lh(1,Us)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Dn.to(t,Zn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=qr(t.ease,ia.ease)),gf(ia,t||{})},config:function(t){return gf(Yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Bn[a]&&!$n[a]&&ra(e+" effect requires "+a+" plugin.")}),rc[e]=function(a,l,c){return n(ii(a),Zn(l||{},s),c)},o&&(An.prototype[e]=function(a,l,c){return this.add(rc[e](a,Li(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=qr(e)},parseEase:function(t,e){return arguments.length?qr(t,e):le},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new An(t),i,s;for(n.smoothChildTiming=Cn(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,i=Ie._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&bi(n,i,i._start-i._delay),i=s;return bi(Ie,n,0),n},context:function(t,e){return t?new lm(t,e):Pe},matchMedia:function(t){return new F_(t)},matchMediaRefresh:function(){return $r.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||cu()},addEventListener:function(t,e){var n=pl[t]||(pl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=pl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:p_,wrapYoyo:m_,distribute:Gp,random:Xp,snap:Wp,normalize:d_,getUnit:hn,clamp:c_,splitColor:Kp,toArray:ii,selector:ou,mapRange:qp,pipe:h_,unitize:f_,interpolate:g_,shuffle:Vp},install:Pp,effects:rc,ticker:Vn,updateRoot:An.updateRoot,plugins:Bn,globalTimeline:Ie,core:{PropTween:Pn,globals:Lp,Tween:Xe,Timeline:An,Animation:la,getCache:Xr,_removeLinkedListItem:Yl,reverting:function(){return rn},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return vh=t}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ul[r]=Xe[r]});Vn.add(An.updateRoot);Us=Ul.to({},{duration:0});var z_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},B_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=z_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},cc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},Rn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}B_(a,s)}}}},Dn=Ul.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},cc("roundProps",au),cc("modifiers"),cc("snap",Wp))||Ul;Xe.version=An.version=Dn.version="3.15.0";Rp=1;yh()&&Qs();le.Power0;le.Power1;le.Power2;le.Power3;le.Power4;le.Linear;le.Quad;le.Cubic;le.Quart;le.Quint;le.Strong;le.Elastic;le.Back;le.SteppedEase;le.Bounce;le.Sine;le.Expo;le.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sf,cr,Hs,Dh,Hr,bf,Ih,k_=function(){return typeof window<"u"},$i={},Ur=180/Math.PI,Vs=Math.PI/180,cs=Math.atan2,Ef=1e8,Uh=/([A-Z])/g,H_=/(left|right|width|margin|padding|x)/i,V_=/[\s,\(]\S/,Ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},G_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},W_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},X_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Y_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},cm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},um=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},q_=function(t,e,n){return t.style[e]=n},$_=function(t,e,n){return t.style.setProperty(e,n)},Z_=function(t,e,n){return t._gsap[e]=n},K_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},J_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},j_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ue="transform",Ln=Ue+"Origin",Q_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in $i&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ei[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Hi(i,a)}):this.tfm[t]=o.x?o[t]:Hi(i,t),t===Ln&&(this.tfm.zOrigin=o.zOrigin);else return Ei.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ue)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,e,"")),t=Ue}(s||e)&&this.props.push(t,e,s[t])},hm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},t0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Uh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ih(),(!s||!s.isStart)&&!n[Ue]&&(hm(n),i.zOrigin&&n[Ln]&&(n[Ln]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},fm=function(t,e){var n={target:t,props:[],revert:t0,save:Q_};return t._gsap||Dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},dm,hu=function(t,e){var n=cr.createElementNS?cr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):cr.createElement(t);return n&&n.style?n:cr.createElement(t)},Xn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Uh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,to(e)||e,1)||""},Tf="O,Moz,ms,Ms,Webkit".split(","),to=function(t,e,n){var i=e||Hr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Tf[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Tf[o]:"")+t},fu=function(){k_()&&window.document&&(Sf=window,cr=Sf.document,Hs=cr.documentElement,Hr=hu("div")||{style:{}},hu("div"),Ue=to(Ue),Ln=Ue+"Origin",Hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dm=!!to("perspective"),Ih=Dn.core.reverting,Dh=1)},wf=function(t){var e=t.ownerSVGElement,n=hu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Hs.removeChild(n),s},Af=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},pm=function(t){var e,n;try{e=t.getBBox()}catch{e=wf(t),n=1}return e&&(e.width||e.height)||n||(e=wf(t)),e&&!e.width&&!e.x&&!e.y?{x:+Af(t,["x","cx","x1"])||0,y:+Af(t,["y","cy","y1"])||0,width:0,height:0}:e},mm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&pm(t))},xr=function(t,e){if(e){var n=t.style,i;e in $i&&e!==Ln&&(e=Ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Uh,"-$1").toLowerCase())):n.removeAttribute(e)}},ur=function(t,e,n,i,s,o){var a=new Pn(t._pt,e,n,0,1,o?um:cm);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Cf={deg:1,rad:1,turn:1},e0={grid:1,flex:1},yr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Hr.style,l=H_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Cf[i]||Cf[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&mm(t),(d||o==="%")&&($i[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],ke(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===cr||!_.appendChild)&&(_=cr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Vn.time&&!m.uncache)return ke(s/m.width*h);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+i,g=t[u],y?t.style[e]=y:xr(t,e)}else(d||o==="%")&&!e0[Xn(_,"display")]&&(a.position=Xn(t,"position")),_===t&&(a.position="static"),_.appendChild(Hr),g=Hr[u],_.removeChild(Hr),a.position="absolute";return l&&d&&(m=Xr(_),m.time=Vn.time,m.width=_[u]),ke(f?g*s/h:g&&s?h/g*s:0)},Hi=function(t,e,n,i){var s;return Dh||fu(),e in Ei&&e!=="transform"&&(e=Ei[e],~e.indexOf(",")&&(e=e.split(",")[0])),$i[e]&&e!=="transform"?(s=ua(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ol(Xn(t,Ln))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Nl[e]&&Nl[e](t,e,n)||Xn(t,e)||Ip(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yr(t,e,s,n)+n:s},n0=function(t,e,n,i){if(!n||n==="none"){var s=to(e,t,1),o=s&&Xn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Xn(t,"borderTopColor"))}var a=new Pn(this._pt,t.style,e,0,1,om),l=0,c=0,u,h,f,d,g,_,m,p,y,S,v,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Xn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Xn(t,e)||i,_?t.style[e]=_:xr(t,e)),u=[n,i],jp(u),n=u[0],i=u[1],f=n.match(Is)||[],R=i.match(Is)||[],R.length){for(;h=Is.exec(i);)m=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=ks(d,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=Is.lastIndex-S.length,S||(S=S||Yn.units[e]||v,l===i.length&&(i+=S,a.e+=S)),v!==S&&(d=yr(t,e,_,S)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?um:cm;return Cp.test(i)&&(a.e=0),this._pt=a,a},Rf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},i0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Rf[n]||n,e[1]=Rf[i]||i,e.join(" ")},r0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],$i[a]&&(l=1,a=a==="transformOrigin"?Ln:Ue),xr(n,a);l&&(xr(n,Ue),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ua(n,1),o.uncache=1,hm(i)))}},Nl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Pn(t._pt,e,n,0,0,r0);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ca=[1,0,0,1,0,0],gm={},_m=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Pf=function(t){var e=Xn(t,Ue);return _m(e)?ca:e.substr(7).match(Ap).map(ke)},Nh=function(t,e){var n=t._gsap||Xr(t),i=t.style,s=Pf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ca:s):(s===ca&&!t.offsetParent&&t!==Hs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Hs.appendChild(t)),s=Pf(t),l?i.display=l:xr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Hs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},du=function(t,e,n,i,s,o){var a=t._gsap,l=s||Nh(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],S=e.split(" "),v=parseFloat(S[0])||0,R=parseFloat(S[1])||0,w,E,A,M;n?l!==ca&&(E=d*m-g*_)&&(A=v*(m/E)+R*(-_/E)+(_*y-m*p)/E,M=v*(-g/E)+R*(d/E)-(d*y-g*p)/E,v=A,R=M):(w=pm(t),v=w.x+(~S[0].indexOf("%")?v/100*w.width:v),R=w.y+(~(S[1]||S[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&a.smooth?(p=v-c,y=R-u,a.xOffset=h+(p*d+y*_)-p,a.yOffset=f+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=R,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ln]="0px 0px",o&&(ur(o,a,"xOrigin",c,v),ur(o,a,"yOrigin",u,R),ur(o,a,"xOffset",h,a.xOffset),ur(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+R)},ua=function(t,e){var n=t._gsap||new tm(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Xn(t,Ln)||"0",u,h,f,d,g,_,m,p,y,S,v,R,w,E,A,M,x,L,U,N,G,k,B,F,I,X,C,K,at,gt,Y,et;return u=h=f=_=m=p=y=S=v=0,d=g=1,n.svg=!!(t.getCTM&&mm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ue]!=="none"?l[Ue]:"")),i.scale=i.rotate=i.translate="none"),E=Nh(t,n.svg),n.svg&&(n.uncache?(I=t.getBBox(),c=n.xOrigin-I.x+"px "+(n.yOrigin-I.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),du(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,E)),R=n.xOrigin||0,w=n.yOrigin||0,E!==ca&&(L=E[0],U=E[1],N=E[2],G=E[3],u=k=E[4],h=B=E[5],E.length===6?(d=Math.sqrt(L*L+U*U),g=Math.sqrt(G*G+N*N),_=L||U?cs(U,L)*Ur:0,y=N||G?cs(N,G)*Ur+_:0,y&&(g*=Math.abs(Math.cos(y*Vs))),n.svg&&(u-=R-(R*L+w*N),h-=w-(R*U+w*G))):(et=E[6],gt=E[7],C=E[8],K=E[9],at=E[10],Y=E[11],u=E[12],h=E[13],f=E[14],A=cs(et,at),m=A*Ur,A&&(M=Math.cos(-A),x=Math.sin(-A),F=k*M+C*x,I=B*M+K*x,X=et*M+at*x,C=k*-x+C*M,K=B*-x+K*M,at=et*-x+at*M,Y=gt*-x+Y*M,k=F,B=I,et=X),A=cs(-N,at),p=A*Ur,A&&(M=Math.cos(-A),x=Math.sin(-A),F=L*M-C*x,I=U*M-K*x,X=N*M-at*x,Y=G*x+Y*M,L=F,U=I,N=X),A=cs(U,L),_=A*Ur,A&&(M=Math.cos(A),x=Math.sin(A),F=L*M+U*x,I=k*M+B*x,U=U*M-L*x,B=B*M-k*x,L=F,k=I),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=ke(Math.sqrt(L*L+U*U+N*N)),g=ke(Math.sqrt(B*B+et*et)),A=cs(k,B),y=Math.abs(A)>2e-4?A*Ur:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!_m(Xn(t,Ue)),F&&t.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ke(d),n.scaleY=ke(g),n.rotation=ke(_)+a,n.rotationX=ke(m)+a,n.rotationY=ke(p)+a,n.skewX=y+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ln]=Ol(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?o0:dm?vm:s0,n.uncache=0,n},Ol=function(t){return(t=t.split(" "))[0]+" "+t[1]},uc=function(t,e,n){var i=hn(e);return ke(parseFloat(e)+parseFloat(yr(t,"x",n+"px",i)))+i},s0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,vm(t,e)},wr="0deg",mo="0px",Ar=") ",vm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,S=n.zOrigin,v="",R=p==="auto"&&t&&t!==1||p===!0;if(S&&(h!==wr||u!==wr)){var w=parseFloat(u)*Vs,E=Math.sin(w),A=Math.cos(w),M;w=parseFloat(h)*Vs,M=Math.cos(w),o=uc(y,o,E*M*-S),a=uc(y,a,-Math.sin(w)*-S),l=uc(y,l,A*M*-S+S)}m!==mo&&(v+="perspective("+m+Ar),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(R||o!==mo||a!==mo||l!==mo)&&(v+=l!==mo||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ar),c!==wr&&(v+="rotate("+c+Ar),u!==wr&&(v+="rotateY("+u+Ar),h!==wr&&(v+="rotateX("+h+Ar),(f!==wr||d!==wr)&&(v+="skew("+f+", "+d+Ar),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Ar),y.style[Ue]=v||"translate(0, 0)"},o0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,S=parseFloat(o),v=parseFloat(a),R,w,E,A,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vs,c*=Vs,R=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(u*=Vs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),E*=M,A*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),R*=M,w*=M)),R=ke(R),w=ke(w),E=ke(E),A=ke(A)):(R=h,A=f,w=E=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=yr(d,"x",o,"px"),v=yr(d,"y",a,"px")),(g||_||m||p)&&(S=ke(S+g-(g*R+_*E)+m),v=ke(v+_-(g*w+_*A)+p)),(i||s)&&(M=d.getBBox(),S=ke(S+i/100*M.width),v=ke(v+s/100*M.height)),M="matrix("+R+","+w+","+E+","+A+","+S+","+v+")",d.setAttribute("transform",M),y&&(d.style[Ue]=M)},a0=function(t,e,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ur:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Ef)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Ef)%o-~~(c/o)*o)),t._pt=f=new Pn(t._pt,e,n,i,c,G_),f.e=u,f.u="deg",t._props.push(n),f},Lf=function(t,e){for(var n in e)t[n]=e[n];return t},l0=function(t,e,n){var i=Lf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ue]=e,a=ua(n,1),xr(n,Ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ue],o[Ue]=e,a=ua(n,1),o[Ue]=c);for(l in $i)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=hn(c),g=hn(u),h=d!==g?yr(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Pn(t._pt,a,l,h,f-h,uu),t._pt.u=g||0,t._props.push(l));Lf(a,i)};Rn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Nl[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Hi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var xm={name:"css",register:fu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,y,S,v,R,w,E,A,M;Dh||fu(),this.styles=this.styles||fm(t),A=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Bn[_]&&em(_,e,n,i,t,s)))){if(d=typeof u,g=Nl[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=oa(u)),g)g(this,t,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",pr.lastIndex=0,pr.test(c)||(m=hn(c),p=hn(u),p?m!==p&&(c=yr(t,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),A.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],en(c)&&~c.indexOf("random(")&&(c=oa(c)),hn(c+"")||c==="auto"||(c+=Yn.units[_]||hn(Hi(t,_))||""),(c+"").charAt(1)==="="&&(c=Hi(t,_))):c=Hi(t,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Ei&&(_==="autoAlpha"&&(f===1&&Hi(t,"visibility")==="hidden"&&h&&(f=0),A.push("visibility",0,a.visibility),ur(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ei[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in $i,S){if(this.styles.save(_),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Xn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=u,u=Xn(t,"perspective"),x?t.style.perspective=x:xr(t,"perspective")}h=parseFloat(u)}if(v||(R=t._gsap,R.renderTransform&&!e.parseTransform||ua(t,e.parseTransform),w=e.smoothOrigin!==!1&&R.smooth,v=this._pt=new Pn(this._pt,a,Ue,0,1,R.renderTransform,R,0,-1),v.dep=1),_==="scale")this._pt=new Pn(this._pt,R,"scaleY",R.scaleY,(y?ks(R.scaleY,y+h):h)-R.scaleY||0,uu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(Ln,0,a[Ln]),u=i0(u),R.svg?du(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&ur(this,R,"zOrigin",R.zOrigin,p),ur(this,a,_,Ol(c),Ol(u)));continue}else if(_==="svgOrigin"){du(t,u,1,w,0,this);continue}else if(_ in gm){a0(this,R,_,f,y?ks(f,y+u):u);continue}else if(_==="smoothOrigin"){ur(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){l0(this,u,t);continue}}else _ in a||(_=to(_)||_);if(S||(h||h===0)&&(f||f===0)&&!V_.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=hn(u)||(_ in Yn.units?Yn.units[_]:m),m!==p&&(f=yr(t,_,c,p)),this._pt=new Pn(this._pt,S?R:a,_,f,(y?ks(f,y+h):h)-f,!S&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Y_:uu),this._pt.u=p||0,S&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=X_):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=W_);else if(_ in a)n0.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Sh(_,u);continue}S||(_ in a?A.push(_,0,a[_]):typeof t[_]=="function"?A.push(_,2,t[_]()):A.push(_,1,c||t[_])),o.push(_)}}E&&am(this)},render:function(t,e){if(e.tween._time||!Ih())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Hi,aliases:Ei,getSetter:function(t,e,n){var i=Ei[e];return i&&i.indexOf(",")<0&&(e=i),e in $i&&e!==Ln&&(t._gsap.x||Hi(t,"x"))?n&&bf===n?e==="scale"?K_:Z_:(bf=n||{})&&(e==="scale"?J_:j_):t.style&&!xh(t.style[e])?q_:~e.indexOf("-")?$_:Ph(t,e)},core:{_removeProperty:xr,_getMatrix:Nh}};Dn.utils.checkPrefix=to;Dn.core.getStyleSaver=fm;(function(r,t,e,n){var i=Rn(r+","+t+","+e,function(s){$i[s]=1});Rn(t,function(s){Yn.units[s]="deg",gm[s]=1}),Ei[i[13]]=r+","+t,Rn(n,function(s){var o=s.split(":");Ei[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Yn.units[r]="px"});Dn.registerPlugin(xm);var de=Dn.registerPlugin(xm)||Dn;de.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="170",c0=0,Df=1,u0=2,ym=1,h0=2,Bi=3,Mr=0,En=1,di=2,mr=0,Gs=1,If=2,Uf=3,Nf=4,f0=5,Br=100,d0=101,p0=102,m0=103,g0=104,_0=200,v0=201,x0=202,y0=203,pu=204,mu=205,M0=206,S0=207,b0=208,E0=209,T0=210,w0=211,A0=212,C0=213,R0=214,gu=0,_u=1,vu=2,eo=3,xu=4,yu=5,Mu=6,Su=7,Mm=0,P0=1,L0=2,gr=0,D0=1,I0=2,U0=3,Sm=4,N0=5,O0=6,F0=7,bm=300,no=301,io=302,bu=303,Eu=304,Zl=306,Fl=1e3,Vr=1001,Tu=1002,qn=1003,z0=1004,wa=1005,Ti=1006,hc=1007,Gr=1008,Zi=1009,Em=1010,Tm=1011,ha=1012,Fh=1013,jr=1014,wi=1015,Ma=1016,zh=1017,Bh=1018,ro=1020,wm=35902,Am=1021,Cm=1022,mi=1023,Rm=1024,Pm=1025,Ws=1026,so=1027,kh=1028,Hh=1029,Lm=1030,Vh=1031,Gh=1033,ml=33776,gl=33777,_l=33778,vl=33779,wu=35840,Au=35841,Cu=35842,Ru=35843,Pu=36196,Lu=37492,Du=37496,Iu=37808,Uu=37809,Nu=37810,Ou=37811,Fu=37812,zu=37813,Bu=37814,ku=37815,Hu=37816,Vu=37817,Gu=37818,Wu=37819,Xu=37820,Yu=37821,xl=36492,qu=36494,$u=36495,Dm=36283,Zu=36284,Ku=36285,Ju=36286,B0=3200,k0=3201,Im=0,H0=1,ar="",Sn="srgb",co="srgb-linear",Kl="linear",ye="srgb",us=7680,Of=519,V0=512,G0=513,W0=514,Um=515,X0=516,Y0=517,q0=518,$0=519,Ff=35044,zf=35048,Bf="300 es",Gi=2e3,zl=2001;class uo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kf=1234567;const Go=Math.PI/180,fa=180/Math.PI;function os(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function tn(r,t,e){return Math.max(t,Math.min(e,r))}function Wh(r,t){return(r%t+t)%t}function Z0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function K0(r,t,e){return r!==t?(e-r)/(t-r):0}function Wo(r,t,e){return(1-e)*r+e*t}function J0(r,t,e,n){return Wo(r,t,1-Math.exp(-e*n))}function j0(r,t=1){return t-Math.abs(Wh(r,t*2)-t)}function Q0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function tv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function ev(r,t){return r+Math.floor(Math.random()*(t-r+1))}function nv(r,t){return r+Math.random()*(t-r)}function iv(r){return r*(.5-Math.random())}function rv(r){r!==void 0&&(kf=r);let t=kf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sv(r){return r*Go}function ov(r){return r*fa}function av(r){return(r&r-1)===0&&r!==0}function lv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function cv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function uv(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ps(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xi={DEG2RAD:Go,RAD2DEG:fa,generateUUID:os,clamp:tn,euclideanModulo:Wh,mapLinear:Z0,inverseLerp:K0,lerp:Wo,damp:J0,pingpong:j0,smoothstep:Q0,smootherstep:tv,randInt:ev,randFloat:nv,randFloatSpread:iv,seededRandom:rv,degToRad:sv,radToDeg:ov,isPowerOfTwo:av,ceilPowerOfTwo:lv,floorPowerOfTwo:cv,setQuaternionFromProperEuler:uv,normalize:gn,denormalize:Ps};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,i,s,o,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],S=i[4],v=i[7],R=i[2],w=i[5],E=i[8];return s[0]=o*_+a*y+l*R,s[3]=o*m+a*S+l*w,s[6]=o*p+a*v+l*E,s[1]=c*_+u*y+h*R,s[4]=c*m+u*S+h*w,s[7]=c*p+u*v+h*E,s[2]=f*_+d*y+g*R,s[5]=f*m+d*S+g*w,s[8]=f*p+d*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fc.makeScale(t,e)),this}rotate(t){return this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new ee;function Nm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hv(){const r=da("canvas");return r.style.display="block",r}const Hf={};function Io(r){r in Hf||(Hf[r]=!0,console.warn(r))}function fv(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function dv(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pv(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ue={enabled:!0,workingColorSpace:co,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(r.r=Xs(r.r),r.g=Xs(r.g),r.b=Xs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?Kl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Vf=[.64,.33,.3,.6,.15,.06],Gf=[.2126,.7152,.0722],Wf=[.3127,.329],Xf=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[co]:{primaries:Vf,whitePoint:Wf,transfer:Kl,toXYZ:Xf,fromXYZ:Yf,luminanceCoefficients:Gf,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:Vf,whitePoint:Wf,transfer:ye,toXYZ:Xf,fromXYZ:Yf,luminanceCoefficients:Gf,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}});let hs;class mv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=da("canvas")),hs.width=t.width,hs.height=t.height;const n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=da("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gv=0;class Om{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(dc(i[o].image)):s.push(dc(i[o]))}else s=dc(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function dc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _v=0;class sn extends uo{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,n=Vr,i=Vr,s=Ti,o=Gr,a=mi,l=Zi,c=sn.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=os(),this.name="",this.source=new Om(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fl:t.x=t.x-Math.floor(t.x);break;case Vr:t.x=t.x<0?0:1;break;case Tu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fl:t.y=t.y-Math.floor(t.y);break;case Vr:t.y=t.y<0?0:1;break;case Tu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=bm;sn.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(d+1)/2,R=(p+1)/2,w=(u+f)/4,E=(h+_)/4,A=(g+m)/4;return S>v&&S>R?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=E/n):v>R?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=A/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=A/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vv extends uo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Om(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends vv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fm extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xv extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),w=Math.atan2(R,p*y);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const v=a*y;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new z,qf=new Sa;class as{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),Ca.subVectors(this.max,go),fs.subVectors(t.a,go),ds.subVectors(t.b,go),ps.subVectors(t.c,go),ji.subVectors(ds,fs),Qi.subVectors(ps,ds),Cr.subVectors(fs,ps);let e=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-Cr.z,Cr.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,Cr.z,0,-Cr.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-Cr.y,Cr.x,0];return!mc(e,fs,ds,ps,Ca)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,fs,ds,ps,Ca))?!1:(Ra.crossVectors(ji,Qi),e=[Ra.x,Ra.y,Ra.z],mc(e,fs,ds,ps,Ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ui=[new z,new z,new z,new z,new z,new z,new z,new z],li=new z,Aa=new as,fs=new z,ds=new z,ps=new z,ji=new z,Qi=new z,Cr=new z,go=new z,Ca=new z,Ra=new z,Rr=new z;function mc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Rr.fromArray(r,s);const a=i.x*Math.abs(Rr.x)+i.y*Math.abs(Rr.y)+i.z*Math.abs(Rr.z),l=t.dot(Rr),c=e.dot(Rr),u=n.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yv=new as,_o=new z,gc=new z;class ba{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);const e=_o.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(_o,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(gc)),this.expandByPoint(_o.copy(t.center).sub(gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new z,_c=new z,Pa=new z,tr=new z,vc=new z,La=new z,xc=new z;class Mv{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_c.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),tr.copy(this.origin).sub(_c);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Pa),a=tr.dot(this.direction),l=-tr.dot(Pa),c=tr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_c).addScaledVector(Pa,f),d}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);const n=Ni.dot(this.direction),i=Ni.dot(Ni)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,i,s){vc.subVectors(e,t),La.subVectors(n,t),xc.crossVectors(vc,La);let o=this.direction.dot(xc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,t);const l=a*this.direction.dot(La.crossVectors(tr,La));if(l<0)return null;const c=a*this.direction.dot(vc.cross(tr));if(c<0||l+c>o)return null;const u=-a*tr.dot(xc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ms.setFromMatrixColumn(t,0).length(),s=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sv,t,bv)}lookAt(t,e,n){const i=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),er.crossVectors(n,Nn),er.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),er.crossVectors(n,Nn)),er.normalize(),Da.crossVectors(Nn,er),i[0]=er.x,i[4]=Da.x,i[8]=Nn.x,i[1]=er.y,i[5]=Da.y,i[9]=Nn.y,i[2]=er.z,i[6]=Da.z,i[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],S=n[7],v=n[11],R=n[15],w=i[0],E=i[4],A=i[8],M=i[12],x=i[1],L=i[5],U=i[9],N=i[13],G=i[2],k=i[6],B=i[10],F=i[14],I=i[3],X=i[7],C=i[11],K=i[15];return s[0]=o*w+a*x+l*G+c*I,s[4]=o*E+a*L+l*k+c*X,s[8]=o*A+a*U+l*B+c*C,s[12]=o*M+a*N+l*F+c*K,s[1]=u*w+h*x+f*G+d*I,s[5]=u*E+h*L+f*k+d*X,s[9]=u*A+h*U+f*B+d*C,s[13]=u*M+h*N+f*F+d*K,s[2]=g*w+_*x+m*G+p*I,s[6]=g*E+_*L+m*k+p*X,s[10]=g*A+_*U+m*B+p*C,s[14]=g*M+_*N+m*F+p*K,s[3]=y*w+S*x+v*G+R*I,s[7]=y*E+S*L+v*k+R*X,s[11]=y*A+S*U+v*B+R*C,s[15]=y*M+S*N+v*F+R*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,S=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,R=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,w=e*y+n*S+i*v+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=y*E,t[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*E,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*E,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,t[4]=S*E,t[5]=(u*m*s-g*f*s+g*i*d-e*m*d-u*i*p+e*f*p)*E,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*E,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*d+e*l*d)*E,t[8]=v*E,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*p-e*h*p)*E,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*E,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*E,t[12]=R*E,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*E,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*E,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,y=l*c,S=l*u,v=l*h,R=n.x,w=n.y,E=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+v)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+S)*E,i[9]=(m-y)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ms.set(i[0],i[1],i[2]).length();const o=ms.set(i[4],i[5],i[6]).length(),a=ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ci.copy(this);const c=1/s,u=1/o,h=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,e.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Gi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===Gi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===zl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Gi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,d=(n+i)*u;let g,_;if(a===Gi)g=(o+s)*h,_=-2*h;else if(a===zl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ms=new z,ci=new we,Sv=new z(0,0,0),bv=new z(1,1,1),er=new z,Da=new z,Nn=new z,$f=new we,Zf=new Sa;class si{constructor(t=0,e=0,n=0,i=si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $f.makeRotationFromQuaternion(t),this.setFromRotationMatrix($f,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zf.setFromEuler(this),this.setFromQuaternion(Zf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class zm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ev=0;const Kf=new z,gs=new Sa,Oi=new we,Ia=new z,vo=new z,Tv=new z,wv=new Sa,Jf=new z(1,0,0),jf=new z(0,1,0),Qf=new z(0,0,1),td={type:"added"},Av={type:"removed"},_s={type:"childadded",child:null},yc={type:"childremoved",child:null};class on extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new z,e=new si,n=new Sa,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new ee}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Jf,t)}rotateY(t){return this.rotateOnAxis(jf,t)}rotateZ(t){return this.rotateOnAxis(Qf,t)}translateOnAxis(t,e){return Kf.copy(t).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jf,t)}translateY(t){return this.translateOnAxis(jf,t)}translateZ(t){return this.translateOnAxis(Qf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ia.copy(t):Ia.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(vo,Ia,this.up):Oi.lookAt(Ia,vo,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(Oi),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(td),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Av),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(td),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,t,Tv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,wv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}on.DEFAULT_UP=new z(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new z,Fi=new z,Mc=new z,zi=new z,vs=new z,xs=new z,ed=new z,Sc=new z,bc=new z,Ec=new z,Tc=new Me,wc=new Me,Ac=new Me;class pi{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ui.subVectors(t,e),i.cross(ui);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ui.subVectors(i,e),Fi.subVectors(n,e),Mc.subVectors(t,e);const o=ui.dot(ui),a=ui.dot(Fi),l=ui.dot(Mc),c=Fi.dot(Fi),u=Fi.dot(Mc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Tc.setScalar(0),wc.setScalar(0),Ac.setScalar(0),Tc.fromBufferAttribute(t,e),wc.fromBufferAttribute(t,n),Ac.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Tc,s.x),o.addScaledVector(wc,s.y),o.addScaledVector(Ac,s.z),o}static isFrontFacing(t,e,n,i){return ui.subVectors(n,e),Fi.subVectors(t,e),ui.cross(Fi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ui.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return pi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;vs.subVectors(i,n),xs.subVectors(s,n),Sc.subVectors(t,n);const l=vs.dot(Sc),c=xs.dot(Sc);if(l<=0&&c<=0)return e.copy(n);bc.subVectors(t,i);const u=vs.dot(bc),h=xs.dot(bc);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(vs,o);Ec.subVectors(t,s);const d=vs.dot(Ec),g=xs.dot(Ec);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(xs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ed.subVectors(s,i),a=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(ed,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(vs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Cc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=Wh(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Cc(o,s,t+1/3),this.g=Cc(o,s,t),this.b=Cc(o,s,t-1/3)}return ue.toWorkingColorSpace(this,i),this}setStyle(t,e=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const n=Bm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return ue.fromWorkingColorSpace(ln.copy(this),t),Math.round(tn(ln.r*255,0,255))*65536+Math.round(tn(ln.g*255,0,255))*256+Math.round(tn(ln.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,s=ln.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Sn){ue.fromWorkingColorSpace(ln.copy(this),t);const e=ln.r,n=ln.g,i=ln.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(Ua);const n=Wo(nr.h,Ua.h,e),i=Wo(nr.s,Ua.s,e),s=Wo(nr.l,Ua.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Jt;Jt.NAMES=Bm;let Cv=0;class Ea extends uo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=os(),this.name="",this.blending=Gs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pu&&(n.blendSrc=this.blendSrc),this.blendDst!==mu&&(n.blendDst=this.blendDst),this.blendEquation!==Br&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Of&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oo extends Ea{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new z,Na=new bt;class gi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ff,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(t),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ff&&(t.usage=this.usage),t}}class km extends gi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hm extends gi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends gi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rv=0;const Jn=new we,Rc=new on,ys=new z,On=new as,xo=new as,Je=new z;class oi extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nm(t)?Hm:km)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Rc.lookAt(t),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(On.min,xo.min),On.expandByPoint(Je),Je.addVectors(On.max,xo.max),On.expandByPoint(Je)):(On.expandByPoint(xo.min),On.expandByPoint(xo.max))}On.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Je.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(t,c),Je.add(ys)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new z,l[A]=new z;const c=new z,u=new z,h=new z,f=new bt,d=new bt,g=new bt,_=new z,m=new z;function p(A,M,x){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[A].add(_),a[M].add(_),a[x].add(_),l[A].add(m),l[M].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,M=y.length;A<M;++A){const x=y[A],L=x.start,U=x.count;for(let N=L,G=L+U;N<G;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new z,v=new z,R=new z,w=new z;function E(A){R.fromBufferAttribute(i,A),w.copy(R);const M=a[A];S.copy(M),S.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(w,M);const L=v.dot(l[A])<0?-1:1;o.setXYZW(A,S.x,S.y,S.z,L)}for(let A=0,M=y.length;A<M;++A){const x=y[A],L=x.start,U=x.count;for(let N=L,G=L+U;N<G;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new gi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new we,Pr=new Mv,Oa=new ba,id=new z,Fa=new z,za=new z,Ba=new z,Pc=new z,ka=new z,rd=new z,Ha=new z;class ae extends on{constructor(t=new oi,e=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Pc.fromBufferAttribute(h,t),o?ka.addScaledVector(Pc,u):ka.addScaledVector(Pc.sub(e),u))}e.add(ka)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(Oa.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Oa,id)===null||Pr.origin.distanceToSquared(id)>(t.far-t.near)**2))&&(nd.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(nd),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,R=S;v<R;v+=3){const w=a.getX(v),E=a.getX(v+1),A=a.getX(v+2);i=Va(this,p,t,n,c,u,h,w,E,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=Va(this,o,t,n,c,u,h,y,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,R=S;v<R;v+=3){const w=v,E=v+1,A=v+2;i=Va(this,p,t,n,c,u,h,w,E,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,S=m+1,v=m+2;i=Va(this,o,t,n,c,u,h,y,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Pv(r,t,e,n,i,s,o,a){let l;if(t.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Mr,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ha);return c<e.near||c>e.far?null:{distance:c,point:Ha.clone(),object:r}}function Va(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Fa),r.getVertexPosition(l,za),r.getVertexPosition(c,Ba);const u=Pv(r,t,e,n,Fa,za,Ba,rd);if(u){const h=new z;pi.getBarycoord(rd,Fa,za,Ba,h),i&&(u.uv=pi.getInterpolatedAttribute(i,a,l,c,h,new bt)),s&&(u.uv1=pi.getInterpolatedAttribute(s,a,l,c,h,new bt)),o&&(u.normal=pi.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};pi.getNormal(Fa,za,Ba,f.normal),u.face=f,u.barycoord=h}return u}class Tr extends oi{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2));function g(_,m,p,y,S,v,R,w,E,A,M){const x=v/E,L=R/A,U=v/2,N=R/2,G=w/2,k=E+1,B=A+1;let F=0,I=0;const X=new z;for(let C=0;C<B;C++){const K=C*L-N;for(let at=0;at<k;at++){const gt=at*x-U;X[_]=gt*y,X[m]=K*S,X[p]=G,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=w>0?1:-1,u.push(X.x,X.y,X.z),h.push(at/E),h.push(1-C/A),F+=1}}for(let C=0;C<A;C++)for(let K=0;K<E;K++){const at=f+K+k*C,gt=f+K+k*(C+1),Y=f+(K+1)+k*(C+1),et=f+(K+1)+k*C;l.push(at,gt,et),l.push(gt,Y,et),I+=6}a.addGroup(d,I,M),d+=I,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function vn(r){const t={};for(let e=0;e<r.length;e++){const n=ao(r[e]);for(const i in n)t[i]=n[i]}return t}function Lv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Vm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const Dv={clone:ao,merge:vn};var Iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Ea{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iv,this.fragmentShader=Uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=Lv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gm extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new z,sd=new bt,od=new bt;class kn extends Gm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ir.x,ir.y).multiplyScalar(-t/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-t/ir.z)}getViewSize(t,e){return this.getViewBounds(t,sd,od),e.subVectors(od,sd)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Go*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,Ss=1;class Nv extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kn(Ms,Ss,t,e);i.layers=this.layers,this.add(i);const s=new kn(Ms,Ss,t,e);s.layers=this.layers,this.add(s);const o=new kn(Ms,Ss,t,e);o.layers=this.layers,this.add(o);const a=new kn(Ms,Ss,t,e);a.layers=this.layers,this.add(a);const l=new kn(Ms,Ss,t,e);l.layers=this.layers,this.add(l);const c=new kn(Ms,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wm extends sn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:no,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ov extends Qr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wm(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Tr(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:mr});s.uniforms.tEquirect.value=e;const o=new ae(i,s),a=e.minFilter;return e.minFilter===Gr&&(e.minFilter=Ti),new Nv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Lc=new z,Fv=new z,zv=new ee;class Nr{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Lc.subVectors(n,e).cross(Fv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Lc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zv.getNormalMatrix(t),i=this.coplanarPoint(Lc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new ba,Ga=new z;class Xh{constructor(t=new Nr,e=new Nr,n=new Nr,i=new Nr,s=new Nr,o=new Nr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-d,v-p).normalize(),n[1].setComponents(l+s,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+u,m+g,v+y).normalize(),n[3].setComponents(l-o,f-u,m-g,v-y).normalize(),n[4].setComponents(l-a,f-h,m-_,v-S).normalize(),e===Gi)n[5].setComponents(l+a,f+h,m+_,v+S).normalize();else if(e===zl)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(t){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ga.x=i.normal.x>0?t.max.x:t.min.x,Ga.y=i.normal.y>0?t.max.y:t.min.y,Ga.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Bv(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class ts extends oi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let S=0;S<c;S++){const v=S*h-s;g.push(v,-y,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const S=y+c*p,v=y+c*(p+1),R=y+1+c*(p+1),w=y+1+c*p;d.push(S,v,w),d.push(v,R,w)}this.setIndex(d),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.widthSegments,t.heightSegments)}}var kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$v=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ux=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",_x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ux=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ly=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,py=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,my=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,by=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_M=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:kv,alphahash_pars_fragment:Hv,alphamap_fragment:Vv,alphamap_pars_fragment:Gv,alphatest_fragment:Wv,alphatest_pars_fragment:Xv,aomap_fragment:Yv,aomap_pars_fragment:qv,batching_pars_vertex:$v,batching_vertex:Zv,begin_vertex:Kv,beginnormal_vertex:Jv,bsdfs:jv,iridescence_fragment:Qv,bumpmap_pars_fragment:tx,clipping_planes_fragment:ex,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:rx,color_fragment:sx,color_pars_fragment:ox,color_pars_vertex:ax,color_vertex:lx,common:cx,cube_uv_reflection_fragment:ux,defaultnormal_vertex:hx,displacementmap_pars_vertex:fx,displacementmap_vertex:dx,emissivemap_fragment:px,emissivemap_pars_fragment:mx,colorspace_fragment:gx,colorspace_pars_fragment:_x,envmap_fragment:vx,envmap_common_pars_fragment:xx,envmap_pars_fragment:yx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Dx,envmap_vertex:Sx,fog_vertex:bx,fog_pars_vertex:Ex,fog_fragment:Tx,fog_pars_fragment:wx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:Cx,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Px,lights_pars_begin:Lx,lights_toon_fragment:Ix,lights_toon_pars_fragment:Ux,lights_phong_fragment:Nx,lights_phong_pars_fragment:Ox,lights_physical_fragment:Fx,lights_physical_pars_fragment:zx,lights_fragment_begin:Bx,lights_fragment_maps:kx,lights_fragment_end:Hx,logdepthbuf_fragment:Vx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:Yx,map_pars_fragment:qx,map_particle_fragment:$x,map_particle_pars_fragment:Zx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:Jx,morphinstance_vertex:jx,morphcolor_vertex:Qx,morphnormal_vertex:ty,morphtarget_pars_vertex:ey,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:ry,normal_pars_fragment:sy,normal_pars_vertex:oy,normal_vertex:ay,normalmap_pars_fragment:ly,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:uy,clearcoat_pars_fragment:hy,iridescence_pars_fragment:fy,opaque_fragment:dy,packing:py,premultiplied_alpha_fragment:my,project_vertex:gy,dithering_fragment:_y,dithering_pars_fragment:vy,roughnessmap_fragment:xy,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:My,shadowmap_pars_vertex:Sy,shadowmap_vertex:by,shadowmask_pars_fragment:Ey,skinbase_vertex:Ty,skinning_pars_vertex:wy,skinning_vertex:Ay,skinnormal_vertex:Cy,specularmap_fragment:Ry,specularmap_pars_fragment:Py,tonemapping_fragment:Ly,tonemapping_pars_fragment:Dy,transmission_fragment:Iy,transmission_pars_fragment:Uy,uv_pars_fragment:Ny,uv_pars_vertex:Oy,uv_vertex:Fy,worldpos_vertex:zy,background_vert:By,background_frag:ky,backgroundCube_vert:Hy,backgroundCube_frag:Vy,cube_vert:Gy,cube_frag:Wy,depth_vert:Xy,depth_frag:Yy,distanceRGBA_vert:qy,distanceRGBA_frag:$y,equirect_vert:Zy,equirect_frag:Ky,linedashed_vert:Jy,linedashed_frag:jy,meshbasic_vert:Qy,meshbasic_frag:tM,meshlambert_vert:eM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:rM,meshnormal_vert:sM,meshnormal_frag:oM,meshphong_vert:aM,meshphong_frag:lM,meshphysical_vert:cM,meshphysical_frag:uM,meshtoon_vert:hM,meshtoon_frag:fM,points_vert:dM,points_frag:pM,shadow_vert:mM,shadow_frag:gM,sprite_vert:_M,sprite_frag:vM},wt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Si={basic:{uniforms:vn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:vn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:vn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:vn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:vn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:vn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:vn([wt.points,wt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:vn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:vn([wt.common,wt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:vn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:vn([wt.sprite,wt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:vn([wt.common,wt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:vn([wt.lights,wt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Si.physical={uniforms:vn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Wa={r:0,b:0,g:0},Dr=new si,xM=new we;function yM(r,t,e,n,i,s,o){const a=new Jt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function _(y){let S=!1;const v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),S=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===Zl)?(u===void 0&&(u=new ae(new Tr(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:ao(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Dr.copy(S.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xM.makeRotationFromEuler(Dr)),u.material.toneMapped=ue.getTransfer(v.colorSpace)!==ye,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ae(new ts(2,2),new Sr({name:"BackgroundMaterial",uniforms:ao(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ue.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(Wa,Vm(r)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function MM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(x,L,U,N,G){let k=!1;const B=h(N,U,L);s!==B&&(s=B,c(s.object)),k=d(x,N,U,G),k&&g(x,N,U,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(x,L,U,N),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,L,U){const N=U.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let k=G[L.id];k===void 0&&(k={},G[L.id]=k);let B=k[N];return B===void 0&&(B=f(l()),k[N]=B),B}function f(x){const L=[],U=[],N=[];for(let G=0;G<e;G++)L[G]=0,U[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:N,object:x,attributes:{},index:null}}function d(x,L,U,N){const G=s.attributes,k=L.attributes;let B=0;const F=U.getAttributes();for(const I in F)if(F[I].location>=0){const C=G[I];let K=k[I];if(K===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),C===void 0||C.attribute!==K||K&&C.data!==K.data)return!0;B++}return s.attributesNum!==B||s.index!==N}function g(x,L,U,N){const G={},k=L.attributes;let B=0;const F=U.getAttributes();for(const I in F)if(F[I].location>=0){let C=k[I];C===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(C=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(C=x.instanceColor));const K={};K.attribute=C,C&&C.data&&(K.data=C.data),G[I]=K,B++}s.attributes=G,s.attributesNum=B,s.index=N}function _(){const x=s.newAttributes;for(let L=0,U=x.length;L<U;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){const U=s.newAttributes,N=s.enabledAttributes,G=s.attributeDivisors;U[x]=1,N[x]===0&&(r.enableVertexAttribArray(x),N[x]=1),G[x]!==L&&(r.vertexAttribDivisor(x,L),G[x]=L)}function y(){const x=s.newAttributes,L=s.enabledAttributes;for(let U=0,N=L.length;U<N;U++)L[U]!==x[U]&&(r.disableVertexAttribArray(U),L[U]=0)}function S(x,L,U,N,G,k,B){B===!0?r.vertexAttribIPointer(x,L,U,G,k):r.vertexAttribPointer(x,L,U,N,G,k)}function v(x,L,U,N){_();const G=N.attributes,k=U.getAttributes(),B=L.defaultAttributeValues;for(const F in k){const I=k[F];if(I.location>=0){let X=G[F];if(X===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),X!==void 0){const C=X.normalized,K=X.itemSize,at=t.get(X);if(at===void 0)continue;const gt=at.buffer,Y=at.type,et=at.bytesPerElement,ft=Y===r.INT||Y===r.UNSIGNED_INT||X.gpuType===Fh;if(X.isInterleavedBufferAttribute){const ot=X.data,At=ot.stride,Ut=X.offset;if(ot.isInstancedInterleavedBuffer){for(let Bt=0;Bt<I.locationSize;Bt++)p(I.location+Bt,ot.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Bt=0;Bt<I.locationSize;Bt++)m(I.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Bt=0;Bt<I.locationSize;Bt++)S(I.location+Bt,K/I.locationSize,Y,C,At*et,(Ut+K/I.locationSize*Bt)*et,ft)}else{if(X.isInstancedBufferAttribute){for(let ot=0;ot<I.locationSize;ot++)p(I.location+ot,X.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ot=0;ot<I.locationSize;ot++)m(I.location+ot);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let ot=0;ot<I.locationSize;ot++)S(I.location+ot,K/I.locationSize,Y,C,K*et,K/I.locationSize*ot*et,ft)}}else if(B!==void 0){const C=B[F];if(C!==void 0)switch(C.length){case 2:r.vertexAttrib2fv(I.location,C);break;case 3:r.vertexAttrib3fv(I.location,C);break;case 4:r.vertexAttrib4fv(I.location,C);break;default:r.vertexAttrib1fv(I.location,C)}}}}y()}function R(){A();for(const x in n){const L=n[x];for(const U in L){const N=L[U];for(const G in N)u(N[G].object),delete N[G];delete L[U]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const U in L){const N=L[U];for(const G in N)u(N[G].object),delete N[G];delete L[U]}delete n[x.id]}function E(x){for(const L in n){const U=n[L];if(U[x.id]===void 0)continue;const N=U[x.id];for(const G in N)u(N[G].object),delete N[G];delete U[x.id]}}function A(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function SM(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==mi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Zi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wi&&!A)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function EM(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Nr,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,S=y*4;let v=p.clippingState||null;l.value=v,v=u(g,f,S,d);for(let R=0;R!==S;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==_;++S,v+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function TM(r){let t=new WeakMap;function e(o,a){return a===bu?o.mapping=no:a===Eu&&(o.mapping=io),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bu||a===Eu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ov(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ym extends Gm{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ns=4,ad=[.125,.215,.35,.446,.526,.582],kr=20,Dc=new Ym,ld=new Jt;let Ic=null,Uc=0,Nc=0,Oc=!1;const Or=(1+Math.sqrt(5))/2,bs=1/Or,cd=[new z(-Or,bs,0),new z(Or,bs,0),new z(-bs,0,Or),new z(bs,0,Or),new z(0,Or,-bs),new z(0,Or,bs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ic=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ic,Uc,Nc),this._renderer.xr.enabled=Oc,t.scissorTest=!1,Xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===no||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ic=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ma,format:mi,colorSpace:co,depthBuffer:!1},i=ud(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wM(s)),this._blurMaterial=AM(s,t,e)}return i}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,Dc)}_sceneToCubeUV(t,e,n,i){const a=new kn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ld),u.toneMapping=gr,u.autoClear=!1;const d=new oo({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new ae(new Tr,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(ld),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Xa(i,y*S,p>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===no||t.mapping===io;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Xa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Dc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cd[(i-s-1)%cd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ae(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*kr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):kr;m>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);const p=[];let y=0;for(let E=0;E<kr;++E){const A=E/_,M=Math.exp(-A*A/2);p.push(M),E===0?y+=M:E<m&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const v=this._sizeLods[i],R=3*v*(i>S-Ns?i-S+Ns:0),w=4*(this._cubeSize-v);Xa(e,R,w,3*v,2*v),l.setRenderTarget(e),l.render(h,Dc)}}function wM(r){const t=[],e=[],n=[];let i=r;const s=r-Ns+1+ad.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ns?l=ad[o-r+Ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),S=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,A=w>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];y.set(M,_*g*w),S.set(f,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const R=new oi;R.setAttribute("position",new gi(y,_)),R.setAttribute("uv",new gi(S,m)),R.setAttribute("faceIndex",new gi(v,p)),t.push(R),i>Ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ud(r,t,e){const n=new Qr(r,t,e);return n.texture.mapping=Zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function AM(r,t,e){const n=new Float32Array(kr),i=new z(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function hd(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function fd(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bu||l===Eu,u=l===no||l===io;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ju(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new ju(r)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function RM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Io("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function PM(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let S=0,v=y.length;S<v;S+=3){const R=y[S+0],w=y[S+1],E=y[S+2];f.push(R,w,w,E,E,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const R=S+0,w=S+1,E=S+2;f.push(R,w,w,E,E,R)}}else return;const m=new(Nm(f)?Hm:km)(f,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function LM(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function DM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function IM(r,t,e){const n=new WeakMap,i=new Me;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*w*4*h),A=new Fm(E,R,w,h);A.type=wi,A.needsUpdate=!0;const M=v*4;for(let L=0;L<h;L++){const U=p[L],N=y[L],G=S[L],k=R*w*4*L;for(let B=0;B<U.count;B++){const F=B*M;g===!0&&(i.fromBufferAttribute(U,B),E[k+F+0]=i.x,E[k+F+1]=i.y,E[k+F+2]=i.z,E[k+F+3]=0),_===!0&&(i.fromBufferAttribute(N,B),E[k+F+4]=i.x,E[k+F+5]=i.y,E[k+F+6]=i.z,E[k+F+7]=0),m===!0&&(i.fromBufferAttribute(G,B),E[k+F+8]=i.x,E[k+F+9]=i.y,E[k+F+10]=i.z,E[k+F+11]=G.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new bt(R,w)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function UM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class qm extends sn{constructor(t,e,n,i,s,o,a,l,c,u=Ws){if(u!==Ws&&u!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ws&&(n=jr),n===void 0&&u===so&&(n=ro),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $m=new sn,dd=new qm(1,1),Zm=new Fm,Km=new xv,Jm=new Wm,pd=[],md=[],gd=new Float32Array(16),_d=new Float32Array(9),vd=new Float32Array(4);function ho(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=pd[i];if(s===void 0&&(s=new Float32Array(i),pd[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Jl(r,t){let e=md[t];e===void 0&&(e=new Int32Array(t),md[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function NM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function OM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2fv(this.addr,t),Ke(e,t)}}function FM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;r.uniform3fv(this.addr,t),Ke(e,t)}}function zM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4fv(this.addr,t),Ke(e,t)}}function BM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;vd.set(n),r.uniformMatrix2fv(this.addr,!1,vd),Ke(e,n)}}function kM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;_d.set(n),r.uniformMatrix3fv(this.addr,!1,_d),Ke(e,n)}}function HM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;gd.set(n),r.uniformMatrix4fv(this.addr,!1,gd),Ke(e,n)}}function VM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function GM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2iv(this.addr,t),Ke(e,t)}}function WM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3iv(this.addr,t),Ke(e,t)}}function XM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4iv(this.addr,t),Ke(e,t)}}function YM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2uiv(this.addr,t),Ke(e,t)}}function $M(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3uiv(this.addr,t),Ke(e,t)}}function ZM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4uiv(this.addr,t),Ke(e,t)}}function KM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(dd.compareFunction=Um,s=dd):s=$m,e.setTexture2D(t||s,i)}function JM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Km,i)}function jM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Jm,i)}function QM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Zm,i)}function tS(r){switch(r){case 5126:return NM;case 35664:return OM;case 35665:return FM;case 35666:return zM;case 35674:return BM;case 35675:return kM;case 35676:return HM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return YM;case 36294:return qM;case 36295:return $M;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return QM}}function eS(r,t){r.uniform1fv(this.addr,t)}function nS(r,t){const e=ho(t,this.size,2);r.uniform2fv(this.addr,e)}function iS(r,t){const e=ho(t,this.size,3);r.uniform3fv(this.addr,e)}function rS(r,t){const e=ho(t,this.size,4);r.uniform4fv(this.addr,e)}function sS(r,t){const e=ho(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function oS(r,t){const e=ho(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function aS(r,t){const e=ho(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function lS(r,t){r.uniform1iv(this.addr,t)}function cS(r,t){r.uniform2iv(this.addr,t)}function uS(r,t){r.uniform3iv(this.addr,t)}function hS(r,t){r.uniform4iv(this.addr,t)}function fS(r,t){r.uniform1uiv(this.addr,t)}function dS(r,t){r.uniform2uiv(this.addr,t)}function pS(r,t){r.uniform3uiv(this.addr,t)}function mS(r,t){r.uniform4uiv(this.addr,t)}function gS(r,t,e){const n=this.cache,i=t.length,s=Jl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||$m,s[o])}function _S(r,t,e){const n=this.cache,i=t.length,s=Jl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Km,s[o])}function vS(r,t,e){const n=this.cache,i=t.length,s=Jl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Jm,s[o])}function xS(r,t,e){const n=this.cache,i=t.length,s=Jl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Zm,s[o])}function yS(r){switch(r){case 5126:return eS;case 35664:return nS;case 35665:return iS;case 35666:return rS;case 35674:return sS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return uS;case 35669:case 35673:return hS;case 5125:return fS;case 36294:return dS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return _S;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return xS}}class MS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tS(e.type)}}class SS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yS(e.type)}}class bS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function xd(r,t){r.seq.push(t),r.map[t.id]=t}function ES(r,t,e){const n=r.name,i=n.length;for(Fc.lastIndex=0;;){const s=Fc.exec(n),o=Fc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){xd(e,c===void 0?new MS(a,r,t):new SS(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new bS(a),xd(e,h)),e=h}}}class yl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);ES(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function yd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const TS=37297;let wS=0;function AS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Md=new ee;function CS(r){ue._getMatrix(Md,ue.workingColorSpace,r);const t=`mat3( ${Md.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(r)){case Kl:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Sd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+AS(r.getShaderSource(t),o)}else return i}function RS(r,t){const e=CS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function PS(r,t){let e;switch(t){case D0:e="Linear";break;case I0:e="Reinhard";break;case U0:e="Cineon";break;case Sm:e="ACESFilmic";break;case O0:e="AgX";break;case F0:e="Neutral";break;case N0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ya=new z;function LS(){ue.getLuminanceCoefficients(Ya);const r=Ya.x.toFixed(4),t=Ya.y.toFixed(4),e=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function IS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function US(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Uo(r){return r!==""}function bd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ed(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(r){return r.replace(NS,FS)}const OS=new Map;function FS(r,t){let e=ne[t];if(e===void 0){const n=OS.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qu(e)}const zS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(r){return r.replace(zS,BS)}function BS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function wd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ym?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===h0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function HS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case no:case io:t="ENVMAP_TYPE_CUBE";break;case Zl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case io:t="ENVMAP_MODE_REFRACTION";break}return t}function GS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mm:t="ENVMAP_BLENDING_MULTIPLY";break;case P0:t="ENVMAP_BLENDING_MIX";break;case L0:t="ENVMAP_BLENDING_ADD";break}return t}function WS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function XS(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=kS(e),c=HS(e),u=VS(e),h=GS(e),f=WS(e),d=DS(e),g=IS(s),_=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Uo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Uo).join(`
`),p.length>0&&(p+=`
`)):(m=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),p=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gr?"#define TONE_MAPPING":"",e.toneMapping!==gr?ne.tonemapping_pars_fragment:"",e.toneMapping!==gr?PS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,RS("linearToOutputTexel",e.outputColorSpace),LS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Uo).join(`
`)),o=Qu(o),o=bd(o,e),o=Ed(o,e),a=Qu(a),a=bd(a,e),a=Ed(a,e),o=Td(o),a=Td(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+o,v=y+p+a,R=yd(i,i.VERTEX_SHADER,S),w=yd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(L){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(R).trim(),G=i.getShaderInfoLog(w).trim();let k=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,w);else{const F=Sd(i,R,"vertex"),I=Sd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+F+`
`+I)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||G==="")&&(B=!1);B&&(L.diagnostics={runnable:k,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(R),i.deleteShader(w),A=new yl(i,_),M=US(i,_)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,TS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let YS=0;class qS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $S(t),e.set(t,n)),n}}class $S{constructor(t){this.id=YS++,this.code=t,this.usedTimes=0}}function ZS(r,t,e,n,i,s,o){const a=new zm,l=new qS,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,L,U,N){const G=U.fog,k=N.geometry,B=M.isMeshStandardMaterial?U.environment:null,F=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),I=F&&F.mapping===Zl?F.image.height:null,X=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const C=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,K=C!==void 0?C.length:0;let at=0;k.morphAttributes.position!==void 0&&(at=1),k.morphAttributes.normal!==void 0&&(at=2),k.morphAttributes.color!==void 0&&(at=3);let gt,Y,et,ft;if(X){const Rt=Si[X];gt=Rt.vertexShader,Y=Rt.fragmentShader}else gt=M.vertexShader,Y=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),ft=l.getFragmentShaderID(M);const ot=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,Bt=N.isBatchedMesh===!0,Gt=!!M.map,nt=!!M.matcap,it=!!F,D=!!M.aoMap,Ct=!!M.lightMap,lt=!!M.bumpMap,H=!!M.normalMap,ut=!!M.displacementMap,Ft=!!M.emissiveMap,Tt=!!M.metalnessMap,P=!!M.roughnessMap,b=M.anisotropy>0,q=M.clearcoat>0,Q=M.dispersion>0,rt=M.iridescence>0,tt=M.sheen>0,_t=M.transmission>0,pt=b&&!!M.anisotropyMap,yt=q&&!!M.clearcoatMap,$t=q&&!!M.clearcoatNormalMap,ct=q&&!!M.clearcoatRoughnessMap,mt=rt&&!!M.iridescenceMap,Vt=rt&&!!M.iridescenceThicknessMap,Ht=tt&&!!M.sheenColorMap,Pt=tt&&!!M.sheenRoughnessMap,Qt=!!M.specularMap,Wt=!!M.specularColorMap,ce=!!M.specularIntensityMap,O=_t&&!!M.transmissionMap,xt=_t&&!!M.thicknessMap,J=!!M.gradientMap,st=!!M.alphaMap,vt=M.alphaTest>0,Mt=!!M.alphaHash,Xt=!!M.extensions;let he=gr;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(he=r.toneMapping);const Oe={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:gt,fragmentShader:Y,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Bt,batchingColor:Bt&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:co,alphaToCoverage:!!M.alphaToCoverage,map:Gt,matcap:nt,envMap:it,envMapMode:it&&F.mapping,envMapCubeUVHeight:I,aoMap:D,lightMap:Ct,bumpMap:lt,normalMap:H,displacementMap:f&&ut,emissiveMap:Ft,normalMapObjectSpace:H&&M.normalMapType===H0,normalMapTangentSpace:H&&M.normalMapType===Im,metalnessMap:Tt,roughnessMap:P,anisotropy:b,anisotropyMap:pt,clearcoat:q,clearcoatMap:yt,clearcoatNormalMap:$t,clearcoatRoughnessMap:ct,dispersion:Q,iridescence:rt,iridescenceMap:mt,iridescenceThicknessMap:Vt,sheen:tt,sheenColorMap:Ht,sheenRoughnessMap:Pt,specularMap:Qt,specularColorMap:Wt,specularIntensityMap:ce,transmission:_t,transmissionMap:O,thicknessMap:xt,gradientMap:J,opaque:M.transparent===!1&&M.blending===Gs&&M.alphaToCoverage===!1,alphaMap:st,alphaTest:vt,alphaHash:Mt,combine:M.combine,mapUv:Gt&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:Ct&&_(M.lightMap.channel),bumpMapUv:lt&&_(M.bumpMap.channel),normalMapUv:H&&_(M.normalMap.channel),displacementMapUv:ut&&_(M.displacementMap.channel),emissiveMapUv:Ft&&_(M.emissiveMap.channel),metalnessMapUv:Tt&&_(M.metalnessMap.channel),roughnessMapUv:P&&_(M.roughnessMap.channel),anisotropyMapUv:pt&&_(M.anisotropyMap.channel),clearcoatMapUv:yt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(M.sheenRoughnessMap.channel),specularMapUv:Qt&&_(M.specularMap.channel),specularColorMapUv:Wt&&_(M.specularColorMap.channel),specularIntensityMapUv:ce&&_(M.specularIntensityMap.channel),transmissionMapUv:O&&_(M.transmissionMap.channel),thicknessMapUv:xt&&_(M.thicknessMap.channel),alphaMapUv:st&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(H||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Gt||st),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:At,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:at,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:he,decodeVideoTexture:Gt&&M.map.isVideoTexture===!0&&ue.getTransfer(M.map.colorSpace)===ye,decodeVideoTextureEmissive:Ft&&M.emissiveMap.isVideoTexture===!0&&ue.getTransfer(M.emissiveMap.colorSpace)===ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===di,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&M.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)x.push(L),x.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(x,M),S(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function y(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let L;if(x){const U=Si[x];L=Dv.clone(U.uniforms)}else L=M.uniforms;return L}function R(M,x){let L;for(let U=0,N=u.length;U<N;U++){const G=u[U];if(G.cacheKey===x){L=G,++L.usedTimes;break}}return L===void 0&&(L=new XS(r,x,M,s),u.push(L)),L}function w(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:A}}function KS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function JS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ad(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Cd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||JS),n.length>1&&n.sort(f||Ad),i.length>1&&i.sort(f||Ad)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function jS(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Cd,r.set(n,[o])):i>=s.length?(o=new Cd,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function QS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Jt};break;case"SpotLight":e={position:new z,direction:new z,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function t1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let e1=0;function n1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function i1(r){const t=new QS,e=t1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new we,o=new we;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,S=0,v=0,R=0,w=0,E=0;c.sort(n1);for(let M=0,x=c.length;M<x;M++){const L=c[M],U=L.color,N=L.intensity,G=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=U.r*N,h+=U.g*N,f+=U.b*N;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],N);E++}else if(L.isDirectionalLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const F=L.shadow,I=e.get(L);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,n.directionalShadow[d]=I,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=B,d++}else if(L.isSpotLight){const B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(U).multiplyScalar(N),B.distance=G,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[_]=B;const F=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,F.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=F.matrix,L.castShadow){const I=e.get(L);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=k,v++}_++}else if(L.isRectAreaLight){const B=t.get(L);B.color.copy(U).multiplyScalar(N),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=B,m++}else if(L.isPointLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const F=L.shadow,I=e.get(L);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,I.shadowCameraNear=F.camera.near,I.shadowCameraFar=F.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=B,g++}else if(L.isHemisphereLight){const B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(N),B.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==S||A.numSpotShadows!==v||A.numSpotMaps!==R||A.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,A.directionalLength=d,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=S,A.numSpotShadows=v,A.numSpotMaps=R,A.numLightProbes=E,n.version=e1++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Rd(r){const t=new i1(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function r1(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Rd(r),t.set(i,[a])):s>=o.length?(a=new Rd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class s1 extends Ea{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=B0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class o1 extends Ea{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const a1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c1(r,t,e){let n=new Xh;const i=new bt,s=new bt,o=new Me,a=new s1({depthPacking:k0}),l=new o1,c={},u=e.maxTextureSize,h={[Mr]:En,[En]:Mr,[di]:di},f=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:a1,fragmentShader:l1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new oi;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ym;let p=this.type;this.render=function(w,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),U=r.state;U.setBlending(mr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=p!==Bi&&this.type===Bi,G=p===Bi&&this.type!==Bi;for(let k=0,B=w.length;k<B;k++){const F=w[k],I=F.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const X=I.getFrameExtents();if(i.multiply(X),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,I.mapSize.y=s.y)),I.map===null||N===!0||G===!0){const K=this.type!==Bi?{minFilter:qn,magFilter:qn}:{};I.map!==null&&I.map.dispose(),I.map=new Qr(i.x,i.y,K),I.map.texture.name=F.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const C=I.getViewportCount();for(let K=0;K<C;K++){const at=I.getViewport(K);o.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),U.viewport(o),I.updateMatrices(F,K),n=I.getFrustum(),v(E,A,I.camera,F,this.type)}I.isPointLightShadow!==!0&&this.type===Bi&&y(I,A),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,L)};function y(w,E){const A=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qr(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,A,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,A,d,_,null)}function S(w,E,A,M){let x=null;const L=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)x=L;else if(x=A.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=x.uuid,N=E.uuid;let G=c[U];G===void 0&&(G={},c[U]=G);let k=G[N];k===void 0&&(k=x.clone(),G[N]=k,E.addEventListener("dispose",R)),x=k}if(x.visible=E.visible,x.wireframe=E.wireframe,M===Bi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=A}return x}function v(w,E,A,M,x){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Bi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const N=t.update(w),G=w.material;if(Array.isArray(G)){const k=N.groups;for(let B=0,F=k.length;B<F;B++){const I=k[B],X=G[I.materialIndex];if(X&&X.visible){const C=S(w,X,M,x);w.onBeforeShadow(r,w,E,A,N,C,I),r.renderBufferDirect(A,null,N,C,w,I),w.onAfterShadow(r,w,E,A,N,C,I)}}}else if(G.visible){const k=S(w,G,M,x);w.onBeforeShadow(r,w,E,A,N,k,null),r.renderBufferDirect(A,null,N,k,w,null),w.onAfterShadow(r,w,E,A,N,k,null)}}const U=w.children;for(let N=0,G=U.length;N<G;N++)v(U[N],E,A,M,x)}function R(w){w.target.removeEventListener("dispose",R);for(const A in c){const M=c[A],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const u1={[gu]:_u,[vu]:Mu,[xu]:Su,[eo]:yu,[_u]:gu,[Mu]:vu,[Su]:xu,[yu]:eo};function h1(r,t){function e(){let O=!1;const xt=new Me;let J=null;const st=new Me(0,0,0,0);return{setMask:function(vt){J!==vt&&!O&&(r.colorMask(vt,vt,vt,vt),J=vt)},setLocked:function(vt){O=vt},setClear:function(vt,Mt,Xt,he,Oe){Oe===!0&&(vt*=he,Mt*=he,Xt*=he),xt.set(vt,Mt,Xt,he),st.equals(xt)===!1&&(r.clearColor(vt,Mt,Xt,he),st.copy(xt))},reset:function(){O=!1,J=null,st.set(-1,0,0,0)}}}function n(){let O=!1,xt=!1,J=null,st=null,vt=null;return{setReversed:function(Mt){if(xt!==Mt){const Xt=t.get("EXT_clip_control");xt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const he=vt;vt=null,this.setClear(he)}xt=Mt},getReversed:function(){return xt},setTest:function(Mt){Mt?ot(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(Mt){J!==Mt&&!O&&(r.depthMask(Mt),J=Mt)},setFunc:function(Mt){if(xt&&(Mt=u1[Mt]),st!==Mt){switch(Mt){case gu:r.depthFunc(r.NEVER);break;case _u:r.depthFunc(r.ALWAYS);break;case vu:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case xu:r.depthFunc(r.EQUAL);break;case yu:r.depthFunc(r.GEQUAL);break;case Mu:r.depthFunc(r.GREATER);break;case Su:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}st=Mt}},setLocked:function(Mt){O=Mt},setClear:function(Mt){vt!==Mt&&(xt&&(Mt=1-Mt),r.clearDepth(Mt),vt=Mt)},reset:function(){O=!1,J=null,st=null,vt=null,xt=!1}}}function i(){let O=!1,xt=null,J=null,st=null,vt=null,Mt=null,Xt=null,he=null,Oe=null;return{setTest:function(Rt){O||(Rt?ot(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(Rt){xt!==Rt&&!O&&(r.stencilMask(Rt),xt=Rt)},setFunc:function(Rt,Nt,te){(J!==Rt||st!==Nt||vt!==te)&&(r.stencilFunc(Rt,Nt,te),J=Rt,st=Nt,vt=te)},setOp:function(Rt,Nt,te){(Mt!==Rt||Xt!==Nt||he!==te)&&(r.stencilOp(Rt,Nt,te),Mt=Rt,Xt=Nt,he=te)},setLocked:function(Rt){O=Rt},setClear:function(Rt){Oe!==Rt&&(r.clearStencil(Rt),Oe=Rt)},reset:function(){O=!1,xt=null,J=null,st=null,vt=null,Mt=null,Xt=null,he=null,Oe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,S=null,v=null,R=null,w=null,E=new Jt(0,0,0),A=0,M=!1,x=null,L=null,U=null,N=null,G=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,F=0;const I=r.getParameter(r.VERSION);I.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(I)[1]),B=F>=1):I.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),B=F>=2);let X=null,C={};const K=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),gt=new Me().fromArray(K),Y=new Me().fromArray(at);function et(O,xt,J,st){const vt=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(O,Mt),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<J;Xt++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(xt,0,r.RGBA,1,1,st,0,r.RGBA,r.UNSIGNED_BYTE,vt):r.texImage2D(xt+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,vt);return Mt}const ft={};ft[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),ft[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ft[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(r.DEPTH_TEST),o.setFunc(eo),lt(!1),H(Df),ot(r.CULL_FACE),D(mr);function ot(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function At(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function Ut(O,xt){return h[O]!==xt?(r.bindFramebuffer(O,xt),h[O]=xt,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=xt),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=xt),!0):!1}function Bt(O,xt){let J=d,st=!1;if(O){J=f.get(xt),J===void 0&&(J=[],f.set(xt,J));const vt=O.textures;if(J.length!==vt.length||J[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Xt=vt.length;Mt<Xt;Mt++)J[Mt]=r.COLOR_ATTACHMENT0+Mt;J.length=vt.length,st=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,st=!0);st&&r.drawBuffers(J)}function Gt(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const nt={[Br]:r.FUNC_ADD,[d0]:r.FUNC_SUBTRACT,[p0]:r.FUNC_REVERSE_SUBTRACT};nt[m0]=r.MIN,nt[g0]=r.MAX;const it={[_0]:r.ZERO,[v0]:r.ONE,[x0]:r.SRC_COLOR,[pu]:r.SRC_ALPHA,[T0]:r.SRC_ALPHA_SATURATE,[b0]:r.DST_COLOR,[M0]:r.DST_ALPHA,[y0]:r.ONE_MINUS_SRC_COLOR,[mu]:r.ONE_MINUS_SRC_ALPHA,[E0]:r.ONE_MINUS_DST_COLOR,[S0]:r.ONE_MINUS_DST_ALPHA,[w0]:r.CONSTANT_COLOR,[A0]:r.ONE_MINUS_CONSTANT_COLOR,[C0]:r.CONSTANT_ALPHA,[R0]:r.ONE_MINUS_CONSTANT_ALPHA};function D(O,xt,J,st,vt,Mt,Xt,he,Oe,Rt){if(O===mr){_===!0&&(At(r.BLEND),_=!1);return}if(_===!1&&(ot(r.BLEND),_=!0),O!==f0){if(O!==m||Rt!==M){if((p!==Br||v!==Br)&&(r.blendEquation(r.FUNC_ADD),p=Br,v=Br),Rt)switch(O){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case If:r.blendFunc(r.ONE,r.ONE);break;case Uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case If:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,S=null,R=null,w=null,E.set(0,0,0),A=0,m=O,M=Rt}return}vt=vt||xt,Mt=Mt||J,Xt=Xt||st,(xt!==p||vt!==v)&&(r.blendEquationSeparate(nt[xt],nt[vt]),p=xt,v=vt),(J!==y||st!==S||Mt!==R||Xt!==w)&&(r.blendFuncSeparate(it[J],it[st],it[Mt],it[Xt]),y=J,S=st,R=Mt,w=Xt),(he.equals(E)===!1||Oe!==A)&&(r.blendColor(he.r,he.g,he.b,Oe),E.copy(he),A=Oe),m=O,M=!1}function Ct(O,xt){O.side===di?At(r.CULL_FACE):ot(r.CULL_FACE);let J=O.side===En;xt&&(J=!J),lt(J),O.blending===Gs&&O.transparent===!1?D(mr):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const st=O.stencilWrite;a.setTest(st),st&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ft(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(O){x!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),x=O)}function H(O){O!==c0?(ot(r.CULL_FACE),O!==L&&(O===Df?r.cullFace(r.BACK):O===u0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),L=O}function ut(O){O!==U&&(B&&r.lineWidth(O),U=O)}function Ft(O,xt,J){O?(ot(r.POLYGON_OFFSET_FILL),(N!==xt||G!==J)&&(r.polygonOffset(xt,J),N=xt,G=J)):At(r.POLYGON_OFFSET_FILL)}function Tt(O){O?ot(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function P(O){O===void 0&&(O=r.TEXTURE0+k-1),X!==O&&(r.activeTexture(O),X=O)}function b(O,xt,J){J===void 0&&(X===null?J=r.TEXTURE0+k-1:J=X);let st=C[J];st===void 0&&(st={type:void 0,texture:void 0},C[J]=st),(st.type!==O||st.texture!==xt)&&(X!==J&&(r.activeTexture(J),X=J),r.bindTexture(O,xt||ft[O]),st.type=O,st.texture=xt)}function q(){const O=C[X];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $t(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(O){gt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),gt.copy(O))}function Pt(O){Y.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Y.copy(O))}function Qt(O,xt){let J=c.get(xt);J===void 0&&(J=new WeakMap,c.set(xt,J));let st=J.get(O);st===void 0&&(st=r.getUniformBlockIndex(xt,O.name),J.set(O,st))}function Wt(O,xt){const st=c.get(xt).get(O);l.get(xt)!==st&&(r.uniformBlockBinding(xt,st,O.__bindingPointIndex),l.set(xt,st))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},X=null,C={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,S=null,v=null,R=null,w=null,E=new Jt(0,0,0),A=0,M=!1,x=null,L=null,U=null,N=null,G=null,gt.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:At,bindFramebuffer:Ut,drawBuffers:Bt,useProgram:Gt,setBlending:D,setMaterial:Ct,setFlipSided:lt,setCullFace:H,setLineWidth:ut,setPolygonOffset:Ft,setScissorTest:Tt,activeTexture:P,bindTexture:b,unbindTexture:q,compressedTexImage2D:Q,compressedTexImage3D:rt,texImage2D:mt,texImage3D:Vt,updateUBOMapping:Qt,uniformBlockBinding:Wt,texStorage2D:$t,texStorage3D:ct,texSubImage2D:tt,texSubImage3D:_t,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Ht,viewport:Pt,reset:ce}}function Pd(r,t,e,n){const i=f1(n);switch(e){case Am:return r*t;case Rm:return r*t;case Pm:return r*t*2;case kh:return r*t/i.components*i.byteLength;case Hh:return r*t/i.components*i.byteLength;case Lm:return r*t*2/i.components*i.byteLength;case Vh:return r*t*2/i.components*i.byteLength;case Cm:return r*t*3/i.components*i.byteLength;case mi:return r*t*4/i.components*i.byteLength;case Gh:return r*t*4/i.components*i.byteLength;case ml:case gl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _l:case vl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Au:case Ru:return Math.max(r,16)*Math.max(t,8)/4;case wu:case Cu:return Math.max(r,8)*Math.max(t,8)/2;case Pu:case Lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Uu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ou:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case zu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Bu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ku:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Hu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Vu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Wu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Yu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case xl:case qu:case $u:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Dm:case Zu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ku:case Ju:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f1(r){switch(r){case Zi:case Em:return{byteLength:1,components:1};case ha:case Tm:case Ma:return{byteLength:2,components:1};case zh:case Bh:return{byteLength:2,components:4};case jr:case Fh:case wi:return{byteLength:4,components:1};case wm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function d1(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return d?new OffscreenCanvas(P,b):da("canvas")}function _(P,b,q){let Q=1;const rt=Tt(P);if((rt.width>q||rt.height>q)&&(Q=q/Math.max(rt.width,rt.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const tt=Math.floor(Q*rt.width),_t=Math.floor(Q*rt.height);h===void 0&&(h=g(tt,_t));const pt=b?g(tt,_t):h;return pt.width=tt,pt.height=_t,pt.getContext("2d").drawImage(P,0,0,tt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+_t+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(P,b,q,Q,rt=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let tt=b;if(b===r.RED&&(q===r.FLOAT&&(tt=r.R32F),q===r.HALF_FLOAT&&(tt=r.R16F),q===r.UNSIGNED_BYTE&&(tt=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.R8UI),q===r.UNSIGNED_SHORT&&(tt=r.R16UI),q===r.UNSIGNED_INT&&(tt=r.R32UI),q===r.BYTE&&(tt=r.R8I),q===r.SHORT&&(tt=r.R16I),q===r.INT&&(tt=r.R32I)),b===r.RG&&(q===r.FLOAT&&(tt=r.RG32F),q===r.HALF_FLOAT&&(tt=r.RG16F),q===r.UNSIGNED_BYTE&&(tt=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RG8UI),q===r.UNSIGNED_SHORT&&(tt=r.RG16UI),q===r.UNSIGNED_INT&&(tt=r.RG32UI),q===r.BYTE&&(tt=r.RG8I),q===r.SHORT&&(tt=r.RG16I),q===r.INT&&(tt=r.RG32I)),b===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),q===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),q===r.UNSIGNED_INT&&(tt=r.RGB32UI),q===r.BYTE&&(tt=r.RGB8I),q===r.SHORT&&(tt=r.RGB16I),q===r.INT&&(tt=r.RGB32I)),b===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),q===r.UNSIGNED_INT&&(tt=r.RGBA32UI),q===r.BYTE&&(tt=r.RGBA8I),q===r.SHORT&&(tt=r.RGBA16I),q===r.INT&&(tt=r.RGBA32I)),b===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),b===r.RGBA){const _t=rt?Kl:ue.getTransfer(Q);q===r.FLOAT&&(tt=r.RGBA32F),q===r.HALF_FLOAT&&(tt=r.RGBA16F),q===r.UNSIGNED_BYTE&&(tt=_t===ye?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(P,b){let q;return P?b===null||b===jr||b===ro?q=r.DEPTH24_STENCIL8:b===wi?q=r.DEPTH32F_STENCIL8:b===ha&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===jr||b===ro?q=r.DEPTH_COMPONENT24:b===wi?q=r.DEPTH_COMPONENT32F:b===ha&&(q=r.DEPTH_COMPONENT16),q}function R(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==qn&&P.minFilter!==Ti?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){const b=P.target;b.removeEventListener("dispose",w),A(b),b.isVideoTexture&&u.delete(b)}function E(P){const b=P.target;b.removeEventListener("dispose",E),x(b)}function A(P){const b=n.get(P);if(b.__webglInit===void 0)return;const q=P.source,Q=f.get(q);if(Q){const rt=Q[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&M(P),Object.keys(Q).length===0&&f.delete(q)}n.remove(P)}function M(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const q=P.source,Q=f.get(q);delete Q[b.__cacheKey],o.memory.textures--}function x(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let rt=0;rt<b.__webglFramebuffer[Q].length;rt++)r.deleteFramebuffer(b.__webglFramebuffer[Q][rt]);else r.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[Q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=P.textures;for(let Q=0,rt=q.length;Q<rt;Q++){const tt=n.get(q[Q]);tt.__webglTexture&&(r.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(q[Q])}n.remove(P)}let L=0;function U(){L=0}function N(){const P=L;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function G(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function k(P,b){const q=n.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(q,P,b);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function B(P,b){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Y(q,P,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function F(P,b){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Y(q,P,b);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function I(P,b){const q=n.get(P);if(P.version>0&&q.__version!==P.version){et(q,P,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const X={[Fl]:r.REPEAT,[Vr]:r.CLAMP_TO_EDGE,[Tu]:r.MIRRORED_REPEAT},C={[qn]:r.NEAREST,[z0]:r.NEAREST_MIPMAP_NEAREST,[wa]:r.NEAREST_MIPMAP_LINEAR,[Ti]:r.LINEAR,[hc]:r.LINEAR_MIPMAP_NEAREST,[Gr]:r.LINEAR_MIPMAP_LINEAR},K={[V0]:r.NEVER,[$0]:r.ALWAYS,[G0]:r.LESS,[Um]:r.LEQUAL,[W0]:r.EQUAL,[q0]:r.GEQUAL,[X0]:r.GREATER,[Y0]:r.NOTEQUAL};function at(P,b){if(b.type===wi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ti||b.magFilter===hc||b.magFilter===wa||b.magFilter===Gr||b.minFilter===Ti||b.minFilter===hc||b.minFilter===wa||b.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,X[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,X[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,X[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,C[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,C[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qn||b.minFilter!==wa&&b.minFilter!==Gr||b.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function gt(P,b){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));const Q=b.source;let rt=f.get(Q);rt===void 0&&(rt={},f.set(Q,rt));const tt=G(b);if(tt!==P.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),rt[tt].usedTimes++;const _t=rt[P.__cacheKey];_t!==void 0&&(rt[P.__cacheKey].usedTimes--,_t.usedTimes===0&&M(b)),P.__cacheKey=tt,P.__webglTexture=rt[tt].texture}return q}function Y(P,b,q){let Q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=r.TEXTURE_3D);const rt=gt(P,b),tt=b.source;e.bindTexture(Q,P.__webglTexture,r.TEXTURE0+q);const _t=n.get(tt);if(tt.version!==_t.__version||rt===!0){e.activeTexture(r.TEXTURE0+q);const pt=ue.getPrimaries(ue.workingColorSpace),yt=b.colorSpace===ar?null:ue.getPrimaries(b.colorSpace),$t=b.colorSpace===ar||pt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let ct=_(b.image,!1,i.maxTextureSize);ct=Ft(b,ct);const mt=s.convert(b.format,b.colorSpace),Vt=s.convert(b.type);let Ht=S(b.internalFormat,mt,Vt,b.colorSpace,b.isVideoTexture);at(Q,b);let Pt;const Qt=b.mipmaps,Wt=b.isVideoTexture!==!0,ce=_t.__version===void 0||rt===!0,O=tt.dataReady,xt=R(b,ct);if(b.isDepthTexture)Ht=v(b.format===so,b.type),ce&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,Ht,ct.width,ct.height):e.texImage2D(r.TEXTURE_2D,0,Ht,ct.width,ct.height,0,mt,Vt,null));else if(b.isDataTexture)if(Qt.length>0){Wt&&ce&&e.texStorage2D(r.TEXTURE_2D,xt,Ht,Qt[0].width,Qt[0].height);for(let J=0,st=Qt.length;J<st;J++)Pt=Qt[J],Wt?O&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,Pt.width,Pt.height,mt,Vt,Pt.data):e.texImage2D(r.TEXTURE_2D,J,Ht,Pt.width,Pt.height,0,mt,Vt,Pt.data);b.generateMipmaps=!1}else Wt?(ce&&e.texStorage2D(r.TEXTURE_2D,xt,Ht,ct.width,ct.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct.width,ct.height,mt,Vt,ct.data)):e.texImage2D(r.TEXTURE_2D,0,Ht,ct.width,ct.height,0,mt,Vt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Wt&&ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,Ht,Qt[0].width,Qt[0].height,ct.depth);for(let J=0,st=Qt.length;J<st;J++)if(Pt=Qt[J],b.format!==mi)if(mt!==null)if(Wt){if(O)if(b.layerUpdates.size>0){const vt=Pd(Pt.width,Pt.height,b.format,b.type);for(const Mt of b.layerUpdates){const Xt=Pt.data.subarray(Mt*vt/Pt.data.BYTES_PER_ELEMENT,(Mt+1)*vt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,Mt,Pt.width,Pt.height,1,mt,Xt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Pt.width,Pt.height,ct.depth,mt,Pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Ht,Pt.width,Pt.height,ct.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Pt.width,Pt.height,ct.depth,mt,Vt,Pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,J,Ht,Pt.width,Pt.height,ct.depth,0,mt,Vt,Pt.data)}else{Wt&&ce&&e.texStorage2D(r.TEXTURE_2D,xt,Ht,Qt[0].width,Qt[0].height);for(let J=0,st=Qt.length;J<st;J++)Pt=Qt[J],b.format!==mi?mt!==null?Wt?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,Pt.width,Pt.height,mt,Pt.data):e.compressedTexImage2D(r.TEXTURE_2D,J,Ht,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?O&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,Pt.width,Pt.height,mt,Vt,Pt.data):e.texImage2D(r.TEXTURE_2D,J,Ht,Pt.width,Pt.height,0,mt,Vt,Pt.data)}else if(b.isDataArrayTexture)if(Wt){if(ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,Ht,ct.width,ct.height,ct.depth),O)if(b.layerUpdates.size>0){const J=Pd(ct.width,ct.height,b.format,b.type);for(const st of b.layerUpdates){const vt=ct.data.subarray(st*J/ct.data.BYTES_PER_ELEMENT,(st+1)*J/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,st,ct.width,ct.height,1,mt,Vt,vt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,mt,Vt,ct.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ht,ct.width,ct.height,ct.depth,0,mt,Vt,ct.data);else if(b.isData3DTexture)Wt?(ce&&e.texStorage3D(r.TEXTURE_3D,xt,Ht,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,mt,Vt,ct.data)):e.texImage3D(r.TEXTURE_3D,0,Ht,ct.width,ct.height,ct.depth,0,mt,Vt,ct.data);else if(b.isFramebufferTexture){if(ce)if(Wt)e.texStorage2D(r.TEXTURE_2D,xt,Ht,ct.width,ct.height);else{let J=ct.width,st=ct.height;for(let vt=0;vt<xt;vt++)e.texImage2D(r.TEXTURE_2D,vt,Ht,J,st,0,mt,Vt,null),J>>=1,st>>=1}}else if(Qt.length>0){if(Wt&&ce){const J=Tt(Qt[0]);e.texStorage2D(r.TEXTURE_2D,xt,Ht,J.width,J.height)}for(let J=0,st=Qt.length;J<st;J++)Pt=Qt[J],Wt?O&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,mt,Vt,Pt):e.texImage2D(r.TEXTURE_2D,J,Ht,mt,Vt,Pt);b.generateMipmaps=!1}else if(Wt){if(ce){const J=Tt(ct);e.texStorage2D(r.TEXTURE_2D,xt,Ht,J.width,J.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt,Vt,ct)}else e.texImage2D(r.TEXTURE_2D,0,Ht,mt,Vt,ct);m(b)&&p(Q),_t.__version=tt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function et(P,b,q){if(b.image.length!==6)return;const Q=gt(P,b),rt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+q);const tt=n.get(rt);if(rt.version!==tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+q);const _t=ue.getPrimaries(ue.workingColorSpace),pt=b.colorSpace===ar?null:ue.getPrimaries(b.colorSpace),yt=b.colorSpace===ar||_t===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const $t=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,mt=[];for(let st=0;st<6;st++)!$t&&!ct?mt[st]=_(b.image[st],!0,i.maxCubemapSize):mt[st]=ct?b.image[st].image:b.image[st],mt[st]=Ft(b,mt[st]);const Vt=mt[0],Ht=s.convert(b.format,b.colorSpace),Pt=s.convert(b.type),Qt=S(b.internalFormat,Ht,Pt,b.colorSpace),Wt=b.isVideoTexture!==!0,ce=tt.__version===void 0||Q===!0,O=rt.dataReady;let xt=R(b,Vt);at(r.TEXTURE_CUBE_MAP,b);let J;if($t){Wt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Qt,Vt.width,Vt.height);for(let st=0;st<6;st++){J=mt[st].mipmaps;for(let vt=0;vt<J.length;vt++){const Mt=J[vt];b.format!==mi?Ht!==null?Wt?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,0,0,Mt.width,Mt.height,Ht,Mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,Qt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,0,0,Mt.width,Mt.height,Ht,Pt,Mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,Qt,Mt.width,Mt.height,0,Ht,Pt,Mt.data)}}}else{if(J=b.mipmaps,Wt&&ce){J.length>0&&xt++;const st=Tt(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Qt,st.width,st.height)}for(let st=0;st<6;st++)if(ct){Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,mt[st].width,mt[st].height,Ht,Pt,mt[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,mt[st].width,mt[st].height,0,Ht,Pt,mt[st].data);for(let vt=0;vt<J.length;vt++){const Xt=J[vt].image[st].image;Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,0,0,Xt.width,Xt.height,Ht,Pt,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,Qt,Xt.width,Xt.height,0,Ht,Pt,Xt.data)}}else{Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ht,Pt,mt[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Ht,Pt,mt[st]);for(let vt=0;vt<J.length;vt++){const Mt=J[vt];Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,0,0,Ht,Pt,Mt.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,Qt,Ht,Pt,Mt.image[st])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),tt.__version=rt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ft(P,b,q,Q,rt,tt){const _t=s.convert(q.format,q.colorSpace),pt=s.convert(q.type),yt=S(q.internalFormat,_t,pt,q.colorSpace),$t=n.get(b),ct=n.get(q);if(ct.__renderTarget=b,!$t.__hasExternalTextures){const mt=Math.max(1,b.width>>tt),Vt=Math.max(1,b.height>>tt);rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,yt,mt,Vt,b.depth,0,_t,pt,null):e.texImage2D(rt,tt,yt,mt,Vt,0,_t,pt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),H(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,rt,ct.__webglTexture,0,lt(b)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,rt,ct.__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(P,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const Q=b.depthTexture,rt=Q&&Q.isDepthTexture?Q.type:null,tt=v(b.stencilBuffer,rt),_t=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=lt(b);H(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt,tt,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,tt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,tt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,P)}else{const Q=b.textures;for(let rt=0;rt<Q.length;rt++){const tt=Q[rt],_t=s.convert(tt.format,tt.colorSpace),pt=s.convert(tt.type),yt=S(tt.internalFormat,_t,pt,tt.colorSpace),$t=lt(b);q&&H(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,yt,b.width,b.height):H(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t,yt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,yt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const rt=Q.__webglTexture,tt=lt(b);if(b.depthTexture.format===Ws)H(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0);else if(b.depthTexture.format===so)H(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Ut(P){const b=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",rt)};Q.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=Q}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");At(b.__webglFramebuffer,P)}else if(q){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=r.createRenderbuffer(),ot(b.__webglDepthbuffer[Q],P,!1);else{const rt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ot(b.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,rt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(P,b,q){const Q=n.get(P);b!==void 0&&ft(Q.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Ut(P)}function Gt(P){const b=P.texture,q=n.get(P),Q=n.get(b);P.addEventListener("dispose",E);const rt=P.textures,tt=P.isWebGLCubeRenderTarget===!0,_t=rt.length>1;if(_t||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=b.version,o.memory.textures++),tt){q.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[pt]=[];for(let yt=0;yt<b.mipmaps.length;yt++)q.__webglFramebuffer[pt][yt]=r.createFramebuffer()}else q.__webglFramebuffer[pt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)q.__webglFramebuffer[pt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(_t)for(let pt=0,yt=rt.length;pt<yt;pt++){const $t=n.get(rt[pt]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&H(P)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let pt=0;pt<rt.length;pt++){const yt=rt[pt];q.__webglColorRenderbuffer[pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[pt]);const $t=s.convert(yt.format,yt.colorSpace),ct=s.convert(yt.type),mt=S(yt.internalFormat,$t,ct,yt.colorSpace,P.isXRRenderTarget===!0),Vt=lt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,mt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,q.__webglColorRenderbuffer[pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),ot(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),at(r.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)ft(q.__webglFramebuffer[pt][yt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else ft(q.__webglFramebuffer[pt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(b)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let pt=0,yt=rt.length;pt<yt;pt++){const $t=rt[pt],ct=n.get($t);e.bindTexture(r.TEXTURE_2D,ct.__webglTexture),at(r.TEXTURE_2D,$t),ft(q.__webglFramebuffer,P,$t,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,0),m($t)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let pt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,Q.__webglTexture),at(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)ft(q.__webglFramebuffer[yt],P,b,r.COLOR_ATTACHMENT0,pt,yt);else ft(q.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,pt,0);m(b)&&p(pt),e.unbindTexture()}P.depthBuffer&&Ut(P)}function nt(P){const b=P.textures;for(let q=0,Q=b.length;q<Q;q++){const rt=b[q];if(m(rt)){const tt=y(P),_t=n.get(rt).__webglTexture;e.bindTexture(tt,_t),p(tt),e.unbindTexture()}}}const it=[],D=[];function Ct(P){if(P.samples>0){if(H(P)===!1){const b=P.textures,q=P.width,Q=P.height;let rt=r.COLOR_BUFFER_BIT;const tt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=n.get(P),pt=b.length>1;if(pt)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_t.__webglColorRenderbuffer[yt]);const $t=n.get(b[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$t,0)}r.blitFramebuffer(0,0,q,Q,0,0,q,Q,rt,r.NEAREST),l===!0&&(it.length=0,D.length=0,it.push(r.COLOR_ATTACHMENT0+yt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(it.push(tt),D.push(tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,_t.__webglColorRenderbuffer[yt]);const $t=n.get(b[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,$t,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function lt(P){return Math.min(i.maxSamples,P.samples)}function H(P){const b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(P){const b=o.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function Ft(P,b){const q=P.colorSpace,Q=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==co&&q!==ar&&(ue.getTransfer(q)===ye?(Q!==mi||rt!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=I,this.rebindTextures=Bt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=H}function p1(r,t){function e(n,i=ar){let s;const o=ue.getTransfer(i);if(n===Zi)return r.UNSIGNED_BYTE;if(n===zh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Bh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===wm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Em)return r.BYTE;if(n===Tm)return r.SHORT;if(n===ha)return r.UNSIGNED_SHORT;if(n===Fh)return r.INT;if(n===jr)return r.UNSIGNED_INT;if(n===wi)return r.FLOAT;if(n===Ma)return r.HALF_FLOAT;if(n===Am)return r.ALPHA;if(n===Cm)return r.RGB;if(n===mi)return r.RGBA;if(n===Rm)return r.LUMINANCE;if(n===Pm)return r.LUMINANCE_ALPHA;if(n===Ws)return r.DEPTH_COMPONENT;if(n===so)return r.DEPTH_STENCIL;if(n===kh)return r.RED;if(n===Hh)return r.RED_INTEGER;if(n===Lm)return r.RG;if(n===Vh)return r.RG_INTEGER;if(n===Gh)return r.RGBA_INTEGER;if(n===ml||n===gl||n===_l||n===vl)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wu||n===Au||n===Cu||n===Ru)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Au)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pu||n===Lu||n===Du)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pu||n===Lu)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Du)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Iu||n===Uu||n===Nu||n===Ou||n===Fu||n===zu||n===Bu||n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===Yu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Iu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ou)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ku)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xl||n===qu||n===$u)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===xl)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$u)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dm||n===Zu||n===Ku||n===Ju)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ku)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ju)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ro?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class m1 extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ai extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class x1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new sn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sr({vertexShader:_1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y1 extends uo{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new x1,m=e.getContextAttributes();let p=null,y=null;const S=[],v=[],R=new bt;let w=null;const E=new kn;E.viewport=new Me;const A=new kn;A.viewport=new Me;const M=[E,A],x=new m1;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=S[Y];return et===void 0&&(et=new zc,S[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=S[Y];return et===void 0&&(et=new zc,S[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=S[Y];return et===void 0&&(et=new zc,S[Y]=et),et.getHandSpace()};function N(Y){const et=v.indexOf(Y.inputSource);if(et===-1)return;const ft=S[et];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,c||o),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",k);for(let Y=0;Y<S.length;Y++){const et=v[Y];et!==null&&(v[Y]=null,S[Y].disconnect(et))}L=null,U=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,i=null,y=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",G),i.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Qr(d.framebufferWidth,d.framebufferHeight,{format:mi,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,ft=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?so:Ws,ft=m.stencil?ro:jr);const At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(At),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Qr(f.textureWidth,f.textureHeight,{format:mi,type:Zi,depthTexture:new qm(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),gt.setContext(i),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(Y){for(let et=0;et<Y.removed.length;et++){const ft=Y.removed[et],ot=v.indexOf(ft);ot>=0&&(v[ot]=null,S[ot].disconnect(ft))}for(let et=0;et<Y.added.length;et++){const ft=Y.added[et];let ot=v.indexOf(ft);if(ot===-1){for(let Ut=0;Ut<S.length;Ut++)if(Ut>=v.length){v.push(ft),ot=Ut;break}else if(v[Ut]===null){v[Ut]=ft,ot=Ut;break}if(ot===-1)break}const At=S[ot];At&&At.connect(ft)}}const B=new z,F=new z;function I(Y,et,ft){B.setFromMatrixPosition(et.matrixWorld),F.setFromMatrixPosition(ft.matrixWorld);const ot=B.distanceTo(F),At=et.projectionMatrix.elements,Ut=ft.projectionMatrix.elements,Bt=At[14]/(At[10]-1),Gt=At[14]/(At[10]+1),nt=(At[9]+1)/At[5],it=(At[9]-1)/At[5],D=(At[8]-1)/At[0],Ct=(Ut[8]+1)/Ut[0],lt=Bt*D,H=Bt*Ct,ut=ot/(-D+Ct),Ft=ut*-D;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ft),Y.translateZ(ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Tt=Bt+ut,P=Gt+ut,b=lt-Ft,q=H+(ot-Ft),Q=nt*Gt/P*Tt,rt=it*Gt/P*Tt;Y.projectionMatrix.makePerspective(b,q,Q,rt,Tt,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function X(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let et=Y.near,ft=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),x.near=A.near=E.near=et,x.far=A.far=E.far=ft,(L!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,U=x.far),E.layers.mask=Y.layers.mask|2,A.layers.mask=Y.layers.mask|4,x.layers.mask=E.layers.mask|A.layers.mask;const ot=Y.parent,At=x.cameras;X(x,ot);for(let Ut=0;Ut<At.length;Ut++)X(At[Ut],ot);At.length===2?I(x,E,A):x.projectionMatrix.copy(E.projectionMatrix),C(Y,x,ot)};function C(Y,et,ft){ft===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let K=null;function at(Y,et){if(u=et.getViewerPose(c||o),g=et,u!==null){const ft=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ot=!1;ft.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let Ut=0;Ut<ft.length;Ut++){const Bt=ft[Ut];let Gt=null;if(d!==null)Gt=d.getViewport(Bt);else{const it=h.getViewSubImage(f,Bt);Gt=it.viewport,Ut===0&&(t.setRenderTargetTextures(y,it.colorTexture,f.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(y))}let nt=M[Ut];nt===void 0&&(nt=new kn,nt.layers.enable(Ut),nt.viewport=new Me,M[Ut]=nt),nt.matrix.fromArray(Bt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Bt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Ut===0&&(x.matrix.copy(nt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(nt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Ut=h.getDepthInformation(ft[0]);Ut&&Ut.isValid&&Ut.texture&&_.init(t,Ut,i.renderState)}}for(let ft=0;ft<S.length;ft++){const ot=v[ft],At=S[ft];ot!==null&&At!==void 0&&At.update(ot,et,c||o)}K&&K(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const gt=new Xm;gt.setAnimationLoop(at),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}}const Ir=new si,M1=new we;function S1(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,Ir.copy(v),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),m.envMapRotation.value.setFromMatrix4(M1.makeRotationFromEuler(Ir)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b1(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const v=S.program;n.uniformBlockBinding(y,v)}function c(y,S){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(y,R);const w=t.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function u(y){const S=h();y.__bindingPointIndex=S;const v=r.createBuffer(),R=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=i[y.id],v=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,E=v.length;w<E;w++){const A=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,x=A.length;M<x;M++){const L=A[M];if(d(L,w,M,R)===!0){const U=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let k=0;k<N.length;k++){const B=N[k],F=_(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,U+G,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,G),G+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,S,v,R){const w=y.value,E=S+"_"+v;if(R[E]===void 0)return typeof w=="number"||typeof w=="boolean"?R[E]=w:R[E]=w.clone(),!0;{const A=R[E];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return R[E]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(y){const S=y.uniforms;let v=0;const R=16;for(let E=0,A=S.length;E<A;E++){const M=Array.isArray(S[E])?S[E]:[S[E]];for(let x=0,L=M.length;x<L;x++){const U=M[x],N=Array.isArray(U.value)?U.value:[U.value];for(let G=0,k=N.length;G<k;G++){const B=N[G],F=_(B),I=v%R,X=I%F.boundary,C=I+X;v+=X,C!==0&&R-C<F.storage&&(v+=R-C),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=F.storage}}}const w=v%R;return w>0&&(v+=R-w),y.__size=v,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class E1{constructor(t={}){const{canvas:e=hv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=gr,this.toneMappingExposure=1;const v=this;let R=!1,w=0,E=0,A=null,M=-1,x=null;const L=new Me,U=new Me;let N=null;const G=new Jt(0);let k=0,B=e.width,F=e.height,I=1,X=null,C=null;const K=new Me(0,0,B,F),at=new Me(0,0,B,F);let gt=!1;const Y=new Xh;let et=!1,ft=!1;const ot=new we,At=new we,Ut=new z,Bt=new Me,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function it(){return A===null?I:1}let D=n;function Ct(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oh}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),D===null){const V="webgl2";if(D=Ct(V,T),D===null)throw Ct(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let lt,H,ut,Ft,Tt,P,b,q,Q,rt,tt,_t,pt,yt,$t,ct,mt,Vt,Ht,Pt,Qt,Wt,ce,O;function xt(){lt=new RM(D),lt.init(),Wt=new p1(D,lt),H=new bM(D,lt,t,Wt),ut=new h1(D,lt),H.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),Ft=new DM(D),Tt=new KS,P=new d1(D,lt,ut,Tt,H,Wt,Ft),b=new TM(v),q=new CM(v),Q=new Bv(D),ce=new MM(D,Q),rt=new PM(D,Q,Ft,ce),tt=new UM(D,rt,Q,Ft),Ht=new IM(D,H,P),ct=new EM(Tt),_t=new ZS(v,b,q,lt,H,ce,ct),pt=new S1(v,Tt),yt=new jS,$t=new r1(lt),Vt=new yM(v,b,q,ut,tt,d,l),mt=new c1(v,tt,H),O=new b1(D,Ft,H,ut),Pt=new SM(D,lt,Ft),Qt=new LM(D,lt,Ft),Ft.programs=_t.programs,v.capabilities=H,v.extensions=lt,v.properties=Tt,v.renderLists=yt,v.shadowMap=mt,v.state=ut,v.info=Ft}xt();const J=new y1(v,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=lt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=lt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(B,F,!1))},this.getSize=function(T){return T.set(B,F)},this.setSize=function(T,V,$=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,F=V,e.width=Math.floor(T*I),e.height=Math.floor(V*I),$===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(B*I,F*I).floor()},this.setDrawingBufferSize=function(T,V,$){B=T,F=V,I=$,e.width=Math.floor(T*$),e.height=Math.floor(V*$),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,V,$,Z){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,V,$,Z),ut.viewport(L.copy(K).multiplyScalar(I).round())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,V,$,Z){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,V,$,Z),ut.scissor(U.copy(at).multiplyScalar(I).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(T){ut.setScissorTest(gt=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){C=T},this.getClearColor=function(T){return T.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(T=!0,V=!0,$=!0){let Z=0;if(T){let W=!1;if(A!==null){const ht=A.texture.format;W=ht===Gh||ht===Vh||ht===Hh}if(W){const ht=A.texture.type,dt=ht===Zi||ht===jr||ht===ha||ht===ro||ht===zh||ht===Bh,St=Vt.getClearColor(),Lt=Vt.getClearAlpha(),Yt=St.r,Kt=St.g,It=St.b;dt?(g[0]=Yt,g[1]=Kt,g[2]=It,g[3]=Lt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Yt,_[1]=Kt,_[2]=It,_[3]=Lt,D.clearBufferiv(D.COLOR,0,_))}else Z|=D.COLOR_BUFFER_BIT}V&&(Z|=D.DEPTH_BUFFER_BIT),$&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),yt.dispose(),$t.dispose(),Tt.dispose(),b.dispose(),q.dispose(),tt.dispose(),ce.dispose(),O.dispose(),_t.dispose(),J.dispose(),J.removeEventListener("sessionstart",Et),J.removeEventListener("sessionend",Zt),Ot.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=Ft.autoReset,V=mt.enabled,$=mt.autoUpdate,Z=mt.needsUpdate,W=mt.type;xt(),Ft.autoReset=T,mt.enabled=V,mt.autoUpdate=$,mt.needsUpdate=Z,mt.type=W}function Mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xt(T){const V=T.target;V.removeEventListener("dispose",Xt),he(V)}function he(T){Oe(T),Tt.remove(T)}function Oe(T){const V=Tt.get(T).programs;V!==void 0&&(V.forEach(function($){_t.releaseProgram($)}),T.isShaderMaterial&&_t.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,$,Z,W,ht){V===null&&(V=Gt);const dt=W.isMesh&&W.matrixWorld.determinant()<0,St=In(T,V,$,Z,W);ut.setMaterial(Z,dt);let Lt=$.index,Yt=1;if(Z.wireframe===!0){if(Lt=rt.getWireframeAttribute($),Lt===void 0)return;Yt=2}const Kt=$.drawRange,It=$.attributes.position;let jt=Kt.start*Yt,fe=(Kt.start+Kt.count)*Yt;ht!==null&&(jt=Math.max(jt,ht.start*Yt),fe=Math.min(fe,(ht.start+ht.count)*Yt)),Lt!==null?(jt=Math.max(jt,0),fe=Math.min(fe,Lt.count)):It!=null&&(jt=Math.max(jt,0),fe=Math.min(fe,It.count));const me=fe-jt;if(me<0||me===1/0)return;ce.setup(W,Z,St,$,Lt);let Le,ge=Pt;if(Lt!==null&&(Le=Q.get(Lt),ge=Qt,ge.setIndex(Le)),W.isMesh)Z.wireframe===!0?(ut.setLineWidth(Z.wireframeLinewidth*it()),ge.setMode(D.LINES)):ge.setMode(D.TRIANGLES);else if(W.isLine){let kt=Z.linewidth;kt===void 0&&(kt=1),ut.setLineWidth(kt*it()),W.isLineSegments?ge.setMode(D.LINES):W.isLineLoop?ge.setMode(D.LINE_LOOP):ge.setMode(D.LINE_STRIP)}else W.isPoints?ge.setMode(D.POINTS):W.isSprite&&ge.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ge.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ge.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const kt=W._multiDrawStarts,Ii=W._multiDrawCounts,_e=W._multiDrawCount,ai=Lt?Q.get(Lt).bytesPerElement:1,ls=Tt.get(Z).currentProgram.getUniforms();for(let Un=0;Un<_e;Un++)ls.setValue(D,"_gl_DrawID",Un),ge.render(kt[Un]/ai,Ii[Un])}else if(W.isInstancedMesh)ge.renderInstances(jt,me,W.count);else if($.isInstancedBufferGeometry){const kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ii=Math.min($.instanceCount,kt);ge.renderInstances(jt,me,Ii)}else ge.render(jt,me)};function Rt(T,V,$){T.transparent===!0&&T.side===di&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,Se(T,V,$),T.side=Mr,T.needsUpdate=!0,Se(T,V,$),T.side=di):Se(T,V,$)}this.compile=function(T,V,$=null){$===null&&($=T),p=$t.get($),p.init(V),S.push(p),$.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),T!==$&&T.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const Z=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ht=W.material;if(ht)if(Array.isArray(ht))for(let dt=0;dt<ht.length;dt++){const St=ht[dt];Rt(St,$,W),Z.add(St)}else Rt(ht,$,W),Z.add(ht)}),S.pop(),p=null,Z},this.compileAsync=function(T,V,$=null){const Z=this.compile(T,V,$);return new Promise(W=>{function ht(){if(Z.forEach(function(dt){Tt.get(dt).currentProgram.isReady()&&Z.delete(dt)}),Z.size===0){W(T);return}setTimeout(ht,10)}lt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Nt=null;function te(T){Nt&&Nt(T)}function Et(){Ot.stop()}function Zt(){Ot.start()}const Ot=new Xm;Ot.setAnimationLoop(te),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(T){Nt=T,J.setAnimationLoop(T),T===null?Ot.stop():Ot.start()},J.addEventListener("sessionstart",Et),J.addEventListener("sessionend",Zt),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(V),V=J.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,V,A),p=$t.get(T,S.length),p.init(V),S.push(p),At.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Y.setFromProjectionMatrix(At),ft=this.localClippingEnabled,et=ct.init(this.clippingPlanes,ft),m=yt.get(T,y.length),m.init(),y.push(m),J.enabled===!0&&J.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&qt(ht,V,-1/0,v.sortObjects)}qt(T,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(X,C),nt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,nt&&Vt.addToRenderList(m,T),this.info.render.frame++,et===!0&&ct.beginShadows();const $=p.state.shadowsArray;mt.render($,T,V),et===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,W=m.transmissive;if(p.setupLights(),V.isArrayCamera){const ht=V.cameras;if(W.length>0)for(let dt=0,St=ht.length;dt<St;dt++){const Lt=ht[dt];re(Z,W,T,Lt)}nt&&Vt.render(T);for(let dt=0,St=ht.length;dt<St;dt++){const Lt=ht[dt];Be(m,T,Lt,Lt.viewport)}}else W.length>0&&re(Z,W,T,V),nt&&Vt.render(T),Be(m,T,V);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,V),ce.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],et===!0&&ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function qt(T,V,$,Z){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){Z&&Bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(At);const dt=tt.update(T),St=T.material;St.visible&&m.push(T,dt,St,$,Bt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const dt=tt.update(T),St=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Bt.copy(T.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Bt.copy(dt.boundingSphere.center)),Bt.applyMatrix4(T.matrixWorld).applyMatrix4(At)),Array.isArray(St)){const Lt=dt.groups;for(let Yt=0,Kt=Lt.length;Yt<Kt;Yt++){const It=Lt[Yt],jt=St[It.materialIndex];jt&&jt.visible&&m.push(T,dt,jt,$,Bt.z,It)}}else St.visible&&m.push(T,dt,St,$,Bt.z,null)}}const ht=T.children;for(let dt=0,St=ht.length;dt<St;dt++)qt(ht[dt],V,$,Z)}function Be(T,V,$,Z){const W=T.opaque,ht=T.transmissive,dt=T.transparent;p.setupLightsView($),et===!0&&ct.setGlobalState(v.clippingPlanes,$),Z&&ut.viewport(L.copy(Z)),W.length>0&&Ae(W,V,$),ht.length>0&&Ae(ht,V,$),dt.length>0&&Ae(dt,V,$),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function re(T,V,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Qr(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Ma:Zi,minFilter:Gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const ht=p.state.transmissionRenderTarget[Z.id],dt=Z.viewport||L;ht.setSize(dt.z,dt.w);const St=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(G),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),nt&&Vt.render($);const Lt=v.toneMapping;v.toneMapping=gr;const Yt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),et===!0&&ct.setGlobalState(v.clippingPlanes,Z),Ae(T,$,Z),P.updateMultisampleRenderTarget(ht),P.updateRenderTargetMipmap(ht),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let It=0,jt=V.length;It<jt;It++){const fe=V[It],me=fe.object,Le=fe.geometry,ge=fe.material,kt=fe.group;if(ge.side===di&&me.layers.test(Z.layers)){const Ii=ge.side;ge.side=En,ge.needsUpdate=!0,Ye(me,$,Z,Le,ge,kt),ge.side=Ii,ge.needsUpdate=!0,Kt=!0}}Kt===!0&&(P.updateMultisampleRenderTarget(ht),P.updateRenderTargetMipmap(ht))}v.setRenderTarget(St),v.setClearColor(G,k),Yt!==void 0&&(Z.viewport=Yt),v.toneMapping=Lt}function Ae(T,V,$){const Z=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ht=T.length;W<ht;W++){const dt=T[W],St=dt.object,Lt=dt.geometry,Yt=Z===null?dt.material:Z,Kt=dt.group;St.layers.test($.layers)&&Ye(St,V,$,Lt,Yt,Kt)}}function Ye(T,V,$,Z,W,ht){T.onBeforeRender(v,V,$,Z,W,ht),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(v,V,$,Z,T,ht),W.transparent===!0&&W.side===di&&W.forceSinglePass===!1?(W.side=En,W.needsUpdate=!0,v.renderBufferDirect($,V,Z,W,T,ht),W.side=Mr,W.needsUpdate=!0,v.renderBufferDirect($,V,Z,W,T,ht),W.side=di):v.renderBufferDirect($,V,Z,W,T,ht),T.onAfterRender(v,V,$,Z,W,ht)}function Se(T,V,$){V.isScene!==!0&&(V=Gt);const Z=Tt.get(T),W=p.state.lights,ht=p.state.shadowsArray,dt=W.state.version,St=_t.getParameters(T,W.state,ht,V,$),Lt=_t.getProgramCacheKey(St);let Yt=Z.programs;Z.environment=T.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(T.isMeshStandardMaterial?q:b).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",Xt),Yt=new Map,Z.programs=Yt);let Kt=Yt.get(Lt);if(Kt!==void 0){if(Z.currentProgram===Kt&&Z.lightsStateVersion===dt)return pe(T,St),Kt}else St.uniforms=_t.getUniforms(T),T.onBeforeCompile(St,v),Kt=_t.acquireProgram(St,Lt),Yt.set(Lt,Kt),Z.uniforms=St.uniforms;const It=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=ct.uniform),pe(T,St),Z.needsLights=pn(T),Z.lightsStateVersion=dt,Z.needsLights&&(It.ambientLightColor.value=W.state.ambient,It.lightProbe.value=W.state.probe,It.directionalLights.value=W.state.directional,It.directionalLightShadows.value=W.state.directionalShadow,It.spotLights.value=W.state.spot,It.spotLightShadows.value=W.state.spotShadow,It.rectAreaLights.value=W.state.rectArea,It.ltc_1.value=W.state.rectAreaLTC1,It.ltc_2.value=W.state.rectAreaLTC2,It.pointLights.value=W.state.point,It.pointLightShadows.value=W.state.pointShadow,It.hemisphereLights.value=W.state.hemi,It.directionalShadowMap.value=W.state.directionalShadowMap,It.directionalShadowMatrix.value=W.state.directionalShadowMatrix,It.spotShadowMap.value=W.state.spotShadowMap,It.spotLightMatrix.value=W.state.spotLightMatrix,It.spotLightMap.value=W.state.spotLightMap,It.pointShadowMap.value=W.state.pointShadowMap,It.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Kt,Z.uniformsList=null,Kt}function be(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=yl.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function pe(T,V){const $=Tt.get(T);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function In(T,V,$,Z,W){V.isScene!==!0&&(V=Gt),P.resetTextureUnits();const ht=V.fog,dt=Z.isMeshStandardMaterial?V.environment:null,St=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:co,Lt=(Z.isMeshStandardMaterial?q:b).get(Z.envMap||dt),Yt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Kt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),It=!!$.morphAttributes.position,jt=!!$.morphAttributes.normal,fe=!!$.morphAttributes.color;let me=gr;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=v.toneMapping);const Le=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ge=Le!==void 0?Le.length:0,kt=Tt.get(Z),Ii=p.state.lights;if(et===!0&&(ft===!0||T!==x)){const Kn=T===x&&Z.id===M;ct.setState(Z,T,Kn)}let _e=!1;Z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ii.state.version||kt.outputColorSpace!==St||W.isBatchedMesh&&kt.batching===!1||!W.isBatchedMesh&&kt.batching===!0||W.isBatchedMesh&&kt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&kt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&kt.instancing===!1||!W.isInstancedMesh&&kt.instancing===!0||W.isSkinnedMesh&&kt.skinning===!1||!W.isSkinnedMesh&&kt.skinning===!0||W.isInstancedMesh&&kt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&kt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&kt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&kt.instancingMorph===!1&&W.morphTexture!==null||kt.envMap!==Lt||Z.fog===!0&&kt.fog!==ht||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ct.numPlanes||kt.numIntersection!==ct.numIntersection)||kt.vertexAlphas!==Yt||kt.vertexTangents!==Kt||kt.morphTargets!==It||kt.morphNormals!==jt||kt.morphColors!==fe||kt.toneMapping!==me||kt.morphTargetsCount!==ge)&&(_e=!0):(_e=!0,kt.__version=Z.version);let ai=kt.currentProgram;_e===!0&&(ai=Se(Z,V,W));let ls=!1,Un=!1,fo=!1;const Re=ai.getUniforms(),_i=kt.uniforms;if(ut.useProgram(ai.program)&&(ls=!0,Un=!0,fo=!0),Z.id!==M&&(M=Z.id,Un=!0),ls||x!==T){ut.buffers.depth.getReversed()?(ot.copy(T.projectionMatrix),dv(ot),pv(ot),Re.setValue(D,"projectionMatrix",ot)):Re.setValue(D,"projectionMatrix",T.projectionMatrix),Re.setValue(D,"viewMatrix",T.matrixWorldInverse);const Ki=Re.map.cameraPosition;Ki!==void 0&&Ki.setValue(D,Ut.setFromMatrixPosition(T.matrixWorld)),H.logarithmicDepthBuffer&&Re.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Re.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Un=!0,fo=!0)}if(W.isSkinnedMesh){Re.setOptional(D,W,"bindMatrix"),Re.setOptional(D,W,"bindMatrixInverse");const Kn=W.skeleton;Kn&&(Kn.boneTexture===null&&Kn.computeBoneTexture(),Re.setValue(D,"boneTexture",Kn.boneTexture,P))}W.isBatchedMesh&&(Re.setOptional(D,W,"batchingTexture"),Re.setValue(D,"batchingTexture",W._matricesTexture,P),Re.setOptional(D,W,"batchingIdTexture"),Re.setValue(D,"batchingIdTexture",W._indirectTexture,P),Re.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&Re.setValue(D,"batchingColorTexture",W._colorsTexture,P));const po=$.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0)&&Ht.update(W,$,ai),(Un||kt.receiveShadow!==W.receiveShadow)&&(kt.receiveShadow=W.receiveShadow,Re.setValue(D,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(_i.envMap.value=Lt,_i.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(_i.envMapIntensity.value=V.environmentIntensity),Un&&(Re.setValue(D,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Ce(_i,fo),ht&&Z.fog===!0&&pt.refreshFogUniforms(_i,ht),pt.refreshMaterialUniforms(_i,Z,I,F,p.state.transmissionRenderTarget[T.id]),yl.upload(D,be(kt),_i,P)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(yl.upload(D,be(kt),_i,P),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Re.setValue(D,"center",W.center),Re.setValue(D,"modelViewMatrix",W.modelViewMatrix),Re.setValue(D,"normalMatrix",W.normalMatrix),Re.setValue(D,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Kn=Z.uniformsGroups;for(let Ki=0,Ji=Kn.length;Ki<Ji;Ki++){const df=Kn[Ki];O.update(df,ai),O.bind(df,ai)}}return ai}function Ce(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function pn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,V,$){Tt.get(T.texture).__webglTexture=V,Tt.get(T.depthTexture).__webglTexture=$;const Z=Tt.get(T);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const $=Tt.get(T);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,$=0){A=T,w=V,E=$;let Z=!0,W=null,ht=!1,dt=!1;if(T){const Lt=Tt.get(T);if(Lt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Lt.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Lt.__hasExternalTextures)P.rebindTextures(T,Tt.get(T.texture).__webglTexture,Tt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const It=T.depthTexture;if(Lt.__boundDepthTexture!==It){if(It!==null&&Tt.has(It)&&(T.width!==It.image.width||T.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(dt=!0);const Kt=Tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Kt[V])?W=Kt[V][$]:W=Kt[V],ht=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?W=Tt.get(T).__webglMultisampledFramebuffer:Array.isArray(Kt)?W=Kt[$]:W=Kt,L.copy(T.viewport),U.copy(T.scissor),N=T.scissorTest}else L.copy(K).multiplyScalar(I).floor(),U.copy(at).multiplyScalar(I).floor(),N=gt;if(ut.bindFramebuffer(D.FRAMEBUFFER,W)&&Z&&ut.drawBuffers(T,W),ut.viewport(L),ut.scissor(U),ut.setScissorTest(N),ht){const Lt=Tt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Lt.__webglTexture,$)}else if(dt){const Lt=Tt.get(T.texture),Yt=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,$||0,Yt)}M=-1},this.readRenderTargetPixels=function(T,V,$,Z,W,ht,dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(St=St[dt]),St){ut.bindFramebuffer(D.FRAMEBUFFER,St);try{const Lt=T.texture,Yt=Lt.format,Kt=Lt.type;if(!H.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Z&&$>=0&&$<=T.height-W&&D.readPixels(V,$,Z,W,Wt.convert(Yt),Wt.convert(Kt),ht)}finally{const Lt=A!==null?Tt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(T,V,$,Z,W,ht,dt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(St=St[dt]),St){const Lt=T.texture,Yt=Lt.format,Kt=Lt.type;if(!H.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-Z&&$>=0&&$<=T.height-W){ut.bindFramebuffer(D.FRAMEBUFFER,St);const It=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),D.readPixels(V,$,Z,W,Wt.convert(Yt),Wt.convert(Kt),0);const jt=A!==null?Tt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,jt);const fe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await fv(D,fe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht),D.deleteBuffer(It),D.deleteSync(fe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,$=0){T.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const Z=Math.pow(2,-$),W=Math.floor(T.image.width*Z),ht=Math.floor(T.image.height*Z),dt=V!==null?V.x:0,St=V!==null?V.y:0;P.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,dt,St,W,ht),ut.unbindTexture()},this.copyTextureToTexture=function(T,V,$=null,Z=null,W=0){T.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1],V=arguments[2],W=arguments[3]||0,$=null);let ht,dt,St,Lt,Yt,Kt,It,jt,fe;const me=T.isCompressedTexture?T.mipmaps[W]:T.image;$!==null?(ht=$.max.x-$.min.x,dt=$.max.y-$.min.y,St=$.isBox3?$.max.z-$.min.z:1,Lt=$.min.x,Yt=$.min.y,Kt=$.isBox3?$.min.z:0):(ht=me.width,dt=me.height,St=me.depth||1,Lt=0,Yt=0,Kt=0),Z!==null?(It=Z.x,jt=Z.y,fe=Z.z):(It=0,jt=0,fe=0);const Le=Wt.convert(V.format),ge=Wt.convert(V.type);let kt;V.isData3DTexture?(P.setTexture3D(V,0),kt=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(P.setTexture2DArray(V,0),kt=D.TEXTURE_2D_ARRAY):(P.setTexture2D(V,0),kt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const Ii=D.getParameter(D.UNPACK_ROW_LENGTH),_e=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ai=D.getParameter(D.UNPACK_SKIP_PIXELS),ls=D.getParameter(D.UNPACK_SKIP_ROWS),Un=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Kt);const fo=T.isDataArrayTexture||T.isData3DTexture,Re=V.isDataArrayTexture||V.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const _i=Tt.get(T),po=Tt.get(V),Kn=Tt.get(_i.__renderTarget),Ki=Tt.get(po.__renderTarget);ut.bindFramebuffer(D.READ_FRAMEBUFFER,Kn.__webglFramebuffer),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let Ji=0;Ji<St;Ji++)fo&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(T).__webglTexture,W,Kt+Ji),T.isDepthTexture?(Re&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(V).__webglTexture,W,fe+Ji),D.blitFramebuffer(Lt,Yt,ht,dt,It,jt,ht,dt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Re?D.copyTexSubImage3D(kt,W,It,jt,fe+Ji,Lt,Yt,ht,dt):D.copyTexSubImage2D(kt,W,It,jt,fe+Ji,Lt,Yt,ht,dt);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Re?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(kt,W,It,jt,fe,ht,dt,St,Le,ge,me.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(kt,W,It,jt,fe,ht,dt,St,Le,me.data):D.texSubImage3D(kt,W,It,jt,fe,ht,dt,St,Le,ge,me):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,W,It,jt,ht,dt,Le,ge,me.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,W,It,jt,me.width,me.height,Le,me.data):D.texSubImage2D(D.TEXTURE_2D,W,It,jt,ht,dt,Le,ge,me);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ii),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ai),D.pixelStorei(D.UNPACK_SKIP_ROWS,ls),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Un),W===0&&V.generateMipmaps&&D.generateMipmap(kt),ut.unbindTexture()},this.copyTextureToTexture3D=function(T,V,$=null,Z=null,W=0){return T.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,T=arguments[2],V=arguments[3],W=arguments[4]||0),Io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,$,Z,W)},this.initRenderTarget=function(T){Tt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){w=0,E=0,A=null,ut.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class qh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new qh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jm extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class T1 extends sn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=qn,u=qn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os extends gi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new we,Ld=new we,qa=[],Dd=new as,w1=new we,yo=new ae,Mo=new ba;class Id extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,w1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new as),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Dd.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Dd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ba),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Mo.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(Mo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),t.ray.intersectsSphere(Mo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Es),Ld.multiplyMatrices(n,Es),yo.matrixWorld=Ld,yo.raycast(t,qa);for(let o=0,a=qa.length;o<a;o++){const l=qa[o];l.instanceId=s,l.object=this,e.push(l)}qa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new T1(new Float32Array(i*this.count),i,this.count,kh,wi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jl extends sn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new bt:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,i=[],s=[],o=[],a=new z,l=new we;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(tn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(tn(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $h extends Di{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new bt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class A1 extends $h{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const $a=new z,Bc=new Zh,kc=new Zh,Hc=new Zh;class C1 extends Di{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new z){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:($a.subVectors(i[0],i[1]).add(i[0]),c=$a);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:($a.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=$a),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Bc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),kc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Hc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),kc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Hc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Bc.calc(l),kc.calc(l),Hc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ud(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function R1(r,t){const e=1-r;return e*e*t}function P1(r,t){return 2*(1-r)*r*t}function L1(r,t){return r*r*t}function Xo(r,t,e,n){return R1(r,t)+P1(r,e)+L1(r,n)}function D1(r,t){const e=1-r;return e*e*e*t}function I1(r,t){const e=1-r;return 3*e*e*r*t}function U1(r,t){return 3*(1-r)*r*r*t}function N1(r,t){return r*r*r*t}function Yo(r,t,e,n,i){return D1(r,t)+I1(r,e)+U1(r,n)+N1(r,i)}class Qm extends Di{constructor(t=new bt,e=new bt,n=new bt,i=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new bt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Yo(t,i.x,s.x,o.x,a.x),Yo(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class O1 extends Di{constructor(t=new z,e=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new z){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Yo(t,i.x,s.x,o.x,a.x),Yo(t,i.y,s.y,o.y,a.y),Yo(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tg extends Di{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F1 extends Di{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eg extends Di{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Xo(t,i.x,s.x,o.x),Xo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z1 extends Di{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Xo(t,i.x,s.x,o.x),Xo(t,i.y,s.y,o.y),Xo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ng extends Di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Ud(a,l.x,c.x,u.x,h.x),Ud(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new bt().fromArray(i))}return this}}var th=Object.freeze({__proto__:null,ArcCurve:A1,CatmullRomCurve3:C1,CubicBezierCurve:Qm,CubicBezierCurve3:O1,EllipseCurve:$h,LineCurve:tg,LineCurve3:F1,QuadraticBezierCurve:eg,QuadraticBezierCurve3:z1,SplineCurve:ng});class B1 extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new th[i.type]().fromJSON(i))}return this}}class Bl extends B1{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new tg(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new eg(this.currentPoint.clone(),new bt(t,e),new bt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Qm(this.currentPoint.clone(),new bt(t,e),new bt(n,i),new bt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ng(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new $h(t,e,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kh extends oi{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new z,u=new bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Jh extends Bl{constructor(t){super(t),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Bl().fromJSON(i))}return this}}const k1={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=ig(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=X1(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let g=e;g<i;g+=e)h=r[g],f=r[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return pa(s,o,e,a,l,d,0),o}};function ig(r,t,e,n,i){let s,o;if(i===nb(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Nd(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Nd(s,r[s],r[s+1],o);return o&&Ql(o,o.next)&&(ga(o),o=o.next),o}function es(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Ql(e,e.next)||Ne(e.prev,e,e.next)===0)){if(ga(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pa(r,t,e,n,i,s,o){if(!r)return;!o&&s&&K1(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?V1(r,n,i,s):H1(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),ga(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=G1(es(r),t,e),pa(r,t,e,n,i,s,2)):o===2&&W1(r,t,e,n,i,s):pa(es(r),t,e,n,i,s,1);break}}}function H1(r){const t=r.prev,e=r,n=r.next;if(Ne(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Fs(i,a,s,l,o,c,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function V1(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Ne(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=eh(d,g,t,e,n),y=eh(_,m,t,e,n);let S=r.prevZ,v=r.nextZ;for(;S&&S.z>=p&&v&&v.z<=y;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Fs(a,u,l,h,c,f,S.x,S.y)&&Ne(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Fs(a,u,l,h,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Fs(a,u,l,h,c,f,S.x,S.y)&&Ne(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Fs(a,u,l,h,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function G1(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Ql(i,s)&&rg(i,n,n.next,s)&&ma(i,s)&&ma(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ga(n),ga(n.next),n=r=s),n=n.next}while(n!==r);return es(n)}function W1(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Q1(o,a)){let l=sg(o,a);o=es(o,o.next),l=es(l,l.next),pa(o,t,e,n,i,s,0),pa(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function X1(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=ig(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(j1(c));for(i.sort(Y1),s=0;s<i.length;s++)e=q1(i[s],e);return e}function Y1(r,t){return r.x-t.x}function q1(r,t){const e=$1(r,t);if(!e)return t;const n=sg(e,r);return es(n,n.next),es(e,e.next)}function $1(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Fs(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),ma(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&Z1(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function Z1(r,t){return Ne(r.prev,r,t.prev)<0&&Ne(t.next,r,r.next)<0}function K1(r,t,e,n){let i=r;do i.z===0&&(i.z=eh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,J1(i)}function J1(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function eh(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function j1(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Fs(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Q1(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!tb(r,t)&&(ma(r,t)&&ma(t,r)&&eb(r,t)&&(Ne(r.prev,r,t.prev)||Ne(r,t.prev,t))||Ql(r,t)&&Ne(r.prev,r,r.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ql(r,t){return r.x===t.x&&r.y===t.y}function rg(r,t,e,n){const i=Ka(Ne(r,t,e)),s=Ka(Ne(r,t,n)),o=Ka(Ne(e,n,r)),a=Ka(Ne(e,n,t));return!!(i!==s&&o!==a||i===0&&Za(r,e,t)||s===0&&Za(r,n,t)||o===0&&Za(e,r,n)||a===0&&Za(e,t,n))}function Za(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ka(r){return r>0?1:r<0?-1:0}function tb(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&rg(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ma(r,t){return Ne(r.prev,r,r.next)<0?Ne(r,t,r.next)>=0&&Ne(r,r.prev,t)>=0:Ne(r,t,r.prev)<0||Ne(r,r.next,t)<0}function eb(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function sg(r,t){const e=new nh(r.i,r.x,r.y),n=new nh(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Nd(r,t,e,n){const i=new nh(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ga(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function nh(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nb(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class qo{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return qo.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Od(t),Fd(n,t);let o=t.length;e.forEach(Od);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Fd(n,e[l]);const a=k1.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Od(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Fd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class tc extends oi{constructor(t=new Jh([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Ve(i,3)),this.setAttribute("uv",new Ve(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:ib;let S,v=!1,R,w,E,A;p&&(S=p.getSpacedPoints(u),v=!0,f=!1,R=p.computeFrenetFrames(u,!1),w=new z,E=new z,A=new z),f||(m=0,d=0,g=0,_=0);const M=a.extractPoints(c);let x=M.shape;const L=M.holes;if(!qo.isClockWise(x)){x=x.reverse();for(let nt=0,it=L.length;nt<it;nt++){const D=L[nt];qo.isClockWise(D)&&(L[nt]=D.reverse())}}const N=qo.triangulateShape(x,L),G=x;for(let nt=0,it=L.length;nt<it;nt++){const D=L[nt];x=x.concat(D)}function k(nt,it,D){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(it,D)}const B=x.length,F=N.length;function I(nt,it,D){let Ct,lt,H;const ut=nt.x-it.x,Ft=nt.y-it.y,Tt=D.x-nt.x,P=D.y-nt.y,b=ut*ut+Ft*Ft,q=ut*P-Ft*Tt;if(Math.abs(q)>Number.EPSILON){const Q=Math.sqrt(b),rt=Math.sqrt(Tt*Tt+P*P),tt=it.x-Ft/Q,_t=it.y+ut/Q,pt=D.x-P/rt,yt=D.y+Tt/rt,$t=((pt-tt)*P-(yt-_t)*Tt)/(ut*P-Ft*Tt);Ct=tt+ut*$t-nt.x,lt=_t+Ft*$t-nt.y;const ct=Ct*Ct+lt*lt;if(ct<=2)return new bt(Ct,lt);H=Math.sqrt(ct/2)}else{let Q=!1;ut>Number.EPSILON?Tt>Number.EPSILON&&(Q=!0):ut<-Number.EPSILON?Tt<-Number.EPSILON&&(Q=!0):Math.sign(Ft)===Math.sign(P)&&(Q=!0),Q?(Ct=-Ft,lt=ut,H=Math.sqrt(b)):(Ct=ut,lt=Ft,H=Math.sqrt(b/2))}return new bt(Ct/H,lt/H)}const X=[];for(let nt=0,it=G.length,D=it-1,Ct=nt+1;nt<it;nt++,D++,Ct++)D===it&&(D=0),Ct===it&&(Ct=0),X[nt]=I(G[nt],G[D],G[Ct]);const C=[];let K,at=X.concat();for(let nt=0,it=L.length;nt<it;nt++){const D=L[nt];K=[];for(let Ct=0,lt=D.length,H=lt-1,ut=Ct+1;Ct<lt;Ct++,H++,ut++)H===lt&&(H=0),ut===lt&&(ut=0),K[Ct]=I(D[Ct],D[H],D[ut]);C.push(K),at=at.concat(K)}for(let nt=0;nt<m;nt++){const it=nt/m,D=d*Math.cos(it*Math.PI/2),Ct=g*Math.sin(it*Math.PI/2)+_;for(let lt=0,H=G.length;lt<H;lt++){const ut=k(G[lt],X[lt],Ct);ot(ut.x,ut.y,-D)}for(let lt=0,H=L.length;lt<H;lt++){const ut=L[lt];K=C[lt];for(let Ft=0,Tt=ut.length;Ft<Tt;Ft++){const P=k(ut[Ft],K[Ft],Ct);ot(P.x,P.y,-D)}}}const gt=g+_;for(let nt=0;nt<B;nt++){const it=f?k(x[nt],at[nt],gt):x[nt];v?(E.copy(R.normals[0]).multiplyScalar(it.x),w.copy(R.binormals[0]).multiplyScalar(it.y),A.copy(S[0]).add(E).add(w),ot(A.x,A.y,A.z)):ot(it.x,it.y,0)}for(let nt=1;nt<=u;nt++)for(let it=0;it<B;it++){const D=f?k(x[it],at[it],gt):x[it];v?(E.copy(R.normals[nt]).multiplyScalar(D.x),w.copy(R.binormals[nt]).multiplyScalar(D.y),A.copy(S[nt]).add(E).add(w),ot(A.x,A.y,A.z)):ot(D.x,D.y,h/u*nt)}for(let nt=m-1;nt>=0;nt--){const it=nt/m,D=d*Math.cos(it*Math.PI/2),Ct=g*Math.sin(it*Math.PI/2)+_;for(let lt=0,H=G.length;lt<H;lt++){const ut=k(G[lt],X[lt],Ct);ot(ut.x,ut.y,h+D)}for(let lt=0,H=L.length;lt<H;lt++){const ut=L[lt];K=C[lt];for(let Ft=0,Tt=ut.length;Ft<Tt;Ft++){const P=k(ut[Ft],K[Ft],Ct);v?ot(P.x,P.y+S[u-1].y,S[u-1].x+D):ot(P.x,P.y,h+D)}}}Y(),et();function Y(){const nt=i.length/3;if(f){let it=0,D=B*it;for(let Ct=0;Ct<F;Ct++){const lt=N[Ct];At(lt[2]+D,lt[1]+D,lt[0]+D)}it=u+m*2,D=B*it;for(let Ct=0;Ct<F;Ct++){const lt=N[Ct];At(lt[0]+D,lt[1]+D,lt[2]+D)}}else{for(let it=0;it<F;it++){const D=N[it];At(D[2],D[1],D[0])}for(let it=0;it<F;it++){const D=N[it];At(D[0]+B*u,D[1]+B*u,D[2]+B*u)}}n.addGroup(nt,i.length/3-nt,0)}function et(){const nt=i.length/3;let it=0;ft(G,it),it+=G.length;for(let D=0,Ct=L.length;D<Ct;D++){const lt=L[D];ft(lt,it),it+=lt.length}n.addGroup(nt,i.length/3-nt,1)}function ft(nt,it){let D=nt.length;for(;--D>=0;){const Ct=D;let lt=D-1;lt<0&&(lt=nt.length-1);for(let H=0,ut=u+m*2;H<ut;H++){const Ft=B*H,Tt=B*(H+1),P=it+Ct+Ft,b=it+lt+Ft,q=it+lt+Tt,Q=it+Ct+Tt;Ut(P,b,q,Q)}}}function ot(nt,it,D){l.push(nt),l.push(it),l.push(D)}function At(nt,it,D){Bt(nt),Bt(it),Bt(D);const Ct=i.length/3,lt=y.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);Gt(lt[0]),Gt(lt[1]),Gt(lt[2])}function Ut(nt,it,D,Ct){Bt(nt),Bt(it),Bt(Ct),Bt(it),Bt(D),Bt(Ct);const lt=i.length/3,H=y.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);Gt(H[0]),Gt(H[1]),Gt(H[3]),Gt(H[1]),Gt(H[2]),Gt(H[3])}function Bt(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function Gt(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rb(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new th[i.type]().fromJSON(i)),new tc(n,t.options)}}const ib={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new bt(s,o),new bt(a,l),new bt(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new bt(o,1-l),new bt(c,1-h),new bt(f,1-g),new bt(_,1-p)]:[new bt(a,1-l),new bt(u,1-h),new bt(d,1-g),new bt(m,1-p)]}};function rb(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class jh extends oi{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/i,d=new z,g=new bt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,S=y,v=y+n+1,R=y+n+2,w=y+1;a.push(S,v,w),a.push(v,R,w)}}this.setIndex(a),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ec extends oi{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new z,f=new z,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const w=R/e;h.x=-t*Math.cos(i+w*s)*Math.sin(o+S*a),h.y=t*Math.cos(o+S*a),h.z=t*Math.sin(i+w*s)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-S),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const S=u[p][y+1],v=u[p][y],R=u[p+1][y],w=u[p+1][y+1];(p!==0||o>0)&&d.push(S,v,w),(p!==n-1||l<Math.PI)&&d.push(v,R,w)}this.setIndex(d),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qh extends oi{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new z,h=new z,f=new z;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kl extends Ea{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Im,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ci extends kl{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const zd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class sb{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const ob=new sb;class tf{constructor(t){this.manager=t!==void 0?t:ob,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}tf.DEFAULT_MATERIAL_NAME="__DEFAULT";class ab extends tf{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=zd.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=da("img");function l(){u(),zd.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class lb extends tf{constructor(t){super(t)}load(t,e,n,i){const s=new sn,o=new ab(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class ef extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Vc=new we,Bd=new z,kd=new z;class og{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xh,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bd),kd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kd),e.updateMatrixWorld(),Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hd=new we,So=new z,Gc=new z;class cb extends og{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),So.setFromMatrixPosition(t.matrixWorld),n.position.copy(So),Gc.copy(n.position),Gc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Gc),n.updateMatrixWorld(),i.makeTranslation(-So.x,-So.y,-So.z),Hd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd)}}class ub extends ef{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hb extends og{constructor(){super(new Ym(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vd extends ef{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new hb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fb extends ef{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class db{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Gd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Gd(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);class pb extends jm{constructor(){super();const t=new Tr;t.deleteAttribute("uv");const e=new kl({side:En}),n=new kl,i=new ub(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new ae(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new ae(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ae(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new ae(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new ae(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new ae(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new ae(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new ae(t,Ts(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new ae(t,Ts(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new ae(t,Ts(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new ae(t,Ts(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new ae(t,Ts(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new ae(t,Ts(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ts(r){const t=new oo;return t.color.setScalar(r),t}const bo=new z;function jn(r,t,e,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;bo.copy(t),bo[n]=0,bo.normalize();const c=.5*o/(o+a),u=1-bo.angleTo(r)/l;return Math.sign(bo[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Wc extends Tr{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new z,l=new z,c=new z(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,g=new z,_=.5/i;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*s,u[m+1]=c.y*Math.sign(a.y)+l.y*s,u[m+2]=c.z*Math.sign(a.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=jn(g,l,"z","y",s,n),f[p+1]=1-jn(g,l,"y","z",s,e);break;case 1:g.set(-1,0,0),f[p+0]=1-jn(g,l,"z","y",s,n),f[p+1]=1-jn(g,l,"y","z",s,e);break;case 2:g.set(0,1,0),f[p+0]=1-jn(g,l,"x","z",s,t),f[p+1]=jn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),f[p+0]=1-jn(g,l,"x","z",s,t),f[p+1]=1-jn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),f[p+0]=1-jn(g,l,"x","y",s,t),f[p+1]=1-jn(g,l,"y","x",s,e);break;case 5:g.set(0,0,-1),f[p+0]=jn(g,l,"x","y",s,t),f[p+1]=1-jn(g,l,"y","x",s,e);break}}}const Eo={mono:{name:"mono",west:["#ffffff","#ececec","#dcdcdc"],east:["#f8f8f8","#e4e4e4","#d2d2d4"],north:["#ffffff","#e8e8ea","#d8d8da"],south:["#f4f4f2","#e2e2e0","#d6d6d2"],ground:"#ececea"},glass:{name:"glass",west:["#d40f2c","#ff5a3c","#8c1020","#e8742c"],east:["#2434c8","#3c50e0","#141c78","#5064e8"],north:["#14b4c8","#1890b4","#0c6880"],south:["#c88a3c","#b0b0b8","#d8d8e0"],ground:"#ececea"},mondrian:{name:"mondrian",west:["#e02020","#f4f4f4","#e02020"],east:["#1b4bd2","#f4f4f4","#1b4bd2"],north:["#f7d417","#f4f4f4"],south:["#f4f4f4","#f7d417","#17181c"],ground:"#f4f4f2"},koons:{name:"koons",west:["#ff7ab8","#f0439a","#ffb0d4"],east:["#c46ce0","#9a4ad0","#d8a0f0"],north:["#7de0d8","#4ac8c0"],south:["#f0c0d8","#e8e8f0","#ffd88a"],ground:"#f6eef2"},vangogh:{name:"vangogh",west:["#f2c744","#e8a020","#d88818"],east:["#1e3a8a","#3b6bd8","#152860"],north:["#2c5090","#4878c0"],south:["#3a6858","#f2c744","#28406e"],ground:"#eae6d8"},dior:{name:"dior",west:["#d8b060","#c89840","#f0d8a0"],east:["#e8b4b8","#d89498","#f4d8da"],north:["#b89868","#e0c890"],south:["#503028","#d8c8a8","#f0e4c8"],ground:"#f2ece0"}},sr=["glass","mondrian","koons","vangogh","dior"],Ja=new Jt;function To(r,t,e,n){const i=(t*180/Math.PI+360)%360;let s;i>=120&&i<240?s=r.west:i<60||i>=300?s=r.east:i>=240?s=r.north:s=r.south,Ja.set(s[Math.floor(e*s.length)%s.length]);const o=.92+e*.16;n.setRGB(Ja.r*o,Ja.g*o,Ja.b*o)}function Tn(r,t,e,n={x:0,y:0,z:0}){const i=[];for(let s=0;s<r;s+=1)for(let o=0;o<t;o+=1)for(let a=0;a<e;a+=1)i.push({x:s+n.x,y:a+n.y,z:o+n.z});return i}function Wd(r){const t=new Set;return r.filter(e=>{const n=`${e.x}:${e.y}:${e.z}`;return t.has(n)?!1:(t.add(n),!0)})}const mb="#ad082b",gb="#c32244",_b="#786966",vb="#203397",xb="#007d93",yb=[{id:"building-1",index:1,dimensions:"5 × 3 × 10",note:"完整长方体",color:gb,origin:[-10,-15],cells:Tn(5,3,10)},{id:"building-2",index:2,dimensions:"6 × 3 × 10",note:"左右各 3 格，前后错位 1 格",color:mb,origin:[-17,-7],cells:Wd([...Tn(3,3,10),...Tn(3,3,10,{x:3,y:0,z:1})])},{id:"building-3",index:3,dimensions:"5 × 5 × 8",note:"完整长方体",color:"#920725",origin:[-17,3],cells:Tn(5,5,8)},{id:"building-4",index:4,dimensions:"5 × 4 × 3 + 1",note:"顶部附加 1 个方块",color:"#b43852",origin:[-15,13],cells:[...Tn(5,4,3),{x:2,y:3,z:0}]},{id:"building-5",index:5,dimensions:"2 × 4 × 10",note:"完整长方体",color:"#b89d91",origin:[-3,-16],cells:Tn(2,4,10)},{id:"building-6",index:6,dimensions:"5 × 3 × 10",note:"完整长方体",color:_b,origin:[3,-16],cells:Tn(5,3,10)},{id:"building-7",index:7,dimensions:"3 × 3 × 10",note:"完整长方体",color:xb,origin:[11,-14],cells:Tn(3,3,10)},{id:"building-8",index:8,dimensions:"2 × 3 × 7",note:"完整长方体",color:"#3a4da1",origin:[3,-7],cells:Tn(2,3,7)},{id:"building-9",index:9,dimensions:"3 × 5 × 8",note:"完整长方体",color:"#3047ad",origin:[11,-4],cells:Tn(3,5,8)},{id:"building-10",index:10,dimensions:"5 × 3 × 6 + 2 × 5 × 2",note:"第一至六层为 5 × 3，第七至八层为 2 × 5",color:vb,origin:[9,8],cells:Wd([...Tn(5,3,6),...Tn(2,5,2,{x:3,y:6,z:-2})])},{id:"building-11",index:11,dimensions:"4 × 4 × 2",note:"中央低层建筑",color:"#655a57",origin:[-3,8],cells:Tn(4,4,2)},{id:"building-12",index:12,dimensions:"2 × 3 × 7",note:"位于建筑 5 后方，与建筑 1、6 对齐",color:"#966d72",origin:[-3,-14],cells:Tn(2,3,7)}];function Mb(r,t){return`${r}/${t.x}/${t.y}/${t.z}`}const Sb=["building-1/0/6/0","building-1/0/6/1","building-1/0/7/1","building-1/0/7/2","building-1/0/8/1","building-1/0/8/2","building-1/1/5/0","building-1/1/6/0","building-1/1/6/1","building-1/1/6/2","building-1/1/7/1","building-1/1/7/2","building-1/1/8/2","building-1/2/5/0","building-1/2/5/1","building-1/2/6/0","building-1/2/6/1","building-1/2/6/2","building-1/2/7/1","building-1/2/7/2","building-1/2/8/2","building-1/3/4/0","building-1/3/5/0","building-1/3/5/1","building-1/3/5/2","building-1/3/6/1","building-1/3/6/2","building-1/4/4/0","building-1/4/4/1","building-1/4/5/0","building-1/4/6/1","building-1/4/6/2","building-1/4/7/2","building-10/0/0/2","building-10/0/1/1","building-10/0/1/2","building-10/0/2/2","building-10/0/3/1","building-10/0/3/2","building-10/0/4/2","building-10/1/2/1","building-10/1/3/2","building-10/2/2/1","building-10/2/2/2","building-10/3/2/1","building-10/3/2/2","building-10/3/6/-2","building-10/4/1/2","building-10/4/2/1","building-2/0/5/0","building-2/0/5/1","building-2/0/6/1","building-2/0/7/2","building-2/1/5/0","building-2/1/5/1","building-2/1/6/0","building-2/1/6/1","building-2/1/6/2","building-2/2/5/0","building-2/2/5/1","building-2/2/5/2","building-2/2/6/1","building-2/2/6/2","building-2/3/4/3","building-2/3/5/1","building-2/3/5/2","building-2/3/5/3","building-2/3/6/1","building-2/4/5/2","building-2/4/5/3","building-2/4/6/1","building-2/4/6/2","building-2/4/6/3","building-2/5/4/1","building-2/5/5/1","building-2/5/5/2","building-2/5/6/2","building-2/5/6/3","building-2/5/7/3","building-3/0/1/3","building-3/0/1/4","building-3/0/2/2","building-3/0/2/3","building-3/0/3/0","building-3/0/3/1","building-3/0/3/2","building-3/1/1/4","building-3/1/2/2","building-3/1/2/3","building-3/1/3/1","building-3/1/4/0","building-3/2/2/3","building-3/2/3/4","building-3/2/4/0","building-3/2/4/1","building-3/2/4/2","building-3/3/2/2","building-3/3/2/3","building-3/3/2/4","building-3/3/3/2","building-3/3/4/0","building-3/3/4/1","building-3/3/4/2","building-3/3/4/4","building-3/3/5/1","building-3/3/5/2","building-3/3/6/2","building-3/3/7/2","building-3/4/0/2","building-3/4/1/2","building-3/4/1/3","building-3/4/2/1","building-3/4/2/2","building-3/4/2/3","building-3/4/2/4","building-3/4/3/1","building-3/4/3/2","building-3/4/3/4","building-3/4/4/0","building-3/4/4/2","building-3/4/5/0","building-3/4/5/2","building-3/4/6/2","building-3/4/7/2","building-4/2/0/1","building-4/2/0/2","building-4/2/1/1","building-4/2/1/2","building-4/3/0/1","building-4/3/0/2","building-4/3/1/1","building-4/3/1/2","building-4/4/0/1","building-4/4/0/2","building-4/4/1/1","building-4/4/1/2","building-5/0/4/3","building-5/0/5/2","building-5/0/5/3","building-5/0/6/1","building-5/0/6/2","building-5/0/7/0","building-5/0/7/1","building-5/0/8/0","building-5/1/5/3","building-5/1/6/2","building-5/1/6/3","building-5/1/7/1","building-5/1/7/2","building-5/1/8/0","building-5/1/8/1","building-6/0/6/2","building-6/0/7/1","building-6/0/8/0","building-6/1/7/0","building-6/1/7/1","building-6/1/8/2","building-6/2/6/0","building-6/2/7/0","building-6/2/7/2","building-6/2/8/1","building-6/2/8/2","building-6/3/6/0","building-6/3/6/1","building-6/3/6/2","building-6/3/7/2","building-6/4/5/0","building-6/4/5/2","building-6/4/6/0","building-6/4/6/1","building-6/4/6/2","building-7/0/5/0","building-7/0/5/1","building-7/0/5/2","building-7/0/6/2","building-7/1/5/2","building-7/1/6/0","building-7/1/6/1","building-7/1/7/0","building-7/1/7/1","building-7/1/7/2","building-7/2/6/2","building-7/2/7/1","building-7/2/8/0","building-8/0/2/0","building-8/0/3/1","building-8/0/3/2","building-8/0/4/2","building-8/1/3/1","building-8/1/4/0","building-8/1/4/1","building-8/1/4/2","building-8/1/5/2","building-9/0/3/0","building-9/0/4/0","building-9/0/4/1","building-9/0/5/1","building-9/0/5/2","building-9/0/5/3","building-9/0/6/2","building-9/0/6/4","building-9/0/7/3","building-9/0/7/4","building-9/1/3/0","building-9/1/4/0","building-9/1/4/1","building-9/1/5/1","building-9/1/5/2","building-9/1/6/3","building-9/1/6/4","building-9/1/7/3","building-9/2/3/0","building-9/2/4/1","building-9/2/4/4","building-9/2/5/2","building-9/2/6/3"],bb=[{id:"building-1",x:-11,y:0,z:-14},{id:"building-2",x:-12,y:0,z:-7},{id:"building-3",x:-11,y:0,z:1},{id:"building-4",x:-9,y:0,z:8},{id:"building-5",x:-3,y:0,z:-7},{id:"building-6",x:0,y:0,z:-14},{id:"building-7",x:6,y:0,z:-10},{id:"building-8",x:2,y:0,z:-6},{id:"building-9",x:6,y:0,z:-2},{id:"building-10",x:4,y:0,z:8},{id:"building-11",x:-3,y:0,z:1},{id:"building-12",x:-3,y:0,z:-14}],nf={deleted:Sb,positions:bb},Xd={1:"#bd1737",2:"#8e0928",3:"#760722",4:"#aa3151",5:"#8a7063",6:"#202d8a",7:"#006f80",8:"#293b91",9:"#213181",10:"#19236f",11:"#514541",12:"#76564f"},Eb={mondrian:["#f2f0ea","#e02418","#f5c400","#0f47c4","#1b1b18","#f2f0ea"],koons:["#b8860b","#a8305f","#0f8f96","#c9ccd2","#5a2d82","#a8552a","#1f6fb2"],vangogh:["#c8d0da","#b9c4d2","#cdd6e0","#c2ccd8","#b4c0cf"],dior:["#d9a441","#a8712c","#f0dcb0","#8a5520","#c99a4e"]},Tb=new Set(nf.deleted),wb=new Map(nf.positions.map(r=>[r.id,r])),Ab=Object.fromEntries(nf.positions.map(r=>[Number(r.id.replace("building-","")),{x:r.x,y:r.y,z:r.z}]));function Cb(){const r=[];for(const t of yb){const e=wb.get(t.id)??{x:0,y:0,z:0};for(const n of t.cells)Tb.has(Mb(t.id,n))||r.push({x:n.x+e.x,y:n.y+e.y+.5,z:n.z+e.z,buildingIndex:t.index,variation:.84+(n.x*17+n.y*11+n.z*7+t.index*5)%9/8*.16})}return r}const ag=Cb(),ja=ag.reduce((r,t)=>({minX:Math.min(r.minX,t.x),maxX:Math.max(r.maxX,t.x),minZ:Math.min(r.minZ,t.z),maxZ:Math.max(r.maxZ,t.z)}),{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}),Rb={help:"会员客服",exchange:"积分兑换",community:"会员社区",parking:"停车服务",points:"会员积分",profile:"会员中心",login:"会员码"},vi=r=>`/images/tkl-experience/images/taikoo-li/icons/${r}.png`,Qa=Math.PI/2,Pb=[{buildingIndex:1,kind:"help",localPosition:[3.75,7.75,2.54],scale:1.48,url:vi("help")},{buildingIndex:2,kind:"exchange",localPosition:[4.5,8.6,3.54],scale:1.5,url:vi("exchange")},{buildingIndex:2,kind:"exchange",localPosition:[5.05,1.75,3.54],scale:.62,url:vi("exchange")},{buildingIndex:3,kind:"community",localPosition:[2,8.04,2],rotation:[-Qa,0,0],scale:1.72,url:vi("community")},{buildingIndex:4,kind:"parking",localPosition:[3.25,3.04,2.15],rotation:[-Qa,0,0],scale:1.92,url:vi("parking")},{buildingIndex:4,kind:"parking",localPosition:[2,4.04,0],rotation:[-Qa,0,0],scale:.76,url:vi("parking")},{buildingIndex:5,kind:"points",localPosition:[.5,6.85,3.54],scale:1.34,url:vi("points")},{buildingIndex:5,kind:"points",localPosition:[.5,2.2,3.54],scale:.58,url:vi("points")},{buildingIndex:10,kind:"profile",localPosition:[3.5,8.04,0],rotation:[-Qa,0,0],scale:1.88,url:vi("profile")},{buildingIndex:11,kind:"login",localPosition:[1.5,1,3.54],scale:1.56,url:vi("login")}],Xc=1.7,Lb=Math.PI/12;function Db(){const r=document.createElement("canvas");r.width=r.height=1024;const t=r.getContext("2d");t.clearRect(0,0,1024,1024),t.fillStyle="rgba(43,160,176,0.94)",t.beginPath(),t.arc(512,512,465,0,Math.PI*2),t.arc(512,512,338,0,Math.PI*2,!0),t.fill();const e="LET'S FASHION FORWARD  •  LET'S FASHION FORWARD  •  ";t.font="600 45px Arial, sans-serif",t.fillStyle="rgba(255,255,255,0.94)",t.textAlign="center",t.textBaseline="middle";const n=405,i=Math.PI*2/e.length;[...e].forEach((o,a)=>{const l=a*i-Math.PI/2;t.save(),t.translate(512+Math.cos(l)*n,512+Math.sin(l)*n),t.rotate(l+Math.PI/2),t.fillText(o,0,0),t.restore()});const s=new jl(r);return s.colorSpace=Sn,s.anisotropy=12,s}function Yd(r){const t=new Jh;t.moveTo(-.68,-.6),t.lineTo(.5,0),t.lineTo(-.68,.6),t.closePath();const e=new Bl;e.moveTo(-.42,-.34),e.lineTo(.23,0),e.lineTo(-.42,.34),e.closePath(),t.holes.push(e);const n=new ae(new tc(t,{depth:.08,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:3}),new Ci({color:"#ffe789",emissive:"#9d6500",emissiveIntensity:.35,metalness:.72,roughness:.18}));return n.position.x=r,n}class Ib{constructor(t,e=8.2){j(this,"group",new Ai);j(this,"portalY");this.portalY=e,this.group.position.set(t.x,e,t.z),this.group.scale.setScalar(Xc);const n=new Ai;n.rotation.x=Lb,this.group.add(n);const i=new Jh;i.absarc(0,0,1.78,0,Math.PI*2,!1);const s=new Bl;s.absarc(0,0,1.18,0,Math.PI*2,!0),i.holes.push(s);const o=new ae(new tc(i,{bevelEnabled:!0,bevelSegments:3,bevelSize:.025,bevelThickness:.025,depth:.16}),new Ci({color:"#26223f",clearcoat:1,envMapIntensity:2.2,metalness:.42,opacity:.82,roughness:.08,transparent:!0}));o.position.y=.03,o.rotation.x=Math.PI/2,n.add(o);const a=new ae(new jh(1.18,1.78,128),new Ci({color:"#ffffff",map:Db(),opacity:.94,roughness:.2,side:di,transparent:!0}));a.position.y=.08,a.rotation.x=-Math.PI/2,n.add(a);const l=new ae(new Qh(1.78,.06,16,128),new Ci({color:"#d7fbff",clearcoat:1,opacity:.72,roughness:.12,transparent:!0}));l.position.y=.08,l.rotation.x=Math.PI/2,n.add(l);const c=new ae(new ec(1,64,48),new Ci({color:"#9b7fbd",clearcoat:1,envMapIntensity:2.2,opacity:.5,roughness:.08,thickness:.8,transparent:!0,transmission:.5}));c.scale.setScalar(1.08),this.group.add(c);const u=new Ai;u.position.set(-.08,.05,.24),u.rotation.x=.02,u.scale.setScalar(.52),u.add(Yd(-.38),Yd(.38)),this.group.add(u)}update(t){const e=Math.sin(t*1.12);this.group.position.y=this.portalY+e*.14*Xc,this.group.rotation.y=Math.sin(t*.24)*.045;const n=Xc*(1+e*.014);this.group.scale.setScalar(n)}}class Ub{constructor(t,e){j(this,"mesh");j(this,"baseY");const n=new ec(1,72,52),i=n.attributes.position,s=new z;for(let o=0;o<i.count;o++){s.fromBufferAttribute(i,o);const a=Math.atan2(s.z,s.x),l=s.y,c=(1-l)*.5,u=1+Math.sin(l*11+a*1.6)*.1+Math.sin(l*19-a*.7)*.04;s.x*=u*(.88+c*.22),s.z*=u*(.68+c*.14),s.y*=1.08,s.x+=Math.sin((l+1)*2.4)*.16+.08-l*.06;const h=l*.18,f=s.x*Math.cos(h)-s.z*Math.sin(h),d=s.x*Math.sin(h)+s.z*Math.cos(h);i.setXYZ(o,f,s.y,d)}n.computeVertexNormals(),this.mesh=new ae(n,new Ci({color:"#f6f4f2",envMapIntensity:2.8,metalness:1,roughness:.065})),this.mesh.position.copy(t),this.mesh.scale.copy(e),this.baseY=t.y}update(t,e){this.mesh.rotation.y+=e*.18,this.mesh.position.y=this.baseY+Math.sin(t*1.05)*.045*1.7}}const Ml=.16,Nb=.78,Sl=-.38,ih=.17,Ob=ih-Sl,Yc=Ml/2,Fb=new Set([3,6,12]);function wo(r,t,e){const n=Math.hypot(r,e)/46,i=t/14;return Math.min(1,n*.72+i*.28)}const qd=new Jt;function zb(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Bs=class Bs{constructor(t=1,e=!1){j(this,"group",new Ai);j(this,"icons",[]);j(this,"buildings",[]);j(this,"ringMesh");j(this,"ringCubes",[]);j(this,"dummy",new on);j(this,"cubeMat");j(this,"ringMat");j(this,"mapMix",{value:0});j(this,"starryTex",null);j(this,"themeVariation",1);j(this,"baseReturn",0);j(this,"signTexPending",0);j(this,"onSignTexReady",null);j(this,"allSigns",[]);j(this,"floatingSigns",[]);j(this,"ringFadeAttr");j(this,"occFrame",0);j(this,"monoMix",1);j(this,"skinPos",0);j(this,"scatter",0);j(this,"ringWash",.05);j(this,"dirty",{color:!0,matrix:!0});j(this,"floatScale",1);j(this,"portal");j(this,"chrome");j(this,"sculptureAnchor",new z(-1.5,0,2.5));j(this,"groundMat");j(this,"scrollScatter",0);j(this,"transitionScatter",0);j(this,"dissolve",0);j(this,"portalWave",0);j(this,"chromeWave",0);j(this,"lastTime",0);j(this,"lastFloatUpdate",-1/0);j(this,"occV",new z);j(this,"occDir",new z);j(this,"cA",new Jt);j(this,"cB",new Jt);j(this,"cM",new Jt);j(this,"bgMix",new Jt("#f1f1ef"));j(this,"signsOpacity",1);this.densityScale=t,this.lowPerf=e,this.build()}build(){const t=zb(20230116),e=new Wc(.94,.94,.94,2,.04);this.cubeMat=this.lowPerf?new Ci({color:"#ffffff",clearcoat:1,clearcoatRoughness:.08,metalness:.05,roughness:.15,envMapIntensity:1.5}):new Ci({color:"#ffffff",metalness:0,roughness:.06,clearcoat:1,clearcoatRoughness:.06,transmission:.9,thickness:.8,ior:1.45,envMapIntensity:1.3,bumpMap:kb(),bumpScale:0}),this.starryTex=this.lowPerf?null:Bb(),this.lowPerf||(this.cubeMat.onBeforeCompile=m=>{m.uniforms.uMapMix=this.mapMix,m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aUvRect;`).replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
	vMapUv = vMapUv * aUvRect.z + aUvRect.xy;
#endif`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
uniform float uMapMix;`).replace("#include <map_fragment>",`#ifdef USE_MAP
	vec4 tklTexel = texture2D( map, vMapUv );
	diffuseColor.rgb = mix( diffuseColor.rgb, tklTexel.rgb, uMapMix );
#endif`)},this.cubeMat.customProgramCacheKey=()=>"tkl-center-starry");const n=new Tr(.92,.92,.92);this.ringMat=new Ci({metalness:0,roughness:.16,transparent:!0,opacity:.85,envMapIntensity:1.05,clearcoat:.5,clearcoatRoughness:.25});const i=(m,p)=>{const y=new z(m,0,p);return y.lengthSq()<.01&&y.set(1,0,0),y.normalize(),new z(y.x+(t()-.5)*1.2,.6+t()*1.6,y.z+(t()-.5)*1.2).normalize().multiplyScalar(20+t()*32)},s=new Map;for(const m of ag){const p=s.get(m.buildingIndex)??[];p.push(m),s.set(m.buildingIndex,p)}for(const[m,p]of s){const y=p.map(k=>({...k,scatterDir:i(k.x,k.z),angle:Math.atan2(k.z,k.x),floatCluster:-1,wave:wo(k.x,k.y,k.z)})),S=(k,B,F)=>`${k},${B},${F}`,v=new Map;y.forEach((k,B)=>v.set(S(k.x,k.y-.5,k.z),B));const R=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],w=new Set,E=[];for(y.forEach((k,B)=>{Math.round(k.y-.5)===0&&(w.add(B),E.push(B))});E.length;){const k=E.pop(),B=y[k];for(const[F,I,X]of R){const C=v.get(S(B.x+F,B.y-.5+I,B.z+X));C!==void 0&&!w.has(C)&&(w.add(C),E.push(C))}}const A=[],M=new Map,x=[];if(y.forEach((k,B)=>{if(w.has(B)||M.has(B))return;const F=A.length;x.push([]),A.push({phase:t()*Math.PI*2,offset:0,down:Sl,up:ih});const I=[B];for(M.set(B,F),x[F].push(B);I.length;){const X=I.pop(),C=y[X];for(const[K,at,gt]of R){const Y=v.get(S(C.x+K,C.y-.5+at,C.z+gt));Y!==void 0&&!w.has(Y)&&!M.has(Y)&&(M.set(Y,F),x[F].push(Y),I.push(Y))}}}),M.forEach((k,B)=>{x[k].length>=3&&(y[B].floatCluster=k)}),Fb.has(m)){const k=new Map;for(const I of y){if(I.floatCluster>=0)continue;const X=I.x+","+I.z,C=Math.round(I.y-.5),K=k.get(X);K?K.push(C):k.set(X,[C])}const B=new Map;for(const[I,X]of k){X.sort((C,K)=>C-K);for(let C=X.length-1;C>0;C--)if(X[C]-X[C-1]>1){B.set(I,X[C]);break}}const F=[];if(y.forEach((I,X)=>{if(I.floatCluster>=0)return;const C=B.get(I.x+","+I.z);C!==void 0&&Math.round(I.y-.5)>=C&&F.push(X)}),F.length<3){const I=new Map;let X=0;for(const at of y){const gt=Math.round(at.y-.5);I.set(gt,(I.get(gt)??0)+1),gt>X&&(X=gt)}let C=-1,K=1/0;for(let at=Math.ceil(X*.45);at<=X-2;at++){const gt=I.get(at)??0;gt>0&&gt<K&&(K=gt,C=at)}C>0&&(F.length=0,y.forEach((at,gt)=>{at.floatCluster<0&&Math.round(at.y-.5)>C&&F.push(gt)}))}if(F.length>=3){const I=A.length;A.push({phase:t()*Math.PI*2,offset:0,down:Sl,up:ih});for(const X of F)y[X].floatCluster=I}}if(A.length){const k=new Map;for(const F of y){if(F.floatCluster>=0)continue;const I=F.x+","+F.z,X=k.get(I);X?X.push(F.y):k.set(I,[F.y])}const B=new Array(A.length).fill(1/0);for(const F of y)if(!(F.floatCluster<0))for(const I of k.get(F.x+","+F.z)??[])I<F.y&&(B[F.floatCluster]=Math.min(B[F.floatCluster],F.y-I-1));for(let F=0;F<A.length;F++)A[F].down=-Math.min(-Sl,Math.max(0,B[F])),A[F].up=A[F].down+Ob}const L=e.clone(),U=new Float32Array(y.length*3);for(let k=0;k<y.length;k++){const B=.2+t()*.14;U[k*3]=t()*(1-B),U[k*3+1]=t()*(1-B),U[k*3+2]=B}L.setAttribute("aUvRect",new Os(U,3));const N=new Id(L,this.cubeMat,y.length);N.instanceMatrix.setUsage(zf),N.instanceColor=new Os(new Float32Array(y.length*3),3);const G=new Ai;G.add(N),this.group.add(G),this.buildings.push({index:m,group:G,mesh:N,cubes:y,clusters:A,hasFloaters:A.length>0})}this.buildSigns();const o=7,a=(m,p)=>m>ja.minX-o&&m<ja.maxX+o&&p>ja.minZ-o&&p<ja.maxZ+o,l=(m,p)=>m>2&&m<15&&p>18,c=[],u=new Set,h=(m,p,y)=>{const S=`${m},${p},${y}`;u.has(S)||(u.add(S),c.push({base:new z(m,p,y),scatterDir:i(m,y),angle:Math.atan2(y,m),rand:t(),wave:wo(m,p,y)}))},f=Math.round(38*this.densityScale),d=[];for(let m=0;m<f;m++){let p=0,y=0,S=!1;for(let A=0;A<60&&!S;A++){const M=t()*Math.PI*2,x=24+t()*18;p=Math.round(Math.cos(M)*x),y=Math.round(Math.sin(M)*x*.9),S=!a(p,y)&&!l(p,y)&&d.every(L=>(L.x-p)**2+(L.z-y)**2>(L.r+3.2)**2)}if(!S)continue;const v=2+Math.floor(t()*3),R=2+Math.floor(t()*3),w=Math.hypot(p,y),E=5+Math.min(12,Math.round((w-22)*.55+t()*5));d.push({x:p,z:y,r:Math.max(v,R)});for(let A=0;A<v;A++)for(let M=0;M<R;M++){const x=Math.max(2,Math.round(E*(.55+t()*.5)));for(let L=0;L<x;L++)L>1&&t()<.06||h(p+A-Math.floor(v/2),L+.5,y+M-Math.floor(R/2))}}const g=Math.round(14*this.densityScale);for(let m=0;m<g;m++){const p=t()*Math.PI*2,y=23+t()*16,S=Math.round(Math.cos(p)*y),v=Math.round(Math.sin(p)*y*.9);if(a(S,v)||l(S,v))continue;const R=1+Math.floor(t()*3),w=1+Math.floor(t()*3);for(let E=0;E<R;E++)for(let A=0;A<w;A++)t()>.2&&h(S+E,.5,v+A)}this.ringCubes=c;const _=new Float32Array(c.length).fill(1);this.ringFadeAttr=new Os(_,1),n.setAttribute("aFade",this.ringFadeAttr),this.ringMat.onBeforeCompile=m=>{m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
attribute float aFade;
varying float vFade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
	vFade = aFade;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
varying float vFade;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
	gl_FragColor.a *= vFade;`)},this.ringMat.customProgramCacheKey=()=>"tkl-ring-fade",this.ringMesh=new Id(n,this.ringMat,c.length),this.ringMesh.instanceMatrix.setUsage(zf),this.ringMesh.instanceColor=new Os(new Float32Array(c.length*3),3),this.group.add(this.ringMesh),this.buildSculpture(),this.buildGround(),this.applyMatrices(),this.applyColors(),this.setSignsOpacity(0)}buildSigns(){const t=new lb,e=new Wc(1.92,1.92,Ml,4,.06),n=new Wc(.94,.94,Ml,3,.04),i=new Ci({transparent:!0,opacity:1,clearcoat:1,clearcoatRoughness:.08,color:"#171311",envMapIntensity:1.55,metalness:.34,roughness:.16}),s=[{nx:0,ny:0,nz:1,weight:1},{nx:1,ny:0,nz:0,weight:.85},{nx:-1,ny:0,nz:0,weight:.25},{nx:0,ny:0,nz:-1,weight:.15}],o=[{nx:0,ny:1,nz:0,weight:1,top:!0}],a=l=>l.top?new si(-Math.PI/2,0,0):new si(0,Math.atan2(l.nx,l.nz),0);for(const l of Pb){const c=this.buildings.find(U=>U.index===l.buildingIndex);if(!c)continue;const u=Ab[l.buildingIndex]??{x:0,y:0,z:0},h=l.scale<1,f=h?1:2,d=new Map,g=(U,N,G)=>`${Math.round(U)},${Math.round(N)},${Math.round(G)}`;for(const U of c.cubes)d.set(g(U.x,U.y-.5,U.z),U.floatCluster);const _=(U,N,G)=>d.has(g(U,N,G)),m=u.x+l.localPosition[0],p=u.y+l.localPosition[1],y=u.z+l.localPosition[2],S=f===2?[-.5,.5]:[0],v=f===2?[[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]]:[[0,0]];let R=1/0,w=null;const E=l.rotation?o:s;for(const U of E)for(const N of c.cubes){const G=Math.round(N.y-.5);if(!_(N.x+U.nx,G+U.ny,N.z+U.nz))for(const k of S)for(const B of S){const F=U.top||U.nz!==0?N.x+k:N.x,I=U.top?N.z+B:U.nx!==0?N.z+k:N.z,X=U.top?G:G+B;if(!U.top&&X<(h?0:.5))continue;let C=!0,K=-2;for(const[gt,Y]of v){const et=U.top||U.nz!==0?F+gt:F,ft=U.top?I+Y:U.nx!==0?I+gt:I,ot=U.top?X:X+Y;if(!_(et,ot,ft)||_(et+U.nx,ot+U.ny,ft+U.nz)){C=!1;break}const At=d.get(g(et,ot,ft))??-1;if(K===-2)K=At;else if(K!==At){C=!1;break}}if(!C)continue;const at=(F-m)**2+(X-p)**2+(I-y)**2+(1-U.weight)*26+(U.top?-X*1.2:0);at<R&&(R=at,w={x:F,y:X,z:I,face:U,cluster:K})}}if(!w)continue;const A=w.face,M=new Ai;M.position.set(w.x+A.nx*(.47+Yc),w.y+.5+A.ny*(.47+Yc),w.z+A.nz*(.47+Yc)),M.rotation.copy(a(A)),M.add(new ae(h?n:e,i)),this.signTexPending++;const x=t.load(l.url,()=>{var U;--this.signTexPending===0&&((U=this.onSignTexReady)==null||U.call(this))},void 0,()=>{var U;--this.signTexPending===0&&((U=this.onSignTexReady)==null||U.call(this))});x.colorSpace=Sn,x.anisotropy=8;const L=new ae(new ts(h?.74:1.5,h?.74:1.5),new oo({map:x,alphaTest:.05,transparent:!0,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));L.position.z=Ml/2+.004,M.add(L),M.userData.wave=wo(w.x,w.y,w.z),M.userData.mount={kind:l.kind,scale:l.scale,cell:[w.x,w.y,w.z],n:[A.nx,A.ny,A.nz]},c.group.add(M),this.allSigns.push(M),w.cluster>=0&&this.floatingSigns.push({holder:M,building:c,cluster:w.cluster,baseY:M.position.y}),!h&&l.kind!=="login"&&this.icons.push({id:`${l.kind}-${l.buildingIndex}`,label:Rb[l.kind],mesh:M,worldPos:M.position.clone()})}}buildSculpture(){this.portal=new Ib(this.sculptureAnchor,8.6),this.group.add(this.portal.group),this.chrome=new Ub(new z(this.sculptureAnchor.x,3.5,this.sculptureAnchor.z),new z(1.6,1.4,1)),this.group.add(this.chrome.mesh),this.portalWave=wo(this.sculptureAnchor.x,8.6,this.sculptureAnchor.z),this.chromeWave=wo(this.sculptureAnchor.x,3.5,this.sculptureAnchor.z)}buildGround(){this.groundMat=new kl({color:Eo.mono.ground,roughness:.95,metalness:0});const t=new ae(new Kh(120,64),this.groundMat);t.rotation.x=-Math.PI/2,this.group.add(t)}setMonoMix(t){t=xi.clamp(t,0,1),!(Math.abs(t-this.monoMix)<.004)&&(this.monoMix=t,this.dirty.color=!0,this.updateStarryMix())}setBaseReturn(t){t=xi.clamp(t,0,1),!(Math.abs(t-this.baseReturn)<.004)&&(this.baseReturn=t,this.dirty.color=!0,this.applyThemeMaterial(),this.updateStarryMix())}setSkinPos(t){t=xi.clamp(t,0,sr.length-1),!(Math.abs(t-this.skinPos)<.004)&&(this.skinPos=t,this.dirty.color=!0,this.applyThemeMaterial(),this.updateStarryMix())}updateStarryMix(){const e=Math.max(0,1-Math.abs(this.skinPos-3))*(1-this.monoMix)*(1-this.baseReturn);this.mapMix.value=e;const n=e>.001?this.starryTex:null;this.cubeMat.map!==n&&(this.cubeMat.map=n,this.cubeMat.needsUpdate=!0)}applyThemeMaterial(){if(this.lowPerf)return;const t=Math.floor(this.skinPos),e=this.skinPos-t,n=Bs.THEME_MAT[sr[t]],i=Bs.THEME_MAT[sr[Math.min(t+1,sr.length-1)]],s=Bs.THEME_MAT.glass,o=this.baseReturn,a=(h,f)=>{const d=h+(f-h)*e;return d+(0-d)*0},l=h=>{const f=a(n[h],i[h]);return f+(s[h]-f)*o},c=this.cubeMat;c.metalness=l("metalness"),c.roughness=l("roughness"),c.clearcoat=l("clearcoat"),c.clearcoatRoughness=l("clearcoatRoughness"),c.transmission=l("transmission"),c.envMapIntensity=l("envMapIntensity"),c.bumpScale=l("bumpScale"),c.thickness=l("thickness"),c.ior=l("ior"),c.iridescence=l("iridescence"),c.iridescenceIOR=1.9;const u=l("variation");Math.abs(u-this.themeVariation)>.01&&(this.themeVariation=u,this.dirty.color=!0)}setScatter(t){this.scrollScatter=xi.clamp(t,0,1),this.applyScatter()}setTransitionScatter(t){this.transitionScatter=xi.clamp(t,0,1),this.applyScatter()}setDissolve(t){if(t=xi.clamp(t,0,1),!(Math.abs(t-this.dissolve)<.002)){this.dissolve=t,this.dirty.matrix=!0;for(const[e,n]of[[this.portal.group,this.portalWave],[this.chrome.mesh,this.chromeWave]]){const i=1-this.localDissolve(n);e.visible=i>.01,e.scale.setScalar(Math.max(.001,i))}this.applySignAppearance()}}localDissolve(t){if(this.dissolve<=0)return 0;const e=.78,n=(this.dissolve-t*e)/(1-e);return n<=0?0:n>=1?1:n*n*(3-2*n)}applyScatter(){const t=Math.max(this.scrollScatter,this.transitionScatter);Math.abs(t-this.scatter)<.003||(this.scatter=t,this.dirty.matrix=!0,this.floatScale=1-t)}setRingWash(t){t=xi.clamp(t,0,.8),!(Math.abs(t-this.ringWash)<.01)&&(this.ringWash=t,this.dirty.color=!0)}getSkinPos(){return this.skinPos}update(t){const e=Math.min(t-this.lastTime,.05)||.016;if(this.lastTime=t,this.dirty.matrix&&(this.applyMatrices(),this.dirty.matrix=!1),this.dirty.color&&(this.applyColors(),this.dirty.color=!1),this.scatter<.001&&this.floatScale>.01&&t-this.lastFloatUpdate>=1/30){this.lastFloatUpdate=t;for(const n of this.buildings)if(n.hasFloaters){for(const i of n.clusters){const s=(Math.sin(t*Nb+i.phase)+1)*.5;i.offset=(i.down+(i.up-i.down)*s)*this.floatScale}for(let i=0;i<n.cubes.length;i++){const s=n.cubes[i];if(s.floatCluster<0)continue;this.dummy.position.set(s.x,s.y+n.clusters[s.floatCluster].offset,s.z),this.dummy.rotation.set(0,0,0);const o=this.localDissolve(s.wave);this.dummy.position.y+=o*7,this.dummy.scale.setScalar(Math.max(1e-4,1-o)),this.dummy.updateMatrix(),n.mesh.setMatrixAt(i,this.dummy.matrix)}n.mesh.instanceMatrix.needsUpdate=!0}for(const n of this.floatingSigns)n.holder.position.y=n.baseY+n.building.clusters[n.cluster].offset}this.portal.update(t),this.chrome.update(t,e)}updateOcclusion(t,e){if(!this.ringFadeAttr||this.occFrame++%3!==0)return;this.occDir.copy(e).sub(t);const n=this.occDir.length();if(n<.001)return;this.occDir.divideScalar(n);const i=this.ringFadeAttr.array;let s=!1;for(let o=0;o<this.ringCubes.length;o++){const a=this.ringCubes[o].base;this.occV.copy(a).sub(t);const l=this.occV.dot(this.occDir);let c=1;if(l>1&&l<n-6){const h=Math.sqrt(Math.max(0,this.occV.lengthSq()-l*l)),f=7+l*.22;if(h<f){const d=xi.clamp(h/f,0,1);c=.12+.88*d*d}}const u=i[o];Math.abs(u-c)>.004&&(i[o]=u+(c-u)*.22,s=!0)}s&&(this.ringFadeAttr.needsUpdate=!0)}applyMatrices(){const t=this.scatter,e=t*t*(3-2*t);for(const n of this.buildings){for(let i=0;i<n.cubes.length;i++){const s=n.cubes[i];this.dummy.position.set(s.x+s.scatterDir.x*e,s.y+s.scatterDir.y*e,s.z+s.scatterDir.z*e);const o=e*(s.variation-.9)*20;this.dummy.rotation.set(o,o*1.3,o*.7);const a=this.localDissolve(s.wave);a>0?(this.dummy.position.y+=a*7,this.dummy.scale.setScalar(Math.max(1e-4,1-a))):this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),n.mesh.setMatrixAt(i,this.dummy.matrix)}n.mesh.instanceMatrix.needsUpdate=!0}for(let n=0;n<this.ringCubes.length;n++){const i=this.ringCubes[n];this.dummy.position.set(i.base.x+i.scatterDir.x*e,i.base.y+i.scatterDir.y*e,i.base.z+i.scatterDir.z*e);const s=e*(i.rand-.5)*4;this.dummy.rotation.set(s,s*1.3,s*.7);const o=this.localDissolve(i.wave);o>0?(this.dummy.position.y+=o*7,this.dummy.scale.setScalar(Math.max(1e-4,1-o))):this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.ringMesh.setMatrixAt(n,this.dummy.matrix)}this.ringMesh.instanceMatrix.needsUpdate=!0}centerColor(t,e,n){const i=1+(t.variation-.92)*this.themeVariation;if(e==="glass")n.set(Xd[t.buildingIndex]);else if(e==="vangogh")n.set("#c8d0da");else{const s=Eb[e];n.set(s[(t.buildingIndex-1)%s.length])}this.baseReturn>.001&&(qd.set(Xd[t.buildingIndex]),n.lerp(qd,this.baseReturn)),n.multiplyScalar(i)}applyColors(){const t=Math.floor(this.skinPos),e=this.skinPos-t,n=sr[t],i=sr[Math.min(t+1,sr.length-1)],s=Eo.mono;for(const a of this.buildings){const l=a.mesh.instanceColor;for(let c=0;c<a.cubes.length;c++){const u=a.cubes[c];this.centerColor(u,n,this.cA),e>.001&&(this.centerColor(u,i,this.cB),this.cA.lerp(this.cB,e)),this.monoMix>.001&&(To(s,u.angle,u.variation,this.cM),this.cM.lerp($d.set("#fffdf6"),.72),this.cM.multiplyScalar(1.02+u.variation*.06),this.cA.lerp(this.cM,this.monoMix)),l.setXYZ(c,this.cA.r,this.cA.g,this.cA.b)}l.needsUpdate=!0}const o=this.ringMesh.instanceColor;for(let a=0;a<this.ringCubes.length;a++){const l=this.ringCubes[a];To(Eo[n],l.angle,l.rand,this.cA),e>.001&&(To(Eo[i],l.angle,l.rand,this.cB),this.cA.lerp(this.cB,e)),this.baseReturn>.001&&(To(Eo.glass,l.angle,l.rand,this.cB),this.cA.lerp(this.cB,this.baseReturn)),this.cA.lerp(this.bgMix,this.ringWash),this.cA.multiplyScalar(.84),this.monoMix>.001&&(To(s,l.angle,l.rand,this.cM),this.cM.lerp($d.set("#c8ccd4"),.5),this.cM.multiplyScalar(.72),this.cA.lerp(this.cM,this.monoMix)),o.setXYZ(a,this.cA.r,this.cA.g,this.cA.b)}o.needsUpdate=!0}warmUpSigns(t,e,n){const i=this.allSigns.map(s=>s.visible);for(const s of this.allSigns)s.visible=!0,s.traverse(o=>{const a=o.material;a&&a.map&&t.initTexture(a.map)});t.compile(e,n),t.debug.checkShaderErrors=!1,this.allSigns.forEach((s,o)=>s.visible=i[o])}setSignsOpacity(t){t=xi.clamp(t,0,1),!(Math.abs(t-this.signsOpacity)<.01)&&(this.signsOpacity=t,this.applySignAppearance())}applySignAppearance(){var t;for(const e of this.allSigns){const n=(t=e.userData).baseScale??(t.baseScale=e.scale.x),i=this.localDissolve(e.userData.wave??0),s=this.signsOpacity*(1-i);e.visible=s>.02,e.visible&&(e.scale.setScalar(Math.max(.001,n*(.6+.4*this.signsOpacity)*(1-i))),e.traverse(o=>{const a=o.material;a&&"opacity"in a&&(a.opacity=s)}))}}};j(Bs,"THEME_MAT",{glass:{metalness:0,roughness:.06,clearcoat:1,clearcoatRoughness:.06,transmission:.9,thickness:.8,ior:1.45,envMapIntensity:1.3,bumpScale:0,iridescence:.05,variation:1},mondrian:{metalness:0,roughness:.62,clearcoat:0,clearcoatRoughness:.6,transmission:0,thickness:0,ior:1.4,envMapIntensity:.55,bumpScale:0,iridescence:0,variation:.25},koons:{metalness:1,roughness:.025,clearcoat:1,clearcoatRoughness:.02,transmission:0,thickness:0,ior:2.4,envMapIntensity:3.2,bumpScale:0,iridescence:.85,variation:.7},vangogh:{metalness:.04,roughness:.7,clearcoat:.1,clearcoatRoughness:.55,transmission:0,thickness:0,ior:1.4,envMapIntensity:.55,bumpScale:.85,iridescence:0,variation:.5},dior:{metalness:.82,roughness:.09,clearcoat:1,clearcoatRoughness:.06,transmission:.3,thickness:.55,ior:1.7,envMapIntensity:2.6,bumpScale:0,iridescence:.12,variation:.8}});let rh=Bs;const $d=new Jt;function Bb(){const t=document.createElement("canvas");t.width=t.height=1024;const e=t.getContext("2d");let n=18890615;const i=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=e.createLinearGradient(0,0,0,1024);s.addColorStop(0,"#152a52"),s.addColorStop(.55,"#1c3a66"),s.addColorStop(1,"#122040"),e.fillStyle=s,e.fillRect(0,0,1024,1024);const o=["#27498a","#3a64ad","#5b8ac8","#7fa8d8","#2c3f75","#d9c65a"];e.lineCap="round";for(let l=0;l<1400;l++){const c=i()*1024,u=i()*1024,h=6+i()*46,f=i()*Math.PI*2,d=f+.5+i()*1.4,g=o[Math.floor(i()*(i()<.84?5:6))];e.strokeStyle=g,e.globalAlpha=.5+i()*.5,e.lineWidth=3+i()*7,e.beginPath(),e.arc(c,u,h,f,d),e.stroke()}e.globalAlpha=1;for(let l=0;l<26;l++){const c=i()*1024,u=i()*1024*.85,h=14+i()*30,f=e.createRadialGradient(c,u,1,c,u,h*2.2);f.addColorStop(0,"rgba(244,224,130,0.95)"),f.addColorStop(.4,"rgba(230,196,90,0.5)"),f.addColorStop(1,"rgba(230,196,90,0)"),e.fillStyle=f,e.beginPath(),e.arc(c,u,h*2.2,0,Math.PI*2),e.fill(),e.strokeStyle="#f0dc8a",e.lineWidth=3;for(let d=0;d<3;d++)e.globalAlpha=.7-d*.2,e.beginPath(),e.arc(c,u,h*(.5+d*.35),i()*6,i()*6+4),e.stroke();e.globalAlpha=1}const a=new jl(t);return a.colorSpace=Sn,a.anisotropy=4,a}function kb(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,256,256);let n=20230116;const i=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let o=0;o<90;o++){const a=i()*256,l=i()*256,c=14+i()*36,u=i()*Math.PI*2,h=u+.7+i()*1.6,f=96+Math.floor(i()*96);e.strokeStyle=`rgb(${f},${f},${f})`,e.lineWidth=2.5+i()*4,e.lineCap="round",e.beginPath(),e.arc(a,l,c,u,h),e.stroke()}const s=new jl(t);return s.wrapS=s.wrapT=Fl,s}const lg="creer-locale",cg={"数字街区 · 未来软件猜想":"Digital Block · A vision of future software",返回作品列表:"Back to work",章节导航:"Chapter navigation",数字街区:"Digital Block","2023 · 空间化界面实验":"2023 · Spatial interface experiment",从一片街区开始:"It began with a city block",'它的原型，是北京一片由立方体建筑组成的开放式街区。店铺沿街生长，人群在楼宇之间穿行："逛"这件事，本身就是空间里的体验。':"Its starting point was an open city block in Beijing, built from cubic volumes. Shops line the streets and people move between buildings. Wandering is already a spatial experience.","2023 年，一次难得不设限的机会落在我们手里：不必先算成本，不必迁就现成的方案。于是我们决定，把这种在楼宇之间穿行的体验，原样搬进屏幕。":"In 2023, we were given a rare brief without fixed limits. We did not have to begin with cost or an existing solution, so we brought the experience of moving between buildings directly onto the screen.","街区实景 · 白天":"The district by day","街区实景 · 夜景":"The district at night","开放式街区 · 楼宇之间的动线":"Open district · Paths between buildings","立方体建筑群 · 概念的原点":"Cubic architecture · The origin of the concept","建筑 → 体素":"Architecture → voxels","把街区的立方体建筑拆到最小单位，再用色彩、光和呼吸感重新堆起来。熟悉的空间秩序还在，材质和逻辑已经完全是数字的。":"We reduced the district's cubic architecture to its smallest units, then rebuilt it with colour, light, and rhythm. The familiar spatial order remains, while its material and logic become entirely digital.","远看是一座城市；走近了，每一块都是一个入口。":"From afar it is a city. Up close, every block becomes an entrance.","开屏动画 · 从像素到色彩":"Opening sequence · From pixels to colour","开屏 · 进化之路":"Opening · A path of evolution","按下开屏，画面从黑白像素开始生长，一路快进到色彩鲜明。这是向一款老游戏的致敬，也是项目想说的第一句话：":"The opening grows from monochrome pixels and fast-forwards into vivid colour. It is a tribute to an old game and the project's first statement:","设计从像素时代一路进化到今天，而它还想继续向前。双箭头，就是那记快进键。":"Design has evolved from the pixel era to today, and it still wants to move forward. The double arrow is its fast-forward key.","远景 · 一眼看全":"Far view · Everything at a glance","站在街区上空，功能一览无余：停车、积分、会员、客服、社区。它们不是列表里的条目，而是挂在建筑上的招牌。":"From above the district, parking, points, membership, support, and community are visible at a glance. They are not list items but signs attached to buildings.",'你不是在"找功能"，你是在"认路"。':"You are not finding features. You are learning the place.","全局导航 · 一眼看全":"Global navigation · Everything at a glance","即点即达 · 无需层层进入":"Direct access · No nested menus","远景 ⇄ 近景 · 一键切换":"Far ⇄ near · One-tap switch","首页远景 · 动态演示":"Home far view · Live demo","远景 · 实机演示":"Far view · Live demo","首页近景 · 动态演示":"Home near view · Live demo","近景 · 实机演示":"Near view · Live demo","近景 · 走进去":"Near view · Step inside","视角落下来，城市变成空间。雕塑、悬浮球、楼宇之间的缝隙：功能入口成了可以走近、可以触摸的场景。":"As the viewpoint descends, the city becomes a place. Sculptures, floating forms, and gaps between buildings turn feature entry points into scenes you can approach and touch.","空间俯冲 · 从俯瞰到置身其中":"Spatial dive · From overview to immersion","沉浸交互 · 功能即场景":"Immersive interaction · Features become scenes",换一种色彩:"Change the colour",就是另一座城:"and it becomes another city","蒙德里安的原色、波普的糖果、星夜的蓝与金、高定的香槟：同一座街区，在不同的艺术语言里醒来。城市不必重建，联名可以一直生长。":"Mondrian primaries, pop candy, the blue and gold of a starry night, couture champagne: the same district wakes in different visual languages. The city stays in place while collaborations keep growing.","滚动切换，或点击下方色卡。":"Scroll to switch, or select a palette below.","晶体 · 光学玻璃":"Crystal · Optical glass","蒙德里安 · 原色构成":"Mondrian · Primary composition","波普 · 镜面糖果":"Pop · Mirrored candy","星夜 · 蓝与金":"Starry night · Blue and gold","高定 · 金香槟":"Couture · Golden champagne",接到现实上:"Connect it to reality","把导航接到实景上，路径变成可以看见的东西。体素语言可以一直长下去：新的活动、新的季节、新的联名。":"Connect navigation to the physical world and the route becomes visible. The voxel language can keep growing through new events, seasons, and collaborations.","AR 实景导航":"AR navigation",持续演进:"Continuous evolution",体素语言的持续演进:"The voxel language keeps evolving","2023 · 后记":"2023 · Afterword",一份写给未来的草稿:"A draft addressed to the future","那一年的许多个深夜，办公室的灯一直亮着，笑声也没停过。没有人谈成本，没有人谈边界：我们只是想看看，软件还能长成什么样子。":"Through many late nights that year, the office lights stayed on and the laughter never stopped. Nobody talked about cost or boundaries. We only wanted to see what software could become.","后来我常常想起它：想起页面可以是场所，功能可以是风景，想起一群人把天马行空当作日常的那段时间。":"I still think about it: pages becoming places, features becoming landscapes, and a group of people who treated wild ideas as part of everyday work.",'双箭头的意思是"快进"。它至今仍指着前方。':"The double arrow means fast-forward. It still points ahead.","回到街区上空 ↑":"Return above the district ↑","2023 · 一次不设限的提案 · 一座可以走进去的城市":"2023 · An open brief · A city you can enter","如果软件不再是一张张页面，而是一座可以走进去的城市，会是什么样子？":"What if software stopped behaving like pages and became a city you could enter?","向下滚动，进入街区":"Scroll down to enter the district",界面落地:"Making the interface real","概念要能落地才算成立。从首页到会员、积分、停车，每一屏都在同一套体素语言里，该有的效率一点没少。":"A concept only works when it can ship. From home to membership, points, and parking, every screen shares the same voxel language without losing efficiency.","首页 · 远景":"Home · Far view","首页 · 近景":"Home · Near view","会员码 · 远景":"Member code · Far view","会员码 · 近景":"Member code · Near view","活动 · 远景":"Events · Far view","活动 · 近景":"Events · Near view",会员中心:"Member centre",会员信息编辑:"Edit member profile","会员 · 信息编辑":"Member · Edit profile",积分兑换:"Points exchange",积分记录:"Points history","积分 · 兑换记录":"Points · Exchange history","停车场 车辆信息":"Parking · Vehicle details","停车场 · 车辆信息":"Parking · Vehicle details","停车场 无车辆":"Parking · No vehicle","停车场 · 无车辆":"Parking · No vehicle",开场:"Opening",起点:"Origin",概念:"Concept",开屏:"Intro",远景:"Far view",近景:"Near view",界面:"Interface",延展:"Extension",演进:"Evolution",后记:"Afterword",会员客服:"Member support",会员社区:"Member community",停车服务:"Parking service",会员积分:"Member points",会员码:"Member code"},Hb={...cg,Origin:"Origine",Opening:"Ouverture",Evolution:"Évolution","数字街区 · 未来软件猜想":"Quartier numérique · Une vision du logiciel futur",返回作品列表:"Retour aux projets",章节导航:"Navigation des chapitres",数字街区:"Quartier numérique","2023 · 空间化界面实验":"2023 · Expérience d'interface spatiale",从一片街区开始:"Tout commence par un quartier",'它的原型，是北京一片由立方体建筑组成的开放式街区。店铺沿街生长，人群在楼宇之间穿行："逛"这件事，本身就是空间里的体验。':"Le point de départ est un quartier ouvert de Pékin, composé de volumes cubiques. Les boutiques bordent les rues et les visiteurs circulent entre les bâtiments. Flâner est déjà une expérience spatiale.","2023 年，一次难得不设限的机会落在我们手里：不必先算成本，不必迁就现成的方案。于是我们决定，把这种在楼宇之间穿行的体验，原样搬进屏幕。":"En 2023, nous avons reçu un brief rare, sans limites imposées. Sans devoir partir du coût ni d'une solution existante, nous avons transposé à l'écran le plaisir de circuler entre les bâtiments.","街区实景 · 白天":"Le quartier de jour","街区实景 · 夜景":"Le quartier de nuit","开放式街区 · 楼宇之间的动线":"Quartier ouvert · Parcours entre les bâtiments","立方体建筑群 · 概念的原点":"Architecture cubique · Origine du concept","建筑 → 体素":"Architecture → voxels","把街区的立方体建筑拆到最小单位，再用色彩、光和呼吸感重新堆起来。熟悉的空间秩序还在，材质和逻辑已经完全是数字的。":"Nous avons réduit l'architecture cubique du quartier à ses plus petites unités, puis nous l'avons reconstruite avec de la couleur, de la lumière et du rythme. L'ordre spatial reste familier, tandis que la matière et la logique deviennent entièrement numériques.","远看是一座城市；走近了，每一块都是一个入口。":"De loin, c'est une ville. De près, chaque bloc devient une entrée.","开屏动画 · 从像素到色彩":"Séquence d'ouverture · Du pixel à la couleur","开屏 · 进化之路":"Ouverture · Une voie d'évolution","按下开屏，画面从黑白像素开始生长，一路快进到色彩鲜明。这是向一款老游戏的致敬，也是项目想说的第一句话：":"L'ouverture naît de pixels monochromes puis accélère jusqu'à la couleur vive. C'est un hommage à un ancien jeu et la première phrase du projet :","设计从像素时代一路进化到今天，而它还想继续向前。双箭头，就是那记快进键。":"Le design a évolué depuis l'ère du pixel et veut encore avancer. La double flèche est sa touche d'avance rapide.","远景 · 一眼看全":"Vue générale · Tout voir d'un regard","站在街区上空，功能一览无余：停车、积分、会员、客服、社区。它们不是列表里的条目，而是挂在建筑上的招牌。":"Au-dessus du quartier, parking, points, adhésion, assistance et communauté apparaissent d'un regard. Ce ne sont plus des éléments de liste, mais des enseignes fixées aux bâtiments.",'你不是在"找功能"，你是在"认路"。':"Vous ne cherchez pas des fonctions. Vous apprenez le lieu.","全局导航 · 一眼看全":"Navigation globale · Tout voir d'un regard","即点即达 · 无需层层进入":"Accès direct · Aucun menu imbriqué","远景 ⇄ 近景 · 一键切换":"Vue générale ⇄ proche · Un seul geste","首页远景 · 动态演示":"Accueil, vue générale · Démonstration","远景 · 实机演示":"Vue générale · Démonstration","首页近景 · 动态演示":"Accueil, vue proche · Démonstration","近景 · 实机演示":"Vue proche · Démonstration","近景 · 走进去":"Vue proche · Entrer dans la ville","视角落下来，城市变成空间。雕塑、悬浮球、楼宇之间的缝隙：功能入口成了可以走近、可以触摸的场景。":"Lorsque le point de vue descend, la ville devient un lieu. Sculptures, formes suspendues et passages entre les bâtiments transforment les fonctions en scènes que l'on peut approcher et toucher.","空间俯冲 · 从俯瞰到置身其中":"Plongée spatiale · Du survol à l'immersion","沉浸交互 · 功能即场景":"Interaction immersive · Les fonctions deviennent des scènes",换一种色彩:"Changer la couleur",就是另一座城:"et découvrir une autre ville","蒙德里安的原色、波普的糖果、星夜的蓝与金、高定的香槟：同一座街区，在不同的艺术语言里醒来。城市不必重建，联名可以一直生长。":"Les primaires de Mondrian, les bonbons pop, le bleu et l'or d'une nuit étoilée, le champagne de la haute couture : le même quartier s'éveille dans différents langages visuels. La ville reste en place et les collaborations continuent de grandir.","滚动切换，或点击下方色卡。":"Faites défiler ou choisissez une palette ci-dessous.","晶体 · 光学玻璃":"Cristal · Verre optique","蒙德里安 · 原色构成":"Mondrian · Composition primaire","波普 · 镜面糖果":"Pop · Bonbon miroir","星夜 · 蓝与金":"Nuit étoilée · Bleu et or","高定 · 金香槟":"Haute couture · Champagne doré",接到现实上:"Relier le projet au réel","把导航接到实景上，路径变成可以看见的东西。体素语言可以一直长下去：新的活动、新的季节、新的联名。":"Reliée au monde réel, la navigation rend le trajet visible. Le langage voxel peut continuer de grandir avec de nouveaux événements, de nouvelles saisons et de nouvelles collaborations.","AR 实景导航":"Navigation en réalité augmentée",持续演进:"Évolution continue",体素语言的持续演进:"Le langage voxel continue d'évoluer","2023 · 后记":"2023 · Postface",一份写给未来的草稿:"Une esquisse adressée au futur","那一年的许多个深夜，办公室的灯一直亮着，笑声也没停过。没有人谈成本，没有人谈边界：我们只是想看看，软件还能长成什么样子。":"Pendant de nombreuses nuits cette année-là, les lumières du bureau sont restées allumées et les rires n'ont pas cessé. Personne ne parlait de coût ni de limites. Nous voulions seulement voir ce que le logiciel pouvait devenir.","后来我常常想起它：想起页面可以是场所，功能可以是风景，想起一群人把天马行空当作日常的那段时间。":"J'y pense encore : des pages devenues lieux, des fonctions devenues paysages, et un groupe de personnes pour qui les idées les plus libres faisaient partie du quotidien.",'双箭头的意思是"快进"。它至今仍指着前方。':"La double flèche signifie avance rapide. Elle pointe toujours vers l'avant.","回到街区上空 ↑":"Revenir au-dessus du quartier ↑","2023 · 一次不设限的提案 · 一座可以走进去的城市":"2023 · Un brief ouvert · Une ville à parcourir","如果软件不再是一张张页面，而是一座可以走进去的城市，会是什么样子？":"Et si le logiciel cessait d'être une suite de pages pour devenir une ville à parcourir ?","向下滚动，进入街区":"Faites défiler pour entrer dans le quartier",界面落地:"Donner corps à l'interface","概念要能落地才算成立。从首页到会员、积分、停车，每一屏都在同一套体素语言里，该有的效率一点没少。":"Un concept ne vaut que s'il peut être livré. De l'accueil à l'adhésion, aux points et au parking, chaque écran partage le même langage voxel sans perdre en efficacité.","首页 · 远景":"Accueil · Vue générale","首页 · 近景":"Accueil · Vue proche","会员码 · 远景":"Code membre · Vue générale","会员码 · 近景":"Code membre · Vue proche","活动 · 远景":"Événements · Vue générale","活动 · 近景":"Événements · Vue proche",会员中心:"Espace membre",会员信息编辑:"Modifier le profil membre","会员 · 信息编辑":"Membre · Modifier le profil",积分兑换:"Échange de points",积分记录:"Historique des points","积分 · 兑换记录":"Points · Historique des échanges","停车场 车辆信息":"Parking · Informations du véhicule","停车场 · 车辆信息":"Parking · Informations du véhicule","停车场 无车辆":"Parking · Aucun véhicule","停车场 · 无车辆":"Parking · Aucun véhicule",开场:"Ouverture",起点:"Origine",概念:"Concept",开屏:"Introduction",远景:"Vue générale",近景:"Vue proche",界面:"Interface",延展:"Extension",演进:"Évolution",后记:"Postface",会员客服:"Assistance membre",会员社区:"Communauté des membres",停车服务:"Service de stationnement",会员积分:"Points membre",会员码:"Code membre"};let ug={};function bl(r){return ug[r]??r}function hg(){let r="zh";try{const t=window.localStorage.getItem(lg);(t==="en"||t==="fr"||t==="zh")&&(r=t)}catch{}return r}function Vb(){const r=hg();ug=r==="en"?cg:r==="fr"?Hb:{},document.documentElement.lang=r==="zh"?"zh-CN":r,document.title=bl(document.title);const t=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),e=[];for(;t.nextNode();)e.push(t.currentNode);for(const n of e){const i=n.textContent??"",s=i.trim(),o=bl(s);s&&o!==s&&(n.textContent=i.replace(s,o))}return document.querySelectorAll("[aria-label], [alt], [data-title]").forEach(n=>{for(const i of["aria-label","alt","data-title"]){const s=n.getAttribute(i);s&&n.setAttribute(i,bl(s))}}),r}const Fe=(r,t,e,n,i,s)=>({pos:new z(r,t,e),target:new z(n,i,s)});class Gb{constructor(t){j(this,"scene",new jm);j(this,"camera");j(this,"renderer");j(this,"city");j(this,"ready");j(this,"resolveReady");j(this,"desired",Fe(43,27,52,0,6,0));j(this,"currentPos",new z().copy(this.desired.pos));j(this,"currentTarget",new z().copy(this.desired.target));j(this,"mouse",new bt);j(this,"parallax",new bt);j(this,"clock",new db);j(this,"labelEls",new Map);j(this,"labelPos",new Map);j(this,"labelsOn",!1);j(this,"v",new z);j(this,"autoSpin",0);j(this,"spinBlend",0);j(this,"spinAngle",0);j(this,"onResize",()=>this.resize());j(this,"onVisibilityChange",()=>{this.renderer.setAnimationLoop(document.hidden?null:()=>this.tick())});j(this,"onPointerMove",t=>{this.mouse.set(t.clientX/innerWidth*2-1,t.clientY/innerHeight*2-1)});const e=window.matchMedia("(max-width: 820px)").matches;this.ready=new Promise(g=>this.resolveReady=g),this.renderer=new E1({canvas:t,antialias:!e,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e?1:1.5)),this.renderer.toneMapping=Sm,this.renderer.toneMappingExposure=1.12,this.scene.background=new Jt("#f1f1ef"),this.scene.fog=new qh("#f1f1ef",130,250),this.camera=new kn(42,1,.1,400);const n=new ju(this.renderer),i=new pb,s=new ts(12,12),o=[{color:"#fff0d5",intensity:4.4,position:[0,12,4],rotation:[Math.PI/2,0,0],scale:[1.8,1,1]},{color:"#ffc38f",intensity:3.25,position:[-11,6,-2],rotation:[0,Math.PI/2,0],scale:[1.2,1,1]},{color:"#d88465",intensity:2.65,position:[11,5,-4],rotation:[0,-Math.PI/2,0],scale:[1,.9,1]},{color:"#ffe2be",intensity:3.1,position:[0,6,12],rotation:[0,0,0],scale:[1.4,.8,1]}];for(const g of o){const _=new ae(s,new oo({color:new Jt(g.color).multiplyScalar(g.intensity),side:di,toneMapped:!1}));_.position.set(g.position[0],g.position[1],g.position[2]),_.rotation.set(g.rotation[0],g.rotation[1],g.rotation[2]),_.scale.set(g.scale[0],g.scale[1],g.scale[2]),i.add(_)}this.scene.environment=n.fromScene(i,.055).texture,n.dispose();const a=new Vd("#fff2e0",2.1);a.position.set(30,50,20),this.scene.add(a);const l=new Vd("#cfe0ff",.7);l.position.set(-24,30,-28),this.scene.add(l),this.scene.add(new fb("#ffffff",.42)),this.city=new rh(e?.6:1,e),this.scene.add(this.city.group);const c=document.createElement("canvas");c.width=c.height=256;const u=c.getContext("2d"),h=u.createRadialGradient(128,128,20,128,128,128);h.addColorStop(0,"rgba(20,18,26,0.34)"),h.addColorStop(.55,"rgba(20,18,26,0.16)"),h.addColorStop(1,"rgba(20,18,26,0)"),u.fillStyle=h,u.fillRect(0,0,256,256);const f=new jl(c),d=new ae(new ts(72,66),new oo({map:f,transparent:!0,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(0,.015,0),this.scene.add(d),this.buildIconLabels(),this.city.onSignTexReady=()=>{this.city.warmUpSigns(this.renderer,this.scene,this.camera),this.renderer.render(this.scene,this.camera),this.resolveReady()},window.addEventListener("resize",this.onResize),window.addEventListener("pointermove",this.onPointerMove),document.addEventListener("visibilitychange",this.onVisibilityChange),this.resize(),this.renderer.setAnimationLoop(()=>this.tick())}setAutoSpin(t){this.autoSpin=xi.clamp(t,0,1)}freezeSpin(){const t=this.spinAngle*this.spinBlend;if(this.autoSpin=0,this.spinAngle=0,this.spinBlend=0,Math.abs(t)<1e-4)return;const e=Math.cos(t),n=Math.sin(t),i=s=>{const o=s.x-this.currentTarget.x,a=s.z-this.currentTarget.z;s.x=this.currentTarget.x+o*e-a*n,s.z=this.currentTarget.z+o*n+a*e};i(this.currentPos),i(this.desired.pos)}snapCamera(){this.currentPos.copy(this.desired.pos),this.currentTarget.copy(this.desired.target),this.spinAngle=0,this.spinBlend=0}destroy(){var t;this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.onResize),window.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("visibilitychange",this.onVisibilityChange),this.labelEls.forEach(e=>e.remove()),this.labelEls.clear(),this.scene.traverse(e=>{const n=e;n.geometry&&n.geometry.dispose();const i=n.material;if(!i)return;const s=Array.isArray(i)?i:[i];for(const o of s){for(const a of Object.values(o))a&&a.isTexture&&a.dispose();o.dispose()}}),(t=this.scene.environment)==null||t.dispose(),this.renderer.dispose()}buildIconLabels(){const t=document.getElementById("icon-labels");for(const e of this.city.icons){const n=document.createElement("div");n.className="icon-label",n.textContent=bl(e.label),t.appendChild(n),this.labelEls.set(e.id,n),this.labelPos.set(e.id,{x:0,y:0,on:!1})}}setLabelsOn(t){t!==this.labelsOn&&(this.labelsOn=t,t||(this.labelEls.forEach(e=>e.classList.remove("is-on")),this.labelPos.forEach(e=>e.on=!1)))}resize(){const t=innerWidth,e=innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}tick(){const t=Math.min(this.clock.getDelta(),.05)||.016,e=this.clock.elapsedTime,n=1-Math.exp(-t*3.4);this.parallax.lerp(this.mouse,1-Math.exp(-t*2.5)),this.currentPos.lerp(this.desired.pos,n),this.currentTarget.lerp(this.desired.target,n);const i=this.currentPos.distanceTo(this.currentTarget),s=this.parallax.x*Math.min(2.4,i*.04),o=-this.parallax.y*Math.min(1.4,i*.025);this.camera.position.copy(this.currentPos),this.spinBlend+=(this.autoSpin-this.spinBlend)*(1-Math.exp(-t*1.8)),this.autoSpin>.5?this.spinAngle+=t*.05:this.spinBlend<.002&&(this.spinAngle=0);const a=this.spinAngle*this.spinBlend;if(Math.abs(a)>1e-4){const l=this.camera.position.x-this.currentTarget.x,c=this.camera.position.z-this.currentTarget.z,u=Math.cos(a),h=Math.sin(a);this.camera.position.x=this.currentTarget.x+l*u-c*h,this.camera.position.z=this.currentTarget.z+l*h+c*u}if(this.camera.position.x+=s,this.camera.position.y+=o,this.camera.lookAt(this.currentTarget),this.city.update(e),this.city.updateOcclusion(this.camera.position,this.currentTarget),this.labelsOn){const l=1-Math.exp(-t*11);for(const c of this.city.icons){const u=this.labelEls.get(c.id),h=this.labelPos.get(c.id);if(this.v.copy(c.worldPos),this.v.y+=1.4,this.v.project(this.camera),this.v.z>1||Math.abs(this.v.x)>1.05||Math.abs(this.v.y)>1.05){u.classList.remove("is-on"),h.on=!1;continue}const d=(this.v.x*.5+.5)*innerWidth,g=(-this.v.y*.5+.5)*innerHeight;h.on?(h.x+=(d-h.x)*l,h.y+=(g-h.y)*l):(h.x=d,h.y=g,h.on=!0),u.classList.add("is-on"),u.style.transform=`translate3d(${h.x.toFixed(2)}px, ${h.y.toFixed(2)}px, 0) translate(-50%, -130%)`}}this.renderer.render(this.scene,this.camera)}}function Wb(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Xb(r,t,e){return t&&Wb(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nn,El,Gn,hr,fr,Ys,fg,Fr,qs,dg,Wi,fi,pg,mg=function(){return nn||typeof window<"u"&&(nn=window.gsap)&&nn.registerPlugin&&nn},gg=1,zs=[],oe=[],Pi=[],$o=Date.now,sh=function(t,e){return e},Yb=function(){var t=qs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,oe),i.push.apply(i,Pi),oe=n,Pi=i,sh=function(o,a){return e[o](a)}},_r=function(t,e){return~Pi.indexOf(t)&&Pi[Pi.indexOf(t)+1][e]},Zo=function(t){return!!~dg.indexOf(t)},_n=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},mn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},tl="scrollLeft",el="scrollTop",oh=function(){return Wi&&Wi.isPressed||oe.cache++},Hl=function(t,e){var n=function i(s){if(s||s===0){gg&&(Gn.history.scrollRestoration="manual");var o=Wi&&Wi.isPressed;s=i.v=Math.round(s)||(Wi&&Wi.iOS?1:0),t(s),i.cacheID=oe.cache,o&&sh("ss",s)}else(e||oe.cache!==i.cacheID||sh("ref"))&&(i.cacheID=oe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},bn={s:tl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Hl(function(r){return arguments.length?Gn.scrollTo(r,$e.sc()):Gn.pageXOffset||hr[tl]||fr[tl]||Ys[tl]||0})},$e={s:el,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:bn,sc:Hl(function(r){return arguments.length?Gn.scrollTo(bn.sc(),r):Gn.pageYOffset||hr[el]||fr[el]||Ys[el]||0})},wn=function(t,e){return(e&&e._ctx&&e._ctx.selector||nn.utils.toArray)(t)[0]||(typeof t=="string"&&nn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},qb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},br=function(t,e){var n=e.s,i=e.sc;Zo(t)&&(t=hr.scrollingElement||fr);var s=oe.indexOf(t),o=i===$e.sc?1:2;!~s&&(s=oe.push(t)-1),oe[s+o]||_n(t,"scroll",oh);var a=oe[s+o],l=a||(oe[s+o]=Hl(_r(t,n),!0)||(Zo(t)?i:Hl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=nn.getProperty(t,"scrollBehavior")==="smooth"),l},ah=function(t,e,n){var i=t,s=t,o=$o(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var m=$o();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=$o();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Ao=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Zd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},_g=function(){qs=nn.core.globals().ScrollTrigger,qs&&qs.core&&Yb()},vg=function(t){return nn=t||mg(),!El&&nn&&typeof document<"u"&&document.body&&(Gn=window,hr=document,fr=hr.documentElement,Ys=hr.body,dg=[Gn,hr,fr,Ys],nn.utils.clamp,pg=nn.core.context||function(){},Fr="onpointerenter"in Ys?"pointer":"mouse",fg=He.isTouch=Gn.matchMedia&&Gn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Gn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=He.eventTypes=("ontouchstart"in fr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in fr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return gg=0},500),El=1),qs||_g(),El};bn.op=$e;oe.cache=0;var He=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){El||vg(nn)||console.warn("Please gsap.registerPlugin(Observer)"),qs||_g();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,S=n.onPress,v=n.onRelease,R=n.onRight,w=n.onLeft,E=n.onUp,A=n.onDown,M=n.onChangeX,x=n.onChangeY,L=n.onChange,U=n.onToggleX,N=n.onToggleY,G=n.onHover,k=n.onHoverEnd,B=n.onMove,F=n.ignoreCheck,I=n.isNormalizer,X=n.onGestureStart,C=n.onGestureEnd,K=n.onWheel,at=n.onEnable,gt=n.onDisable,Y=n.onClick,et=n.scrollSpeed,ft=n.capture,ot=n.allowClicks,At=n.lockAxis,Ut=n.onLockAxis;this.target=a=wn(a)||fr,this.vars=n,d&&(d=nn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Gn.getComputedStyle(Ys).lineHeight)||22);var Bt,Gt,nt,it,D,Ct,lt,H=this,ut=0,Ft=0,Tt=n.passive||!u&&n.passive!==!1,P=br(a,bn),b=br(a,$e),q=P(),Q=b(),rt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&fi[0]==="pointerdown",tt=Zo(a),_t=a.ownerDocument||hr,pt=[0,0,0],yt=[0,0,0],$t=0,ct=function(){return $t=$o()},mt=function(Nt,te){return(H.event=Nt)&&d&&qb(Nt.target,d)||te&&rt&&Nt.pointerType!=="touch"||F&&F(Nt,te)},Vt=function(){H._vx.reset(),H._vy.reset(),Gt.pause(),h&&h(H)},Ht=function(){var Nt=H.deltaX=Zd(pt),te=H.deltaY=Zd(yt),Et=Math.abs(Nt)>=i,Zt=Math.abs(te)>=i;L&&(Et||Zt)&&L(H,Nt,te,pt,yt),Et&&(R&&H.deltaX>0&&R(H),w&&H.deltaX<0&&w(H),M&&M(H),U&&H.deltaX<0!=ut<0&&U(H),ut=H.deltaX,pt[0]=pt[1]=pt[2]=0),Zt&&(A&&H.deltaY>0&&A(H),E&&H.deltaY<0&&E(H),x&&x(H),N&&H.deltaY<0!=Ft<0&&N(H),Ft=H.deltaY,yt[0]=yt[1]=yt[2]=0),(it||nt)&&(B&&B(H),nt&&(m&&nt===1&&m(H),y&&y(H),nt=0),it=!1),Ct&&!(Ct=!1)&&Ut&&Ut(H),D&&(K(H),D=!1),Bt=0},Pt=function(Nt,te,Et){pt[Et]+=Nt,yt[Et]+=te,H._vx.update(Nt),H._vy.update(te),c?Bt||(Bt=requestAnimationFrame(Ht)):Ht()},Qt=function(Nt,te){At&&!lt&&(H.axis=lt=Math.abs(Nt)>Math.abs(te)?"x":"y",Ct=!0),lt!=="y"&&(pt[2]+=Nt,H._vx.update(Nt,!0)),lt!=="x"&&(yt[2]+=te,H._vy.update(te,!0)),c?Bt||(Bt=requestAnimationFrame(Ht)):Ht()},Wt=function(Nt){if(!mt(Nt,1)){Nt=Ao(Nt,u);var te=Nt.clientX,Et=Nt.clientY,Zt=te-H.x,Ot=Et-H.y,qt=H.isDragging;H.x=te,H.y=Et,(qt||(Zt||Ot)&&(Math.abs(H.startX-te)>=s||Math.abs(H.startY-Et)>=s))&&(nt||(nt=qt?2:1),qt||(H.isDragging=!0),Qt(Zt,Ot))}},ce=H.onPress=function(Rt){mt(Rt,1)||Rt&&Rt.button||(H.axis=lt=null,Gt.pause(),H.isPressed=!0,Rt=Ao(Rt),ut=Ft=0,H.startX=H.x=Rt.clientX,H.startY=H.y=Rt.clientY,H._vx.reset(),H._vy.reset(),_n(I?a:_t,fi[1],Wt,Tt,!0),H.deltaX=H.deltaY=0,S&&S(H))},O=H.onRelease=function(Rt){if(!mt(Rt,1)){mn(I?a:_t,fi[1],Wt,!0);var Nt=!isNaN(H.y-H.startY),te=H.isDragging,Et=te&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Zt=Ao(Rt);!Et&&Nt&&(H._vx.reset(),H._vy.reset(),u&&ot&&nn.delayedCall(.08,function(){if($o()-$t>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(_t.createEvent){var Ot=_t.createEvent("MouseEvents");Ot.initMouseEvent("click",!0,!0,Gn,1,Zt.screenX,Zt.screenY,Zt.clientX,Zt.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(Ot)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&te&&!I&&Gt.restart(!0),nt&&Ht(),p&&te&&p(H),v&&v(H,Et)}},xt=function(Nt){return Nt.touches&&Nt.touches.length>1&&(H.isGesturing=!0)&&X(Nt,H.isDragging)},J=function(){return(H.isGesturing=!1)||C(H)},st=function(Nt){if(!mt(Nt)){var te=P(),Et=b();Pt((te-q)*et,(Et-Q)*et,1),q=te,Q=Et,h&&Gt.restart(!0)}},vt=function(Nt){if(!mt(Nt)){Nt=Ao(Nt,u),K&&(D=!0);var te=(Nt.deltaMode===1?l:Nt.deltaMode===2?Gn.innerHeight:1)*g;Pt(Nt.deltaX*te,Nt.deltaY*te,0),h&&!I&&Gt.restart(!0)}},Mt=function(Nt){if(!mt(Nt)){var te=Nt.clientX,Et=Nt.clientY,Zt=te-H.x,Ot=Et-H.y;H.x=te,H.y=Et,it=!0,h&&Gt.restart(!0),(Zt||Ot)&&Qt(Zt,Ot)}},Xt=function(Nt){H.event=Nt,G(H)},he=function(Nt){H.event=Nt,k(H)},Oe=function(Nt){return mt(Nt)||Ao(Nt,u)&&Y(H)};Gt=H._dc=nn.delayedCall(f||.25,Vt).pause(),H.deltaX=H.deltaY=0,H._vx=ah(0,50,!0),H._vy=ah(0,50,!0),H.scrollX=P,H.scrollY=b,H.isDragging=H.isGesturing=H.isPressed=!1,pg(this),H.enable=function(Rt){return H.isEnabled||(_n(tt?_t:a,"scroll",oh),o.indexOf("scroll")>=0&&_n(tt?_t:a,"scroll",st,Tt,ft),o.indexOf("wheel")>=0&&_n(a,"wheel",vt,Tt,ft),(o.indexOf("touch")>=0&&fg||o.indexOf("pointer")>=0)&&(_n(a,fi[0],ce,Tt,ft),_n(_t,fi[2],O),_n(_t,fi[3],O),ot&&_n(a,"click",ct,!0,!0),Y&&_n(a,"click",Oe),X&&_n(_t,"gesturestart",xt),C&&_n(_t,"gestureend",J),G&&_n(a,Fr+"enter",Xt),k&&_n(a,Fr+"leave",he),B&&_n(a,Fr+"move",Mt)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=it=nt=!1,H._vx.reset(),H._vy.reset(),q=P(),Q=b(),Rt&&Rt.type&&ce(Rt),at&&at(H)),H},H.disable=function(){H.isEnabled&&(zs.filter(function(Rt){return Rt!==H&&Zo(Rt.target)}).length||mn(tt?_t:a,"scroll",oh),H.isPressed&&(H._vx.reset(),H._vy.reset(),mn(I?a:_t,fi[1],Wt,!0)),mn(tt?_t:a,"scroll",st,ft),mn(a,"wheel",vt,ft),mn(a,fi[0],ce,ft),mn(_t,fi[2],O),mn(_t,fi[3],O),mn(a,"click",ct,!0),mn(a,"click",Oe),mn(_t,"gesturestart",xt),mn(_t,"gestureend",J),mn(a,Fr+"enter",Xt),mn(a,Fr+"leave",he),mn(a,Fr+"move",Mt),H.isEnabled=H.isPressed=H.isDragging=!1,gt&&gt(H))},H.kill=H.revert=function(){H.disable();var Rt=zs.indexOf(H);Rt>=0&&zs.splice(Rt,1),Wi===H&&(Wi=0)},zs.push(H),I&&Zo(a)&&(Wi=H),H.enable(_)},Xb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();He.version="3.15.0";He.create=function(r){return new He(r)};He.register=vg;He.getAll=function(){return zs.slice()};He.getById=function(r){return zs.filter(function(t){return t.vars.id===r})[0]};mg()&&nn.registerPlugin(He);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dt,Ls,se,xe,Hn,ve,rf,Vl,_a,Ko,No,nl,cn,nc,lh,yn,Kd,Jd,Ds,xg,qc,yg,xn,ch,Mg,Sg,or,uh,sf,$s,of,Jo,hh,$c,il=1,un=Date.now,Zc=un(),ri=0,Oo=0,jd=function(t,e,n){var i=zn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Qd=function(t,e){return e&&(!zn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},$b=function r(){return Oo&&requestAnimationFrame(r)},tp=function(){return nc=1},ep=function(){return nc=0},Mi=function(t){return t},Fo=function(t){return Math.round(t*1e5)/1e5||0},bg=function(){return typeof window<"u"},Eg=function(){return Dt||bg()&&(Dt=window.gsap)&&Dt.registerPlugin&&Dt},ns=function(t){return!!~rf.indexOf(t)},Tg=function(t){return(t==="Height"?of:se["inner"+t])||Hn["client"+t]||ve["client"+t]},wg=function(t){return _r(t,"getBoundingClientRect")||(ns(t)?function(){return Rl.width=se.innerWidth,Rl.height=of,Rl}:function(){return Vi(t)})},Zb=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=_r(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Tg(s):t["client"+s])||0}},Kb=function(t,e){return!e||~Pi.indexOf(t)?wg(t):function(){return Rl}},Ri=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=_r(t,n))?o()-wg(t)()[s]:ns(t)?(Hn[n]||ve[n])-Tg(i):t[n]-t["offset"+i])},rl=function(t,e){for(var n=0;n<Ds.length;n+=3)(!e||~e.indexOf(Ds[n+1]))&&t(Ds[n],Ds[n+1],Ds[n+2])},zn=function(t){return typeof t=="string"},fn=function(t){return typeof t=="function"},zo=function(t){return typeof t=="number"},zr=function(t){return typeof t=="object"},Co=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ws=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},As=Math.abs,Ag="left",Cg="top",af="right",lf="bottom",Zr="width",Kr="height",jo="Right",Qo="Left",ta="Top",ea="Bottom",We="padding",ti="margin",lo="Width",cf="Height",qe="px",ei=function(t){return se.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Jb=function(t){var e=ei(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},np=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Vi=function(t,e){var n=e&&ei(t)[lh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Dt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Gl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Rg=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},jb=function(t){return function(e){return Dt.utils.snap(Rg(t),e)}},uf=function(t){var e=Dt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Qb=function(t){return function(e,n){return uf(Rg(t))(e,n.direction)}},sl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},je=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ol=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},ip={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},al={toggleActions:"play",anticipatePin:0},Wl={top:0,left:0,center:.5,bottom:1,right:1},Tl=function(t,e){if(zn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Wl?Wl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ll=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=xe.createElement("div"),_=ns(n)||_r(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?ve:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,S=y?c:u,v="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===$e?af:lf)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],wl(g,0,i,y),g},wl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+lo]=1,s["border"+a+lo]=0,s[n.p]=e+"px",Dt.set(t,s)},ie=[],fh={},va,rp=function(){return un()-ri>34&&(va||(va=requestAnimationFrame(Yi)))},Cs=function(){(!xn||!xn.isPressed||xn.startX>ve.clientWidth)&&(oe.cache++,xn?va||(va=requestAnimationFrame(Yi)):Yi(),ri||rs("scrollStart"),ri=un())},Kc=function(){Sg=se.innerWidth,Mg=se.innerHeight},Bo=function(t){oe.cache++,(t===!0||!cn&&!yg&&!xe.fullscreenElement&&!xe.webkitFullscreenElement&&(!ch||Sg!==se.innerWidth||Math.abs(se.innerHeight-Mg)>se.innerHeight*.25))&&Vl.restart(!0)},is={},tE=[],Pg=function r(){return je(zt,"scrollEnd",r)||Wr(!0)},rs=function(t){return is[t]&&is[t].map(function(e){return e()})||tE},Fn=[],Lg=function(t){for(var e=0;e<Fn.length;e+=5)(!t||Fn[e+4]&&Fn[e+4].query===t)&&(Fn[e].style.cssText=Fn[e+1],Fn[e].getBBox&&Fn[e].setAttribute("transform",Fn[e+2]||""),Fn[e+3].uncache=1)},Dg=function(){return oe.forEach(function(t){return fn(t)&&++t.cacheID&&(t.rec=t())})},hf=function(t,e){var n;for(yn=0;yn<ie.length;yn++)n=ie[yn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Jo=!0,e&&Lg(e),e||rs("revert")},Ig=function(t,e){oe.cache++,(e||!Mn)&&oe.forEach(function(n){return fn(n)&&n.cacheID++&&(n.rec=0)}),zn(t)&&(se.history.scrollRestoration=sf=t)},Mn,Jr=0,sp,eE=function(){if(sp!==Jr){var t=sp=Jr;requestAnimationFrame(function(){return t===Jr&&Wr(!0)})}},Ug=function(){ve.appendChild($s),of=!xn&&$s.offsetHeight||se.innerHeight,ve.removeChild($s)},op=function(t){return _a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Wr=function(t,e){if(Hn=xe.documentElement,ve=xe.body,rf=[se,xe,Hn,ve],ri&&!t&&!Jo){Qe(zt,"scrollEnd",Pg);return}Ug(),Mn=zt.isRefreshing=!0,Jo||Dg();var n=rs("refreshInit");xg&&zt.sort(),e||hf(),oe.forEach(function(i){fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ie.slice(0).forEach(function(i){return i.refresh()}),Jo=!1,ie.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),hh=1,op(!0),ie.forEach(function(i){var s=Ri(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),op(!1),hh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),oe.forEach(function(i){fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ig(sf,1),Vl.pause(),Jr++,Mn=2,Yi(2),ie.forEach(function(i){return fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Mn=zt.isRefreshing=!1,rs("refresh")},dh=0,Al=1,na,Yi=function(t){if(t===2||!Mn&&!Jo){zt.isUpdating=!0,na&&na.update(0);var e=ie.length,n=un(),i=n-Zc>=50,s=e&&ie[0].scroll();if(Al=dh>s?-1:1,Mn||(dh=s),i&&(ri&&!nc&&n-ri>200&&(ri=0,rs("scrollEnd")),No=Zc,Zc=n),Al<0){for(yn=e;yn-- >0;)ie[yn]&&ie[yn].update(0,i);Al=1}else for(yn=0;yn<e;yn++)ie[yn]&&ie[yn].update(0,i);zt.isUpdating=!1}va=0},ph=[Ag,Cg,lf,af,ti+ea,ti+jo,ti+ta,ti+Qo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Cl=ph.concat([Zr,Kr,"boxSizing","max"+lo,"max"+cf,"position",ti,We,We+ta,We+jo,We+ea,We+Qo]),nE=function(t,e,n){Zs(n);var i=t._gsap;if(i.spacerIsNative)Zs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Jc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=ph.length,o=e.style,a=t.style,l;s--;)l=ph[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[lf]=a[af]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Zr]=Gl(t,bn)+qe,o[Kr]=Gl(t,$e)+qe,o[We]=a[ti]=a[Cg]=a[Ag]="0",Zs(i),a[Zr]=a["max"+lo]=n[Zr],a[Kr]=a["max"+cf]=n[Kr],a[We]=n[We],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},iE=/([A-Z])/g,Zs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Dt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(iE,"-$1").toLowerCase())}},cl=function(t){for(var e=Cl.length,n=t.style,i=[],s=0;s<e;s++)i.push(Cl[s],n[Cl[s]]);return i.t=t,i},rE=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Rl={left:0,top:0},ap=function(t,e,n,i,s,o,a,l,c,u,h,f,d,g){fn(t)&&(t=t(l)),zn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Tl("0"+t.substr(3),n):0));var _=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(t)||(t=+t),zo(t))d&&(t=Dt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&wl(a,n,i,!0);else{fn(e)&&(e=e(l));var S=(t||"0").split(" "),v,R,w,E;y=wn(e,l)||ve,v=Vi(y)||{},(!v||!v.left&&!v.top)&&ei(y).display==="none"&&(E=y.style.display,y.style.display="block",v=Vi(y),E?y.style.display=E:y.style.removeProperty("display")),R=Tl(S[0],v[i.d]),w=Tl(S[1]||"0",n),t=v[i.p]-c[i.p]-u+R+s-w,a&&wl(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var A=t+n,M=o._isStart;m="scroll"+i.d2,wl(o,A,i,M&&A>20||!M&&(h?Math.max(ve[m],Hn[m]):o.parentNode[m])<=A+1),h&&(c=Vi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+qe))}return d&&y&&(m=Vi(y),d.seek(f),p=Vi(y),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},sE=/(webkit|moz|length|cssText|inset)/i,lp=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ve){t._stOrig=s.cssText,a=ei(t);for(o in a)!+o&&!sE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Dt.core.getCache(t).uncache=1,e.appendChild(t)}},Ng=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ul=function(t,e,n){var i={};i[e.p]="+="+n,Dt.set(t,i)},cp=function(t,e){var n=br(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=Ng(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&Yi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Dt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qe(t,"wheel",n.wheelHandler),zt.isTouch&&Qe(t,"touchmove",n.wheelHandler),s},zt=(function(){function r(e,n){Ls||r.register(Dt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),uh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Oo){this.update=this.refresh=this.kill=Mi;return}n=np(zn(n)||zo(n)||n.nodeType?{trigger:n}:n,al);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,S=s.once,v=s.snap,R=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,A=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?bn:$e,L=!h&&h!==0,U=wn(n.scroller||se),N=Dt.core.getCache(U),G=ns(U),k=("pinType"in n?n.pinType:_r(U,"pinType")||G&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=L&&n.toggleActions.split(" "),I="markers"in n?n.markers:al.markers,X=G?0:parseFloat(ei(U)["border"+x.p2+lo])||0,C=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(C)},at=Zb(U,G,x),gt=Kb(U,G),Y=0,et=0,ft=0,ot=br(U,x),At,Ut,Bt,Gt,nt,it,D,Ct,lt,H,ut,Ft,Tt,P,b,q,Q,rt,tt,_t,pt,yt,$t,ct,mt,Vt,Ht,Pt,Qt,Wt,ce,O,xt,J,st,vt,Mt,Xt,he;if(C._startClamp=C._endClamp=!1,C._dir=x,m*=45,C.scroller=U,C.scroll=E?E.time.bind(E):ot,Gt=ot(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(xg=1,n.refreshPriority===-9999&&(na=C)),N.tweenScroll=N.tweenScroll||{top:cp(U,$e),left:cp(U,bn)},C.tweenTo=At=N.tweenScroll[x.p],C.scrubDuration=function(Et){xt=zo(Et)&&Et,xt?O?O.duration(Et):O=Dt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:xt,paused:!0,onComplete:function(){return p&&p(C)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),Wt=0,l||(l=i.vars.id)),v&&((!zr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ve.style&&Dt.set(G?[ve,Hn]:U,{scrollBehavior:"auto"}),oe.forEach(function(Et){return fn(Et)&&Et.target===(G?xe.scrollingElement||Hn:U)&&(Et.smooth=!1)}),Bt=fn(v.snapTo)?v.snapTo:v.snapTo==="labels"?jb(i):v.snapTo==="labelsDirectional"?Qb(i):v.directional!==!1?function(Et,Zt){return uf(v.snapTo)(Et,un()-et<500?0:Zt.direction)}:Dt.utils.snap(v.snapTo),J=v.duration||{min:.1,max:2},J=zr(J)?Ko(J.min,J.max):Ko(J,J),st=Dt.delayedCall(v.delay||xt/2||.1,function(){var Et=ot(),Zt=un()-et<500,Ot=At.tween;if((Zt||Math.abs(C.getVelocity())<10)&&!Ot&&!nc&&Y!==Et){var qt=(Et-it)/P,Be=i&&!L?i.totalProgress():qt,re=Zt?0:(Be-ce)/(un()-No)*1e3||0,Ae=Dt.utils.clamp(-qt,1-qt,As(re/2)*re/.185),Ye=qt+(v.inertia===!1?0:Ae),Se,be,pe=v,In=pe.onStart,Ce=pe.onInterrupt,pn=pe.onComplete;if(Se=Bt(Ye,C),zo(Se)||(Se=Ye),be=Math.max(0,Math.round(it+Se*P)),Et<=D&&Et>=it&&be!==Et){if(Ot&&!Ot._initted&&Ot.data<=As(be-Et))return;v.inertia===!1&&(Ae=Se-qt),At(be,{duration:J(As(Math.max(As(Ye-Be),As(Se-Be))*.185/re/.05||0)),ease:v.ease||"power3",data:As(be-Et),onInterrupt:function(){return st.restart(!0)&&Ce&&ws(C,Ce)},onComplete:function(){C.update(),Y=ot(),i&&!L&&(O?O.resetTo("totalProgress",Se,i._tTime/i._tDur):i.progress(Se)),Wt=ce=i&&!L?i.totalProgress():C.progress,y&&y(C),pn&&ws(C,pn)}},Et,Ae*P,be-Et-Ae*P),In&&ws(C,In,At.tween)}}else C.isActive&&Y!==Et&&st.restart(!0)}).pause()),l&&(fh[l]=C),f=C.trigger=wn(f||d!==!0&&d),he=f&&f._gsap&&f._gsap.stRevert,he&&(he=he(C)),d=d===!0?f:wn(d),zn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===ti||(g=!g&&d.parentNode&&d.parentNode.style&&ei(d.parentNode).display==="flex"?!1:We),C.pin=d,Ut=Dt.core.getCache(d),Ut.spacer?b=Ut.pinState:(w&&(w=wn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ut.spacerIsNative=!!w,w&&(Ut.spacerState=cl(w))),Ut.spacer=rt=w||xe.createElement("div"),rt.classList.add("pin-spacer"),l&&rt.classList.add("pin-spacer-"+l),Ut.pinState=b=cl(d)),n.force3D!==!1&&Dt.set(d,{force3D:!0}),C.spacer=rt=Ut.spacer,Qt=ei(d),ct=Qt[g+x.os2],_t=Dt.getProperty(d),pt=Dt.quickSetter(d,x.a,qe),Jc(d,rt,Qt),Q=cl(d)),I){Ft=zr(I)?np(I,ip):ip,H=ll("scroller-start",l,U,x,Ft,0),ut=ll("scroller-end",l,U,x,Ft,0,H),tt=H["offset"+x.op.d2];var Oe=wn(_r(U,"content")||U);Ct=this.markerStart=ll("start",l,Oe,x,Ft,tt,0,E),lt=this.markerEnd=ll("end",l,Oe,x,Ft,tt,0,E),E&&(Xt=Dt.quickSetter([Ct,lt],x.a,qe)),!k&&!(Pi.length&&_r(U,"fixedMarkers")===!0)&&(Jb(G?ve:U),Dt.set([H,ut],{force3D:!0}),Vt=Dt.quickSetter(H,x.a,qe),Pt=Dt.quickSetter(ut,x.a,qe))}if(E){var Rt=E.vars.onUpdate,Nt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),Rt&&Rt.apply(E,Nt||[])})}if(C.previous=function(){return ie[ie.indexOf(C)-1]},C.next=function(){return ie[ie.indexOf(C)+1]},C.revert=function(Et,Zt){if(!Zt)return C.kill(!0);var Ot=Et!==!1||!C.enabled,qt=cn;Ot!==C.isReverted&&(Ot&&(vt=Math.max(ot(),C.scroll.rec||0),ft=C.progress,Mt=i&&i.progress()),Ct&&[Ct,lt,H,ut].forEach(function(Be){return Be.style.display=Ot?"none":"block"}),Ot&&(cn=C,C.update(Ot)),d&&(!R||!C.isActive)&&(Ot?nE(d,rt,b):Jc(d,rt,ei(d),mt)),Ot||C.update(Ot),cn=qt,C.isReverted=Ot)},C.refresh=function(Et,Zt,Ot,qt){if(!((cn||!C.enabled)&&!Zt)){if(d&&Et&&ri){Qe(r,"scrollEnd",Pg);return}!Mn&&K&&K(C),cn=C,At.tween&&!Ot&&(At.tween.kill(),At.tween=0),O&&O.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Le){return Le.vars.immediateRender&&Le.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Be=at(),re=gt(),Ae=E?E.duration():Ri(U,x),Ye=P<=.01||!P,Se=0,be=qt||0,pe=zr(Ot)?Ot.end:n.end,In=n.endTrigger||f,Ce=zr(Ot)?Ot.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),pn=C.pinnedContainer=n.pinnedContainer&&wn(n.pinnedContainer,C),T=f&&Math.max(0,ie.indexOf(C))||0,V=T,$,Z,W,ht,dt,St,Lt,Yt,Kt,It,jt,fe,me;for(I&&zr(Ot)&&(fe=Dt.getProperty(H,x.p),me=Dt.getProperty(ut,x.p));V-- >0;)St=ie[V],St.end||St.refresh(0,1)||(cn=C),Lt=St.pin,Lt&&(Lt===f||Lt===d||Lt===pn)&&!St.isReverted&&(It||(It=[]),It.unshift(St),St.revert(!0,!0)),St!==ie[V]&&(T--,V--);for(fn(Ce)&&(Ce=Ce(C)),Ce=jd(Ce,"start",C),it=ap(Ce,f,Be,x,ot(),Ct,H,C,re,X,k,Ae,E,C._startClamp&&"_startClamp")||(d?-.001:0),fn(pe)&&(pe=pe(C)),zn(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(zn(Ce)?Ce.split(" ")[0]:"")+pe:(Se=Tl(pe.substr(2),Be),pe=zn(Ce)?Ce:(E?Dt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,it):it)+Se,In=f)),pe=jd(pe,"end",C),D=Math.max(it,ap(pe||(In?"100% 0":Ae),In,Be,x,ot()+Se,lt,ut,C,re,X,k,Ae,E,C._endClamp&&"_endClamp"))||-.001,Se=0,V=T;V--;)St=ie[V]||{},Lt=St.pin,Lt&&St.start-St._pinPush<=it&&!E&&St.end>0&&($=St.end-(C._startClamp?Math.max(0,St.start):St.start),(Lt===f&&St.start-St._pinPush<it||Lt===pn)&&isNaN(Ce)&&(Se+=$*(1-St.progress)),Lt===d&&(be+=$));if(it+=Se,D+=Se,C._startClamp&&(C._startClamp+=Se),C._endClamp&&!Mn&&(C._endClamp=D||-.001,D=Math.min(D,Ri(U,x))),P=D-it||(it-=.01)&&.001,Ye&&(ft=Dt.utils.clamp(0,1,Dt.utils.normalize(it,D,vt))),C._pinPush=be,Ct&&Se&&($={},$[x.a]="+="+Se,pn&&($[x.p]="-="+ot()),Dt.set([Ct,lt],$)),d&&!(hh&&C.end>=Ri(U,x)))$=ei(d),ht=x===$e,W=ot(),yt=parseFloat(_t(x.a))+be,!Ae&&D>1&&(jt=(G?xe.scrollingElement||Hn:U).style,jt={style:jt,value:jt["overflow"+x.a.toUpperCase()]},G&&ei(ve)["overflow"+x.a.toUpperCase()]!=="scroll"&&(jt.style["overflow"+x.a.toUpperCase()]="scroll")),Jc(d,rt,$),Q=cl(d),Z=Vi(d,!0),Yt=k&&br(U,ht?bn:$e)(),g?(mt=[g+x.os2,P+be+qe],mt.t=rt,V=g===We?Gl(d,x)+P+be:0,V&&(mt.push(x.d,V+qe),rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=V+qe)),Zs(mt),pn&&ie.forEach(function(Le){Le.pin===pn&&Le.vars.pinSpacing!==!1&&(Le._subPinOffset=!0)}),k&&ot(vt)):(V=Gl(d,x),V&&rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=V+qe)),k&&(dt={top:Z.top+(ht?W-it:Yt)+qe,left:Z.left+(ht?Yt:W-it)+qe,boxSizing:"border-box",position:"fixed"},dt[Zr]=dt["max"+lo]=Math.ceil(Z.width)+qe,dt[Kr]=dt["max"+cf]=Math.ceil(Z.height)+qe,dt[ti]=dt[ti+ta]=dt[ti+jo]=dt[ti+ea]=dt[ti+Qo]="0",dt[We]=$[We],dt[We+ta]=$[We+ta],dt[We+jo]=$[We+jo],dt[We+ea]=$[We+ea],dt[We+Qo]=$[We+Qo],q=rE(b,dt,R),Mn&&ot(0)),i?(Kt=i._initted,qc(1),i.render(i.duration(),!0,!0),$t=_t(x.a)-yt+P+be,Ht=Math.abs(P-$t)>1,k&&Ht&&q.splice(q.length-2,2),i.render(0,!0,!0),Kt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),qc(0)):$t=P,jt&&(jt.value?jt.style["overflow"+x.a.toUpperCase()]=jt.value:jt.style.removeProperty("overflow-"+x.a));else if(f&&ot()&&!E)for(Z=f.parentNode;Z&&Z!==ve;)Z._pinOffset&&(it-=Z._pinOffset,D-=Z._pinOffset),Z=Z.parentNode;It&&It.forEach(function(Le){return Le.revert(!1,!0)}),C.start=it,C.end=D,Gt=nt=Mn?vt:ot(),!E&&!Mn&&(Gt<vt&&ot(vt),C.scroll.rec=0),C.revert(!1,!0),et=un(),st&&(Y=-1,st.restart(!0)),cn=0,i&&L&&(i._initted||Mt)&&i.progress()!==Mt&&i.progress(Mt||0,!0).render(i.time(),!0,!0),(Ye||ft!==C.progress||E||_||i&&!i._initted)&&(i&&!L&&(i._initted||ft||i.vars.immediateRender!==!1)&&i.totalProgress(E&&it<-.001&&!ft?Dt.utils.normalize(it,D,0):ft,!0),C.progress=Ye||(Gt-it)/P===ft?0:ft),d&&g&&(rt._pinOffset=Math.round(C.progress*$t)),O&&O.invalidate(),isNaN(fe)||(fe-=Dt.getProperty(H,x.p),me-=Dt.getProperty(ut,x.p),ul(H,x,fe),ul(Ct,x,fe-(qt||0)),ul(ut,x,me),ul(lt,x,me-(qt||0))),Ye&&!Mn&&C.update(),u&&!Mn&&!Tt&&(Tt=!0,u(C),Tt=!1)}},C.getVelocity=function(){return(ot()-nt)/(un()-No)*1e3||0},C.endAnimation=function(){Co(C.callbackAnimation),i&&(O?O.progress(1):i.paused()?L||Co(i,C.direction<0,1):Co(i,i.reversed()))},C.labelToScroll=function(Et){return i&&i.labels&&(it||C.refresh()||it)+i.labels[Et]/i.duration()*P||0},C.getTrailing=function(Et){var Zt=ie.indexOf(C),Ot=C.direction>0?ie.slice(0,Zt).reverse():ie.slice(Zt+1);return(zn(Et)?Ot.filter(function(qt){return qt.vars.preventOverlaps===Et}):Ot).filter(function(qt){return C.direction>0?qt.end<=it:qt.start>=D})},C.update=function(Et,Zt,Ot){if(!(E&&!Ot&&!Et)){var qt=Mn===!0?vt:C.scroll(),Be=Et?0:(qt-it)/P,re=Be<0?0:Be>1?1:Be||0,Ae=C.progress,Ye,Se,be,pe,In,Ce,pn,T;if(Zt&&(nt=Gt,Gt=E?ot():qt,v&&(ce=Wt,Wt=i&&!L?i.totalProgress():re)),m&&d&&!cn&&!il&&ri&&(!re&&it<qt+(qt-nt)/(un()-No)*m?re=1e-4:re===1&&D>qt+(qt-nt)/(un()-No)*m&&(re=.9999)),re!==Ae&&C.enabled){if(Ye=C.isActive=!!re&&re<1,Se=!!Ae&&Ae<1,Ce=Ye!==Se,In=Ce||!!re!=!!Ae,C.direction=re>Ae?1:-1,C.progress=re,In&&!cn&&(be=re&&!Ae?0:re===1?1:Ae===1?2:3,L&&(pe=!Ce&&F[be+1]!=="none"&&F[be+1]||F[be],T=i&&(pe==="complete"||pe==="reset"||pe in i))),M&&(Ce||T)&&(T||h||!i)&&(fn(M)?M(C):C.getTrailing(M).forEach(function(W){return W.endAnimation()})),L||(O&&!cn&&!il?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",re,i._tTime/i._tDur):(O.vars.totalProgress=re,O.invalidate().restart())):i&&i.totalProgress(re,!!(cn&&(et||Et)))),d){if(Et&&g&&(rt.style[g+x.os2]=ct),!k)pt(Fo(yt+$t*re));else if(In){if(pn=!Et&&re>Ae&&D+1>qt&&qt+1>=Ri(U,x),R)if(!Et&&(Ye||pn)){var V=Vi(d,!0),$=qt-it;lp(d,ve,V.top+(x===$e?$:0)+qe,V.left+(x===$e?0:$)+qe)}else lp(d,rt);Zs(Ye||pn?q:Q),Ht&&re<1&&Ye||pt(yt+(re===1&&!pn?$t:0))}}v&&!At.tween&&!cn&&!il&&st.restart(!0),a&&(Ce||S&&re&&(re<1||!$c))&&_a(a.targets).forEach(function(W){return W.classList[Ye||S?"add":"remove"](a.className)}),o&&!L&&!Et&&o(C),In&&!cn?(L&&(T&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(C)),(Ce||!$c)&&(c&&Ce&&ws(C,c),B[be]&&ws(C,B[be]),S&&(re===1?C.kill(!1,1):B[be]=0),Ce||(be=re===1?1:3,B[be]&&ws(C,B[be]))),A&&!Ye&&Math.abs(C.getVelocity())>(zo(A)?A:2500)&&(Co(C.callbackAnimation),O?O.progress(1):Co(i,pe==="reverse"?1:!re,1))):L&&o&&!cn&&o(C)}if(Pt){var Z=E?qt/E.duration()*(E._caScrollDist||0):qt;Vt(Z+(H._isFlipped?1:0)),Pt(Z)}Xt&&Xt(-qt/E.duration()*(E._caScrollDist||0))}},C.enable=function(Et,Zt){C.enabled||(C.enabled=!0,Qe(U,"resize",Bo),G||Qe(U,"scroll",Cs),K&&Qe(r,"refreshInit",K),Et!==!1&&(C.progress=ft=0,Gt=nt=Y=ot()),Zt!==!1&&C.refresh())},C.getTween=function(Et){return Et&&At?At.tween:O},C.setPositions=function(Et,Zt,Ot,qt){if(E){var Be=E.scrollTrigger,re=E.duration(),Ae=Be.end-Be.start;Et=Be.start+Ae*Et/re,Zt=Be.start+Ae*Zt/re}C.refresh(!1,!1,{start:Qd(Et,Ot&&!!C._startClamp),end:Qd(Zt,Ot&&!!C._endClamp)},qt),C.update()},C.adjustPinSpacing=function(Et){if(mt&&Et){var Zt=mt.indexOf(x.d)+1;mt[Zt]=parseFloat(mt[Zt])+Et+qe,mt[1]=parseFloat(mt[1])+Et+qe,Zs(mt)}},C.disable=function(Et,Zt){if(Et!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Zt||O&&O.pause(),vt=0,Ut&&(Ut.uncache=1),K&&je(r,"refreshInit",K),st&&(st.pause(),At.tween&&At.tween.kill()&&(At.tween=0)),!G)){for(var Ot=ie.length;Ot--;)if(ie[Ot].scroller===U&&ie[Ot]!==C)return;je(U,"resize",Bo),G||je(U,"scroll",Cs)}},C.kill=function(Et,Zt){C.disable(Et,Zt),O&&!Zt&&O.kill(),l&&delete fh[l];var Ot=ie.indexOf(C);Ot>=0&&ie.splice(Ot,1),Ot===yn&&Al>0&&yn--,Ot=0,ie.forEach(function(qt){return qt.scroller===C.scroller&&(Ot=1)}),Ot||Mn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,Et&&i.revert({kill:!1}),Zt||i.kill()),Ct&&[Ct,lt,H,ut].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),na===C&&(na=0),d&&(Ut&&(Ut.uncache=1),Ot=0,ie.forEach(function(qt){return qt.pin===d&&Ot++}),Ot||(Ut.spacer=0)),n.onKill&&n.onKill(C)},ie.push(C),C.enable(!1,!1),he&&he(C),i&&i.add&&!P){var te=C.update;C.update=function(){C.update=te,oe.cache++,it||D||C.refresh()},Dt.delayedCall(.01,C.update),P=.01,it=D=0}else C.refresh();d&&eE()},r.register=function(n){return Ls||(Dt=n||Eg(),bg()&&window.document&&r.enable(),Ls=Oo),Ls},r.defaults=function(n){if(n)for(var i in n)al[i]=n[i];return al},r.disable=function(n,i){Oo=0,ie.forEach(function(o){return o[i?"kill":"disable"](n)}),je(se,"wheel",Cs),je(xe,"scroll",Cs),clearInterval(nl),je(xe,"touchcancel",Mi),je(ve,"touchstart",Mi),sl(je,xe,"pointerdown,touchstart,mousedown",tp),sl(je,xe,"pointerup,touchend,mouseup",ep),Vl.kill(),rl(je);for(var s=0;s<oe.length;s+=3)ol(je,oe[s],oe[s+1]),ol(je,oe[s],oe[s+2])},r.enable=function(){if(se=window,xe=document,Hn=xe.documentElement,ve=xe.body,Dt){if(_a=Dt.utils.toArray,Ko=Dt.utils.clamp,uh=Dt.core.context||Mi,qc=Dt.core.suppressOverwrites||Mi,sf=se.history.scrollRestoration||"auto",dh=se.pageYOffset||0,Dt.core.globals("ScrollTrigger",r),ve){Oo=1,$s=document.createElement("div"),$s.style.height="100vh",$s.style.position="absolute",Ug(),$b(),He.register(Dt),r.isTouch=He.isTouch,or=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ch=He.isTouch===1,Qe(se,"wheel",Cs),rf=[se,xe,Hn,ve],Dt.matchMedia?(r.matchMedia=function(u){var h=Dt.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Dt.addEventListener("matchMediaInit",function(){Dg(),hf()}),Dt.addEventListener("matchMediaRevert",function(){return Lg()}),Dt.addEventListener("matchMedia",function(){Wr(0,1),rs("matchMedia")}),Dt.matchMedia().add("(orientation: portrait)",function(){return Kc(),Kc})):console.warn("Requires GSAP 3.11.0 or later"),Kc(),Qe(xe,"scroll",Cs);var n=ve.hasAttribute("style"),i=ve.style,s=i.borderTopStyle,o=Dt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Vi(ve),$e.m=Math.round(a.top+$e.sc())||0,bn.m=Math.round(a.left+bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ve.setAttribute("style",""),ve.removeAttribute("style")),nl=setInterval(rp,250),Dt.delayedCall(.5,function(){return il=0}),Qe(xe,"touchcancel",Mi),Qe(ve,"touchstart",Mi),sl(Qe,xe,"pointerdown,touchstart,mousedown",tp),sl(Qe,xe,"pointerup,touchend,mouseup",ep),lh=Dt.utils.checkPrefix("transform"),Cl.push(lh),Ls=un(),Vl=Dt.delayedCall(.2,Wr).pause(),Ds=[xe,"visibilitychange",function(){var u=se.innerWidth,h=se.innerHeight;xe.hidden?(Kd=u,Jd=h):(Kd!==u||Jd!==h)&&Bo()},xe,"DOMContentLoaded",Wr,se,"load",Wr,se,"resize",Bo],rl(Qe),ie.forEach(function(u){return u.enable(0,1)}),l=0;l<oe.length;l+=3)ol(je,oe[l],oe[l+1]),ol(je,oe[l],oe[l+2])}else if(xe){var c=function u(){r.enable(),xe.removeEventListener("DOMContentLoaded",u)};xe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&($c=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(nl)||(nl=i)&&setInterval(rp,i),"ignoreMobileResize"in n&&(ch=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(rl(je)||rl(Qe,n.autoRefreshEvents||"none"),yg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=wn(n),o=oe.indexOf(s),a=ns(s);~o&&oe.splice(o,a?6:2),i&&(a?Pi.unshift(se,i,ve,i,Hn,i):Pi.unshift(s,i))},r.clearMatchMedia=function(n){ie.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(zn(n)?wn(n):n).getBoundingClientRect(),a=o[s?Zr:Kr]*i||0;return s?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},r.positionInViewport=function(n,i,s){zn(n)&&(n=wn(n));var o=n.getBoundingClientRect(),a=o[s?Zr:Kr],l=i==null?a/2:i in Wl?Wl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},r.killAll=function(n){if(ie.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=is.killAll||[];is={},i.forEach(function(s){return s()})}},r})();zt.version="3.15.0";zt.saveStyles=function(r){return r?_a(r).forEach(function(t){if(t&&t.style){var e=Fn.indexOf(t);e>=0&&Fn.splice(e,5),Fn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Dt.core.getCache(t),uh())}}):Fn};zt.revert=function(r,t){return hf(!r,t)};zt.create=function(r,t){return new zt(r,t)};zt.refresh=function(r){return r?Bo(!0):(Ls||zt.register())&&Wr(!0)};zt.update=function(r){return++oe.cache&&Yi(r===!0?2:0)};zt.clearScrollMemory=Ig;zt.maxScroll=function(r,t){return Ri(r,t?bn:$e)};zt.getScrollFunc=function(r,t){return br(wn(r),t?bn:$e)};zt.getById=function(r){return fh[r]};zt.getAll=function(){return ie.filter(function(r){return r.vars.id!=="ScrollSmoother"})};zt.isScrolling=function(){return!!ri};zt.snapDirectional=uf;zt.addEventListener=function(r,t){var e=is[r]||(is[r]=[]);~e.indexOf(t)||e.push(t)};zt.removeEventListener=function(r,t){var e=is[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};zt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Dt.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&fn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return fn(s)&&(s=s(),Qe(zt,"refresh",function(){return s=t.batchMax()})),_a(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(zt.create(c))}),e};var up=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},jc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===Hn&&r(ve,e)},hl={auto:1,scroll:1},oE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Dt.core.getCache(s),a=un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ve&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(hl[(l=ei(s)).overflowY]||hl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ns(s)&&(hl[(l=ei(s)).overflowY]||hl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Og=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&oE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qe(xe,He.eventTypes[0],fp,!1,!0)},onDisable:function(){return je(xe,He.eventTypes[0],fp,!0)}})},aE=/(input|label|select|textarea)/i,hp,fp=function(t){var e=aE.test(t.target.tagName);(e||hp)&&(t._gsapAllow=!0,hp=e)},lE=function(t){zr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=wn(t.target)||Hn,u=Dt.core.globals().ScrollSmoother,h=u&&u.get(),f=or&&(t.content&&wn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=br(c,$e),g=br(c,bn),_=1,m=(He.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,p=0,y=fn(i)?function(){return i(a)}:function(){return i||2.8},S,v,R=Og(c,t.type,!0,s),w=function(){return v=!1},E=Mi,A=Mi,M=function(){l=Ri(c,$e),A=Ko(or?1:0,l),n&&(E=Ko(0,Ri(c,bn))),S=Jr},x=function(){f._gsap.y=Fo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(w);var I=Fo(a.deltaY/2),X=A(d.v-I);if(f&&X!==d.v+d.offset){d.offset=X-d.v;var C=Fo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=oe.cache,Yi()}return!0}d.offset&&x(),v=!0},U,N,G,k,B=function(){M(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&Dt.set(f,{y:"+=0"}),t.ignoreCheck=function(F){return or&&F.type==="touchmove"&&L()||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){v=!1;var F=_;_=Fo((se.visualViewport&&se.visualViewport.scale||1)/m),U.pause(),F!==_&&jc(c,_>1.01?!0:n?!1:"x"),N=g(),G=d(),M(),S=Jr},t.onRelease=t.onGestureStart=function(F,I){if(d.offset&&x(),!I)k.restart(!0);else{oe.cache++;var X=y(),C,K;n&&(C=g(),K=C+X*.05*-F.velocityX/.227,X*=up(g,C,K,Ri(c,bn)),U.vars.scrollX=E(K)),C=d(),K=C+X*.05*-F.velocityY/.227,X*=up(d,C,K,Ri(c,$e)),U.vars.scrollY=A(K),U.invalidate().duration(X).play(.01),(or&&U.vars.scrollY>=l||C>=l-1)&&Dt.to({},{onUpdate:B,duration:X})}o&&o(F)},t.onWheel=function(){U._ts&&U.pause(),un()-p>1e3&&(S=0,p=un())},t.onChange=function(F,I,X,C,K){if(Jr!==S&&M(),I&&n&&g(E(C[2]===I?N+(F.startX-F.x):g()+I-C[1])),X){d.offset&&x();var at=K[2]===X,gt=at?G+F.startY-F.y:d()+X-K[1],Y=A(gt);at&&gt!==Y&&(G+=Y-gt),d(Y)}(X||I)&&Yi()},t.onEnable=function(){jc(c,n?!1:"x"),zt.addEventListener("refresh",B),Qe(se,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),R.enable()},t.onDisable=function(){jc(c,!0),je(se,"resize",B),zt.removeEventListener("refresh",B),R.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=or,or&&!d()&&d(1),or&&Dt.ticker.add(Mi),k=a._dc,U=Dt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ng(d,d(),function(){return U.pause()})},onUpdate:Yi,onComplete:k.vars.onComplete}),a};zt.sort=function(r){if(fn(r))return ie.sort(r);var t=se.pageYOffset||0;return zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+se.innerHeight}),ie.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};zt.observe=function(r){return new He(r)};zt.normalizeScroll=function(r){if(typeof r>"u")return xn;if(r===!0&&xn)return xn.enable();if(r===!1){xn&&xn.kill(),xn=r;return}var t=r instanceof He?r:lE(r);return xn&&xn.target===t.target&&xn.kill(),ns(t.target)&&(xn=t),t};zt.core={_getVelocityProp:ah,_inputObserver:Og,_scrollers:oe,_proxies:Pi,bridge:{ss:function(){ri||rs("scrollStart"),ri=un()},ref:function(){return cn}}};Eg()&&Dt.registerPlugin(zt);/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let Ro,Po,dp=typeof Symbol=="function"?Symbol():"_split",mh,cE=()=>mh||ff.register(window.gsap),pp=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,xa=r=>r?typeof r=="string"?xa(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...xa(e)):t.push(e),t),[]):[r]:[],mp=r=>xa(r).filter(t=>t&&t.nodeType===1),gh=[],Qc=function(){},uE={add:r=>r()},hE=/\s+/g,gp=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Xl={left:0,top:0,width:0,height:0},fE=(r,t)=>{for(;++t<r.length&&r[t]===Xl;);return r[t]||Xl},_p=({element:r,html:t,ariaL:e,ariaH:n})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},vp=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||gh),n=r.length,i,s,o,a;if(e.size)for(;--n>-1;){s=r[n];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},xp=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Rs=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),_h=(r,t,e)=>{let n=t[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let h=document.createElement(i),f=e.length+1;return n&&(h.className=n+(l?" "+n+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,e.push(h),h};return l&&(n=n.replace("++","")),c.collection=e,c},dE=(r,t,e,n)=>{let i=_h("line",e,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},Fg=(r,t,e,n,i,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:g=!0,prepareText:_}=t,m=r.getBoundingClientRect(),p=m,y=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",S=0,v=e.collection,R,w,E,A,M,x,L,U,N,G,k,B,F,I,X,C,K,at;for(typeof d=="object"?(E=d.delimiter||d,w=d.replaceWith||""):w=d===""?"":d||" ",R=w!==" ";f<h.length;f++)if(A=h[f],A.nodeType===3){for(X=A.textContent||"",g?X=X.replace(hE," "):y&&(X=X.replace(/\n/g,w+`
`)),_&&(X=_(X,r)),A.textContent=X,M=w||E?X.split(E||w):X.match(a)||gh,K=M[M.length-1],U=R?K.slice(-1)===" ":!K,K||M.pop(),p=m,L=R?M[0].charAt(0)===" ":!M[0],L&&Rs(" ",r,A),M[0]||M.shift(),vp(M,l),s&&c||(A.textContent=""),N=1;N<=M.length;N++)if(C=M[N-1],!g&&y&&C.charAt(0)===`
`&&((u=A.previousSibling)==null||u.remove(),Rs(document.createElement("br"),r,A),C=C.slice(1)),!g&&C==="")Rs(w,r,A);else if(C===" ")r.insertBefore(document.createTextNode(" "),A);else{if(R&&C.charAt(0)===" "&&Rs(" ",r,A),S&&N===1&&!L&&v.indexOf(S.parentNode)>-1?(x=v[v.length-1],x.appendChild(document.createTextNode(n?"":C))):(x=e(n?"":C),Rs(x,r,A),S&&N===1&&!L&&x.insertBefore(S,x.firstChild)),n)for(k=pp?vp([...pp.segment(C)].map(gt=>gt.segment),l):C.match(a)||gh,at=0;at<k.length;at++)x.appendChild(k[at]===" "?document.createTextNode(" "):n(k[at]));if(s&&c){if(X=A.textContent=X.substring(C.length+1,X.length),G=x.getBoundingClientRect(),G.top>p.top&&G.left<=p.left){for(B=r.cloneNode(),F=r.childNodes[0];F&&F!==x;)I=F,F=F.nextSibling,B.appendChild(I);r.parentNode.insertBefore(B,r),i&&xp(B)}p=G}(N<M.length||U)&&Rs(N>=M.length?" ":R&&C.slice(-1)===" "?" "+w:w,r,A)}r.removeChild(A),S=0}else A.nodeType===1&&(o&&o.indexOf(A)>-1?(v.indexOf(A.previousSibling)>-1&&v[v.length-1].appendChild(A),S=A):(Fg(A,t,e,n,i,s,o,a,l,!0),S=0),i&&xp(A))};const zg=class Bg{constructor(t,e){this.isSplit=!1,cE(),this.elements=mp(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(o=>{var a;e.overwrite!==!1&&((a=o[dp])==null||a._data.orig.filter(({element:l})=>l===o).forEach(_p)),o[dp]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Qc(this),this.split(e)}split(t){return(this._ctx||uE).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=e.indexOf("lines")>-1,h=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,d=h&&!f&&!u,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=g?new RegExp(g.source+"|"+gp.source,"gu"):gp,m=!!t.ignore&&mp(t.ignore),{orig:p,animTime:y,obs:S}=this._data,v;(h||f||u)&&(this.elements.forEach((R,w)=>{p[w]={element:R,html:R.innerHTML,ariaL:R.getAttribute("aria-label"),ariaH:R.getAttribute("aria-hidden")},n==="auto"?R.setAttribute("aria-label",(R.textContent||"").trim()):n==="hidden"&&R.setAttribute("aria-hidden","true");let E=[],A=[],M=[],x=h?_h("char",t,E):null,L=_h("word",t,A),U,N,G,k;if(Fg(R,t,L,x,d,i&&(u||d),m,_,g,!1),u){let B=xa(R.childNodes),F=dE(R,B,t,M),I,X=[],C=0,K=B.map(Y=>Y.nodeType===1?Y.getBoundingClientRect():Xl),at=Xl,gt;for(U=0;U<B.length;U++)I=B[U],I.nodeType===1&&(I.nodeName==="BR"?((!U||B[U-1].nodeName!=="BR")&&(X.push(I),F(C,U+1)),C=U+1,at=fE(K,U)):(gt=K[U],U&&gt.top>at.top&&gt.left<at.left+at.width-1&&(F(C,U),C=U),at=gt));C<U&&F(C,U),X.forEach(Y=>{var et;return(et=Y.parentNode)==null?void 0:et.removeChild(Y)})}if(!f){for(U=0;U<A.length;U++)if(N=A[U],h||!N.nextSibling||N.nextSibling.nodeType!==3)if(s&&!u){for(G=document.createElement("span"),G.style.whiteSpace="nowrap";N.firstChild;)G.appendChild(N.firstChild);N.replaceWith(G)}else N.replaceWith(...N.childNodes);else k=N.nextSibling,k&&k.nodeType===3&&(k.textContent=(N.textContent||"")+(k.textContent||""),N.remove());A.length=0,R.normalize()}this.lines.push(...M),this.words.push(...A),this.chars.push(...E)}),c&&this[c]&&this.masks.push(...this[c].map(R=>{let w=R.cloneNode();return R.replaceWith(w),w.appendChild(R),R.className&&(w.className=R.className.trim().split(" ").map(E=>E+"-mask").join(" ")),w.style.overflow="clip",w}))),this.isSplit=!0,Po&&u&&a&&Po.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=y?v.totalTime(y):v),u&&a&&this.elements.forEach((R,w)=>{p[w].width=R.offsetWidth,S&&S.observe(R)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),Po==null||Po.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(_p),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new Bg(t,e)}static register(t){Ro=Ro||t||window.gsap,Ro&&(xa=Ro.utils.toArray,Qc=Ro.core.context||Qc),!mh&&window.innerWidth>0&&(Po=document.fonts,mh=!0)}};zg.version="3.15.0";let ff=zg;var yp="1.3.26";function kg(r,t,e){return Math.max(r,Math.min(t,e))}function pE(r,t,e){return(1-e)*r+e*t}function mE(r,t,e,n){return pE(r,t,1-Math.exp(-e*n))}function gE(r,t){return(r%t+t)%t}var _E=class{constructor(){j(this,"isRunning",!1);j(this,"value",0);j(this,"from",0);j(this,"to",0);j(this,"currentTime",0);j(this,"lerp");j(this,"duration");j(this,"easing");j(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=kg(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=mE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function vE(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var xE=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){j(this,"width",0);j(this,"height",0);j(this,"scrollHeight",0);j(this,"scrollWidth",0);j(this,"debouncedResize");j(this,"wrapperResizeObserver");j(this,"contentResizeObserver");j(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});j(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});j(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=vE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Hg=class{constructor(){j(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const yE=100/6,rr={passive:!1};function Mp(r,t){return r===1?yE:r===2?t:1}var ME=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){j(this,"touchStart",{x:0,y:0});j(this,"lastDelta",{x:0,y:0});j(this,"window",{width:0,height:0});j(this,"emitter",new Hg);j(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});j(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});j(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});j(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=Mp(n,this.window.width),s=Mp(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});j(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rr),this.element.addEventListener("touchstart",this.onTouchStart,rr),this.element.addEventListener("touchmove",this.onTouchMove,rr),this.element.addEventListener("touchend",this.onTouchEnd,rr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,rr),this.element.removeEventListener("touchstart",this.onTouchStart,rr),this.element.removeEventListener("touchmove",this.onTouchMove,rr),this.element.removeEventListener("touchend",this.onTouchEnd,rr)}};const Sp=r=>Math.min(1,1.001-2**(-10*r));var SE=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:y=!0,autoRaf:S=!1,anchors:v=!1,autoToggle:R=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:A=E,stopInertiaOnNavigate:M=!1,respectReducedMotion:x=!0}={}){j(this,"_isScrolling",!1);j(this,"_isStopped",!1);j(this,"_isLocked",!1);j(this,"_preventNextNativeScrollEvent",!1);j(this,"_resetVelocityTimeout",null);j(this,"_rafId",null);j(this,"_isDraggingSelection",!1);j(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));j(this,"isTouching");j(this,"isIos");j(this,"time",0);j(this,"userData",{});j(this,"lastVelocity",0);j(this,"velocity",0);j(this,"direction",0);j(this,"options");j(this,"targetScroll");j(this,"animatedScroll");j(this,"animate",new _E);j(this,"emitter",new Hg);j(this,"dimensions");j(this,"virtualScroll");j(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});j(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});j(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});j(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});j(this,"onPointerDown",r=>{r.button===1&&this.reset()});j(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>{var _,m,p,y,S;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-horizontal"))||i&&((y=g.hasAttribute)==null?void 0:y.call(g,"data-lenis-prevent-touch"))||s&&((S=g.hasAttribute)==null?void 0:S.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});j(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});j(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=yp,window.lenis||(window.lenis={}),window.lenis.version=yp,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Sp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:y,autoRaf:S,anchors:v,autoToggle:R,allowNestedScroll:w,naiveDimensions:A,stopInertiaOnNavigate:M,respectReducedMotion:x},this.dimensions=new xE(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new ME(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,d=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let g=null;if(typeof f=="string"?(g=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),g||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(g=f),g){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?v.left:v.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=f-this.animatedScroll;g>this.limit/2?f-=this.limit:g<-this.limit/2&&(f+=this.limit)}}else f=kg(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=h??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Sp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,h,f,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=h>d,l=f>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=h,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,h=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let m,p,y,S,v,R;if(_==="horizontal")m=Math.round(r.scrollLeft),p=h-d,y=t,S=s,v=a,R=c;else if(_==="vertical")m=Math.round(r.scrollTop),p=f-g,y=e,S=o,v=l,R=u;else return!1;return!R&&(m>=p||m<=0)?!0:(y>0?m<p:m>0)&&S&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?gE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};de.registerPlugin(zt,ff);const bp=(r,t,e)=>{const{from:n,to:i}=r;if(r.mid){const s=1-t,o=r.mid;e.pos.set(s*s*n.pos.x+2*s*t*o.x+t*t*i.pos.x,s*s*n.pos.y+2*s*t*o.y+t*t*i.pos.y,s*s*n.pos.z+2*s*t*o.z+t*t*i.pos.z)}else e.pos.lerpVectors(n.pos,i.pos,t);e.target.lerpVectors(n.target,i.target,t)},bE=(r,t)=>{const e=1-r/2-t/2;return n=>{if(n<=0)return 0;if(n>=1)return 1;let i;if(n<r)i=n*n/(2*r);else if(n<1-t)i=r/2+(n-r);else{const s=n-(1-t);i=r/2+(1-r-t)+s-s*s/(2*t)}return i/e}},hi=(r,t,e)=>{const n=Math.min(1,Math.max(0,(r-t)/(e-t)));return n*n*(3-2*n)};function EE(r){var g;zt.config({ignoreMobileResize:!0});let t=0;const e=new SE({lerp:.062,wheelMultiplier:.85,allowNestedScroll:!0,virtualScroll(_){return _.event.type!=="wheel"||(Math.sign(_.deltaY)!==Math.sign(t)&&(t=0),t+=_.deltaY,_.deltaY=Math.trunc(t),t-=_.deltaY),!0}}),n=()=>zt.update();e.on("scroll",n);const i=_=>e.raf(_*1e3);de.ticker.add(i),de.ticker.lagSmoothing(0);const s=()=>e.resize();zt.addEventListener("refresh",s);const o=Fe(0,0,0,0,0,0);let a=null,l=!1;const c=Array.from(document.querySelectorAll("#skin-chips .chip")),u=_=>{const m=Math.round(_);c.forEach((p,y)=>p.classList.toggle("is-active",y===m))},h=[{el:"#ch-hero",from:Fe(43,27,52,0,6,0),to:Fe(33,20,43,0,6,0),onProgress:()=>r.city.setSignsOpacity(0)},{el:"#ch-context",from:Fe(33,20,43,0,6,0),to:Fe(-44,22,38,0,6,0),onProgress(_){const m=document.getElementById("context-photo");m==null||m.style.setProperty("--photoswap",String(hi(_,.34,.72))),r.city.setSignsOpacity(0)}},{el:"#ch-concept",from:Fe(-44,22,38,0,6,0),to:Fe(-22,34,-40,0,6,0),mid:{x:-81.3,y:30,z:-14.6},onProgress(_){const m=_<.42?_/.42:Math.max(0,1-(_-.42)/.58);r.city.setScatter(m),r.city.setSignsOpacity(0)}},{el:"#ch-opening",from:Fe(-22,34,-40,0,6,0),to:Fe(45.6,34,0,-.5,6,0),mid:{x:34.6,y:38,z:-58.6},onProgress(_){r.city.setMonoMix(1-hi(_,.15,.7)),r.city.setSignsOpacity(0)}},{el:"#ch-far",from:Fe(45.6,34,0,-.5,6,0),to:Fe(4.7,14,18.4,-1,4,1),mid:{x:32.3,y:26,z:25.1},onToggle(_){r.setLabelsOn(_)},onProgress(_){r.city.setSignsOpacity(hi(_,.06,.26))}},{el:"#ch-dive",from:Fe(4.7,14,18.4,-1,4,1),to:Fe(-5.8,3.4,13.2,-1.5,4.4,3.5),mid:{x:-1.5,y:10,z:17.6}},{el:"#ch-gallery",from:Fe(-5.8,3.4,13.2,-1.5,4.4,3.5),to:Fe(32,19,40,-1.5,5,1)},{el:"#ch-skins",from:Fe(32,19,40,-1.5,5,1),to:Fe(-40,24,44,0,6,0),mid:{x:4,y:32,z:64},onProgress(_){const m=hi(_,0,.2)*(1-hi(_,.85,1));r.city.setRingWash(.12*(1-m)),r.city.setBaseReturn(0)}},{el:"#ch-ar",from:Fe(-40,24,44,0,6,0),to:Fe(-46,27,12,0,6.5,0),mid:{x:-56,y:26,z:32},onProgress:_=>r.city.setBaseReturn(hi(_,.08,.95))},{el:"#ch-end",from:Fe(-46,27,12,0,6.5,0),to:Fe(30,20,38,0,6,0),mid:{x:-34,y:27,z:36},pMap:_=>bE(0,.34)(Math.min(1,_/.84))}],f=de.context(()=>{de.matchMedia().add({isDesktop:"(min-width: 821px)",isMobile:"(max-width: 820px)",reduceMotion:"(prefers-reduced-motion: reduce)"},A=>{const{isDesktop:M,reduceMotion:x}=A.conditions;for(const I of h){if(x){zt.create({trigger:I.el,start:"top 60%",end:"bottom 40%",onToggle(C){var K,at;C.isActive&&(bp(I,1,o),r.desired.pos.copy(o.pos),r.desired.target.copy(o.target),(K=I.onProgress)==null||K.call(I,1)),(at=I.onToggle)==null||at.call(I,C.isActive)}});continue}const X=I.ease?de.parseEase(I.ease):null;zt.create({trigger:I.el,start:I.el==="#ch-hero"?"top top":"top center",end:"bottom center",scrub:!0,onUpdate(C){var gt;const K=I.pMap?I.pMap(C.progress):C.progress,at=X?X(K):K;bp(I,at,o),r.desired.pos.copy(o.pos),r.desired.target.copy(o.target),(gt=I.onProgress)==null||gt.call(I,at)},onToggle(C){var K;(K=I.onToggle)==null||K.call(I,C.isActive)}})}x&&(r.city.setScatter(0),r.city.setMonoMix(0));const L=document.querySelector(".overlay--end");if(L){const I=Array.from(L.querySelectorAll(".end-stage")),X=(C,K,at,gt,Y)=>hi(C,K,at)*(1-hi(C,gt,Y));zt.create({trigger:"#ch-end",start:"top top",end:"bottom bottom",scrub:!0,onUpdate(C){const K=C.progress,at=[X(K,.04,.16,.28,.4),X(K,.44,.56,.7,.82),hi(K,.86,.96)];I.forEach((gt,Y)=>{gt.style.opacity=String(at[Y]),gt.style.visibility=at[Y]>.01?"visible":"hidden",gt.style.transform=`translateY(${(1-at[Y])*22}px)`}),L.classList.toggle("is-on",Math.max(...at)>.01)}})}const U=de.utils.toArray("#overlays .overlay").filter(I=>!I.classList.contains("overlay--end"));for(const I of U){const X=`#${I.dataset.for}`;if(document.querySelector(X)){if(x){zt.create({trigger:X,start:"top 60%",end:"bottom 40%",onToggle(C){I.classList.toggle("is-on",C.isActive),I.style.opacity=C.isActive?"1":"0"}});continue}zt.create({trigger:X,start:"top 78%",end:"bottom 22%",scrub:!0,onUpdate(C){const K=C.progress,at=+(I.dataset.fadeIn??.06),gt=+(I.dataset.fadeOut??.94),Y=hi(K,at,at+.14),et=1-hi(K,gt-.14,gt),ft=Y*et;I.style.opacity=String(ft),I.style.transform=`translateY(${(1-Y)*34-(1-et)*22}px)`,I.classList.toggle("is-on",ft>.01)}})}}zt.create({trigger:"#ch-skins",start:"top 45%",end:"bottom 80%",scrub:!x,onUpdate(I){const X=I.progress*(sr.length-1);I.progress>0&&r.city.setMonoMix(0),r.city.setSkinPos(X),u(X)}});const N=document.getElementById("gallery-track"),G=document.getElementById("gallery-pin"),k=Array.from(N.querySelectorAll(".phone")),B=()=>{const I=innerWidth/2,X=k.map(C=>{const K=C.getBoundingClientRect(),at=Math.abs(K.left+K.width/2-I);return Math.max(0,1-at/(innerWidth*.3))});k.forEach((C,K)=>C.style.setProperty("--focus",X[K].toFixed(3)))};if(M&&!x){const I=de.quickSetter(N,"x","px");let X=[],C=innerWidth/2,K=0,at=0;const gt=()=>{k.length&&(C=innerWidth/2,X=k.map(et=>et.offsetLeft+et.offsetWidth/2),K=C-X[0],at=C-X[X.length-1])},Y=et=>{const ft=K+(at-K)*et;I(ft),k.forEach((ot,At)=>{const Ut=Math.max(0,1-Math.abs(X[At]+ft-C)/(C*.6));ot.style.setProperty("--focus",Ut.toFixed(3))})};gt(),zt.create({trigger:"#ch-gallery",start:"top top",end:()=>`+=${Math.max(1,K-at)}`,pin:G,invalidateOnRefresh:!0,anticipatePin:1,refreshPriority:1,onRefreshInit:gt,onRefresh(et){gt(),Y(et.progress)},onUpdate(et){Y(et.progress)}})}else N.classList.add("is-native-scroll"),de.set(N,{clearProps:"transform"}),k.forEach(I=>I.style.setProperty("--focus","1")),N.addEventListener("scroll",B,{passive:!0});de.utils.toArray(".gallery-head, .end-copy").forEach(I=>{de.from(I,{opacity:0,y:x?0:36,duration:x?.3:1,ease:"power3.out",scrollTrigger:{trigger:I,start:"top 85%",once:!0,fastScrollEnd:!0}})}),a=de.timeline({paused:!0});const F=[];return de.utils.toArray(".hero-title .split-target").forEach((I,X)=>{const C=ff.create(I,{type:"chars",mask:"chars"});F.push(C),a.from(C.chars,{yPercent:x?0:118,opacity:x?0:1,duration:x?.3:1.2,ease:"power2.out",stagger:x?0:.038},X*.16)}),a.from(".hero-inner .hero-kicker",{opacity:0,y:18,duration:1.1,ease:"power2.out"},0).from(".hero-title .ff-arrows",{opacity:0,scale:.7,duration:.9,ease:"back.out(1.6)"},.85).from(".hero-sub",{opacity:0,y:26,duration:1.2,ease:"power2.out"},.95).from(".hero-scroll-hint",{opacity:0,duration:.9},1.35).from("#topbar",{opacity:0,duration:1.1},.15),()=>{F.forEach(I=>I.revert()),a==null||a.kill(),a=null,N.classList.remove("is-native-scroll"),N.removeEventListener("scroll",B)}});const m=document.querySelector(".video-stage video");m&&zt.create({trigger:"#ch-opening",start:"top 80%",end:"bottom 20%",onToggle(A){A.isActive?(m.preload="auto",m.play().catch(()=>{})):m.pause()}});const p={v:0};c.forEach((A,M)=>{A.addEventListener("click",()=>{p.v=r.city.getSkinPos(),de.to(p,{v:M,duration:1.1,ease:"power2.inOut",overwrite:!0,onUpdate(){r.city.setMonoMix(0),r.city.setSkinPos(p.v)}}),u(M)})});const y=document.getElementById("rail-fill"),S=document.getElementById("rail-dots"),v=de.utils.toArray(".chapter"),R=v.map(A=>{const M=document.createElement("li");return M.dataset.title=A.dataset.title??"",M.addEventListener("click",()=>e.scrollTo(A,{duration:1.6})),S.appendChild(M),M});zt.create({start:0,end:()=>zt.maxScroll(window),invalidateOnRefresh:!0,onUpdate(A){y.style.height=`${A.progress*100}%`;const M=zt.maxScroll(window)-A.scroll()<3;r.setAutoSpin(!l&&M?1:0)}}),v.forEach((A,M)=>{zt.create({trigger:A,start:"top 50%",end:"bottom 50%",onToggle(x){x.isActive&&R.forEach((L,U)=>L.classList.toggle("is-active",U===M))}})});const w=document.getElementById("back-top"),E=A=>{const M=A.target;let x=!!M&&!!M.closest("#back-top");if(!x&&w&&w.offsetParent!==null){const N=A,G=w.getBoundingClientRect();G.width>0&&typeof N.clientX=="number"&&(x=N.clientX>=G.left&&N.clientX<=G.right&&N.clientY>=G.top&&N.clientY<=G.bottom)}if(!x||l)return;l=!0,window.setTimeout(()=>{l&&(l=!1,e.start(),document.body.classList.remove("is-warping"))},8e3);const L={d:0},U=()=>r.city.setDissolve(L.d);document.body.classList.add("is-warping"),e.stop(),r.freezeSpin(),de.timeline({onComplete(){document.body.classList.remove("is-warping"),e.start(),l=!1}}).to(L,{d:1,duration:1.9,ease:"power1.inOut",onUpdate:U}).add(()=>{e.scrollTo(0,{immediate:!0,force:!0}),window.scrollY>5&&(window.scrollTo(0,0),e.scrollTo(0,{immediate:!0,force:!0})),zt.update(),r.snapCamera(),r.city.setDissolve(1)}).to({},{duration:.12}).to(L,{d:0,duration:2.6,ease:"power2.out",onUpdate:U}).add(()=>{document.body.classList.remove("is-warping"),a==null||a.play(0)},"-=1.35")};document.addEventListener("pointerdown",E,!0),document.addEventListener("click",E,!0)}),d=()=>{const _=Array.from(document.images).filter(y=>!y.complete);if(!_.length){zt.refresh(!0);return}let m=_.length;const p=()=>{--m<=0&&zt.refresh(!0)};_.forEach(y=>{y.addEventListener("load",p,{once:!0}),y.addEventListener("error",p,{once:!0})})};return(g=document.fonts)==null||g.ready.then(()=>zt.refresh(!0)),window.addEventListener("load",d,{once:!0}),d(),{playIntro:()=>a==null?void 0:a.play(0),destroy(){f.revert(),e.off("scroll",n),de.ticker.remove(i),zt.removeEventListener("refresh",s),e.destroy(),zt.getAll().forEach(_=>_.kill())}}}const TE=[[0,0],[0,4],[1,1],[1,5],[2,2],[2,6],[3,3],[3,7],[4,2],[4,6],[5,1],[5,5],[6,0],[6,4]].map(([r,t])=>r*9+t);function wE(){const r=document.getElementById("loader-logo"),t=[];for(let n=0;n<63;n++){const i=document.createElement("i");(n*7+3)%11===0&&i.classList.add("gold"),r.appendChild(i),t.push(i)}const e=TE.map(n=>t[n]).filter(Boolean);return new Promise(n=>{de.timeline({onComplete:()=>n()}).to(e,{opacity:1,scale:1,duration:.32,ease:"back.out(2.2)",stagger:{each:.055,from:"start"}}).to(".loader-tag",{opacity:1,duration:.4},"-=0.4").to({},{duration:.35})})}function AE(){const r=document.getElementById("return-work"),t=r==null?void 0:r.querySelector("span"),e=de.matchMedia();let n=()=>{};return!r||!t?{playIntro:n,destroy:()=>e.revert()}:(e.add("(prefers-reduced-motion: reduce)",()=>{de.set(r,{autoAlpha:1,x:0,scale:1}),de.set(t,{x:0})}),e.add("(prefers-reduced-motion: no-preference)",()=>{de.set(r,{autoAlpha:0,x:-12,scale:.92}),n=()=>{de.to(r,{autoAlpha:1,x:0,scale:1,duration:.68,ease:"power3.out",overwrite:"auto"})};const i=()=>{de.to(r,{scale:1.035,duration:.24,ease:"power3.out",overwrite:"auto"}),de.fromTo(t,{x:3},{x:-2,duration:.42,ease:"power3.out",overwrite:"auto"})},s=()=>{de.to(r,{scale:1,duration:.28,ease:"power3.out",overwrite:"auto"}),de.to(t,{x:0,duration:.28,ease:"power3.out",overwrite:"auto"})},o=()=>{de.to(r,{scale:.96,duration:.1,ease:"power1.out",overwrite:"auto"}),de.to(t,{x:-4,duration:.1,ease:"power1.out",overwrite:"auto"})};return r.addEventListener("pointerenter",i),r.addEventListener("pointerleave",s),r.addEventListener("pointerdown",o),r.addEventListener("pointerup",i),()=>{r.removeEventListener("pointerenter",i),r.removeEventListener("pointerleave",s),r.removeEventListener("pointerdown",o),r.removeEventListener("pointerup",i),de.killTweensOf([r,t]),n=()=>{}}}),{playIntro:()=>n(),destroy:()=>e.revert()})}function CE(r){let t=!1;const e=()=>{!t&&hg()!==r&&(t=!0,window.location.reload())},n=s=>{(s.key===null||s.key===lg)&&e()},i=()=>{document.hidden||e()};return window.addEventListener("storage",n),window.addEventListener("pageshow",e),document.addEventListener("visibilitychange",i),()=>{window.removeEventListener("storage",n),window.removeEventListener("pageshow",e),document.removeEventListener("visibilitychange",i)}}const RE=async()=>{const r=Array.from(document.images),t=Array.from(document.querySelectorAll("video")),e=r.map(o=>{var a;return o.loading="eager",o.complete&&o.naturalWidth>0?(a=o.decode)==null?void 0:a.call(o).catch(()=>{}):new Promise(l=>{o.addEventListener("load",()=>l(),{once:!0}),o.addEventListener("error",()=>l(),{once:!0})})}),n=t.map(o=>(o.pause(),o.preload="auto",o.readyState>=HTMLMediaElement.HAVE_FUTURE_DATA?Promise.resolve():new Promise(a=>{o.addEventListener("canplay",()=>a(),{once:!0}),o.addEventListener("error",()=>a(),{once:!0}),o.load()}))),i=Promise.allSettled([...e,...n]),s=new Promise(o=>window.setTimeout(o,12e3));await Promise.race([i,s])},PE=()=>{const r=Array.from(document.querySelectorAll("video[autoplay]")),t=()=>{for(const n of r){const i=n.closest(".overlay");!document.hidden&&(!i||i.classList.contains("is-on"))?n.play().catch(()=>{}):n.pause()}},e=new MutationObserver(t);return document.querySelectorAll(".overlay").forEach(n=>e.observe(n,{attributes:!0,attributeFilter:["class"]})),document.addEventListener("visibilitychange",t),t(),()=>{e.disconnect(),document.removeEventListener("visibilitychange",t)}};function LE(){var u;const r=Vb(),t=CE(r),e=document.getElementById("webgl"),n=wE(),i=AE();let s=null,o=null,a=null;try{s=new Gb(e)}catch(h){console.warn("WebGL 初始化失败，降级为静态展示",h),e.style.display="none"}s&&(o=EE(s));const l=Promise.allSettled([(u=document.fonts)==null?void 0:u.ready,n,RE(),s==null?void 0:s.ready]),c=new Promise(h=>window.setTimeout(h,15e3));return Promise.race([l,c]).then(()=>{document.getElementById("loader").classList.add("is-done"),i.playIntro(),a=PE(),o==null||o.playIntro()}),{destroy(){o==null||o.destroy(),s==null||s.destroy(),a==null||a(),i.destroy(),t()}}}window.__TKL_EMBED__||LE();
