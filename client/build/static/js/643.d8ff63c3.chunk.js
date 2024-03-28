"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[643],{9710:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(83791),o=n(80667),a=(n(72791),n(80184));const i=e=>{let{text:t,delayValue:n}=e;const i=[...t];return(0,a.jsx)(r.M,{children:i.map(((e,t)=>(0,a.jsx)(o.E.span,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},exit:{opacity:0},transition:{delay:t*n,duration:.5},children:e},t)))})}},59618:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(68870);const{styled:o}=n(85588),a=o(r.Z)((e=>{let{theme:t}=e;return{mt:"20px",pb:"20px",height:"75vh","& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .MuiDataGrid-columnHeaders":{backgroundColor:t.palette.background.alt,color:t.palette.secondary.main,borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:t.palette.primary.light},"& .MuiDataGrid-footerContainer":{backgroundColor:t.palette.background.alt,color:t.palette.secondary[100],borderTop:"none"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{color:"".concat(t.palette.secondary.main," !important")}}}))},52729:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(34265),o=n(22501),a=n(43395),i=n(91330),s=n(33788),l=n(5849),d=n(48724),c=n(22500),u=n(80184);const m=e=>{let{csvOptions:t,showExport:n,data:m}=e;return(0,u.jsx)(r.D,{children:(0,u.jsxs)(c.Z,{width:"100%",sx:{flexWrap:"wrap"},children:[(0,u.jsxs)(c.Z,{children:[(0,u.jsx)(o.S,{}),(0,u.jsx)(a.L,{}),n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.Zh,{csvOptions:t,printOptions:{disableToolbarButton:!0}}),(0,u.jsx)(l.Z,{name:"print",onClick:()=>alert("Print"),variant:"text",startIcon:(0,u.jsx)(d.Z,{}),children:"PDF"})]})]}),(0,u.jsx)(s.T,{})]})})}},72625:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(13967),o=n(95193),a=n(4567),i=n(68870),s=n(80184);const l=e=>{let{description:t}=e;const n=(0,r.Z)(),l=(0,o.Z)("(min-width: 600px)");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{fontSize:"1.3rem",variant:"h2",fontWeight:"bold",color:"secondary",children:"About This Event"}),(0,s.jsx)(i.Z,{borderRadius:"0.55rem",width:l?"90%":"100%",mt:2,sx:{backgroundImage:"none",backgroundColor:n.palette.background.alt,p:"1rem "},children:(0,s.jsx)(a.Z,{textAlign:"left",fontSize:"1rem",children:t})})]})}},79912:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(95193),o=n(13967),a=n(4567),i=n(68870),s=n(81153),l=n(49936),d=n(1588),c=n(72567),u=n(72426),m=n.n(u),p=n(94721),v=n(80667),h=(n(72791),n(80184));const g=e=>{let{icon:t,title:n,value:o,last:l,index:d}=e;const c=(0,r.Z)("(min-width: 600px)");return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(s.ZP,{component:v.E.div,initial:{y:20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{delay:.15*d},exit:{y:20,opacity:0},item:!0,xs:12,sm:12,md:4,lg:4,children:(0,h.jsxs)(i.Z,{display:"flex",gap:2,children:[(0,h.jsxs)(i.Z,{display:"flex",gap:1,children:[t,(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(a.Z,{color:"secondary",fontSize:!c&&"1rem",fontWeight:"bold",children:n}),(0,h.jsx)(a.Z,{fontSize:!c&&"1rem",children:o})]})]}),!l&&c&&(0,h.jsx)(p.Z,{orientation:"vertical",flexItem:!0})]})})})},x=e=>{let{name:t,banner:n,startDate:u,venue:p,organizedBy:v}=e;const x=(0,r.Z)("(min-width: 600px)"),y=(0,o.Z)(),b=[{icon:(0,h.jsx)(c.Z,{color:"secondary"}),title:"Date",value:m()(new Date(u)).format("Do MMMM YYYY, h:mm A"),last:!1},{icon:(0,h.jsx)(d.Z,{color:"secondary"}),title:"Venue",value:p,last:!1},{icon:(0,h.jsx)(l.Z,{color:"secondary"}),title:"Organizers",value:v,last:!0}];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:"".concat("http://localhost:8000/","assets/").concat(n),alt:"banner",width:x?"90%":"100%"}),(0,h.jsx)(a.Z,{mt:2,fontSize:x?"2rem":"1.5rem",variant:"h1",fontWeight:"bold",width:x?"90%":"100%",color:"secondary",children:t}),(0,h.jsx)(i.Z,{borderRadius:"0.55rem",width:x?"90%":"100%",mt:2,sx:{backgroundImage:"none",backgroundColor:y.palette.background.alt,p:"1rem "},children:(0,h.jsx)(s.ZP,{container:!0,spacing:x?2:3,children:b.map(((e,t)=>(0,h.jsx)(g,{index:t,icon:e.icon,title:e.title,value:e.value,last:e.last},t)))})})]})}},26869:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(72791),o=n(55931),a=n(13967),i=n(95193),s=n(5574),l=n(25256),d=n(29464),c=n(4567),u=n(90977),m=n(68870),p=n(81153),v=n(5849),h=n(29823),g=n(11087),x=n(79912),y=n(72625),b=n(80184);const Z=r.forwardRef((function(e,t){return(0,b.jsx)(o.Z,{direction:"up",ref:t,...e})})),j=e=>{let{openDialog:t,params:n,handleCloseDialog:r,handleClickOpen:o,showOrder:j}=e;const f=(0,a.Z)(),E=(0,i.Z)("(min-width: 600px)");return(0,b.jsx)("div",{children:(0,b.jsxs)(s.Z,{fullScreen:!0,open:t,onClose:r,TransitionComponent:Z,sx:{backgroundColor:f.palette.primary.light,color:f.palette.secondary[100]},children:[(0,b.jsx)(l.Z,{sx:{position:"sticky",backgroundImage:"none",backgroundColor:f.palette.background.alt},children:(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(c.Z,{sx:{ml:2,flex:1,fontWeight:"bold"},color:"secondary",variant:"h3",component:"div",children:"Event Details"}),(0,b.jsx)(u.Z,{edge:"end",color:"inherit",onClick:r,"aria-label":"close",children:(0,b.jsx)(h.Z,{})})]})}),(0,b.jsx)(m.Z,{padding:"1rem",width:"100%",sx:{backgroundColor:f.palette.background.default,margin:"auto",display:"block",overflow:"auto",minHeight:"100vh"},children:n&&(0,b.jsxs)(p.ZP,{width:"100%",margin:"auto",container:!0,spacing:E&&2,children:[(0,b.jsx)(p.ZP,{item:!0,xs:12,sm:12,md:7,lg:7,children:(0,b.jsx)(x.Z,{name:n.row.name,banner:n.row.bannerName,startDate:n.row.startDate,endDate:n.row.endDate,venue:n.row.venue,organizedBy:n.row.committee[0].name,createdBy:n.row.createdBy[0].name,dialog:!0})}),(0,b.jsxs)(p.ZP,{item:!0,xs:12,sm:12,md:5,lg:5,spacing:2,children:[(0,b.jsx)(y.Z,{description:n.row.description}),j&&(0,b.jsx)(g.rU,{style:{textDecoration:"none"},to:"".concat("http://localhost:8000/","assets/").concat(n.row.orderName),target:"_blank",rel:"noreferrer",children:(0,b.jsx)(v.Z,{name:"order_btn",variant:"contained",sx:{marginTop:"1.5rem",fontWeight:"bold"},size:"large",color:"secondary",children:"View Order"})})]})]})})]})})}},22500:(e,t,n)=>{n.d(t,{Z:()=>a});const{Box:r}=n(37609),{styled:o}=n(85588),a=o(r)({display:"flex",justifyContent:"space-between",alignItems:"center"})},37084:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(13967),o=n(95193),a=n(68870),i=n(4567),s=n(9710),l=n(80667),d=(n(72791),n(80184));const c=e=>{let{title:t,subtitle:n}=e;const c=(0,r.Z)(),u=(0,o.Z)("(min-width: 600px)");return(0,d.jsx)(a.Z,{overflow:"hidden",children:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(i.Z,{component:l.E.div,initial:{y:"-100%",opacity:0},animate:{y:"0%",opacity:1},transition:{delay:.4,duration:.5},variant:u?"h2":"h3",color:c.palette.secondary.dark,fontWeight:"bold",sx:{mb:"5px"},children:t}),(0,d.jsx)(i.Z,{sx:{mb:"5px"},variant:u?"h5":"h6",fontWeight:"bold",color:c.palette.secondary.accent,children:(0,d.jsx)(s.Z,{text:n,delayValue:.05})})]})})}},643:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(72791),o=n(95193),a=n(68870),i=n(37560),s=n(72426),l=n.n(s),d=n(94420),c=n(52729),u=n(80667),m=n(13967),p=n(97639),v=n(90977),h=n(66099),g=n(66443),x=n(57689),y=n(26869),b=n(80184);const Z=e=>{let{params:t,users:n}=e;const o=(0,m.Z)(),i=(0,x.s0)(),[s,l]=r.useState(!1),d=()=>{l(!0)};return(0,b.jsxs)(a.Z,{children:[(0,b.jsx)(y.Z,{handleOpenDialog:d,handleCloseDialog:()=>{l(!1)},openDialog:s,setOpenDialog:l,params:t}),(0,b.jsx)(p.Z,{title:"View Audience Details",children:(0,b.jsx)(v.Z,{sx:{color:o.palette.secondary[300]},onClick:()=>{i("/Registrations/".concat(t.row._id),{state:{audience:n.filter((e=>e.event[0].id===t.row._id)),eventDetails:t.row.name}})},children:(0,b.jsx)(g.Z,{})})}),(0,b.jsx)(p.Z,{title:"View Event Details",children:(0,b.jsx)(v.Z,{onClick:d,children:(0,b.jsx)(h.Z,{color:"success"})})})]})};var j=n(37084),f=n(76821),E=n(57234),D=n(59618);const w=()=>{const e=(0,o.Z)("(min-width: 600px)"),t=(0,d.v9)((e=>e.global.user)),[n,s]=(0,r.useState)(null),{data:m,isLoading:p}=(0,E.zJ)({committeeId:t.committeeId}),{data:v}=(0,f.zQ)();(0,r.useEffect)((()=>{if(!p&&m){const e=(e=>e.filter((e=>l()(new Date(e.startDate)).isAfter(l()()))))(m);s(e)}}),[m,p]);const h=[{field:"name",headerName:"Event Name",minWidth:200,flex:1},{field:"createdBy",headerName:"Created By",minWidth:120,flex:1,valueFormatter:e=>{let{value:t}=e;return t[0].name},renderCell:e=>e.row.createdBy[0].name},{field:"startDate",headerName:"Date",minWidth:120,type:"date",flex:1,valueFormatter:e=>{let{value:t}=e;return l()(new Date(t)).format("Do MMMM YYYY")},renderCell:e=>l()(new Date(e.row.startDate)).format("MMMM Do YYYY")},{field:"registrations",headerName:"Registrations",minWidth:80,flex:1,renderCell:e=>{const t=null===v||void 0===v?void 0:v.filter((t=>t.event[0].id===e.row._id)).length;return Number(t)},type:"number",valueFormatter:e=>{let{value:t}=e;return t}},{field:"actions",headerName:"Actions",type:"actions",flex:1,minWidth:100,renderCell:e=>(0,b.jsx)(Z,{users:v,params:e})}];return(0,b.jsxs)(a.Z,{m:e?"1rem 2.5rem":"0.8rem",position:"relative",component:u.E.div,initial:{opacity:0},animate:{opacity:1},transition:{delay:.1,ease:"easeInOut"},children:[(0,b.jsx)(j.Z,{title:"UPCOMING EVENTS",subtitle:"List of All Upcoming Events."}),(0,b.jsx)(D.Z,{children:(0,b.jsx)(i._$,{loading:p||!n,getRowId:e=>e._id,rows:n||[],columns:h,components:{Toolbar:c.Z},sx:{"@media print":{"& .MuiDataGrid-root":{border:"none",color:"#000"},"& .MuiDataGrid-cell":{color:"#000"},"& .MuiDataGrid-columnHeaders":{color:"#000",textAlign:"center",fontWeight:"bold"},"& .MuiDataGrid-main":{color:"#000"},"& \t.MuiDataGrid-overlay":{backgroundColor:"red !important"}}}})})]})}},57234:(e,t,n)=>{n.d(t,{D3:()=>p,DX:()=>g,N1:()=>a,Pq:()=>i,Tl:()=>c,V8:()=>v,aW:()=>l,cy:()=>u,gV:()=>m,h6:()=>h,ru:()=>o,zJ:()=>d,zu:()=>s});const r=n(21575).h.injectEndpoints({endpoints:e=>({createEvent:e.mutation({query:e=>({url:"event/createEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),publishedEvents:e.query({query:()=>"events/publishedEvents",providesTags:["Events"]}),unapprovedEvents:e.query({query:()=>"events/unapprovedEvents",providesTags:["Events"]}),committeeUnapprovedEvents:e.query({query:e=>({url:"events/committeeUnapprovedEvents",method:"POST",body:e}),providesTags:["Events"]}),approvedEvents:e.query({query:()=>"events/approvedEvents",providesTags:["Events"]}),committeeApprovedEvents:e.query({query:e=>({url:"events/committeeApprovedEvents",method:"POST",body:e}),providesTags:["Events"]}),approveEvent:e.mutation({query:e=>({url:"events/approveEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),getEvent:e.query({query:e=>({url:"events/getEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),deleteEvent:e.mutation({query:e=>({url:"events/deleteEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),togglePublish:e.mutation({query:e=>({url:"events/togglePublish",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),uploadReport:e.mutation({query:e=>({url:"event/uploadReport",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),uploadPhotos:e.mutation({query:e=>({url:"event/uploadPhotos",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),sendCertificates:e.mutation({query:e=>({url:"events/sendCertificate",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]})})}),{useCreateEventMutation:o,usePublishedEventsQuery:a,useUnapprovedEventsQuery:i,useCommitteeUnapprovedEventsQuery:s,useApprovedEventsQuery:l,useCommitteeApprovedEventsQuery:d,useGetEventQuery:c,useApproveEventMutation:u,useDeleteEventMutation:m,useTogglePublishMutation:p,useUploadReportMutation:v,useUploadPhotosMutation:h,useSendCertificatesMutation:g}=r},76821:(e,t,n)=>{n.d(t,{ZF:()=>i,yv:()=>a,zQ:()=>o});const r=n(21575).h.injectEndpoints({endpoints:e=>({getUsers:e.query({query:()=>"user/getUsers",providesTags:["users"]}),registerFaculty:e.mutation({query:e=>({url:"user/registerFaculty",method:"POST",body:e,formData:!0}),providesTags:["users"]}),registerStudent:e.mutation({query:e=>({url:"user/registerStudent",method:"POST",body:e,formData:!0}),providesTags:["users"]})})}),{useGetUsersQuery:o,useRegisterFacultyMutation:a,useRegisterStudentMutation:i}=r}}]);
//# sourceMappingURL=643.d8ff63c3.chunk.js.map