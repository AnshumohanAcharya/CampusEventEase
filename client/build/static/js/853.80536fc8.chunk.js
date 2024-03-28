"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[853],{44853:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var o=a(72791),i=a(13967),n=a(95193),r=a(68870),s=a(88588),l=a(22492),d=a(93006),c=a(97808),m=a(90977),p=a(82626),u=a(77234),v=a(5849),y=a(92506),h=a(3710),x=a(29569),b=a(80667),g=a(37084),Z=a(75985),f=a(82492),C=a(64709),w=a(36080),j=a(56504),I=a(80184);const T=()=>{const e=(0,i.Z)(),t=(0,n.Z)("(min-width: 600px)"),[a,T]=(0,o.useState)(!1),{data:M}=(0,f.zT)(),[O,{isLoading:k}]=(0,C.XG)(),B=()=>T(!a),S=()=>T(!a);return(0,I.jsx)(r.Z,{children:(0,I.jsxs)(r.Z,{m:t?"1rem 2.5rem":"0.8rem",position:"relative",component:b.E.div,initial:{opacity:0},animate:{opacity:1},transition:{delay:.1,ease:"easeInOut"},children:[(0,I.jsx)(g.Z,{title:"ADD CONVENOR",subtitle:"Add New Convenor Details."}),(0,I.jsx)(y.J9,{onSubmit:async(e,t)=>{try{const{committee:a}=e,o=a.split("|")[0],i=a.split("|")[1],n={...e,committeeName:o,committeeId:i,role:"convenor"},r=await O(n).unwrap();t.resetForm(),r&&Z.Am.success("Convenor Added Successfully")}catch(a){Z.Am.error(a.data.error||"Server Error")}},initialValues:j.xE,validationSchema:w.HF,children:t=>{let{values:o,errors:i,touched:n,handleBlur:y,handleChange:g,handleSubmit:Z}=t;return(0,I.jsx)("form",{autoComplete:"off",onSubmit:Z,children:(0,I.jsx)(r.Z,{children:(0,I.jsxs)(s.Z,{sx:{backgroundImage:"none",backgroundColor:e.palette.background.alt,marginTop:"20px"},children:[(0,I.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[(0,I.jsxs)(r.Z,{component:b.E.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},exit:{y:20,opacity:0},sx:{width:"90%",display:"flex",justifyContent:"space-around",flexWrap:"Wrap"},children:[(0,I.jsx)(d.Z,{sx:{width:"18rem"},id:"name",autoComplete:"off",color:"secondary",label:"Convenor Name",value:o.name,onChange:g,onBlur:y,helperText:n.name?i.name:"",error:n.name&&Boolean(i.name),margin:"normal",variant:"outlined"}),(0,I.jsx)(d.Z,{name:"email",sx:{width:"18rem"},notched:"true",color:"secondary",id:"email",autoComplete:"off",label:"Convenor Email",value:o.email,onChange:g,onBlur:y,helperText:n.email?i.email:"",error:n.email&&Boolean(i.email),margin:"normal",variant:"outlined"})]}),(0,I.jsxs)(r.Z,{component:b.E.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},exit:{y:20,opacity:0},sx:{width:"90%",display:"flex",justifyContent:"space-around",flexWrap:"Wrap"},children:[(0,I.jsx)(d.Z,{sx:{width:"18rem"},notched:"true",type:a?"text":"password",autoComplete:"off",color:"secondary",id:"password",label:"Convenor Password",value:o.password,onChange:g,onBlur:y,helperText:n.password?i.password:"",error:n.password&&Boolean(i.password),margin:"normal",variant:"outlined",InputProps:{endAdornment:(0,I.jsx)(c.Z,{position:"end",children:(0,I.jsx)(m.Z,{"aria-label":"toggle password visibility",onClick:B,onMouseDown:S,children:a?(0,I.jsx)(h.Z,{}):(0,I.jsx)(x.Z,{})})})}}),(0,I.jsxs)(d.Z,{margin:"normal",color:"secondary",name:"committee",variant:"outlined",sx:{width:"18rem"},notched:"true",value:o.committee,id:"committee",select:!0,label:"Committee",onChange:g,onBlur:y,error:n.committee&&Boolean(i.committee),children:[(0,I.jsx)(p.Z,{disabled:!0,children:"Select a Committee"}),M&&M.map((e=>(0,I.jsx)(p.Z,{value:"".concat(e.name,"|").concat(e._id),children:e.name},e._id)))]})]}),(0,I.jsx)(r.Z,{component:b.E.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.6},exit:{y:20,opacity:0},sx:{width:"90%",display:"flex",justifyContent:"space-around",flexWrap:"Wrap"},children:(0,I.jsx)(d.Z,{sx:{width:"18rem"},id:"mobile",name:"mobile",autoComplete:"off",color:"secondary",label:"Mobile Number",value:o.mobile,onChange:g,onBlur:y,helperText:n.mobile?i.mobile:"",error:n.mobile&&Boolean(i.mobile),margin:"normal",variant:"outlined"})})]}),(0,I.jsx)(u.Z,{display:"flex",sx:{marginBottom:"1rem",justifyContent:"center"},children:(0,I.jsx)(v.Z,{name:"add_convenor",variant:"contained",disabled:k,type:"submit",sx:{fontWeight:"bold"},size:"large",color:"secondary",children:"Add Convenor"})})]})})})}})]})})}},82492:(e,t,a)=>{a.d(t,{QW:()=>r,e4:()=>n,zT:()=>i});const o=a(21575).h.injectEndpoints({endpoints:e=>({committees:e.query({query:()=>"committee/getCommittees",providesTags:["Committees"]}),addCommittee:e.mutation({query:e=>({url:"committee/addCommittee",method:"POST",body:e}),providesTags:["Committees"],invalidatesTags:["Committees"]}),deleteCommittee:e.mutation({query:e=>({url:"committee/deleteCommittee",method:"POST",body:e}),providesTags:["Committees"],invalidatesTags:["Committees"]})})}),{useCommitteesQuery:i,useAddCommitteeMutation:n,useDeleteCommitteeMutation:r}=o},90133:(e,t,a)=>{a.d(t,{V:()=>n,Z:()=>r});var o=a(75878),i=a(21217);function n(e){return(0,i.ZP)("MuiDivider",e)}const r=(0,o.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},96014:(e,t,a)=>{a.d(t,{Z:()=>r,f:()=>n});var o=a(75878),i=a(21217);function n(e){return(0,i.ZP)("MuiListItemIcon",e)}const r=(0,o.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},29849:(e,t,a)=>{a.d(t,{L:()=>n,Z:()=>r});var o=a(75878),i=a(21217);function n(e){return(0,i.ZP)("MuiListItemText",e)}const r=(0,o.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},82626:(e,t,a)=>{a.d(t,{Z:()=>C});var o=a(63366),i=a(87462),n=a(72791),r=a(63733),s=a(94419),l=a(12065),d=a(66934),c=a(31402),m=a(66199),p=a(53915),u=a(40162),v=a(42071),y=a(90133),h=a(96014),x=a(29849),b=a(71498),g=a(80184);const Z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],f=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:a}=e;return(0,i.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(b.Z.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(b.Z.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(b.Z.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(b.Z.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(b.Z.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(y.Z.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(y.Z.inset)]:{marginLeft:52},["& .".concat(x.Z.root)]:{marginTop:0,marginBottom:0},["& .".concat(x.Z.inset)]:{paddingLeft:36},["& .".concat(h.Z.root)]:{minWidth:36}},!a.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(h.Z.root," svg")]:{fontSize:"1.25rem"}}))})),C=n.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:d="li",dense:p=!1,divider:y=!1,disableGutters:h=!1,focusVisibleClassName:x,role:C="menuitem",tabIndex:w,className:j}=a,I=(0,o.Z)(a,Z),T=n.useContext(m.Z),M=n.useMemo((()=>({dense:p||T.dense||!1,disableGutters:h})),[T.dense,p,h]),O=n.useRef(null);(0,u.Z)((()=>{l&&O.current&&O.current.focus()}),[l]);const k=(0,i.Z)({},a,{dense:M.dense,divider:y,disableGutters:h}),B=(e=>{const{disabled:t,dense:a,divider:o,disableGutters:n,selected:r,classes:l}=e,d={root:["root",a&&"dense",t&&"disabled",!n&&"gutters",o&&"divider",r&&"selected"]},c=(0,s.Z)(d,b.K,l);return(0,i.Z)({},l,c)})(a),S=(0,v.Z)(O,t);let N;return a.disabled||(N=void 0!==w?w:-1),(0,g.jsx)(m.Z.Provider,{value:M,children:(0,g.jsx)(f,(0,i.Z)({ref:S,role:C,tabIndex:N,component:d,focusVisibleClassName:(0,r.Z)(B.focusVisible,x),className:(0,r.Z)(B.root,j)},I,{ownerState:k,classes:B}))})}))},71498:(e,t,a)=>{a.d(t,{K:()=>n,Z:()=>r});var o=a(75878),i=a(21217);function n(e){return(0,i.ZP)("MuiMenuItem",e)}const r=(0,o.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"])}}]);
//# sourceMappingURL=853.80536fc8.chunk.js.map