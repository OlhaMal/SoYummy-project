"use strict";(self.webpackChunksoyummy_project=self.webpackChunksoyummy_project||[]).push([[657],{4657:function(n,e,o){o.r(e),o.d(e,{default:function(){return L}});var r,i,l,t,a,s,d,c,p,u=o(1413),x=o(9439),h=o(5705),m=o(1694),f=o(9434),v=o(2791),g=o(3646),w=o(1521),b=o(3824),j=o(7026),y=o(5660),Z=o(168),k=o(1087),z=o(6088),C=z.default.form(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  "]))),S=z.default.input(i||(i=(0,Z.Z)(["\n      width: 100%;\n      background-color: #2A2C36;\n      border-radius: 6px;\n      padding: 12px 4px 12px 40px;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 400;\n      font-size: 14px;\n      letter-spacing: 0.04em;\n      color: var(--white-color);\n      margin-bottom: ",";\n      border: ",";\n      &::placeholder {\n        font-family: 'Poppins';\n        font-style: normal;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 16px;\n        letter-spacing: 0.04em;\n        color: rgba(146,147,153,0.8);\n        \n      }\n      &:focus{\n        border: ",";\n        outline: none;\n\n        &::placeholder{\n          color:var(--white-color);\n        }\n      }\n\n      @media screen and (min-width: 767.98px) {\n        padding: 16px 8px 16px 50px;\n    \n      }\n"])),(function(n){var e=n.touch,o=n.err;return e&&o?"4px":"24px"}),(function(n){return n.success?"1px solid var(--ocean-green-color)":n.err?"1px solid var(--cinnabar-color)":"1px solid rgba(146,147,153,0.8)"}),(function(n){return n.success?"1px solid var(--ocean-green-color)":n.err?"1px solid var(--cinnabar-color)":"1.2px solid var(--white-color)"})),A=z.default.div(l||(l=(0,Z.Z)(["\n  width: 290px;\n  padding: 32px 28px;\n  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);\n  border-radius: 30px;\n  background-color: var(--charade-color);\n  display: inline-block;\n\n\n  @media screen and (min-width: 767.98px) {\n    width: 500px;\n    padding: 44px 50px;\n  }\n"]))),F=z.default.p(t||(t=(0,Z.Z)(["\n  font-family: 'poppins';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  letter-spacing: -0.02;\n  line-height: calc(30 / 28);\n  color: var(--background-color);\n  margin-bottom: 32px;\n  text-align: ",";\n\n  @media screen and (min-width: 767.98px) {\n    font-size: 28px;\n    margin-bottom: 16px;\n  }\n"])),(function(n){return n.google?"center":null})),P=z.default.div(a||(a=(0,Z.Z)(["\n  display: inline-flex;\n  position: absolute;\n  top:20%;\n  left:18px;\n"]))),I=z.default.div(s||(s=(0,Z.Z)(["\n  display: inline-flex;\n  position: absolute;\n  top:20%;\n  right:18px;\n"]))),_=((0,z.default)(k.rU)(d||(d=(0,Z.Z)(["\n  background-color: var(--white-lila-color);\n  border-radius: 26px;\n  padding: 10px 19px;\n  text-decoration: none;\n  color: black;\n  display: flex;\n  align-items: center;\n  width: 120px;\n  margin: 0px auto 23px auto;\n  transition: transform 250ms ease;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),z.default.button(c||(c=(0,Z.Z)(["\n  cursor: pointer;\n  border: none;\n  padding: 15px 16px;\n  border-radius: 6px;\n  width: 100%;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 18px;\n  background-color: var(--green-color);\n  color: var(--background-color);\n  margin-top: 25px;\n  /* margin-right: ","; */\n  transition: transform 250ms ease;\n  &:hover {\n    transform: scale(1.05);\n  }\n"])),(function(n){return n.login?"15px":0}))),E=z.default.div(p||(p=(0,Z.Z)(["\n  color: var(--cinnabar-color);\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 12px;\n  margin-bottom: 10px;\n"]))),$=o(184),B={email:"",password:""},R="rgba(146,147,153,0.8)",O="var(--cinnabar-color)",T="var(--ocean-green-color)",U="var(--white-color)",V=/^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9][A-Za-z0-9.-]+\.[A-Za-z]{1,}$/,q=/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,D=function(){var n=(0,f.I0)(),e=(0,v.useState)(null),o=(0,x.Z)(e,2),r=o[0],i=o[1],l=(0,v.useState)(null),t=(0,x.Z)(l,2),a=t[0],s=t[1],d=(0,v.useState)(null),c=(0,x.Z)(d,2),p=c[0],Z=c[1],k=(0,v.useRef)(null);k.current!==document.activeElement.name&&(k.current=document.activeElement.name,s(null),Z(null));var z=function(n){i(n.target.name)},D=function(n){return i(null)},G=(0,h.TA)({initialValues:B,validationSchema:g.Z,validateOnChange:!0,onSubmit:function(e,o){n((0,m.x4)((0,u.Z)({},e))),o.resetForm(),s(null),Z(null)}}),H=G.handleChange,J=G.handleSubmit,K=G.errors,L=G.touched,M=G.values,N=M.email,Q=M.password,W=function(n){H(n),N.match(V)?s(!0):s(!1),Q.match(q)?Z(!0):Z(!1)};return(0,$.jsxs)(A,{children:[(0,$.jsx)(F,{children:"Sign In"}),(0,$.jsxs)(C,{onSubmit:J,autoComplete:"off",children:[(0,$.jsxs)("div",{style:{position:"relative"},children:[(0,$.jsx)(P,{children:(0,$.jsx)(b.r,{style:{stroke:"".concat(a&&"email"===r?T:K.email&&L.email?O:"email"===r?U:R)}})}),(0,$.jsx)(S,{name:"email",type:"text",value:N,onChange:W,placeholder:"Email",err:(null===K||void 0===K?void 0:K.email)&&L.email,touch:null===L||void 0===L?void 0:L.email,onFocus:z,onBlur:D,success:a&&"email"===r}),"email"===r&&a&&(0,$.jsx)(I,{children:(0,$.jsx)(y.r,{})}),(null===K||void 0===K?void 0:K.email)&&L.email&&(0,$.jsx)(I,{children:(0,$.jsx)(j.r,{})}),(null===K||void 0===K?void 0:K.email)&&(null===L||void 0===L?void 0:L.email)&&(0,$.jsx)(E,{children:K.email})]}),(0,$.jsxs)("div",{style:{position:"relative"},children:[(0,$.jsx)(P,{children:(0,$.jsx)(w.r,{style:{stroke:"".concat(p&&"password"===r?T:null!==K&&void 0!==K&&K.password&&null!==L&&void 0!==L&&L.password?O:"password"===r?U:R)}})}),(0,$.jsx)(S,{name:"password",type:"password",value:Q,onChange:W,placeholder:"Password",err:(null===K||void 0===K?void 0:K.password)&&(null===L||void 0===L?void 0:L.password),touch:null===L||void 0===L?void 0:L.password,success:p&&"password"===r,onFocus:z,onBlur:D}),"password"===r&&p&&(0,$.jsx)(I,{children:(0,$.jsx)(y.r,{})}),(null===K||void 0===K?void 0:K.password)&&L.password&&(0,$.jsx)(I,{children:(0,$.jsx)(j.r,{})}),(null===K||void 0===K?void 0:K.password)&&(null===L||void 0===L?void 0:L.password)&&(0,$.jsx)(E,{children:K.password})]}),(0,$.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,$.jsx)(_,{type:"submit",children:"Sign In"})})]})]})},G=o(9698),H=o(8797),J=o(9291),K=o(1841),L=function(){var n=(0,J.Z)().width;return(0,$.jsx)(K.oF,{children:(0,$.jsxs)(K.im,{signin:!0,children:[n>=1200&&(0,$.jsx)(G.r,{width:"562px",height:"498px"}),n<=767.99&&(0,$.jsx)(H.r,{width:"285px",height:"250px"}),n>=767.99&&n<=1199.98&&(0,$.jsx)(H.r,{width:"409px",height:"359px"}),(0,$.jsxs)(K.n5,{children:[(0,$.jsx)(D,{}),(0,$.jsx)(K.Fg,{to:"/register",children:"Register"})]})]})})}}}]);
//# sourceMappingURL=657.3509cb20.chunk.js.map