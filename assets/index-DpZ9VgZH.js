(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const j of f)if(j.type==="childList")for(const k of j.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&u(k)}).observe(document,{childList:!0,subtree:!0});function l(f){const j={};return f.integrity&&(j.integrity=f.integrity),f.referrerPolicy&&(j.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?j.credentials="include":f.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function u(f){if(f.ep)return;f.ep=!0;const j=l(f);fetch(f.href,j)}})();function lm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Aa={exports:{}},so={},Ma={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu;function cm(){if(tu)return ne;tu=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),k=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),D=Symbol.iterator;function Z(x){return x===null||typeof x!="object"?null:(x=D&&x[D]||x["@@iterator"],typeof x=="function"?x:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,W={};function G(x,N,J){this.props=x,this.context=N,this.refs=W,this.updater=J||ae}G.prototype.isReactComponent={},G.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function me(){}me.prototype=G.prototype;function ce(x,N,J){this.props=x,this.context=N,this.refs=W,this.updater=J||ae}var te=ce.prototype=new me;te.constructor=ce,X(te,G.prototype),te.isPureReactComponent=!0;var B=Array.isArray,q=Object.prototype.hasOwnProperty,U={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function M(x,N,J){var ee,ie={},oe=null,de=null;if(N!=null)for(ee in N.ref!==void 0&&(de=N.ref),N.key!==void 0&&(oe=""+N.key),N)q.call(N,ee)&&!I.hasOwnProperty(ee)&&(ie[ee]=N[ee]);var le=arguments.length-2;if(le===1)ie.children=J;else if(1<le){for(var fe=Array(le),Ee=0;Ee<le;Ee++)fe[Ee]=arguments[Ee+2];ie.children=fe}if(x&&x.defaultProps)for(ee in le=x.defaultProps,le)ie[ee]===void 0&&(ie[ee]=le[ee]);return{$$typeof:s,type:x,key:oe,ref:de,props:ie,_owner:U.current}}function ye(x,N){return{$$typeof:s,type:x.type,key:N,ref:x.ref,props:x.props,_owner:x._owner}}function _e(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function se(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(J){return N[J]})}var Ie=/\/+/g;function Se(x,N){return typeof x=="object"&&x!==null&&x.key!=null?se(""+x.key):N.toString(36)}function Ye(x,N,J,ee,ie){var oe=typeof x;(oe==="undefined"||oe==="boolean")&&(x=null);var de=!1;if(x===null)de=!0;else switch(oe){case"string":case"number":de=!0;break;case"object":switch(x.$$typeof){case s:case c:de=!0}}if(de)return de=x,ie=ie(de),x=ee===""?"."+Se(de,0):ee,B(ie)?(J="",x!=null&&(J=x.replace(Ie,"$&/")+"/"),Ye(ie,N,J,"",function(Ee){return Ee})):ie!=null&&(_e(ie)&&(ie=ye(ie,J+(!ie.key||de&&de.key===ie.key?"":(""+ie.key).replace(Ie,"$&/")+"/")+x)),N.push(ie)),1;if(de=0,ee=ee===""?".":ee+":",B(x))for(var le=0;le<x.length;le++){oe=x[le];var fe=ee+Se(oe,le);de+=Ye(oe,N,J,fe,ie)}else if(fe=Z(x),typeof fe=="function")for(x=fe.call(x),le=0;!(oe=x.next()).done;)oe=oe.value,fe=ee+Se(oe,le++),de+=Ye(oe,N,J,fe,ie);else if(oe==="object")throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return de}function er(x,N,J){if(x==null)return x;var ee=[],ie=0;return Ye(x,ee,"","",function(oe){return N.call(J,oe,ie++)}),ee}function Ke(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(J){(x._status===0||x._status===-1)&&(x._status=1,x._result=J)},function(J){(x._status===0||x._status===-1)&&(x._status=2,x._result=J)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var je={current:null},z={transition:null},F={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:z,ReactCurrentOwner:U};function _(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:er,forEach:function(x,N,J){er(x,function(){N.apply(this,arguments)},J)},count:function(x){var N=0;return er(x,function(){N++}),N},toArray:function(x){return er(x,function(N){return N})||[]},only:function(x){if(!_e(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ne.Component=G,ne.Fragment=l,ne.Profiler=f,ne.PureComponent=ce,ne.StrictMode=u,ne.Suspense=E,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,ne.act=_,ne.cloneElement=function(x,N,J){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ee=X({},x.props),ie=x.key,oe=x.ref,de=x._owner;if(N!=null){if(N.ref!==void 0&&(oe=N.ref,de=U.current),N.key!==void 0&&(ie=""+N.key),x.type&&x.type.defaultProps)var le=x.type.defaultProps;for(fe in N)q.call(N,fe)&&!I.hasOwnProperty(fe)&&(ee[fe]=N[fe]===void 0&&le!==void 0?le[fe]:N[fe])}var fe=arguments.length-2;if(fe===1)ee.children=J;else if(1<fe){le=Array(fe);for(var Ee=0;Ee<fe;Ee++)le[Ee]=arguments[Ee+2];ee.children=le}return{$$typeof:s,type:x.type,key:ie,ref:oe,props:ee,_owner:de}},ne.createContext=function(x){return x={$$typeof:k,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:j,_context:x},x.Consumer=x},ne.createElement=M,ne.createFactory=function(x){var N=M.bind(null,x);return N.type=x,N},ne.createRef=function(){return{current:null}},ne.forwardRef=function(x){return{$$typeof:T,render:x}},ne.isValidElement=_e,ne.lazy=function(x){return{$$typeof:Q,_payload:{_status:-1,_result:x},_init:Ke}},ne.memo=function(x,N){return{$$typeof:K,type:x,compare:N===void 0?null:N}},ne.startTransition=function(x){var N=z.transition;z.transition={};try{x()}finally{z.transition=N}},ne.unstable_act=_,ne.useCallback=function(x,N){return je.current.useCallback(x,N)},ne.useContext=function(x){return je.current.useContext(x)},ne.useDebugValue=function(){},ne.useDeferredValue=function(x){return je.current.useDeferredValue(x)},ne.useEffect=function(x,N){return je.current.useEffect(x,N)},ne.useId=function(){return je.current.useId()},ne.useImperativeHandle=function(x,N,J){return je.current.useImperativeHandle(x,N,J)},ne.useInsertionEffect=function(x,N){return je.current.useInsertionEffect(x,N)},ne.useLayoutEffect=function(x,N){return je.current.useLayoutEffect(x,N)},ne.useMemo=function(x,N){return je.current.useMemo(x,N)},ne.useReducer=function(x,N,J){return je.current.useReducer(x,N,J)},ne.useRef=function(x){return je.current.useRef(x)},ne.useState=function(x){return je.current.useState(x)},ne.useSyncExternalStore=function(x,N,J){return je.current.useSyncExternalStore(x,N,J)},ne.useTransition=function(){return je.current.useTransition()},ne.version="18.3.1",ne}var nu;function el(){return nu||(nu=1,Ma.exports=cm()),Ma.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou;function dm(){if(ou)return so;ou=1;var s=el(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,f=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function k(T,E,K){var Q,D={},Z=null,ae=null;K!==void 0&&(Z=""+K),E.key!==void 0&&(Z=""+E.key),E.ref!==void 0&&(ae=E.ref);for(Q in E)u.call(E,Q)&&!j.hasOwnProperty(Q)&&(D[Q]=E[Q]);if(T&&T.defaultProps)for(Q in E=T.defaultProps,E)D[Q]===void 0&&(D[Q]=E[Q]);return{$$typeof:c,type:T,key:Z,ref:ae,props:D,_owner:f.current}}return so.Fragment=l,so.jsx=k,so.jsxs=k,so}var su;function um(){return su||(su=1,Aa.exports=dm()),Aa.exports}var t=um(),ws={},Oa={exports:{}},lr={},Fa={exports:{}},Da={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu;function pm(){return iu||(iu=1,(function(s){function c(z,F){var _=z.length;z.push(F);e:for(;0<_;){var x=_-1>>>1,N=z[x];if(0<f(N,F))z[x]=F,z[_]=N,_=x;else break e}}function l(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var F=z[0],_=z.pop();if(_!==F){z[0]=_;e:for(var x=0,N=z.length,J=N>>>1;x<J;){var ee=2*(x+1)-1,ie=z[ee],oe=ee+1,de=z[oe];if(0>f(ie,_))oe<N&&0>f(de,ie)?(z[x]=de,z[oe]=_,x=oe):(z[x]=ie,z[ee]=_,x=ee);else if(oe<N&&0>f(de,_))z[x]=de,z[oe]=_,x=oe;else break e}}return F}function f(z,F){var _=z.sortIndex-F.sortIndex;return _!==0?_:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;s.unstable_now=function(){return j.now()}}else{var k=Date,T=k.now();s.unstable_now=function(){return k.now()-T}}var E=[],K=[],Q=1,D=null,Z=3,ae=!1,X=!1,W=!1,G=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(z){for(var F=l(K);F!==null;){if(F.callback===null)u(K);else if(F.startTime<=z)u(K),F.sortIndex=F.expirationTime,c(E,F);else break;F=l(K)}}function B(z){if(W=!1,te(z),!X)if(l(E)!==null)X=!0,Ke(q);else{var F=l(K);F!==null&&je(B,F.startTime-z)}}function q(z,F){X=!1,W&&(W=!1,me(M),M=-1),ae=!0;var _=Z;try{for(te(F),D=l(E);D!==null&&(!(D.expirationTime>F)||z&&!se());){var x=D.callback;if(typeof x=="function"){D.callback=null,Z=D.priorityLevel;var N=x(D.expirationTime<=F);F=s.unstable_now(),typeof N=="function"?D.callback=N:D===l(E)&&u(E),te(F)}else u(E);D=l(E)}if(D!==null)var J=!0;else{var ee=l(K);ee!==null&&je(B,ee.startTime-F),J=!1}return J}finally{D=null,Z=_,ae=!1}}var U=!1,I=null,M=-1,ye=5,_e=-1;function se(){return!(s.unstable_now()-_e<ye)}function Ie(){if(I!==null){var z=s.unstable_now();_e=z;var F=!0;try{F=I(!0,z)}finally{F?Se():(U=!1,I=null)}}else U=!1}var Se;if(typeof ce=="function")Se=function(){ce(Ie)};else if(typeof MessageChannel!="undefined"){var Ye=new MessageChannel,er=Ye.port2;Ye.port1.onmessage=Ie,Se=function(){er.postMessage(null)}}else Se=function(){G(Ie,0)};function Ke(z){I=z,U||(U=!0,Se())}function je(z,F){M=G(function(){z(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){X||ae||(X=!0,Ke(q))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return Z},s.unstable_getFirstCallbackNode=function(){return l(E)},s.unstable_next=function(z){switch(Z){case 1:case 2:case 3:var F=3;break;default:F=Z}var _=Z;Z=F;try{return z()}finally{Z=_}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var _=Z;Z=z;try{return F()}finally{Z=_}},s.unstable_scheduleCallback=function(z,F,_){var x=s.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?x+_:x):_=x,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=_+N,z={id:Q++,callback:F,priorityLevel:z,startTime:_,expirationTime:N,sortIndex:-1},_>x?(z.sortIndex=_,c(K,z),l(E)===null&&z===l(K)&&(W?(me(M),M=-1):W=!0,je(B,_-x))):(z.sortIndex=N,c(E,z),X||ae||(X=!0,Ke(q))),z},s.unstable_shouldYield=se,s.unstable_wrapCallback=function(z){var F=Z;return function(){var _=Z;Z=F;try{return z.apply(this,arguments)}finally{Z=_}}}})(Da)),Da}var au;function hm(){return au||(au=1,Fa.exports=pm()),Fa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu;function mm(){if(lu)return lr;lu=1;var s=el(),c=hm();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,f={};function j(e,r){k(e,r),k(e+"Capture",r)}function k(e,r){for(f[e]=r,e=0;e<r.length;e++)u.add(r[e])}var T=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),E=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},D={};function Z(e){return E.call(D,e)?!0:E.call(Q,e)?!1:K.test(e)?D[e]=!0:(Q[e]=!0,!1)}function ae(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,r,n,o){if(r===null||typeof r=="undefined"||ae(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function W(e,r,n,o,i,a,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=d}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){G[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];G[r]=new W(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){G[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){G[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){G[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){G[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){G[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){G[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){G[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(me,ce);G[r]=new W(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(me,ce);G[r]=new W(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(me,ce);G[r]=new W(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){G[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),G.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){G[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,r,n,o){var i=G.hasOwnProperty(r)?G[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(X(r,n,i,o)&&(n=null),o||i===null?Z(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var B=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),U=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),se=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),er=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),z=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,x;function N(e){if(x===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+e}var J=!1;function ee(e,r){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var o=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){o=y}e.call(r.prototype)}else{try{throw Error()}catch(y){o=y}e()}}catch(y){if(y&&o&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),a=o.stack.split(`
`),d=i.length-1,p=a.length-1;1<=d&&0<=p&&i[d]!==a[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==a[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==a[p]){var h=`
`+i[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=p);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function ie(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case U:return"Portal";case ye:return"Profiler";case M:return"StrictMode";case Se:return"Suspense";case Ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case _e:return(e._context.displayName||"Context")+".Provider";case Ie:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case er:return r=e.displayName||null,r!==null?r:oe(e.type)||"Memo";case Ke:r=e._payload,e=e._init;try{return oe(e(r))}catch{}}return null}function de(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(r);case 8:return r===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ee(e){var r=fe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(d){o=""+d,a.call(this,d)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Xr(e){e._valueTracker||(e._valueTracker=Ee(e))}function yt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=fe(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hs(e,r){var n=r.checked;return _({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function cl(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=le(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function dl(e,r){r=r.checked,r!=null&&te(e,"checked",r,!1)}function $s(e,r){dl(e,r);var n=le(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Vs(e,r.type,n):r.hasOwnProperty("defaultValue")&&Vs(e,r.type,le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function ul(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vs(e,r,n){(r!=="number"||kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function Ft(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Qs(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return _({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pl(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(l(92));if(jn(n)){if(1<n.length)throw Error(l(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:le(n)}}function hl(e,r){var n=le(r.value),o=le(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function ml(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function fl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?fl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fo,xl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Nn(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pp=["Webkit","ms","Moz","O"];Object.keys(bn).forEach(function(e){pp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),bn[r]=bn[e]})});function gl(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||bn.hasOwnProperty(e)&&bn[e]?(""+r).trim():r+"px"}function vl(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=gl(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var hp=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ys(e,r){if(r){if(hp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function Ks(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xs=null;function qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Dt=null,Wt=null;function yl(e){if(e=$n(e)){if(typeof Zs!="function")throw Error(l(280));var r=e.stateNode;r&&(r=Oo(r),Zs(e.stateNode,e.type,r))}}function jl(e){Dt?Wt?Wt.push(e):Wt=[e]:Dt=e}function Nl(){if(Dt){var e=Dt,r=Wt;if(Wt=Dt=null,yl(e),r)for(e=0;e<r.length;e++)yl(r[e])}}function bl(e,r){return e(r)}function wl(){}var Js=!1;function kl(e,r,n){if(Js)return e(r,n);Js=!0;try{return bl(e,r,n)}finally{Js=!1,(Dt!==null||Wt!==null)&&(wl(),Nl())}}function wn(e,r){var n=e.stateNode;if(n===null)return null;var o=Oo(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,r,typeof n));return n}var ei=!1;if(T)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){ei=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{ei=!1}function mp(e,r,n,o,i,a,d,p,h){var y=Array.prototype.slice.call(arguments,3);try{r.apply(n,y)}catch(w){this.onError(w)}}var Sn=!1,xo=null,go=!1,ri=null,fp={onError:function(e){Sn=!0,xo=e}};function xp(e,r,n,o,i,a,d,p,h){Sn=!1,xo=null,mp.apply(fp,arguments)}function gp(e,r,n,o,i,a,d,p,h){if(xp.apply(this,arguments),Sn){if(Sn){var y=xo;Sn=!1,xo=null}else throw Error(l(198));go||(go=!0,ri=y)}}function jt(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function Sl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Cl(e){if(jt(e)!==e)throw Error(l(188))}function vp(e){var r=e.alternate;if(!r){if(r=jt(e),r===null)throw Error(l(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Cl(i),e;if(a===o)return Cl(i),r;a=a.sibling}throw Error(l(188))}if(n.return!==o.return)n=i,o=a;else{for(var d=!1,p=i.child;p;){if(p===n){d=!0,n=i,o=a;break}if(p===o){d=!0,o=i,n=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===n){d=!0,n=a,o=i;break}if(p===o){d=!0,o=a,n=i;break}p=p.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==o)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:r}function El(e){return e=vp(e),e!==null?Tl(e):null}function Tl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Tl(e);if(r!==null)return r;e=e.sibling}return null}var zl=c.unstable_scheduleCallback,Il=c.unstable_cancelCallback,yp=c.unstable_shouldYield,jp=c.unstable_requestPaint,Le=c.unstable_now,Np=c.unstable_getCurrentPriorityLevel,ti=c.unstable_ImmediatePriority,Bl=c.unstable_UserBlockingPriority,vo=c.unstable_NormalPriority,bp=c.unstable_LowPriority,_l=c.unstable_IdlePriority,yo=null,Pr=null;function wp(e){if(Pr&&typeof Pr.onCommitFiberRoot=="function")try{Pr.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Sr=Math.clz32?Math.clz32:Cp,kp=Math.log,Sp=Math.LN2;function Cp(e){return e>>>=0,e===0?32:31-(kp(e)/Sp|0)|0}var jo=64,No=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bo(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~i;p!==0?o=Cn(p):(a&=d,a!==0&&(o=Cn(a)))}else d=n&~i,d!==0?o=Cn(d):a!==0&&(o=Cn(a));if(o===0)return 0;if(r!==0&&r!==o&&(r&i)===0&&(i=o&-o,a=r&-r,i>=a||i===16&&(a&4194240)!==0))return r;if((o&4)!==0&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-Sr(r),i=1<<n,o|=e[n],r&=~i;return o}function Ep(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tp(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-Sr(a),p=1<<d,h=i[d];h===-1?((p&n)===0||(p&o)!==0)&&(i[d]=Ep(p,r)):h<=r&&(e.expiredLanes|=p),a&=~p}}function ni(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ll(){var e=jo;return jo<<=1,(jo&4194240)===0&&(jo=64),e}function oi(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function En(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Sr(r),e[r]=n}function zp(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Sr(n),a=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~a}}function si(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-Sr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var xe=0;function Pl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rl,ii,Al,Ml,Ol,ai=!1,wo=[],qr=null,Zr=null,Jr=null,Tn=new Map,zn=new Map,et=[],Ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fl(e,r){switch(e){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Tn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(r.pointerId)}}function In(e,r,n,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},r!==null&&(r=$n(r),r!==null&&ii(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Bp(e,r,n,o,i){switch(r){case"focusin":return qr=In(qr,e,r,n,o,i),!0;case"dragenter":return Zr=In(Zr,e,r,n,o,i),!0;case"mouseover":return Jr=In(Jr,e,r,n,o,i),!0;case"pointerover":var a=i.pointerId;return Tn.set(a,In(Tn.get(a)||null,e,r,n,o,i)),!0;case"gotpointercapture":return a=i.pointerId,zn.set(a,In(zn.get(a)||null,e,r,n,o,i)),!0}return!1}function Dl(e){var r=Nt(e.target);if(r!==null){var n=jt(r);if(n!==null){if(r=n.tag,r===13){if(r=Sl(n),r!==null){e.blockedOn=r,Ol(e.priority,function(){Al(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=ci(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Xs=o,n.target.dispatchEvent(o),Xs=null}else return r=$n(n),r!==null&&ii(r),e.blockedOn=n,!1;r.shift()}return!0}function Wl(e,r,n){ko(e)&&n.delete(r)}function _p(){ai=!1,qr!==null&&ko(qr)&&(qr=null),Zr!==null&&ko(Zr)&&(Zr=null),Jr!==null&&ko(Jr)&&(Jr=null),Tn.forEach(Wl),zn.forEach(Wl)}function Bn(e,r){e.blockedOn===r&&(e.blockedOn=null,ai||(ai=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,_p)))}function _n(e){function r(i){return Bn(i,e)}if(0<wo.length){Bn(wo[0],e);for(var n=1;n<wo.length;n++){var o=wo[n];o.blockedOn===e&&(o.blockedOn=null)}}for(qr!==null&&Bn(qr,e),Zr!==null&&Bn(Zr,e),Jr!==null&&Bn(Jr,e),Tn.forEach(r),zn.forEach(r),n=0;n<et.length;n++)o=et[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Dl(n),n.blockedOn===null&&et.shift()}var Ut=B.ReactCurrentBatchConfig,So=!0;function Lp(e,r,n,o){var i=xe,a=Ut.transition;Ut.transition=null;try{xe=1,li(e,r,n,o)}finally{xe=i,Ut.transition=a}}function Pp(e,r,n,o){var i=xe,a=Ut.transition;Ut.transition=null;try{xe=4,li(e,r,n,o)}finally{xe=i,Ut.transition=a}}function li(e,r,n,o){if(So){var i=ci(e,r,n,o);if(i===null)Ci(e,r,o,Co,n),Fl(e,o);else if(Bp(i,e,r,n,o))o.stopPropagation();else if(Fl(e,o),r&4&&-1<Ip.indexOf(e)){for(;i!==null;){var a=$n(i);if(a!==null&&Rl(a),a=ci(e,r,n,o),a===null&&Ci(e,r,o,Co,n),a===i)break;i=a}i!==null&&o.stopPropagation()}else Ci(e,r,o,null,n)}}var Co=null;function ci(e,r,n,o){if(Co=null,e=qs(o),e=Nt(e),e!==null)if(r=jt(e),r===null)e=null;else if(n=r.tag,n===13){if(e=Sl(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Co=e,null}function Ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Np()){case ti:return 1;case Bl:return 4;case vo:case bp:return 16;case _l:return 536870912;default:return 16}default:return 16}}var rt=null,di=null,Eo=null;function Hl(){if(Eo)return Eo;var e,r=di,n=r.length,o,i="value"in rt?rt.value:rt.textContent,a=i.length;for(e=0;e<n&&r[e]===i[e];e++);var d=n-e;for(o=1;o<=d&&r[n-o]===i[a-o];o++);return Eo=i.slice(e,1<o?1-o:void 0)}function To(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function $l(){return!1}function dr(e){function r(n,o,i,a,d){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?zo:$l,this.isPropagationStopped=$l,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),r}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=dr(Ht),Ln=_({},Ht,{view:0,detail:0}),Rp=dr(Ln),pi,hi,Pn,Io=_({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(pi=e.screenX-Pn.screenX,hi=e.screenY-Pn.screenY):hi=pi=0,Pn=e),pi)},movementY:function(e){return"movementY"in e?e.movementY:hi}}),Vl=dr(Io),Ap=_({},Io,{dataTransfer:0}),Mp=dr(Ap),Op=_({},Ln,{relatedTarget:0}),mi=dr(Op),Fp=_({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),Dp=dr(Fp),Wp=_({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Up=dr(Wp),Hp=_({},Ht,{data:0}),Ql=dr(Hp),$p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Qp[e])?!!r[e]:!1}function fi(){return Gp}var Yp=_({},Ln,{key:function(e){if(e.key){var r=$p[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=dr(Yp),Xp=_({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gl=dr(Xp),qp=_({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),Zp=dr(qp),Jp=_({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),eh=dr(Jp),rh=_({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),th=dr(rh),nh=[9,13,27,32],xi=T&&"CompositionEvent"in window,Rn=null;T&&"documentMode"in document&&(Rn=document.documentMode);var oh=T&&"TextEvent"in window&&!Rn,Yl=T&&(!xi||Rn&&8<Rn&&11>=Rn),Kl=" ",Xl=!1;function ql(e,r){switch(e){case"keyup":return nh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function sh(e,r){switch(e){case"compositionend":return Zl(r);case"keypress":return r.which!==32?null:(Xl=!0,Kl);case"textInput":return e=r.data,e===Kl&&Xl?null:e;default:return null}}function ih(e,r){if($t)return e==="compositionend"||!xi&&ql(e,r)?(e=Hl(),Eo=di=rt=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Yl&&r.locale!=="ko"?null:r.data;default:return null}}var ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!ah[e.type]:r==="textarea"}function ec(e,r,n,o){jl(o),r=Ro(r,"onChange"),0<r.length&&(n=new ui("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var An=null,Mn=null;function lh(e){vc(e,0)}function Bo(e){var r=Kt(e);if(yt(r))return e}function ch(e,r){if(e==="change")return r}var rc=!1;if(T){var gi;if(T){var vi="oninput"in document;if(!vi){var tc=document.createElement("div");tc.setAttribute("oninput","return;"),vi=typeof tc.oninput=="function"}gi=vi}else gi=!1;rc=gi&&(!document.documentMode||9<document.documentMode)}function nc(){An&&(An.detachEvent("onpropertychange",oc),Mn=An=null)}function oc(e){if(e.propertyName==="value"&&Bo(Mn)){var r=[];ec(r,Mn,e,qs(e)),kl(lh,r)}}function dh(e,r,n){e==="focusin"?(nc(),An=r,Mn=n,An.attachEvent("onpropertychange",oc)):e==="focusout"&&nc()}function uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bo(Mn)}function ph(e,r){if(e==="click")return Bo(r)}function hh(e,r){if(e==="input"||e==="change")return Bo(r)}function mh(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Cr=typeof Object.is=="function"?Object.is:mh;function On(e,r){if(Cr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!E.call(r,i)||!Cr(e[i],r[i]))return!1}return!0}function sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ic(e,r){var n=sc(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sc(n)}}function ac(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ac(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function lc(){for(var e=window,r=kr();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=kr(e.document)}return r}function yi(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function fh(e){var r=lc(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&ac(n.ownerDocument.documentElement,n)){if(o!==null&&yi(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=ic(n,a);var d=ic(n,o);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xh=T&&"documentMode"in document&&11>=document.documentMode,Vt=null,ji=null,Fn=null,Ni=!1;function cc(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ni||Vt==null||Vt!==kr(o)||(o=Vt,"selectionStart"in o&&yi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Fn&&On(Fn,o)||(Fn=o,o=Ro(ji,"onSelect"),0<o.length&&(r=new ui("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=Vt)))}function _o(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Qt={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},bi={},dc={};T&&(dc=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function Lo(e){if(bi[e])return bi[e];if(!Qt[e])return e;var r=Qt[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in dc)return bi[e]=r[n];return e}var uc=Lo("animationend"),pc=Lo("animationiteration"),hc=Lo("animationstart"),mc=Lo("transitionend"),fc=new Map,xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tt(e,r){fc.set(e,r),j(r,[e])}for(var wi=0;wi<xc.length;wi++){var ki=xc[wi],gh=ki.toLowerCase(),vh=ki[0].toUpperCase()+ki.slice(1);tt(gh,"on"+vh)}tt(uc,"onAnimationEnd"),tt(pc,"onAnimationIteration"),tt(hc,"onAnimationStart"),tt("dblclick","onDoubleClick"),tt("focusin","onFocus"),tt("focusout","onBlur"),tt(mc,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function gc(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,gp(o,r,void 0,e),e.currentTarget=null}function vc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var a=void 0;if(r)for(var d=o.length-1;0<=d;d--){var p=o[d],h=p.instance,y=p.currentTarget;if(p=p.listener,h!==a&&i.isPropagationStopped())break e;gc(i,p,y),a=h}else for(d=0;d<o.length;d++){if(p=o[d],h=p.instance,y=p.currentTarget,p=p.listener,h!==a&&i.isPropagationStopped())break e;gc(i,p,y),a=h}}}if(go)throw e=ri,go=!1,ri=null,e}function be(e,r){var n=r[_i];n===void 0&&(n=r[_i]=new Set);var o=e+"__bubble";n.has(o)||(yc(r,e,2,!1),n.add(o))}function Si(e,r,n){var o=0;r&&(o|=4),yc(n,e,o,r)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Wn(e){if(!e[Po]){e[Po]=!0,u.forEach(function(n){n!=="selectionchange"&&(yh.has(n)||Si(n,!1,e),Si(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Po]||(r[Po]=!0,Si("selectionchange",!1,r))}}function yc(e,r,n,o){switch(Ul(r)){case 1:var i=Lp;break;case 4:i=Pp;break;default:i=li}n=i.bind(null,r,n,e),i=void 0,!ei||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function Ci(e,r,n,o,i){var a=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;d=d.return}for(;p!==null;){if(d=Nt(p),d===null)return;if(h=d.tag,h===5||h===6){o=a=d;continue e}p=p.parentNode}}o=o.return}kl(function(){var y=a,w=qs(n),S=[];e:{var b=fc.get(e);if(b!==void 0){var L=ui,R=e;switch(e){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":L=Kp;break;case"focusin":R="focus",L=mi;break;case"focusout":R="blur",L=mi;break;case"beforeblur":case"afterblur":L=mi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Zp;break;case uc:case pc:case hc:L=Dp;break;case mc:L=eh;break;case"scroll":L=Rp;break;case"wheel":L=th;break;case"copy":case"cut":case"paste":L=Up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Gl}var A=(r&4)!==0,Pe=!A&&e==="scroll",g=A?b!==null?b+"Capture":null:b;A=[];for(var m=y,v;m!==null;){v=m;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=wn(m,g),C!=null&&A.push(Un(m,C,v)))),Pe)break;m=m.return}0<A.length&&(b=new L(b,R,null,n,w),S.push({event:b,listeners:A}))}}if((r&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",b&&n!==Xs&&(R=n.relatedTarget||n.fromElement)&&(Nt(R)||R[Fr]))break e;if((L||b)&&(b=w.window===w?w:(b=w.ownerDocument)?b.defaultView||b.parentWindow:window,L?(R=n.relatedTarget||n.toElement,L=y,R=R?Nt(R):null,R!==null&&(Pe=jt(R),R!==Pe||R.tag!==5&&R.tag!==6)&&(R=null)):(L=null,R=y),L!==R)){if(A=Vl,C="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(A=Gl,C="onPointerLeave",g="onPointerEnter",m="pointer"),Pe=L==null?b:Kt(L),v=R==null?b:Kt(R),b=new A(C,m+"leave",L,n,w),b.target=Pe,b.relatedTarget=v,C=null,Nt(w)===y&&(A=new A(g,m+"enter",R,n,w),A.target=v,A.relatedTarget=Pe,C=A),Pe=C,L&&R)r:{for(A=L,g=R,m=0,v=A;v;v=Gt(v))m++;for(v=0,C=g;C;C=Gt(C))v++;for(;0<m-v;)A=Gt(A),m--;for(;0<v-m;)g=Gt(g),v--;for(;m--;){if(A===g||g!==null&&A===g.alternate)break r;A=Gt(A),g=Gt(g)}A=null}else A=null;L!==null&&jc(S,b,L,A,!1),R!==null&&Pe!==null&&jc(S,Pe,R,A,!0)}}e:{if(b=y?Kt(y):window,L=b.nodeName&&b.nodeName.toLowerCase(),L==="select"||L==="input"&&b.type==="file")var O=ch;else if(Jl(b))if(rc)O=hh;else{O=uh;var H=dh}else(L=b.nodeName)&&L.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(O=ph);if(O&&(O=O(e,y))){ec(S,O,n,w);break e}H&&H(e,b,y),e==="focusout"&&(H=b._wrapperState)&&H.controlled&&b.type==="number"&&Vs(b,"number",b.value)}switch(H=y?Kt(y):window,e){case"focusin":(Jl(H)||H.contentEditable==="true")&&(Vt=H,ji=y,Fn=null);break;case"focusout":Fn=ji=Vt=null;break;case"mousedown":Ni=!0;break;case"contextmenu":case"mouseup":case"dragend":Ni=!1,cc(S,n,w);break;case"selectionchange":if(xh)break;case"keydown":case"keyup":cc(S,n,w)}var $;if(xi)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else $t?ql(e,n)&&(Y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Y="onCompositionStart");Y&&(Yl&&n.locale!=="ko"&&($t||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&$t&&($=Hl()):(rt=w,di="value"in rt?rt.value:rt.textContent,$t=!0)),H=Ro(y,Y),0<H.length&&(Y=new Ql(Y,e,null,n,w),S.push({event:Y,listeners:H}),$?Y.data=$:($=Zl(n),$!==null&&(Y.data=$)))),($=oh?sh(e,n):ih(e,n))&&(y=Ro(y,"onBeforeInput"),0<y.length&&(w=new Ql("onBeforeInput","beforeinput",null,n,w),S.push({event:w,listeners:y}),w.data=$))}vc(S,r)})}function Un(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Ro(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=wn(e,n),a!=null&&o.unshift(Un(e,a,i)),a=wn(e,r),a!=null&&o.push(Un(e,a,i))),e=e.return}return o}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jc(e,r,n,o,i){for(var a=r._reactName,d=[];n!==null&&n!==o;){var p=n,h=p.alternate,y=p.stateNode;if(h!==null&&h===o)break;p.tag===5&&y!==null&&(p=y,i?(h=wn(n,a),h!=null&&d.unshift(Un(n,h,p))):i||(h=wn(n,a),h!=null&&d.push(Un(n,h,p)))),n=n.return}d.length!==0&&e.push({event:r,listeners:d})}var jh=/\r\n?/g,Nh=/\u0000|\uFFFD/g;function Nc(e){return(typeof e=="string"?e:""+e).replace(jh,`
`).replace(Nh,"")}function Ao(e,r,n){if(r=Nc(r),Nc(e)!==r&&n)throw Error(l(425))}function Mo(){}var Ei=null,Ti=null;function zi(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ii=typeof setTimeout=="function"?setTimeout:void 0,bh=typeof clearTimeout=="function"?clearTimeout:void 0,bc=typeof Promise=="function"?Promise:void 0,wh=typeof queueMicrotask=="function"?queueMicrotask:typeof bc!="undefined"?function(e){return bc.resolve(null).then(e).catch(kh)}:Ii;function kh(e){setTimeout(function(){throw e})}function Bi(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),_n(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);_n(r)}function nt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function wc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Yt=Math.random().toString(36).slice(2),Rr="__reactFiber$"+Yt,Hn="__reactProps$"+Yt,Fr="__reactContainer$"+Yt,_i="__reactEvents$"+Yt,Sh="__reactListeners$"+Yt,Ch="__reactHandles$"+Yt;function Nt(e){var r=e[Rr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Fr]||n[Rr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=wc(e);e!==null;){if(n=e[Rr])return n;e=wc(e)}return r}e=n,n=e.parentNode}return null}function $n(e){return e=e[Rr]||e[Fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Oo(e){return e[Hn]||null}var Li=[],Xt=-1;function ot(e){return{current:e}}function we(e){0>Xt||(e.current=Li[Xt],Li[Xt]=null,Xt--)}function Ne(e,r){Xt++,Li[Xt]=e.current,e.current=r}var st={},Xe=ot(st),nr=ot(!1),bt=st;function qt(e,r){var n=e.type.contextTypes;if(!n)return st;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=r[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function or(e){return e=e.childContextTypes,e!=null}function Fo(){we(nr),we(Xe)}function kc(e,r,n){if(Xe.current!==st)throw Error(l(168));Ne(Xe,r),Ne(nr,n)}function Sc(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(l(108,de(e)||"Unknown",i));return _({},n,o)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||st,bt=Xe.current,Ne(Xe,e),Ne(nr,nr.current),!0}function Cc(e,r,n){var o=e.stateNode;if(!o)throw Error(l(169));n?(e=Sc(e,r,bt),o.__reactInternalMemoizedMergedChildContext=e,we(nr),we(Xe),Ne(Xe,e)):we(nr),Ne(nr,n)}var Dr=null,Wo=!1,Pi=!1;function Ec(e){Dr===null?Dr=[e]:Dr.push(e)}function Eh(e){Wo=!0,Ec(e)}function it(){if(!Pi&&Dr!==null){Pi=!0;var e=0,r=xe;try{var n=Dr;for(xe=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Dr=null,Wo=!1}catch(i){throw Dr!==null&&(Dr=Dr.slice(e+1)),zl(ti,it),i}finally{xe=r,Pi=!1}}return null}var Zt=[],Jt=0,Uo=null,Ho=0,gr=[],vr=0,wt=null,Wr=1,Ur="";function kt(e,r){Zt[Jt++]=Ho,Zt[Jt++]=Uo,Uo=e,Ho=r}function Tc(e,r,n){gr[vr++]=Wr,gr[vr++]=Ur,gr[vr++]=wt,wt=e;var o=Wr;e=Ur;var i=32-Sr(o)-1;o&=~(1<<i),n+=1;var a=32-Sr(r)+i;if(30<a){var d=i-i%5;a=(o&(1<<d)-1).toString(32),o>>=d,i-=d,Wr=1<<32-Sr(r)+i|n<<i|o,Ur=a+e}else Wr=1<<a|n<<i|o,Ur=e}function Ri(e){e.return!==null&&(kt(e,1),Tc(e,1,0))}function Ai(e){for(;e===Uo;)Uo=Zt[--Jt],Zt[Jt]=null,Ho=Zt[--Jt],Zt[Jt]=null;for(;e===wt;)wt=gr[--vr],gr[vr]=null,Ur=gr[--vr],gr[vr]=null,Wr=gr[--vr],gr[vr]=null}var ur=null,pr=null,Ce=!1,Er=null;function zc(e,r){var n=br(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Ic(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ur=e,pr=nt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ur=e,pr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=wt!==null?{id:Wr,overflow:Ur}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=br(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,ur=e,pr=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oi(e){if(Ce){var r=pr;if(r){var n=r;if(!Ic(e,r)){if(Mi(e))throw Error(l(418));r=nt(n.nextSibling);var o=ur;r&&Ic(e,r)?zc(o,n):(e.flags=e.flags&-4097|2,Ce=!1,ur=e)}}else{if(Mi(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ce=!1,ur=e}}}function Bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ur=e}function $o(e){if(e!==ur)return!1;if(!Ce)return Bc(e),Ce=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!zi(e.type,e.memoizedProps)),r&&(r=pr)){if(Mi(e))throw _c(),Error(l(418));for(;r;)zc(e,r),r=nt(r.nextSibling)}if(Bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){pr=nt(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}pr=null}}else pr=ur?nt(e.stateNode.nextSibling):null;return!0}function _c(){for(var e=pr;e;)e=nt(e.nextSibling)}function en(){pr=ur=null,Ce=!1}function Fi(e){Er===null?Er=[e]:Er.push(e)}var Th=B.ReactCurrentBatchConfig;function Vn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var o=n.stateNode}if(!o)throw Error(l(147,e));var i=o,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(d){var p=i.refs;d===null?delete p[a]:p[a]=d},r._stringRef=a,r)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function Vo(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Lc(e){var r=e._init;return r(e._payload)}function Pc(e){function r(g,m){if(e){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)r(g,m),m=m.sibling;return null}function o(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=mt(g,m),g.index=0,g.sibling=null,g}function a(g,m,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function p(g,m,v,C){return m===null||m.tag!==6?(m=Ia(v,g.mode,C),m.return=g,m):(m=i(m,v),m.return=g,m)}function h(g,m,v,C){var O=v.type;return O===I?w(g,m,v.props.children,C,v.key):m!==null&&(m.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ke&&Lc(O)===m.type)?(C=i(m,v.props),C.ref=Vn(g,m,v),C.return=g,C):(C=fs(v.type,v.key,v.props,null,g.mode,C),C.ref=Vn(g,m,v),C.return=g,C)}function y(g,m,v,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ba(v,g.mode,C),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function w(g,m,v,C,O){return m===null||m.tag!==7?(m=_t(v,g.mode,C,O),m.return=g,m):(m=i(m,v),m.return=g,m)}function S(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ia(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case q:return v=fs(m.type,m.key,m.props,null,g.mode,v),v.ref=Vn(g,null,m),v.return=g,v;case U:return m=Ba(m,g.mode,v),m.return=g,m;case Ke:var C=m._init;return S(g,C(m._payload),v)}if(jn(m)||F(m))return m=_t(m,g.mode,v,null),m.return=g,m;Vo(g,m)}return null}function b(g,m,v,C){var O=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:p(g,m,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case q:return v.key===O?h(g,m,v,C):null;case U:return v.key===O?y(g,m,v,C):null;case Ke:return O=v._init,b(g,m,O(v._payload),C)}if(jn(v)||F(v))return O!==null?null:w(g,m,v,C,null);Vo(g,v)}return null}function L(g,m,v,C,O){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,p(m,g,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case q:return g=g.get(C.key===null?v:C.key)||null,h(m,g,C,O);case U:return g=g.get(C.key===null?v:C.key)||null,y(m,g,C,O);case Ke:var H=C._init;return L(g,m,v,H(C._payload),O)}if(jn(C)||F(C))return g=g.get(v)||null,w(m,g,C,O,null);Vo(m,C)}return null}function R(g,m,v,C){for(var O=null,H=null,$=m,Y=m=0,Ve=null;$!==null&&Y<v.length;Y++){$.index>Y?(Ve=$,$=null):Ve=$.sibling;var pe=b(g,$,v[Y],C);if(pe===null){$===null&&($=Ve);break}e&&$&&pe.alternate===null&&r(g,$),m=a(pe,m,Y),H===null?O=pe:H.sibling=pe,H=pe,$=Ve}if(Y===v.length)return n(g,$),Ce&&kt(g,Y),O;if($===null){for(;Y<v.length;Y++)$=S(g,v[Y],C),$!==null&&(m=a($,m,Y),H===null?O=$:H.sibling=$,H=$);return Ce&&kt(g,Y),O}for($=o(g,$);Y<v.length;Y++)Ve=L($,g,Y,v[Y],C),Ve!==null&&(e&&Ve.alternate!==null&&$.delete(Ve.key===null?Y:Ve.key),m=a(Ve,m,Y),H===null?O=Ve:H.sibling=Ve,H=Ve);return e&&$.forEach(function(ft){return r(g,ft)}),Ce&&kt(g,Y),O}function A(g,m,v,C){var O=F(v);if(typeof O!="function")throw Error(l(150));if(v=O.call(v),v==null)throw Error(l(151));for(var H=O=null,$=m,Y=m=0,Ve=null,pe=v.next();$!==null&&!pe.done;Y++,pe=v.next()){$.index>Y?(Ve=$,$=null):Ve=$.sibling;var ft=b(g,$,pe.value,C);if(ft===null){$===null&&($=Ve);break}e&&$&&ft.alternate===null&&r(g,$),m=a(ft,m,Y),H===null?O=ft:H.sibling=ft,H=ft,$=Ve}if(pe.done)return n(g,$),Ce&&kt(g,Y),O;if($===null){for(;!pe.done;Y++,pe=v.next())pe=S(g,pe.value,C),pe!==null&&(m=a(pe,m,Y),H===null?O=pe:H.sibling=pe,H=pe);return Ce&&kt(g,Y),O}for($=o(g,$);!pe.done;Y++,pe=v.next())pe=L($,g,Y,pe.value,C),pe!==null&&(e&&pe.alternate!==null&&$.delete(pe.key===null?Y:pe.key),m=a(pe,m,Y),H===null?O=pe:H.sibling=pe,H=pe);return e&&$.forEach(function(am){return r(g,am)}),Ce&&kt(g,Y),O}function Pe(g,m,v,C){if(typeof v=="object"&&v!==null&&v.type===I&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case q:e:{for(var O=v.key,H=m;H!==null;){if(H.key===O){if(O=v.type,O===I){if(H.tag===7){n(g,H.sibling),m=i(H,v.props.children),m.return=g,g=m;break e}}else if(H.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ke&&Lc(O)===H.type){n(g,H.sibling),m=i(H,v.props),m.ref=Vn(g,H,v),m.return=g,g=m;break e}n(g,H);break}else r(g,H);H=H.sibling}v.type===I?(m=_t(v.props.children,g.mode,C,v.key),m.return=g,g=m):(C=fs(v.type,v.key,v.props,null,g.mode,C),C.ref=Vn(g,m,v),C.return=g,g=C)}return d(g);case U:e:{for(H=v.key;m!==null;){if(m.key===H)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else r(g,m);m=m.sibling}m=Ba(v,g.mode,C),m.return=g,g=m}return d(g);case Ke:return H=v._init,Pe(g,m,H(v._payload),C)}if(jn(v))return R(g,m,v,C);if(F(v))return A(g,m,v,C);Vo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,v),m.return=g,g=m):(n(g,m),m=Ia(v,g.mode,C),m.return=g,g=m),d(g)):n(g,m)}return Pe}var rn=Pc(!0),Rc=Pc(!1),Qo=ot(null),Go=null,tn=null,Di=null;function Wi(){Di=tn=Go=null}function Ui(e){var r=Qo.current;we(Qo),e._currentValue=r}function Hi(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function nn(e,r){Go=e,Di=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(sr=!0),e.firstContext=null)}function yr(e){var r=e._currentValue;if(Di!==e)if(e={context:e,memoizedValue:r,next:null},tn===null){if(Go===null)throw Error(l(308));tn=e,Go.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return r}var St=null;function $i(e){St===null?St=[e]:St.push(e)}function Ac(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,$i(r)):(n.next=i.next,i.next=n),r.interleaved=n,Hr(e,o)}function Hr(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Vi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $r(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function lt(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ue&2)!==0){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,Hr(e,n)}return i=o.interleaved,i===null?(r.next=r,$i(o)):(r.next=i.next,i.next=r),o.interleaved=r,Hr(e,n)}function Yo(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,si(e,n)}}function Oc(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=d:a=a.next=d,n=n.next}while(n!==null);a===null?i=a=r:a=a.next=r}else i=a=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Ko(e,r,n,o){var i=e.updateQueue;at=!1;var a=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var h=p,y=h.next;h.next=null,d===null?a=y:d.next=y,d=h;var w=e.alternate;w!==null&&(w=w.updateQueue,p=w.lastBaseUpdate,p!==d&&(p===null?w.firstBaseUpdate=y:p.next=y,w.lastBaseUpdate=h))}if(a!==null){var S=i.baseState;d=0,w=y=h=null,p=a;do{var b=p.lane,L=p.eventTime;if((o&b)===b){w!==null&&(w=w.next={eventTime:L,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var R=e,A=p;switch(b=r,L=n,A.tag){case 1:if(R=A.payload,typeof R=="function"){S=R.call(L,S,b);break e}S=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=A.payload,b=typeof R=="function"?R.call(L,S,b):R,b==null)break e;S=_({},S,b);break e;case 2:at=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,b=i.effects,b===null?i.effects=[p]:b.push(p))}else L={eventTime:L,lane:b,tag:p.tag,payload:p.payload,callback:p.callback,next:null},w===null?(y=w=L,h=S):w=w.next=L,d|=b;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;b=p,p=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);if(w===null&&(h=S),i.baseState=h,i.firstBaseUpdate=y,i.lastBaseUpdate=w,r=i.shared.interleaved,r!==null){i=r;do d|=i.lane,i=i.next;while(i!==r)}else a===null&&(i.shared.lanes=0);Tt|=d,e.lanes=d,e.memoizedState=S}}function Fc(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(l(191,i));i.call(o)}}}var Qn={},Ar=ot(Qn),Gn=ot(Qn),Yn=ot(Qn);function Ct(e){if(e===Qn)throw Error(l(174));return e}function Qi(e,r){switch(Ne(Yn,r),Ne(Gn,e),Ne(Ar,Qn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Gs(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Gs(r,e)}we(Ar),Ne(Ar,r)}function on(){we(Ar),we(Gn),we(Yn)}function Dc(e){Ct(Yn.current);var r=Ct(Ar.current),n=Gs(r,e.type);r!==n&&(Ne(Gn,e),Ne(Ar,n))}function Gi(e){Gn.current===e&&(we(Ar),we(Gn))}var Te=ot(0);function Xo(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Yi=[];function Ki(){for(var e=0;e<Yi.length;e++)Yi[e]._workInProgressVersionPrimary=null;Yi.length=0}var qo=B.ReactCurrentDispatcher,Xi=B.ReactCurrentBatchConfig,Et=0,ze=null,Oe=null,He=null,Zo=!1,Kn=!1,Xn=0,zh=0;function qe(){throw Error(l(321))}function qi(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Cr(e[n],r[n]))return!1;return!0}function Zi(e,r,n,o,i,a){if(Et=a,ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,qo.current=e===null||e.memoizedState===null?Lh:Ph,e=n(o,i),Kn){a=0;do{if(Kn=!1,Xn=0,25<=a)throw Error(l(301));a+=1,He=Oe=null,r.updateQueue=null,qo.current=Rh,e=n(o,i)}while(Kn)}if(qo.current=rs,r=Oe!==null&&Oe.next!==null,Et=0,He=Oe=ze=null,Zo=!1,r)throw Error(l(300));return e}function Ji(){var e=Xn!==0;return Xn=0,e}function Mr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ze.memoizedState=He=e:He=He.next=e,He}function jr(){if(Oe===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var r=He===null?ze.memoizedState:He.next;if(r!==null)He=r,Oe=e;else{if(e===null)throw Error(l(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},He===null?ze.memoizedState=He=e:He=He.next=e}return He}function qn(e,r){return typeof r=="function"?r(e):r}function ea(e){var r=jr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=Oe,i=o.baseQueue,a=n.pending;if(a!==null){if(i!==null){var d=i.next;i.next=a.next,a.next=d}o.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,o=o.baseState;var p=d=null,h=null,y=a;do{var w=y.lane;if((Et&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),o=y.hasEagerState?y.eagerState:e(o,y.action);else{var S={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(p=h=S,d=o):h=h.next=S,ze.lanes|=w,Tt|=w}y=y.next}while(y!==null&&y!==a);h===null?d=o:h.next=p,Cr(o,r.memoizedState)||(sr=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=h,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ze.lanes|=a,Tt|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function ra(e){var r=jr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,a=r.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do a=e(a,d.action),d=d.next;while(d!==i);Cr(a,r.memoizedState)||(sr=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),n.lastRenderedState=a}return[a,o]}function Wc(){}function Uc(e,r){var n=ze,o=jr(),i=r(),a=!Cr(o.memoizedState,i);if(a&&(o.memoizedState=i,sr=!0),o=o.queue,ta(Vc.bind(null,n,o,e),[e]),o.getSnapshot!==r||a||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Zn(9,$c.bind(null,n,o,i,r),void 0,null),$e===null)throw Error(l(349));(Et&30)!==0||Hc(n,r,i)}return i}function Hc(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=ze.updateQueue,r===null?(r={lastEffect:null,stores:null},ze.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function $c(e,r,n,o){r.value=n,r.getSnapshot=o,Qc(r)&&Gc(e)}function Vc(e,r,n){return n(function(){Qc(r)&&Gc(e)})}function Qc(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Cr(e,n)}catch{return!0}}function Gc(e){var r=Hr(e,1);r!==null&&Br(r,e,1,-1)}function Yc(e){var r=Mr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},r.queue=e,e=e.dispatch=_h.bind(null,ze,e),[r.memoizedState,e]}function Zn(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=ze.updateQueue,r===null?(r={lastEffect:null,stores:null},ze.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function Kc(){return jr().memoizedState}function Jo(e,r,n,o){var i=Mr();ze.flags|=e,i.memoizedState=Zn(1|r,n,void 0,o===void 0?null:o)}function es(e,r,n,o){var i=jr();o=o===void 0?null:o;var a=void 0;if(Oe!==null){var d=Oe.memoizedState;if(a=d.destroy,o!==null&&qi(o,d.deps)){i.memoizedState=Zn(r,n,a,o);return}}ze.flags|=e,i.memoizedState=Zn(1|r,n,a,o)}function Xc(e,r){return Jo(8390656,8,e,r)}function ta(e,r){return es(2048,8,e,r)}function qc(e,r){return es(4,2,e,r)}function Zc(e,r){return es(4,4,e,r)}function Jc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function ed(e,r,n){return n=n!=null?n.concat([e]):null,es(4,4,Jc.bind(null,r,e),n)}function na(){}function rd(e,r){var n=jr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&qi(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function td(e,r){var n=jr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&qi(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function nd(e,r,n){return(Et&21)===0?(e.baseState&&(e.baseState=!1,sr=!0),e.memoizedState=n):(Cr(n,r)||(n=Ll(),ze.lanes|=n,Tt|=n,e.baseState=!0),r)}function Ih(e,r){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var o=Xi.transition;Xi.transition={};try{e(!1),r()}finally{xe=n,Xi.transition=o}}function od(){return jr().memoizedState}function Bh(e,r,n){var o=pt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},sd(e))id(r,n);else if(n=Ac(e,r,n,o),n!==null){var i=tr();Br(n,e,o,i),ad(n,r,o)}}function _h(e,r,n){var o=pt(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(sd(e))id(r,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var d=r.lastRenderedState,p=a(d,n);if(i.hasEagerState=!0,i.eagerState=p,Cr(p,d)){var h=r.interleaved;h===null?(i.next=i,$i(r)):(i.next=h.next,h.next=i),r.interleaved=i;return}}catch{}finally{}n=Ac(e,r,i,o),n!==null&&(i=tr(),Br(n,e,o,i),ad(n,r,o))}}function sd(e){var r=e.alternate;return e===ze||r!==null&&r===ze}function id(e,r){Kn=Zo=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function ad(e,r,n){if((n&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,si(e,n)}}var rs={readContext:yr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Lh={readContext:yr,useCallback:function(e,r){return Mr().memoizedState=[e,r===void 0?null:r],e},useContext:yr,useEffect:Xc,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Jo(4194308,4,Jc.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Jo(4194308,4,e,r)},useInsertionEffect:function(e,r){return Jo(4,2,e,r)},useMemo:function(e,r){var n=Mr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=Mr();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Bh.bind(null,ze,e),[o.memoizedState,e]},useRef:function(e){var r=Mr();return e={current:e},r.memoizedState=e},useState:Yc,useDebugValue:na,useDeferredValue:function(e){return Mr().memoizedState=e},useTransition:function(){var e=Yc(!1),r=e[0];return e=Ih.bind(null,e[1]),Mr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=ze,i=Mr();if(Ce){if(n===void 0)throw Error(l(407));n=n()}else{if(n=r(),$e===null)throw Error(l(349));(Et&30)!==0||Hc(o,r,n)}i.memoizedState=n;var a={value:n,getSnapshot:r};return i.queue=a,Xc(Vc.bind(null,o,a,e),[e]),o.flags|=2048,Zn(9,$c.bind(null,o,a,n,r),void 0,null),n},useId:function(){var e=Mr(),r=$e.identifierPrefix;if(Ce){var n=Ur,o=Wr;n=(o&~(1<<32-Sr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=Xn++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=zh++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Ph={readContext:yr,useCallback:rd,useContext:yr,useEffect:ta,useImperativeHandle:ed,useInsertionEffect:qc,useLayoutEffect:Zc,useMemo:td,useReducer:ea,useRef:Kc,useState:function(){return ea(qn)},useDebugValue:na,useDeferredValue:function(e){var r=jr();return nd(r,Oe.memoizedState,e)},useTransition:function(){var e=ea(qn)[0],r=jr().memoizedState;return[e,r]},useMutableSource:Wc,useSyncExternalStore:Uc,useId:od,unstable_isNewReconciler:!1},Rh={readContext:yr,useCallback:rd,useContext:yr,useEffect:ta,useImperativeHandle:ed,useInsertionEffect:qc,useLayoutEffect:Zc,useMemo:td,useReducer:ra,useRef:Kc,useState:function(){return ra(qn)},useDebugValue:na,useDeferredValue:function(e){var r=jr();return Oe===null?r.memoizedState=e:nd(r,Oe.memoizedState,e)},useTransition:function(){var e=ra(qn)[0],r=jr().memoizedState;return[e,r]},useMutableSource:Wc,useSyncExternalStore:Uc,useId:od,unstable_isNewReconciler:!1};function Tr(e,r){if(e&&e.defaultProps){r=_({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function oa(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:_({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ts={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=tr(),i=pt(e),a=$r(o,i);a.payload=r,n!=null&&(a.callback=n),r=lt(e,a,i),r!==null&&(Br(r,e,i,o),Yo(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=tr(),i=pt(e),a=$r(o,i);a.tag=1,a.payload=r,n!=null&&(a.callback=n),r=lt(e,a,i),r!==null&&(Br(r,e,i,o),Yo(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=tr(),o=pt(e),i=$r(n,o);i.tag=2,r!=null&&(i.callback=r),r=lt(e,i,o),r!==null&&(Br(r,e,o,n),Yo(r,e,o))}};function ld(e,r,n,o,i,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,d):r.prototype&&r.prototype.isPureReactComponent?!On(n,o)||!On(i,a):!0}function cd(e,r,n){var o=!1,i=st,a=r.contextType;return typeof a=="object"&&a!==null?a=yr(a):(i=or(r)?bt:Xe.current,o=r.contextTypes,a=(o=o!=null)?qt(e,i):st),r=new r(n,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ts,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),r}function dd(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&ts.enqueueReplaceState(r,r.state,null)}function sa(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vi(e);var a=r.contextType;typeof a=="object"&&a!==null?i.context=yr(a):(a=or(r)?bt:Xe.current,i.context=qt(e,a)),i.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(oa(e,r,a,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&ts.enqueueReplaceState(i,i.state,null),Ko(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,r){try{var n="",o=r;do n+=ie(o),o=o.return;while(o);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:i,digest:null}}function ia(e,r,n){return{value:e,source:null,stack:n!=null?n:null,digest:r!=null?r:null}}function aa(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Ah=typeof WeakMap=="function"?WeakMap:Map;function ud(e,r,n){n=$r(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){cs||(cs=!0,ba=o),aa(e,r)},n}function pd(e,r,n){n=$r(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){aa(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){aa(e,r),typeof o!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),n}function hd(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Ah;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=Xh.bind(null,e,r,n),r.then(e,e))}function md(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function fd(e,r,n,o,i){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=$r(-1,1),r.tag=2,lt(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Mh=B.ReactCurrentOwner,sr=!1;function rr(e,r,n,o){r.child=e===null?Rc(r,null,n,o):rn(r,e.child,n,o)}function xd(e,r,n,o,i){n=n.render;var a=r.ref;return nn(r,i),o=Zi(e,r,n,o,a,i),n=Ji(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Vr(e,r,i)):(Ce&&n&&Ri(r),r.flags|=1,rr(e,r,o,i),r.child)}function gd(e,r,n,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!za(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=a,vd(e,r,a,o,i)):(e=fs(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&i)===0){var d=a.memoizedProps;if(n=n.compare,n=n!==null?n:On,n(d,o)&&e.ref===r.ref)return Vr(e,r,i)}return r.flags|=1,e=mt(a,o),e.ref=r.ref,e.return=r,r.child=e}function vd(e,r,n,o,i){if(e!==null){var a=e.memoizedProps;if(On(a,o)&&e.ref===r.ref)if(sr=!1,r.pendingProps=o=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(sr=!0);else return r.lanes=e.lanes,Vr(e,r,i)}return la(e,r,n,o,i)}function yd(e,r,n){var o=r.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(ln,hr),hr|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Ne(ln,hr),hr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,Ne(ln,hr),hr|=o}else a!==null?(o=a.baseLanes|n,r.memoizedState=null):o=n,Ne(ln,hr),hr|=o;return rr(e,r,i,n),r.child}function jd(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function la(e,r,n,o,i){var a=or(n)?bt:Xe.current;return a=qt(r,a),nn(r,i),n=Zi(e,r,n,o,a,i),o=Ji(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Vr(e,r,i)):(Ce&&o&&Ri(r),r.flags|=1,rr(e,r,n,i),r.child)}function Nd(e,r,n,o,i){if(or(n)){var a=!0;Do(r)}else a=!1;if(nn(r,i),r.stateNode===null)os(e,r),cd(r,n,o),sa(r,n,o,i),o=!0;else if(e===null){var d=r.stateNode,p=r.memoizedProps;d.props=p;var h=d.context,y=n.contextType;typeof y=="object"&&y!==null?y=yr(y):(y=or(n)?bt:Xe.current,y=qt(r,y));var w=n.getDerivedStateFromProps,S=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||h!==y)&&dd(r,d,o,y),at=!1;var b=r.memoizedState;d.state=b,Ko(r,o,d,i),h=r.memoizedState,p!==o||b!==h||nr.current||at?(typeof w=="function"&&(oa(r,n,w,o),h=r.memoizedState),(p=at||ld(r,n,p,o,b,h,y))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=h),d.props=o,d.state=h,d.context=y,o=p):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,Mc(e,r),p=r.memoizedProps,y=r.type===r.elementType?p:Tr(r.type,p),d.props=y,S=r.pendingProps,b=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=yr(h):(h=or(n)?bt:Xe.current,h=qt(r,h));var L=n.getDerivedStateFromProps;(w=typeof L=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==S||b!==h)&&dd(r,d,o,h),at=!1,b=r.memoizedState,d.state=b,Ko(r,o,d,i);var R=r.memoizedState;p!==S||b!==R||nr.current||at?(typeof L=="function"&&(oa(r,n,L,o),R=r.memoizedState),(y=at||ld(r,n,y,o,b,R,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,R,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,R,h)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=R),d.props=o,d.state=R,d.context=h,o=y):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(r.flags|=1024),o=!1)}return ca(e,r,n,o,a,i)}function ca(e,r,n,o,i,a){jd(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return i&&Cc(r,n,!1),Vr(e,r,a);o=r.stateNode,Mh.current=r;var p=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=rn(r,e.child,null,a),r.child=rn(r,null,p,a)):rr(e,r,p,a),r.memoizedState=o.state,i&&Cc(r,n,!0),r.child}function bd(e){var r=e.stateNode;r.pendingContext?kc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&kc(e,r.context,!1),Qi(e,r.containerInfo)}function wd(e,r,n,o,i){return en(),Fi(i),r.flags|=256,rr(e,r,n,o),r.child}var da={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,r,n){var o=r.pendingProps,i=Te.current,a=!1,d=(r.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ne(Te,i&1),e===null)return Oi(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,a?(o=r.mode,a=r.child,d={mode:"hidden",children:d},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=xs(d,o,0,null),e=_t(e,o,n,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=ua(n),r.memoizedState=da,e):pa(r,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Oh(e,r,d,o,p,i,n);if(a){a=o.fallback,d=r.mode,i=e.child,p=i.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=h,r.deletions=null):(o=mt(i,h),o.subtreeFlags=i.subtreeFlags&14680064),p!==null?a=mt(p,a):(a=_t(a,d,n,null),a.flags|=2),a.return=r,o.return=r,o.sibling=a,r.child=o,o=a,a=r.child,d=e.child.memoizedState,d=d===null?ua(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~n,r.memoizedState=da,o}return a=e.child,e=a.sibling,o=mt(a,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function pa(e,r){return r=xs({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ns(e,r,n,o){return o!==null&&Fi(o),rn(r,e.child,null,n),e=pa(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Oh(e,r,n,o,i,a,d){if(n)return r.flags&256?(r.flags&=-257,o=ia(Error(l(422))),ns(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=o.fallback,i=r.mode,o=xs({mode:"visible",children:o.children},i,0,null),a=_t(a,i,d,null),a.flags|=2,o.return=r,a.return=r,o.sibling=a,r.child=o,(r.mode&1)!==0&&rn(r,e.child,null,d),r.child.memoizedState=ua(d),r.memoizedState=da,a);if((r.mode&1)===0)return ns(e,r,d,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var p=o.dgst;return o=p,a=Error(l(419)),o=ia(a,o,void 0),ns(e,r,d,o)}if(p=(d&e.childLanes)!==0,sr||p){if(o=$e,o!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|d))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Hr(e,i),Br(o,e,i,-1))}return Ta(),o=ia(Error(l(421))),ns(e,r,d,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=qh.bind(null,e),i._reactRetry=r,null):(e=a.treeContext,pr=nt(i.nextSibling),ur=r,Ce=!0,Er=null,e!==null&&(gr[vr++]=Wr,gr[vr++]=Ur,gr[vr++]=wt,Wr=e.id,Ur=e.overflow,wt=r),r=pa(r,o.children),r.flags|=4096,r)}function Sd(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Hi(e.return,r,n)}function ha(e,r,n,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=i)}function Cd(e,r,n){var o=r.pendingProps,i=o.revealOrder,a=o.tail;if(rr(e,r,o.children,n),o=Te.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,n,r);else if(e.tag===19)Sd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ne(Te,o),(r.mode&1)===0)r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Xo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),ha(r,!1,i,n,a);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ha(r,!0,n,null,a);break;case"together":ha(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function os(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Vr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),Tt|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,n=mt(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Fh(e,r,n){switch(r.tag){case 3:bd(r),en();break;case 5:Dc(r);break;case 1:or(r.type)&&Do(r);break;case 4:Qi(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;Ne(Qo,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(Ne(Te,Te.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?kd(e,r,n):(Ne(Te,Te.current&1),e=Vr(e,r,n),e!==null?e.sibling:null);Ne(Te,Te.current&1);break;case 19:if(o=(n&r.childLanes)!==0,(e.flags&128)!==0){if(o)return Cd(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ne(Te,Te.current),o)break;return null;case 22:case 23:return r.lanes=0,yd(e,r,n)}return Vr(e,r,n)}var Ed,ma,Td,zd;Ed=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ma=function(){},Td=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,Ct(Ar.current);var a=null;switch(n){case"input":i=Hs(e,i),o=Hs(e,o),a=[];break;case"select":i=_({},i,{value:void 0}),o=_({},o,{value:void 0}),a=[];break;case"textarea":i=Qs(e,i),o=Qs(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Mo)}Ys(n,o);var d;n=null;for(y in i)if(!o.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var p=i[y];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(f.hasOwnProperty(y)?a||(a=[]):(a=a||[]).push(y,null));for(y in o){var h=o[y];if(p=i!=null?i[y]:void 0,o.hasOwnProperty(y)&&h!==p&&(h!=null||p!=null))if(y==="style")if(p){for(d in p)!p.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&p[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(a||(a=[]),a.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(a=a||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(f.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&be("scroll",e),a||p===h||(a=[])):(a=a||[]).push(y,h))}n&&(a=a||[]).push("style",n);var y=a;(r.updateQueue=y)&&(r.flags|=4)}},zd=function(e,r,n,o){n!==o&&(r.flags|=4)};function Jn(e,r){if(!Ce)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function Dh(e,r,n){var o=r.pendingProps;switch(Ai(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(r),null;case 1:return or(r.type)&&Fo(),Ze(r),null;case 3:return o=r.stateNode,on(),we(nr),we(Xe),Ki(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($o(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Er!==null&&(Sa(Er),Er=null))),ma(e,r),Ze(r),null;case 5:Gi(r);var i=Ct(Yn.current);if(n=r.type,e!==null&&r.stateNode!=null)Td(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(l(166));return Ze(r),null}if(e=Ct(Ar.current),$o(r)){o=r.stateNode,n=r.type;var a=r.memoizedProps;switch(o[Rr]=r,o[Hn]=a,e=(r.mode&1)!==0,n){case"dialog":be("cancel",o),be("close",o);break;case"iframe":case"object":case"embed":be("load",o);break;case"video":case"audio":for(i=0;i<Dn.length;i++)be(Dn[i],o);break;case"source":be("error",o);break;case"img":case"image":case"link":be("error",o),be("load",o);break;case"details":be("toggle",o);break;case"input":cl(o,a),be("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},be("invalid",o);break;case"textarea":pl(o,a),be("invalid",o)}Ys(n,a),i=null;for(var d in a)if(a.hasOwnProperty(d)){var p=a[d];d==="children"?typeof p=="string"?o.textContent!==p&&(a.suppressHydrationWarning!==!0&&Ao(o.textContent,p,e),i=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&Ao(o.textContent,p,e),i=["children",""+p]):f.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&be("scroll",o)}switch(n){case"input":Xr(o),ul(o,a,!0);break;case"textarea":Xr(o),ml(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Mo)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Rr]=r,e[Hn]=o,Ed(e,r,!1,!1),r.stateNode=e;e:{switch(d=Ks(n,o),n){case"dialog":be("cancel",e),be("close",e),i=o;break;case"iframe":case"object":case"embed":be("load",e),i=o;break;case"video":case"audio":for(i=0;i<Dn.length;i++)be(Dn[i],e);i=o;break;case"source":be("error",e),i=o;break;case"img":case"image":case"link":be("error",e),be("load",e),i=o;break;case"details":be("toggle",e),i=o;break;case"input":cl(e,o),i=Hs(e,o),be("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=_({},o,{value:void 0}),be("invalid",e);break;case"textarea":pl(e,o),i=Qs(e,o),be("invalid",e);break;default:i=o}Ys(n,i),p=i;for(a in p)if(p.hasOwnProperty(a)){var h=p[a];a==="style"?vl(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&xl(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Nn(e,h):typeof h=="number"&&Nn(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(f.hasOwnProperty(a)?h!=null&&a==="onScroll"&&be("scroll",e):h!=null&&te(e,a,h,d))}switch(n){case"input":Xr(e),ul(e,o,!1);break;case"textarea":Xr(e),ml(e);break;case"option":o.value!=null&&e.setAttribute("value",""+le(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Ft(e,!!o.multiple,a,!1):o.defaultValue!=null&&Ft(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ze(r),null;case 6:if(e&&r.stateNode!=null)zd(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(l(166));if(n=Ct(Yn.current),Ct(Ar.current),$o(r)){if(o=r.stateNode,n=r.memoizedProps,o[Rr]=r,(a=o.nodeValue!==n)&&(e=ur,e!==null))switch(e.tag){case 3:Ao(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(o.nodeValue,n,(e.mode&1)!==0)}a&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Rr]=r,r.stateNode=o}return Ze(r),null;case 13:if(we(Te),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&pr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)_c(),en(),r.flags|=98560,a=!1;else if(a=$o(r),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Rr]=r}else en(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ze(r),a=!1}else Er!==null&&(Sa(Er),Er=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Te.current&1)!==0?Fe===0&&(Fe=3):Ta())),r.updateQueue!==null&&(r.flags|=4),Ze(r),null);case 4:return on(),ma(e,r),e===null&&Wn(r.stateNode.containerInfo),Ze(r),null;case 10:return Ui(r.type._context),Ze(r),null;case 17:return or(r.type)&&Fo(),Ze(r),null;case 19:if(we(Te),a=r.memoizedState,a===null)return Ze(r),null;if(o=(r.flags&128)!==0,d=a.rendering,d===null)if(o)Jn(a,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Xo(e),d!==null){for(r.flags|=128,Jn(a,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)a=n,e=o,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ne(Te,Te.current&1|2),r.child}e=e.sibling}a.tail!==null&&Le()>cn&&(r.flags|=128,o=!0,Jn(a,!1),r.lanes=4194304)}else{if(!o)if(e=Xo(d),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Jn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Ce)return Ze(r),null}else 2*Le()-a.renderingStartTime>cn&&n!==1073741824&&(r.flags|=128,o=!0,Jn(a,!1),r.lanes=4194304);a.isBackwards?(d.sibling=r.child,r.child=d):(n=a.last,n!==null?n.sibling=d:r.child=d,a.last=d)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Le(),r.sibling=null,n=Te.current,Ne(Te,o?n&1|2:n&1),r):(Ze(r),null);case 22:case 23:return Ea(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(hr&1073741824)!==0&&(Ze(r),r.subtreeFlags&6&&(r.flags|=8192)):Ze(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function Wh(e,r){switch(Ai(r),r.tag){case 1:return or(r.type)&&Fo(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return on(),we(nr),we(Xe),Ki(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Gi(r),null;case 13:if(we(Te),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));en()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return we(Te),null;case 4:return on(),null;case 10:return Ui(r.type._context),null;case 22:case 23:return Ea(),null;case 24:return null;default:return null}}var ss=!1,Je=!1,Uh=typeof WeakSet=="function"?WeakSet:Set,P=null;function an(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Be(e,r,o)}else n.current=null}function fa(e,r,n){try{n()}catch(o){Be(e,r,o)}}var Id=!1;function Hh(e,r){if(Ei=So,e=lc(),yi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var d=0,p=-1,h=-1,y=0,w=0,S=e,b=null;r:for(;;){for(var L;S!==n||i!==0&&S.nodeType!==3||(p=d+i),S!==a||o!==0&&S.nodeType!==3||(h=d+o),S.nodeType===3&&(d+=S.nodeValue.length),(L=S.firstChild)!==null;)b=S,S=L;for(;;){if(S===e)break r;if(b===n&&++y===i&&(p=d),b===a&&++w===o&&(h=d),(L=S.nextSibling)!==null)break;S=b,b=S.parentNode}S=L}n=p===-1||h===-1?null:{start:p,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ti={focusedElem:e,selectionRange:n},So=!1,P=r;P!==null;)if(r=P,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,P=e;else for(;P!==null;){r=P;try{var R=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var A=R.memoizedProps,Pe=R.memoizedState,g=r.stateNode,m=g.getSnapshotBeforeUpdate(r.elementType===r.type?A:Tr(r.type,A),Pe);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=r.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){Be(r,r.return,C)}if(e=r.sibling,e!==null){e.return=r.return,P=e;break}P=r.return}return R=Id,Id=!1,R}function eo(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&fa(r,n,a)}i=i.next}while(i!==o)}}function is(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function xa(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Bd(e){var r=e.alternate;r!==null&&(e.alternate=null,Bd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Rr],delete r[Hn],delete r[_i],delete r[Sh],delete r[Ch])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _d(e){return e.tag===5||e.tag===3||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ga(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Mo));else if(o!==4&&(e=e.child,e!==null))for(ga(e,r,n),e=e.sibling;e!==null;)ga(e,r,n),e=e.sibling}function va(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(va(e,r,n),e=e.sibling;e!==null;)va(e,r,n),e=e.sibling}var Qe=null,zr=!1;function ct(e,r,n){for(n=n.child;n!==null;)Pd(e,r,n),n=n.sibling}function Pd(e,r,n){if(Pr&&typeof Pr.onCommitFiberUnmount=="function")try{Pr.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:Je||an(n,r);case 6:var o=Qe,i=zr;Qe=null,ct(e,r,n),Qe=o,zr=i,Qe!==null&&(zr?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(zr?(e=Qe,n=n.stateNode,e.nodeType===8?Bi(e.parentNode,n):e.nodeType===1&&Bi(e,n),_n(e)):Bi(Qe,n.stateNode));break;case 4:o=Qe,i=zr,Qe=n.stateNode.containerInfo,zr=!0,ct(e,r,n),Qe=o,zr=i;break;case 0:case 11:case 14:case 15:if(!Je&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&fa(n,r,d),i=i.next}while(i!==o)}ct(e,r,n);break;case 1:if(!Je&&(an(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(p){Be(n,r,p)}ct(e,r,n);break;case 21:ct(e,r,n);break;case 22:n.mode&1?(Je=(o=Je)||n.memoizedState!==null,ct(e,r,n),Je=o):ct(e,r,n);break;default:ct(e,r,n)}}function Rd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Uh),r.forEach(function(o){var i=Zh.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Ir(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var a=e,d=r,p=d;e:for(;p!==null;){switch(p.tag){case 5:Qe=p.stateNode,zr=!1;break e;case 3:Qe=p.stateNode.containerInfo,zr=!0;break e;case 4:Qe=p.stateNode.containerInfo,zr=!0;break e}p=p.return}if(Qe===null)throw Error(l(160));Pd(a,d,i),Qe=null,zr=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(y){Be(i,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ad(r,e),r=r.sibling}function Ad(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ir(r,e),Or(e),o&4){try{eo(3,e,e.return),is(3,e)}catch(A){Be(e,e.return,A)}try{eo(5,e,e.return)}catch(A){Be(e,e.return,A)}}break;case 1:Ir(r,e),Or(e),o&512&&n!==null&&an(n,n.return);break;case 5:if(Ir(r,e),Or(e),o&512&&n!==null&&an(n,n.return),e.flags&32){var i=e.stateNode;try{Nn(i,"")}catch(A){Be(e,e.return,A)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,d=n!==null?n.memoizedProps:a,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&dl(i,a),Ks(p,d);var y=Ks(p,a);for(d=0;d<h.length;d+=2){var w=h[d],S=h[d+1];w==="style"?vl(i,S):w==="dangerouslySetInnerHTML"?xl(i,S):w==="children"?Nn(i,S):te(i,w,S,y)}switch(p){case"input":$s(i,a);break;case"textarea":hl(i,a);break;case"select":var b=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var L=a.value;L!=null?Ft(i,!!a.multiple,L,!1):b!==!!a.multiple&&(a.defaultValue!=null?Ft(i,!!a.multiple,a.defaultValue,!0):Ft(i,!!a.multiple,a.multiple?[]:"",!1))}i[Hn]=a}catch(A){Be(e,e.return,A)}}break;case 6:if(Ir(r,e),Or(e),o&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(A){Be(e,e.return,A)}}break;case 3:if(Ir(r,e),Or(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{_n(r.containerInfo)}catch(A){Be(e,e.return,A)}break;case 4:Ir(r,e),Or(e);break;case 13:Ir(r,e),Or(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Na=Le())),o&4&&Rd(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(y=Je)||w,Ir(r,e),Je=y):Ir(r,e),Or(e),o&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!w&&(e.mode&1)!==0)for(P=e,w=e.child;w!==null;){for(S=P=w;P!==null;){switch(b=P,L=b.child,b.tag){case 0:case 11:case 14:case 15:eo(4,b,b.return);break;case 1:an(b,b.return);var R=b.stateNode;if(typeof R.componentWillUnmount=="function"){o=b,n=b.return;try{r=o,R.props=r.memoizedProps,R.state=r.memoizedState,R.componentWillUnmount()}catch(A){Be(o,n,A)}}break;case 5:an(b,b.return);break;case 22:if(b.memoizedState!==null){Fd(S);continue}}L!==null?(L.return=b,P=L):Fd(S)}w=w.sibling}e:for(w=null,S=e;;){if(S.tag===5){if(w===null){w=S;try{i=S.stateNode,y?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=gl("display",d))}catch(A){Be(e,e.return,A)}}}else if(S.tag===6){if(w===null)try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(A){Be(e,e.return,A)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;w===S&&(w=null),S=S.return}w===S&&(w=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Ir(r,e),Or(e),o&4&&Rd(e);break;case 21:break;default:Ir(r,e),Or(e)}}function Or(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(_d(n)){var o=n;break e}n=n.return}throw Error(l(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Nn(i,""),o.flags&=-33);var a=Ld(e);va(e,a,i);break;case 3:case 4:var d=o.stateNode.containerInfo,p=Ld(e);ga(e,p,d);break;default:throw Error(l(161))}}catch(h){Be(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function $h(e,r,n){P=e,Md(e)}function Md(e,r,n){for(var o=(e.mode&1)!==0;P!==null;){var i=P,a=i.child;if(i.tag===22&&o){var d=i.memoizedState!==null||ss;if(!d){var p=i.alternate,h=p!==null&&p.memoizedState!==null||Je;p=ss;var y=Je;if(ss=d,(Je=h)&&!y)for(P=i;P!==null;)d=P,h=d.child,d.tag===22&&d.memoizedState!==null?Dd(i):h!==null?(h.return=d,P=h):Dd(i);for(;a!==null;)P=a,Md(a),a=a.sibling;P=i,ss=p,Je=y}Od(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,P=a):Od(e)}}function Od(e){for(;P!==null;){var r=P;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Je||is(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Je)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:Tr(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Fc(r,a,o);break;case 3:var d=r.updateQueue;if(d!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Fc(r,d,n)}break;case 5:var p=r.stateNode;if(n===null&&r.flags&4){n=p;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var S=w.dehydrated;S!==null&&_n(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Je||r.flags&512&&xa(r)}catch(b){Be(r,r.return,b)}}if(r===e){P=null;break}if(n=r.sibling,n!==null){n.return=r.return,P=n;break}P=r.return}}function Fd(e){for(;P!==null;){var r=P;if(r===e){P=null;break}var n=r.sibling;if(n!==null){n.return=r.return,P=n;break}P=r.return}}function Dd(e){for(;P!==null;){var r=P;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{is(4,r)}catch(h){Be(r,n,h)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(h){Be(r,i,h)}}var a=r.return;try{xa(r)}catch(h){Be(r,a,h)}break;case 5:var d=r.return;try{xa(r)}catch(h){Be(r,d,h)}}}catch(h){Be(r,r.return,h)}if(r===e){P=null;break}var p=r.sibling;if(p!==null){p.return=r.return,P=p;break}P=r.return}}var Vh=Math.ceil,as=B.ReactCurrentDispatcher,ya=B.ReactCurrentOwner,Nr=B.ReactCurrentBatchConfig,ue=0,$e=null,Re=null,Ge=0,hr=0,ln=ot(0),Fe=0,ro=null,Tt=0,ls=0,ja=0,to=null,ir=null,Na=0,cn=1/0,Qr=null,cs=!1,ba=null,dt=null,ds=!1,ut=null,us=0,no=0,wa=null,ps=-1,hs=0;function tr(){return(ue&6)!==0?Le():ps!==-1?ps:ps=Le()}function pt(e){return(e.mode&1)===0?1:(ue&2)!==0&&Ge!==0?Ge&-Ge:Th.transition!==null?(hs===0&&(hs=Ll()),hs):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Ul(e.type)),e)}function Br(e,r,n,o){if(50<no)throw no=0,wa=null,Error(l(185));En(e,n,o),((ue&2)===0||e!==$e)&&(e===$e&&((ue&2)===0&&(ls|=n),Fe===4&&ht(e,Ge)),ar(e,o),n===1&&ue===0&&(r.mode&1)===0&&(cn=Le()+500,Wo&&it()))}function ar(e,r){var n=e.callbackNode;Tp(e,r);var o=bo(e,e===$e?Ge:0);if(o===0)n!==null&&Il(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&Il(n),r===1)e.tag===0?Eh(Ud.bind(null,e)):Ec(Ud.bind(null,e)),wh(function(){(ue&6)===0&&it()}),n=null;else{switch(Pl(o)){case 1:n=ti;break;case 4:n=Bl;break;case 16:n=vo;break;case 536870912:n=_l;break;default:n=vo}n=Xd(n,Wd.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Wd(e,r){if(ps=-1,hs=0,(ue&6)!==0)throw Error(l(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var o=bo(e,e===$e?Ge:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=ms(e,o);else{r=o;var i=ue;ue|=2;var a=$d();($e!==e||Ge!==r)&&(Qr=null,cn=Le()+500,It(e,r));do try{Yh();break}catch(p){Hd(e,p)}while(!0);Wi(),as.current=a,ue=i,Re!==null?r=0:($e=null,Ge=0,r=Fe)}if(r!==0){if(r===2&&(i=ni(e),i!==0&&(o=i,r=ka(e,i))),r===1)throw n=ro,It(e,0),ht(e,o),ar(e,Le()),n;if(r===6)ht(e,o);else{if(i=e.current.alternate,(o&30)===0&&!Qh(i)&&(r=ms(e,o),r===2&&(a=ni(e),a!==0&&(o=a,r=ka(e,a))),r===1))throw n=ro,It(e,0),ht(e,o),ar(e,Le()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(l(345));case 2:Bt(e,ir,Qr);break;case 3:if(ht(e,o),(o&130023424)===o&&(r=Na+500-Le(),10<r)){if(bo(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){tr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ii(Bt.bind(null,e,ir,Qr),r);break}Bt(e,ir,Qr);break;case 4:if(ht(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var d=31-Sr(o);a=1<<d,d=r[d],d>i&&(i=d),o&=~a}if(o=i,o=Le()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Vh(o/1960))-o,10<o){e.timeoutHandle=Ii(Bt.bind(null,e,ir,Qr),o);break}Bt(e,ir,Qr);break;case 5:Bt(e,ir,Qr);break;default:throw Error(l(329))}}}return ar(e,Le()),e.callbackNode===n?Wd.bind(null,e):null}function ka(e,r){var n=to;return e.current.memoizedState.isDehydrated&&(It(e,r).flags|=256),e=ms(e,r),e!==2&&(r=ir,ir=n,r!==null&&Sa(r)),e}function Sa(e){ir===null?ir=e:ir.push.apply(ir,e)}function Qh(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],a=i.getSnapshot;i=i.value;try{if(!Cr(a(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ht(e,r){for(r&=~ja,r&=~ls,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Sr(r),o=1<<n;e[n]=-1,r&=~o}}function Ud(e){if((ue&6)!==0)throw Error(l(327));dn();var r=bo(e,0);if((r&1)===0)return ar(e,Le()),null;var n=ms(e,r);if(e.tag!==0&&n===2){var o=ni(e);o!==0&&(r=o,n=ka(e,o))}if(n===1)throw n=ro,It(e,0),ht(e,r),ar(e,Le()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Bt(e,ir,Qr),ar(e,Le()),null}function Ca(e,r){var n=ue;ue|=1;try{return e(r)}finally{ue=n,ue===0&&(cn=Le()+500,Wo&&it())}}function zt(e){ut!==null&&ut.tag===0&&(ue&6)===0&&dn();var r=ue;ue|=1;var n=Nr.transition,o=xe;try{if(Nr.transition=null,xe=1,e)return e()}finally{xe=o,Nr.transition=n,ue=r,(ue&6)===0&&it()}}function Ea(){hr=ln.current,we(ln)}function It(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bh(n)),Re!==null)for(n=Re.return;n!==null;){var o=n;switch(Ai(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Fo();break;case 3:on(),we(nr),we(Xe),Ki();break;case 5:Gi(o);break;case 4:on();break;case 13:we(Te);break;case 19:we(Te);break;case 10:Ui(o.type._context);break;case 22:case 23:Ea()}n=n.return}if($e=e,Re=e=mt(e.current,null),Ge=hr=r,Fe=0,ro=null,ja=ls=Tt=0,ir=to=null,St!==null){for(r=0;r<St.length;r++)if(n=St[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,a=n.pending;if(a!==null){var d=a.next;a.next=i,o.next=d}n.pending=o}St=null}return e}function Hd(e,r){do{var n=Re;try{if(Wi(),qo.current=rs,Zo){for(var o=ze.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Zo=!1}if(Et=0,He=Oe=ze=null,Kn=!1,Xn=0,ya.current=null,n===null||n.return===null){Fe=1,ro=r,Re=null;break}e:{var a=e,d=n.return,p=n,h=r;if(r=Ge,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=p,S=w.tag;if((w.mode&1)===0&&(S===0||S===11||S===15)){var b=w.alternate;b?(w.updateQueue=b.updateQueue,w.memoizedState=b.memoizedState,w.lanes=b.lanes):(w.updateQueue=null,w.memoizedState=null)}var L=md(d);if(L!==null){L.flags&=-257,fd(L,d,p,a,r),L.mode&1&&hd(a,y,r),r=L,h=y;var R=r.updateQueue;if(R===null){var A=new Set;A.add(h),r.updateQueue=A}else R.add(h);break e}else{if((r&1)===0){hd(a,y,r),Ta();break e}h=Error(l(426))}}else if(Ce&&p.mode&1){var Pe=md(d);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),fd(Pe,d,p,a,r),Fi(sn(h,p));break e}}a=h=sn(h,p),Fe!==4&&(Fe=2),to===null?to=[a]:to.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var g=ud(a,h,r);Oc(a,g);break e;case 1:p=h;var m=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dt===null||!dt.has(v)))){a.flags|=65536,r&=-r,a.lanes|=r;var C=pd(a,p,r);Oc(a,C);break e}}a=a.return}while(a!==null)}Qd(n)}catch(O){r=O,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function $d(){var e=as.current;return as.current=rs,e===null?rs:e}function Ta(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),$e===null||(Tt&268435455)===0&&(ls&268435455)===0||ht($e,Ge)}function ms(e,r){var n=ue;ue|=2;var o=$d();($e!==e||Ge!==r)&&(Qr=null,It(e,r));do try{Gh();break}catch(i){Hd(e,i)}while(!0);if(Wi(),ue=n,as.current=o,Re!==null)throw Error(l(261));return $e=null,Ge=0,Fe}function Gh(){for(;Re!==null;)Vd(Re)}function Yh(){for(;Re!==null&&!yp();)Vd(Re)}function Vd(e){var r=Kd(e.alternate,e,hr);e.memoizedProps=e.pendingProps,r===null?Qd(e):Re=r,ya.current=null}function Qd(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=Dh(n,r,hr),n!==null){Re=n;return}}else{if(n=Wh(n,r),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Re=null;return}}if(r=r.sibling,r!==null){Re=r;return}Re=r=e}while(r!==null);Fe===0&&(Fe=5)}function Bt(e,r,n){var o=xe,i=Nr.transition;try{Nr.transition=null,xe=1,Kh(e,r,n,o)}finally{Nr.transition=i,xe=o}return null}function Kh(e,r,n,o){do dn();while(ut!==null);if((ue&6)!==0)throw Error(l(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(zp(e,a),e===$e&&(Re=$e=null,Ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ds||(ds=!0,Xd(vo,function(){return dn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Nr.transition,Nr.transition=null;var d=xe;xe=1;var p=ue;ue|=4,ya.current=null,Hh(e,n),Ad(n,e),fh(Ti),So=!!Ei,Ti=Ei=null,e.current=n,$h(n),jp(),ue=p,xe=d,Nr.transition=a}else e.current=n;if(ds&&(ds=!1,ut=e,us=i),a=e.pendingLanes,a===0&&(dt=null),wp(n.stateNode),ar(e,Le()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(cs)throw cs=!1,e=ba,ba=null,e;return(us&1)!==0&&e.tag!==0&&dn(),a=e.pendingLanes,(a&1)!==0?e===wa?no++:(no=0,wa=e):no=0,it(),null}function dn(){if(ut!==null){var e=Pl(us),r=Nr.transition,n=xe;try{if(Nr.transition=null,xe=16>e?16:e,ut===null)var o=!1;else{if(e=ut,ut=null,us=0,(ue&6)!==0)throw Error(l(331));var i=ue;for(ue|=4,P=e.current;P!==null;){var a=P,d=a.child;if((P.flags&16)!==0){var p=a.deletions;if(p!==null){for(var h=0;h<p.length;h++){var y=p[h];for(P=y;P!==null;){var w=P;switch(w.tag){case 0:case 11:case 15:eo(8,w,a)}var S=w.child;if(S!==null)S.return=w,P=S;else for(;P!==null;){w=P;var b=w.sibling,L=w.return;if(Bd(w),w===y){P=null;break}if(b!==null){b.return=L,P=b;break}P=L}}}var R=a.alternate;if(R!==null){var A=R.child;if(A!==null){R.child=null;do{var Pe=A.sibling;A.sibling=null,A=Pe}while(A!==null)}}P=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,P=d;else e:for(;P!==null;){if(a=P,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:eo(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,P=g;break e}P=a.return}}var m=e.current;for(P=m;P!==null;){d=P;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,P=v;else e:for(d=m;P!==null;){if(p=P,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:is(9,p)}}catch(O){Be(p,p.return,O)}if(p===d){P=null;break e}var C=p.sibling;if(C!==null){C.return=p.return,P=C;break e}P=p.return}}if(ue=i,it(),Pr&&typeof Pr.onPostCommitFiberRoot=="function")try{Pr.onPostCommitFiberRoot(yo,e)}catch{}o=!0}return o}finally{xe=n,Nr.transition=r}}return!1}function Gd(e,r,n){r=sn(n,r),r=ud(e,r,1),e=lt(e,r,1),r=tr(),e!==null&&(En(e,1,r),ar(e,r))}function Be(e,r,n){if(e.tag===3)Gd(e,e,n);else for(;r!==null;){if(r.tag===3){Gd(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(dt===null||!dt.has(o))){e=sn(n,e),e=pd(r,e,1),r=lt(r,e,1),e=tr(),r!==null&&(En(r,1,e),ar(r,e));break}}r=r.return}}function Xh(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Ge&n)===n&&(Fe===4||Fe===3&&(Ge&130023424)===Ge&&500>Le()-Na?It(e,0):ja|=n),ar(e,r)}function Yd(e,r){r===0&&((e.mode&1)===0?r=1:(r=No,No<<=1,(No&130023424)===0&&(No=4194304)));var n=tr();e=Hr(e,r),e!==null&&(En(e,r,n),ar(e,n))}function qh(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Yd(e,n)}function Zh(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(r),Yd(e,n)}var Kd;Kd=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||nr.current)sr=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return sr=!1,Fh(e,r,n);sr=(e.flags&131072)!==0}else sr=!1,Ce&&(r.flags&1048576)!==0&&Tc(r,Ho,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;os(e,r),e=r.pendingProps;var i=qt(r,Xe.current);nn(r,n),i=Zi(null,r,o,e,i,n);var a=Ji();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(o)?(a=!0,Do(r)):a=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vi(r),i.updater=ts,r.stateNode=i,i._reactInternals=r,sa(r,o,e,n),r=ca(null,r,o,!0,a,n)):(r.tag=0,Ce&&a&&Ri(r),rr(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(os(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=em(o),e=Tr(o,e),i){case 0:r=la(null,r,o,e,n);break e;case 1:r=Nd(null,r,o,e,n);break e;case 11:r=xd(null,r,o,e,n);break e;case 14:r=gd(null,r,o,Tr(o.type,e),n);break e}throw Error(l(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Tr(o,i),la(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Tr(o,i),Nd(e,r,o,i,n);case 3:e:{if(bd(r),e===null)throw Error(l(387));o=r.pendingProps,a=r.memoizedState,i=a.element,Mc(e,r),Ko(r,o,null,n);var d=r.memoizedState;if(o=d.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){i=sn(Error(l(423)),r),r=wd(e,r,o,n,i);break e}else if(o!==i){i=sn(Error(l(424)),r),r=wd(e,r,o,n,i);break e}else for(pr=nt(r.stateNode.containerInfo.firstChild),ur=r,Ce=!0,Er=null,n=Rc(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),o===i){r=Vr(e,r,n);break e}rr(e,r,o,n)}r=r.child}return r;case 5:return Dc(r),e===null&&Oi(r),o=r.type,i=r.pendingProps,a=e!==null?e.memoizedProps:null,d=i.children,zi(o,i)?d=null:a!==null&&zi(o,a)&&(r.flags|=32),jd(e,r),rr(e,r,d,n),r.child;case 6:return e===null&&Oi(r),null;case 13:return kd(e,r,n);case 4:return Qi(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=rn(r,null,o,n):rr(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Tr(o,i),xd(e,r,o,i,n);case 7:return rr(e,r,r.pendingProps,n),r.child;case 8:return rr(e,r,r.pendingProps.children,n),r.child;case 12:return rr(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,a=r.memoizedProps,d=i.value,Ne(Qo,o._currentValue),o._currentValue=d,a!==null)if(Cr(a.value,d)){if(a.children===i.children&&!nr.current){r=Vr(e,r,n);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var p=a.dependencies;if(p!==null){d=a.child;for(var h=p.firstContext;h!==null;){if(h.context===o){if(a.tag===1){h=$r(-1,n&-n),h.tag=2;var y=a.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),Hi(a.return,n,r),p.lanes|=n;break}h=h.next}}else if(a.tag===10)d=a.type===r.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(l(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),Hi(d,n,r),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===r){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}rr(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,nn(r,n),i=yr(i),o=o(i),r.flags|=1,rr(e,r,o,n),r.child;case 14:return o=r.type,i=Tr(o,r.pendingProps),i=Tr(o.type,i),gd(e,r,o,i,n);case 15:return vd(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Tr(o,i),os(e,r),r.tag=1,or(o)?(e=!0,Do(r)):e=!1,nn(r,n),cd(r,o,i),sa(r,o,i,n),ca(null,r,o,!0,e,n);case 19:return Cd(e,r,n);case 22:return yd(e,r,n)}throw Error(l(156,r.tag))};function Xd(e,r){return zl(e,r)}function Jh(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(e,r,n,o){return new Jh(e,r,n,o)}function za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function em(e){if(typeof e=="function")return za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ie)return 11;if(e===er)return 14}return 2}function mt(e,r){var n=e.alternate;return n===null?(n=br(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fs(e,r,n,o,i,a){var d=2;if(o=e,typeof e=="function")za(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case I:return _t(n.children,i,a,r);case M:d=8,i|=8;break;case ye:return e=br(12,n,r,i|2),e.elementType=ye,e.lanes=a,e;case Se:return e=br(13,n,r,i),e.elementType=Se,e.lanes=a,e;case Ye:return e=br(19,n,r,i),e.elementType=Ye,e.lanes=a,e;case je:return xs(n,i,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _e:d=10;break e;case se:d=9;break e;case Ie:d=11;break e;case er:d=14;break e;case Ke:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=br(d,n,r,i),r.elementType=e,r.type=o,r.lanes=a,r}function _t(e,r,n,o){return e=br(7,e,o,r),e.lanes=n,e}function xs(e,r,n,o){return e=br(22,e,o,r),e.elementType=je,e.lanes=n,e.stateNode={isHidden:!1},e}function Ia(e,r,n){return e=br(6,e,null,r),e.lanes=n,e}function Ba(e,r,n){return r=br(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function rm(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _a(e,r,n,o,i,a,d,p,h){return e=new rm(e,r,n,p,h),r===1?(r=1,a===!0&&(r|=8)):r=0,a=br(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vi(a),e}function tm(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function qd(e){if(!e)return st;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(or(n))return Sc(e,n,r)}return r}function Zd(e,r,n,o,i,a,d,p,h){return e=_a(n,o,!0,e,i,a,d,p,h),e.context=qd(null),n=e.current,o=tr(),i=pt(n),a=$r(o,i),a.callback=r!=null?r:null,lt(n,a,i),e.current.lanes=i,En(e,i,o),ar(e,o),e}function gs(e,r,n,o){var i=r.current,a=tr(),d=pt(i);return n=qd(n),r.context===null?r.context=n:r.pendingContext=n,r=$r(a,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=lt(i,r,d),e!==null&&(Br(e,i,d,a),Yo(e,i,d)),d}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function La(e,r){Jd(e,r),(e=e.alternate)&&Jd(e,r)}function nm(){return null}var eu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pa(e){this._internalRoot=e}ys.prototype.render=Pa.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));gs(e,r,null,null)},ys.prototype.unmount=Pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;zt(function(){gs(null,e,null,null)}),r[Fr]=null}};function ys(e){this._internalRoot=e}ys.prototype.unstable_scheduleHydration=function(e){if(e){var r=Ml();e={blockedOn:null,target:e,priority:r};for(var n=0;n<et.length&&r!==0&&r<et[n].priority;n++);et.splice(n,0,e),n===0&&Dl(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ru(){}function om(e,r,n,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var y=vs(d);a.call(y)}}var d=Zd(r,o,e,0,null,!1,!1,"",ru);return e._reactRootContainer=d,e[Fr]=d.current,Wn(e.nodeType===8?e.parentNode:e),zt(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var p=o;o=function(){var y=vs(h);p.call(y)}}var h=_a(e,0,!1,null,null,!1,!1,"",ru);return e._reactRootContainer=h,e[Fr]=h.current,Wn(e.nodeType===8?e.parentNode:e),zt(function(){gs(r,h,n,o)}),h}function Ns(e,r,n,o,i){var a=n._reactRootContainer;if(a){var d=a;if(typeof i=="function"){var p=i;i=function(){var h=vs(d);p.call(h)}}gs(r,d,e,i)}else d=om(n,r,e,i,o);return vs(d)}Rl=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Cn(r.pendingLanes);n!==0&&(si(r,n|1),ar(r,Le()),(ue&6)===0&&(cn=Le()+500,it()))}break;case 13:zt(function(){var o=Hr(e,1);if(o!==null){var i=tr();Br(o,e,1,i)}}),La(e,1)}},ii=function(e){if(e.tag===13){var r=Hr(e,134217728);if(r!==null){var n=tr();Br(r,e,134217728,n)}La(e,134217728)}},Al=function(e){if(e.tag===13){var r=pt(e),n=Hr(e,r);if(n!==null){var o=tr();Br(n,e,r,o)}La(e,r)}},Ml=function(){return xe},Ol=function(e,r){var n=xe;try{return xe=e,r()}finally{xe=n}},Zs=function(e,r,n){switch(r){case"input":if($s(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=Oo(o);if(!i)throw Error(l(90));yt(o),$s(o,i)}}}break;case"textarea":hl(e,n);break;case"select":r=n.value,r!=null&&Ft(e,!!n.multiple,r,!1)}},bl=Ca,wl=zt;var sm={usingClientEntryPoint:!1,Events:[$n,Kt,Oo,jl,Nl,Ca]},oo={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},im={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=El(e),e===null?null:e.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{yo=bs.inject(im),Pr=bs}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sm,lr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(r))throw Error(l(200));return tm(e,r,null,n)},lr.createRoot=function(e,r){if(!Ra(e))throw Error(l(299));var n=!1,o="",i=eu;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=_a(e,1,!1,null,null,n,!1,o,i),e[Fr]=r.current,Wn(e.nodeType===8?e.parentNode:e),new Pa(r)},lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=El(r),e=e===null?null:e.stateNode,e},lr.flushSync=function(e){return zt(e)},lr.hydrate=function(e,r,n){if(!js(r))throw Error(l(200));return Ns(null,e,r,!0,n)},lr.hydrateRoot=function(e,r,n){if(!Ra(e))throw Error(l(405));var o=n!=null&&n.hydratedSources||null,i=!1,a="",d=eu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),r=Zd(r,null,e,1,n!=null?n:null,i,!1,a,d),e[Fr]=r.current,Wn(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new ys(r)},lr.render=function(e,r,n){if(!js(r))throw Error(l(200));return Ns(null,e,r,!1,n)},lr.unmountComponentAtNode=function(e){if(!js(e))throw Error(l(40));return e._reactRootContainer?(zt(function(){Ns(null,null,e,!1,function(){e._reactRootContainer=null,e[Fr]=null})}),!0):!1},lr.unstable_batchedUpdates=Ca,lr.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!js(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Ns(e,r,n,!1,o)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var cu;function fm(){if(cu)return Oa.exports;cu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Oa.exports=mm(),Oa.exports}var du;function xm(){if(du)return ws;du=1;var s=fm();return ws.createRoot=s.createRoot,ws.hydrateRoot=s.hydrateRoot,ws}var gm=xm(),ge=el();const fr=lm(ge);var Lu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},uu=fr.createContext&&fr.createContext(Lu),vm=["attr","size","title"];function ym(s,c){if(s==null)return{};var l=jm(s,c),u,f;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(s);for(f=0;f<j.length;f++)u=j[f],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(s,u)&&(l[u]=s[u])}return l}function jm(s,c){if(s==null)return{};var l={};for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){if(c.indexOf(u)>=0)continue;l[u]=s[u]}return l}function zs(){return zs=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}return s},zs.apply(this,arguments)}function pu(s,c){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);c&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(s,f).enumerable})),l.push.apply(l,u)}return l}function Is(s){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?pu(Object(l),!0).forEach(function(u){Nm(s,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):pu(Object(l)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(l,u))})}return s}function Nm(s,c,l){return c=bm(c),c in s?Object.defineProperty(s,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[c]=l,s}function bm(s){var c=wm(s,"string");return typeof c=="symbol"?c:c+""}function wm(s,c){if(typeof s!="object"||!s)return s;var l=s[Symbol.toPrimitive];if(l!==void 0){var u=l.call(s,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(s)}function Pu(s){return s&&s.map((c,l)=>fr.createElement(c.tag,Is({key:l},c.attr),Pu(c.child)))}function V(s){return c=>fr.createElement(km,zs({attr:Is({},s.attr)},c),Pu(s.child))}function km(s){var c=l=>{var{attr:u,size:f,title:j}=s,k=ym(s,vm),T=f||l.size||"1em",E;return l.className&&(E=l.className),s.className&&(E=(E?E+" ":"")+s.className),fr.createElement("svg",zs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,k,{className:E,style:Is(Is({color:s.color||l.color},l.style),s.style),height:T,width:T,xmlns:"http://www.w3.org/2000/svg"}),j&&fr.createElement("title",null,j),s.children)};return uu!==void 0?fr.createElement(uu.Consumer,null,l=>c(l)):c(Lu)}function Sm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(s)}function pn(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function Cm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"21 8 21 21 3 21 3 8"},child:[]},{tag:"rect",attr:{x:"1",y:"3",width:"22",height:"5"},child:[]},{tag:"line",attr:{x1:"10",y1:"12",x2:"14",y2:"12"},child:[]}]})(s)}function Em(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 16 16 12 12 8"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(s)}function Tm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(s)}function zm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(s)}function Mt(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Im(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(s)}function We(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(s)}function Ue(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(s)}function Ru(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(s)}function Ae(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(s)}function Au(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(s)}function Mu(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(s)}function Bm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(s)}function Kr(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(s)}function _m(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(s)}function Lm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"6",r:"2"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"circle",attr:{cx:"12",cy:"18",r:"2"},child:[]}]})(s)}function Ou(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(s)}function Rs(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(s)}function Pm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(s)}function As(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(s)}function Rm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(s)}function hu(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(s)}function Am(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(s)}function Bs(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(s)}function Mm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function Om(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(s)}function xr(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(s)}function Fu(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(s)}function rl(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(s)}function Ms(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(s)}function Fm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function Dm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Wm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(s)}function hn(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(s)}function vt(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(s)}function ho(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(s)}function Um(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 4 15 12 5 20 5 4"},child:[]},{tag:"line",attr:{x1:"19",y1:"5",x2:"19",y2:"19"},child:[]}]})(s)}function tl(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(s)}function Hm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function $m(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(s)}function Vm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(s)}function Du(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(s)}function Qm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(s)}function Gm(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(s)}function Wu(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"},child:[]}]})(s)}function vn(s){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(s)}var cr=function(){return cr=Object.assign||function(c){for(var l,u=1,f=arguments.length;u<f;u++){l=arguments[u];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(c[j]=l[j])}return c},cr.apply(this,arguments)};function _s(s,c,l){if(l||arguments.length===2)for(var u=0,f=c.length,j;u<f;u++)(j||!(u in c))&&(j||(j=Array.prototype.slice.call(c,0,u)),j[u]=c[u]);return s.concat(j||Array.prototype.slice.call(c))}var ke="-ms-",lo="-moz-",he="-webkit-",Uu="comm",Os="rule",nl="decl",Ym="@import",Km="@namespace",Hu="@keyframes",Xm="@layer",$u=Math.abs,ol=String.fromCharCode,Ga=Object.assign;function qm(s,c){return De(s,0)^45?(((c<<2^De(s,0))<<2^De(s,1))<<2^De(s,2))<<2^De(s,3):0}function Vu(s){return s.trim()}function Gr(s,c){return(s=c.exec(s))?s[0]:s}function re(s,c,l){return s.replace(c,l)}function ks(s,c,l){return s.indexOf(c,l)}function De(s,c){return s.charCodeAt(c)|0}function Ot(s,c,l){return s.slice(c,l)}function _r(s){return s.length}function Qu(s){return s.length}function io(s,c){return c.push(s),s}function Zm(s,c){return s.map(c).join("")}function mu(s,c){return s.filter(function(l){return!Gr(l,c)})}var Fs=1,mn=1,Gu=0,wr=0,Me=0,yn="";function Ds(s,c,l,u,f,j,k,T){return{value:s,root:c,parent:l,type:u,props:f,children:j,line:Fs,column:mn,length:k,return:"",siblings:T}}function xt(s,c){return Ga(Ds("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function un(s){for(;s.root;)s=xt(s.root,{children:[s]});io(s,s.siblings)}function Jm(){return Me}function ef(){return Me=wr>0?De(yn,--wr):0,mn--,Me===10&&(mn=1,Fs--),Me}function Lr(){return Me=wr<Gu?De(yn,wr++):0,mn++,Me===10&&(mn=1,Fs++),Me}function gt(){return De(yn,wr)}function Ss(){return wr}function Ws(s,c){return Ot(yn,s,c)}function uo(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rf(s){return Fs=mn=1,Gu=_r(yn=s),wr=0,[]}function tf(s){return yn="",s}function Wa(s){return Vu(Ws(wr-1,Ya(s===91?s+2:s===40?s+1:s)))}function nf(s){for(;(Me=gt())&&Me<33;)Lr();return uo(s)>2||uo(Me)>3?"":" "}function of(s,c){for(;--c&&Lr()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return Ws(s,Ss()+(c<6&&gt()==32&&Lr()==32))}function Ya(s){for(;Lr();)switch(Me){case s:return wr;case 34:case 39:s!==34&&s!==39&&Ya(Me);break;case 40:s===41&&Ya(s);break;case 92:Lr();break}return wr}function sf(s,c){for(;Lr()&&s+Me!==57;)if(s+Me===84&&gt()===47)break;return"/*"+Ws(c,wr-1)+"*"+ol(s===47?s:Lr())}function af(s){for(;!uo(gt());)Lr();return Ws(s,wr)}function lf(s){return tf(Cs("",null,null,null,[""],s=rf(s),0,[0],s))}function Cs(s,c,l,u,f,j,k,T,E){for(var K=0,Q=0,D=k,Z=0,ae=0,X=0,W=1,G=1,me=1,ce=0,te="",B=f,q=j,U=u,I=te;G;)switch(X=ce,ce=Lr()){case 40:if(X!=108&&De(I,D-1)==58){ks(I+=re(Wa(ce),"&","&\f"),"&\f",$u(K?T[K-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:I+=Wa(ce);break;case 9:case 10:case 13:case 32:I+=nf(X);break;case 92:I+=of(Ss()-1,7);continue;case 47:switch(gt()){case 42:case 47:io(cf(sf(Lr(),Ss()),c,l,E),E),(uo(X||1)==5||uo(gt()||1)==5)&&_r(I)&&Ot(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*W:T[K++]=_r(I)*me;case 125*W:case 59:case 0:switch(ce){case 0:case 125:G=0;case 59+Q:me==-1&&(I=re(I,/\f/g,"")),ae>0&&(_r(I)-D||W===0&&X===47)&&io(ae>32?xu(I+";",u,l,D-1,E):xu(re(I," ","")+";",u,l,D-2,E),E);break;case 59:I+=";";default:if(io(U=fu(I,c,l,K,Q,f,T,te,B=[],q=[],D,j),j),ce===123)if(Q===0)Cs(I,c,U,U,B,j,D,T,q);else{switch(Z){case 99:if(De(I,3)===110)break;case 108:if(De(I,2)===97)break;default:Q=0;case 100:case 109:case 115:}Q?Cs(s,U,U,u&&io(fu(s,U,U,0,0,f,T,te,f,B=[],D,q),q),f,q,D,T,u?B:q):Cs(I,U,U,U,[""],q,0,T,q)}}K=Q=ae=0,W=me=1,te=I="",D=k;break;case 58:D=1+_r(I),ae=X;default:if(W<1){if(ce==123)--W;else if(ce==125&&W++==0&&ef()==125)continue}switch(I+=ol(ce),ce*W){case 38:me=Q>0?1:(I+="\f",-1);break;case 44:T[K++]=(_r(I)-1)*me,me=1;break;case 64:gt()===45&&(I+=Wa(Lr())),Z=gt(),Q=D=_r(te=I+=af(Ss())),ce++;break;case 45:X===45&&_r(I)==2&&(W=0)}}return j}function fu(s,c,l,u,f,j,k,T,E,K,Q,D){for(var Z=f-1,ae=f===0?j:[""],X=Qu(ae),W=0,G=0,me=0;W<u;++W)for(var ce=0,te=Ot(s,Z+1,Z=$u(G=k[W])),B=s;ce<X;++ce)(B=Vu(G>0?ae[ce]+" "+te:re(te,/&\f/g,ae[ce])))&&(E[me++]=B);return Ds(s,c,l,f===0?Os:T,E,K,Q,D)}function cf(s,c,l,u){return Ds(s,c,l,Uu,ol(Jm()),Ot(s,2,-2),0,u)}function xu(s,c,l,u,f){return Ds(s,c,l,nl,Ot(s,0,u),Ot(s,u+1,-1),u,f)}function Yu(s,c,l){switch(qm(s,c)){case 5103:return he+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return he+s+s;case 4855:return he+s.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+s;case 4789:return lo+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return he+s+lo+s+ke+s+s;case 5936:switch(De(s,c+11)){case 114:return he+s+ke+re(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return he+s+ke+re(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return he+s+ke+re(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return he+s+ke+s+s;case 6165:return he+s+ke+"flex-"+s+s;case 5187:return he+s+re(s,/(\w+).+(:[^]+)/,he+"box-$1$2"+ke+"flex-$1$2")+s;case 5443:return he+s+ke+"flex-item-"+re(s,/flex-|-self/g,"")+(Gr(s,/flex-|baseline/)?"":ke+"grid-row-"+re(s,/flex-|-self/g,""))+s;case 4675:return he+s+ke+"flex-line-pack"+re(s,/align-content|flex-|-self/g,"")+s;case 5548:return he+s+ke+re(s,"shrink","negative")+s;case 5292:return he+s+ke+re(s,"basis","preferred-size")+s;case 6060:return he+"box-"+re(s,"-grow","")+he+s+ke+re(s,"grow","positive")+s;case 4554:return he+re(s,/([^-])(transform)/g,"$1"+he+"$2")+s;case 6187:return re(re(re(s,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),s,"")+s;case 5495:case 3959:return re(s,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return re(re(s,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+he+s+s;case 4200:if(!Gr(s,/flex-|baseline/))return ke+"grid-column-align"+Ot(s,c)+s;break;case 2592:case 3360:return ke+re(s,"template-","")+s;case 4384:case 3616:return l&&l.some(function(u,f){return c=f,Gr(u.props,/grid-\w+-end/)})?~ks(s+(l=l[c].value),"span",0)?s:ke+re(s,"-start","")+s+ke+"grid-row-span:"+(~ks(l,"span",0)?Gr(l,/\d+/):+Gr(l,/\d+/)-+Gr(s,/\d+/))+";":ke+re(s,"-start","")+s;case 4896:case 4128:return l&&l.some(function(u){return Gr(u.props,/grid-\w+-start/)})?s:ke+re(re(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return re(s,/(.+)-inline(.+)/,he+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_r(s)-1-c>6)switch(De(s,c+1)){case 109:if(De(s,c+4)!==45)break;case 102:return re(s,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+lo+(De(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~ks(s,"stretch",0)?Yu(re(s,"stretch","fill-available"),c,l)+s:s}break;case 5152:case 5920:return re(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,f,j,k,T,E,K){return ke+f+":"+j+K+(k?ke+f+"-span:"+(T?E:+E-+j)+K:"")+s});case 4949:if(De(s,c+6)===121)return re(s,":",":"+he)+s;break;case 6444:switch(De(s,De(s,14)===45?18:11)){case 120:return re(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(De(s,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+ke+"$2box$3")+s;case 100:return re(s,":",":"+ke)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(s,"scroll-","scroll-snap-")+s}return s}function Ls(s,c){for(var l="",u=0;u<s.length;u++)l+=c(s[u],u,s,c)||"";return l}function df(s,c,l,u){switch(s.type){case Xm:if(s.children.length)break;case Ym:case Km:case nl:return s.return=s.return||s.value;case Uu:return"";case Hu:return s.return=s.value+"{"+Ls(s.children,u)+"}";case Os:if(!_r(s.value=s.props.join(",")))return""}return _r(l=Ls(s.children,u))?s.return=s.value+"{"+l+"}":""}function uf(s){var c=Qu(s);return function(l,u,f,j){for(var k="",T=0;T<c;T++)k+=s[T](l,u,f,j)||"";return k}}function pf(s){return function(c){c.root||(c=c.return)&&s(c)}}function hf(s,c,l,u){if(s.length>-1&&!s.return)switch(s.type){case nl:s.return=Yu(s.value,s.length,l);return;case Hu:return Ls([xt(s,{value:re(s.value,"@","@"+he)})],u);case Os:if(s.length)return Zm(l=s.props,function(f){switch(Gr(f,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":un(xt(s,{props:[re(f,/:(read-\w+)/,":"+lo+"$1")]})),un(xt(s,{props:[f]})),Ga(s,{props:mu(l,u)});break;case"::placeholder":un(xt(s,{props:[re(f,/:(plac\w+)/,":"+he+"input-$1")]})),un(xt(s,{props:[re(f,/:(plac\w+)/,":"+lo+"$1")]})),un(xt(s,{props:[re(f,/:(plac\w+)/,ke+"input-$1")]})),un(xt(s,{props:[f]})),Ga(s,{props:mu(l,u)});break}return""})}}var mf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mr={},fn=typeof process!="undefined"&&mr!==void 0&&(mr.REACT_APP_SC_ATTR||mr.SC_ATTR)||"data-styled",Ku="active",Xu="data-styled-version",Us="6.3.10",sl=`/*!sc*/
`,co=typeof window!="undefined"&&typeof document!="undefined",ff=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&mr!==void 0&&mr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mr.REACT_APP_SC_DISABLE_SPEEDY!==""?mr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&mr!==void 0&&mr.SC_DISABLE_SPEEDY!==void 0&&mr.SC_DISABLE_SPEEDY!==""&&mr.SC_DISABLE_SPEEDY!=="false"&&mr.SC_DISABLE_SPEEDY);function mo(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Es=new Map,Ps=new Map,Ts=1,ao=function(s){if(Es.has(s))return Es.get(s);for(;Ps.has(Ts);)Ts++;var c=Ts++;return Es.set(s,c),Ps.set(c,s),c},xf=function(s,c){Ts=c+1,Es.set(s,c),Ps.set(c,s)},il=Object.freeze([]),xn=Object.freeze({});function gf(s,c,l){return l===void 0&&(l=xn),s.theme!==l.theme&&s.theme||c||l.theme}var qu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),vf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yf=/(^-|-$)/g;function gu(s){return s.replace(vf,"-").replace(yf,"")}var jf=/(a)(d)/gi,vu=function(s){return String.fromCharCode(s+(s>25?39:97))};function Ka(s){var c,l="";for(c=Math.abs(s);c>52;c=c/52|0)l=vu(c%52)+l;return(vu(c%52)+l).replace(jf,"$1-$2")}var Ua,Lt=function(s,c){for(var l=c.length;l;)s=33*s^c.charCodeAt(--l);return s},Zu=function(s){return Lt(5381,s)};function Nf(s){return Ka(Zu(s)>>>0)}function bf(s){return s.displayName||s.name||"Component"}function Ha(s){return typeof s=="string"&&!0}var Ju=typeof Symbol=="function"&&Symbol.for,ep=Ju?Symbol.for("react.memo"):60115,wf=Ju?Symbol.for("react.forward_ref"):60112,kf={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sf={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cf=((Ua={})[wf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ua[ep]=rp,Ua);function yu(s){return("type"in(c=s)&&c.type.$$typeof)===ep?rp:"$$typeof"in s?Cf[s.$$typeof]:kf;var c}var Ef=Object.defineProperty,Tf=Object.getOwnPropertyNames,ju=Object.getOwnPropertySymbols,zf=Object.getOwnPropertyDescriptor,If=Object.getPrototypeOf,Nu=Object.prototype;function tp(s,c,l){if(typeof c!="string"){if(Nu){var u=If(c);u&&u!==Nu&&tp(s,u,l)}var f=Tf(c);ju&&(f=f.concat(ju(c)));for(var j=yu(s),k=yu(c),T=0;T<f.length;++T){var E=f[T];if(!(E in Sf||l&&l[E]||k&&E in k||j&&E in j)){var K=zf(c,E);try{Ef(s,E,K)}catch{}}}}return s}function gn(s){return typeof s=="function"}function al(s){return typeof s=="object"&&"styledComponentId"in s}function Rt(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function bu(s,c){return s.join("")}function po(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Xa(s,c,l){if(l===void 0&&(l=!1),!l&&!po(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)s[u]=Xa(s[u],c[u]);else if(po(c))for(var u in c)s[u]=Xa(s[u],c[u]);return s}function ll(s,c){Object.defineProperty(s,"toString",{value:c})}var Bf=(function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return s.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var u=this._cGroup;u<c;u++)l+=this.groupSizes[u];else for(u=this._cGroup-1;u>=c;u--)l-=this.groupSizes[u];return this._cGroup=c,this._cIndex=l,l},s.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var u=this.groupSizes,f=u.length,j=f;c>=j;)if((j<<=1)<0)throw mo(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(u),this.length=j;for(var k=f;k<j;k++)this.groupSizes[k]=0}for(var T=this.indexOfGroup(c+1),E=0,K=(k=0,l.length);k<K;k++)this.tag.insertRule(T,l[k])&&(this.groupSizes[c]++,T++,E++);E>0&&this._cGroup>c&&(this._cIndex+=E)},s.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],u=this.indexOfGroup(c),f=u+l;this.groupSizes[c]=0;for(var j=u;j<f;j++)this.tag.deleteRule(u);l>0&&this._cGroup>c&&(this._cIndex-=l)}},s.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var u=this.groupSizes[c],f=this.indexOfGroup(c),j=f+u,k=f;k<j;k++)l+=this.tag.getRule(k)+sl;return l},s})(),_f="style[".concat(fn,"][").concat(Xu,'="').concat(Us,'"]'),Lf=new RegExp("^".concat(fn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wu=function(s){return typeof ShadowRoot!="undefined"&&s instanceof ShadowRoot||"host"in s&&s.nodeType===11},qa=function(s){if(!s)return document;if(wu(s))return s;if("getRootNode"in s){var c=s.getRootNode();if(wu(c))return c}return document},Pf=function(s,c,l){for(var u,f=l.split(","),j=0,k=f.length;j<k;j++)(u=f[j])&&s.registerName(c,u)},Rf=function(s,c){for(var l,u=((l=c.textContent)!==null&&l!==void 0?l:"").split(sl),f=[],j=0,k=u.length;j<k;j++){var T=u[j].trim();if(T){var E=T.match(Lf);if(E){var K=0|parseInt(E[1],10),Q=E[2];K!==0&&(xf(Q,K),Pf(s,Q,E[3]),s.getTag().insertRules(K,f)),f.length=0}else f.push(T)}}},$a=function(s){for(var c=qa(s.options.target).querySelectorAll(_f),l=0,u=c.length;l<u;l++){var f=c[l];f&&f.getAttribute(fn)!==Ku&&(Rf(s,f),f.parentNode&&f.parentNode.removeChild(f))}};function Af(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var np=function(s){var c=document.head,l=s||c,u=document.createElement("style"),f=(function(T){var E=Array.from(T.querySelectorAll("style[".concat(fn,"]")));return E[E.length-1]})(l),j=f!==void 0?f.nextSibling:null;u.setAttribute(fn,Ku),u.setAttribute(Xu,Us);var k=Af();return k&&u.setAttribute("nonce",k),l.insertBefore(u,j),u},Mf=(function(){function s(c){this.element=np(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var u;if(l.sheet)return l.sheet;for(var f=(u=l.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets,j=0,k=f.length;j<k;j++){var T=f[j];if(T.ownerNode===l)return T}throw mo(17)})(this.element),this.length=0}return s.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},s})(),Of=(function(){function s(c){this.element=np(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s})(),Ff=(function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s})(),ku=co,Df={isServer:!co,useCSSOMInjection:!ff},op=(function(){function s(c,l,u){c===void 0&&(c=xn),l===void 0&&(l={});var f=this;this.options=cr(cr({},Df),c),this.gs=l,this.names=new Map(u),this.server=!!c.isServer,!this.server&&co&&ku&&(ku=!1,$a(this)),ll(this,function(){return(function(j){for(var k=j.getTag(),T=k.length,E="",K=function(D){var Z=(function(me){return Ps.get(me)})(D);if(Z===void 0)return"continue";var ae=j.names.get(Z);if(ae===void 0||!ae.size)return"continue";var X=k.getGroup(D);if(X.length===0)return"continue";var W=fn+".g"+D+'[id="'+Z+'"]',G="";ae.forEach(function(me){me.length>0&&(G+=me+",")}),E+=X+W+'{content:"'+G+'"}'+sl},Q=0;Q<T;Q++)K(Q);return E})(f)})}return s.registerId=function(c){return ao(c)},s.prototype.rehydrate=function(){!this.server&&co&&$a(this)},s.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var u=new s(cr(cr({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&co&&c.target!==this.options.target&&qa(this.options.target)!==qa(c.target)&&$a(u),u},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var u=l.useCSSOMInjection,f=l.target;return l.isServer?new Ff(f):u?new Mf(f):new Of(f)})(this.options),new Bf(c)));var c},s.prototype.hasNameForId=function(c,l){var u,f;return(f=(u=this.names.get(c))===null||u===void 0?void 0:u.has(l))!==null&&f!==void 0&&f},s.prototype.registerName=function(c,l){ao(c);var u=this.names.get(c);u?u.add(l):this.names.set(c,new Set([l]))},s.prototype.insertRules=function(c,l,u){this.registerName(c,l),this.getTag().insertRules(ao(c),u)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(ao(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s})(),Wf=/&/g,Yr=47,Pt=42;function Su(s){if(s.indexOf("}")===-1)return!1;for(var c=s.length,l=0,u=0,f=!1,j=0;j<c;j++){var k=s.charCodeAt(j);if(u!==0||f||k!==Yr||s.charCodeAt(j+1)!==Pt)if(f)k===Pt&&s.charCodeAt(j+1)===Yr&&(f=!1,j++);else if(k!==34&&k!==39||j!==0&&s.charCodeAt(j-1)===92){if(u===0){if(k===123)l++;else if(k===125&&--l<0)return!0}}else u===0?u=k:u===k&&(u=0);else f=!0,j++}return l!==0||u!==0}function sp(s,c){return s.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=sp(l.children,c)),l})}function Uf(s){var c,l,u,f=xn,j=f.options,k=j===void 0?xn:j,T=f.plugins,E=T===void 0?il:T,K=function(X,W,G){return G.startsWith(l)&&G.endsWith(l)&&G.replaceAll(l,"").length>0?".".concat(c):X},Q=E.slice();Q.push(function(X){X.type===Os&&X.value.includes("&")&&(u||(u=new RegExp("\\".concat(l,"\\b"),"g")),X.props[0]=X.props[0].replace(Wf,l).replace(u,K))}),k.prefix&&Q.push(hf),Q.push(df);var D=[],Z=uf(Q.concat(pf(function(X){return D.push(X)}))),ae=function(X,W,G,me){W===void 0&&(W=""),G===void 0&&(G=""),me===void 0&&(me="&"),c=me,l=W,u=void 0;var ce=(function(B){if(!Su(B))return B;for(var q=B.length,U="",I=0,M=0,ye=0,_e=!1,se=0;se<q;se++){var Ie=B.charCodeAt(se);if(ye!==0||_e||Ie!==Yr||B.charCodeAt(se+1)!==Pt)if(_e)Ie===Pt&&B.charCodeAt(se+1)===Yr&&(_e=!1,se++);else if(Ie!==34&&Ie!==39||se!==0&&B.charCodeAt(se-1)===92){if(ye===0)if(Ie===123)M++;else if(Ie===125){if(--M<0){for(var Se=se+1;Se<q;){var Ye=B.charCodeAt(Se);if(Ye===59||Ye===10)break;Se++}Se<q&&B.charCodeAt(Se)===59&&Se++,M=0,se=Se-1,I=Se;continue}M===0&&(U+=B.substring(I,se+1),I=se+1)}else Ie===59&&M===0&&(U+=B.substring(I,se+1),I=se+1)}else ye===0?ye=Ie:ye===Ie&&(ye=0);else _e=!0,se++}if(I<q){var er=B.substring(I);Su(er)||(U+=er)}return U})((function(B){if(B.indexOf("//")===-1)return B;for(var q=B.length,U=[],I=0,M=0,ye=0,_e=0;M<q;){var se=B.charCodeAt(M);if(se!==34&&se!==39||M!==0&&B.charCodeAt(M-1)===92)if(ye===0)if(se===Yr&&M+1<q&&B.charCodeAt(M+1)===Pt){for(M+=2;M+1<q&&(B.charCodeAt(M)!==Pt||B.charCodeAt(M+1)!==Yr);)M++;M+=2}else if(se===40&&M>=3&&(32|B.charCodeAt(M-1))==108&&(32|B.charCodeAt(M-2))==114&&(32|B.charCodeAt(M-3))==117)_e=1,M++;else if(_e>0)se===41?_e--:se===40&&_e++,M++;else if(se===Pt&&M+1<q&&B.charCodeAt(M+1)===Yr)M>I&&U.push(B.substring(I,M)),I=M+=2;else if(se===Yr&&M+1<q&&B.charCodeAt(M+1)===Yr){for(M>I&&U.push(B.substring(I,M));M<q&&B.charCodeAt(M)!==10;)M++;I=M}else M++;else M++;else ye===0?ye=se:ye===se&&(ye=0),M++}return I===0?B:(I<q&&U.push(B.substring(I)),U.join(""))})(X)),te=lf(G||W?"".concat(G," ").concat(W," { ").concat(ce," }"):ce);return k.namespace&&(te=sp(te,k.namespace)),D=[],Ls(te,Z),D};return ae.hash=E.length?E.reduce(function(X,W){return W.name||mo(15),Lt(X,W.name)},5381).toString():"",ae}var Hf=new op,Za=Uf(),ip=fr.createContext({shouldForwardProp:void 0,styleSheet:Hf,stylis:Za});ip.Consumer;fr.createContext(void 0);function Cu(){return fr.useContext(ip)}var $f=(function(){function s(c,l){var u=this;this.inject=function(f,j){j===void 0&&(j=Za);var k=u.name+j.hash;f.hasNameForId(u.id,k)||f.insertRules(u.id,k,j(u.rules,k,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,ll(this,function(){throw mo(12,String(u.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=Za),this.name+c.hash},s})();function Vf(s,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in mf||s.startsWith("--")?String(c).trim():"".concat(c,"px")}var Qf=function(s){return s>="A"&&s<="Z"};function Eu(s){for(var c="",l=0;l<s.length;l++){var u=s[l];if(l===1&&u==="-"&&s[0]==="-")return s;Qf(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var ap=function(s){return s==null||s===!1||s===""},lp=function(s){var c=[];for(var l in s){var u=s[l];s.hasOwnProperty(l)&&!ap(u)&&(Array.isArray(u)&&u.isCss||gn(u)?c.push("".concat(Eu(l),":"),u,";"):po(u)?c.push.apply(c,_s(_s(["".concat(l," {")],lp(u),!1),["}"],!1)):c.push("".concat(Eu(l),": ").concat(Vf(l,u),";")))}return c};function At(s,c,l,u,f){if(f===void 0&&(f=[]),typeof s=="string")return s&&f.push(s),f;if(ap(s))return f;if(al(s))return f.push(".".concat(s.styledComponentId)),f;if(gn(s)){if(!gn(k=s)||k.prototype&&k.prototype.isReactComponent||!c)return f.push(s),f;var j=s(c);return At(j,c,l,u,f)}var k;if(s instanceof $f)return l?(s.inject(l,u),f.push(s.getName(u))):f.push(s),f;if(po(s)){for(var T=lp(s),E=0;E<T.length;E++)f.push(T[E]);return f}if(!Array.isArray(s))return f.push(s.toString()),f;for(E=0;E<s.length;E++)At(s[E],c,l,u,f);return f}function Gf(s){for(var c=0;c<s.length;c+=1){var l=s[c];if(gn(l)&&!al(l))return!1}return!0}var Yf=Zu(Us),Kf=(function(){function s(c,l,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Gf(c),this.componentId=l,this.baseHash=Lt(Yf,l),this.baseStyle=u,op.registerId(l)}return s.prototype.generateAndInjectStyles=function(c,l,u){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))f=Rt(f,this.staticRulesId);else{var j=bu(At(this.rules,c,l,u)),k=Ka(Lt(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,k)){var T=u(j,".".concat(k),void 0,this.componentId);l.insertRules(this.componentId,k,T)}f=Rt(f,k),this.staticRulesId=k}else{for(var E=Lt(this.baseHash,u.hash),K="",Q=0;Q<this.rules.length;Q++){var D=this.rules[Q];if(typeof D=="string")K+=D;else if(D){var Z=bu(At(D,c,l,u));E=Lt(Lt(E,String(Q)),Z),K+=Z}}if(K){var ae=Ka(E>>>0);if(!l.hasNameForId(this.componentId,ae)){var X=u(K,".".concat(ae),void 0,this.componentId);l.insertRules(this.componentId,ae,X)}f=Rt(f,ae)}}return{className:f,css:typeof window=="undefined"?l.getTag().getGroup(ao(this.componentId)):""}},s})(),cp=fr.createContext(void 0);cp.Consumer;var Va={};function Xf(s,c,l){var u=al(s),f=s,j=!Ha(s),k=c.attrs,T=k===void 0?il:k,E=c.componentId,K=E===void 0?(function(B,q){var U=typeof B!="string"?"sc":gu(B);Va[U]=(Va[U]||0)+1;var I="".concat(U,"-").concat(Nf(Us+U+Va[U]));return q?"".concat(q,"-").concat(I):I})(c.displayName,c.parentComponentId):E,Q=c.displayName,D=Q===void 0?(function(B){return Ha(B)?"styled.".concat(B):"Styled(".concat(bf(B),")")})(s):Q,Z=c.displayName&&c.componentId?"".concat(gu(c.displayName),"-").concat(c.componentId):c.componentId||K,ae=u&&f.attrs?f.attrs.concat(T).filter(Boolean):T,X=c.shouldForwardProp;if(u&&f.shouldForwardProp){var W=f.shouldForwardProp;if(c.shouldForwardProp){var G=c.shouldForwardProp;X=function(B,q){return W(B,q)&&G(B,q)}}else X=W}var me=new Kf(l,Z,u?f.componentStyle:void 0);function ce(B,q){return(function(U,I,M){var ye=U.attrs,_e=U.componentStyle,se=U.defaultProps,Ie=U.foldedComponentIds,Se=U.styledComponentId,Ye=U.target,er=fr.useContext(cp),Ke=Cu(),je=U.shouldForwardProp||Ke.shouldForwardProp,z=gf(I,er,se)||xn,F=(function(oe,de,le){for(var fe,Ee=cr(cr({},de),{className:void 0,theme:le}),Xr=0;Xr<oe.length;Xr+=1){var yt=gn(fe=oe[Xr])?fe(Ee):fe;for(var kr in yt)kr==="className"?Ee.className=Rt(Ee.className,yt[kr]):kr==="style"?Ee.style=cr(cr({},Ee.style),yt[kr]):Ee[kr]=yt[kr]}return"className"in de&&typeof de.className=="string"&&(Ee.className=Rt(Ee.className,de.className)),Ee})(ye,I,z),_=F.as||Ye,x={};for(var N in F)F[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&F.theme===z||(N==="forwardedAs"?x.as=F.forwardedAs:je&&!je(N,_)||(x[N]=F[N]));var J=(function(oe,de){var le=Cu(),fe=oe.generateAndInjectStyles(de,le.styleSheet,le.stylis);return fe})(_e,F),ee=J.className,ie=Rt(Ie,Se);return ee&&(ie+=" "+ee),F.className&&(ie+=" "+F.className),x[Ha(_)&&!qu.has(_)?"class":"className"]=ie,M&&(x.ref=M),ge.createElement(_,x)})(te,B,q)}ce.displayName=D;var te=fr.forwardRef(ce);return te.attrs=ae,te.componentStyle=me,te.displayName=D,te.shouldForwardProp=X,te.foldedComponentIds=u?Rt(f.foldedComponentIds,f.styledComponentId):"",te.styledComponentId=Z,te.target=u?f.target:s,Object.defineProperty(te,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(B){this._foldedDefaultProps=u?(function(q){for(var U=[],I=1;I<arguments.length;I++)U[I-1]=arguments[I];for(var M=0,ye=U;M<ye.length;M++)Xa(q,ye[M],!0);return q})({},f.defaultProps,B):B}}),ll(te,function(){return".".concat(te.styledComponentId)}),j&&tp(te,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),te}function Tu(s,c){for(var l=[s[0]],u=0,f=c.length;u<f;u+=1)l.push(c[u],s[u+1]);return l}var zu=function(s){return Object.assign(s,{isCss:!0})};function qf(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(gn(s)||po(s))return zu(At(Tu(il,_s([s],c,!0))));var u=s;return c.length===0&&u.length===1&&typeof u[0]=="string"?At(u):zu(At(Tu(u,c)))}function Ja(s,c,l){if(l===void 0&&(l=xn),!c)throw mo(1,c);var u=function(f){for(var j=[],k=1;k<arguments.length;k++)j[k-1]=arguments[k];return s(c,l,qf.apply(void 0,_s([f],j,!1)))};return u.attrs=function(f){return Ja(s,c,cr(cr({},l),{attrs:Array.prototype.concat(l.attrs,f).filter(Boolean)}))},u.withConfig=function(f){return Ja(s,c,cr(cr({},l),f))},u}var dp=function(s){return Ja(Xf,s)},ve=dp;qu.forEach(function(s){ve[s]=dp(s)});const Qa={Wrapper:ve.div`height: 100vh; overflow: hidden; display: flex; flex-direction: column;`,Header:ve.header`height: 60px; flex-shrink: 0;`,Main:ve.main`
        flex: 1; overflow-y: auto; position: relative;
        .workspaceLayout { min-height: 100%; max-width: 1440px; margin: auto; display: grid; grid-template-columns: 260px minmax(0, 1fr); gap: 28px; padding: 18px 22px 42px; }
        .sideMenu { position: sticky; top: 18px; align-self: start; height: calc(100vh - 60px - 36px); max-height: calc(100vh - 60px - 36px); box-sizing: border-box; overflow-y: auto; padding: 16px 10px; border: 1px solid var(--color-border); border-radius: 16px; background: var(--color-surface); }
        .menuLabel { margin: 0 10px 12px; color: var(--color-text-muted); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .sideMenu nav { display: grid; gap: 5px; }
        .sideMenu button { width: 100%; padding: 10px 12px; border: 1px solid transparent; border-radius: 10px; background: transparent; color: var(--color-text-secondary); text-align: left; cursor: pointer; font: inherit; }
        .sideMenu button:hover, .sideMenu button.active { background: var(--color-primary); border-color: var(--color-primary); color: #07111f; }
        .contentWrapper { min-width: 0; padding: 4px 0; }
        .contentWrapper .topicBody { max-height: 12000px; }
        .scrollTopButton { position: fixed; right: 24px; bottom: 24px; z-index: 10; width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid var(--color-border); border-radius: 50%; background: var(--color-surface); color: var(--color-text-primary); cursor: pointer; box-shadow: 0 8px 20px var(--color-shadow); }
        .scrollTopButton:hover { background: var(--color-primary); color: #07111f; }
        .footerWrapper { flex-shrink: 0; }
        @media (max-width: 820px) { .workspaceLayout { grid-template-columns: 1fr; padding: 14px; } .sideMenu { position: static; height: auto; max-height: none; } .sideMenu nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .scrollTopButton { right: 16px; bottom: 16px; } }
    `},Iu={Wrapper:ve.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
    `,Main:ve.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-text-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Zf="/cpp-core-notes/images/transparentLogo.png",Jf=()=>{const[s,c]=ge.useState(!1),[l,u]=ge.useState("dark");ge.useEffect(()=>{const T=localStorage.getItem("app-theme")||"dark";u(T),T==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ge.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const f=ge.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{u(f)};return t.jsx(Iu.Wrapper,{children:t.jsx(Iu.Main,{children:t.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[t.jsxs("div",{className:"logoNameWrapper",children:[t.jsxs("div",{className:"logoWrapper",children:[!s&&t.jsx("div",{className:"logoSkeleton"}),t.jsx("img",{src:Zf,alt:"cpp-core-notes",onLoad:()=>c(!0),style:{opacity:s?1:0}})]}),t.jsxs("div",{className:"nameWrapper",children:[t.jsx("div",{className:"title",children:"cpp-core-notes"}),t.jsx("div",{className:"subTitle",children:"At-a-glance cpp revision"})]})]}),t.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${f} theme`,title:`Switch to ${f}`,children:[t.jsx("span",{className:"icon",children:l==="light"?t.jsx(Fm,{}):t.jsx(Hm,{})}),t.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})},ex={Wrapper:ve.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},rx=()=>t.jsxs(ex.Wrapper,{children:[t.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),t.jsxs("div",{className:"right",children:["By ",t.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Bu={Wrapper:ve.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:ve.div`
        max-width: 1440px;
        width: 100%;
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 26px;
        box-shadow: 0 10px 30px var(--color-shadow);

        .top {
            margin-bottom: 18px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 8px 12px;
            border-radius: 999px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 12px;
        }

        .badgeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .heading {
            font-size: 32px;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .sub {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;
        }

        .card {
            grid-column: span 6;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;
        }

        .card.wide {
            grid-column: span 12;
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            font-size: 14px;
        }

        .cardIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .meta {
            margin-top: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding-top: 12px;
            border-top: 1px dashed var(--color-border-light);
        }

        .metaLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .metaIcon {
            color: var(--color-primary);
            display: grid;
            place-items: center;
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 7px 10px;
            border-radius: 999px;
            white-space: nowrap;
        }

        @media (max-width: 900px) {
            padding: 18px;

            .card {
                grid-column: span 12;
            }

            .heading {
                font-size: 26px;
            }
        }
    `},up=()=>{const s="2026-09-09T08:56:55.684Z",c=new Date(s).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return t.jsx(Bu.Wrapper,{children:t.jsxs(Bu.Content,{children:[t.jsxs("div",{className:"top",children:[t.jsxs("div",{className:"badge",children:[t.jsx("span",{className:"badgeIcon",children:t.jsx(Ae,{})}),"C++ core revision"]}),t.jsx("h2",{className:"heading",children:"About C++ Programming"}),t.jsx("p",{className:"sub",children:"A powerful, compiled language that blends low level memory control with object oriented and generic programming."})]}),t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTitle",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(Kr,{})}),"What is C++"]}),t.jsx("p",{className:"p",children:"C++ is a general purpose programming language created by Bjarne Stroustrup as an extension of C. It adds object oriented programming, templates, and a rich standard library while retaining low level control."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTitle",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(xr,{})}),"Why C++ matters"]}),t.jsx("p",{className:"p",children:"C++ is widely used in game engines, operating systems, embedded systems, and performance critical software. It allows precise memory control while supporting abstraction through classes and templates."})]}),t.jsxs("div",{className:"card wide",children:[t.jsxs("div",{className:"cardTitle",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(Mt,{})}),"About cpp-core-notes"]}),t.jsx("p",{className:"p",children:"The cpp-core-notes project is designed as a focused revision system. It organizes fundamentals, object oriented concepts, templates, STL, memory management, and modern C++ features into a structured single page reference. The goal is strong design thinking, resource safety, and deep understanding of how C++ programs execute."}),t.jsxs("div",{className:"meta",children:[t.jsxs("span",{className:"metaLeft",children:[t.jsx("span",{className:"metaIcon",children:t.jsx(Ru,{})}),t.jsx("span",{className:"metaLabel",children:"Last updated"})]}),t.jsx("span",{className:"metaValue",children:c})]})]})]})]})})},tx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},nx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(tx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(Ae,{})}),t.jsx("span",{className:"title",children:"C++ Fundamentals"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"C++ is a compiled language that gives you performance and control like C, but also adds modern features like classes, templates, and the Standard Template Library (STL). It is used for performance heavy software where you want both speed and clean program structure."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"What is C++"]}),t.jsx("p",{className:"p",children:"C++ is a general purpose programming language created by Bjarne Stroustrup. It extends C with object oriented programming, generic programming using templates, and a powerful standard library."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(As,{})}),"History of C++"]}),t.jsx("p",{className:"p",children:'C++ started as "C with Classes" in the early 1980s. Over time it evolved into modern C++ with features like smart pointers, move semantics, lambdas, and many improvements in newer standards.'})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"C vs C++"}),t.jsx("p",{className:"p",children:"C is mostly procedural and minimal. C++ supports both procedural and object oriented styles and provides more abstraction tools. C++ also adds references, function overloading, templates, exceptions, and STL containers."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"C focuses on functions and manual patterns"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"C++ adds classes, templates, and safer resource management patterns"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"C++ has STL containers and algorithms out of the box"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xr,{})}),"Compiled language concept"]}),t.jsx("p",{className:"p",children:"In C++, your source code is translated into machine code before running. The compiler checks syntax and types, generates object files, then the linker produces the final executable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - compile and run"}),t.jsx("pre",{className:"code",children:`g++ main.cpp -o app
./app

// output - depends on your program`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Structure of a C++ program"}),t.jsx("p",{className:"p",children:"A basic C++ program includes headers, uses namespaces (optional), has a main function, and contains statements or function calls. As projects grow, code is split into multiple .cpp and .h files."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - minimal C++ program"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int main() {
  std::cout << "Hello C++" << std::endl;
  return 0;
}

// output - Hello C++`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"main function"}),t.jsx("p",{className:"p",children:"main is the entry point. Program execution starts from main. Returning 0 indicates success."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - main return value"}),t.jsx("pre",{className:"code",children:`int main() {
  return 0; // success
}

// output - program exits successfully`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Rs,{})}),"Header files"]}),t.jsx("p",{className:"p",children:"Header files provide declarations for functions, classes, and constants. You include them using #include. Standard headers like iostream, vector, and string are part of the C++ library. Your own headers usually use quotes."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - include standard and custom header"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include "math_utils.h"

// output - headers included`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Namespaces"}),t.jsx("p",{className:"p",children:"Namespaces group names to avoid conflicts. In C++, std is the standard library namespace. You can also create your own namespaces for your project code."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - namespace usage"}),t.jsx("pre",{className:"code",children:`namespace myapp {
  int version = 1;
}

int main() {
  // access via scope resolution
  // myapp::version
  return 0;
}

// output - namespace keeps names organized`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Using namespace std"}),t.jsx("p",{className:"p",children:"using namespace std allows you to write cout instead of std::cout. It is convenient in small examples, but in bigger projects it can cause name conflicts. Prefer std:: in real code or use specific using declarations."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - two common styles"}),t.jsx("pre",{className:"code",children:`// style 1 - recommended
std::cout << "Hi" << std::endl;

// style 2 - ok for small demos
using namespace std;
cout << "Hi" << endl;

// output - Hi`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Dm,{})}),"Standard library overview"]}),t.jsx("p",{className:"p",children:"The C++ standard library provides containers, algorithms, strings, streams, utilities, and more. STL is a big part of it and helps you write clean and fast code."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"iostream - input output streams"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"vector - dynamic array"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"string - std::string utilities"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"algorithm - sort, find, count"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"memory - smart pointers"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Compilation process"}),t.jsx("p",{className:"p",children:"C++ code goes through preprocess, compile, assemble, and link steps. Headers are expanded in preprocessing, then compilation produces object files, and linking produces the final executable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - see each step"}),t.jsx("pre",{className:"code",children:`// 1 - preprocess
g++ -E main.cpp -o main.i

// 2 - compile
g++ -S main.i -o main.s

// 3 - assemble
g++ -c main.s -o main.o

// 4 - link
g++ main.o -o app

// 5 - execute
./app`})]}),t.jsx("div",{className:"hint",children:'If you see "undefined reference" errors, it is usually a linking issue or missing object file or library.'})]})]})]})},ox={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 18000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .miniGrid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .miniCard {
            grid-column: span 6;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
        }

        .miniTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        @media (max-width: 900px) {
            .miniCard {
                grid-column: span 12;
            }
        }
    `},sx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(ox.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(Bs,{})}),t.jsx("span",{className:"title",children:"Data Types and Variables"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"C++ is a strongly typed language. That means every variable has a type, and the type decides how much memory is used and what operations are allowed. Once you understand types, initialization, and scope, your programs become more predictable."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Bs,{})}),"Primitive data types"]}),t.jsx("p",{className:"p",children:"Primitive types are built in. They include integers, floating point numbers, characters, and booleans. Size can vary by system, but the idea stays the same."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"int, short, long, long long"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"float, double, long double"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"char, wchar_t, char16_t, char32_t"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"bool"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - basic types"]}),t.jsx("pre",{className:"code",children:`int age = 20;
double price = 99.50;
char grade = 'A';
bool ok = true;

// output - variables stored with their types`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(tl,{})}),"Type modifiers"]}),t.jsx("p",{className:"p",children:"Modifiers change range and signedness. The most common modifiers are signed, unsigned, short, and long."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - modifiers"]}),t.jsx("pre",{className:"code",children:`unsigned int count = 10;
long long big = 9000000000LL;
short small = 12;

// output - types with different ranges`})]}),t.jsx("div",{className:"hint",children:"unsigned types cannot store negative values, but they can store bigger positive values for the same size."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(hn,{})}),"Type casting"]}),t.jsx("p",{className:"p",children:"Casting converts one type to another. In C++, prefer explicit casts like static_cast to avoid accidental bugs."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - casting int to double"]}),t.jsx("pre",{className:"code",children:`int a = 5;
int b = 2;

double div1 = a / b; // integer division happens first
double div2 = static_cast<double>(a) / b;

 // div1 becomes 2
 // div2 becomes 2.5`})]}),t.jsx("div",{className:"hint",children:"If both operands are int, division is integer division. Cast at least one side to double for decimal results."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ou,{})}),"auto keyword"]}),t.jsx("p",{className:"p",children:"auto lets the compiler deduce the type from the value on the right side. It is useful with long types like iterators, but still keeps strong typing."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - auto type deduction"]}),t.jsx("pre",{className:"code",children:`auto x = 10;      // x is int
auto y = 10.5;    // y is double
auto z = 'A';     // z is char

// output - types deduced at compile time`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ms,{})}),"const correctness"]}),t.jsx("p",{className:"p",children:'const means "cannot be changed". It makes your code safer and clearer. Use const when a value should not change. In C++, const is a big part of writing clean APIs and avoiding accidental edits.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - const variable"]}),t.jsx("pre",{className:"code",children:`const int maxUsers = 100;
// maxUsers = 200; // error

// output - maxUsers stays fixed`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - const reference"]}),t.jsx("pre",{className:"code",children:`int n = 10;
const int& ref = n;
// ref = 20; // error, ref cannot change n through it

// output - safe read-only reference`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Variables and initialization styles"}),t.jsx("p",{className:"p",children:"C++ supports multiple ways to initialize variables. The modern recommended style is brace initialization because it avoids some narrowing conversions."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - initialization styles"]}),t.jsx("pre",{className:"code",children:`int a = 10;      // copy initialization
int b(10);        // direct initialization
int c{10};        // brace initialization (recommended)

// int d{10.5};   // error, prevents narrowing

// output - a, b, c are all 10`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xr,{})}),"Scope rules"]}),t.jsx("p",{className:"p",children:"Scope decides where a variable exists and can be used. Common scopes are block scope, function scope, class scope, and global scope."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - block scope"]}),t.jsx("pre",{className:"code",children:`int main() {
  int x = 10;

  if (true) {
    int x = 99; // different x inside block
    // output - inside x is 99
  }

  // output - outside x is 10
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"If you declare the same name inside a block, it shadows the outer variable."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Cm,{})}),"Storage classes"]}),t.jsx("p",{className:"p",children:"Storage classes control lifetime and linkage. In modern C++, some are less common, but still important to understand for reading older code and system projects."}),t.jsxs("div",{className:"miniGrid",children:[t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"static"}),t.jsx("p",{className:"p",children:"static inside a function keeps the variable alive across calls. static at global scope restricts visibility to the same file."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - static"}),t.jsx("pre",{className:"code",children:`int counter() {
  static int c = 0;
  c++;
  return c;
}

// counter() returns 1, then 2, then 3`})]})]}),t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"extern"}),t.jsx("p",{className:"p",children:"extern declares a variable that is defined in another file. Used for sharing globals across translation units."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - extern"}),t.jsx("pre",{className:"code",children:`// a.cpp
int g = 10;

// b.cpp
extern int g;
// g can be used here

// output - g is shared across files`})]})]}),t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"register"}),t.jsx("p",{className:"p",children:"register was a hint to store a variable in a CPU register for speed. Modern compilers ignore it and optimize automatically."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - register"}),t.jsx("pre",{className:"code",children:`register int i = 0;
// output - compiler decides best placement`})]})]}),t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"mutable"}),t.jsx("p",{className:"p",children:"mutable is used inside classes. It allows a data member to be modified even inside const member functions. Common use is caching."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - mutable"}),t.jsx("pre",{className:"code",children:`class A {
  mutable int cache = 0;

public:
  int get() const {
    cache++; // allowed because cache is mutable
    return cache;
  }
};

// output - const object can update cache`})]})]})]}),t.jsx("div",{className:"hint",children:"In modern C++, focus most on const, static, and mutable. register is mostly historical and extern is mainly for multi-file programs."})]})]})]})},ix={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .note {
            margin: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},ax=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(ix.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(Bs,{})}),t.jsx("span",{className:"title",children:"Operators"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Operators are symbols that tell C++ to perform an action on values - like add, compare, assign, or work with bits. Learning operators properly makes your code shorter and more readable, and it helps you understand conditions, loops, and low level logic."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Lm,{})}),"Arithmetic operators"]}),t.jsx("p",{className:"p",children:"Used for basic math. Includes + - * / % and also increment and decrement."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - arithmetic"}),t.jsx("pre",{className:"code",children:`int a = 10;
int b = 3;

int sum = a + b;   // 13
int diff = a - b;  // 7
int mul = a * b;   // 30
int div = a / b;   // 3   (integer division)
int mod = a % b;   // 1

a++; // a becomes 11
b--; // b becomes 2

// output (values):
// sum=13 diff=7 mul=30 div=3 mod=1 a=11 b=2`})]}),t.jsx("div",{className:"hint",children:"Note - integer division drops the decimal part. For decimals use double or float."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Sm,{})}),"Relational operators"]}),t.jsx("p",{className:"p",children:"Used to compare two values. Result is a boolean (true or false)."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - comparison"}),t.jsx("pre",{className:"code",children:`int x = 5;
int y = 8;

bool a = (x < y);   // true
bool b = (x > y);   // false
bool c = (x == y);  // false
bool d = (x != y);  // true
bool e = (x <= 5);  // true
bool f = (y >= 10); // false

// output:
// a=true b=false c=false d=true e=true f=false`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vn,{})}),"Logical operators"]}),t.jsx("p",{className:"p",children:"Used to combine conditions. && means AND, || means OR, and ! means NOT. These are common in if and loops."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - logical"}),t.jsx("pre",{className:"code",children:`int age = 20;
bool hasId = true;

bool allowed = (age >= 18) && hasId; // true

bool weekend = false;
bool holiday = true;

bool free = weekend || holiday; // true

bool notHoliday = !holiday; // false

// output:
// allowed=true free=true notHoliday=false`})]}),t.jsx("div",{className:"hint",children:"Short circuit behavior - in && if first is false, second is not checked. In || if first is true, second is not checked."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ho,{})}),"Bitwise operators"]}),t.jsx("p",{className:"p",children:"Works at the bit level. Useful for flags, masks, and performance oriented logic. Common operators are & | ^ ~ and shifts << >>."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - bitwise basics"}),t.jsx("pre",{className:"code",children:`int a = 5; // 0101
int b = 3; // 0011

int andV = a & b; // 0001 -> 1
int orV  = a | b; // 0111 -> 7
int xorV = a ^ b; // 0110 -> 6
int shL  = a << 1; // 1010 -> 10
int shR  = a >> 1; // 0010 -> 2

// output:
// andV=1 orV=7 xorV=6 shL=10 shR=2`})]}),t.jsx("div",{className:"hint",children:"Bitwise ops are different from logical ops. Use & | ^ for bits and use && || for boolean conditions."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Assignment operators"}),t.jsx("p",{className:"p",children:"Used to assign values. Includes = and compound forms like += -= *= /= %= and bit forms like &= |= ^=."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - assignment"}),t.jsx("pre",{className:"code",children:`int n = 10;

n += 5;  // n = 15
n -= 3;  // n = 12
n *= 2;  // n = 24
n /= 4;  // n = 6
n %= 4;  // n = 2

// output:
// n=2`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Ternary operator"}),t.jsx("p",{className:"p",children:"A short form of if else that returns a value. Syntax - condition ? valueIfTrue : valueIfFalse"}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - ternary"}),t.jsx("pre",{className:"code",children:`int marks = 72;

const char* result = (marks >= 40) ? "pass" : "fail";

// output:
// result=pass`})]}),t.jsx("div",{className:"hint",children:"Use ternary for simple choices. For complex logic, prefer if else for readability."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"sizeof operator"}),t.jsx("p",{className:"p",children:"sizeof gives the size in bytes of a type or a variable. It is decided at compile time for most cases."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - sizeof"}),t.jsx("pre",{className:"code",children:`int a = 10;
double d = 3.14;

int arr[5] = {1,2,3,4,5};

int s1 = sizeof(a);     // typically 4
int s2 = sizeof(d);     // typically 8
int s3 = sizeof(arr);   // 5 * sizeof(int) -> typically 20

// output (typical):
// s1=4 s2=8 s3=20`})]}),t.jsx("div",{className:"hint",children:"Size can vary by system and compiler. Do not hardcode assumptions."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Scope resolution operator ::"}),t.jsx("p",{className:"p",children:":: is used to access names inside a scope - like a namespace, class, or global scope. Most common use is std::cout and std::vector."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - namespace and global"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int value = 10;

int main() {
  int value = 20;

  std::cout << value << std::endl;  // output - 20 (local)
  std::cout << ::value << std::endl; // output - 10 (global)

  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"::value means global value. std::cout means cout inside std namespace."})]}),t.jsx("div",{className:"note",children:"Quick tip - avoid writing very complex expressions with many operators in one line. Add parentheses for clarity."})]})]})},lx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 16000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},cx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(lx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(ho,{})}),t.jsx("span",{className:"title",children:"Control Flow"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Control flow decides how your program runs - which lines execute, how many times, and when to stop. In C++, you control decisions with if and switch, and repetition with loops like for and while."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(As,{})}),"if else"]}),t.jsx("p",{className:"p",children:"Use if else when you want to run code based on a condition that is true or false."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - basic if else"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int age = 18;

  if (age >= 18) {
    cout << "Adult" << endl;
  } else {
    cout << "Minor" << endl;
  }

  // output - Adult
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mu,{})}),"switch"]}),t.jsx("p",{className:"p",children:"Use switch when you have many fixed options based on one value. Do not forget break or execution will continue into the next case."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - switch"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int day = 2;

  switch (day) {
    case 1:
      cout << "Mon" << endl;
      break;
    case 2:
      cout << "Tue" << endl;
      break;
    default:
      cout << "Unknown" << endl;
  }

  // output - Tue
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(hn,{})}),"for"]}),t.jsx("p",{className:"p",children:"Use for when you know how many times you want to repeat. It has initialization, condition, and update in one line."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - for loop"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  for (int i = 1; i <= 3; i++) {
    cout << i << " ";
  }

  // output - 1 2 3
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"while"}),t.jsx("p",{className:"p",children:"Use while when you want to repeat until a condition becomes false. It checks condition before running the loop body."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - while loop"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int n = 3;

  while (n > 0) {
    cout << n << " ";
    n--;
  }

  // output - 3 2 1
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"do while"}),t.jsx("p",{className:"p",children:"do while runs at least once because the condition is checked after the loop body."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - do while"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int x = 0;

  do {
    cout << "Runs once" << endl;
  } while (x != 0);

  // output - Runs once
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Um,{})}),"break"]}),t.jsx("p",{className:"p",children:"break exits the nearest loop or switch immediately."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - break"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  for (int i = 1; i <= 5; i++) {
    if (i == 3) break;
    cout << i << " ";
  }

  // output - 1 2
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"continue"}),t.jsx("p",{className:"p",children:"continue skips the current iteration and jumps to the next iteration of the loop."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - continue"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    cout << i << " ";
  }

  // output - 1 2 4 5
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Nested loops"}),t.jsx("p",{className:"p",children:"A nested loop is a loop inside another loop. It is used for grid style problems, patterns, and comparisons."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - nested loops (2 x 3)"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  for (int row = 1; row <= 2; row++) {
    for (int col = 1; col <= 3; col++) {
      cout << "*";
    }
    cout << endl;
  }

  // output -
  // ***
  // ***
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Nested loops can become slow if both loops are big. If you see two loops, think about O(n^2)."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(hn,{})}),"Range based for loop"]}),t.jsx("p",{className:"p",children:"Range based for is a clean way to loop through arrays and containers like vector. It is safer and easier than manual indexing."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - range based for"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> nums = {10, 20, 30};

  for (int x : nums) {
    cout << x << " ";
  }

  // output - 10 20 30
  return 0;
}`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - using reference (avoid copy)"}),t.jsx("pre",{className:"code",children:`for (const int& x : nums) {
  // use x without copying
}

// output - same result, but more efficient`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vt,{})}),"Guard clauses"]}),t.jsx("p",{className:"p",children:"Guard clauses are early returns that handle invalid cases at the top. This reduces nesting and keeps code easier to read."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - guard clause vs nested if"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

void printAdultMessage(int age) {
  if (age < 18) {
    cout << "Not allowed" << endl;
    return; // guard clause
  }

  cout << "Welcome" << endl;
}

int main() {
  printAdultMessage(16); // output - Not allowed
  printAdultMessage(21); // output - Welcome
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Guard clauses are great for validation at the start of a function. Less nesting, more clarity."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ae,{})}),"Quick mental checklist"]}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use if else for decision logic"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use switch for many fixed cases"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use for when count is known"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use while when stopping condition is unknown"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use do while for at least one run"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use break and continue carefully"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Prefer range based for with containers"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use guard clauses to avoid deep nesting"]})]})]})]})]})},dx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 16000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},ux=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(dx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(Ae,{})}),t.jsx("span",{className:"title",children:"Functions"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"A function is a reusable block of code. In C++, functions also support features like overloading, default arguments, and references. Mastering functions is important because most real programs are built using small, well named functions."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Em,{})}),"Function declaration and definition"]}),t.jsx("p",{className:"p",children:"A declaration tells the compiler the function name, return type, and parameters. A definition contains the actual body. In small programs they can be in the same place, but in bigger projects declarations go into .h headers and definitions into .cpp files."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - declaration vs definition"}),t.jsx("pre",{className:"code",children:`#include <iostream>

// declaration
int add(int a, int b);

int main() {
  std::cout << add(2, 3) << std::endl;
  // output - 5
  return 0;
}

// definition
int add(int a, int b) {
  return a + b;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(As,{})}),"Function overloading"]}),t.jsx("p",{className:"p",children:"Overloading means multiple functions can share the same name, as long as their parameter types or count are different. The compiler chooses the best match based on the arguments you pass."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - overloaded functions"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }

int main() {
  std::cout << add(2, 3) << std::endl;       // output - 5
  std::cout << add(2.5, 3.1) << std::endl;   // output - 5.6
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vn,{})}),"Inline functions"]}),t.jsx("p",{className:"p",children:"inline suggests the compiler to replace the function call with the function body to reduce call overhead. Modern compilers decide this automatically, but inline is still used for small functions in headers."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - inline function"}),t.jsx("pre",{className:"code",children:`#include <iostream>

inline int square(int x) { return x * x; }

int main() {
  std::cout << square(4) << std::endl;
  // output - 16
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Inline is not a guarantee. It is a hint. The compiler may ignore it if the function is large or complex."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mu,{})}),"Default arguments"]}),t.jsx("p",{className:"p",children:"Default arguments allow you to give a default value to a parameter. If the caller does not pass that argument, the default value is used."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - default parameter value"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int greetCount(int times = 1) {
  return times;
}

int main() {
  std::cout << greetCount() << std::endl;   // output - 1
  std::cout << greetCount(5) << std::endl;  // output - 5
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Defaults are usually written in the declaration (prototype), not repeated in the definition."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Pass by value"}),t.jsx("p",{className:"p",children:"Pass by value means the function receives a copy. Changes inside the function do not affect the original variable. This is safe, but can be expensive for large objects."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - pass by value"}),t.jsx("pre",{className:"code",children:`#include <iostream>

void setToZero(int x) {
  x = 0;
}

int main() {
  int a = 10;
  setToZero(a);
  std::cout << a << std::endl;
  // output - 10 (unchanged)
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Pass by reference"}),t.jsx("p",{className:"p",children:"Pass by reference means the function works on the original variable. Changes inside the function affect the caller. This is efficient for big values."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - pass by reference"}),t.jsx("pre",{className:"code",children:`#include <iostream>

void setToZero(int &x) {
  x = 0;
}

int main() {
  int a = 10;
  setToZero(a);
  std::cout << a << std::endl;
  // output - 0 (changed)
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Use const reference when you only want to read and not modify: const std::string &name"})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Pass by pointer"}),t.jsx("p",{className:"p",children:"Pass by pointer means you pass the memory address. The function can modify the original value using dereference (*). You must check for null pointers to avoid crashes."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - pass by pointer"}),t.jsx("pre",{className:"code",children:`#include <iostream>

void setToZero(int *x) {
  if (x == nullptr) return;
  *x = 0;
}

int main() {
  int a = 10;
  setToZero(&a);
  std::cout << a << std::endl;
  // output - 0
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(hn,{})}),"Recursion"]}),t.jsx("p",{className:"p",children:"Recursion is when a function calls itself. It must have a base case to stop, otherwise it will run forever and crash due to stack overflow."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - factorial recursion"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int factorial(int n) {
  if (n <= 1) return 1;        // base case
  return n * factorial(n - 1); // recursive call
}

int main() {
  std::cout << factorial(5) << std::endl;
  // output - 120
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Fu,{})}),"Function prototypes"]}),t.jsx("p",{className:"p",children:"A function prototype is a declaration placed before main so the compiler knows about the function before it is used. This is required if the function definition comes later in the file."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - prototype before main"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int mul(int a, int b); // prototype

int main() {
  std::cout << mul(3, 4) << std::endl;
  // output - 12
  return 0;
}

int mul(int a, int b) {
  return a * b;
}`})]}),t.jsx("div",{className:"hint",children:"In real projects, prototypes are usually placed in header files and included where needed."})]})]})]})},px={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 16000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},hx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(px.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(hu,{})}),t.jsx("span",{className:"title",children:"Arrays and Strings"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Arrays store multiple values in contiguous memory. Strings in C++ can be handled in two major ways - old style C strings (char arrays) and modern std::string. For dynamic arrays, you usually use std::vector. For fixed size modern arrays, use std::array."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Bs,{})}),"Static arrays"]}),t.jsx("p",{className:"p",children:"Static arrays have fixed size decided at compile time. They live on the stack (most common) and cannot grow or shrink."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - int array"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int a[5] = {10, 20, 30, 40, 50};

  cout << a[0] << endl; // output - 10
  cout << a[4] << endl; // output - 50
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Arrays do not know their own length. You must track size yourself or use std::array or std::vector."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(hu,{})}),"Multidimensional arrays"]}),t.jsx("p",{className:"p",children:"A 2D array is like a table. Memory is still contiguous, but indexed using row and column."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - 2D array"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int m[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
  };

  cout << m[0][1] << endl; // output - 2
  cout << m[1][2] << endl; // output - 6
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"In function parameters, you must provide the second dimension size for raw 2D arrays."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Qm,{})}),"Character arrays"]}),t.jsx("p",{className:"p",children:"A character array is an array of chars. If it represents a C style string, it must end with a null character '\\\\0'. That null character tells where the string ends."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - char array basics"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  char x[4] = {'c', 'a', 't', '\\0'};
  cout << x << endl; // output - cat
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(rl,{})}),"C style strings"]}),t.jsx("p",{className:"p",children:"C strings are char arrays with '\\\\0' at the end. They are fast but easy to mess up because you must manage sizes, copying, and bounds yourself."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - C string using cstring"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <cstring>
using namespace std;

int main() {
  char name[20] = "Ashish";

  cout << strlen(name) << endl; // output - 6
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Avoid unsafe functions like gets or strcpy without size checks. Prefer std::string in C++."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mt,{})}),"std::string"]}),t.jsx("p",{className:"p",children:"std::string is the modern safe string type in C++. It manages memory automatically and supports many useful operations."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - std::string"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "hello";
  s += " world";

  cout << s << endl; // output - hello world
  cout << s.size() << endl; // output - 11
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"String operations"}),t.jsx("p",{className:"p",children:"Common operations include concatenation, length, access by index, substring, and finding text."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - common string operations"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "abcdef";

  cout << s[0] << endl; // output - a
  cout << s.substr(2, 3) << endl; // output - cde

  size_t pos = s.find("cd");
  cout << pos << endl; // output - 2

  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"find returns string::npos if the text is not found."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"Vector basics"]}),t.jsx("p",{className:"p",children:"std::vector is a dynamic array. It grows automatically and stores elements in contiguous memory. It is one of the most used STL containers."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - vector"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> v;

  v.push_back(10);
  v.push_back(20);

  cout << v.size() << endl; // output - 2
  cout << v[1] << endl; // output - 20

  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"push_back may reallocate memory when vector grows. Use reserve if you know size in advance."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"std::array"}),t.jsx("p",{className:"p",children:"std::array is a fixed size container with array like speed but safer features. It knows its size and supports .size() and STL algorithms."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - std::array"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <array>
using namespace std;

int main() {
  array<int, 3> a = {1, 2, 3};

  cout << a.size() << endl; // output - 3
  cout << a[2] << endl; // output - 3

  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Use std::array for fixed size and std::vector for variable size."})]})]})]})},mx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 22000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .sectionMini {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .h4 {
            margin: 0 0 8px 0;
            font-size: 14px;
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},fx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(mx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(rl,{})}),t.jsx("span",{className:"title",children:"Pointers and References"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Pointers and references are core to C++. They control how you access memory and how you pass data efficiently. If you understand these concepts, you understand how C++ programs really work under the hood."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx($m,{})}),"Pointer basics"]}),t.jsxs("p",{className:"p",children:["A pointer stores the memory address of another variable. You can dereference a pointer using ",t.jsx("code",{children:"*"})," to access or modify the value at that address."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - pointer basics"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int x = 10;
  int* p = &x;       // p holds address of x

  cout << x << endl;   // output - 10
  cout << *p << endl;  // output - 10

  *p = 25;            // change x via pointer
  cout << x << endl;   // output - 25

  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Pointer arithmetic"}),t.jsx("p",{className:"p",children:"Pointer arithmetic is mostly used with arrays. When you increment a pointer, it moves by the size of the data type, not by 1 byte."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - pointer arithmetic with array"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int arr[3] = {10, 20, 30};
  int* p = arr; // same as &arr[0]

  cout << *p << endl;      // output - 10
  cout << *(p + 1) << endl; // output - 20
  cout << *(p + 2) << endl; // output - 30

  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"In C++, pointer arithmetic is safe only within the same array range. Going out of bounds causes undefined behavior."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pn,{})}),"Null pointer"]}),t.jsxs("p",{className:"p",children:["A null pointer means it points to nothing. In modern C++, use ",t.jsx("code",{children:"nullptr"})," instead of"," ",t.jsx("code",{children:"NULL"}),"or ",t.jsx("code",{children:"0"}),". Always check before dereferencing."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - nullptr"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int* p = nullptr;

  if (p == nullptr) {
    cout << "No memory assigned" << endl; // output - No memory assigned
  }

  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Bm,{})}),"References"]}),t.jsx("p",{className:"p",children:"A reference is an alias for an existing variable. It must be initialized and cannot be reseated to another variable later. References are commonly used for passing values without copying."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - reference alias"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int x = 10;
  int& r = x; // r is alias of x

  r = 99;
  cout << x << endl; // output - 99

  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(_m,{})}),"Dynamic memory allocation - new and delete"]}),t.jsxs("p",{className:"p",children:[t.jsx("code",{children:"new"})," allocates memory on the heap and returns a pointer. ",t.jsx("code",{children:"delete"})," frees that memory. If you allocate an array with ",t.jsx("code",{children:"new[]"}),", you must free with ",t.jsx("code",{children:"delete[]"}),"."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - new and delete"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int* p = new int(50);

  cout << *p << endl; // output - 50

  delete p;           // free memory
  p = nullptr;        // good habit
  return 0;
}`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - new[] and delete[]"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int* arr = new int[3]{1, 2, 3};

  cout << arr[1] << endl; // output - 2

  delete[] arr;
  arr = nullptr;
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pn,{})}),"Dangling pointer"]}),t.jsx("p",{className:"p",children:"A dangling pointer points to memory that has already been freed or is no longer valid. Accessing it can crash your program or cause random bugs."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - dangling pointer problem"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int* p = new int(10);
  delete p;

  // p is now dangling
  // cout << *p << endl; // unsafe - undefined behavior

  p = nullptr; // fix - reset pointer
  cout << "Pointer cleared" << endl; // output - Pointer cleared
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Du,{})}),"Memory leaks"]}),t.jsx("p",{className:"p",children:"A memory leak happens when you allocate memory but never free it. Over time, your program uses more and more RAM. In C++, smart pointers solve most leak problems."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - leak"}),t.jsx("pre",{className:"code",children:`int* p = new int(5);
// delete p; // missing delete causes leak

// output - memory stays allocated until program ends`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vt,{})}),"Smart pointers"]}),t.jsx("p",{className:"p",children:"Smart pointers automatically manage memory using RAII. That means memory is freed automatically when the smart pointer goes out of scope."}),t.jsxs("div",{className:"sectionMini",children:[t.jsx("h4",{className:"h4",children:"unique_ptr"}),t.jsx("p",{className:"p",children:"Owns a resource exclusively. Cannot be copied. Can be moved."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - unique_ptr"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <memory>
using namespace std;

int main() {
  unique_ptr<int> p = make_unique<int>(42);
  cout << *p << endl; // output - 42
  // memory freed automatically
  return 0;
}`})]})]}),t.jsxs("div",{className:"sectionMini",children:[t.jsx("h4",{className:"h4",children:"shared_ptr"}),t.jsx("p",{className:"p",children:"Shared ownership. Reference counting is used. Memory is freed when the last shared_ptr is destroyed."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - shared_ptr"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <memory>
using namespace std;

int main() {
  auto p1 = make_shared<int>(7);
  auto p2 = p1;

  cout << *p1 << endl; // output - 7
  cout << p1.use_count() << endl; // output - 2

  return 0;
}`})]})]}),t.jsxs("div",{className:"sectionMini",children:[t.jsx("h4",{className:"h4",children:"weak_ptr"}),t.jsx("p",{className:"p",children:"Non owning reference to a shared_ptr managed object. Used to avoid circular references."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - weak_ptr"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <memory>
using namespace std;

int main() {
  auto sp = make_shared<int>(100);
  weak_ptr<int> wp = sp;

  if (auto locked = wp.lock()) {
    cout << *locked << endl; // output - 100
  }

  sp.reset();

  if (wp.expired()) {
    cout << "Expired" << endl; // output - Expired
  }

  return 0;
}`})]})]}),t.jsx("div",{className:"hint",children:"Rule of thumb - prefer unique_ptr by default. Use shared_ptr only when multiple owners are truly needed."})]})]})]})},xx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 16000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},gx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(xx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(Mt,{})}),t.jsx("span",{className:"title",children:"Object Oriented Programming"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:'Object Oriented Programming (OOP) is a way to design programs using "objects" that bundle data and behavior together. In C++, OOP helps you write structured, reusable code by modeling real world entities as classes.'})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mt,{})}),"Classes and objects"]}),t.jsx("p",{className:"p",children:"A class is a blueprint. An object is an instance of a class. The class defines what data an object has and what it can do using member functions."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - class and object"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class Car {
public:
  void start() {
    cout << "Engine started" << endl;
  }
};

int main() {
  Car c;
  c.start();
  // output - Engine started
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ms,{})}),"Access specifiers"]}),t.jsx("p",{className:"p",children:"Access specifiers control what is visible outside the class. They are used to protect internal data and expose only what is needed."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"public - accessible from anywhere"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"private - accessible only inside the class"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"protected - accessible inside class and derived classes"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - public private protected"}),t.jsx("pre",{className:"code",children:`class Demo {
public:
  int a = 1;

private:
  int b = 2;

protected:
  int c = 3;
};

// output - outside code can access only a`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Om,{})}),"Constructors"]}),t.jsx("p",{className:"p",children:"A constructor runs automatically when an object is created. It is used to initialize data members. Constructor name is same as class name and it has no return type."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - constructor"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class User {
public:
  int id;

  User(int x) {
    id = x;
  }
};

int main() {
  User u(7);
  cout << u.id << endl;
  // output - 7
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Wm,{})}),"Destructors"]}),t.jsx("p",{className:"p",children:"A destructor runs automatically when an object is destroyed. It is used for cleanup, like releasing resources. Destructor name is ~ClassName."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - destructor"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class Demo {
public:
  Demo() { cout << "Created" << endl; }
  ~Demo() { cout << "Destroyed" << endl; }
};

int main() {
  Demo d;
  // output - Created
  // output - Destroyed (at end of main)
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"this pointer"]}),t.jsx("p",{className:"p",children:"this is a pointer inside member functions that points to the current object. It is useful when parameter names match member names or for chaining."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - this pointer"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class Box {
public:
  int size;

  void setSize(int size) {
    this->size = size;
  }
};

int main() {
  Box b;
  b.setSize(5);
  cout << b.size << endl;
  // output - 5
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vt,{})}),"Encapsulation"]}),t.jsx("p",{className:"p",children:"Encapsulation means hiding internal data and exposing controlled access through public methods. It prevents accidental misuse and keeps class logic consistent."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - encapsulation"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class BankAccount {
private:
  int balance = 0;

public:
  void deposit(int amount) {
    if (amount > 0) balance += amount;
  }

  int getBalance() {
    return balance;
  }
};

int main() {
  BankAccount a;
  a.deposit(100);
  cout << a.getBalance() << endl;
  // output - 100
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Abstraction"}),t.jsx("p",{className:"p",children:"Abstraction means showing only the necessary features and hiding the internal details. Users of a class care about what it does, not how it does it."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Public methods = interface"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Private data = hidden implementation details"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(As,{})}),"Inheritance"]}),t.jsx("p",{className:"p",children:'Inheritance allows a class to reuse and extend features of another class. The derived class "is a" specialized version of the base class.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - inheritance"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class Animal {
public:
  void eat() { cout << "Eating" << endl; }
};

class Dog : public Animal {
public:
  void bark() { cout << "Bark" << endl; }
};

int main() {
  Dog d;
  d.eat();
  d.bark();
  // output - Eating
  // output - Bark
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Types of inheritance"}),t.jsx("p",{className:"p",children:"C++ supports multiple inheritance types. The most common is single inheritance. Multiple inheritance exists but should be used carefully."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Single - one base, one derived"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Multilevel - A -> B -> C chain"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Hierarchical - one base, many derived"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Multiple - derived from multiple bases"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Hybrid - combination of above"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Function overriding"}),t.jsx("p",{className:"p",children:"Overriding happens when a derived class provides its own implementation of a base class method. For runtime polymorphism, the base method should be virtual."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - overriding"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class Base {
public:
  void show() { cout << "Base show" << endl; }
};

class Derived : public Base {
public:
  void show() { cout << "Derived show" << endl; }
};

int main() {
  Derived d;
  d.show();
  // output - Derived show
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"This example uses compile time dispatch. For runtime dispatch, use virtual functions."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vn,{})}),"Virtual functions"]}),t.jsx("p",{className:"p",children:"virtual enables runtime polymorphism. When you call a virtual function using a base pointer or reference, C++ chooses the derived implementation at runtime."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - virtual function"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class Base {
public:
  virtual void show() { cout << "Base show" << endl; }
};

class Derived : public Base {
public:
  void show() override { cout << "Derived show" << endl; }
};

int main() {
  Base* ptr = new Derived();
  ptr->show();
  // output - Derived show
  delete ptr;
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Polymorphism"}),t.jsx("p",{className:"p",children:'Polymorphism means "many forms". In C++, it appears in two common ways:'}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Compile time polymorphism - function overloading, operator overloading"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Runtime polymorphism - virtual functions and overriding"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Gm,{})}),"Friend functions"]}),t.jsx("p",{className:"p",children:"A friend function can access private and protected members of a class. Use it only when needed, because it breaks strict encapsulation."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - friend function"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class Secret {
private:
  int value = 42;

public:
  friend void reveal(Secret s);
};

void reveal(Secret s) {
  cout << s.value << endl;
}

int main() {
  Secret s;
  reveal(s);
  // output - 42
  return 0;
}`})]})]})]})]})},vx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 16000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section.last {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},yx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(vx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(xr,{})}),t.jsx("span",{className:"title",children:"Special Member Functions"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"In C++, copying and moving objects is a big deal because objects can own resources like heap memory, file handles, or sockets. The compiler can generate special functions for you, but when you manage resources manually you must define the right ones to avoid leaks, double free, and crashes."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Au,{})}),"Copy constructor"]}),t.jsx("p",{className:"p",children:"Runs when you create a new object from an existing one. It should perform a deep copy when your class owns a resource."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - deep copy in copy constructor"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <cstring>

class Buffer {
  char *data;
  int size;

public:
  Buffer(int n) : size(n) {
    data = new char[size];
    std::memset(data, 0, size);
  }

  // copy constructor
  Buffer(const Buffer &other) : size(other.size) {
    data = new char[size];
    std::memcpy(data, other.data, size);
  }

  ~Buffer() {
    delete[] data;
  }
};

int main() {
  Buffer a(5);
  Buffer b = a; // copy constructor

  std::cout << "Copied\\n";
  // output - Copied
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(hn,{})}),"Copy assignment operator"]}),t.jsx("p",{className:"p",children:"Runs when an existing object is assigned from another existing object. It must handle self assignment and should free old resources before copying new ones."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - copy assignment with self check"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <cstring>

class Buffer {
  char *data;
  int size;

public:
  Buffer(int n) : size(n) {
    data = new char[size];
    std::memset(data, 0, size);
  }

  Buffer(const Buffer &other) : size(other.size) {
    data = new char[size];
    std::memcpy(data, other.data, size);
  }

  // copy assignment
  Buffer& operator=(const Buffer &other) {
    if (this == &other) return *this; // self assignment

    delete[] data; // free old

    size = other.size;
    data = new char[size];
    std::memcpy(data, other.data, size);

    return *this;
  }

  ~Buffer() {
    delete[] data;
  }
};

int main() {
  Buffer a(3);
  Buffer b(10);

  b = a; // copy assignment

  std::cout << "Assigned\\n";
  // output - Assigned
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:'Tip - a safer modern approach is "copy and swap", but for beginners this direct version is easier to understand.'})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ho,{})}),"Move constructor"]}),t.jsx("p",{className:"p",children:"Runs when you create a new object by taking resources from a temporary or an object you do not need anymore. It avoids deep copying by stealing the pointer and nulling the source."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - move constructor steals resource"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <utility>

class Buffer {
  int *data;
  int size;

public:
  Buffer(int n) : size(n) {
    data = new int[size];
    for (int i = 0; i < size; i++) data[i] = i;
  }

  // move constructor
  Buffer(Buffer &&other) noexcept {
    data = other.data;
    size = other.size;

    other.data = nullptr;
    other.size = 0;
  }

  ~Buffer() {
    delete[] data;
  }
};

int main() {
  Buffer a(5);

  Buffer b = std::move(a); // move constructor

  std::cout << "Moved\\n";
  // output - Moved
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Move assignment operator"}),t.jsx("p",{className:"p",children:"Runs when an existing object is assigned from a temporary or movable object. It should free old resources, then steal the new ones, and leave the source in a safe empty state."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - move assignment steals resource"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <utility>

class Buffer {
  int *data;
  int size;

public:
  Buffer(int n) : size(n) {
    data = new int[size];
  }

  // move assignment
  Buffer& operator=(Buffer &&other) noexcept {
    if (this == &other) return *this;

    delete[] data; // free old

    data = other.data;
    size = other.size;

    other.data = nullptr;
    other.size = 0;

    return *this;
  }

  ~Buffer() {
    delete[] data;
  }
};

int main() {
  Buffer a(2);
  Buffer b(10);

  b = std::move(a); // move assignment

  std::cout << "Move assigned\\n";
  // output - Move assigned
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vt,{})}),"Rule of Three"]}),t.jsx("p",{className:"p",children:"If your class manages a resource manually and you define any one of these, you probably need all three - destructor, copy constructor, copy assignment operator."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Destructor"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Copy constructor"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Copy assignment operator"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Rule of Five"}),t.jsx("p",{className:"p",children:"In modern C++, if you manage resources manually and you implement copy operations, you should also consider move operations. That makes five special functions."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Destructor"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Copy constructor"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Copy assignment operator"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Move constructor"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Move assignment operator"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Rule of Zero"}),t.jsx("p",{className:"p",children:"Best modern practice - do not manually manage resources. Use standard library types like std::vector, std::string, and smart pointers. Then you usually do not need to write any special member functions because the defaults are safe."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - rule of zero with std::vector"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>

class Buffer {
  std::vector<int> data;

public:
  Buffer(int n) : data(n, 0) {}
  // no destructor, no copy, no move needed
};

int main() {
  Buffer a(5);
  Buffer b = a; // safe copy

  std::cout << "Safe\\n";
  // output - Safe
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"If you can follow Rule of Zero, your code becomes safer and you avoid memory bugs automatically."})]}),t.jsxs("div",{className:"section last",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ae,{})}),"Quick mental checklist"]}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"If you use raw new or delete, be careful and follow Rule of Three or Rule of Five"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Prefer std::vector, std::string, and smart pointers whenever possible"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Moving steals resources and leaves the source valid but empty"]})]})]})]})]})},jx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},Nx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(jx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(xr,{})}),t.jsx("span",{className:"title",children:"Templates and Generic Programming"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Templates let you write code once and reuse it for multiple types. This is called generic programming. Instead of writing separate functions for int, float, and double, you write one template that works for all."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ae,{})}),"Function templates"]}),t.jsx("p",{className:"p",children:"A function template is a blueprint for a function. The compiler creates the real function when you call it with a specific type."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - function template"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

template <typename T>
T add(T a, T b) {
  return a + b;
}

int main() {
  cout << add<int>(2, 3) << endl;      // output - 5
  cout << add<double>(2.5, 1.2) << endl; // output - 3.7
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"You can usually skip <int> because the compiler can deduce types from arguments."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mt,{})}),"Class templates"]}),t.jsx("p",{className:"p",children:"A class template works the same way, but for classes. This is how containers like vector and pair are built."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - class template"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

template <typename T>
class Box {
public:
  T value;

  Box(T v) : value(v) {}

  void show() {
    cout << value << endl;
  }
};

int main() {
  Box<int> b1(10);
  b1.show(); // output - 10

  Box<string> b2("hello");
  b2.show(); // output - hello

  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(tl,{})}),"Template specialization"]}),t.jsx("p",{className:"p",children:"Specialization means you provide a custom version of a template for a specific type. Use this when one type needs different logic."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - specialization for bool"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

template <typename T>
void printValue(T v) {
  cout << v << endl;
}

// specialization for bool
template <>
void printValue<bool>(bool v) {
  cout << (v ? "true" : "false") << endl;
}

int main() {
  printValue<int>(7);   // output - 7
  printValue<bool>(true); // output - true
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Specialization is useful but can get complex. Keep it limited to cases where you really need custom behavior."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ho,{})}),"Variadic templates"]}),t.jsx("p",{className:"p",children:"Variadic templates accept a variable number of template arguments. This is used in modern C++ libraries and helps create flexible utilities."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - print many values"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

void printAll() {
  cout << endl;
}

template <typename T, typename... Rest>
void printAll(T first, Rest... rest) {
  cout << first << " ";
  printAll(rest...);
}

int main() {
  printAll(1, 2, 3, "hi"); 
  // output - 1 2 3 hi
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:'The "...rest" is called a parameter pack. It lets you pass many values without manually writing overloads.'})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xr,{})}),"Concepts basics"]}),t.jsx("p",{className:"p",children:"Concepts (C++20) allow you to put rules on templates. This makes errors clearer and prevents templates from being used with invalid types."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - concept style check (simple)"}),t.jsx("pre",{className:"code",children:`// requires C++20
#include <iostream>
#include <concepts>
using namespace std;

template <typename T>
requires integral<T>
T addInt(T a, T b) {
  return a + b;
}

int main() {
  cout << addInt(2, 3) << endl; // output - 5
  // addInt(2.2, 1.1); // error - not integral
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Concepts make templates beginner friendly because errors become readable. If you are not using C++20, skip this part for now and come back later."})]})]})]})},bx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 16000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .grid2 {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 12px;
        }

        .mini {
            grid-column: span 6;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .miniTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 6px;
        }

        .miniText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        @media (max-width: 900px) {
            .mini {
                grid-column: span 12;
            }
        }
    `},wx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(bx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(Mt,{})}),t.jsx("span",{className:"title",children:"Standard Template Library - STL"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"STL is a big part of modern C++. It gives you ready to use data structures and algorithms. The main idea is simple - you store data in containers, you access them using iterators, and you process them using algorithms."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xr,{})}),"Containers"]}),t.jsx("p",{className:"p",children:"Containers store data. Choose the container based on how you add, remove, and search elements."}),t.jsxs("div",{className:"grid2",children:[t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"vector"}),t.jsx("div",{className:"miniText",children:"Dynamic array. Fast random access. Good default choice."})]}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"list"}),t.jsx("div",{className:"miniText",children:"Doubly linked list. Fast insert delete in middle. No random access."})]}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"deque"}),t.jsx("div",{className:"miniText",children:"Double ended queue. Fast push front and back. Random access supported."})]}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"set"}),t.jsx("div",{className:"miniText",children:"Sorted unique values. Fast search. Usually tree based."})]}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"map"}),t.jsx("div",{className:"miniText",children:"Key value store. Sorted by key. Fast lookup."})]}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"unordered_map"}),t.jsx("div",{className:"miniText",children:"Key value store using hashing. Average O(1) lookup."})]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - basic containers"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>
#include <map>
#include <unordered_map>
using namespace std;

int main() {
  vector<int> v = {3, 1, 2};
  map<string, int> marks;
  unordered_map<string, int> freq;

  marks["ash"] = 95;
  freq["cpp"]++;

  cout << v.size() << endl;        // output - 3
  cout << marks["ash"] << endl;    // output - 95
  cout << freq["cpp"] << endl;     // output - 1
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(hn,{})}),"Iterators"]}),t.jsx("p",{className:"p",children:"Iterators are like pointers that help you traverse containers. Most algorithms work with iterators instead of specific containers."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - iterate a vector"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> v = {10, 20, 30};

  for (auto it = v.begin(); it != v.end(); it++) {
    cout << *it << " ";
  }

  // output - 10 20 30
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vn,{})}),"Algorithms"]}),t.jsx("p",{className:"p",children:"Algorithms are reusable functions that work on iterator ranges. Most live in the algorithm header."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"sort"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  vector<int> v = {4, 1, 3, 2};
  sort(v.begin(), v.end());

  for (int x : v) cout << x << " ";
  // output - 1 2 3 4
  return 0;
}`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"find"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  vector<int> v = {5, 7, 9};
  auto it = find(v.begin(), v.end(), 7);

  if (it != v.end()) cout << "found" << endl;
  else cout << "not found" << endl;

  // output - found
  return 0;
}`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"count"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  vector<int> v = {1, 2, 2, 2, 3};
  int c = count(v.begin(), v.end(), 2);

  cout << c << endl;
  // output - 3
  return 0;
}`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"transform"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  vector<int> v = {1, 2, 3};
  vector<int> out(v.size());

  transform(v.begin(), v.end(), out.begin(), [](int x) {
    return x * 2;
  });

  for (int x : out) cout << x << " ";
  // output - 2 4 6
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ae,{})}),"Lambda expressions"]}),t.jsx("p",{className:"p",children:"Lambdas are small anonymous functions. They are extremely common with STL algorithms."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - custom sort using lambda"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  vector<int> v = {3, 10, 2, 7};

  // sort descending
  sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;
  });

  for (int x : v) cout << x << " ";
  // output - 10 7 3 2
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Functional utilities"}),t.jsx("p",{className:"p",children:"The functional header provides tools for function like objects and helpers. You will often see std::function and std::greater in real code."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"std::greater - comparator used in sorting"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"std::function - store a callable in a variable"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"std::bind - bind arguments to create a new callable"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - std::function"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <functional>
using namespace std;

int add(int a, int b) { return a + b; }

int main() {
  function<int(int,int)> fn = add;
  cout << fn(2, 5) << endl;

  // output - 7
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"In competitive programming, STL helps you write shorter and faster solutions. In real projects, STL improves safety and readability."})]})]})]})},kx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},Sx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(kx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(pn,{})}),t.jsx("span",{className:"title",children:"Exception Handling"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Exceptions are a way to handle runtime errors without mixing error checks everywhere. Instead of returning error codes, you can throw an error and handle it at a higher level using try and catch."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vt,{})}),"try"]}),t.jsx("p",{className:"p",children:"Put code that might fail inside a try block. If an exception is thrown inside try, normal execution stops and control moves to the matching catch block."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - try with safe flow"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  try {
    cout << "Inside try" << endl;
  } catch (...) {
    cout << "Caught something" << endl;
  }

  cout << "Program continues" << endl;
  // output -
  // Inside try
  // Program continues
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Wu,{})}),"throw"]}),t.jsx("p",{className:"p",children:"throw is used to raise an exception. You can throw built in types like int or string, but in real projects you usually throw exception objects."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - throw on invalid input"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int age = -1;

  try {
    if (age < 0) {
      throw "Age cannot be negative";
    }
    cout << "Age is valid" << endl;
  } catch (const char* msg) {
    cout << msg << endl;
  }

  // output - Age cannot be negative
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"catch"}),t.jsx("p",{className:"p",children:"catch handles the thrown exception. You can catch specific types first, and optionally use catch(...) as a fallback for unknown exceptions."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - multiple catches"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  try {
    throw 404;
  } catch (int code) {
    cout << "Error code: " << code << endl;
  } catch (...) {
    cout << "Unknown error" << endl;
  }

  // output - Error code: 404
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Custom exceptions"}),t.jsx("p",{className:"p",children:"Custom exceptions make errors clearer. A common approach is to derive from std::exception and override what(). Then you can catch by reference and print the message."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - custom exception class"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <exception>
using namespace std;

class AgeError : public exception {
public:
  const char* what() const noexcept override {
    return "Age must be 0 or above";
  }
};

int main() {
  int age = -5;

  try {
    if (age < 0) {
      throw AgeError();
    }
    cout << "Valid age" << endl;
  } catch (const exception& e) {
    cout << e.what() << endl;
  }

  // output - Age must be 0 or above
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:'Catch custom exceptions by reference like "catch (const std::exception& e)" to avoid copying.'})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"noexcept"}),t.jsx("p",{className:"p",children:"noexcept tells the compiler that a function will not throw exceptions. This can help optimizations and is important for move operations. If a noexcept function throws, the program will terminate."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - noexcept function"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

void logOk() noexcept {
  cout << "No exceptions here" << endl;
}

int main() {
  logOk();
  // output - No exceptions here
  return 0;
}`})]}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use noexcept for functions that truly do not throw"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Helpful for move constructors and move assignment"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"If it throws anyway, program terminates"]})]})]})]})]})},Cx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},Ex=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(Cx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(Rs,{})}),t.jsx("span",{className:"title",children:"File Handling"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsxs("p",{className:"p",children:["File handling in C++ is done using stream classes from the standard library. The main header is"," ",t.jsx("code",{children:"fstream"}),". You read files using"," ",t.jsx("code",{children:"ifstream"})," and write files using"," ",t.jsx("code",{children:"ofstream"}),". Always check if the file opened successfully before reading or writing."]})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(zm,{})}),"fstream"]}),t.jsxs("p",{className:"p",children:[t.jsx("code",{children:"fstream"})," is the header that provides file stream classes. It contains ",t.jsx("code",{children:"ifstream"}),","," ",t.jsx("code",{children:"ofstream"}),", and ",t.jsx("code",{children:"fstream"}),"."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - include fstream"}),t.jsx("pre",{className:"code",children:`#include <fstream>

// output - fstream included`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Pm,{})}),"ifstream"]}),t.jsxs("p",{className:"p",children:[t.jsx("code",{children:"ifstream"})," is used for reading from files. You open a file path and then read using"," ",t.jsx("code",{children:"getline"})," or stream extraction"," ",t.jsx("code",{children:">>"}),"."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - open file for reading"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <fstream>
#include <string>

int main() {
  std::ifstream in("notes.txt");

  if (!in.is_open()) {
    std::cout << "Failed to open file\\n";
    return 0;
  }

  std::cout << "File opened\\n";
  in.close();
  return 0;
}

// output - File opened (if notes.txt exists)`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ou,{})}),"ofstream"]}),t.jsxs("p",{className:"p",children:[t.jsx("code",{children:"ofstream"})," is used for writing to files. By default it overwrites the file content. If you want to append, use ",t.jsx("code",{children:"std::ios::app"}),"."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - write to file"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <fstream>

int main() {
  std::ofstream out("log.txt");

  if (!out.is_open()) {
    std::cout << "Failed to open file\\n";
    return 0;
  }

  out << "Hello from C++\\n";
  out.close();

  std::cout << "Written to file\\n";
  return 0;
}

// output - Written to file`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - append mode"}),t.jsx("pre",{className:"code",children:`#include <fstream>

int main() {
  std::ofstream out("log.txt", std::ios::app);
  out << "New line appended\\n";
  return 0;
}

// output - adds a new line at end of log.txt`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Reading files"}),t.jsxs("p",{className:"p",children:["There are two common ways to read - line by line using"," ",t.jsx("code",{children:"getline"})," or word by word using"," ",t.jsx("code",{children:">>"}),". For text files, line by line is usually easiest."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - read line by line"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <fstream>
#include <string>

int main() {
  std::ifstream in("notes.txt");
  if (!in.is_open()) {
    std::cout << "Failed to open file\\n";
    return 0;
  }

  std::string line;
  while (std::getline(in, line)) {
    std::cout << line << "\\n";
  }

  in.close();
  return 0;
}

// output - prints full file line by line`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - read word by word"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <fstream>
#include <string>

int main() {
  std::ifstream in("notes.txt");
  if (!in.is_open()) return 0;

  std::string word;
  while (in >> word) {
    std::cout << word << "\\n";
  }

  return 0;
}

// output - prints each word on a new line`})]}),t.jsx("div",{className:"hint",children:"Tip - getline reads spaces too, so it is better for full sentences. The >> operator splits by whitespace."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Writing files"}),t.jsxs("p",{className:"p",children:["You can write text using ",t.jsx("code",{children:"<<"})," just like printing to console. Prefer adding ",t.jsx("code",{children:"\\\\n"})," for new lines. Always close the file when done."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - write multiple lines"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <fstream>

int main() {
  std::ofstream out("report.txt");
  if (!out.is_open()) {
    std::cout << "Failed to open file\\n";
    return 0;
  }

  out << "C++ Report\\n";
  out << "Line 1\\n";
  out << "Line 2\\n";
  out.close();

  std::cout << "Report saved\\n";
  return 0;
}

// output - Report saved`})]}),t.jsx("div",{className:"hint",children:"Tip - if you forget to close, the destructor closes it when the stream object goes out of scope, but closing explicitly is a good habit."})]})]})]})},Tx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},zx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(Tx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(vn,{})}),t.jsx("span",{className:"title",children:"Advanced Concepts"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:'These concepts are what make C++ feel "serious". If you understand const correctness, RAII, object lifetime, and dispatch rules, you avoid most real world bugs and write code that behaves predictably.'})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vt,{})}),"Const correctness"]}),t.jsx("p",{className:"p",children:'const means "do not modify". It makes code safer and easier to reason about. Use const for values that should not change, and prefer const references to avoid copying. Also mark member functions const when they do not modify object state.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - const variables and const member function"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <string>

class User {
  std::string name;

public:
  User(const std::string& n) : name(n) {}

  // const member function - promises not to modify the object
  std::string getName() const {
    return name;
  }
};

int main() {
  const int x = 10;
  // x = 11; // error - cannot modify a const variable

  User u("Ash");
  std::cout << u.getName() << std::endl;

  // output - Ash
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"If you cannot call a method on a const object, that method is missing const at the end."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mt,{})}),"RAII concept"]}),t.jsx("p",{className:"p",children:"RAII means Resource Acquisition Is Initialization. Simple idea - acquire resources in constructors and release them in destructors. This guarantees cleanup even when exceptions happen. Smart pointers and STL containers follow RAII."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - RAII using unique_ptr"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <memory>

int main() {
  // memory is released automatically when ptr goes out of scope
  std::unique_ptr<int> ptr(new int(42));

  std::cout << *ptr << std::endl;

  // output - 42
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"RAII is the reason modern C++ avoids raw new and delete in application code."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Am,{})}),"Memory model basics"]}),t.jsx("p",{className:"p",children:"C++ programs use memory in different regions - stack, heap, global or static storage, and code segment. Understanding where data lives helps you avoid leaks and crashes. In multithreading, the C++ memory model also defines how threads see shared values."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Stack - automatic storage, fast, limited size"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Heap - dynamic allocation, flexible, must be managed"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Static storage - globals and static variables"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Code segment - compiled instructions"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xr,{})}),"Stack vs heap"]}),t.jsx("p",{className:"p",children:"Stack memory is allocated and freed automatically when scopes enter and exit. Heap memory is allocated dynamically and lives until you free it or it is managed by an RAII object."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - stack vs heap allocation"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <memory>

int main() {
  int a = 5; // stack

  // heap via RAII smart pointer
  auto p = std::make_unique<int>(99);

  std::cout << a << " " << *p << std::endl;

  // output - 5 99
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"If you return a pointer or reference to a stack variable, it becomes a dangling reference. Big bug."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ru,{})}),"Object lifetime"]}),t.jsx("p",{className:"p",children:"Object lifetime is the time between construction and destruction. Stack objects are destroyed automatically when leaving scope. Heap objects live until deleted or until their RAII owner is destroyed. Lifetime mistakes cause dangling pointers, use after free, or leaks."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - scope based destruction"}),t.jsx("pre",{className:"code",children:`#include <iostream>

class Log {
public:
  Log() { std::cout << "start\\n"; }
  ~Log() { std::cout << "end\\n"; }
};

int main() {
  {
    Log x; // constructed here
    std::cout << "inside\\n";
  } // destroyed here

  // output
  // start
  // inside
  // end
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Inline vs virtual dispatch"}),t.jsx("p",{className:"p",children:"Inline means the compiler may replace a function call with the function body for speed. Virtual dispatch means the function is chosen at runtime based on the actual object type. Virtual calls usually cannot be inlined in the general case because the target may not be known at compile time."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - virtual dispatch"}),t.jsx("pre",{className:"code",children:`#include <iostream>

class Base {
public:
  virtual void speak() { std::cout << "base\\n"; }
};

class Derived : public Base {
public:
  void speak() override { std::cout << "derived\\n"; }
};

int main() {
  Base* p = new Derived();
  p->speak(); // runtime dispatch

  delete p;

  // output - derived
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Use virtual only when you really need runtime polymorphism. Otherwise prefer normal functions for simplicity and performance."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Operator overloading"}),t.jsx("p",{className:"p",children:"C++ allows you to define behavior for operators like +, -, == for your own types. Use it only when it makes code clearer. Keep it predictable and consistent with normal operator meaning."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - overload + for a small struct"}),t.jsx("pre",{className:"code",children:`#include <iostream>

struct Vec2 {
  int x;
  int y;

  Vec2 operator+(const Vec2& other) const {
    return { x + other.x, y + other.y };
  }
};

int main() {
  Vec2 a{2, 3};
  Vec2 b{5, 1};
  Vec2 c = a + b;

  std::cout << c.x << " " << c.y << std::endl;

  // output - 7 4
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Namespaces in depth"}),t.jsx("p",{className:"p",children:"Namespaces prevent naming conflicts. You can nest namespaces, create alias names, and avoid global naming collisions in large projects. Prefer std:: prefix in real code instead of using namespace std globally."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - nested namespace and alias"}),t.jsx("pre",{className:"code",children:`#include <iostream>

namespace app {
  namespace utils {
    int add(int a, int b) { return a + b; }
  }
}

// alias
namespace u = app::utils;

int main() {
  std::cout << u::add(2, 5) << std::endl;

  // output - 7
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Avoid putting your code in the global namespace in big projects. Namespaces keep things clean and modular."})]})]})]})},Ix={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 20000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},Bx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(Ix.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(vn,{})}),t.jsx("span",{className:"title",children:"Modern C++ Features"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Modern C++ (C++11 and later) makes C++ safer and more expressive. The big idea is simple - write less boilerplate, avoid raw memory bugs, and let the compiler help you. These features are very common in real projects and interviews."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xr,{})}),"auto"]}),t.jsx("p",{className:"p",children:"auto lets the compiler infer the type from the initializer. It is useful with long STL types. Still, keep code readable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - auto with vector"}),t.jsx("pre",{className:"code",children:`#include <vector>
#include <iostream>

int main() {
  std::vector<int> a = {1, 2, 3};

  auto x = a[0]; // int
  std::cout << x << std::endl;

  // output - 1
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"decltype"}),t.jsx("p",{className:"p",children:"decltype gives you the type of an expression without evaluating it. It is useful in templates and generic code."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - decltype"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int main() {
  int a = 10;
  decltype(a) b = 20; // b is int

  std::cout << b << std::endl;
  // output - 20
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"nullptr"}),t.jsx("p",{className:"p",children:"nullptr is a dedicated null pointer value. It avoids confusion with 0 or NULL, especially with function overloading."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - nullptr"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int main() {
  int *p = nullptr;

  if (p == nullptr) {
    std::cout << "p is null" << std::endl;
  }

  // output - p is null
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Range based for"}),t.jsx("p",{className:"p",children:"Range based for is cleaner for iterating containers. Use references when you want to avoid copies."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - range based for"}),t.jsx("pre",{className:"code",children:`#include <vector>
#include <iostream>

int main() {
  std::vector<int> a = {2, 4, 6};

  for (int v : a) {
    std::cout << v << " ";
  }

  // output - 2 4 6
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Rm,{})}),"Move semantics"]}),t.jsx("p",{className:"p",children:"Move semantics avoids expensive copies by transferring ownership of resources. std::move converts an lvalue into an rvalue so move operations can happen."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - std::move"}),t.jsx("pre",{className:"code",children:`#include <string>
#include <iostream>
#include <utility>

int main() {
  std::string a = "hello";
  std::string b = std::move(a);

  std::cout << b << std::endl;
  // output - hello

  // a is now valid but unspecified state
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:'Move does not delete data magically. It just allows the destination to "steal" resources from the source.'})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Smart pointers"}),t.jsx("p",{className:"p",children:"Smart pointers manage memory automatically. Prefer them over raw new and delete. unique_ptr is single owner, shared_ptr is shared ownership."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - unique_ptr"}),t.jsx("pre",{className:"code",children:`#include <memory>
#include <iostream>

int main() {
  auto p = std::make_unique<int>(42);

  std::cout << *p << std::endl;
  // output - 42

  // memory is freed automatically
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Lambda expressions"}),t.jsx("p",{className:"p",children:"Lambdas are small inline functions, commonly used with STL algorithms. Capture lets you use variables from outer scope."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - lambda with sort"}),t.jsx("pre",{className:"code",children:`#include <vector>
#include <algorithm>
#include <iostream>

int main() {
  std::vector<int> a = {3, 1, 2};

  std::sort(a.begin(), a.end(), [](int x, int y) {
    return x < y;
  });

  for (int v : a) std::cout << v << " ";
  // output - 1 2 3

  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"constexpr"}),t.jsx("p",{className:"p",children:"constexpr means the value can be computed at compile time. This enables faster code and safer constants."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - constexpr function"}),t.jsx("pre",{className:"code",children:`#include <iostream>

constexpr int square(int x) {
  return x * x;
}

int main() {
  constexpr int v = square(5);
  std::cout << v << std::endl;

  // output - 25
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Structured bindings"}),t.jsx("p",{className:"p",children:"Structured bindings unpack tuples, pairs, and structs into named variables. It makes code cleaner and readable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - pair unpack"}),t.jsx("pre",{className:"code",children:`#include <utility>
#include <iostream>

int main() {
  std::pair<int, int> p = {10, 20};

  auto [a, b] = p;
  std::cout << a << " " << b << std::endl;

  // output - 10 20
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"std::optional"}),t.jsx("p",{className:"p",children:"optional represents a value that may or may not exist. It is safer than returning magic values like -1."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - optional return"}),t.jsx("pre",{className:"code",children:`#include <optional>
#include <iostream>

std::optional<int> findEven(int x) {
  if (x % 2 == 0) return x;
  return std::nullopt;
}

int main() {
  auto r = findEven(7);

  if (!r.has_value()) {
    std::cout << "not found" << std::endl;
  }

  // output - not found
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"std::variant"}),t.jsx("p",{className:"p",children:"variant can hold one value from multiple types. It is a type safe union. Use std::visit to handle the active type."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - variant"}),t.jsx("pre",{className:"code",children:`#include <variant>
#include <iostream>
#include <string>

int main() {
  std::variant<int, std::string> v;

  v = 5;
  std::cout << std::get<int>(v) << std::endl; // output - 5

  v = std::string("ok");
  std::cout << std::get<std::string>(v) << std::endl; // output - ok

  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Use std::holds_alternative<T>(v) to check which type is active."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"std::thread basics"]}),t.jsx("p",{className:"p",children:"std::thread allows running code in parallel. Always join or detach a thread, otherwise your program may terminate."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - thread + join"}),t.jsx("pre",{className:"code",children:`#include <thread>
#include <iostream>

void work() {
  std::cout << "worker running" << std::endl;
}

int main() {
  std::thread t(work);
  t.join();

  // output - worker running
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Thread safety is a big topic. For shared data you will need mutex or other synchronization tools."})]})]})]})},_x={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            display: grid;
            gap: 10px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},Lx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(_x.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(ho,{})}),t.jsx("span",{className:"title",children:"Concurrency Basics"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("p",{className:"p",children:"Concurrency means doing multiple tasks at the same time. In C++, this usually means running code in multiple threads. It can improve performance, but it also brings new problems like race conditions and deadlocks."}),t.jsx("p",{className:"p",children:"The main rule - if multiple threads touch the same data, you must control access to that data."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"std::thread"]}),t.jsx("p",{className:"p",children:"std::thread starts a new thread of execution. After starting a thread, you should usually call join to wait for it to finish. If you do not join or detach a thread, the program can terminate."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - start and join a thread"]}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <thread>

void work() {
  std::cout << "Thread running\\n";
}

int main() {
  std::thread t(work);
  t.join(); // wait for thread to finish

  std::cout << "Main done\\n";
  // output -
  // Thread running
  // Main done
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ms,{})}),"Mutex"]}),t.jsx("p",{className:"p",children:"A mutex is a lock that ensures only one thread can enter a critical section at a time. Use it when multiple threads read and write the same shared variable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - protect shared counter with mutex"]}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <thread>
#include <mutex>

std::mutex m;
int counter = 0;

void inc() {
  for (int i = 0; i < 10000; i++) {
    m.lock();
    counter++;
    m.unlock();
  }
}

int main() {
  std::thread a(inc);
  std::thread b(inc);

  a.join();
  b.join();

  std::cout << counter << "\\n";
  // output - 20000 (expected with proper locking)
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Manual lock and unlock works, but it is risky. If your code returns early or throws, unlock might not happen. That is why lock_guard is preferred."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(vt,{})}),"Lock guard"]}),t.jsx("p",{className:"p",children:"std::lock_guard automatically locks a mutex when created and unlocks it when it goes out of scope. This is safer because it prevents forgetting to unlock."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - safer locking using lock_guard"]}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <thread>
#include <mutex>

std::mutex m;
int counter = 0;

void inc() {
  for (int i = 0; i < 10000; i++) {
    std::lock_guard<std::mutex> guard(m);
    counter++;
    // auto unlock when guard goes out of scope
  }
}

int main() {
  std::thread a(inc);
  std::thread b(inc);

  a.join();
  b.join();

  std::cout << counter << "\\n";
  // output - 20000
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"Atomic basics"]}),t.jsx("p",{className:"p",children:"An atomic variable supports thread safe read and write without a mutex for simple operations. Use atomics for counters, flags, and small shared state. For complex operations across multiple variables, a mutex is still needed."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - atomic counter"]}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <thread>
#include <atomic>

std::atomic<int> counter(0);

void inc() {
  for (int i = 0; i < 10000; i++) {
    counter++; // atomic increment
  }
}

int main() {
  std::thread a(inc);
  std::thread b(inc);

  a.join();
  b.join();

  std::cout << counter.load() << "\\n";
  // output - 20000
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pn,{})}),"Deadlock concept"]}),t.jsx("p",{className:"p",children:"A deadlock happens when two threads wait forever for each other to release locks. Most deadlocks happen when you lock multiple mutexes in different orders."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ae,{})}),"Example - common deadlock pattern"]}),t.jsx("pre",{className:"code",children:`// Thread 1 locks A then B
// Thread 2 locks B then A
// both can wait forever

// output - program may hang (deadlock)`})]}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Always lock mutexes in the same order"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Keep critical sections small"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Prefer lock_guard and scoped locking"]})]}),t.jsx("div",{className:"hint",children:"If you must lock multiple mutexes, use consistent lock ordering or use utilities like std::scoped_lock."})]})]})]})},Px={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},Rx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(Px.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(vt,{})}),t.jsx("span",{className:"title",children:"Best Practices"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:'C++ gives you power, but it also punishes careless code. Best practices are basically rules that reduce bugs, prevent memory leaks, and keep code readable. Think of them as "defaults" you follow unless you have a strong reason not to.'})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xr,{})}),"Rule of Three Five Zero"]}),t.jsx("p",{className:"p",children:"If your class manages a resource (memory, file handle, socket), you must define the copy behavior properly. Modern C++ pushes you toward Rule of Zero by using RAII types like std::string and std::vector so you do not write custom copy or destroy code."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Rule of Three - destructor, copy constructor, copy assignment"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Rule of Five - add move constructor, move assignment"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Rule of Zero - use standard types, write none of them"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - Rule of Zero using std::string"}),t.jsx("pre",{className:"code",children:`#include <string>
#include <iostream>

class User {
public:
  std::string name;
  int age;

  User(std::string n, int a) : name(n), age(a) {}
  // no custom destructor, copy, move needed
};

int main() {
  User u("Ash", 25);
  std::cout << u.name << "\\n";
  // output - Ash
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ms,{})}),"Avoid raw pointers"]}),t.jsx("p",{className:"p",children:"Raw pointers are fine for non owning references, but owning raw pointers lead to leaks and double delete problems. Prefer smart pointers for ownership and use references when possible."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - unique_ptr for ownership"}),t.jsx("pre",{className:"code",children:`#include <memory>
#include <iostream>

int main() {
  auto p = std::make_unique<int>(42);
  std::cout << *p << "\\n";
  // output - 42
  // memory is freed automatically
}`})]}),t.jsx("div",{className:"hint",children:'Use raw pointers mainly for "view" usage, not ownership. Ownership should be clear and automatic.'})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Im,{})}),"Use const correctly"]}),t.jsx("p",{className:"p",children:'const makes your code safer and clearer. It tells the compiler and the reader "this will not change". Use it for function parameters, member functions, and variables that should not be modified.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - const reference and const member function"}),t.jsx("pre",{className:"code",children:`#include <string>
#include <iostream>

class Box {
  int w;
public:
  Box(int width) : w(width) {}

  int width() const { 
    return w; // const function does not modify object
  }
};

void printName(const std::string& name) {
  std::cout << name << "\\n";
}

int main() {
  Box b(10);
  std::cout << b.width() << "\\n"; // output - 10
  printName("cpp-core-notes");     // output - cpp-core-notes
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"Prefer RAII"]}),t.jsx("p",{className:"p",children:"RAII means Resource Acquisition Is Initialization. In simple words - tie resource lifetime to object lifetime. When an object is created it acquires the resource, and when it goes out of scope it releases it automatically. This prevents leaks even when exceptions happen."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - file closes automatically"}),t.jsx("pre",{className:"code",children:`#include <fstream>
#include <string>

int main() {
  std::ofstream out("notes.txt");
  out << "C++ RAII\\n";
  // output - file written
  // file closes automatically when out goes out of scope
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Rs,{})}),"Header separation"]}),t.jsx("p",{className:"p",children:"Keep declarations in headers and implementations in .cpp files. This improves compile structure and makes modules reusable. Always use include guards or pragma once."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - header guard pattern"}),t.jsx("pre",{className:"code",children:`// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);

#endif

// output - prevents multiple include errors`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pn,{})}),"Defensive programming"]}),t.jsx("p",{className:"p",children:"Validate assumptions. Check pointers, indexes, and return values. Fail fast when inputs are invalid. This makes bugs easier to catch and prevents silent crashes."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - guard clause and bounds check"}),t.jsx("pre",{className:"code",children:`#include <vector>
#include <iostream>

int getAt(const std::vector<int>& v, int idx) {
  if (idx < 0 || idx >= (int)v.size()) return -1; // guard
  return v[idx];
}

int main() {
  std::vector<int> a = {10, 20, 30};
  std::cout << getAt(a, 2) << "\\n";  // output - 30
  std::cout << getAt(a, 5) << "\\n";  // output - -1
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Avoid undefined behavior"}),t.jsx("p",{className:"p",children:"Undefined behavior means the program can do anything - crash, work sometimes, or produce weird output. Common causes are out of bounds access, using freed memory, uninitialized variables, invalid pointer dereference, and signed integer overflow."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Never access array out of range"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Do not use deleted pointers"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Initialize variables before use"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Avoid returning references to local variables"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - common UB and the safe fix"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int main() {
  int x = 10;
  int* p = &x;

  std::cout << *p << "\\n"; // output - 10

  // UB example (do not do this)
  // int* bad;
  // std::cout << *bad << "\\n"; // uninitialized pointer

  // safe fix
  int* safe = nullptr;
  if (safe != nullptr) {
    std::cout << *safe << "\\n";
  }

  // output - safe path runs without crash
}`})]}),t.jsx("div",{className:"hint",children:'Most C++ "random crashes" are actually undefined behavior hiding somewhere. Fixing UB fixes stability.'})]})]})]})},Ax={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `};function Mx(s){return V({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"},child:[]}]})(s)}const Ox=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(Ax.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(Vm,{})}),t.jsx("span",{className:"title",children:"Compilation and Build Systems"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"In C++, writing code is only half the story. The other half is building it correctly. You compile source files, link libraries, and produce an executable. Build tools like Make and CMake help you automate this, especially when projects grow."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"g++"]}),t.jsx("p",{className:"p",children:"g++ is the GNU C++ compiler. It compiles your .cpp files into an executable. For small programs you can compile in one command. For multiple files, you typically compile each file into an object file, then link them."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - compile and run"}),t.jsx("pre",{className:"code",children:`g++ main.cpp -o app
./app

// output - depends on your program`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - multiple files build"}),t.jsx("pre",{className:"code",children:`g++ -c main.cpp -o main.o
g++ -c utils.cpp -o utils.o
g++ main.o utils.o -o app

// output - executable created from multiple objects`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(tl,{})}),"Compilation flags"]}),t.jsx("p",{className:"p",children:"Flags change how your code is compiled. Some flags enable warnings, some optimize performance, and some include debug info. Good defaults help you catch bugs early."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"-Wall -Wextra -Wpedantic - better warnings"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"-O0 -O1 -O2 -O3 - optimization level"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"-g - add debug symbols (for gdb)"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"-std=c++17 or -std=c++20 - choose language standard"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - solid beginner friendly build"}),t.jsx("pre",{className:"code",children:`g++ -std=c++17 -Wall -Wextra -Wpedantic -O0 -g main.cpp -o app

// output - app built with warnings + debug info`})]}),t.jsx("div",{className:"hint",children:"Using warnings is not optional. Warnings are the compiler trying to save you from future pain."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mx,{})}),"Debug vs Release"]}),t.jsx("p",{className:"p",children:"Debug builds are made for development. They include debug symbols and usually no optimization, so stepping through code is easy. Release builds are optimized for speed and smaller binaries, used for final deployment."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - debug build"}),t.jsx("pre",{className:"code",children:`g++ -std=c++17 -O0 -g main.cpp -o app_debug
// output - easier debugging, slower runtime`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - release build"}),t.jsx("pre",{className:"code",children:`g++ -std=c++17 -O2 main.cpp -o app_release
// output - faster runtime, harder debugging`})]}),t.jsx("div",{className:"hint",children:"Typical habit - develop in Debug, test and ship in Release."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Fu,{})}),"Static vs dynamic linking"]}),t.jsx("p",{className:"p",children:"Linking means connecting your object files with library code. Static linking copies library code into your executable. Dynamic linking keeps libraries separate and loads them at runtime."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Static linking - bigger executable, fewer runtime dependencies"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Dynamic linking - smaller executable, needs shared libraries installed"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - static linking idea"}),t.jsx("pre",{className:"code",children:`// concept example (flags differ by system and libraries)
// g++ main.cpp -static -o app

// output - binary tries to include needed libs inside`})]}),t.jsx("div",{className:"hint",children:"In real projects, you decide this based on deployment needs - portability vs size and updates."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Rs,{})}),"Makefile basics"]}),t.jsx("p",{className:"p",children:"Make is a build tool that uses a Makefile to automate compilation. It rebuilds only what changed. You define targets, dependencies, and commands. This saves time for multi file projects."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - tiny Makefile"}),t.jsx("pre",{className:"code",children:`# Makefile
CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -O0 -g

app: main.o utils.o
	$(CXX) main.o utils.o -o app

main.o: main.cpp
	$(CXX) $(CXXFLAGS) -c main.cpp -o main.o

utils.o: utils.cpp
	$(CXX) $(CXXFLAGS) -c utils.cpp -o utils.o

clean:
	rm -f *.o app

# output - run "make" to build, "make clean" to cleanup`})]}),t.jsx("div",{className:"hint",children:"Tabs matter in Makefiles. Commands under targets usually must start with a tab."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xr,{})}),"CMake basics"]}),t.jsx("p",{className:"p",children:"CMake is a cross platform build system generator. You write a CMakeLists.txt file describing your project. CMake then generates platform specific build files like Makefiles or Visual Studio projects."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - minimal CMakeLists.txt"}),t.jsx("pre",{className:"code",children:`# CMakeLists.txt
cmake_minimum_required(VERSION 3.16)
project(MyApp)

set(CMAKE_CXX_STANDARD 17)
add_executable(app main.cpp utils.cpp)

# output - generates build config for your platform`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - build with CMake"}),t.jsx("pre",{className:"code",children:`mkdir build
cd build
cmake ..
cmake --build .

# output - app built inside build folder`})]}),t.jsx("div",{className:"hint",children:"Real world C++ projects commonly use CMake because it scales well and works across OS and IDEs."})]})]})]})},Fx={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 16000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .endNote {
            margin: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .endIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            flex: 0 0 auto;
        }
    `},Dx=()=>{const[s,c]=ge.useState(!1),l=()=>c(u=>!u);return t.jsxs(Fx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(We,{}):t.jsx(Ue,{})}),t.jsx("span",{className:"icon",children:t.jsx(pn,{})}),t.jsx("span",{className:"title",children:"Common Pitfalls"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"C++ is powerful, but it can punish careless code. These are classic pitfalls that show up in interviews and real projects. Learn the pattern, learn the fix, and you avoid hours of debugging pain."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xr,{})}),"Object slicing"]}),t.jsx("p",{className:"p",children:'Object slicing happens when a derived object is copied into a base object by value. Only the base part is kept, and the derived part is "sliced off". Fix it by using references or pointers for polymorphism.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - slicing vs no slicing"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class Base {
public:
  virtual void who() { cout << "Base\\n"; }
};

class Derived : public Base {
public:
  void who() override { cout << "Derived\\n"; }
};

int main() {
  Derived d;

  Base b = d;   // slicing - copied by value
  b.who();      // output - Base

  Base &r = d;  // no slicing - reference
  r.who();      // output - Derived

  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"If you want runtime polymorphism, avoid passing or storing polymorphic objects by value."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Au,{})}),"Shallow copy vs deep copy"]}),t.jsx("p",{className:"p",children:"Shallow copy copies pointer addresses, not the data they point to. If two objects point to the same heap memory, you can get double free or unexpected changes. Deep copy allocates new memory and copies the actual content."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - shallow copy problem"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <cstring>
using namespace std;

class Name {
public:
  char *p;

  Name(const char *s) {
    p = new char[strlen(s) + 1];
    strcpy(p, s);
  }

  // shallow copy - default copy constructor would copy pointer only
  // deep copy - implement copy constructor
  Name(const Name &other) {
    p = new char[strlen(other.p) + 1];
    strcpy(p, other.p);
  }

  ~Name() {
    delete[] p;
  }
};

int main() {
  Name a("ash");
  Name b = a;  // deep copy now

  cout << a.p << "\\n"; // output - ash
  cout << b.p << "\\n"; // output - ash
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"If your class owns memory or resources, learn the Rule of Three and Rule of Five."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Du,{})}),"Memory leaks"]}),t.jsx("p",{className:"p",children:"A memory leak happens when you allocate memory but never release it. Over time, your program consumes more memory. Fix it by using delete, or better - use smart pointers and RAII so memory is freed automatically."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - leak vs safe"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <memory>
using namespace std;

int main() {
  // leak (bad)
  // int *p = new int(10);
  // forgot delete p;

  // safe (good)
  unique_ptr<int> x = make_unique<int>(10);
  cout << *x << "\\n"; // output - 10

  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Prefer smart pointers for ownership. Use raw pointers only for non-owning references."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(rl,{})}),"Dangling references"]}),t.jsx("p",{className:"p",children:"A dangling reference happens when a reference or pointer points to memory that is no longer valid. Common cause - returning reference to a local variable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - returning local reference (bad)"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int& bad() {
  int x = 5;
  return x; // x dies after function ends - dangling reference
}

int main() {
  // int &r = bad(); // undefined behavior
  // cout << r << "\\n";

  cout << "Do not return references to locals\\n";
  // output - Do not return references to locals
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Return by value when you can. Modern C++ optimizes returns very well."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xr,{})}),"Multiple inheritance diamond problem"]}),t.jsx("p",{className:"p",children:"In multiple inheritance, a class can inherit the same base through two paths, causing duplicate base members and ambiguity. Use virtual inheritance to solve it."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - diamond and virtual inheritance"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class A {
public:
  int x = 1;
};

class B : virtual public A {};
class C : virtual public A {};

class D : public B, public C {};

int main() {
  D d;
  cout << d.x << "\\n"; // output - 1
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Multiple inheritance is rare in most codebases. Prefer composition unless there is a strong reason."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mm,{})}),"Undefined behavior"]}),t.jsx("p",{className:"p",children:"Undefined behavior means the C++ standard does not define what happens. Your program may work, crash, or behave differently on another machine. Common causes include using uninitialized variables, out of bounds access, double delete, and use-after-free."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - out of bounds access (bad)"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int a[3] = {1, 2, 3};

  // undefined behavior - out of bounds
  // cout << a[3] << "\\n";

  cout << "Avoid out of bounds access\\n";
  // output - Avoid out of bounds access
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Use bounds checked containers when possible. Keep builds with warnings enabled and use sanitizers during learning."})]}),t.jsxs("div",{className:"endNote",children:[t.jsx("span",{className:"endIcon",children:t.jsx(Wu,{})}),"Fixing these pitfalls makes your C++ code stable and interview safe."]})]})]})},_u=[["about","Overview",up],["fundamentals","C++ Fundamentals",nx],["types","Data Types",sx],["operators","Operators",ax],["control","Control Flow",cx],["functions","Functions",ux],["arrays","Arrays and Strings",hx],["pointers","Pointers and References",fx],["oop","OOP Basics",gx],["members","Special Member Functions",yx],["templates","Templates",Nx],["stl","STL Basics",wx],["exceptions","Exception Handling",Sx],["files","File Handling",Ex],["advanced","Advanced Concepts",zx],["modern","Modern C++",Bx],["concurrency","Concurrency",Lx],["best","Best Practices",Rx],["build","Build Systems",Ox],["pitfalls","Common Pitfalls",Dx]],Wx=()=>{var f;const[s,c]=ge.useState("about"),l=ge.useRef(null),u=((f=_u.find(([j])=>j===s))==null?void 0:f[2])||up;return ge.useEffect(()=>{var j;(j=l.current)==null||j.scrollTo({top:0,behavior:"auto"}),requestAnimationFrame(()=>{var k,T;return(T=(k=l.current)==null?void 0:k.querySelector('[aria-expanded="false"]'))==null?void 0:T.click()})},[s]),t.jsxs(Qa.Wrapper,{children:[t.jsx(Qa.Header,{children:t.jsx(Jf,{})}),t.jsxs(Qa.Main,{ref:l,children:[t.jsxs("div",{className:"workspaceLayout",children:[t.jsxs("aside",{className:"sideMenu","aria-label":"C++ topics",children:[t.jsx("p",{className:"menuLabel",children:"Study guide"}),t.jsx("nav",{children:_u.map(([j,k])=>t.jsx("button",{type:"button",className:s===j?"active":"",onClick:()=>c(j),children:k},j))})]}),t.jsx("section",{className:"contentWrapper","aria-live":"polite",children:t.jsx(u,{})})]}),t.jsx("button",{type:"button",className:"scrollTopButton","aria-label":"Scroll content to top",title:"Scroll to top",onClick:()=>{var j;return(j=l.current)==null?void 0:j.scrollTo({top:0,behavior:"smooth"})},children:t.jsx(Tm,{})}),t.jsx("div",{className:"footerWrapper",children:t.jsx(rx,{})})]})]})};gm.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(Wx,{})}));
