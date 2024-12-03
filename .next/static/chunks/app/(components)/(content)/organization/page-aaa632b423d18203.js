(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{3090:function(e,t,n){Promise.resolve().then(n.bind(n,2772))},2772:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var a=n(7437),r=n(2265),i=n(3073),s=n(6463),o=n(2513),l=n(7592),d=n(9627),c=n(8344),u=n(9354),m=n(4446),p=n(4096),f=n(7138);let x=e=>{let{items:t,className:n}=e,[i,s]=(0,r.useState)(null);return(0,a.jsx)("div",{className:(0,u.cn)("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",n),children:t.map((e,t)=>(0,a.jsxs)(f.default,{href:null==e?void 0:e.OrganizationWebsite,className:"relative group  block p-2 h-full w-full",onMouseEnter:()=>s(t),onMouseLeave:()=>s(null),children:[(0,a.jsx)(m.M,{children:i===t&&(0,a.jsx)(p.E.span,{className:"absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15,delay:.2}}})}),(0,a.jsxs)(h,{children:[(0,a.jsx)(g,{children:e.OrganizationName}),(0,a.jsxs)(v,{children:["Contact : ",e.OrganizationPhone]}),(0,a.jsxs)(v,{children:["Website: ",e.OrganizationWebsite]}),(0,a.jsxs)(v,{children:["CreatedAt:"," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.createdAt))," "]})]})]},null==e?void 0:e.OrganizationWebsite))})},h=e=>{let{className:t,children:n}=e;return(0,a.jsx)("div",{className:(0,u.cn)("rounded-2xl h-full w-full p-4 overflow-hidden bg-background border border-border relative z-20",t),children:(0,a.jsx)("div",{className:"relative z-50",children:(0,a.jsx)("div",{className:"p-4",children:n})})})},g=e=>{let{className:t,children:n}=e;return(0,a.jsx)("h4",{className:(0,u.cn)("text-zinc-100 font-bold tracking-wide mt-4",t),children:n})},v=e=>{let{className:t,children:n}=e;return(0,a.jsx)("p",{className:(0,u.cn)("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",t),children:n})};var b=e=>{let{UserId:t}=e,[n,i]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{try{var e,n;let a=await (0,c.$9)(t);console.log(null==a?void 0:null===(e=a.response)||void 0===e?void 0:e.data),i((null==a?void 0:null===(n=a.response)||void 0===n?void 0:n.data)||[])}catch(e){console.error("Error fetching data:",e)}})()},[t]),(0,a.jsx)("div",{className:"max-w-5xl mx-auto px-8",children:n.length>0?(0,a.jsx)(x,{items:n}):(0,a.jsx)("p",{className:"text-neutral-400 text-center",children:"No organizations available."})})},j=n(9730),y=n(402),w=n(6763),N=n(9023);let _=e=>{let{children:t,className:n}=e;return(0,a.jsx)("div",{className:(0,u.cn)("flex flex-col space-y-2 w-full",n),children:t})};var z=()=>{let e=(0,s.useRouter)(),t=(0,w.pm)(),{isSignedIn:n,user:u,isLoaded:m}=(0,i.aF)(),[p,f]=(0,r.useState)({userId:null==u?void 0:u.id,OrganizationName:"",OrganizationWebsite:"",organizationEmail:"",OrganizationPhone:"",isActive:!0}),[x,h]=(0,r.useState)(0),[g,v]=(0,r.useState)(!1);if(!n)return e.push("/sign-in"),(0,a.jsx)("div",{children:"Redirecting..."});if(!m)return(0,a.jsx)("div",{children:"Loading....."});function z(e){f({...p,[e.target.name]:e.target.value}),console.log(p)}async function O(e){e.preventDefault(),v(!0);try{var n;let e=await (0,c.Fi)(p);if((null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.status)=="Success")t.toast({title:"Organization Created",description:"The organization was successfully created."}),h(e=>e+1);else throw Error("Failed to create organization.")}catch(e){t.toast({title:"Error",description:"Something went wrong!"})}finally{v(!1)}}return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between px-5 py-2 pt-4",children:[(0,a.jsx)("div",{className:"text-lg font-medium",children:"Organisation"}),(0,a.jsxs)(N.u_,{children:[(0,a.jsx)(N.iq,{children:(0,a.jsxs)("button",{className:"relative grid items-center overflow-hidden rounded-full px-3 py-1.5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-transform duration-200",style:{width:"fit-content",height:"fit-content"},children:[(0,a.jsx)("span",{className:"spark mask-gradient absolute inset-0 h-full w-full animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"}),(0,a.jsx)("span",{className:"backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900"}),(0,a.jsx)("span",{className:"h-full w-full absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40 blur-md"}),(0,a.jsxs)("span",{className:"z-10 flex items-center justify-center gap-1.5 px-2 text-sm text-neutral-100",children:[(0,a.jsx)(o.Z,{className:"w-4 h-4"}),"Create Org.",(0,a.jsx)(l.Z,{className:"w-4 h-4"})]})]})}),(0,a.jsx)(N.fe,{children:(0,a.jsx)(N.hz,{children:(0,a.jsxs)("div",{className:"max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-background",children:[(0,a.jsx)("h2",{className:"font-bold text-xl text-neutral-200",children:"Welcome to Chit Chat"}),(0,a.jsx)("p",{className:"text-sm max-w-sm mt-2 text-neutral-300",children:"Fill in your Organization information for creating the Org"}),(0,a.jsxs)("form",{className:"my-8",onSubmit:O,children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4",children:[(0,a.jsxs)(_,{children:[(0,a.jsx)(y._,{htmlFor:"firstname",children:"Organization Name"}),(0,a.jsx)(j.I,{id:"firstname",placeholder:"John Doe",type:"text",name:"OrganizationName",onChange:z})]}),(0,a.jsxs)(_,{children:[(0,a.jsx)(y._,{htmlFor:"lastname",children:"Organization Phone"}),(0,a.jsx)(j.I,{id:"lastname",placeholder:"(+1) 1234567893",type:"number",name:"OrganizationPhone",onChange:z})]})]}),(0,a.jsxs)(_,{className:"mb-4",children:[(0,a.jsx)(y._,{htmlFor:"email",children:"Organization Email"}),(0,a.jsx)(j.I,{id:"email",placeholder:"apurvjha123@gmail.com",type:"email",name:"organizationEmail",onChange:z})]}),(0,a.jsxs)(_,{className:"mb-4",children:[(0,a.jsx)(y._,{htmlFor:"email",children:"Organization Website"}),(0,a.jsx)(j.I,{id:"url",placeholder:"https://apurvjha.vercel.app",type:"url",name:"OrganizationWebsite",onChange:z})]}),(0,a.jsx)(N.mz,{className:"gap-4",children:(0,a.jsx)("button",{type:"submit",disabled:g,className:"bg-background text-gray-100 text-sm px-2 py-2 rounded-md border border-border w-28 flex items-center justify-center",children:g?(0,a.jsx)(d.Z,{className:"animate-spin w-4 h-4"}):"Submit"})})]})]})})})]})]}),(0,a.jsx)(b,{UserId:null==u?void 0:u.id},x)]})}},8344:function(e,t,n){"use strict";n.d(t,{$9:function(){return i},BX:function(){return l},Fi:function(){return u},Lc:function(){return s},Mo:function(){return m},Pd:function(){return c},Wi:function(){return o},XU:function(){return d}});var a=n(8472);let r=(0,n(4443).K)({Production:!0}),i=async e=>(await a.Z.get(r+"/api/v1/newOrganization",{params:{UserId:e}})).data,s=async e=>(await a.Z.post(r+"/api/v1/addAiTrainingModel",e)).data,o=async e=>await a.Z.post(r+"/api/v1/upload",e),l=async e=>await a.Z.post(r+"/api/v1/upload/url",{resource_url:e}),d=async e=>(await a.Z.get(r+"/api/v1/addAiTrainingModel",{params:{UserId:e}})).data,c=async e=>(await a.Z.get(r+"/api/v1/addAiTrainingModel/key",{params:{originalAPIKey:e}})).data,u=async e=>await a.Z.post(r+"/api/v1/newOrganization",e),m=async e=>await a.Z.post(r+"/signup",e)},4443:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});let a=e=>(e.Production,"https://api.chit-chat.fun")},9023:function(e,t,n){"use strict";n.d(t,{fe:function(){return p},hz:function(){return f},iq:function(){return m},mz:function(){return x},u_:function(){return u}});var a=n(7437),r=n(9354),i=n(4446),s=n(4096),o=n(2265);let l=(0,o.createContext)(void 0),d=e=>{let{children:t}=e,[n,r]=(0,o.useState)(!1);return(0,a.jsx)(l.Provider,{value:{open:n,setOpen:r},children:t})},c=()=>{let e=(0,o.useContext)(l);if(!e)throw Error("useModal must be used within a ModalProvider");return e};function u(e){let{children:t}=e;return(0,a.jsx)(d,{children:t})}let m=e=>{let{children:t,className:n}=e,{setOpen:i}=c();return(0,a.jsx)("button",{className:(0,r.cn)("px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",n),onClick:()=>i(!0),children:t})},p=e=>{let{children:t,className:n}=e,{open:l}=c();(0,o.useEffect)(()=>{l?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[l]);let d=(0,o.useRef)(null),{setOpen:u}=c();return v(d,()=>u(!1)),(0,a.jsx)(i.M,{children:l&&(0,a.jsxs)(s.E.div,{initial:{opacity:0},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},className:"fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full  flex items-center justify-center z-50",children:[(0,a.jsx)(h,{}),(0,a.jsxs)(s.E.div,{ref:d,className:(0,r.cn)("min-h-[50%] max-h-[90%] md:max-w-[40%] bg-background  border border-border md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden",n),initial:{opacity:0,scale:.5,rotateX:40,y:40},animate:{opacity:1,scale:1,rotateX:0,y:0},exit:{opacity:0,scale:.8,rotateX:10},transition:{type:"spring",stiffness:260,damping:15},children:[(0,a.jsx)(g,{}),t]})]})})},f=e=>{let{children:t,className:n}=e;return(0,a.jsx)("div",{className:(0,r.cn)("flex flex-col flex-1 p-8 md:p-10",n),children:t})},x=e=>{let{children:t,className:n}=e;return(0,a.jsx)("div",{className:(0,r.cn)("flex justify-end p-4 bg-background",n),children:t})},h=e=>{let{className:t}=e;return(0,a.jsx)(s.E.div,{initial:{opacity:0},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},className:"fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ".concat(t)})},g=()=>{let{setOpen:e}=c();return(0,a.jsx)("button",{onClick:()=>e(!1),className:"absolute top-4 right-4 group",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-100 h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200",children:[(0,a.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,a.jsx)("path",{d:"M18 6l-12 12"}),(0,a.jsx)("path",{d:"M6 6l12 12"})]})})},v=(e,t)=>{(0,o.useEffect)(()=>{let n=n=>{!e.current||e.current.contains(n.target)||t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])}},9730:function(e,t,n){"use strict";n.d(t,{I:function(){return u}});var a=n(8646),r=n(7437),i=n(2265),s=n(9354),o=n(5282),l=n(4096),d=n(4924);function c(){let e=(0,a._)(["\n        radial-gradient(\n          "," circle at ","px ","px,\n          var(--blue-500),\n          transparent 80%\n        )\n      "]);return c=function(){return e},e}let u=i.forwardRef((e,t)=>{let{className:n,type:a,...u}=e,[m,p]=i.useState(!1),f=(0,o.c)(0),x=(0,o.c)(0);return(0,r.jsx)(l.E.div,{style:{background:(0,d.Y)(c(),m?"100px":"0px",f,x)},onMouseMove:function(e){let{currentTarget:t,clientX:n,clientY:a}=e,{left:r,top:i}=t.getBoundingClientRect();f.set(n-r),x.set(a-i)},onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),className:"p-[2px] rounded-lg transition duration-300 group/input",children:(0,r.jsx)("input",{type:a,className:(0,s.cn)("flex h-10 w-full border-none bg-gray-900 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent \n          file:text-sm file:font-medium placeholder-text-neutral-600 \n          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600\n           disabled:cursor-not-allowed disabled:opacity-50\n           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]\n           group-hover/input:shadow-none transition duration-400\n           ",n),ref:t,...u})})});u.displayName="Input"},402:function(e,t,n){"use strict";n.d(t,{_:function(){return d}});var a=n(7437),r=n(2265),i=n(8364),s=n(2218),o=n(9354);let l=(0,s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(i.f,{ref:t,className:(0,o.cn)(l(),n),...r})});d.displayName=i.f.displayName},6763:function(e,t,n){"use strict";n.d(t,{pm:function(){return m}});var a=n(2265);let r=0,i=new Map,s=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:n}=t;return n?s(n):e.toasts.forEach(e=>{s(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function c(e){d=o(d,e),l.forEach(e=>{e(d)})}function u(e){let{...t}=e,n=(r=(r+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>c({type:"DISMISS_TOAST",toastId:n});return c({type:"ADD_TOAST",toast:{...t,id:n,open:!0,onOpenChange:e=>{e||a()}}}),{id:n,dismiss:a,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:n}})}}function m(){let[e,t]=a.useState(d);return a.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},9354:function(e,t,n){"use strict";n.d(t,{cn:function(){return i}});var a=n(4839),r=n(6164);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,a.W)(t))}}},function(e){e.O(0,[73,868,482,472,452,971,23,744],function(){return e(e.s=3090)}),_N_E=e.O()}]);