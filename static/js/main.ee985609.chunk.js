(this["webpackJsonpwebsite-monitoring"]=this["webpackJsonpwebsite-monitoring"]||[]).push([[0],{145:function(e,t,a){e.exports={footer:"App_footer__132qO",text:"App_text__2ofge",content:"App_content__wfyGy"}},146:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgAgMAAACmHu77AAAADFBMVEWzs7Pf39/ExMTU1NRdkO0cAAAEDUlEQVR4Xu3cIW4bURAG4PVWBVFUmCMEBpb7CAX12qqsyLDQ0PBdwkcJ9yXMC3OMgtdmUlVa0/7bb6jRB573/fNGM2wWUiAgICABBQICAhJZICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIKdhpsZrDqQNc/UYA5mG2bqLgezmIWMM5DjM1zUFcrgBOadA1jcgD2EQEBAQEBAQkIf5324XCAgICAjI6/iyCMipunHZkFbduGjIvrpx2ZBjNbGyIZcKH9mQallnQ6ZqWWdD9h2yiofsOmSMh3wZesVDjvWIkA051CPCPwEBWVfz5z+FgID41/JBdEVxaaxr/IdlBavTeM2Nuu1d1G3DfS5kXd/DqYvS20F9gms8p0KmOiKHPsyY3zLtLa6nVMju91dkO/R6SX9W+FqTspGQv6c178MhNa35lA25DG/VoiFLmUWZlgLZLwVyXApkvRRIy4fUBWVs0ZA666vnaEhdUD5tTsmQCiOfN5sf6ZDLr37jtmVDtm9tum/ZkKm6W99jIXXWe1JsyZDju0GO50hIscp1Coa0P94WLomQOutj/JRpzdGlQ/p7z8dwSF1QsiF11s/ZkAojm2hIdUtX4ZAKI9mQOuuP6ZAKI/mQHkayIRVGsiF11u/CIRVGwiEVRsIhFUbCIRVGsiEVRsIhFUbyIRVGCmLDAAgICAgICEjAMj3rDSMWTuavALWU1ZpcG5hBQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH4CAfTad3uoxsIAAAAASUVORK5CYII="},148:function(e,t,a){"use strict";(function(e){var n=a(32),r=a(11),o=a(14),c=a(0),i=a.n(c),s=a(12),l=a(31),u=a(29),m=a(39),p=a(30),d=a(112),b=a(164),f=a(26),g=a.n(f),E=a(149),A=a(7),h=a(34),v=a(150),C=a.n(v),j=g.a.bind(C.a),O=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},container:{margin:"50px"},title:{color:"#fff"}}}));t.a=function(){var t=O(),a=Object(c.useState)({name:void 0,surname:void 0,appName:void 0,email:void 0,password:void 0}),b=Object(o.a)(a,2),f=b[0],g=b[1],v=Object(s.g)().push,C=Object(c.useCallback)((function(e){var t=e.target,a=t.name,o=t.value;g((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a,o))}))}),[g]),I=Object(c.useCallback)((function(t){t.preventDefault(),Object(h.e)(Object(r.a)(Object(r.a)({},f),{},{password:e.from(f.password).toString("base64"),app:{name:f.appName,id:Object(E.v4)()}})),v("/login")}),[f,v]),B=Object(c.useCallback)((function(){var e=f.name,t=f.surname,a=f.appName,n=f.email,r=f.password;return!e||(!t||(!a||(!Object(A.d)(n)||!Object(A.e)(r))))}),[f]);return i.a.createElement(u.a,{container:!0},i.a.createElement(u.a,{item:!0,xs:!1,sm:2,md:3,lg:4}),i.a.createElement(u.a,{item:!0,xs:12,sm:8,md:6,lg:4,className:j("formWrapper",t.container)},i.a.createElement(m.a,null,i.a.createElement("h2",null,"Registration")),i.a.createElement("form",{className:j("form",t.root),noValidate:!0,autoComplete:"off",onSubmit:function(e){return I(e)}},i.a.createElement(p.a,{label:"Name",variant:"outlined",name:"name",error:Object(A.h)(f.name),helperText:Object(A.h)(f.name)&&"Name should be full",value:f.name,onChange:C}),i.a.createElement(p.a,{label:"Surname",variant:"outlined",name:"surname",error:Object(A.h)(f.surname),helperText:Object(A.h)(f.surname)&&"Surname should be full",value:f.surname,onChange:C}),i.a.createElement(p.a,{label:"App Name",variant:"outlined",name:"appName",error:Object(A.h)(f.appName),helperText:Object(A.h)(f.appName)&&"App Name should be full",value:f.appName,onChange:C}),i.a.createElement(p.a,{label:"Email",variant:"outlined",name:"email",error:!Object(A.b)(f.email),helperText:!Object(A.b)(f.email)&&"Email is not vaild",value:f.email,onChange:C}),i.a.createElement(p.a,{label:"Password",variant:"outlined",name:"password",error:Object(A.f)(f.password),helperText:Object(A.f)(f.password)&&"Password is not vaild",value:f.password,onChange:C,type:"password"}),i.a.createElement(d.a,{disabled:B(),type:"Submit",variant:"contained",color:"primary"},"Submit"),i.a.createElement(m.a,null,i.a.createElement("span",null,"Already have an account?"," ",i.a.createElement(l.b,{to:"/login"},"Log in"))))),i.a.createElement(u.a,{item:!0,xs:!1,sm:2,md:3,lg:4}))}}).call(this,a(97).Buffer)},150:function(e,t,a){e.exports={formWrapper:"Registration_formWrapper__35Dkj",form:"Registration_form__1nlKP"}},151:function(e,t,a){"use strict";(function(e){var n=a(32),r=a(11),o=a(14),c=a(0),i=a.n(c),s=a(12),l=a(31),u=a(29),m=a(39),p=a(30),d=a(112),b=a(306),f=a(26),g=a.n(f),E=a(34),A=a(7),h=a(51),v=a(152),C=a.n(v),j=g.a.bind(C.a);t.a=function(){var t=Object(c.useContext)(h.a),a=(t.login,t.setLogin),f=Object(c.useState)(!1),g=Object(o.a)(f,2),v=g[0],C=g[1],O=Object(c.useState)({email:void 0,password:void 0}),I=Object(o.a)(O,2),B=I[0],w=I[1],y=Object(s.g)().push,Q=Object(c.useCallback)((function(e){var t=e.target,a=t.name,o=t.value;w((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a,o))}))}),[w]),x=Object(c.useCallback)((function(){C(!0)}),[C]),S=Object(c.useCallback)((function(){C(!1)}),[C]),k=Object(c.useCallback)((function(t){t.preventDefault();var n=e.from(B.password).toString("base64");Object(E.d)().then((function(e){var t=Object.values(e).filter((function(e){return!(!e.email||e.email!==B.email||!e.password||e.password!==n)}));return t[0]?(sessionStorage.setItem("user",JSON.stringify(t[0])),sessionStorage.setItem("isLogged",!0),a(!0),y("/")):x()})).catch((function(e){console.log(e)}))}),[B,y,a,x]),N=Object(c.useCallback)((function(){return!Object(A.d)(B.email)}),[B]);return i.a.createElement(u.a,{container:!0,className:j("container")},i.a.createElement(u.a,{item:!0,xs:!1,sm:2,md:3,lg:4}),i.a.createElement(u.a,{item:!0,xs:12,sm:8,md:6,lg:4,className:j("formWrapper")},i.a.createElement(m.a,null,i.a.createElement("h2",null,"Login")),i.a.createElement("form",{className:j("form"),onSubmit:function(e){return k(e)}},i.a.createElement(p.a,{className:j("input"),label:"Email",name:"email",error:!Object(A.b)(B.email),helperText:!Object(A.b)(B.email)&&"Email is not vaild",value:B.email,variant:"outlined",onChange:function(e){return Q(e)}}),i.a.createElement(p.a,{className:j("input"),label:"Password",type:"password",name:"password",value:B.password,variant:"outlined",onChange:function(e){return Q(e)}}),i.a.createElement(d.a,{disabled:N(),type:"Submit",variant:"contained",className:j("submit"),color:"primary"},"Login"),i.a.createElement(m.a,null,i.a.createElement("span",null,"Not a member?"," ",i.a.createElement(l.b,{to:"/registration"},"Register")))),i.a.createElement(b.a,{open:v,onClose:S,className:j("modal"),"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},i.a.createElement("div",{className:j("modal-body")},i.a.createElement("h2",{id:"simple-modal-title"},"User is not found")))),i.a.createElement(u.a,{item:!0,xs:!1,sm:2,md:3,lg:4}))}}).call(this,a(97).Buffer)},152:function(e,t,a){e.exports={formWrapper:"Login_formWrapper__3l6MH",form:"Login_form__38Z7f",modal:"Login_modal__1EJ8v","modal-body":"Login_modal-body__3jOu_"}},154:function(e,t,a){"use strict";(function(e){var n=a(32),r=a(11),o=a(14),c=a(0),i=a.n(c),s=a(12),l=a(29),u=a(39),m=a(30),p=a(112),d=a(164),b=a(26),f=a.n(b),g=a(7),E=a(34),A=a(155),h=a.n(A),v=f.a.bind(h.a),C=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"100%"}},container:{marginTop:"50px",padding:"0 10px"},title:{color:"#fff"}}}));t.a=function(){var t=C(),a=Object(c.useState)({name:"",surname:"",appName:"",email:"",password:""}),d=Object(o.a)(a,2),b=d[0],f=d[1],A=Object(s.g)().push,h=Object(c.useCallback)((function(e){var t=e.target,a=t.name,o=t.value;f((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a,o))}))}),[f]),j=Object(c.useCallback)((function(t){t.preventDefault();var a=e.from(b.password).toString("base64");Object(E.c)().then((function(e){return Object.entries(e).filter((function(e){return!(!e[1].email||e[1].email!==b.email||!e[1].password||e[1].password!==a)}))})).then((function(t){var a=t[0][0];Object(E.f)(a,Object(r.a)(Object(r.a)({},b),{},{password:e.from(b.password).toString("base64"),app:Object(r.a)(Object(r.a)({},b.app),{},{name:b.appName})})).then((function(e){sessionStorage.setItem("user",JSON.stringify(e))})).then((function(){return A("/")}))}))}),[b,A]);Object(c.useEffect)((function(){var t=JSON.parse(sessionStorage.getItem("user"));f({name:t.name,surname:t.surname,app:t.app,appName:t.appName,email:t.email,password:e.from(t.password,"base64").toString("ascii")})}),[]);var O=Object(c.useCallback)((function(){var e=b.name,t=b.surname,a=b.appName,n=b.email,r=b.password;return!e||(!t||(!a||(!Object(g.d)(n)||!Object(g.e)(r))))}),[b]);return i.a.createElement(l.a,{container:!0},i.a.createElement(l.a,{item:!0,xs:!1,sm:2}),i.a.createElement(l.a,{className:v(t.container),item:!0,xs:12,sm:8},i.a.createElement(u.a,null,i.a.createElement("h2",null,"Account")),i.a.createElement("form",{className:v("form",t.root),noValidate:!0,autoComplete:"off",onSubmit:function(e){return j(e)}},i.a.createElement(m.a,{id:"outlined-basic",label:"Name",variant:"outlined",name:"name",error:Object(g.h)(b.name),helperText:Object(g.h)(b.name)&&"Name should be full",value:b.name,onChange:h}),i.a.createElement(m.a,{id:"outlined-basic",label:"Surname",variant:"outlined",name:"surname",error:Object(g.h)(b.surname),helperText:Object(g.h)(b.surname)&&"Surname should be full",value:b.surname,onChange:h}),i.a.createElement(m.a,{id:"outlined-basic",label:"App name",variant:"outlined",name:"appName",error:Object(g.h)(b.appName),helperText:Object(g.h)(b.appname)&&"App Name should be full",value:b.appName,onChange:h}),i.a.createElement(m.a,{id:"outlined-basic",label:"Email",variant:"outlined",name:"email",error:!Object(g.b)(b.email),helperText:!Object(g.b)(b.email)&&"Email is not vaild",value:b.email,onChange:h}),i.a.createElement(m.a,{id:"outlined-basic",label:"Password",variant:"outlined",name:"password",error:Object(g.f)(b.password),helperText:Object(g.f)(b.password)&&"Password is not vaild",value:b.password,onChange:h,type:"password"}),i.a.createElement(p.a,{disabled:O(),type:"Submit",variant:"contained",color:"primary"},"Submit"))),i.a.createElement(l.a,{item:!0,xs:!1,sm:2}))}}).call(this,a(97).Buffer)},155:function(e,t,a){e.exports={formWrapper:"Account_formWrapper__YvQ5q",form:"Account_form__25iPz"}},156:function(e,t,a){},159:function(e,t,a){e.exports={footer:"Footer_footer__8J6vd",text:"Footer_text__33yOq"}},176:function(e,t,a){e.exports=a(300)},181:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(181),a(14)),s=a(31),l=a(367),u=a(161),m=a(368),p=a(26),d=a.n(p),b=a(51),f=a(145),g=a.n(f),E=a(12),A=a(163),h=function(e){var t=e.component,a=Object(A.a)(e,["component"]);return sessionStorage.getItem("user")?r.a.createElement(E.b,Object.assign({},a,{render:function(e){return r.a.createElement(t,e)}})):r.a.createElement(E.a,{to:"/login"})},v=a(164),C=a(350),j=a(351),O=a(354),I=a(353),B=a(352),w=a(112),y=a(39),Q=a(349),x=a(147),S=a.n(x),k=a(146),N=a.n(k),M=Object(v.a)((function(e){return{root:{marginTop:100},code:{whiteSpace:"pre-wrap",wordWrap:"break-word"},button:{margin:e.spacing(1)}}}));function z(){var e=Object(n.useState)(JSON.parse(sessionStorage.getItem("user")).app),t=Object(i.a)(e,1)[0],a=M(),o=r.a.createElement("pre",{className:a.code},'\n//Copy and paste these scripts \n//into the bottom of your <body> tag,\n//but before you use the monitoring services\nconst monitoring = new Monitoring("'.concat(t.id,'");\n      \nmonitoring.use();\n')),c=Object(E.g)().push,s=Object(n.useCallback)((function(){c("/dashboard")}),[c]);return r.a.createElement(Q.a,{maxWidth:"sm"},r.a.createElement(w.a,{variant:"contained",color:"default",className:a.button,startIcon:r.a.createElement(S.a,null)},r.a.createElement("a",{style:{textDecoration:"none"},href:"https://github.com/ArmanSarkisov/monitoring-lib/blob/master/index.js",download:"monitoring.js"},"Download the library")),r.a.createElement(C.a,{className:a.root},r.a.createElement(j.a,null,r.a.createElement(B.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:N.a,title:"Contemplative Reptile"}),r.a.createElement(I.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},t.id),r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},o))),r.a.createElement(O.a,null,r.a.createElement(w.a,{onClick:s,size:"small",color:"primary"},"Open Current Analytics"))))}var _=a(148),L=a(151),W=a(69),D=a(369),R=a(356),T=a(166),F=a(357),V=a(358),Z=a(359),U=a(360),G=a(371),P=a(361),q=a(362),J=a(110),H=a.n(J),K=a(11),X=a(94),Y=a(109),$=a(13),ee=a.n($),te=a(19),ae=a(34),ne=a(7),re=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(i.a)(o,2),s=c[0],l=c[1],u=Object(n.useState)([]),m=Object(i.a)(u,2),p=m[0],d=m[1],b=Object(n.useState)([]),f=Object(i.a)(b,2),g=f[0],E=f[1],A=Object(n.useState)([]),h=Object(i.a)(A,2),v=h[0],C=h[1],j=Object(n.useState)([]),O=Object(i.a)(j,2),I=O[0],B=O[1],w=Object(n.useState)([]),y=Object(i.a)(w,2),Q=y[0],x=y[1],S=Object(n.useCallback)(Object(te.a)(ee.a.mark((function e(){var t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.a)();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),[]),k=Object(n.useCallback)(Object(te.a)(ee.a.mark((function e(){var t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.b)();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){Promise.all([S(),k()]).then((function(e){var t,a=Object(i.a)(e,2),n=a[0],o=a[1],c=[],s=[],u=[],m=Object(ne.a)(n),p=m.filter((function(e){return"navigation"===e.entryType})),b=m.filter((function(e){return"resource"===e.entryType})),f={},g={},A={},h={imgs:{total:0,inCache:0},scripts:{total:0,inCache:0},links:{total:0,inCache:0}},v={imageFormat:{problem:"Change the format of the images to .webp for better performance",details:["Detected another format in: \n"],count:0},scriptMin:{problem:"Minify JS files for better performance",details:["Not Minified files: \n"],count:0},cssMin:{problem:"Minify CSS files for better performance",details:["Not Minified files: \n"],count:0}},j=Object(Y.a)(b);try{for(j.s();!(t=j.n()).done;){var O=t.value;"xmlhttprequest"===O.initiatorType?f[O.name]?(f[O.name].count+=1,f[O.name].duration+=O.duration,f[O.name].size+=O.encodedBodySize):f[O.name]={count:1,duration:O.duration,size:O.encodedBodySize}:"img"===O.initiatorType?(h.imgs.total+=1,h.imgs.inCache+=O.isCached,O.needToChangeImgFormat&&(v.imageFormat.details.push("".concat(O.name," \n\n")),v.imageFormat.count+=1),O.isCached||(g[O.name]?(g[O.name].count+=1,g[O.name].duration+=O.duration,g[O.name].size+=O.transferSize):g[O.name]={count:1,duration:O.duration,size:O.transferSize})):"script"===O.initiatorType?(h.scripts.total+=1,h.scripts.inCache+=O.isCached,A[O.name]?(A[O.name].count+=1,A[O.name].duration+=O.duration,A[O.name].size+=O.transferSize):A[O.name]={count:1,duration:O.duration,size:O.transferSize},O.isMinified||(v.scriptMin.details.push("".concat(O.name," \n\n")),v.scriptMin.count+=1)):"link"!==O.initiatorType&&"css"!==O.initiatorType||(h.links.total+=1,h.links.inCache+=O.isCached,O.isMinified||(v.cssMin.details.push("".concat(O.name," \n\n")),v.cssMin.count+=1))}}catch($){j.e($)}finally{j.f()}v.imageFormat.count&&(v.imageFormat.details=Object(X.a)(new Set(v.imageFormat.details)).join(""),u.push(v.imageFormat)),v.scriptMin.count&&(v.scriptMin.details=Object(X.a)(new Set(v.scriptMin.details)).join(""),u.push(v.scriptMin)),v.cssMin.count&&(v.cssMin.details=Object(X.a)(new Set(v.cssMin.details)).join(""),u.push(v.cssMin));for(var I=Object(ne.g)(Object(ne.c)(Object(ne.a)(o),"type"),"date",-1),w=[],y=0,Q=Object.values(I);y<Q.length;y++){var S=Q[y];S[0].date=new Date(S[0].date).toString(),w.push(S[0])}s.push.apply(s,w);var k,N=Object(ne.a)(Object(K.a)({},o)),M=Object(Y.a)(N);try{for(M.s();!(k=M.n()).done;){var z=k.value;z.date=36e5*Math.floor(z.date/36e5)}}catch($){M.e($)}finally{M.f()}var _=Object(ne.c)(Object(ne.a)(N),"date"),L=[];for(var W in _)L.push({date:1*W,count:_[W].length});L.sort((function(e,t){return e.date-t.date}));for(var D=0,R=L;D<R.length;D++){var T=R[D];T.date=new Date(T.date).toLocaleString()}var F=[],V=[],Z=[];for(var U in f)F.push({url:U,duration:f[U].duration/f[U].count,size:f[U].size/f[U].count});for(var G in g)V.push({url:G,duration:g[G].duration/g[G].count,size:g[G].size/g[G].count});for(var P in A)Z.push({url:P,duration:A[P].duration/A[P].count,size:A[P].size/A[P].count});var q=p.reduce((function(e,t){return e+t.domContentLoaded}),0)/p.length||-1,J=p.reduce((function(e,t){return e+t.domInteractive}),0)/p.length||-1,H=p.reduce((function(e,t){return e+t.domComplete}),0)/p.length||-1;q>=0&&c.push({key:"Dom Content Loading Time",value:"".concat(q,"ms")}),J>=0&&c.push({key:"Dom Content was interactive after",value:"".concat(J,"ms")}),H>=0&&c.push({key:"Dom Content was ready after",value:"".concat(H,"ms")}),h.imgs.total&&c.push({key:"Percentage of the images cached",value:"".concat(h.imgs.inCache/h.imgs.total*100,"%")}),h.scripts.total&&c.push({key:"Percentage of the JS files cached",value:"".concat(h.scripts.inCache/h.scripts.total*100,"%")}),h.links.total&&c.push({key:"Percentage of the CSS files cached",value:"".concat(h.links.inCache/h.links.total*100,"%")}),C(V),B(Z),E(F),d(c),l(s),r(u),x(L)}))}),[S,k]),{suggestions:a,warnings:s,info:p,requests:g,images:v,warningsStat:Q,scripts:I}},oe=a(46),ce=Object(v.a)({table:{minWidth:"360px",width:"100%",float:"left",display:"block",margin:"auto",padding:"20px",boxSizing:"border-box",maxWidth:"unset!important"},chart:{minWidth:"360px",width:"50%",float:"left",padding:"20px",boxSizing:"border-box"},box:{padding:"10px",borderRadius:"10px",boxShadow:"5px 5px 10px #eeeeee",color:"white",minHeight:"150px"},suggestions:{backgroundColor:"rgba(40,167,69,0.6)"},info:{backgroundColor:"rgba(23,162,184,0.6)"},warnings:{backgroundColor:"rgba(255,193,7,0.6)"},container:{padding:"0px 20px"},title:{padding:"20px"},details:{whiteSpace:"pre-wrap",wordWrap:"break-word"}}),ie=function(){var e=re(),t=e.suggestions,a=e.warnings,n=e.info,o=e.requests,c=e.images,i=e.warningsStat,s=e.scripts,l=Array.from(c).map((function(e){return e.url})),u=Array.from(c).map((function(e){return e.size})),m=Array.from(o).map((function(e){return e.url})),p=Array.from(o).map((function(e){return e.duration})),d=Array.from(i).map((function(e){return e.date})),b=Array.from(i).map((function(e){return e.count})),f=Array.from(s).map((function(e){return e.url})),g=Array.from(s).map((function(e){return e.size})),E=Object(oe.a)(m,p,"Requests Duration"),A=Object(oe.a)(l,u,"Image files sizes"),h=Object(oe.a)(f,g,"Script files sizes"),v=Object(oe.a)(d,b,"Number of warnings per month");console.log("Suggestions: ",t),console.log("Warnings: ",a),console.log("Info: ",n);var j=ce();return console.log("imgs:",c),r.a.createElement("div",{className:j.container},r.a.createElement(y.a,null,r.a.createElement("h2",{className:j.title},"App dashboard")),r.a.createElement("div",null,r.a.createElement(Q.a,{className:j.chart},r.a.createElement(C.a,null,r.a.createElement(W.a,{data:E,width:100,height:50,options:{maintainAspectRatio:!0,responsive:!0,scales:{xAxes:[{ticks:{autoSkip:!0,fontSize:0}}]}}}))),r.a.createElement(Q.a,{className:j.chart},r.a.createElement(C.a,null,r.a.createElement(W.c,{data:v,width:100,height:50,options:{maintainAspectRatio:!0,responsive:!0,scales:{xAxes:[{ticks:{autoSkip:!0,fontSize:0}}]}}}))),r.a.createElement(Q.a,{className:j.chart},r.a.createElement(C.a,null,r.a.createElement(W.b,{data:A,width:100,height:50,options:{maintainAspectRatio:!0,responsive:!0,scales:{yAxes:[{ticks:{autoSkip:!0,fontSize:0}}]}}}))),r.a.createElement(Q.a,{className:j.chart},r.a.createElement(C.a,null,r.a.createElement(W.b,{data:h,width:100,height:50,options:{maintainAspectRatio:!0,responsive:!0,scales:{yAxes:[{ticks:{autoSkip:!0,fontSize:0}}]}}}))),r.a.createElement(Q.a,{className:j.table},r.a.createElement(D.a,{className:"".concat(j.box," ").concat(j.info)},r.a.createElement(y.a,null,r.a.createElement("b",null,"Information")),r.a.createElement(C.a,null,r.a.createElement(R.a,{component:T.a},r.a.createElement(F.a,null,r.a.createElement(V.a,null,n.map((function(e){return r.a.createElement(Z.a,{key:e.key},r.a.createElement(U.a,{component:"th",scope:"row"},e.key),r.a.createElement(U.a,{align:"right"},e.value))})))))))),r.a.createElement(Q.a,{className:j.table},r.a.createElement(D.a,{className:"".concat(j.box," ").concat(j.warnings)},r.a.createElement(y.a,null,r.a.createElement("b",null,"Warnings")),r.a.createElement(C.a,null,Array.from(a).map((function(e){return r.a.createElement(G.a,{key:e.id},r.a.createElement(P.a,{expandIcon:r.a.createElement(H.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(y.a,{className:j.heading},e.message)),r.a.createElement(q.a,null,r.a.createElement("pre",{className:j.details},r.a.createElement("em",null,"Warning creation date:",e.date),r.a.createElement("br",null),r.a.createElement("br",null),e.details)))}))))),r.a.createElement(Q.a,{className:j.table},r.a.createElement(D.a,{className:"".concat(j.box," ").concat(j.suggestions)},r.a.createElement(y.a,null,r.a.createElement("b",null,"Suggestions")),r.a.createElement(C.a,null,Array.from(t).map((function(e){return r.a.createElement(G.a,{key:e.id},r.a.createElement(P.a,{expandIcon:r.a.createElement(H.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(y.a,{className:j.heading},e.problem)),r.a.createElement(q.a,null,r.a.createElement("pre",{className:j.details},e.details)))})))))))},se=a(154),le=function(){return r.a.createElement(E.d,null,r.a.createElement(h,{exact:!0,path:"/",component:z}),r.a.createElement(h,{path:"/dashboard",component:ie}),r.a.createElement(h,{path:"/account",component:se.a}),r.a.createElement(E.b,{path:"/registration",component:_.a}),r.a.createElement(E.b,{path:"/login",component:L.a}),r.a.createElement(E.a,{from:"*",to:"/"}))},ue=a(32),me=a(370),pe=a(355),de=a(304),be=a(363),fe=a(364),ge=a(365),Ee=a(303),Ae=a(157),he=a.n(Ae),ve=a(158),Ce=a.n(ve),je=a(366),Oe=a(162),Ie=a(156),Be=a.n(Ie),we=Object(v.a)((function(e){return{list:{width:250},fullList:{width:"auto"},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),ye=d.a.bind(Be.a),Qe=[{text:"Home",href:"/"},{text:"Dashboard",href:"/dashboard"},{text:"Logout",href:"/login"}];function xe(){var e=we(),t=Object(n.useContext)(b.a),a=t.login,o=t.setLogin,c=Object(n.useState)({left:!1}),s=Object(i.a)(c,2),l=s[0],u=s[1],m=Object(n.useState)(null),p=Object(i.a)(m,2),d=p[0],f=p[1],g=Boolean(d),A=Object(E.g)().push,h=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&u(Object(K.a)(Object(K.a)({},l),{},Object(ue.a)({},e,t)))}},v=Object(n.useCallback)((function(e){"/login"===e&&(sessionStorage.setItem("isLogged",!1),sessionStorage.removeItem("user"),o(!1)),A(e)}),[A,o]),C=Object(n.useCallback)((function(){f(null),A("/dashboard")}),[A]),j=Object(n.useCallback)((function(){f(null),A("/account")}),[A]);return r.a.createElement(fe.a,{position:"static"},r.a.createElement(ge.a,null,r.a.createElement(Ee.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},"true"==="".concat(a)?["left"].map((function(t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(he.a,{onClick:h(t,!0)}),r.a.createElement(me.a,{anchor:t,open:l[t],onClose:h(t,!1)},function(t){return r.a.createElement("div",{className:ye(e.list,Object(ue.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:h(t,!1),onKeyDown:h(t,!1)},r.a.createElement(pe.a,null,Qe.map((function(e){var t=e.text,a=e.href;return r.a.createElement(de.a,{button:!0,key:t},r.a.createElement(be.a,{primary:t,onClick:function(){return v(a)}}))}))))}(t)))})):null),r.a.createElement(y.a,{variant:"h6",className:e.title},"Web Monitoring"),"true"==="".concat(a)?r.a.createElement("div",null,r.a.createElement(Ee.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){f(e.currentTarget)},color:"inherit"},r.a.createElement(Ce.a,null)),r.a.createElement(Oe.a,{id:"menu-appbar",anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:function(){f(null)}},r.a.createElement(je.a,{onClick:C},"My Analytics"),r.a.createElement(je.a,{onClick:j},"My account"))):null))}var Se=a(160),ke=a.n(Se),Ne=a(159),Me=a.n(Ne),ze=d.a.bind(Me.a),_e=function(){return r.a.createElement("footer",{className:ze("footer")},r.a.createElement(y.a,{variant:"h6",component:"h4"},r.a.createElement("span",{className:ze("text")},"Made with",r.a.createElement(ke.a,{className:ze("icons")}),'by "Web Growth Team"')))},Le=d.a.bind(g.a);var We=function(){var e=Object(l.a)("(prefers-color-scheme: dark)"),t=Object(n.useMemo)((function(){return Object(u.a)({palette:{type:e?"dark":"light"}})}),[e]),a=Object(n.useState)(!1),o=Object(i.a)(a,2),c=o[0],p=o[1];return Object(n.useEffect)((function(){sessionStorage.getItem("isLogged")||sessionStorage.setItem("isLogged","false")}),[]),Object(n.useEffect)((function(){var e="true"===sessionStorage.getItem("isLogged");p(e)}),[c]),r.a.createElement(s.a,null,r.a.createElement(m.a,{theme:t},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:Le("content")},r.a.createElement(b.a.Provider,{value:{login:c,setLogin:p}},r.a.createElement(xe,null),r.a.createElement(le,null))),r.a.createElement(_e,null))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(We,null)),document.getElementById("root"))},34:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p})),a.d(t,"e",(function(){return f})),a.d(t,"d",(function(){return g})),a.d(t,"c",(function(){return E})),a.d(t,"f",(function(){return A}));var n=a(11),r=a(88),o=a.n(r),c=o.a.create({baseURL:"https://web-monitoring-cba12.firebaseio.com/"});c.interceptors.request.use((function(e){return e.params||(e.params={}),e.params=Object(n.a)(Object(n.a)({},e.params),{},{orderBy:'"appId"',equalTo:'"'.concat("1223334444",'"')}),e}));var i=c,s=a(13),l=a.n(s),u=a(19),m=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("analytics.json");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.warn("oooo"),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("info.json");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.warn("oooo"),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=o.a.create({baseURL:"https://web-monitoring-cba12.firebaseio.com/"});d.interceptors.request.use((function(e){return e}));var b=d,f=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.post("users.json",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(t),console.log("registration failed"),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("users.json");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Login is failed");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("users.json");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log("registration failed"),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.put("users/".concat(t,".json"),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log("update failed"),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()},46:function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{labels:e,datasets:[{label:a,fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]}}},51:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(sessionStorage.getItem("isLogged"));t.a=r},7:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"f",(function(){return s})),a.d(t,"h",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"g",(function(){return m}));a(46);var n=a(11),r=function(e){var t=[];for(var a in console.log("arr[i]",e),e)t.push(Object(n.a)(Object(n.a)({},e[a]),{},{id:a}));return console.log("newArr",t),t},o=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},c=function(e){return!!(e&&e.length>=8)},i=function(e){return void 0===e||/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},s=function(e){return e&&e.length?e.length<8:void 0!==e},l=function(e){return(!e||!e.length)&&void 0!==e},u=function(e,t){return e.reduce((function(e,a){return(e[a[t]]=e[a[t]]||[]).push(a),e}),{})},m=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;for(var n in e)e[n].sort((function(e,n){return a*(e[t]-n[t])}));return e}}},[[176,1,2]]]);
//# sourceMappingURL=main.ee985609.chunk.js.map