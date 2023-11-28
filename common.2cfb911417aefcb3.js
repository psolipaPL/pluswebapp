"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{5169:(y,_,a)=>{a.d(_,{c:()=>c});var i=a(5349),u=a(967),l=a(9203);const c=(o,s)=>{let e,n;const g=(r,p,m)=>{if(typeof document>"u")return;const E=document.elementFromPoint(r,p);E&&s(E)?E!==e&&(t(),d(E,m)):t()},d=(r,p)=>{e=r,n||(n=e);const m=e;(0,i.w)(()=>m.classList.add("ion-activated")),p()},t=(r=!1)=>{if(!e)return;const p=e;(0,i.w)(()=>p.classList.remove("ion-activated")),r&&n!==e&&e.click(),e=void 0};return(0,l.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>g(r.currentX,r.currentY,u.a),onMove:r=>g(r.currentX,r.currentY,u.b),onEnd:()=>{t(!0),(0,u.h)(),n=void 0}})}},4874:(y,_,a)=>{a.d(_,{g:()=>u});var i=a(6225);const u=()=>{if(void 0!==i.w)return i.w.Capacitor}},5149:(y,_,a)=>{a.d(_,{g:()=>i});const i=(s,e,n,g,d)=>l(s[1],e[1],n[1],g[1],d).map(t=>u(s[0],e[0],n[0],g[0],t)),u=(s,e,n,g,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*n*d+3*n+g*d))-s*Math.pow(d-1,3),l=(s,e,n,g,d)=>o((g-=d)-3*(n-=d)+3*(e-=d)-(s-=d),3*n-6*e+3*s,3*e-3*s,s).filter(r=>r>=0&&r<=1),o=(s,e,n,g)=>{if(0===s)return((s,e,n)=>{const g=e*e-4*s*n;return g<0?[]:[(-e+Math.sqrt(g))/(2*s),(-e-Math.sqrt(g))/(2*s)]})(e,n,g);const d=(3*(n/=s)-(e/=s)*e)/3,t=(2*e*e*e-9*e*n+27*(g/=s))/27;if(0===d)return[Math.pow(-t,1/3)];if(0===t)return[Math.sqrt(-d),-Math.sqrt(-d)];const r=Math.pow(t/2,2)+Math.pow(d/3,3);if(0===r)return[Math.pow(t/2,.5)-e/3];if(r>0)return[Math.pow(-t/2+Math.sqrt(r),1/3)-Math.pow(t/2+Math.sqrt(r),1/3)-e/3];const p=Math.sqrt(Math.pow(-d/3,3)),m=Math.acos(-t/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(m/3)-e/3,E*Math.cos((m+2*Math.PI)/3)-e/3,E*Math.cos((m+4*Math.PI)/3)-e/3]}},5085:(y,_,a)=>{a.d(_,{i:()=>i});const i=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(y,_,a)=>{a.r(_),a.d(_,{startFocusVisible:()=>c});const i="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=o=>{let s=[],e=!0;const n=o?o.shadowRoot:document,g=o||document.body,d=M=>{s.forEach(v=>v.classList.remove(i)),M.forEach(v=>v.classList.add(i)),s=M},t=()=>{e=!1,d([])},r=M=>{e=l.includes(M.key),e||d([])},p=M=>{if(e&&void 0!==M.composedPath){const v=M.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));d(v)}},m=()=>{n.activeElement===g&&d([])};return n.addEventListener("keydown",r),n.addEventListener("focusin",p),n.addEventListener("focusout",m),n.addEventListener("touchstart",t,{passive:!0}),n.addEventListener("mousedown",t),{destroy:()=>{n.removeEventListener("keydown",r),n.removeEventListener("focusin",p),n.removeEventListener("focusout",m),n.removeEventListener("touchstart",t),n.removeEventListener("mousedown",t)},setFocus:d}}},9988:(y,_,a)=>{a.d(_,{c:()=>u});var i=a(839);const u=s=>{const e=s;let n;return{hasLegacyControl:()=>{if(void 0===n){const d=void 0!==e.label||l(e),t=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,r=(0,i.h)(e);n=!0===e.legacy||!d&&!t&&null!==r}return n}}},l=s=>!!(c.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||o.includes(s.tagName)&&""!==s.textContent),c=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},967:(y,_,a)=>{a.d(_,{I:()=>u,a:()=>e,b:()=>n,c:()=>s,d:()=>d,h:()=>g});var i=a(4874),u=function(t){return t.Heavy="HEAVY",t.Medium="MEDIUM",t.Light="LIGHT",t}(u||{});const c={getEngine(){const t=window.TapticEngine;if(t)return t;const r=(0,i.g)();return null!=r&&r.isPluginAvailable("Haptics")?r.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const r=(0,i.g)();return"web"!==(null==r?void 0:r.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,i.g)(),impact(t){const r=this.getEngine();if(!r)return;const p=this.isCapacitor()?t.style:t.style.toLowerCase();r.impact({style:p})},notification(t){const r=this.getEngine();if(!r)return;const p=this.isCapacitor()?t.type:t.type.toLowerCase();r.notification({type:p})},selection(){const t=this.isCapacitor()?u.Light:"light";this.impact({style:t})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>c.available(),s=()=>{o()&&c.selection()},e=()=>{o()&&c.selectionStart()},n=()=>{o()&&c.selectionChanged()},g=()=>{o()&&c.selectionEnd()},d=t=>{o()&&c.impact(t)}},2874:(y,_,a)=>{a.d(_,{I:()=>s,a:()=>d,b:()=>o,c:()=>p,d:()=>E,f:()=>t,g:()=>g,i:()=>n,p:()=>m,r:()=>M,s:()=>r});var i=a(5861),u=a(839),l=a(6710);const o="ion-content",s=".ion-content-scroll-host",e=`${o}, ${s}`,n=v=>"ION-CONTENT"===v.tagName,g=function(){var v=(0,i.Z)(function*(w){return n(w)?(yield new Promise(f=>(0,u.c)(w,f)),w.getScrollElement()):w});return function(f){return v.apply(this,arguments)}}(),d=v=>v.querySelector(s)||v.querySelector(e),t=v=>v.closest(e),r=(v,w)=>n(v)?v.scrollToTop(w):Promise.resolve(v.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),p=(v,w,f,O)=>n(v)?v.scrollByPoint(w,f,O):Promise.resolve(v.scrollBy({top:f,left:w,behavior:O>0?"smooth":"auto"})),m=v=>(0,l.b)(v,o),E=v=>{if(n(v)){const f=v.scrollY;return v.scrollY=!1,f}return v.style.setProperty("overflow","hidden"),!0},M=(v,w)=>{n(v)?v.scrollY=w:v.style.removeProperty("overflow")}},5307:(y,_,a)=>{a.d(_,{a:()=>i,b:()=>p,c:()=>e,d:()=>m,e:()=>L,f:()=>s,g:()=>E,h:()=>l,i:()=>u,j:()=>O,k:()=>C,l:()=>n,m:()=>t,n:()=>M,o:()=>d,p:()=>o,q:()=>c,r:()=>f,s:()=>h,t:()=>r,u:()=>v,v:()=>w,w:()=>g});const i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(y,_,a)=>{a.d(_,{c:()=>c,g:()=>o});var i=a(6225),u=a(839),l=a(6710);const c=(e,n,g)=>{let d,t;void 0!==i.w&&"MutationObserver"in i.w&&(d=new MutationObserver(E=>{for(const M of E)for(const v of M.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&v.slot===n)return g(),void(0,u.r)(()=>r(v))}),d.observe(e,{childList:!0}));const r=E=>{var M;t&&(t.disconnect(),t=void 0),t=new MutationObserver(v=>{g();for(const w of v)for(const f of w.removedNodes)f.nodeType===Node.ELEMENT_NODE&&f.slot===n&&m()}),t.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},m=()=>{t&&(t.disconnect(),t=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),m()}}},o=(e,n,g)=>{const d=null==e?0:e.toString().length,t=s(d,n);if(void 0===g)return t;try{return g(d,n)}catch(r){return(0,l.a)("Exception in provided `counterFormatter`.",r),t}},s=(e,n)=>`${e} / ${n}`},7484:(y,_,a)=>{a.d(_,{K:()=>c,a:()=>l});var i=a(4874),u=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(u||{}),l=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(l||{});const c={getEngine(){const o=(0,i.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==u.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(y,_,a)=>{a.r(_),a.d(_,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>C,keyboardDidClose:()=>v,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>m,setKeyboardOpen:()=>p,startKeyboardAssist:()=>t,trackViewportChanges:()=>O});var i=a(7484);a(4874),a(6225);const c="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},n={},g=!1;const d=()=>{e={},n={},g=!1},t=h=>{if(i.K.getEngine())r(h);else{if(!h.visualViewport)return;n=C(h.visualViewport),h.visualViewport.onresize=()=>{O(h),E()||M(h)?p(h):v(h)&&m(h)}}},r=h=>{h.addEventListener("keyboardDidShow",L=>p(h,L)),h.addEventListener("keyboardDidHide",()=>m(h))},p=(h,L)=>{w(h,L),g=!0},m=h=>{f(h),g=!1},E=()=>!g&&e.width===n.width&&(e.height-n.height)*n.scale>150,M=h=>g&&!v(h),v=h=>g&&n.height===h.innerHeight,w=(h,L)=>{const D=new CustomEvent(c,{detail:{keyboardHeight:L?L.keyboardHeight:h.innerHeight-n.height}});h.dispatchEvent(D)},f=h=>{const L=new CustomEvent(o);h.dispatchEvent(L)},O=h=>{e=Object.assign({},n),n=C(h.visualViewport)},C=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},3459:(y,_,a)=>{a.d(_,{c:()=>s});var i=a(5861),u=a(6225),l=a(7484);const c=e=>{if(void 0===u.d||e===l.a.None||void 0===e)return null;const n=u.d.querySelector("ion-app");return null!=n?n:u.d.body},o=e=>{const n=c(e);return null===n?0:n.clientHeight},s=function(){var e=(0,i.Z)(function*(n){let g,d,t,r;const p=function(){var w=(0,i.Z)(function*(){const f=yield l.K.getResizeMode(),O=void 0===f?void 0:f.mode;g=()=>{void 0===r&&(r=o(O)),t=!0,m(t,O)},d=()=>{t=!1,m(t,O)},null==u.w||u.w.addEventListener("keyboardWillShow",g),null==u.w||u.w.addEventListener("keyboardWillHide",d)});return function(){return w.apply(this,arguments)}}(),m=(w,f)=>{n&&n(w,E(f))},E=w=>{if(0===r||r===o(w))return;const f=c(w);return null!==f?new Promise(O=>{const h=new ResizeObserver(()=>{f.clientHeight===r&&(h.disconnect(),O())});h.observe(f)}):void 0};return yield p(),{init:p,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",g),null==u.w||u.w.removeEventListener("keyboardWillHide",d),g=d=void 0},isKeyboardVisible:()=>t}});return function(g){return e.apply(this,arguments)}}()},3830:(y,_,a)=>{a.d(_,{c:()=>u});var i=a(5861);const u=()=>{let l;return{lock:function(){var o=(0,i.Z)(function*(){const s=l;let e;return l=new Promise(n=>e=n),void 0!==s&&(yield s),e});return function(){return o.apply(this,arguments)}}()}}},5857:(y,_,a)=>{a.d(_,{c:()=>l});var i=a(6225),u=a(839);const l=(c,o,s)=>{let e;const n=()=>!(void 0===o()||void 0!==c.label||null===s()),d=()=>{const r=o();if(void 0===r)return;if(!n())return void r.style.removeProperty("width");const p=s().scrollWidth;if(0===p&&null===r.offsetParent&&void 0!==i.w&&"IntersectionObserver"in i.w){if(void 0!==e)return;const m=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),m.disconnect(),e=void 0)},{threshold:.01,root:c});m.observe(r)}else r.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{n()&&(0,u.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},3781:(y,_,a)=>{a.d(_,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(l,c,o)=>{const s=l*c/o-l+"ms",e=2*Math.PI*c/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(l,c,o)=>{const s=c/o,e=l*s-l+"ms",n=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,c,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*c+(c<o/2?180:-180)}deg)`,"animation-delay":l*c/o-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,c,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*c+(c<o/2?180:-180)}deg)`,"animation-delay":l*c/o-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,c,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":l*c/o-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,c,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":l*c/o-l+"ms"}})}}},8663:(y,_,a)=>{a.r(_),a.d(_,{createSwipeBackGesture:()=>o});var i=a(839),u=a(5085),l=a(9203);a(619);const o=(s,e,n,g,d)=>{const t=s.ownerDocument.defaultView;let r=(0,u.i)(s);const m=f=>r?-f.deltaX:f.deltaX;return(0,l.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:f=>(r=(0,u.i)(s),(f=>{const{startX:C}=f;return r?C>=t.innerWidth-50:C<=50})(f)&&e()),onStart:n,onMove:f=>{const C=m(f)/t.innerWidth;g(C)},onEnd:f=>{const O=m(f),C=t.innerWidth,h=O/C,L=(f=>r?-f.velocityX:f.velocityX)(f),D=L>=0&&(L>.2||O>C/2),b=(D?1-h:h)*C;let A=0;if(b>5){const T=b/Math.abs(L);A=Math.min(T,540)}d(D,h<=0?.01:(0,i.l)(0,h,.9999),A)}})}},5564:(y,_,a)=>{a.d(_,{w:()=>i});const i=(c,o,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(n=>{s(u(n,o))});return e.observe(c,{childList:!0,subtree:!0}),e},u=(c,o)=>{let s;return c.forEach(e=>{for(let n=0;n<e.addedNodes.length;n++)s=l(e.addedNodes[n],o)||s}),s},l=(c,o)=>{if(1!==c.nodeType)return;const s=c;return(s.tagName===o.toUpperCase()?[s]:Array.from(s.querySelectorAll(o))).find(n=>n.value===s.value)}},1269:(y,_,a)=>{a.d(_,{U:()=>d});var i=a(6242),u=a(5472),l=a(6728),c=a(6814),o=a(3044),s=a(6471);function e(t,r){1&t&&(i.TgZ(0,"div")(1,"ion-toolbar",2)(2,"ion-title",3),i._UZ(3,"ion-img",4),i.qZA(),i.TgZ(4,"ion-buttons",5),i._UZ(5,"ion-icon",6),i.qZA()()())}function n(t,r){1&t&&(i.TgZ(0,"div"),i._UZ(1,"app-header"),i.qZA())}function g(t,r){1&t&&(i.TgZ(0,"div")(1,"ion-toolbar",7)(2,"ion-grid")(3,"ion-row",3)(4,"ion-col",8),i._UZ(5,"ion-icon",9),i.qZA(),i.TgZ(6,"ion-col",10),i._UZ(7,"ion-icon",11),i.qZA(),i.TgZ(8,"ion-col",12),i._UZ(9,"ion-icon",13),i.qZA(),i.TgZ(10,"ion-col",14),i._UZ(11,"ion-icon",15),i.qZA(),i.TgZ(12,"ion-col",16),i._UZ(13,"ion-icon",17),i.qZA()()()()())}let d=(()=>{var t;class r{constructor(m){this.platform=m,this.isApp=!1,this.initializeApp()}initializeApp(){this.platform.ready().then(()=>{this.platform.is("capacitor")&&(this.isApp=!0)})}}return(t=r).\u0275fac=function(m){return new(m||t)(i.Y36(u.t4))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-home"]],decls:6,vars:4,consts:[[4,"ngIf"],[3,"fullscreen"],["color","primary",1,"test",2,"--padding-top","var(--ion-safe-area-top)"],[1,"ion-text-center"],["src","../../../assets/images/ECP_Mobile_Assets.plus_logo_spash.svg",2,"width","103px","margin","auto"],["slot","end"],["name","qr-code-outline",1,"header-qrcode"],[1,"bottom-bar","ion-safe-bottom"],["routerLink","/home"],["name","home-outline","routerLinkActive","active-link"],["routerLink","/promotions"],["name","library-outline","routerLinkActive","active-link"],["routerLink","/search"],["name","search-outline","routerLinkActive","active-link"],["routerLink","/cart"],["name","cart-outline","routerLinkActive","active-link"],["routerLink","/more"],["name","ellipsis-horizontal-outline","routerLinkActive","active-link"]],template:function(m,E){1&m&&(i.YNc(0,e,6,0,"div",0)(1,n,2,0,"div",0),i.TgZ(2,"ion-content",1)(3,"div"),i._uU(4,"badjoras"),i.qZA()(),i.YNc(5,g,14,0,"div",0)),2&m&&(i.Q6J("ngIf",E.isApp),i.xp6(1),i.Q6J("ngIf",!E.isApp),i.xp6(1),i.Q6J("fullscreen",!0),i.xp6(3),i.Q6J("ngIf",E.isApp))},dependencies:[c.O5,l.Sm,l.wI,l.W2,l.jY,l.gu,l.Xz,l.Nd,l.wd,l.sr,l.YI,o.rH,o.Od,s.G],styles:[".header-qrcode[_ngcontent-%COMP%]{font-size:1.33333333em;margin-right:8px}ion-searchbar.searchbar-home[_ngcontent-%COMP%]{border:0;--border-radius: 20px 20px 20px 6px;--background: white;--color: grey !important;height:100%;max-height:48px;min-height:48px;max-width:100%;--padding-top: 12px;--padding-bottom: 12px;margin:12px 16px}.test[_ngcontent-%COMP%]{--padding-top:0;--padding-end: 0;--padding-start: 0;--min-height: unset}"]}),r})()}}]);