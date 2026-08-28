var Hg=Object.defineProperty;var Vg=(r,t,e)=>t in r?Hg(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Q=(r,t,e)=>Vg(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Tp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ia={duration:.5,overwrite:!1,delay:0},vh,rn,Re,ni=1e8,Ee=1/ni,tu=Math.PI*2,Gg=tu/4,Wg=0,wp=Math.sqrt,Xg=Math.cos,Yg=Math.sin,en=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},qi=function(t){return typeof t=="number"},xh=function(t){return typeof t>"u"},Li=function(t){return typeof t=="object"},Cn=function(t){return t!==!1},yh=function(){return typeof window<"u"},Ta=function(t){return ze(t)||en(t)},Ap=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,qg=/random\([^)]+\)/g,$g=/,\s*/g,pf=/(?:-?\.?\d|\.)+/gi,Cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ic=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rp=/[+-]=-?[.\d]+/,Zg=/[^,'"\[\]\s]+/gi,Kg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,yi,eu,Mh,$n={},Pl={},Pp,Lp=function(t){return(Pl=Ks(t,$n))&&Dn},Sh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ra=function(t,e){return!e&&console.warn(t)},Dp=function(t,e){return t&&($n[t]=e)&&Pl&&(Pl[t]=e)||$n},sa=function(){return 0},Jg={suppressEvents:!0,isStart:!0,kill:!1},fl={suppressEvents:!0,kill:!1},jg={suppressEvents:!0},bh={},dr=[],nu={},Ip,Bn={},rc={},mf=30,dl=[],Eh="",Th=function(t){var e=t[0],n,i;if(Li(e)||ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=dl.length;i--&&!dl[i].targetTest(e););n=dl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new em(t[i],n)))||t.splice(i,1);return t},Xr=function(t){return t._gsap||Th(ii(t))[0]._gsap},Up=function(t,e,n){return(n=t[e])&&ze(n)?t[e]():xh(n)&&t.getAttribute&&t.getAttribute(e)||n},Rn=function(t,e){return(t=t.split(",")).forEach(e)||t},ke=function(t){return Math.round(t*1e5)/1e5||0},Le=function(t){return Math.round(t*1e7)/1e7||0},ks=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Qg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ll=function(){var t=dr.length,e=dr.slice(0),n,i;for(nu={},dr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wh=function(t){return!!(t._initted||t._startAt||t.add)},Np=function(t,e,n,i){dr.length&&!rn&&Ll(),t.render(e,n,!!(rn&&e<0&&wh(t))),dr.length&&!rn&&Ll()},Op=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Zg).length<2?e:en(t)?t.trim():t},Fp=function(t){return t},Zn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},t_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ks=function(t,e){for(var n in e)t[n]=e[n];return t},gf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Li(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Dl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ko=function(t){var e=t.parent||De,n=t.keyframes?t_(dn(t.keyframes)):Zn;if(Cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},e_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},zp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Yl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},vr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},n_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},iu=function(t,e,n,i){return t._startAt&&(rn?t._startAt.revert(fl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},i_=function r(t){return!t||t._ts&&r(t.parent)},_f=function(t){return t._repeat?Js(t._tTime,t=t.duration()+t._rDelay)*t:0},Js=function(t,e){var n=Math.floor(t=Le(t/e));return t&&n===t?n-1:n},Il=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ql=function(t){return t._end=Le(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},$l=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ql(t),n._dirty||Yr(n,t)),t},Bp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Il(t.rawTime(),e),(!e._dur||ya(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),Yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},bi=function(t,e,n,i){return e.parent&&vr(e),e._start=Le((qi(n)?n:n||t!==De?Qn(t,n,e):t._time)+e._delay),e._end=Le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),zp(t,e,"_first","_last",t._sort?"_start":0),ru(e)||(t._recent=e),i||Bp(t,e),t._ts<0&&$l(t,t._tTime),t},kp=function(t,e){return($n.ScrollTrigger||Sh("scrollTrigger",e))&&$n.ScrollTrigger.create(e,t)},Hp=function(t,e,n,i,s){if(Ch(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!rn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ip!==Vn.frame)return dr.push(t),t._lazy=[s,i],1},r_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ru=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},s_=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&r_(t)&&!(!t._initted&&ru(t))||(t._ts<0||t._dp._ts<0)&&!ru(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ya(0,t._tDur,e),u=Js(l,a),t._yoyo&&u&1&&(o=1-o),u!==Js(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||rn||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&Hp(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&iu(t,e,n,!0),t._onUpdate&&!n&&Wn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Wn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&vr(t,1),!n&&!rn&&(Wn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},o_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},js=function(t,e,n,i){var s=t._repeat,o=Le(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Le(o*(s+1)+t._rDelay*s):o,a>0&&!i&&$l(t,t._tTime=t._tDur*a),t.parent&&ql(t),n||Yr(t.parent,t),t},vf=function(t){return t instanceof An?Yr(t):js(t,t._dur)},a_={_start:0,endTime:sa,totalDuration:sa},Qn=function r(t,e,n){var i=t.labels,s=t._recent||a_,o=t.duration()>=ni?s.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ho=function(t,e,n){var i=qi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;o.immediateRender=Cn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Xe(e[0],o,e[s+1])},Er=function(t,e){return t||t===0?e(t):e},ya=function(t,e,n){return n<t?t:n>e?e:n},hn=function(t,e){return!en(t)||!(e=Kg.exec(t))?"":e[1]},l_=function(t,e,n){return Er(n,function(i){return ya(t,e,i)})},su=[].slice,Vp=function(t,e){return t&&Li(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Li(t[0]))&&!t.nodeType&&t!==yi},c_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return en(i)&&!e||Vp(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):en(t)&&!n&&(eu||!Qs())?su.call((e||Mh).querySelectorAll(t),0):dn(t)?c_(t,n):Vp(t)?su.call(t,0):t?[t]:[]},ou=function(t){return t=ii(t)[0]||ra("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ii(e,n.querySelectorAll?n:n===t?ra("Invalid scope")||Mh.createElement("div"):t)}},Gp=function(t){return t.sort(function(){return .5-Math.random()})},Wp=function(t){if(ze(t))return t;var e=Li(t)?t:{each:t},n=qr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return en(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,m){var _=(m||e).length,g=o[_],p,y,M,v,C,w,E,A,S;if(!g){if(S=e.grid==="auto"?0:(e.grid||[1,ni])[1],!S){for(E=-ni;E<(E=m[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(g=o[_]=[],p=l?Math.min(S,_)*u-.5:i%S,y=S===ni?0:l?_*h/S-.5:i/S|0,E=0,A=ni,w=0;w<_;w++)M=w%S-p,v=y-(w/S|0),g[w]=C=c?Math.abs(c==="y"?v:M):wp(M*M+v*v),C>E&&(E=C),C<A&&(A=C);i==="random"&&Gp(g),g.max=E-A,g.min=A,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=hn(e.amount||e.each)||0,n=n&&_<0?S_(n):n}return _=(g[f]-g.min)/g.max||0,Le(g.b+(n?n(_):_)*g.v)+g.u}},au=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Le(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(qi(n)?0:hn(n))}},Xp=function(t,e){var n=dn(t),i,s;return!n&&Li(t)&&(i=n=t.radius||ni,t.values?(t=ii(t.values),(s=!qi(t[0]))&&(i*=i)):t=au(t.increment)),Er(e,n?ze(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||qi(o)?u:u+hn(o)}:au(t))},Yp=function(t,e,n,i){return Er(dn(t)?!e:n===!0?!!(n=0):!i,function(){return dn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},u_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},h_=function(t,e){return function(n){return t(parseFloat(n))+(e||hn(n))}},f_=function(t,e,n){return $p(t,e,0,1,n)},qp=function(t,e,n){return Er(n,function(i){return t[~~e(i)]})},d_=function r(t,e,n){var i=e-t;return dn(t)?qp(t,r(0,t.length),e):Er(n,function(s){return(i+(s-t)%i)%i+t})},p_=function r(t,e,n){var i=e-t,s=i*2;return dn(t)?qp(t,r(0,t.length-1),e):Er(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},oa=function(t){return t.replace(qg,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split($g);return Yp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},$p=function(t,e,n,i,s){var o=e-t,a=i-n;return Er(s,function(l){return n+((l-t)/o*a||0)})},m_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=en(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(dn(t)&&!dn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(m){m*=h;var _=Math.min(f,~~m);return u[_](m-_)},n=e}else i||(t=Ks(dn(t)?[]:{},t));if(!u){for(l in e)Ah.call(a,t,l,"get",e[l]);s=function(m){return Lh(m,a)||(o?t.p:t)}}}return Er(n,s)},xf=function(t,e,n){var i=t.labels,s=ni,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wn=function(t,e,n){var i=t.vars,s=i[e],o=Re,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&dr.length&&Ll(),a&&(Re=a),u=l?s.apply(c,l):s.call(c),Re=o,u},Lo=function(t){return vr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!rn),t.progress()<1&&Wn(t,"onInterrupt"),t},Us,Zp=[],Kp=function(t){if(t)if(t=!t.name&&t.default||t,yh()||t.headless){var e=t.name,n=ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:sa,render:Lh,add:Ah,kill:D_,modifier:L_,rawVars:0},o={targetTest:0,get:0,getSetter:Ph,aliases:{},register:0};if(Qs(),t!==i){if(Bn[e])return;Zn(i,Zn(Dl(t,s),o)),Ks(i.prototype,Ks(s,Dl(t,o))),Bn[i.prop=e]=i,t.targetTest&&(dl.push(i),bh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Dp(e,i),t.register&&t.register(Dn,i,Pn)}else Zp.push(t)},be=255,Do={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},sc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0},Jp=function(t,e,n){var i=t?qi(t)?[t>>16,t>>8&be,t&be]:0:Do.black,s,o,a,l,c,u,h,f,d,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Do[t])i=Do[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&be,i&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(pf),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=sc(l+1/3,s,o),i[1]=sc(l,s,o),i[2]=sc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Cp),n&&i.length<4&&(i[3]=1),i}else i=t.match(pf)||Do.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/be,o=i[1]/be,a=i[2]/be,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},jp=function(t){var e=[],n=[],i=-1;return t.split(pr).forEach(function(s){var o=s.match(Is)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},yf=function(t,e,n){var i="",s=(t+i).match(pr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Jp(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=jp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(pr,"1").split(Is),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(pr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},pr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Do)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),g_=/hsl[a]?\(/,Qp=function(t){var e=t.join(" "),n;if(pr.lastIndex=0,pr.test(e))return n=g_.test(e),t[1]=yf(t[1],n),t[0]=yf(t[0],n,jp(t[1])),!0},aa,Vn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,m=function _(g){var p=r()-i,y=g===!0,M,v,C,w;if((p>t||p<0)&&(n+=p-e),i+=p,C=i-n,M=C-o,(M>0||y)&&(w=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,o+=M+(M>=s?4:s-M),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](C,f,w,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Pp&&(!eu&&yh()&&(yi=eu=window,Mh=yi.document||{},$n.gsap=Dn,(yi.gsapVersions||(yi.gsapVersions=[])).push(Dn.version),Lp(Pl||yi.GreenSockGlobals||!yi.gsap&&yi||{}),Zp.forEach(Kp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},aa=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),aa=0,c=sa},lagSmoothing:function(g,p){t=g||1/0,e=Math.min(p||33,t)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,p,y){var M=p?function(v,C,w,E){g(v,C,w,E),h.remove(M)}:g;return h.remove(g),a[y?"unshift":"push"](M),Qs(),M},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Qs=function(){return!aa&&Vn.wake()},le={},__=/^[\d.\-M][\d.\-,\s]/,v_=/["']/g,x_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(v_,"").trim():+c,i=l.substr(a+1).trim();return e},y_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},M_=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[x_(e[1])]:y_(t).split(",").map(Op)):le._CE&&__.test(t)?le._CE("",t):n},S_=function(t){return function(e){return 1-t(1-e)}},qr=function(t,e){return t&&(ze(t)?t:le[t]||M_(t))||e},ss=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Rn(t,function(a){le[a]=$n[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},tm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},oc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/tu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Yg((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:tm(a);return s=tu/s,l.config=function(c,u){return r(t,c,u)},l},ac=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:tm(n);return i.config=function(s){return r(t,s)},i};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ss(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;ss("Elastic",oc("in"),oc("out"),oc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ss("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ss("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ss("Circ",function(r){return-(wp(1-r*r)-1)});ss("Sine",function(r){return r===1?1:-Xg(r*Gg)+1});ss("Back",ac("in"),ac("out"),ac());le.SteppedEase=le.steps=$n.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Ee;return function(a){return((i*ya(0,o,a)|0)+s)*n}}};ia.ease=le["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Eh+=r+","+r+"Params,"});var em=function(t,e){this.id=Wg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Up,this.set=e?e.getSetter:Ph},la=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,js(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),aa||Vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($l(this,n),!s._dp||s.parent||Bp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Np(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_f(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_f(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Js(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Il(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(ya(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ql(this),n_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Le(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&bi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Il(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=jg);var i=rn;return rn=n,wh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Qn(this,n),Cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cn(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=ze(n)?n:Fp,l=function(){var u=i.then;i.then=null,s&&s(),ze(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Lo(this)},r})();Zn(la.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var An=(function(r){Tp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Cn(n.sortChildren),De&&bi(n.parent||De,ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kp(ki(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ho(0,arguments,this),this},e.from=function(i,s,o){return Ho(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ho(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xe(i,s,Qn(this,o),1),this},e.call=function(i,s,o){return bi(this,Xe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Xe(i,o,Qn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ko(o).immediateRender=Cn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ko(a).immediateRender=Cn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Le(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,m,_,g,p,y,M,v,C,w,E;if(this!==De&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,M=this._ts,p=!M,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=Le(u%g),u===l?(_=this._repeat,f=c):(C=Le(u/g),_=~~C,_&&_===C&&(f=c,_--),f>c&&(f=c)),C=Js(this._tTime,g),!a&&this._tTime&&C!==_&&this._tTime-C*g-this._dur<=0&&(C=_),w&&_&1&&(f=c-f,E=1),_!==C&&!this._lock){var A=w&&C&1,S=A===(w&&_&1);if(_<C&&(A=!A),a=A?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Le(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=o_(this,Le(a),Le(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!C&&(Wn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){y=0,m&&(u+=this._zTime=-Ee);break}}d=m}else{d=this._last;for(var x=i<0?i:f;d;){if(m=d._prev,(d._act||x<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||rn&&wh(d)),f!==this._time||!this._ts&&!p){y=0,m&&(u+=this._zTime=x?-Ee:Ee);break}}d=m}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-Ee)._zTime=f>=a?1:-1,this._ts))return this._start=v,ql(this),this.render(i,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Wn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(qi(s)||(s=Qn(this,s,i)),!(i instanceof la)){if(dn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(ze(i))i=Xe.delayedCall(0,i);else return this}return this!==i?bi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return en(i)?this.removeLabel(i):ze(i)?this.killTweensOf(i):(i.parent===this&&Yl(this,i),i===this._recent&&(this._recent=this._last),Yr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Le(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Qn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Xe.delayedCall(0,s||sa,o);return a.data="isPause",this._hasPause=1,bi(this,a,Qn(this,i))},e.removePause=function(i){var s=this._first;for(i=Qn(this,i);s;)s._start===i&&s.data==="isPause"&&vr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)lr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=qi(s),u;l;)l instanceof Xe?Qg(l._targets,a)&&(c?(!lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Qn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=Xe.to(o,Zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ee,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&js(m,g,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Zn({startAt:{time:Qn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),xf(this,Qn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),xf(this,Qn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Le(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Yr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,bi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Le(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;js(o,o===De&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(De._ts&&(Np(De,Il(i,De)),Ip=Vn.frame),Vn.frame>=mf){mf+=Yn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&Yn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},t})(la);Zn(An.prototype,{_lock:0,_hasPause:0,_forcing:0});var b_=function(t,e,n,i,s,o,a){var l=new Pn(this._pt,t,e,0,1,am,null,s),c=0,u=0,h,f,d,m,_,g,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=oa(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),f=n.match(ic)||[];h=ic.exec(i);)m=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:m.charAt(1)==="="?ks(g,m)-g:parseFloat(m)-g,m:d&&d<4?Math.round:0},c=ic.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Rp.test(i)||p)&&(l.e=0),this._pt=l,l},Ah=function(t,e,n,i,s,o,a,l,c,u){ze(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:ze(h)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=ze(h)?c?C_:sm:Rh,m;if(en(i)&&(~i.indexOf("random(")&&(i=oa(i)),i.charAt(1)==="="&&(m=ks(f,i)+(hn(f)||0),(m||m===0)&&(i=m))),!u||f!==i||lu)return!isNaN(f*i)&&i!==""?(m=new Pn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?P_:om,0,d),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!h&&!(e in t)&&Sh(e,i),b_.call(this,t,e,f,i,d,l||Yn.stringFilter,c))},E_=function(t,e,n,i,s){if(ze(t)&&(t=Vo(t,s,e,n,i)),!Li(t)||t.style&&t.nodeType||dn(t)||Ap(t))return en(t)?Vo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Vo(t[a],s,e,n,i);return o},nm=function(t,e,n,i,s,o){var a,l,c,u;if(Bn[t]&&(a=new Bn[t]).init(s,a.rawVars?e[t]:E_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Pn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Us))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},lr,lu,Ch=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,m=t._dur,_=t._startAt,g=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:g,M=t._overwrite==="auto"&&!vh,v=t.timeline,C=i.easeReverse||h,w,E,A,S,x,L,I,B,V,z,N,U,F;if(v&&(!f||!s)&&(s="none"),t._ease=qr(s,ia.ease),t._rEase=C&&(qr(C)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||f&&!i.stagger){if(B=g[0]?Xr(g[0]).harness:0,U=B&&i[B.prop],w=Dl(i,bh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&m?fl:Jg),_._lazy=0),o){if(vr(t._startAt=Xe.set(g,Zn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Wn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn||!a&&!d)&&t._startAt.revert(fl),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&m&&!_){if(e&&(a=!1),A=Zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Cn(l),immediateRender:a,stagger:0,parent:p},w),U&&(A[B.prop]=U),vr(t._startAt=Xe.set(g,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn?t._startAt.revert(fl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Cn(l)||l&&!m,E=0;E<g.length;E++){if(x=g[E],I=x._gsap||Th(g)[E]._gsap,t._ptLookup[E]=z={},nu[I.id]&&dr.length&&Ll(),N=y===g?E:y.indexOf(x),B&&(V=new B).init(x,U||w,t,N,y)!==!1&&(t._pt=S=new Pn(t._pt,x,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(Y){z[Y]=S}),V.priority&&(L=1)),!B||U)for(A in w)Bn[A]&&(V=nm(A,w,t,N,x,y))?V.priority&&(L=1):z[A]=S=Ah.call(t,x,A,"get",w[A],N,y,0,i.stringFilter);t._op&&t._op[E]&&t.kill(x,t._op[E]),M&&t._pt&&(lr=t,De.killTweensOf(x,z,t.globalTime(e)),F=!t.parent,lr=0),t._pt&&l&&(nu[I.id]=1)}L&&lm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!F,f&&e<=0&&v.render(ni,!0,!0)},T_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return lu=1,t.vars[e]="+=0",Ch(t,a),lu=0,l?ra(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=ke(n)+hn(h.e)),h.b&&(h.b=u.s+hn(h.b))},w_=function(t,e){var n=t[0]?Xr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ks({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},A_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(dn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Vo=function(t,e,n,i,s){return ze(t)?t.call(e,n,i,s):en(t)&&~t.indexOf("random(")?oa(t):t},im=Eh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",rm={};Rn(im+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return rm[r]=1});var Xe=(function(r){Tp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ko(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=i.parent||De,y=(dn(n)||Ap(n)?qi(n[0]):"length"in i)?[n]:ii(n),M,v,C,w,E,A,S,x;if(a._targets=y.length?Th(y):ra("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||Ta(c)||Ta(u)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(M=a.timeline=new An({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:y}),M.kill(),M.parent=M._dp=ki(a),M._start=0,f||Ta(c)||Ta(u)){if(w=y.length,S=f&&Wp(f),Li(f))for(E in f)~im.indexOf(E)&&(x||(x={}),x[E]=f[E]);for(v=0;v<w;v++)C=Dl(i,rm),C.stagger=0,L&&(C.easeReverse=L),x&&Ks(C,x),A=y[v],C.duration=+Vo(c,ki(a),v,A,y),C.delay=(+Vo(u,ki(a),v,A,y)||0)-a._delay,!f&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),M.to(A,C,S?S(v,A,y):0),M._ease=le.none;M.duration()?c=u=0:a.timeline=0}else if(m){ko(Zn(M.vars.defaults,{ease:"none"})),M._ease=qr(m.ease||i.ease||"none");var I=0,B,V,z;if(dn(m))m.forEach(function(N){return M.to(y,N,">")}),M.duration();else{C={};for(E in m)E==="ease"||E==="easeEach"||A_(E,m[E],C,m.easeEach);for(E in C)for(B=C[E].sort(function(N,U){return N.t-U.t}),I=0,v=0;v<B.length;v++)V=B[v],z={ease:V.e,duration:(V.t-(v?B[v-1].t:0))/100*c},z[E]=V.v,M.to(y,z,I),I+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!vh&&(lr=ki(a),De.killTweensOf(y),lr=0),bi(p,ki(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!m&&a._start===Le(p._time)&&Cn(h)&&i_(ki(a))&&p.data!=="nested")&&(a._tTime=-Ee,a.render(Math.max(0,-u)||0)),g&&kp(ki(a),g),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ee&&!u?l:i<Ee?0:i,f,d,m,_,g,p,y,M;if(!c)s_(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Le(h%_),h===l?(m=this._repeat,f=c):(g=Le(h/_),m=~~g,m&&m===g?(f=c,m--):f>c&&(f=c)),p=this._yoyo&&m&1,p&&(f=c-f),g=Js(this._tTime,_),f===a&&!o&&this._initted&&m===g)return this._tTime=h,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Le(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Hp(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var C=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(v?-1:1)/C:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!g&&(Wn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&iu(this,i,s,o),Wn(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&iu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&vr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Wn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){aa||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ch(this,c),u=this._ease(c/this._dur),T_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):($l(this,0),this.parent||zp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Lo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,lr&&lr.vars.overwrite!==!0)._first||Lo(this),this.parent&&o!==this.timeline.totalDuration()&&js(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,u=this._pt,h,f,d,m,_,g,p;if((!s||s==="all")&&e_(a,l))return s==="all"&&(this._pt=0),Lo(this);for(h=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},Rn(s,function(y){return _[y]=1}),s=_),s=w_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,m=f,d={}):(d=h[p]=h[p]||{},m=s);for(_ in m)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Yl(this,g,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Lo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ho(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ho(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return De.killTweensOf(i,s,o)},t})(la);Zn(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(r){Xe[r]=function(){var t=new An,e=su.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Rh=function(t,e,n){return t[e]=n},sm=function(t,e,n){return t[e](n)},C_=function(t,e,n,i){return t[e](i.fp,n)},R_=function(t,e,n){return t.setAttribute(e,n)},Ph=function(t,e){return ze(t[e])?sm:xh(t[e])&&t.setAttribute?R_:Rh},om=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},P_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},am=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Lh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},L_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},D_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Yl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},I_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},lm=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Pn=(function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||om,this.d=l||this,this.set=c||Rh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=I_,this.m=n,this.mt=s,this.tween=i},r})();Rn(Eh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return bh[r]=1});$n.TweenMax=$n.TweenLite=Xe;$n.TimelineLite=$n.TimelineMax=An;De=new An({sortChildren:!1,defaults:ia,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=Qp;var $r=[],pl={},U_=[],Mf=0,N_=0,lc=function(t){return(pl[t]||U_).map(function(e){return e()})},cu=function(){var t=Date.now(),e=[];t-Mf>2&&(lc("matchMediaInit"),$r.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=yi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),lc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mf=t,lc("matchMedia"))},cm=(function(){function r(e,n){this.selector=n&&ou(n),this.data=[],this._r=[],this.isReverted=!1,this.id=N_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ze(n)&&(s=i,i=n,n=ze);var o=this,a=function(){var c=Re,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=ou(s)),Re=o,h=i.apply(o,arguments),ze(h)&&o._r.push(h),Re=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ze?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Re;Re=null,n(this),Re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof An?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=$r.length;o--;)$r[o].id===this.id&&$r.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),O_=(function(){function r(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Li(n)||(n={matches:n});var o=new cm(0,s||this.scope),a=o.conditions={},l,c,u;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=yi.matchMedia(n[c]),l&&($r.indexOf(o)<0&&$r.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(cu):l.addEventListener("change",cu)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ul={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Kp(i)})},timeline:function(t){return new An(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=ii(t)[0]);var s=Xr(t||{}).get,o=n?Fp:Op;return n==="native"&&(n=""),t&&(e?o((Bn[e]&&Bn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Bn[a]&&Bn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ii(t),t.length>1){var i=t.map(function(u){return Dn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Bn[e],a=Xr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Us._pt=0,h.init(t,n?u+n:u,Us,0,[t]),h.render(1,h),Us._pt&&Lh(1,Us)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Dn.to(t,Zn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=qr(t.ease,ia.ease)),gf(ia,t||{})},config:function(t){return gf(Yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Bn[a]&&!$n[a]&&ra(e+" effect requires "+a+" plugin.")}),rc[e]=function(a,l,c){return n(ii(a),Zn(l||{},s),c)},o&&(An.prototype[e]=function(a,l,c){return this.add(rc[e](a,Li(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=qr(e)},parseEase:function(t,e){return arguments.length?qr(t,e):le},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new An(t),i,s;for(n.smoothChildTiming=Cn(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,i=De._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&bi(n,i,i._start-i._delay),i=s;return bi(De,n,0),n},context:function(t,e){return t?new cm(t,e):Re},matchMedia:function(t){return new O_(t)},matchMediaRefresh:function(){return $r.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||cu()},addEventListener:function(t,e){var n=pl[t]||(pl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=pl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:d_,wrapYoyo:p_,distribute:Wp,random:Yp,snap:Xp,normalize:f_,getUnit:hn,clamp:l_,splitColor:Jp,toArray:ii,selector:ou,mapRange:$p,pipe:u_,unitize:h_,interpolate:m_,shuffle:Gp},install:Lp,effects:rc,ticker:Vn,updateRoot:An.updateRoot,plugins:Bn,globalTimeline:De,core:{PropTween:Pn,globals:Dp,Tween:Xe,Timeline:An,Animation:la,getCache:Xr,_removeLinkedListItem:Yl,reverting:function(){return rn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return vh=t}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ul[r]=Xe[r]});Vn.add(An.updateRoot);Us=Ul.to({},{duration:0});var F_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},z_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=F_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},cc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},Rn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}z_(a,s)}}}},Dn=Ul.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},cc("roundProps",au),cc("modifiers"),cc("snap",Xp))||Ul;Xe.version=An.version=Dn.version="3.15.0";Pp=1;yh()&&Qs();le.Power0;le.Power1;le.Power2;le.Power3;le.Power4;le.Linear;le.Quad;le.Cubic;le.Quart;le.Quint;le.Strong;le.Elastic;le.Back;le.SteppedEase;le.Bounce;le.Sine;le.Expo;le.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sf,cr,Hs,Dh,Hr,bf,Ih,B_=function(){return typeof window<"u"},$i={},Ur=180/Math.PI,Vs=Math.PI/180,cs=Math.atan2,Ef=1e8,Uh=/([A-Z])/g,k_=/(left|right|width|margin|padding|x)/i,H_=/[\s,\(]\S/,Ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},V_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},G_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},W_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},X_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},um=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},hm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Y_=function(t,e,n){return t.style[e]=n},q_=function(t,e,n){return t.style.setProperty(e,n)},$_=function(t,e,n){return t._gsap[e]=n},Z_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},K_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},J_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ie="transform",Ln=Ie+"Origin",j_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in $i&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ei[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Hi(i,a)}):this.tfm[t]=o.x?o[t]:Hi(i,t),t===Ln&&(this.tfm.zOrigin=o.zOrigin);else return Ei.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ie)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,e,"")),t=Ie}(s||e)&&this.props.push(t,e,s[t])},fm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Q_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Uh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ih(),(!s||!s.isStart)&&!n[Ie]&&(fm(n),i.zOrigin&&n[Ln]&&(n[Ln]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},dm=function(t,e){var n={target:t,props:[],revert:Q_,save:j_};return t._gsap||Dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},pm,hu=function(t,e){var n=cr.createElementNS?cr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):cr.createElement(t);return n&&n.style?n:cr.createElement(t)},Xn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Uh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,to(e)||e,1)||""},Tf="O,Moz,ms,Ms,Webkit".split(","),to=function(t,e,n){var i=e||Hr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Tf[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Tf[o]:"")+t},fu=function(){B_()&&window.document&&(Sf=window,cr=Sf.document,Hs=cr.documentElement,Hr=hu("div")||{style:{}},hu("div"),Ie=to(Ie),Ln=Ie+"Origin",Hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pm=!!to("perspective"),Ih=Dn.core.reverting,Dh=1)},wf=function(t){var e=t.ownerSVGElement,n=hu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Hs.removeChild(n),s},Af=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},mm=function(t){var e,n;try{e=t.getBBox()}catch{e=wf(t),n=1}return e&&(e.width||e.height)||n||(e=wf(t)),e&&!e.width&&!e.x&&!e.y?{x:+Af(t,["x","cx","x1"])||0,y:+Af(t,["y","cy","y1"])||0,width:0,height:0}:e},gm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&mm(t))},xr=function(t,e){if(e){var n=t.style,i;e in $i&&e!==Ln&&(e=Ie),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Uh,"-$1").toLowerCase())):n.removeAttribute(e)}},ur=function(t,e,n,i,s,o){var a=new Pn(t._pt,e,n,0,1,o?hm:um);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Cf={deg:1,rad:1,turn:1},t0={grid:1,flex:1},yr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Hr.style,l=k_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",m,_,g,p;if(i===o||!s||Cf[i]||Cf[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&gm(t),(d||o==="%")&&($i[e]||~e.indexOf("adius")))return m=p?t.getBBox()[l?"width":"height"]:t[u],ke(d?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===cr||!_.appendChild)&&(_=cr.body),g=_._gsap,g&&d&&g.width&&l&&g.time===Vn.time&&!g.uncache)return ke(s/g.width*h);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+i,m=t[u],y?t.style[e]=y:xr(t,e)}else(d||o==="%")&&!t0[Xn(_,"display")]&&(a.position=Xn(t,"position")),_===t&&(a.position="static"),_.appendChild(Hr),m=Hr[u],_.removeChild(Hr),a.position="absolute";return l&&d&&(g=Xr(_),g.time=Vn.time,g.width=_[u]),ke(f?m*s/h:m&&s?h/m*s:0)},Hi=function(t,e,n,i){var s;return Dh||fu(),e in Ei&&e!=="transform"&&(e=Ei[e],~e.indexOf(",")&&(e=e.split(",")[0])),$i[e]&&e!=="transform"?(s=ua(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ol(Xn(t,Ln))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Nl[e]&&Nl[e](t,e,n)||Xn(t,e)||Up(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yr(t,e,s,n)+n:s},e0=function(t,e,n,i){if(!n||n==="none"){var s=to(e,t,1),o=s&&Xn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Xn(t,"borderTopColor"))}var a=new Pn(this._pt,t.style,e,0,1,am),l=0,c=0,u,h,f,d,m,_,g,p,y,M,v,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Xn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Xn(t,e)||i,_?t.style[e]=_:xr(t,e)),u=[n,i],Qp(u),n=u[0],i=u[1],f=n.match(Is)||[],C=i.match(Is)||[],C.length){for(;h=Is.exec(i);)g=h[0],y=i.substring(l,h.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),g!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),g.charAt(1)==="="&&(g=ks(d,g)+v),p=parseFloat(g),M=g.substr((p+"").length),l=Is.lastIndex-M.length,M||(M=M||Yn.units[e]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(d=yr(t,e,_,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?hm:um;return Rp.test(i)&&(a.e=0),this._pt=a,a},Rf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},n0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Rf[n]||n,e[1]=Rf[i]||i,e.join(" ")},i0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],$i[a]&&(l=1,a=a==="transformOrigin"?Ln:Ie),xr(n,a);l&&(xr(n,Ie),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ua(n,1),o.uncache=1,fm(i)))}},Nl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Pn(t._pt,e,n,0,0,i0);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ca=[1,0,0,1,0,0],_m={},vm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Pf=function(t){var e=Xn(t,Ie);return vm(e)?ca:e.substr(7).match(Cp).map(ke)},Nh=function(t,e){var n=t._gsap||Xr(t),i=t.style,s=Pf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ca:s):(s===ca&&!t.offsetParent&&t!==Hs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Hs.appendChild(t)),s=Pf(t),l?i.display=l:xr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Hs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},du=function(t,e,n,i,s,o){var a=t._gsap,l=s||Nh(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],_=l[2],g=l[3],p=l[4],y=l[5],M=e.split(" "),v=parseFloat(M[0])||0,C=parseFloat(M[1])||0,w,E,A,S;n?l!==ca&&(E=d*g-m*_)&&(A=v*(g/E)+C*(-_/E)+(_*y-g*p)/E,S=v*(-m/E)+C*(d/E)-(d*y-m*p)/E,v=A,C=S):(w=mm(t),v=w.x+(~M[0].indexOf("%")?v/100*w.width:v),C=w.y+(~(M[1]||M[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&a.smooth?(p=v-c,y=C-u,a.xOffset=h+(p*d+y*_)-p,a.yOffset=f+(p*m+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ln]="0px 0px",o&&(ur(o,a,"xOrigin",c,v),ur(o,a,"yOrigin",u,C),ur(o,a,"xOffset",h,a.xOffset),ur(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+C)},ua=function(t,e){var n=t._gsap||new em(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Xn(t,Ln)||"0",u,h,f,d,m,_,g,p,y,M,v,C,w,E,A,S,x,L,I,B,V,z,N,U,F,Y,P,st,dt,Lt,k,J;return u=h=f=_=g=p=y=M=v=0,d=m=1,n.svg=!!(t.getCTM&&gm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ie]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ie]!=="none"?l[Ie]:"")),i.scale=i.rotate=i.translate="none"),E=Nh(t,n.svg),n.svg&&(n.uncache?(F=t.getBBox(),c=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),du(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,E)),C=n.xOrigin||0,w=n.yOrigin||0,E!==ca&&(L=E[0],I=E[1],B=E[2],V=E[3],u=z=E[4],h=N=E[5],E.length===6?(d=Math.sqrt(L*L+I*I),m=Math.sqrt(V*V+B*B),_=L||I?cs(I,L)*Ur:0,y=B||V?cs(B,V)*Ur+_:0,y&&(m*=Math.abs(Math.cos(y*Vs))),n.svg&&(u-=C-(C*L+w*B),h-=w-(C*I+w*V))):(J=E[6],Lt=E[7],P=E[8],st=E[9],dt=E[10],k=E[11],u=E[12],h=E[13],f=E[14],A=cs(J,dt),g=A*Ur,A&&(S=Math.cos(-A),x=Math.sin(-A),U=z*S+P*x,F=N*S+st*x,Y=J*S+dt*x,P=z*-x+P*S,st=N*-x+st*S,dt=J*-x+dt*S,k=Lt*-x+k*S,z=U,N=F,J=Y),A=cs(-B,dt),p=A*Ur,A&&(S=Math.cos(-A),x=Math.sin(-A),U=L*S-P*x,F=I*S-st*x,Y=B*S-dt*x,k=V*x+k*S,L=U,I=F,B=Y),A=cs(I,L),_=A*Ur,A&&(S=Math.cos(A),x=Math.sin(A),U=L*S+I*x,F=z*S+N*x,I=I*S-L*x,N=N*S-z*x,L=U,z=F),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),d=ke(Math.sqrt(L*L+I*I+B*B)),m=ke(Math.sqrt(N*N+J*J)),A=cs(z,N),y=Math.abs(A)>2e-4?A*Ur:0,v=k?1/(k<0?-k:k):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!vm(Xn(t,Ie)),U&&t.setAttribute("transform",U))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ke(d),n.scaleY=ke(m),n.rotation=ke(_)+a,n.rotationX=ke(g)+a,n.rotationY=ke(p)+a,n.skewX=y+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ln]=Ol(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?s0:pm?xm:r0,n.uncache=0,n},Ol=function(t){return(t=t.split(" "))[0]+" "+t[1]},uc=function(t,e,n){var i=hn(e);return ke(parseFloat(e)+parseFloat(yr(t,"x",n+"px",i)))+i},r0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,xm(t,e)},wr="0deg",mo="0px",Ar=") ",xm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,y=n.target,M=n.zOrigin,v="",C=p==="auto"&&t&&t!==1||p===!0;if(M&&(h!==wr||u!==wr)){var w=parseFloat(u)*Vs,E=Math.sin(w),A=Math.cos(w),S;w=parseFloat(h)*Vs,S=Math.cos(w),o=uc(y,o,E*S*-M),a=uc(y,a,-Math.sin(w)*-M),l=uc(y,l,A*S*-M+M)}g!==mo&&(v+="perspective("+g+Ar),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(C||o!==mo||a!==mo||l!==mo)&&(v+=l!==mo||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ar),c!==wr&&(v+="rotate("+c+Ar),u!==wr&&(v+="rotateY("+u+Ar),h!==wr&&(v+="rotateX("+h+Ar),(f!==wr||d!==wr)&&(v+="skew("+f+", "+d+Ar),(m!==1||_!==1)&&(v+="scale("+m+", "+_+Ar),y.style[Ie]=v||"translate(0, 0)"},s0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,y=n.forceCSS,M=parseFloat(o),v=parseFloat(a),C,w,E,A,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vs,c*=Vs,C=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(u*=Vs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,A*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),C*=S,w*=S)),C=ke(C),w=ke(w),E=ke(E),A=ke(A)):(C=h,A=f,w=E=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=yr(d,"x",o,"px"),v=yr(d,"y",a,"px")),(m||_||g||p)&&(M=ke(M+m-(m*C+_*E)+g),v=ke(v+_-(m*w+_*A)+p)),(i||s)&&(S=d.getBBox(),M=ke(M+i/100*S.width),v=ke(v+s/100*S.height)),S="matrix("+C+","+w+","+E+","+A+","+M+","+v+")",d.setAttribute("transform",S),y&&(d.style[Ie]=S)},o0=function(t,e,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ur:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Ef)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Ef)%o-~~(c/o)*o)),t._pt=f=new Pn(t._pt,e,n,i,c,V_),f.e=u,f.u="deg",t._props.push(n),f},Lf=function(t,e){for(var n in e)t[n]=e[n];return t},a0=function(t,e,n){var i=Lf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ie]=e,a=ua(n,1),xr(n,Ie),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ie],o[Ie]=e,a=ua(n,1),o[Ie]=c);for(l in $i)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=hn(c),m=hn(u),h=d!==m?yr(n,l,c,m):parseFloat(c),f=parseFloat(u),t._pt=new Pn(t._pt,a,l,h,f-h,uu),t._pt.u=m||0,t._props.push(l));Lf(a,i)};Rn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Nl[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return Hi(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(m,_){return d[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var ym={name:"css",register:fu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,m,_,g,p,y,M,v,C,w,E,A,S;Dh||fu(),this.styles=this.styles||dm(t),A=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Bn[_]&&nm(_,e,n,i,t,s)))){if(d=typeof u,m=Nl[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=oa(u)),m)m(this,t,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",pr.lastIndex=0,pr.test(c)||(g=hn(c),p=hn(u),p?g!==p&&(c=yr(t,_,c,p)+p):g&&(u+=g)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),A.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],en(c)&&~c.indexOf("random(")&&(c=oa(c)),hn(c+"")||c==="auto"||(c+=Yn.units[_]||hn(Hi(t,_))||""),(c+"").charAt(1)==="="&&(c=Hi(t,_))):c=Hi(t,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Ei&&(_==="autoAlpha"&&(f===1&&Hi(t,"visibility")==="hidden"&&h&&(f=0),A.push("visibility",0,a.visibility),ur(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ei[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in $i,M){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Xn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=u,u=Xn(t,"perspective"),x?t.style.perspective=x:xr(t,"perspective")}h=parseFloat(u)}if(v||(C=t._gsap,C.renderTransform&&!e.parseTransform||ua(t,e.parseTransform),w=e.smoothOrigin!==!1&&C.smooth,v=this._pt=new Pn(this._pt,a,Ie,0,1,C.renderTransform,C,0,-1),v.dep=1),_==="scale")this._pt=new Pn(this._pt,C,"scaleY",C.scaleY,(y?ks(C.scaleY,y+h):h)-C.scaleY||0,uu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(Ln,0,a[Ln]),u=n0(u),C.svg?du(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&ur(this,C,"zOrigin",C.zOrigin,p),ur(this,a,_,Ol(c),Ol(u)));continue}else if(_==="svgOrigin"){du(t,u,1,w,0,this);continue}else if(_ in _m){o0(this,C,_,f,y?ks(f,y+u):u);continue}else if(_==="smoothOrigin"){ur(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){a0(this,u,t);continue}}else _ in a||(_=to(_)||_);if(M||(h||h===0)&&(f||f===0)&&!H_.test(u)&&_ in a)g=(c+"").substr((f+"").length),h||(h=0),p=hn(u)||(_ in Yn.units?Yn.units[_]:g),g!==p&&(f=yr(t,_,c,p)),this._pt=new Pn(this._pt,M?C:a,_,f,(y?ks(f,y+h):h)-f,!M&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?X_:uu),this._pt.u=p||0,M&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=W_):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=G_);else if(_ in a)e0.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Sh(_,u);continue}M||(_ in a?A.push(_,0,a[_]):typeof t[_]=="function"?A.push(_,2,t[_]()):A.push(_,1,c||t[_])),o.push(_)}}E&&lm(this)},render:function(t,e){if(e.tween._time||!Ih())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Hi,aliases:Ei,getSetter:function(t,e,n){var i=Ei[e];return i&&i.indexOf(",")<0&&(e=i),e in $i&&e!==Ln&&(t._gsap.x||Hi(t,"x"))?n&&bf===n?e==="scale"?Z_:$_:(bf=n||{})&&(e==="scale"?K_:J_):t.style&&!xh(t.style[e])?Y_:~e.indexOf("-")?q_:Ph(t,e)},core:{_removeProperty:xr,_getMatrix:Nh}};Dn.utils.checkPrefix=to;Dn.core.getStyleSaver=dm;(function(r,t,e,n){var i=Rn(r+","+t+","+e,function(s){$i[s]=1});Rn(t,function(s){Yn.units[s]="deg",_m[s]=1}),Ei[i[13]]=r+","+t,Rn(n,function(s){var o=s.split(":");Ei[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Yn.units[r]="px"});Dn.registerPlugin(ym);var Fe=Dn.registerPlugin(ym)||Dn;Fe.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="170",l0=0,Df=1,c0=2,Mm=1,u0=2,Bi=3,Mr=0,En=1,di=2,mr=0,Gs=1,If=2,Uf=3,Nf=4,h0=5,Br=100,f0=101,d0=102,p0=103,m0=104,g0=200,_0=201,v0=202,x0=203,pu=204,mu=205,y0=206,M0=207,S0=208,b0=209,E0=210,T0=211,w0=212,A0=213,C0=214,gu=0,_u=1,vu=2,eo=3,xu=4,yu=5,Mu=6,Su=7,Sm=0,R0=1,P0=2,gr=0,L0=1,D0=2,I0=3,bm=4,U0=5,N0=6,O0=7,Em=300,no=301,io=302,bu=303,Eu=304,Zl=306,Fl=1e3,Vr=1001,Tu=1002,qn=1003,F0=1004,wa=1005,Ti=1006,hc=1007,Gr=1008,Zi=1009,Tm=1010,wm=1011,ha=1012,Fh=1013,jr=1014,wi=1015,Ma=1016,zh=1017,Bh=1018,ro=1020,Am=35902,Cm=1021,Rm=1022,mi=1023,Pm=1024,Lm=1025,Ws=1026,so=1027,kh=1028,Hh=1029,Dm=1030,Vh=1031,Gh=1033,ml=33776,gl=33777,_l=33778,vl=33779,wu=35840,Au=35841,Cu=35842,Ru=35843,Pu=36196,Lu=37492,Du=37496,Iu=37808,Uu=37809,Nu=37810,Ou=37811,Fu=37812,zu=37813,Bu=37814,ku=37815,Hu=37816,Vu=37817,Gu=37818,Wu=37819,Xu=37820,Yu=37821,xl=36492,qu=36494,$u=36495,Im=36283,Zu=36284,Ku=36285,Ju=36286,z0=3200,B0=3201,Um=0,k0=1,ar="",Sn="srgb",co="srgb-linear",Kl="linear",xe="srgb",us=7680,Of=519,H0=512,V0=513,G0=514,Nm=515,W0=516,X0=517,Y0=518,q0=519,Ff=35044,zf=35048,Bf="300 es",Gi=2e3,zl=2001;class uo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kf=1234567;const Go=Math.PI/180,fa=180/Math.PI;function os(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function tn(r,t,e){return Math.max(t,Math.min(e,r))}function Wh(r,t){return(r%t+t)%t}function $0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Z0(r,t,e){return r!==t?(e-r)/(t-r):0}function Wo(r,t,e){return(1-e)*r+e*t}function K0(r,t,e,n){return Wo(r,t,1-Math.exp(-e*n))}function J0(r,t=1){return t-Math.abs(Wh(r,t*2)-t)}function j0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Q0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function tv(r,t){return r+Math.floor(Math.random()*(t-r+1))}function ev(r,t){return r+Math.random()*(t-r)}function nv(r){return r*(.5-Math.random())}function iv(r){r!==void 0&&(kf=r);let t=kf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rv(r){return r*Go}function sv(r){return r*fa}function ov(r){return(r&r-1)===0&&r!==0}function av(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function lv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cv(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ps(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xi={DEG2RAD:Go,RAD2DEG:fa,generateUUID:os,clamp:tn,euclideanModulo:Wh,mapLinear:$0,inverseLerp:Z0,lerp:Wo,damp:K0,pingpong:J0,smoothstep:j0,smootherstep:Q0,randInt:tv,randFloat:ev,randFloatSpread:nv,seededRandom:iv,degToRad:rv,radToDeg:sv,isPowerOfTwo:ov,ceilPowerOfTwo:av,floorPowerOfTwo:lv,setQuaternionFromProperEuler:cv,normalize:gn,denormalize:Ps};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,i,s,o,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],y=i[1],M=i[4],v=i[7],C=i[2],w=i[5],E=i[8];return s[0]=o*_+a*y+l*C,s[3]=o*g+a*M+l*w,s[6]=o*p+a*v+l*E,s[1]=c*_+u*y+h*C,s[4]=c*g+u*M+h*w,s[7]=c*p+u*v+h*E,s[2]=f*_+d*y+m*C,s[5]=f*g+d*M+m*w,s[8]=f*p+d*v+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=e*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fc.makeScale(t,e)),this}rotate(t){return this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new ee;function Om(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uv(){const r=da("canvas");return r.style.display="block",r}const Hf={};function Io(r){r in Hf||(Hf[r]=!0,console.warn(r))}function hv(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function fv(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dv(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ue={enabled:!0,workingColorSpace:co,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(r.r=Xs(r.r),r.g=Xs(r.g),r.b=Xs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?Kl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Vf=[.64,.33,.3,.6,.15,.06],Gf=[.2126,.7152,.0722],Wf=[.3127,.329],Xf=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[co]:{primaries:Vf,whitePoint:Wf,transfer:Kl,toXYZ:Xf,fromXYZ:Yf,luminanceCoefficients:Gf,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:Vf,whitePoint:Wf,transfer:xe,toXYZ:Xf,fromXYZ:Yf,luminanceCoefficients:Gf,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}});let hs;class pv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=da("canvas")),hs.width=t.width,hs.height=t.height;const n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=da("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mv=0;class Fm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(dc(i[o].image)):s.push(dc(i[o]))}else s=dc(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function dc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gv=0;class sn extends uo{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,n=Vr,i=Vr,s=Ti,o=Gr,a=mi,l=Zi,c=sn.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=os(),this.name="",this.source=new Fm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Em)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fl:t.x=t.x-Math.floor(t.x);break;case Vr:t.x=t.x<0?0:1;break;case Tu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fl:t.y=t.y-Math.floor(t.y);break;case Vr:t.y=t.y<0?0:1;break;case Tu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Em;sn.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,i=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(d+1)/2,C=(p+1)/2,w=(u+f)/4,E=(h+_)/4,A=(m+g)/4;return M>v&&M>C?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=E/n):v>C?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=A/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=A/s),this.set(n,i,s,e),this}let y=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _v extends uo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends _v{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zm extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vv extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==m){let g=1-a;const p=l*f+c*d+u*m+h*_,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,p*y);g=Math.sin(g*w)/C,a=Math.sin(a*w)/C}const v=a*y;if(l=l*g+f*v,c=c*g+d*v,u=u*g+m*v,h=h*g+_*v,g===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new H,qf=new Sa;class as{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),Ca.subVectors(this.max,go),fs.subVectors(t.a,go),ds.subVectors(t.b,go),ps.subVectors(t.c,go),ji.subVectors(ds,fs),Qi.subVectors(ps,ds),Cr.subVectors(fs,ps);let e=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-Cr.z,Cr.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,Cr.z,0,-Cr.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-Cr.y,Cr.x,0];return!mc(e,fs,ds,ps,Ca)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,fs,ds,ps,Ca))?!1:(Ra.crossVectors(ji,Qi),e=[Ra.x,Ra.y,Ra.z],mc(e,fs,ds,ps,Ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ui=[new H,new H,new H,new H,new H,new H,new H,new H],li=new H,Aa=new as,fs=new H,ds=new H,ps=new H,ji=new H,Qi=new H,Cr=new H,go=new H,Ca=new H,Ra=new H,Rr=new H;function mc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Rr.fromArray(r,s);const a=i.x*Math.abs(Rr.x)+i.y*Math.abs(Rr.y)+i.z*Math.abs(Rr.z),l=t.dot(Rr),c=e.dot(Rr),u=n.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xv=new as,_o=new H,gc=new H;class ba{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);const e=_o.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(_o,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(gc)),this.expandByPoint(_o.copy(t.center).sub(gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new H,_c=new H,Pa=new H,tr=new H,vc=new H,La=new H,xc=new H;class yv{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_c.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),tr.copy(this.origin).sub(_c);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Pa),a=tr.dot(this.direction),l=-tr.dot(Pa),c=tr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_c).addScaledVector(Pa,f),d}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);const n=Ni.dot(this.direction),i=Ni.dot(Ni)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,i,s){vc.subVectors(e,t),La.subVectors(n,t),xc.crossVectors(vc,La);let o=this.direction.dot(xc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,t);const l=a*this.direction.dot(La.crossVectors(tr,La));if(l<0)return null;const c=a*this.direction.dot(vc.cross(tr));if(c<0||l+c>o)return null;const u=-a*tr.dot(xc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,i,s,o,a,l,c,u,h,f,d,m,_,g){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,d,m,_,g)}set(t,e,n,i,s,o,a,l,c,u,h,f,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ms.setFromMatrixColumn(t,0).length(),s=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,m=c*u,_=c*h;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,m=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mv,t,Sv)}lookAt(t,e,n){const i=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),er.crossVectors(n,Nn),er.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),er.crossVectors(n,Nn)),er.normalize(),Da.crossVectors(Nn,er),i[0]=er.x,i[4]=Da.x,i[8]=Nn.x,i[1]=er.y,i[5]=Da.y,i[9]=Nn.y,i[2]=er.z,i[6]=Da.z,i[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],M=n[7],v=n[11],C=n[15],w=i[0],E=i[4],A=i[8],S=i[12],x=i[1],L=i[5],I=i[9],B=i[13],V=i[2],z=i[6],N=i[10],U=i[14],F=i[3],Y=i[7],P=i[11],st=i[15];return s[0]=o*w+a*x+l*V+c*F,s[4]=o*E+a*L+l*z+c*Y,s[8]=o*A+a*I+l*N+c*P,s[12]=o*S+a*B+l*U+c*st,s[1]=u*w+h*x+f*V+d*F,s[5]=u*E+h*L+f*z+d*Y,s[9]=u*A+h*I+f*N+d*P,s[13]=u*S+h*B+f*U+d*st,s[2]=m*w+_*x+g*V+p*F,s[6]=m*E+_*L+g*z+p*Y,s[10]=m*A+_*I+g*N+p*P,s[14]=m*S+_*B+g*U+p*st,s[3]=y*w+M*x+v*V+C*F,s[7]=y*E+M*L+v*z+C*Y,s[11]=y*A+M*I+v*N+C*P,s[15]=y*S+M*B+v*U+C*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+g*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],y=h*g*c-_*f*c+_*l*d-a*g*d-h*l*p+a*f*p,M=m*f*c-u*g*c-m*l*d+o*g*d+u*l*p-o*f*p,v=u*_*c-m*h*c+m*a*d-o*_*d-u*a*p+o*h*p,C=m*h*l-u*_*l-m*a*f+o*_*f+u*a*g-o*h*g,w=e*y+n*M+i*v+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=y*E,t[1]=(_*f*s-h*g*s-_*i*d+n*g*d+h*i*p-n*f*p)*E,t[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*E,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,t[4]=M*E,t[5]=(u*g*s-m*f*s+m*i*d-e*g*d-u*i*p+e*f*p)*E,t[6]=(m*l*s-o*g*s-m*i*c+e*g*c+o*i*p-e*l*p)*E,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*d+e*l*d)*E,t[8]=v*E,t[9]=(m*h*s-u*_*s-m*n*d+e*_*d+u*n*p-e*h*p)*E,t[10]=(o*_*s-m*a*s+m*n*c-e*_*c-o*n*p+e*a*p)*E,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*E,t[12]=C*E,t[13]=(u*_*i-m*h*i+m*n*f-e*_*f-u*n*g+e*h*g)*E,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*E,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,_=o*u,g=o*h,p=a*h,y=l*c,M=l*u,v=l*h,C=n.x,w=n.y,E=n.z;return i[0]=(1-(_+p))*C,i[1]=(d+v)*C,i[2]=(m-M)*C,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(m+M)*E,i[9]=(g-y)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ms.set(i[0],i[1],i[2]).length();const o=ms.set(i[4],i[5],i[6]).length(),a=ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ci.copy(this);const c=1/s,u=1/o,h=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,e.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Gi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,m;if(a===Gi)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===zl)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Gi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,d=(n+i)*u;let m,_;if(a===Gi)m=(o+s)*h,_=-2*h;else if(a===zl)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ms=new H,ci=new Te,Mv=new H(0,0,0),Sv=new H(1,1,1),er=new H,Da=new H,Nn=new H,$f=new Te,Zf=new Sa;class si{constructor(t=0,e=0,n=0,i=si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $f.makeRotationFromQuaternion(t),this.setFromRotationMatrix($f,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zf.setFromEuler(this),this.setFromQuaternion(Zf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bv=0;const Kf=new H,gs=new Sa,Oi=new Te,Ia=new H,vo=new H,Ev=new H,Tv=new Sa,Jf=new H(1,0,0),jf=new H(0,1,0),Qf=new H(0,0,1),td={type:"added"},wv={type:"removed"},_s={type:"childadded",child:null},yc={type:"childremoved",child:null};class on extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new H,e=new si,n=new Sa,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new ee}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Jf,t)}rotateY(t){return this.rotateOnAxis(jf,t)}rotateZ(t){return this.rotateOnAxis(Qf,t)}translateOnAxis(t,e){return Kf.copy(t).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jf,t)}translateY(t){return this.translateOnAxis(jf,t)}translateZ(t){return this.translateOnAxis(Qf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ia.copy(t):Ia.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(vo,Ia,this.up):Oi.lookAt(Ia,vo,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(Oi),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(td),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wv),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(td),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,t,Ev),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,Tv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}on.DEFAULT_UP=new H(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new H,Fi=new H,Mc=new H,zi=new H,vs=new H,xs=new H,ed=new H,Sc=new H,bc=new H,Ec=new H,Tc=new ye,wc=new ye,Ac=new ye;class pi{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ui.subVectors(t,e),i.cross(ui);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ui.subVectors(i,e),Fi.subVectors(n,e),Mc.subVectors(t,e);const o=ui.dot(ui),a=ui.dot(Fi),l=ui.dot(Mc),c=Fi.dot(Fi),u=Fi.dot(Mc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Tc.setScalar(0),wc.setScalar(0),Ac.setScalar(0),Tc.fromBufferAttribute(t,e),wc.fromBufferAttribute(t,n),Ac.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Tc,s.x),o.addScaledVector(wc,s.y),o.addScaledVector(Ac,s.z),o}static isFrontFacing(t,e,n,i){return ui.subVectors(n,e),Fi.subVectors(t,e),ui.cross(Fi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ui.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return pi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;vs.subVectors(i,n),xs.subVectors(s,n),Sc.subVectors(t,n);const l=vs.dot(Sc),c=xs.dot(Sc);if(l<=0&&c<=0)return e.copy(n);bc.subVectors(t,i);const u=vs.dot(bc),h=xs.dot(bc);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(vs,o);Ec.subVectors(t,s);const d=vs.dot(Ec),m=xs.dot(Ec);if(m>=0&&d<=m)return e.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(xs,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return ed.subVectors(s,i),a=(h-u)/(h-u+(d-m)),e.copy(i).addScaledVector(ed,a);const p=1/(g+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(vs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Cc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=Wh(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Cc(o,s,t+1/3),this.g=Cc(o,s,t),this.b=Cc(o,s,t-1/3)}return ue.toWorkingColorSpace(this,i),this}setStyle(t,e=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const n=km[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return ue.fromWorkingColorSpace(ln.copy(this),t),Math.round(tn(ln.r*255,0,255))*65536+Math.round(tn(ln.g*255,0,255))*256+Math.round(tn(ln.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,s=ln.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Sn){ue.fromWorkingColorSpace(ln.copy(this),t);const e=ln.r,n=ln.g,i=ln.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(Ua);const n=Wo(nr.h,Ua.h,e),i=Wo(nr.s,Ua.s,e),s=Wo(nr.l,Ua.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Jt;Jt.NAMES=km;let Av=0;class Ea extends uo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=os(),this.name="",this.blending=Gs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pu&&(n.blendSrc=this.blendSrc),this.blendDst!==mu&&(n.blendDst=this.blendDst),this.blendEquation!==Br&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Of&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oo extends Ea{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Sm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new H,Na=new Et;class gi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ff,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(t),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ff&&(t.usage=this.usage),t}}class Hm extends gi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vm extends gi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends gi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cv=0;const Jn=new Te,Rc=new on,ys=new H,On=new as,xo=new as,Je=new H;class oi extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Om(t)?Vm:Hm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Rc.lookAt(t),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(On.min,xo.min),On.expandByPoint(Je),Je.addVectors(On.max,xo.max),On.expandByPoint(Je)):(On.expandByPoint(xo.min),On.expandByPoint(xo.max))}On.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Je.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(t,c),Je.add(ys)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new H,l[A]=new H;const c=new H,u=new H,h=new H,f=new Et,d=new Et,m=new Et,_=new H,g=new H;function p(A,S,x){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(L),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),a[A].add(_),a[S].add(_),a[x].add(_),l[A].add(g),l[S].add(g),l[x].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,S=y.length;A<S;++A){const x=y[A],L=x.start,I=x.count;for(let B=L,V=L+I;B<V;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new H,v=new H,C=new H,w=new H;function E(A){C.fromBufferAttribute(i,A),w.copy(C);const S=a[A];M.copy(S),M.sub(C.multiplyScalar(C.dot(S))).normalize(),v.crossVectors(w,S);const L=v.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,L)}for(let A=0,S=y.length;A<S;++A){const x=y[A],L=x.start,I=x.count;for(let B=L,V=L+I;B<V;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new gi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new Te,Pr=new yv,Oa=new ba,id=new H,Fa=new H,za=new H,Ba=new H,Pc=new H,ka=new H,rd=new H,Ha=new H;class ae extends on{constructor(t=new oi,e=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Pc.fromBufferAttribute(h,t),o?ka.addScaledVector(Pc,u):ka.addScaledVector(Pc.sub(e),u))}e.add(ka)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(Oa.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Oa,id)===null||Pr.origin.distanceToSquared(id)>(t.far-t.near)**2))&&(nd.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(nd),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,C=M;v<C;v+=3){const w=a.getX(v),E=a.getX(v+1),A=a.getX(v+2);i=Va(this,p,t,n,c,u,h,w,E,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const y=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);i=Va(this,o,t,n,c,u,h,y,M,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,C=M;v<C;v+=3){const w=v,E=v+1,A=v+2;i=Va(this,p,t,n,c,u,h,w,E,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const y=g,M=g+1,v=g+2;i=Va(this,o,t,n,c,u,h,y,M,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Rv(r,t,e,n,i,s,o,a){let l;if(t.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Mr,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ha);return c<e.near||c>e.far?null:{distance:c,point:Ha.clone(),object:r}}function Va(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Fa),r.getVertexPosition(l,za),r.getVertexPosition(c,Ba);const u=Rv(r,t,e,n,Fa,za,Ba,rd);if(u){const h=new H;pi.getBarycoord(rd,Fa,za,Ba,h),i&&(u.uv=pi.getInterpolatedAttribute(i,a,l,c,h,new Et)),s&&(u.uv1=pi.getInterpolatedAttribute(s,a,l,c,h,new Et)),o&&(u.normal=pi.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};pi.getNormal(Fa,za,Ba,f.normal),u.face=f,u.barycoord=h}return u}class Tr extends oi{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2));function m(_,g,p,y,M,v,C,w,E,A,S){const x=v/E,L=C/A,I=v/2,B=C/2,V=w/2,z=E+1,N=A+1;let U=0,F=0;const Y=new H;for(let P=0;P<N;P++){const st=P*L-B;for(let dt=0;dt<z;dt++){const Lt=dt*x-I;Y[_]=Lt*y,Y[g]=st*M,Y[p]=V,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[g]=0,Y[p]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(dt/E),h.push(1-P/A),U+=1}}for(let P=0;P<A;P++)for(let st=0;st<E;st++){const dt=f+st+z*P,Lt=f+st+z*(P+1),k=f+(st+1)+z*(P+1),J=f+(st+1)+z*P;l.push(dt,Lt,J),l.push(Lt,k,J),F+=6}a.addGroup(d,F,S),d+=F,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function vn(r){const t={};for(let e=0;e<r.length;e++){const n=ao(r[e]);for(const i in n)t[i]=n[i]}return t}function Pv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Gm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const Lv={clone:ao,merge:vn};var Dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Ea{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dv,this.fragmentShader=Iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=Pv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wm extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new H,sd=new Et,od=new Et;class kn extends Wm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ir.x,ir.y).multiplyScalar(-t/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-t/ir.z)}getViewSize(t,e){return this.getViewBounds(t,sd,od),e.subVectors(od,sd)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Go*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,Ss=1;class Uv extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kn(Ms,Ss,t,e);i.layers=this.layers,this.add(i);const s=new kn(Ms,Ss,t,e);s.layers=this.layers,this.add(s);const o=new kn(Ms,Ss,t,e);o.layers=this.layers,this.add(o);const a=new kn(Ms,Ss,t,e);a.layers=this.layers,this.add(a);const l=new kn(Ms,Ss,t,e);l.layers=this.layers,this.add(l);const c=new kn(Ms,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xm extends sn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:no,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nv extends Qr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xm(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tr(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:mr});s.uniforms.tEquirect.value=e;const o=new ae(i,s),a=e.minFilter;return e.minFilter===Gr&&(e.minFilter=Ti),new Uv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Lc=new H,Ov=new H,Fv=new ee;class Nr{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Lc.subVectors(n,e).cross(Ov.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Lc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fv.getNormalMatrix(t),i=this.coplanarPoint(Lc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new ba,Ga=new H;class Xh{constructor(t=new Nr,e=new Nr,n=new Nr,i=new Nr,s=new Nr,o=new Nr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],m=i[9],_=i[10],g=i[11],p=i[12],y=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,g-d,v-p).normalize(),n[1].setComponents(l+s,f+c,g+d,v+p).normalize(),n[2].setComponents(l+o,f+u,g+m,v+y).normalize(),n[3].setComponents(l-o,f-u,g-m,v-y).normalize(),n[4].setComponents(l-a,f-h,g-_,v-M).normalize(),e===Gi)n[5].setComponents(l+a,f+h,g+_,v+M).normalize();else if(e===zl)n[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(t){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ga.x=i.normal.x>0?t.max.x:t.min.x,Ga.y=i.normal.y>0?t.max.y:t.min.y,Ga.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ym(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function zv(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class ts extends oi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const y=p*f-o;for(let M=0;M<c;M++){const v=M*h-s;m.push(v,-y,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,v=y+c*(p+1),C=y+1+c*(p+1),w=y+1+c*p;d.push(M,v,w),d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new Ve(m,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kv=`#ifdef USE_ALPHAHASH
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
#endif`,Hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
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
#endif`,Yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
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
#endif`,$v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jv=`#ifdef USE_IRIDESCENCE
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
#endif`,Qv=`#ifdef USE_BUMPMAP
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lx=`#define PI 3.141592653589793
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
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ux=`vec3 transformedNormal = objectNormal;
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
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
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
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ox=`PhysicalMaterial material;
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
#endif`,Fx=`struct PhysicalMaterial {
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
}`,zx=`
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$x=`#if defined( USE_POINTS_UV )
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
#endif`,Zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
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
#endif`,ey=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ay=`#ifdef USE_NORMALMAP
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
#endif`,ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,by=`float getShadowMask() {
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
}`,Ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ty=`#ifdef USE_SKINNING
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
#endif`,wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ay=`#ifdef USE_SKINNING
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
#endif`,Cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Iy=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,By=`uniform sampler2D t2D;
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`#include <common>
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
}`,Xy=`#if DEPTH_PACKING == 3200
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
}`,Yy=`#define DISTANCE
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
}`,qy=`#define DISTANCE
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Qy=`uniform vec3 diffuse;
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
}`,tM=`#define LAMBERT
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
}`,eM=`#define LAMBERT
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
}`,nM=`#define MATCAP
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
}`,iM=`#define MATCAP
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
}`,rM=`#define NORMAL
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
}`,sM=`#define NORMAL
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
}`,oM=`#define PHONG
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
}`,aM=`#define PHONG
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
}`,lM=`#define STANDARD
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
}`,cM=`#define STANDARD
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
}`,uM=`#define TOON
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
}`,hM=`#define TOON
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
}`,fM=`uniform float size;
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
}`,dM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 color;
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
}`,gM=`uniform float rotation;
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
}`,_M=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Bv,alphahash_pars_fragment:kv,alphamap_fragment:Hv,alphamap_pars_fragment:Vv,alphatest_fragment:Gv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:Yv,batching_pars_vertex:qv,batching_vertex:$v,begin_vertex:Zv,beginnormal_vertex:Kv,bsdfs:Jv,iridescence_fragment:jv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:tx,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:rx,color_pars_fragment:sx,color_pars_vertex:ox,color_vertex:ax,common:lx,cube_uv_reflection_fragment:cx,defaultnormal_vertex:ux,displacementmap_pars_vertex:hx,displacementmap_vertex:fx,emissivemap_fragment:dx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:_x,envmap_common_pars_fragment:vx,envmap_pars_fragment:xx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Lx,envmap_vertex:Mx,fog_vertex:Sx,fog_pars_vertex:bx,fog_fragment:Ex,fog_pars_fragment:Tx,gradientmap_pars_fragment:wx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Cx,lights_lambert_pars_fragment:Rx,lights_pars_begin:Px,lights_toon_fragment:Dx,lights_toon_pars_fragment:Ix,lights_phong_fragment:Ux,lights_phong_pars_fragment:Nx,lights_physical_fragment:Ox,lights_physical_pars_fragment:Fx,lights_fragment_begin:zx,lights_fragment_maps:Bx,lights_fragment_end:kx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:Yx,map_particle_fragment:qx,map_particle_pars_fragment:$x,metalnessmap_fragment:Zx,metalnessmap_pars_fragment:Kx,morphinstance_vertex:Jx,morphcolor_vertex:jx,morphnormal_vertex:Qx,morphtarget_pars_vertex:ty,morphtarget_vertex:ey,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:ry,normal_pars_vertex:sy,normal_vertex:oy,normalmap_pars_fragment:ay,clearcoat_normal_fragment_begin:ly,clearcoat_normal_fragment_maps:cy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:fy,packing:dy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:gy,dithering_pars_fragment:_y,roughnessmap_fragment:vy,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:yy,shadowmap_pars_vertex:My,shadowmap_vertex:Sy,shadowmask_pars_fragment:by,skinbase_vertex:Ey,skinning_pars_vertex:Ty,skinning_vertex:wy,skinnormal_vertex:Ay,specularmap_fragment:Cy,specularmap_pars_fragment:Ry,tonemapping_fragment:Py,tonemapping_pars_fragment:Ly,transmission_fragment:Dy,transmission_pars_fragment:Iy,uv_pars_fragment:Uy,uv_pars_vertex:Ny,uv_vertex:Oy,worldpos_vertex:Fy,background_vert:zy,background_frag:By,backgroundCube_vert:ky,backgroundCube_frag:Hy,cube_vert:Vy,cube_frag:Gy,depth_vert:Wy,depth_frag:Xy,distanceRGBA_vert:Yy,distanceRGBA_frag:qy,equirect_vert:$y,equirect_frag:Zy,linedashed_vert:Ky,linedashed_frag:Jy,meshbasic_vert:jy,meshbasic_frag:Qy,meshlambert_vert:tM,meshlambert_frag:eM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:rM,meshnormal_frag:sM,meshphong_vert:oM,meshphong_frag:aM,meshphysical_vert:lM,meshphysical_frag:cM,meshtoon_vert:uM,meshtoon_frag:hM,points_vert:fM,points_frag:dM,shadow_vert:pM,shadow_frag:mM,sprite_vert:gM,sprite_frag:_M},At={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Si={basic:{uniforms:vn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:vn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:vn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:vn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:vn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:vn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:vn([At.points,At.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:vn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:vn([At.common,At.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:vn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:vn([At.sprite,At.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:vn([At.common,At.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:vn([At.lights,At.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Si.physical={uniforms:vn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Wa={r:0,b:0,g:0},Dr=new si,vM=new Te;function xM(r,t,e,n,i,s,o){const a=new Jt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1;const v=m(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,M){const v=m(M);v&&(v.isCubeTexture||v.mapping===Zl)?(u===void 0&&(u=new ae(new Tr(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:ao(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Dr.copy(M.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(Dr)),u.material.toneMapped=ue.getTransfer(v.colorSpace)!==xe,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ae(new ts(2,2),new Sr({name:"BackgroundMaterial",uniforms:ao(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ue.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(Wa,Gm(r)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:g}}function yM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(x,L,I,B,V){let z=!1;const N=h(B,I,L);s!==N&&(s=N,c(s.object)),z=d(x,B,I,V),z&&m(x,B,I,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(x,L,I,B),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,L,I){const B=I.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let z=V[L.id];z===void 0&&(z={},V[L.id]=z);let N=z[B];return N===void 0&&(N=f(l()),z[B]=N),N}function f(x){const L=[],I=[],B=[];for(let V=0;V<e;V++)L[V]=0,I[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:B,object:x,attributes:{},index:null}}function d(x,L,I,B){const V=s.attributes,z=L.attributes;let N=0;const U=I.getAttributes();for(const F in U)if(U[F].location>=0){const P=V[F];let st=z[F];if(st===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),P===void 0||P.attribute!==st||st&&P.data!==st.data)return!0;N++}return s.attributesNum!==N||s.index!==B}function m(x,L,I,B){const V={},z=L.attributes;let N=0;const U=I.getAttributes();for(const F in U)if(U[F].location>=0){let P=z[F];P===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(P=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(P=x.instanceColor));const st={};st.attribute=P,P&&P.data&&(st.data=P.data),V[F]=st,N++}s.attributes=V,s.attributesNum=N,s.index=B}function _(){const x=s.newAttributes;for(let L=0,I=x.length;L<I;L++)x[L]=0}function g(x){p(x,0)}function p(x,L){const I=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;I[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),V[x]!==L&&(r.vertexAttribDivisor(x,L),V[x]=L)}function y(){const x=s.newAttributes,L=s.enabledAttributes;for(let I=0,B=L.length;I<B;I++)L[I]!==x[I]&&(r.disableVertexAttribArray(I),L[I]=0)}function M(x,L,I,B,V,z,N){N===!0?r.vertexAttribIPointer(x,L,I,V,z):r.vertexAttribPointer(x,L,I,B,V,z)}function v(x,L,I,B){_();const V=B.attributes,z=I.getAttributes(),N=L.defaultAttributeValues;for(const U in z){const F=z[U];if(F.location>=0){let Y=V[U];if(Y===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){const P=Y.normalized,st=Y.itemSize,dt=t.get(Y);if(dt===void 0)continue;const Lt=dt.buffer,k=dt.type,J=dt.bytesPerElement,at=k===r.INT||k===r.UNSIGNED_INT||Y.gpuType===Fh;if(Y.isInterleavedBufferAttribute){const j=Y.data,ht=j.stride,_t=Y.offset;if(j.isInstancedInterleavedBuffer){for(let It=0;It<F.locationSize;It++)p(F.location+It,j.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let It=0;It<F.locationSize;It++)g(F.location+It);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let It=0;It<F.locationSize;It++)M(F.location+It,st/F.locationSize,k,P,ht*J,(_t+st/F.locationSize*It)*J,at)}else{if(Y.isInstancedBufferAttribute){for(let j=0;j<F.locationSize;j++)p(F.location+j,Y.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let j=0;j<F.locationSize;j++)g(F.location+j);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let j=0;j<F.locationSize;j++)M(F.location+j,st/F.locationSize,k,P,st*J,st/F.locationSize*j*J,at)}}else if(N!==void 0){const P=N[U];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(F.location,P);break;case 3:r.vertexAttrib3fv(F.location,P);break;case 4:r.vertexAttrib4fv(F.location,P);break;default:r.vertexAttrib1fv(F.location,P)}}}}y()}function C(){A();for(const x in n){const L=n[x];for(const I in L){const B=L[I];for(const V in B)u(B[V].object),delete B[V];delete L[I]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const I in L){const B=L[I];for(const V in B)u(B[V].object),delete B[V];delete L[I]}delete n[x.id]}function E(x){for(const L in n){const I=n[L];if(I[x.id]===void 0)continue;const B=I[x.id];for(const V in B)u(B[V].object),delete B[V];delete I[x.id]}}function A(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function MM(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*f[_];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function SM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==mi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Zi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wi&&!A)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function bM(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Nr,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const y=s?0:n,M=y*4;let v=p.clippingState||null;l.value=v,v=u(m,f,M,d);for(let C=0;C!==M;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function EM(r){let t=new WeakMap;function e(o,a){return a===bu?o.mapping=no:a===Eu&&(o.mapping=io),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bu||a===Eu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nv(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class qm extends Wm{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ns=4,ad=[.125,.215,.35,.446,.526,.582],kr=20,Dc=new qm,ld=new Jt;let Ic=null,Uc=0,Nc=0,Oc=!1;const Or=(1+Math.sqrt(5))/2,bs=1/Or,cd=[new H(-Or,bs,0),new H(Or,bs,0),new H(-bs,0,Or),new H(bs,0,Or),new H(0,Or,-bs),new H(0,Or,bs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ic=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ic,Uc,Nc),this._renderer.xr.enabled=Oc,t.scissorTest=!1,Xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===no||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ic=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ma,format:mi,colorSpace:co,depthBuffer:!1},i=ud(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TM(s)),this._blurMaterial=wM(s,t,e)}return i}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,Dc)}_sceneToCubeUV(t,e,n,i){const a=new kn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ld),u.toneMapping=gr,u.autoClear=!1;const d=new oo({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),m=new ae(new Tr,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(ld),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Xa(i,y*M,p>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===no||t.mapping===io;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Xa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Dc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cd[(i-s-1)%cd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ae(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*kr-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):kr;g>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${kr}`);const p=[];let y=0;for(let E=0;E<kr;++E){const A=E/_,S=Math.exp(-A*A/2);p.push(S),E===0?y+=S:E<g&&(y+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const v=this._sizeLods[i],C=3*v*(i>M-Ns?i-M+Ns:0),w=4*(this._cubeSize-v);Xa(e,C,w,3*v,2*v),l.setRenderTarget(e),l.render(h,Dc)}}function TM(r){const t=[],e=[],n=[];let i=r;const s=r-Ns+1+ad.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ns?l=ad[o-r+Ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*d),M=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,A=w>2?0:-1,S=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];y.set(S,_*m*w),M.set(f,g*m*w);const x=[w,w,w,w,w,w];v.set(x,p*m*w)}const C=new oi;C.setAttribute("position",new gi(y,_)),C.setAttribute("uv",new gi(M,g)),C.setAttribute("faceIndex",new gi(v,p)),t.push(C),i>Ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ud(r,t,e){const n=new Qr(r,t,e);return n.texture.mapping=Zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function wM(r,t,e){const n=new Float32Array(kr),i=new H(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yh(),fragmentShader:`

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
	`}function AM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bu||l===Eu,u=l===no||l===io;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ju(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new ju(r)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function CM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Io("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function RM(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)t.update(f[m],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let M=0,v=y.length;M<v;M+=3){const C=y[M+0],w=y[M+1],E=y[M+2];f.push(C,w,w,E,E,C)}}else if(m!==void 0){const y=m.array;_=m.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const C=M+0,w=M+1,E=M+2;f.push(C,w,w,E,E,C)}}else return;const g=new(Om(f)?Vm:Hm)(f,1);g.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function PM(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),e.update(d,n,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function h(f,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*_[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function LM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function DM(r,t,e){const n=new WeakMap,i=new ye;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let C=a.attributes.position.count*v,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const E=new Float32Array(C*w*4*h),A=new zm(E,C,w,h);A.type=wi,A.needsUpdate=!0;const S=v*4;for(let L=0;L<h;L++){const I=p[L],B=y[L],V=M[L],z=C*w*4*L;for(let N=0;N<I.count;N++){const U=N*S;m===!0&&(i.fromBufferAttribute(I,N),E[z+U+0]=i.x,E[z+U+1]=i.y,E[z+U+2]=i.z,E[z+U+3]=0),_===!0&&(i.fromBufferAttribute(B,N),E[z+U+4]=i.x,E[z+U+5]=i.y,E[z+U+6]=i.z,E[z+U+7]=0),g===!0&&(i.fromBufferAttribute(V,N),E[z+U+8]=i.x,E[z+U+9]=i.y,E[z+U+10]=i.z,E[z+U+11]=V.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new Et(C,w)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function IM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class $m extends sn{constructor(t,e,n,i,s,o,a,l,c,u=Ws){if(u!==Ws&&u!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ws&&(n=jr),n===void 0&&u===so&&(n=ro),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zm=new sn,dd=new $m(1,1),Km=new zm,Jm=new vv,jm=new Xm,pd=[],md=[],gd=new Float32Array(16),_d=new Float32Array(9),vd=new Float32Array(4);function ho(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=pd[i];if(s===void 0&&(s=new Float32Array(i),pd[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Jl(r,t){let e=md[t];e===void 0&&(e=new Int32Array(t),md[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function UM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function NM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2fv(this.addr,t),Ke(e,t)}}function OM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;r.uniform3fv(this.addr,t),Ke(e,t)}}function FM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4fv(this.addr,t),Ke(e,t)}}function zM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;vd.set(n),r.uniformMatrix2fv(this.addr,!1,vd),Ke(e,n)}}function BM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;_d.set(n),r.uniformMatrix3fv(this.addr,!1,_d),Ke(e,n)}}function kM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;gd.set(n),r.uniformMatrix4fv(this.addr,!1,gd),Ke(e,n)}}function HM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function VM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2iv(this.addr,t),Ke(e,t)}}function GM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3iv(this.addr,t),Ke(e,t)}}function WM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4iv(this.addr,t),Ke(e,t)}}function XM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function YM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2uiv(this.addr,t),Ke(e,t)}}function qM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3uiv(this.addr,t),Ke(e,t)}}function $M(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4uiv(this.addr,t),Ke(e,t)}}function ZM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(dd.compareFunction=Nm,s=dd):s=Zm,e.setTexture2D(t||s,i)}function KM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Jm,i)}function JM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||jm,i)}function jM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Km,i)}function QM(r){switch(r){case 5126:return UM;case 35664:return NM;case 35665:return OM;case 35666:return FM;case 35674:return zM;case 35675:return BM;case 35676:return kM;case 5124:case 35670:return HM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return YM;case 36295:return qM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return jM}}function tS(r,t){r.uniform1fv(this.addr,t)}function eS(r,t){const e=ho(t,this.size,2);r.uniform2fv(this.addr,e)}function nS(r,t){const e=ho(t,this.size,3);r.uniform3fv(this.addr,e)}function iS(r,t){const e=ho(t,this.size,4);r.uniform4fv(this.addr,e)}function rS(r,t){const e=ho(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function sS(r,t){const e=ho(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function oS(r,t){const e=ho(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function aS(r,t){r.uniform1iv(this.addr,t)}function lS(r,t){r.uniform2iv(this.addr,t)}function cS(r,t){r.uniform3iv(this.addr,t)}function uS(r,t){r.uniform4iv(this.addr,t)}function hS(r,t){r.uniform1uiv(this.addr,t)}function fS(r,t){r.uniform2uiv(this.addr,t)}function dS(r,t){r.uniform3uiv(this.addr,t)}function pS(r,t){r.uniform4uiv(this.addr,t)}function mS(r,t,e){const n=this.cache,i=t.length,s=Jl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Zm,s[o])}function gS(r,t,e){const n=this.cache,i=t.length,s=Jl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Jm,s[o])}function _S(r,t,e){const n=this.cache,i=t.length,s=Jl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||jm,s[o])}function vS(r,t,e){const n=this.cache,i=t.length,s=Jl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Km,s[o])}function xS(r){switch(r){case 5126:return tS;case 35664:return eS;case 35665:return nS;case 35666:return iS;case 35674:return rS;case 35675:return sS;case 35676:return oS;case 5124:case 35670:return aS;case 35667:case 35671:return lS;case 35668:case 35672:return cS;case 35669:case 35673:return uS;case 5125:return hS;case 36294:return fS;case 36295:return dS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return vS}}class yS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=QM(e.type)}}class MS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xS(e.type)}}class SS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function xd(r,t){r.seq.push(t),r.map[t.id]=t}function bS(r,t,e){const n=r.name,i=n.length;for(Fc.lastIndex=0;;){const s=Fc.exec(n),o=Fc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){xd(e,c===void 0?new yS(a,r,t):new MS(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new SS(a),xd(e,h)),e=h}}}class yl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);bS(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function yd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const ES=37297;let TS=0;function wS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Md=new ee;function AS(r){ue._getMatrix(Md,ue.workingColorSpace,r);const t=`mat3( ${Md.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(r)){case Kl:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Sd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+wS(r.getShaderSource(t),o)}else return i}function CS(r,t){const e=AS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function RS(r,t){let e;switch(t){case L0:e="Linear";break;case D0:e="Reinhard";break;case I0:e="Cineon";break;case bm:e="ACESFilmic";break;case N0:e="AgX";break;case O0:e="Neutral";break;case U0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ya=new H;function PS(){ue.getLuminanceCoefficients(Ya);const r=Ya.x.toFixed(4),t=Ya.y.toFixed(4),e=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function DS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function IS(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Uo(r){return r!==""}function bd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ed(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const US=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(r){return r.replace(US,OS)}const NS=new Map;function OS(r,t){let e=ne[t];if(e===void 0){const n=NS.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qu(e)}const FS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(r){return r.replace(FS,zS)}function zS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function wd(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function BS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===u0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function kS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case no:case io:t="ENVMAP_TYPE_CUBE";break;case Zl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function HS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case io:t="ENVMAP_MODE_REFRACTION";break}return t}function VS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sm:t="ENVMAP_BLENDING_MULTIPLY";break;case R0:t="ENVMAP_BLENDING_MIX";break;case P0:t="ENVMAP_BLENDING_ADD";break}return t}function GS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function WS(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=BS(e),c=kS(e),u=HS(e),h=VS(e),f=GS(e),d=LS(e),m=DS(s),_=i.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Uo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Uo).join(`
`),p.length>0&&(p+=`
`)):(g=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),p=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gr?"#define TONE_MAPPING":"",e.toneMapping!==gr?ne.tonemapping_pars_fragment:"",e.toneMapping!==gr?RS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,CS("linearToOutputTexel",e.outputColorSpace),PS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Uo).join(`
`)),o=Qu(o),o=bd(o,e),o=Ed(o,e),a=Qu(a),a=bd(a,e),a=Ed(a,e),o=Td(o),a=Td(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+g+o,v=y+p+a,C=yd(i,i.VERTEX_SHADER,M),w=yd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,C),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(L){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(C).trim(),V=i.getShaderInfoLog(w).trim();let z=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,w);else{const U=Sd(i,C,"vertex"),F=Sd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+U+`
`+F)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||V==="")&&(N=!1);N&&(L.diagnostics={runnable:z,programLog:I,vertexShader:{log:B,prefix:g},fragmentShader:{log:V,prefix:p}})}i.deleteShader(C),i.deleteShader(w),A=new yl(i,_),S=IS(i,_)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,ES)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=TS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let XS=0;class YS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qS(t),e.set(t,n)),n}}class qS{constructor(t){this.id=XS++,this.code=t,this.usedTimes=0}}function $S(r,t,e,n,i,s,o){const a=new Bm,l=new YS,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,x,L,I,B){const V=I.fog,z=B.geometry,N=S.isMeshStandardMaterial?I.environment:null,U=(S.isMeshStandardMaterial?e:t).get(S.envMap||N),F=U&&U.mapping===Zl?U.image.height:null,Y=m[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const P=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=P!==void 0?P.length:0;let dt=0;z.morphAttributes.position!==void 0&&(dt=1),z.morphAttributes.normal!==void 0&&(dt=2),z.morphAttributes.color!==void 0&&(dt=3);let Lt,k,J,at;if(Y){const Rt=Si[Y];Lt=Rt.vertexShader,k=Rt.fragmentShader}else Lt=S.vertexShader,k=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),at=l.getFragmentShaderID(S);const j=r.getRenderTarget(),ht=r.state.buffers.depth.getReversed(),_t=B.isInstancedMesh===!0,It=B.isBatchedMesh===!0,Gt=!!S.map,nt=!!S.matcap,it=!!U,D=!!S.aoMap,Ct=!!S.lightMap,lt=!!S.bumpMap,G=!!S.normalMap,ut=!!S.displacementMap,Bt=!!S.emissiveMap,wt=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,q=S.clearcoat>0,tt=S.dispersion>0,rt=S.iridescence>0,et=S.sheen>0,vt=S.transmission>0,mt=b&&!!S.anisotropyMap,Mt=q&&!!S.clearcoatMap,$t=q&&!!S.clearcoatNormalMap,ct=q&&!!S.clearcoatRoughnessMap,gt=rt&&!!S.iridescenceMap,Vt=rt&&!!S.iridescenceThicknessMap,Ht=et&&!!S.sheenColorMap,Pt=et&&!!S.sheenRoughnessMap,Qt=!!S.specularMap,Wt=!!S.specularColorMap,ce=!!S.specularIntensityMap,O=vt&&!!S.transmissionMap,yt=vt&&!!S.thicknessMap,K=!!S.gradientMap,ot=!!S.alphaMap,xt=S.alphaTest>0,St=!!S.alphaHash,Xt=!!S.extensions;let he=gr;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(he=r.toneMapping);const Ne={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:Lt,fragmentShader:k,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:It,batchingColor:It&&B._colorsTexture!==null,instancing:_t,instancingColor:_t&&B.instanceColor!==null,instancingMorph:_t&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:co,alphaToCoverage:!!S.alphaToCoverage,map:Gt,matcap:nt,envMap:it,envMapMode:it&&U.mapping,envMapCubeUVHeight:F,aoMap:D,lightMap:Ct,bumpMap:lt,normalMap:G,displacementMap:f&&ut,emissiveMap:Bt,normalMapObjectSpace:G&&S.normalMapType===k0,normalMapTangentSpace:G&&S.normalMapType===Um,metalnessMap:wt,roughnessMap:R,anisotropy:b,anisotropyMap:mt,clearcoat:q,clearcoatMap:Mt,clearcoatNormalMap:$t,clearcoatRoughnessMap:ct,dispersion:tt,iridescence:rt,iridescenceMap:gt,iridescenceThicknessMap:Vt,sheen:et,sheenColorMap:Ht,sheenRoughnessMap:Pt,specularMap:Qt,specularColorMap:Wt,specularIntensityMap:ce,transmission:vt,transmissionMap:O,thicknessMap:yt,gradientMap:K,opaque:S.transparent===!1&&S.blending===Gs&&S.alphaToCoverage===!1,alphaMap:ot,alphaTest:xt,alphaHash:St,combine:S.combine,mapUv:Gt&&_(S.map.channel),aoMapUv:D&&_(S.aoMap.channel),lightMapUv:Ct&&_(S.lightMap.channel),bumpMapUv:lt&&_(S.bumpMap.channel),normalMapUv:G&&_(S.normalMap.channel),displacementMapUv:ut&&_(S.displacementMap.channel),emissiveMapUv:Bt&&_(S.emissiveMap.channel),metalnessMapUv:wt&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:mt&&_(S.anisotropyMap.channel),clearcoatMapUv:Mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(S.sheenRoughnessMap.channel),specularMapUv:Qt&&_(S.specularMap.channel),specularColorMapUv:Wt&&_(S.specularColorMap.channel),specularIntensityMapUv:ce&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:yt&&_(S.thicknessMap.channel),alphaMapUv:ot&&_(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(G||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Gt||ot),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ht,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:dt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:he,decodeVideoTexture:Gt&&S.map.isVideoTexture===!0&&ue.getTransfer(S.map.colorSpace)===xe,decodeVideoTextureEmissive:Bt&&S.emissiveMap.isVideoTexture===!0&&ue.getTransfer(S.emissiveMap.colorSpace)===xe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===di,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Xt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&S.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)x.push(L),x.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(x,S),M(x,S),x.push(r.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function y(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const x=m[S.type];let L;if(x){const I=Si[x];L=Lv.clone(I.uniforms)}else L=S.uniforms;return L}function C(S,x){let L;for(let I=0,B=u.length;I<B;I++){const V=u[I];if(V.cacheKey===x){L=V,++L.usedTimes;break}}return L===void 0&&(L=new WS(r,x,S,s),u.push(L)),L}function w(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:A}}function ZS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function KS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ad(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Cd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,m,_,g){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||KS),n.length>1&&n.sort(f||Ad),i.length>1&&i.sort(f||Ad)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function JS(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Cd,r.set(n,[o])):i>=s.length?(o=new Cd,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function jS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Jt};break;case"SpotLight":e={position:new H,direction:new H,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=e,e}}}function QS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let t1=0;function e1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function n1(r){const t=new jS,e=QS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new Te,o=new Te;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,y=0,M=0,v=0,C=0,w=0,E=0;c.sort(e1);for(let S=0,x=c.length;S<x;S++){const L=c[S],I=L.color,B=L.intensity,V=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=I.r*B,h+=I.g*B,f+=I.b*B;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],B);E++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const U=L.shadow,F=e.get(L);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=N,d++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(I).multiplyScalar(B),N.distance=V,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[_]=N;const U=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,U.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=U.matrix,L.castShadow){const F=e.get(L);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=z,v++}_++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(I).multiplyScalar(B),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=N,g++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const U=L.shadow,F=e.get(L);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=L.shadow.matrix,M++}n.point[m]=N,m++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(B),N.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=N,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==m||A.spotLength!==_||A.rectAreaLength!==g||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==v||A.numSpotMaps!==C||A.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,A.directionalLength=d,A.pointLength=m,A.spotLength=_,A.rectAreaLength=g,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=v,A.numSpotMaps=C,A.numLightProbes=E,n.version=t1++)}function l(c,u){let h=0,f=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Rd(r){const t=new n1(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function i1(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Rd(r),t.set(i,[a])):s>=o.length?(a=new Rd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class r1 extends Ea{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class s1 extends Ea{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const o1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a1=`uniform sampler2D shadow_pass;
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
}`;function l1(r,t,e){let n=new Xh;const i=new Et,s=new Et,o=new ye,a=new r1({depthPacking:B0}),l=new s1,c={},u=e.maxTextureSize,h={[Mr]:En,[En]:Mr,[di]:di},f=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:o1,fragmentShader:a1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new oi;m.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mm;let p=this.type;this.render=function(w,E,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),x=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),I=r.state;I.setBlending(mr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==Bi&&this.type===Bi,V=p===Bi&&this.type!==Bi;for(let z=0,N=w.length;z<N;z++){const U=w[z],F=U.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const Y=F.getFrameExtents();if(i.multiply(Y),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Y.x),i.x=s.x*Y.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Y.y),i.y=s.y*Y.y,F.mapSize.y=s.y)),F.map===null||B===!0||V===!0){const st=this.type!==Bi?{minFilter:qn,magFilter:qn}:{};F.map!==null&&F.map.dispose(),F.map=new Qr(i.x,i.y,st),F.map.texture.name=U.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const P=F.getViewportCount();for(let st=0;st<P;st++){const dt=F.getViewport(st);o.set(s.x*dt.x,s.y*dt.y,s.x*dt.z,s.y*dt.w),I.viewport(o),F.updateMatrices(U,st),n=F.getFrustum(),v(E,A,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===Bi&&y(F,A),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(S,x,L)};function y(w,E){const A=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qr(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,A,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,A,d,_,null)}function M(w,E,A,S){let x=null;const L=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)x=L;else if(x=A.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=x.uuid,B=E.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let z=V[B];z===void 0&&(z=x.clone(),V[B]=z,E.addEventListener("dispose",C)),x=z}if(x.visible=E.visible,x.wireframe=E.wireframe,S===Bi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=r.properties.get(x);I.light=A}return x}function v(w,E,A,S,x){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Bi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const B=t.update(w),V=w.material;if(Array.isArray(V)){const z=B.groups;for(let N=0,U=z.length;N<U;N++){const F=z[N],Y=V[F.materialIndex];if(Y&&Y.visible){const P=M(w,Y,S,x);w.onBeforeShadow(r,w,E,A,B,P,F),r.renderBufferDirect(A,null,B,P,w,F),w.onAfterShadow(r,w,E,A,B,P,F)}}}else if(V.visible){const z=M(w,V,S,x);w.onBeforeShadow(r,w,E,A,B,z,null),r.renderBufferDirect(A,null,B,z,w,null),w.onAfterShadow(r,w,E,A,B,z,null)}}const I=w.children;for(let B=0,V=I.length;B<V;B++)v(I[B],E,A,S,x)}function C(w){w.target.removeEventListener("dispose",C);for(const A in c){const S=c[A],x=w.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const c1={[gu]:_u,[vu]:Mu,[xu]:Su,[eo]:yu,[_u]:gu,[Mu]:vu,[Su]:xu,[yu]:eo};function u1(r,t){function e(){let O=!1;const yt=new ye;let K=null;const ot=new ye(0,0,0,0);return{setMask:function(xt){K!==xt&&!O&&(r.colorMask(xt,xt,xt,xt),K=xt)},setLocked:function(xt){O=xt},setClear:function(xt,St,Xt,he,Ne){Ne===!0&&(xt*=he,St*=he,Xt*=he),yt.set(xt,St,Xt,he),ot.equals(yt)===!1&&(r.clearColor(xt,St,Xt,he),ot.copy(yt))},reset:function(){O=!1,K=null,ot.set(-1,0,0,0)}}}function n(){let O=!1,yt=!1,K=null,ot=null,xt=null;return{setReversed:function(St){if(yt!==St){const Xt=t.get("EXT_clip_control");yt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const he=xt;xt=null,this.setClear(he)}yt=St},getReversed:function(){return yt},setTest:function(St){St?j(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(St){K!==St&&!O&&(r.depthMask(St),K=St)},setFunc:function(St){if(yt&&(St=c1[St]),ot!==St){switch(St){case gu:r.depthFunc(r.NEVER);break;case _u:r.depthFunc(r.ALWAYS);break;case vu:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case xu:r.depthFunc(r.EQUAL);break;case yu:r.depthFunc(r.GEQUAL);break;case Mu:r.depthFunc(r.GREATER);break;case Su:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ot=St}},setLocked:function(St){O=St},setClear:function(St){xt!==St&&(yt&&(St=1-St),r.clearDepth(St),xt=St)},reset:function(){O=!1,K=null,ot=null,xt=null,yt=!1}}}function i(){let O=!1,yt=null,K=null,ot=null,xt=null,St=null,Xt=null,he=null,Ne=null;return{setTest:function(Rt){O||(Rt?j(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(Rt){yt!==Rt&&!O&&(r.stencilMask(Rt),yt=Rt)},setFunc:function(Rt,Ot,te){(K!==Rt||ot!==Ot||xt!==te)&&(r.stencilFunc(Rt,Ot,te),K=Rt,ot=Ot,xt=te)},setOp:function(Rt,Ot,te){(St!==Rt||Xt!==Ot||he!==te)&&(r.stencilOp(Rt,Ot,te),St=Rt,Xt=Ot,he=te)},setLocked:function(Rt){O=Rt},setClear:function(Rt){Ne!==Rt&&(r.clearStencil(Rt),Ne=Rt)},reset:function(){O=!1,yt=null,K=null,ot=null,xt=null,St=null,Xt=null,he=null,Ne=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,y=null,M=null,v=null,C=null,w=null,E=new Jt(0,0,0),A=0,S=!1,x=null,L=null,I=null,B=null,V=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=U>=1):F.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=U>=2);let Y=null,P={};const st=r.getParameter(r.SCISSOR_BOX),dt=r.getParameter(r.VIEWPORT),Lt=new ye().fromArray(st),k=new ye().fromArray(dt);function J(O,yt,K,ot){const xt=new Uint8Array(4),St=r.createTexture();r.bindTexture(O,St),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<K;Xt++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(yt,0,r.RGBA,1,1,ot,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(yt+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return St}const at={};at[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(eo),lt(!1),G(Df),j(r.CULL_FACE),D(mr);function j(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function ht(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function _t(O,yt){return h[O]!==yt?(r.bindFramebuffer(O,yt),h[O]=yt,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=yt),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=yt),!0):!1}function It(O,yt){let K=d,ot=!1;if(O){K=f.get(yt),K===void 0&&(K=[],f.set(yt,K));const xt=O.textures;if(K.length!==xt.length||K[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Xt=xt.length;St<Xt;St++)K[St]=r.COLOR_ATTACHMENT0+St;K.length=xt.length,ot=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,ot=!0);ot&&r.drawBuffers(K)}function Gt(O){return m!==O?(r.useProgram(O),m=O,!0):!1}const nt={[Br]:r.FUNC_ADD,[f0]:r.FUNC_SUBTRACT,[d0]:r.FUNC_REVERSE_SUBTRACT};nt[p0]=r.MIN,nt[m0]=r.MAX;const it={[g0]:r.ZERO,[_0]:r.ONE,[v0]:r.SRC_COLOR,[pu]:r.SRC_ALPHA,[E0]:r.SRC_ALPHA_SATURATE,[S0]:r.DST_COLOR,[y0]:r.DST_ALPHA,[x0]:r.ONE_MINUS_SRC_COLOR,[mu]:r.ONE_MINUS_SRC_ALPHA,[b0]:r.ONE_MINUS_DST_COLOR,[M0]:r.ONE_MINUS_DST_ALPHA,[T0]:r.CONSTANT_COLOR,[w0]:r.ONE_MINUS_CONSTANT_COLOR,[A0]:r.CONSTANT_ALPHA,[C0]:r.ONE_MINUS_CONSTANT_ALPHA};function D(O,yt,K,ot,xt,St,Xt,he,Ne,Rt){if(O===mr){_===!0&&(ht(r.BLEND),_=!1);return}if(_===!1&&(j(r.BLEND),_=!0),O!==h0){if(O!==g||Rt!==S){if((p!==Br||v!==Br)&&(r.blendEquation(r.FUNC_ADD),p=Br,v=Br),Rt)switch(O){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case If:r.blendFunc(r.ONE,r.ONE);break;case Uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case If:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,M=null,C=null,w=null,E.set(0,0,0),A=0,g=O,S=Rt}return}xt=xt||yt,St=St||K,Xt=Xt||ot,(yt!==p||xt!==v)&&(r.blendEquationSeparate(nt[yt],nt[xt]),p=yt,v=xt),(K!==y||ot!==M||St!==C||Xt!==w)&&(r.blendFuncSeparate(it[K],it[ot],it[St],it[Xt]),y=K,M=ot,C=St,w=Xt),(he.equals(E)===!1||Ne!==A)&&(r.blendColor(he.r,he.g,he.b,Ne),E.copy(he),A=Ne),g=O,S=!1}function Ct(O,yt){O.side===di?ht(r.CULL_FACE):j(r.CULL_FACE);let K=O.side===En;yt&&(K=!K),lt(K),O.blending===Gs&&O.transparent===!1?D(mr):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const ot=O.stencilWrite;a.setTest(ot),ot&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Bt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(O){x!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),x=O)}function G(O){O!==l0?(j(r.CULL_FACE),O!==L&&(O===Df?r.cullFace(r.BACK):O===c0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),L=O}function ut(O){O!==I&&(N&&r.lineWidth(O),I=O)}function Bt(O,yt,K){O?(j(r.POLYGON_OFFSET_FILL),(B!==yt||V!==K)&&(r.polygonOffset(yt,K),B=yt,V=K)):ht(r.POLYGON_OFFSET_FILL)}function wt(O){O?j(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function R(O){O===void 0&&(O=r.TEXTURE0+z-1),Y!==O&&(r.activeTexture(O),Y=O)}function b(O,yt,K){K===void 0&&(Y===null?K=r.TEXTURE0+z-1:K=Y);let ot=P[K];ot===void 0&&(ot={type:void 0,texture:void 0},P[K]=ot),(ot.type!==O||ot.texture!==yt)&&(Y!==K&&(r.activeTexture(K),Y=K),r.bindTexture(O,yt||at[O]),ot.type=O,ot.texture=yt)}function q(){const O=P[Y];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function tt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $t(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(O){Lt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Lt.copy(O))}function Pt(O){k.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),k.copy(O))}function Qt(O,yt){let K=c.get(yt);K===void 0&&(K=new WeakMap,c.set(yt,K));let ot=K.get(O);ot===void 0&&(ot=r.getUniformBlockIndex(yt,O.name),K.set(O,ot))}function Wt(O,yt){const ot=c.get(yt).get(O);l.get(yt)!==ot&&(r.uniformBlockBinding(yt,ot,O.__bindingPointIndex),l.set(yt,ot))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Y=null,P={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,y=null,M=null,v=null,C=null,w=null,E=new Jt(0,0,0),A=0,S=!1,x=null,L=null,I=null,B=null,V=null,Lt.set(0,0,r.canvas.width,r.canvas.height),k.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:ht,bindFramebuffer:_t,drawBuffers:It,useProgram:Gt,setBlending:D,setMaterial:Ct,setFlipSided:lt,setCullFace:G,setLineWidth:ut,setPolygonOffset:Bt,setScissorTest:wt,activeTexture:R,bindTexture:b,unbindTexture:q,compressedTexImage2D:tt,compressedTexImage3D:rt,texImage2D:gt,texImage3D:Vt,updateUBOMapping:Qt,uniformBlockBinding:Wt,texStorage2D:$t,texStorage3D:ct,texSubImage2D:et,texSubImage3D:vt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Mt,scissor:Ht,viewport:Pt,reset:ce}}function Pd(r,t,e,n){const i=h1(n);switch(e){case Cm:return r*t;case Pm:return r*t;case Lm:return r*t*2;case kh:return r*t/i.components*i.byteLength;case Hh:return r*t/i.components*i.byteLength;case Dm:return r*t*2/i.components*i.byteLength;case Vh:return r*t*2/i.components*i.byteLength;case Rm:return r*t*3/i.components*i.byteLength;case mi:return r*t*4/i.components*i.byteLength;case Gh:return r*t*4/i.components*i.byteLength;case ml:case gl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _l:case vl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Au:case Ru:return Math.max(r,16)*Math.max(t,8)/4;case wu:case Cu:return Math.max(r,8)*Math.max(t,8)/2;case Pu:case Lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Uu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ou:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case zu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Bu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ku:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Hu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Vu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Wu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Yu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case xl:case qu:case $u:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Im:case Zu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ku:case Ju:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function h1(r){switch(r){case Zi:case Tm:return{byteLength:1,components:1};case ha:case wm:case Ma:return{byteLength:2,components:1};case zh:case Bh:return{byteLength:2,components:4};case jr:case Fh:case wi:return{byteLength:4,components:1};case Am:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function f1(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return d?new OffscreenCanvas(R,b):da("canvas")}function _(R,b,q){let tt=1;const rt=wt(R);if((rt.width>q||rt.height>q)&&(tt=q/Math.max(rt.width,rt.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=Math.floor(tt*rt.width),vt=Math.floor(tt*rt.height);h===void 0&&(h=m(et,vt));const mt=b?m(et,vt):h;return mt.width=et,mt.height=vt,mt.getContext("2d").drawImage(R,0,0,et,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+et+"x"+vt+")."),mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,b,q,tt,rt=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=b;if(b===r.RED&&(q===r.FLOAT&&(et=r.R32F),q===r.HALF_FLOAT&&(et=r.R16F),q===r.UNSIGNED_BYTE&&(et=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(et=r.R8UI),q===r.UNSIGNED_SHORT&&(et=r.R16UI),q===r.UNSIGNED_INT&&(et=r.R32UI),q===r.BYTE&&(et=r.R8I),q===r.SHORT&&(et=r.R16I),q===r.INT&&(et=r.R32I)),b===r.RG&&(q===r.FLOAT&&(et=r.RG32F),q===r.HALF_FLOAT&&(et=r.RG16F),q===r.UNSIGNED_BYTE&&(et=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(et=r.RG8UI),q===r.UNSIGNED_SHORT&&(et=r.RG16UI),q===r.UNSIGNED_INT&&(et=r.RG32UI),q===r.BYTE&&(et=r.RG8I),q===r.SHORT&&(et=r.RG16I),q===r.INT&&(et=r.RG32I)),b===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(et=r.RGB8UI),q===r.UNSIGNED_SHORT&&(et=r.RGB16UI),q===r.UNSIGNED_INT&&(et=r.RGB32UI),q===r.BYTE&&(et=r.RGB8I),q===r.SHORT&&(et=r.RGB16I),q===r.INT&&(et=r.RGB32I)),b===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(et=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(et=r.RGBA16UI),q===r.UNSIGNED_INT&&(et=r.RGBA32UI),q===r.BYTE&&(et=r.RGBA8I),q===r.SHORT&&(et=r.RGBA16I),q===r.INT&&(et=r.RGBA32I)),b===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),b===r.RGBA){const vt=rt?Kl:ue.getTransfer(tt);q===r.FLOAT&&(et=r.RGBA32F),q===r.HALF_FLOAT&&(et=r.RGBA16F),q===r.UNSIGNED_BYTE&&(et=vt===xe?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(R,b){let q;return R?b===null||b===jr||b===ro?q=r.DEPTH24_STENCIL8:b===wi?q=r.DEPTH32F_STENCIL8:b===ha&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===jr||b===ro?q=r.DEPTH_COMPONENT24:b===wi?q=r.DEPTH_COMPONENT32F:b===ha&&(q=r.DEPTH_COMPONENT16),q}function C(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==qn&&R.minFilter!==Ti?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){const b=R.target;b.removeEventListener("dispose",w),A(b),b.isVideoTexture&&u.delete(b)}function E(R){const b=R.target;b.removeEventListener("dispose",E),x(b)}function A(R){const b=n.get(R);if(b.__webglInit===void 0)return;const q=R.source,tt=f.get(q);if(tt){const rt=tt[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&S(R),Object.keys(tt).length===0&&f.delete(q)}n.remove(R)}function S(R){const b=n.get(R);r.deleteTexture(b.__webglTexture);const q=R.source,tt=f.get(q);delete tt[b.__cacheKey],o.memory.textures--}function x(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let rt=0;rt<b.__webglFramebuffer[tt].length;rt++)r.deleteFramebuffer(b.__webglFramebuffer[tt][rt]);else r.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)r.deleteFramebuffer(b.__webglFramebuffer[tt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=R.textures;for(let tt=0,rt=q.length;tt<rt;tt++){const et=n.get(q[tt]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(q[tt])}n.remove(R)}let L=0;function I(){L=0}function B(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function V(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function z(R,b){const q=n.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(q,R,b);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function N(R,b){const q=n.get(R);if(R.version>0&&q.__version!==R.version){k(q,R,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function U(R,b){const q=n.get(R);if(R.version>0&&q.__version!==R.version){k(q,R,b);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function F(R,b){const q=n.get(R);if(R.version>0&&q.__version!==R.version){J(q,R,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const Y={[Fl]:r.REPEAT,[Vr]:r.CLAMP_TO_EDGE,[Tu]:r.MIRRORED_REPEAT},P={[qn]:r.NEAREST,[F0]:r.NEAREST_MIPMAP_NEAREST,[wa]:r.NEAREST_MIPMAP_LINEAR,[Ti]:r.LINEAR,[hc]:r.LINEAR_MIPMAP_NEAREST,[Gr]:r.LINEAR_MIPMAP_LINEAR},st={[H0]:r.NEVER,[q0]:r.ALWAYS,[V0]:r.LESS,[Nm]:r.LEQUAL,[G0]:r.EQUAL,[Y0]:r.GEQUAL,[W0]:r.GREATER,[X0]:r.NOTEQUAL};function dt(R,b){if(b.type===wi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ti||b.magFilter===hc||b.magFilter===wa||b.magFilter===Gr||b.minFilter===Ti||b.minFilter===hc||b.minFilter===wa||b.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Y[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Y[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Y[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,P[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,P[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,st[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qn||b.minFilter!==wa&&b.minFilter!==Gr||b.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Lt(R,b){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));const tt=b.source;let rt=f.get(tt);rt===void 0&&(rt={},f.set(tt,rt));const et=V(b);if(et!==R.__cacheKey){rt[et]===void 0&&(rt[et]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),rt[et].usedTimes++;const vt=rt[R.__cacheKey];vt!==void 0&&(rt[R.__cacheKey].usedTimes--,vt.usedTimes===0&&S(b)),R.__cacheKey=et,R.__webglTexture=rt[et].texture}return q}function k(R,b,q){let tt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=r.TEXTURE_3D);const rt=Lt(R,b),et=b.source;e.bindTexture(tt,R.__webglTexture,r.TEXTURE0+q);const vt=n.get(et);if(et.version!==vt.__version||rt===!0){e.activeTexture(r.TEXTURE0+q);const mt=ue.getPrimaries(ue.workingColorSpace),Mt=b.colorSpace===ar?null:ue.getPrimaries(b.colorSpace),$t=b.colorSpace===ar||mt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let ct=_(b.image,!1,i.maxTextureSize);ct=Bt(b,ct);const gt=s.convert(b.format,b.colorSpace),Vt=s.convert(b.type);let Ht=M(b.internalFormat,gt,Vt,b.colorSpace,b.isVideoTexture);dt(tt,b);let Pt;const Qt=b.mipmaps,Wt=b.isVideoTexture!==!0,ce=vt.__version===void 0||rt===!0,O=et.dataReady,yt=C(b,ct);if(b.isDepthTexture)Ht=v(b.format===so,b.type),ce&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,Ht,ct.width,ct.height):e.texImage2D(r.TEXTURE_2D,0,Ht,ct.width,ct.height,0,gt,Vt,null));else if(b.isDataTexture)if(Qt.length>0){Wt&&ce&&e.texStorage2D(r.TEXTURE_2D,yt,Ht,Qt[0].width,Qt[0].height);for(let K=0,ot=Qt.length;K<ot;K++)Pt=Qt[K],Wt?O&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Pt.width,Pt.height,gt,Vt,Pt.data):e.texImage2D(r.TEXTURE_2D,K,Ht,Pt.width,Pt.height,0,gt,Vt,Pt.data);b.generateMipmaps=!1}else Wt?(ce&&e.texStorage2D(r.TEXTURE_2D,yt,Ht,ct.width,ct.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct.width,ct.height,gt,Vt,ct.data)):e.texImage2D(r.TEXTURE_2D,0,Ht,ct.width,ct.height,0,gt,Vt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Wt&&ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Ht,Qt[0].width,Qt[0].height,ct.depth);for(let K=0,ot=Qt.length;K<ot;K++)if(Pt=Qt[K],b.format!==mi)if(gt!==null)if(Wt){if(O)if(b.layerUpdates.size>0){const xt=Pd(Pt.width,Pt.height,b.format,b.type);for(const St of b.layerUpdates){const Xt=Pt.data.subarray(St*xt/Pt.data.BYTES_PER_ELEMENT,(St+1)*xt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,St,Pt.width,Pt.height,1,gt,Xt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Pt.width,Pt.height,ct.depth,gt,Pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Ht,Pt.width,Pt.height,ct.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Pt.width,Pt.height,ct.depth,gt,Vt,Pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,Ht,Pt.width,Pt.height,ct.depth,0,gt,Vt,Pt.data)}else{Wt&&ce&&e.texStorage2D(r.TEXTURE_2D,yt,Ht,Qt[0].width,Qt[0].height);for(let K=0,ot=Qt.length;K<ot;K++)Pt=Qt[K],b.format!==mi?gt!==null?Wt?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,Pt.width,Pt.height,gt,Pt.data):e.compressedTexImage2D(r.TEXTURE_2D,K,Ht,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?O&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Pt.width,Pt.height,gt,Vt,Pt.data):e.texImage2D(r.TEXTURE_2D,K,Ht,Pt.width,Pt.height,0,gt,Vt,Pt.data)}else if(b.isDataArrayTexture)if(Wt){if(ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Ht,ct.width,ct.height,ct.depth),O)if(b.layerUpdates.size>0){const K=Pd(ct.width,ct.height,b.format,b.type);for(const ot of b.layerUpdates){const xt=ct.data.subarray(ot*K/ct.data.BYTES_PER_ELEMENT,(ot+1)*K/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ot,ct.width,ct.height,1,gt,Vt,xt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,gt,Vt,ct.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ht,ct.width,ct.height,ct.depth,0,gt,Vt,ct.data);else if(b.isData3DTexture)Wt?(ce&&e.texStorage3D(r.TEXTURE_3D,yt,Ht,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,gt,Vt,ct.data)):e.texImage3D(r.TEXTURE_3D,0,Ht,ct.width,ct.height,ct.depth,0,gt,Vt,ct.data);else if(b.isFramebufferTexture){if(ce)if(Wt)e.texStorage2D(r.TEXTURE_2D,yt,Ht,ct.width,ct.height);else{let K=ct.width,ot=ct.height;for(let xt=0;xt<yt;xt++)e.texImage2D(r.TEXTURE_2D,xt,Ht,K,ot,0,gt,Vt,null),K>>=1,ot>>=1}}else if(Qt.length>0){if(Wt&&ce){const K=wt(Qt[0]);e.texStorage2D(r.TEXTURE_2D,yt,Ht,K.width,K.height)}for(let K=0,ot=Qt.length;K<ot;K++)Pt=Qt[K],Wt?O&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,gt,Vt,Pt):e.texImage2D(r.TEXTURE_2D,K,Ht,gt,Vt,Pt);b.generateMipmaps=!1}else if(Wt){if(ce){const K=wt(ct);e.texStorage2D(r.TEXTURE_2D,yt,Ht,K.width,K.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Vt,ct)}else e.texImage2D(r.TEXTURE_2D,0,Ht,gt,Vt,ct);g(b)&&p(tt),vt.__version=et.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function J(R,b,q){if(b.image.length!==6)return;const tt=Lt(R,b),rt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+q);const et=n.get(rt);if(rt.version!==et.__version||tt===!0){e.activeTexture(r.TEXTURE0+q);const vt=ue.getPrimaries(ue.workingColorSpace),mt=b.colorSpace===ar?null:ue.getPrimaries(b.colorSpace),Mt=b.colorSpace===ar||vt===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const $t=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,gt=[];for(let ot=0;ot<6;ot++)!$t&&!ct?gt[ot]=_(b.image[ot],!0,i.maxCubemapSize):gt[ot]=ct?b.image[ot].image:b.image[ot],gt[ot]=Bt(b,gt[ot]);const Vt=gt[0],Ht=s.convert(b.format,b.colorSpace),Pt=s.convert(b.type),Qt=M(b.internalFormat,Ht,Pt,b.colorSpace),Wt=b.isVideoTexture!==!0,ce=et.__version===void 0||tt===!0,O=rt.dataReady;let yt=C(b,Vt);dt(r.TEXTURE_CUBE_MAP,b);let K;if($t){Wt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,Qt,Vt.width,Vt.height);for(let ot=0;ot<6;ot++){K=gt[ot].mipmaps;for(let xt=0;xt<K.length;xt++){const St=K[xt];b.format!==mi?Ht!==null?Wt?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,0,0,St.width,St.height,Ht,St.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,Qt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,0,0,St.width,St.height,Ht,Pt,St.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,Qt,St.width,St.height,0,Ht,Pt,St.data)}}}else{if(K=b.mipmaps,Wt&&ce){K.length>0&&yt++;const ot=wt(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,Qt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ct){Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,gt[ot].width,gt[ot].height,Ht,Pt,gt[ot].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Qt,gt[ot].width,gt[ot].height,0,Ht,Pt,gt[ot].data);for(let xt=0;xt<K.length;xt++){const Xt=K[xt].image[ot].image;Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,0,0,Xt.width,Xt.height,Ht,Pt,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,Qt,Xt.width,Xt.height,0,Ht,Pt,Xt.data)}}else{Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ht,Pt,gt[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Qt,Ht,Pt,gt[ot]);for(let xt=0;xt<K.length;xt++){const St=K[xt];Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,0,0,Ht,Pt,St.image[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,Qt,Ht,Pt,St.image[ot])}}}g(b)&&p(r.TEXTURE_CUBE_MAP),et.__version=rt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function at(R,b,q,tt,rt,et){const vt=s.convert(q.format,q.colorSpace),mt=s.convert(q.type),Mt=M(q.internalFormat,vt,mt,q.colorSpace),$t=n.get(b),ct=n.get(q);if(ct.__renderTarget=b,!$t.__hasExternalTextures){const gt=Math.max(1,b.width>>et),Vt=Math.max(1,b.height>>et);rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,et,Mt,gt,Vt,b.depth,0,vt,mt,null):e.texImage2D(rt,et,Mt,gt,Vt,0,vt,mt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),G(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,rt,ct.__webglTexture,0,lt(b)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,rt,ct.__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function j(R,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){const tt=b.depthTexture,rt=tt&&tt.isDepthTexture?tt.type:null,et=v(b.stencilBuffer,rt),vt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=lt(b);G(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,et,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,et,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,et,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,R)}else{const tt=b.textures;for(let rt=0;rt<tt.length;rt++){const et=tt[rt],vt=s.convert(et.format,et.colorSpace),mt=s.convert(et.type),Mt=M(et.internalFormat,vt,mt,et.colorSpace),$t=lt(b);q&&G(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,Mt,b.width,b.height):G(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t,Mt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Mt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(b.depthTexture);tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const rt=tt.__webglTexture,et=lt(b);if(b.depthTexture.format===Ws)G(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0);else if(b.depthTexture.format===so)G(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function _t(R){const b=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const tt=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),tt){const rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,tt.removeEventListener("dispose",rt)};tt.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=tt}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ht(b.__webglFramebuffer,R)}else if(q){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]===void 0)b.__webglDepthbuffer[tt]=r.createRenderbuffer(),j(b.__webglDepthbuffer[tt],R,!1);else{const rt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[tt];r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,et)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),j(b.__webglDepthbuffer,R,!1);else{const tt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,rt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(R,b,q){const tt=n.get(R);b!==void 0&&at(tt.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&_t(R)}function Gt(R){const b=R.texture,q=n.get(R),tt=n.get(b);R.addEventListener("dispose",E);const rt=R.textures,et=R.isWebGLCubeRenderTarget===!0,vt=rt.length>1;if(vt||(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=b.version,o.memory.textures++),et){q.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[mt]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)q.__webglFramebuffer[mt][Mt]=r.createFramebuffer()}else q.__webglFramebuffer[mt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let mt=0;mt<b.mipmaps.length;mt++)q.__webglFramebuffer[mt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(vt)for(let mt=0,Mt=rt.length;mt<Mt;mt++){const $t=n.get(rt[mt]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&G(R)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let mt=0;mt<rt.length;mt++){const Mt=rt[mt];q.__webglColorRenderbuffer[mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[mt]);const $t=s.convert(Mt.format,Mt.colorSpace),ct=s.convert(Mt.type),gt=M(Mt.internalFormat,$t,ct,Mt.colorSpace,R.isXRRenderTarget===!0),Vt=lt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,gt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,q.__webglColorRenderbuffer[mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),j(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),dt(r.TEXTURE_CUBE_MAP,b);for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)at(q.__webglFramebuffer[mt][Mt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Mt);else at(q.__webglFramebuffer[mt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(b)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let mt=0,Mt=rt.length;mt<Mt;mt++){const $t=rt[mt],ct=n.get($t);e.bindTexture(r.TEXTURE_2D,ct.__webglTexture),dt(r.TEXTURE_2D,$t),at(q.__webglFramebuffer,R,$t,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,0),g($t)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let mt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(mt,tt.__webglTexture),dt(mt,b),b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)at(q.__webglFramebuffer[Mt],R,b,r.COLOR_ATTACHMENT0,mt,Mt);else at(q.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,mt,0);g(b)&&p(mt),e.unbindTexture()}R.depthBuffer&&_t(R)}function nt(R){const b=R.textures;for(let q=0,tt=b.length;q<tt;q++){const rt=b[q];if(g(rt)){const et=y(R),vt=n.get(rt).__webglTexture;e.bindTexture(et,vt),p(et),e.unbindTexture()}}}const it=[],D=[];function Ct(R){if(R.samples>0){if(G(R)===!1){const b=R.textures,q=R.width,tt=R.height;let rt=r.COLOR_BUFFER_BIT;const et=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(R),mt=b.length>1;if(mt)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),mt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);const $t=n.get(b[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$t,0)}r.blitFramebuffer(0,0,q,tt,0,0,q,tt,rt,r.NEAREST),l===!0&&(it.length=0,D.length=0,it.push(r.COLOR_ATTACHMENT0+Mt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(it.push(et),D.push(et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),mt)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);const $t=n.get(b[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,$t,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function lt(R){return Math.min(i.maxSamples,R.samples)}function G(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function Bt(R,b){const q=R.colorSpace,tt=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==co&&q!==ar&&(ue.getTransfer(q)===xe?(tt!==mi||rt!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=F,this.rebindTextures=It,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=at,this.useMultisampledRTT=G}function d1(r,t){function e(n,i=ar){let s;const o=ue.getTransfer(i);if(n===Zi)return r.UNSIGNED_BYTE;if(n===zh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Bh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Am)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Tm)return r.BYTE;if(n===wm)return r.SHORT;if(n===ha)return r.UNSIGNED_SHORT;if(n===Fh)return r.INT;if(n===jr)return r.UNSIGNED_INT;if(n===wi)return r.FLOAT;if(n===Ma)return r.HALF_FLOAT;if(n===Cm)return r.ALPHA;if(n===Rm)return r.RGB;if(n===mi)return r.RGBA;if(n===Pm)return r.LUMINANCE;if(n===Lm)return r.LUMINANCE_ALPHA;if(n===Ws)return r.DEPTH_COMPONENT;if(n===so)return r.DEPTH_STENCIL;if(n===kh)return r.RED;if(n===Hh)return r.RED_INTEGER;if(n===Dm)return r.RG;if(n===Vh)return r.RG_INTEGER;if(n===Gh)return r.RGBA_INTEGER;if(n===ml||n===gl||n===_l||n===vl)if(o===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wu||n===Au||n===Cu||n===Ru)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Au)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pu||n===Lu||n===Du)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pu||n===Lu)return o===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Du)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Iu||n===Uu||n===Nu||n===Ou||n===Fu||n===zu||n===Bu||n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===Yu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Iu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ou)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ku)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xl||n===qu||n===$u)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===xl)return o===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$u)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Im||n===Zu||n===Ku||n===Ju)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ku)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ju)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ro?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class p1 extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ai extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m1={type:"move"};class zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const g1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`;class v1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new sn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sr({vertexShader:g1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x1 extends uo{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const _=new v1,g=e.getContextAttributes();let p=null,y=null;const M=[],v=[],C=new Et;let w=null;const E=new kn;E.viewport=new ye;const A=new kn;A.viewport=new ye;const S=[E,A],x=new p1;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=M[k];return J===void 0&&(J=new zc,M[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=M[k];return J===void 0&&(J=new zc,M[k]=J),J.getGripSpace()},this.getHand=function(k){let J=M[k];return J===void 0&&(J=new zc,M[k]=J),J.getHandSpace()};function B(k){const J=v.indexOf(k.inputSource);if(J===-1)return;const at=M[J];at!==void 0&&(at.update(k.inputSource,k.frame,c||o),at.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",z);for(let k=0;k<M.length;k++){const J=v[k];J!==null&&(v[k]=null,M[k].disconnect(J))}L=null,I=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,i=null,y=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",V),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Qr(d.framebufferWidth,d.framebufferHeight,{format:mi,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,at=null,j=null;g.depth&&(j=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?so:Ws,at=g.stencil?ro:jr);const ht={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(ht),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Qr(f.textureWidth,f.textureHeight,{format:mi,type:Zi,depthTexture:new $m(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Lt.setContext(i),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(k){for(let J=0;J<k.removed.length;J++){const at=k.removed[J],j=v.indexOf(at);j>=0&&(v[j]=null,M[j].disconnect(at))}for(let J=0;J<k.added.length;J++){const at=k.added[J];let j=v.indexOf(at);if(j===-1){for(let _t=0;_t<M.length;_t++)if(_t>=v.length){v.push(at),j=_t;break}else if(v[_t]===null){v[_t]=at,j=_t;break}if(j===-1)break}const ht=M[j];ht&&ht.connect(at)}}const N=new H,U=new H;function F(k,J,at){N.setFromMatrixPosition(J.matrixWorld),U.setFromMatrixPosition(at.matrixWorld);const j=N.distanceTo(U),ht=J.projectionMatrix.elements,_t=at.projectionMatrix.elements,It=ht[14]/(ht[10]-1),Gt=ht[14]/(ht[10]+1),nt=(ht[9]+1)/ht[5],it=(ht[9]-1)/ht[5],D=(ht[8]-1)/ht[0],Ct=(_t[8]+1)/_t[0],lt=It*D,G=It*Ct,ut=j/(-D+Ct),Bt=ut*-D;if(J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Bt),k.translateZ(ut),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),ht[10]===-1)k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const wt=It+ut,R=Gt+ut,b=lt-Bt,q=G+(j-Bt),tt=nt*Gt/R*wt,rt=it*Gt/R*wt;k.projectionMatrix.makePerspective(b,q,tt,rt,wt,R),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Y(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let J=k.near,at=k.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(at=_.depthFar)),x.near=A.near=E.near=J,x.far=A.far=E.far=at,(L!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,I=x.far),E.layers.mask=k.layers.mask|2,A.layers.mask=k.layers.mask|4,x.layers.mask=E.layers.mask|A.layers.mask;const j=k.parent,ht=x.cameras;Y(x,j);for(let _t=0;_t<ht.length;_t++)Y(ht[_t],j);ht.length===2?F(x,E,A):x.projectionMatrix.copy(E.projectionMatrix),P(k,x,j)};function P(k,J,at){at===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(at.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=fa*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let st=null;function dt(k,J){if(u=J.getViewerPose(c||o),m=J,u!==null){const at=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let j=!1;at.length!==x.cameras.length&&(x.cameras.length=0,j=!0);for(let _t=0;_t<at.length;_t++){const It=at[_t];let Gt=null;if(d!==null)Gt=d.getViewport(It);else{const it=h.getViewSubImage(f,It);Gt=it.viewport,_t===0&&(t.setRenderTargetTextures(y,it.colorTexture,f.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(y))}let nt=S[_t];nt===void 0&&(nt=new kn,nt.layers.enable(_t),nt.viewport=new ye,S[_t]=nt),nt.matrix.fromArray(It.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(It.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),_t===0&&(x.matrix.copy(nt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),j===!0&&x.cameras.push(nt)}const ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")){const _t=h.getDepthInformation(at[0]);_t&&_t.isValid&&_t.texture&&_.init(t,_t,i.renderState)}}for(let at=0;at<M.length;at++){const j=v[at],ht=M[at];j!==null&&ht!==void 0&&ht.update(j,J,c||o)}st&&st(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Lt=new Ym;Lt.setAnimationLoop(dt),this.setAnimationLoop=function(k){st=k},this.dispose=function(){}}}const Ir=new si,y1=new Te;function M1(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gm(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===En&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===En&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,v=y.envMapRotation;M&&(g.envMap.value=M,Ir.copy(v),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),g.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(Ir)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function S1(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const v=M.program;n.uniformBlockBinding(y,v)}function c(y,M){let v=i[y.id];v===void 0&&(m(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",g));const C=M.program;n.updateUBOMapping(y,C);const w=t.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function u(y){const M=h();y.__bindingPointIndex=M;const v=r.createBuffer(),C=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=i[y.id],v=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,E=v.length;w<E;w++){const A=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,x=A.length;S<x;S++){const L=A[S];if(d(L,w,S,C)===!0){const I=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let z=0;z<B.length;z++){const N=B[z],U=_(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,I+V,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,V),V+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,M,v,C){const w=y.value,E=M+"_"+v;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const A=C[E];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return C[E]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function m(y){const M=y.uniforms;let v=0;const C=16;for(let E=0,A=M.length;E<A;E++){const S=Array.isArray(M[E])?M[E]:[M[E]];for(let x=0,L=S.length;x<L;x++){const I=S[x],B=Array.isArray(I.value)?I.value:[I.value];for(let V=0,z=B.length;V<z;V++){const N=B[V],U=_(N),F=v%C,Y=F%U.boundary,P=F+Y;v+=Y,P!==0&&C-P<U.storage&&(v+=C-P),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=U.storage}}}const w=v%C;return w>0&&(v+=C-w),y.__size=v,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class b1{constructor(t={}){const{canvas:e=uv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=gr,this.toneMappingExposure=1;const v=this;let C=!1,w=0,E=0,A=null,S=-1,x=null;const L=new ye,I=new ye;let B=null;const V=new Jt(0);let z=0,N=e.width,U=e.height,F=1,Y=null,P=null;const st=new ye(0,0,N,U),dt=new ye(0,0,N,U);let Lt=!1;const k=new Xh;let J=!1,at=!1;const j=new Te,ht=new Te,_t=new H,It=new ye,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function it(){return A===null?F:1}let D=n;function Ct(T,W){return e.getContext(T,W)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oh}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",St,!1),D===null){const W="webgl2";if(D=Ct(W,T),D===null)throw Ct(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let lt,G,ut,Bt,wt,R,b,q,tt,rt,et,vt,mt,Mt,$t,ct,gt,Vt,Ht,Pt,Qt,Wt,ce,O;function yt(){lt=new CM(D),lt.init(),Wt=new d1(D,lt),G=new SM(D,lt,t,Wt),ut=new u1(D,lt),G.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),Bt=new LM(D),wt=new ZS,R=new f1(D,lt,ut,wt,G,Wt,Bt),b=new EM(v),q=new AM(v),tt=new zv(D),ce=new yM(D,tt),rt=new RM(D,tt,Bt,ce),et=new IM(D,rt,tt,Bt),Ht=new DM(D,G,R),ct=new bM(wt),vt=new $S(v,b,q,lt,G,ce,ct),mt=new M1(v,wt),Mt=new JS,$t=new i1(lt),Vt=new xM(v,b,q,ut,et,d,l),gt=new l1(v,et,G),O=new S1(D,Bt,G,ut),Pt=new MM(D,lt,Bt),Qt=new PM(D,lt,Bt),Bt.programs=vt.programs,v.capabilities=G,v.extensions=lt,v.properties=wt,v.renderLists=Mt,v.shadowMap=gt,v.state=ut,v.info=Bt}yt();const K=new x1(v,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=lt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=lt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(N,U,!1))},this.getSize=function(T){return T.set(N,U)},this.setSize=function(T,W,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,U=W,e.width=Math.floor(T*F),e.height=Math.floor(W*F),$===!0&&(e.style.width=T+"px",e.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(N*F,U*F).floor()},this.setDrawingBufferSize=function(T,W,$){N=T,U=W,F=$,e.width=Math.floor(T*$),e.height=Math.floor(W*$),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,W,$,Z){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,W,$,Z),ut.viewport(L.copy(st).multiplyScalar(F).round())},this.getScissor=function(T){return T.copy(dt)},this.setScissor=function(T,W,$,Z){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,W,$,Z),ut.scissor(I.copy(dt).multiplyScalar(F).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(T){ut.setScissorTest(Lt=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(T=!0,W=!0,$=!0){let Z=0;if(T){let X=!1;if(A!==null){const ft=A.texture.format;X=ft===Gh||ft===Vh||ft===Hh}if(X){const ft=A.texture.type,pt=ft===Zi||ft===jr||ft===ha||ft===ro||ft===zh||ft===Bh,bt=Vt.getClearColor(),Dt=Vt.getClearAlpha(),Yt=bt.r,Kt=bt.g,Nt=bt.b;pt?(m[0]=Yt,m[1]=Kt,m[2]=Nt,m[3]=Dt,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Yt,_[1]=Kt,_[2]=Nt,_[3]=Dt,D.clearBufferiv(D.COLOR,0,_))}else Z|=D.COLOR_BUFFER_BIT}W&&(Z|=D.DEPTH_BUFFER_BIT),$&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Mt.dispose(),$t.dispose(),wt.dispose(),b.dispose(),q.dispose(),et.dispose(),ce.dispose(),O.dispose(),vt.dispose(),K.dispose(),K.removeEventListener("sessionstart",Tt),K.removeEventListener("sessionend",Zt),Ft.stop()};function ot(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=Bt.autoReset,W=gt.enabled,$=gt.autoUpdate,Z=gt.needsUpdate,X=gt.type;yt(),Bt.autoReset=T,gt.enabled=W,gt.autoUpdate=$,gt.needsUpdate=Z,gt.type=X}function St(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xt(T){const W=T.target;W.removeEventListener("dispose",Xt),he(W)}function he(T){Ne(T),wt.remove(T)}function Ne(T){const W=wt.get(T).programs;W!==void 0&&(W.forEach(function($){vt.releaseProgram($)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,$,Z,X,ft){W===null&&(W=Gt);const pt=X.isMesh&&X.matrixWorld.determinant()<0,bt=In(T,W,$,Z,X);ut.setMaterial(Z,pt);let Dt=$.index,Yt=1;if(Z.wireframe===!0){if(Dt=rt.getWireframeAttribute($),Dt===void 0)return;Yt=2}const Kt=$.drawRange,Nt=$.attributes.position;let jt=Kt.start*Yt,fe=(Kt.start+Kt.count)*Yt;ft!==null&&(jt=Math.max(jt,ft.start*Yt),fe=Math.min(fe,(ft.start+ft.count)*Yt)),Dt!==null?(jt=Math.max(jt,0),fe=Math.min(fe,Dt.count)):Nt!=null&&(jt=Math.max(jt,0),fe=Math.min(fe,Nt.count));const pe=fe-jt;if(pe<0||pe===1/0)return;ce.setup(X,Z,bt,$,Dt);let Pe,me=Pt;if(Dt!==null&&(Pe=tt.get(Dt),me=Qt,me.setIndex(Pe)),X.isMesh)Z.wireframe===!0?(ut.setLineWidth(Z.wireframeLinewidth*it()),me.setMode(D.LINES)):me.setMode(D.TRIANGLES);else if(X.isLine){let kt=Z.linewidth;kt===void 0&&(kt=1),ut.setLineWidth(kt*it()),X.isLineSegments?me.setMode(D.LINES):X.isLineLoop?me.setMode(D.LINE_LOOP):me.setMode(D.LINE_STRIP)}else X.isPoints?me.setMode(D.POINTS):X.isSprite&&me.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)me.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))me.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const kt=X._multiDrawStarts,Ii=X._multiDrawCounts,ge=X._multiDrawCount,ai=Dt?tt.get(Dt).bytesPerElement:1,ls=wt.get(Z).currentProgram.getUniforms();for(let Un=0;Un<ge;Un++)ls.setValue(D,"_gl_DrawID",Un),me.render(kt[Un]/ai,Ii[Un])}else if(X.isInstancedMesh)me.renderInstances(jt,pe,X.count);else if($.isInstancedBufferGeometry){const kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ii=Math.min($.instanceCount,kt);me.renderInstances(jt,pe,Ii)}else me.render(jt,pe)};function Rt(T,W,$){T.transparent===!0&&T.side===di&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,Me(T,W,$),T.side=Mr,T.needsUpdate=!0,Me(T,W,$),T.side=di):Me(T,W,$)}this.compile=function(T,W,$=null){$===null&&($=T),p=$t.get($),p.init(W),M.push(p),$.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==$&&T.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Z=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ft=X.material;if(ft)if(Array.isArray(ft))for(let pt=0;pt<ft.length;pt++){const bt=ft[pt];Rt(bt,$,X),Z.add(bt)}else Rt(ft,$,X),Z.add(ft)}),M.pop(),p=null,Z},this.compileAsync=function(T,W,$=null){const Z=this.compile(T,W,$);return new Promise(X=>{function ft(){if(Z.forEach(function(pt){wt.get(pt).currentProgram.isReady()&&Z.delete(pt)}),Z.size===0){X(T);return}setTimeout(ft,10)}lt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ot=null;function te(T){Ot&&Ot(T)}function Tt(){Ft.stop()}function Zt(){Ft.start()}const Ft=new Ym;Ft.setAnimationLoop(te),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(T){Ot=T,K.setAnimationLoop(T),T===null?Ft.stop():Ft.start()},K.addEventListener("sessionstart",Tt),K.addEventListener("sessionend",Zt),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(W),W=K.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,W,A),p=$t.get(T,M.length),p.init(W),M.push(p),ht.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),k.setFromProjectionMatrix(ht),at=this.localClippingEnabled,J=ct.init(this.clippingPlanes,at),g=Mt.get(T,y.length),g.init(),y.push(g),K.enabled===!0&&K.isPresenting===!0){const ft=v.xr.getDepthSensingMesh();ft!==null&&qt(ft,W,-1/0,v.sortObjects)}qt(T,W,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,P),nt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,nt&&Vt.addToRenderList(g,T),this.info.render.frame++,J===!0&&ct.beginShadows();const $=p.state.shadowsArray;gt.render($,T,W),J===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,X=g.transmissive;if(p.setupLights(),W.isArrayCamera){const ft=W.cameras;if(X.length>0)for(let pt=0,bt=ft.length;pt<bt;pt++){const Dt=ft[pt];re(Z,X,T,Dt)}nt&&Vt.render(T);for(let pt=0,bt=ft.length;pt<bt;pt++){const Dt=ft[pt];Be(g,T,Dt,Dt.viewport)}}else X.length>0&&re(Z,X,T,W),nt&&Vt.render(T),Be(g,T,W);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,W),ce.resetDefaultState(),S=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function qt(T,W,$,Z){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||k.intersectsSprite(T)){Z&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);const pt=et.update(T),bt=T.material;bt.visible&&g.push(T,pt,bt,$,It.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||k.intersectsObject(T))){const pt=et.update(T),bt=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),It.copy(pt.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(bt)){const Dt=pt.groups;for(let Yt=0,Kt=Dt.length;Yt<Kt;Yt++){const Nt=Dt[Yt],jt=bt[Nt.materialIndex];jt&&jt.visible&&g.push(T,pt,jt,$,It.z,Nt)}}else bt.visible&&g.push(T,pt,bt,$,It.z,null)}}const ft=T.children;for(let pt=0,bt=ft.length;pt<bt;pt++)qt(ft[pt],W,$,Z)}function Be(T,W,$,Z){const X=T.opaque,ft=T.transmissive,pt=T.transparent;p.setupLightsView($),J===!0&&ct.setGlobalState(v.clippingPlanes,$),Z&&ut.viewport(L.copy(Z)),X.length>0&&we(X,W,$),ft.length>0&&we(ft,W,$),pt.length>0&&we(pt,W,$),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function re(T,W,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Qr(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Ma:Zi,minFilter:Gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const ft=p.state.transmissionRenderTarget[Z.id],pt=Z.viewport||L;ft.setSize(pt.z,pt.w);const bt=v.getRenderTarget();v.setRenderTarget(ft),v.getClearColor(V),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),nt&&Vt.render($);const Dt=v.toneMapping;v.toneMapping=gr;const Yt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),J===!0&&ct.setGlobalState(v.clippingPlanes,Z),we(T,$,Z),R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Nt=0,jt=W.length;Nt<jt;Nt++){const fe=W[Nt],pe=fe.object,Pe=fe.geometry,me=fe.material,kt=fe.group;if(me.side===di&&pe.layers.test(Z.layers)){const Ii=me.side;me.side=En,me.needsUpdate=!0,Ye(pe,$,Z,Pe,me,kt),me.side=Ii,me.needsUpdate=!0,Kt=!0}}Kt===!0&&(R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft))}v.setRenderTarget(bt),v.setClearColor(V,z),Yt!==void 0&&(Z.viewport=Yt),v.toneMapping=Dt}function we(T,W,$){const Z=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ft=T.length;X<ft;X++){const pt=T[X],bt=pt.object,Dt=pt.geometry,Yt=Z===null?pt.material:Z,Kt=pt.group;bt.layers.test($.layers)&&Ye(bt,W,$,Dt,Yt,Kt)}}function Ye(T,W,$,Z,X,ft){T.onBeforeRender(v,W,$,Z,X,ft),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(v,W,$,Z,T,ft),X.transparent===!0&&X.side===di&&X.forceSinglePass===!1?(X.side=En,X.needsUpdate=!0,v.renderBufferDirect($,W,Z,X,T,ft),X.side=Mr,X.needsUpdate=!0,v.renderBufferDirect($,W,Z,X,T,ft),X.side=di):v.renderBufferDirect($,W,Z,X,T,ft),T.onAfterRender(v,W,$,Z,X,ft)}function Me(T,W,$){W.isScene!==!0&&(W=Gt);const Z=wt.get(T),X=p.state.lights,ft=p.state.shadowsArray,pt=X.state.version,bt=vt.getParameters(T,X.state,ft,W,$),Dt=vt.getProgramCacheKey(bt);let Yt=Z.programs;Z.environment=T.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(T.isMeshStandardMaterial?q:b).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",Xt),Yt=new Map,Z.programs=Yt);let Kt=Yt.get(Dt);if(Kt!==void 0){if(Z.currentProgram===Kt&&Z.lightsStateVersion===pt)return de(T,bt),Kt}else bt.uniforms=vt.getUniforms(T),T.onBeforeCompile(bt,v),Kt=vt.acquireProgram(bt,Dt),Yt.set(Dt,Kt),Z.uniforms=bt.uniforms;const Nt=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=ct.uniform),de(T,bt),Z.needsLights=pn(T),Z.lightsStateVersion=pt,Z.needsLights&&(Nt.ambientLightColor.value=X.state.ambient,Nt.lightProbe.value=X.state.probe,Nt.directionalLights.value=X.state.directional,Nt.directionalLightShadows.value=X.state.directionalShadow,Nt.spotLights.value=X.state.spot,Nt.spotLightShadows.value=X.state.spotShadow,Nt.rectAreaLights.value=X.state.rectArea,Nt.ltc_1.value=X.state.rectAreaLTC1,Nt.ltc_2.value=X.state.rectAreaLTC2,Nt.pointLights.value=X.state.point,Nt.pointLightShadows.value=X.state.pointShadow,Nt.hemisphereLights.value=X.state.hemi,Nt.directionalShadowMap.value=X.state.directionalShadowMap,Nt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Nt.spotShadowMap.value=X.state.spotShadowMap,Nt.spotLightMatrix.value=X.state.spotLightMatrix,Nt.spotLightMap.value=X.state.spotLightMap,Nt.pointShadowMap.value=X.state.pointShadowMap,Nt.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=Kt,Z.uniformsList=null,Kt}function Se(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=yl.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function de(T,W){const $=wt.get(T);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function In(T,W,$,Z,X){W.isScene!==!0&&(W=Gt),R.resetTextureUnits();const ft=W.fog,pt=Z.isMeshStandardMaterial?W.environment:null,bt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:co,Dt=(Z.isMeshStandardMaterial?q:b).get(Z.envMap||pt),Yt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Kt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Nt=!!$.morphAttributes.position,jt=!!$.morphAttributes.normal,fe=!!$.morphAttributes.color;let pe=gr;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pe=v.toneMapping);const Pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,me=Pe!==void 0?Pe.length:0,kt=wt.get(Z),Ii=p.state.lights;if(J===!0&&(at===!0||T!==x)){const Kn=T===x&&Z.id===S;ct.setState(Z,T,Kn)}let ge=!1;Z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ii.state.version||kt.outputColorSpace!==bt||X.isBatchedMesh&&kt.batching===!1||!X.isBatchedMesh&&kt.batching===!0||X.isBatchedMesh&&kt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&kt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&kt.instancing===!1||!X.isInstancedMesh&&kt.instancing===!0||X.isSkinnedMesh&&kt.skinning===!1||!X.isSkinnedMesh&&kt.skinning===!0||X.isInstancedMesh&&kt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&kt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&kt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&kt.instancingMorph===!1&&X.morphTexture!==null||kt.envMap!==Dt||Z.fog===!0&&kt.fog!==ft||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ct.numPlanes||kt.numIntersection!==ct.numIntersection)||kt.vertexAlphas!==Yt||kt.vertexTangents!==Kt||kt.morphTargets!==Nt||kt.morphNormals!==jt||kt.morphColors!==fe||kt.toneMapping!==pe||kt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,kt.__version=Z.version);let ai=kt.currentProgram;ge===!0&&(ai=Me(Z,W,X));let ls=!1,Un=!1,fo=!1;const Ce=ai.getUniforms(),_i=kt.uniforms;if(ut.useProgram(ai.program)&&(ls=!0,Un=!0,fo=!0),Z.id!==S&&(S=Z.id,Un=!0),ls||x!==T){ut.buffers.depth.getReversed()?(j.copy(T.projectionMatrix),fv(j),dv(j),Ce.setValue(D,"projectionMatrix",j)):Ce.setValue(D,"projectionMatrix",T.projectionMatrix),Ce.setValue(D,"viewMatrix",T.matrixWorldInverse);const Ki=Ce.map.cameraPosition;Ki!==void 0&&Ki.setValue(D,_t.setFromMatrixPosition(T.matrixWorld)),G.logarithmicDepthBuffer&&Ce.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ce.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Un=!0,fo=!0)}if(X.isSkinnedMesh){Ce.setOptional(D,X,"bindMatrix"),Ce.setOptional(D,X,"bindMatrixInverse");const Kn=X.skeleton;Kn&&(Kn.boneTexture===null&&Kn.computeBoneTexture(),Ce.setValue(D,"boneTexture",Kn.boneTexture,R))}X.isBatchedMesh&&(Ce.setOptional(D,X,"batchingTexture"),Ce.setValue(D,"batchingTexture",X._matricesTexture,R),Ce.setOptional(D,X,"batchingIdTexture"),Ce.setValue(D,"batchingIdTexture",X._indirectTexture,R),Ce.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Ce.setValue(D,"batchingColorTexture",X._colorsTexture,R));const po=$.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0)&&Ht.update(X,$,ai),(Un||kt.receiveShadow!==X.receiveShadow)&&(kt.receiveShadow=X.receiveShadow,Ce.setValue(D,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(_i.envMap.value=Dt,_i.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(_i.envMapIntensity.value=W.environmentIntensity),Un&&(Ce.setValue(D,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Ae(_i,fo),ft&&Z.fog===!0&&mt.refreshFogUniforms(_i,ft),mt.refreshMaterialUniforms(_i,Z,F,U,p.state.transmissionRenderTarget[T.id]),yl.upload(D,Se(kt),_i,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(yl.upload(D,Se(kt),_i,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ce.setValue(D,"center",X.center),Ce.setValue(D,"modelViewMatrix",X.modelViewMatrix),Ce.setValue(D,"normalMatrix",X.normalMatrix),Ce.setValue(D,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Kn=Z.uniformsGroups;for(let Ki=0,Ji=Kn.length;Ki<Ji;Ki++){const df=Kn[Ki];O.update(df,ai),O.bind(df,ai)}}return ai}function Ae(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function pn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,W,$){wt.get(T.texture).__webglTexture=W,wt.get(T.depthTexture).__webglTexture=$;const Z=wt.get(T);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,W){const $=wt.get(T);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,$=0){A=T,w=W,E=$;let Z=!0,X=null,ft=!1,pt=!1;if(T){const Dt=wt.get(T);if(Dt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Dt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Dt.__hasExternalTextures)R.rebindTextures(T,wt.get(T.texture).__webglTexture,wt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Nt=T.depthTexture;if(Dt.__boundDepthTexture!==Nt){if(Nt!==null&&wt.has(Nt)&&(T.width!==Nt.image.width||T.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(pt=!0);const Kt=wt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Kt[W])?X=Kt[W][$]:X=Kt[W],ft=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?X=wt.get(T).__webglMultisampledFramebuffer:Array.isArray(Kt)?X=Kt[$]:X=Kt,L.copy(T.viewport),I.copy(T.scissor),B=T.scissorTest}else L.copy(st).multiplyScalar(F).floor(),I.copy(dt).multiplyScalar(F).floor(),B=Lt;if(ut.bindFramebuffer(D.FRAMEBUFFER,X)&&Z&&ut.drawBuffers(T,X),ut.viewport(L),ut.scissor(I),ut.setScissorTest(B),ft){const Dt=wt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,Dt.__webglTexture,$)}else if(pt){const Dt=wt.get(T.texture),Yt=W||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,$||0,Yt)}S=-1},this.readRenderTargetPixels=function(T,W,$,Z,X,ft,pt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pt!==void 0&&(bt=bt[pt]),bt){ut.bindFramebuffer(D.FRAMEBUFFER,bt);try{const Dt=T.texture,Yt=Dt.format,Kt=Dt.type;if(!G.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-Z&&$>=0&&$<=T.height-X&&D.readPixels(W,$,Z,X,Wt.convert(Yt),Wt.convert(Kt),ft)}finally{const Dt=A!==null?wt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,W,$,Z,X,ft,pt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pt!==void 0&&(bt=bt[pt]),bt){const Dt=T.texture,Yt=Dt.format,Kt=Dt.type;if(!G.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=T.width-Z&&$>=0&&$<=T.height-X){ut.bindFramebuffer(D.FRAMEBUFFER,bt);const Nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),D.readPixels(W,$,Z,X,Wt.convert(Yt),Wt.convert(Kt),0);const jt=A!==null?wt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,jt);const fe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await hv(D,fe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft),D.deleteBuffer(Nt),D.deleteSync(fe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,W=null,$=0){T.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1]);const Z=Math.pow(2,-$),X=Math.floor(T.image.width*Z),ft=Math.floor(T.image.height*Z),pt=W!==null?W.x:0,bt=W!==null?W.y:0;R.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,pt,bt,X,ft),ut.unbindTexture()},this.copyTextureToTexture=function(T,W,$=null,Z=null,X=0){T.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1],W=arguments[2],X=arguments[3]||0,$=null);let ft,pt,bt,Dt,Yt,Kt,Nt,jt,fe;const pe=T.isCompressedTexture?T.mipmaps[X]:T.image;$!==null?(ft=$.max.x-$.min.x,pt=$.max.y-$.min.y,bt=$.isBox3?$.max.z-$.min.z:1,Dt=$.min.x,Yt=$.min.y,Kt=$.isBox3?$.min.z:0):(ft=pe.width,pt=pe.height,bt=pe.depth||1,Dt=0,Yt=0,Kt=0),Z!==null?(Nt=Z.x,jt=Z.y,fe=Z.z):(Nt=0,jt=0,fe=0);const Pe=Wt.convert(W.format),me=Wt.convert(W.type);let kt;W.isData3DTexture?(R.setTexture3D(W,0),kt=D.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(R.setTexture2DArray(W,0),kt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(W,0),kt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);const Ii=D.getParameter(D.UNPACK_ROW_LENGTH),ge=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ai=D.getParameter(D.UNPACK_SKIP_PIXELS),ls=D.getParameter(D.UNPACK_SKIP_ROWS),Un=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Kt);const fo=T.isDataArrayTexture||T.isData3DTexture,Ce=W.isDataArrayTexture||W.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const _i=wt.get(T),po=wt.get(W),Kn=wt.get(_i.__renderTarget),Ki=wt.get(po.__renderTarget);ut.bindFramebuffer(D.READ_FRAMEBUFFER,Kn.__webglFramebuffer),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let Ji=0;Ji<bt;Ji++)fo&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(T).__webglTexture,X,Kt+Ji),T.isDepthTexture?(Ce&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(W).__webglTexture,X,fe+Ji),D.blitFramebuffer(Dt,Yt,ft,pt,Nt,jt,ft,pt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Ce?D.copyTexSubImage3D(kt,X,Nt,jt,fe+Ji,Dt,Yt,ft,pt):D.copyTexSubImage2D(kt,X,Nt,jt,fe+Ji,Dt,Yt,ft,pt);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ce?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(kt,X,Nt,jt,fe,ft,pt,bt,Pe,me,pe.data):W.isCompressedArrayTexture?D.compressedTexSubImage3D(kt,X,Nt,jt,fe,ft,pt,bt,Pe,pe.data):D.texSubImage3D(kt,X,Nt,jt,fe,ft,pt,bt,Pe,me,pe):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,X,Nt,jt,ft,pt,Pe,me,pe.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,X,Nt,jt,pe.width,pe.height,Pe,pe.data):D.texSubImage2D(D.TEXTURE_2D,X,Nt,jt,ft,pt,Pe,me,pe);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ii),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ai),D.pixelStorei(D.UNPACK_SKIP_ROWS,ls),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Un),X===0&&W.generateMipmaps&&D.generateMipmap(kt),ut.unbindTexture()},this.copyTextureToTexture3D=function(T,W,$=null,Z=null,X=0){return T.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,T=arguments[2],W=arguments[3],X=arguments[4]||0),Io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,W,$,Z,X)},this.initRenderTarget=function(T){wt.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){w=0,E=0,A=null,ut.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class qh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new qh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qm extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class E1 extends sn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=qn,u=qn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os extends gi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new Te,Ld=new Te,qa=[],Dd=new as,T1=new Te,yo=new ae,Mo=new ba;class Id extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,T1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new as),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Dd.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Dd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ba),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Mo.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(Mo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),t.ray.intersectsSphere(Mo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Es),Ld.multiplyMatrices(n,Es),yo.matrixWorld=Ld,yo.raycast(t,qa);for(let o=0,a=qa.length;o<a;o++){const l=qa[o];l.instanceId=s,l.object=this,e.push(l)}qa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new E1(new Float32Array(i*this.count),i,this.count,kh,wi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jl extends sn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Et:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new H,i=[],s=[],o=[],a=new H,l=new Te;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(tn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(tn(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $h extends Di{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Et){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class w1 extends $h{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const $a=new H,Bc=new Zh,kc=new Zh,Hc=new Zh;class A1 extends Di{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new H){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:($a.subVectors(i[0],i[1]).add(i[0]),c=$a);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:($a.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=$a),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Bc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,_,g),kc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,_,g),Hc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),kc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Hc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Bc.calc(l),kc.calc(l),Hc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new H().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ud(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function C1(r,t){const e=1-r;return e*e*t}function R1(r,t){return 2*(1-r)*r*t}function P1(r,t){return r*r*t}function Xo(r,t,e,n){return C1(r,t)+R1(r,e)+P1(r,n)}function L1(r,t){const e=1-r;return e*e*e*t}function D1(r,t){const e=1-r;return 3*e*e*r*t}function I1(r,t){return 3*(1-r)*r*r*t}function U1(r,t){return r*r*r*t}function Yo(r,t,e,n,i){return L1(r,t)+D1(r,e)+I1(r,n)+U1(r,i)}class tg extends Di{constructor(t=new Et,e=new Et,n=new Et,i=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Et){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Yo(t,i.x,s.x,o.x,a.x),Yo(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class N1 extends Di{constructor(t=new H,e=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new H){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Yo(t,i.x,s.x,o.x,a.x),Yo(t,i.y,s.y,o.y,a.y),Yo(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eg extends Di{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class O1 extends Di{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ng extends Di{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Xo(t,i.x,s.x,o.x),Xo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F1 extends Di{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Xo(t,i.x,s.x,o.x),Xo(t,i.y,s.y,o.y),Xo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ig extends Di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Ud(a,l.x,c.x,u.x,h.x),Ud(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Et().fromArray(i))}return this}}var th=Object.freeze({__proto__:null,ArcCurve:w1,CatmullRomCurve3:A1,CubicBezierCurve:tg,CubicBezierCurve3:N1,EllipseCurve:$h,LineCurve:eg,LineCurve3:O1,QuadraticBezierCurve:ng,QuadraticBezierCurve3:F1,SplineCurve:ig});class z1 extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new th[i.type]().fromJSON(i))}return this}}class Bl extends z1{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new eg(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new ng(this.currentPoint.clone(),new Et(t,e),new Et(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new tg(this.currentPoint.clone(),new Et(t,e),new Et(n,i),new Et(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ig(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new $h(t,e,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kh extends oi{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new H,u=new Et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Jh extends Bl{constructor(t){super(t),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Bl().fromJSON(i))}return this}}const B1={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=rg(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=W1(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let m=e;m<i;m+=e)h=r[m],f=r[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return pa(s,o,e,a,l,d,0),o}};function rg(r,t,e,n,i){let s,o;if(i===eb(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Nd(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Nd(s,r[s],r[s+1],o);return o&&Ql(o,o.next)&&(ga(o),o=o.next),o}function es(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Ql(e,e.next)||Ue(e.prev,e,e.next)===0)){if(ga(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pa(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Z1(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?H1(r,n,i,s):k1(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),ga(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=V1(es(r),t,e),pa(r,t,e,n,i,s,2)):o===2&&G1(r,t,e,n,i,s):pa(es(r),t,e,n,i,s,1);break}}}function k1(r){const t=r.prev,e=r,n=r.next;if(Ue(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&Fs(i,a,s,l,o,c,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function H1(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Ue(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,p=eh(d,m,t,e,n),y=eh(_,g,t,e,n);let M=r.prevZ,v=r.nextZ;for(;M&&M.z>=p&&v&&v.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&Fs(a,u,l,h,c,f,M.x,M.y)&&Ue(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Fs(a,u,l,h,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&Fs(a,u,l,h,c,f,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Fs(a,u,l,h,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function V1(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Ql(i,s)&&sg(i,n,n.next,s)&&ma(i,s)&&ma(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ga(n),ga(n.next),n=r=s),n=n.next}while(n!==r);return es(n)}function G1(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j1(o,a)){let l=og(o,a);o=es(o,o.next),l=es(l,l.next),pa(o,t,e,n,i,s,0),pa(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function W1(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=rg(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(J1(c));for(i.sort(X1),s=0;s<i.length;s++)e=Y1(i[s],e);return e}function X1(r,t){return r.x-t.x}function Y1(r,t){const e=q1(r,t);if(!e)return t;const n=og(e,r);return es(n,n.next),es(e,e.next)}function q1(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Fs(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),ma(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&$1(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function $1(r,t){return Ue(r.prev,r,t.prev)<0&&Ue(t.next,r,r.next)<0}function Z1(r,t,e,n){let i=r;do i.z===0&&(i.z=eh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,K1(i)}function K1(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function eh(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function J1(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Fs(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function j1(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Q1(r,t)&&(ma(r,t)&&ma(t,r)&&tb(r,t)&&(Ue(r.prev,r,t.prev)||Ue(r,t.prev,t))||Ql(r,t)&&Ue(r.prev,r,r.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ql(r,t){return r.x===t.x&&r.y===t.y}function sg(r,t,e,n){const i=Ka(Ue(r,t,e)),s=Ka(Ue(r,t,n)),o=Ka(Ue(e,n,r)),a=Ka(Ue(e,n,t));return!!(i!==s&&o!==a||i===0&&Za(r,e,t)||s===0&&Za(r,n,t)||o===0&&Za(e,r,n)||a===0&&Za(e,t,n))}function Za(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ka(r){return r>0?1:r<0?-1:0}function Q1(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&sg(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ma(r,t){return Ue(r.prev,r,r.next)<0?Ue(r,t,r.next)>=0&&Ue(r,r.prev,t)>=0:Ue(r,t,r.prev)<0||Ue(r,r.next,t)<0}function tb(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function og(r,t){const e=new nh(r.i,r.x,r.y),n=new nh(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Nd(r,t,e,n){const i=new nh(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ga(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function nh(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eb(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class qo{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return qo.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Od(t),Fd(n,t);let o=t.length;e.forEach(Od);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Fd(n,e[l]);const a=B1.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Od(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Fd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class tc extends oi{constructor(t=new Jh([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Ve(i,3)),this.setAttribute("uv",new Ve(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:nb;let M,v=!1,C,w,E,A;p&&(M=p.getSpacedPoints(u),v=!0,f=!1,C=p.computeFrenetFrames(u,!1),w=new H,E=new H,A=new H),f||(g=0,d=0,m=0,_=0);const S=a.extractPoints(c);let x=S.shape;const L=S.holes;if(!qo.isClockWise(x)){x=x.reverse();for(let nt=0,it=L.length;nt<it;nt++){const D=L[nt];qo.isClockWise(D)&&(L[nt]=D.reverse())}}const B=qo.triangulateShape(x,L),V=x;for(let nt=0,it=L.length;nt<it;nt++){const D=L[nt];x=x.concat(D)}function z(nt,it,D){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(it,D)}const N=x.length,U=B.length;function F(nt,it,D){let Ct,lt,G;const ut=nt.x-it.x,Bt=nt.y-it.y,wt=D.x-nt.x,R=D.y-nt.y,b=ut*ut+Bt*Bt,q=ut*R-Bt*wt;if(Math.abs(q)>Number.EPSILON){const tt=Math.sqrt(b),rt=Math.sqrt(wt*wt+R*R),et=it.x-Bt/tt,vt=it.y+ut/tt,mt=D.x-R/rt,Mt=D.y+wt/rt,$t=((mt-et)*R-(Mt-vt)*wt)/(ut*R-Bt*wt);Ct=et+ut*$t-nt.x,lt=vt+Bt*$t-nt.y;const ct=Ct*Ct+lt*lt;if(ct<=2)return new Et(Ct,lt);G=Math.sqrt(ct/2)}else{let tt=!1;ut>Number.EPSILON?wt>Number.EPSILON&&(tt=!0):ut<-Number.EPSILON?wt<-Number.EPSILON&&(tt=!0):Math.sign(Bt)===Math.sign(R)&&(tt=!0),tt?(Ct=-Bt,lt=ut,G=Math.sqrt(b)):(Ct=ut,lt=Bt,G=Math.sqrt(b/2))}return new Et(Ct/G,lt/G)}const Y=[];for(let nt=0,it=V.length,D=it-1,Ct=nt+1;nt<it;nt++,D++,Ct++)D===it&&(D=0),Ct===it&&(Ct=0),Y[nt]=F(V[nt],V[D],V[Ct]);const P=[];let st,dt=Y.concat();for(let nt=0,it=L.length;nt<it;nt++){const D=L[nt];st=[];for(let Ct=0,lt=D.length,G=lt-1,ut=Ct+1;Ct<lt;Ct++,G++,ut++)G===lt&&(G=0),ut===lt&&(ut=0),st[Ct]=F(D[Ct],D[G],D[ut]);P.push(st),dt=dt.concat(st)}for(let nt=0;nt<g;nt++){const it=nt/g,D=d*Math.cos(it*Math.PI/2),Ct=m*Math.sin(it*Math.PI/2)+_;for(let lt=0,G=V.length;lt<G;lt++){const ut=z(V[lt],Y[lt],Ct);j(ut.x,ut.y,-D)}for(let lt=0,G=L.length;lt<G;lt++){const ut=L[lt];st=P[lt];for(let Bt=0,wt=ut.length;Bt<wt;Bt++){const R=z(ut[Bt],st[Bt],Ct);j(R.x,R.y,-D)}}}const Lt=m+_;for(let nt=0;nt<N;nt++){const it=f?z(x[nt],dt[nt],Lt):x[nt];v?(E.copy(C.normals[0]).multiplyScalar(it.x),w.copy(C.binormals[0]).multiplyScalar(it.y),A.copy(M[0]).add(E).add(w),j(A.x,A.y,A.z)):j(it.x,it.y,0)}for(let nt=1;nt<=u;nt++)for(let it=0;it<N;it++){const D=f?z(x[it],dt[it],Lt):x[it];v?(E.copy(C.normals[nt]).multiplyScalar(D.x),w.copy(C.binormals[nt]).multiplyScalar(D.y),A.copy(M[nt]).add(E).add(w),j(A.x,A.y,A.z)):j(D.x,D.y,h/u*nt)}for(let nt=g-1;nt>=0;nt--){const it=nt/g,D=d*Math.cos(it*Math.PI/2),Ct=m*Math.sin(it*Math.PI/2)+_;for(let lt=0,G=V.length;lt<G;lt++){const ut=z(V[lt],Y[lt],Ct);j(ut.x,ut.y,h+D)}for(let lt=0,G=L.length;lt<G;lt++){const ut=L[lt];st=P[lt];for(let Bt=0,wt=ut.length;Bt<wt;Bt++){const R=z(ut[Bt],st[Bt],Ct);v?j(R.x,R.y+M[u-1].y,M[u-1].x+D):j(R.x,R.y,h+D)}}}k(),J();function k(){const nt=i.length/3;if(f){let it=0,D=N*it;for(let Ct=0;Ct<U;Ct++){const lt=B[Ct];ht(lt[2]+D,lt[1]+D,lt[0]+D)}it=u+g*2,D=N*it;for(let Ct=0;Ct<U;Ct++){const lt=B[Ct];ht(lt[0]+D,lt[1]+D,lt[2]+D)}}else{for(let it=0;it<U;it++){const D=B[it];ht(D[2],D[1],D[0])}for(let it=0;it<U;it++){const D=B[it];ht(D[0]+N*u,D[1]+N*u,D[2]+N*u)}}n.addGroup(nt,i.length/3-nt,0)}function J(){const nt=i.length/3;let it=0;at(V,it),it+=V.length;for(let D=0,Ct=L.length;D<Ct;D++){const lt=L[D];at(lt,it),it+=lt.length}n.addGroup(nt,i.length/3-nt,1)}function at(nt,it){let D=nt.length;for(;--D>=0;){const Ct=D;let lt=D-1;lt<0&&(lt=nt.length-1);for(let G=0,ut=u+g*2;G<ut;G++){const Bt=N*G,wt=N*(G+1),R=it+Ct+Bt,b=it+lt+Bt,q=it+lt+wt,tt=it+Ct+wt;_t(R,b,q,tt)}}}function j(nt,it,D){l.push(nt),l.push(it),l.push(D)}function ht(nt,it,D){It(nt),It(it),It(D);const Ct=i.length/3,lt=y.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);Gt(lt[0]),Gt(lt[1]),Gt(lt[2])}function _t(nt,it,D,Ct){It(nt),It(it),It(Ct),It(it),It(D),It(Ct);const lt=i.length/3,G=y.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);Gt(G[0]),Gt(G[1]),Gt(G[3]),Gt(G[1]),Gt(G[2]),Gt(G[3])}function It(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function Gt(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ib(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new th[i.type]().fromJSON(i)),new tc(n,t.options)}}const nb={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new Et(s,o),new Et(a,l),new Et(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],_=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Et(o,1-l),new Et(c,1-h),new Et(f,1-m),new Et(_,1-p)]:[new Et(a,1-l),new Et(u,1-h),new Et(d,1-m),new Et(g,1-p)]}};function ib(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class jh extends oi{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/i,d=new H,m=new Et;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const y=p+g,M=y,v=y+n+1,C=y+n+2,w=y+1;a.push(M,v,w),a.push(v,C,w)}}this.setIndex(a),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ec extends oi{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new H,f=new H,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const w=C/e;h.x=-t*Math.cos(i+w*s)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(i+w*s)*Math.sin(o+M*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(w+v,1-M),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const M=u[p][y+1],v=u[p][y],C=u[p+1][y],w=u[p+1][y+1];(p!==0||o>0)&&d.push(M,v,w),(p!==n-1||l<Math.PI)&&d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new Ve(m,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qh extends oi{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new H,h=new H,f=new H;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const _=m/i*s,g=d/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const _=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,y=(i+1)*d+m;o.push(_,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kl extends Ea{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Um,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ci extends kl{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const zd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class rb{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const sb=new rb;class tf{constructor(t){this.manager=t!==void 0?t:sb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}tf.DEFAULT_MATERIAL_NAME="__DEFAULT";class ob extends tf{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=zd.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=da("img");function l(){u(),zd.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class ab extends tf{constructor(t){super(t)}load(t,e,n,i){const s=new sn,o=new ob(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class ef extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Vc=new Te,Bd=new H,kd=new H;class ag{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xh,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bd),kd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kd),e.updateMatrixWorld(),Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hd=new Te,So=new H,Gc=new H;class lb extends ag{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),So.setFromMatrixPosition(t.matrixWorld),n.position.copy(So),Gc.copy(n.position),Gc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Gc),n.updateMatrixWorld(),i.makeTranslation(-So.x,-So.y,-So.z),Hd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd)}}class cb extends ef{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ub extends ag{constructor(){super(new qm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vd extends ef{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new ub}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hb extends ef{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Gd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Gd(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);class db extends Qm{constructor(){super();const t=new Tr;t.deleteAttribute("uv");const e=new kl({side:En}),n=new kl,i=new cb(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new ae(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new ae(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ae(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new ae(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new ae(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new ae(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new ae(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new ae(t,Ts(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new ae(t,Ts(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const m=new ae(t,Ts(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new ae(t,Ts(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new ae(t,Ts(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new ae(t,Ts(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ts(r){const t=new oo;return t.color.setScalar(r),t}const bo=new H;function jn(r,t,e,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;bo.copy(t),bo[n]=0,bo.normalize();const c=.5*o/(o+a),u=1-bo.angleTo(r)/l;return Math.sign(bo[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Wc extends Tr{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new H,l=new H,c=new H(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,m=new H,_=.5/i;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*s,u[g+1]=c.y*Math.sign(a.y)+l.y*s,u[g+2]=c.z*Math.sign(a.z)+l.z*s,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=jn(m,l,"z","y",s,n),f[p+1]=1-jn(m,l,"y","z",s,e);break;case 1:m.set(-1,0,0),f[p+0]=1-jn(m,l,"z","y",s,n),f[p+1]=1-jn(m,l,"y","z",s,e);break;case 2:m.set(0,1,0),f[p+0]=1-jn(m,l,"x","z",s,t),f[p+1]=jn(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),f[p+0]=1-jn(m,l,"x","z",s,t),f[p+1]=1-jn(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),f[p+0]=1-jn(m,l,"x","y",s,t),f[p+1]=1-jn(m,l,"y","x",s,e);break;case 5:m.set(0,0,-1),f[p+0]=jn(m,l,"x","y",s,t),f[p+1]=1-jn(m,l,"y","x",s,e);break}}}const Eo={mono:{name:"mono",west:["#ffffff","#ececec","#dcdcdc"],east:["#f8f8f8","#e4e4e4","#d2d2d4"],north:["#ffffff","#e8e8ea","#d8d8da"],south:["#f4f4f2","#e2e2e0","#d6d6d2"],ground:"#ececea"},glass:{name:"glass",west:["#d40f2c","#ff5a3c","#8c1020","#e8742c"],east:["#2434c8","#3c50e0","#141c78","#5064e8"],north:["#14b4c8","#1890b4","#0c6880"],south:["#c88a3c","#b0b0b8","#d8d8e0"],ground:"#ececea"},mondrian:{name:"mondrian",west:["#e02020","#f4f4f4","#e02020"],east:["#1b4bd2","#f4f4f4","#1b4bd2"],north:["#f7d417","#f4f4f4"],south:["#f4f4f4","#f7d417","#17181c"],ground:"#f4f4f2"},koons:{name:"koons",west:["#ff7ab8","#f0439a","#ffb0d4"],east:["#c46ce0","#9a4ad0","#d8a0f0"],north:["#7de0d8","#4ac8c0"],south:["#f0c0d8","#e8e8f0","#ffd88a"],ground:"#f6eef2"},vangogh:{name:"vangogh",west:["#f2c744","#e8a020","#d88818"],east:["#1e3a8a","#3b6bd8","#152860"],north:["#2c5090","#4878c0"],south:["#3a6858","#f2c744","#28406e"],ground:"#eae6d8"},dior:{name:"dior",west:["#d8b060","#c89840","#f0d8a0"],east:["#e8b4b8","#d89498","#f4d8da"],north:["#b89868","#e0c890"],south:["#503028","#d8c8a8","#f0e4c8"],ground:"#f2ece0"}},sr=["glass","mondrian","koons","vangogh","dior"],Ja=new Jt;function To(r,t,e,n){const i=(t*180/Math.PI+360)%360;let s;i>=120&&i<240?s=r.west:i<60||i>=300?s=r.east:i>=240?s=r.north:s=r.south,Ja.set(s[Math.floor(e*s.length)%s.length]);const o=.92+e*.16;n.setRGB(Ja.r*o,Ja.g*o,Ja.b*o)}function Tn(r,t,e,n={x:0,y:0,z:0}){const i=[];for(let s=0;s<r;s+=1)for(let o=0;o<t;o+=1)for(let a=0;a<e;a+=1)i.push({x:s+n.x,y:a+n.y,z:o+n.z});return i}function Wd(r){const t=new Set;return r.filter(e=>{const n=`${e.x}:${e.y}:${e.z}`;return t.has(n)?!1:(t.add(n),!0)})}const pb="#ad082b",mb="#c32244",gb="#786966",_b="#203397",vb="#007d93",xb=[{id:"building-1",index:1,dimensions:"5 × 3 × 10",note:"完整长方体",color:mb,origin:[-10,-15],cells:Tn(5,3,10)},{id:"building-2",index:2,dimensions:"6 × 3 × 10",note:"左右各 3 格，前后错位 1 格",color:pb,origin:[-17,-7],cells:Wd([...Tn(3,3,10),...Tn(3,3,10,{x:3,y:0,z:1})])},{id:"building-3",index:3,dimensions:"5 × 5 × 8",note:"完整长方体",color:"#920725",origin:[-17,3],cells:Tn(5,5,8)},{id:"building-4",index:4,dimensions:"5 × 4 × 3 + 1",note:"顶部附加 1 个方块",color:"#b43852",origin:[-15,13],cells:[...Tn(5,4,3),{x:2,y:3,z:0}]},{id:"building-5",index:5,dimensions:"2 × 4 × 10",note:"完整长方体",color:"#b89d91",origin:[-3,-16],cells:Tn(2,4,10)},{id:"building-6",index:6,dimensions:"5 × 3 × 10",note:"完整长方体",color:gb,origin:[3,-16],cells:Tn(5,3,10)},{id:"building-7",index:7,dimensions:"3 × 3 × 10",note:"完整长方体",color:vb,origin:[11,-14],cells:Tn(3,3,10)},{id:"building-8",index:8,dimensions:"2 × 3 × 7",note:"完整长方体",color:"#3a4da1",origin:[3,-7],cells:Tn(2,3,7)},{id:"building-9",index:9,dimensions:"3 × 5 × 8",note:"完整长方体",color:"#3047ad",origin:[11,-4],cells:Tn(3,5,8)},{id:"building-10",index:10,dimensions:"5 × 3 × 6 + 2 × 5 × 2",note:"第一至六层为 5 × 3，第七至八层为 2 × 5",color:_b,origin:[9,8],cells:Wd([...Tn(5,3,6),...Tn(2,5,2,{x:3,y:6,z:-2})])},{id:"building-11",index:11,dimensions:"4 × 4 × 2",note:"中央低层建筑",color:"#655a57",origin:[-3,8],cells:Tn(4,4,2)},{id:"building-12",index:12,dimensions:"2 × 3 × 7",note:"位于建筑 5 后方，与建筑 1、6 对齐",color:"#966d72",origin:[-3,-14],cells:Tn(2,3,7)}];function yb(r,t){return`${r}/${t.x}/${t.y}/${t.z}`}const Mb=["building-1/0/6/0","building-1/0/6/1","building-1/0/7/1","building-1/0/7/2","building-1/0/8/1","building-1/0/8/2","building-1/1/5/0","building-1/1/6/0","building-1/1/6/1","building-1/1/6/2","building-1/1/7/1","building-1/1/7/2","building-1/1/8/2","building-1/2/5/0","building-1/2/5/1","building-1/2/6/0","building-1/2/6/1","building-1/2/6/2","building-1/2/7/1","building-1/2/7/2","building-1/2/8/2","building-1/3/4/0","building-1/3/5/0","building-1/3/5/1","building-1/3/5/2","building-1/3/6/1","building-1/3/6/2","building-1/4/4/0","building-1/4/4/1","building-1/4/5/0","building-1/4/6/1","building-1/4/6/2","building-1/4/7/2","building-10/0/0/2","building-10/0/1/1","building-10/0/1/2","building-10/0/2/2","building-10/0/3/1","building-10/0/3/2","building-10/0/4/2","building-10/1/2/1","building-10/1/3/2","building-10/2/2/1","building-10/2/2/2","building-10/3/2/1","building-10/3/2/2","building-10/3/6/-2","building-10/4/1/2","building-10/4/2/1","building-2/0/5/0","building-2/0/5/1","building-2/0/6/1","building-2/0/7/2","building-2/1/5/0","building-2/1/5/1","building-2/1/6/0","building-2/1/6/1","building-2/1/6/2","building-2/2/5/0","building-2/2/5/1","building-2/2/5/2","building-2/2/6/1","building-2/2/6/2","building-2/3/4/3","building-2/3/5/1","building-2/3/5/2","building-2/3/5/3","building-2/3/6/1","building-2/4/5/2","building-2/4/5/3","building-2/4/6/1","building-2/4/6/2","building-2/4/6/3","building-2/5/4/1","building-2/5/5/1","building-2/5/5/2","building-2/5/6/2","building-2/5/6/3","building-2/5/7/3","building-3/0/1/3","building-3/0/1/4","building-3/0/2/2","building-3/0/2/3","building-3/0/3/0","building-3/0/3/1","building-3/0/3/2","building-3/1/1/4","building-3/1/2/2","building-3/1/2/3","building-3/1/3/1","building-3/1/4/0","building-3/2/2/3","building-3/2/3/4","building-3/2/4/0","building-3/2/4/1","building-3/2/4/2","building-3/3/2/2","building-3/3/2/3","building-3/3/2/4","building-3/3/3/2","building-3/3/4/0","building-3/3/4/1","building-3/3/4/2","building-3/3/4/4","building-3/3/5/1","building-3/3/5/2","building-3/3/6/2","building-3/3/7/2","building-3/4/0/2","building-3/4/1/2","building-3/4/1/3","building-3/4/2/1","building-3/4/2/2","building-3/4/2/3","building-3/4/2/4","building-3/4/3/1","building-3/4/3/2","building-3/4/3/4","building-3/4/4/0","building-3/4/4/2","building-3/4/5/0","building-3/4/5/2","building-3/4/6/2","building-3/4/7/2","building-4/2/0/1","building-4/2/0/2","building-4/2/1/1","building-4/2/1/2","building-4/3/0/1","building-4/3/0/2","building-4/3/1/1","building-4/3/1/2","building-4/4/0/1","building-4/4/0/2","building-4/4/1/1","building-4/4/1/2","building-5/0/4/3","building-5/0/5/2","building-5/0/5/3","building-5/0/6/1","building-5/0/6/2","building-5/0/7/0","building-5/0/7/1","building-5/0/8/0","building-5/1/5/3","building-5/1/6/2","building-5/1/6/3","building-5/1/7/1","building-5/1/7/2","building-5/1/8/0","building-5/1/8/1","building-6/0/6/2","building-6/0/7/1","building-6/0/8/0","building-6/1/7/0","building-6/1/7/1","building-6/1/8/2","building-6/2/6/0","building-6/2/7/0","building-6/2/7/2","building-6/2/8/1","building-6/2/8/2","building-6/3/6/0","building-6/3/6/1","building-6/3/6/2","building-6/3/7/2","building-6/4/5/0","building-6/4/5/2","building-6/4/6/0","building-6/4/6/1","building-6/4/6/2","building-7/0/5/0","building-7/0/5/1","building-7/0/5/2","building-7/0/6/2","building-7/1/5/2","building-7/1/6/0","building-7/1/6/1","building-7/1/7/0","building-7/1/7/1","building-7/1/7/2","building-7/2/6/2","building-7/2/7/1","building-7/2/8/0","building-8/0/2/0","building-8/0/3/1","building-8/0/3/2","building-8/0/4/2","building-8/1/3/1","building-8/1/4/0","building-8/1/4/1","building-8/1/4/2","building-8/1/5/2","building-9/0/3/0","building-9/0/4/0","building-9/0/4/1","building-9/0/5/1","building-9/0/5/2","building-9/0/5/3","building-9/0/6/2","building-9/0/6/4","building-9/0/7/3","building-9/0/7/4","building-9/1/3/0","building-9/1/4/0","building-9/1/4/1","building-9/1/5/1","building-9/1/5/2","building-9/1/6/3","building-9/1/6/4","building-9/1/7/3","building-9/2/3/0","building-9/2/4/1","building-9/2/4/4","building-9/2/5/2","building-9/2/6/3"],Sb=[{id:"building-1",x:-11,y:0,z:-14},{id:"building-2",x:-12,y:0,z:-7},{id:"building-3",x:-11,y:0,z:1},{id:"building-4",x:-9,y:0,z:8},{id:"building-5",x:-3,y:0,z:-7},{id:"building-6",x:0,y:0,z:-14},{id:"building-7",x:6,y:0,z:-10},{id:"building-8",x:2,y:0,z:-6},{id:"building-9",x:6,y:0,z:-2},{id:"building-10",x:4,y:0,z:8},{id:"building-11",x:-3,y:0,z:1},{id:"building-12",x:-3,y:0,z:-14}],nf={deleted:Mb,positions:Sb},Xd={1:"#bd1737",2:"#8e0928",3:"#760722",4:"#aa3151",5:"#8a7063",6:"#202d8a",7:"#006f80",8:"#293b91",9:"#213181",10:"#19236f",11:"#514541",12:"#76564f"},bb={mondrian:["#f2f0ea","#e02418","#f5c400","#0f47c4","#1b1b18","#f2f0ea"],koons:["#b8860b","#a8305f","#0f8f96","#c9ccd2","#5a2d82","#a8552a","#1f6fb2"],vangogh:["#c8d0da","#b9c4d2","#cdd6e0","#c2ccd8","#b4c0cf"],dior:["#d9a441","#a8712c","#f0dcb0","#8a5520","#c99a4e"]},Eb=new Set(nf.deleted),Tb=new Map(nf.positions.map(r=>[r.id,r])),wb=Object.fromEntries(nf.positions.map(r=>[Number(r.id.replace("building-","")),{x:r.x,y:r.y,z:r.z}]));function Ab(){const r=[];for(const t of xb){const e=Tb.get(t.id)??{x:0,y:0,z:0};for(const n of t.cells)Eb.has(yb(t.id,n))||r.push({x:n.x+e.x,y:n.y+e.y+.5,z:n.z+e.z,buildingIndex:t.index,variation:.84+(n.x*17+n.y*11+n.z*7+t.index*5)%9/8*.16})}return r}const lg=Ab(),ja=lg.reduce((r,t)=>({minX:Math.min(r.minX,t.x),maxX:Math.max(r.maxX,t.x),minZ:Math.min(r.minZ,t.z),maxZ:Math.max(r.maxZ,t.z)}),{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}),Cb={help:"会员客服",exchange:"积分兑换",community:"会员社区",parking:"停车服务",points:"会员积分",profile:"会员中心",login:"会员码"},vi=r=>`/images/tkl-experience/images/taikoo-li/icons/${r}.png`,Qa=Math.PI/2,Rb=[{buildingIndex:1,kind:"help",localPosition:[3.75,7.75,2.54],scale:1.48,url:vi("help")},{buildingIndex:2,kind:"exchange",localPosition:[4.5,8.6,3.54],scale:1.5,url:vi("exchange")},{buildingIndex:2,kind:"exchange",localPosition:[5.05,1.75,3.54],scale:.62,url:vi("exchange")},{buildingIndex:3,kind:"community",localPosition:[2,8.04,2],rotation:[-Qa,0,0],scale:1.72,url:vi("community")},{buildingIndex:4,kind:"parking",localPosition:[3.25,3.04,2.15],rotation:[-Qa,0,0],scale:1.92,url:vi("parking")},{buildingIndex:4,kind:"parking",localPosition:[2,4.04,0],rotation:[-Qa,0,0],scale:.76,url:vi("parking")},{buildingIndex:5,kind:"points",localPosition:[.5,6.85,3.54],scale:1.34,url:vi("points")},{buildingIndex:5,kind:"points",localPosition:[.5,2.2,3.54],scale:.58,url:vi("points")},{buildingIndex:10,kind:"profile",localPosition:[3.5,8.04,0],rotation:[-Qa,0,0],scale:1.88,url:vi("profile")},{buildingIndex:11,kind:"login",localPosition:[1.5,1,3.54],scale:1.56,url:vi("login")}],Xc=1.7,Pb=Math.PI/12;function Lb(){const r=document.createElement("canvas");r.width=r.height=1024;const t=r.getContext("2d");t.clearRect(0,0,1024,1024),t.fillStyle="rgba(43,160,176,0.94)",t.beginPath(),t.arc(512,512,465,0,Math.PI*2),t.arc(512,512,338,0,Math.PI*2,!0),t.fill();const e="LET'S FASHION FORWARD  •  LET'S FASHION FORWARD  •  ";t.font="600 45px Arial, sans-serif",t.fillStyle="rgba(255,255,255,0.94)",t.textAlign="center",t.textBaseline="middle";const n=405,i=Math.PI*2/e.length;[...e].forEach((o,a)=>{const l=a*i-Math.PI/2;t.save(),t.translate(512+Math.cos(l)*n,512+Math.sin(l)*n),t.rotate(l+Math.PI/2),t.fillText(o,0,0),t.restore()});const s=new jl(r);return s.colorSpace=Sn,s.anisotropy=12,s}function Yd(r){const t=new Jh;t.moveTo(-.68,-.6),t.lineTo(.5,0),t.lineTo(-.68,.6),t.closePath();const e=new Bl;e.moveTo(-.42,-.34),e.lineTo(.23,0),e.lineTo(-.42,.34),e.closePath(),t.holes.push(e);const n=new ae(new tc(t,{depth:.08,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:3}),new Ci({color:"#ffe789",emissive:"#9d6500",emissiveIntensity:.35,metalness:.72,roughness:.18}));return n.position.x=r,n}class Db{constructor(t,e=8.2){Q(this,"group",new Ai);Q(this,"portalY");this.portalY=e,this.group.position.set(t.x,e,t.z),this.group.scale.setScalar(Xc);const n=new Ai;n.rotation.x=Pb,this.group.add(n);const i=new Jh;i.absarc(0,0,1.78,0,Math.PI*2,!1);const s=new Bl;s.absarc(0,0,1.18,0,Math.PI*2,!0),i.holes.push(s);const o=new ae(new tc(i,{bevelEnabled:!0,bevelSegments:3,bevelSize:.025,bevelThickness:.025,depth:.16}),new Ci({color:"#26223f",clearcoat:1,envMapIntensity:2.2,metalness:.42,opacity:.82,roughness:.08,transparent:!0}));o.position.y=.03,o.rotation.x=Math.PI/2,n.add(o);const a=new ae(new jh(1.18,1.78,128),new Ci({color:"#ffffff",map:Lb(),opacity:.94,roughness:.2,side:di,transparent:!0}));a.position.y=.08,a.rotation.x=-Math.PI/2,n.add(a);const l=new ae(new Qh(1.78,.06,16,128),new Ci({color:"#d7fbff",clearcoat:1,opacity:.72,roughness:.12,transparent:!0}));l.position.y=.08,l.rotation.x=Math.PI/2,n.add(l);const c=new ae(new ec(1,64,48),new Ci({color:"#9b7fbd",clearcoat:1,envMapIntensity:2.2,opacity:.5,roughness:.08,thickness:.8,transparent:!0,transmission:.5}));c.scale.setScalar(1.08),this.group.add(c);const u=new Ai;u.position.set(-.08,.05,.24),u.rotation.x=.02,u.scale.setScalar(.52),u.add(Yd(-.38),Yd(.38)),this.group.add(u)}update(t){const e=Math.sin(t*1.12);this.group.position.y=this.portalY+e*.14*Xc,this.group.rotation.y=Math.sin(t*.24)*.045;const n=Xc*(1+e*.014);this.group.scale.setScalar(n)}}class Ib{constructor(t,e){Q(this,"mesh");Q(this,"baseY");const n=new ec(1,72,52),i=n.attributes.position,s=new H;for(let o=0;o<i.count;o++){s.fromBufferAttribute(i,o);const a=Math.atan2(s.z,s.x),l=s.y,c=(1-l)*.5,u=1+Math.sin(l*11+a*1.6)*.1+Math.sin(l*19-a*.7)*.04;s.x*=u*(.88+c*.22),s.z*=u*(.68+c*.14),s.y*=1.08,s.x+=Math.sin((l+1)*2.4)*.16+.08-l*.06;const h=l*.18,f=s.x*Math.cos(h)-s.z*Math.sin(h),d=s.x*Math.sin(h)+s.z*Math.cos(h);i.setXYZ(o,f,s.y,d)}n.computeVertexNormals(),this.mesh=new ae(n,new Ci({color:"#f6f4f2",envMapIntensity:2.8,metalness:1,roughness:.065})),this.mesh.position.copy(t),this.mesh.scale.copy(e),this.baseY=t.y}update(t,e){this.mesh.rotation.y+=e*.18,this.mesh.position.y=this.baseY+Math.sin(t*1.05)*.045*1.7}}const Ml=.16,Ub=.78,Sl=-.38,ih=.17,Nb=ih-Sl,Yc=Ml/2,Ob=new Set([3,6,12]);function wo(r,t,e){const n=Math.hypot(r,e)/46,i=t/14;return Math.min(1,n*.72+i*.28)}const qd=new Jt;function Fb(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Bs=class Bs{constructor(t=1,e=!1){Q(this,"group",new Ai);Q(this,"icons",[]);Q(this,"buildings",[]);Q(this,"ringMesh");Q(this,"ringCubes",[]);Q(this,"dummy",new on);Q(this,"cubeMat");Q(this,"ringMat");Q(this,"mapMix",{value:0});Q(this,"starryTex",null);Q(this,"themeVariation",1);Q(this,"baseReturn",0);Q(this,"signTexPending",0);Q(this,"onSignTexReady",null);Q(this,"allSigns",[]);Q(this,"floatingSigns",[]);Q(this,"ringFadeAttr");Q(this,"occFrame",0);Q(this,"monoMix",1);Q(this,"skinPos",0);Q(this,"scatter",0);Q(this,"ringWash",.05);Q(this,"dirty",{color:!0,matrix:!0});Q(this,"floatScale",1);Q(this,"portal");Q(this,"chrome");Q(this,"sculptureAnchor",new H(-1.5,0,2.5));Q(this,"groundMat");Q(this,"scrollScatter",0);Q(this,"transitionScatter",0);Q(this,"dissolve",0);Q(this,"portalWave",0);Q(this,"chromeWave",0);Q(this,"lastTime",0);Q(this,"lastFloatUpdate",-1/0);Q(this,"occV",new H);Q(this,"occDir",new H);Q(this,"cA",new Jt);Q(this,"cB",new Jt);Q(this,"cM",new Jt);Q(this,"bgMix",new Jt("#f1f1ef"));Q(this,"signsOpacity",1);this.densityScale=t,this.lowPerf=e,this.build()}build(){const t=Fb(20230116),e=new Wc(.94,.94,.94,2,.04);this.cubeMat=this.lowPerf?new Ci({color:"#ffffff",clearcoat:1,clearcoatRoughness:.08,metalness:.05,roughness:.15,envMapIntensity:1.5}):new Ci({color:"#ffffff",metalness:0,roughness:.06,clearcoat:1,clearcoatRoughness:.06,transmission:.9,thickness:.8,ior:1.45,envMapIntensity:1.3,bumpMap:Bb(),bumpScale:0}),this.starryTex=this.lowPerf?null:zb(),this.lowPerf||(this.cubeMat.onBeforeCompile=g=>{g.uniforms.uMapMix=this.mapMix,g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aUvRect;`).replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
	vMapUv = vMapUv * aUvRect.z + aUvRect.xy;
#endif`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
uniform float uMapMix;`).replace("#include <map_fragment>",`#ifdef USE_MAP
	vec4 tklTexel = texture2D( map, vMapUv );
	diffuseColor.rgb = mix( diffuseColor.rgb, tklTexel.rgb, uMapMix );
#endif`)},this.cubeMat.customProgramCacheKey=()=>"tkl-center-starry");const n=new Tr(.92,.92,.92);this.ringMat=new Ci({metalness:0,roughness:.16,transparent:!0,opacity:.85,envMapIntensity:1.05,clearcoat:.5,clearcoatRoughness:.25});const i=(g,p)=>{const y=new H(g,0,p);return y.lengthSq()<.01&&y.set(1,0,0),y.normalize(),new H(y.x+(t()-.5)*1.2,.6+t()*1.6,y.z+(t()-.5)*1.2).normalize().multiplyScalar(20+t()*32)},s=new Map;for(const g of lg){const p=s.get(g.buildingIndex)??[];p.push(g),s.set(g.buildingIndex,p)}for(const[g,p]of s){const y=p.map(z=>({...z,scatterDir:i(z.x,z.z),angle:Math.atan2(z.z,z.x),floatCluster:-1,wave:wo(z.x,z.y,z.z)})),M=(z,N,U)=>`${z},${N},${U}`,v=new Map;y.forEach((z,N)=>v.set(M(z.x,z.y-.5,z.z),N));const C=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],w=new Set,E=[];for(y.forEach((z,N)=>{Math.round(z.y-.5)===0&&(w.add(N),E.push(N))});E.length;){const z=E.pop(),N=y[z];for(const[U,F,Y]of C){const P=v.get(M(N.x+U,N.y-.5+F,N.z+Y));P!==void 0&&!w.has(P)&&(w.add(P),E.push(P))}}const A=[],S=new Map,x=[];if(y.forEach((z,N)=>{if(w.has(N)||S.has(N))return;const U=A.length;x.push([]),A.push({phase:t()*Math.PI*2,offset:0,down:Sl,up:ih});const F=[N];for(S.set(N,U),x[U].push(N);F.length;){const Y=F.pop(),P=y[Y];for(const[st,dt,Lt]of C){const k=v.get(M(P.x+st,P.y-.5+dt,P.z+Lt));k!==void 0&&!w.has(k)&&!S.has(k)&&(S.set(k,U),x[U].push(k),F.push(k))}}}),S.forEach((z,N)=>{x[z].length>=3&&(y[N].floatCluster=z)}),Ob.has(g)){const z=new Map;for(const F of y){if(F.floatCluster>=0)continue;const Y=F.x+","+F.z,P=Math.round(F.y-.5),st=z.get(Y);st?st.push(P):z.set(Y,[P])}const N=new Map;for(const[F,Y]of z){Y.sort((P,st)=>P-st);for(let P=Y.length-1;P>0;P--)if(Y[P]-Y[P-1]>1){N.set(F,Y[P]);break}}const U=[];if(y.forEach((F,Y)=>{if(F.floatCluster>=0)return;const P=N.get(F.x+","+F.z);P!==void 0&&Math.round(F.y-.5)>=P&&U.push(Y)}),U.length<3){const F=new Map;let Y=0;for(const dt of y){const Lt=Math.round(dt.y-.5);F.set(Lt,(F.get(Lt)??0)+1),Lt>Y&&(Y=Lt)}let P=-1,st=1/0;for(let dt=Math.ceil(Y*.45);dt<=Y-2;dt++){const Lt=F.get(dt)??0;Lt>0&&Lt<st&&(st=Lt,P=dt)}P>0&&(U.length=0,y.forEach((dt,Lt)=>{dt.floatCluster<0&&Math.round(dt.y-.5)>P&&U.push(Lt)}))}if(U.length>=3){const F=A.length;A.push({phase:t()*Math.PI*2,offset:0,down:Sl,up:ih});for(const Y of U)y[Y].floatCluster=F}}if(A.length){const z=new Map;for(const U of y){if(U.floatCluster>=0)continue;const F=U.x+","+U.z,Y=z.get(F);Y?Y.push(U.y):z.set(F,[U.y])}const N=new Array(A.length).fill(1/0);for(const U of y)if(!(U.floatCluster<0))for(const F of z.get(U.x+","+U.z)??[])F<U.y&&(N[U.floatCluster]=Math.min(N[U.floatCluster],U.y-F-1));for(let U=0;U<A.length;U++)A[U].down=-Math.min(-Sl,Math.max(0,N[U])),A[U].up=A[U].down+Nb}const L=e.clone(),I=new Float32Array(y.length*3);for(let z=0;z<y.length;z++){const N=.2+t()*.14;I[z*3]=t()*(1-N),I[z*3+1]=t()*(1-N),I[z*3+2]=N}L.setAttribute("aUvRect",new Os(I,3));const B=new Id(L,this.cubeMat,y.length);B.instanceMatrix.setUsage(zf),B.instanceColor=new Os(new Float32Array(y.length*3),3);const V=new Ai;V.add(B),this.group.add(V),this.buildings.push({index:g,group:V,mesh:B,cubes:y,clusters:A,hasFloaters:A.length>0})}this.buildSigns();const o=7,a=(g,p)=>g>ja.minX-o&&g<ja.maxX+o&&p>ja.minZ-o&&p<ja.maxZ+o,l=(g,p)=>g>2&&g<15&&p>18,c=[],u=new Set,h=(g,p,y)=>{const M=`${g},${p},${y}`;u.has(M)||(u.add(M),c.push({base:new H(g,p,y),scatterDir:i(g,y),angle:Math.atan2(y,g),rand:t(),wave:wo(g,p,y)}))},f=Math.round(38*this.densityScale),d=[];for(let g=0;g<f;g++){let p=0,y=0,M=!1;for(let A=0;A<60&&!M;A++){const S=t()*Math.PI*2,x=24+t()*18;p=Math.round(Math.cos(S)*x),y=Math.round(Math.sin(S)*x*.9),M=!a(p,y)&&!l(p,y)&&d.every(L=>(L.x-p)**2+(L.z-y)**2>(L.r+3.2)**2)}if(!M)continue;const v=2+Math.floor(t()*3),C=2+Math.floor(t()*3),w=Math.hypot(p,y),E=5+Math.min(12,Math.round((w-22)*.55+t()*5));d.push({x:p,z:y,r:Math.max(v,C)});for(let A=0;A<v;A++)for(let S=0;S<C;S++){const x=Math.max(2,Math.round(E*(.55+t()*.5)));for(let L=0;L<x;L++)L>1&&t()<.06||h(p+A-Math.floor(v/2),L+.5,y+S-Math.floor(C/2))}}const m=Math.round(14*this.densityScale);for(let g=0;g<m;g++){const p=t()*Math.PI*2,y=23+t()*16,M=Math.round(Math.cos(p)*y),v=Math.round(Math.sin(p)*y*.9);if(a(M,v)||l(M,v))continue;const C=1+Math.floor(t()*3),w=1+Math.floor(t()*3);for(let E=0;E<C;E++)for(let A=0;A<w;A++)t()>.2&&h(M+E,.5,v+A)}this.ringCubes=c;const _=new Float32Array(c.length).fill(1);this.ringFadeAttr=new Os(_,1),n.setAttribute("aFade",this.ringFadeAttr),this.ringMat.onBeforeCompile=g=>{g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
attribute float aFade;
varying float vFade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
	vFade = aFade;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
varying float vFade;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
	gl_FragColor.a *= vFade;`)},this.ringMat.customProgramCacheKey=()=>"tkl-ring-fade",this.ringMesh=new Id(n,this.ringMat,c.length),this.ringMesh.instanceMatrix.setUsage(zf),this.ringMesh.instanceColor=new Os(new Float32Array(c.length*3),3),this.group.add(this.ringMesh),this.buildSculpture(),this.buildGround(),this.applyMatrices(),this.applyColors(),this.setSignsOpacity(0)}buildSigns(){const t=new ab,e=new Wc(1.92,1.92,Ml,4,.06),n=new Wc(.94,.94,Ml,3,.04),i=new Ci({transparent:!0,opacity:1,clearcoat:1,clearcoatRoughness:.08,color:"#171311",envMapIntensity:1.55,metalness:.34,roughness:.16}),s=[{nx:0,ny:0,nz:1,weight:1},{nx:1,ny:0,nz:0,weight:.85},{nx:-1,ny:0,nz:0,weight:.25},{nx:0,ny:0,nz:-1,weight:.15}],o=[{nx:0,ny:1,nz:0,weight:1,top:!0}],a=l=>l.top?new si(-Math.PI/2,0,0):new si(0,Math.atan2(l.nx,l.nz),0);for(const l of Rb){const c=this.buildings.find(I=>I.index===l.buildingIndex);if(!c)continue;const u=wb[l.buildingIndex]??{x:0,y:0,z:0},h=l.scale<1,f=h?1:2,d=new Map,m=(I,B,V)=>`${Math.round(I)},${Math.round(B)},${Math.round(V)}`;for(const I of c.cubes)d.set(m(I.x,I.y-.5,I.z),I.floatCluster);const _=(I,B,V)=>d.has(m(I,B,V)),g=u.x+l.localPosition[0],p=u.y+l.localPosition[1],y=u.z+l.localPosition[2],M=f===2?[-.5,.5]:[0],v=f===2?[[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]]:[[0,0]];let C=1/0,w=null;const E=l.rotation?o:s;for(const I of E)for(const B of c.cubes){const V=Math.round(B.y-.5);if(!_(B.x+I.nx,V+I.ny,B.z+I.nz))for(const z of M)for(const N of M){const U=I.top||I.nz!==0?B.x+z:B.x,F=I.top?B.z+N:I.nx!==0?B.z+z:B.z,Y=I.top?V:V+N;if(!I.top&&Y<(h?0:.5))continue;let P=!0,st=-2;for(const[Lt,k]of v){const J=I.top||I.nz!==0?U+Lt:U,at=I.top?F+k:I.nx!==0?F+Lt:F,j=I.top?Y:Y+k;if(!_(J,j,at)||_(J+I.nx,j+I.ny,at+I.nz)){P=!1;break}const ht=d.get(m(J,j,at))??-1;if(st===-2)st=ht;else if(st!==ht){P=!1;break}}if(!P)continue;const dt=(U-g)**2+(Y-p)**2+(F-y)**2+(1-I.weight)*26+(I.top?-Y*1.2:0);dt<C&&(C=dt,w={x:U,y:Y,z:F,face:I,cluster:st})}}if(!w)continue;const A=w.face,S=new Ai;S.position.set(w.x+A.nx*(.47+Yc),w.y+.5+A.ny*(.47+Yc),w.z+A.nz*(.47+Yc)),S.rotation.copy(a(A)),S.add(new ae(h?n:e,i)),this.signTexPending++;const x=t.load(l.url,()=>{var I;--this.signTexPending===0&&((I=this.onSignTexReady)==null||I.call(this))},void 0,()=>{var I;--this.signTexPending===0&&((I=this.onSignTexReady)==null||I.call(this))});x.colorSpace=Sn,x.anisotropy=8;const L=new ae(new ts(h?.74:1.5,h?.74:1.5),new oo({map:x,alphaTest:.05,transparent:!0,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));L.position.z=Ml/2+.004,S.add(L),S.userData.wave=wo(w.x,w.y,w.z),S.userData.mount={kind:l.kind,scale:l.scale,cell:[w.x,w.y,w.z],n:[A.nx,A.ny,A.nz]},c.group.add(S),this.allSigns.push(S),w.cluster>=0&&this.floatingSigns.push({holder:S,building:c,cluster:w.cluster,baseY:S.position.y}),!h&&l.kind!=="login"&&this.icons.push({id:`${l.kind}-${l.buildingIndex}`,label:Cb[l.kind],mesh:S,worldPos:S.position.clone()})}}buildSculpture(){this.portal=new Db(this.sculptureAnchor,8.6),this.group.add(this.portal.group),this.chrome=new Ib(new H(this.sculptureAnchor.x,3.5,this.sculptureAnchor.z),new H(1.6,1.4,1)),this.group.add(this.chrome.mesh),this.portalWave=wo(this.sculptureAnchor.x,8.6,this.sculptureAnchor.z),this.chromeWave=wo(this.sculptureAnchor.x,3.5,this.sculptureAnchor.z)}buildGround(){this.groundMat=new kl({color:Eo.mono.ground,roughness:.95,metalness:0});const t=new ae(new Kh(120,64),this.groundMat);t.rotation.x=-Math.PI/2,this.group.add(t)}setMonoMix(t){t=xi.clamp(t,0,1),!(Math.abs(t-this.monoMix)<.004)&&(this.monoMix=t,this.dirty.color=!0,this.updateStarryMix())}setBaseReturn(t){t=xi.clamp(t,0,1),!(Math.abs(t-this.baseReturn)<.004)&&(this.baseReturn=t,this.dirty.color=!0,this.applyThemeMaterial(),this.updateStarryMix())}setSkinPos(t){t=xi.clamp(t,0,sr.length-1),!(Math.abs(t-this.skinPos)<.004)&&(this.skinPos=t,this.dirty.color=!0,this.applyThemeMaterial(),this.updateStarryMix())}updateStarryMix(){const e=Math.max(0,1-Math.abs(this.skinPos-3))*(1-this.monoMix)*(1-this.baseReturn);this.mapMix.value=e;const n=e>.001?this.starryTex:null;this.cubeMat.map!==n&&(this.cubeMat.map=n,this.cubeMat.needsUpdate=!0)}applyThemeMaterial(){if(this.lowPerf)return;const t=Math.floor(this.skinPos),e=this.skinPos-t,n=Bs.THEME_MAT[sr[t]],i=Bs.THEME_MAT[sr[Math.min(t+1,sr.length-1)]],s=Bs.THEME_MAT.glass,o=this.baseReturn,a=(h,f)=>{const d=h+(f-h)*e;return d+(0-d)*0},l=h=>{const f=a(n[h],i[h]);return f+(s[h]-f)*o},c=this.cubeMat;c.metalness=l("metalness"),c.roughness=l("roughness"),c.clearcoat=l("clearcoat"),c.clearcoatRoughness=l("clearcoatRoughness"),c.transmission=l("transmission"),c.envMapIntensity=l("envMapIntensity"),c.bumpScale=l("bumpScale"),c.thickness=l("thickness"),c.ior=l("ior"),c.iridescence=l("iridescence"),c.iridescenceIOR=1.9;const u=l("variation");Math.abs(u-this.themeVariation)>.01&&(this.themeVariation=u,this.dirty.color=!0)}setScatter(t){this.scrollScatter=xi.clamp(t,0,1),this.applyScatter()}setTransitionScatter(t){this.transitionScatter=xi.clamp(t,0,1),this.applyScatter()}setDissolve(t){if(t=xi.clamp(t,0,1),!(Math.abs(t-this.dissolve)<.002)){this.dissolve=t,this.dirty.matrix=!0;for(const[e,n]of[[this.portal.group,this.portalWave],[this.chrome.mesh,this.chromeWave]]){const i=1-this.localDissolve(n);e.visible=i>.01,e.scale.setScalar(Math.max(.001,i))}this.applySignAppearance()}}localDissolve(t){if(this.dissolve<=0)return 0;const e=.78,n=(this.dissolve-t*e)/(1-e);return n<=0?0:n>=1?1:n*n*(3-2*n)}applyScatter(){const t=Math.max(this.scrollScatter,this.transitionScatter);Math.abs(t-this.scatter)<.003||(this.scatter=t,this.dirty.matrix=!0,this.floatScale=1-t)}setRingWash(t){t=xi.clamp(t,0,.8),!(Math.abs(t-this.ringWash)<.01)&&(this.ringWash=t,this.dirty.color=!0)}getSkinPos(){return this.skinPos}update(t){const e=Math.min(t-this.lastTime,.05)||.016;if(this.lastTime=t,this.dirty.matrix&&(this.applyMatrices(),this.dirty.matrix=!1),this.dirty.color&&(this.applyColors(),this.dirty.color=!1),this.scatter<.001&&this.floatScale>.01&&t-this.lastFloatUpdate>=1/30){this.lastFloatUpdate=t;for(const n of this.buildings)if(n.hasFloaters){for(const i of n.clusters){const s=(Math.sin(t*Ub+i.phase)+1)*.5;i.offset=(i.down+(i.up-i.down)*s)*this.floatScale}for(let i=0;i<n.cubes.length;i++){const s=n.cubes[i];if(s.floatCluster<0)continue;this.dummy.position.set(s.x,s.y+n.clusters[s.floatCluster].offset,s.z),this.dummy.rotation.set(0,0,0);const o=this.localDissolve(s.wave);this.dummy.position.y+=o*7,this.dummy.scale.setScalar(Math.max(1e-4,1-o)),this.dummy.updateMatrix(),n.mesh.setMatrixAt(i,this.dummy.matrix)}n.mesh.instanceMatrix.needsUpdate=!0}for(const n of this.floatingSigns)n.holder.position.y=n.baseY+n.building.clusters[n.cluster].offset}this.portal.update(t),this.chrome.update(t,e)}updateOcclusion(t,e){if(!this.ringFadeAttr||this.occFrame++%3!==0)return;this.occDir.copy(e).sub(t);const n=this.occDir.length();if(n<.001)return;this.occDir.divideScalar(n);const i=this.ringFadeAttr.array;let s=!1;for(let o=0;o<this.ringCubes.length;o++){const a=this.ringCubes[o].base;this.occV.copy(a).sub(t);const l=this.occV.dot(this.occDir);let c=1;if(l>1&&l<n-6){const h=Math.sqrt(Math.max(0,this.occV.lengthSq()-l*l)),f=7+l*.22;if(h<f){const d=xi.clamp(h/f,0,1);c=.12+.88*d*d}}const u=i[o];Math.abs(u-c)>.004&&(i[o]=u+(c-u)*.22,s=!0)}s&&(this.ringFadeAttr.needsUpdate=!0)}applyMatrices(){const t=this.scatter,e=t*t*(3-2*t);for(const n of this.buildings){for(let i=0;i<n.cubes.length;i++){const s=n.cubes[i];this.dummy.position.set(s.x+s.scatterDir.x*e,s.y+s.scatterDir.y*e,s.z+s.scatterDir.z*e);const o=e*(s.variation-.9)*20;this.dummy.rotation.set(o,o*1.3,o*.7);const a=this.localDissolve(s.wave);a>0?(this.dummy.position.y+=a*7,this.dummy.scale.setScalar(Math.max(1e-4,1-a))):this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),n.mesh.setMatrixAt(i,this.dummy.matrix)}n.mesh.instanceMatrix.needsUpdate=!0}for(let n=0;n<this.ringCubes.length;n++){const i=this.ringCubes[n];this.dummy.position.set(i.base.x+i.scatterDir.x*e,i.base.y+i.scatterDir.y*e,i.base.z+i.scatterDir.z*e);const s=e*(i.rand-.5)*4;this.dummy.rotation.set(s,s*1.3,s*.7);const o=this.localDissolve(i.wave);o>0?(this.dummy.position.y+=o*7,this.dummy.scale.setScalar(Math.max(1e-4,1-o))):this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.ringMesh.setMatrixAt(n,this.dummy.matrix)}this.ringMesh.instanceMatrix.needsUpdate=!0}centerColor(t,e,n){const i=1+(t.variation-.92)*this.themeVariation;if(e==="glass")n.set(Xd[t.buildingIndex]);else if(e==="vangogh")n.set("#c8d0da");else{const s=bb[e];n.set(s[(t.buildingIndex-1)%s.length])}this.baseReturn>.001&&(qd.set(Xd[t.buildingIndex]),n.lerp(qd,this.baseReturn)),n.multiplyScalar(i)}applyColors(){const t=Math.floor(this.skinPos),e=this.skinPos-t,n=sr[t],i=sr[Math.min(t+1,sr.length-1)],s=Eo.mono;for(const a of this.buildings){const l=a.mesh.instanceColor;for(let c=0;c<a.cubes.length;c++){const u=a.cubes[c];this.centerColor(u,n,this.cA),e>.001&&(this.centerColor(u,i,this.cB),this.cA.lerp(this.cB,e)),this.monoMix>.001&&(To(s,u.angle,u.variation,this.cM),this.cM.lerp($d.set("#fffdf6"),.72),this.cM.multiplyScalar(1.02+u.variation*.06),this.cA.lerp(this.cM,this.monoMix)),l.setXYZ(c,this.cA.r,this.cA.g,this.cA.b)}l.needsUpdate=!0}const o=this.ringMesh.instanceColor;for(let a=0;a<this.ringCubes.length;a++){const l=this.ringCubes[a];To(Eo[n],l.angle,l.rand,this.cA),e>.001&&(To(Eo[i],l.angle,l.rand,this.cB),this.cA.lerp(this.cB,e)),this.baseReturn>.001&&(To(Eo.glass,l.angle,l.rand,this.cB),this.cA.lerp(this.cB,this.baseReturn)),this.cA.lerp(this.bgMix,this.ringWash),this.cA.multiplyScalar(.84),this.monoMix>.001&&(To(s,l.angle,l.rand,this.cM),this.cM.lerp($d.set("#c8ccd4"),.5),this.cM.multiplyScalar(.72),this.cA.lerp(this.cM,this.monoMix)),o.setXYZ(a,this.cA.r,this.cA.g,this.cA.b)}o.needsUpdate=!0}warmUpSigns(t,e,n){const i=this.allSigns.map(s=>s.visible);for(const s of this.allSigns)s.visible=!0,s.traverse(o=>{const a=o.material;a&&a.map&&t.initTexture(a.map)});t.compile(e,n),t.debug.checkShaderErrors=!1,this.allSigns.forEach((s,o)=>s.visible=i[o])}setSignsOpacity(t){t=xi.clamp(t,0,1),!(Math.abs(t-this.signsOpacity)<.01)&&(this.signsOpacity=t,this.applySignAppearance())}applySignAppearance(){var t;for(const e of this.allSigns){const n=(t=e.userData).baseScale??(t.baseScale=e.scale.x),i=this.localDissolve(e.userData.wave??0),s=this.signsOpacity*(1-i);e.visible=s>.02,e.visible&&(e.scale.setScalar(Math.max(.001,n*(.6+.4*this.signsOpacity)*(1-i))),e.traverse(o=>{const a=o.material;a&&"opacity"in a&&(a.opacity=s)}))}}};Q(Bs,"THEME_MAT",{glass:{metalness:0,roughness:.06,clearcoat:1,clearcoatRoughness:.06,transmission:.9,thickness:.8,ior:1.45,envMapIntensity:1.3,bumpScale:0,iridescence:.05,variation:1},mondrian:{metalness:0,roughness:.62,clearcoat:0,clearcoatRoughness:.6,transmission:0,thickness:0,ior:1.4,envMapIntensity:.55,bumpScale:0,iridescence:0,variation:.25},koons:{metalness:1,roughness:.025,clearcoat:1,clearcoatRoughness:.02,transmission:0,thickness:0,ior:2.4,envMapIntensity:3.2,bumpScale:0,iridescence:.85,variation:.7},vangogh:{metalness:.04,roughness:.7,clearcoat:.1,clearcoatRoughness:.55,transmission:0,thickness:0,ior:1.4,envMapIntensity:.55,bumpScale:.85,iridescence:0,variation:.5},dior:{metalness:.82,roughness:.09,clearcoat:1,clearcoatRoughness:.06,transmission:.3,thickness:.55,ior:1.7,envMapIntensity:2.6,bumpScale:0,iridescence:.12,variation:.8}});let rh=Bs;const $d=new Jt;function zb(){const t=document.createElement("canvas");t.width=t.height=1024;const e=t.getContext("2d");let n=18890615;const i=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=e.createLinearGradient(0,0,0,1024);s.addColorStop(0,"#152a52"),s.addColorStop(.55,"#1c3a66"),s.addColorStop(1,"#122040"),e.fillStyle=s,e.fillRect(0,0,1024,1024);const o=["#27498a","#3a64ad","#5b8ac8","#7fa8d8","#2c3f75","#d9c65a"];e.lineCap="round";for(let l=0;l<1400;l++){const c=i()*1024,u=i()*1024,h=6+i()*46,f=i()*Math.PI*2,d=f+.5+i()*1.4,m=o[Math.floor(i()*(i()<.84?5:6))];e.strokeStyle=m,e.globalAlpha=.5+i()*.5,e.lineWidth=3+i()*7,e.beginPath(),e.arc(c,u,h,f,d),e.stroke()}e.globalAlpha=1;for(let l=0;l<26;l++){const c=i()*1024,u=i()*1024*.85,h=14+i()*30,f=e.createRadialGradient(c,u,1,c,u,h*2.2);f.addColorStop(0,"rgba(244,224,130,0.95)"),f.addColorStop(.4,"rgba(230,196,90,0.5)"),f.addColorStop(1,"rgba(230,196,90,0)"),e.fillStyle=f,e.beginPath(),e.arc(c,u,h*2.2,0,Math.PI*2),e.fill(),e.strokeStyle="#f0dc8a",e.lineWidth=3;for(let d=0;d<3;d++)e.globalAlpha=.7-d*.2,e.beginPath(),e.arc(c,u,h*(.5+d*.35),i()*6,i()*6+4),e.stroke();e.globalAlpha=1}const a=new jl(t);return a.colorSpace=Sn,a.anisotropy=4,a}function Bb(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,256,256);let n=20230116;const i=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let o=0;o<90;o++){const a=i()*256,l=i()*256,c=14+i()*36,u=i()*Math.PI*2,h=u+.7+i()*1.6,f=96+Math.floor(i()*96);e.strokeStyle=`rgb(${f},${f},${f})`,e.lineWidth=2.5+i()*4,e.lineCap="round",e.beginPath(),e.arc(a,l,c,u,h),e.stroke()}const s=new jl(t);return s.wrapS=s.wrapT=Fl,s}const cg={"数字街区 · 未来软件猜想":"Digital Block · A vision of future software",返回作品列表:"Back to work",章节导航:"Chapter navigation",数字街区:"Digital Block","2023 · 空间化界面实验":"2023 · Spatial interface experiment",从一片街区开始:"It began with a city block",'它的原型，是北京一片由立方体建筑组成的开放式街区。店铺沿街生长，人群在楼宇之间穿行："逛"这件事，本身就是空间里的体验。':"Its starting point was an open city block in Beijing, built from cubic volumes. Shops line the streets and people move between buildings. Wandering is already a spatial experience.","2023 年，一次难得不设限的机会落在我们手里：不必先算成本，不必迁就现成的方案。于是我们决定，把这种在楼宇之间穿行的体验，原样搬进屏幕。":"In 2023, we were given a rare brief without fixed limits. We did not have to begin with cost or an existing solution, so we brought the experience of moving between buildings directly onto the screen.","街区实景 · 白天":"The district by day","街区实景 · 夜景":"The district at night","开放式街区 · 楼宇之间的动线":"Open district · Paths between buildings","立方体建筑群 · 概念的原点":"Cubic architecture · The origin of the concept","建筑 → 体素":"Architecture → voxels","把街区的立方体建筑拆到最小单位，再用色彩、光和呼吸感重新堆起来。熟悉的空间秩序还在，材质和逻辑已经完全是数字的。":"We reduced the district's cubic architecture to its smallest units, then rebuilt it with colour, light, and rhythm. The familiar spatial order remains, while its material and logic become entirely digital.","远看是一座城市；走近了，每一块都是一个入口。":"From afar it is a city. Up close, every block becomes an entrance.","开屏动画 · 从像素到色彩":"Opening sequence · From pixels to colour","开屏 · 进化之路":"Opening · A path of evolution","按下开屏，画面从黑白像素开始生长，一路快进到色彩鲜明。这是向一款老游戏的致敬，也是项目想说的第一句话：":"The opening grows from monochrome pixels and fast-forwards into vivid colour. It is a tribute to an old game and the project's first statement:","设计从像素时代一路进化到今天，而它还想继续向前。双箭头，就是那记快进键。":"Design has evolved from the pixel era to today, and it still wants to move forward. The double arrow is its fast-forward key.","远景 · 一眼看全":"Far view · Everything at a glance","站在街区上空，功能一览无余：停车、积分、会员、客服、社区。它们不是列表里的条目，而是挂在建筑上的招牌。":"From above the district, parking, points, membership, support, and community are visible at a glance. They are not list items but signs attached to buildings.",'你不是在"找功能"，你是在"认路"。':"You are not finding features. You are learning the place.","全局导航 · 一眼看全":"Global navigation · Everything at a glance","即点即达 · 无需层层进入":"Direct access · No nested menus","远景 ⇄ 近景 · 一键切换":"Far ⇄ near · One-tap switch","首页远景 · 动态演示":"Home far view · Live demo","远景 · 实机演示":"Far view · Live demo","首页近景 · 动态演示":"Home near view · Live demo","近景 · 实机演示":"Near view · Live demo","近景 · 走进去":"Near view · Step inside","视角落下来，城市变成空间。雕塑、悬浮球、楼宇之间的缝隙：功能入口成了可以走近、可以触摸的场景。":"As the viewpoint descends, the city becomes a place. Sculptures, floating forms, and gaps between buildings turn feature entry points into scenes you can approach and touch.","空间俯冲 · 从俯瞰到置身其中":"Spatial dive · From overview to immersion","沉浸交互 · 功能即场景":"Immersive interaction · Features become scenes",换一种色彩:"Change the colour",就是另一座城:"and it becomes another city","蒙德里安的原色、波普的糖果、星夜的蓝与金、高定的香槟：同一座街区，在不同的艺术语言里醒来。城市不必重建，联名可以一直生长。":"Mondrian primaries, pop candy, the blue and gold of a starry night, couture champagne: the same district wakes in different visual languages. The city stays in place while collaborations keep growing.","滚动切换，或点击下方色卡。":"Scroll to switch, or select a palette below.","晶体 · 光学玻璃":"Crystal · Optical glass","蒙德里安 · 原色构成":"Mondrian · Primary composition","波普 · 镜面糖果":"Pop · Mirrored candy","星夜 · 蓝与金":"Starry night · Blue and gold","高定 · 金香槟":"Couture · Golden champagne",接到现实上:"Connect it to reality","把导航接到实景上，路径变成可以看见的东西。体素语言可以一直长下去：新的活动、新的季节、新的联名。":"Connect navigation to the physical world and the route becomes visible. The voxel language can keep growing through new events, seasons, and collaborations.","AR 实景导航":"AR navigation",持续演进:"Continuous evolution",体素语言的持续演进:"The voxel language keeps evolving","2023 · 后记":"2023 · Afterword",一份写给未来的草稿:"A draft addressed to the future","那一年的许多个深夜，办公室的灯一直亮着，笑声也没停过。没有人谈成本，没有人谈边界：我们只是想看看，软件还能长成什么样子。":"Through many late nights that year, the office lights stayed on and the laughter never stopped. Nobody talked about cost or boundaries. We only wanted to see what software could become.","后来我常常想起它：想起页面可以是场所，功能可以是风景，想起一群人把天马行空当作日常的那段时间。":"I still think about it: pages becoming places, features becoming landscapes, and a group of people who treated wild ideas as part of everyday work.",'双箭头的意思是"快进"。它至今仍指着前方。':"The double arrow means fast-forward. It still points ahead.","回到街区上空 ↑":"Return above the district ↑","2023 · 一次不设限的提案 · 一座可以走进去的城市":"2023 · An open brief · A city you can enter","如果软件不再是一张张页面，而是一座可以走进去的城市，会是什么样子？":"What if software stopped behaving like pages and became a city you could enter?","向下滚动，进入街区":"Scroll down to enter the district",界面落地:"Making the interface real","概念要能落地才算成立。从首页到会员、积分、停车，每一屏都在同一套体素语言里，该有的效率一点没少。":"A concept only works when it can ship. From home to membership, points, and parking, every screen shares the same voxel language without losing efficiency.","首页 · 远景":"Home · Far view","首页 · 近景":"Home · Near view","会员码 · 远景":"Member code · Far view","会员码 · 近景":"Member code · Near view","活动 · 远景":"Events · Far view","活动 · 近景":"Events · Near view",会员中心:"Member centre",会员信息编辑:"Edit member profile","会员 · 信息编辑":"Member · Edit profile",积分兑换:"Points exchange",积分记录:"Points history","积分 · 兑换记录":"Points · Exchange history","停车场 车辆信息":"Parking · Vehicle details","停车场 · 车辆信息":"Parking · Vehicle details","停车场 无车辆":"Parking · No vehicle","停车场 · 无车辆":"Parking · No vehicle",开场:"Opening",起点:"Origin",概念:"Concept",开屏:"Intro",远景:"Far view",近景:"Near view",界面:"Interface",延展:"Extension",演进:"Evolution",后记:"Afterword",会员客服:"Member support",会员社区:"Member community",停车服务:"Parking service",会员积分:"Member points",会员码:"Member code"},kb={...cg,"数字街区 · 未来软件猜想":"Quartier numérique · Une vision du logiciel futur",返回作品列表:"Retour aux projets",章节导航:"Navigation des chapitres",数字街区:"Quartier numérique","2023 · 空间化界面实验":"2023 · Expérience d'interface spatiale",从一片街区开始:"Tout commence par un quartier",'它的原型，是北京一片由立方体建筑组成的开放式街区。店铺沿街生长，人群在楼宇之间穿行："逛"这件事，本身就是空间里的体验。':"Le point de départ est un quartier ouvert de Pékin, composé de volumes cubiques. Les boutiques bordent les rues et les visiteurs circulent entre les bâtiments. Flâner est déjà une expérience spatiale.","2023 年，一次难得不设限的机会落在我们手里：不必先算成本，不必迁就现成的方案。于是我们决定，把这种在楼宇之间穿行的体验，原样搬进屏幕。":"En 2023, nous avons reçu un brief rare, sans limites imposées. Sans devoir partir du coût ni d'une solution existante, nous avons transposé à l'écran le plaisir de circuler entre les bâtiments.","街区实景 · 白天":"Le quartier de jour","街区实景 · 夜景":"Le quartier de nuit","开放式街区 · 楼宇之间的动线":"Quartier ouvert · Parcours entre les bâtiments","立方体建筑群 · 概念的原点":"Architecture cubique · Origine du concept","建筑 → 体素":"Architecture → voxels","把街区的立方体建筑拆到最小单位，再用色彩、光和呼吸感重新堆起来。熟悉的空间秩序还在，材质和逻辑已经完全是数字的。":"Nous avons réduit l'architecture cubique du quartier à ses plus petites unités, puis nous l'avons reconstruite avec de la couleur, de la lumière et du rythme. L'ordre spatial reste familier, tandis que la matière et la logique deviennent entièrement numériques.","远看是一座城市；走近了，每一块都是一个入口。":"De loin, c'est une ville. De près, chaque bloc devient une entrée.","开屏动画 · 从像素到色彩":"Séquence d'ouverture · Du pixel à la couleur","开屏 · 进化之路":"Ouverture · Une voie d'évolution","按下开屏，画面从黑白像素开始生长，一路快进到色彩鲜明。这是向一款老游戏的致敬，也是项目想说的第一句话：":"L'ouverture naît de pixels monochromes puis accélère jusqu'à la couleur vive. C'est un hommage à un ancien jeu et la première phrase du projet :","设计从像素时代一路进化到今天，而它还想继续向前。双箭头，就是那记快进键。":"Le design a évolué depuis l'ère du pixel et veut encore avancer. La double flèche est sa touche d'avance rapide.","远景 · 一眼看全":"Vue générale · Tout voir d'un regard","站在街区上空，功能一览无余：停车、积分、会员、客服、社区。它们不是列表里的条目，而是挂在建筑上的招牌。":"Au-dessus du quartier, parking, points, adhésion, assistance et communauté apparaissent d'un regard. Ce ne sont plus des éléments de liste, mais des enseignes fixées aux bâtiments.",'你不是在"找功能"，你是在"认路"。':"Vous ne cherchez pas des fonctions. Vous apprenez le lieu.","全局导航 · 一眼看全":"Navigation globale · Tout voir d'un regard","即点即达 · 无需层层进入":"Accès direct · Aucun menu imbriqué","远景 ⇄ 近景 · 一键切换":"Vue générale ⇄ proche · Un seul geste","首页远景 · 动态演示":"Accueil, vue générale · Démonstration","远景 · 实机演示":"Vue générale · Démonstration","首页近景 · 动态演示":"Accueil, vue proche · Démonstration","近景 · 实机演示":"Vue proche · Démonstration","近景 · 走进去":"Vue proche · Entrer dans la ville","视角落下来，城市变成空间。雕塑、悬浮球、楼宇之间的缝隙：功能入口成了可以走近、可以触摸的场景。":"Lorsque le point de vue descend, la ville devient un lieu. Sculptures, formes suspendues et passages entre les bâtiments transforment les fonctions en scènes que l'on peut approcher et toucher.","空间俯冲 · 从俯瞰到置身其中":"Plongée spatiale · Du survol à l'immersion","沉浸交互 · 功能即场景":"Interaction immersive · Les fonctions deviennent des scènes",换一种色彩:"Changer la couleur",就是另一座城:"et découvrir une autre ville","蒙德里安的原色、波普的糖果、星夜的蓝与金、高定的香槟：同一座街区，在不同的艺术语言里醒来。城市不必重建，联名可以一直生长。":"Les primaires de Mondrian, les bonbons pop, le bleu et l'or d'une nuit étoilée, le champagne de la haute couture : le même quartier s'éveille dans différents langages visuels. La ville reste en place et les collaborations continuent de grandir.","滚动切换，或点击下方色卡。":"Faites défiler ou choisissez une palette ci-dessous.","晶体 · 光学玻璃":"Cristal · Verre optique","蒙德里安 · 原色构成":"Mondrian · Composition primaire","波普 · 镜面糖果":"Pop · Bonbon miroir","星夜 · 蓝与金":"Nuit étoilée · Bleu et or","高定 · 金香槟":"Haute couture · Champagne doré",接到现实上:"Relier le projet au réel","把导航接到实景上，路径变成可以看见的东西。体素语言可以一直长下去：新的活动、新的季节、新的联名。":"Reliée au monde réel, la navigation rend le trajet visible. Le langage voxel peut continuer de grandir avec de nouveaux événements, de nouvelles saisons et de nouvelles collaborations.","AR 实景导航":"Navigation en réalité augmentée",持续演进:"Évolution continue",体素语言的持续演进:"Le langage voxel continue d'évoluer","2023 · 后记":"2023 · Postface",一份写给未来的草稿:"Une esquisse adressée au futur","那一年的许多个深夜，办公室的灯一直亮着，笑声也没停过。没有人谈成本，没有人谈边界：我们只是想看看，软件还能长成什么样子。":"Pendant de nombreuses nuits cette année-là, les lumières du bureau sont restées allumées et les rires n'ont pas cessé. Personne ne parlait de coût ni de limites. Nous voulions seulement voir ce que le logiciel pouvait devenir.","后来我常常想起它：想起页面可以是场所，功能可以是风景，想起一群人把天马行空当作日常的那段时间。":"J'y pense encore : des pages devenues lieux, des fonctions devenues paysages, et un groupe de personnes pour qui les idées les plus libres faisaient partie du quotidien.",'双箭头的意思是"快进"。它至今仍指着前方。':"La double flèche signifie avance rapide. Elle pointe toujours vers l'avant.","回到街区上空 ↑":"Revenir au-dessus du quartier ↑","2023 · 一次不设限的提案 · 一座可以走进去的城市":"2023 · Un brief ouvert · Une ville à parcourir","如果软件不再是一张张页面，而是一座可以走进去的城市，会是什么样子？":"Et si le logiciel cessait d'être une suite de pages pour devenir une ville à parcourir ?","向下滚动，进入街区":"Faites défiler pour entrer dans le quartier",界面落地:"Donner corps à l'interface","概念要能落地才算成立。从首页到会员、积分、停车，每一屏都在同一套体素语言里，该有的效率一点没少。":"Un concept ne vaut que s'il peut être livré. De l'accueil à l'adhésion, aux points et au parking, chaque écran partage le même langage voxel sans perdre en efficacité.","首页 · 远景":"Accueil · Vue générale","首页 · 近景":"Accueil · Vue proche","会员码 · 远景":"Code membre · Vue générale","会员码 · 近景":"Code membre · Vue proche","活动 · 远景":"Événements · Vue générale","活动 · 近景":"Événements · Vue proche",会员中心:"Espace membre",会员信息编辑:"Modifier le profil membre","会员 · 信息编辑":"Membre · Modifier le profil",积分兑换:"Échange de points",积分记录:"Historique des points","积分 · 兑换记录":"Points · Historique des échanges","停车场 车辆信息":"Parking · Informations du véhicule","停车场 · 车辆信息":"Parking · Informations du véhicule","停车场 无车辆":"Parking · Aucun véhicule","停车场 · 无车辆":"Parking · Aucun véhicule",开场:"Ouverture",起点:"Origine",概念:"Concept",开屏:"Introduction",远景:"Vue générale",近景:"Vue proche",界面:"Interface",延展:"Extension",演进:"Évolution",后记:"Postface",会员客服:"Assistance membre",会员社区:"Communauté des membres",停车服务:"Service de stationnement",会员积分:"Points membre",会员码:"Code membre"};let ug={};function bl(r){return ug[r]??r}function Hb(){let r="zh";try{const n=window.localStorage.getItem("creer-locale");(n==="en"||n==="fr"||n==="zh")&&(r=n)}catch{}ug=r==="en"?cg:r==="fr"?kb:{},document.documentElement.lang=r==="zh"?"zh-CN":r,document.title=bl(document.title);const t=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),e=[];for(;t.nextNode();)e.push(t.currentNode);for(const n of e){const i=n.textContent??"",s=i.trim(),o=bl(s);s&&o!==s&&(n.textContent=i.replace(s,o))}return document.querySelectorAll("[aria-label], [alt], [data-title]").forEach(n=>{for(const i of["aria-label","alt","data-title"]){const s=n.getAttribute(i);s&&n.setAttribute(i,bl(s))}}),r}const Oe=(r,t,e,n,i,s)=>({pos:new H(r,t,e),target:new H(n,i,s)});class Vb{constructor(t){Q(this,"scene",new Qm);Q(this,"camera");Q(this,"renderer");Q(this,"city");Q(this,"ready");Q(this,"resolveReady");Q(this,"desired",Oe(43,27,52,0,6,0));Q(this,"currentPos",new H().copy(this.desired.pos));Q(this,"currentTarget",new H().copy(this.desired.target));Q(this,"mouse",new Et);Q(this,"parallax",new Et);Q(this,"clock",new fb);Q(this,"labelEls",new Map);Q(this,"labelPos",new Map);Q(this,"labelsOn",!1);Q(this,"v",new H);Q(this,"autoSpin",0);Q(this,"spinBlend",0);Q(this,"spinAngle",0);Q(this,"onResize",()=>this.resize());Q(this,"onVisibilityChange",()=>{this.renderer.setAnimationLoop(document.hidden?null:()=>this.tick())});Q(this,"onPointerMove",t=>{this.mouse.set(t.clientX/innerWidth*2-1,t.clientY/innerHeight*2-1)});const e=window.matchMedia("(max-width: 820px)").matches;this.ready=new Promise(m=>this.resolveReady=m),this.renderer=new b1({canvas:t,antialias:!e,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e?1:1.5)),this.renderer.toneMapping=bm,this.renderer.toneMappingExposure=1.12,this.scene.background=new Jt("#f1f1ef"),this.scene.fog=new qh("#f1f1ef",130,250),this.camera=new kn(42,1,.1,400);const n=new ju(this.renderer),i=new db,s=new ts(12,12),o=[{color:"#fff0d5",intensity:4.4,position:[0,12,4],rotation:[Math.PI/2,0,0],scale:[1.8,1,1]},{color:"#ffc38f",intensity:3.25,position:[-11,6,-2],rotation:[0,Math.PI/2,0],scale:[1.2,1,1]},{color:"#d88465",intensity:2.65,position:[11,5,-4],rotation:[0,-Math.PI/2,0],scale:[1,.9,1]},{color:"#ffe2be",intensity:3.1,position:[0,6,12],rotation:[0,0,0],scale:[1.4,.8,1]}];for(const m of o){const _=new ae(s,new oo({color:new Jt(m.color).multiplyScalar(m.intensity),side:di,toneMapped:!1}));_.position.set(m.position[0],m.position[1],m.position[2]),_.rotation.set(m.rotation[0],m.rotation[1],m.rotation[2]),_.scale.set(m.scale[0],m.scale[1],m.scale[2]),i.add(_)}this.scene.environment=n.fromScene(i,.055).texture,n.dispose();const a=new Vd("#fff2e0",2.1);a.position.set(30,50,20),this.scene.add(a);const l=new Vd("#cfe0ff",.7);l.position.set(-24,30,-28),this.scene.add(l),this.scene.add(new hb("#ffffff",.42)),this.city=new rh(e?.6:1,e),this.scene.add(this.city.group);const c=document.createElement("canvas");c.width=c.height=256;const u=c.getContext("2d"),h=u.createRadialGradient(128,128,20,128,128,128);h.addColorStop(0,"rgba(20,18,26,0.34)"),h.addColorStop(.55,"rgba(20,18,26,0.16)"),h.addColorStop(1,"rgba(20,18,26,0)"),u.fillStyle=h,u.fillRect(0,0,256,256);const f=new jl(c),d=new ae(new ts(72,66),new oo({map:f,transparent:!0,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(0,.015,0),this.scene.add(d),this.buildIconLabels(),this.city.onSignTexReady=()=>{this.city.warmUpSigns(this.renderer,this.scene,this.camera),this.renderer.render(this.scene,this.camera),this.resolveReady()},window.addEventListener("resize",this.onResize),window.addEventListener("pointermove",this.onPointerMove),document.addEventListener("visibilitychange",this.onVisibilityChange),this.resize(),this.renderer.setAnimationLoop(()=>this.tick())}setAutoSpin(t){this.autoSpin=xi.clamp(t,0,1)}freezeSpin(){const t=this.spinAngle*this.spinBlend;if(this.autoSpin=0,this.spinAngle=0,this.spinBlend=0,Math.abs(t)<1e-4)return;const e=Math.cos(t),n=Math.sin(t),i=s=>{const o=s.x-this.currentTarget.x,a=s.z-this.currentTarget.z;s.x=this.currentTarget.x+o*e-a*n,s.z=this.currentTarget.z+o*n+a*e};i(this.currentPos),i(this.desired.pos)}snapCamera(){this.currentPos.copy(this.desired.pos),this.currentTarget.copy(this.desired.target),this.spinAngle=0,this.spinBlend=0}destroy(){var t;this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.onResize),window.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("visibilitychange",this.onVisibilityChange),this.labelEls.forEach(e=>e.remove()),this.labelEls.clear(),this.scene.traverse(e=>{const n=e;n.geometry&&n.geometry.dispose();const i=n.material;if(!i)return;const s=Array.isArray(i)?i:[i];for(const o of s){for(const a of Object.values(o))a&&a.isTexture&&a.dispose();o.dispose()}}),(t=this.scene.environment)==null||t.dispose(),this.renderer.dispose()}buildIconLabels(){const t=document.getElementById("icon-labels");for(const e of this.city.icons){const n=document.createElement("div");n.className="icon-label",n.textContent=bl(e.label),t.appendChild(n),this.labelEls.set(e.id,n),this.labelPos.set(e.id,{x:0,y:0,on:!1})}}setLabelsOn(t){t!==this.labelsOn&&(this.labelsOn=t,t||(this.labelEls.forEach(e=>e.classList.remove("is-on")),this.labelPos.forEach(e=>e.on=!1)))}resize(){const t=innerWidth,e=innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}tick(){const t=Math.min(this.clock.getDelta(),.05)||.016,e=this.clock.elapsedTime,n=1-Math.exp(-t*3.4);this.parallax.lerp(this.mouse,1-Math.exp(-t*2.5)),this.currentPos.lerp(this.desired.pos,n),this.currentTarget.lerp(this.desired.target,n);const i=this.currentPos.distanceTo(this.currentTarget),s=this.parallax.x*Math.min(2.4,i*.04),o=-this.parallax.y*Math.min(1.4,i*.025);this.camera.position.copy(this.currentPos),this.spinBlend+=(this.autoSpin-this.spinBlend)*(1-Math.exp(-t*1.8)),this.autoSpin>.5?this.spinAngle+=t*.05:this.spinBlend<.002&&(this.spinAngle=0);const a=this.spinAngle*this.spinBlend;if(Math.abs(a)>1e-4){const l=this.camera.position.x-this.currentTarget.x,c=this.camera.position.z-this.currentTarget.z,u=Math.cos(a),h=Math.sin(a);this.camera.position.x=this.currentTarget.x+l*u-c*h,this.camera.position.z=this.currentTarget.z+l*h+c*u}if(this.camera.position.x+=s,this.camera.position.y+=o,this.camera.lookAt(this.currentTarget),this.city.update(e),this.city.updateOcclusion(this.camera.position,this.currentTarget),this.labelsOn){const l=1-Math.exp(-t*11);for(const c of this.city.icons){const u=this.labelEls.get(c.id),h=this.labelPos.get(c.id);if(this.v.copy(c.worldPos),this.v.y+=1.4,this.v.project(this.camera),this.v.z>1||Math.abs(this.v.x)>1.05||Math.abs(this.v.y)>1.05){u.classList.remove("is-on"),h.on=!1;continue}const d=(this.v.x*.5+.5)*innerWidth,m=(-this.v.y*.5+.5)*innerHeight;h.on?(h.x+=(d-h.x)*l,h.y+=(m-h.y)*l):(h.x=d,h.y=m,h.on=!0),u.classList.add("is-on"),u.style.transform=`translate3d(${h.x.toFixed(2)}px, ${h.y.toFixed(2)}px, 0) translate(-50%, -130%)`}}this.renderer.render(this.scene,this.camera)}}function Gb(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Wb(r,t,e){return t&&Gb(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nn,El,Gn,hr,fr,Ys,hg,Fr,qs,fg,Wi,fi,dg,pg=function(){return nn||typeof window<"u"&&(nn=window.gsap)&&nn.registerPlugin&&nn},mg=1,zs=[],oe=[],Pi=[],$o=Date.now,sh=function(t,e){return e},Xb=function(){var t=qs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,oe),i.push.apply(i,Pi),oe=n,Pi=i,sh=function(o,a){return e[o](a)}},_r=function(t,e){return~Pi.indexOf(t)&&Pi[Pi.indexOf(t)+1][e]},Zo=function(t){return!!~fg.indexOf(t)},_n=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},mn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},tl="scrollLeft",el="scrollTop",oh=function(){return Wi&&Wi.isPressed||oe.cache++},Hl=function(t,e){var n=function i(s){if(s||s===0){mg&&(Gn.history.scrollRestoration="manual");var o=Wi&&Wi.isPressed;s=i.v=Math.round(s)||(Wi&&Wi.iOS?1:0),t(s),i.cacheID=oe.cache,o&&sh("ss",s)}else(e||oe.cache!==i.cacheID||sh("ref"))&&(i.cacheID=oe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},bn={s:tl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Hl(function(r){return arguments.length?Gn.scrollTo(r,$e.sc()):Gn.pageXOffset||hr[tl]||fr[tl]||Ys[tl]||0})},$e={s:el,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:bn,sc:Hl(function(r){return arguments.length?Gn.scrollTo(bn.sc(),r):Gn.pageYOffset||hr[el]||fr[el]||Ys[el]||0})},wn=function(t,e){return(e&&e._ctx&&e._ctx.selector||nn.utils.toArray)(t)[0]||(typeof t=="string"&&nn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Yb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},br=function(t,e){var n=e.s,i=e.sc;Zo(t)&&(t=hr.scrollingElement||fr);var s=oe.indexOf(t),o=i===$e.sc?1:2;!~s&&(s=oe.push(t)-1),oe[s+o]||_n(t,"scroll",oh);var a=oe[s+o],l=a||(oe[s+o]=Hl(_r(t,n),!0)||(Zo(t)?i:Hl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=nn.getProperty(t,"scrollBehavior")==="smooth"),l},ah=function(t,e,n){var i=t,s=t,o=$o(),a=o,l=e||50,c=Math.max(500,l*3),u=function(m,_){var g=$o();_||g-o>l?(s=i,i=m,a=o,o=g):n?i+=m:i=s+(m-s)/(g-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(m){var _=a,g=s,p=$o();return(m||m===0)&&m!==i&&u(m),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Ao=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Zd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},gg=function(){qs=nn.core.globals().ScrollTrigger,qs&&qs.core&&Xb()},_g=function(t){return nn=t||pg(),!El&&nn&&typeof document<"u"&&document.body&&(Gn=window,hr=document,fr=hr.documentElement,Ys=hr.body,fg=[Gn,hr,fr,Ys],nn.utils.clamp,dg=nn.core.context||function(){},Fr="onpointerenter"in Ys?"pointer":"mouse",hg=He.isTouch=Gn.matchMedia&&Gn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Gn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=He.eventTypes=("ontouchstart"in fr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in fr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return mg=0},500),El=1),qs||gg(),El};bn.op=$e;oe.cache=0;var He=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){El||_g(nn)||console.warn("Please gsap.registerPlugin(Observer)"),qs||gg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,_=n.event,g=n.onDragStart,p=n.onDragEnd,y=n.onDrag,M=n.onPress,v=n.onRelease,C=n.onRight,w=n.onLeft,E=n.onUp,A=n.onDown,S=n.onChangeX,x=n.onChangeY,L=n.onChange,I=n.onToggleX,B=n.onToggleY,V=n.onHover,z=n.onHoverEnd,N=n.onMove,U=n.ignoreCheck,F=n.isNormalizer,Y=n.onGestureStart,P=n.onGestureEnd,st=n.onWheel,dt=n.onEnable,Lt=n.onDisable,k=n.onClick,J=n.scrollSpeed,at=n.capture,j=n.allowClicks,ht=n.lockAxis,_t=n.onLockAxis;this.target=a=wn(a)||fr,this.vars=n,d&&(d=nn.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,J=J||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Gn.getComputedStyle(Ys).lineHeight)||22);var It,Gt,nt,it,D,Ct,lt,G=this,ut=0,Bt=0,wt=n.passive||!u&&n.passive!==!1,R=br(a,bn),b=br(a,$e),q=R(),tt=b(),rt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&fi[0]==="pointerdown",et=Zo(a),vt=a.ownerDocument||hr,mt=[0,0,0],Mt=[0,0,0],$t=0,ct=function(){return $t=$o()},gt=function(Ot,te){return(G.event=Ot)&&d&&Yb(Ot.target,d)||te&&rt&&Ot.pointerType!=="touch"||U&&U(Ot,te)},Vt=function(){G._vx.reset(),G._vy.reset(),Gt.pause(),h&&h(G)},Ht=function(){var Ot=G.deltaX=Zd(mt),te=G.deltaY=Zd(Mt),Tt=Math.abs(Ot)>=i,Zt=Math.abs(te)>=i;L&&(Tt||Zt)&&L(G,Ot,te,mt,Mt),Tt&&(C&&G.deltaX>0&&C(G),w&&G.deltaX<0&&w(G),S&&S(G),I&&G.deltaX<0!=ut<0&&I(G),ut=G.deltaX,mt[0]=mt[1]=mt[2]=0),Zt&&(A&&G.deltaY>0&&A(G),E&&G.deltaY<0&&E(G),x&&x(G),B&&G.deltaY<0!=Bt<0&&B(G),Bt=G.deltaY,Mt[0]=Mt[1]=Mt[2]=0),(it||nt)&&(N&&N(G),nt&&(g&&nt===1&&g(G),y&&y(G),nt=0),it=!1),Ct&&!(Ct=!1)&&_t&&_t(G),D&&(st(G),D=!1),It=0},Pt=function(Ot,te,Tt){mt[Tt]+=Ot,Mt[Tt]+=te,G._vx.update(Ot),G._vy.update(te),c?It||(It=requestAnimationFrame(Ht)):Ht()},Qt=function(Ot,te){ht&&!lt&&(G.axis=lt=Math.abs(Ot)>Math.abs(te)?"x":"y",Ct=!0),lt!=="y"&&(mt[2]+=Ot,G._vx.update(Ot,!0)),lt!=="x"&&(Mt[2]+=te,G._vy.update(te,!0)),c?It||(It=requestAnimationFrame(Ht)):Ht()},Wt=function(Ot){if(!gt(Ot,1)){Ot=Ao(Ot,u);var te=Ot.clientX,Tt=Ot.clientY,Zt=te-G.x,Ft=Tt-G.y,qt=G.isDragging;G.x=te,G.y=Tt,(qt||(Zt||Ft)&&(Math.abs(G.startX-te)>=s||Math.abs(G.startY-Tt)>=s))&&(nt||(nt=qt?2:1),qt||(G.isDragging=!0),Qt(Zt,Ft))}},ce=G.onPress=function(Rt){gt(Rt,1)||Rt&&Rt.button||(G.axis=lt=null,Gt.pause(),G.isPressed=!0,Rt=Ao(Rt),ut=Bt=0,G.startX=G.x=Rt.clientX,G.startY=G.y=Rt.clientY,G._vx.reset(),G._vy.reset(),_n(F?a:vt,fi[1],Wt,wt,!0),G.deltaX=G.deltaY=0,M&&M(G))},O=G.onRelease=function(Rt){if(!gt(Rt,1)){mn(F?a:vt,fi[1],Wt,!0);var Ot=!isNaN(G.y-G.startY),te=G.isDragging,Tt=te&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Zt=Ao(Rt);!Tt&&Ot&&(G._vx.reset(),G._vy.reset(),u&&j&&nn.delayedCall(.08,function(){if($o()-$t>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(vt.createEvent){var Ft=vt.createEvent("MouseEvents");Ft.initMouseEvent("click",!0,!0,Gn,1,Zt.screenX,Zt.screenY,Zt.clientX,Zt.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(Ft)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&te&&!F&&Gt.restart(!0),nt&&Ht(),p&&te&&p(G),v&&v(G,Tt)}},yt=function(Ot){return Ot.touches&&Ot.touches.length>1&&(G.isGesturing=!0)&&Y(Ot,G.isDragging)},K=function(){return(G.isGesturing=!1)||P(G)},ot=function(Ot){if(!gt(Ot)){var te=R(),Tt=b();Pt((te-q)*J,(Tt-tt)*J,1),q=te,tt=Tt,h&&Gt.restart(!0)}},xt=function(Ot){if(!gt(Ot)){Ot=Ao(Ot,u),st&&(D=!0);var te=(Ot.deltaMode===1?l:Ot.deltaMode===2?Gn.innerHeight:1)*m;Pt(Ot.deltaX*te,Ot.deltaY*te,0),h&&!F&&Gt.restart(!0)}},St=function(Ot){if(!gt(Ot)){var te=Ot.clientX,Tt=Ot.clientY,Zt=te-G.x,Ft=Tt-G.y;G.x=te,G.y=Tt,it=!0,h&&Gt.restart(!0),(Zt||Ft)&&Qt(Zt,Ft)}},Xt=function(Ot){G.event=Ot,V(G)},he=function(Ot){G.event=Ot,z(G)},Ne=function(Ot){return gt(Ot)||Ao(Ot,u)&&k(G)};Gt=G._dc=nn.delayedCall(f||.25,Vt).pause(),G.deltaX=G.deltaY=0,G._vx=ah(0,50,!0),G._vy=ah(0,50,!0),G.scrollX=R,G.scrollY=b,G.isDragging=G.isGesturing=G.isPressed=!1,dg(this),G.enable=function(Rt){return G.isEnabled||(_n(et?vt:a,"scroll",oh),o.indexOf("scroll")>=0&&_n(et?vt:a,"scroll",ot,wt,at),o.indexOf("wheel")>=0&&_n(a,"wheel",xt,wt,at),(o.indexOf("touch")>=0&&hg||o.indexOf("pointer")>=0)&&(_n(a,fi[0],ce,wt,at),_n(vt,fi[2],O),_n(vt,fi[3],O),j&&_n(a,"click",ct,!0,!0),k&&_n(a,"click",Ne),Y&&_n(vt,"gesturestart",yt),P&&_n(vt,"gestureend",K),V&&_n(a,Fr+"enter",Xt),z&&_n(a,Fr+"leave",he),N&&_n(a,Fr+"move",St)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=it=nt=!1,G._vx.reset(),G._vy.reset(),q=R(),tt=b(),Rt&&Rt.type&&ce(Rt),dt&&dt(G)),G},G.disable=function(){G.isEnabled&&(zs.filter(function(Rt){return Rt!==G&&Zo(Rt.target)}).length||mn(et?vt:a,"scroll",oh),G.isPressed&&(G._vx.reset(),G._vy.reset(),mn(F?a:vt,fi[1],Wt,!0)),mn(et?vt:a,"scroll",ot,at),mn(a,"wheel",xt,at),mn(a,fi[0],ce,at),mn(vt,fi[2],O),mn(vt,fi[3],O),mn(a,"click",ct,!0),mn(a,"click",Ne),mn(vt,"gesturestart",yt),mn(vt,"gestureend",K),mn(a,Fr+"enter",Xt),mn(a,Fr+"leave",he),mn(a,Fr+"move",St),G.isEnabled=G.isPressed=G.isDragging=!1,Lt&&Lt(G))},G.kill=G.revert=function(){G.disable();var Rt=zs.indexOf(G);Rt>=0&&zs.splice(Rt,1),Wi===G&&(Wi=0)},zs.push(G),F&&Zo(a)&&(Wi=G),G.enable(_)},Wb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();He.version="3.15.0";He.create=function(r){return new He(r)};He.register=_g;He.getAll=function(){return zs.slice()};He.getById=function(r){return zs.filter(function(t){return t.vars.id===r})[0]};pg()&&nn.registerPlugin(He);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ut,Ls,se,ve,Hn,_e,rf,Vl,_a,Ko,No,nl,cn,nc,lh,yn,Kd,Jd,Ds,vg,qc,xg,xn,ch,yg,Mg,or,uh,sf,$s,of,Jo,hh,$c,il=1,un=Date.now,Zc=un(),ri=0,Oo=0,jd=function(t,e,n){var i=zn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Qd=function(t,e){return e&&(!zn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},qb=function r(){return Oo&&requestAnimationFrame(r)},tp=function(){return nc=1},ep=function(){return nc=0},Mi=function(t){return t},Fo=function(t){return Math.round(t*1e5)/1e5||0},Sg=function(){return typeof window<"u"},bg=function(){return Ut||Sg()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},ns=function(t){return!!~rf.indexOf(t)},Eg=function(t){return(t==="Height"?of:se["inner"+t])||Hn["client"+t]||_e["client"+t]},Tg=function(t){return _r(t,"getBoundingClientRect")||(ns(t)?function(){return Rl.width=se.innerWidth,Rl.height=of,Rl}:function(){return Vi(t)})},$b=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=_r(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Eg(s):t["client"+s])||0}},Zb=function(t,e){return!e||~Pi.indexOf(t)?Tg(t):function(){return Rl}},Ri=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=_r(t,n))?o()-Tg(t)()[s]:ns(t)?(Hn[n]||_e[n])-Eg(i):t[n]-t["offset"+i])},rl=function(t,e){for(var n=0;n<Ds.length;n+=3)(!e||~e.indexOf(Ds[n+1]))&&t(Ds[n],Ds[n+1],Ds[n+2])},zn=function(t){return typeof t=="string"},fn=function(t){return typeof t=="function"},zo=function(t){return typeof t=="number"},zr=function(t){return typeof t=="object"},Co=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ws=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},As=Math.abs,wg="left",Ag="top",af="right",lf="bottom",Zr="width",Kr="height",jo="Right",Qo="Left",ta="Top",ea="Bottom",We="padding",ti="margin",lo="Width",cf="Height",qe="px",ei=function(t){return se.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Kb=function(t){var e=ei(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},np=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Vi=function(t,e){var n=e&&ei(t)[lh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Gl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Cg=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Jb=function(t){return function(e){return Ut.utils.snap(Cg(t),e)}},uf=function(t){var e=Ut.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},jb=function(t){return function(e,n){return uf(Cg(t))(e,n.direction)}},sl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},je=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ol=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},ip={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},al={toggleActions:"play",anticipatePin:0},Wl={top:0,left:0,center:.5,bottom:1,right:1},Tl=function(t,e){if(zn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Wl?Wl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ll=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=ve.createElement("div"),_=ns(n)||_r(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,p=_?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,M=y?c:u,v="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(v+=(i===$e?af:lf)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=v,m.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],wl(m,0,i,y),m},wl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+lo]=1,s["border"+a+lo]=0,s[n.p]=e+"px",Ut.set(t,s)},ie=[],fh={},va,rp=function(){return un()-ri>34&&(va||(va=requestAnimationFrame(Yi)))},Cs=function(){(!xn||!xn.isPressed||xn.startX>_e.clientWidth)&&(oe.cache++,xn?va||(va=requestAnimationFrame(Yi)):Yi(),ri||rs("scrollStart"),ri=un())},Kc=function(){Mg=se.innerWidth,yg=se.innerHeight},Bo=function(t){oe.cache++,(t===!0||!cn&&!xg&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!ch||Mg!==se.innerWidth||Math.abs(se.innerHeight-yg)>se.innerHeight*.25))&&Vl.restart(!0)},is={},Qb=[],Rg=function r(){return je(zt,"scrollEnd",r)||Wr(!0)},rs=function(t){return is[t]&&is[t].map(function(e){return e()})||Qb},Fn=[],Pg=function(t){for(var e=0;e<Fn.length;e+=5)(!t||Fn[e+4]&&Fn[e+4].query===t)&&(Fn[e].style.cssText=Fn[e+1],Fn[e].getBBox&&Fn[e].setAttribute("transform",Fn[e+2]||""),Fn[e+3].uncache=1)},Lg=function(){return oe.forEach(function(t){return fn(t)&&++t.cacheID&&(t.rec=t())})},hf=function(t,e){var n;for(yn=0;yn<ie.length;yn++)n=ie[yn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Jo=!0,e&&Pg(e),e||rs("revert")},Dg=function(t,e){oe.cache++,(e||!Mn)&&oe.forEach(function(n){return fn(n)&&n.cacheID++&&(n.rec=0)}),zn(t)&&(se.history.scrollRestoration=sf=t)},Mn,Jr=0,sp,tE=function(){if(sp!==Jr){var t=sp=Jr;requestAnimationFrame(function(){return t===Jr&&Wr(!0)})}},Ig=function(){_e.appendChild($s),of=!xn&&$s.offsetHeight||se.innerHeight,_e.removeChild($s)},op=function(t){return _a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Wr=function(t,e){if(Hn=ve.documentElement,_e=ve.body,rf=[se,ve,Hn,_e],ri&&!t&&!Jo){Qe(zt,"scrollEnd",Rg);return}Ig(),Mn=zt.isRefreshing=!0,Jo||Lg();var n=rs("refreshInit");vg&&zt.sort(),e||hf(),oe.forEach(function(i){fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ie.slice(0).forEach(function(i){return i.refresh()}),Jo=!1,ie.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),hh=1,op(!0),ie.forEach(function(i){var s=Ri(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),op(!1),hh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),oe.forEach(function(i){fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Dg(sf,1),Vl.pause(),Jr++,Mn=2,Yi(2),ie.forEach(function(i){return fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Mn=zt.isRefreshing=!1,rs("refresh")},dh=0,Al=1,na,Yi=function(t){if(t===2||!Mn&&!Jo){zt.isUpdating=!0,na&&na.update(0);var e=ie.length,n=un(),i=n-Zc>=50,s=e&&ie[0].scroll();if(Al=dh>s?-1:1,Mn||(dh=s),i&&(ri&&!nc&&n-ri>200&&(ri=0,rs("scrollEnd")),No=Zc,Zc=n),Al<0){for(yn=e;yn-- >0;)ie[yn]&&ie[yn].update(0,i);Al=1}else for(yn=0;yn<e;yn++)ie[yn]&&ie[yn].update(0,i);zt.isUpdating=!1}va=0},ph=[wg,Ag,lf,af,ti+ea,ti+jo,ti+ta,ti+Qo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Cl=ph.concat([Zr,Kr,"boxSizing","max"+lo,"max"+cf,"position",ti,We,We+ta,We+jo,We+ea,We+Qo]),eE=function(t,e,n){Zs(n);var i=t._gsap;if(i.spacerIsNative)Zs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Jc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=ph.length,o=e.style,a=t.style,l;s--;)l=ph[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[lf]=a[af]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Zr]=Gl(t,bn)+qe,o[Kr]=Gl(t,$e)+qe,o[We]=a[ti]=a[Ag]=a[wg]="0",Zs(i),a[Zr]=a["max"+lo]=n[Zr],a[Kr]=a["max"+cf]=n[Kr],a[We]=n[We],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},nE=/([A-Z])/g,Zs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(nE,"-$1").toLowerCase())}},cl=function(t){for(var e=Cl.length,n=t.style,i=[],s=0;s<e;s++)i.push(Cl[s],n[Cl[s]]);return i.t=t,i},iE=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Rl={left:0,top:0},ap=function(t,e,n,i,s,o,a,l,c,u,h,f,d,m){fn(t)&&(t=t(l)),zn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Tl("0"+t.substr(3),n):0));var _=d?d.time():0,g,p,y;if(d&&d.seek(0),isNaN(t)||(t=+t),zo(t))d&&(t=Ut.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&wl(a,n,i,!0);else{fn(e)&&(e=e(l));var M=(t||"0").split(" "),v,C,w,E;y=wn(e,l)||_e,v=Vi(y)||{},(!v||!v.left&&!v.top)&&ei(y).display==="none"&&(E=y.style.display,y.style.display="block",v=Vi(y),E?y.style.display=E:y.style.removeProperty("display")),C=Tl(M[0],v[i.d]),w=Tl(M[1]||"0",n),t=v[i.p]-c[i.p]-u+C+s-w,a&&wl(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var A=t+n,S=o._isStart;g="scroll"+i.d2,wl(o,A,i,S&&A>20||!S&&(h?Math.max(_e[g],Hn[g]):o.parentNode[g])<=A+1),h&&(c=Vi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+qe))}return d&&y&&(g=Vi(y),d.seek(f),p=Vi(y),d._caScrollDist=g[i.p]-p[i.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},rE=/(webkit|moz|length|cssText|inset)/i,lp=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===_e){t._stOrig=s.cssText,a=ei(t);for(o in a)!+o&&!rE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},Ug=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ul=function(t,e,n){var i={};i[e.p]="+="+n,Ut.set(t,i)},cp=function(t,e){var n=br(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,m={};c=c||n();var _=Ug(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&Yi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ut.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qe(t,"wheel",n.wheelHandler),zt.isTouch&&Qe(t,"touchmove",n.wheelHandler),s},zt=(function(){function r(e,n){Ls||r.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),uh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Oo){this.update=this.refresh=this.kill=Mi;return}n=np(zn(n)||zo(n)||n.nodeType?{trigger:n}:n,al);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,M=s.once,v=s.snap,C=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,A=s.fastScrollEnd,S=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?bn:$e,L=!h&&h!==0,I=wn(n.scroller||se),B=Ut.core.getCache(I),V=ns(I),z=("pinType"in n?n.pinType:_r(I,"pinType")||V&&"fixed")==="fixed",N=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=L&&n.toggleActions.split(" "),F="markers"in n?n.markers:al.markers,Y=V?0:parseFloat(ei(I)["border"+x.p2+lo])||0,P=this,st=n.onRefreshInit&&function(){return n.onRefreshInit(P)},dt=$b(I,V,x),Lt=Zb(I,V),k=0,J=0,at=0,j=br(I,x),ht,_t,It,Gt,nt,it,D,Ct,lt,G,ut,Bt,wt,R,b,q,tt,rt,et,vt,mt,Mt,$t,ct,gt,Vt,Ht,Pt,Qt,Wt,ce,O,yt,K,ot,xt,St,Xt,he;if(P._startClamp=P._endClamp=!1,P._dir=x,g*=45,P.scroller=I,P.scroll=E?E.time.bind(E):j,Gt=j(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(vg=1,n.refreshPriority===-9999&&(na=P)),B.tweenScroll=B.tweenScroll||{top:cp(I,$e),left:cp(I,bn)},P.tweenTo=ht=B.tweenScroll[x.p],P.scrubDuration=function(Tt){yt=zo(Tt)&&Tt,yt?O?O.duration(Tt):O=Ut.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:yt,paused:!0,onComplete:function(){return p&&p(P)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),Wt=0,l||(l=i.vars.id)),v&&((!zr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in _e.style&&Ut.set(V?[_e,Hn]:I,{scrollBehavior:"auto"}),oe.forEach(function(Tt){return fn(Tt)&&Tt.target===(V?ve.scrollingElement||Hn:I)&&(Tt.smooth=!1)}),It=fn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Jb(i):v.snapTo==="labelsDirectional"?jb(i):v.directional!==!1?function(Tt,Zt){return uf(v.snapTo)(Tt,un()-J<500?0:Zt.direction)}:Ut.utils.snap(v.snapTo),K=v.duration||{min:.1,max:2},K=zr(K)?Ko(K.min,K.max):Ko(K,K),ot=Ut.delayedCall(v.delay||yt/2||.1,function(){var Tt=j(),Zt=un()-J<500,Ft=ht.tween;if((Zt||Math.abs(P.getVelocity())<10)&&!Ft&&!nc&&k!==Tt){var qt=(Tt-it)/R,Be=i&&!L?i.totalProgress():qt,re=Zt?0:(Be-ce)/(un()-No)*1e3||0,we=Ut.utils.clamp(-qt,1-qt,As(re/2)*re/.185),Ye=qt+(v.inertia===!1?0:we),Me,Se,de=v,In=de.onStart,Ae=de.onInterrupt,pn=de.onComplete;if(Me=It(Ye,P),zo(Me)||(Me=Ye),Se=Math.max(0,Math.round(it+Me*R)),Tt<=D&&Tt>=it&&Se!==Tt){if(Ft&&!Ft._initted&&Ft.data<=As(Se-Tt))return;v.inertia===!1&&(we=Me-qt),ht(Se,{duration:K(As(Math.max(As(Ye-Be),As(Me-Be))*.185/re/.05||0)),ease:v.ease||"power3",data:As(Se-Tt),onInterrupt:function(){return ot.restart(!0)&&Ae&&ws(P,Ae)},onComplete:function(){P.update(),k=j(),i&&!L&&(O?O.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),Wt=ce=i&&!L?i.totalProgress():P.progress,y&&y(P),pn&&ws(P,pn)}},Tt,we*R,Se-Tt-we*R),In&&ws(P,In,ht.tween)}}else P.isActive&&k!==Tt&&ot.restart(!0)}).pause()),l&&(fh[l]=P),f=P.trigger=wn(f||d!==!0&&d),he=f&&f._gsap&&f._gsap.stRevert,he&&(he=he(P)),d=d===!0?f:wn(d),zn(a)&&(a={targets:f,className:a}),d&&(m===!1||m===ti||(m=!m&&d.parentNode&&d.parentNode.style&&ei(d.parentNode).display==="flex"?!1:We),P.pin=d,_t=Ut.core.getCache(d),_t.spacer?b=_t.pinState:(w&&(w=wn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),_t.spacerIsNative=!!w,w&&(_t.spacerState=cl(w))),_t.spacer=rt=w||ve.createElement("div"),rt.classList.add("pin-spacer"),l&&rt.classList.add("pin-spacer-"+l),_t.pinState=b=cl(d)),n.force3D!==!1&&Ut.set(d,{force3D:!0}),P.spacer=rt=_t.spacer,Qt=ei(d),ct=Qt[m+x.os2],vt=Ut.getProperty(d),mt=Ut.quickSetter(d,x.a,qe),Jc(d,rt,Qt),tt=cl(d)),F){Bt=zr(F)?np(F,ip):ip,G=ll("scroller-start",l,I,x,Bt,0),ut=ll("scroller-end",l,I,x,Bt,0,G),et=G["offset"+x.op.d2];var Ne=wn(_r(I,"content")||I);Ct=this.markerStart=ll("start",l,Ne,x,Bt,et,0,E),lt=this.markerEnd=ll("end",l,Ne,x,Bt,et,0,E),E&&(Xt=Ut.quickSetter([Ct,lt],x.a,qe)),!z&&!(Pi.length&&_r(I,"fixedMarkers")===!0)&&(Kb(V?_e:I),Ut.set([G,ut],{force3D:!0}),Vt=Ut.quickSetter(G,x.a,qe),Pt=Ut.quickSetter(ut,x.a,qe))}if(E){var Rt=E.vars.onUpdate,Ot=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),Rt&&Rt.apply(E,Ot||[])})}if(P.previous=function(){return ie[ie.indexOf(P)-1]},P.next=function(){return ie[ie.indexOf(P)+1]},P.revert=function(Tt,Zt){if(!Zt)return P.kill(!0);var Ft=Tt!==!1||!P.enabled,qt=cn;Ft!==P.isReverted&&(Ft&&(xt=Math.max(j(),P.scroll.rec||0),at=P.progress,St=i&&i.progress()),Ct&&[Ct,lt,G,ut].forEach(function(Be){return Be.style.display=Ft?"none":"block"}),Ft&&(cn=P,P.update(Ft)),d&&(!C||!P.isActive)&&(Ft?eE(d,rt,b):Jc(d,rt,ei(d),gt)),Ft||P.update(Ft),cn=qt,P.isReverted=Ft)},P.refresh=function(Tt,Zt,Ft,qt){if(!((cn||!P.enabled)&&!Zt)){if(d&&Tt&&ri){Qe(r,"scrollEnd",Rg);return}!Mn&&st&&st(P),cn=P,ht.tween&&!Ft&&(ht.tween.kill(),ht.tween=0),O&&O.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Pe){return Pe.vars.immediateRender&&Pe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Be=dt(),re=Lt(),we=E?E.duration():Ri(I,x),Ye=R<=.01||!R,Me=0,Se=qt||0,de=zr(Ft)?Ft.end:n.end,In=n.endTrigger||f,Ae=zr(Ft)?Ft.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),pn=P.pinnedContainer=n.pinnedContainer&&wn(n.pinnedContainer,P),T=f&&Math.max(0,ie.indexOf(P))||0,W=T,$,Z,X,ft,pt,bt,Dt,Yt,Kt,Nt,jt,fe,pe;for(F&&zr(Ft)&&(fe=Ut.getProperty(G,x.p),pe=Ut.getProperty(ut,x.p));W-- >0;)bt=ie[W],bt.end||bt.refresh(0,1)||(cn=P),Dt=bt.pin,Dt&&(Dt===f||Dt===d||Dt===pn)&&!bt.isReverted&&(Nt||(Nt=[]),Nt.unshift(bt),bt.revert(!0,!0)),bt!==ie[W]&&(T--,W--);for(fn(Ae)&&(Ae=Ae(P)),Ae=jd(Ae,"start",P),it=ap(Ae,f,Be,x,j(),Ct,G,P,re,Y,z,we,E,P._startClamp&&"_startClamp")||(d?-.001:0),fn(de)&&(de=de(P)),zn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(zn(Ae)?Ae.split(" ")[0]:"")+de:(Me=Tl(de.substr(2),Be),de=zn(Ae)?Ae:(E?Ut.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,it):it)+Me,In=f)),de=jd(de,"end",P),D=Math.max(it,ap(de||(In?"100% 0":we),In,Be,x,j()+Me,lt,ut,P,re,Y,z,we,E,P._endClamp&&"_endClamp"))||-.001,Me=0,W=T;W--;)bt=ie[W]||{},Dt=bt.pin,Dt&&bt.start-bt._pinPush<=it&&!E&&bt.end>0&&($=bt.end-(P._startClamp?Math.max(0,bt.start):bt.start),(Dt===f&&bt.start-bt._pinPush<it||Dt===pn)&&isNaN(Ae)&&(Me+=$*(1-bt.progress)),Dt===d&&(Se+=$));if(it+=Me,D+=Me,P._startClamp&&(P._startClamp+=Me),P._endClamp&&!Mn&&(P._endClamp=D||-.001,D=Math.min(D,Ri(I,x))),R=D-it||(it-=.01)&&.001,Ye&&(at=Ut.utils.clamp(0,1,Ut.utils.normalize(it,D,xt))),P._pinPush=Se,Ct&&Me&&($={},$[x.a]="+="+Me,pn&&($[x.p]="-="+j()),Ut.set([Ct,lt],$)),d&&!(hh&&P.end>=Ri(I,x)))$=ei(d),ft=x===$e,X=j(),Mt=parseFloat(vt(x.a))+Se,!we&&D>1&&(jt=(V?ve.scrollingElement||Hn:I).style,jt={style:jt,value:jt["overflow"+x.a.toUpperCase()]},V&&ei(_e)["overflow"+x.a.toUpperCase()]!=="scroll"&&(jt.style["overflow"+x.a.toUpperCase()]="scroll")),Jc(d,rt,$),tt=cl(d),Z=Vi(d,!0),Yt=z&&br(I,ft?bn:$e)(),m?(gt=[m+x.os2,R+Se+qe],gt.t=rt,W=m===We?Gl(d,x)+R+Se:0,W&&(gt.push(x.d,W+qe),rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=W+qe)),Zs(gt),pn&&ie.forEach(function(Pe){Pe.pin===pn&&Pe.vars.pinSpacing!==!1&&(Pe._subPinOffset=!0)}),z&&j(xt)):(W=Gl(d,x),W&&rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=W+qe)),z&&(pt={top:Z.top+(ft?X-it:Yt)+qe,left:Z.left+(ft?Yt:X-it)+qe,boxSizing:"border-box",position:"fixed"},pt[Zr]=pt["max"+lo]=Math.ceil(Z.width)+qe,pt[Kr]=pt["max"+cf]=Math.ceil(Z.height)+qe,pt[ti]=pt[ti+ta]=pt[ti+jo]=pt[ti+ea]=pt[ti+Qo]="0",pt[We]=$[We],pt[We+ta]=$[We+ta],pt[We+jo]=$[We+jo],pt[We+ea]=$[We+ea],pt[We+Qo]=$[We+Qo],q=iE(b,pt,C),Mn&&j(0)),i?(Kt=i._initted,qc(1),i.render(i.duration(),!0,!0),$t=vt(x.a)-Mt+R+Se,Ht=Math.abs(R-$t)>1,z&&Ht&&q.splice(q.length-2,2),i.render(0,!0,!0),Kt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),qc(0)):$t=R,jt&&(jt.value?jt.style["overflow"+x.a.toUpperCase()]=jt.value:jt.style.removeProperty("overflow-"+x.a));else if(f&&j()&&!E)for(Z=f.parentNode;Z&&Z!==_e;)Z._pinOffset&&(it-=Z._pinOffset,D-=Z._pinOffset),Z=Z.parentNode;Nt&&Nt.forEach(function(Pe){return Pe.revert(!1,!0)}),P.start=it,P.end=D,Gt=nt=Mn?xt:j(),!E&&!Mn&&(Gt<xt&&j(xt),P.scroll.rec=0),P.revert(!1,!0),J=un(),ot&&(k=-1,ot.restart(!0)),cn=0,i&&L&&(i._initted||St)&&i.progress()!==St&&i.progress(St||0,!0).render(i.time(),!0,!0),(Ye||at!==P.progress||E||_||i&&!i._initted)&&(i&&!L&&(i._initted||at||i.vars.immediateRender!==!1)&&i.totalProgress(E&&it<-.001&&!at?Ut.utils.normalize(it,D,0):at,!0),P.progress=Ye||(Gt-it)/R===at?0:at),d&&m&&(rt._pinOffset=Math.round(P.progress*$t)),O&&O.invalidate(),isNaN(fe)||(fe-=Ut.getProperty(G,x.p),pe-=Ut.getProperty(ut,x.p),ul(G,x,fe),ul(Ct,x,fe-(qt||0)),ul(ut,x,pe),ul(lt,x,pe-(qt||0))),Ye&&!Mn&&P.update(),u&&!Mn&&!wt&&(wt=!0,u(P),wt=!1)}},P.getVelocity=function(){return(j()-nt)/(un()-No)*1e3||0},P.endAnimation=function(){Co(P.callbackAnimation),i&&(O?O.progress(1):i.paused()?L||Co(i,P.direction<0,1):Co(i,i.reversed()))},P.labelToScroll=function(Tt){return i&&i.labels&&(it||P.refresh()||it)+i.labels[Tt]/i.duration()*R||0},P.getTrailing=function(Tt){var Zt=ie.indexOf(P),Ft=P.direction>0?ie.slice(0,Zt).reverse():ie.slice(Zt+1);return(zn(Tt)?Ft.filter(function(qt){return qt.vars.preventOverlaps===Tt}):Ft).filter(function(qt){return P.direction>0?qt.end<=it:qt.start>=D})},P.update=function(Tt,Zt,Ft){if(!(E&&!Ft&&!Tt)){var qt=Mn===!0?xt:P.scroll(),Be=Tt?0:(qt-it)/R,re=Be<0?0:Be>1?1:Be||0,we=P.progress,Ye,Me,Se,de,In,Ae,pn,T;if(Zt&&(nt=Gt,Gt=E?j():qt,v&&(ce=Wt,Wt=i&&!L?i.totalProgress():re)),g&&d&&!cn&&!il&&ri&&(!re&&it<qt+(qt-nt)/(un()-No)*g?re=1e-4:re===1&&D>qt+(qt-nt)/(un()-No)*g&&(re=.9999)),re!==we&&P.enabled){if(Ye=P.isActive=!!re&&re<1,Me=!!we&&we<1,Ae=Ye!==Me,In=Ae||!!re!=!!we,P.direction=re>we?1:-1,P.progress=re,In&&!cn&&(Se=re&&!we?0:re===1?1:we===1?2:3,L&&(de=!Ae&&U[Se+1]!=="none"&&U[Se+1]||U[Se],T=i&&(de==="complete"||de==="reset"||de in i))),S&&(Ae||T)&&(T||h||!i)&&(fn(S)?S(P):P.getTrailing(S).forEach(function(X){return X.endAnimation()})),L||(O&&!cn&&!il?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",re,i._tTime/i._tDur):(O.vars.totalProgress=re,O.invalidate().restart())):i&&i.totalProgress(re,!!(cn&&(J||Tt)))),d){if(Tt&&m&&(rt.style[m+x.os2]=ct),!z)mt(Fo(Mt+$t*re));else if(In){if(pn=!Tt&&re>we&&D+1>qt&&qt+1>=Ri(I,x),C)if(!Tt&&(Ye||pn)){var W=Vi(d,!0),$=qt-it;lp(d,_e,W.top+(x===$e?$:0)+qe,W.left+(x===$e?0:$)+qe)}else lp(d,rt);Zs(Ye||pn?q:tt),Ht&&re<1&&Ye||mt(Mt+(re===1&&!pn?$t:0))}}v&&!ht.tween&&!cn&&!il&&ot.restart(!0),a&&(Ae||M&&re&&(re<1||!$c))&&_a(a.targets).forEach(function(X){return X.classList[Ye||M?"add":"remove"](a.className)}),o&&!L&&!Tt&&o(P),In&&!cn?(L&&(T&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),o&&o(P)),(Ae||!$c)&&(c&&Ae&&ws(P,c),N[Se]&&ws(P,N[Se]),M&&(re===1?P.kill(!1,1):N[Se]=0),Ae||(Se=re===1?1:3,N[Se]&&ws(P,N[Se]))),A&&!Ye&&Math.abs(P.getVelocity())>(zo(A)?A:2500)&&(Co(P.callbackAnimation),O?O.progress(1):Co(i,de==="reverse"?1:!re,1))):L&&o&&!cn&&o(P)}if(Pt){var Z=E?qt/E.duration()*(E._caScrollDist||0):qt;Vt(Z+(G._isFlipped?1:0)),Pt(Z)}Xt&&Xt(-qt/E.duration()*(E._caScrollDist||0))}},P.enable=function(Tt,Zt){P.enabled||(P.enabled=!0,Qe(I,"resize",Bo),V||Qe(I,"scroll",Cs),st&&Qe(r,"refreshInit",st),Tt!==!1&&(P.progress=at=0,Gt=nt=k=j()),Zt!==!1&&P.refresh())},P.getTween=function(Tt){return Tt&&ht?ht.tween:O},P.setPositions=function(Tt,Zt,Ft,qt){if(E){var Be=E.scrollTrigger,re=E.duration(),we=Be.end-Be.start;Tt=Be.start+we*Tt/re,Zt=Be.start+we*Zt/re}P.refresh(!1,!1,{start:Qd(Tt,Ft&&!!P._startClamp),end:Qd(Zt,Ft&&!!P._endClamp)},qt),P.update()},P.adjustPinSpacing=function(Tt){if(gt&&Tt){var Zt=gt.indexOf(x.d)+1;gt[Zt]=parseFloat(gt[Zt])+Tt+qe,gt[1]=parseFloat(gt[1])+Tt+qe,Zs(gt)}},P.disable=function(Tt,Zt){if(Tt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Zt||O&&O.pause(),xt=0,_t&&(_t.uncache=1),st&&je(r,"refreshInit",st),ot&&(ot.pause(),ht.tween&&ht.tween.kill()&&(ht.tween=0)),!V)){for(var Ft=ie.length;Ft--;)if(ie[Ft].scroller===I&&ie[Ft]!==P)return;je(I,"resize",Bo),V||je(I,"scroll",Cs)}},P.kill=function(Tt,Zt){P.disable(Tt,Zt),O&&!Zt&&O.kill(),l&&delete fh[l];var Ft=ie.indexOf(P);Ft>=0&&ie.splice(Ft,1),Ft===yn&&Al>0&&yn--,Ft=0,ie.forEach(function(qt){return qt.scroller===P.scroller&&(Ft=1)}),Ft||Mn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,Tt&&i.revert({kill:!1}),Zt||i.kill()),Ct&&[Ct,lt,G,ut].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),na===P&&(na=0),d&&(_t&&(_t.uncache=1),Ft=0,ie.forEach(function(qt){return qt.pin===d&&Ft++}),Ft||(_t.spacer=0)),n.onKill&&n.onKill(P)},ie.push(P),P.enable(!1,!1),he&&he(P),i&&i.add&&!R){var te=P.update;P.update=function(){P.update=te,oe.cache++,it||D||P.refresh()},Ut.delayedCall(.01,P.update),R=.01,it=D=0}else P.refresh();d&&tE()},r.register=function(n){return Ls||(Ut=n||bg(),Sg()&&window.document&&r.enable(),Ls=Oo),Ls},r.defaults=function(n){if(n)for(var i in n)al[i]=n[i];return al},r.disable=function(n,i){Oo=0,ie.forEach(function(o){return o[i?"kill":"disable"](n)}),je(se,"wheel",Cs),je(ve,"scroll",Cs),clearInterval(nl),je(ve,"touchcancel",Mi),je(_e,"touchstart",Mi),sl(je,ve,"pointerdown,touchstart,mousedown",tp),sl(je,ve,"pointerup,touchend,mouseup",ep),Vl.kill(),rl(je);for(var s=0;s<oe.length;s+=3)ol(je,oe[s],oe[s+1]),ol(je,oe[s],oe[s+2])},r.enable=function(){if(se=window,ve=document,Hn=ve.documentElement,_e=ve.body,Ut){if(_a=Ut.utils.toArray,Ko=Ut.utils.clamp,uh=Ut.core.context||Mi,qc=Ut.core.suppressOverwrites||Mi,sf=se.history.scrollRestoration||"auto",dh=se.pageYOffset||0,Ut.core.globals("ScrollTrigger",r),_e){Oo=1,$s=document.createElement("div"),$s.style.height="100vh",$s.style.position="absolute",Ig(),qb(),He.register(Ut),r.isTouch=He.isTouch,or=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ch=He.isTouch===1,Qe(se,"wheel",Cs),rf=[se,ve,Hn,_e],Ut.matchMedia?(r.matchMedia=function(u){var h=Ut.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ut.addEventListener("matchMediaInit",function(){Lg(),hf()}),Ut.addEventListener("matchMediaRevert",function(){return Pg()}),Ut.addEventListener("matchMedia",function(){Wr(0,1),rs("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return Kc(),Kc})):console.warn("Requires GSAP 3.11.0 or later"),Kc(),Qe(ve,"scroll",Cs);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Vi(_e),$e.m=Math.round(a.top+$e.sc())||0,bn.m=Math.round(a.left+bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),nl=setInterval(rp,250),Ut.delayedCall(.5,function(){return il=0}),Qe(ve,"touchcancel",Mi),Qe(_e,"touchstart",Mi),sl(Qe,ve,"pointerdown,touchstart,mousedown",tp),sl(Qe,ve,"pointerup,touchend,mouseup",ep),lh=Ut.utils.checkPrefix("transform"),Cl.push(lh),Ls=un(),Vl=Ut.delayedCall(.2,Wr).pause(),Ds=[ve,"visibilitychange",function(){var u=se.innerWidth,h=se.innerHeight;ve.hidden?(Kd=u,Jd=h):(Kd!==u||Jd!==h)&&Bo()},ve,"DOMContentLoaded",Wr,se,"load",Wr,se,"resize",Bo],rl(Qe),ie.forEach(function(u){return u.enable(0,1)}),l=0;l<oe.length;l+=3)ol(je,oe[l],oe[l+1]),ol(je,oe[l],oe[l+2])}else if(ve){var c=function u(){r.enable(),ve.removeEventListener("DOMContentLoaded",u)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&($c=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(nl)||(nl=i)&&setInterval(rp,i),"ignoreMobileResize"in n&&(ch=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(rl(je)||rl(Qe,n.autoRefreshEvents||"none"),xg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=wn(n),o=oe.indexOf(s),a=ns(s);~o&&oe.splice(o,a?6:2),i&&(a?Pi.unshift(se,i,_e,i,Hn,i):Pi.unshift(s,i))},r.clearMatchMedia=function(n){ie.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(zn(n)?wn(n):n).getBoundingClientRect(),a=o[s?Zr:Kr]*i||0;return s?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},r.positionInViewport=function(n,i,s){zn(n)&&(n=wn(n));var o=n.getBoundingClientRect(),a=o[s?Zr:Kr],l=i==null?a/2:i in Wl?Wl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},r.killAll=function(n){if(ie.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=is.killAll||[];is={},i.forEach(function(s){return s()})}},r})();zt.version="3.15.0";zt.saveStyles=function(r){return r?_a(r).forEach(function(t){if(t&&t.style){var e=Fn.indexOf(t);e>=0&&Fn.splice(e,5),Fn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),uh())}}):Fn};zt.revert=function(r,t){return hf(!r,t)};zt.create=function(r,t){return new zt(r,t)};zt.refresh=function(r){return r?Bo(!0):(Ls||zt.register())&&Wr(!0)};zt.update=function(r){return++oe.cache&&Yi(r===!0?2:0)};zt.clearScrollMemory=Dg;zt.maxScroll=function(r,t){return Ri(r,t?bn:$e)};zt.getScrollFunc=function(r,t){return br(wn(r),t?bn:$e)};zt.getById=function(r){return fh[r]};zt.getAll=function(){return ie.filter(function(r){return r.vars.id!=="ScrollSmoother"})};zt.isScrolling=function(){return!!ri};zt.snapDirectional=uf;zt.addEventListener=function(r,t){var e=is[r]||(is[r]=[]);~e.indexOf(t)||e.push(t)};zt.removeEventListener=function(r,t){var e=is[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};zt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ut.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&fn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return fn(s)&&(s=s(),Qe(zt,"refresh",function(){return s=t.batchMax()})),_a(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(zt.create(c))}),e};var up=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},jc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===Hn&&r(_e,e)},hl={auto:1,scroll:1},sE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ut.core.getCache(s),a=un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(hl[(l=ei(s)).overflowY]||hl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ns(s)&&(hl[(l=ei(s)).overflowY]||hl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Ng=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&sE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qe(ve,He.eventTypes[0],fp,!1,!0)},onDisable:function(){return je(ve,He.eventTypes[0],fp,!0)}})},oE=/(input|label|select|textarea)/i,hp,fp=function(t){var e=oE.test(t.target.tagName);(e||hp)&&(t._gsapAllow=!0,hp=e)},aE=function(t){zr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=wn(t.target)||Hn,u=Ut.core.globals().ScrollSmoother,h=u&&u.get(),f=or&&(t.content&&wn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=br(c,$e),m=br(c,bn),_=1,g=(He.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,p=0,y=fn(i)?function(){return i(a)}:function(){return i||2.8},M,v,C=Ng(c,t.type,!0,s),w=function(){return v=!1},E=Mi,A=Mi,S=function(){l=Ri(c,$e),A=Ko(or?1:0,l),n&&(E=Ko(0,Ri(c,bn))),M=Jr},x=function(){f._gsap.y=Fo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(w);var F=Fo(a.deltaY/2),Y=A(d.v-F);if(f&&Y!==d.v+d.offset){d.offset=Y-d.v;var P=Fo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=oe.cache,Yi()}return!0}d.offset&&x(),v=!0},I,B,V,z,N=function(){S(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&Ut.set(f,{y:"+=0"}),t.ignoreCheck=function(U){return or&&U.type==="touchmove"&&L()||_>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){v=!1;var U=_;_=Fo((se.visualViewport&&se.visualViewport.scale||1)/g),I.pause(),U!==_&&jc(c,_>1.01?!0:n?!1:"x"),B=m(),V=d(),S(),M=Jr},t.onRelease=t.onGestureStart=function(U,F){if(d.offset&&x(),!F)z.restart(!0);else{oe.cache++;var Y=y(),P,st;n&&(P=m(),st=P+Y*.05*-U.velocityX/.227,Y*=up(m,P,st,Ri(c,bn)),I.vars.scrollX=E(st)),P=d(),st=P+Y*.05*-U.velocityY/.227,Y*=up(d,P,st,Ri(c,$e)),I.vars.scrollY=A(st),I.invalidate().duration(Y).play(.01),(or&&I.vars.scrollY>=l||P>=l-1)&&Ut.to({},{onUpdate:N,duration:Y})}o&&o(U)},t.onWheel=function(){I._ts&&I.pause(),un()-p>1e3&&(M=0,p=un())},t.onChange=function(U,F,Y,P,st){if(Jr!==M&&S(),F&&n&&m(E(P[2]===F?B+(U.startX-U.x):m()+F-P[1])),Y){d.offset&&x();var dt=st[2]===Y,Lt=dt?V+U.startY-U.y:d()+Y-st[1],k=A(Lt);dt&&Lt!==k&&(V+=k-Lt),d(k)}(Y||F)&&Yi()},t.onEnable=function(){jc(c,n?!1:"x"),zt.addEventListener("refresh",N),Qe(se,"resize",N),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),C.enable()},t.onDisable=function(){jc(c,!0),je(se,"resize",N),zt.removeEventListener("refresh",N),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=or,or&&!d()&&d(1),or&&Ut.ticker.add(Mi),z=a._dc,I=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ug(d,d(),function(){return I.pause()})},onUpdate:Yi,onComplete:z.vars.onComplete}),a};zt.sort=function(r){if(fn(r))return ie.sort(r);var t=se.pageYOffset||0;return zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+se.innerHeight}),ie.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};zt.observe=function(r){return new He(r)};zt.normalizeScroll=function(r){if(typeof r>"u")return xn;if(r===!0&&xn)return xn.enable();if(r===!1){xn&&xn.kill(),xn=r;return}var t=r instanceof He?r:aE(r);return xn&&xn.target===t.target&&xn.kill(),ns(t.target)&&(xn=t),t};zt.core={_getVelocityProp:ah,_inputObserver:Ng,_scrollers:oe,_proxies:Pi,bridge:{ss:function(){ri||rs("scrollStart"),ri=un()},ref:function(){return cn}}};bg()&&Ut.registerPlugin(zt);/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let Ro,Po,dp=typeof Symbol=="function"?Symbol():"_split",mh,lE=()=>mh||ff.register(window.gsap),pp=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,xa=r=>r?typeof r=="string"?xa(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...xa(e)):t.push(e),t),[]):[r]:[],mp=r=>xa(r).filter(t=>t&&t.nodeType===1),gh=[],Qc=function(){},cE={add:r=>r()},uE=/\s+/g,gp=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Xl={left:0,top:0,width:0,height:0},hE=(r,t)=>{for(;++t<r.length&&r[t]===Xl;);return r[t]||Xl},_p=({element:r,html:t,ariaL:e,ariaH:n})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},vp=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||gh),n=r.length,i,s,o,a;if(e.size)for(;--n>-1;){s=r[n];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},xp=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Rs=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),_h=(r,t,e)=>{let n=t[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let h=document.createElement(i),f=e.length+1;return n&&(h.className=n+(l?" "+n+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,e.push(h),h};return l&&(n=n.replace("++","")),c.collection=e,c},fE=(r,t,e,n)=>{let i=_h("line",e,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},Og=(r,t,e,n,i,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:m=!0,prepareText:_}=t,g=r.getBoundingClientRect(),p=g,y=!m&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",M=0,v=e.collection,C,w,E,A,S,x,L,I,B,V,z,N,U,F,Y,P,st,dt;for(typeof d=="object"?(E=d.delimiter||d,w=d.replaceWith||""):w=d===""?"":d||" ",C=w!==" ";f<h.length;f++)if(A=h[f],A.nodeType===3){for(Y=A.textContent||"",m?Y=Y.replace(uE," "):y&&(Y=Y.replace(/\n/g,w+`
`)),_&&(Y=_(Y,r)),A.textContent=Y,S=w||E?Y.split(E||w):Y.match(a)||gh,st=S[S.length-1],I=C?st.slice(-1)===" ":!st,st||S.pop(),p=g,L=C?S[0].charAt(0)===" ":!S[0],L&&Rs(" ",r,A),S[0]||S.shift(),vp(S,l),s&&c||(A.textContent=""),B=1;B<=S.length;B++)if(P=S[B-1],!m&&y&&P.charAt(0)===`
`&&((u=A.previousSibling)==null||u.remove(),Rs(document.createElement("br"),r,A),P=P.slice(1)),!m&&P==="")Rs(w,r,A);else if(P===" ")r.insertBefore(document.createTextNode(" "),A);else{if(C&&P.charAt(0)===" "&&Rs(" ",r,A),M&&B===1&&!L&&v.indexOf(M.parentNode)>-1?(x=v[v.length-1],x.appendChild(document.createTextNode(n?"":P))):(x=e(n?"":P),Rs(x,r,A),M&&B===1&&!L&&x.insertBefore(M,x.firstChild)),n)for(z=pp?vp([...pp.segment(P)].map(Lt=>Lt.segment),l):P.match(a)||gh,dt=0;dt<z.length;dt++)x.appendChild(z[dt]===" "?document.createTextNode(" "):n(z[dt]));if(s&&c){if(Y=A.textContent=Y.substring(P.length+1,Y.length),V=x.getBoundingClientRect(),V.top>p.top&&V.left<=p.left){for(N=r.cloneNode(),U=r.childNodes[0];U&&U!==x;)F=U,U=U.nextSibling,N.appendChild(F);r.parentNode.insertBefore(N,r),i&&xp(N)}p=V}(B<S.length||I)&&Rs(B>=S.length?" ":C&&P.slice(-1)===" "?" "+w:w,r,A)}r.removeChild(A),M=0}else A.nodeType===1&&(o&&o.indexOf(A)>-1?(v.indexOf(A.previousSibling)>-1&&v[v.length-1].appendChild(A),M=A):(Og(A,t,e,n,i,s,o,a,l,!0),M=0),i&&xp(A))};const Fg=class zg{constructor(t,e){this.isSplit=!1,lE(),this.elements=mp(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(o=>{var a;e.overwrite!==!1&&((a=o[dp])==null||a._data.orig.filter(({element:l})=>l===o).forEach(_p)),o[dp]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Qc(this),this.split(e)}split(t){return(this._ctx||cE).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=e.indexOf("lines")>-1,h=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,d=h&&!f&&!u,m=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=m?new RegExp(m.source+"|"+gp.source,"gu"):gp,g=!!t.ignore&&mp(t.ignore),{orig:p,animTime:y,obs:M}=this._data,v;(h||f||u)&&(this.elements.forEach((C,w)=>{p[w]={element:C,html:C.innerHTML,ariaL:C.getAttribute("aria-label"),ariaH:C.getAttribute("aria-hidden")},n==="auto"?C.setAttribute("aria-label",(C.textContent||"").trim()):n==="hidden"&&C.setAttribute("aria-hidden","true");let E=[],A=[],S=[],x=h?_h("char",t,E):null,L=_h("word",t,A),I,B,V,z;if(Og(C,t,L,x,d,i&&(u||d),g,_,m,!1),u){let N=xa(C.childNodes),U=fE(C,N,t,S),F,Y=[],P=0,st=N.map(k=>k.nodeType===1?k.getBoundingClientRect():Xl),dt=Xl,Lt;for(I=0;I<N.length;I++)F=N[I],F.nodeType===1&&(F.nodeName==="BR"?((!I||N[I-1].nodeName!=="BR")&&(Y.push(F),U(P,I+1)),P=I+1,dt=hE(st,I)):(Lt=st[I],I&&Lt.top>dt.top&&Lt.left<dt.left+dt.width-1&&(U(P,I),P=I),dt=Lt));P<I&&U(P,I),Y.forEach(k=>{var J;return(J=k.parentNode)==null?void 0:J.removeChild(k)})}if(!f){for(I=0;I<A.length;I++)if(B=A[I],h||!B.nextSibling||B.nextSibling.nodeType!==3)if(s&&!u){for(V=document.createElement("span"),V.style.whiteSpace="nowrap";B.firstChild;)V.appendChild(B.firstChild);B.replaceWith(V)}else B.replaceWith(...B.childNodes);else z=B.nextSibling,z&&z.nodeType===3&&(z.textContent=(B.textContent||"")+(z.textContent||""),B.remove());A.length=0,C.normalize()}this.lines.push(...S),this.words.push(...A),this.chars.push(...E)}),c&&this[c]&&this.masks.push(...this[c].map(C=>{let w=C.cloneNode();return C.replaceWith(w),w.appendChild(C),C.className&&(w.className=C.className.trim().split(" ").map(E=>E+"-mask").join(" ")),w.style.overflow="clip",w}))),this.isSplit=!0,Po&&u&&a&&Po.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=y?v.totalTime(y):v),u&&a&&this.elements.forEach((C,w)=>{p[w].width=C.offsetWidth,M&&M.observe(C)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),Po==null||Po.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(_p),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new zg(t,e)}static register(t){Ro=Ro||t||window.gsap,Ro&&(xa=Ro.utils.toArray,Qc=Ro.core.context||Qc),!mh&&window.innerWidth>0&&(Po=document.fonts,mh=!0)}};Fg.version="3.15.0";let ff=Fg;var yp="1.3.26";function Bg(r,t,e){return Math.max(r,Math.min(t,e))}function dE(r,t,e){return(1-e)*r+e*t}function pE(r,t,e,n){return dE(r,t,1-Math.exp(-e*n))}function mE(r,t){return(r%t+t)%t}var gE=class{constructor(){Q(this,"isRunning",!1);Q(this,"value",0);Q(this,"from",0);Q(this,"to",0);Q(this,"currentTime",0);Q(this,"lerp");Q(this,"duration");Q(this,"easing");Q(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Bg(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=pE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function _E(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var vE=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Q(this,"width",0);Q(this,"height",0);Q(this,"scrollHeight",0);Q(this,"scrollWidth",0);Q(this,"debouncedResize");Q(this,"wrapperResizeObserver");Q(this,"contentResizeObserver");Q(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Q(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Q(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=_E(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},kg=class{constructor(){Q(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const xE=100/6,rr={passive:!1};function Mp(r,t){return r===1?xE:r===2?t:1}var yE=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Q(this,"touchStart",{x:0,y:0});Q(this,"lastDelta",{x:0,y:0});Q(this,"window",{width:0,height:0});Q(this,"emitter",new kg);Q(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Q(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Q(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Q(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=Mp(n,this.window.width),s=Mp(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Q(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rr),this.element.addEventListener("touchstart",this.onTouchStart,rr),this.element.addEventListener("touchmove",this.onTouchMove,rr),this.element.addEventListener("touchend",this.onTouchEnd,rr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,rr),this.element.removeEventListener("touchstart",this.onTouchStart,rr),this.element.removeEventListener("touchmove",this.onTouchMove,rr),this.element.removeEventListener("touchend",this.onTouchEnd,rr)}};const Sp=r=>Math.min(1,1.001-2**(-10*r));var ME=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:g,virtualScroll:p,overscroll:y=!0,autoRaf:M=!1,anchors:v=!1,autoToggle:C=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:A=E,stopInertiaOnNavigate:S=!1,respectReducedMotion:x=!0}={}){Q(this,"_isScrolling",!1);Q(this,"_isStopped",!1);Q(this,"_isLocked",!1);Q(this,"_preventNextNativeScrollEvent",!1);Q(this,"_resetVelocityTimeout",null);Q(this,"_rafId",null);Q(this,"_isDraggingSelection",!1);Q(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Q(this,"isTouching");Q(this,"isIos");Q(this,"time",0);Q(this,"userData",{});Q(this,"lastVelocity",0);Q(this,"velocity",0);Q(this,"direction",0);Q(this,"options");Q(this,"targetScroll");Q(this,"animatedScroll");Q(this,"animate",new gE);Q(this,"emitter",new kg);Q(this,"dimensions");Q(this,"virtualScroll");Q(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Q(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Q(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Q(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Q(this,"onPointerDown",r=>{r.button===1&&this.reset()});Q(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>{var _,g,p,y,M;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent"))||u==="vertical"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-horizontal"))||i&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-touch"))||s&&((M=m.hasAttribute)==null?void 0:M.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Q(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Q(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=yp,window.lenis||(window.lenis={}),window.lenis.version=yp,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Sp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:m,autoResize:_,prevent:g,virtualScroll:p,overscroll:y,autoRaf:M,anchors:v,autoToggle:C,allowNestedScroll:w,naiveDimensions:A,stopInertiaOnNavigate:S,respectReducedMotion:x},this.dimensions=new vE(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new yE(e,{touchMultiplier:d,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,d=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(m=f),m){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?v.left:v.top}const _=m.getBoundingClientRect(),g=getComputedStyle(m),p=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),y=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(M)?0:M)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=Bg(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=h??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Sp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,h,f,d,m;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,m=r.clientHeight,a=h>d,l=f>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=h,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,h=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let g,p,y,M,v,C;if(_==="horizontal")g=Math.round(r.scrollLeft),p=h-d,y=t,M=s,v=a,C=c;else if(_==="vertical")g=Math.round(r.scrollTop),p=f-m,y=e,M=o,v=l,C=u;else return!1;return!C&&(g>=p||g<=0)?!0:(y>0?g<p:g>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?mE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};Fe.registerPlugin(zt,ff);const bp=(r,t,e)=>{const{from:n,to:i}=r;if(r.mid){const s=1-t,o=r.mid;e.pos.set(s*s*n.pos.x+2*s*t*o.x+t*t*i.pos.x,s*s*n.pos.y+2*s*t*o.y+t*t*i.pos.y,s*s*n.pos.z+2*s*t*o.z+t*t*i.pos.z)}else e.pos.lerpVectors(n.pos,i.pos,t);e.target.lerpVectors(n.target,i.target,t)},SE=(r,t)=>{const e=1-r/2-t/2;return n=>{if(n<=0)return 0;if(n>=1)return 1;let i;if(n<r)i=n*n/(2*r);else if(n<1-t)i=r/2+(n-r);else{const s=n-(1-t);i=r/2+(1-r-t)+s-s*s/(2*t)}return i/e}},Ep=r=>Math.min(1,Math.max(0,r)),hi=(r,t,e)=>{const n=Math.min(1,Math.max(0,(r-t)/(e-t)));return n*n*(3-2*n)};function bE(r){var d;zt.config({ignoreMobileResize:!0});const t=new ME({lerp:.062,wheelMultiplier:.85}),e=()=>zt.update();t.on("scroll",e);const n=m=>t.raf(m*1e3);Fe.ticker.add(n),Fe.ticker.lagSmoothing(0);const i=Oe(0,0,0,0,0,0);let s=null,o=!1,a=null;const l=Array.from(document.querySelectorAll("#skin-chips .chip")),c=m=>{const _=Math.round(m);l.forEach((g,p)=>g.classList.toggle("is-active",p===_))},u=[{el:"#ch-hero",from:Oe(43,27,52,0,6,0),to:Oe(33,20,43,0,6,0),onProgress:()=>r.city.setSignsOpacity(0)},{el:"#ch-context",from:Oe(33,20,43,0,6,0),to:Oe(-44,22,38,0,6,0),onProgress(m){const _=document.getElementById("context-photo");_==null||_.style.setProperty("--photoswap",String(hi(m,.34,.72))),r.city.setSignsOpacity(0)}},{el:"#ch-concept",from:Oe(-44,22,38,0,6,0),to:Oe(-22,34,-40,0,6,0),mid:{x:-81.3,y:30,z:-14.6},onProgress(m){const _=m<.42?m/.42:Math.max(0,1-(m-.42)/.58);r.city.setScatter(_),r.city.setSignsOpacity(0)}},{el:"#ch-opening",from:Oe(-22,34,-40,0,6,0),to:Oe(45.6,34,0,-.5,6,0),mid:{x:34.6,y:38,z:-58.6},onProgress(m){r.city.setMonoMix(1-hi(m,.15,.7)),r.city.setSignsOpacity(0)}},{el:"#ch-far",from:Oe(45.6,34,0,-.5,6,0),to:Oe(4.7,14,18.4,-1,4,1),mid:{x:32.3,y:26,z:25.1},onToggle(m){r.setLabelsOn(m)},onProgress(m){r.city.setSignsOpacity(hi(m,.06,.26))}},{el:"#ch-dive",from:Oe(4.7,14,18.4,-1,4,1),to:Oe(-5.8,3.4,13.2,-1.5,4.4,3.5),mid:{x:-1.5,y:10,z:17.6}},{el:"#ch-gallery",from:Oe(-5.8,3.4,13.2,-1.5,4.4,3.5),to:Oe(32,19,40,-1.5,5,1)},{el:"#ch-skins",from:Oe(32,19,40,-1.5,5,1),to:Oe(-40,24,44,0,6,0),mid:{x:4,y:32,z:64},onProgress(m){const _=hi(m,0,.2)*(1-hi(m,.85,1));r.city.setRingWash(.12*(1-_)),r.city.setBaseReturn(0)}},{el:"#ch-ar",from:Oe(-40,24,44,0,6,0),to:Oe(-46,27,12,0,6.5,0),mid:{x:-56,y:26,z:32},onProgress:m=>r.city.setBaseReturn(hi(m,.08,.95))},{el:"#ch-end",from:Oe(-46,27,12,0,6.5,0),to:Oe(30,20,38,0,6,0),mid:{x:-34,y:27,z:36},pMap:m=>SE(0,.34)(Math.min(1,m/.84))}],h=Fe.context(()=>{Fe.matchMedia().add({isDesktop:"(min-width: 821px)",isMobile:"(max-width: 820px)",reduceMotion:"(prefers-reduced-motion: reduce)"},V=>{const{isDesktop:z,reduceMotion:N}=V.conditions;for(const k of u){if(N){zt.create({trigger:k.el,start:"top 60%",end:"bottom 40%",onToggle(at){var j,ht;at.isActive&&(bp(k,1,i),r.desired.pos.copy(i.pos),r.desired.target.copy(i.target),(j=k.onProgress)==null||j.call(k,1)),(ht=k.onToggle)==null||ht.call(k,at.isActive)}});continue}const J=k.ease?Fe.parseEase(k.ease):null;zt.create({trigger:k.el,start:k.el==="#ch-hero"?"top top":"top center",end:"bottom center",scrub:!0,onUpdate(at){var _t;const j=k.pMap?k.pMap(at.progress):at.progress,ht=J?J(j):j;bp(k,ht,i),r.desired.pos.copy(i.pos),r.desired.target.copy(i.target),(_t=k.onProgress)==null||_t.call(k,ht)},onToggle(at){var j;(j=k.onToggle)==null||j.call(k,at.isActive)}})}N&&(r.city.setScatter(0),r.city.setMonoMix(0));const U=document.querySelector(".overlay--end");if(U){const k=Array.from(U.querySelectorAll(".end-stage")),J=(at,j,ht,_t,It)=>hi(at,j,ht)*(1-hi(at,_t,It));zt.create({trigger:"#ch-end",start:"top top",end:"bottom bottom",scrub:!0,onUpdate(at){const j=at.progress,ht=[J(j,.04,.16,.28,.4),J(j,.44,.56,.7,.82),hi(j,.86,.96)];k.forEach((_t,It)=>{_t.style.opacity=String(ht[It]),_t.style.visibility=ht[It]>.01?"visible":"hidden",_t.style.transform=`translateY(${(1-ht[It])*22}px)`}),U.classList.toggle("is-on",Math.max(...ht)>.01)}})}const F=Fe.utils.toArray("#overlays .overlay").filter(k=>!k.classList.contains("overlay--end"));for(const k of F){const J=`#${k.dataset.for}`;if(document.querySelector(J)){if(N){zt.create({trigger:J,start:"top 60%",end:"bottom 40%",onToggle(at){k.classList.toggle("is-on",at.isActive),k.style.opacity=at.isActive?"1":"0"}});continue}zt.create({trigger:J,start:"top 78%",end:"bottom 22%",scrub:!0,onUpdate(at){const j=at.progress,ht=+(k.dataset.fadeIn??.06),_t=+(k.dataset.fadeOut??.94),It=hi(j,ht,ht+.14),Gt=1-hi(j,_t-.14,_t),nt=It*Gt;k.style.opacity=String(nt),k.style.transform=`translateY(${(1-It)*34-(1-Gt)*22}px)`,k.classList.toggle("is-on",nt>.01)}})}}zt.create({trigger:"#ch-skins",start:"top 45%",end:"bottom 80%",scrub:!N,onUpdate(k){const J=k.progress*(sr.length-1);k.progress>0&&r.city.setMonoMix(0),r.city.setSkinPos(J),c(J)}});const Y=document.getElementById("gallery-track"),P=document.getElementById("gallery-pin"),st=Array.from(Y.querySelectorAll(".phone")),dt=()=>{const k=innerWidth/2;for(const J of st){const at=J.getBoundingClientRect(),j=Math.abs(at.left+at.width/2-k),ht=Math.max(0,1-j/(innerWidth*.3));J.style.setProperty("--focus",ht.toFixed(3))}};if(z&&!N){const k=_t=>innerWidth/2-(_t.offsetLeft+_t.offsetWidth/2);let J=0,at=0;const j=()=>{st.length&&(J=k(st[0]),at=k(st[st.length-1]))},ht=_t=>{Fe.set(Y,{x:J+(at-J)*_t}),dt()};j(),zt.create({trigger:"#ch-gallery",start:"top top",end:()=>`+=${Math.max(1,J-at)}`,pin:P,invalidateOnRefresh:!0,anticipatePin:1,refreshPriority:1,onRefresh(_t){j(),ht(_t.progress)},onUpdate(_t){ht(_t.progress)}})}else Y.classList.add("is-native-scroll"),Fe.set(Y,{clearProps:"transform"}),st.forEach(k=>k.style.setProperty("--focus","1")),Y.addEventListener("scroll",dt,{passive:!0});Fe.utils.toArray(".gallery-head, .end-copy").forEach(k=>{Fe.from(k,{opacity:0,y:N?0:36,duration:N?.3:1,ease:"power3.out",scrollTrigger:{trigger:k,start:"top 85%",once:!0,fastScrollEnd:!0}})}),s=Fe.timeline({paused:!0});const Lt=[];return Fe.utils.toArray(".hero-title .split-target").forEach((k,J)=>{const at=ff.create(k,{type:"chars",mask:"chars"});Lt.push(at),s.from(at.chars,{yPercent:N?0:118,opacity:N?0:1,duration:N?.3:1.2,ease:"power2.out",stagger:N?0:.038},J*.16)}),s.from(".hero-inner .hero-kicker",{opacity:0,y:18,duration:1.1,ease:"power2.out"},0).from(".hero-title .ff-arrows",{opacity:0,scale:.7,duration:.9,ease:"back.out(1.6)"},.85).from(".hero-sub",{opacity:0,y:26,duration:1.2,ease:"power2.out"},.95).from(".hero-scroll-hint",{opacity:0,duration:.9},1.35).from("#topbar",{opacity:0,duration:1.1},.15),()=>{Lt.forEach(k=>k.revert()),s==null||s.kill(),s=null,Y.classList.remove("is-native-scroll")}});const _=document.querySelector(".video-stage video");_&&zt.create({trigger:"#ch-opening",start:"top 80%",end:"bottom 20%",onToggle(V){V.isActive?(_.preload="auto",_.play().catch(()=>{})):_.pause()}});const g={v:0};l.forEach((V,z)=>{V.addEventListener("click",()=>{g.v=r.city.getSkinPos(),Fe.to(g,{v:z,duration:1.1,ease:"power2.inOut",overwrite:!0,onUpdate(){r.city.setMonoMix(0),r.city.setSkinPos(g.v)}}),c(z)})});const p=document.getElementById("rail-fill"),y=document.getElementById("rail-dots"),M=Fe.utils.toArray(".chapter"),v=M.map(V=>{const z=document.createElement("li");return z.dataset.title=V.dataset.title??"",z.addEventListener("click",()=>t.scrollTo(V,{duration:1.6})),y.appendChild(z),z}),C=()=>{const V=zt.maxScroll(window);if(V<=0)return[0];const z=innerHeight*.5,N=new Set([0,1]);for(let U=0;U<=V;U+=z)N.add(Ep(U/V));for(const U of Fe.utils.toArray(".chapter"))N.add(Ep(U.offsetTop/V));return[...N].sort((U,F)=>U-F)};let w=C();zt.addEventListener("refresh",()=>w=C());const E=()=>innerHeight*.18;let A=-1,S=0,x=!0;const L=()=>{if(o)return;const V=window.scrollY;if(Math.abs(V-A)>.6){A=V,S=0,x=!0;return}if(!x)return;const z=performance.now();if(S===0){S=z;return}if(z-S<180)return;x=!1;const N=zt.maxScroll(window);if(N<=0)return;let U=-1,F=1/0;for(const Y of w){const P=Math.abs(Y*N-V);P<F&&(F=P,U=Y*N)}U<0||F<=2||F>E()||t.scrollTo(U,{duration:.55,easing:Y=>1-Math.pow(1-Y,3)})};Fe.ticker.add(L),a=L,zt.create({start:0,end:()=>zt.maxScroll(window),invalidateOnRefresh:!0,onUpdate(V){p.style.height=`${V.progress*100}%`;const z=zt.maxScroll(window)-V.scroll()<3;r.setAutoSpin(!o&&z?1:0)}}),M.forEach((V,z)=>{zt.create({trigger:V,start:"top 50%",end:"bottom 50%",onToggle(N){N.isActive&&v.forEach((U,F)=>U.classList.toggle("is-active",F===z))}})});const I=document.getElementById("back-top"),B=V=>{const z=V.target;let N=!!z&&!!z.closest("#back-top");if(!N&&I&&I.offsetParent!==null){const Y=V,P=I.getBoundingClientRect();P.width>0&&typeof Y.clientX=="number"&&(N=Y.clientX>=P.left&&Y.clientX<=P.right&&Y.clientY>=P.top&&Y.clientY<=P.bottom)}if(!N||o)return;o=!0,window.setTimeout(()=>{o&&(o=!1,t.start(),document.body.classList.remove("is-warping"))},8e3);const U={d:0},F=()=>r.city.setDissolve(U.d);document.body.classList.add("is-warping"),t.stop(),r.freezeSpin(),Fe.timeline({onComplete(){document.body.classList.remove("is-warping"),t.start(),o=!1}}).to(U,{d:1,duration:1.9,ease:"power1.inOut",onUpdate:F}).add(()=>{t.scrollTo(0,{immediate:!0,force:!0}),window.scrollY>5&&(window.scrollTo(0,0),t.scrollTo(0,{immediate:!0,force:!0})),zt.update(),r.snapCamera(),r.city.setDissolve(1)}).to({},{duration:.12}).to(U,{d:0,duration:2.6,ease:"power2.out",onUpdate:F}).add(()=>{document.body.classList.remove("is-warping"),s==null||s.play(0)},"-=1.35")};document.addEventListener("pointerdown",B,!0),document.addEventListener("click",B,!0)}),f=()=>{const m=Array.from(document.images).filter(p=>!p.complete);if(!m.length){zt.refresh(!0);return}let _=m.length;const g=()=>{--_<=0&&zt.refresh(!0)};m.forEach(p=>{p.addEventListener("load",g,{once:!0}),p.addEventListener("error",g,{once:!0})})};return(d=document.fonts)==null||d.ready.then(()=>zt.refresh(!0)),window.addEventListener("load",f,{once:!0}),f(),{playIntro:()=>s==null?void 0:s.play(0),destroy(){h.revert(),t.off("scroll",e),Fe.ticker.remove(n),a&&Fe.ticker.remove(a),t.destroy(),zt.getAll().forEach(m=>m.kill())}}}const EE=[[0,0],[0,4],[1,1],[1,5],[2,2],[2,6],[3,3],[3,7],[4,2],[4,6],[5,1],[5,5],[6,0],[6,4]].map(([r,t])=>r*9+t);function TE(){const r=document.getElementById("loader-logo"),t=[];for(let n=0;n<63;n++){const i=document.createElement("i");(n*7+3)%11===0&&i.classList.add("gold"),r.appendChild(i),t.push(i)}const e=EE.map(n=>t[n]).filter(Boolean);return new Promise(n=>{Fe.timeline({onComplete:()=>n()}).to(e,{opacity:1,scale:1,duration:.32,ease:"back.out(2.2)",stagger:{each:.055,from:"start"}}).to(".loader-tag",{opacity:1,duration:.4},"-=0.4").to({},{duration:.35})})}const wE=async()=>{const r=Array.from(document.images),t=Array.from(document.querySelectorAll("video")),e=r.map(o=>{var a;return o.loading="eager",o.complete&&o.naturalWidth>0?(a=o.decode)==null?void 0:a.call(o).catch(()=>{}):new Promise(l=>{o.addEventListener("load",()=>l(),{once:!0}),o.addEventListener("error",()=>l(),{once:!0})})}),n=t.map(o=>(o.pause(),o.preload="auto",o.readyState>=HTMLMediaElement.HAVE_FUTURE_DATA?Promise.resolve():new Promise(a=>{o.addEventListener("canplay",()=>a(),{once:!0}),o.addEventListener("error",()=>a(),{once:!0}),o.load()}))),i=Promise.allSettled([...e,...n]),s=new Promise(o=>window.setTimeout(o,12e3));await Promise.race([i,s])},AE=()=>{const r=Array.from(document.querySelectorAll("video[autoplay]")),t=()=>{for(const n of r){const i=n.closest(".overlay");!document.hidden&&(!i||i.classList.contains("is-on"))?n.play().catch(()=>{}):n.pause()}},e=new MutationObserver(t);return document.querySelectorAll(".overlay").forEach(n=>e.observe(n,{attributes:!0,attributeFilter:["class"]})),document.addEventListener("visibilitychange",t),t(),()=>{e.disconnect(),document.removeEventListener("visibilitychange",t)}};function CE(){var a;Hb(),document.querySelectorAll(".card, .end-copy, .gallery-track").forEach(l=>l.setAttribute("data-lenis-prevent",""));const r=document.getElementById("webgl"),t=TE();let e=null,n=null,i=null;try{e=new Vb(r)}catch(l){console.warn("WebGL 初始化失败，降级为静态展示",l),r.style.display="none"}e&&(n=bE(e));const s=Promise.allSettled([(a=document.fonts)==null?void 0:a.ready,t,wE(),e==null?void 0:e.ready]),o=new Promise(l=>window.setTimeout(l,15e3));return Promise.race([s,o]).then(()=>{document.getElementById("loader").classList.add("is-done"),i=AE(),n==null||n.playIntro()}),{destroy(){n==null||n.destroy(),e==null||e.destroy(),i==null||i()}}}window.__TKL_EMBED__||CE();
