(this["webpackJsonptssg-editor"]=this["webpackJsonptssg-editor"]||[]).push([[0],{222:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(31),s=r.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=r(22),i=r(3),u=r(84),l=r(232),p=r(230),d=r(52),h=r.n(d),f=(r(98),r(228)),m=r(229),v=r(226),y=r(71),g=r.n(y),b=function(e){var t=e.isOpen,r=e.onClose,o=Object(n.useState)(""),s=Object(c.a)(o,2),u=s[0],l=s[1];return Object(n.useEffect)((function(){"undefined"!==typeof fetch&&fetch("./readme.md").then((function(e){return e.text()})).then((function(e){return l(e)}))}),[]),a.a.createElement(m.a,{isOpen:t,onClose:r,size:"900px"},a.a.createElement(m.f,null),a.a.createElement(m.d,null,a.a.createElement(m.e,null,a.a.createElement(v.a,{size:"lg",backgroundColor:"royalblue",display:"inline-block",p:2,px:6,color:"white"},"How to use guide...")),a.a.createElement(m.c,null),a.a.createElement(m.b,null,a.a.createElement(i.a,{className:"how-to-guide"},a.a.createElement(g.a,{source:u,escapeHtml:!1})))))},A=r(231),E=r(227),C=r(90),x=function(e){var t=e.rightSection;return a.a.createElement(i.a,{pl:8},a.a.createElement(u.a,{alignItems:"center"},a.a.createElement(i.a,{flex:1},a.a.createElement(u.a,{alignItems:"center"},a.a.createElement(v.a,{color:"green.500"},"TSSG"),a.a.createElement(A.a,{color:"white",backgroundColor:"orange.400",mx:2},"Alpha"),a.a.createElement(v.a,{size:"xs",color:"black.200"},"The Swagger Schema Generator")),a.a.createElement(E.a,null,"Write typescript like syntax and generate OPEN API Spec")),a.a.createElement(i.a,null,a.a.createElement(u.a,{alignItems:"center",mr:4},a.a.createElement(i.a,{mr:4,mt:2},a.a.createElement(C.a,{href:"https://github.com/tauqeernasir/tssg-syntax-parser","data-size":"large","data-show-count":!0,"aria-label":"Star tauqeernasir/tssg-syntax-parser on GitHub"},"Star")),t))))},w=r(91),O=r(85),S=r(86),j=r.n(S),k=r(87),B=r.n(k),P=r(50),q=r.n(P),z=(r(206),r(207),r(208),r(212),r(213),r(214),r(215),B.a.parser),I=q.a.parse,R=window.localStorage.getItem("savedValue"),M="\nSchemas {\n  BaseUser {\n  \t_id: string,\n    name: string,\n    email: string,\n    isActive: boolean,\n    profileImageUrl: string,\n  }\n  \n  Employee extends BaseUser {\n  \tdepartment: string,\n    roles: string[],\n  }\n  \n  Manager extends BaseUser, Employee {\n  \taccessList: {\n    \ttype: string,\n        active: boolean,\n    }[]\n  }\n}\n",F=R||M,N=function(e){var t=e.setParsedData,r=e.width,o=e.height,s=Object(n.useState)(F),u=Object(c.a)(s,2),l=u[0],p=u[1],d=Object(n.useState)(""),h=Object(c.a)(d,2),f=h[0],m=h[1],v=Object(n.useCallback)(j()((function(e){if(e)try{var r=z(e),n=I(e);t({parsedSpec:r,parsedAst:n}),window.localStorage.setItem("savedValue",e),m("")}catch(a){m(a.message)}}),1e3,{trailing:!0}),[]);return Object(n.useEffect)((function(){v(l)}),[l]),a.a.createElement(i.a,{position:"relative"},f&&a.a.createElement(T,Object.assign({error:f},{position:"absolute",left:0,bottom:0,zIndex:999,width:"100%",color:"white"})),a.a.createElement(i.a,{position:"absolute",top:2,right:6,style:{zIndex:999}}),a.a.createElement(O.Controlled,{editorDidMount:function(e){e.setSize(r/2,o-80)},className:"tssg-editor",value:l,options:{lineWrapping:!0,lineNumbers:!0,theme:"material",smartIndent:!1,autoCloseBrackets:!0,highlightSelectionMatches:!0,matchBrackets:!0,mode:"javascript"},onBeforeChange:function(e,t,r){p(r)},onChange:function(e,t,r){}}))},T=function(e){var t=e.error,r=Object(w.a)(e,["error"]);return console.log(t),a.a.createElement(i.a,Object.assign({padding:2,bg:"orange.400"},r),t||"")},W=r(88),_=function(){var e,t,r,o,s,d,m,v,y,g,A,E,C,w=Object(n.useState)({}),O=Object(c.a)(w,2),S=O[0],j=O[1],k=Object(n.useState)(!1),B=Object(c.a)(k,2),P=B[0],q=B[1];Object(n.useEffect)((function(){q(!1)}),[S.parsedSpec]);var z=null===(e=window)||void 0===e?void 0:e.innerHeight,I=null===(t=window)||void 0===t?void 0:t.innerWidth,R=Object(f.a)(),M=R.isOpen,F=R.onClose;R.onOpen;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{h:80,position:"relative"},a.a.createElement(x,null)),a.a.createElement(u.a,null,a.a.createElement(i.a,{flex:1},a.a.createElement(N,{setParsedData:j,width:I,height:z})),a.a.createElement(i.a,{flex:1,bg:"white",color:"white",position:"relative"},a.a.createElement(u.a,{flexDir:"column"},a.a.createElement(l.f,{bg:"gray.900",variantColor:"yellow"},a.a.createElement(l.c,null,a.a.createElement(l.a,null,"Open API Spec"),a.a.createElement(l.a,null,"AST"),a.a.createElement(l.a,null,"Meta")),a.a.createElement(l.e,null,a.a.createElement(l.d,null,a.a.createElement(i.a,{pos:"relative"},a.a.createElement(i.a,{pos:"absolute",right:"10px",top:"10px"},a.a.createElement(W.CopyToClipboard,{text:JSON.stringify(S.parsedSpec,null,2),onCopy:function(){return q(!0)}},a.a.createElement(p.a,{size:"sm",variant:"solid",variantColor:"blue"},P?"Copied":"Copy to clipboard"))),a.a.createElement(i.a,{as:"pre",style:{height:z-80-42,width:I/2,overflowY:"scroll"}},JSON.stringify(S.parsedSpec,null,2)))),a.a.createElement(l.d,null,a.a.createElement(i.a,null,a.a.createElement(h.a,{src:null!==(r=S.parsedAst)&&void 0!==r?r:{},displayDataTypes:!1,enableClipboard:!1,displayObjectSize:!1,indentWidth:2,theme:"tomorrow",style:{position:"absolute",height:z-80-42,width:"100%",overflowY:"scroll"}}))),a.a.createElement(l.d,null,a.a.createElement(i.a,null,a.a.createElement(h.a,{src:{Schemas:null!==(o=null===(s=S.parsedAst)||void 0===s?void 0:s.schemas)&&void 0!==o?o:{},RequestBodies:null!==(d=null===(m=S.parsedAst)||void 0===m?void 0:m.requestBodies)&&void 0!==d?d:{},Parameters:null!==(v=null===(y=S.parsedAst)||void 0===y?void 0:y.parameters)&&void 0!==v?v:{},Comments:null!==(g=null===(A=S.parsedAst)||void 0===A?void 0:A.comments)&&void 0!==g?g:{},Paths:null!==(E=null===(C=S.parsedAst)||void 0===C?void 0:C.paths)&&void 0!==E?E:{}},displayDataTypes:!1,enableClipboard:!1,displayObjectSize:!1,indentWidth:2,theme:"tomorrow",style:{position:"absolute",height:z-80-42,width:"100%",overflowY:"scroll"}})))))))),a.a.createElement(b,{isOpen:M,onClose:F}))},D=r(36),U=r(224),H=r(233);s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(D.a,{theme:U.a},a.a.createElement(H.a,null),a.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,r){"use strict";var n=r(69);function a(e,t,r,n){this.message=e,this.expected=t,this.found=r,this.location=n,this.name="SyntaxError","function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,a)}!function(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}(a,Error),a.buildMessage=function(e,t){var r={literal:function(e){return'"'+a(e.text)+'"'},class:function(e){var t,r="";for(t=0;t<e.parts.length;t++)r+=e.parts[t]instanceof Array?o(e.parts[t][0])+"-"+o(e.parts[t][1]):o(e.parts[t]);return"["+(e.inverted?"^":"")+r+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function a(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function o(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}return"Expected "+function(e){var t,n,a,o=new Array(e.length);for(t=0;t<e.length;t++)o[t]=(a=e[t],r[a.type](a));if(o.sort(),o.length>0){for(t=1,n=1;t<o.length;t++)o[t-1]!==o[t]&&(o[n]=o[t],n++);o.length=n}switch(o.length){case 1:return o[0];case 2:return o[0]+" or "+o[1];default:return o.slice(0,-1).join(", ")+", or "+o[o.length-1]}}(e)+" but "+function(e){return e?'"'+a(e)+'"':"end of input"}(t)+" found."},e.exports={SyntaxError:a,parse:function(e,t){t=void 0!==t?t:{};var r,o={},s={Start:xe},c=xe,i=ve("Schemas",!1),u=ve("{",!1),l=ve("}",!1),p=ve(" ",!1),d=ve("extends",!1),h=ve(",",!1),f=function(e,t){return Xe(e,t,3)},m=ve("RequestBodies",!1),v=ve("Parameters",!1),y=ve("Paths",!1),g=function(e,t){return Xe(e,t,1)},b=function(e,t){return Xe(e,t,2)},A=ve("description",!1),E=ve(":",!1),C=ve("requestBody",!1),x=ve("responses",!1),w=/^[0-9]/,O=ye([["0","9"]],!1,!1),S=ve("post",!1),j=ve("get",!1),k=ve("put",!1),B=ve("patch",!1),P=ve("delete",!1),q=/^[\-_a-z0-9?\/]/i,z=ye(["-","_",["a","z"],["0","9"],"?","/"],!1,!0),I=ve("(",!1),R=/^[a-z]/i,M=ye([["a","z"]],!1,!0),F=ve(")",!1),N=ve("?",!1),T=ve(".",!1),W=/^[.%\^&*(@!#)]/,_=ye([".","%","^","&","*","(","@","!","#",")"],!1,!1),D=ve("[]",!1),U=ve("[",!1),H=ve("]",!1),J=ve("/*",!1),Z=ve("*/",!1),G=/^[_a-zA-Z]/,L=ye(["_",["a","z"],["A","Z"]],!1,!1),Y=/^[_a-zA-Z0-9]/,V=ye(["_",["a","z"],["A","Z"],["0","9"]],!1,!1),$=ve('"',!1),K=ve("'",!1),Q=ve("\\",!1),X=function(){return e.substring(pe,le)},ee=/^[\n\r\u2028\u2029]/,te=ye(["\n","\r","\u2028","\u2029"],!1,!1),re={type:"any"},ne=ge("whitespace"),ae=ve("\t",!1),oe=ve("\v",!1),se=ve("\f",!1),ce=ve("\n",!1),ie=ve("\xa0",!1),ue=ve("\ufeff",!1),le=0,pe=0,de=[{line:1,column:1}],he=0,fe=[],me=0;if("startRule"in t){if(!(t.startRule in s))throw new Error("Can't start parsing from rule \""+t.startRule+'".');c=s[t.startRule]}function ve(e,t){return{type:"literal",text:e,ignoreCase:t}}function ye(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function ge(e){return{type:"other",description:e}}function be(t){var r,n=de[t];if(n)return n;for(r=t-1;!de[r];)r--;for(n={line:(n=de[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return de[t]=n,n}function Ae(e,t){var r=be(e),n=be(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function Ee(e){le<he||(le>he&&(he=le,fe=[]),fe.push(e))}function Ce(e,t,r){return new a(a.buildMessage(e,t),e,t,r)}function xe(){var e,t;return e=le,Le()!==o&&(t=function(){var e,t,r,n,a,s,c;if(e=le,(t=we())!==o){for(r=[],n=le,(a=Le())!==o&&(s=we())!==o&&(c=Le())!==o?n=a=[a,s,c]:(le=n,n=o);n!==o;)r.push(n),n=le,(a=Le())!==o&&(s=we())!==o&&(c=Le())!==o?n=a=[a,s,c]:(le=n,n=o);r!==o?(pe=e,t=new tt(Xe(t,r,1)),e=t):(le=e,e=o)}else le=e,e=o;return e}())!==o&&Le()!==o?(pe=e,e=t):(le=e,e=o),e}function we(){var t;return(t=function(){var t,r,n,a,s,c;if(t=le,Le()!==o)if("Schemas"===e.substr(le,7)?(r="Schemas",le+=7):(r=o,0===me&&Ee(i)),r!==o)if(Le()!==o)if(123===e.charCodeAt(le)?(n="{",le++):(n=o,0===me&&Ee(u)),n!==o)if(Le()!==o){for(a=[],(s=Oe())===o&&(s=Se());s!==o;)a.push(s),(s=Oe())===o&&(s=Se());a!==o&&(s=Le())!==o?(125===e.charCodeAt(le)?(c="}",le++):(c=o,0===me&&Ee(l)),c!==o&&Le()!==o?(pe=t,t={type:"SchemasBlockExpression",body:a}):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;else le=t,t=o;else le=t,t=o;else le=t,t=o;else le=t,t=o;return t}())===o&&(t=function(){var t,r,n,a,s,c;if(t=le,Le()!==o)if("RequestBodies"===e.substr(le,13)?(r="RequestBodies",le+=13):(r=o,0===me&&Ee(m)),r!==o)if(Le()!==o)if(123===e.charCodeAt(le)?(n="{",le++):(n=o,0===me&&Ee(u)),n!==o)if(Le()!==o){for(a=[],(s=je())===o&&(s=ke());s!==o;)a.push(s),(s=je())===o&&(s=ke());a!==o&&(s=Le())!==o?(125===e.charCodeAt(le)?(c="}",le++):(c=o,0===me&&Ee(l)),c!==o&&Le()!==o?(pe=t,t={type:"RequestBodiesBlockExpression",body:a}):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;else le=t,t=o;else le=t,t=o;else le=t,t=o;else le=t,t=o;return t}())===o&&(t=function(){var t,r,n,a,s,c;if(t=le,Le()!==o)if("Parameters"===e.substr(le,10)?(r="Parameters",le+=10):(r=o,0===me&&Ee(v)),r!==o)if(Le()!==o)if(123===e.charCodeAt(le)?(n="{",le++):(n=o,0===me&&Ee(u)),n!==o)if(Le()!==o){for(a=[],s=Be();s!==o;)a.push(s),s=Be();a!==o&&(s=Le())!==o?(125===e.charCodeAt(le)?(c="}",le++):(c=o,0===me&&Ee(l)),c!==o&&Le()!==o?(pe=t,t={type:"ParametersBlockExpression",body:a}):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;else le=t,t=o;else le=t,t=o;else le=t,t=o;else le=t,t=o;return t}())===o&&(t=function(){var t,r,n,a,s;t=le,Le()!==o?("Paths"===e.substr(le,5)?(r="Paths",le+=5):(r=o,0===me&&Ee(y)),r!==o&&Le()!==o?(123===e.charCodeAt(le)?(n="{",le++):(n=o,0===me&&Ee(u)),n!==o&&Le()!==o&&(a=function(){var e,t,r,n,a,s;if(e=le,(t=Pe())!==o){for(r=[],n=le,(a=Le())!==o&&(s=Pe())!==o?n=a=[a,s]:(le=n,n=o);n!==o;)r.push(n),n=le,(a=Le())!==o&&(s=Pe())!==o?n=a=[a,s]:(le=n,n=o);r!==o?(pe=e,t=g(t,r),e=t):(le=e,e=o)}else le=e,e=o;return e}())!==o&&Le()!==o?(125===e.charCodeAt(le)?(s="}",le++):(s=o,0===me&&Ee(l)),s!==o&&Le()!==o?(pe=t,t={type:"PathsBlockExpression",body:a}):(le=t,t=o)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o);return t}()),t}function Oe(){var t,r,n,a,s;return t=le,r=le,(r=(n=De())!==o?e.substring(r,le):n)!==o&&(n=Re())!==o?(pe=t,s=n,Ye[a=r]=s,tt.schemas=Ye,t=r={type:"SchemaExpression",name:a,body:s}):(le=t,t=o),t}function Se(){var t,r,n,a,s,c,i,u,l;return t=le,r=le,(r=(n=De())!==o?e.substring(r,le):n)!==o?(32===e.charCodeAt(le)?(n=" ",le++):(n=o,0===me&&Ee(p)),n!==o?("extends"===e.substr(le,7)?(a="extends",le+=7):(a=o,0===me&&Ee(d)),a!==o&&Le()!==o&&(s=function(){var t,r,n,a,s,c,i,u,l;t=le,r=le,r=(n=De())!==o?e.substring(r,le):n;if(r!==o){for(n=[],a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=Le())!==o?(u=le,l=De(),(u=l!==o?e.substring(u,le):l)!==o?a=s=[s,c,i,u]:(le=a,a=o)):(le=a,a=o)):(le=a,a=o);a!==o;)n.push(a),a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=Le())!==o?(u=le,l=De(),(u=l!==o?e.substring(u,le):l)!==o?a=s=[s,c,i,u]:(le=a,a=o)):(le=a,a=o)):(le=a,a=o);n!==o&&(a=Le())!==o?(44===e.charCodeAt(le)?(s=",",le++):(s=o,0===me&&Ee(h)),s===o&&(s=null),s!==o?(pe=t,r=f(r,n),t=r):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;return t}())!==o&&(c=Re())!==o?(pe=t,u=s,l=c,Ye[i=r]=l,tt.prototype.schemas=Ye,t=r={type:"SchemaExpression",extend:u,name:i,body:l}):(le=t,t=o)):(le=t,t=o)):(le=t,t=o),t}function je(){var t,r,n,a,s;return t=le,r=le,(r=(n=De())!==o?e.substring(r,le):n)!==o&&(n=Re())!==o?(pe=t,s=n,Ve[a=r]=s,tt.prototype.requestBodies=Ve,t=r={type:"RequestBodyExpression",name:a,body:s}):(le=t,t=o),t}function ke(){var t,r,n,a,s,c,i,u,l;return t=le,r=le,(r=(n=De())!==o?e.substring(r,le):n)!==o?(32===e.charCodeAt(le)?(n=" ",le++):(n=o,0===me&&Ee(p)),n!==o?("extends"===e.substr(le,7)?(a="extends",le+=7):(a=o,0===me&&Ee(d)),a!==o&&Le()!==o?(s=le,(s=(c=De())!==o?e.substring(s,le):c)!==o&&(c=Re())!==o?(pe=t,u=s,l=c,Ye[i=r]=l,tt.prototype.schemas=Ye,t=r={type:"RequestBodyExpression",extend:u,name:i,body:l}):(le=t,t=o)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o),t}function Be(){var t,r,n,a,s;return t=le,r=le,(r=(n=De())!==o?e.substring(r,le):n)!==o&&(n=Re())!==o?(pe=t,s=n,Ke[a=r]=s,tt.prototype.parameters=Ke,t=r={type:"ParameterExpression",name:a,body:s}):(le=t,t=o),t}function Pe(){var t,r,n,a,s,c,i,d;return t=le,Le()!==o&&(r=function(){var t,r,n,a;t=le,r=le,n=[],q.test(e.charAt(le))?(a=e.charAt(le),le++):(a=o,0===me&&Ee(z));if(a!==o)for(;a!==o;)n.push(a),q.test(e.charAt(le))?(a=e.charAt(le),le++):(a=o,0===me&&Ee(z));else n=o;r=n!==o?e.substring(r,le):n;r!==o&&(pe=t,r=r);return t=r}())!==o?(32===e.charCodeAt(le)?(n=" ",le++):(n=o,0===me&&Ee(p)),n!==o&&Le()!==o&&(a=function(){var t,r,n,a,s;t=le,40===e.charCodeAt(le)?(r="(",le++):(r=o,0===me&&Ee(I));if(r!==o){if(n=le,a=[],R.test(e.charAt(le))?(s=e.charAt(le),le++):(s=o,0===me&&Ee(M)),s!==o)for(;s!==o;)a.push(s),R.test(e.charAt(le))?(s=e.charAt(le),le++):(s=o,0===me&&Ee(M));else a=o;(n=a!==o?e.substring(n,le):a)!==o?(41===e.charCodeAt(le)?(a=")",le++):(a=o,0===me&&Ee(F)),a!==o?(pe=t,t=r=n):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;return t}())!==o?(32===e.charCodeAt(le)?(s=" ",le++):(s=o,0===me&&Ee(p)),s!==o&&Le()!==o?(123===e.charCodeAt(le)?(c="{",le++):(c=o,0===me&&Ee(u)),c!==o&&Le()!==o&&(i=function(){var e,t,r,n,a,s;if(e=le,(t=qe())!==o){for(r=[],n=le,(a=Le())!==o&&(s=qe())!==o?n=a=[a,s]:(le=n,n=o);n!==o;)r.push(n),n=le,(a=Le())!==o&&(s=qe())!==o?n=a=[a,s]:(le=n,n=o);r!==o?(pe=e,t=g(t,r),e=t):(le=e,e=o)}else le=e,e=o;return e}())!==o&&Le()!==o?(125===e.charCodeAt(le)?(d="}",le++):(d=o,0===me&&Ee(l)),d!==o&&Le()!==o?(pe=t,t=function(e,t,r){var n={type:"PathExpression",endpoint:e,tag:t,methods:r};return Qe[e]=n,tt.prototype.paths=Qe,n}(r,a,i)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o),t}function qe(){var t,r,n;return t=le,Le()!==o&&(r=function(){var t;"post"===e.substr(le,4)?(t="post",le+=4):(t=o,0===me&&Ee(S));t===o&&("get"===e.substr(le,3)?(t="get",le+=3):(t=o,0===me&&Ee(j)),t===o&&("put"===e.substr(le,3)?(t="put",le+=3):(t=o,0===me&&Ee(k)),t===o&&("patch"===e.substr(le,5)?(t="patch",le+=5):(t=o,0===me&&Ee(B)),t===o&&("delete"===e.substr(le,6)?(t="delete",le+=6):(t=o,0===me&&Ee(P))))));return t}())!==o&&(n=function(){var t,r,n,a,s;t=le,(r=Le())!==o?(123===e.charCodeAt(le)?(n="{",le++):(n=o,0===me&&Ee(u)),n!==o&&Le()!==o?((a=function(){var t,r,n,a,s,c,i;if(t=le,(r=ze())!==o){for(n=[],a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=ze())!==o?a=s=[s,c,i]:(le=a,a=o)):(le=a,a=o);a!==o;)n.push(a),a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=ze())!==o?a=s=[s,c,i]:(le=a,a=o)):(le=a,a=o);n!==o?(pe=t,r=b(r,n),t=r):(le=t,t=o)}else le=t,t=o;return t}())===o&&(a=null),a!==o&&Le()!==o?(125===e.charCodeAt(le)?(s="}",le++):(s=o,0===me&&Ee(l)),s!==o&&Le()!==o?(pe=t,r={type:"MethodBodyObjectExpression",properties:et(a)},t=r):(le=t,t=o)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o);return t}())!==o&&Le()!==o?(pe=t,t={type:"MethodExpression",name:r,body:n}):(le=t,t=o),t}function ze(){var t,r,n,a;return t=le,Le()!==o?("description"===e.substr(le,11)?(r="description",le+=11):(r=o,0===me&&Ee(A)),r!==o&&Le()!==o?(58===e.charCodeAt(le)?(n=":",le++):(n=o,0===me&&Ee(E)),n!==o&&Le()!==o&&(a=Ue())!==o&&Le()!==o?(pe=t,t={type:"Property",key:{type:"IdentifierExpression",name:r},value:a}):(le=t,t=o)):(le=t,t=o)):(le=t,t=o),t===o&&(t=le,Le()!==o?("requestBody"===e.substr(le,11)?(r="requestBody",le+=11):(r=o,0===me&&Ee(C)),r!==o&&Le()!==o?(58===e.charCodeAt(le)?(n=":",le++):(n=o,0===me&&Ee(E)),n!==o&&Le()!==o&&(a=Re())!==o&&Le()!==o?(pe=t,t=function(e){return{type:"MethodRequestBodyExpression",value:e}}(a)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o),t===o&&(t=le,Le()!==o?("responses"===e.substr(le,9)?(r="responses",le+=9):(r=o,0===me&&Ee(x)),r!==o&&Le()!==o?(58===e.charCodeAt(le)?(n=":",le++):(n=o,0===me&&Ee(E)),n!==o&&Le()!==o&&(a=function(){var t,r,n,a,s;t=le,(r=Le())!==o?(123===e.charCodeAt(le)?(n="{",le++):(n=o,0===me&&Ee(u)),n!==o&&Le()!==o?((a=function(){var t,r,n,a,s,c,i;if(t=le,(r=Ie())!==o){for(n=[],a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=Ie())!==o?a=s=[s,c,i]:(le=a,a=o)):(le=a,a=o);a!==o;)n.push(a),a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=Ie())!==o?a=s=[s,c,i]:(le=a,a=o)):(le=a,a=o);n!==o?(pe=t,r=b(r,n),t=r):(le=t,t=o)}else le=t,t=o;return t}())===o&&(a=null),a!==o&&Le()!==o?(125===e.charCodeAt(le)?(s="}",le++):(s=o,0===me&&Ee(l)),s!==o&&Le()!==o?(pe=t,r={type:"ResponseObjectExpression",properties:et(a)},t=r):(le=t,t=o)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o);return t}())!==o?(pe=t,t=function(e){return{type:"MethodResponseExpression",value:e}}(a)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o))),t}function Ie(){var t,r,n,a,s;if(t=le,Le()!==o){if(r=le,n=[],w.test(e.charAt(le))?(a=e.charAt(le),le++):(a=o,0===me&&Ee(O)),a!==o)for(;a!==o;)n.push(a),w.test(e.charAt(le))?(a=e.charAt(le),le++):(a=o,0===me&&Ee(O));else n=o;(r=n!==o?e.substring(r,le):n)!==o&&(n=Le())!==o?(58===e.charCodeAt(le)?(a=":",le++):(a=o,0===me&&Ee(E)),a!==o&&(s=Re())!==o?(pe=t,t={type:"ResponseObjectMemberExpression",key:{type:"Literal",name:r},value:s}):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;return t}function Re(){var t,r,a,s;return t=le,Le()!==o?(123===e.charCodeAt(le)?(r="{",le++):(r=o,0===me&&Ee(u)),r!==o&&Le()!==o?((a=function(){var t,r,n,a,s,c,i,u;if(t=le,(r=Me())!==o){for(n=[],a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=Le())!==o&&(u=Me())!==o?a=s=[s,c,i,u]:(le=a,a=o)):(le=a,a=o);a!==o;)n.push(a),a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=Le())!==o&&(u=Me())!==o?a=s=[s,c,i,u]:(le=a,a=o)):(le=a,a=o);n!==o&&(a=Le())!==o?(44===e.charCodeAt(le)?(s=",",le++):(s=o,0===me&&Ee(h)),s===o&&(s=null),s!==o?(pe=t,r=Xe(r,n,3),t=r):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;return t}())===o&&(a=null),a!==o&&Le()!==o?(125===e.charCodeAt(le)?(s="}",le++):(s=o,0===me&&Ee(l)),s!==o&&Le()!==o?(pe=t,t=function(e){var t=null!==e&&Array.isArray(e)?e.filter((function(e){return!e.optional})).map((function(e){return e.key.name})):[];return n({type:"ObjectExpression"},t.length?{required:t}:{},{properties:et(e)})}(a)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o),t}function Me(){var t,r,a,s,c;return t=le,(r=De())!==o&&Le()!==o?(63===e.charCodeAt(le)?(a="?",le++):(a=o,0===me&&Ee(N)),a===o&&(a=null),a!==o&&Le()!==o?(58===e.charCodeAt(le)?(s=":",le++):(s=o,0===me&&Ee(E)),s!==o&&Le()!==o?((c=Ne())===o&&(c=function(){var t,r,a;t=le,(r=Re())===o&&(r=Fe())===o&&(r=De());r!==o?("[]"===e.substr(le,2)?(a="[]",le+=2):(a=o,0===me&&Ee(D)),a!==o&&Le()!==o?(pe=t,r=n({},r,{repeater:"array"}),t=r):(le=t,t=o)):(le=t,t=o);return t}())===o&&(c=Re())===o&&(c=We())===o&&(c=Fe())===o&&(c=De())===o&&(c=Ue())===o&&(c=function(){var t,r,n,a;t=le,r=le,n=[],w.test(e.charAt(le))?(a=e.charAt(le),le++):(a=o,0===me&&Ee(O));if(a!==o)for(;a!==o;)n.push(a),w.test(e.charAt(le))?(a=e.charAt(le),le++):(a=o,0===me&&Ee(O));else n=o;r=n!==o?e.substring(r,le):n;r!==o&&(pe=t,r={type:"Number",value:Number(r)});return t=r}()),c!==o?(pe=t,t=r={type:"Property",optional:!!a,key:r,value:c}):(le=t,t=o)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o),t}function Fe(){var t,r,n,a,s,c,i,u,l,p;if(t=le,Le()!==o)if(r=le,(r=(n=De())!==o?e.substring(r,le):n)!==o)if((n=Le())!==o){if(a=[],s=le,(c=Le())!==o?(46===e.charCodeAt(le)?(i=".",le++):(i=o,0===me&&Ee(T)),i!==o&&(u=Le())!==o?(l=le,(l=(p=De())!==o?e.substring(l,le):p)!==o?s=c=[c,i,u,l]:(le=s,s=o)):(le=s,s=o)):(le=s,s=o),s!==o)for(;s!==o;)a.push(s),s=le,(c=Le())!==o?(46===e.charCodeAt(le)?(i=".",le++):(i=o,0===me&&Ee(T)),i!==o&&(u=Le())!==o?(l=le,(l=(p=De())!==o?e.substring(l,le):p)!==o?s=c=[c,i,u,l]:(le=s,s=o)):(le=s,s=o)):(le=s,s=o);else a=o;a!==o&&(s=Le())!==o?(c=le,me++,W.test(e.charAt(le))?(i=e.charAt(le),le++):(i=o,0===me&&Ee(_)),me--,i===o?c=void 0:(le=c,c=o),c!==o?(pe=t,t={type:"PropertyAccessExpression",list:Xe(r,a,3)}):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;else le=t,t=o;else le=t,t=o;return t}function Ne(){var t,r,n,a;return t=le,Le()!==o?(91===e.charCodeAt(le)?(r="[",le++):(r=o,0===me&&Ee(U)),r!==o&&Le()!==o?((n=function(){var t,r,n,a,s,c,i,u;if(t=le,(r=Te())!==o){for(n=[],a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=Le())!==o&&(u=Te())!==o?a=s=[s,c,i,u]:(le=a,a=o)):(le=a,a=o);a!==o;)n.push(a),a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=Le())!==o&&(u=Te())!==o?a=s=[s,c,i,u]:(le=a,a=o)):(le=a,a=o);n!==o&&(a=Le())!==o?(44===e.charCodeAt(le)?(s=",",le++):(s=o,0===me&&Ee(h)),s===o&&(s=null),s!==o?(pe=t,r=f(r,n),t=r):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;return t}())===o&&(n=null),n!==o&&Le()!==o?(93===e.charCodeAt(le)?(a="]",le++):(a=o,0===me&&Ee(H)),a!==o&&Le()!==o?(pe=t,t={type:"ArrayExpression",elements:et(n)}):(le=t,t=o)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o),t}function Te(){var e;return(e=Ne())===o&&(e=Re())===o&&(e=We())===o&&(e=De())===o&&(e=Ue()),e}function We(){var t,r,n,a,s;return t=le,Le()!==o&&(r=De())!==o&&Le()!==o?(40===e.charCodeAt(le)?(n="(",le++):(n=o,0===me&&Ee(I)),n!==o&&Le()!==o?((a=function(){var t,r,n,a,s,c,i,u;if(t=le,(r=Te())!==o){for(n=[],a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=Le())!==o&&(u=Te())!==o?a=s=[s,c,i,u]:(le=a,a=o)):(le=a,a=o);a!==o;)n.push(a),a=le,(s=Le())!==o?(44===e.charCodeAt(le)?(c=",",le++):(c=o,0===me&&Ee(h)),c!==o&&(i=Le())!==o&&(u=Te())!==o?a=s=[s,c,i,u]:(le=a,a=o)):(le=a,a=o);n!==o&&(a=Le())!==o?(44===e.charCodeAt(le)?(s=",",le++):(s=o,0===me&&Ee(h)),s===o&&(s=null),s!==o?(pe=t,r=f(r,n),t=r):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;return t}())===o&&(a=null),a!==o&&Le()!==o?(41===e.charCodeAt(le)?(s=")",le++):(s=o,0===me&&Ee(F)),s!==o&&Le()!==o?(pe=t,t={type:"CallExpression",callee:r,arguments:et(a)}):(le=t,t=o)):(le=t,t=o)):(le=t,t=o)):(le=t,t=o),t}function _e(){var t,r,n,a,s,c,i,u;if(t=le,"/*"===e.substr(le,2)?(r="/*",le+=2):(r=o,0===me&&Ee(J)),r!==o){for(n=le,a=[],s=le,c=le,me++,"*/"===e.substr(le,2)?(i="*/",le+=2):(i=o,0===me&&Ee(Z)),me--,i===o?c=void 0:(le=c,c=o),c!==o&&(i=Ge())!==o?s=c=[c,i]:(le=s,s=o);s!==o;)a.push(s),s=le,c=le,me++,"*/"===e.substr(le,2)?(i="*/",le+=2):(i=o,0===me&&Ee(Z)),me--,i===o?c=void 0:(le=c,c=o),c!==o&&(i=Ge())!==o?s=c=[c,i]:(le=s,s=o);(n=a!==o?e.substring(n,le):a)!==o?("*/"===e.substr(le,2)?(a="*/",le+=2):(a=o,0===me&&Ee(Z)),a!==o?(pe=t,u=n,$e.push({type:"MultilineCommentExpression",value:u.trim(),location:Ae(pe,le)}),t=r=void(tt.prototype.comments=$e)):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;return t}function De(){var t,r,n,a,s,c;if(t=le,r=le,n=le,G.test(e.charAt(le))?(a=e.charAt(le),le++):(a=o,0===me&&Ee(L)),a!==o){for(s=[],Y.test(e.charAt(le))?(c=e.charAt(le),le++):(c=o,0===me&&Ee(V));c!==o;)s.push(c),Y.test(e.charAt(le))?(c=e.charAt(le),le++):(c=o,0===me&&Ee(V));s!==o?n=a=[a,s]:(le=n,n=o)}else le=n,n=o;return(r=n!==o?e.substring(r,le):n)!==o&&(pe=t,r={type:"IdentifierExpression",name:r}),t=r}function Ue(){var t,r;return t=le,(r=function(){var t,r,n,a,s;t=le,34===e.charCodeAt(le)?(r='"',le++):(r=o,0===me&&Ee($));if(r!==o){for(n=le,a=[],s=He();s!==o;)a.push(s),s=He();(n=a!==o?e.substring(n,le):a)!==o?(34===e.charCodeAt(le)?(a='"',le++):(a=o,0===me&&Ee($)),a!==o?(pe=t,t=r=n):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;if(t===o)if(t=le,39===e.charCodeAt(le)?(r="'",le++):(r=o,0===me&&Ee(K)),r!==o){for(n=le,a=[],s=Je();s!==o;)a.push(s),s=Je();(n=a!==o?e.substring(n,le):a)!==o?(39===e.charCodeAt(le)?(a="'",le++):(a=o,0===me&&Ee(K)),a!==o?(pe=t,t=r=n):(le=t,t=o)):(le=t,t=o)}else le=t,t=o;return t}())!==o&&(pe=t,r={type:"Literal",value:r}),t=r}function He(){var t,r,n;return t=le,r=le,me++,34===e.charCodeAt(le)?(n='"',le++):(n=o,0===me&&Ee($)),n===o&&(92===e.charCodeAt(le)?(n="\\",le++):(n=o,0===me&&Ee(Q)),n===o&&(n=Ze())),me--,n===o?r=void 0:(le=r,r=o),r!==o&&(n=Ge())!==o?(pe=t,t=r=X()):(le=t,t=o),t}function Je(){var t,r,n;return t=le,r=le,me++,39===e.charCodeAt(le)?(n="'",le++):(n=o,0===me&&Ee(K)),n===o&&(92===e.charCodeAt(le)?(n="\\",le++):(n=o,0===me&&Ee(Q)),n===o&&(n=Ze())),me--,n===o?r=void 0:(le=r,r=o),r!==o&&(n=Ge())!==o?(pe=t,t=r=X()):(le=t,t=o),t}function Ze(){var t;return ee.test(e.charAt(le))?(t=e.charAt(le),le++):(t=o,0===me&&Ee(te)),t}function Ge(){var t;return e.length>le?(t=e.charAt(le),le++):(t=o,0===me&&Ee(re)),t}function Le(){var t,r;for(me++,t=[],(r=_e())===o&&(9===e.charCodeAt(le)?(r="\t",le++):(r=o,0===me&&Ee(ae)),r===o&&(11===e.charCodeAt(le)?(r="\v",le++):(r=o,0===me&&Ee(oe)),r===o&&(12===e.charCodeAt(le)?(r="\f",le++):(r=o,0===me&&Ee(se)),r===o&&(32===e.charCodeAt(le)?(r=" ",le++):(r=o,0===me&&Ee(p)),r===o&&(10===e.charCodeAt(le)?(r="\n",le++):(r=o,0===me&&Ee(ce)),r===o&&(160===e.charCodeAt(le)?(r="\xa0",le++):(r=o,0===me&&Ee(ie)),r===o&&(65279===e.charCodeAt(le)?(r="\ufeff",le++):(r=o,0===me&&Ee(ue)))))))));r!==o;)t.push(r),(r=_e())===o&&(9===e.charCodeAt(le)?(r="\t",le++):(r=o,0===me&&Ee(ae)),r===o&&(11===e.charCodeAt(le)?(r="\v",le++):(r=o,0===me&&Ee(oe)),r===o&&(12===e.charCodeAt(le)?(r="\f",le++):(r=o,0===me&&Ee(se)),r===o&&(32===e.charCodeAt(le)?(r=" ",le++):(r=o,0===me&&Ee(p)),r===o&&(10===e.charCodeAt(le)?(r="\n",le++):(r=o,0===me&&Ee(ce)),r===o&&(160===e.charCodeAt(le)?(r="\xa0",le++):(r=o,0===me&&Ee(ie)),r===o&&(65279===e.charCodeAt(le)?(r="\ufeff",le++):(r=o,0===me&&Ee(ue)))))))));return me--,t===o&&(r=o,0===me&&Ee(ne)),t}var Ye={},Ve={},$e=[],Ke={},Qe={};function Xe(e,t,r){return[e].concat(function(e,t){return e.map((function(e){return e[t]}))}(t,r))}function et(e){return null!==e?e:[]}function tt(e){this.type="Program",this.body=e}if((r=c())!==o&&le===e.length)return r;throw r!==o&&le<e.length&&Ee({type:"end"}),Ce(fe,he<e.length?e.charAt(he):null,he<e.length?Ae(he,he+1):Ae(he,he))}}},87:function(e,t,r){var n=r(67),a=r(8),o=r(69),s=r(205),c=r(50),i={};function u(e){return e.body.map((function(e){return function(e){var t,r;if(!(null===(t=e.extend)||void 0===t?void 0:t.length))return a({},e.name,p(e.body));return a({},e.name,{allOf:[].concat(n((null===(r=e.extend)||void 0===r?void 0:r.map((function(e){return{$ref:"#/components/schemas/".concat(e)}})))||[]),[p(e.body)])})}(e)})).reduce((function(e,t){var r=Object.keys(t)[0],n=Object.values(t)[0];return e[r]=n,e}),{})}function l(e){if("Property"!==e.type)throw new Error("propertyExpressionProcessor: cannot process other type ".concat(e.type));return"array"===e.value.repeater&&"ObjectExpression"!==e.value.type?a({},e.key.name,{type:"array",items:{type:e.value.name}}):"array"===e.value.repeater&&"ObjectExpression"===e.value.type?a({},e.key.name,{type:"array",items:p(e.value)}):"ObjectExpression"===e.value.type?a({},e.key.name,p(e.value)):a({},e.key.name,{type:e.value.name})}function p(e){switch(e.type){case"ObjectExpression":return function(e){var t;if("ObjectExpression"!==e.type)throw new Error("objectExpressionProcessor: cannot process other type ".concat(e.type));var r=e.properties.map((function(e){return l(e)})).reduce((function(e,t){var r=Object.keys(t)[0],n=Object.values(t)[0];return e=o({},e,a({},r,n))}),{});return o({type:"object"},(null===(t=e.required)||void 0===t?void 0:t.length)?{required:e.required}:{},{properties:r})}(e);case"IdentifierExpression":return function(e){if("IdentifierExpression"!==e.type)throw new Error("IdentifierExpressionProcessor: cannot process other type ".concat(e.type));return{type:e.value.name}}(e);case"Property":return l(e)}}e.exports={parser:function(e){var t,r=c.parse(e),n=s(r.body);try{for(n.s();!(t=n.n()).done;){var a=t.value;switch(a.type){case"SchemasBlockExpression":i.schemas=u(a);break;case"RequestBodiesBlockExpression":i.requestBodies=u(a);break;case"ParametersBlockExpression":i.parameters=u(a)}}}catch(l){n.e(l)}finally{n.f()}return o({},i)}}},93:function(e,t,r){e.exports=r(222)},98:function(e,t,r){}},[[93,1,2]]]);
//# sourceMappingURL=main.ca35b41e.chunk.js.map