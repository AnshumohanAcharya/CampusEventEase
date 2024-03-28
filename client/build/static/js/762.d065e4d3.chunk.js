"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[762],{9710:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(83791),s=r(80667),n=(r(72791),r(80184));const i=e=>{let{text:t,delayValue:r}=e;const i=[...t];return(0,n.jsx)(a.M,{children:i.map(((e,t)=>(0,n.jsx)(s.E.span,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},exit:{opacity:0},transition:{delay:t*r,duration:.5},children:e},t)))})}},72625:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(13967),s=r(95193),n=r(4567),i=r(68870),o=r(80184);const d=e=>{let{description:t}=e;const r=(0,a.Z)(),d=(0,s.Z)("(min-width: 600px)");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Z,{fontSize:"1.3rem",variant:"h2",fontWeight:"bold",color:"secondary",children:"About This Event"}),(0,o.jsx)(i.Z,{borderRadius:"0.55rem",width:d?"90%":"100%",mt:2,sx:{backgroundImage:"none",backgroundColor:r.palette.background.alt,p:"1rem "},children:(0,o.jsx)(n.Z,{textAlign:"left",fontSize:"1rem",children:t})})]})}},57762:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var a=r(72791),s=r(57689),n=r(13967),i=r(95193),o=r(68870),d=r(81153),l=r(94721),m=r(4567),u=r(79912),c=r(72625),p=r(88588),h=r(22492),v=r(29347),y=r(61474),x=r(80667),g=r(92506),b=r(93006),Z=r(77234),w=r(5849),q=r(75985),E=r(76821),j=r(36080),f=r(56504),P=r(80184);const T=[{label:"Name",name:"name"},{label:"Registration Number",name:"regNo"},{label:"Mobile Number",name:"mobileNo"},{label:"Email",name:"email"},{label:"Course - Department - Semester",name:"courseSemesterDept"}],D=e=>{let{eventDetails:t}=e;const[r,{isLoading:a}]=(0,E.ZF)();return(0,P.jsx)(g.J9,{onSubmit:async(e,a)=>{const s={name:t.name,id:t._id};try{const{regNo:t,courseSemesterDept:n}=e,[i,o,d]=n.split("-"),l={...e,course:i,semester:d,department:o,regNo:t.toUpperCase(),event:s,type:"student"};await r(l).unwrap()&&(a.resetForm(),q.Am.success("Registered Successfully!"))}catch(i){var n;q.Am.error((null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.msg)||"Server Error")}},initialValues:f.Ww,validationSchema:j.Q1,children:e=>{let{values:t,errors:r,touched:s,handleBlur:n,handleChange:i,handleSubmit:o}=e;return(0,P.jsxs)("form",{onSubmit:o,children:[T.map(((e,a)=>(0,P.jsx)(b.Z,{component:x.E.div,initial:{y:20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{delay:.13*a},exit:{y:20,opacity:0},id:e.name,autoComplete:"off",color:"secondary",label:e.label,value:t[e.name],onChange:i,onBlur:n,helperText:s[e.name]?r[e.name]:"courseSemesterDept"!==e.name||s[e.name]?"":"e.g. IG-IT-10th",error:s[e.name]&&Boolean(r[e.name]),margin:"dense",variant:"outlined",fullWidth:!0,inputProps:{style:{textTransform:"regNo"===e.name&&"uppercase"}}},e.name))),(0,P.jsx)(Z.Z,{display:"flex",sx:{paddingBottom:"0.2rem",justifyContent:"center"},children:(0,P.jsx)(w.Z,{name:"register",variant:"contained",type:"submit",disabled:a,sx:{fontWeight:"bold"},size:"large",color:"secondary",children:"Register"})})]})}})},k=e=>{let{eventDetails:t}=e;const[r,{isLoading:a}]=(0,E.yv)(),s=[{label:"Name",name:"name"},{label:"Employee ID",name:"employeeId"},{label:"Mobile Number",name:"mobileNo"},{label:"Email",name:"email"},{label:"Department",name:"department"}];return(0,P.jsx)(g.J9,{onSubmit:async(e,a)=>{const s={name:t.name,id:t._id};try{const{employeeId:t}=e,n={...e,regNo:t.toUpperCase(),event:s,type:"faculty"};await r(n).unwrap()&&(a.resetForm(),q.Am.success("Registered Successfully!"))}catch(i){var n;q.Am.error((null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.msg)||"Server Error")}},initialValues:f.Jd,validationSchema:j.iA,children:e=>{let{values:t,errors:r,touched:n,handleBlur:i,handleChange:o,handleSubmit:d}=e;return(0,P.jsxs)("form",{onSubmit:d,children:[s.map(((e,a)=>(0,P.jsx)(b.Z,{component:x.E.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.13*a},exit:{y:20,opacity:0},id:e.name,autoComplete:"off",color:"secondary",label:e.label,value:t[e.name],onChange:o,onBlur:i,helperText:n[e.name]?r[e.name]:"",error:n[e.name]&&Boolean(r[e.name]),margin:"dense",variant:"outlined",fullWidth:!0,inputProps:{style:{textTransform:"employeeId"===e.name&&"uppercase"}}},e.name))),(0,P.jsx)(Z.Z,{display:"flex",sx:{paddingBottom:"0.2rem",justifyContent:"center"},children:(0,P.jsx)(w.Z,{name:"register",variant:"contained",type:"submit",disabled:a,sx:{fontWeight:"bold"},size:"large",color:"secondary",children:"Register"})})]})}})};var S=r(9710);const N=e=>{let{event:t}=e;const r=(0,n.Z)(),[s,i]=(0,a.useState)(0);return(0,P.jsx)(o.Z,{children:(0,P.jsx)(p.Z,{sx:{padding:"0rem 2rem",borderRadius:"0.55rem",backgroundImage:"none",backgroundColor:r.palette.background.alt},children:(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(o.Z,{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",children:(0,P.jsx)(m.Z,{fontSize:"1.8rem",textDecoration:"underline",fontWeight:"bold",p:"0.3rem 0rem 1rem 0rem",color:r.palette.secondary.main,children:(0,P.jsx)(S.Z,{text:"REGISTER NOW!",delayValue:.05})})}),(0,P.jsxs)(v.Z,{value:s,onChange:(e,t)=>{i(t)},indicatorColor:"secondary",textColor:"secondary",children:[(0,P.jsx)(y.Z,{component:x.E.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:0},exit:{y:20,opacity:0},label:"Student"},"student"),(0,P.jsx)(y.Z,{component:x.E.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.13},exit:{y:20,opacity:0},label:"Faculty"},"faculty")]}),(0,P.jsxs)(o.Z,{pt:"0.5rem",children:[0===s&&(0,P.jsx)(o.Z,{children:(0,P.jsx)(D,{eventDetails:t})}),1===s&&(0,P.jsx)(o.Z,{children:(0,P.jsx)(k,{eventDetails:t})})]})]})})})};var R=r(77832),C=r.n(R);const _=e=>{let{photos:t}=e;const r=(0,n.Z)(),a=(0,i.Z)("(min-width: 600px)"),s=t.map((e=>({original:"".concat("http://localhost:8000/","assets/").concat(e.filename),thumbnail:"".concat("http://localhost:8000/","assets/").concat(e.filename)})));return(0,P.jsx)(o.Z,{sx:{display:"block",overflow:"auto"},marginBottom:"1rem",children:(0,P.jsx)(p.Z,{sx:{padding:"0rem 0.7rem",borderRadius:"0.55rem",backgroundImage:"none",backgroundColor:r.palette.background.alt},children:(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(o.Z,{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",children:(0,P.jsx)(m.Z,{fontSize:a?"1.6rem":"1.2rem",textDecoration:"underline",fontWeight:"bold",p:"0.3rem 0rem 1rem 0rem",color:"#d12121",children:(0,P.jsx)(S.Z,{text:"EVENT CONCLUDED!",delayValue:.05})})}),(0,P.jsx)(o.Z,{component:x.E.div,initial:{opacity:0},animate:{opacity:1},transition:{delay:1,ease:"easeInOut"},children:(0,P.jsx)(C(),{items:s,showNav:!0,showThumbnails:!1,autoPlay:!0,showPlayButton:!1})})]})})})};var I=r(40642),B=r(57234),O=r(72426),A=r.n(O),z=r(85239),M=r(22500);const W=()=>{const e=(0,i.Z)("(min-width: 600px)");return(0,P.jsxs)(o.Z,{children:[(0,P.jsxs)(d.ZP,{width:"90%",margin:"auto",container:!0,mt:2,children:[(0,P.jsxs)(d.ZP,{sx:{marginBottom:"1rem"},item:!0,xs:12,sm:12,md:7,lg:8,rowSpacing:2,children:[(0,P.jsx)(o.Z,{marginTop:5,children:(0,P.jsx)(z.Z,{variant:"rounded",height:400,animation:"wave"})}),(0,P.jsx)(z.Z,{height:"10vh",animation:"wave"}),(0,P.jsx)(l.Z,{width:e?"90%":"100%",sx:{borderBottomWidth:2,margin:"15px 0px"}}),(0,P.jsx)(z.Z,{height:"10vh",animation:"wave"}),(0,P.jsx)(z.Z,{height:"10vh",animation:"wave"})]}),(0,P.jsxs)(d.ZP,{sx:{},item:!0,xs:12,sm:12,md:5,lg:4,children:[(0,P.jsx)(o.Z,{marginLeft:"2rem",position:e&&"sticky",top:e&&"5rem",children:(0,P.jsx)(p.Z,{children:(0,P.jsx)(z.Z,{variant:"rounded",sx:{padding:0},height:550})})}),!e&&(0,P.jsx)(z.Z,{height:"20vh",animation:"wave"})]})]}),(0,P.jsx)(M.Z,{})]})},U=()=>{const e=(0,s.s0)(),t=(0,n.Z)(),{eventId:r}=(0,s.UO)(),{data:p,isError:h}=(0,B.Tl)({eventId:r}),v=(0,i.Z)("(min-width: 600px)");return(0,a.useEffect)((()=>{h&&e("/")}),[h,e]),(0,P.jsx)(o.Z,{children:p?(0,P.jsxs)(d.ZP,{width:"90%",margin:"auto",container:!0,mt:2,children:[(0,P.jsxs)(d.ZP,{sx:{marginBottom:"1rem"},item:!0,xs:12,sm:12,md:7,lg:8,children:[(0,P.jsx)(u.Z,{name:p.name,banner:p.bannerName,startDate:p.startDate,endDate:p.endDate,venue:p.venue,organizedBy:p.committee[0].name}),(0,P.jsx)(l.Z,{width:v?"90%":"100%",sx:{borderBottomWidth:2,margin:"15px 0px"}}),(0,P.jsx)(c.Z,{description:p.description})]}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:12,md:5,lg:4,children:[(0,P.jsx)(o.Z,{position:v&&"sticky",top:v&&"5rem",children:A()(new Date(p.startDate)).isAfter(A()())?(0,P.jsx)(N,{event:p}):null!==p&&void 0!==p&&p.isPhotoUploaded?(0,P.jsx)(_,{photos:p.photos}):(0,P.jsx)(o.Z,{sx:{display:"block",overflow:"auto"},marginBottom:"1rem",children:(0,P.jsx)(o.Z,{sx:{padding:" 0.7rem",borderRadius:"0.55rem",backgroundImage:"none",backgroundColor:t.palette.background.alt},children:(0,P.jsx)(m.Z,{fontSize:v?"1.6rem":"1.2rem",textDecoration:"underline",fontWeight:"bold",p:"0.3rem 0rem 1rem 0rem",color:"#d12121",children:(0,P.jsx)(S.Z,{text:"EVENT CONCLUDED!",delayValue:.05})})})})}),!v&&(0,P.jsx)(I.Z,{})]})]}):(0,P.jsx)(W,{})})}},79912:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(95193),s=r(13967),n=r(4567),i=r(68870),o=r(81153),d=r(49936),l=r(1588),m=r(72567),u=r(72426),c=r.n(u),p=r(94721),h=r(80667),v=(r(72791),r(80184));const y=e=>{let{icon:t,title:r,value:s,last:d,index:l}=e;const m=(0,a.Z)("(min-width: 600px)");return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(o.ZP,{component:h.E.div,initial:{y:20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{delay:.15*l},exit:{y:20,opacity:0},item:!0,xs:12,sm:12,md:4,lg:4,children:(0,v.jsxs)(i.Z,{display:"flex",gap:2,children:[(0,v.jsxs)(i.Z,{display:"flex",gap:1,children:[t,(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(n.Z,{color:"secondary",fontSize:!m&&"1rem",fontWeight:"bold",children:r}),(0,v.jsx)(n.Z,{fontSize:!m&&"1rem",children:s})]})]}),!d&&m&&(0,v.jsx)(p.Z,{orientation:"vertical",flexItem:!0})]})})})},x=e=>{let{name:t,banner:r,startDate:u,venue:p,organizedBy:h}=e;const x=(0,a.Z)("(min-width: 600px)"),g=(0,s.Z)(),b=[{icon:(0,v.jsx)(m.Z,{color:"secondary"}),title:"Date",value:c()(new Date(u)).format("Do MMMM YYYY, h:mm A"),last:!1},{icon:(0,v.jsx)(l.Z,{color:"secondary"}),title:"Venue",value:p,last:!1},{icon:(0,v.jsx)(d.Z,{color:"secondary"}),title:"Organizers",value:h,last:!0}];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{src:"".concat("http://localhost:8000/","assets/").concat(r),alt:"banner",width:x?"90%":"100%"}),(0,v.jsx)(n.Z,{mt:2,fontSize:x?"2rem":"1.5rem",variant:"h1",fontWeight:"bold",width:x?"90%":"100%",color:"secondary",children:t}),(0,v.jsx)(i.Z,{borderRadius:"0.55rem",width:x?"90%":"100%",mt:2,sx:{backgroundImage:"none",backgroundColor:g.palette.background.alt,p:"1rem "},children:(0,v.jsx)(o.ZP,{container:!0,spacing:x?2:3,children:b.map(((e,t)=>(0,v.jsx)(y,{index:t,icon:e.icon,title:e.title,value:e.value,last:e.last},t)))})})]})}},22500:(e,t,r)=>{r.d(t,{Z:()=>n});const{Box:a}=r(37609),{styled:s}=r(85588),n=s(a)({display:"flex",justifyContent:"space-between",alignItems:"center"})},40642:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(13967),s=r(95193),n=r(68870),i=r(4567),o=(r(72791),r(80184));const d=()=>{const e=(0,a.Z)(),t=(0,s.Z)("(min-width: 600px)");return(0,o.jsx)(n.Z,{borderRadius:"0.55rem",sx:{backgroundColor:e.palette.background.alt,m:"1rem auto",p:"1rem 0 "},children:(0,o.jsxs)(i.Z,{textAlign:"center",fontSize:!t&&"0.7rem",children:["Developed with \u2764\ufe0f By",(0,o.jsx)(i.Z,{mx:1,variant:"span",fontWeight:"bold",color:"secondary",children:"Group 9"})]})})}},57234:(e,t,r)=>{r.d(t,{D3:()=>p,DX:()=>y,N1:()=>n,Pq:()=>i,Tl:()=>m,V8:()=>h,aW:()=>d,cy:()=>u,gV:()=>c,h6:()=>v,ru:()=>s,zJ:()=>l,zu:()=>o});const a=r(21575).h.injectEndpoints({endpoints:e=>({createEvent:e.mutation({query:e=>({url:"event/createEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),publishedEvents:e.query({query:()=>"events/publishedEvents",providesTags:["Events"]}),unapprovedEvents:e.query({query:()=>"events/unapprovedEvents",providesTags:["Events"]}),committeeUnapprovedEvents:e.query({query:e=>({url:"events/committeeUnapprovedEvents",method:"POST",body:e}),providesTags:["Events"]}),approvedEvents:e.query({query:()=>"events/approvedEvents",providesTags:["Events"]}),committeeApprovedEvents:e.query({query:e=>({url:"events/committeeApprovedEvents",method:"POST",body:e}),providesTags:["Events"]}),approveEvent:e.mutation({query:e=>({url:"events/approveEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),getEvent:e.query({query:e=>({url:"events/getEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),deleteEvent:e.mutation({query:e=>({url:"events/deleteEvent",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),togglePublish:e.mutation({query:e=>({url:"events/togglePublish",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),uploadReport:e.mutation({query:e=>({url:"event/uploadReport",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),uploadPhotos:e.mutation({query:e=>({url:"event/uploadPhotos",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]}),sendCertificates:e.mutation({query:e=>({url:"events/sendCertificate",method:"POST",body:e,formData:!0}),providesTags:["Events"],invalidatesTags:["Events"]})})}),{useCreateEventMutation:s,usePublishedEventsQuery:n,useUnapprovedEventsQuery:i,useCommitteeUnapprovedEventsQuery:o,useApprovedEventsQuery:d,useCommitteeApprovedEventsQuery:l,useGetEventQuery:m,useApproveEventMutation:u,useDeleteEventMutation:c,useTogglePublishMutation:p,useUploadReportMutation:h,useUploadPhotosMutation:v,useSendCertificatesMutation:y}=a},76821:(e,t,r)=>{r.d(t,{ZF:()=>i,yv:()=>n,zQ:()=>s});const a=r(21575).h.injectEndpoints({endpoints:e=>({getUsers:e.query({query:()=>"user/getUsers",providesTags:["users"]}),registerFaculty:e.mutation({query:e=>({url:"user/registerFaculty",method:"POST",body:e,formData:!0}),providesTags:["users"]}),registerStudent:e.mutation({query:e=>({url:"user/registerStudent",method:"POST",body:e,formData:!0}),providesTags:["users"]})})}),{useGetUsersQuery:s,useRegisterFacultyMutation:n,useRegisterStudentMutation:i}=a},56504:(e,t,r)=>{r.d(t,{B$:()=>a,Jd:()=>u,Je:()=>s,Tv:()=>c,Uy:()=>o,Ww:()=>m,gJ:()=>n,h_:()=>i,i6:()=>l,xE:()=>d});const a={email:"",password:""},s={currentPassword:"",newPassword:"",cNewPassword:""},n={name:"",startDate:null,endDate:null,venue:"",description:"",banner:"",order:""},i={memberName:"",memberEmail:"",memberPassword:"",mobile:""},o={memberName:"",memberEmail:"",memberPassword:"",committee:"",mobile:""},d={name:"",email:"",password:"",committee:"",mobile:""},l={name:"",description:""},m={name:"",regNo:"",mobileNo:"",email:"",courseSemesterDept:"",department:""},u={name:"",employeeId:"",mobileNo:"",email:"",department:""},c={report:""}},36080:(e,t,r)=>{r.d(t,{$E:()=>b,Bs:()=>p,Cn:()=>c,HF:()=>h,Jg:()=>l,Q1:()=>y,dm:()=>d,iA:()=>x,rA:()=>u,s1:()=>g,vG:()=>v});var a=r(72426),s=r.n(a),n=r(36046),i=r.n(n),o=r(8007);const d=o.Ry().shape({email:o.Z_().email("That doesn't look like an email").required("Email is required").test("is-valid",(e=>"That doesn't look like an ".concat(e.path)),(e=>e?i()(e):new o.p8("Invalid value"))),password:o.Z_().required("Password is required.")}),l=o.Ry().shape({currentPassword:o.Z_().required("Current Password is Required"),newPassword:o.Z_().required("*No password provided.").min(8,"*Password must be 8 characters long").matches(/[0-9]/,"*Password requires a number").matches(/[a-z]/,"*Password requires a lowercase letter").matches(/[A-Z]/,"*Password requires an uppercase letter").matches(/[^\w]/,"*Password requires a symbol").notOneOf([o.iH("currentPassword"),null],"Old Password and New Password Cannot Be Same"),cNewPassword:o.Z_().required("Confirm Password Please").oneOf([o.iH("newPassword")],"Passwords does not match")}),m=e=>s()(e).isSameOrAfter(s()(),"day"),u=o.Ry().shape({name:o.Z_().required("*Name Required!"),startDate:o.hT().required("Start Date is required").typeError("Invalid Date and Time!").test("is-not-past","Start Date should not be in the past",m),endDate:o.hT().required("End Date and Time is required").typeError("Invalid Date and Time!").test("is-not-past","End Date should not be in the past",m).test("is-after-start-date","End Date should not be same or before Start Date",((e,t)=>{const{startDate:r}=t.parent;return s()(new Date(r)).isBefore(new Date(e))})),venue:o.Z_().required("*Venue is Required!"),description:o.Z_().required("*Description is Required"),banner:o.Z_().required("*banner required"),order:o.Z_().required("*order file required")}),c=o.Ry().shape({memberName:o.Z_().required("*Name Required"),memberPassword:o.Z_().required("*No password provided.").min(8,"*Password must be 8 characters long").matches(/[0-9]/,"*Password requires a number").matches(/[a-z]/,"*Password requires a lowercase letter").matches(/[A-Z]/,"*Password requires an uppercase letter").matches(/[^\w]/,"*Password requires a symbol"),memberEmail:o.Z_().email("That doesn't look like an email").required("Email is required").test("is-valid",(e=>"That doesn't look like an ".concat(e.path)),(e=>e?i()(e):new o.p8("Invalid value"))),mobile:o.Z_().matches(new RegExp(/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/),"That doesn't look like a valid phone number").required("Mobile is required")}),p=o.Ry().shape({memberName:o.Z_().required("*Name Required"),memberPassword:o.Z_().required("*No password provided.").min(8,"*Password must be 8 characters long").matches(/[0-9]/,"*Password requires a number").matches(/[a-z]/,"*Password requires a lowercase letter").matches(/[A-Z]/,"*Password requires an uppercase letter").matches(/[^\w]/,"*Password requires a symbol"),memberEmail:o.Z_().email("That doesn't look like an email").required("Email is required").test("is-valid",(e=>"That doesn't look like an ".concat(e.path)),(e=>e?i()(e):new o.p8("Invalid value"))),committee:o.Z_().required("Committee is required!").ensure(),mobile:o.Z_().matches(new RegExp(/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/),"That doesn't look like a valid phone number").required("Mobile is required")}),h=o.Ry().shape({name:o.Z_().required("*Name Required"),password:o.Z_().required("*No password provided.").min(8,"*Password must be 8 characters long").matches(/[0-9]/,"*Password requires a number").matches(/[a-z]/,"*Password requires a lowercase letter").matches(/[A-Z]/,"*Password requires an uppercase letter").matches(/[^\w]/,"*Password requires a symbol"),email:o.Z_().email("That doesn't look like an email").required("Email is required").test("is-valid",(e=>"That doesn't look like an ".concat(e.path)),(e=>e?i()(e):new o.p8("Invalid value"))),committee:o.Z_().required("Committee is required!").ensure(),mobile:o.Z_().matches(new RegExp(/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/),"That doesn't look like a valid phone number")}),v=o.Ry().shape({name:o.Z_().required("*Name is Required"),description:o.Z_().required("Description is required")}),y=o.Ry().shape({name:o.Z_().required("Name is required"),regNo:o.Z_().required("Registration Number is required"),courseSemesterDept:o.Z_().matches(new RegExp(/^.+-.+-.+$/),"Please use Hyphens (-)").required("Required Field"),mobileNo:o.Z_().matches(new RegExp(/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/),"That doesn't look like a valid phone number").required("Mobile is required"),email:o.Z_().email("That doesn't look like an email").required("Email is required").test("is-valid",(e=>"That doesn't look like an ".concat(e.path)),(e=>e?i()(e):new o.p8("Invalid value")))}),x=o.Ry().shape({name:o.Z_().required("Name is required"),employeeId:o.Z_().required("Employee ID is required"),department:o.Z_().required("Department is required"),mobileNo:o.Z_().matches(new RegExp(/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/),"That doesn't look like a valid phone number").required("Mobile is required"),email:o.Z_().email("That doesn't look like an email").required("Email is required").test("is-valid",(e=>"That doesn't look like an ".concat(e.path)),(e=>e?i()(e):new o.p8("Invalid value")))}),g=o.Ry().shape({report:o.Z_().required("*report required")}),b=o.Ry().shape({photos:o.IX().required("*photos required").max(5,"You can upload up to 5 photos.")})}}]);
//# sourceMappingURL=762.d065e4d3.chunk.js.map