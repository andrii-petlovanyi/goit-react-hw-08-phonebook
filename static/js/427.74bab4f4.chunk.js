"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[427],{7427:function(e,r,n){n.r(r);var s=n(4165),o=n(5861),i=n(4942),t=n(1413),a=n(9439),l=n(2791),c=n(7689),u=n(5048),d=n(4684),p=n(1197),x=n(410),h=n(1490),f=n(5863),m=n(9712),g=n(824),j=n(5777),b=n(9894),v=n(8699),w=n(3541),k=n(9708),C=n(1136),_=n(3329);r.default=function(){var e=(0,l.useState)({email:"",password:""}),r=(0,a.Z)(e,2),n=r[0],y=r[1],Z=(0,c.TH)(),z=(0,u.I0)(),I=(0,c.s0)(),B=(0,d.pm)(),O=(0,k.cG)(),S=(0,a.Z)(O,2),G=S[0],L=S[1].isLoading,W=(0,k.GR)().isLoading,D=(0,l.useState)(!1),N=(0,a.Z)(D,2),R=N[0],T=N[1],q=(0,p.qY)(),E=q.isOpen,H=q.onOpen,J=q.onClose,P=(0,x.ff)("purple.600","btnOutlineBG"),X=(0,x.ff)("purple.600","darkBG"),A=(0,x.ff)("hoverWhite","hoverBlack");console.log((0,k.GR)()),(0,l.useEffect)((function(){return H(),function(){return J()}}),[Z]);var F=function(e){var r=e.currentTarget,n=r.name,s=r.value;y((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,i.Z)({},n,s))}))},U=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){var o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),""!==n.email&&""!==n.password){e.next=3;break}return e.abrupt("return",B({description:"Please, fill all fields form...",isClosable:!0,status:"error"}));case 3:return e.prev=3,e.next=6,G(n);case 6:o=e.sent,z((0,w.Ib)(o)),y({email:"",password:""}),I("/contacts"),J(),B({description:"Welcome, ".concat(o.data.user.name," !"),isClosable:!0,status:"success",duration:3e3}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),B({description:"Wrong username or e-mail. If you`re not signed up yet, you`re welcome to do it!",isClosable:!0,status:"error"});case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(r){return e.apply(this,arguments)}}();return!W&&(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(h.u_,{isOpen:E,onClose:function(){J(),I("/")},isCentered:!0,children:[(0,_.jsx)(h.ZA,{}),(0,_.jsxs)(h.hz,{py:"20px",children:[(0,_.jsx)(h.xB,{fontSize:"30px",children:"Welcome back"}),(0,_.jsx)(h.fe,{pb:"20px",children:(0,_.jsxs)("form",{onSubmit:U,children:[(0,_.jsxs)(f.NI,{py:"20px",isRequired:!0,children:[(0,_.jsx)(m.iz,{width:"70%",mx:"auto"}),(0,_.jsx)(f.lX,{children:"Email"}),(0,_.jsx)(g.II,{name:"email",type:"email",placeholder:"example@gmail.com",_placeholder:{opacity:.6,color:P},focusBorderColor:P,id:"login_email",value:n.email,onChange:F}),(0,_.jsx)(f.lX,{pt:"20px",children:"Password"}),(0,_.jsxs)(g.BZ,{children:[(0,_.jsx)(g.II,{name:"password",type:R?"text":"password",_placeholder:{opacity:.6,color:P},focusBorderColor:P,placeholder:"********",id:"login_password",value:n.password,onChange:F}),(0,_.jsx)(g.xH,{width:"3rem",children:(0,_.jsx)(j.zx,{h:"1.7rem",size:"sm",onClick:function(){T(!R)},children:R?(0,_.jsx)(b.JO,{as:v.ON}):(0,_.jsx)(b.JO,{as:v.tp})})})]})]}),(0,_.jsxs)(m.xu,{display:"flex",mx:"auto",flexDirection:"column",paddingTop:"40px",children:[(0,_.jsx)(C.$D,{children:(0,_.jsx)(j.zx,{isLoading:!!L,width:"100%",type:"submit","aria-label":"Login user",bg:X,_active:{background:X},_hover:{background:A},size:"md",children:"Sign in"})}),(0,_.jsxs)(m.xv,{display:"flex",mx:"auto",pt:"20px",fontSize:"md",children:["Not registered?",(0,_.jsx)(m.rU,{pl:"5px",fontSize:"md",onClick:function(){I("/register")},children:"Create an account"})]})]})]})})]})]})})}}}]);
//# sourceMappingURL=427.74bab4f4.chunk.js.map