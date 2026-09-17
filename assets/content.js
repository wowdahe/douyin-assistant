let q="",x=new Map,N=0,O=null,B=null,M="",R="",y=null,H=0,z=0,$=!0,W=null,j="",V=0,Y="",I=null,tt=0,K=0,f=null,w=null,D="",G="",u="idle";function v(){var t;if(!$)return!1;try{return!!((t=chrome.runtime)!=null&&t.id)}catch{return $=!1,!1}}function b(t,e){if(v())try{chrome.runtime.sendMessage(t,n=>{try{chrome.runtime.lastError}catch{$=!1}e==null||e(n)})}catch{$=!1}}function U(){const{pathname:t}=window.location;return t.startsWith("/follow")?"follow":t.startsWith("/user/")?"user":t.startsWith("/video/")?"video":t.startsWith("/jingxuan")?"jingxuan":"unknown"}function g(){const t=window.location.pathname.match(/^\/user\/([^/?#]+)/);if(!(!t||t[1]==="self"))return decodeURIComponent(t[1])}function pt(t){return t?new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(t):"时间未知"}function mt(){if(document.getElementById("douyin-assistant-profile-blacklist-style"))return;const t=document.createElement("style");t.id="douyin-assistant-profile-blacklist-style",t.textContent=`
    .douyin-assistant-profile-blacklist-banner {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2147483647;
      display: flex;
      min-height: 44px;
      align-items: center;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
      border-bottom: 1px solid rgba(160, 24, 46, 0.28);
      background: rgba(255, 244, 246, 0.98);
      color: #8a102f;
      font-family: Inter, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.4;
      padding: 8px 54px 8px 16px;
      box-shadow: 0 8px 22px rgba(15, 23, 42, 0.14);
    }

    .douyin-assistant-profile-blacklist-banner span {
      color: #4b5563;
      font-size: 12px;
      font-weight: 500;
    }

    .douyin-assistant-profile-blacklist-banner button {
      position: absolute;
      top: 7px;
      right: 12px;
      width: 30px;
      min-height: 30px;
      border: 1px solid rgba(138, 16, 47, 0.28);
      border-radius: 6px;
      background: #ffffff;
      color: #8a102f;
      cursor: pointer;
      font: inherit;
      line-height: 1;
    }
  `,document.documentElement.appendChild(t)}function J(){W==null||W.remove(),W=null}function it(t,e,n){if(!t||Y===t)return;mt(),J();const o=document.createElement("div");o.className="douyin-assistant-profile-blacklist-banner";const i=document.createElement("strong");i.textContent="该用户已被拉入黑名单";const r=document.createElement("span");r.textContent=`拉黑时间：${pt(e)}`;const a=document.createElement("span");a.textContent=`原因：${n||"未记录"}`;const d=document.createElement("button");d.type="button",d.title="关闭提示",d.textContent="X",d.addEventListener("click",()=>{Y=t,J()}),o.append(i,r,a,d),document.documentElement.appendChild(o),W=o}function rt(){j="",V=0,Y="",J()}function gt(){if(document.getElementById("douyin-assistant-sidepanel-guide-style"))return;const t=document.createElement("style");t.id="douyin-assistant-sidepanel-guide-style",t.textContent=`
    .douyin-assistant-sidepanel-guide {
      position: fixed;
      top: 18px;
      right: 18px;
      z-index: 2147483647;
      display: grid;
      width: min(320px, calc(100vw - 36px));
      gap: 10px;
      border: 1px solid rgba(16, 24, 40, 0.12);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 14px 34px rgba(16, 24, 40, 0.18);
      color: #1f2937;
      font-family: Inter, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
      letter-spacing: 0;
      line-height: 1.45;
      padding: 12px;
      pointer-events: auto;
    }

    .douyin-assistant-sidepanel-guide strong {
      display: block;
      color: #111827;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.35;
      padding-right: 28px;
    }

    .douyin-assistant-sidepanel-guide p {
      margin: 0;
      color: #667085;
      font-size: 12px;
      font-weight: 400;
    }

    .douyin-assistant-sidepanel-guide-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
    }

    .douyin-assistant-sidepanel-guide button {
      display: inline-flex !important;
      min-height: 30px !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid rgba(16, 24, 40, 0.14) !important;
      border-radius: 6px !important;
      background: #ffffff !important;
      color: #374151 !important;
      cursor: pointer !important;
      font: 600 12px/1 Inter, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif !important;
      letter-spacing: 0;
      padding: 0 10px !important;
      appearance: none !important;
      -webkit-appearance: none !important;
      -webkit-box-reflect: unset !important;
      filter: none !important;
      opacity: 1 !important;
      text-shadow: none !important;
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
    }

    .douyin-assistant-sidepanel-guide button:hover {
      border-color: rgba(17, 24, 39, 0.26) !important;
      background: #f9fafb !important;
      color: #374151 !important;
    }

    .douyin-assistant-sidepanel-guide .primary {
      border-color: #0f172a !important;
      background: #0f172a !important;
      color: #ffffff !important;
      box-shadow: none !important;
      transform: none !important;
    }

    .douyin-assistant-sidepanel-guide .primary:hover,
    .douyin-assistant-sidepanel-guide .primary:focus,
    .douyin-assistant-sidepanel-guide .primary:active {
      border-color: #0f172a !important;
      background: #0f172a !important;
      color: #ffffff !important;
      filter: none !important;
      opacity: 1 !important;
      text-shadow: none !important;
    }

    .douyin-assistant-sidepanel-guide-close {
      position: absolute !important;
      top: 8px !important;
      right: 8px !important;
      width: 28px !important;
      height: 28px !important;
      min-height: 28px !important;
      padding: 0 !important;
      color: #667085 !important;
    }

    .douyin-assistant-sidepanel-guide-close svg {
      display: block !important;
      width: 15px !important;
      height: 15px !important;
      margin: 0 !important;
      stroke: currentColor !important;
      flex: 0 0 auto !important;
    }
  `,document.documentElement.appendChild(t)}function at(){I==null||I.remove(),I=null}function ht(t={}){if(I||!t.force&&Date.now()-tt<30*60*1e3)return;gt();const e=document.createElement("div");e.className="douyin-assistant-sidepanel-guide",e.setAttribute("role","dialog"),e.setAttribute("aria-label","打开抖音助手");const n=document.createElement("strong");n.textContent="打开抖音助手侧边栏";const o=document.createElement("p");o.textContent="可同步关注、检查作品，并下载本地视频库。";const i=document.createElement("div");i.className="douyin-assistant-sidepanel-guide-actions";const r=document.createElement("button");r.type="button",r.className="primary",r.textContent="打开抖音助手",r.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),r.textContent="正在打开…",r.disabled=!0,b({type:"OPEN_SIDEPANEL_FROM_PAGE"},p=>{if(r.disabled=!1,p!=null&&p.ok){r.textContent="等待侧边栏打开…",window.setTimeout(()=>T({force:!0}),900),window.setTimeout(()=>T({force:!0}),1800);return}r.textContent="点击扩展图标打开",o.textContent=p!=null&&p.error?`自动打开失败：${p.error}`:"自动打开失败，请点击浏览器工具栏里的抖音助手图标。"})}),i.append(r);const a=document.createElement("button");a.type="button",a.className="douyin-assistant-sidepanel-guide-close",a.title="关闭提示",a.setAttribute("aria-label","关闭提示"),a.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',a.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),tt=Date.now(),at()}),e.append(n,o,i,a),(document.body??document.documentElement).appendChild(e),I=e}function T(t={}){v()&&b({type:"GET_SIDEPANEL_STATE"},e=>{if(e!=null&&e.ok){if(e.open){at();return}ht(t)}})}function wt(){window.setTimeout(()=>T({force:!0}),600),window.setTimeout(()=>T({force:!0}),1600),K&&window.clearInterval(K),K=window.setInterval(T,1e4)}function yt(t){const e=new Set;for(const o of Array.from(t.querySelectorAll("a[href]"))){const i=P(o.href);i&&e.add(i)}const n=t.getAttribute("data-douyin-assistant-work-id")||"";return n&&e.add(n),e}function E(t,e){if(t===document.body||t===document.documentElement)return!1;const n=t.getBoundingClientRect();if(n.width<80||n.height<80)return!1;const o=Math.max(1,window.innerWidth*window.innerHeight),i=n.width*n.height;if(n.width>Math.max(360,window.innerWidth*.55)||n.height>Math.max(420,window.innerHeight*.72)||i>o*.28)return!1;const r=yt(t);return e&&r.size>0&&!r.has(e)?!1:r.size<=1}function Z(t){const e=P(t.href);let n=null,o=t;for(;o&&o!==document.body&&o!==document.documentElement;){if(E(o,e))return o;if(!n){const i=o.getBoundingClientRect();i.width>=80&&i.height>=80&&i.width<=Math.max(360,window.innerWidth*.55)&&(n=o)}o=o.parentElement}return n??t.parentElement}function P(t){var e;try{const o=new URL(t,location.origin).searchParams.get("modal_id");if(o&&/^\d{10,}$/.test(o))return o}catch{}return((e=t.match(/\/(?:video|note)\/(\d{10,})/))==null?void 0:e[1])??""}function st(){try{const e=new URL(location.href).searchParams.get("modal_id")||"";if(/^\d{10,}$/.test(e))return e}catch{}return P(location.href)}function bt(t){return t==="queued"||t==="running"?'<svg class="douyin-assistant-page-download-spinner" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.22-8.56"/></svg>':t==="success"?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>':t==="error"?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 9v4m0 4h.01M10.3 3.7 2.5 17.2A2 2 0 0 0 4.2 20h15.6a2 2 0 0 0 1.7-2.8L13.7 3.7a2 2 0 0 0-3.4 0Z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"/></svg>'}function et(){return u==="queued"?"已排队，正在连接侧边栏":u==="running"?"正在下载当前作品":u==="success"?"当前作品已下载":u==="error"?"下载失败，点击重试":"下载当前作品到作者文件夹"}function _(){f&&(f.className=`douyin-assistant-page-download-button ${u}`,f.innerHTML=bt(u),f.title=et(),f.setAttribute("aria-label",et()),f.disabled=u==="queued"||u==="running"||u==="success")}function F(t,e="info"){w||(w=document.createElement("div"),w.className="douyin-assistant-page-download-toast",(document.body??document.documentElement).appendChild(w)),w.className=`douyin-assistant-page-download-toast ${e}`,w.textContent=t,w.hidden=!1,window.setTimeout(()=>{(w==null?void 0:w.textContent)===t&&(w.hidden=!0)},e==="error"?5e3:2800)}function xt(){return Array.from(document.querySelectorAll("video")).map(e=>({video:e,rect:e.getBoundingClientRect()})).filter(({video:e,rect:n})=>{if(n.width<180||n.height<180||n.bottom<=0||n.top>=innerHeight)return!1;const o=getComputedStyle(e);return o.display!=="none"&&o.visibility!=="hidden"&&Number(o.opacity||1)>0}).sort((e,n)=>{const o=+(!e.video.paused&&!e.video.ended)-+(!n.video.paused&&!n.video.ended);return o!==0?-o:n.rect.width*n.rect.height-e.rect.width*e.rect.height})[0]??null}function kt(){return Array.from(document.querySelectorAll("button, [role='button'], a[href], [aria-label], [data-e2e*='like' i], [data-e2e*='comment' i], [data-e2e*='collect' i], [data-e2e*='share' i]")).filter(t=>t!==f&&!t.closest(".douyin-assistant-page-download-toast")).map(t=>({element:t,rect:t.getBoundingClientRect()})).filter(({element:t,rect:e})=>{if(e.width<20||e.height<20||e.width>88||e.height>88||e.right<=0||e.left>=innerWidth||e.bottom<=0||e.top>=innerHeight)return!1;const n=getComputedStyle(t);return n.display!=="none"&&n.visibility!=="hidden"&&Number(n.opacity||1)>0}).map(({rect:t})=>t)}function vt(t,e,n,o,i=7){const r=Math.max(0,Math.min(t+n,o.right+i)-Math.max(t,o.left-i)),a=Math.max(0,Math.min(e+n,o.bottom+i)-Math.max(e,o.top-i));return r*a}function Et(){const t=o=>{var i;return(i=Array.from(document.querySelectorAll(o)).map(r=>({element:r,rect:r.getBoundingClientRect()})).find(({element:r,rect:a})=>{if(a.width<20||a.height<20||a.bottom<=0||a.top>=innerHeight||a.right<=0||a.left>=innerWidth)return!1;const d=getComputedStyle(r);return d.display!=="none"&&d.visibility!=="hidden"&&Number(d.opacity||1)>0}))==null?void 0:i.rect},e=t(".ai-douyin-entry");if(e)return{placement:"above-ar-entry",rect:e};const n=t("[data-e2e='video-avatar']");return n?{placement:"above-avatar",rect:n}:null}function At(t,e){const o=Math.max(14,Math.min(28,t.height*.08)),i=t.top+(t.height-e)/2,r=[{placement:"outside-left-center",left:t.left-e-12,top:i},{placement:"inside-left-center",left:t.left+12,top:i},{placement:"outside-right-center",left:t.right+12,top:i},{placement:"inside-right-center",left:t.right-e-12,top:i},{placement:"outside-left-top",left:t.left-e-12,top:t.top+o},{placement:"inside-left-top",left:t.left+12,top:t.top+o}].filter(c=>c.left>=8&&c.top>=8&&c.left+e<=innerWidth-8&&c.top+e<=innerHeight-8),a=kt();return r.map((c,l)=>{const s=a.reduce((m,h)=>m+vt(c.left,c.top,e,h),0);return{...c,collision:s,score:s+l*.01}}).sort((c,l)=>c.score-l.score)[0]??{placement:"inside-left-center",left:Math.min(Math.max(8,t.left+12),innerWidth-e-8),top:Math.min(Math.max(8,i),innerHeight-e-8)}}function nt(){if(!f)return;const t=st(),n=t&&!!(M&&(R==="following"||R==="back_follow"))?xt():null;if(!n){f.hidden=!0;return}G&&G!==t&&u!=="queued"&&u!=="running"&&(u="idle",D="",_()),G=t,u==="idle"&&lt(x.get(t))&&(u="success",_());const{rect:o}=n,i=42,r=Et(),a=r?{placement:r.placement,left:Math.min(Math.max(8,r.rect.left+(r.rect.width-i)/2),innerWidth-i-8),top:Math.min(Math.max(8,r.rect.top-i-12),innerHeight-i-8)}:At(o,i);f.dataset.placement=a.placement,f.style.left=`${Math.round(a.left)}px`,f.style.top=`${Math.round(a.top)}px`,f.hidden=!1}function Pt(){if(u==="queued"||u==="running")return;const t=st(),e=g();if(!t||!e||!M){F("暂时无法识别当前作品或作者","error");return}G=t,u="queued",_(),b({type:"QUEUE_PAGE_SINGLE_WORK_DOWNLOAD",accountUid:M,secUid:e,douyinWorkId:t,workUrl:location.href},n=>{if(!(n!=null&&n.ok)||!n.requestId){u="error",_(),F((n==null?void 0:n.error)||"下载请求提交失败","error");return}D=n.requestId,F("已提交下载，正在连接侧边栏")})}function St(){if(f)return f;const t=document.createElement("style");return t.textContent=`
    .douyin-assistant-page-download-button {
      position: fixed;
      z-index: 2147483646;
      display: inline-flex;
      width: 42px;
      height: 42px;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, 0.28);
      border-radius: 50%;
      background: rgba(20, 20, 23, 0.78);
      color: #ffffff;
      padding: 0;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.26);
      cursor: pointer;
      backdrop-filter: blur(8px);
      transition: background 140ms ease, transform 140ms ease, opacity 140ms ease;
    }
    .douyin-assistant-page-download-button[hidden] { display: none !important; }
    .douyin-assistant-page-download-button:hover { background: rgba(42, 42, 47, 0.94); transform: scale(1.06); }
    .douyin-assistant-page-download-button:disabled { cursor: wait; opacity: 0.88; }
    .douyin-assistant-page-download-button.success { background: rgba(18, 161, 80, 0.92); }
    .douyin-assistant-page-download-button.error { background: rgba(217, 45, 32, 0.92); }
    .douyin-assistant-page-download-button svg {
      width: 21px;
      height: 21px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .douyin-assistant-page-download-spinner { animation: douyin-assistant-page-download-spin 850ms linear infinite; }
    @keyframes douyin-assistant-page-download-spin { to { transform: rotate(360deg); } }
    .douyin-assistant-page-download-toast {
      position: fixed;
      z-index: 2147483647;
      right: 18px;
      bottom: 22px;
      max-width: min(320px, calc(100vw - 36px));
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 7px;
      background: rgba(30, 30, 34, 0.94);
      color: #ffffff;
      padding: 9px 12px;
      font: 500 13px/1.4 Inter, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
      letter-spacing: 0;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
    }
    .douyin-assistant-page-download-toast[hidden] { display: none !important; }
    .douyin-assistant-page-download-toast.success { background: rgba(12, 118, 57, 0.96); }
    .douyin-assistant-page-download-toast.error { background: rgba(164, 31, 24, 0.96); }
  `,document.documentElement.appendChild(t),f=document.createElement("button"),f.type="button",f.hidden=!0,f.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),Pt()}),_(),(document.body??document.documentElement).appendChild(f),f}function Ct(t){if(!(t instanceof Element))return null;const e=t.closest("[data-douyin-assistant-work-id]"),n=(e==null?void 0:e.getAttribute("data-douyin-assistant-work-id"))||"";if(e&&n&&E(e,n))return{link:e.querySelector("a[href]"),card:e,douyinWorkId:n};const o=t.closest("a[href]"),i=o?P(o.href):"";if(o&&i)return{link:o,card:Z(o),douyinWorkId:i};let r=t instanceof HTMLElement?t:t.parentElement;for(;r&&r!==document.body&&r!==document.documentElement;){for(const p of Array.from(r.querySelectorAll("a[href]"))){const c=P(p.href);if(c&&E(r,c))return{link:p,card:r,douyinWorkId:c}}const a=(r.textContent||r.outerHTML||"").match(/\b(\d{16,})\b/),d=(a==null?void 0:a[1])??"";if(d&&x.has(d)&&E(r,d))return{link:o,card:r,douyinWorkId:d};r=r.parentElement}return null}function It(){const t=new Set,e=[];for(const n of Array.from(document.querySelectorAll("a[href]"))){const o=n.href,i=P(o);if(!i||t.has(i))continue;t.add(i);const r=Z(n),a=(r==null?void 0:r.innerText)??n.innerText??"";e.push({douyinWorkId:i,href:o,isPinned:a.includes("置顶"),positionIndex:e.length})}return e}function dt(){const t=[],e=new Set,n=g(),o=document.querySelector("[data-e2e='user-info']")??document.body,i=Array.from(document.querySelectorAll("a[href]")).find(a=>!!P(a.href)),r=(i==null?void 0:i.getBoundingClientRect().top)??Number.POSITIVE_INFINITY;for(const a of Array.from(o.querySelectorAll("a[href*='/user/']"))){const d=(a.innerText||a.textContent||"").trim();if(!d.startsWith("@"))continue;const p=a.getBoundingClientRect();if(Number.isFinite(r)&&p.top>r)continue;const c=a.href.match(/\/user\/([^/?#]+)/);if(!c||c[1]==="self")continue;const l=decodeURIComponent(c[1]);if(!l||l===n)continue;const s=l||d;e.has(s)||(e.add(s),t.push({secUid:l,nickname:d.replace(/^@+/,"").trim()||void 0,href:a.href,source:"profile_dom",capturedAt:Date.now()}))}return t}function Tt(){const t=document.body.innerText||"";return["综合排序","最近关注","最早关注","我的关注","登录后免费畅享高清视频","未登录","用户不存在","该用户已被账号冻结","该用户被禁言","该账号还未发布过作品"].filter(n=>t.includes(n))}function Mt(){if(y)return y;const t=document.createElement("style");return t.textContent=`
    .douyin-assistant-work-overlay {
      position: fixed;
      z-index: 2147483647;
      width: min(420px, calc(100vw - 24px));
      max-height: min(420px, calc(100vh - 24px));
      overflow: auto;
      border: 1px solid rgba(31, 41, 51, 0.16);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 12px 36px rgba(31, 41, 51, 0.18);
      color: #1f2933;
      font: 12px/1.45 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      letter-spacing: 0;
      pointer-events: auto;
      user-select: text;
    }
    .douyin-assistant-work-downloaded {
      position: relative !important;
      filter: grayscale(1) brightness(0.55);
    }
    .douyin-assistant-work-unviewed {
      position: relative !important;
    }
    .douyin-assistant-work-badges {
      position: absolute;
      z-index: 2147483646;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      max-width: calc(100% - 12px);
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 4px;
      pointer-events: none;
    }
    .douyin-assistant-work-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      color: #ffffff;
      padding: 4px 7px;
      font: 700 12px/1.2 Inter, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
      letter-spacing: 0;
      white-space: nowrap;
    }
    .douyin-assistant-work-badge.downloaded {
      background: rgba(31, 41, 51, 0.82);
    }
    .douyin-assistant-work-badge.unviewed {
      background: rgba(214, 88, 0, 0.9);
    }
    .douyin-assistant-work-downloaded::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 2147483645;
      border-radius: inherit;
      background: rgba(31, 41, 51, 0.62);
      pointer-events: none;
    }
    .douyin-assistant-work-overlay header {
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      border-bottom: 1px solid #e5e9ef;
      background: rgba(255, 255, 255, 0.98);
      padding: 8px 10px;
      font-family: Inter, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
    }
    .douyin-assistant-work-overlay strong {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }
    .douyin-assistant-work-overlay span {
      flex: 0 0 auto;
      color: #667085;
      font-size: 11px;
    }
    .douyin-assistant-work-overlay button {
      display: inline-flex;
      width: 26px;
      height: 26px;
      align-items: center;
      justify-content: center;
      border: 1px solid #cfd6df;
      border-radius: 6px;
      background: #ffffff;
      color: #3f4a59;
      cursor: pointer;
      pointer-events: auto;
    }
    .douyin-assistant-work-overlay button:hover {
      border-color: #8fa1b3;
      background: #f9fafb;
    }
    .douyin-assistant-work-overlay pre {
      margin: 0;
      padding: 10px;
      white-space: pre-wrap;
      word-break: break-word;
    }
  `,document.documentElement.appendChild(t),y=document.createElement("div"),y.className="douyin-assistant-work-overlay",y.hidden=!0,y.addEventListener("mouseenter",ut),y.addEventListener("mouseleave",()=>Nt()),(document.body??document.documentElement).appendChild(y),y}function lt(t){if(!t)return!1;if(t.downloadStatus==="downloaded")return!0;const e=typeof t.publishedAt=="number"?t.publishedAt:null;return!!(O&&e&&e<=O)}function _t(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?null:e<1e10?e*1e3:e}function Wt(t){var r;const e=t.video,o=(Array.isArray((r=e==null?void 0:e.play_addr)==null?void 0:r.url_list)?e.play_addr.url_list.filter(a=>typeof a=="string"):[]).some(a=>/mime_type=video|douyinvod|\/video\//i.test(a)&&!/\.mp3(?:$|\?)/i.test(a)),i=Array.isArray(t.image_infos)&&t.image_infos.length>0||Array.isArray(t.images)&&t.images.length>0;return o?"video":i?"image":"unknown"}function Lt(t){let e;try{e=JSON.parse(t)}catch{return}if(!(!Array.isArray(e.aweme_list)||e.aweme_list.length===0)){for(const n of e.aweme_list){const o=String(n.aweme_id||"");o&&x.set(o,{douyinWorkId:o,desc:typeof n.desc=="string"?n.desc:void 0,mediaType:Wt(n),publishedAt:_t(n.create_time),isPinned:!!n.is_top,rawApiData:n})}N=Date.now(),A()}}function ut(){H&&(window.clearTimeout(H),H=0)}function Nt(){ut(),H=window.setTimeout(()=>ct(),180)}function ct(t){y&&(y.hidden=!0)}function X(t,e){for(const o of Array.from(t.querySelectorAll(":scope > .douyin-assistant-work-badges")))o.remove();if(e.length===0)return;const n=document.createElement("div");n.className="douyin-assistant-work-badges";for(const o of e){const i=document.createElement("span");i.className=`douyin-assistant-work-badge ${o.className}`,i.textContent=o.text,n.appendChild(i)}t.appendChild(n)}function L(t){t.classList.remove("douyin-assistant-work-downloaded","douyin-assistant-work-unviewed"),t.removeAttribute("data-douyin-assistant-work-id"),X(t,[])}function Q(t,e){var d;const n=x.get(e),o=typeof(n==null?void 0:n.publishedAt)=="number"?n.publishedAt:null,i=lt(n),r=!!(B&&o&&o>B);if(!E(t,e)){L(t);return}const a=(d=t.parentElement)==null?void 0:d.closest(".douyin-assistant-work-downloaded, .douyin-assistant-work-unviewed");if(a&&E(a,e)){L(t),(i||r)&&(a.setAttribute("data-douyin-assistant-work-id",e),a.classList.toggle("douyin-assistant-work-downloaded",i),a.classList.toggle("douyin-assistant-work-unviewed",r),X(a,[...i?[{className:"downloaded",text:"已下载"}]:[],...r?[{className:"unviewed",text:"未浏览"}]:[]]));return}a&&L(a);for(const p of Array.from(t.querySelectorAll(".douyin-assistant-work-downloaded, .douyin-assistant-work-unviewed")))L(p);t.classList.toggle("douyin-assistant-work-downloaded",i),t.classList.toggle("douyin-assistant-work-unviewed",r),t.setAttribute("data-douyin-assistant-work-id",e),X(t,[...i?[{className:"downloaded",text:"已下载"}]:[],...r?[{className:"unviewed",text:"未浏览"}]:[]])}function Dt(){for(const t of Array.from(document.querySelectorAll(".douyin-assistant-work-downloaded, .douyin-assistant-work-unviewed"))){const e=t.getAttribute("data-douyin-assistant-work-id")||"";(!e||!E(t,e))&&L(t)}}function Ot(){if(U()!=="user")return;Mt(),Dt();const t=new Set;for(const e of Array.from(document.querySelectorAll("a[href]"))){const n=P(e.href);if(!n)continue;const o=Z(e);!o||t.has(o)||(t.add(o),Q(o,n))}for(const e of Array.from(document.querySelectorAll("li, [class*='item' i], [class*='card' i], [role='button']"))){if(t.has(e))continue;const n=(e.textContent||e.outerHTML||"").match(/\b(\d{16,})\b/),o=(n==null?void 0:n[1])??"";!o||!x.has(o)||E(e,o)&&(t.add(e),Q(e,o))}}function A(){z||(z=window.setTimeout(()=>{z=0,Ot()},180))}function ft(){if(!v())return;const t=g();if(!t){q="",x=new Map,N=0,M="",R="",O=null,B=null;return}t===q&&Date.now()-N<3e4||(q=t,b({type:"GET_PROFILE_WORK_RECORDS",secUid:t},e=>{if(!(e!=null&&e.ok)||t!==g())return;const n=Array.isArray(e.works)?e.works:[],o=new Map(x);for(const i of n)i.douyinWorkId&&o.set(i.douyinWorkId,i);x=o,M=typeof e.accountUid=="string"?e.accountUid:"",R=typeof e.accountFollowState=="string"?e.accountFollowState:"",O=typeof e.worksDownloadedThroughPublishedAt=="number"?e.worksDownloadedThroughPublishedAt:null,B=typeof e.lastManualBrowsedAt=="number"?e.lastManualBrowsedAt:null,N=Date.now(),A()}))}function Bt(){if(!v())return;const t=g();if(!t){rt();return}t===j&&Date.now()-V<3e4||(j=t,b({type:"GET_PROFILE_BLACKLIST_STATUS",secUid:t},e=>{t===g()&&(V=Date.now(),e!=null&&e.ok&&e.blacklisted&&e.uid&&it(e.uid,e.blacklistedAt,e.reason))}))}function ot(){v()&&b({type:"INJECT_WORK_POST_INTERCEPTOR"})}function Rt(){St(),document.addEventListener("mouseover",e=>{if(U()!=="user")return;ft();const n=Ct(e.target);if(!n)return;const{card:o,douyinWorkId:i}=n;o&&Q(o,i)}),window.addEventListener("scroll",()=>{A()},{passive:!0}),new MutationObserver(()=>A()).observe(document.documentElement,{childList:!0,subtree:!0}),window.setInterval(A,1500),window.setInterval(nt,350),window.addEventListener("resize",nt,{passive:!0})}function Ut(){const t=Date.now();return{pageType:U(),url:window.location.href,title:document.title,secUid:g(),works:It(),profileMentions:dt(),visibleTextHints:Tt(),capturedAt:t}}if(!window.__douyinAssistantContentLoaded){window.__douyinAssistantContentLoaded=!0;let t="",e="",n=0;const o=()=>{if(!v()||U()!=="user")return;const l=g();if(!l)return;const s=Date.now(),m=`${l}|${location.pathname}`;m===e&&s-n<45e3||(e=m,n=s,b({type:"PROFILE_PAGE_VISITED",secUid:l,url:location.href,capturedAt:s}))},i=()=>{if(!v()||U()!=="user")return;const l=g();if(!l)return;const s=dt(),m=`${location.href}|${s.map(h=>`${h.secUid||""}:${h.nickname||""}`).join(",")}`;m!==t&&(t=m,b({type:"PROFILE_MENTIONS_CAPTURED",secUid:l,profileMentions:s,capturedAt:Date.now()}))},r=()=>window.setTimeout(i,3500),a=()=>window.setTimeout(ft,2500),d=()=>window.setTimeout(Bt,1200),p=()=>window.setTimeout(o,1800);Rt(),wt(),ot(),d(),p(),r(),a(),window.setTimeout(A,3500),window.setTimeout(A,5500),window.setTimeout(A,8500);let c=location.href;window.setInterval(()=>{location.href!==c&&(c=location.href,ct(),q="",x=new Map,N=0,M="",R="",O=null,B=null,rt(),ot(),T(),d(),p(),r(),a())},1e3),window.addEventListener("message",l=>{var m,h,k;if(l.source!==window)return;const s=l.data;if((s==null?void 0:s.source)==="douyin-assistant-main"){if(s.type==="AWEME_POST_RESPONSE"&&((m=s.url)!=null&&m.includes("/aweme/v1/web/aweme/post/"))&&typeof s.body=="string"){Lt(s.body);const S=g();S&&b({type:"PROFILE_WORKS_RESPONSE_CAPTURED",secUid:S,url:s.url,body:s.body,capturedAt:s.capturedAt||Date.now()});return}if(s.type==="PROFILE_OTHER_RESPONSE"&&((h=s.url)!=null&&h.includes("/aweme/v1/web/user/profile/other/"))&&typeof s.body=="string"){const S=g();S&&b({type:"PROFILE_OTHER_RESPONSE_CAPTURED",secUid:S,url:s.url,body:s.body,capturedAt:s.capturedAt||Date.now()},C=>{S===g()&&C!=null&&C.ok&&C.blacklisted&&C.uid&&(j=S,V=Date.now(),it(C.uid,C.blacklistedAt))});return}s.type==="FOLLOWING_LIST_RESPONSE"&&(!((k=s.url)!=null&&k.includes("/aweme/v1/web/user/following/list/"))||typeof s.body!="string"||b({type:"FOLLOW_PAGE_FOLLOWING_RESPONSE",url:s.url,body:s.body,capturedAt:s.capturedAt||Date.now()}))}});try{if(!v())throw new Error("Extension context invalidated");chrome.runtime.onMessage.addListener((l,s,m)=>{if((l==null?void 0:l.type)==="GET_PAGE_SNAPSHOT")return m(Ut()),!1;if((l==null?void 0:l.type)==="PAGE_SINGLE_WORK_DOWNLOAD_STATUS"){const h=typeof l.requestId=="string"?l.requestId:"";if(!h||D&&h!==D)return!1;const k=String(l.status||"");return k==="running"?u="running":k==="success"?u="success":k==="error"?u="error":u="queued",D=h,_(),typeof l.message=="string"&&l.message&&F(l.message,k==="success"?"success":k==="error"?"error":"info"),m({ok:!0}),!1}return!1})}catch{}}
