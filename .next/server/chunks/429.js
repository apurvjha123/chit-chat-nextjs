exports.id=429,exports.ids=[429],exports.modules={390:(e,a,t)=>{Promise.resolve().then(t.bind(t,73175))},41840:(e,a,t)=>{"use strict";t.d(a,{$9:()=>s,BX:()=>o,Fi:()=>x,Lc:()=>i,Mo:()=>u,Pd:()=>c,Wi:()=>l,XU:()=>d});var n=t(44099);let r=(0,t(67990).K)({Production:!0}),s=async e=>(await n.Z.get(r+"/api/v1/newOrganization",{params:{UserId:e}})).data,i=async e=>(await n.Z.post(r+"/api/v1/addAiTrainingModel",e)).data,l=async e=>await n.Z.post(r+"/api/v1/upload",e),o=async e=>await n.Z.post(r+"/api/v1/upload/url",{resource_url:e}),d=async e=>(await n.Z.get(r+"/api/v1/addAiTrainingModel",{params:{UserId:e}})).data,c=async e=>(await n.Z.get(r+"/api/v1/addAiTrainingModel/key",{params:{originalAPIKey:e}})).data,x=async e=>await n.Z.post(r+"/api/v1/newOrganization",e),u=async e=>await n.Z.post(r+"/signup",e)},67990:(e,a,t)=>{"use strict";t.d(a,{K:()=>n});let n=e=>(e.Production,"https://api.chit-chat.fun")},73175:(e,a,t)=>{"use strict";t.d(a,{default:()=>Z});var n=t(10326),r=t(17577),s=t(51223),i=t(90434),l=t(25155),o=t(88129),d=t(56093),c=t(94118);let x=(0,r.createContext)(void 0),u=()=>{let e=(0,r.useContext)(x);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e},p=({children:e,open:a,setOpen:t,animate:s=!0})=>{let[i,l]=(0,r.useState)(!1);return n.jsx(x.Provider,{value:{open:void 0!==a?a:i,setOpen:void 0!==t?t:l,animate:s},children:e})},h=({children:e,open:a,setOpen:t,animate:r})=>n.jsx(p,{open:a,setOpen:t,animate:r,children:e}),f=e=>(0,n.jsxs)(n.Fragment,{children:[n.jsx(g,{...e}),n.jsx(m,{...e})]}),g=({className:e,children:a,...t})=>{let{open:r,setOpen:i,animate:o}=u();return n.jsx(n.Fragment,{children:n.jsx(l.E.div,{className:(0,s.cn)("h-full px-4 py-4 hidden  md:flex md:flex-col bg-background w-[300px] flex-shrink-0",e),animate:{width:o?r?"200px":"60px":"200px"},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),...t,children:a})})},m=({className:e,children:a,...t})=>{let{open:r,setOpen:i}=u();return n.jsx(n.Fragment,{children:(0,n.jsxs)("div",{className:(0,s.cn)("h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-background w-full"),...t,children:[n.jsx("div",{className:"flex justify-end z-20 w-full",children:n.jsx(d.Z,{className:"text-gray-200",onClick:()=>i(!r)})}),n.jsx(o.M,{children:r&&(0,n.jsxs)(l.E.div,{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"-100%",opacity:0},transition:{duration:.3,ease:"easeInOut"},className:(0,s.cn)("fixed h-full w-full inset-0 bg-background p-10 z-[100] flex flex-col justify-between",e),children:[n.jsx("div",{className:"absolute right-10 top-10 z-50 text-gray-200",onClick:()=>i(!r),children:n.jsx(c.Z,{})}),a]})})]})})},v=({link:e,className:a,...t})=>{let{open:r,animate:o}=u();return(0,n.jsxs)(i.default,{href:e.href,className:(0,s.cn)("flex items-center justify-start gap-2  group/sidebar py-2",a),...t,children:[e.icon,n.jsx(l.E.span,{animate:{display:o?r?"inline-block":"none":"inline-block",opacity:o?r?1:0:1},className:"text-gray-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0",children:e.label})]})};var b=t(31797),y=t(66775),j=t(38787),w=t(94893),N=t(21965),k=t(58525);let Z=({children:e})=>{let{user:a}=(0,y.aF)(),t=[{label:"Dashboard",href:"/dashboard",icon:n.jsx(b.Z,{className:"text-gray-200  h-5 w-5 flex-shrink-0"})},{label:"Organization",href:"/organization",icon:n.jsx(j.Z,{className:"text-gray-200 h-5 w-5 flex-shrink-0"})},{label:"Playground",href:"/playground",icon:n.jsx(w.Z,{className:"text-gray-200  h-5 w-5 flex-shrink-0"})},{label:"ChatbotConfig",href:"/chatbotconfig",icon:n.jsx(N.Z,{className:"text-gray-200 h-5 w-5 flex-shrink-0"})},{label:"Docs",href:"/docs",icon:n.jsx(k.Z,{className:"text-gray-200 h-5 w-5 flex-shrink-0"})}],[i,l]=(0,r.useState)(!1);return(0,n.jsxs)("div",{className:"flex h-screen",children:[n.jsx("div",{className:(0,s.cn)("h-full bg-background border-r border-border"),children:n.jsx(h,{open:i,setOpen:l,animate:!0,children:(0,n.jsxs)(f,{className:"justify-between gap-10",children:[n.jsx("div",{className:"flex flex-col flex-1 overflow-y-auto overflow-x-hidden",children:n.jsx("div",{className:"flex flex-col gap-2",children:t.map((e,a)=>n.jsx(v,{link:e},a))})}),n.jsx("div",{children:n.jsx(v,{link:{label:a?a.fullName:"Undefined",href:"#",icon:n.jsx(y.l8,{})}})})]})})}),n.jsx("div",{className:"flex-1 flex flex-col",children:e})]})}},87979:(e,a,t)=>{"use strict";t.d(a,{I:()=>f});var n=t(10326),r=t(17577),s=t(51223),i=t(64840),l=t(73965),o=t(74749);function d(e){let a=(0,o.h)(()=>(0,i.BX)(e)),{isStatic:t}=(0,r.useContext)(l._);if(t){let[,t]=(0,r.useState)(e);(0,r.useEffect)(()=>a.on("change",t),[])}return a}var c=t(25155),x=t(42482),u=t(95386),p=t(21551);function h(e,...a){let t=e.length;return function(e,a){let t=d(a()),n=()=>t.set(a());return n(),(0,x.L)(()=>{let a=()=>u.Wi.preRender(n,!1,!0),t=e.map(e=>e.on("change",a));return()=>{t.forEach(e=>e()),(0,u.Pn)(n)}}),t}(a.filter(p.i),function(){let n="";for(let r=0;r<t;r++){n+=e[r];let t=a[r];t&&(n+=(0,p.i)(t)?t.get():t)}return n})}let f=r.forwardRef(({className:e,type:a,...t},i)=>{let[l,o]=r.useState(!1),x=d(0),u=d(0);return n.jsx(c.E.div,{style:{background:h`
        radial-gradient(
          ${l?"100px":"0px"} circle at ${x}px ${u}px,
          var(--blue-500),
          transparent 80%
        )
      `},onMouseMove:function({currentTarget:e,clientX:a,clientY:t}){let{left:n,top:r}=e.getBoundingClientRect();x.set(a-n),u.set(t-r)},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"p-[2px] rounded-lg transition duration-300 group/input",children:n.jsx("input",{type:a,className:(0,s.cn)(`flex h-10 w-full border-none bg-gray-900 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,e),ref:i,...t})})});f.displayName="Input"},27299:(e,a,t)=>{"use strict";t.d(a,{_:()=>c});var n=t(10326),r=t(17577),s=t(45226),i=r.forwardRef((e,a)=>(0,n.jsx)(s.WV.label,{...e,ref:a,onMouseDown:a=>{a.target.closest("button, input, select, textarea")||(e.onMouseDown?.(a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));i.displayName="Label";var l=t(28671),o=t(51223);let d=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=r.forwardRef(({className:e,...a},t)=>n.jsx(i,{ref:t,className:(0,o.cn)(d(),e),...a}));c.displayName=i.displayName},38121:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>d});var n=t(19510),r=t(68570);let s=(0,r.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\CHTBTY\chit-chat-next-v2\src\components\home\navigation\Sidebar.tsx`),{__esModule:i,$$typeof:l}=s;s.default,(0,r.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\CHTBTY\chit-chat-next-v2\src\components\home\navigation\Sidebar.tsx#Logo`);let o=(0,r.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\CHTBTY\chit-chat-next-v2\src\components\home\navigation\Sidebar.tsx#default`);t(71159);let d=({children:e})=>n.jsx("div",{children:n.jsx(o,{children:e})})}};