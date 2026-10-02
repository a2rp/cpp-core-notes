(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const j of g)if(j.type==="childList")for(const S of j.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&u(S)}).observe(document,{childList:!0,subtree:!0});function l(g){const j={};return g.integrity&&(j.integrity=g.integrity),g.referrerPolicy&&(j.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?j.credentials="include":g.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function u(g){if(g.ep)return;g.ep=!0;const j=l(g);fetch(g.href,j)}})();function sm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ra={exports:{}},to={},Ma={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function im(){if(Jd)return re;Jd=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),S=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),Q=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),O=Symbol.iterator;function F(f){return f===null||typeof f!="object"?null:(f=O&&f[O]||f["@@iterator"],typeof f=="function"?f:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,V={};function X(f,N,K){this.props=f,this.context=N,this.refs=V,this.updater=K||Y}X.prototype.isReactComponent={},X.prototype.setState=function(f,N){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,N,"setState")},X.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function pe(){}pe.prototype=X.prototype;function ie(f,N,K){this.props=f,this.context=N,this.refs=V,this.updater=K||Y}var oe=ie.prototype=new pe;oe.constructor=ie,ne(oe,X.prototype),oe.isPureReactComponent=!0;var J=Array.isArray,de=Object.prototype.hasOwnProperty,G={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Be(f,N,K){var q,te={},ee=null,ue=null;if(N!=null)for(q in N.ref!==void 0&&(ue=N.ref),N.key!==void 0&&(ee=""+N.key),N)de.call(N,q)&&!U.hasOwnProperty(q)&&(te[q]=N[q]);var se=arguments.length-2;if(se===1)te.children=K;else if(1<se){for(var le=Array(se),De=0;De<se;De++)le[De]=arguments[De+2];te.children=le}if(f&&f.defaultProps)for(q in se=f.defaultProps,se)te[q]===void 0&&(te[q]=se[q]);return{$$typeof:s,type:f,key:ee,ref:ue,props:te,_owner:G.current}}function or(f,N){return{$$typeof:s,type:f.type,key:N,ref:f.ref,props:f.props,_owner:f._owner}}function br(f){return typeof f=="object"&&f!==null&&f.$$typeof===s}function Or(f){var N={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(K){return N[K]})}var hr=/\/+/g;function Ge(f,N){return typeof f=="object"&&f!==null&&f.key!=null?Or(""+f.key):N.toString(36)}function sr(f,N,K,q,te){var ee=typeof f;(ee==="undefined"||ee==="boolean")&&(f=null);var ue=!1;if(f===null)ue=!0;else switch(ee){case"string":case"number":ue=!0;break;case"object":switch(f.$$typeof){case s:case c:ue=!0}}if(ue)return ue=f,te=te(ue),f=q===""?"."+Ge(ue,0):q,J(te)?(K="",f!=null&&(K=f.replace(hr,"$&/")+"/"),sr(te,N,K,"",function(De){return De})):te!=null&&(br(te)&&(te=or(te,K+(!te.key||ue&&ue.key===te.key?"":(""+te.key).replace(hr,"$&/")+"/")+f)),N.push(te)),1;if(ue=0,q=q===""?".":q+":",J(f))for(var se=0;se<f.length;se++){ee=f[se];var le=q+Ge(ee,se);ue+=sr(ee,N,K,le,te)}else if(le=F(f),typeof le=="function")for(f=le.call(f),se=0;!(ee=f.next()).done;)ee=ee.value,le=q+Ge(ee,se++),ue+=sr(ee,N,K,le,te);else if(ee==="object")throw N=String(f),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ue}function mr(f,N,K){if(f==null)return f;var q=[],te=0;return sr(f,q,"","",function(ee){return N.call(K,ee,te++)}),q}function He(f){if(f._status===-1){var N=f._result;N=N(),N.then(function(K){(f._status===0||f._status===-1)&&(f._status=1,f._result=K)},function(K){(f._status===0||f._status===-1)&&(f._status=2,f._result=K)}),f._status===-1&&(f._status=0,f._result=N)}if(f._status===1)return f._result.default;throw f._result}var ge={current:null},T={transition:null},M={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:T,ReactCurrentOwner:G};function z(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:mr,forEach:function(f,N,K){mr(f,function(){N.apply(this,arguments)},K)},count:function(f){var N=0;return mr(f,function(){N++}),N},toArray:function(f){return mr(f,function(N){return N})||[]},only:function(f){if(!br(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},re.Component=X,re.Fragment=l,re.Profiler=g,re.PureComponent=ie,re.StrictMode=u,re.Suspense=E,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,re.act=z,re.cloneElement=function(f,N,K){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var q=ne({},f.props),te=f.key,ee=f.ref,ue=f._owner;if(N!=null){if(N.ref!==void 0&&(ee=N.ref,ue=G.current),N.key!==void 0&&(te=""+N.key),f.type&&f.type.defaultProps)var se=f.type.defaultProps;for(le in N)de.call(N,le)&&!U.hasOwnProperty(le)&&(q[le]=N[le]===void 0&&se!==void 0?se[le]:N[le])}var le=arguments.length-2;if(le===1)q.children=K;else if(1<le){se=Array(le);for(var De=0;De<le;De++)se[De]=arguments[De+2];q.children=se}return{$$typeof:s,type:f.type,key:te,ref:ee,props:q,_owner:ue}},re.createContext=function(f){return f={$$typeof:S,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:j,_context:f},f.Consumer=f},re.createElement=Be,re.createFactory=function(f){var N=Be.bind(null,f);return N.type=f,N},re.createRef=function(){return{current:null}},re.forwardRef=function(f){return{$$typeof:B,render:f}},re.isValidElement=br,re.lazy=function(f){return{$$typeof:$,_payload:{_status:-1,_result:f},_init:He}},re.memo=function(f,N){return{$$typeof:Q,type:f,compare:N===void 0?null:N}},re.startTransition=function(f){var N=T.transition;T.transition={};try{f()}finally{T.transition=N}},re.unstable_act=z,re.useCallback=function(f,N){return ge.current.useCallback(f,N)},re.useContext=function(f){return ge.current.useContext(f)},re.useDebugValue=function(){},re.useDeferredValue=function(f){return ge.current.useDeferredValue(f)},re.useEffect=function(f,N){return ge.current.useEffect(f,N)},re.useId=function(){return ge.current.useId()},re.useImperativeHandle=function(f,N,K){return ge.current.useImperativeHandle(f,N,K)},re.useInsertionEffect=function(f,N){return ge.current.useInsertionEffect(f,N)},re.useLayoutEffect=function(f,N){return ge.current.useLayoutEffect(f,N)},re.useMemo=function(f,N){return ge.current.useMemo(f,N)},re.useReducer=function(f,N,K){return ge.current.useReducer(f,N,K)},re.useRef=function(f){return ge.current.useRef(f)},re.useState=function(f){return ge.current.useState(f)},re.useSyncExternalStore=function(f,N,K){return ge.current.useSyncExternalStore(f,N,K)},re.useTransition=function(){return ge.current.useTransition()},re.version="18.3.1",re}var eu;function Za(){return eu||(eu=1,Ma.exports=im()),Ma.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function am(){if(ru)return to;ru=1;var s=Za(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,g=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function S(B,E,Q){var $,O={},F=null,Y=null;Q!==void 0&&(F=""+Q),E.key!==void 0&&(F=""+E.key),E.ref!==void 0&&(Y=E.ref);for($ in E)u.call(E,$)&&!j.hasOwnProperty($)&&(O[$]=E[$]);if(B&&B.defaultProps)for($ in E=B.defaultProps,E)O[$]===void 0&&(O[$]=E[$]);return{$$typeof:c,type:B,key:F,ref:Y,props:O,_owner:g.current}}return to.Fragment=l,to.jsx=S,to.jsxs=S,to}var tu;function lm(){return tu||(tu=1,Ra.exports=am()),Ra.exports}var t=lm(),vs={},Aa={exports:{}},tr={},Oa={exports:{}},Fa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu;function cm(){return nu||(nu=1,(function(s){function c(T,M){var z=T.length;T.push(M);e:for(;0<z;){var f=z-1>>>1,N=T[f];if(0<g(N,M))T[f]=M,T[z]=N,z=f;else break e}}function l(T){return T.length===0?null:T[0]}function u(T){if(T.length===0)return null;var M=T[0],z=T.pop();if(z!==M){T[0]=z;e:for(var f=0,N=T.length,K=N>>>1;f<K;){var q=2*(f+1)-1,te=T[q],ee=q+1,ue=T[ee];if(0>g(te,z))ee<N&&0>g(ue,te)?(T[f]=ue,T[ee]=z,f=ee):(T[f]=te,T[q]=z,f=q);else if(ee<N&&0>g(ue,z))T[f]=ue,T[ee]=z,f=ee;else break e}}return M}function g(T,M){var z=T.sortIndex-M.sortIndex;return z!==0?z:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;s.unstable_now=function(){return j.now()}}else{var S=Date,B=S.now();s.unstable_now=function(){return S.now()-B}}var E=[],Q=[],$=1,O=null,F=3,Y=!1,ne=!1,V=!1,X=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(T){for(var M=l(Q);M!==null;){if(M.callback===null)u(Q);else if(M.startTime<=T)u(Q),M.sortIndex=M.expirationTime,c(E,M);else break;M=l(Q)}}function J(T){if(V=!1,oe(T),!ne)if(l(E)!==null)ne=!0,He(de);else{var M=l(Q);M!==null&&ge(J,M.startTime-T)}}function de(T,M){ne=!1,V&&(V=!1,pe(Be),Be=-1),Y=!0;var z=F;try{for(oe(M),O=l(E);O!==null&&(!(O.expirationTime>M)||T&&!Or());){var f=O.callback;if(typeof f=="function"){O.callback=null,F=O.priorityLevel;var N=f(O.expirationTime<=M);M=s.unstable_now(),typeof N=="function"?O.callback=N:O===l(E)&&u(E),oe(M)}else u(E);O=l(E)}if(O!==null)var K=!0;else{var q=l(Q);q!==null&&ge(J,q.startTime-M),K=!1}return K}finally{O=null,F=z,Y=!1}}var G=!1,U=null,Be=-1,or=5,br=-1;function Or(){return!(s.unstable_now()-br<or)}function hr(){if(U!==null){var T=s.unstable_now();br=T;var M=!0;try{M=U(!0,T)}finally{M?Ge():(G=!1,U=null)}}else G=!1}var Ge;if(typeof ie=="function")Ge=function(){ie(hr)};else if(typeof MessageChannel!="undefined"){var sr=new MessageChannel,mr=sr.port2;sr.port1.onmessage=hr,Ge=function(){mr.postMessage(null)}}else Ge=function(){X(hr,0)};function He(T){U=T,G||(G=!0,Ge())}function ge(T,M){Be=X(function(){T(s.unstable_now())},M)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(T){T.callback=null},s.unstable_continueExecution=function(){ne||Y||(ne=!0,He(de))},s.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):or=0<T?Math.floor(1e3/T):5},s.unstable_getCurrentPriorityLevel=function(){return F},s.unstable_getFirstCallbackNode=function(){return l(E)},s.unstable_next=function(T){switch(F){case 1:case 2:case 3:var M=3;break;default:M=F}var z=F;F=M;try{return T()}finally{F=z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=F;F=T;try{return M()}finally{F=z}},s.unstable_scheduleCallback=function(T,M,z){var f=s.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?f+z:f):z=f,T){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,T={id:$++,callback:M,priorityLevel:T,startTime:z,expirationTime:N,sortIndex:-1},z>f?(T.sortIndex=z,c(Q,T),l(E)===null&&T===l(Q)&&(V?(pe(Be),Be=-1):V=!0,ge(J,z-f))):(T.sortIndex=N,c(E,T),ne||Y||(ne=!0,He(de))),T},s.unstable_shouldYield=Or,s.unstable_wrapCallback=function(T){var M=F;return function(){var z=F;F=M;try{return T.apply(this,arguments)}finally{F=z}}}})(Fa)),Fa}var ou;function dm(){return ou||(ou=1,Oa.exports=cm()),Oa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function um(){if(su)return tr;su=1;var s=Za(),c=dm();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,g={};function j(e,r){S(e,r),S(e+"Capture",r)}function S(e,r){for(g[e]=r,e=0;e<r.length;e++)u.add(r[e])}var B=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),E=Object.prototype.hasOwnProperty,Q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},O={};function F(e){return E.call(O,e)?!0:E.call($,e)?!1:Q.test(e)?O[e]=!0:($[e]=!0,!1)}function Y(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ne(e,r,n,o){if(r===null||typeof r=="undefined"||Y(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function V(e,r,n,o,i,a,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=d}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];X[r]=new V(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function ie(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(pe,ie);X[r]=new V(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(pe,ie);X[r]=new V(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(pe,ie);X[r]=new V(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function oe(e,r,n,o){var i=X.hasOwnProperty(r)?X[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(ne(r,n,i,o)&&(n=null),o||i===null?F(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var J=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),G=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),or=Symbol.for("react.profiler"),br=Symbol.for("react.provider"),Or=Symbol.for("react.context"),hr=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),sr=Symbol.for("react.suspense_list"),mr=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),T=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,f;function N(e){if(f===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);f=r&&r[1]||""}return`
`+f+e}var K=!1;function q(e,r){if(!e||K)return"";K=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var o=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){o=y}e.call(r.prototype)}else{try{throw Error()}catch(y){o=y}e()}}catch(y){if(y&&o&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),a=o.stack.split(`
`),d=i.length-1,p=a.length-1;1<=d&&0<=p&&i[d]!==a[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==a[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==a[p]){var h=`
`+i[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=p);break}}}finally{K=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function te(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1),e;case 11:return e=q(e.type.render,!1),e;case 1:return e=q(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case G:return"Portal";case or:return"Profiler";case Be:return"StrictMode";case Ge:return"Suspense";case sr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Or:return(e.displayName||"Context")+".Consumer";case br:return(e._context.displayName||"Context")+".Provider";case hr:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mr:return r=e.displayName||null,r!==null?r:ee(e.type)||"Memo";case He:r=e._payload,e=e._init;try{return ee(e(r))}catch{}}return null}function ue(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(r);case 8:return r===Be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function De(e){var r=le(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(d){o=""+d,a.call(this,d)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Fr(e){e._valueTracker||(e._valueTracker=De(e))}function wr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=le(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function lo(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Us(e,r){var n=r.checked;return z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function il(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=se(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function al(e,r){r=r.checked,r!=null&&oe(e,"checked",r,!1)}function Hs(e,r){al(e,r);var n=se(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?$s(e,r.type,n):r.hasOwnProperty("defaultValue")&&$s(e,r.type,se(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function ll(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $s(e,r,n){(r!=="number"||lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gn=Array.isArray;function Pt(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+se(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Vs(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return z({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cl(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(l(92));if(gn(n)){if(1<n.length)throw Error(l(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:se(n)}}function dl(e,r){var n=se(r.value),o=se(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function ul(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function pl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qs(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?pl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var co,hl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function vn(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cp=["Webkit","ms","Moz","O"];Object.keys(yn).forEach(function(e){cp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),yn[r]=yn[e]})});function ml(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||yn.hasOwnProperty(e)&&yn[e]?(""+r).trim():r+"px"}function fl(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=ml(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var dp=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ys(e,r){if(r){if(dp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function Gs(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ks=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Rt=null,Mt=null;function xl(e){if(e=Wn(e)){if(typeof qs!="function")throw Error(l(280));var r=e.stateNode;r&&(r=Lo(r),qs(e.stateNode,e.type,r))}}function gl(e){Rt?Mt?Mt.push(e):Mt=[e]:Rt=e}function vl(){if(Rt){var e=Rt,r=Mt;if(Mt=Rt=null,xl(e),r)for(e=0;e<r.length;e++)xl(r[e])}}function yl(e,r){return e(r)}function jl(){}var Zs=!1;function Nl(e,r,n){if(Zs)return e(r,n);Zs=!0;try{return yl(e,r,n)}finally{Zs=!1,(Rt!==null||Mt!==null)&&(jl(),vl())}}function jn(e,r){var n=e.stateNode;if(n===null)return null;var o=Lo(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,r,typeof n));return n}var Js=!1;if(B)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Js=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Js=!1}function up(e,r,n,o,i,a,d,p,h){var y=Array.prototype.slice.call(arguments,3);try{r.apply(n,y)}catch(w){this.onError(w)}}var bn=!1,uo=null,po=!1,ei=null,pp={onError:function(e){bn=!0,uo=e}};function hp(e,r,n,o,i,a,d,p,h){bn=!1,uo=null,up.apply(pp,arguments)}function mp(e,r,n,o,i,a,d,p,h){if(hp.apply(this,arguments),bn){if(bn){var y=uo;bn=!1,uo=null}else throw Error(l(198));po||(po=!0,ei=y)}}function gt(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function bl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function wl(e){if(gt(e)!==e)throw Error(l(188))}function fp(e){var r=e.alternate;if(!r){if(r=gt(e),r===null)throw Error(l(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return wl(i),e;if(a===o)return wl(i),r;a=a.sibling}throw Error(l(188))}if(n.return!==o.return)n=i,o=a;else{for(var d=!1,p=i.child;p;){if(p===n){d=!0,n=i,o=a;break}if(p===o){d=!0,o=i,n=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===n){d=!0,n=a,o=i;break}if(p===o){d=!0,o=a,n=i;break}p=p.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==o)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:r}function kl(e){return e=fp(e),e!==null?Sl(e):null}function Sl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Sl(e);if(r!==null)return r;e=e.sibling}return null}var Cl=c.unstable_scheduleCallback,El=c.unstable_cancelCallback,xp=c.unstable_shouldYield,gp=c.unstable_requestPaint,Ce=c.unstable_now,vp=c.unstable_getCurrentPriorityLevel,ri=c.unstable_ImmediatePriority,Tl=c.unstable_UserBlockingPriority,ho=c.unstable_NormalPriority,yp=c.unstable_LowPriority,zl=c.unstable_IdlePriority,mo=null,_r=null;function jp(e){if(_r&&typeof _r.onCommitFiberRoot=="function")try{_r.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:wp,Np=Math.log,bp=Math.LN2;function wp(e){return e>>>=0,e===0?32:31-(Np(e)/bp|0)|0}var fo=64,xo=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function go(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~i;p!==0?o=wn(p):(a&=d,a!==0&&(o=wn(a)))}else d=n&~i,d!==0?o=wn(d):a!==0&&(o=wn(a));if(o===0)return 0;if(r!==0&&r!==o&&(r&i)===0&&(i=o&-o,a=r&-r,i>=a||i===16&&(a&4194240)!==0))return r;if((o&4)!==0&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-kr(r),i=1<<n,o|=e[n],r&=~i;return o}function kp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sp(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-kr(a),p=1<<d,h=i[d];h===-1?((p&n)===0||(p&o)!==0)&&(i[d]=kp(p,r)):h<=r&&(e.expiredLanes|=p),a&=~p}}function ti(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Il(){var e=fo;return fo<<=1,(fo&4194240)===0&&(fo=64),e}function ni(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function kn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-kr(r),e[r]=n}function Cp(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kr(n),a=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~a}}function oi(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-kr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var fe=0;function Bl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var _l,si,Ll,Pl,Rl,ii=!1,vo=[],Xr=null,qr=null,Zr=null,Sn=new Map,Cn=new Map,Jr=[],Ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ml(e,r){switch(e){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Sn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(r.pointerId)}}function En(e,r,n,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},r!==null&&(r=Wn(r),r!==null&&si(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Tp(e,r,n,o,i){switch(r){case"focusin":return Xr=En(Xr,e,r,n,o,i),!0;case"dragenter":return qr=En(qr,e,r,n,o,i),!0;case"mouseover":return Zr=En(Zr,e,r,n,o,i),!0;case"pointerover":var a=i.pointerId;return Sn.set(a,En(Sn.get(a)||null,e,r,n,o,i)),!0;case"gotpointercapture":return a=i.pointerId,Cn.set(a,En(Cn.get(a)||null,e,r,n,o,i)),!0}return!1}function Al(e){var r=vt(e.target);if(r!==null){var n=gt(r);if(n!==null){if(r=n.tag,r===13){if(r=bl(n),r!==null){e.blockedOn=r,Rl(e.priority,function(){Ll(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=li(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Ks=o,n.target.dispatchEvent(o),Ks=null}else return r=Wn(n),r!==null&&si(r),e.blockedOn=n,!1;r.shift()}return!0}function Ol(e,r,n){yo(e)&&n.delete(r)}function zp(){ii=!1,Xr!==null&&yo(Xr)&&(Xr=null),qr!==null&&yo(qr)&&(qr=null),Zr!==null&&yo(Zr)&&(Zr=null),Sn.forEach(Ol),Cn.forEach(Ol)}function Tn(e,r){e.blockedOn===r&&(e.blockedOn=null,ii||(ii=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,zp)))}function zn(e){function r(i){return Tn(i,e)}if(0<vo.length){Tn(vo[0],e);for(var n=1;n<vo.length;n++){var o=vo[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Xr!==null&&Tn(Xr,e),qr!==null&&Tn(qr,e),Zr!==null&&Tn(Zr,e),Sn.forEach(r),Cn.forEach(r),n=0;n<Jr.length;n++)o=Jr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Jr.length&&(n=Jr[0],n.blockedOn===null);)Al(n),n.blockedOn===null&&Jr.shift()}var At=J.ReactCurrentBatchConfig,jo=!0;function Ip(e,r,n,o){var i=fe,a=At.transition;At.transition=null;try{fe=1,ai(e,r,n,o)}finally{fe=i,At.transition=a}}function Bp(e,r,n,o){var i=fe,a=At.transition;At.transition=null;try{fe=4,ai(e,r,n,o)}finally{fe=i,At.transition=a}}function ai(e,r,n,o){if(jo){var i=li(e,r,n,o);if(i===null)Si(e,r,o,No,n),Ml(e,o);else if(Tp(i,e,r,n,o))o.stopPropagation();else if(Ml(e,o),r&4&&-1<Ep.indexOf(e)){for(;i!==null;){var a=Wn(i);if(a!==null&&_l(a),a=li(e,r,n,o),a===null&&Si(e,r,o,No,n),a===i)break;i=a}i!==null&&o.stopPropagation()}else Si(e,r,o,null,n)}}var No=null;function li(e,r,n,o){if(No=null,e=Xs(o),e=vt(e),e!==null)if(r=gt(e),r===null)e=null;else if(n=r.tag,n===13){if(e=bl(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return No=e,null}function Fl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vp()){case ri:return 1;case Tl:return 4;case ho:case yp:return 16;case zl:return 536870912;default:return 16}default:return 16}}var et=null,ci=null,bo=null;function Dl(){if(bo)return bo;var e,r=ci,n=r.length,o,i="value"in et?et.value:et.textContent,a=i.length;for(e=0;e<n&&r[e]===i[e];e++);var d=n-e;for(o=1;o<=d&&r[n-o]===i[a-o];o++);return bo=i.slice(e,1<o?1-o:void 0)}function wo(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function Wl(){return!1}function ir(e){function r(n,o,i,a,d){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ko:Wl,this.isPropagationStopped=Wl,this}return z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),r}var Ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},di=ir(Ot),In=z({},Ot,{view:0,detail:0}),_p=ir(In),ui,pi,Bn,So=z({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(ui=e.screenX-Bn.screenX,pi=e.screenY-Bn.screenY):pi=ui=0,Bn=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),Ul=ir(So),Lp=z({},So,{dataTransfer:0}),Pp=ir(Lp),Rp=z({},In,{relatedTarget:0}),hi=ir(Rp),Mp=z({},Ot,{animationName:0,elapsedTime:0,pseudoElement:0}),Ap=ir(Mp),Op=z({},Ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fp=ir(Op),Dp=z({},Ot,{data:0}),Hl=ir(Dp),Wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $p(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Hp[e])?!!r[e]:!1}function mi(){return $p}var Vp=z({},In,{key:function(e){if(e.key){var r=Wp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qp=ir(Vp),Yp=z({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$l=ir(Yp),Gp=z({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),Kp=ir(Gp),Xp=z({},Ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),qp=ir(Xp),Zp=z({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=ir(Zp),eh=[9,13,27,32],fi=B&&"CompositionEvent"in window,_n=null;B&&"documentMode"in document&&(_n=document.documentMode);var rh=B&&"TextEvent"in window&&!_n,Vl=B&&(!fi||_n&&8<_n&&11>=_n),Ql=" ",Yl=!1;function Gl(e,r){switch(e){case"keyup":return eh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function th(e,r){switch(e){case"compositionend":return Kl(r);case"keypress":return r.which!==32?null:(Yl=!0,Ql);case"textInput":return e=r.data,e===Ql&&Yl?null:e;default:return null}}function nh(e,r){if(Ft)return e==="compositionend"||!fi&&Gl(e,r)?(e=Dl(),bo=ci=et=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Vl&&r.locale!=="ko"?null:r.data;default:return null}}var oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!oh[e.type]:r==="textarea"}function ql(e,r,n,o){gl(o),r=Io(r,"onChange"),0<r.length&&(n=new di("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var Ln=null,Pn=null;function sh(e){fc(e,0)}function Co(e){var r=$t(e);if(wr(r))return e}function ih(e,r){if(e==="change")return r}var Zl=!1;if(B){var xi;if(B){var gi="oninput"in document;if(!gi){var Jl=document.createElement("div");Jl.setAttribute("oninput","return;"),gi=typeof Jl.oninput=="function"}xi=gi}else xi=!1;Zl=xi&&(!document.documentMode||9<document.documentMode)}function ec(){Ln&&(Ln.detachEvent("onpropertychange",rc),Pn=Ln=null)}function rc(e){if(e.propertyName==="value"&&Co(Pn)){var r=[];ql(r,Pn,e,Xs(e)),Nl(sh,r)}}function ah(e,r,n){e==="focusin"?(ec(),Ln=r,Pn=n,Ln.attachEvent("onpropertychange",rc)):e==="focusout"&&ec()}function lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Pn)}function ch(e,r){if(e==="click")return Co(r)}function dh(e,r){if(e==="input"||e==="change")return Co(r)}function uh(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Sr=typeof Object.is=="function"?Object.is:uh;function Rn(e,r){if(Sr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!E.call(r,i)||!Sr(e[i],r[i]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nc(e,r){var n=tc(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tc(n)}}function oc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?oc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function sc(){for(var e=window,r=lo();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=lo(e.document)}return r}function vi(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function ph(e){var r=sc(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&oc(n.ownerDocument.documentElement,n)){if(o!==null&&vi(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=nc(n,a);var d=nc(n,o);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hh=B&&"documentMode"in document&&11>=document.documentMode,Dt=null,yi=null,Mn=null,ji=!1;function ic(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ji||Dt==null||Dt!==lo(o)||(o=Dt,"selectionStart"in o&&vi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Mn&&Rn(Mn,o)||(Mn=o,o=Io(yi,"onSelect"),0<o.length&&(r=new di("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=Dt)))}function Eo(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Wt={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Ni={},ac={};B&&(ac=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function To(e){if(Ni[e])return Ni[e];if(!Wt[e])return e;var r=Wt[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in ac)return Ni[e]=r[n];return e}var lc=To("animationend"),cc=To("animationiteration"),dc=To("animationstart"),uc=To("transitionend"),pc=new Map,hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,r){pc.set(e,r),j(r,[e])}for(var bi=0;bi<hc.length;bi++){var wi=hc[bi],mh=wi.toLowerCase(),fh=wi[0].toUpperCase()+wi.slice(1);rt(mh,"on"+fh)}rt(lc,"onAnimationEnd"),rt(cc,"onAnimationIteration"),rt(dc,"onAnimationStart"),rt("dblclick","onDoubleClick"),rt("focusin","onFocus"),rt("focusout","onBlur"),rt(uc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xh=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function mc(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,mp(o,r,void 0,e),e.currentTarget=null}function fc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var a=void 0;if(r)for(var d=o.length-1;0<=d;d--){var p=o[d],h=p.instance,y=p.currentTarget;if(p=p.listener,h!==a&&i.isPropagationStopped())break e;mc(i,p,y),a=h}else for(d=0;d<o.length;d++){if(p=o[d],h=p.instance,y=p.currentTarget,p=p.listener,h!==a&&i.isPropagationStopped())break e;mc(i,p,y),a=h}}}if(po)throw e=ei,po=!1,ei=null,e}function ye(e,r){var n=r[Bi];n===void 0&&(n=r[Bi]=new Set);var o=e+"__bubble";n.has(o)||(xc(r,e,2,!1),n.add(o))}function ki(e,r,n){var o=0;r&&(o|=4),xc(n,e,o,r)}var zo="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[zo]){e[zo]=!0,u.forEach(function(n){n!=="selectionchange"&&(xh.has(n)||ki(n,!1,e),ki(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[zo]||(r[zo]=!0,ki("selectionchange",!1,r))}}function xc(e,r,n,o){switch(Fl(r)){case 1:var i=Ip;break;case 4:i=Bp;break;default:i=ai}n=i.bind(null,r,n,e),i=void 0,!Js||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function Si(e,r,n,o,i){var a=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;d=d.return}for(;p!==null;){if(d=vt(p),d===null)return;if(h=d.tag,h===5||h===6){o=a=d;continue e}p=p.parentNode}}o=o.return}Nl(function(){var y=a,w=Xs(n),k=[];e:{var b=pc.get(e);if(b!==void 0){var I=di,L=e;switch(e){case"keypress":if(wo(n)===0)break e;case"keydown":case"keyup":I=Qp;break;case"focusin":L="focus",I=hi;break;case"focusout":L="blur",I=hi;break;case"beforeblur":case"afterblur":I=hi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Ul;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Kp;break;case lc:case cc:case dc:I=Ap;break;case uc:I=qp;break;case"scroll":I=_p;break;case"wheel":I=Jp;break;case"copy":case"cut":case"paste":I=Fp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=$l}var P=(r&4)!==0,Ee=!P&&e==="scroll",x=P?b!==null?b+"Capture":null:b;P=[];for(var m=y,v;m!==null;){v=m;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,x!==null&&(C=jn(m,x),C!=null&&P.push(Fn(m,C,v)))),Ee)break;m=m.return}0<P.length&&(b=new I(b,L,null,n,w),k.push({event:b,listeners:P}))}}if((r&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",b&&n!==Ks&&(L=n.relatedTarget||n.fromElement)&&(vt(L)||L[Dr]))break e;if((I||b)&&(b=w.window===w?w:(b=w.ownerDocument)?b.defaultView||b.parentWindow:window,I?(L=n.relatedTarget||n.toElement,I=y,L=L?vt(L):null,L!==null&&(Ee=gt(L),L!==Ee||L.tag!==5&&L.tag!==6)&&(L=null)):(I=null,L=y),I!==L)){if(P=Ul,C="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(P=$l,C="onPointerLeave",x="onPointerEnter",m="pointer"),Ee=I==null?b:$t(I),v=L==null?b:$t(L),b=new P(C,m+"leave",I,n,w),b.target=Ee,b.relatedTarget=v,C=null,vt(w)===y&&(P=new P(x,m+"enter",L,n,w),P.target=v,P.relatedTarget=Ee,C=P),Ee=C,I&&L)r:{for(P=I,x=L,m=0,v=P;v;v=Ut(v))m++;for(v=0,C=x;C;C=Ut(C))v++;for(;0<m-v;)P=Ut(P),m--;for(;0<v-m;)x=Ut(x),v--;for(;m--;){if(P===x||x!==null&&P===x.alternate)break r;P=Ut(P),x=Ut(x)}P=null}else P=null;I!==null&&gc(k,b,I,P,!1),L!==null&&Ee!==null&&gc(k,Ee,L,P,!0)}}e:{if(b=y?$t(y):window,I=b.nodeName&&b.nodeName.toLowerCase(),I==="select"||I==="input"&&b.type==="file")var R=ih;else if(Xl(b))if(Zl)R=dh;else{R=lh;var D=ah}else(I=b.nodeName)&&I.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(R=ch);if(R&&(R=R(e,y))){ql(k,R,n,w);break e}D&&D(e,b,y),e==="focusout"&&(D=b._wrapperState)&&D.controlled&&b.type==="number"&&$s(b,"number",b.value)}switch(D=y?$t(y):window,e){case"focusin":(Xl(D)||D.contentEditable==="true")&&(Dt=D,yi=y,Mn=null);break;case"focusout":Mn=yi=Dt=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,ic(k,n,w);break;case"selectionchange":if(hh)break;case"keydown":case"keyup":ic(k,n,w)}var W;if(fi)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else Ft?Gl(e,n)&&(H="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(Vl&&n.locale!=="ko"&&(Ft||H!=="onCompositionStart"?H==="onCompositionEnd"&&Ft&&(W=Dl()):(et=w,ci="value"in et?et.value:et.textContent,Ft=!0)),D=Io(y,H),0<D.length&&(H=new Hl(H,e,null,n,w),k.push({event:H,listeners:D}),W?H.data=W:(W=Kl(n),W!==null&&(H.data=W)))),(W=rh?th(e,n):nh(e,n))&&(y=Io(y,"onBeforeInput"),0<y.length&&(w=new Hl("onBeforeInput","beforeinput",null,n,w),k.push({event:w,listeners:y}),w.data=W))}fc(k,r)})}function Fn(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Io(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=jn(e,n),a!=null&&o.unshift(Fn(e,a,i)),a=jn(e,r),a!=null&&o.push(Fn(e,a,i))),e=e.return}return o}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gc(e,r,n,o,i){for(var a=r._reactName,d=[];n!==null&&n!==o;){var p=n,h=p.alternate,y=p.stateNode;if(h!==null&&h===o)break;p.tag===5&&y!==null&&(p=y,i?(h=jn(n,a),h!=null&&d.unshift(Fn(n,h,p))):i||(h=jn(n,a),h!=null&&d.push(Fn(n,h,p)))),n=n.return}d.length!==0&&e.push({event:r,listeners:d})}var gh=/\r\n?/g,vh=/\u0000|\uFFFD/g;function vc(e){return(typeof e=="string"?e:""+e).replace(gh,`
`).replace(vh,"")}function Bo(e,r,n){if(r=vc(r),vc(e)!==r&&n)throw Error(l(425))}function _o(){}var Ci=null,Ei=null;function Ti(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,yh=typeof clearTimeout=="function"?clearTimeout:void 0,yc=typeof Promise=="function"?Promise:void 0,jh=typeof queueMicrotask=="function"?queueMicrotask:typeof yc!="undefined"?function(e){return yc.resolve(null).then(e).catch(Nh)}:zi;function Nh(e){setTimeout(function(){throw e})}function Ii(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),zn(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);zn(r)}function tt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function jc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Ht=Math.random().toString(36).slice(2),Lr="__reactFiber$"+Ht,Dn="__reactProps$"+Ht,Dr="__reactContainer$"+Ht,Bi="__reactEvents$"+Ht,bh="__reactListeners$"+Ht,wh="__reactHandles$"+Ht;function vt(e){var r=e[Lr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Dr]||n[Lr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=jc(e);e!==null;){if(n=e[Lr])return n;e=jc(e)}return r}e=n,n=e.parentNode}return null}function Wn(e){return e=e[Lr]||e[Dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Lo(e){return e[Dn]||null}var _i=[],Vt=-1;function nt(e){return{current:e}}function je(e){0>Vt||(e.current=_i[Vt],_i[Vt]=null,Vt--)}function ve(e,r){Vt++,_i[Vt]=e.current,e.current=r}var ot={},$e=nt(ot),qe=nt(!1),yt=ot;function Qt(e,r){var n=e.type.contextTypes;if(!n)return ot;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=r[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(e){return e=e.childContextTypes,e!=null}function Po(){je(qe),je($e)}function Nc(e,r,n){if($e.current!==ot)throw Error(l(168));ve($e,r),ve(qe,n)}function bc(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(l(108,ue(e)||"Unknown",i));return z({},n,o)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,yt=$e.current,ve($e,e),ve(qe,qe.current),!0}function wc(e,r,n){var o=e.stateNode;if(!o)throw Error(l(169));n?(e=bc(e,r,yt),o.__reactInternalMemoizedMergedChildContext=e,je(qe),je($e),ve($e,e)):je(qe),ve(qe,n)}var Wr=null,Mo=!1,Li=!1;function kc(e){Wr===null?Wr=[e]:Wr.push(e)}function kh(e){Mo=!0,kc(e)}function st(){if(!Li&&Wr!==null){Li=!0;var e=0,r=fe;try{var n=Wr;for(fe=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Wr=null,Mo=!1}catch(i){throw Wr!==null&&(Wr=Wr.slice(e+1)),Cl(ri,st),i}finally{fe=r,Li=!1}}return null}var Yt=[],Gt=0,Ao=null,Oo=0,fr=[],xr=0,jt=null,Ur=1,Hr="";function Nt(e,r){Yt[Gt++]=Oo,Yt[Gt++]=Ao,Ao=e,Oo=r}function Sc(e,r,n){fr[xr++]=Ur,fr[xr++]=Hr,fr[xr++]=jt,jt=e;var o=Ur;e=Hr;var i=32-kr(o)-1;o&=~(1<<i),n+=1;var a=32-kr(r)+i;if(30<a){var d=i-i%5;a=(o&(1<<d)-1).toString(32),o>>=d,i-=d,Ur=1<<32-kr(r)+i|n<<i|o,Hr=a+e}else Ur=1<<a|n<<i|o,Hr=e}function Pi(e){e.return!==null&&(Nt(e,1),Sc(e,1,0))}function Ri(e){for(;e===Ao;)Ao=Yt[--Gt],Yt[Gt]=null,Oo=Yt[--Gt],Yt[Gt]=null;for(;e===jt;)jt=fr[--xr],fr[xr]=null,Hr=fr[--xr],fr[xr]=null,Ur=fr[--xr],fr[xr]=null}var ar=null,lr=null,be=!1,Cr=null;function Cc(e,r){var n=jr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Ec(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ar=e,lr=tt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ar=e,lr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=jt!==null?{id:Ur,overflow:Hr}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=jr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,ar=e,lr=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ai(e){if(be){var r=lr;if(r){var n=r;if(!Ec(e,r)){if(Mi(e))throw Error(l(418));r=tt(n.nextSibling);var o=ar;r&&Ec(e,r)?Cc(o,n):(e.flags=e.flags&-4097|2,be=!1,ar=e)}}else{if(Mi(e))throw Error(l(418));e.flags=e.flags&-4097|2,be=!1,ar=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ar=e}function Fo(e){if(e!==ar)return!1;if(!be)return Tc(e),be=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ti(e.type,e.memoizedProps)),r&&(r=lr)){if(Mi(e))throw zc(),Error(l(418));for(;r;)Cc(e,r),r=tt(r.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){lr=tt(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}lr=null}}else lr=ar?tt(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=lr;e;)e=tt(e.nextSibling)}function Kt(){lr=ar=null,be=!1}function Oi(e){Cr===null?Cr=[e]:Cr.push(e)}var Sh=J.ReactCurrentBatchConfig;function Un(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var o=n.stateNode}if(!o)throw Error(l(147,e));var i=o,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(d){var p=i.refs;d===null?delete p[a]:p[a]=d},r._stringRef=a,r)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function Do(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Ic(e){var r=e._init;return r(e._payload)}function Bc(e){function r(x,m){if(e){var v=x.deletions;v===null?(x.deletions=[m],x.flags|=16):v.push(m)}}function n(x,m){if(!e)return null;for(;m!==null;)r(x,m),m=m.sibling;return null}function o(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=ht(x,m),x.index=0,x.sibling=null,x}function a(x,m,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<m?(x.flags|=2,m):v):(x.flags|=2,m)):(x.flags|=1048576,m)}function d(x){return e&&x.alternate===null&&(x.flags|=2),x}function p(x,m,v,C){return m===null||m.tag!==6?(m=za(v,x.mode,C),m.return=x,m):(m=i(m,v),m.return=x,m)}function h(x,m,v,C){var R=v.type;return R===U?w(x,m,v.props.children,C,v.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===He&&Ic(R)===m.type)?(C=i(m,v.props),C.ref=Un(x,m,v),C.return=x,C):(C=ds(v.type,v.key,v.props,null,x.mode,C),C.ref=Un(x,m,v),C.return=x,C)}function y(x,m,v,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ia(v,x.mode,C),m.return=x,m):(m=i(m,v.children||[]),m.return=x,m)}function w(x,m,v,C,R){return m===null||m.tag!==7?(m=zt(v,x.mode,C,R),m.return=x,m):(m=i(m,v),m.return=x,m)}function k(x,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=za(""+m,x.mode,v),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case de:return v=ds(m.type,m.key,m.props,null,x.mode,v),v.ref=Un(x,null,m),v.return=x,v;case G:return m=Ia(m,x.mode,v),m.return=x,m;case He:var C=m._init;return k(x,C(m._payload),v)}if(gn(m)||M(m))return m=zt(m,x.mode,v,null),m.return=x,m;Do(x,m)}return null}function b(x,m,v,C){var R=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:p(x,m,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case de:return v.key===R?h(x,m,v,C):null;case G:return v.key===R?y(x,m,v,C):null;case He:return R=v._init,b(x,m,R(v._payload),C)}if(gn(v)||M(v))return R!==null?null:w(x,m,v,C,null);Do(x,v)}return null}function I(x,m,v,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return x=x.get(v)||null,p(m,x,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case de:return x=x.get(C.key===null?v:C.key)||null,h(m,x,C,R);case G:return x=x.get(C.key===null?v:C.key)||null,y(m,x,C,R);case He:var D=C._init;return I(x,m,v,D(C._payload),R)}if(gn(C)||M(C))return x=x.get(v)||null,w(m,x,C,R,null);Do(m,C)}return null}function L(x,m,v,C){for(var R=null,D=null,W=m,H=m=0,Oe=null;W!==null&&H<v.length;H++){W.index>H?(Oe=W,W=null):Oe=W.sibling;var ce=b(x,W,v[H],C);if(ce===null){W===null&&(W=Oe);break}e&&W&&ce.alternate===null&&r(x,W),m=a(ce,m,H),D===null?R=ce:D.sibling=ce,D=ce,W=Oe}if(H===v.length)return n(x,W),be&&Nt(x,H),R;if(W===null){for(;H<v.length;H++)W=k(x,v[H],C),W!==null&&(m=a(W,m,H),D===null?R=W:D.sibling=W,D=W);return be&&Nt(x,H),R}for(W=o(x,W);H<v.length;H++)Oe=I(W,x,H,v[H],C),Oe!==null&&(e&&Oe.alternate!==null&&W.delete(Oe.key===null?H:Oe.key),m=a(Oe,m,H),D===null?R=Oe:D.sibling=Oe,D=Oe);return e&&W.forEach(function(mt){return r(x,mt)}),be&&Nt(x,H),R}function P(x,m,v,C){var R=M(v);if(typeof R!="function")throw Error(l(150));if(v=R.call(v),v==null)throw Error(l(151));for(var D=R=null,W=m,H=m=0,Oe=null,ce=v.next();W!==null&&!ce.done;H++,ce=v.next()){W.index>H?(Oe=W,W=null):Oe=W.sibling;var mt=b(x,W,ce.value,C);if(mt===null){W===null&&(W=Oe);break}e&&W&&mt.alternate===null&&r(x,W),m=a(mt,m,H),D===null?R=mt:D.sibling=mt,D=mt,W=Oe}if(ce.done)return n(x,W),be&&Nt(x,H),R;if(W===null){for(;!ce.done;H++,ce=v.next())ce=k(x,ce.value,C),ce!==null&&(m=a(ce,m,H),D===null?R=ce:D.sibling=ce,D=ce);return be&&Nt(x,H),R}for(W=o(x,W);!ce.done;H++,ce=v.next())ce=I(W,x,H,ce.value,C),ce!==null&&(e&&ce.alternate!==null&&W.delete(ce.key===null?H:ce.key),m=a(ce,m,H),D===null?R=ce:D.sibling=ce,D=ce);return e&&W.forEach(function(om){return r(x,om)}),be&&Nt(x,H),R}function Ee(x,m,v,C){if(typeof v=="object"&&v!==null&&v.type===U&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case de:e:{for(var R=v.key,D=m;D!==null;){if(D.key===R){if(R=v.type,R===U){if(D.tag===7){n(x,D.sibling),m=i(D,v.props.children),m.return=x,x=m;break e}}else if(D.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===He&&Ic(R)===D.type){n(x,D.sibling),m=i(D,v.props),m.ref=Un(x,D,v),m.return=x,x=m;break e}n(x,D);break}else r(x,D);D=D.sibling}v.type===U?(m=zt(v.props.children,x.mode,C,v.key),m.return=x,x=m):(C=ds(v.type,v.key,v.props,null,x.mode,C),C.ref=Un(x,m,v),C.return=x,x=C)}return d(x);case G:e:{for(D=v.key;m!==null;){if(m.key===D)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(x,m.sibling),m=i(m,v.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else r(x,m);m=m.sibling}m=Ia(v,x.mode,C),m.return=x,x=m}return d(x);case He:return D=v._init,Ee(x,m,D(v._payload),C)}if(gn(v))return L(x,m,v,C);if(M(v))return P(x,m,v,C);Do(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(x,m.sibling),m=i(m,v),m.return=x,x=m):(n(x,m),m=za(v,x.mode,C),m.return=x,x=m),d(x)):n(x,m)}return Ee}var Xt=Bc(!0),_c=Bc(!1),Wo=nt(null),Uo=null,qt=null,Fi=null;function Di(){Fi=qt=Uo=null}function Wi(e){var r=Wo.current;je(Wo),e._currentValue=r}function Ui(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function Zt(e,r){Uo=e,Fi=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Je=!0),e.firstContext=null)}function gr(e){var r=e._currentValue;if(Fi!==e)if(e={context:e,memoizedValue:r,next:null},qt===null){if(Uo===null)throw Error(l(308));qt=e,Uo.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return r}var bt=null;function Hi(e){bt===null?bt=[e]:bt.push(e)}function Lc(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,Hi(r)):(n.next=i.next,i.next=n),r.interleaved=n,$r(e,o)}function $r(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function at(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ae&2)!==0){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,$r(e,n)}return i=o.interleaved,i===null?(r.next=r,Hi(o)):(r.next=i.next,i.next=r),o.interleaved=r,$r(e,n)}function Ho(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,oi(e,n)}}function Rc(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=d:a=a.next=d,n=n.next}while(n!==null);a===null?i=a=r:a=a.next=r}else i=a=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function $o(e,r,n,o){var i=e.updateQueue;it=!1;var a=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var h=p,y=h.next;h.next=null,d===null?a=y:d.next=y,d=h;var w=e.alternate;w!==null&&(w=w.updateQueue,p=w.lastBaseUpdate,p!==d&&(p===null?w.firstBaseUpdate=y:p.next=y,w.lastBaseUpdate=h))}if(a!==null){var k=i.baseState;d=0,w=y=h=null,p=a;do{var b=p.lane,I=p.eventTime;if((o&b)===b){w!==null&&(w=w.next={eventTime:I,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var L=e,P=p;switch(b=r,I=n,P.tag){case 1:if(L=P.payload,typeof L=="function"){k=L.call(I,k,b);break e}k=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=P.payload,b=typeof L=="function"?L.call(I,k,b):L,b==null)break e;k=z({},k,b);break e;case 2:it=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,b=i.effects,b===null?i.effects=[p]:b.push(p))}else I={eventTime:I,lane:b,tag:p.tag,payload:p.payload,callback:p.callback,next:null},w===null?(y=w=I,h=k):w=w.next=I,d|=b;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;b=p,p=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);if(w===null&&(h=k),i.baseState=h,i.firstBaseUpdate=y,i.lastBaseUpdate=w,r=i.shared.interleaved,r!==null){i=r;do d|=i.lane,i=i.next;while(i!==r)}else a===null&&(i.shared.lanes=0);St|=d,e.lanes=d,e.memoizedState=k}}function Mc(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(l(191,i));i.call(o)}}}var Hn={},Pr=nt(Hn),$n=nt(Hn),Vn=nt(Hn);function wt(e){if(e===Hn)throw Error(l(174));return e}function Vi(e,r){switch(ve(Vn,r),ve($n,e),ve(Pr,Hn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Qs(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Qs(r,e)}je(Pr),ve(Pr,r)}function Jt(){je(Pr),je($n),je(Vn)}function Ac(e){wt(Vn.current);var r=wt(Pr.current),n=Qs(r,e.type);r!==n&&(ve($n,e),ve(Pr,n))}function Qi(e){$n.current===e&&(je(Pr),je($n))}var we=nt(0);function Vo(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Yi=[];function Gi(){for(var e=0;e<Yi.length;e++)Yi[e]._workInProgressVersionPrimary=null;Yi.length=0}var Qo=J.ReactCurrentDispatcher,Ki=J.ReactCurrentBatchConfig,kt=0,ke=null,_e=null,Me=null,Yo=!1,Qn=!1,Yn=0,Ch=0;function Ve(){throw Error(l(321))}function Xi(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Sr(e[n],r[n]))return!1;return!0}function qi(e,r,n,o,i,a){if(kt=a,ke=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qo.current=e===null||e.memoizedState===null?Ih:Bh,e=n(o,i),Qn){a=0;do{if(Qn=!1,Yn=0,25<=a)throw Error(l(301));a+=1,Me=_e=null,r.updateQueue=null,Qo.current=_h,e=n(o,i)}while(Qn)}if(Qo.current=Xo,r=_e!==null&&_e.next!==null,kt=0,Me=_e=ke=null,Yo=!1,r)throw Error(l(300));return e}function Zi(){var e=Yn!==0;return Yn=0,e}function Rr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ke.memoizedState=Me=e:Me=Me.next=e,Me}function vr(){if(_e===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var r=Me===null?ke.memoizedState:Me.next;if(r!==null)Me=r,_e=e;else{if(e===null)throw Error(l(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Me===null?ke.memoizedState=Me=e:Me=Me.next=e}return Me}function Gn(e,r){return typeof r=="function"?r(e):r}function Ji(e){var r=vr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=_e,i=o.baseQueue,a=n.pending;if(a!==null){if(i!==null){var d=i.next;i.next=a.next,a.next=d}o.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,o=o.baseState;var p=d=null,h=null,y=a;do{var w=y.lane;if((kt&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),o=y.hasEagerState?y.eagerState:e(o,y.action);else{var k={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(p=h=k,d=o):h=h.next=k,ke.lanes|=w,St|=w}y=y.next}while(y!==null&&y!==a);h===null?d=o:h.next=p,Sr(o,r.memoizedState)||(Je=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=h,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ke.lanes|=a,St|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function ea(e){var r=vr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,a=r.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do a=e(a,d.action),d=d.next;while(d!==i);Sr(a,r.memoizedState)||(Je=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),n.lastRenderedState=a}return[a,o]}function Oc(){}function Fc(e,r){var n=ke,o=vr(),i=r(),a=!Sr(o.memoizedState,i);if(a&&(o.memoizedState=i,Je=!0),o=o.queue,ra(Uc.bind(null,n,o,e),[e]),o.getSnapshot!==r||a||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Kn(9,Wc.bind(null,n,o,i,r),void 0,null),Ae===null)throw Error(l(349));(kt&30)!==0||Dc(n,r,i)}return i}function Dc(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=ke.updateQueue,r===null?(r={lastEffect:null,stores:null},ke.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Wc(e,r,n,o){r.value=n,r.getSnapshot=o,Hc(r)&&$c(e)}function Uc(e,r,n){return n(function(){Hc(r)&&$c(e)})}function Hc(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Sr(e,n)}catch{return!0}}function $c(e){var r=$r(e,1);r!==null&&Ir(r,e,1,-1)}function Vc(e){var r=Rr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},r.queue=e,e=e.dispatch=zh.bind(null,ke,e),[r.memoizedState,e]}function Kn(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=ke.updateQueue,r===null?(r={lastEffect:null,stores:null},ke.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function Qc(){return vr().memoizedState}function Go(e,r,n,o){var i=Rr();ke.flags|=e,i.memoizedState=Kn(1|r,n,void 0,o===void 0?null:o)}function Ko(e,r,n,o){var i=vr();o=o===void 0?null:o;var a=void 0;if(_e!==null){var d=_e.memoizedState;if(a=d.destroy,o!==null&&Xi(o,d.deps)){i.memoizedState=Kn(r,n,a,o);return}}ke.flags|=e,i.memoizedState=Kn(1|r,n,a,o)}function Yc(e,r){return Go(8390656,8,e,r)}function ra(e,r){return Ko(2048,8,e,r)}function Gc(e,r){return Ko(4,2,e,r)}function Kc(e,r){return Ko(4,4,e,r)}function Xc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function qc(e,r,n){return n=n!=null?n.concat([e]):null,Ko(4,4,Xc.bind(null,r,e),n)}function ta(){}function Zc(e,r){var n=vr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&Xi(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function Jc(e,r){var n=vr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&Xi(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function ed(e,r,n){return(kt&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n):(Sr(n,r)||(n=Il(),ke.lanes|=n,St|=n,e.baseState=!0),r)}function Eh(e,r){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var o=Ki.transition;Ki.transition={};try{e(!1),r()}finally{fe=n,Ki.transition=o}}function rd(){return vr().memoizedState}function Th(e,r,n){var o=ut(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},td(e))nd(r,n);else if(n=Lc(e,r,n,o),n!==null){var i=Xe();Ir(n,e,o,i),od(n,r,o)}}function zh(e,r,n){var o=ut(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(td(e))nd(r,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var d=r.lastRenderedState,p=a(d,n);if(i.hasEagerState=!0,i.eagerState=p,Sr(p,d)){var h=r.interleaved;h===null?(i.next=i,Hi(r)):(i.next=h.next,h.next=i),r.interleaved=i;return}}catch{}finally{}n=Lc(e,r,i,o),n!==null&&(i=Xe(),Ir(n,e,o,i),od(n,r,o))}}function td(e){var r=e.alternate;return e===ke||r!==null&&r===ke}function nd(e,r){Qn=Yo=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function od(e,r,n){if((n&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,oi(e,n)}}var Xo={readContext:gr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Ih={readContext:gr,useCallback:function(e,r){return Rr().memoizedState=[e,r===void 0?null:r],e},useContext:gr,useEffect:Yc,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Go(4194308,4,Xc.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Go(4194308,4,e,r)},useInsertionEffect:function(e,r){return Go(4,2,e,r)},useMemo:function(e,r){var n=Rr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=Rr();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Th.bind(null,ke,e),[o.memoizedState,e]},useRef:function(e){var r=Rr();return e={current:e},r.memoizedState=e},useState:Vc,useDebugValue:ta,useDeferredValue:function(e){return Rr().memoizedState=e},useTransition:function(){var e=Vc(!1),r=e[0];return e=Eh.bind(null,e[1]),Rr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=ke,i=Rr();if(be){if(n===void 0)throw Error(l(407));n=n()}else{if(n=r(),Ae===null)throw Error(l(349));(kt&30)!==0||Dc(o,r,n)}i.memoizedState=n;var a={value:n,getSnapshot:r};return i.queue=a,Yc(Uc.bind(null,o,a,e),[e]),o.flags|=2048,Kn(9,Wc.bind(null,o,a,n,r),void 0,null),n},useId:function(){var e=Rr(),r=Ae.identifierPrefix;if(be){var n=Hr,o=Ur;n=(o&~(1<<32-kr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=Yn++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Ch++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Bh={readContext:gr,useCallback:Zc,useContext:gr,useEffect:ra,useImperativeHandle:qc,useInsertionEffect:Gc,useLayoutEffect:Kc,useMemo:Jc,useReducer:Ji,useRef:Qc,useState:function(){return Ji(Gn)},useDebugValue:ta,useDeferredValue:function(e){var r=vr();return ed(r,_e.memoizedState,e)},useTransition:function(){var e=Ji(Gn)[0],r=vr().memoizedState;return[e,r]},useMutableSource:Oc,useSyncExternalStore:Fc,useId:rd,unstable_isNewReconciler:!1},_h={readContext:gr,useCallback:Zc,useContext:gr,useEffect:ra,useImperativeHandle:qc,useInsertionEffect:Gc,useLayoutEffect:Kc,useMemo:Jc,useReducer:ea,useRef:Qc,useState:function(){return ea(Gn)},useDebugValue:ta,useDeferredValue:function(e){var r=vr();return _e===null?r.memoizedState=e:ed(r,_e.memoizedState,e)},useTransition:function(){var e=ea(Gn)[0],r=vr().memoizedState;return[e,r]},useMutableSource:Oc,useSyncExternalStore:Fc,useId:rd,unstable_isNewReconciler:!1};function Er(e,r){if(e&&e.defaultProps){r=z({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function na(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:z({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qo={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=Xe(),i=ut(e),a=Vr(o,i);a.payload=r,n!=null&&(a.callback=n),r=at(e,a,i),r!==null&&(Ir(r,e,i,o),Ho(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=Xe(),i=ut(e),a=Vr(o,i);a.tag=1,a.payload=r,n!=null&&(a.callback=n),r=at(e,a,i),r!==null&&(Ir(r,e,i,o),Ho(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Xe(),o=ut(e),i=Vr(n,o);i.tag=2,r!=null&&(i.callback=r),r=at(e,i,o),r!==null&&(Ir(r,e,o,n),Ho(r,e,o))}};function sd(e,r,n,o,i,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,d):r.prototype&&r.prototype.isPureReactComponent?!Rn(n,o)||!Rn(i,a):!0}function id(e,r,n){var o=!1,i=ot,a=r.contextType;return typeof a=="object"&&a!==null?a=gr(a):(i=Ze(r)?yt:$e.current,o=r.contextTypes,a=(o=o!=null)?Qt(e,i):ot),r=new r(n,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=qo,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),r}function ad(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&qo.enqueueReplaceState(r,r.state,null)}function oa(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$i(e);var a=r.contextType;typeof a=="object"&&a!==null?i.context=gr(a):(a=Ze(r)?yt:$e.current,i.context=Qt(e,a)),i.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(na(e,r,a,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&qo.enqueueReplaceState(i,i.state,null),$o(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function en(e,r){try{var n="",o=r;do n+=te(o),o=o.return;while(o);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:i,digest:null}}function sa(e,r,n){return{value:e,source:null,stack:n!=null?n:null,digest:r!=null?r:null}}function ia(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Lh=typeof WeakMap=="function"?WeakMap:Map;function ld(e,r,n){n=Vr(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){os||(os=!0,Na=o),ia(e,r)},n}function cd(e,r,n){n=Vr(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){ia(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ia(e,r),typeof o!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),n}function dd(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Lh;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=Yh.bind(null,e,r,n),r.then(e,e))}function ud(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function pd(e,r,n,o,i){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Vr(-1,1),r.tag=2,at(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ph=J.ReactCurrentOwner,Je=!1;function Ke(e,r,n,o){r.child=e===null?_c(r,null,n,o):Xt(r,e.child,n,o)}function hd(e,r,n,o,i){n=n.render;var a=r.ref;return Zt(r,i),o=qi(e,r,n,o,a,i),n=Zi(),e!==null&&!Je?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Qr(e,r,i)):(be&&n&&Pi(r),r.flags|=1,Ke(e,r,o,i),r.child)}function md(e,r,n,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!Ta(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=a,fd(e,r,a,o,i)):(e=ds(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&i)===0){var d=a.memoizedProps;if(n=n.compare,n=n!==null?n:Rn,n(d,o)&&e.ref===r.ref)return Qr(e,r,i)}return r.flags|=1,e=ht(a,o),e.ref=r.ref,e.return=r,r.child=e}function fd(e,r,n,o,i){if(e!==null){var a=e.memoizedProps;if(Rn(a,o)&&e.ref===r.ref)if(Je=!1,r.pendingProps=o=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Je=!0);else return r.lanes=e.lanes,Qr(e,r,i)}return aa(e,r,n,o,i)}function xd(e,r,n){var o=r.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(tn,cr),cr|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ve(tn,cr),cr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,ve(tn,cr),cr|=o}else a!==null?(o=a.baseLanes|n,r.memoizedState=null):o=n,ve(tn,cr),cr|=o;return Ke(e,r,i,n),r.child}function gd(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function aa(e,r,n,o,i){var a=Ze(n)?yt:$e.current;return a=Qt(r,a),Zt(r,i),n=qi(e,r,n,o,a,i),o=Zi(),e!==null&&!Je?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Qr(e,r,i)):(be&&o&&Pi(r),r.flags|=1,Ke(e,r,n,i),r.child)}function vd(e,r,n,o,i){if(Ze(n)){var a=!0;Ro(r)}else a=!1;if(Zt(r,i),r.stateNode===null)Jo(e,r),id(r,n,o),oa(r,n,o,i),o=!0;else if(e===null){var d=r.stateNode,p=r.memoizedProps;d.props=p;var h=d.context,y=n.contextType;typeof y=="object"&&y!==null?y=gr(y):(y=Ze(n)?yt:$e.current,y=Qt(r,y));var w=n.getDerivedStateFromProps,k=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||h!==y)&&ad(r,d,o,y),it=!1;var b=r.memoizedState;d.state=b,$o(r,o,d,i),h=r.memoizedState,p!==o||b!==h||qe.current||it?(typeof w=="function"&&(na(r,n,w,o),h=r.memoizedState),(p=it||sd(r,n,p,o,b,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=h),d.props=o,d.state=h,d.context=y,o=p):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,Pc(e,r),p=r.memoizedProps,y=r.type===r.elementType?p:Er(r.type,p),d.props=y,k=r.pendingProps,b=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=gr(h):(h=Ze(n)?yt:$e.current,h=Qt(r,h));var I=n.getDerivedStateFromProps;(w=typeof I=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==k||b!==h)&&ad(r,d,o,h),it=!1,b=r.memoizedState,d.state=b,$o(r,o,d,i);var L=r.memoizedState;p!==k||b!==L||qe.current||it?(typeof I=="function"&&(na(r,n,I,o),L=r.memoizedState),(y=it||sd(r,n,y,o,b,L,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,L,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,L,h)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=L),d.props=o,d.state=L,d.context=h,o=y):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&b===e.memoizedState||(r.flags|=1024),o=!1)}return la(e,r,n,o,a,i)}function la(e,r,n,o,i,a){gd(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return i&&wc(r,n,!1),Qr(e,r,a);o=r.stateNode,Ph.current=r;var p=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=Xt(r,e.child,null,a),r.child=Xt(r,null,p,a)):Ke(e,r,p,a),r.memoizedState=o.state,i&&wc(r,n,!0),r.child}function yd(e){var r=e.stateNode;r.pendingContext?Nc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Nc(e,r.context,!1),Vi(e,r.containerInfo)}function jd(e,r,n,o,i){return Kt(),Oi(i),r.flags|=256,Ke(e,r,n,o),r.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function da(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,r,n){var o=r.pendingProps,i=we.current,a=!1,d=(r.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(we,i&1),e===null)return Ai(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,a?(o=r.mode,a=r.child,d={mode:"hidden",children:d},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=us(d,o,0,null),e=zt(e,o,n,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=da(n),r.memoizedState=ca,e):ua(r,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Rh(e,r,d,o,p,i,n);if(a){a=o.fallback,d=r.mode,i=e.child,p=i.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=h,r.deletions=null):(o=ht(i,h),o.subtreeFlags=i.subtreeFlags&14680064),p!==null?a=ht(p,a):(a=zt(a,d,n,null),a.flags|=2),a.return=r,o.return=r,o.sibling=a,r.child=o,o=a,a=r.child,d=e.child.memoizedState,d=d===null?da(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~n,r.memoizedState=ca,o}return a=e.child,e=a.sibling,o=ht(a,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function ua(e,r){return r=us({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Zo(e,r,n,o){return o!==null&&Oi(o),Xt(r,e.child,null,n),e=ua(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Rh(e,r,n,o,i,a,d){if(n)return r.flags&256?(r.flags&=-257,o=sa(Error(l(422))),Zo(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=o.fallback,i=r.mode,o=us({mode:"visible",children:o.children},i,0,null),a=zt(a,i,d,null),a.flags|=2,o.return=r,a.return=r,o.sibling=a,r.child=o,(r.mode&1)!==0&&Xt(r,e.child,null,d),r.child.memoizedState=da(d),r.memoizedState=ca,a);if((r.mode&1)===0)return Zo(e,r,d,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var p=o.dgst;return o=p,a=Error(l(419)),o=sa(a,o,void 0),Zo(e,r,d,o)}if(p=(d&e.childLanes)!==0,Je||p){if(o=Ae,o!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|d))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,$r(e,i),Ir(o,e,i,-1))}return Ea(),o=sa(Error(l(421))),Zo(e,r,d,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=Gh.bind(null,e),i._reactRetry=r,null):(e=a.treeContext,lr=tt(i.nextSibling),ar=r,be=!0,Cr=null,e!==null&&(fr[xr++]=Ur,fr[xr++]=Hr,fr[xr++]=jt,Ur=e.id,Hr=e.overflow,jt=r),r=ua(r,o.children),r.flags|=4096,r)}function bd(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Ui(e.return,r,n)}function pa(e,r,n,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=i)}function wd(e,r,n){var o=r.pendingProps,i=o.revealOrder,a=o.tail;if(Ke(e,r,o.children,n),o=we.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,n,r);else if(e.tag===19)bd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ve(we,o),(r.mode&1)===0)r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),pa(r,!1,i,n,a);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Vo(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pa(r,!0,n,null,a);break;case"together":pa(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Jo(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Qr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),St|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,n=ht(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Mh(e,r,n){switch(r.tag){case 3:yd(r),Kt();break;case 5:Ac(r);break;case 1:Ze(r.type)&&Ro(r);break;case 4:Vi(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;ve(Wo,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(ve(we,we.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?Nd(e,r,n):(ve(we,we.current&1),e=Qr(e,r,n),e!==null?e.sibling:null);ve(we,we.current&1);break;case 19:if(o=(n&r.childLanes)!==0,(e.flags&128)!==0){if(o)return wd(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(we,we.current),o)break;return null;case 22:case 23:return r.lanes=0,xd(e,r,n)}return Qr(e,r,n)}var kd,ha,Sd,Cd;kd=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ha=function(){},Sd=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,wt(Pr.current);var a=null;switch(n){case"input":i=Us(e,i),o=Us(e,o),a=[];break;case"select":i=z({},i,{value:void 0}),o=z({},o,{value:void 0}),a=[];break;case"textarea":i=Vs(e,i),o=Vs(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=_o)}Ys(n,o);var d;n=null;for(y in i)if(!o.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var p=i[y];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(g.hasOwnProperty(y)?a||(a=[]):(a=a||[]).push(y,null));for(y in o){var h=o[y];if(p=i!=null?i[y]:void 0,o.hasOwnProperty(y)&&h!==p&&(h!=null||p!=null))if(y==="style")if(p){for(d in p)!p.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&p[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(a||(a=[]),a.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(a=a||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(g.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&ye("scroll",e),a||p===h||(a=[])):(a=a||[]).push(y,h))}n&&(a=a||[]).push("style",n);var y=a;(r.updateQueue=y)&&(r.flags|=4)}},Cd=function(e,r,n,o){n!==o&&(r.flags|=4)};function Xn(e,r){if(!be)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function Ah(e,r,n){var o=r.pendingProps;switch(Ri(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(r),null;case 1:return Ze(r.type)&&Po(),Qe(r),null;case 3:return o=r.stateNode,Jt(),je(qe),je($e),Gi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Fo(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cr!==null&&(ka(Cr),Cr=null))),ha(e,r),Qe(r),null;case 5:Qi(r);var i=wt(Vn.current);if(n=r.type,e!==null&&r.stateNode!=null)Sd(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(l(166));return Qe(r),null}if(e=wt(Pr.current),Fo(r)){o=r.stateNode,n=r.type;var a=r.memoizedProps;switch(o[Lr]=r,o[Dn]=a,e=(r.mode&1)!==0,n){case"dialog":ye("cancel",o),ye("close",o);break;case"iframe":case"object":case"embed":ye("load",o);break;case"video":case"audio":for(i=0;i<An.length;i++)ye(An[i],o);break;case"source":ye("error",o);break;case"img":case"image":case"link":ye("error",o),ye("load",o);break;case"details":ye("toggle",o);break;case"input":il(o,a),ye("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},ye("invalid",o);break;case"textarea":cl(o,a),ye("invalid",o)}Ys(n,a),i=null;for(var d in a)if(a.hasOwnProperty(d)){var p=a[d];d==="children"?typeof p=="string"?o.textContent!==p&&(a.suppressHydrationWarning!==!0&&Bo(o.textContent,p,e),i=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&Bo(o.textContent,p,e),i=["children",""+p]):g.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&ye("scroll",o)}switch(n){case"input":Fr(o),ll(o,a,!0);break;case"textarea":Fr(o),ul(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=_o)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Lr]=r,e[Dn]=o,kd(e,r,!1,!1),r.stateNode=e;e:{switch(d=Gs(n,o),n){case"dialog":ye("cancel",e),ye("close",e),i=o;break;case"iframe":case"object":case"embed":ye("load",e),i=o;break;case"video":case"audio":for(i=0;i<An.length;i++)ye(An[i],e);i=o;break;case"source":ye("error",e),i=o;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=o;break;case"details":ye("toggle",e),i=o;break;case"input":il(e,o),i=Us(e,o),ye("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=z({},o,{value:void 0}),ye("invalid",e);break;case"textarea":cl(e,o),i=Vs(e,o),ye("invalid",e);break;default:i=o}Ys(n,i),p=i;for(a in p)if(p.hasOwnProperty(a)){var h=p[a];a==="style"?fl(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&hl(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&vn(e,h):typeof h=="number"&&vn(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(g.hasOwnProperty(a)?h!=null&&a==="onScroll"&&ye("scroll",e):h!=null&&oe(e,a,h,d))}switch(n){case"input":Fr(e),ll(e,o,!1);break;case"textarea":Fr(e),ul(e);break;case"option":o.value!=null&&e.setAttribute("value",""+se(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Pt(e,!!o.multiple,a,!1):o.defaultValue!=null&&Pt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_o)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Qe(r),null;case 6:if(e&&r.stateNode!=null)Cd(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(l(166));if(n=wt(Vn.current),wt(Pr.current),Fo(r)){if(o=r.stateNode,n=r.memoizedProps,o[Lr]=r,(a=o.nodeValue!==n)&&(e=ar,e!==null))switch(e.tag){case 3:Bo(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(o.nodeValue,n,(e.mode&1)!==0)}a&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Lr]=r,r.stateNode=o}return Qe(r),null;case 13:if(je(we),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&lr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)zc(),Kt(),r.flags|=98560,a=!1;else if(a=Fo(r),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Lr]=r}else Kt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Qe(r),a=!1}else Cr!==null&&(ka(Cr),Cr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(we.current&1)!==0?Le===0&&(Le=3):Ea())),r.updateQueue!==null&&(r.flags|=4),Qe(r),null);case 4:return Jt(),ha(e,r),e===null&&On(r.stateNode.containerInfo),Qe(r),null;case 10:return Wi(r.type._context),Qe(r),null;case 17:return Ze(r.type)&&Po(),Qe(r),null;case 19:if(je(we),a=r.memoizedState,a===null)return Qe(r),null;if(o=(r.flags&128)!==0,d=a.rendering,d===null)if(o)Xn(a,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Vo(e),d!==null){for(r.flags|=128,Xn(a,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)a=n,e=o,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(we,we.current&1|2),r.child}e=e.sibling}a.tail!==null&&Ce()>nn&&(r.flags|=128,o=!0,Xn(a,!1),r.lanes=4194304)}else{if(!o)if(e=Vo(d),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Xn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!be)return Qe(r),null}else 2*Ce()-a.renderingStartTime>nn&&n!==1073741824&&(r.flags|=128,o=!0,Xn(a,!1),r.lanes=4194304);a.isBackwards?(d.sibling=r.child,r.child=d):(n=a.last,n!==null?n.sibling=d:r.child=d,a.last=d)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Ce(),r.sibling=null,n=we.current,ve(we,o?n&1|2:n&1),r):(Qe(r),null);case 22:case 23:return Ca(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(cr&1073741824)!==0&&(Qe(r),r.subtreeFlags&6&&(r.flags|=8192)):Qe(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function Oh(e,r){switch(Ri(r),r.tag){case 1:return Ze(r.type)&&Po(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Jt(),je(qe),je($e),Gi(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Qi(r),null;case 13:if(je(we),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));Kt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return je(we),null;case 4:return Jt(),null;case 10:return Wi(r.type._context),null;case 22:case 23:return Ca(),null;case 24:return null;default:return null}}var es=!1,Ye=!1,Fh=typeof WeakSet=="function"?WeakSet:Set,_=null;function rn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Se(e,r,o)}else n.current=null}function ma(e,r,n){try{n()}catch(o){Se(e,r,o)}}var Ed=!1;function Dh(e,r){if(Ci=jo,e=sc(),vi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var d=0,p=-1,h=-1,y=0,w=0,k=e,b=null;r:for(;;){for(var I;k!==n||i!==0&&k.nodeType!==3||(p=d+i),k!==a||o!==0&&k.nodeType!==3||(h=d+o),k.nodeType===3&&(d+=k.nodeValue.length),(I=k.firstChild)!==null;)b=k,k=I;for(;;){if(k===e)break r;if(b===n&&++y===i&&(p=d),b===a&&++w===o&&(h=d),(I=k.nextSibling)!==null)break;k=b,b=k.parentNode}k=I}n=p===-1||h===-1?null:{start:p,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ei={focusedElem:e,selectionRange:n},jo=!1,_=r;_!==null;)if(r=_,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,_=e;else for(;_!==null;){r=_;try{var L=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var P=L.memoizedProps,Ee=L.memoizedState,x=r.stateNode,m=x.getSnapshotBeforeUpdate(r.elementType===r.type?P:Er(r.type,P),Ee);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=r.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){Se(r,r.return,C)}if(e=r.sibling,e!==null){e.return=r.return,_=e;break}_=r.return}return L=Ed,Ed=!1,L}function qn(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ma(r,n,a)}i=i.next}while(i!==o)}}function rs(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function fa(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Td(e){var r=e.alternate;r!==null&&(e.alternate=null,Td(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Lr],delete r[Dn],delete r[Bi],delete r[bh],delete r[wh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zd(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xa(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=_o));else if(o!==4&&(e=e.child,e!==null))for(xa(e,r,n),e=e.sibling;e!==null;)xa(e,r,n),e=e.sibling}function ga(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ga(e,r,n),e=e.sibling;e!==null;)ga(e,r,n),e=e.sibling}var We=null,Tr=!1;function lt(e,r,n){for(n=n.child;n!==null;)Bd(e,r,n),n=n.sibling}function Bd(e,r,n){if(_r&&typeof _r.onCommitFiberUnmount=="function")try{_r.onCommitFiberUnmount(mo,n)}catch{}switch(n.tag){case 5:Ye||rn(n,r);case 6:var o=We,i=Tr;We=null,lt(e,r,n),We=o,Tr=i,We!==null&&(Tr?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Tr?(e=We,n=n.stateNode,e.nodeType===8?Ii(e.parentNode,n):e.nodeType===1&&Ii(e,n),zn(e)):Ii(We,n.stateNode));break;case 4:o=We,i=Tr,We=n.stateNode.containerInfo,Tr=!0,lt(e,r,n),We=o,Tr=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&ma(n,r,d),i=i.next}while(i!==o)}lt(e,r,n);break;case 1:if(!Ye&&(rn(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(p){Se(n,r,p)}lt(e,r,n);break;case 21:lt(e,r,n);break;case 22:n.mode&1?(Ye=(o=Ye)||n.memoizedState!==null,lt(e,r,n),Ye=o):lt(e,r,n);break;default:lt(e,r,n)}}function _d(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fh),r.forEach(function(o){var i=Kh.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function zr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var a=e,d=r,p=d;e:for(;p!==null;){switch(p.tag){case 5:We=p.stateNode,Tr=!1;break e;case 3:We=p.stateNode.containerInfo,Tr=!0;break e;case 4:We=p.stateNode.containerInfo,Tr=!0;break e}p=p.return}if(We===null)throw Error(l(160));Bd(a,d,i),We=null,Tr=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(y){Se(i,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ld(r,e),r=r.sibling}function Ld(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zr(r,e),Mr(e),o&4){try{qn(3,e,e.return),rs(3,e)}catch(P){Se(e,e.return,P)}try{qn(5,e,e.return)}catch(P){Se(e,e.return,P)}}break;case 1:zr(r,e),Mr(e),o&512&&n!==null&&rn(n,n.return);break;case 5:if(zr(r,e),Mr(e),o&512&&n!==null&&rn(n,n.return),e.flags&32){var i=e.stateNode;try{vn(i,"")}catch(P){Se(e,e.return,P)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,d=n!==null?n.memoizedProps:a,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&al(i,a),Gs(p,d);var y=Gs(p,a);for(d=0;d<h.length;d+=2){var w=h[d],k=h[d+1];w==="style"?fl(i,k):w==="dangerouslySetInnerHTML"?hl(i,k):w==="children"?vn(i,k):oe(i,w,k,y)}switch(p){case"input":Hs(i,a);break;case"textarea":dl(i,a);break;case"select":var b=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var I=a.value;I!=null?Pt(i,!!a.multiple,I,!1):b!==!!a.multiple&&(a.defaultValue!=null?Pt(i,!!a.multiple,a.defaultValue,!0):Pt(i,!!a.multiple,a.multiple?[]:"",!1))}i[Dn]=a}catch(P){Se(e,e.return,P)}}break;case 6:if(zr(r,e),Mr(e),o&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(P){Se(e,e.return,P)}}break;case 3:if(zr(r,e),Mr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{zn(r.containerInfo)}catch(P){Se(e,e.return,P)}break;case 4:zr(r,e),Mr(e);break;case 13:zr(r,e),Mr(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ja=Ce())),o&4&&_d(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(y=Ye)||w,zr(r,e),Ye=y):zr(r,e),Mr(e),o&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!w&&(e.mode&1)!==0)for(_=e,w=e.child;w!==null;){for(k=_=w;_!==null;){switch(b=_,I=b.child,b.tag){case 0:case 11:case 14:case 15:qn(4,b,b.return);break;case 1:rn(b,b.return);var L=b.stateNode;if(typeof L.componentWillUnmount=="function"){o=b,n=b.return;try{r=o,L.props=r.memoizedProps,L.state=r.memoizedState,L.componentWillUnmount()}catch(P){Se(o,n,P)}}break;case 5:rn(b,b.return);break;case 22:if(b.memoizedState!==null){Md(k);continue}}I!==null?(I.return=b,_=I):Md(k)}w=w.sibling}e:for(w=null,k=e;;){if(k.tag===5){if(w===null){w=k;try{i=k.stateNode,y?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=ml("display",d))}catch(P){Se(e,e.return,P)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(P){Se(e,e.return,P)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:zr(r,e),Mr(e),o&4&&_d(e);break;case 21:break;default:zr(r,e),Mr(e)}}function Mr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(zd(n)){var o=n;break e}n=n.return}throw Error(l(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(vn(i,""),o.flags&=-33);var a=Id(e);ga(e,a,i);break;case 3:case 4:var d=o.stateNode.containerInfo,p=Id(e);xa(e,p,d);break;default:throw Error(l(161))}}catch(h){Se(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Wh(e,r,n){_=e,Pd(e)}function Pd(e,r,n){for(var o=(e.mode&1)!==0;_!==null;){var i=_,a=i.child;if(i.tag===22&&o){var d=i.memoizedState!==null||es;if(!d){var p=i.alternate,h=p!==null&&p.memoizedState!==null||Ye;p=es;var y=Ye;if(es=d,(Ye=h)&&!y)for(_=i;_!==null;)d=_,h=d.child,d.tag===22&&d.memoizedState!==null?Ad(i):h!==null?(h.return=d,_=h):Ad(i);for(;a!==null;)_=a,Pd(a),a=a.sibling;_=i,es=p,Ye=y}Rd(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,_=a):Rd(e)}}function Rd(e){for(;_!==null;){var r=_;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ye||rs(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Ye)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:Er(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Mc(r,a,o);break;case 3:var d=r.updateQueue;if(d!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Mc(r,d,n)}break;case 5:var p=r.stateNode;if(n===null&&r.flags&4){n=p;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&zn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ye||r.flags&512&&fa(r)}catch(b){Se(r,r.return,b)}}if(r===e){_=null;break}if(n=r.sibling,n!==null){n.return=r.return,_=n;break}_=r.return}}function Md(e){for(;_!==null;){var r=_;if(r===e){_=null;break}var n=r.sibling;if(n!==null){n.return=r.return,_=n;break}_=r.return}}function Ad(e){for(;_!==null;){var r=_;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{rs(4,r)}catch(h){Se(r,n,h)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(h){Se(r,i,h)}}var a=r.return;try{fa(r)}catch(h){Se(r,a,h)}break;case 5:var d=r.return;try{fa(r)}catch(h){Se(r,d,h)}}}catch(h){Se(r,r.return,h)}if(r===e){_=null;break}var p=r.sibling;if(p!==null){p.return=r.return,_=p;break}_=r.return}}var Uh=Math.ceil,ts=J.ReactCurrentDispatcher,va=J.ReactCurrentOwner,yr=J.ReactCurrentBatchConfig,ae=0,Ae=null,Te=null,Ue=0,cr=0,tn=nt(0),Le=0,Zn=null,St=0,ns=0,ya=0,Jn=null,er=null,ja=0,nn=1/0,Yr=null,os=!1,Na=null,ct=null,ss=!1,dt=null,is=0,eo=0,ba=null,as=-1,ls=0;function Xe(){return(ae&6)!==0?Ce():as!==-1?as:as=Ce()}function ut(e){return(e.mode&1)===0?1:(ae&2)!==0&&Ue!==0?Ue&-Ue:Sh.transition!==null?(ls===0&&(ls=Il()),ls):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Fl(e.type)),e)}function Ir(e,r,n,o){if(50<eo)throw eo=0,ba=null,Error(l(185));kn(e,n,o),((ae&2)===0||e!==Ae)&&(e===Ae&&((ae&2)===0&&(ns|=n),Le===4&&pt(e,Ue)),rr(e,o),n===1&&ae===0&&(r.mode&1)===0&&(nn=Ce()+500,Mo&&st()))}function rr(e,r){var n=e.callbackNode;Sp(e,r);var o=go(e,e===Ae?Ue:0);if(o===0)n!==null&&El(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&El(n),r===1)e.tag===0?kh(Fd.bind(null,e)):kc(Fd.bind(null,e)),jh(function(){(ae&6)===0&&st()}),n=null;else{switch(Bl(o)){case 1:n=ri;break;case 4:n=Tl;break;case 16:n=ho;break;case 536870912:n=zl;break;default:n=ho}n=Yd(n,Od.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Od(e,r){if(as=-1,ls=0,(ae&6)!==0)throw Error(l(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var o=go(e,e===Ae?Ue:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=cs(e,o);else{r=o;var i=ae;ae|=2;var a=Wd();(Ae!==e||Ue!==r)&&(Yr=null,nn=Ce()+500,Et(e,r));do try{Vh();break}catch(p){Dd(e,p)}while(!0);Di(),ts.current=a,ae=i,Te!==null?r=0:(Ae=null,Ue=0,r=Le)}if(r!==0){if(r===2&&(i=ti(e),i!==0&&(o=i,r=wa(e,i))),r===1)throw n=Zn,Et(e,0),pt(e,o),rr(e,Ce()),n;if(r===6)pt(e,o);else{if(i=e.current.alternate,(o&30)===0&&!Hh(i)&&(r=cs(e,o),r===2&&(a=ti(e),a!==0&&(o=a,r=wa(e,a))),r===1))throw n=Zn,Et(e,0),pt(e,o),rr(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(l(345));case 2:Tt(e,er,Yr);break;case 3:if(pt(e,o),(o&130023424)===o&&(r=ja+500-Ce(),10<r)){if(go(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zi(Tt.bind(null,e,er,Yr),r);break}Tt(e,er,Yr);break;case 4:if(pt(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var d=31-kr(o);a=1<<d,d=r[d],d>i&&(i=d),o&=~a}if(o=i,o=Ce()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Uh(o/1960))-o,10<o){e.timeoutHandle=zi(Tt.bind(null,e,er,Yr),o);break}Tt(e,er,Yr);break;case 5:Tt(e,er,Yr);break;default:throw Error(l(329))}}}return rr(e,Ce()),e.callbackNode===n?Od.bind(null,e):null}function wa(e,r){var n=Jn;return e.current.memoizedState.isDehydrated&&(Et(e,r).flags|=256),e=cs(e,r),e!==2&&(r=er,er=n,r!==null&&ka(r)),e}function ka(e){er===null?er=e:er.push.apply(er,e)}function Hh(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function pt(e,r){for(r&=~ya,r&=~ns,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-kr(r),o=1<<n;e[n]=-1,r&=~o}}function Fd(e){if((ae&6)!==0)throw Error(l(327));on();var r=go(e,0);if((r&1)===0)return rr(e,Ce()),null;var n=cs(e,r);if(e.tag!==0&&n===2){var o=ti(e);o!==0&&(r=o,n=wa(e,o))}if(n===1)throw n=Zn,Et(e,0),pt(e,r),rr(e,Ce()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Tt(e,er,Yr),rr(e,Ce()),null}function Sa(e,r){var n=ae;ae|=1;try{return e(r)}finally{ae=n,ae===0&&(nn=Ce()+500,Mo&&st())}}function Ct(e){dt!==null&&dt.tag===0&&(ae&6)===0&&on();var r=ae;ae|=1;var n=yr.transition,o=fe;try{if(yr.transition=null,fe=1,e)return e()}finally{fe=o,yr.transition=n,ae=r,(ae&6)===0&&st()}}function Ca(){cr=tn.current,je(tn)}function Et(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yh(n)),Te!==null)for(n=Te.return;n!==null;){var o=n;switch(Ri(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Po();break;case 3:Jt(),je(qe),je($e),Gi();break;case 5:Qi(o);break;case 4:Jt();break;case 13:je(we);break;case 19:je(we);break;case 10:Wi(o.type._context);break;case 22:case 23:Ca()}n=n.return}if(Ae=e,Te=e=ht(e.current,null),Ue=cr=r,Le=0,Zn=null,ya=ns=St=0,er=Jn=null,bt!==null){for(r=0;r<bt.length;r++)if(n=bt[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,a=n.pending;if(a!==null){var d=a.next;a.next=i,o.next=d}n.pending=o}bt=null}return e}function Dd(e,r){do{var n=Te;try{if(Di(),Qo.current=Xo,Yo){for(var o=ke.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Yo=!1}if(kt=0,Me=_e=ke=null,Qn=!1,Yn=0,va.current=null,n===null||n.return===null){Le=1,Zn=r,Te=null;break}e:{var a=e,d=n.return,p=n,h=r;if(r=Ue,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=p,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var b=w.alternate;b?(w.updateQueue=b.updateQueue,w.memoizedState=b.memoizedState,w.lanes=b.lanes):(w.updateQueue=null,w.memoizedState=null)}var I=ud(d);if(I!==null){I.flags&=-257,pd(I,d,p,a,r),I.mode&1&&dd(a,y,r),r=I,h=y;var L=r.updateQueue;if(L===null){var P=new Set;P.add(h),r.updateQueue=P}else L.add(h);break e}else{if((r&1)===0){dd(a,y,r),Ea();break e}h=Error(l(426))}}else if(be&&p.mode&1){var Ee=ud(d);if(Ee!==null){(Ee.flags&65536)===0&&(Ee.flags|=256),pd(Ee,d,p,a,r),Oi(en(h,p));break e}}a=h=en(h,p),Le!==4&&(Le=2),Jn===null?Jn=[a]:Jn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var x=ld(a,h,r);Rc(a,x);break e;case 1:p=h;var m=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ct===null||!ct.has(v)))){a.flags|=65536,r&=-r,a.lanes|=r;var C=cd(a,p,r);Rc(a,C);break e}}a=a.return}while(a!==null)}Hd(n)}catch(R){r=R,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function Wd(){var e=ts.current;return ts.current=Xo,e===null?Xo:e}function Ea(){(Le===0||Le===3||Le===2)&&(Le=4),Ae===null||(St&268435455)===0&&(ns&268435455)===0||pt(Ae,Ue)}function cs(e,r){var n=ae;ae|=2;var o=Wd();(Ae!==e||Ue!==r)&&(Yr=null,Et(e,r));do try{$h();break}catch(i){Dd(e,i)}while(!0);if(Di(),ae=n,ts.current=o,Te!==null)throw Error(l(261));return Ae=null,Ue=0,Le}function $h(){for(;Te!==null;)Ud(Te)}function Vh(){for(;Te!==null&&!xp();)Ud(Te)}function Ud(e){var r=Qd(e.alternate,e,cr);e.memoizedProps=e.pendingProps,r===null?Hd(e):Te=r,va.current=null}function Hd(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=Ah(n,r,cr),n!==null){Te=n;return}}else{if(n=Oh(n,r),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Te=null;return}}if(r=r.sibling,r!==null){Te=r;return}Te=r=e}while(r!==null);Le===0&&(Le=5)}function Tt(e,r,n){var o=fe,i=yr.transition;try{yr.transition=null,fe=1,Qh(e,r,n,o)}finally{yr.transition=i,fe=o}return null}function Qh(e,r,n,o){do on();while(dt!==null);if((ae&6)!==0)throw Error(l(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Cp(e,a),e===Ae&&(Te=Ae=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ss||(ss=!0,Yd(ho,function(){return on(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=yr.transition,yr.transition=null;var d=fe;fe=1;var p=ae;ae|=4,va.current=null,Dh(e,n),Ld(n,e),ph(Ei),jo=!!Ci,Ei=Ci=null,e.current=n,Wh(n),gp(),ae=p,fe=d,yr.transition=a}else e.current=n;if(ss&&(ss=!1,dt=e,is=i),a=e.pendingLanes,a===0&&(ct=null),jp(n.stateNode),rr(e,Ce()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(os)throw os=!1,e=Na,Na=null,e;return(is&1)!==0&&e.tag!==0&&on(),a=e.pendingLanes,(a&1)!==0?e===ba?eo++:(eo=0,ba=e):eo=0,st(),null}function on(){if(dt!==null){var e=Bl(is),r=yr.transition,n=fe;try{if(yr.transition=null,fe=16>e?16:e,dt===null)var o=!1;else{if(e=dt,dt=null,is=0,(ae&6)!==0)throw Error(l(331));var i=ae;for(ae|=4,_=e.current;_!==null;){var a=_,d=a.child;if((_.flags&16)!==0){var p=a.deletions;if(p!==null){for(var h=0;h<p.length;h++){var y=p[h];for(_=y;_!==null;){var w=_;switch(w.tag){case 0:case 11:case 15:qn(8,w,a)}var k=w.child;if(k!==null)k.return=w,_=k;else for(;_!==null;){w=_;var b=w.sibling,I=w.return;if(Td(w),w===y){_=null;break}if(b!==null){b.return=I,_=b;break}_=I}}}var L=a.alternate;if(L!==null){var P=L.child;if(P!==null){L.child=null;do{var Ee=P.sibling;P.sibling=null,P=Ee}while(P!==null)}}_=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,_=d;else e:for(;_!==null;){if(a=_,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:qn(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,_=x;break e}_=a.return}}var m=e.current;for(_=m;_!==null;){d=_;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,_=v;else e:for(d=m;_!==null;){if(p=_,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:rs(9,p)}}catch(R){Se(p,p.return,R)}if(p===d){_=null;break e}var C=p.sibling;if(C!==null){C.return=p.return,_=C;break e}_=p.return}}if(ae=i,st(),_r&&typeof _r.onPostCommitFiberRoot=="function")try{_r.onPostCommitFiberRoot(mo,e)}catch{}o=!0}return o}finally{fe=n,yr.transition=r}}return!1}function $d(e,r,n){r=en(n,r),r=ld(e,r,1),e=at(e,r,1),r=Xe(),e!==null&&(kn(e,1,r),rr(e,r))}function Se(e,r,n){if(e.tag===3)$d(e,e,n);else for(;r!==null;){if(r.tag===3){$d(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ct===null||!ct.has(o))){e=en(n,e),e=cd(r,e,1),r=at(r,e,1),e=Xe(),r!==null&&(kn(r,1,e),rr(r,e));break}}r=r.return}}function Yh(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=Xe(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Ue&n)===n&&(Le===4||Le===3&&(Ue&130023424)===Ue&&500>Ce()-ja?Et(e,0):ya|=n),rr(e,r)}function Vd(e,r){r===0&&((e.mode&1)===0?r=1:(r=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var n=Xe();e=$r(e,r),e!==null&&(kn(e,r,n),rr(e,n))}function Gh(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Vd(e,n)}function Kh(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(r),Vd(e,n)}var Qd;Qd=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||qe.current)Je=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return Je=!1,Mh(e,r,n);Je=(e.flags&131072)!==0}else Je=!1,be&&(r.flags&1048576)!==0&&Sc(r,Oo,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;Jo(e,r),e=r.pendingProps;var i=Qt(r,$e.current);Zt(r,n),i=qi(null,r,o,e,i,n);var a=Zi();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ze(o)?(a=!0,Ro(r)):a=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$i(r),i.updater=qo,r.stateNode=i,i._reactInternals=r,oa(r,o,e,n),r=la(null,r,o,!0,a,n)):(r.tag=0,be&&a&&Pi(r),Ke(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(Jo(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=qh(o),e=Er(o,e),i){case 0:r=aa(null,r,o,e,n);break e;case 1:r=vd(null,r,o,e,n);break e;case 11:r=hd(null,r,o,e,n);break e;case 14:r=md(null,r,o,Er(o.type,e),n);break e}throw Error(l(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Er(o,i),aa(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Er(o,i),vd(e,r,o,i,n);case 3:e:{if(yd(r),e===null)throw Error(l(387));o=r.pendingProps,a=r.memoizedState,i=a.element,Pc(e,r),$o(r,o,null,n);var d=r.memoizedState;if(o=d.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){i=en(Error(l(423)),r),r=jd(e,r,o,n,i);break e}else if(o!==i){i=en(Error(l(424)),r),r=jd(e,r,o,n,i);break e}else for(lr=tt(r.stateNode.containerInfo.firstChild),ar=r,be=!0,Cr=null,n=_c(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kt(),o===i){r=Qr(e,r,n);break e}Ke(e,r,o,n)}r=r.child}return r;case 5:return Ac(r),e===null&&Ai(r),o=r.type,i=r.pendingProps,a=e!==null?e.memoizedProps:null,d=i.children,Ti(o,i)?d=null:a!==null&&Ti(o,a)&&(r.flags|=32),gd(e,r),Ke(e,r,d,n),r.child;case 6:return e===null&&Ai(r),null;case 13:return Nd(e,r,n);case 4:return Vi(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Xt(r,null,o,n):Ke(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Er(o,i),hd(e,r,o,i,n);case 7:return Ke(e,r,r.pendingProps,n),r.child;case 8:return Ke(e,r,r.pendingProps.children,n),r.child;case 12:return Ke(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,a=r.memoizedProps,d=i.value,ve(Wo,o._currentValue),o._currentValue=d,a!==null)if(Sr(a.value,d)){if(a.children===i.children&&!qe.current){r=Qr(e,r,n);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var p=a.dependencies;if(p!==null){d=a.child;for(var h=p.firstContext;h!==null;){if(h.context===o){if(a.tag===1){h=Vr(-1,n&-n),h.tag=2;var y=a.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),Ui(a.return,n,r),p.lanes|=n;break}h=h.next}}else if(a.tag===10)d=a.type===r.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(l(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),Ui(d,n,r),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===r){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}Ke(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,Zt(r,n),i=gr(i),o=o(i),r.flags|=1,Ke(e,r,o,n),r.child;case 14:return o=r.type,i=Er(o,r.pendingProps),i=Er(o.type,i),md(e,r,o,i,n);case 15:return fd(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Er(o,i),Jo(e,r),r.tag=1,Ze(o)?(e=!0,Ro(r)):e=!1,Zt(r,n),id(r,o,i),oa(r,o,i,n),la(null,r,o,!0,e,n);case 19:return wd(e,r,n);case 22:return xd(e,r,n)}throw Error(l(156,r.tag))};function Yd(e,r){return Cl(e,r)}function Xh(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jr(e,r,n,o){return new Xh(e,r,n,o)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qh(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hr)return 11;if(e===mr)return 14}return 2}function ht(e,r){var n=e.alternate;return n===null?(n=jr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ds(e,r,n,o,i,a){var d=2;if(o=e,typeof e=="function")Ta(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case U:return zt(n.children,i,a,r);case Be:d=8,i|=8;break;case or:return e=jr(12,n,r,i|2),e.elementType=or,e.lanes=a,e;case Ge:return e=jr(13,n,r,i),e.elementType=Ge,e.lanes=a,e;case sr:return e=jr(19,n,r,i),e.elementType=sr,e.lanes=a,e;case ge:return us(n,i,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case br:d=10;break e;case Or:d=9;break e;case hr:d=11;break e;case mr:d=14;break e;case He:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=jr(d,n,r,i),r.elementType=e,r.type=o,r.lanes=a,r}function zt(e,r,n,o){return e=jr(7,e,o,r),e.lanes=n,e}function us(e,r,n,o){return e=jr(22,e,o,r),e.elementType=ge,e.lanes=n,e.stateNode={isHidden:!1},e}function za(e,r,n){return e=jr(6,e,null,r),e.lanes=n,e}function Ia(e,r,n){return r=jr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Zh(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ba(e,r,n,o,i,a,d,p,h){return e=new Zh(e,r,n,p,h),r===1?(r=1,a===!0&&(r|=8)):r=0,a=jr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(a),e}function Jh(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function Gd(e){if(!e)return ot;e=e._reactInternals;e:{if(gt(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ze(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(Ze(n))return bc(e,n,r)}return r}function Kd(e,r,n,o,i,a,d,p,h){return e=Ba(n,o,!0,e,i,a,d,p,h),e.context=Gd(null),n=e.current,o=Xe(),i=ut(n),a=Vr(o,i),a.callback=r!=null?r:null,at(n,a,i),e.current.lanes=i,kn(e,i,o),rr(e,o),e}function ps(e,r,n,o){var i=r.current,a=Xe(),d=ut(i);return n=Gd(n),r.context===null?r.context=n:r.pendingContext=n,r=Vr(a,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=at(i,r,d),e!==null&&(Ir(e,i,d,a),Ho(e,i,d)),d}function hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function _a(e,r){Xd(e,r),(e=e.alternate)&&Xd(e,r)}function em(){return null}var qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function La(e){this._internalRoot=e}ms.prototype.render=La.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));ps(e,r,null,null)},ms.prototype.unmount=La.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Ct(function(){ps(null,e,null,null)}),r[Dr]=null}};function ms(e){this._internalRoot=e}ms.prototype.unstable_scheduleHydration=function(e){if(e){var r=Pl();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Jr.length&&r!==0&&r<Jr[n].priority;n++);Jr.splice(n,0,e),n===0&&Al(e)}};function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zd(){}function rm(e,r,n,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var y=hs(d);a.call(y)}}var d=Kd(r,o,e,0,null,!1,!1,"",Zd);return e._reactRootContainer=d,e[Dr]=d.current,On(e.nodeType===8?e.parentNode:e),Ct(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var p=o;o=function(){var y=hs(h);p.call(y)}}var h=Ba(e,0,!1,null,null,!1,!1,"",Zd);return e._reactRootContainer=h,e[Dr]=h.current,On(e.nodeType===8?e.parentNode:e),Ct(function(){ps(r,h,n,o)}),h}function xs(e,r,n,o,i){var a=n._reactRootContainer;if(a){var d=a;if(typeof i=="function"){var p=i;i=function(){var h=hs(d);p.call(h)}}ps(r,d,e,i)}else d=rm(n,r,e,i,o);return hs(d)}_l=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=wn(r.pendingLanes);n!==0&&(oi(r,n|1),rr(r,Ce()),(ae&6)===0&&(nn=Ce()+500,st()))}break;case 13:Ct(function(){var o=$r(e,1);if(o!==null){var i=Xe();Ir(o,e,1,i)}}),_a(e,1)}},si=function(e){if(e.tag===13){var r=$r(e,134217728);if(r!==null){var n=Xe();Ir(r,e,134217728,n)}_a(e,134217728)}},Ll=function(e){if(e.tag===13){var r=ut(e),n=$r(e,r);if(n!==null){var o=Xe();Ir(n,e,r,o)}_a(e,r)}},Pl=function(){return fe},Rl=function(e,r){var n=fe;try{return fe=e,r()}finally{fe=n}},qs=function(e,r,n){switch(r){case"input":if(Hs(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=Lo(o);if(!i)throw Error(l(90));wr(o),Hs(o,i)}}}break;case"textarea":dl(e,n);break;case"select":r=n.value,r!=null&&Pt(e,!!n.multiple,r,!1)}},yl=Sa,jl=Ct;var tm={usingClientEntryPoint:!1,Events:[Wn,$t,Lo,gl,vl,Sa]},ro={findFiberByHostInstance:vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nm={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kl(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||em,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gs.isDisabled&&gs.supportsFiber)try{mo=gs.inject(nm),_r=gs}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tm,tr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pa(r))throw Error(l(200));return Jh(e,r,null,n)},tr.createRoot=function(e,r){if(!Pa(e))throw Error(l(299));var n=!1,o="",i=qd;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Ba(e,1,!1,null,null,n,!1,o,i),e[Dr]=r.current,On(e.nodeType===8?e.parentNode:e),new La(r)},tr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=kl(r),e=e===null?null:e.stateNode,e},tr.flushSync=function(e){return Ct(e)},tr.hydrate=function(e,r,n){if(!fs(r))throw Error(l(200));return xs(null,e,r,!0,n)},tr.hydrateRoot=function(e,r,n){if(!Pa(e))throw Error(l(405));var o=n!=null&&n.hydratedSources||null,i=!1,a="",d=qd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),r=Kd(r,null,e,1,n!=null?n:null,i,!1,a,d),e[Dr]=r.current,On(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new ms(r)},tr.render=function(e,r,n){if(!fs(r))throw Error(l(200));return xs(null,e,r,!1,n)},tr.unmountComponentAtNode=function(e){if(!fs(e))throw Error(l(40));return e._reactRootContainer?(Ct(function(){xs(null,null,e,!1,function(){e._reactRootContainer=null,e[Dr]=null})}),!0):!1},tr.unstable_batchedUpdates=Sa,tr.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!fs(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return xs(e,r,n,!1,o)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var iu;function pm(){if(iu)return Aa.exports;iu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Aa.exports=um(),Aa.exports}var au;function hm(){if(au)return vs;au=1;var s=pm();return vs.createRoot=s.createRoot,vs.hydrateRoot=s.hydrateRoot,vs}var mm=hm(),me=Za();const ur=sm(me);var zu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lu=ur.createContext&&ur.createContext(zu),fm=["attr","size","title"];function xm(s,c){if(s==null)return{};var l=gm(s,c),u,g;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(s);for(g=0;g<j.length;g++)u=j[g],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(s,u)&&(l[u]=s[u])}return l}function gm(s,c){if(s==null)return{};var l={};for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){if(c.indexOf(u)>=0)continue;l[u]=s[u]}return l}function Cs(){return Cs=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}return s},Cs.apply(this,arguments)}function cu(s,c){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);c&&(u=u.filter(function(g){return Object.getOwnPropertyDescriptor(s,g).enumerable})),l.push.apply(l,u)}return l}function Es(s){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?cu(Object(l),!0).forEach(function(u){vm(s,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):cu(Object(l)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(l,u))})}return s}function vm(s,c,l){return c=ym(c),c in s?Object.defineProperty(s,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[c]=l,s}function ym(s){var c=jm(s,"string");return typeof c=="symbol"?c:c+""}function jm(s,c){if(typeof s!="object"||!s)return s;var l=s[Symbol.toPrimitive];if(l!==void 0){var u=l.call(s,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(s)}function Iu(s){return s&&s.map((c,l)=>ur.createElement(c.tag,Es({key:l},c.attr),Iu(c.child)))}function A(s){return c=>ur.createElement(Nm,Cs({attr:Es({},s.attr)},c),Iu(s.child))}function Nm(s){var c=l=>{var{attr:u,size:g,title:j}=s,S=xm(s,fm),B=g||l.size||"1em",E;return l.className&&(E=l.className),s.className&&(E=(E?E+" ":"")+s.className),ur.createElement("svg",Cs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,S,{className:E,style:Es(Es({color:s.color||l.color},l.style),s.style),height:B,width:B,xmlns:"http://www.w3.org/2000/svg"}),j&&ur.createElement("title",null,j),s.children)};return lu!==void 0?ur.createElement(lu.Consumer,null,l=>c(l)):c(zu)}function bm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(s)}function ln(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function wm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"21 8 21 21 3 21 3 8"},child:[]},{tag:"rect",attr:{x:"1",y:"3",width:"22",height:"5"},child:[]},{tag:"line",attr:{x1:"10",y1:"12",x2:"14",y2:"12"},child:[]}]})(s)}function km(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 16 16 12 12 8"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(s)}function Sm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(s)}function Cm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(s)}function Lt(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Em(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(s)}function Pe(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(s)}function Re(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(s)}function Bu(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(s)}function ze(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(s)}function Tm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(s)}function _u(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(s)}function Lu(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(s)}function zm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(s)}function Kr(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(s)}function Im(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(s)}function Bm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"6",r:"2"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"circle",attr:{cx:"12",cy:"18",r:"2"},child:[]}]})(s)}function Pu(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(s)}function _m(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(s)}function Ls(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(s)}function Lm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(s)}function Ps(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(s)}function Pm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(s)}function Rm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(s)}function Mm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(s)}function du(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(s)}function Am(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(s)}function Ts(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(s)}function Om(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(s)}function Fm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function Dm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(s)}function pr(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(s)}function Ru(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(s)}function Ja(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(s)}function Wm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(s)}function Rs(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(s)}function Um(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(s)}function Hm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function $m(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Vm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(s)}function cn(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(s)}function xt(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(s)}function io(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(s)}function Qm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 4 15 12 5 20 5 4"},child:[]},{tag:"line",attr:{x1:"19",y1:"5",x2:"19",y2:"19"},child:[]}]})(s)}function el(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(s)}function Ym(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(s)}function Gm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function Km(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(s)}function Xm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(s)}function Mu(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(s)}function qm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(s)}function Zm(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(s)}function Au(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"},child:[]}]})(s)}function fn(s){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(s)}var nr=function(){return nr=Object.assign||function(c){for(var l,u=1,g=arguments.length;u<g;u++){l=arguments[u];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(c[j]=l[j])}return c},nr.apply(this,arguments)};function zs(s,c,l){if(l||arguments.length===2)for(var u=0,g=c.length,j;u<g;u++)(j||!(u in c))&&(j||(j=Array.prototype.slice.call(c,0,u)),j[u]=c[u]);return s.concat(j||Array.prototype.slice.call(c))}var Ne="-ms-",oo="-moz-",he="-webkit-",Ou="comm",Ms="rule",rl="decl",Jm="@import",Fu="@keyframes",ef="@layer",Du=Math.abs,tl=String.fromCharCode,Va=Object.assign;function rf(s,c){return Fe(s,0)^45?(((c<<2^Fe(s,0))<<2^Fe(s,1))<<2^Fe(s,2))<<2^Fe(s,3):0}function Wu(s){return s.trim()}function Gr(s,c){return(s=c.exec(s))?s[0]:s}function Z(s,c,l){return s.replace(c,l)}function Ns(s,c,l){return s.indexOf(c,l)}function Fe(s,c){return s.charCodeAt(c)|0}function dn(s,c,l){return s.slice(c,l)}function Ar(s){return s.length}function Uu(s){return s.length}function no(s,c){return c.push(s),s}function tf(s,c){return s.map(c).join("")}function uu(s,c){return s.filter(function(l){return!Gr(l,c)})}var As=1,un=1,Hu=0,Nr=0,Ie=0,xn="";function Os(s,c,l,u,g,j,S,B){return{value:s,root:c,parent:l,type:u,props:g,children:j,line:As,column:un,length:S,return:"",siblings:B}}function ft(s,c){return Va(Os("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function sn(s){for(;s.root;)s=ft(s.root,{children:[s]});no(s,s.siblings)}function nf(){return Ie}function of(){return Ie=Nr>0?Fe(xn,--Nr):0,un--,Ie===10&&(un=1,As--),Ie}function Br(){return Ie=Nr<Hu?Fe(xn,Nr++):0,un++,Ie===10&&(un=1,As++),Ie}function Bt(){return Fe(xn,Nr)}function bs(){return Nr}function Fs(s,c){return dn(xn,s,c)}function Qa(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sf(s){return As=un=1,Hu=Ar(xn=s),Nr=0,[]}function af(s){return xn="",s}function Da(s){return Wu(Fs(Nr-1,Ya(s===91?s+2:s===40?s+1:s)))}function lf(s){for(;(Ie=Bt())&&Ie<33;)Br();return Qa(s)>2||Qa(Ie)>3?"":" "}function cf(s,c){for(;--c&&Br()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Fs(s,bs()+(c<6&&Bt()==32&&Br()==32))}function Ya(s){for(;Br();)switch(Ie){case s:return Nr;case 34:case 39:s!==34&&s!==39&&Ya(Ie);break;case 40:s===41&&Ya(s);break;case 92:Br();break}return Nr}function df(s,c){for(;Br()&&s+Ie!==57;)if(s+Ie===84&&Bt()===47)break;return"/*"+Fs(c,Nr-1)+"*"+tl(s===47?s:Br())}function uf(s){for(;!Qa(Bt());)Br();return Fs(s,Nr)}function pf(s){return af(ws("",null,null,null,[""],s=sf(s),0,[0],s))}function ws(s,c,l,u,g,j,S,B,E){for(var Q=0,$=0,O=S,F=0,Y=0,ne=0,V=1,X=1,pe=1,ie=0,oe="",J=g,de=j,G=u,U=oe;X;)switch(ne=ie,ie=Br()){case 40:if(ne!=108&&Fe(U,O-1)==58){Ns(U+=Z(Da(ie),"&","&\f"),"&\f",Du(Q?B[Q-1]:0))!=-1&&(pe=-1);break}case 34:case 39:case 91:U+=Da(ie);break;case 9:case 10:case 13:case 32:U+=lf(ne);break;case 92:U+=cf(bs()-1,7);continue;case 47:switch(Bt()){case 42:case 47:no(hf(df(Br(),bs()),c,l,E),E);break;default:U+="/"}break;case 123*V:B[Q++]=Ar(U)*pe;case 125*V:case 59:case 0:switch(ie){case 0:case 125:X=0;case 59+$:pe==-1&&(U=Z(U,/\f/g,"")),Y>0&&Ar(U)-O&&no(Y>32?hu(U+";",u,l,O-1,E):hu(Z(U," ","")+";",u,l,O-2,E),E);break;case 59:U+=";";default:if(no(G=pu(U,c,l,Q,$,g,B,oe,J=[],de=[],O,j),j),ie===123)if($===0)ws(U,c,G,G,J,j,O,B,de);else switch(F===99&&Fe(U,3)===110?100:F){case 100:case 108:case 109:case 115:ws(s,G,G,u&&no(pu(s,G,G,0,0,g,B,oe,g,J=[],O,de),de),g,de,O,B,u?J:de);break;default:ws(U,G,G,G,[""],de,0,B,de)}}Q=$=Y=0,V=pe=1,oe=U="",O=S;break;case 58:O=1+Ar(U),Y=ne;default:if(V<1){if(ie==123)--V;else if(ie==125&&V++==0&&of()==125)continue}switch(U+=tl(ie),ie*V){case 38:pe=$>0?1:(U+="\f",-1);break;case 44:B[Q++]=(Ar(U)-1)*pe,pe=1;break;case 64:Bt()===45&&(U+=Da(Br())),F=Bt(),$=O=Ar(oe=U+=uf(bs())),ie++;break;case 45:ne===45&&Ar(U)==2&&(V=0)}}return j}function pu(s,c,l,u,g,j,S,B,E,Q,$,O){for(var F=g-1,Y=g===0?j:[""],ne=Uu(Y),V=0,X=0,pe=0;V<u;++V)for(var ie=0,oe=dn(s,F+1,F=Du(X=S[V])),J=s;ie<ne;++ie)(J=Wu(X>0?Y[ie]+" "+oe:Z(oe,/&\f/g,Y[ie])))&&(E[pe++]=J);return Os(s,c,l,g===0?Ms:B,E,Q,$,O)}function hf(s,c,l,u){return Os(s,c,l,Ou,tl(nf()),dn(s,2,-2),0,u)}function hu(s,c,l,u,g){return Os(s,c,l,rl,dn(s,0,u),dn(s,u+1,-1),u,g)}function $u(s,c,l){switch(rf(s,c)){case 5103:return he+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+s+s;case 4789:return oo+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return he+s+oo+s+Ne+s+s;case 5936:switch(Fe(s,c+11)){case 114:return he+s+Ne+Z(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return he+s+Ne+Z(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return he+s+Ne+Z(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return he+s+Ne+s+s;case 6165:return he+s+Ne+"flex-"+s+s;case 5187:return he+s+Z(s,/(\w+).+(:[^]+)/,he+"box-$1$2"+Ne+"flex-$1$2")+s;case 5443:return he+s+Ne+"flex-item-"+Z(s,/flex-|-self/g,"")+(Gr(s,/flex-|baseline/)?"":Ne+"grid-row-"+Z(s,/flex-|-self/g,""))+s;case 4675:return he+s+Ne+"flex-line-pack"+Z(s,/align-content|flex-|-self/g,"")+s;case 5548:return he+s+Ne+Z(s,"shrink","negative")+s;case 5292:return he+s+Ne+Z(s,"basis","preferred-size")+s;case 6060:return he+"box-"+Z(s,"-grow","")+he+s+Ne+Z(s,"grow","positive")+s;case 4554:return he+Z(s,/([^-])(transform)/g,"$1"+he+"$2")+s;case 6187:return Z(Z(Z(s,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),s,"")+s;case 5495:case 3959:return Z(s,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return Z(Z(s,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+s+s;case 4200:if(!Gr(s,/flex-|baseline/))return Ne+"grid-column-align"+dn(s,c)+s;break;case 2592:case 3360:return Ne+Z(s,"template-","")+s;case 4384:case 3616:return l&&l.some(function(u,g){return c=g,Gr(u.props,/grid-\w+-end/)})?~Ns(s+(l=l[c].value),"span",0)?s:Ne+Z(s,"-start","")+s+Ne+"grid-row-span:"+(~Ns(l,"span",0)?Gr(l,/\d+/):+Gr(l,/\d+/)-+Gr(s,/\d+/))+";":Ne+Z(s,"-start","")+s;case 4896:case 4128:return l&&l.some(function(u){return Gr(u.props,/grid-\w+-start/)})?s:Ne+Z(Z(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return Z(s,/(.+)-inline(.+)/,he+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ar(s)-1-c>6)switch(Fe(s,c+1)){case 109:if(Fe(s,c+4)!==45)break;case 102:return Z(s,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+oo+(Fe(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~Ns(s,"stretch",0)?$u(Z(s,"stretch","fill-available"),c,l)+s:s}break;case 5152:case 5920:return Z(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,g,j,S,B,E,Q){return Ne+g+":"+j+Q+(S?Ne+g+"-span:"+(B?E:+E-+j)+Q:"")+s});case 4949:if(Fe(s,c+6)===121)return Z(s,":",":"+he)+s;break;case 6444:switch(Fe(s,Fe(s,14)===45?18:11)){case 120:return Z(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Fe(s,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+Ne+"$2box$3")+s;case 100:return Z(s,":",":"+Ne)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(s,"scroll-","scroll-snap-")+s}return s}function Is(s,c){for(var l="",u=0;u<s.length;u++)l+=c(s[u],u,s,c)||"";return l}function mf(s,c,l,u){switch(s.type){case ef:if(s.children.length)break;case Jm:case rl:return s.return=s.return||s.value;case Ou:return"";case Fu:return s.return=s.value+"{"+Is(s.children,u)+"}";case Ms:if(!Ar(s.value=s.props.join(",")))return""}return Ar(l=Is(s.children,u))?s.return=s.value+"{"+l+"}":""}function ff(s){var c=Uu(s);return function(l,u,g,j){for(var S="",B=0;B<c;B++)S+=s[B](l,u,g,j)||"";return S}}function xf(s){return function(c){c.root||(c=c.return)&&s(c)}}function gf(s,c,l,u){if(s.length>-1&&!s.return)switch(s.type){case rl:s.return=$u(s.value,s.length,l);return;case Fu:return Is([ft(s,{value:Z(s.value,"@","@"+he)})],u);case Ms:if(s.length)return tf(l=s.props,function(g){switch(Gr(g,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sn(ft(s,{props:[Z(g,/:(read-\w+)/,":"+oo+"$1")]})),sn(ft(s,{props:[g]})),Va(s,{props:uu(l,u)});break;case"::placeholder":sn(ft(s,{props:[Z(g,/:(plac\w+)/,":"+he+"input-$1")]})),sn(ft(s,{props:[Z(g,/:(plac\w+)/,":"+oo+"$1")]})),sn(ft(s,{props:[Z(g,/:(plac\w+)/,Ne+"input-$1")]})),sn(ft(s,{props:[g]})),Va(s,{props:uu(l,u)});break}return""})}}var vf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dr={},pn=typeof process!="undefined"&&dr!==void 0&&(dr.REACT_APP_SC_ATTR||dr.SC_ATTR)||"data-styled",Vu="active",Qu="data-styled-version",Ds="6.1.18",nl=`/*!sc*/
`,Bs=typeof window!="undefined"&&typeof document!="undefined",yf=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&dr!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==""?dr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&dr!==void 0&&dr.SC_DISABLE_SPEEDY!==void 0&&dr.SC_DISABLE_SPEEDY!==""&&dr.SC_DISABLE_SPEEDY!=="false"&&dr.SC_DISABLE_SPEEDY),Ws=Object.freeze([]),hn=Object.freeze({});function jf(s,c,l){return l===void 0&&(l=hn),s.theme!==l.theme&&s.theme||c||l.theme}var Yu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bf=/(^-|-$)/g;function mu(s){return s.replace(Nf,"-").replace(bf,"")}var wf=/(a)(d)/gi,ys=52,fu=function(s){return String.fromCharCode(s+(s>25?39:97))};function Ga(s){var c,l="";for(c=Math.abs(s);c>ys;c=c/ys|0)l=fu(c%ys)+l;return(fu(c%ys)+l).replace(wf,"$1-$2")}var Wa,Gu=5381,an=function(s,c){for(var l=c.length;l;)s=33*s^c.charCodeAt(--l);return s},Ku=function(s){return an(Gu,s)};function kf(s){return Ga(Ku(s)>>>0)}function Sf(s){return s.displayName||s.name||"Component"}function Ua(s){return typeof s=="string"&&!0}var Xu=typeof Symbol=="function"&&Symbol.for,qu=Xu?Symbol.for("react.memo"):60115,Cf=Xu?Symbol.for("react.forward_ref"):60112,Ef={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tf={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zf=((Wa={})[Cf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wa[qu]=Zu,Wa);function xu(s){return("type"in(c=s)&&c.type.$$typeof)===qu?Zu:"$$typeof"in s?zf[s.$$typeof]:Ef;var c}var If=Object.defineProperty,Bf=Object.getOwnPropertyNames,gu=Object.getOwnPropertySymbols,_f=Object.getOwnPropertyDescriptor,Lf=Object.getPrototypeOf,vu=Object.prototype;function Ju(s,c,l){if(typeof c!="string"){if(vu){var u=Lf(c);u&&u!==vu&&Ju(s,u,l)}var g=Bf(c);gu&&(g=g.concat(gu(c)));for(var j=xu(s),S=xu(c),B=0;B<g.length;++B){var E=g[B];if(!(E in Tf||l&&l[E]||S&&E in S||j&&E in j)){var Q=_f(c,E);try{If(s,E,Q)}catch{}}}}return s}function mn(s){return typeof s=="function"}function ol(s){return typeof s=="object"&&"styledComponentId"in s}function It(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function yu(s,c){if(s.length===0)return"";for(var l=s[0],u=1;u<s.length;u++)l+=s[u];return l}function so(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Ka(s,c,l){if(l===void 0&&(l=!1),!l&&!so(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)s[u]=Ka(s[u],c[u]);else if(so(c))for(var u in c)s[u]=Ka(s[u],c[u]);return s}function sl(s,c){Object.defineProperty(s,"toString",{value:c})}function ao(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Pf=(function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return s.prototype.indexOfGroup=function(c){for(var l=0,u=0;u<c;u++)l+=this.groupSizes[u];return l},s.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var u=this.groupSizes,g=u.length,j=g;c>=j;)if((j<<=1)<0)throw ao(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(u),this.length=j;for(var S=g;S<j;S++)this.groupSizes[S]=0}for(var B=this.indexOfGroup(c+1),E=(S=0,l.length);S<E;S++)this.tag.insertRule(B,l[S])&&(this.groupSizes[c]++,B++)},s.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],u=this.indexOfGroup(c),g=u+l;this.groupSizes[c]=0;for(var j=u;j<g;j++)this.tag.deleteRule(u)}},s.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var u=this.groupSizes[c],g=this.indexOfGroup(c),j=g+u,S=g;S<j;S++)l+="".concat(this.tag.getRule(S)).concat(nl);return l},s})(),ks=new Map,_s=new Map,Ss=1,js=function(s){if(ks.has(s))return ks.get(s);for(;_s.has(Ss);)Ss++;var c=Ss++;return ks.set(s,c),_s.set(c,s),c},Rf=function(s,c){Ss=c+1,ks.set(s,c),_s.set(c,s)},Mf="style[".concat(pn,"][").concat(Qu,'="').concat(Ds,'"]'),Af=new RegExp("^".concat(pn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Of=function(s,c,l){for(var u,g=l.split(","),j=0,S=g.length;j<S;j++)(u=g[j])&&s.registerName(c,u)},Ff=function(s,c){for(var l,u=((l=c.textContent)!==null&&l!==void 0?l:"").split(nl),g=[],j=0,S=u.length;j<S;j++){var B=u[j].trim();if(B){var E=B.match(Af);if(E){var Q=0|parseInt(E[1],10),$=E[2];Q!==0&&(Rf($,Q),Of(s,$,E[3]),s.getTag().insertRules(Q,g)),g.length=0}else g.push(B)}}},ju=function(s){for(var c=document.querySelectorAll(Mf),l=0,u=c.length;l<u;l++){var g=c[l];g&&g.getAttribute(pn)!==Vu&&(Ff(s,g),g.parentNode&&g.parentNode.removeChild(g))}};function Df(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ep=function(s){var c=document.head,l=s||c,u=document.createElement("style"),g=(function(B){var E=Array.from(B.querySelectorAll("style[".concat(pn,"]")));return E[E.length-1]})(l),j=g!==void 0?g.nextSibling:null;u.setAttribute(pn,Vu),u.setAttribute(Qu,Ds);var S=Df();return S&&u.setAttribute("nonce",S),l.insertBefore(u,j),u},Wf=(function(){function s(c){this.element=ep(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var u=document.styleSheets,g=0,j=u.length;g<j;g++){var S=u[g];if(S.ownerNode===l)return S}throw ao(17)})(this.element),this.length=0}return s.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},s})(),Uf=(function(){function s(c){this.element=ep(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s})(),Hf=(function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,l){return c<=this.length&&(this.rules.splice(c,0,l),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s})(),Nu=Bs,$f={isServer:!Bs,useCSSOMInjection:!yf},rp=(function(){function s(c,l,u){c===void 0&&(c=hn),l===void 0&&(l={});var g=this;this.options=nr(nr({},$f),c),this.gs=l,this.names=new Map(u),this.server=!!c.isServer,!this.server&&Bs&&Nu&&(Nu=!1,ju(this)),sl(this,function(){return(function(j){for(var S=j.getTag(),B=S.length,E="",Q=function(O){var F=(function(pe){return _s.get(pe)})(O);if(F===void 0)return"continue";var Y=j.names.get(F),ne=S.getGroup(O);if(Y===void 0||!Y.size||ne.length===0)return"continue";var V="".concat(pn,".g").concat(O,'[id="').concat(F,'"]'),X="";Y!==void 0&&Y.forEach(function(pe){pe.length>0&&(X+="".concat(pe,","))}),E+="".concat(ne).concat(V,'{content:"').concat(X,'"}').concat(nl)},$=0;$<B;$++)Q($);return E})(g)})}return s.registerId=function(c){return js(c)},s.prototype.rehydrate=function(){!this.server&&Bs&&ju(this)},s.prototype.reconstructWithOptions=function(c,l){return l===void 0&&(l=!0),new s(nr(nr({},this.options),c),this.gs,l&&this.names||void 0)},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var u=l.useCSSOMInjection,g=l.target;return l.isServer?new Hf(g):u?new Wf(g):new Uf(g)})(this.options),new Pf(c)));var c},s.prototype.hasNameForId=function(c,l){return this.names.has(c)&&this.names.get(c).has(l)},s.prototype.registerName=function(c,l){if(js(c),this.names.has(c))this.names.get(c).add(l);else{var u=new Set;u.add(l),this.names.set(c,u)}},s.prototype.insertRules=function(c,l,u){this.registerName(c,l),this.getTag().insertRules(js(c),u)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(js(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s})(),Vf=/&/g,Qf=/^\s*\/\/.*$/gm;function tp(s,c){return s.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=tp(l.children,c)),l})}function Yf(s){var c,l,u,g=hn,j=g.options,S=j===void 0?hn:j,B=g.plugins,E=B===void 0?Ws:B,Q=function(F,Y,ne){return ne.startsWith(l)&&ne.endsWith(l)&&ne.replaceAll(l,"").length>0?".".concat(c):F},$=E.slice();$.push(function(F){F.type===Ms&&F.value.includes("&")&&(F.props[0]=F.props[0].replace(Vf,l).replace(u,Q))}),S.prefix&&$.push(gf),$.push(mf);var O=function(F,Y,ne,V){Y===void 0&&(Y=""),ne===void 0&&(ne=""),V===void 0&&(V="&"),c=V,l=Y,u=new RegExp("\\".concat(l,"\\b"),"g");var X=F.replace(Qf,""),pe=pf(ne||Y?"".concat(ne," ").concat(Y," { ").concat(X," }"):X);S.namespace&&(pe=tp(pe,S.namespace));var ie=[];return Is(pe,ff($.concat(xf(function(oe){return ie.push(oe)})))),ie};return O.hash=E.length?E.reduce(function(F,Y){return Y.name||ao(15),an(F,Y.name)},Gu).toString():"",O}var Gf=new rp,Xa=Yf(),np=ur.createContext({shouldForwardProp:void 0,styleSheet:Gf,stylis:Xa});np.Consumer;ur.createContext(void 0);function bu(){return me.useContext(np)}var Kf=(function(){function s(c,l){var u=this;this.inject=function(g,j){j===void 0&&(j=Xa);var S=u.name+j.hash;g.hasNameForId(u.id,S)||g.insertRules(u.id,S,j(u.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,sl(this,function(){throw ao(12,String(u.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=Xa),this.name+c.hash},s})(),Xf=function(s){return s>="A"&&s<="Z"};function wu(s){for(var c="",l=0;l<s.length;l++){var u=s[l];if(l===1&&u==="-"&&s[0]==="-")return s;Xf(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var op=function(s){return s==null||s===!1||s===""},sp=function(s){var c,l,u=[];for(var g in s){var j=s[g];s.hasOwnProperty(g)&&!op(j)&&(Array.isArray(j)&&j.isCss||mn(j)?u.push("".concat(wu(g),":"),j,";"):so(j)?u.push.apply(u,zs(zs(["".concat(g," {")],sp(j),!1),["}"],!1)):u.push("".concat(wu(g),": ").concat((c=g,(l=j)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||c in vf||c.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return u};function _t(s,c,l,u){if(op(s))return[];if(ol(s))return[".".concat(s.styledComponentId)];if(mn(s)){if(!mn(j=s)||j.prototype&&j.prototype.isReactComponent||!c)return[s];var g=s(c);return _t(g,c,l,u)}var j;return s instanceof Kf?l?(s.inject(l,u),[s.getName(u)]):[s]:so(s)?sp(s):Array.isArray(s)?Array.prototype.concat.apply(Ws,s.map(function(S){return _t(S,c,l,u)})):[s.toString()]}function qf(s){for(var c=0;c<s.length;c+=1){var l=s[c];if(mn(l)&&!ol(l))return!1}return!0}var Zf=Ku(Ds),Jf=(function(){function s(c,l,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&qf(c),this.componentId=l,this.baseHash=an(Zf,l),this.baseStyle=u,rp.registerId(l)}return s.prototype.generateAndInjectStyles=function(c,l,u){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))g=It(g,this.staticRulesId);else{var j=yu(_t(this.rules,c,l,u)),S=Ga(an(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,S)){var B=u(j,".".concat(S),void 0,this.componentId);l.insertRules(this.componentId,S,B)}g=It(g,S),this.staticRulesId=S}else{for(var E=an(this.baseHash,u.hash),Q="",$=0;$<this.rules.length;$++){var O=this.rules[$];if(typeof O=="string")Q+=O;else if(O){var F=yu(_t(O,c,l,u));E=an(E,F+$),Q+=F}}if(Q){var Y=Ga(E>>>0);l.hasNameForId(this.componentId,Y)||l.insertRules(this.componentId,Y,u(Q,".".concat(Y),void 0,this.componentId)),g=It(g,Y)}}return g},s})(),ip=ur.createContext(void 0);ip.Consumer;var Ha={};function ex(s,c,l){var u=ol(s),g=s,j=!Ua(s),S=c.attrs,B=S===void 0?Ws:S,E=c.componentId,Q=E===void 0?(function(J,de){var G=typeof J!="string"?"sc":mu(J);Ha[G]=(Ha[G]||0)+1;var U="".concat(G,"-").concat(kf(Ds+G+Ha[G]));return de?"".concat(de,"-").concat(U):U})(c.displayName,c.parentComponentId):E,$=c.displayName,O=$===void 0?(function(J){return Ua(J)?"styled.".concat(J):"Styled(".concat(Sf(J),")")})(s):$,F=c.displayName&&c.componentId?"".concat(mu(c.displayName),"-").concat(c.componentId):c.componentId||Q,Y=u&&g.attrs?g.attrs.concat(B).filter(Boolean):B,ne=c.shouldForwardProp;if(u&&g.shouldForwardProp){var V=g.shouldForwardProp;if(c.shouldForwardProp){var X=c.shouldForwardProp;ne=function(J,de){return V(J,de)&&X(J,de)}}else ne=V}var pe=new Jf(l,F,u?g.componentStyle:void 0);function ie(J,de){return(function(G,U,Be){var or=G.attrs,br=G.componentStyle,Or=G.defaultProps,hr=G.foldedComponentIds,Ge=G.styledComponentId,sr=G.target,mr=ur.useContext(ip),He=bu(),ge=G.shouldForwardProp||He.shouldForwardProp,T=jf(U,mr,Or)||hn,M=(function(te,ee,ue){for(var se,le=nr(nr({},ee),{className:void 0,theme:ue}),De=0;De<te.length;De+=1){var Fr=mn(se=te[De])?se(le):se;for(var wr in Fr)le[wr]=wr==="className"?It(le[wr],Fr[wr]):wr==="style"?nr(nr({},le[wr]),Fr[wr]):Fr[wr]}return ee.className&&(le.className=It(le.className,ee.className)),le})(or,U,T),z=M.as||sr,f={};for(var N in M)M[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&M.theme===T||(N==="forwardedAs"?f.as=M.forwardedAs:ge&&!ge(N,z)||(f[N]=M[N]));var K=(function(te,ee){var ue=bu(),se=te.generateAndInjectStyles(ee,ue.styleSheet,ue.stylis);return se})(br,M),q=It(hr,Ge);return K&&(q+=" "+K),M.className&&(q+=" "+M.className),f[Ua(z)&&!Yu.has(z)?"class":"className"]=q,Be&&(f.ref=Be),me.createElement(z,f)})(oe,J,de)}ie.displayName=O;var oe=ur.forwardRef(ie);return oe.attrs=Y,oe.componentStyle=pe,oe.displayName=O,oe.shouldForwardProp=ne,oe.foldedComponentIds=u?It(g.foldedComponentIds,g.styledComponentId):"",oe.styledComponentId=F,oe.target=u?g.target:s,Object.defineProperty(oe,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=u?(function(de){for(var G=[],U=1;U<arguments.length;U++)G[U-1]=arguments[U];for(var Be=0,or=G;Be<or.length;Be++)Ka(de,or[Be],!0);return de})({},g.defaultProps,J):J}}),sl(oe,function(){return".".concat(oe.styledComponentId)}),j&&Ju(oe,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),oe}function ku(s,c){for(var l=[s[0]],u=0,g=c.length;u<g;u+=1)l.push(c[u],s[u+1]);return l}var Su=function(s){return Object.assign(s,{isCss:!0})};function rx(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(mn(s)||so(s))return Su(_t(ku(Ws,zs([s],c,!0))));var u=s;return c.length===0&&u.length===1&&typeof u[0]=="string"?_t(u):Su(_t(ku(u,c)))}function qa(s,c,l){if(l===void 0&&(l=hn),!c)throw ao(1,c);var u=function(g){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];return s(c,l,rx.apply(void 0,zs([g],j,!1)))};return u.attrs=function(g){return qa(s,c,nr(nr({},l),{attrs:Array.prototype.concat(l.attrs,g).filter(Boolean)}))},u.withConfig=function(g){return qa(s,c,nr(nr({},l),g))},u}var ap=function(s){return qa(ex,s)},xe=ap;Yu.forEach(function(s){xe[s]=ap(s)});const $a={Wrapper:xe.div`height: 100vh; overflow: hidden; display: flex; flex-direction: column;`,Header:xe.header`height: 60px; flex-shrink: 0;`,Main:xe.main`
        flex: 1; overflow-y: auto; position: relative;
        .workspaceLayout { min-height: 100%; max-width: 1440px; margin: auto; display: grid; grid-template-columns: 260px minmax(0, 1fr); gap: 28px; padding: 18px 22px 42px; }
        .sideMenu { position: sticky; top: 18px; align-self: start; height: calc(100vh - 60px - 36px); max-height: calc(100vh - 60px - 36px); box-sizing: border-box; overflow-y: auto; padding: 16px 10px; border: 1px solid var(--color-border); border-radius: 16px; background: var(--color-surface); }
        .menuLabel { margin: 0 10px 12px; color: var(--color-text-muted); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .sideMenu nav { display: grid; gap: 5px; }
        .sideMenu button { width: 100%; padding: 10px 12px; border: 1px solid transparent; border-radius: 10px; background: transparent; color: var(--color-text-secondary); text-align: left; cursor: pointer; font: inherit; }
        .sideMenu button:hover, .sideMenu button.active { background: var(--color-primary); border-color: var(--color-primary); color: #111111; }
        .contentWrapper { min-width: 0; padding: 4px 0; }
        .contentWrapper .topicBody { max-height: 12000px; }
        .scrollTopButton { position: fixed; right: 24px; bottom: 24px; z-index: 10; width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid var(--color-border); border-radius: 50%; background: var(--color-surface); color: var(--color-text-primary); cursor: pointer; box-shadow: 0 8px 20px var(--color-shadow); }
        .scrollTopButton:hover { background: var(--color-primary); color: #111111; }
        .footerWrapper { flex-shrink: 0; }
        @media (max-width: 820px) { .workspaceLayout { grid-template-columns: 1fr; padding: 14px; } .sideMenu { position: static; height: auto; max-height: none; } .sideMenu nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .scrollTopButton { right: 16px; bottom: 16px; } }
    `},Cu={Wrapper:xe.header`
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
    `,Main:xe.div`
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
    `},tx="/cpp-core-notes/logo.png",nx=()=>{const[s,c]=me.useState(!1),[l,u]=me.useState("dark");me.useEffect(()=>{const B=localStorage.getItem("app-theme")||"dark";u(B),B==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),me.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const g=me.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{u(g)};return t.jsx(Cu.Wrapper,{children:t.jsx(Cu.Main,{children:t.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[t.jsxs("div",{className:"logoNameWrapper",children:[t.jsxs("div",{className:"logoWrapper",children:[!s&&t.jsx("div",{className:"logoSkeleton"}),t.jsx("img",{src:tx,alt:"cpp-core-notes",onLoad:()=>c(!0),style:{opacity:s?1:0}})]}),t.jsxs("div",{className:"nameWrapper",children:[t.jsx("div",{className:"title",children:"cpp-core-notes"}),t.jsx("div",{className:"subTitle",children:"At-a-glance cpp revision"})]})]}),t.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${g} theme`,title:`Switch to ${g}`,children:[t.jsx("span",{className:"icon",children:l==="light"?t.jsx(Hm,{}):t.jsx(Gm,{})}),t.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})};function ox(s){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(s)}function sx(s){return A({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(s)}function ix(s){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"},child:[]}]})(s)}const ax={Wrapper:xe.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 0 4px;
        border-top: 1px solid var(--color-border);
        font-size: 12px;
        color: var(--color-text-muted);

        .copyright {
            line-height: 1.6;
        }

        .copyright a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .copyright a:hover {
            color: var(--color-text-primary);
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 7px;
        }

        .links a {
            display: inline-grid;
            place-items: center;
            width: 30px;
            height: 30px;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-secondary);
            transition:
                color 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;
        }

        .links a:hover {
            color: var(--color-primary);
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 14%, transparent);
        }

        .links svg {
            width: 15px;
            height: 15px;
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;

            .links {
                justify-content: flex-start;
            }
        }
    `},lx=[{label:"Portfolio",href:"https://www.ashishranjan.net/",icon:Mm},{label:"GitHub",href:"https://github.com/a2rp",icon:Rm},{label:"CodePen",href:"https://codepen.io/ash1198",icon:ox},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:Wm},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:_m},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:sx},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:Um},{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:Om},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:Tm},{label:"Patreon",href:"https://www.patreon.com/a2rp",icon:Ym}],cx=()=>t.jsxs(ax.Wrapper,{children:[t.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," All rights reserved. By"," ",t.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),t.jsx("nav",{className:"links","aria-label":"Social and support links",children:lx.map(({label:s,href:c,icon:l})=>t.jsx("a",{href:c,target:c.startsWith("mailto:")?void 0:"_blank",rel:c.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":s,title:s,children:ur.createElement(l,{"aria-hidden":!0})},s))})]}),Eu={Wrapper:xe.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:xe.div`
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
    `},lp=()=>{const s="2026-10-02T13:40:43.242Z",c=new Date(s).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return t.jsx(Eu.Wrapper,{children:t.jsxs(Eu.Content,{children:[t.jsxs("div",{className:"top",children:[t.jsxs("div",{className:"badge",children:[t.jsx("span",{className:"badgeIcon",children:t.jsx(ze,{})}),"C++ core revision"]}),t.jsx("h2",{className:"heading",children:"About C++ Programming"}),t.jsx("p",{className:"sub",children:"A powerful, compiled language that blends low level memory control with object oriented and generic programming."})]}),t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTitle",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(Kr,{})}),"What is C++"]}),t.jsx("p",{className:"p",children:"C++ is a general purpose programming language created by Bjarne Stroustrup as an extension of C. It adds object oriented programming, templates, and a rich standard library while retaining low level control."})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardTitle",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(pr,{})}),"Why C++ matters"]}),t.jsx("p",{className:"p",children:"C++ is widely used in game engines, operating systems, embedded systems, and performance critical software. It allows precise memory control while supporting abstraction through classes and templates."})]}),t.jsxs("div",{className:"card wide",children:[t.jsxs("div",{className:"cardTitle",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(Lt,{})}),"About cpp-core-notes"]}),t.jsx("p",{className:"p",children:"The cpp-core-notes project is designed as a focused revision system. It organizes fundamentals, object oriented concepts, templates, STL, memory management, and modern C++ features into a structured single page reference. The goal is strong design thinking, resource safety, and deep understanding of how C++ programs execute."}),t.jsxs("div",{className:"meta",children:[t.jsxs("span",{className:"metaLeft",children:[t.jsx("span",{className:"metaIcon",children:t.jsx(Bu,{})}),t.jsx("span",{className:"metaLabel",children:"Last updated"})]}),t.jsx("span",{className:"metaValue",children:c})]})]})]})]})})},dx={Wrapper:xe.section`
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
    `},ux=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(dx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(ze,{})}),t.jsx("span",{className:"title",children:"C++ Fundamentals"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"C++ is a compiled language that gives you performance and control like C, but also adds modern features like classes, templates, and the Standard Template Library (STL). It is used for performance heavy software where you want both speed and clean program structure."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"What is C++"]}),t.jsx("p",{className:"p",children:"C++ is a general purpose programming language created by Bjarne Stroustrup. It extends C with object oriented programming, generic programming using templates, and a powerful standard library."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ps,{})}),"History of C++"]}),t.jsx("p",{className:"p",children:'C++ started as "C with Classes" in the early 1980s. Over time it evolved into modern C++ with features like smart pointers, move semantics, lambdas, and many improvements in newer standards.'})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"C vs C++"}),t.jsx("p",{className:"p",children:"C is mostly procedural and minimal. C++ supports both procedural and object oriented styles and provides more abstraction tools. C++ also adds references, function overloading, templates, exceptions, and STL containers."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"C focuses on functions and manual patterns"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"C++ adds classes, templates, and safer resource management patterns"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"C++ has STL containers and algorithms out of the box"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pr,{})}),"Compiled language concept"]}),t.jsx("p",{className:"p",children:"In C++, your source code is translated into machine code before running. The compiler checks syntax and types, generates object files, then the linker produces the final executable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - compile and run"}),t.jsx("pre",{className:"code",children:`g++ main.cpp -o app
./app

// output - depends on your program`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Structure of a C++ program"}),t.jsx("p",{className:"p",children:"A basic C++ program includes headers, uses namespaces (optional), has a main function, and contains statements or function calls. As projects grow, code is split into multiple .cpp and .h files."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - minimal C++ program"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int main() {
  std::cout << "Hello C++" << std::endl;
  return 0;
}

// output - Hello C++`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"main function"}),t.jsx("p",{className:"p",children:"main is the entry point. Program execution starts from main. Returning 0 indicates success."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - main return value"}),t.jsx("pre",{className:"code",children:`int main() {
  return 0; // success
}

// output - program exits successfully`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ls,{})}),"Header files"]}),t.jsx("p",{className:"p",children:"Header files provide declarations for functions, classes, and constants. You include them using #include. Standard headers like iostream, vector, and string are part of the C++ library. Your own headers usually use quotes."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - include standard and custom header"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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

// output - Hi`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx($m,{})}),"Standard library overview"]}),t.jsx("p",{className:"p",children:"The C++ standard library provides containers, algorithms, strings, streams, utilities, and more. STL is a big part of it and helps you write clean and fast code."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"iostream - input output streams"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"vector - dynamic array"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"string - std::string utilities"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"algorithm - sort, find, count"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"memory - smart pointers"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Compilation process"}),t.jsx("p",{className:"p",children:"C++ code goes through preprocess, compile, assemble, and link steps. Headers are expanded in preprocessing, then compilation produces object files, and linking produces the final executable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - see each step"}),t.jsx("pre",{className:"code",children:`// 1 - preprocess
g++ -E main.cpp -o main.i

// 2 - compile
g++ -S main.i -o main.s

// 3 - assemble
g++ -c main.s -o main.o

// 4 - link
g++ main.o -o app

// 5 - execute
./app`})]}),t.jsx("div",{className:"hint",children:'If you see "undefined reference" errors, it is usually a linking issue or missing object file or library.'})]})]})]})},px={Wrapper:xe.section`
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
    `},hx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(px.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(Ts,{})}),t.jsx("span",{className:"title",children:"Data Types and Variables"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"C++ is a strongly typed language. That means every variable has a type, and the type decides how much memory is used and what operations are allowed. Once you understand types, initialization, and scope, your programs become more predictable."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ts,{})}),"Primitive data types"]}),t.jsx("p",{className:"p",children:"Primitive types are built in. They include integers, floating point numbers, characters, and booleans. Size can vary by system, but the idea stays the same."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"int, short, long, long long"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"float, double, long double"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"char, wchar_t, char16_t, char32_t"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"bool"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - basic types"]}),t.jsx("pre",{className:"code",children:`int age = 20;
double price = 99.50;
char grade = 'A';
bool ok = true;

// output - variables stored with their types`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(el,{})}),"Type modifiers"]}),t.jsx("p",{className:"p",children:"Modifiers change range and signedness. The most common modifiers are signed, unsigned, short, and long."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - modifiers"]}),t.jsx("pre",{className:"code",children:`unsigned int count = 10;
long long big = 9000000000LL;
short small = 12;

// output - types with different ranges`})]}),t.jsx("div",{className:"hint",children:"unsigned types cannot store negative values, but they can store bigger positive values for the same size."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(cn,{})}),"Type casting"]}),t.jsx("p",{className:"p",children:"Casting converts one type to another. In C++, prefer explicit casts like static_cast to avoid accidental bugs."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - casting int to double"]}),t.jsx("pre",{className:"code",children:`int a = 5;
int b = 2;

double div1 = a / b; // integer division happens first
double div2 = static_cast<double>(a) / b;

 // div1 becomes 2
 // div2 becomes 2.5`})]}),t.jsx("div",{className:"hint",children:"If both operands are int, division is integer division. Cast at least one side to double for decimal results."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Pu,{})}),"auto keyword"]}),t.jsx("p",{className:"p",children:"auto lets the compiler deduce the type from the value on the right side. It is useful with long types like iterators, but still keeps strong typing."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - auto type deduction"]}),t.jsx("pre",{className:"code",children:`auto x = 10;      // x is int
auto y = 10.5;    // y is double
auto z = 'A';     // z is char

// output - types deduced at compile time`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Rs,{})}),"const correctness"]}),t.jsx("p",{className:"p",children:'const means "cannot be changed". It makes your code safer and clearer. Use const when a value should not change. In C++, const is a big part of writing clean APIs and avoiding accidental edits.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - const variable"]}),t.jsx("pre",{className:"code",children:`const int maxUsers = 100;
// maxUsers = 200; // error

// output - maxUsers stays fixed`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - const reference"]}),t.jsx("pre",{className:"code",children:`int n = 10;
const int& ref = n;
// ref = 20; // error, ref cannot change n through it

// output - safe read-only reference`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Variables and initialization styles"}),t.jsx("p",{className:"p",children:"C++ supports multiple ways to initialize variables. The modern recommended style is brace initialization because it avoids some narrowing conversions."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - initialization styles"]}),t.jsx("pre",{className:"code",children:`int a = 10;      // copy initialization
int b(10);        // direct initialization
int c{10};        // brace initialization (recommended)

// int d{10.5};   // error, prevents narrowing

// output - a, b, c are all 10`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pr,{})}),"Scope rules"]}),t.jsx("p",{className:"p",children:"Scope decides where a variable exists and can be used. Common scopes are block scope, function scope, class scope, and global scope."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - block scope"]}),t.jsx("pre",{className:"code",children:`int main() {
  int x = 10;

  if (true) {
    int x = 99; // different x inside block
    // output - inside x is 99
  }

  // output - outside x is 10
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"If you declare the same name inside a block, it shadows the outer variable."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(wm,{})}),"Storage classes"]}),t.jsx("p",{className:"p",children:"Storage classes control lifetime and linkage. In modern C++, some are less common, but still important to understand for reading older code and system projects."}),t.jsxs("div",{className:"miniGrid",children:[t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"static"}),t.jsx("p",{className:"p",children:"static inside a function keeps the variable alive across calls. static at global scope restricts visibility to the same file."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - static"}),t.jsx("pre",{className:"code",children:`int counter() {
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

// output - const object can update cache`})]})]})]}),t.jsx("div",{className:"hint",children:"In modern C++, focus most on const, static, and mutable. register is mostly historical and extern is mainly for multi-file programs."})]})]})]})},mx={Wrapper:xe.section`
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
    `},fx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(mx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(Ts,{})}),t.jsx("span",{className:"title",children:"Operators"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Operators are symbols that tell C++ to perform an action on values - like add, compare, assign, or work with bits. Learning operators properly makes your code shorter and more readable, and it helps you understand conditions, loops, and low level logic."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Bm,{})}),"Arithmetic operators"]}),t.jsx("p",{className:"p",children:"Used for basic math. Includes + - * / % and also increment and decrement."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - arithmetic"}),t.jsx("pre",{className:"code",children:`int a = 10;
int b = 3;

int sum = a + b;   // 13
int diff = a - b;  // 7
int mul = a * b;   // 30
int div = a / b;   // 3   (integer division)
int mod = a % b;   // 1

a++; // a becomes 11
b--; // b becomes 2

// output (values):
// sum=13 diff=7 mul=30 div=3 mod=1 a=11 b=2`})]}),t.jsx("div",{className:"hint",children:"Note - integer division drops the decimal part. For decimals use double or float."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(bm,{})}),"Relational operators"]}),t.jsx("p",{className:"p",children:"Used to compare two values. Result is a boolean (true or false)."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - comparison"}),t.jsx("pre",{className:"code",children:`int x = 5;
int y = 8;

bool a = (x < y);   // true
bool b = (x > y);   // false
bool c = (x == y);  // false
bool d = (x != y);  // true
bool e = (x <= 5);  // true
bool f = (y >= 10); // false

// output:
// a=true b=false c=false d=true e=true f=false`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(fn,{})}),"Logical operators"]}),t.jsx("p",{className:"p",children:"Used to combine conditions. && means AND, || means OR, and ! means NOT. These are common in if and loops."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - logical"}),t.jsx("pre",{className:"code",children:`int age = 20;
bool hasId = true;

bool allowed = (age >= 18) && hasId; // true

bool weekend = false;
bool holiday = true;

bool free = weekend || holiday; // true

bool notHoliday = !holiday; // false

// output:
// allowed=true free=true notHoliday=false`})]}),t.jsx("div",{className:"hint",children:"Short circuit behavior - in && if first is false, second is not checked. In || if first is true, second is not checked."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(io,{})}),"Bitwise operators"]}),t.jsx("p",{className:"p",children:"Works at the bit level. Useful for flags, masks, and performance oriented logic. Common operators are & | ^ ~ and shifts << >>."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - bitwise basics"}),t.jsx("pre",{className:"code",children:`int a = 5; // 0101
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
}`})]}),t.jsx("div",{className:"hint",children:"::value means global value. std::cout means cout inside std namespace."})]}),t.jsx("div",{className:"note",children:"Quick tip - avoid writing very complex expressions with many operators in one line. Add parentheses for clarity."})]})]})},xx={Wrapper:xe.section`
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
    `},gx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(xx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(io,{})}),t.jsx("span",{className:"title",children:"Control Flow"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Control flow decides how your program runs - which lines execute, how many times, and when to stop. In C++, you control decisions with if and switch, and repetition with loops like for and while."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ps,{})}),"if else"]}),t.jsx("p",{className:"p",children:"Use if else when you want to run code based on a condition that is true or false."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - basic if else"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Lu,{})}),"switch"]}),t.jsx("p",{className:"p",children:"Use switch when you have many fixed options based on one value. Do not forget break or execution will continue into the next case."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - switch"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(cn,{})}),"for"]}),t.jsx("p",{className:"p",children:"Use for when you know how many times you want to repeat. It has initialization, condition, and update in one line."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - for loop"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Qm,{})}),"break"]}),t.jsx("p",{className:"p",children:"break exits the nearest loop or switch immediately."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - break"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"Nested loops can become slow if both loops are big. If you see two loops, think about O(n^2)."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(cn,{})}),"Range based for loop"]}),t.jsx("p",{className:"p",children:"Range based for is a clean way to loop through arrays and containers like vector. It is safer and easier than manual indexing."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - range based for"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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

// output - same result, but more efficient`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xt,{})}),"Guard clauses"]}),t.jsx("p",{className:"p",children:"Guard clauses are early returns that handle invalid cases at the top. This reduces nesting and keeps code easier to read."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - guard clause vs nested if"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"Guard clauses are great for validation at the start of a function. Less nesting, more clarity."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ze,{})}),"Quick mental checklist"]}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use if else for decision logic"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use switch for many fixed cases"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use for when count is known"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use while when stopping condition is unknown"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use do while for at least one run"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use break and continue carefully"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Prefer range based for with containers"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use guard clauses to avoid deep nesting"]})]})]})]})]})},vx={Wrapper:xe.section`
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
    `},yx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(vx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(ze,{})}),t.jsx("span",{className:"title",children:"Functions"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"A function is a reusable block of code. In C++, functions also support features like overloading, default arguments, and references. Mastering functions is important because most real programs are built using small, well named functions."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(km,{})}),"Function declaration and definition"]}),t.jsx("p",{className:"p",children:"A declaration tells the compiler the function name, return type, and parameters. A definition contains the actual body. In small programs they can be in the same place, but in bigger projects declarations go into .h headers and definitions into .cpp files."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - declaration vs definition"}),t.jsx("pre",{className:"code",children:`#include <iostream>

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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ps,{})}),"Function overloading"]}),t.jsx("p",{className:"p",children:"Overloading means multiple functions can share the same name, as long as their parameter types or count are different. The compiler chooses the best match based on the arguments you pass."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - overloaded functions"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }

int main() {
  std::cout << add(2, 3) << std::endl;       // output - 5
  std::cout << add(2.5, 3.1) << std::endl;   // output - 5.6
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(fn,{})}),"Inline functions"]}),t.jsx("p",{className:"p",children:"inline suggests the compiler to replace the function call with the function body to reduce call overhead. Modern compilers decide this automatically, but inline is still used for small functions in headers."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - inline function"}),t.jsx("pre",{className:"code",children:`#include <iostream>

inline int square(int x) { return x * x; }

int main() {
  std::cout << square(4) << std::endl;
  // output - 16
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Inline is not a guarantee. It is a hint. The compiler may ignore it if the function is large or complex."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Lu,{})}),"Default arguments"]}),t.jsx("p",{className:"p",children:"Default arguments allow you to give a default value to a parameter. If the caller does not pass that argument, the default value is used."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - default parameter value"}),t.jsx("pre",{className:"code",children:`#include <iostream>

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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(cn,{})}),"Recursion"]}),t.jsx("p",{className:"p",children:"Recursion is when a function calls itself. It must have a base case to stop, otherwise it will run forever and crash due to stack overflow."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - factorial recursion"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int factorial(int n) {
  if (n <= 1) return 1;        // base case
  return n * factorial(n - 1); // recursive call
}

int main() {
  std::cout << factorial(5) << std::endl;
  // output - 120
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ru,{})}),"Function prototypes"]}),t.jsx("p",{className:"p",children:"A function prototype is a declaration placed before main so the compiler knows about the function before it is used. This is required if the function definition comes later in the file."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - prototype before main"}),t.jsx("pre",{className:"code",children:`#include <iostream>

int mul(int a, int b); // prototype

int main() {
  std::cout << mul(3, 4) << std::endl;
  // output - 12
  return 0;
}

int mul(int a, int b) {
  return a * b;
}`})]}),t.jsx("div",{className:"hint",children:"In real projects, prototypes are usually placed in header files and included where needed."})]})]})]})},jx={Wrapper:xe.section`
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
    `},Nx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(jx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(du,{})}),t.jsx("span",{className:"title",children:"Arrays and Strings"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Arrays store multiple values in contiguous memory. Strings in C++ can be handled in two major ways - old style C strings (char arrays) and modern std::string. For dynamic arrays, you usually use std::vector. For fixed size modern arrays, use std::array."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ts,{})}),"Static arrays"]}),t.jsx("p",{className:"p",children:"Static arrays have fixed size decided at compile time. They live on the stack (most common) and cannot grow or shrink."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - int array"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int a[5] = {10, 20, 30, 40, 50};

  cout << a[0] << endl; // output - 10
  cout << a[4] << endl; // output - 50
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Arrays do not know their own length. You must track size yourself or use std::array or std::vector."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(du,{})}),"Multidimensional arrays"]}),t.jsx("p",{className:"p",children:"A 2D array is like a table. Memory is still contiguous, but indexed using row and column."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - 2D array"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int m[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
  };

  cout << m[0][1] << endl; // output - 2
  cout << m[1][2] << endl; // output - 6
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"In function parameters, you must provide the second dimension size for raw 2D arrays."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(qm,{})}),"Character arrays"]}),t.jsx("p",{className:"p",children:"A character array is an array of chars. If it represents a C style string, it must end with a null character '\\\\0'. That null character tells where the string ends."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - char array basics"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  char x[4] = {'c', 'a', 't', '\\0'};
  cout << x << endl; // output - cat
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ja,{})}),"C style strings"]}),t.jsx("p",{className:"p",children:"C strings are char arrays with '\\\\0' at the end. They are fast but easy to mess up because you must manage sizes, copying, and bounds yourself."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - C string using cstring"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <cstring>
using namespace std;

int main() {
  char name[20] = "Ashish";

  cout << strlen(name) << endl; // output - 6
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Avoid unsafe functions like gets or strcpy without size checks. Prefer std::string in C++."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Lt,{})}),"std::string"]}),t.jsx("p",{className:"p",children:"std::string is the modern safe string type in C++. It manages memory automatically and supports many useful operations."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - std::string"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"Use std::array for fixed size and std::vector for variable size."})]})]})]})},bx={Wrapper:xe.section`
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
    `},wx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(bx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(Ja,{})}),t.jsx("span",{className:"title",children:"Pointers and References"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Pointers and references are core to C++. They control how you access memory and how you pass data efficiently. If you understand these concepts, you understand how C++ programs really work under the hood."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Km,{})}),"Pointer basics"]}),t.jsxs("p",{className:"p",children:["A pointer stores the memory address of another variable. You can dereference a pointer using ",t.jsx("code",{children:"*"})," to access or modify the value at that address."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - pointer basics"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"In C++, pointer arithmetic is safe only within the same array range. Going out of bounds causes undefined behavior."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ln,{})}),"Null pointer"]}),t.jsxs("p",{className:"p",children:["A null pointer means it points to nothing. In modern C++, use ",t.jsx("code",{children:"nullptr"})," instead of"," ",t.jsx("code",{children:"NULL"}),"or ",t.jsx("code",{children:"0"}),". Always check before dereferencing."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - nullptr"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int* p = nullptr;

  if (p == nullptr) {
    cout << "No memory assigned" << endl; // output - No memory assigned
  }

  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(zm,{})}),"References"]}),t.jsx("p",{className:"p",children:"A reference is an alias for an existing variable. It must be initialized and cannot be reseated to another variable later. References are commonly used for passing values without copying."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - reference alias"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int x = 10;
  int& r = x; // r is alias of x

  r = 99;
  cout << x << endl; // output - 99

  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Im,{})}),"Dynamic memory allocation - new and delete"]}),t.jsxs("p",{className:"p",children:[t.jsx("code",{children:"new"})," allocates memory on the heap and returns a pointer. ",t.jsx("code",{children:"delete"})," frees that memory. If you allocate an array with ",t.jsx("code",{children:"new[]"}),", you must free with ",t.jsx("code",{children:"delete[]"}),"."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - new and delete"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ln,{})}),"Dangling pointer"]}),t.jsx("p",{className:"p",children:"A dangling pointer points to memory that has already been freed or is no longer valid. Accessing it can crash your program or cause random bugs."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - dangling pointer problem"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int* p = new int(10);
  delete p;

  // p is now dangling
  // cout << *p << endl; // unsafe - undefined behavior

  p = nullptr; // fix - reset pointer
  cout << "Pointer cleared" << endl; // output - Pointer cleared
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mu,{})}),"Memory leaks"]}),t.jsx("p",{className:"p",children:"A memory leak happens when you allocate memory but never free it. Over time, your program uses more and more RAM. In C++, smart pointers solve most leak problems."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - leak"}),t.jsx("pre",{className:"code",children:`int* p = new int(5);
// delete p; // missing delete causes leak

// output - memory stays allocated until program ends`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xt,{})}),"Smart pointers"]}),t.jsx("p",{className:"p",children:"Smart pointers automatically manage memory using RAII. That means memory is freed automatically when the smart pointer goes out of scope."}),t.jsxs("div",{className:"sectionMini",children:[t.jsx("h4",{className:"h4",children:"unique_ptr"}),t.jsx("p",{className:"p",children:"Owns a resource exclusively. Cannot be copied. Can be moved."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - unique_ptr"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsx("div",{className:"hint",children:"Rule of thumb - prefer unique_ptr by default. Use shared_ptr only when multiple owners are truly needed."})]})]})]})},kx={Wrapper:xe.section`
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
    `},Sx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(kx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(Lt,{})}),t.jsx("span",{className:"title",children:"Object Oriented Programming"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:'Object Oriented Programming (OOP) is a way to design programs using "objects" that bundle data and behavior together. In C++, OOP helps you write structured, reusable code by modeling real world entities as classes.'})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Lt,{})}),"Classes and objects"]}),t.jsx("p",{className:"p",children:"A class is a blueprint. An object is an instance of a class. The class defines what data an object has and what it can do using member functions."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - class and object"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Rs,{})}),"Access specifiers"]}),t.jsx("p",{className:"p",children:"Access specifiers control what is visible outside the class. They are used to protect internal data and expose only what is needed."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"public - accessible from anywhere"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"private - accessible only inside the class"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"protected - accessible inside class and derived classes"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - public private protected"}),t.jsx("pre",{className:"code",children:`class Demo {
public:
  int a = 1;

private:
  int b = 2;

protected:
  int c = 3;
};

// output - outside code can access only a`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Dm,{})}),"Constructors"]}),t.jsx("p",{className:"p",children:"A constructor runs automatically when an object is created. It is used to initialize data members. Constructor name is same as class name and it has no return type."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - constructor"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Vm,{})}),"Destructors"]}),t.jsx("p",{className:"p",children:"A destructor runs automatically when an object is destroyed. It is used for cleanup, like releasing resources. Destructor name is ~ClassName."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - destructor"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xt,{})}),"Encapsulation"]}),t.jsx("p",{className:"p",children:"Encapsulation means hiding internal data and exposing controlled access through public methods. It prevents accidental misuse and keeps class logic consistent."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - encapsulation"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Abstraction"}),t.jsx("p",{className:"p",children:"Abstraction means showing only the necessary features and hiding the internal details. Users of a class care about what it does, not how it does it."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Public methods = interface"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Private data = hidden implementation details"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ps,{})}),"Inheritance"]}),t.jsx("p",{className:"p",children:'Inheritance allows a class to reuse and extend features of another class. The derived class "is a" specialized version of the base class.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - inheritance"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"This example uses compile time dispatch. For runtime dispatch, use virtual functions."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(fn,{})}),"Virtual functions"]}),t.jsx("p",{className:"p",children:"virtual enables runtime polymorphism. When you call a virtual function using a base pointer or reference, C++ chooses the derived implementation at runtime."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - virtual function"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Polymorphism"}),t.jsx("p",{className:"p",children:'Polymorphism means "many forms". In C++, it appears in two common ways:'}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Compile time polymorphism - function overloading, operator overloading"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Runtime polymorphism - virtual functions and overriding"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Zm,{})}),"Friend functions"]}),t.jsx("p",{className:"p",children:"A friend function can access private and protected members of a class. Use it only when needed, because it breaks strict encapsulation."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - friend function"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]})]})]})},Cx={Wrapper:xe.section`
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
    `},Ex=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(Cx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(pr,{})}),t.jsx("span",{className:"title",children:"Special Member Functions"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"In C++, copying and moving objects is a big deal because objects can own resources like heap memory, file handles, or sockets. The compiler can generate special functions for you, but when you manage resources manually you must define the right ones to avoid leaks, double free, and crashes."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(_u,{})}),"Copy constructor"]}),t.jsx("p",{className:"p",children:"Runs when you create a new object from an existing one. It should perform a deep copy when your class owns a resource."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - deep copy in copy constructor"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(cn,{})}),"Copy assignment operator"]}),t.jsx("p",{className:"p",children:"Runs when an existing object is assigned from another existing object. It must handle self assignment and should free old resources before copying new ones."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - copy assignment with self check"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:'Tip - a safer modern approach is "copy and swap", but for beginners this direct version is easier to understand.'})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(io,{})}),"Move constructor"]}),t.jsx("p",{className:"p",children:"Runs when you create a new object by taking resources from a temporary or an object you do not need anymore. It avoids deep copying by stealing the pointer and nulling the source."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - move constructor steals resource"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xt,{})}),"Rule of Three"]}),t.jsx("p",{className:"p",children:"If your class manages a resource manually and you define any one of these, you probably need all three - destructor, copy constructor, copy assignment operator."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Destructor"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Copy constructor"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Copy assignment operator"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Rule of Five"}),t.jsx("p",{className:"p",children:"In modern C++, if you manage resources manually and you implement copy operations, you should also consider move operations. That makes five special functions."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Destructor"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Copy constructor"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Copy assignment operator"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Move constructor"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Move assignment operator"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Rule of Zero"}),t.jsx("p",{className:"p",children:"Best modern practice - do not manually manage resources. Use standard library types like std::vector, std::string, and smart pointers. Then you usually do not need to write any special member functions because the defaults are safe."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - rule of zero with std::vector"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"If you can follow Rule of Zero, your code becomes safer and you avoid memory bugs automatically."})]}),t.jsxs("div",{className:"section last",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ze,{})}),"Quick mental checklist"]}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"If you use raw new or delete, be careful and follow Rule of Three or Rule of Five"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Prefer std::vector, std::string, and smart pointers whenever possible"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Moving steals resources and leaves the source valid but empty"]})]})]})]})]})},Tx={Wrapper:xe.section`
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
    `},zx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(Tx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(pr,{})}),t.jsx("span",{className:"title",children:"Templates and Generic Programming"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Templates let you write code once and reuse it for multiple types. This is called generic programming. Instead of writing separate functions for int, float, and double, you write one template that works for all."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ze,{})}),"Function templates"]}),t.jsx("p",{className:"p",children:"A function template is a blueprint for a function. The compiler creates the real function when you call it with a specific type."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - function template"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

template <typename T>
T add(T a, T b) {
  return a + b;
}

int main() {
  cout << add<int>(2, 3) << endl;      // output - 5
  cout << add<double>(2.5, 1.2) << endl; // output - 3.7
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"You can usually skip <int> because the compiler can deduce types from arguments."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Lt,{})}),"Class templates"]}),t.jsx("p",{className:"p",children:"A class template works the same way, but for classes. This is how containers like vector and pair are built."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - class template"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(el,{})}),"Template specialization"]}),t.jsx("p",{className:"p",children:"Specialization means you provide a custom version of a template for a specific type. Use this when one type needs different logic."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - specialization for bool"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"Specialization is useful but can get complex. Keep it limited to cases where you really need custom behavior."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(io,{})}),"Variadic templates"]}),t.jsx("p",{className:"p",children:"Variadic templates accept a variable number of template arguments. This is used in modern C++ libraries and helps create flexible utilities."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - print many values"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:'The "...rest" is called a parameter pack. It lets you pass many values without manually writing overloads.'})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pr,{})}),"Concepts basics"]}),t.jsx("p",{className:"p",children:"Concepts (C++20) allow you to put rules on templates. This makes errors clearer and prevents templates from being used with invalid types."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - concept style check (simple)"}),t.jsx("pre",{className:"code",children:`// requires C++20
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
}`})]}),t.jsx("div",{className:"hint",children:"Concepts make templates beginner friendly because errors become readable. If you are not using C++20, skip this part for now and come back later."})]})]})]})},Ix={Wrapper:xe.section`
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
    `},Bx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(Ix.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(Lt,{})}),t.jsx("span",{className:"title",children:"Standard Template Library - STL"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"STL is a big part of modern C++. It gives you ready to use data structures and algorithms. The main idea is simple - you store data in containers, you access them using iterators, and you process them using algorithms."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pr,{})}),"Containers"]}),t.jsx("p",{className:"p",children:"Containers store data. Choose the container based on how you add, remove, and search elements."}),t.jsxs("div",{className:"grid2",children:[t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"vector"}),t.jsx("div",{className:"miniText",children:"Dynamic array. Fast random access. Good default choice."})]}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"list"}),t.jsx("div",{className:"miniText",children:"Doubly linked list. Fast insert delete in middle. No random access."})]}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"deque"}),t.jsx("div",{className:"miniText",children:"Double ended queue. Fast push front and back. Random access supported."})]}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"set"}),t.jsx("div",{className:"miniText",children:"Sorted unique values. Fast search. Usually tree based."})]}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"map"}),t.jsx("div",{className:"miniText",children:"Key value store. Sorted by key. Fast lookup."})]}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"unordered_map"}),t.jsx("div",{className:"miniText",children:"Key value store using hashing. Average O(1) lookup."})]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - basic containers"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(cn,{})}),"Iterators"]}),t.jsx("p",{className:"p",children:"Iterators are like pointers that help you traverse containers. Most algorithms work with iterators instead of specific containers."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - iterate a vector"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> v = {10, 20, 30};

  for (auto it = v.begin(); it != v.end(); it++) {
    cout << *it << " ";
  }

  // output - 10 20 30
  return 0;
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(fn,{})}),"Algorithms"]}),t.jsx("p",{className:"p",children:"Algorithms are reusable functions that work on iterator ranges. Most live in the algorithm header."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"sort"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ze,{})}),"Lambda expressions"]}),t.jsx("p",{className:"p",children:"Lambdas are small anonymous functions. They are extremely common with STL algorithms."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - custom sort using lambda"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"In competitive programming, STL helps you write shorter and faster solutions. In real projects, STL improves safety and readability."})]})]})]})},_x={Wrapper:xe.section`
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
    `},Lx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(_x.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(ln,{})}),t.jsx("span",{className:"title",children:"Exception Handling"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Exceptions are a way to handle runtime errors without mixing error checks everywhere. Instead of returning error codes, you can throw an error and handle it at a higher level using try and catch."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xt,{})}),"try"]}),t.jsx("p",{className:"p",children:"Put code that might fail inside a try block. If an exception is thrown inside try, normal execution stops and control moves to the matching catch block."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - try with safe flow"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Au,{})}),"throw"]}),t.jsx("p",{className:"p",children:"throw is used to raise an exception. You can throw built in types like int or string, but in real projects you usually throw exception objects."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - throw on invalid input"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Use noexcept for functions that truly do not throw"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Helpful for move constructors and move assignment"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"If it throws anyway, program terminates"]})]})]})]})]})},Px={Wrapper:xe.section`
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
    `},Rx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(Px.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(Ls,{})}),t.jsx("span",{className:"title",children:"File Handling"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsxs("p",{className:"p",children:["File handling in C++ is done using stream classes from the standard library. The main header is"," ",t.jsx("code",{children:"fstream"}),". You read files using"," ",t.jsx("code",{children:"ifstream"})," and write files using"," ",t.jsx("code",{children:"ofstream"}),". Always check if the file opened successfully before reading or writing."]})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Cm,{})}),"fstream"]}),t.jsxs("p",{className:"p",children:[t.jsx("code",{children:"fstream"})," is the header that provides file stream classes. It contains ",t.jsx("code",{children:"ifstream"}),","," ",t.jsx("code",{children:"ofstream"}),", and ",t.jsx("code",{children:"fstream"}),"."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - include fstream"}),t.jsx("pre",{className:"code",children:`#include <fstream>

// output - fstream included`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Lm,{})}),"ifstream"]}),t.jsxs("p",{className:"p",children:[t.jsx("code",{children:"ifstream"})," is used for reading from files. You open a file path and then read using"," ",t.jsx("code",{children:"getline"})," or stream extraction"," ",t.jsx("code",{children:">>"}),"."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - open file for reading"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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

// output - File opened (if notes.txt exists)`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Pu,{})}),"ofstream"]}),t.jsxs("p",{className:"p",children:[t.jsx("code",{children:"ofstream"})," is used for writing to files. By default it overwrites the file content. If you want to append, use ",t.jsx("code",{children:"std::ios::app"}),"."]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - write to file"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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

// output - Report saved`})]}),t.jsx("div",{className:"hint",children:"Tip - if you forget to close, the destructor closes it when the stream object goes out of scope, but closing explicitly is a good habit."})]})]})]})},Mx={Wrapper:xe.section`
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
    `},Ax=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(Mx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(fn,{})}),t.jsx("span",{className:"title",children:"Advanced Concepts"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:'These concepts are what make C++ feel "serious". If you understand const correctness, RAII, object lifetime, and dispatch rules, you avoid most real world bugs and write code that behaves predictably.'})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xt,{})}),"Const correctness"]}),t.jsx("p",{className:"p",children:'const means "do not modify". It makes code safer and easier to reason about. Use const for values that should not change, and prefer const references to avoid copying. Also mark member functions const when they do not modify object state.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - const variables and const member function"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"If you cannot call a method on a const object, that method is missing const at the end."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Lt,{})}),"RAII concept"]}),t.jsx("p",{className:"p",children:"RAII means Resource Acquisition Is Initialization. Simple idea - acquire resources in constructors and release them in destructors. This guarantees cleanup even when exceptions happen. Smart pointers and STL containers follow RAII."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - RAII using unique_ptr"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <memory>

int main() {
  // memory is released automatically when ptr goes out of scope
  std::unique_ptr<int> ptr(new int(42));

  std::cout << *ptr << std::endl;

  // output - 42
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"RAII is the reason modern C++ avoids raw new and delete in application code."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Am,{})}),"Memory model basics"]}),t.jsx("p",{className:"p",children:"C++ programs use memory in different regions - stack, heap, global or static storage, and code segment. Understanding where data lives helps you avoid leaks and crashes. In multithreading, the C++ memory model also defines how threads see shared values."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Stack - automatic storage, fast, limited size"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Heap - dynamic allocation, flexible, must be managed"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Static storage - globals and static variables"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Code segment - compiled instructions"]})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pr,{})}),"Stack vs heap"]}),t.jsx("p",{className:"p",children:"Stack memory is allocated and freed automatically when scopes enter and exit. Heap memory is allocated dynamically and lives until you free it or it is managed by an RAII object."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - stack vs heap allocation"}),t.jsx("pre",{className:"code",children:`#include <iostream>
#include <memory>

int main() {
  int a = 5; // stack

  // heap via RAII smart pointer
  auto p = std::make_unique<int>(99);

  std::cout << a << " " << *p << std::endl;

  // output - 5 99
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"If you return a pointer or reference to a stack variable, it becomes a dangling reference. Big bug."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Bu,{})}),"Object lifetime"]}),t.jsx("p",{className:"p",children:"Object lifetime is the time between construction and destruction. Stack objects are destroyed automatically when leaving scope. Heap objects live until deleted or until their RAII owner is destroyed. Lifetime mistakes cause dangling pointers, use after free, or leaks."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - scope based destruction"}),t.jsx("pre",{className:"code",children:`#include <iostream>

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
}`})]}),t.jsx("div",{className:"hint",children:"Avoid putting your code in the global namespace in big projects. Namespaces keep things clean and modular."})]})]})]})},Ox={Wrapper:xe.section`
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
    `},Fx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(Ox.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(fn,{})}),t.jsx("span",{className:"title",children:"Modern C++ Features"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Modern C++ (C++11 and later) makes C++ safer and more expressive. The big idea is simple - write less boilerplate, avoid raw memory bugs, and let the compiler help you. These features are very common in real projects and interviews."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pr,{})}),"auto"]}),t.jsx("p",{className:"p",children:"auto lets the compiler infer the type from the initializer. It is useful with long STL types. Still, keep code readable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - auto with vector"}),t.jsx("pre",{className:"code",children:`#include <vector>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Pm,{})}),"Move semantics"]}),t.jsx("p",{className:"p",children:"Move semantics avoids expensive copies by transferring ownership of resources. std::move converts an lvalue into an rvalue so move operations can happen."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - std::move"}),t.jsx("pre",{className:"code",children:`#include <string>
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
}`})]}),t.jsx("div",{className:"hint",children:"Thread safety is a big topic. For shared data you will need mutex or other synchronization tools."})]})]})]})},Dx={Wrapper:xe.section`
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
    `},Wx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(Dx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(io,{})}),t.jsx("span",{className:"title",children:"Concurrency Basics"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("p",{className:"p",children:"Concurrency means doing multiple tasks at the same time. In C++, this usually means running code in multiple threads. It can improve performance, but it also brings new problems like race conditions and deadlocks."}),t.jsx("p",{className:"p",children:"The main rule - if multiple threads touch the same data, you must control access to that data."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"std::thread"]}),t.jsx("p",{className:"p",children:"std::thread starts a new thread of execution. After starting a thread, you should usually call join to wait for it to finish. If you do not join or detach a thread, the program can terminate."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - start and join a thread"]}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Rs,{})}),"Mutex"]}),t.jsx("p",{className:"p",children:"A mutex is a lock that ensures only one thread can enter a critical section at a time. Use it when multiple threads read and write the same shared variable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - protect shared counter with mutex"]}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"Manual lock and unlock works, but it is risky. If your code returns early or throws, unlock might not happen. That is why lock_guard is preferred."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(xt,{})}),"Lock guard"]}),t.jsx("p",{className:"p",children:"std::lock_guard automatically locks a mutex when created and unlocks it when it goes out of scope. This is safer because it prevents forgetting to unlock."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - safer locking using lock_guard"]}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"Atomic basics"]}),t.jsx("p",{className:"p",children:"An atomic variable supports thread safe read and write without a mutex for simple operations. Use atomics for counters, flags, and small shared state. For complex operations across multiple variables, a mutex is still needed."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - atomic counter"]}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ln,{})}),"Deadlock concept"]}),t.jsx("p",{className:"p",children:"A deadlock happens when two threads wait forever for each other to release locks. Most deadlocks happen when you lock multiple mutexes in different orders."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ze,{})}),"Example - common deadlock pattern"]}),t.jsx("pre",{className:"code",children:`// Thread 1 locks A then B
// Thread 2 locks B then A
// both can wait forever

// output - program may hang (deadlock)`})]}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Always lock mutexes in the same order"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Keep critical sections small"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Prefer lock_guard and scoped locking"]})]}),t.jsx("div",{className:"hint",children:"If you must lock multiple mutexes, use consistent lock ordering or use utilities like std::scoped_lock."})]})]})]})},Ux={Wrapper:xe.section`
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
    `},Hx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(Ux.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(xt,{})}),t.jsx("span",{className:"title",children:"Best Practices"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:'C++ gives you power, but it also punishes careless code. Best practices are basically rules that reduce bugs, prevent memory leaks, and keep code readable. Think of them as "defaults" you follow unless you have a strong reason not to.'})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pr,{})}),"Rule of Three Five Zero"]}),t.jsx("p",{className:"p",children:"If your class manages a resource (memory, file handle, socket), you must define the copy behavior properly. Modern C++ pushes you toward Rule of Zero by using RAII types like std::string and std::vector so you do not write custom copy or destroy code."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Rule of Three - destructor, copy constructor, copy assignment"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Rule of Five - add move constructor, move assignment"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Rule of Zero - use standard types, write none of them"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - Rule of Zero using std::string"}),t.jsx("pre",{className:"code",children:`#include <string>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Rs,{})}),"Avoid raw pointers"]}),t.jsx("p",{className:"p",children:"Raw pointers are fine for non owning references, but owning raw pointers lead to leaks and double delete problems. Prefer smart pointers for ownership and use references when possible."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - unique_ptr for ownership"}),t.jsx("pre",{className:"code",children:`#include <memory>
#include <iostream>

int main() {
  auto p = std::make_unique<int>(42);
  std::cout << *p << "\\n";
  // output - 42
  // memory is freed automatically
}`})]}),t.jsx("div",{className:"hint",children:'Use raw pointers mainly for "view" usage, not ownership. Ownership should be clear and automatic.'})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Em,{})}),"Use const correctly"]}),t.jsx("p",{className:"p",children:'const makes your code safer and clearer. It tells the compiler and the reader "this will not change". Use it for function parameters, member functions, and variables that should not be modified.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - const reference and const member function"}),t.jsx("pre",{className:"code",children:`#include <string>
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ls,{})}),"Header separation"]}),t.jsx("p",{className:"p",children:"Keep declarations in headers and implementations in .cpp files. This improves compile structure and makes modules reusable. Always use include guards or pragma once."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - header guard pattern"}),t.jsx("pre",{className:"code",children:`// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);

#endif

// output - prevents multiple include errors`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ln,{})}),"Defensive programming"]}),t.jsx("p",{className:"p",children:"Validate assumptions. Check pointers, indexes, and return values. Fail fast when inputs are invalid. This makes bugs easier to catch and prevents silent crashes."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - guard clause and bounds check"}),t.jsx("pre",{className:"code",children:`#include <vector>
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
}`})]}),t.jsx("div",{className:"hint",children:'Most C++ "random crashes" are actually undefined behavior hiding somewhere. Fixing UB fixes stability.'})]})]})]})},$x={Wrapper:xe.section`
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
    `},Vx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs($x.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(Xm,{})}),t.jsx("span",{className:"title",children:"Compilation and Build Systems"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"In C++, writing code is only half the story. The other half is building it correctly. You compile source files, link libraries, and produce an executable. Build tools like Make and CMake help you automate this, especially when projects grow."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Kr,{})}),"g++"]}),t.jsx("p",{className:"p",children:"g++ is the GNU C++ compiler. It compiles your .cpp files into an executable. For small programs you can compile in one command. For multiple files, you typically compile each file into an object file, then link them."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - compile and run"}),t.jsx("pre",{className:"code",children:`g++ main.cpp -o app
./app

// output - depends on your program`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - multiple files build"}),t.jsx("pre",{className:"code",children:`g++ -c main.cpp -o main.o
g++ -c utils.cpp -o utils.o
g++ main.o utils.o -o app

// output - executable created from multiple objects`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(el,{})}),"Compilation flags"]}),t.jsx("p",{className:"p",children:"Flags change how your code is compiled. Some flags enable warnings, some optimize performance, and some include debug info. Good defaults help you catch bugs early."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"-Wall -Wextra -Wpedantic - better warnings"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"-O0 -O1 -O2 -O3 - optimization level"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"-g - add debug symbols (for gdb)"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"-std=c++17 or -std=c++20 - choose language standard"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - solid beginner friendly build"}),t.jsx("pre",{className:"code",children:`g++ -std=c++17 -Wall -Wextra -Wpedantic -O0 -g main.cpp -o app

// output - app built with warnings + debug info`})]}),t.jsx("div",{className:"hint",children:"Using warnings is not optional. Warnings are the compiler trying to save you from future pain."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(ix,{})}),"Debug vs Release"]}),t.jsx("p",{className:"p",children:"Debug builds are made for development. They include debug symbols and usually no optimization, so stepping through code is easy. Release builds are optimized for speed and smaller binaries, used for final deployment."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - debug build"}),t.jsx("pre",{className:"code",children:`g++ -std=c++17 -O0 -g main.cpp -o app_debug
// output - easier debugging, slower runtime`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - release build"}),t.jsx("pre",{className:"code",children:`g++ -std=c++17 -O2 main.cpp -o app_release
// output - faster runtime, harder debugging`})]}),t.jsx("div",{className:"hint",children:"Typical habit - develop in Debug, test and ship in Release."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ru,{})}),"Static vs dynamic linking"]}),t.jsx("p",{className:"p",children:"Linking means connecting your object files with library code. Static linking copies library code into your executable. Dynamic linking keeps libraries separate and loads them at runtime."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Static linking - bigger executable, fewer runtime dependencies"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"Dynamic linking - smaller executable, needs shared libraries installed"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - static linking idea"}),t.jsx("pre",{className:"code",children:`// concept example (flags differ by system and libraries)
// g++ main.cpp -static -o app

// output - binary tries to include needed libs inside`})]}),t.jsx("div",{className:"hint",children:"In real projects, you decide this based on deployment needs - portability vs size and updates."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ls,{})}),"Makefile basics"]}),t.jsx("p",{className:"p",children:"Make is a build tool that uses a Makefile to automate compilation. It rebuilds only what changed. You define targets, dependencies, and commands. This saves time for multi file projects."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - tiny Makefile"}),t.jsx("pre",{className:"code",children:`# Makefile
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

# output - run "make" to build, "make clean" to cleanup`})]}),t.jsx("div",{className:"hint",children:"Tabs matter in Makefiles. Commands under targets usually must start with a tab."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pr,{})}),"CMake basics"]}),t.jsx("p",{className:"p",children:"CMake is a cross platform build system generator. You write a CMakeLists.txt file describing your project. CMake then generates platform specific build files like Makefiles or Visual Studio projects."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - minimal CMakeLists.txt"}),t.jsx("pre",{className:"code",children:`# CMakeLists.txt
cmake_minimum_required(VERSION 3.16)
project(MyApp)

set(CMAKE_CXX_STANDARD 17)
add_executable(app main.cpp utils.cpp)

# output - generates build config for your platform`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - build with CMake"}),t.jsx("pre",{className:"code",children:`mkdir build
cd build
cmake ..
cmake --build .

# output - app built inside build folder`})]}),t.jsx("div",{className:"hint",children:"Real world C++ projects commonly use CMake because it scales well and works across OS and IDEs."})]})]})]})},Qx={Wrapper:xe.section`
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
    `},Yx=()=>{const[s,c]=me.useState(!1),l=()=>c(u=>!u);return t.jsxs(Qx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Pe,{}):t.jsx(Re,{})}),t.jsx("span",{className:"icon",children:t.jsx(ln,{})}),t.jsx("span",{className:"title",children:"Common Pitfalls"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"C++ is powerful, but it can punish careless code. These are classic pitfalls that show up in interviews and real projects. Learn the pattern, learn the fix, and you avoid hours of debugging pain."})}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pr,{})}),"Object slicing"]}),t.jsx("p",{className:"p",children:'Object slicing happens when a derived object is copied into a base object by value. Only the base part is kept, and the derived part is "sliced off". Fix it by using references or pointers for polymorphism.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - slicing vs no slicing"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"If you want runtime polymorphism, avoid passing or storing polymorphic objects by value."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(_u,{})}),"Shallow copy vs deep copy"]}),t.jsx("p",{className:"p",children:"Shallow copy copies pointer addresses, not the data they point to. If two objects point to the same heap memory, you can get double free or unexpected changes. Deep copy allocates new memory and copies the actual content."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - shallow copy problem"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"If your class owns memory or resources, learn the Rule of Three and Rule of Five."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mu,{})}),"Memory leaks"]}),t.jsx("p",{className:"p",children:"A memory leak happens when you allocate memory but never release it. Over time, your program consumes more memory. Fix it by using delete, or better - use smart pointers and RAII so memory is freed automatically."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - leak vs safe"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"Prefer smart pointers for ownership. Use raw pointers only for non-owning references."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ja,{})}),"Dangling references"]}),t.jsx("p",{className:"p",children:"A dangling reference happens when a reference or pointer points to memory that is no longer valid. Common cause - returning reference to a local variable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - returning local reference (bad)"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"Return by value when you can. Modern C++ optimizes returns very well."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(pr,{})}),"Multiple inheritance diamond problem"]}),t.jsx("p",{className:"p",children:"In multiple inheritance, a class can inherit the same base through two paths, causing duplicate base members and ambiguity. Use virtual inheritance to solve it."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - diamond and virtual inheritance"}),t.jsx("pre",{className:"code",children:`#include <iostream>
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
}`})]}),t.jsx("div",{className:"hint",children:"Multiple inheritance is rare in most codebases. Prefer composition unless there is a strong reason."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Fm,{})}),"Undefined behavior"]}),t.jsx("p",{className:"p",children:"Undefined behavior means the C++ standard does not define what happens. Your program may work, crash, or behave differently on another machine. Common causes include using uninitialized variables, out of bounds access, double delete, and use-after-free."}),t.jsxs("div",{className:"codeBlock",children:[t.jsx("div",{className:"codeTop",children:"Example - out of bounds access (bad)"}),t.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  int a[3] = {1, 2, 3};

  // undefined behavior - out of bounds
  // cout << a[3] << "\\n";

  cout << "Avoid out of bounds access\\n";
  // output - Avoid out of bounds access
  return 0;
}`})]}),t.jsx("div",{className:"hint",children:"Use bounds checked containers when possible. Keep builds with warnings enabled and use sanitizers during learning."})]}),t.jsxs("div",{className:"endNote",children:[t.jsx("span",{className:"endIcon",children:t.jsx(Au,{})}),"Fixing these pitfalls makes your C++ code stable and interview safe."]})]})]})},Tu=[["about","Overview",lp],["fundamentals","C++ Fundamentals",ux],["types","Data Types",hx],["operators","Operators",fx],["control","Control Flow",gx],["functions","Functions",yx],["arrays","Arrays and Strings",Nx],["pointers","Pointers and References",wx],["oop","OOP Basics",Sx],["members","Special Member Functions",Ex],["templates","Templates",zx],["stl","STL Basics",Bx],["exceptions","Exception Handling",Lx],["files","File Handling",Rx],["advanced","Advanced Concepts",Ax],["modern","Modern C++",Fx],["concurrency","Concurrency",Wx],["best","Best Practices",Hx],["build","Build Systems",Vx],["pitfalls","Common Pitfalls",Yx]],Gx=()=>{var g;const[s,c]=me.useState("about"),l=me.useRef(null),u=((g=Tu.find(([j])=>j===s))==null?void 0:g[2])||lp;return me.useEffect(()=>{var j;(j=l.current)==null||j.scrollTo({top:0,behavior:"auto"}),requestAnimationFrame(()=>{var S,B;return(B=(S=l.current)==null?void 0:S.querySelector('[aria-expanded="false"]'))==null?void 0:B.click()})},[s]),t.jsxs($a.Wrapper,{children:[t.jsx($a.Header,{children:t.jsx(nx,{})}),t.jsxs($a.Main,{ref:l,children:[t.jsxs("div",{className:"workspaceLayout",children:[t.jsxs("aside",{className:"sideMenu","aria-label":"C++ topics",children:[t.jsx("p",{className:"menuLabel",children:"Study guide"}),t.jsx("nav",{children:Tu.map(([j,S])=>t.jsx("button",{type:"button",className:s===j?"active":"",onClick:()=>c(j),children:S},j))})]}),t.jsx("section",{className:"contentWrapper","aria-live":"polite",children:t.jsx(u,{})})]}),t.jsx("button",{type:"button",className:"scrollTopButton","aria-label":"Scroll content to top",title:"Scroll to top",onClick:()=>{var j;return(j=l.current)==null?void 0:j.scrollTo({top:0,behavior:"smooth"})},children:t.jsx(Sm,{})}),t.jsx("div",{className:"footerWrapper",children:t.jsx(cx,{})})]})]})};mm.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(Gx,{})}));
