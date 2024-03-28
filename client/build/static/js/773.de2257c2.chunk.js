"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[773],{9710:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(83791),o=n(80667),a=(n(72791),n(80184));const s=e=>{let{text:t,delayValue:n}=e;const s=[...t];return(0,a.jsx)(r.M,{children:s.map(((e,t)=>(0,a.jsx)(o.E.span,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},exit:{opacity:0},transition:{delay:t*n,duration:.5},children:e},t)))})}},59618:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(68870);const{styled:o}=n(85588),a=o(r.Z)((e=>{let{theme:t}=e;return{mt:"20px",pb:"20px",height:"75vh","& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .MuiDataGrid-columnHeaders":{backgroundColor:t.palette.background.alt,color:t.palette.secondary.main,borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:t.palette.primary.light},"& .MuiDataGrid-footerContainer":{backgroundColor:t.palette.background.alt,color:t.palette.secondary[100],borderTop:"none"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{color:"".concat(t.palette.secondary.main," !important")}}}))},52729:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(34265),o=n(22501),a=n(43395),s=n(91330),i=n(33788),l=n(5849),d=n(48724),c=n(22500),u=n(80184);const v=e=>{let{csvOptions:t,showExport:n,data:v}=e;return(0,u.jsx)(r.D,{children:(0,u.jsxs)(c.Z,{width:"100%",sx:{flexWrap:"wrap"},children:[(0,u.jsxs)(c.Z,{children:[(0,u.jsx)(o.S,{}),(0,u.jsx)(a.L,{}),n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Zh,{csvOptions:t,printOptions:{disableToolbarButton:!0}}),(0,u.jsx)(l.Z,{name:"print",onClick:()=>alert("Print"),variant:"text",startIcon:(0,u.jsx)(d.Z,{}),children:"PDF"})]})]}),(0,u.jsx)(i.T,{})]})})}},72625:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(13967),o=n(95193),a=n(4567),s=n(68870),i=n(80184);const l=e=>{let{description:t}=e;const n=(0,r.Z)(),l=(0,o.Z)("(min-width: 600px)");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{fontSize:"1.3rem",variant:"h2",fontWeight:"bold",color:"secondary",children:"About This Event"}),(0,i.jsx)(s.Z,{borderRadius:"0.55rem",width:l?"90%":"100%",mt:2,sx:{backgroundImage:"none",backgroundColor:n.palette.background.alt,p:"1rem "},children:(0,i.jsx)(a.Z,{textAlign:"left",fontSize:"1rem",children:t})})]})}},79912:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(95193),o=n(13967),a=n(4567),s=n(68870),i=n(81153),l=n(49936),d=n(1588),c=n(72567),u=n(72426),v=n.n(u),p=n(94721),m=n(80667),h=(n(72791),n(80184));const x=e=>{let{icon:t,title:n,value:o,last:l,index:d}=e;const c=(0,r.Z)("(min-width: 600px)");return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(i.ZP,{component:m.E.div,initial:{y:20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{delay:.15*d},exit:{y:20,opacity:0},item:!0,xs:12,sm:12,md:4,lg:4,children:(0,h.jsxs)(s.Z,{display:"flex",gap:2,children:[(0,h.jsxs)(s.Z,{display:"flex",gap:1,children:[t,(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(a.Z,{color:"secondary",fontSize:!c&&"1rem",fontWeight:"bold",children:n}),(0,h.jsx)(a.Z,{fontSize:!c&&"1rem",children:o})]})]}),!l&&c&&(0,h.jsx)(p.Z,{orientation:"vertical",flexItem:!0})]})})})},g=e=>{let{name:t,banner:n,startDate:u,venue:p,organizedBy:m}=e;const g=(0,r.Z)("(min-width: 600px)"),y=(0,o.Z)(),Z=[{icon:(0,h.jsx)(c.Z,{color:"secondary"}),title:"Date",value:v()(new Date(u)).format("Do MMMM YYYY, h:mm A"),last:!1},{icon:(0,h.jsx)(d.Z,{color:"secondary"}),title:"Venue",value:p,last:!1},{icon:(0,h.jsx)(l.Z,{color:"secondary"}),title:"Organizers",value:m,last:!0}];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:"".concat("http://localhost:8000/","assets/").concat(n),alt:"banner",width:g?"90%":"100%"}),(0,h.jsx)(a.Z,{mt:2,fontSize:g?"2rem":"1.5rem",variant:"h1",fontWeight:"bold",width:g?"90%":"100%",color:"secondary",children:t}),(0,h.jsx)(s.Z,{borderRadius:"0.55rem",width:g?"90%":"100%",mt:2,sx:{backgroundImage:"none",backgroundColor:y.palette.background.alt,p:"1rem "},children:(0,h.jsx)(i.ZP,{container:!0,spacing:g?2:3,children:Z.map(((e,t)=>(0,h.jsx)(x,{index:t,icon:e.icon,title:e.title,value:e.value,last:e.last},t)))})})]})}},26869:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(72791),o=n(55931),a=n(13967),s=n(95193),i=n(5574),l=n(25256),d=n(29464),c=n(4567),u=n(90977),v=n(68870),p=n(81153),m=n(5849),h=n(29823),x=n(11087),g=n(79912),y=n(72625),Z=n(80184);const j=r.forwardRef((function(e,t){return(0,Z.jsx)(o.Z,{direction:"up",ref:t,...e})})),b=e=>{let{openDialog:t,params:n,handleCloseDialog:r,handleClickOpen:o,showOrder:b}=e;const f=(0,a.Z)(),E=(0,s.Z)("(min-width: 600px)");return(0,Z.jsx)("div",{children:(0,Z.jsxs)(i.Z,{fullScreen:!0,open:t,onClose:r,TransitionComponent:j,sx:{backgroundColor:f.palette.primary.light,color:f.palette.secondary[100]},children:[(0,Z.jsx)(l.Z,{sx:{position:"sticky",backgroundImage:"none",backgroundColor:f.palette.background.alt},children:(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(c.Z,{sx:{ml:2,flex:1,fontWeight:"bold"},color:"secondary",variant:"h3",component:"div",children:"Event Details"}),(0,Z.jsx)(u.Z,{edge:"end",color:"inherit",onClick:r,"aria-label":"close",children:(0,Z.jsx)(h.Z,{})})]})}),(0,Z.jsx)(v.Z,{padding:"1rem",width:"100%",sx:{backgroundColor:f.palette.background.default,margin:"auto",display:"block",overflow:"auto",minHeight:"100vh"},children:n&&(0,Z.jsxs)(p.ZP,{width:"100%",margin:"auto",container:!0,spacing:E&&2,children:[(0,Z.jsx)(p.ZP,{item:!0,xs:12,sm:12,md:7,lg:7,children:(0,Z.jsx)(g.Z,{name:n.row.name,banner:n.row.bannerName,startDate:n.row.startDate,endDate:n.row.endDate,venue:n.row.venue,organizedBy:n.row.committee[0].name,createdBy:n.row.createdBy[0].name,dialog:!0})}),(0,Z.jsxs)(p.ZP,{item:!0,xs:12,sm:12,md:5,lg:5,spacing:2,children:[(0,Z.jsx)(y.Z,{description:n.row.description}),b&&(0,Z.jsx)(x.rU,{style:{textDecoration:"none"},to:"".concat("http://localhost:8000/","assets/").concat(n.row.orderName),target:"_blank",rel:"noreferrer",children:(0,Z.jsx)(m.Z,{name:"order_btn",variant:"contained",sx:{marginTop:"1.5rem",fontWeight:"bold"},size:"large",color:"secondary",children:"View Order"})})]})]})})]})})}},22500:(e,t,n)=>{n.d(t,{Z:()=>a});const{Box:r}=n(37609),{styled:o}=n(85588),a=o(r)({display:"flex",justifyContent:"space-between",alignItems:"center"})},37084:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(13967),o=n(95193),a=n(68870),s=n(4567),i=n(9710),l=n(80667),d=(n(72791),n(80184));const c=e=>{let{title:t,subtitle:n}=e;const c=(0,r.Z)(),u=(0,o.Z)("(min-width: 600px)");return(0,d.jsx)(a.Z,{overflow:"hidden",children:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(s.Z,{component:l.E.div,initial:{y:"-100%",opacity:0},animate:{y:"0%",opacity:1},transition:{delay:.4,duration:.5},variant:u?"h2":"h3",color:c.palette.secondary.dark,fontWeight:"bold",sx:{mb:"5px"},children:t}),(0,d.jsx)(s.Z,{sx:{mb:"5px"},variant:u?"h5":"h6",fontWeight:"bold",color:c.palette.secondary.accent,children:(0,d.jsx)(i.Z,{text:n,delayValue:.05})})]})})}},81773:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(72791),o=n(95193),a=n(68870),s=n(37560),i=n(80667),l=n(72426),d=n.n(l),c=n(37084),u=n(13967),v=n(97639),p=n(90977),m=n(12456),h=n(3746),x=n(73518),g=n(57689),y=n(11087),Z=n(26869),j=n(80184);const b=e=>{let{users:t,data:n,params:o}=e;const s=(0,u.Z)(),i=(0,g.s0)(),[l,d]=(0,r.useState)(!1),c=()=>{d(!0)};return(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(Z.Z,{handleOpenDialog:c,handleCloseDialog:()=>{d(!1)},openDialog:l,setOpenDialog:d,params:o}),(0,j.jsx)(v.Z,{title:"View Event Details",children:(0,j.jsx)(p.Z,{onClick:c,children:(0,j.jsx)(h.Z,{color:"success"})})}),(0,j.jsx)(v.Z,{title:"View Audience Details",children:(0,j.jsx)(p.Z,{sx:{color:s.palette.secondary[300]},onClick:()=>{i("/Registrations/".concat(o.row._id),{state:{audience:t.filter((e=>e.event[0].id===o.row._id)),eventDetails:o.row.name}})},children:(0,j.jsx)(m.Z,{})})}),(0,j.jsx)(v.Z,{title:"Download Report",children:(0,j.jsx)(p.Z,{onClick:()=>{},children:(0,j.jsxs)(y.rU,{to:"".concat("http://localhost:8000/","assets/").concat(o.row.orderName),target:"_blank",rel:"noreferrer",children:[" ",(0,j.jsx)(x.Z,{color:"info"})]})})})]})};var f=n(52729),E=n(57234),w=n(76821),D=n(59618);const T=()=>{const e=(0,o.Z)("(min-width: 600px)"),[t,n]=(0,r.useState)(null),{data:l}=(0,w.zQ)(),{data:u,isLoading:v}=(0,E.aW)();(0,r.useEffect)((()=>{if(u){const e=(e=>e.filter((e=>!0===e.status)).sort(((e,t)=>d()(new Date(t.startDate))-d()(new Date(e.startDate)))))(u);n(e)}}),[u]);const p=[{field:"name",headerName:"Event Name",minWidth:250,flex:1},{field:"committee",headerName:"Organized By",minWidth:250,flex:.6,valueGetter:e=>e.value[0].name,renderCell:e=>e.row.committee[0].name},{field:"startDate",headerName:"Date",minWidth:150,flex:.3,valueGetter:e=>e.row.startDate,valueFormatter:e=>{let{value:t}=e;return d()(new Date(t)).format("Do MMM YYYY")},renderCell:e=>d()(new Date(e.row.startDate)).format("Do MMM YYYY"),sortComparator:(e,t)=>d()(new Date(e))-d()(new Date(t))},{field:"registrations",headerName:"Registrations",type:"number",minWidth:120,flex:.3,valueGetter:e=>null===l||void 0===l?void 0:l.filter((t=>t.event[0].id===e.row._id)).length,renderCell:e=>null===l||void 0===l?void 0:l.filter((t=>t.event[0].id===e.row._id)).length},{field:"actions",headerName:"Actions",type:"actions",minWidth:250,renderCell:e=>(0,j.jsx)(b,{data:t,users:l,params:e})}];return(0,j.jsxs)(a.Z,{m:e?"1rem 2.5rem":"0.8rem",position:"relative",component:i.E.div,initial:{opacity:0},animate:{opacity:1},transition:{delay:.1,ease:"easeInOut"},children:[(0,j.jsx)(c.Z,{title:"EVENT LOGS",subtitle:"Generate Event Reports."}),(0,j.jsx)(D.Z,{children:(0,j.jsx)(s._$,{loading:v,getRowId:e=>e._id,rows:t||[],columns:p,components:{Toolbar:f.Z},componentsProps:{toolbar:{csvOptions:{fileName:"event-log"},showExport:!0,events:t}}})})]})}},57234:(e,t,n)=>{n.d(t,{D3:()=>p,DX:()=>x,N1:()=>a,Pq:()=>s,Tl:()=>c,V8:()=>m,aW:()=>l,cy:()=>u,gV:()=>v,h6:()=>h,ru:()=>o,zJ:()=>d,zu:()=>i});const r=n(21575).h.injectEndpoints({endpoints:e=>({createEvent:e.mutation({query:e=>({url:"event/createEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),publishedEvents:e.query({query:()=>"events/publishedEvents",providesTags:["Events"]}),unapprovedEvents:e.query({query:()=>"events/unapprovedEvents",providesTags:["Events"]}),committeeUnapprovedEvents:e.query({query:e=>({url:"events/committeeUnapprovedEvents",method:"POST",body:e}),providesTags:["Events"]}),approvedEvents:e.query({query:()=>"events/approvedEvents",providesTags:["Events"]}),committeeApprovedEvents:e.query({query:e=>({url:"events/committeeApprovedEvents",method:"POST",body:e}),providesTags:["Events"]}),approveEvent:e.mutation({query:e=>({url:"events/approveEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),getEvent:e.query({query:e=>({url:"events/getEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),deleteEvent:e.mutation({query:e=>({url:"events/deleteEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),togglePublish:e.mutation({query:e=>({url:"events/togglePublish",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),uploadReport:e.mutation({query:e=>({url:"event/uploadReport",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),uploadPhotos:e.mutation({query:e=>({url:"event/uploadPhotos",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),sendCertificates:e.mutation({query:e=>({url:"events/sendCertificate",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]})})}),{useCreateEventMutation:o,usePublishedEventsQuery:a,useUnapprovedEventsQuery:s,useCommitteeUnapprovedEventsQuery:i,useApprovedEventsQuery:l,useCommitteeApprovedEventsQuery:d,useGetEventQuery:c,useApproveEventMutation:u,useDeleteEventMutation:v,useTogglePublishMutation:p,useUploadReportMutation:m,useUploadPhotosMutation:h,useSendCertificatesMutation:x}=r},76821:(e,t,n)=>{n.d(t,{ZF:()=>s,yv:()=>a,zQ:()=>o});const r=n(21575).h.injectEndpoints({endpoints:e=>({getUsers:e.query({query:()=>"user/getUsers",providesTags:["users"]}),registerFaculty:e.mutation({query:e=>({url:"user/registerFaculty",method:"POST",body:e,formData:!0}),providesTags:["users"]}),registerStudent:e.mutation({query:e=>({url:"user/registerStudent",method:"POST",body:e,formData:!0}),providesTags:["users"]})})}),{useGetUsersQuery:o,useRegisterFacultyMutation:a,useRegisterStudentMutation:s}=r},73518:(e,t,n)=>{var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184);t.Z=(0,o.default)((0,a.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download")}}]);
//# sourceMappingURL=773.de2257c2.chunk.js.map