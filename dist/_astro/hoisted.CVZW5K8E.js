const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ui-core.CrZDTkUN.js","_astro/Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js"])))=>i.map(i=>d[i]);
import"./Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js";const E=document.getElementById("starlight__sidebar"),y=E?.querySelector("sl-sidebar-state-persist"),S="sl-sidebar-state",b=()=>{let o=[];const t=y?.dataset.hash||"";try{const e=sessionStorage.getItem(S),n=JSON.parse(e||"{}");Array.isArray(n.open)&&n.hash===t&&(o=n.open)}catch{}return{hash:t,open:o,scroll:E?.scrollTop||0}},v=o=>{try{sessionStorage.setItem(S,JSON.stringify(o))}catch{}},w=()=>v(b()),T=(o,t)=>{const e=b();e.open[t]=o,v(e)};y?.addEventListener("click",o=>{if(!(o.target instanceof Element))return;const t=o.target.closest("summary")?.closest("details");if(!t)return;const e=t.querySelector("sl-sidebar-restore"),n=parseInt(e?.dataset.index||"");isNaN(n)||T(!t.open,n)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&w()});addEventListener("pageHide",w);class k extends HTMLElement{constructor(){super();const t=this.querySelector("select");t&&t.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=e.currentTarget.value)})}}customElements.define("starlight-lang-select",k);const I="modulepreload",q=function(o){return"/my-blogs/"+o},f={},x=function(t,e,n){let u=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");u=Promise.all(e.map(l=>{if(l=q(l),l in f)return;f[l]=!0;const h=l.endsWith(".css"),s=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${s}`))return;const i=document.createElement("link");if(i.rel=h?"stylesheet":I,h||(i.as="script"),i.crossOrigin="",i.href=l,c&&i.setAttribute("nonce",c),document.head.appendChild(i),h)return new Promise((d,r)=>{i.addEventListener("load",d),i.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${l}`)))})}))}return u.then(()=>t()).catch(a=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a})};class _ extends HTMLElement{constructor(){super();const t=this.querySelector("button[data-open-modal]"),e=this.querySelector("button[data-close-modal]"),n=this.querySelector("dialog"),u=this.querySelector(".dialog-frame"),a=r=>{("href"in(r.target||{})||document.body.contains(r.target)&&!u.contains(r.target))&&l()},c=r=>{n.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),r?.stopPropagation(),window.addEventListener("click",a)},l=()=>n.close();t.addEventListener("click",c),t.disabled=!1,e.addEventListener("click",l),n.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",a)}),window.addEventListener("keydown",r=>{(r.metaKey===!0||r.ctrlKey===!0)&&r.key==="k"&&(n.open?l():c(),r.preventDefault())});let h={};try{h=JSON.parse(this.dataset.translations||"{}")}catch{}const d=this.dataset.stripTrailingSlash!==void 0?r=>r.replace(/(.)\/(#.*)?$/,"$1$2"):r=>r;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(g=>setTimeout(g,1)))(async()=>{const{PagefindUI:g}=await x(async()=>{const{PagefindUI:m}=await import("./ui-core.CrZDTkUN.js");return{PagefindUI:m}},__vite__mapDeps([0,1]));new g({element:"#starlight__search",baseUrl:"/my-blogs",bundlePath:"/my-blogs".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:h,showSubResults:!0,processResult:m=>{m.url=d(m.url),m.sub_results=m.sub_results.map(p=>(p.url=d(p.url),p))}})})})}}customElements.define("site-search",_);class H extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&&t.addEventListener("keyup",e=>this.closeOnEscape(e))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",H);const C="_top";class L extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10),this.onIdle=t=>(window.requestIdleCallback||(e=>setTimeout(e,1)))(t),this.init=()=>{const t=[...this.querySelectorAll("a")],e=s=>{if(s instanceof HTMLHeadingElement){if(s.id===C)return!0;const i=s.tagName[1];if(i){const d=parseInt(i,10);if(d>=this.minH&&d<=this.maxH)return!0}}return!1},n=s=>{if(!s)return null;const i=s;for(;s;){if(e(s))return s;for(s=s.previousElementSibling;s?.lastElementChild;)s=s.lastElementChild;const d=n(s);if(d)return d}return n(i.parentElement)},u=s=>{for(const{isIntersecting:i,target:d}of s){if(!i)continue;const r=n(d);if(!r)continue;const g=t.find(m=>m.hash==="#"+encodeURIComponent(r.id));if(g){this.current=g;break}}},a=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let c;const l=()=>{c||(c=new IntersectionObserver(u,{rootMargin:this.getRootMargin()}),a.forEach(s=>c.observe(s)))};l();let h;window.addEventListener("resize",()=>{c&&c.disconnect(),clearTimeout(h),h=setTimeout(()=>this.onIdle(l),200)})},this.onIdle(()=>this.init())}set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}getRootMargin(){const t=document.querySelector("header")?.getBoundingClientRect().height||0,e=this.querySelector("summary")?.getBoundingClientRect().height||0,n=t+e+32,u=n+53,a=document.documentElement.clientHeight;return`-${n}px 0% ${u-a}px`}}customElements.define("starlight-toc",L);class A extends L{set current(t){super.current=t;const e=this.querySelector(".display-current");e&&(e.textContent=t.textContent)}constructor(){super();const t=this.querySelector("details");if(!t)return;const e=()=>{t.open=!1};t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",e)}),window.addEventListener("click",n=>{t.contains(n.target)||e()}),window.addEventListener("keydown",n=>{if(n.key==="Escape"&&t.open){const u=t.contains(document.activeElement);if(e(),u){const a=t.querySelector("summary");a&&a.focus()}}})}}customElements.define("mobile-starlight-toc",A);export{x as _};
